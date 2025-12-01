'use client'
import React from 'react'
import Image from 'next/image'

export default function PostCardDetail({ post }) {
    
    const renderTextNode = (index, text, obj) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index} className="font-bold text-azul_oscuro">{text}</b>);
            }
            if (obj.italic) {
                modifiedText = (<em key={index} className="italic text-gray-700">{text}</em>);
            }
            if (obj.underline) {
                modifiedText = (<u key={index} className="decoration-naranja decoration-2 underline-offset-2">{text}</u>);
            }
            // Manejo de links
            if (obj.type === "link") {
                return (
                    <a 
                        key={index} 
                        target='_blank' 
                        rel="noreferrer" 
                        className='font-medium text-guinda underline decoration-transparent hover:decoration-naranja hover:text-naranja transition-all duration-300 underline-offset-2' 
                        href={obj.href}
                    >
                        {obj.children[0].text}
                    </a>
                )
            }
        }
        return <React.Fragment key={index}>{modifiedText}</React.Fragment>;
    };

    const getContentFragment = (index, text, obj, type) => {
        const content = Array.isArray(text) 
            ? text.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>) 
            : text;

        switch (type) {
            case 'heading-one':
                return (
                    <h1 key={index} id={text?.[0]?.toString().toLowerCase().replace(/\s/g, '-')} className='font-sans text-4xl md:text-5xl font-bold text-azul_oscuro mt-12 mb-8 pb-4 border-b-4 border-amarillo w-fit'>
                        {content}
                    </h1>
                );
            case 'heading-two':
                return (
                    <h2 key={index} className='font-sans text-3xl font-bold text-azul_oscuro mt-10 mb-6 flex items-center'>
                        <span className="w-2 h-8 bg-naranja mr-3 rounded-full"></span>
                        {content}
                    </h2>
                );
            case 'heading-three':
                return (
                    <h3 key={index} className='font-sans text-2xl font-semibold text-gray-800 mt-8 mb-4'>
                        {content}
                    </h3>
                );
            case 'paragraph':
                return (
                    <p key={index} className='font-sans text-lg md:text-xl text-gray-700 leading-relaxed mb-8'>
                        {content}
                    </p>
                );
            case 'image':
                return (
                    <div key={index} className="relative w-full my-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                        <img
                            alt={obj.title || "Imagen del artículo"}
                            src={obj.src}
                            className='w-full h-auto object-cover'
                            loading="lazy"
                        />
                        {obj.title && <p className="text-center text-sm text-gray-500 mt-2 p-2 bg-gray-50 italic">{obj.title}</p>}
                    </div>
                );
            case 'code-block':
                return (
                    <div key={index} className='relative my-10 rounded-lg overflow-hidden shadow-xl bg-azul_oscuro group'>
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-auto text-xs text-gray-400 font-mono">snippet</span>
                        </div>
                        <div className="p-6 overflow-x-auto custom-scrollbar">
                            <code className='font-mono text-sm md:text-base text-gray-200 whitespace-pre leading-loose'>
                                {content}
                            </code>
                        </div>
                    </div>
                );
            case 'block-quote':
                return (
                    <blockquote key={index} className='relative my-10 pl-6 pr-4 py-4 border-l-4 border-naranja bg-orange-50/30 rounded-r-lg'>
                        <span className="absolute top-0 left-2 text-6xl text-naranja/20 font-serif leading-none">“</span>
                        <p className='text-xl italic text-gray-700 font-serif relative z-10'>
                            {content}
                        </p>
                    </blockquote>
                );
            case 'bulleted-list':
                return (
                    <ul key={index} className='list-none space-y-3 mb-8 pl-2 md:pl-6'>
                        {obj.children.map((item, i) => {
                             const itemText = item.children[0].children[0].text;
                             return (
                                <li key={i} className='relative pl-8 text-lg text-gray-700 leading-relaxed'>
                                    <span className="absolute left-0 top-2.5 w-2 h-2 bg-guinda rounded-full"></span>
                                    {itemText}
                                </li>
                             )
                        })}
                    </ul>
                );
            case 'numbered-list':
                 // Agrego soporte por si acaso usas listas numeradas
                return (
                    <ol key={index} className='list-decimal space-y-3 mb-8 pl-6 md:pl-10 text-lg text-gray-700 marker:text-guinda marker:font-bold'>
                        {obj.children.map((item, i) => (
                             <li key={i} className='pl-2 leading-relaxed'>
                                {item.children[0].children[0].text}
                             </li>
                        ))}
                    </ol>
                );
            default:
                return content;
        }
    }

    return (
        <article className="max-w-4xl mx-auto px-4 w-full selection:bg-naranja selection:text-white pb-20">
            {post.children?.map((typeObj, index) => {
                
                if(typeObj.type === "bulleted-list" || typeObj.type === "numbered-list"){
                     return getContentFragment(index, null, typeObj, typeObj.type);
                }

                const children = typeObj.children.map((item, itemIndex) => {
                    if (item.type === 'link') {
                         return renderTextNode(itemIndex, null, item);
                    }
                    return renderTextNode(itemIndex, item.text, item);
                });

                return getContentFragment(index, children, typeObj, typeObj.type);
            })}
        </article>
    )
}