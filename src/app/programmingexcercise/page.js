'use client';
import { CardPostExercises } from '@/components/Cards';
import { useFetch } from '@/utils/customHooks';
import React from 'react'


export default function Page() {
  const URL_GET_POST_EXERCISES = process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION + "/posts/exercise";

  const {dataResponse : dataPostsExercises, loading : loadingDataPostExercises} = useFetch(URL_GET_POST_EXERCISES);

  if (loadingDataPostExercises) {
    return (<div className='w-full min-h-screen'>
      <p>Cargando...</p>
    </div>)
  }
  return (
    <div className='w-full min-h-screen'>
      <section className='w-full flex justify-center items-center bg-azul_oscuro h-40'>
      <div className="w-max flex flex-col items-center">
          <h1 className="animate-typing  overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-naranja font-bold">Ejercicios de programación</h1>
        </div>
      </section>
      <section className='w-full flex justify-center items-center py-8'>
        <div className='w-full max-w-4xl'>
          {
            dataPostsExercises?.programmingExcercises?.map((item)=><CardPostExercises key={item?.id} {...item}/>)
          }
        </div>
      </section>
    </div>
  )
}
