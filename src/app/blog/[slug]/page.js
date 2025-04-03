'use client'
import { CardTitles, PostCardDetail, PostCardDetailIntro } from '@/components/Cards';
import { Skeleton } from '@/components/ui/skeleton';
import { useFetch } from '@/utils/customHooks';
import { URL_PROJECT } from '@/utils/urls';
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const {slug} = useParams();
    const URL_GET_POST_BY_CATEGORIE = URL_PROJECT.GET_POST_BY_SLUG;
    const {dataResponse : dataPost, loading : loadingDataPost, error : errorDataPost} = useFetch(URL_GET_POST_BY_CATEGORIE+"/?slug="+slug);  
  if (loadingDataPost) {
    return(
      <section className='w-full min-h-screen bg-white'>
        <div className='w-full flex   flex-col gap-8 justify-center items-center md:flex-row bg-azul_oscuro shadow-sm py-8'>
        <Skeleton
          className={"h-[420px] w-full md:w-1/2 bg-white"}
        />
        <Skeleton className={'md:w-[40%] h-[420px] w-full px-4 bg-white'}/>
      </div>
      </section>
    )
  }
  return (
    <div className='w-full min-h-screen bg-azul_oscuro_claro' >
          <section className='w-full'>
            {dataPost && <PostCardDetailIntro {...dataPost?.contentComponent} />}
            <section className='w-full col-span-full lg:col-span-7 flex lg:flex-row flex-col-reverse md:items-start items-center justify-center py-6'>
              <div className='lg:w-[60%] md:px-4 w-full bg-gray-200 border border-white p-6 rounded-lg '>
                {dataPost && <PostCardDetail post={dataPost?.contentComponent?.content?.json}/> }
              </div>
              <section className='lg:block lg:w-80 hidden mx-4 relative md:mb-0 mb-8 before:w-full before:!h-1 lg:sticky top-0  p-6  '>
                <div className='flex flex-col justify-center'>
                  <CardTitles data={dataPost?.contentComponent?.content?.json} />
                </div>                
              </section>
            </section>
          </section>
    </div>
  )
}
