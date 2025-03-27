'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function CardPost({data={}}) {
    const {heading, description, categories, iconContent, slug} = data;        
  return (
    <article
        className=' p-4 rounded-lg shadow-lg  bg-gray-100 text-azul_oscuro'
    >
        <div className='w-full h-72 md:h-56 lg:min-h-96 rounded-lg relative object-cover'>
            <Image
                src={iconContent?.url}
                alt={iconContent?.id}
                width={200}
                height={100}
                className='absolute inset-0 w-full h-full object-cover rounded-lg'
            />
        </div>
        <section className='mt-2'>
            <Link
                href={`/blog/${slug}`}
            >
                <h1 className='text-4xl font-bold  cursor-pointer hover:underline'>{heading}</h1>
            </Link>
            <div className='w-full flex flex-row'>
                {
                    categories?.map((item, idx)=><p key={idx} className='text-azul_oscuro bg-naranja p-2 w-fit my-2 mx-2'>{item?.name}</p>)
                }
            </div>
            <p className=' '>{description}</p>
        </section>
    </article>
  )
}
