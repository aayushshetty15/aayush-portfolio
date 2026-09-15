import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  TECH_SKILLS,
  TechSkillItem,
  createTechSphereTexture,
} from '@/utils/techSphereTextures';

interface SphereBody {
  mesh: THREE.Mesh;
  skill?: TechSkillItem;
  radius: number;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  origPos: THREE.Vector3;
  origRot: { x: number; y: number };
  isAccent?: boolean;
}

export default function TechStack3DCluster() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkillName, setHoveredSkillName] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const isMobile = width < 640;
    const isTablet = width < 1024;
    camera.position.z = isMobile ? 12 : isTablet ? 10.5 : 9.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Cluster pivot for user rotation
    const clusterGroup = new THREE.Group();
    scene.add(clusterGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    mainKeyLight.position.set(6, 8, 8);
    scene.add(mainKeyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.4);
    rimLight.position.set(-8, -4, -6);
    scene.add(rimLight);

    const softFillLight = new THREE.DirectionalLight(0x60a5fa, 0.6);
    softFillLight.position.set(-6, 4, 6);
    scene.add(softFillLight);

    // Violet accent light for right edge glow
    const purpleLight = new THREE.PointLight(0xc084fc, 3.5, 12);
    scene.add(purpleLight);

    // Sphere meshes & bodies
    const textures: THREE.CanvasTexture[] = [];
    const sphereBodies: SphereBody[] = [];
    const baseRadius = isMobile ? 0.72 : 0.88;
    const sphereGeo = new THREE.SphereGeometry(1, 48, 48);

    // Initial cluster positions
    TECH_SKILLS.forEach((skill, idx) => {
      const texture = createTechSphereTexture(skill);
      textures.push(texture);

      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.16,
        metalness: 0.08,
        bumpScale: 0.02,
      });

      const radius = baseRadius * (skill.name === 'TypeScript' || skill.name === 'React' ? 1.08 : 0.96);
      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.scale.setScalar(radius);

      // Fibonacci sphere packing for tight aesthetic cluster
      const phi = Math.acos(-1 + (2 * idx) / TECH_SKILLS.length);
      const theta = Math.sqrt(TECH_SKILLS.length * Math.PI) * phi;
      const spread = isMobile ? 1.55 : 1.95;

      const initX = spread * Math.sin(phi) * Math.cos(theta);
      const initY = spread * Math.sin(phi) * Math.sin(theta);
      const initZ = spread * Math.cos(phi) * 0.7;

      mesh.position.set(initX, initY, initZ);
      const initRotY = (idx * Math.PI) / 3.5;
      const initRotX = ((idx % 3) - 1) * 0.25;
      mesh.rotation.y = initRotY;
      mesh.rotation.x = initRotX;

      clusterGroup.add(mesh);

      sphereBodies.push({
        mesh,
        skill,
        radius,
        pos: new THREE.Vector3(initX, initY, initZ),
        vel: new THREE.Vector3(),
        origPos: new THREE.Vector3(initX, initY, initZ),
        origRot: { x: initRotX, y: initRotY },
      });
    });

    // Glowing lavender accent ball
    const accentRadius = baseRadius * 0.42;
    const accentMat = new THREE.MeshStandardMaterial({
      color: 0xd8b4fe,
      emissive: 0xc084fc,
      emissiveIntensity: 0.85,
      roughness: 0.2,
      metalness: 0.1,
    });
    const accentMesh = new THREE.Mesh(sphereGeo, accentMat);
    accentMesh.scale.setScalar(accentRadius);
    const accentInitPos = new THREE.Vector3(2.35, -0.55, 0.45);
    accentMesh.position.copy(accentInitPos);
    clusterGroup.add(accentMesh);

    sphereBodies.push({
      mesh: accentMesh,
      radius: accentRadius,
      pos: accentInitPos.clone(),
      vel: new THREE.Vector3(),
      origPos: accentInitPos.clone(),
      origRot: { x: 0, y: 0 },
      isAccent: true,
    });

    // Raycasting & Pointer Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-9999, -9999);
    const prevMouseWorld = new THREE.Vector3();
    const mouseWorld = new THREE.Vector3();
    const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    let isDraggingSphere = false;
    let isRotatingCluster = false;
    let draggedBody: SphereBody | null = null;
    const dragOffset = new THREE.Vector3();
    let prevScreenPos = { x: 0, y: 0 };
    let rotVelocityX = 0;
    let rotVelocityY = 0.002; // Soft ambient spin
    let hoveredBody: SphereBody | null = null;

    const handlePointerDown = (e: PointerEvent) => {
      prevScreenPos = { x: e.clientX, y: e.clientY };

      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / height) * 2 + 1;

      mouse.x = nx;
      mouse.y = ny;

      // Project into 3D world space
      prevMouseWorld.copy(mouseWorld);
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(mousePlane, mouseWorld);

      // Raycast against spheres to check if tapped/dragged directly
      const intersects = raycaster.intersectObjects(sphereBodies.map((b) => b.mesh));

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const hitBody = sphereBodies.find((b) => b.mesh === hitMesh);

        if (hitBody) {
          draggedBody = hitBody;
          isDraggingSphere = true;
          isRotatingCluster = false;
          container.style.cursor = 'grabbing';

          if (hitBody.skill) {
            setHoveredSkillName(hitBody.skill.name);
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = window.setTimeout(() => {
              setHoveredSkillName(null);
            }, 2500);
          }

          // Compute drag offset in local cluster space
          const localMouse = mouseWorld.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), -clusterGroup.rotation.y);
          dragOffset.copy(hitBody.pos).sub(localMouse);
          return;
        }
      }

      // Touched background: rotate cluster
      draggedBody = null;
      isDraggingSphere = false;
      isRotatingCluster = true;
      container.style.cursor = 'grab';
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / height) * 2 + 1;

      mouse.x = nx;
      mouse.y = ny;

      // Update projected 3D mouse point
      prevMouseWorld.copy(mouseWorld);
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(mousePlane, mouseWorld);

      const dx = e.clientX - prevScreenPos.x;
      const dy = e.clientY - prevScreenPos.y;
      prevScreenPos = { x: e.clientX, y: e.clientY };

      if (isDraggingSphere && draggedBody) {
        // Drag the selected sphere in local cluster space
        const localMouse = mouseWorld.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), -clusterGroup.rotation.y);
        const targetPos = localMouse.add(dragOffset);
        targetPos.z = THREE.MathUtils.clamp(targetPos.z, -1.8, 1.8);

        const prevPos = draggedBody.pos.clone();
        draggedBody.pos.lerp(targetPos, 0.42);
        draggedBody.vel.copy(draggedBody.pos).sub(prevPos);
      } else if (isRotatingCluster) {
        // Drag background to rotate cluster
        rotVelocityY = dx * 0.005;
        rotVelocityX = dy * 0.005;
      } else {
        // Desktop hover detection
        const intersects = raycaster.intersectObjects(sphereBodies.map((b) => b.mesh));
        if (intersects.length > 0) {
          const hitMesh = intersects[0].object as THREE.Mesh;
          const hitBody = sphereBodies.find((b) => b.mesh === hitMesh);
          if (hitBody) {
            hoveredBody = hitBody;
            if (hitBody.skill) {
              setHoveredSkillName(hitBody.skill.name);
            }
            container.style.cursor = 'grab';
          }
        } else {
          hoveredBody = null;
          setHoveredSkillName(null);
          container.style.cursor = 'default';
        }
      }
    };

    const handlePointerUp = () => {
      if (draggedBody) {
        // Fling momentum on release
        draggedBody.vel.multiplyScalar(1.2);
        draggedBody = null;
      }
      isDraggingSphere = false;
      isRotatingCluster = false;
      hoveredBody = null;
      container.style.cursor = 'default';
    };

    const handlePointerLeave = () => {
      if (draggedBody) {
        draggedBody.vel.multiplyScalar(1.2);
        draggedBody = null;
      }
      isDraggingSphere = false;
      isRotatingCluster = false;
      hoveredBody = null;
      setHoveredSkillName(null);
      mouse.set(-9999, -9999);
      container.style.cursor = 'default';
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointerleave', handlePointerLeave);

    // Physics Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle cluster rotation
      if (!isDragging) {
        rotVelocityY += (0.0018 - rotVelocityY) * 0.03;
        rotVelocityX *= 0.92;
      }
      clusterGroup.rotation.y += rotVelocityY;
      clusterGroup.rotation.x += rotVelocityX;
      clusterGroup.rotation.x = Math.max(-0.5, Math.min(0.5, clusterGroup.rotation.x));

      // Purple point light follows accent sphere
      const accent = sphereBodies.find((b) => b.isAccent);
      if (accent) {
        const worldPos = accent.pos.clone().applyMatrix4(clusterGroup.matrixWorld);
        purpleLight.position.copy(worldPos);
      }

      const n = sphereBodies.length;

      // 1. Individual sphere physics: spring return to origPos
      for (let i = 0; i < n; i++) {
        const b = sphereBodies[i];

        // While this sphere is actively being dragged by user, don't apply return spring
        if (b === draggedBody) {
          continue;
        }

        // Subtle zero-g breath
        const breath = Math.sin(elapsed * 1.5 + i * 0.8) * 0.0012;
        b.vel.y += breath;

        // RESTORATION SPRING: pulls sphere back to its exact origPos after a few seconds
        const returnSpring = 0.035;
        b.vel.x += (b.origPos.x - b.pos.x) * returnSpring;
        b.vel.y += (b.origPos.y - b.pos.y) * returnSpring;
        b.vel.z += (b.origPos.z - b.pos.z) * returnSpring;

        // Smooth physical damping
        b.vel.multiplyScalar(0.92);
        b.pos.add(b.vel);
      }

      // 2. PAIRWISE COLLISION RESOLUTION
      // When a sphere is dragged into others, it forcefully pushes & disperses them
      const iterations = 4;
      for (let iter = 0; iter < iterations; iter++) {
        for (let i = 0; i < n; i++) {
          const b1 = sphereBodies[i];
          for (let j = i + 1; j < n; j++) {
            const b2 = sphereBodies[j];

            const dx = b2.pos.x - b1.pos.x;
            const dy = b2.pos.y - b1.pos.y;
            const dz = b2.pos.z - b1.pos.z;
            const distSq = dx * dx + dy * dy + dz * dz;
            const minDist = b1.radius + b2.radius;

            if (distSq < minDist * minDist && distSq > 0.00001) {
              const dist = Math.sqrt(distSq);
              const overlap = minDist - dist;
              const nx = dx / dist;
              const ny = dy / dist;
              const nz = dz / dist;

              if (b1 === draggedBody) {
                // b1 is held by user: knocks b2 away to disperse it
                b2.pos.x += nx * overlap;
                b2.pos.y += ny * overlap;
                b2.pos.z += nz * overlap;

                const hitSpeed = Math.max(b1.vel.length(), 0.045);
                b2.vel.x += nx * hitSpeed * 1.5;
                b2.vel.y += ny * hitSpeed * 1.5;
                b2.vel.z += nz * hitSpeed * 1.5;
              } else if (b2 === draggedBody) {
                // b2 is held by user: knocks b1 away to disperse it
                b1.pos.x -= nx * overlap;
                b1.pos.y -= ny * overlap;
                b1.pos.z -= nz * overlap;

                const hitSpeed = Math.max(b2.vel.length(), 0.045);
                b1.vel.x -= nx * hitSpeed * 1.5;
                b1.vel.y -= ny * hitSpeed * 1.5;
                b1.vel.z -= nz * hitSpeed * 1.5;
              } else {
                // Collision between two free spheres
                const halfOverlap = overlap * 0.5;
                b1.pos.x -= nx * halfOverlap;
                b1.pos.y -= ny * halfOverlap;
                b1.pos.z -= nz * halfOverlap;

                b2.pos.x += nx * halfOverlap;
                b2.pos.y += ny * halfOverlap;
                b2.pos.z += nz * halfOverlap;

                const relVel = (b2.vel.x - b1.vel.x) * nx + (b2.vel.y - b1.vel.y) * ny + (b2.vel.z - b1.vel.z) * nz;
                if (relVel < 0) {
                  const impulse = relVel * 0.6;
                  b1.vel.x += nx * impulse;
                  b1.vel.y += ny * impulse;
                  b1.vel.z += nz * impulse;

                  b2.vel.x -= nx * impulse;
                  b2.vel.y -= ny * impulse;
                  b2.vel.z -= nz * impulse;
                }
              }
            }
          }
        }
      }

      // 3. Update mesh positions and restore rotation
      for (let i = 0; i < n; i++) {
        const b = sphereBodies[i];
        b.mesh.position.copy(b.pos);

        // Gentle tumble from velocity
        b.mesh.rotation.x += b.vel.y * 0.3;
        b.mesh.rotation.y += b.vel.x * 0.3;

        // Restore front-facing orientation smoothly
        const distFromOrig = b.pos.distanceTo(b.origPos);
        if (distFromOrig < 0.25) {
          b.mesh.rotation.x += (b.origRot.x - b.mesh.rotation.x) * 0.05;
          b.mesh.rotation.y += (b.origRot.y - b.mesh.rotation.y) * 0.05;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;

      camera.aspect = width / height;
      const isMob = width < 640;
      const isTab = width < 1024;
      camera.position.z = isMob ? 12 : isTab ? 10.5 : 9.5;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(animId);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

      textures.forEach((t) => t.dispose());
      sphereGeo.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* 3D Container Viewport */}
      <div
        ref={containerRef}
        className="relative mx-auto h-[480px] sm:h-[580px] md:h-[680px] lg:h-[720px] w-full max-w-6xl touch-none cursor-grab active:cursor-grabbing"
      >
        {/* BIG BOLD TITLE BEHIND THE 3D SPHERES (Matching Reference Image) */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <h2
            className="
              text-center font-black tracking-tight text-white/90
              text-5xl sm:text-7xl md:text-8xl lg:text-9xl
              opacity-90 select-none
            "
            style={{
              textShadow: '0 0 60px rgba(255, 255, 255, 0.1)',
              letterSpacing: '-0.03em',
            }}
          >
            MY TECH STACK
          </h2>
        </div>

        {/* Ambient Radial Glow Behind Balls */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full blur-[120px]"
          style={{ backgroundColor: 'rgba(229, 9, 20, 0.12)' }}
        />

        {/* Violet Edge Glow corresponding to accent ball */}
        <div
          className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-44 w-44 rounded-full blur-[90px]"
          style={{ backgroundColor: 'rgba(192, 132, 252, 0.22)' }}
        />

        {/* Subtle Tech Name Indicator on Hover (no percentages) */}
        {hoveredSkillName && (
          <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 z-20">
            <div className="rounded-full glass border border-themed px-4 py-1.5 text-xs font-semibold text-primary shadow-xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
              {hoveredSkillName}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
