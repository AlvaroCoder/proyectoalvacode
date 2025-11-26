'use client'
import React from "react";
import { MoveRight, Zap, Code, Cpu } from "lucide-react"; 
import FuturisticCube from "@/elements/FuturisticCube";


export default function ViewWelcome() {
  return (
    <section className="min-h-screen w-full bg-[#212529] pt-24 lg:pt-32 pb-12 flex flex-col items-center justify-center text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 px-6 sm:px-8 lg:px-10 z-10">
        
        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-[#FFB703] mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FFB703] animate-pulse" />
                La mejor web de Tecnología y Código
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight">
                Bienvenido al <br/>
                <span className="text-[#E63946] font-extrabold tracking-tighter">
                  FUTURO
                </span> del Desarrollo
            </h1>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 lg:mt-4 tracking-wider text-white">
                  {` <AlvaCode/> `}
            </h2>
            
            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl">
                Soy un desarrollador apasionado por la **estrategia** y la **innovación**. Aquí encontrarás desde cursos y tutoriales de vanguardia hasta aplicaciones que demuestran el poder del código.
            </p>

            <section className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-10 w-full sm:w-auto">
                <a 
                    href="#portfolio"
                    className="text-[#212529] px-6 sm:px-8 py-3 bg-[#FFB703] hover:bg-yellow-400 transition-all duration-300 rounded-xl font-bold text-lg sm:text-xl shadow-[0_0_20px_#FFB70380] hover:shadow-[0_0_30px_#FFB703] transform hover:-translate-y-0.5 text-center"
                >
                    Ver Proyectos <Code className="inline-block w-5 h-5 ml-1"/>
                </a>
                <a 
                    href="/contact"
                    className="group border-2 border-[#FB8500] hover:bg-[#FB8500] hover:bg-opacity-10 px-6 sm:px-8 py-3 transition-all duration-300 rounded-xl text-center"
                >
                    <p className="flex flex-row items-center justify-center gap-2 text-[#FB8500] group-hover:text-white font-semibold text-lg sm:text-xl">
                        Consultoría
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                            <MoveRight size={20} />
                        </span>
                    </p>
                </a>
            </section>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col items-center mt-12 lg:mt-0">
            
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-none h-64 sm:h-80 lg:h-96 bg-[#212529] border-2 border-[#E63946] rounded-3xl p-2 relative flex items-center justify-center shadow-[0_0_40px_#E6394650] overflow-hidden">
                <FuturisticCube/>
            </div>

        </div>
      </div>
    </section>
  );
}