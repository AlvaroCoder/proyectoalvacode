'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function CardPost({ data = {} }) {
    const { heading, description, categories, iconContent, slug } = data;        
    
    return (
        <article
            className='
                group relative p-6 rounded-lg overflow-hidden
                bg-white/10 backdrop-blur-md border border-white/10
                shadow-2xl hover:shadow-2xl transition-all duration-500
                hover:bg-white/15 hover:border-white/30
                hover:scale-[1.02] transform-gpu
                text-white
            '
            style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            }}
        >
            <div className='
                absolute inset-0 bg-gradient-to-r from-blue-500/10 to-naranja/10
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                rounded-lg
            ' />
            
            <div className='
                absolute inset-0 rounded-lg p-px
                bg-gradient-to-r from-blue-400/30 via-amarillo/30 to-naranja/10
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
            '>
                <div className='w-full h-full rounded-lg bg-gray-900/20 backdrop-blur-sm' />
            </div>

            <div className='relative z-10'>
                <div className='
                    relative w-full h-48 md:h-56 lg:h-64 xl:h-72 
                    rounded-xl overflow-hidden mb-6
                    bg-white/5 backdrop-blur-sm border border-white/10
                    group-hover:border-white/20 transition-all duration-500
                '>
                    <Image
                        src={iconContent?.url}
                        alt={iconContent?.id || heading}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='
                            object-cover transition-all duration-700 
                            group-hover:scale-110 transform-gpu
                        '
                        placeholder='blur'
                        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9faLT300srRTcMk9eHL6nJEaK44OrVPoRmbWp8oAA'
                    />
                    
                    <div className='
                        absolute inset-0 bg-gradient-to-t 
                        from-gray-900/50 via-transparent to-transparent
                        opacity-60 group-hover:opacity-30 transition-opacity duration-500
                    ' />
                </div>

                <section className='space-y-4'>
                    <Link href={`/blog/${slug}`}>
                        <h1 className='
                            text-2xl md:text-3xl font-bold cursor-pointer
                            bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent
                            hover:from-blue-200 hover:to-purple-200 transition-all duration-300
                            line-clamp-2
                        '>
                            {heading}
                        </h1>
                    </Link>

                    <div className='flex flex-wrap gap-2'>
                        {categories?.map((item, idx) => (
                            <span
                                key={idx}
                                className='
                                    px-3 py-1.5 text-sm font-medium rounded-full
                                    bg-gradient-to-r from-blue-500/20 to-amarillo/50
                                    border border-blue-400/30 text-blue-200
                                    hover:from-blue-500/30 hover:to-naranja/70
                                    hover:border-blue-400/50 hover:text-white
                                    transition-all duration-300
                                    backdrop-blur-sm
                                '
                            >
                                {item?.name}
                            </span>
                        ))}
                    </div>

                    <p className='
                        text-gray-200 text-base leading-relaxed
                        line-clamp-3 group-hover:line-clamp-none
                        transition-all duration-500
                    '>
                        {description}
                    </p>

                    <div className='
                        opacity-0 group-hover:opacity-100 transform translate-y-2
                        group-hover:translate-y-0 transition-all duration-500
                    '>
                        <Link href={`/blog/${slug}`}>
                            <button className='
                                px-6 py-2 rounded-lg font-semibold
                                bg-gradient-to-r from-blue-500 to-naranja
                                hover:from-blue-600 hover:to-naranja/60
                                text-white shadow-lg hover:shadow-xl
                                transform hover:-translate-y-0.5
                                transition-all duration-300
                                flex items-center gap-2
                            '>
                                Leer más
                                <svg 
                                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </section>
            </div>

            <div className='
                absolute top-2 right-2 w-2 h-2 rounded-full
                bg-blue-400/50 blur-sm group-hover:bg-blue-300
                transition-all duration-500
            ' />
            <div className='
                absolute bottom-4 left-4 w-1 h-1 rounded-full
                bg-purple-400/50 blur-sm group-hover:bg-purple-300
                transition-all duration-700 delay-100
            ' />
        </article>
    );
}