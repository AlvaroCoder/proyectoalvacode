'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

{/**Icons */}
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function PostCard({
    heading,
    description,
    datecreatedAt,
    iconContent,
    id,
    slug,
    categories=[]
}) {
  return (
    <article
        className='p-6  rounded-md text-blanco_claro'
    >
        <h1 className='text-4xl font-bold mb-4 hover:underline text-blanco_claro'>
            <Link className='' href={`/blog/${slug}`}>
                {heading}
            </Link>
        </h1>
        <section className='flex flex-row justify-between'>
            <div className='flex flex-row items-center'>
                <Image
                    width={30}
                    height={10}
                    alt='Foto de Perfil Alvaro'
                    src={"https://res.cloudinary.com/dabyqnijl/image/upload/v1727393562/imagePost/FotoPerfilAlvaro.png"}
                />
                <h1 className='font-bold mx-2'>AlvaCode</h1>
                <a
                    href='https://github.com/AlvaroCoder'
                    target='_blank'
                >
                <GitHubIcon className='cursor-pointer mr-2'/>
                </a>
                <a
                    href='https://www.linkedin.com/in/alvaro-felipe-pupuche-morales-8052ba210/'
                    target='_blank'
                >
                <LinkedInIcon className='cursor-pointer mr-2'/>
                </a>
            </div>
            <div className='flex flex-row'>
                <p>
                    <CalendarTodayIcon/>
                    <span className='mx-2'>{datecreatedAt}</span>
                </p>
                <ul className='flex flex-row'>
                    {categories.map((item, key)=><li 
                    className='list-none text-naranja mx-2'
                    key={key}>#{item.name}</li>)}
                </ul>
            </div>
        </section>
        <section className='w-full h-fit flex justify-center my-2'>
            <Image
                width={1026}
                height={720}
                alt='Imagen de Fondo Inicio'
                src={iconContent?.url}
            />
        </section>
        <section className='mt-2 h-fit'>
            <p className='text-xl'>{description}</p>
            <Link
                href={`/blog/${slug}`}
            
            >
               <p className='mt-4 border-naranja border-2 p-4 w-fit'>
                 Ver Mas
               </p>
            </Link>
        </section>
        
    </article>
  )
};