import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Central blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-blue-900/30 rounded-tl-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-blue-900/30 rounded-br-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 pt-20">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl scale-150" />
            <Image
              src="/logo.jpeg"
              alt="BalWhite Devs"
              width={110}
              height={132}
              className="relative h-28 w-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Code · Craft · Quest chips */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {["CODE", "CRAFT", "QUEST"].map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              <span className="text-blue-400 text-xs font-mono tracking-[0.25em] font-bold">
                {word}
              </span>
              {i < 2 && <span className="text-gray-700 text-xs">·</span>}
            </span>
          ))}
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white uppercase tracking-tight leading-[0.9] mb-6">
          WHERE CODE
          <br />
          BECOMES{" "}
          <span className="text-gradient-blue">CRAFT</span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed">
          Transformamos ideas en soluciones digitales robustas, escalables y
          hechas a la medida de tu negocio.
        </p>
        <p className="text-gray-500 text-base max-w-xl mx-auto mb-10">
          Software house familiar en Concepción, Chile.
          <br className="hidden sm:block" />
          Dos ingenieros. Una dupla completa. Código limpio.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/50"
          >
            Hablemos de tu proyecto
          </a>
          <a
            href="#servicios"
            className="border border-gray-700 hover:border-blue-600 text-gray-300 hover:text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:bg-blue-900/10"
          >
            Ver servicios →
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <a href="#servicios" className="animate-bounce text-gray-600 hover:text-gray-400 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
