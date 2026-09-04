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
    const { loading, dataResponse } = useFetch(URL_PROJECT.GET_POSTS);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="bg-[#212529] w-full min-h-screen pt-20">
            <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">

                {/* Page header */}
                <div className="flex items-start justify-between mb-16">
                    <div>
                        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#FB8500]/70 mb-4">
                            Blog &amp; Conocimiento
                        </p>
                        <h1 className="text-4xl sm:text-5xl font-light text-[#F8F9FA] leading-tight">
                            Artículos sobre{" "}
                            <span className="text-[#FB8500]">tecnología</span>
                            <br />y desarrollo.
                        </h1>
                    </div>
                    <div className="hidden sm:block pt-2">
                        <ButtonSearch />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* Main content */}
                    <section className="lg:col-span-3 space-y-16">

                        {/* Featured post */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-px bg-[#FB8500]" />
                                <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#FB8500]/70">
                                    Destacado
                                </p>
                            </div>
                            <MainCardBlog />
                        </div>

                        {/* Recent posts */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-px bg-[#FB8500]" />
                                <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#FB8500]/70">
                                    Artículos recientes
                                </p>
                            </div>
                            <GridCardPostBlogs dataBlogs={dataResponse} />
                        </div>

                    </section>

                    {/* Sidebar */}
                    <aside className="space-y-6 lg:sticky lg:top-24 self-start">
                        <SuscribeCard />
                        <TopBlogCard />
                    </aside>

                </div>
            </main>
        </div>
    );
}