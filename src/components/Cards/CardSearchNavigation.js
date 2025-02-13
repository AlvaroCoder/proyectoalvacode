import React from 'react'
import { Input } from '../ui/input'
import { ButtonSearch, ItemCategorie } from './elements';

export default function CardSearchNavigation() {
    
    const listCategories=[
        {nameCategorie : "Python", urlIcon : "https://res.cloudinary.com/dabyqnijl/image/upload/v1739480953/logos/jz1ckuhjetlnlhlihoyf.png"},
        {nameCategorie : "JavaScript", urlIcon : "https://res.cloudinary.com/dabyqnijl/image/upload/v1739480952/logos/lccvmb96r0o2fdnoh4ph.png"},
        {nameCategorie : "IA", urlIcon : "https://res.cloudinary.com/dabyqnijl/image/upload/v1739480952/logos/y4ylwyq0kgkmvaw7wm4z.png"}
    ]
  return (
    <section className='w-full h-96 bg-azul_oscuro_claro flex flex-col justify-center items-center'>
        <h1 className='text-white font-bold text-2xl pb-4'>Encuentra el tema que buscabas</h1>
        <div className='max-w-[50%] w-full relative py-2'>
            <Input
                className="w-full py-6 rounded-3xl text-azul_oscuro bg-white"
                placeholder="Busca información de Inteligencia Artificial, JavaScript, Python ... "
            />
            <ButtonSearch className='absolute top-3 right-2' />
        </div>
        <div className='w-fit p-2 flex flex-row items-center justify-center' >
            {
                listCategories?.map((item, key)=><ItemCategorie data={item} key={key}/>)
            }
        </div>
    </section>
  )
};