'use client'
import Image from 'next/image'
import React from 'react'

export default function PostCardDetailIntro({
    iconContent,
    createdAt,
    heading,
    description,
    categories
}) {
  return (
    <div className='w-full   flex flex-col  justify-center items-center md:flex md:flex-row bg-azul_oscuro shadow-sm py-8'>
        <div className='relative w-full h-[420px]  p-6 md:w-1/2'>
            <Image 
                className='absolute inset-0 w-full h-full  rounded-lg  md:w-[720px]'
                layout='fill'
                objectFit='cover'

                src={iconContent?.url} 
                alt={iconContent?.id}/>
        </div>
        <div className='md:w-[40%] w-full px-4 text-white' >
            <h1 className='font-sans md:text-6xl  text-5xl font-bold'>{heading}</h1>
            <ul>
                {
                    categories?.map((item, key)=><li key={key} className='bg-naranja rounded-lg p-2 text-azul_oscuro w-fit'>{item?.name}</li>)
                }
            </ul>
            <p className='lg:w-[400px] font-sans mt-5 mb-4 text-lg text-[nowrap]'>{description}</p>

        </div>
    </div>
  )
}
