const steps = [
  {
    step: "01",
    title: "Primera llamada",
    desc: "Reunión de 30 min sin costo. Entendemos tu necesidad, mercado, plazos y si podemos ayudarte.",
    detail: "Sin compromiso",
  },
  {
    step: "02",
    title: "Propuesta comercial",
    desc: "Estimación detallada con alcance, hitos y precio. Enviada en máximo 3 días hábiles.",
    detail: "Estimaciones honestas",
  },
  {
    step: "03",
    title: "Firma y anticipo",
    desc: "Contrato simple y claro. Factura por el 30% inicial para comenzar.",
    detail: "30% anticipo",
  },
  {
    step: "04",
    title: "Kick-off",
    desc: "Reunión con el cliente. Definimos canales de comunicación, accesos y hitos del proyecto.",
    detail: "Arranque formal",
  },
  {
    step: "05",
    title: "Discovery & Diseño",
    desc: "Workshops, wireframes y arquitectura. Cerramos el alcance antes de escribir una línea de código.",
    detail: "Alcance cerrado",
  },
  {
    step: "06",
    title: "Sprints de desarrollo",
    desc: "Sprints de 2 semanas. Demo al cliente al final de cada sprint. Ajustes sobre la marcha.",
    detail: "Iterativo y transparente",
  },
  {
    step: "07",
    title: "QA & Staging",
    desc: "Pruebas conjuntas con el cliente en ambiente de staging. Ajustes finos antes del lanzamiento.",
    detail: "Sin sorpresas",
  },
  {
    step: "08",
    title: "Deploy & Hand-off",
    desc: "Lanzamiento a producción, capacitación del equipo y documentación entregada. 3 meses de garantía sin costo.",
    detail: "3 meses garantía",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 text-xs font-mono tracking-[0.2em] uppercase">
            Proceso
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un proceso claro de 8 pasos, diseñado para que el cliente sepa en
            todo momento qué pasa con su proyecto.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex gap-5 bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-blue-800/50 transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center group-hover:bg-blue-900/50 transition-colors">
                  <span className="text-blue-400 font-black text-sm font-mono">
                    {step.step}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-base group-hover:text-blue-200 transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-blue-600 text-xs font-mono bg-blue-950/40 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                    {step.detail}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment model */}
        <div className="mt-10 bg-[#111111] border border-gray-800 rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg mb-6 text-center">
            Forma de pago estándar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { pct: "30%", label: "Al firmar el contrato", desc: "Anticipo inicial" },
              { pct: "40%", label: "Al cierre de fase 2", desc: "Hito intermedio" },
              { pct: "30%", label: "Al entregar en producción", desc: "Pago final" },
            ].map((payment, i) => (
              <div
                key={i}
                className="text-center bg-[#0a0a0a] border border-gray-800 rounded-xl p-5"
              >
                <div className="text-3xl font-black text-blue-500 mb-1">
                  {payment.pct}
                </div>
                <div className="text-white text-sm font-semibold mb-1">
                  {payment.label}
                </div>
                <div className="text-gray-500 text-xs">{payment.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
