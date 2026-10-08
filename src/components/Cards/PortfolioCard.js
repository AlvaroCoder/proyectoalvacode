'use client'
import React from 'react';
import { Github, Globe } from 'lucide-react';

const TECH_BADGE_STYLES = {
    NEXTJS:         'bg-[#E9ECEF]/10 text-[#F8F9FA]   border-[#E9ECEF]/20',
    REACT:          'bg-[#00D8FF]/10 text-[#00D8FF]   border-[#00D8FF]/20',
    SQL:            'bg-[#FB8500]/10 text-[#FB8500]   border-[#FB8500]/20',
    TAILWINDCSS:    'bg-[#38BDF8]/10 text-[#38BDF8]   border-[#38BDF8]/20',
    JAVASCRIPT:     'bg-[#F7DF1E]/10 text-[#F7DF1E]   border-[#F7DF1E]/20',
    FASTAPI:        'bg-[#009688]/10 text-[#009688]   border-[#009688]/20',
    MONGODB:        'bg-[#4DB33D]/10 text-[#4DB33D]   border-[#4DB33D]/20',
    'SPRING BOOT':  'bg-[#6DB33F]/10 text-[#6DB33F]   border-[#6DB33F]/20',
    JAVAX:          'bg-[#E63946]/10 text-[#E63946]   border-[#E63946]/20',
    DEFAULT:        'bg-[#ADB5BD]/10 text-[#ADB5BD]   border-[#ADB5BD]/20',
};

export default function PortfolioCard({ project, index = 0 }) {
    const { name, description, technologies = [], imageUrl, githubUrl, liveUrl } = project;
    const projectNumber = String(index + 1).padStart(2, '0');

    return (
        <article className="group bg-[#343A40] hover:bg-[#3D4349] transition-colors duration-300">
            <div className="flex flex-col md:flex-row">

                {/* Image */}
                <div className="w-full md:w-2/5 overflow-hidden relative h-56 md:h-auto min-h-[220px]">
                    <img
                        src={imageUrl}
                        alt={`Proyecto ${name}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#212529]/30" />
                </div>

                {/* Content */}
                <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col justify-between gap-6">
                    <div className="space-y-4">
                        <p className="font-mono text-xs text-[#FB8500]/60 tracking-[0.3em] uppercase">
                            {projectNumber}
                        </p>
                        <h2 className="text-xl sm:text-2xl font-light text-[#F8F9FA] tracking-wide group-hover:text-[#FB8500] transition-colors duration-300">
                            {name}
                        </h2>
                        <p className="text-sm text-[#ADB5BD] font-light leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, idx) => {
                                const style = TECH_BADGE_STYLES[tech.toUpperCase()] || TECH_BADGE_STYLES.DEFAULT;
                                return (
                                    <span key={idx} className={`px-3 py-1 text-[10px] font-mono border tracking-wider uppercase ${style}`}>
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E9ECEF]/10">
                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FB8500] text-[#212529] font-semibold text-xs tracking-wide hover:bg-[#FCA311] transition-colors duration-200"
                                >
                                    <Globe className="w-3.5 h-3.5" />
                                    Ver aplicación
                                </a>
                            )}
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E9ECEF]/20 text-[#E9ECEF] font-light text-xs tracking-wide hover:border-[#FB8500]/50 hover:text-[#FB8500] transition-all duration-200"
                                >
                                    <Github className="w-3.5 h-3.5" />
                                    Código Fuente
                                </a>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}