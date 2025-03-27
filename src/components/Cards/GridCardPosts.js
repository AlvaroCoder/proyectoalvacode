'use client'
import React, { useState } from 'react'
import { CardPost } from './elements'

export default function GridCardPosts({
  dataPostsServer=[],
  dataCategories=[],
}) {    
    const [dataPosts, setDataPosts] = useState(dataPostsServer);
    const [dataCategoriesPosts, setDataCategoriesPosts] = useState([{name : "Todos", slug : "todos"},...dataCategories]?.map((item, idx)=>{
      if (idx === 0) {
        return {
          ...item,
          isSelected : true
        }
      }
      return { 
        ...item,
        isSelected : false
      }
    }));
    const handleChangeCategorie=(idx)=>{
      const newDataCategorie = dataCategoriesPosts.map((item, key)=>{
        if (idx === key) {
          return {
            ...item,
            isSelected : true
          }
        }
        return {
          ...item,
          isSelected :false
        }
      });
      setDataCategoriesPosts(newDataCategorie);
    }
  return (
    <section className='max-w-6xl w-full'>
      <div className='  border-b-azul_oscuro my-4 flex justify-center'>
        <ul className='flex flex-row '>
          {
            dataCategoriesPosts?.map((item, key)=><p
              key={key}
              onClick={()=>handleChangeCategorie(key)}
              className={`border-b-2 py-2 px-4 cursor-pointer ${item?.isSelected ? 'border-b-naranja' : 'border-b-azul_oscuro'}`}   
            >{item?.name}</p>)
          }
        </ul>
      </div>
      <section
          className=' w-full grid grid-cols-1 md:grid-cols-2 gap-4'
      >
      
        
          {
              dataPosts?.map((item, idx)=><CardPost key={idx} data={item}/>)
          }
      </section>
    </section>
  )
}
