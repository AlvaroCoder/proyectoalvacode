'use client'
import Image from 'next/image'
import React from 'react'

export default function PostCardDetailIntro({
    iconContent,
    createdAt,
    heading,
    description,
    categories
}) {
  
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <section className='w-full  bg-azul_oscuro py-10 md:pt-24 selection:bg-naranja selection:text-white'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            
            <div className='relative w-full aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group'>
                <div className="absolute inset-0 bg-azul_oscuro/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {iconContent?.url ? (
                    <Image 
                        src={iconContent.url} 
                        alt={heading || "Imagen del artículo"}
                        fill
                        priority 
                        className='object-cover hover:scale-105 transition-transform duration-700 ease-in-out'
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                        Sin imagen
                    </div>
                )}
            </div>

            <div className='flex flex-col justify-center text-white h-full'>
                
                <div className='flex flex-wrap items-center gap-4 mb-6'>
                    <ul className='flex flex-wrap gap-2'>
                        {categories?.map((item, key) => (
                            <li 
                                key={key} 
                                className='bg-naranja text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg shadow-naranja/20 hover:bg-white hover:text-naranja transition-colors cursor-default'
                            >
                                {item?.name}
                            </li>
                        ))}
                    </ul>
                    {createdAt && (
                        <>
                            <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                            <span className='text-gray-400 text-sm font-medium tracking-wide'>
                                {formatDate(createdAt)}
                            </span>
                        </>
                    )}
                </div>

                <h1 className='font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white'>
                    {heading}
                </h1>

                <p className='font-sans text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl'>
                    {description}
                </p>

                <div className="w-24 h-1 bg-naranja mt-8 rounded-full opacity-80"></div>
            </div>
        </div>
    </section>
  )
}