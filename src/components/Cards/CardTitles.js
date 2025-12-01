'use client'
import React from 'react'

export default function CardTitles({
    data
}) {
  
  const createSlug = (text) => {
    return text
        ?.toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-'); 
  }

  const getTableOfContents = (content) => {
    if (!content) return [];
    
    return content.map((block) => {
      if (block.type === 'heading-one' || block.type === 'heading-two') {
        const text = block.children?.[0]?.text;
        if (!text) return null;

        return {
          text: text,
          id: createSlug(text),
          type: block.type 
        };
      }
      return null;
    }).filter(item => item !== null);
  }
  
  const tocItems = getTableOfContents(data?.children);

  if (!tocItems || tocItems.length === 0) return null;

  return (
    <aside className='sticky top-24 w-full'>
        <div className='bg-azul_oscuro p-6 rounded-xl shadow-xl border-t-4 border-amarillo relative overflow-hidden group'>
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl pointer-events-none"></div>

            <h3 className='font-sans text-amarillo font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-2'>
                <span className="w-2 h-2 rounded-full bg-naranja animate-pulse"></span>
                Contenido
            </h3>

            <nav className='flex flex-col gap-1'>
                {tocItems.map((item, index) => (
                    <a 
                        key={index} 
                        href={`#${item.id}`}
                        className={`
                            group/link flex items-center
                            text-sm font-medium transition-all duration-300 ease-out
                            py-2 px-3 rounded-lg
                            hover:bg-white/10
                            ${item.type === 'heading-two' ? 'pl-8 text-gray-400' : 'text-gray-200'}
                        `}
                    >
                        <span className={`
                            w-1 h-0 bg-naranja absolute left-0 transition-all duration-300 rounded-r-full
                            group-hover/link:h-6 group-hover/link:opacity-100 opacity-0
                        `}></span>

                        <span className="group-hover/link:text-white group-hover/link:translate-x-1 transition-transform truncate">
                            {item.text}
                        </span>
                    </a>
                ))} 
            </nav>
        </div>
    </aside>
  )
}