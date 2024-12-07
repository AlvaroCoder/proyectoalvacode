import Image from 'next/image'
import React from 'react'

export default function page() {

    return (
    <main className='w-full min-h-screen bg-azul_oscuro flex items-center flex-col'>
        <div className='w-full max-w-[1000px] my-8'>
            <h1 className='text-3xl font-bold'>Proyectos Personales</h1>
            <p>Algunos personales proyectos en los que he estado trabajando</p>
        </div>
        <section className='w-full max-w-[1000px] bg-azul_oscuro_claro p-4 border-l-8 border-l-amarillo flex flex-row my-4'>
            <Image
                src={"https://res.cloudinary.com/dabyqnijl/image/upload/v1733554635/gwr4n5uanxbbd6afa1fs.png"}
                width={512}
                height={360}
                alt='Imagen de aplicación Pomodoro'
            />
            <div className='ml-4'>
                <h1 className='font-bold text-3xl underline'>Aplicación de Pomodoro</h1>
                <p className='w-[350px] text-wrap   '>Aplicación inspirada en la metodología de estudio de pomodoro. Permite litar tareas, asi como asignarles una duración a cada una y por último asignarle una prioridad.</p>
                <h2 className='mt-4 font-bold text-xl'>Tecnologías Utilizadas</h2>
                <ul>
                    <li>React</li>
                </ul>
                <h2 className='mt-4 font-bold text-xl'>Tipo de Aplicación</h2>
                <p className=' mb-6'>Página Web</p>
                <div className='mt-7'>
                    <a className='border-amarillo border-2 p-2 rounded-md mx-2' href='https://pomodoro-app-lilac-kappa.vercel.app/' target='_blank'>Visita la Página</a>
                    <a className='border-amarillo border-2 p-2 rounded-md mx-2' href='https://github.com/AlvaroCoder/PomodoroApp' target='_blank'>Ver Repositorio</a>
                </div>
            </div>
        </section>
        <section className='w-full max-w-[1000px] bg-azul_oscuro_claro px-4 py-6 border-l-8 border-l-amarillo flex flex-row my-4'>
            <Image
                src={"https://res.cloudinary.com/dabyqnijl/image/upload/v1733556485/izbh8c38inqukbisrhti.gif"}
                width={512}
                height={360}
                alt='Gif de aplicación de tareas'
                unoptimized={true}
            />
            <div className='ml-4'>
                <h1 className='font-bold text-3xl underline'>Aplicación de Tareas</h1>
                <p className='w-[350px] text-wrap   '>Aplicación de escritorio que ayudar a listar las tareas de un día, crearlas y eliminarlas. Asi mismo, puedes agregarle una descripción, para un mayor entendimiento de la tarea. </p>
                <h2 className='mt-4 font-bold text-xl'>Tecnologías Utilizadas</h2>
                <ul>
                    <li>JAVA</li>
                    <li>SQL</li>
                </ul>
                <h2 className='mt-4 font-bold text-xl'>Tipo de Aplicación</h2>
                <p className=' mb-6'>Aplicación de escritorio</p>
                <div className='mt-7'>
                    <a className='border-amarillo border-2 p-2 rounded-md mx-2' href='https://github.com/AlvaroCoder/AppTareario' target='_blank'>Ver Repositorio</a>
                </div>
            </div>
        </section>
    </main>
  )
}
