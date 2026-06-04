const services = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    title: "Desarrollo Web",
    description:
      "Sitios modernos, rápidos y optimizados para SEO. Construidos con las tecnologías más actuales, enfocados en rendimiento y experiencia de usuario.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Aplicaciones Móviles",
    description:
      "Apps intuitivas para iOS y Android que conectan con tus usuarios y mejoran su experiencia. Diseño centrado en el usuario, funcionalidad sin fricciones.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Sistemas a Medida",
    description:
      "Soluciones personalizadas para automatizar procesos y gestionar datos. Sin plantillas ni atajos: construido exactamente para tu problema.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    title: "Cloud & Integraciones",
    description:
      "Arquitecturas en GCP, Azure y OCI. Integraciones con Transbank, SII, bancos y ERPs chilenos. Experiencia real en el sector financiero nacional.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Automatización de Procesos",
    description:
      "Reduce tareas repetitivas, mejora la productividad y eficiencia con flujos automáticos a medida. Más tiempo para lo que realmente importa.",
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof services)[0];
}) {
  return (
    <div className="group bg-[#111111] border border-gray-800 rounded-2xl p-7 card-hover cursor-default">
      <div className="text-blue-500 group-hover:text-blue-400 transition-colors mb-5">
        {service.icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 text-xs font-mono tracking-[0.2em] uppercase">
            Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Lo que construimos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Del discovery al deploy. Sin intermediarios, sin parches, sin
            atajos.
          </p>
        </div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-2xl md:mx-auto">
          {services.slice(3).map((service, i) => (
            <ServiceCard key={i + 3} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
