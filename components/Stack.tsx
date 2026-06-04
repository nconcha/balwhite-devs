const categories = [
  {
    title: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    techs: ["Node.js", "Java / Spring Boot", "Python", "REST / GraphQL"],
  },
  {
    title: "Mobile",
    techs: ["React Native", "Flutter"],
  },
  {
    title: "Cloud & DevOps",
    techs: ["GCP", "Azure", "OCI", "Docker", "CI/CD"],
  },
  {
    title: "Base de Datos",
    techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    title: "Integraciones Chile",
    techs: [
      "Transbank (Webpay)",
      "SII (Boletas/Facturas)",
      "Khipu · Flow",
      "APIs Bancarias",
      "Defontana · Bsale",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 text-xs font-mono tracking-[0.2em] uppercase">
            Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Con qué construimos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un stack pensado para que ambos socios manejen las mismas
            herramientas. Menos fricción, más velocidad.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-blue-800/40 transition-all duration-300"
            >
              <h3 className="text-blue-400 font-bold text-sm font-mono uppercase tracking-widest mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800/70 border border-gray-700/50 text-gray-300 text-xs px-3 py-1.5 rounded-lg font-mono hover:border-blue-700/50 hover:text-blue-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Good practices banner */}
        <div className="mt-10 bg-[#111111] border border-blue-900/30 rounded-2xl p-8">
          <h3 className="text-white font-bold text-lg mb-5 text-center">
            Buenas prácticas que no son opcionales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "📄",
                text: "Toda repo tiene README con setup, comandos y estructura",
              },
              {
                icon: "🔒",
                text: "Variables sensibles en .env. Jamás en el repositorio",
              },
              {
                icon: "🔍",
                text: "Revisión cruzada de PRs entre fundadores",
              },
              {
                icon: "✅",
                text: "Tests automáticos para lógica de negocio crítica",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="text-gray-400 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
