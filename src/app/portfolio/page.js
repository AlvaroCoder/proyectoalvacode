'use client'
import React from 'react';
import { Github } from 'lucide-react';
import PortfolioCard from '@/components/Cards/PortfolioCard';

const projectsData = [
  {
    name: "ONE CLIC GOP",
    description:
      "Aplicación de escritorio Low Code que permite a los usuarios crear flujos que lean XML, lean Excels, identifique carácteres de un PDF y genere un Excel con la información extraída, todo a un solo clic.",
    technologies: ["JAVA SWING", "Tesseract OCR", "Apache POI", "XML Parsing"],
    imageUrl:
      "https://res.cloudinary.com/dabyqnijl/image/upload/v1791428582/Panel_inicio_gvee2u.png",
    githubUrl: "https://github.com/AlvaroCoder/ONE-CLIC-GOP.git",
  },
  {
    name: "Sistema de venta de propiedades",
    description:
      "Aplicación web, que permite a los usuarios buscar, filtrar y visualizar propiedades en venta, así como a los agentes inmobiliarios gestionar sus listados y clientes.",
    technologies: ["NextJS", "TailwindCSS", "MongoDB", "FastAPI"],
    imageUrl:
      "https://res.cloudinary.com/dabyqnijl/image/upload/v1744814294/ImagesByZ/wgf6o6uc5lyzqaze3jvl.png",
    githubUrl: "https://github.com/AlvaroCoder/proyecto-byz-frontend.git",
    liveUrl: "https://www.grupobyz.com/",
  },
  {
    name: "Aplicación de Tareas",
    description:
      "Aplicación de escritorio que permite gestionar las tareas que tengamos, pudiendo crearlas, editarlas y eliminarlas.",
    technologies: ["JAVAX", "SQL"],
    imageUrl:
      "https://raw.githubusercontent.com/AlvaroCoder/AppTareario/master/src/Imagenes/BannerAplicaciondeTareas%20.png",
    githubUrl: "https://github.com/AlvaroCoder/AppTareario",
    liveUrl: "",
  },
  {
    name: "Sistema de Gestión del Laboratorio SAC",
    description:
      "Plataforma para gestionar los documentos, libros, papers y miembros de forma interna del laboratorio Sistemas Automáticos de Control (SAC).",
    technologies: ["NextJS", "FastAPI", "TailwindCSS", "SQL"],
    imageUrl:
      "https://res.cloudinary.com/dabyqnijl/image/upload/v1727218255/Screenshot_2024-09-24_at_17.48.39_y6ohso.png",
    githubUrl: "https://github.com/AlvaroCoder/proyecto-base-datos-sac",
    liveUrl: "",
  },
  {
    name: "Aplicación G@llrisK",
    description:
      "Plataforma de modelado y análisis de riesgo financiero de alto rendimiento. Permite a las empresas ejecutar simulaciones Monte Carlo y análisis de sensibilidad exhaustivos para transformar la incertidumbre en inteligencia estratégica clave para la toma de decisiones en proyectos de inversión.",
    technologies: ["NextJS", "TailwindCSS", "SQL", "SPRING BOOT"],
    imageUrl:
      "https://res.cloudinary.com/dabyqnijl/image/upload/v1763614770/Screenshot_2025-11-19_at_23.56.56_bpsgpa.png",
    liveUrl: "https://www.gallrisk.com/",
  },
  {
    name: "Notaría Rojas Jaén",
    description:
      "Aplicación web que permite a los clientes gestionar sus trámites notariales en línea, incluyendo la carga de documentos, seguimiento del estado de sus solicitudes y acceso a información relevante del servicio.",
    technologies: ["NextJS", "FastAPI", "MongoDB", "TailwindCSS"],
    imageUrl:
      "https://res.cloudinary.com/dabyqnijl/image/upload/v1764826777/Screenshot_2025-12-04_at_00.36.37_nnyrsf.png",
    githubUrl: "https://github.com/AlvaroCoder/cliente-app-frontend",
    liveUrl: "https://www.notariarojasjaen.com/",
  },
];

