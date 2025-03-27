'use client'
import React from 'react'

export default function PostCardDetail({post}) {
    console.log(post);
    
    const getContentFragment = (index, text, obj, type)=>{
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>)
            }
            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
              }
        
              if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
              }
              if (obj.type==="link") {
                modifiedText = (<a key={index} target='_blank'  rel="noreferrer" className='underline' href={obj.href}>{obj.children[0].text}</a>)
              }
        }
        switch (type) {
            case 'heading-one':
                return <div key={index} className='flex justify-start'>
                    <h1  id={modifiedText[0]}  className='font-sans border-b-2 px-4 border-b-amarillo text-azul_oscuro text-5xl font-semibold my-10'>{modifiedText.map((item, i) => <React.Fragment key={i} >{item}</React.Fragment>)}</h1>
                </div>        
            case 'heading-two':
                return <h2 key={index} className='font-sans text-amarillo text-2xl font-semibold mb-2 '>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>
            case 'heading-three':
                return <h3 key={index}  className='font-sans text-azul_oscuro text-xl font-semibold mb-2'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>
            case 'paragraph':
                return <p key={index} className='font-sans text-azul_oscuro mb-8 text-xl'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
            case 'image':
                return(
                    <img
                        key={index}
                        alt={obj.title}
                        src={obj.src}
                        className='my-4'
                    />
                )
            case 'code-block':
                return <div key={index} className=' bg-azul_oscuro text-white p-4 rounded-md my-8 shadow-lg'>
                    <code className='font-mono whitespace-pre-wrap text-nowrap text-title_white overflow-x-auto' lang='js'>
                        {modifiedText.map((item,i)=><React.Fragment  key={i}>{item}</React.Fragment>)}
                    </code>
                </div>
            case 'block-quote':
                return <div key={index} className='w-full h-auto  px-4 py-1 my-10 border-l-4 border-white items-center '>
                     <p className='text-azul_oscuro font-sans text-xl'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
                </div>
            case 'bulleted-list':
                return (
                    <ul key={index} className='list-disc w-full px-8'>
                        {modifiedText.map((item, itemindex) => {
                            return(
                                <li key={itemindex} className='text-azul_oscuro my-4 text-xl font-sans'>{item}</li>
                            )
                        })}
                    </ul>
                );
            default:
                return modifiedText;
        }
    }
    return (
        <>
            {post.children?.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) => {
                    if (item.type === "list-item") {
                        const child = item.children?.[0].children?.[0].children?.[0].text
                        return getContentFragment(itemindex, child, item)
                    }
                    return getContentFragment(itemindex, item.text, item)
                });
                return getContentFragment(index, children, typeObj, typeObj.type);
            })}
        </>
    )
}
