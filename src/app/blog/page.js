"use client"
import { ButtonSearch } from '@/components/Cards/elements';
import GridCardPostBlogs from '@/components/Cards/GridCardPostBlogs';
import MainCardBlog from '@/components/Cards/MainCardBlog';
import TopBlogCard from '@/components/Cards/TopBlogCard';
import { SuscribeCard } from '@/components/Commons';
import { LoadingPage } from '@/components/Loading';
import { useFetch } from '@/utils/customHooks'
import { URL_PROJECT } from '@/utils/urls';
import React from 'react'

export default function page() {
    const URL = URL_PROJECT.GET_POSTS
    const {loading, dataResponse, error} = useFetch(URL);
    
    if (loading) {
        return <LoadingPage/>
    }
    return (
        <div
            className='bg-azul_oscuro w-full min-h-screen pt-20'
        >            
            <main className='px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8'>
                <section className='lg:col-span-3 space-y-8 flex flex-col'>
                    <div>
                        <div className='flex flex-row gap-4 justify-between'>
                            <h1 className='font-bold text-6xl text-gris_claro'>
                            Bienvenido a mi <span className='text-rojo'>Blog</span>
                            </h1>
                            <ButtonSearch/>
                        </div>
                        <p className='text-gris_claro'>Descrubre lo que estas buscando sobre tecnología</p>
                    </div>
                    <MainCardBlog />
                    <div>
                        <h1 className='text-gris_claro font-bold text-3xl'>Blog recientes</h1>
                        
                        <GridCardPostBlogs
                            dataBlogs={dataResponse}
                        />
                    </div>
                </section>
                <aside className='space-y-8 sticky top-0'>
                    <SuscribeCard/>
                    <TopBlogCard/>
                </aside>
            </main>
            
        </div>
    )
}
