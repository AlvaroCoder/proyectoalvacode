import React, { useState } from 'react'
import { Mail, Send } from 'lucide-react';

export default function SuscribeCard() {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email.trim() && email.includes('@')) {
            console.log(`Nueva suscripción solicitada para: ${email}`);
            alert(`¡Gracias por suscribirte, ${email}!`);
            setEmail('');
        } else {
            alert('Por favor, introduce un correo electrónico válido.');
        }
    };

  return (
    <div className='w-full flex items-center justify-center '>
        <section 
            className='
                w-full max-w-lg rounded-xl p-6 sm:p-8 
                bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30
                shadow-[0_0_30px_rgba(230,57,70,0.1)]
                text-white space-y-4 relative overflow-hidden
            '
        >
            {/* Elemento decorativo sutil */}
            <div className='
                absolute top-0 right-0 w-1/3 h-1/3 
                bg-[#FFB703]/10 rounded-full blur-3xl
            '/>
            
            <div className='relative z-10 space-y-3'>
                <h2 className='text-3xl font-bold tracking-tight text-[#FFB703] flex items-center gap-2'>
                    <Mail className='w-6 h-6 text-[#E63946]' />
                    Únete a alvacode
                </h2>
                
                <p className='text-gray-300 text-base'>
                    Suscríbete para recibir notificaciones cuando se publiquen nuevos artículos, tutoriales y análisis de código avanzado.
                </p>

                <div className='flex '>
                    
                    <button 
                        onClick={handleSubscribe}
                        className='
                            w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-[#212529]
                            bg-[#FB8500] hover:bg-[#FFB703] transition-all duration-300
                            shadow-lg shadow-[#FB8500]/50 hover:shadow-[0_0_25px_rgba(255,183,3,0.7)]
                            flex items-center justify-center gap-2 transform hover:-translate-y-0.5
                        '
                    >
                        Suscribirse <Send className='w-4 h-4' />
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
};