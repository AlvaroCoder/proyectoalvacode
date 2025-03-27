'use client'
import { PostCardDetail, PostCardDetailIntro } from '@/components/Cards';
import { useFetch } from '@/utils/customHooks';
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const {slug} = useParams();
    const URL_GET_POST_BY_CATEGORIE = process.env.NEXT_PUBLIC_URL_GET_POST_BY_CATEGORIE_DEPLOY;
    const {dataResponse : dataPost, loading : loadingDataPost, error : errorDataPost} = useFetch(URL_GET_POST_BY_CATEGORIE+"/?slug="+slug);  
  console.log(dataPost);
  
  return (
    <div className='w-full min-h-screen ' >
        {
          loadingDataPost ? 
          <div>
            <h1>Cargando ...</h1>
          </div> : 
          <section className='w-full'>
            {dataPost && <PostCardDetailIntro {...dataPost?.contentComponent} />}
            <section className='w-full col-span-full lg:col-span-7 flex lg:flex-row flex-col-reverse md:items-start items-center justify-center py-6'>
              <div className='lg:w-[60%] md:px-4 w-full bg-gray-100 p-6 rounded-lg '>
                {dataPost && <PostCardDetail post={dataPost?.contentComponent?.content?.json}/> }
              </div>
            </section>
          </section>
        }
    </div>
  )
}
