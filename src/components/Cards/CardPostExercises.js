'use client'
import React from 'react'
import PostCardDetail from './PostCardDetail'

export default function CardPostExercises({
    id,
    description,
    title,
    categoryExcercise,
    slug,
    solutionImage
}) {
    
    const handleDownload=async()=>{
        try {
            const response = await fetch(solutionImage?.url, {
              mode: 'cors',
            });
      
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
      
            const link = document.createElement('a');
            link.href = url;
            link.download = 'imagen-descargada.jpg'; // puedes ponerle un nombre dinámico
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          } catch (error) {
            console.error('Error al descargar la imagen:', error);
            alert('No se pudo descargar la imagen.');
          }
    }
  return (
    <div className='w-full p-4 rounded-lg bg-gray-100'>
        <div className='flex flex-row justify-between'>
            <h1 className='font-bold text-4xl'>{title}</h1>
            <ul className='flex flex-row gap-2 my-2'>
                {
                    categoryExcercise?.map(item=><li key={item?.nombre} className='bg-naranja p-1 text-azul_oscuro font-bold text-sm rounded-full  '>{item?.nombre}</li>)
                }
            </ul>
        </div>
        <div className='mt-4'>
            <PostCardDetail post={description?.raw} />
        </div>
        <button
            onClick={handleDownload}
            className="bg-azul_oscuro text-white font-semibold px-6 py-2 rounded-lg hover:bg-azul_oscuro transition"
        >
            Descargar imagen
        </button>
    </div>
  )
}
