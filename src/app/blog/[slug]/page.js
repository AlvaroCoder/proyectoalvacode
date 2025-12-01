'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { CardTitles, PostCardDetail, PostCardDetailIntro } from '@/components/Cards';
import { Skeleton } from '@/components/ui/skeleton';
import { useFetch } from '@/utils/customHooks';
import { URL_PROJECT } from '@/utils/urls';

export default function BlogPage() {
    const { slug } = useParams();
    const URL_GET_POST_BY_CATEGORIE = URL_PROJECT.GET_POST_BY_SLUG;
    
    const { 
        dataResponse: dataPost, 
        loading: loadingDataPost, 
        error: errorDataPost 
    } = useFetch(`${URL_GET_POST_BY_CATEGORIE}/?slug=${slug}`);

    if (loadingDataPost) {
        return (
            <main className='w-full min-h-screen bg-white'>
                <div className='w-full bg-azul_oscuro py-12'>
                    <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        <Skeleton className="h-[300px] lg:h-[400px] w-full rounded-2xl bg-gray-700/50" />
                        <div className='space-y-4'>
                            <Skeleton className="h-8 w-32 bg-gray-700/50 rounded-full" />
                            <Skeleton className="h-16 w-full bg-gray-700/50" />
                            <Skeleton className="h-4 w-full bg-gray-700/50" />
                            <Skeleton className="h-4 w-2/3 bg-gray-700/50" />
                        </div>
                    </div>
                </div>
                <div className='max-w-4xl mx-auto mt-10 p-6 space-y-6'>
                    <Skeleton className="h-4 w-full bg-gray-200" />
                    <Skeleton className="h-4 w-full bg-gray-200" />
                    <Skeleton className="h-64 w-full rounded-xl bg-gray-200" />
                </div>
            </main>
        )
    }

    if (errorDataPost) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-xl text-red-500 font-semibold">Error al cargar el artículo.</p>
            </div>
        );
    }

    return (
        <main className='w-full min-h-screen bg-gray-50 pb-20'>
            
            {dataPost && <PostCardDetailIntro {...dataPost?.contentComponent} />}

            <div className='max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-12'>
                
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 relative'>
                    
                    <article className='lg:col-span-8 w-full'>
                        <div className='bg-white border border-gray-100 p-6 md:p-10 rounded-2xl shadow-sm'>
                            {dataPost && (
                                <PostCardDetail post={dataPost?.contentComponent?.content?.json} />
                            )}
                        </div>
                    </article>

                    <aside className='hidden lg:block lg:col-span-4 relative'>
                        <div className='sticky top-28'> 
                             <CardTitles data={dataPost?.contentComponent?.content?.json} />
                        </div>
                    </aside>

                </div>
            </div>
        </main>
    )
}