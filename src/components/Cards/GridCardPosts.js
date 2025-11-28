'use client'
import React, { useMemo, useState } from 'react'
import { CardPost } from './elements';

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
    <section className='max-w-6xl w-full mx-auto p-4 bg-[#212529] rounded-xl'>
      
      <div className='my-8 flex justify-center'>
        <ul className='flex flex-wrap justify-center gap-3 p-2 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50'>
          {
            dataCategoriesPosts?.map((item, key)=><p
              key={key}
              onClick={()=>handleChangeCategorie(key)}
              className={`
                py-2 px-4 cursor-pointer text-sm font-semibold rounded-lg transition-all duration-300
                shadow-inner shadow-[#00000080]
                
                ${item?.isSelected 
                    ? 'bg-[#E63946]/20 border border-[#E63946] text-[#FFB703] shadow-[0_0_10px_rgba(230,57,70,0.5)]' 
                    : 'bg-[#212529]/70 border border-gray-700/50 text-gray-400 hover:text-white hover:border-[#FFB703]/30'
                }
              `}   
            >
              {item?.name}
            </p>)
          }
        </ul>
      </div>
      
      {
        filterData.length > 0 ?
          <section
            className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4' 
          >
            {filterData?.map((item, idx)=>{
              if (idx < 6) {
                 return <CardPost key={idx} data={item}/>
              }
              return null
            })}
          </section> : 
        <section className='w-full  flex justify-center items-center min-h-[400px] text-gray-400 bg-[#212529]/50 rounded-lg p-6'>
            <h1 className='text-lg font-medium text-white'>Aún no hay data para esta categoría.</h1>
        </section>
      }
      
    </section>
  )
}