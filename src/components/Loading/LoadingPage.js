'use client'
import React from 'react'

export default function LoadingPage() {
  return (
    <div className='w-full min-h-screen bg-[#212529] flex items-center justify-center relative overflow-hidden'>
        
        <div className="flex flex-col items-center justify-center space-y-4">
            
            <div className='flex flex-col items-center group'>
                <div className='relative'>
                    <img
                        width={60}
                        height={60}
                        alt='Imagen Logo AlvaCode'
                        src={"https://res.cloudinary.com/dabyqnijl/image/upload/c_thumb,w_200,g_face/v1707230326/logos/Group_21_ed6vbv.png"}
                        className='rounded-full w-16 h-16 ring-2 ring-[#FFB703]/50 transform transition-transform duration-500'
                    />
                    
                    <div className='
                        absolute inset-0 w-full h-full border-4 border-transparent 
                        rounded-full animate-spin-slow
                        border-t-[#E63946] border-b-[#FFB703] opacity-80
                    '/>
                </div>

                <h1 className='font-extrabold text-2xl mt-4 tracking-wider text-white'>
                    alvacode.<span className='text-[#E63946]'>dev</span>
                </h1>
            </div>

            <p className='
                text-lg font-light text-gray-400 mt-2
                animate-pulse
            '>
                Cargando componentes ...
            </p>
        </div>
        
        <style>{`
            @keyframes spin-slow {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            .animate-spin-slow {
                animation: spin-slow 2.5s linear infinite;
            }
        `}</style>
    </div>
  )
}