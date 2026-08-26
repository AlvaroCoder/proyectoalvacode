'use client'
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// ← Cambia este email por el tuyo
const CONTACT_EMAIL = 'hola@alvacode.dev';

const OFFERINGS = [
  'Desarrollo de software a medida',
  'Automatización de procesos internos',
  'Consultoría tecnológica estratégica',
  'Integración de sistemas y APIs',
];

const INITIAL_FORM = { name: '', email: '', company: '', message: '' };

export default function CardConsultoring() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Por favor completa los campos obligatorios.');
      return;
    }

    const subject = encodeURIComponent(
      `Consulta desde alvacode.dev — ${form.company || form.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmpresa: ${form.company || 'No especificada'}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );

    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_blank');
    setForm(INITIAL_FORM);
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#212529] py-28 px-6 sm:px-8 lg:px-12 border-t border-[#E9ECEF]/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: context ── */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#FB8500]/70 mb-8">
              Contacto
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-[#F8F9FA] leading-tight mb-6">
              Hablemos de<br />
              <span className="text-[#FB8500]">tu proyecto.</span>
            </h2>
            <p className="text-[#ADB5BD] font-light leading-relaxed mb-12 max-w-md">
              Cuéntame qué necesita tu empresa. Respondo en menos de 24&nbsp;h
              con una valoración inicial sin compromiso.
            </p>

            <div className="space-y-3">
              <p className="text-xs tracking-widest uppercase text-[#E9ECEF]/50 font-mono mb-4">
                ¿En qué puedo ayudarte?
              </p>
              {OFFERINGS.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[#ADB5BD] font-light">
                  <span className="text-[#FB8500] select-none mt-0.5">—</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="border border-[#E9ECEF]/10 p-8 sm:p-10">
            {sent ? (
              <div className="py-16 text-center">
                <p className="text-[#FB8500] text-lg font-light mb-2">
                  Mensaje enviado.
                </p>
                <p className="text-[#ADB5BD] text-sm font-light">
                  Revisa tu cliente de correo para completar el envío.<br />
                  Te responderé en menos de 24&nbsp;h.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-xs tracking-widest uppercase text-[#FB8500]/60 hover:text-[#FB8500] transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Field
                    label="Nombre *"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <Field
                    label="Empresa"
                    name="company"
                    type="text"
                    placeholder="Tu empresa"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <Field
                  label="Email *"
                  name="email"
                  type="email"
                  placeholder="correo@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                />

                <div>
                  <label className="block text-[10px] font-mono tracking-[0.25em] uppercase text-[#ADB5BD] mb-3">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto o necesidad…"
                    className="w-full bg-transparent border-b border-[#E9ECEF]/20 py-3 text-[#F8F9FA] text-sm font-light outline-none focus:border-[#FB8500] transition-colors duration-200 placeholder:text-[#6C757D] resize-none"
                  />
                </div>

                {error && (
                  <p className="text-xs text-[#E63946] font-light">{error}</p>
                )}

                <div className="flex items-center justify-between pt-2">
                  <p className="text-[11px] text-[#6C757D] font-light">
                    * Campos obligatorios
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#FB8500] text-[#212529] font-semibold text-sm tracking-wide hover:bg-[#FFB703] transition-colors duration-200"
                  >
                    Enviar mensaje
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-[10px] font-mono tracking-[0.25em] uppercase text-[#ADB5BD] mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[#E9ECEF]/20 py-3 text-[#F8F9FA] text-sm font-light outline-none focus:border-[#FB8500] transition-colors duration-200 placeholder:text-[#6C757D]"
      />
    </div>
  );
}