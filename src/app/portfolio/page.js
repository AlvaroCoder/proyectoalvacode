'use client'
import React from 'react';
import { Aperture, Brain, Code, Terminal, Trophy} from 'lucide-react';
import PortfolioCard from '@/components/Cards/PortfolioCard';

const projectsData = [
      {
        name: "Aplicación de Tareas",
        description: "Aplicación de escritorio, que permite gestionar las tareas que tengamos, pudiendo crearlas, editarlas y eliminarlas. ",
        technologies: ["JAVAX", "SQL"],
        imageUrl: "https://raw.githubusercontent.com/AlvaroCoder/AppTareario/master/src/Imagenes/BannerAplicaciondeTareas%20.png",
        githubUrl: "https://github.com/AlvaroCoder/AppTareario",
        liveUrl: ""
    },
    {
        name: "Sistema de Gestión del laboratorio SAC",
        description: "Plataforma para gestionar los documentos, libros, papers y miembros de forma interna del laboratorio Sistemas Automáticos de Control (SAC)",
        technologies: ["NextJS", "FastAPI", "TailwindCSS", "SQL"],
        imageUrl: "https://res.cloudinary.com/dabyqnijl/image/upload/v1727218255/Screenshot_2024-09-24_at_17.48.39_y6ohso.png",
        githubUrl: "https://github.com/AlvaroCoder/proyecto-base-datos-sac",
        liveUrl: ""
    },
    {
        name: "Aplicación G@llrisK",
        description: "Plataforma de modelado y análisis de riesgo financiero de alto rendimiento. Permite a las empresas ejecutar simulaciones Monte Carlo y análisis de sensibilidad exhaustivos para transformar la incertidumbre en inteligencia estratégica clave para la toma de decisiones en proyectos de inversión.",
        technologies: ["NextJS", "TailwindCss", "SQL", "SPRING BOOT"],
        imageUrl: "https://res.cloudinary.com/dabyqnijl/image/upload/v1763614770/Screenshot_2025-11-19_at_23.56.56_bpsgpa.png",
        liveUrl: "https://www.gallrisk.com/" 
    },
    {
        name: "Notaría Rojas Jaén",
        description: "Aplicación web que permite a los clientes gestionar sus trámites notariales en línea, incluyendo la carga de documentos, seguimiento del estado de sus solicitudes y acceso a información relevante del servicio.",
        technologies: ["NextJS", "FastAPI", "MongoDB", "TailwindCSS"],
        imageUrl: "https://res.cloudinary.com/dabyqnijl/image/upload/v1764826777/Screenshot_2025-12-04_at_00.36.37_nnyrsf.png",
        githubUrl: "https://github.com/AlvaroCoder/cliente-app-frontend",
        liveUrl: "https://www.notariarojasjaen.com/"
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
                Una pequeña muestra de mis habilidades.
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