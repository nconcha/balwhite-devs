const values = [
  {
    symbol: "⚒",
    title: "Oficio",
    description:
      "Escribimos código limpio, mantenible y documentado, aunque cueste más. Nada de parches que después se ven.",
  },
  {
    symbol: "🤝",
    title: "Cercanía",
    description:
      "El cliente habla siempre con quien desarrolla. Sin intermediarios ni cuentas de email genéricas.",
  },
  {
    symbol: "⚔",
    title: "Aventura",
    description:
      "Tomamos proyectos desafiantes. Preferimos un buen reto a un encargo repetitivo.",
  },
  {
    symbol: "🛡",
    title: "Honestidad",
    description:
      "Estimaciones realistas, alcance claro. Avisamos antes —no después— cuando algo se complica.",
  },
  {
    symbol: "🌱",
    title: "Familia y Equilibrio",
    description:
      "La empresa es nuestra vida, pero la vida no es solo la empresa. Eso se refleja en cómo tratamos al equipo.",
  },
];

export default function Values() {
  return (
    <section id="valores" className="py-24 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-500 text-xs font-mono tracking-[0.2em] uppercase">
            Valores
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Cómo nos definimos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lo que nos diferencia no está en el stack. Está en cómo tratamos
            cada proyecto y cada cliente.
          </p>
        </div>

        {/* First row: 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {values.slice(0, 3).map((value, i) => (
            <ValueCard key={i} value={value} />
          ))}
        </div>

        {/* Second row: 2 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:max-w-2xl sm:mx-auto">
          {values.slice(3).map((value, i) => (
            <ValueCard key={i + 3} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value }: { value: (typeof values)[0] }) {
  return (
    <div className="bg-[#111111] border border-gray-800 rounded-2xl p-7 hover:border-blue-800/50 transition-all duration-300 hover:bg-[#111820] group">
      <div className="text-2xl mb-4">{value.symbol}</div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
        {value.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
    </div>
  );
}
