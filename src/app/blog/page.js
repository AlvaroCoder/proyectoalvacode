"use client"
import MainCardBlog from '@/components/Cards/MainCardBlog';
import TopBlogCard from '@/components/Cards/TopBlogCard';
import { SuscribeCard } from '@/components/Commons';
import { LoadingPage } from '@/components/Loading';
import PostCard from '@/components/Post/PostCard';
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
                   <MainCardBlog/>
                </section>
                <aside className='space-y-8 sticky top-0'>
                    <SuscribeCard/>
                    <TopBlogCard/>
                </aside>
            </main>
            
        </div>
    )
}
