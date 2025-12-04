'use client'
import React from 'react';
import { Github, Globe, Code, ChevronRight, Server, Database, TrendingUp } from 'lucide-react'; 

const TechnologyIcon = ({ name }) => {
    const defaultClasses = "w-6 h-6 p-1 rounded-full text-[#212529] shadow-md transition-transform duration-300 group-hover:scale-110";
    
    const TechMap = {
        NEXTJS: { icon: Code, color: "bg-white" },
        REACT: { icon: Code, color: "bg-[#00D8FF] text-[#212529]" },
        SQL: { icon: Database, color: "bg-[#FB8500] text-white" }, 
        TAILWINDCSS: { icon: TrendingUp, color: "bg-[#38BDF8] text-[#212529]" },
        JAVASCRIPT: { icon: Code, color: "bg-[#F7DF1E] text-[#212529]" }, 
        DEFAULT: { icon: Server, color: "bg-gray-300" }
    };

    const tech = TechMap[name.toUpperCase()] || TechMap.DEFAULT;
    const IconComponent = tech.icon;

    return (
        <div className={`
            ${defaultClasses} ${tech.color}
            flex items-center justify-center 
            relative group-hover:rotate-12
        `}>
            <IconComponent className="w-4 h-4" />
        </div>
    );
};


export default function PortfolioCard({ project }) {
    const { 
        name = "Nombre del Proyecto (Demo)",
        description = "Una descripción concisa de este proyecto destacando su objetivo, funcionalidad principal y el valor que aporta al usuario.",
        technologies = ["NextJS", "SQL", "TailwindCSS"],
        imageUrl = "https://placehold.co/600x400/212529/FFB703?text=ALVACODE+PROJECT",
        githubUrl,
        liveUrl
    } = project;

    return (
        <article
            className='
                group relative rounded-3xl overflow-hidden
                bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30
                shadow-2xl hover:shadow-[0_0_50px_rgba(255,183,3,0.02)] transition-all duration-500
                hover:bg-[#212529]/80 transform-gpu
                hover:scale-[1.01]
                text-white
            '
        >
            <div className='
                absolute inset-0 bg-gradient-to-tr from-[#E63946]/5 to-[#FFB703]/5
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ' />
            
            <div className='relative z-10 flex flex-col md:flex-row'>
                
                <div className='w-full md:w-2/5 relative h-48 md:h-auto'>
                    <img
                        src={imageUrl}
                        alt={`Imagen del proyecto ${name}`}
                        className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-[#212529]/20'></div>
                </div>

                <div className='w-full md:w-3/5 p-6 space-y-4'>
                    
                    <h2 className='
                        text-2xl font-bold tracking-tight text-white 
                        group-hover:text-[#FFB703] transition-colors duration-300
                    '>
                        {name}
                    </h2>
                    
                    <p className='text-gray-400 text-sm leading-snug line-clamp-3'>
                        {description}
                    </p>

                    <div>
                        <h3 className='text-sm font-semibold uppercase text-[#E63946] mb-2'>
                            Tech Stack
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                            {technologies.map((techName, idx) => (
                                <div key={idx} className='flex items-center gap-2 p-2 rounded-full bg-[#212529] border border-[#FFB703]/30'>
                                    <TechnologyIcon name={techName} />
                                    <span className='text-xs font-medium text-gray-300 pr-1'>
                                        {techName}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-4 pt-3'>
                        {liveUrl && (
                            <a 
                                href={liveUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className='
                                    flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm
                                    bg-[#FB8500] hover:bg-[#FFB703] text-[#212529]
                                    shadow-lg shadow-[#FB8500]/50 transition-all duration-300 transform hover:scale-[1.03]
                                '
                            >
                                <Globe className='w-4 h-4' />
                                Ver aplicación
                            </a>
                        )}
                        {githubUrl && (
                            <a 
                                href={githubUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className='
                                    flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm
                                    border border-[#E63946] text-[#E63946] hover:bg-[#E63946]/10 
                                    transition-all duration-300
                                '
                            >
                                <Github className='w-4 h-4' />
                                Código Fuente
                            </a>
                        )}
                        {!liveUrl && !githubUrl && (
                             <button
                                className='
                                    flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm
                                    bg-[#212529] border border-[#FFB703]/50 text-[#FFB703]
                                    transition-all duration-300
                                '
                            >
                                Ver Detalles <ChevronRight className='w-4 h-4' />
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </article>
    );
}