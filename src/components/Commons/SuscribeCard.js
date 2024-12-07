import React from 'react'

export default function SuscribeCard() {
  return (
    <div className='bg-azul_oscuro_claro p-6 border-t-8 border-t-amarillo text-blanco_claro'>
        <h2 className='text-2xl font-bold mb-4'>Suscríbete</h2>
        <p>
            Suscribete para recibir notificaciones cuando se publiquen nuevos artículos
        </p>
        <input
            type='email'
            placeholder='Correo electronico'
            className='w-full p-2 bg-gris_claro text-azul_oscuro border border-gris_claro mt-2 outline-offset-1 outline-azul_oscuro'
        />
        <button 
            className='p-2 bg-amarillo text-azul_oscuro_claro font-bold mt-2'
        >
            Suscribirse
        </button>
    </div>
  )
};