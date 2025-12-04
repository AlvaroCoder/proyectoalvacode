'use client'
import React from 'react';
import { Zap, Aperture, Brain, Code, Terminal, Trophy} from 'lucide-react';
import PortfolioCard from '@/components/Cards/PortfolioCard';

const projectsData = [
      {
        name: "Aplicación de Tareas",
        description: "Aplicación de escritorio, que permite gestionar las tareas que tengamos, pudiendo crearlas, editarlas y eliminarlas. ",
        technologies: ["JAVAX", "SQL"],
        imageUrl: "https://placehold.co/600x400/212529/E63946?text=SYSTEM+R+A",
        githubUrl: "https://github.com/AlvaroCoder/AppTareario",
        liveUrl: ""
    },
    {
        name: "Sistema de Gestión del laboratorio SAC",
        description: "Plataforma para gestionar los documentos, libros, papers y miembros de forma interna del laboratorio Sistemas Automáticos de Control (SAC)",
        technologies: ["NextJS", "FastAPI", "TailwindCSS", "SQL"],
        imageUrl: "https://placehold.co/600x400/212529/E63946?text=SYSTEM+R+A",
        githubUrl: "https://github.com/AlvaroCoder/proyecto-base-datos-sac",
        liveUrl: ""
    },
    {
        name: "Aplicación G@llrisK",
        description: "Plataforma de modelado y análisis de riesgo financiero de alto rendimiento. Permite a las empresas ejecutar simulaciones Monte Carlo y análisis de sensibilidad exhaustivos para transformar la incertidumbre en inteligencia estratégica clave para la toma de decisiones en proyectos de inversión.",
        technologies: ["NextJS", "TailwindCss", "SQL", "SPRING BOOT"],
        imageUrl: "https://placehold.co/600x400/212529/FFB703?text=V+EDITOR",
        liveUrl: "https://www.gallrisk.com/" 
    },
    {
        name: "Notaria Rojas Jaen",
        description: "Aplicación ge gestión interna de una notaría, para la gestión de documentos y de sus procesos.",
        technologies: ["NextJS", "Socket.io", "MongoDB", "Python"],
        imageUrl: "https://placehold.co/600x400/212529/FB8500?text=CHESS+AI",
        githubUrl: "",
        liveUrl: "https://chess-online.app"
    },
];

const skillItems = [
    { name: "Estrategia de Código", icon: Brain, description: "Aplicando la lógica y la previsión del ajedrez a la arquitectura de software." },
    { name: "Velocidad & Ejecución", icon: Trophy, description: "Desarrollo ágil y orientado a resultados, como un sprint de fútbol." },
    { name: "Clean Code", icon: Code, description: "Foco en código legible, mantenible y escalable, mi campo de juego." },
    { name: "Innovación Tranquila", icon: Aperture, description: "Encontrando soluciones creativas con la calma y perspectiva de la playa." },
];


export default function PortfolioPage() {
  return (
    <div className='min-h-screen w-full bg-[#212529] text-white pt-24 lg:pt-32 pb-12'>
        
        <header className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-12 space-y-4">
            <p className="text-sm font-medium tracking-widest uppercase text-[#FFB703] flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Portafolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Mis <span className="text-[#E63946]">Proyectos</span> Recientes
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
                Aquí demuestro el poder del código. Cada proyecto es una solución única construida con tecnologías de vanguardia.
            </p>
        </header>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
            {projectsData.map((project, index) => (
                <PortfolioCard key={index} project={project} />
            ))}
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-[#E63946]/50 pb-2">
                Filosofía de Desarrollo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillItems.map((item, index) => (
                    <div 
                        key={index} 
                        className='p-6 rounded-xl bg-[#212529]/70 backdrop-blur-sm border border-[#FFB703]/20
                            hover:shadow-[0_0_20px_rgba(255,183,3,0.1)] transition-shadow duration-300 space-y-3'
                    >
                        <item.icon className='w-6 h-6 text-[#FFB703]' />
                        <h3 className='text-xl font-semibold text-white'>
                            {item.name}
                        </h3>
                        <p className='text-sm text-gray-400'>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>

    </div>
  )
}