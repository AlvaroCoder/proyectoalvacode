'use client'
import BodyPhysics from "@/elements/BodyPhysics";
import CircleParticles from "@/elements/CircleParticles";
import { MoveRight } from "lucide-react";
import React from "react";

export default function ViewWelcome() {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-8 lg:py-0 text-white relative overflow-hidden">
      <div className="px-20 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light">Bienvenido a</h1>
            <h1 className="text-naranja text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mt-2 lg:mt-4 tracking-tight">
                  {` <AlvaCode/> `}</h1>

        <section className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-8 lg:mt-12 w-full sm:w-auto">
            <button className="text-azul_oscuro px-6 sm:px-8 py-3 sm:py-4 bg-amarillo hover:bg-yellow-500 transition-all duration-300 rounded-lg font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Ver contenido
            </button>
            <button className="group border-2 border-amarillo hover:bg-amarillo hover:bg-opacity-10 px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 rounded-lg">
                <p className="flex flex-row items-center gap-2 text-amarillo group-hover:text-yellow-400 font-semibold text-lg sm:text-xl">
                Asesoría
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <MoveRight size={20} />
                </span>
                </p>
            </button>
        </section>
        </div>
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px] flex justify-center items-center relative z-0">
            <CircleParticles/>
        </div>
    </section>
  );
}
