
import React from 'react'
import { Input } from '../ui/input'
import { ButtonSearch, ItemCategorie } from './elements';

export default function CardSearchNavigation() {
    return (
    <section className='w-full min-h-screen bg-azul_oscuro_claro flex flex-col justify-center items-center'>
        <h1 className='text-white font-bold text-4xl pb-4'>Aprende de <span className='text-amarillo'>tecnología</span></h1>
        <div className='max-w-[50%] w-full relative py-2'>
            <Input
                className="w-full py-6 px-4 rounded-3xl text-azul_oscuro bg-white"
                placeholder="Busca información de Inteligencia Artificial, JavaScript, Python ... "
            />
            <ButtonSearch className='absolute top-3 right-2' />
        </div>
        <section className='grid grid-cols-3'>
            <div className='col-span-2 grid grid-cols-1'>
                
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </section>
    </section>
  )
};