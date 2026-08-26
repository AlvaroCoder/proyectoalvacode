'use client'
import React from "react";
import { ArrowRight, Code2, Cpu, GitMerge } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  { icon: Code2, label: "Desarrollo a medida" },
  { icon: Cpu,   label: "Automatización" },
  { icon: GitMerge, label: "Integración de sistemas" },
];

export default function ViewWelcome() {
  return (
    <section className="min-h-screen w-full bg-[#212529] pt-28 pb-20 flex flex-col justify-center relative overflow-hidden">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#E9ECEF 1px, transparent 1px), linear-gradient(90deg, #E9ECEF 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FB8500]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10 w-full">

        {/* Eyebrow */}
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#FB8500]/70 mb-10">
          Consultoría &amp; Desarrollo Tecnológico · alvacode.dev
        </p>

        {/* Headline */}
        <div className="max-w-5xl">
          <h1 className="text-5xl sm:text-6xl lg:text-[82px] font-light leading-[1.05] text-[#F8F9FA] tracking-tight">
            Tecnología que<br />
            <span className="font-semibold">transforma</span>{" "}
            <span className="text-[#FB8500]">empresas.</span>
          </h1>
        </div>

        {/* Thin divider */}
        <div className="w-12 h-px bg-[#FB8500] mt-10 mb-8" />

        {/* Sub-copy */}
        <p className="text-base sm:text-lg text-[#ADB5BD] max-w-xl leading-relaxed font-light">
          Diseñamos, desarrollamos e integramos soluciones informáticas y de
          automatización para que tu empresa opere mejor, más rápido y con
          menos fricción.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FB8500] text-[#212529] font-semibold text-sm tracking-wide hover:bg-[#FFB703] transition-colors duration-200"
          >
            Ver proyectos
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#E9ECEF]/20 text-[#E9ECEF] font-light text-sm tracking-wide hover:border-[#FB8500]/50 hover:text-[#FB8500] transition-all duration-200"
          >
            Hablar con un experto
          </a>
        </div>

        {/* Pillar strip */}
        <div className="flex flex-wrap gap-8 mt-20 pt-8 border-t border-[#E9ECEF]/10">
          {PILLARS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-[#ADB5BD] text-sm font-light">
              <Icon className="w-4 h-4 text-[#FB8500]" />
              <span className="tracking-wide">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}