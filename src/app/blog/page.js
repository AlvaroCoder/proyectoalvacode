"use client"
import { SuscribeCard } from '@/components/Commons';
import { LoadingPage } from '@/components/Loading';
import PostCard from '@/components/Post/PostCard';
import { useFetch } from '@/utils/customHooks'
import { URL_PROJECT } from '@/utils/urls';
import React from 'react'

export default function page() {
    const URL = URL_PROJECT.GET_POSTS
    const {loading, dataResponse, error} = useFetch(URL, "POST");
        
    if (loading) {
        return <LoadingPage/>
    }
    return (
        <div
            className='bg-azul_oscuro w-full min-h-screen '
        >
            {/* Categorias */}
            

            {/** Contenido principal */}
            <main className='px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8'>
                <section className='lg:col-span-3 space-y-8'>
                    {
                        dataResponse?.map(dataPostCard=><PostCard key={dataPostCard?.id} {...dataPostCard}/>)
                    }
                </section>
                <aside className='space-y-8 sticky top-0'>
                    {/**Sección de suscripción */}
                    <SuscribeCard/>

                    {/** Sección de Top Blogs */}
                    <div className='bg-azul_oscuro_claro p-6 rounded-md'>
                        <h1 className='text-xl font-bold mb-4'>Top Blogs</h1>
                        <ul>

                        </ul>
                    </div>
                </aside>
            </main>

            {/** Sidebar */}
            
        </div>
    )
}
