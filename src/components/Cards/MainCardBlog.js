import React, { useState, useEffect } from 'react';
import { Zap, Clock, ChevronRight, Hash, Eye } from 'lucide-react';
import { useFetch } from '@/utils/customHooks';
import { URL_PROJECT } from '@/utils/urls';

const MainCardBlogSkeleton = () => (
    <section className='animate-pulse w-full rounded-2xl p-6 sm:p-8 bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30 shadow-xl'>
        <div className='flex flex-col lg:flex-row gap-6'>
            {/* Imagen Skeleton */}
            <div className='w-full lg:w-2/3 h-64 sm:h-80 bg-gray-700 rounded-lg'></div>
            {/* Contenido Skeleton */}
            <div className='w-full lg:w-1/3 space-y-4'>
                <div className='h-4 w-1/4 bg-gray-700 rounded'></div>
                <div className='h-8 w-full bg-gray-700 rounded'></div>
                <div className='h-8 w-11/12 bg-gray-700 rounded'></div>
                <div className='h-6 w-3/4 bg-gray-700 rounded'></div>
                <div className='h-4 w-1/2 bg-gray-700 rounded'></div>
                <div className='h-10 w-full bg-gray-700 rounded-full mt-6'></div>
            </div>
        </div>
    </section>
);

// =========================================================================
// COMPONENTE PRINCIPAL
// =========================================================================

export default function MainCardBlog() {
    const URL_MAIN_BLOG = URL_PROJECT.GET_FEATURE_BLOG;
    const { loading, dataResponse: featuredPost, error } = useFetch(URL_MAIN_BLOG);
    
    // --- Renderizado de estados ---

    if (loading) {
        return <MainCardBlogSkeleton />;
    }

    if (error) {
        return (
            <div className='w-full p-8 bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30 rounded-xl text-center text-[#E63946]'>
                <p>Error al cargar el blog destacado: {error.message}</p>
            </div>
        );
    }
    
    if (!featuredPost) {
        return (
            <div className='w-full p-8 bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30 rounded-xl text-center text-gray-400'>
                <p>No hay un post destacado disponible esta semana.</p>
            </div>
        );
    }

    // Desestructuración del post
    const { heading, description, slug, categories, iconContent, publishedAt } = featuredPost;
    console.log(featuredPost);
    
    const primaryCategory = categories?.[0]?.name || 'Tecnología';


    // --- Renderizado del Blog Destacado ---

    return (
        <div className='w-full'>
            <section 
                className='
                    w-full rounded-2xl p-6 sm:p-8 
                    bg-[#212529]/60 backdrop-blur-md border border-[#FFB703]/30 
                 
                    text-white relative overflow-hidden transition-all duration-500
                '
            >
                {/* Indicador de Destacado */}
                <div className='absolute top-0 left-0 bg-[#E63946] text-white px-4 py-1 text-xs font-bold uppercase rounded-br-lg z-20 shadow-md'>
                    <Zap className='inline w-3 h-3 mb-0.5' /> Destacado
                </div>

                <div className='flex flex-col lg:flex-row gap-6 relative z-10'>
                    
                    {/* Visual: Imagen del Post */}
                    <div className='w-full lg:w-2/3 relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-2xl border border-gray-700'>
                        <img
                            src={iconContent?.url}
                            alt={heading}
                            className='object-cover w-full h-full transform transition-transform duration-700 hover:scale-105'
                        />
                        {/* Gradiente oscuro en la parte inferior */}
                        <div className='absolute inset-0 bg-gradient-to-t from-[#212529]/70 to-transparent'></div>
                    </div>

                    {/* Contenido: Detalles y Descripción */}
                    <div className='w-full lg:w-1/3 space-y-4 flex flex-col justify-between'>
                        
                        <div>
                            {/* Metadatos */}
                            <div className='text-sm font-medium uppercase text-gray-500 mb-2 flex items-center gap-3'>
                                <span className='text-[#FB8500]'>{primaryCategory}</span>
                                <span className='h-1 w-1 rounded-full bg-gray-600'></span>
                                <Clock className='w-4 h-4 inline' />
                                {publishedAt || 'Reciente'}
                            </div>

                            {/* Título */}
                            <h2 className='text-3xl font-extrabold tracking-tight text-white hover:text-[#FFB703] transition-colors duration-300'>
                                {heading}
                            </h2>
                            
                            {/* Descripción (Ajustada para este formato) */}
                            <p className='text-gray-400 text-base mt-3 line-clamp-4'>
                                {description}
                            </p>
                        </div>

                        {/* Botón de Acción */}
                        <div className='pt-4'>
                            <a 
                                href={`/blog/${slug}`}
                                className='
                                    inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-bold text-lg
                                    bg-[#E63946] hover:bg-[#FB8500] text-white transition-all duration-300
                                    shadow-xl transform hover:-translate-y-1
                                '
                            >
                                Leer Artículo
                                <ChevronRight className='w-5 h-5 ml-2' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}