import React from 'react'

export default function CardTitles({
    data
}) {
  const addCategorieToResume =(data)=>{
    return data.map((val)=>{
      if (val.type==="heading-one") {
        const item = val.children[0].text;
        return item;
      }
      return null
    }).filter((item)=>item!==null);
  }
  console.log(data);
  
  const currentData =addCategorieToResume(data?.children);

  return (
    <div className='bg-azul_oscuro p-6 rounded-lg bg-black_2 shadow-md overflow-hidden  before:bg-black_2 before:absolute before:left-0 before:top-0 border-t-4 border-t-amarillo'>
        {currentData ? currentData.map((val, index)=><a key={index} href={`#${val}`}><p  className='lg:max-w-[250px]  w-full font-bold cursor-pointer py-2 px-4 my-2 rounded-lg hover:text-amarillo hover:bg-amarillo_opaco text-white '>{val}</p></a>) : null} 
    </div>
  )
}
