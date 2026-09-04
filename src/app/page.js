'use client'
import CardConsultoring from "@/components/Cards/CardConsultoring";
import ViewBlogPrincipal from "@/components/Views/ViewBlogPrincipal";
import ViewWelcome from "@/components/Views/ViewWelcome";

const SERVICES = [
  {
    index: "01",
    title: "Desarrollo de Software",
    description:
      "Aplicaciones web y móviles construidas a medida. Desde la arquitectura hasta el despliegue en producción, entregamos software que funciona.",
  },
  {
    index: "02",
    title: "Automatización de Procesos",
    description:
      "Eliminamos tareas repetitivas e ineficiencias. Conectamos tus sistemas y automatizamos flujos completos para que tu equipo se enfoque en lo que importa.",
  },
  {
    index: "03",
    title: "Consultoría Tecnológica",
    description:
      "Estrategia digital para empresas que quieren crecer. Definimos el stack, la arquitectura y la hoja de ruta que tu negocio necesita.",
  },
];

function ServicesSection() {
  return (
    <section className="w-full bg-[#343A40] py-24 px-6 sm:px-8 lg:px-12 border-y border-[#E9ECEF]/10">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px bg-[#FB8500]" />
          <p className="font-mono text-[20px] tracking-[0.35em] uppercase text-[#FB8500]/70">
            Servicios
          </p>
        </div>

        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-[#F8F9FA] leading-snug">
            No solo programación.{" "}
            <span className="text-[#ADB5BD] font-extralight">
              Soluciones completas para que tu empresa opere en otro nivel.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E9ECEF]/10">
          {SERVICES.map((s) => (
            <div
              key={s.index}
              className="bg-[#343A40] p-10 hover:bg-[#3D4349] transition-colors duration-300 group"
            >
              <p className="font-mono text-xs text-[#FB8500]/50 mb-8 group-hover:text-[#FB8500]/80 transition-colors">
                {s.index}
              </p>
              <h3 className="text-lg font-light text-[#F8F9FA] mb-4 tracking-wide">
                {s.title}
              </h3>
              <p className="text-sm text-[#ADB5BD] font-light leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#212529]">
      <ViewWelcome />
      <ServicesSection />
      <ViewBlogPrincipal />
      <CardConsultoring />
    </div>
  );
}