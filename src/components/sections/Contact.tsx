import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Instagram,Send, Icon, Linkedin } from 'lucide-react';
import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'aayushshetty1015@gmail.com', href: 'mailto:aayushshetty1015@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 97402 93359', href: 'tel:+919740293359' },
  { icon: MapPin, label: 'Location', value: 'Mangaluru, India', href: null },
];

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/aayushshetty15' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/aayushshettyyyy' },
  {icon : Linkedin,label :'LinkedIn',href:"https://www.linkedin.com/in/aayushshetty/"},
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 lg:px-10"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact info - slides from left */}
          <RevealWrapper direction="left">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-themed bg-card p-8">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-primary" style={{ color: 'var(--text-primary)' }}>
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {CONTACT_INFO.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-xl"
                          style={{
                            background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
                          }}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-secondary" style={{ color: 'var(--text-secondary)' }}>
                            {item.label}
                          </p>
                          <p className="text-sm font-semibold text-primary" style={{ color: 'var(--text-primary)' }}>
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a key={item.label} href={item.href} className="block transition-transform duration-200 hover:translate-x-1">
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs uppercase tracking-wider text-secondary" style={{ color: 'var(--text-secondary)' }}>
                  Follow Me
                </p>
                <div className="flex gap-3">
                  {SOCIALS.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center rounded-xl glass border-themed transition-all duration-300 hover:scale-110"
                        style={{ boxShadow: '0 0 0 1px var(--border)' }}
                      >
                        <Icon className="h-5 w-5 text-secondary transition-colors duration-300 hover:text-accent" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Form - slides from right */}
          <RevealWrapper direction="right">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-5 rounded-2xl border border-themed bg-card p-8"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-primary" style={{ color: 'var(--text-primary)' }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-themed bg-secondary px-4 py-3 text-sm text-primary outline-none transition-all duration-200 focus:border-accent"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border)',
                  }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary" style={{ color: 'var(--text-primary)' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-themed bg-secondary px-4 py-3 text-sm text-primary outline-none transition-all duration-200 focus:border-accent"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border)',
                  }}
                  placeholder="you@email.com"
                />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-primary" style={{ color: 'var(--text-primary)' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-themed bg-secondary px-4 py-3 text-sm text-primary outline-none transition-all duration-200 focus:border-accent"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border)',
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
                  boxShadow: '0 0 25px var(--glow)',
                }}
              >
                {submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </RevealWrapper>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-20 max-w-7xl border-t border-themed pt-8 text-center">
        <p className="text-sm text-secondary" style={{ color: 'var(--text-secondary)' }}>
          Designed & Built by Aayush Shetty · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