const SKILLS = [
    { name: "Java",        category: "Lenguaje",       dot: "#E63946" },
    { name: "JavaScript",  category: "Lenguaje",       dot: "#F7DF1E" },
    { name: "React",       category: "Framework",      dot: "#00D8FF" },
    { name: "Next.js",     category: "Framework",      dot: "#F8F9FA" },
    { name: "Spring Boot", category: "Framework",      dot: "#6DB33F" },
    { name: "FastAPI",     category: "Framework",      dot: "#009688" },
    { name: "TailwindCSS", category: "Styling",        dot: "#38BDF8" },
    { name: "SQL",         category: "Base de Datos",  dot: "#FB8500" },
    { name: "MongoDB",     category: "Base de Datos",  dot: "#4DB33D" },
    { name: "GitHub",      category: "Herramienta",    dot: "#F8F9FA" },
    { name: "GitLab",      category: "Herramienta",    dot: "#FC6D26" },
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen w-full bg-[#212529] text-white pt-28 pb-20 relative overflow-hidden">

            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#E9ECEF 1px, transparent 1px), linear-gradient(90deg, #E9ECEF 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />

            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FB8500]/30 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <header className="mb-20">
                    <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#FB8500]/70 mb-10">
                        Portafolio · alvacode.dev
                    </p>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-light leading-[1.05] text-[#F8F9FA] tracking-tight">
                            Proyectos que<br />
                            <span className="font-semibold">construyen</span>{" "}
                            <span className="text-[#FB8500]">valor real.</span>
                        </h1>
                    </div>
                    <div className="w-12 h-px bg-[#FB8500] mt-10 mb-8" />
                    <p className="text-base text-[#ADB5BD] max-w-xl leading-relaxed font-light">
                        Una selección de proyectos donde la tecnología resuelve problemas concretos de negocio.
                    </p>
                </header>

                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-8 h-px bg-[#FB8500]" />
                        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#FB8500]/70">
                            Proyectos Recientes
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        {projectsData.map((project, index) => (
                            <PortfolioCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </section>

                <section className="border-t border-[#E9ECEF]/10 pt-20">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-8 h-px bg-[#FB8500]" />
                        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#FB8500]/70">
                            Sobre Mí
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        <div className="space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-light text-[#F8F9FA] leading-snug">
                                Desarrollador Full Stack{" "}
                                <span className="text-[#ADB5BD] font-extralight">
                                    con foco en soluciones que escalan.
                                </span>
                            </h2>
                            <p className="text-[#ADB5BD] font-light leading-relaxed">
                                Construyo aplicaciones web completas, desde el diseño de arquitectura hasta
                                el despliegue en producción. Me especializo en el ecosistema Java para backend
                                y React / Next.js para frontend, siempre buscando código limpio y sistemas
                                que crezcan con el negocio.
                            </p>
                            <p className="text-[#ADB5BD] font-light leading-relaxed">
                                Trabajo con control de versiones en GitHub y GitLab, aplicando buenas prácticas
                                de branching, revisión de código y CI/CD para entregar software de calidad.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-4">
                                <a
                                    href="https://github.com/AlvaroCoder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FB8500] text-[#212529] font-semibold text-xs tracking-wide hover:bg-[#FCA311] transition-colors duration-200"
                                >
                                    <Github className="w-3.5 h-3.5" />
                                    GitHub
                                </a>
                            </div>
                        </div>

                        {/* Skills list */}
                        <div className="flex flex-col gap-px bg-[#E9ECEF]/10">
                            {SKILLS.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="bg-[#343A40] hover:bg-[#3D4349] transition-colors duration-200 px-6 py-4 flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: skill.dot }}
                                        />
                                        <span className="text-sm font-light text-[#F8F9FA] tracking-wide">
                                            {skill.name}
                                        </span>
                                    </div>
                                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#ADB5BD]/60">
                                        {skill.category}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
}