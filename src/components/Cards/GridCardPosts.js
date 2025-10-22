'use client'
import React, { useMemo, useState } from 'react'
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
       
    const filterData=useMemo(()=>{
      const categorieSelected = dataCategoriesPosts.filter((item)=>item.isSelected)[0];
      if (categorieSelected?.name?.toUpperCase() === "TODOS") {
        return dataPosts;
      }
      return dataPosts.filter((item)=>item?.categories?.some(category => categorieSelected?.name.toUpperCase().includes(category?.name?.toUpperCase())));
    }, [dataCategoriesPosts, dataPosts])

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
      {
        filterData.length > 0 ?
          <section
            className=' w-full grid grid-cols-1 md:grid-cols-2 gap-4'
          >
            {filterData?.map((item, idx)=>{
              if (idx < 4) {
                return <CardPost key={idx} data={item}/>
              }
              return null;
            })}
          </section> : 
        <section className='w-full flex justify-center items-center min-h-40  text-azul_oscuro'>
            <h1>Aún no hay data</h1>
        </section>
      }
      
    </section>
  )
}
