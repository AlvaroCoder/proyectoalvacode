import React from 'react';
import { Zap, ChevronRight, Hash } from 'lucide-react';
import { useFetch } from '@/utils/customHooks';
import { URL_PROJECT } from '@/utils/urls';

export default function TopBlogCard() {
    const URL_TOP_POST = URL_PROJECT.GET_TOP_BLOGS;
    
    const { loading, dataResponse, error } = useFetch(URL_TOP_POST); 
    console.log(dataResponse);
    
    const topPosts = dataResponse || [];

    if (loading) {
        return (
            <div className='p-6 bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30 rounded-xl text-center text-[#FFB703]'>
                <p className="animate-pulse">Cargando los blogs más recientes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className='p-6 bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30 rounded-xl text-center text-[#E63946]'>
                <p>Error al cargar los blogs: {error.message}</p>
            </div>
        );
    }

    if (topPosts.length === 0) {
        return (
            <div className='p-6 bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30 rounded-xl text-center text-gray-400'>
                <p>No se encontraron publicaciones principales.</p>
            </div>
        );
    }

    return (
        <div className='w-full'>
            <section
                className='
                    p-6 rounded-2xl 
                    bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30
                    shadow-xl text-white space-y-4
                '
            >
                <h2 className='text-2xl font-bold tracking-tight text-[#FFB703] flex items-center gap-2 border-b border-[#E63946]/50 pb-3'>
                    <Zap className='w-6 h-6 text-[#E63946]' />
                    Top Blogs (Recientes)
                </h2>

                <ul className='space-y-3'>
                    {topPosts.map((post, index) => (
                        <li key={post.id} className='
                            group flex items-start p-3 rounded-lg 
                            border border-transparent hover:border-[#FFB703]/50 
                            transition-all duration-300
                            cursor-pointer
                        '>
                            <div className='flex-shrink-0 mr-4 mt-1'>
                                <span className={`
                                    text-xl font-extrabold 
                                    ${index === 0 ? 'text-[#FFB703]' : index === 1 ? 'text-[#FB8500]' : index === 2 ? 'text-[#E63946]' : 'text-gray-500'}
                                `}>
                                    {`#${index + 1}`}
                                </span>
                            </div>
                            
                            <a 
                                href={`/blog/${post.slug}`}
                                className='flex flex-col flex-grow'
                            >
                                <p className='text-base font-semibold text-white group-hover:text-[#FFB703] transition-colors duration-300 line-clamp-2'>
                                    {post.heading}
                                </p>
                                <div className='flex items-center gap-2 text-xs text-gray-500 mt-1'>
                                    <Hash className='w-3 h-3' />
                                    <span>
                                        {post.categories?.[0]?.name || 'General'}
                                    </span>
                                </div>
                            </a>
                            
                            <ChevronRight className='w-5 h-5 ml-4 text-gray-500 group-hover:text-[#E63946] transition-all duration-300 group-hover:translate-x-1 flex-shrink-0' />
                        </li>
                    ))}
                </ul>
            
            </section>
        </div>
    );
}