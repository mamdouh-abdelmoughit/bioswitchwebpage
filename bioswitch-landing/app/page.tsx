"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Fingerprint SVG ─── */
function FingerprintIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      {/* ridges simulated as concentric oval arcs */}
      {[6, 12, 18, 24, 30, 36, 42, 48, 54].map((r, i) => (
        <ellipse
          key={r}
          cx="60" cy="62"
          rx={r} ry={r * 0.85}
          stroke="#06b6d4"
          strokeWidth="1.6"
          strokeDasharray={i % 3 === 0 ? "none" : "4 2"}
          opacity={1 - i * 0.07}
        />
      ))}
      {/* core dot */}
      <circle cx="60" cy="62" r="3" fill="#06b6d4" />
      {/* outer glow ring */}
      <circle cx="60" cy="60" r="58" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

/* ─── Scan-line overlay ─── */
function ScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
      <div
        className="scan-line absolute left-0 right-0 h-[2px] mx-4"
        style={{
          background: "linear-gradient(90deg, transparent, #06b6d4, transparent)",
          top: "10%",
          opacity: 0,
        }}
      />
    </div>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(2, 8, 23, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e293b" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight gradient-text">BioSwitch</span>
        <div className="hidden sm:flex gap-8 text-sm" style={{ color: "var(--muted)" }}>
          {["How it works", "Technology", "Contact"].map((label, i) => {
            const hrefs = ["#how-it-works", "#built-on", "#contact"];
            return (
              <a
                key={label}
                href={hrefs[i]}
                className="hover:text-white transition-colors"
              >
                {label}
              </a>
            );
          })}
        </div>
        <a
          href="#contact"
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            background: "var(--cyan-glow)",
            border: "1px solid var(--cyan)",
            color: "#06b6d4",
          }}
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 grid-bg overflow-hidden"
    >
      {/* radial glow behind fingerprint */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* fingerprint graphic */}
      <div className="relative mb-10 animate-float">
        <div
          className="absolute inset-0 rounded-full animate-pulse-ring"
          style={{ background: "radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%)" }}
        />
        <div className="relative w-40 h-40 glow-cyan rounded-full flex items-center justify-center">
          <FingerprintIcon className="w-32 h-32" />
          <ScanLine />
        </div>
      </div>

      {/* headline */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter mb-4 leading-none">
          Your fingerprint
          <br />
          <span className="gradient-text">is your card.</span>
        </h1>
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
        <p className="max-w-xl mx-auto text-lg sm:text-xl mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
          Biometric payment infrastructure replacing physical cards with a single fingerprint —
          connecting all your payment cards across all banks, at ATMs, POS, and online.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <a
          href="#how-it-works"
          className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
          style={{ background: "#06b6d4", color: "#020817" }}
        >
          See how it works
        </a>
        <a
          href="#contact"
          className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:border-cyan-400"
          style={{
            border: "1px solid var(--border)",
            color: "var(--text)",
            background: "var(--surface)",
          }}
        >
          Contact the team
        </a>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden>
          <rect x="6" y="2" width="4" height="8" rx="2" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="8" cy="16" r="2" fill="#06b6d4" />
        </svg>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Enroll once",
      desc: "Register your fingerprint securely. Your biometric template is encrypted and stored in a certified HSM — never shared, never exposed.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="#06b6d4" strokeWidth="1.8">
          <circle cx="16" cy="12" r="5" />
          <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" strokeLinecap="round" />
          <path d="M22 8l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" stroke="#818cf8" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Choose your card",
      desc: "At payment time, confirm your identity with your fingerprint and select which of your cards to charge — secured by a PIN.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="#06b6d4" strokeWidth="1.8">
          <rect x="3" y="8" width="26" height="18" rx="3" />
          <path d="M3 14h26" />
          <rect x="7" y="19" width="6" height="3" rx="1" fill="#06b6d4" stroke="none" />
          <circle cx="24" cy="20" r="2" stroke="#818cf8" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Pay anywhere",
      desc: "Complete transactions at any ATM, POS terminal, or online — across global payment networks. No card needed, ever.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" stroke="#06b6d4" strokeWidth="1.8">
          <circle cx="16" cy="16" r="13" />
          <path d="M3 16h26M16 3c-4 4-6 8-6 13s2 9 6 13M16 3c4 4 6 8 6 13s-2 9-6 13" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: "#06b6d4", background: "var(--cyan-glow)", border: "1px solid rgba(6,182,212,0.2)" }}>
            How it works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-5 tracking-tight">
            Three steps to a<br />
            <span className="gradient-text">cardless world</span>
          </h2>
        </div>

        {/* connector line */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, #06b6d4, #818cf8, transparent)" }}
            aria-hidden
          />
          {steps.map((s) => (
            <div
              key={s.num}
              className="card-hover relative flex flex-col gap-5 rounded-2xl p-8"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--cyan-glow)", border: "1px solid rgba(6,182,212,0.25)" }}
                >
                  {s.icon}
                </div>
                <span className="text-3xl font-black opacity-10" style={{ color: "#06b6d4" }}>
                  {s.num}
                </span>
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Built On ─── */
function BuiltOn() {
  const pillars = [
    {
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" stroke="#06b6d4" strokeWidth="1.8">
          <rect x="8" y="4" width="16" height="24" rx="2" />
          <path d="M12 12h8M12 16h8M12 20h5" strokeLinecap="round" />
          <circle cx="22" cy="22" r="6" fill="#020817" />
          <path d="M19 22l2 2 4-4" stroke="#818cf8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Encrypted HSM Storage",
      desc: "Biometric templates are encrypted inside certified Hardware Security Modules. Keys never leave the secure enclave.",
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" stroke="#06b6d4" strokeWidth="1.8">
          <path d="M16 3l11 5v8c0 6-5 11-11 13C5 27 0 22 0 16V8l11-5h5z" transform="translate(2,2) scale(0.85)" />
          <path d="M11 16l3 3 6-6" strokeLinecap="round" strokeLinejoin="round" stroke="#818cf8" />
        </svg>
      ),
      title: "Loi 09-08 & GDPR",
      desc: "Full compliance with Moroccan data protection law and European GDPR. Privacy by design at every layer.",
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" stroke="#06b6d4" strokeWidth="1.8">
          <rect x="4" y="8" width="24" height="18" rx="3" />
          <path d="M4 13h24" />
          <circle cx="9" cy="19" r="2" fill="#06b6d4" stroke="none" />
          <path d="M14 19h9" strokeLinecap="round" stroke="#818cf8" />
        </svg>
      ),
      title: "EMVCo Standards",
      desc: "Built on the same global standards powering billions of chip card transactions — interoperable with major payment networks worldwide.",
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" stroke="#06b6d4" strokeWidth="1.8">
          <path d="M4 20L12 12l6 6 10-10" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="8" r="3" fill="#818cf8" stroke="none" />
          <path d="M4 26h24" strokeLinecap="round" stroke="#1e293b" strokeWidth="3" />
          <path d="M4 26h24" strokeLinecap="round" strokeDasharray="6 6" />
        </svg>
      ),
      title: "Working Prototype",
      desc: "Not vaporware. We have a working backend, frontend, and hardware prototype — validated end-to-end.",
    },
  ];

  return (
    <section id="built-on" className="py-28 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: "#818cf8", background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.2)" }}>
            Infrastructure
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-5 tracking-tight">
            Built on solid<br />
            <span className="gradient-text">foundations</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="card-hover rounded-2xl p-7 flex flex-col gap-4"
              style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.15)" }}
              >
                {p.icon}
              </div>
              <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const items = [
    {
      label: "Email",
      value: "moughit.mamdouh@gmail.com",
      href: "mailto:moughit.mamdouh@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 7l10 7 10-7" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "/in/mamdouh-abdelmoughit",
      href: "https://www.linkedin.com/in/mamdouh-abdelmoughit-3902b92a8/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="max-w-3xl mx-auto text-center relative">
        <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: "#06b6d4", background: "var(--cyan-glow)", border: "1px solid rgba(6,182,212,0.2)" }}>
          Contact
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-5 mb-4 tracking-tight">
          Let&apos;s build the<br />
          <span className="gradient-text">future of payments</span>
        </h2>
        <p className="text-base mb-14" style={{ color: "var(--muted)" }}>
          Investors, bank partners, or payment network contacts — we&apos;d love to talk.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-hover rounded-2xl p-6 flex flex-col items-center gap-3 text-center group"
              style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors"
                style={{ background: "var(--cyan-glow)", color: "#06b6d4", border: "1px solid rgba(6,182,212,0.2)" }}
              >
                {item.icon}
              </div>
              <p className="text-xs font-medium" style={{ color: "var(--muted)" }}>{item.label}</p>
              <p className="text-sm font-semibold break-all">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-8 px-6 text-center text-xs" style={{ color: "var(--muted)", borderTop: "1px solid var(--border)" }}>
      <span className="font-semibold gradient-text">BioSwitch</span>
      {" · "}
      <span>© {new Date().getFullYear()} BioSwitch. All rights reserved.</span>
    </footer>
  );
}

/* ─── Page ─── */
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <BuiltOn />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
