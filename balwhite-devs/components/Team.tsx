const members = [
  {
    initials: "LG",
    name: "Luis Alfonso Gatica Jerez",
    role: "Cofundador & Product Lead",
    university: "Ing. Civil en Informática · UTEM",
    description:
      "Más de 10 años en banca y servicios financieros. Especialista en desarrollo Java, integraciones SOA y gestión Agile de productos digitales. Ex Product Owner en Banco Falabella.",
    focus:
      "Liderazgo de producto, relación comercial con clientes, gestión Agile, desarrollo backend.",
    tags: ["Java", "SOA / OSB", "Agile", "Product Owner", "Sector Financiero"],
  },
  {
    initials: "ND",
    name: "Natalia Elizabeth Duhalde Concha",
    role: "Cofundadora & Arquitecta de Soluciones",
    university: "Ing. de Ejecución en Computación · UBB",
    description:
      "Más de 10 años en arquitectura cloud, microservicios e integraciones para el sector financiero y retail. Arquitecta Cloud en BC Tecnología, ex Arquitecta en Kibernum para CMR Banco Falabella.",
    focus:
      "Liderazgo de arquitectura, diseño de soluciones técnicas, cloud deployments, gobernanza tecnológica.",
    tags: ["GCP", "Azure", "OCI", "Microservicios", "LeanIX", "BPEL / BPM"],
  },
];

export default function Team() {
  return (
    <section id="nosotros" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 text-xs font-mono tracking-[0.2em] uppercase">
            Equipo
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Quiénes somos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una dupla que cubre el ciclo completo: del discovery al deploy, sin
            pasos perdidos ni intermediarios.
          </p>
        </div>

        {/* Founder cards */}
        <div className="grid md:grid-cols-2 gap-7">
          {members.map((member, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-blue-800/60 transition-all duration-300 group"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 border-2 border-blue-700 flex items-center justify-center text-white font-black text-lg flex-shrink-0 shadow-lg shadow-blue-900/30">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base leading-tight">
                    {member.name}
                  </h3>
                  <span className="text-blue-400 text-xs font-mono block mt-0.5">
                    {member.role}
                  </span>
                  <span className="text-gray-600 text-xs">{member.university}</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {member.description}
              </p>

              {/* Focus area */}
              <div className="bg-blue-950/20 border border-blue-900/30 rounded-xl p-4 mb-5">
                <p className="text-blue-300/90 text-xs leading-relaxed">
                  <span className="text-blue-400 font-semibold">Rol en BalWhite: </span>
                  {member.focus}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800/80 text-gray-300 text-xs px-3 py-1 rounded-full font-mono border border-gray-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complementarity banner */}
        <div className="mt-8 bg-gradient-to-r from-blue-950/20 via-[#111111] to-blue-950/20 border border-blue-900/30 rounded-2xl p-8 text-center">
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
            La dupla cubre el ciclo completo:{" "}
            <span className="text-white font-semibold">product discovery</span>{" "}
            con Luis y{" "}
            <span className="text-white font-semibold">
              arquitectura técnica
            </span>{" "}
            con Natalia. Un solo equipo, dos especialidades, ningún paso perdido.
          </p>
          <p className="text-blue-400 font-bold mt-4 text-sm tracking-widest font-mono">
            NO ES SOLO CÓDIGO. ES OFICIO. ES BALWHITE DEVS.
          </p>
        </div>

        {/* Concepción context */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            📍 Concepción, Región del Biobío · Tarifas regionales, calidad sin
            concesiones
          </p>
        </div>
      </div>
    </section>
  );
}
