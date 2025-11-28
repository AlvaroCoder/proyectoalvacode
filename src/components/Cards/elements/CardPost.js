'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export default function CardPost({ data = {} }) {
    const { heading, description, categories, iconContent, slug } = data;        
    
    return (
        <article
            className='
                group relative p-4 sm:p-6 rounded-2xl overflow-hidden
                bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30
                shadow-2xl hover:shadow-[0_0_40px_rgba(230,57,70,0.5)] transition-all duration-500
                hover:bg-[#212529]/80 transform-gpu
                hover:scale-[1.02]
                text-white
            '
        >

            <div className='
                absolute inset-0 bg-gradient-to-r from-[#E63946]/5 to-[#FFB703]/5
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                rounded-2xl
            ' />
            
            <div className='
                absolute top-4 right-4 w-3 h-3 rounded-full
                bg-[#FFB703]/50 blur-sm group-hover:bg-[#FFB703]
                transition-all duration-500 z-10
            ' />
            <div className='
                absolute bottom-4 left-4 w-2 h-2 rounded-full
                bg-[#E63946]/50 blur-sm group-hover:bg-[#E63946]
                transition-all duration-700 delay-100 z-10
            ' />


            <div className='relative z-20'>
                <div className='
                    relative w-full h-48 md:h-56 lg:h-64 xl:h-72 
                    rounded-xl overflow-hidden mb-4
                    bg-[#212529] border border-[#E63946]/20
                    group-hover:border-[#FFB703]/40 transition-all duration-500
                    shadow-inner shadow-[#00000080]
                '>
                    <Image
                        src={iconContent?.url || 'https://placehold.co/600x400/212529/E63946?text=POST'}
                        alt={iconContent?.id || heading}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='
                            object-cover transition-all duration-700 
                            group-hover:scale-110 transform-gpu
                        '
                        placeholder='blur'
                        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9faLT300srRTcMk9eHL6nJEaK44OrVPoRmbWp8oAA'
                    />
                    
                    <div className='
                        absolute inset-0 bg-gradient-to-t 
                        from-[#212529]/80 via-transparent to-transparent
                        opacity-80 group-hover:opacity-60 transition-opacity duration-500
                    ' />
                </div>

                <section className='space-y-3'>
                    <Link href={`/blog/${slug}`}>
                        <h1 className='
                            text-xl md:text-2xl font-bold cursor-pointer
                            text-white
                            hover:text-[#FFB703] transition-colors duration-300
                            line-clamp-2
                            tracking-tight
                        '>
                            {heading}
                        </h1>
                    </Link>

                    <div className='flex flex-wrap gap-2'>
                        {categories?.slice(0, 3).map((item, idx) => ( 
                            <span
                                key={idx}
                                className='
                                    px-3 py-1 text-xs font-medium rounded-full
                                    bg-[#E63946]/10 border border-[#E63946]/30 text-[#E63946]
                                    group-hover:bg-[#FFB703]/10 group-hover:border-[#FFB703]/50 group-hover:text-[#FFB703]
                                    transition-all duration-300
                                    backdrop-blur-sm
                                '
                            >
                                {item?.name}
                            </span>
                        ))}
                    </div>

                    <p className='
                        text-gray-400 text-sm leading-snug
                        line-clamp-3 
                        transition-all duration-500
                    '>
                        {description}
                    </p>

                    <div className='pt-2'>
                        <Link href={`/blog/${slug}`}>
                            <button className='
                                px-4 py-2 rounded-full font-semibold text-sm
                                bg-[#FB8500]
                                hover:bg-[#FFB703]
                                text-[#212529] shadow-lg 
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
        </article>
    );
}