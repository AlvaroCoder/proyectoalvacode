'use client'
import React, { useState } from 'react'

export default function SuscribeCard() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubscribe = () => {
        if (!email.trim() || !email.includes('@')) return;
        // TODO: conectar con endpoint de suscripción real
        setSent(true);
        setEmail('');
    };

    return (
        <div className="w-full border border-[#E9ECEF]/10 p-6">
            <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#FB8500]/70 mb-4">
                Newsletter
            </p>

            {sent ? (
                <p className="text-sm text-[#ADB5BD] font-light">
                    Suscripción registrada. ¡Gracias!
                </p>
            ) : (
                <>
                    <h2 className="text-base font-light text-[#F8F9FA] mb-2 leading-snug">
                        Nuevos artículos directo a tu correo.
                    </h2>
                    <p className="text-xs text-[#ADB5BD] font-light mb-6 leading-relaxed">
                        Sin spam. Solo contenido técnico cuando se publique.
                    </p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                        placeholder="correo@empresa.com"
                        className="w-full bg-transparent border-b border-[#E9ECEF]/20 py-2 text-[#F8F9FA] text-sm font-light outline-none focus:border-[#FB8500] transition-colors duration-200 placeholder:text-[#6C757D] mb-4"
                    />
                    <button
                        onClick={handleSubscribe}
                        className="w-full py-3 bg-[#FB8500] text-[#212529] font-semibold text-[10px] tracking-[0.25em] uppercase hover:bg-[#FFB703] transition-colors duration-200"
                    >
                        Suscribirse
                    </button>
                </>
            )}
        </div>
    );
}