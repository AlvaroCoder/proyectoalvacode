import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopBar() {
    /**
     *         {route : "/portfolio", name:"Portfolio", isSelected:true},
        {route:"/blog",name:"Blog",isSelected:false}
     */
    const links=[

    ]
  return (
    <div className='w-full h-fit py-4 flex flex-row justify-between items-center  text-blanco_claro bg-azul_oscuro px-4'>
        <div className=' '>
            <Link
            href={"/"}
            className='flex flex-row items-center '
            >
            <Image
                width={40}
                height={10}
                alt='Imagen Logo AlvaCode'
                src={"https://res.cloudinary.com/dabyqnijl/image/upload/c_thumb,w_200,g_face/v1707230326/logos/Group_21_ed6vbv.png"}
            />
            <h1 className='font-bold ml-4'>Alvacode</h1>
            </Link>
        </div>
        <ul
            className='flex flex-row'
        >
            {links.map(item=>
            <li
                key={item.name}
                className='list-none mx-4 border-b-2 px-2 border-b-azul_oscuro hover:border-b-blanco_claro '
            >
                <Link href={item.route}>{item.name}</Link>
            </li>)}
        </ul>
    </div>
  )
}
