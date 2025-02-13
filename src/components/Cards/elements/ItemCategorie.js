import Image from 'next/image';
import React from 'react'

export default function ItemCategorie({
    data
}) {
    const {nameCategorie, urlIcon} = data;
  return (
    <div className='flex flex-col justify-center p-2 rounded-md border '>
      <Image
        width={50}
        height={50}
        src={urlIcon}
        alt='Imagen de icono del item de la categoria'
      />
      <p>{nameCategorie}</p>
    </div>
  )
}
