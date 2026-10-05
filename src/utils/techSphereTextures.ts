import * as THREE from 'three';

export interface TechSkillItem {
  name: string;
  category: string;
  level: number;
  color: string;
  iconType: 'ts' | 'react' | 'next' | 'express' | 'python' | 'tailwind' | 'node' | 'js' | 'mongodb' | 'firebase' | 'git' | 'html' | 'css' | 'php' | 'mysql' | 'generic';
}

export const TECH_SKILLS: TechSkillItem[] = [
  { name: 'TypeScript', category: 'Programming Languages', level: 90, color: '#3178C6', iconType: 'ts' },
  { name: 'React', category: 'Frameworks & Libraries', level: 90, color: '#61DAFB', iconType: 'react' },
  { name: 'Next.js', category: 'Frameworks & Libraries', level: 85, color: '#000000', iconType: 'next' },
  { name: 'Express.js', category: 'Frameworks & Libraries', level: 86, color: '#252525', iconType: 'express' },
  { name: 'Node.js', category: 'Frameworks & Libraries', level: 88, color: '#68A063', iconType: 'node' },
  { name: 'Python', category: 'Programming Languages', level: 80, color: '#3776AB', iconType: 'python' },
  { name: 'JavaScript', category: 'Programming Languages', level: 90, color: '#F7DF1E', iconType: 'js' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', level: 85, color: '#38BDF8', iconType: 'tailwind' },
  { name: 'MongoDB', category: 'Databases', level: 88, color: '#47A248', iconType: 'mongodb' },
  { name: 'MySQL', category: 'Databases', level: 85, color: '#00758F', iconType: 'mysql' },
  { name: 'Firebase', category: 'Databases', level: 75, color: '#FFCA28', iconType: 'firebase' },
  { name: 'Git & GitHub', category: 'Tools & Platforms', level: 88, color: '#F05032', iconType: 'git' },
  { name: 'HTML5', category: 'Programming Languages', level: 95, color: '#E34F26', iconType: 'html' },
  { name: 'CSS3', category: 'Programming Languages', level: 90, color: '#1572B6', iconType: 'css' },
  { name: 'PHP', category: 'Programming Languages', level: 82, color: '#777BB4', iconType: 'php' },
];

/**
 * Creates a high-resolution 1024x512 CanvasTexture for a 3D sphere.
 * The logo is drawn cleanly on the equator on both front and back faces.
 */
export function createTechSphereTexture(skill: TechSkillItem): THREE.CanvasTexture {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  // Pearl white background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);

  // Draw logo on front (x = 512) and back (x = 0 / 1024)
  drawLogoAt(ctx, skill, 512, 256, 170);
  drawLogoAt(ctx, skill, 0, 256, 170);
  drawLogoAt(ctx, skill, 1024, 256, 170);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;

  return texture;
}

function drawLogoAt(
  ctx: CanvasRenderingContext2D,
  skill: TechSkillItem,
  cx: number,
  cy: number,
  size: number
) {
  ctx.save();
  ctx.translate(cx, cy);

  switch (skill.iconType) {
    case 'ts': {
      // Blue rounded badge with white "TS"
      const s = size * 0.95;
      const r = s * 0.2;
      ctx.fillStyle = '#3178C6';
      drawRoundedRect(ctx, -s / 2, -s / 2, s, s, r);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `900 ${s * 0.52}px "Inter", "Segoe UI", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('TS', 0, 4);
      break;
    }

    case 'react': {
      // Cyan React atom
      ctx.strokeStyle = '#61DAFB';
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';

      // 3 ellipses rotated at 0, 60, 120 deg
      for (let angle = 0; angle < 180; angle += 60) {
        ctx.save();
        ctx.rotate((angle * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.55, size * 0.22, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Center nucleus
      ctx.fillStyle = '#61DAFB';
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Text below
      ctx.fillStyle = '#4fa8c7';
      ctx.font = `700 ${size * 0.2}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('React', 0, size * 0.45);
      break;
    }

    case 'next': {
      // Next.js badge: black circle or stylish "NEXT.js"
      const r = size * 0.48;
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();

      // Stylized N logo inside
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-r * 0.4, r * 0.45);
      ctx.lineTo(-r * 0.4, -r * 0.45);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-r * 0.4, -r * 0.45);
      ctx.lineTo(r * 0.35, r * 0.45);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(r * 0.35, r * 0.45);
      ctx.lineTo(r * 0.35, -r * 0.15);
      ctx.stroke();

      // Small Next.js label
      ctx.fillStyle = '#111111';
      ctx.font = `800 ${size * 0.18}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('NEXT.js', 0, size * 0.62);
      break;
    }

    case 'express': {
      // "ex" styled minimalist typography
      ctx.fillStyle = '#1a1a1a';
      ctx.font = `italic 800 ${size * 0.55}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('ex', -6, -4);

      ctx.fillStyle = '#666666';
      ctx.font = `600 ${size * 0.18}px "Inter", sans-serif`;
      ctx.fillText('express', 0, size * 0.38);
      break;
    }

    case 'python': {
      // Yellow and blue Python emblem
      const r = size * 0.45;
      // Blue top half
      ctx.fillStyle = '#3776AB';
      ctx.beginPath();
      ctx.arc(0, -r * 0.2, r * 0.42, Math.PI, 0, false);
      ctx.lineTo(r * 0.42, 0);
      ctx.lineTo(0, 0);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(r * 0.2, -r * 0.2, r * 0.1, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      // Yellow bottom half
      ctx.fillStyle = '#FFD43B';
      ctx.beginPath();
      ctx.arc(0, r * 0.2, r * 0.42, 0, Math.PI, false);
      ctx.lineTo(-r * 0.42, 0);
      ctx.lineTo(0, 0);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(-r * 0.2, r * 0.2, r * 0.1, 0, Math.PI * 2);
      ctx.fillStyle = '#1e293b';
      ctx.fill();

      ctx.fillStyle = '#3776AB';
      ctx.font = `800 ${size * 0.22}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('Python', 0, size * 0.5);
      break;
    }

    case 'node': {
      // Green hexagon with Node.js
      const r = size * 0.44;
      ctx.fillStyle = '#68A063';
      drawHexagon(ctx, 0, -4, r);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `900 ${size * 0.26}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('node', 0, -4);

      ctx.fillStyle = '#335e30';
      ctx.font = `700 ${size * 0.18}px "Inter", sans-serif`;
      ctx.fillText('JS', 0, size * 0.44);
      break;
    }

    case 'js': {
      // Vibrant yellow JavaScript tile
      const s = size * 0.9;
      const r = s * 0.18;
      ctx.fillStyle = '#F7DF1E';
      drawRoundedRect(ctx, -s / 2, -s / 2, s, s, r);
      ctx.fill();

      ctx.fillStyle = '#000000';
      ctx.font = `900 ${s * 0.52}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('JS', 0, 4);
      break;
    }

    case 'tailwind': {
      // Cyan waves swoosh
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 14;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(-size * 0.35, size * 0.05);
      ctx.bezierCurveTo(-size * 0.2, -size * 0.2, 0, size * 0.15, size * 0.35, -size * 0.1);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-size * 0.25, size * 0.22);
      ctx.bezierCurveTo(-size * 0.1, 0, size * 0.1, size * 0.3, size * 0.25, size * 0.08);
      ctx.stroke();

      ctx.fillStyle = '#0284c7';
      ctx.font = `700 ${size * 0.18}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('tailwind', 0, size * 0.44);
      break;
    }

    case 'mongodb': {
      // Green Leaf logo
      ctx.fillStyle = '#13AA52';
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.45);
      ctx.bezierCurveTo(size * 0.35, -size * 0.15, size * 0.35, size * 0.25, 0, size * 0.45);
      ctx.bezierCurveTo(-size * 0.35, size * 0.25, -size * 0.35, -size * 0.15, 0, -size * 0.45);
      ctx.fill();

      // Leaf center split
      ctx.strokeStyle = '#0e7037';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.4);
      ctx.lineTo(0, size * 0.4);
      ctx.stroke();

      ctx.fillStyle = '#13aa52';
      ctx.font = `700 ${size * 0.18}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('MongoDB', 0, size * 0.6);
      break;
    }

    case 'firebase': {
      // Golden yellow flame
      ctx.fillStyle = '#FFA000';
      ctx.beginPath();
      ctx.moveTo(0, size * 0.4);
      ctx.bezierCurveTo(-size * 0.35, size * 0.2, -size * 0.35, -size * 0.15, -size * 0.15, -size * 0.4);
      ctx.bezierCurveTo(-size * 0.05, -size * 0.15, 0, -size * 0.1, size * 0.1, -size * 0.25);
      ctx.bezierCurveTo(size * 0.35, -size * 0.05, size * 0.35, size * 0.25, 0, size * 0.4);
      ctx.fill();

      ctx.fillStyle = '#F57C00';
      ctx.beginPath();
      ctx.moveTo(0, size * 0.4);
      ctx.bezierCurveTo(-size * 0.15, size * 0.25, -size * 0.1, 0, size * 0.1, -size * 0.25);
      ctx.bezierCurveTo(size * 0.3, -size * 0.05, size * 0.25, size * 0.25, 0, size * 0.4);
      ctx.fill();

      ctx.fillStyle = '#b45309';
      ctx.font = `700 ${size * 0.18}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('Firebase', 0, size * 0.55);
      break;
    }

    case 'git': {
      // Orange git diamond
      const s = size * 0.42;
      ctx.save();
      ctx.rotate((45 * Math.PI) / 180);
      ctx.fillStyle = '#F05032';
      drawRoundedRect(ctx, -s, -s, s * 2, s * 2, s * 0.3);
      ctx.fill();
      ctx.restore();

      // Git branch circles
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(-size * 0.15, size * 0.15);
      ctx.lineTo(size * 0.15, -size * 0.15);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(-size * 0.15, size * 0.15, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(size * 0.15, -size * 0.15, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#c2410c';
      ctx.font = `700 ${size * 0.2}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('Git', 0, size * 0.52);
      break;
    }

    case 'html': {
      ctx.fillStyle = '#E34F26';
      drawShield(ctx, size * 0.45);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `900 ${size * 0.36}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('5', 0, -2);

      ctx.fillStyle = '#c2410c';
      ctx.font = `700 ${size * 0.18}px "Inter", sans-serif`;
      ctx.fillText('HTML5', 0, size * 0.52);
      break;
    }

    case 'css': {
      ctx.fillStyle = '#1572B6';
      drawShield(ctx, size * 0.45);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `900 ${size * 0.36}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('3', 0, -2);

      ctx.fillStyle = '#0369a1';
      ctx.font = `700 ${size * 0.18}px "Inter", sans-serif`;
      ctx.fillText('CSS3', 0, size * 0.52);
      break;
    }

    case 'mysql': {
      // MySQL logo with stylized dolphin arc
      ctx.fillStyle = '#00758F';
      drawRoundedRect(ctx, -size * 0.44, -size * 0.44, size * 0.88, size * 0.88, size * 0.18);
      ctx.fill();

      // Dolphin arc crest in orange
      ctx.strokeStyle = '#F29111';
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(size * 0.05, -size * 0.06, size * 0.22, Math.PI * 0.8, Math.PI * 1.85);
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `900 ${size * 0.22}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('MySQL', 0, size * 0.26);
      break;
    }

    default: {
      // Generic clean badge
      const s = size * 0.85;
      ctx.fillStyle = skill.color || '#475569';
      drawRoundedRect(ctx, -s / 2, -s / 2, s, s, s * 0.2);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `800 ${size * 0.24}px "Inter", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(skill.name.slice(0, 4).toUpperCase(), 0, 0);
      break;
    }
  }

  ctx.restore();
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawHexagon(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const px = x + r * Math.cos(angle);
    const py = y + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function drawShield(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  ctx.moveTo(-r * 0.7, -r * 0.8);
  ctx.lineTo(r * 0.7, -r * 0.8);
  ctx.lineTo(r * 0.55, r * 0.4);
  ctx.lineTo(0, r * 0.85);
  ctx.lineTo(-r * 0.55, r * 0.4);
  ctx.closePath();
}
