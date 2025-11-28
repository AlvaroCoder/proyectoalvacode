'use client'
import React, { useState } from 'react';
import { Mail, Send, Cpu, BriefcaseBusiness } from 'lucide-react'; 


export default function CardConsultoring() {
    const [dataEmail, setDataEmail] = useState('');

    const handleContact = () => {
        if (dataEmail.trim()) {
            console.log(`Enviando solicitud de consultoría para: ${dataEmail}`);
            // Aquí iría la lógica de envío real (API call)
            alert('¡Tu solicitud ha sido enviada! Te contactaremos pronto.'); // Usamos alert temporalmente para confirmación visual simple
        } else {
            alert('Por favor, ingresa un correo electrónico válido.');
        }
    };

    return (
        <div className='w-full flex items-center justify-center p-4 sm:p-8'>
            <section 
                className='
                    w-full max-w-6xl rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-center
                    bg-[#212529]/60 backdrop-blur-md border border-[#E63946]/30
                   
                    text-white relative overflow-hidden
                '
            >
                <div className='
                    absolute inset-0 bg-gradient-to-br from-[#E63946]/5 via-transparent to-[#FFB703]/5
                '/>

                <div className='w-full relative z-10 space-y-6'>
                    
                    <div className='space-y-2'>
                        <h1 className='text-3xl font-bold tracking-wide text-white'>
                            Consultoría <span className='text-[#FB8500]'>Tech</span>
                        </h1>
                        <p className='text-gray-300 text-lg'>
                            Empecemos a trabajar juntos. Cuéntame sobre tu proyecto o necesidad.
                        </p>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-3 w-full'>
                        <div className='relative w-full '>
                            <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500' />
                            <input
                                name='email'
                                type='email'
                                placeholder='Tu correo electrónico (ej. contacto@empresa.com)'
                                className='
                                    w-full py-3 pl-10 pr-4 rounded-xl text-white bg-[#212529]/80 border border-gray-700/50 
                                    focus:ring-2 focus:ring-[#FFB703] focus:border-transparent outline-none
                                    transition-all duration-300
                                '
                                onChange={(evt)=>setDataEmail(evt.target.value)}
                                value={dataEmail}
                            />
                        </div>
                        
                        <button
                            className='
                                w-full sm:w-1/3 py-3 rounded-xl font-bold text-[#212529]
                                bg-[#FB8500] hover:bg-[#FFB703] transition-all duration-300
                                shadow-[0_0_20px_rgba(251,133,0,0.5)] hover:shadow-[0_0_30px_rgba(255,183,3,0.7)]
                                flex items-center justify-center gap-2
                                transform hover:-translate-y-0.5
                            '
                            onClick={handleContact}
                        >
                            Contactar <Send className='w-4 h-4' />
                        </button>
                    </div>
                    <p className='text-xs text-gray-500 pt-2'>* La información de contacto es confidencial.</p>
                </div>
            </section>
        </div>
    )
};