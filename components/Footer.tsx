import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-gray-800/60 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt="BalWhite Devs"
                width={32}
                height={38}
                className="h-8 w-auto"
              />
              <div className="leading-none">
                <span className="font-black text-white text-sm tracking-widest">
                  BALWHITE
                </span>
                <span className="font-black text-blue-500 text-sm tracking-widest">
                  {" "}
                  DEVS
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Software house familiar en Concepción, Chile. Desarrollo web, apps
              móviles, sistemas a medida y arquitecturas cloud.
            </p>
            <p className="text-blue-600 text-xs font-mono mt-3 tracking-widest">
              CODE · CRAFT · QUEST
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">
              Navegación
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#valores", label: "Valores" },
                { href: "#proceso", label: "Proceso" },
                { href: "#stack", label: "Stack" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">
              Contacto
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contacto@balwhitedevs.cl"
                  className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                >
                  contacto@balwhitedevs.cl
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/56956062552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                >
                  +56 9 5606 2552
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/balwhite_devs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                >
                  @balwhite_devs
                </a>
              </li>
              <li className="pt-1">
                <span className="text-gray-600 text-xs">
                  📍 Concepción, Biobío, Chile
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">
            © {year} BalWhite Devs SpA. Todos los derechos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Hecho con oficio en el sur de Chile 🌊
          </p>
        </div>
      </div>
    </footer>
  );
}
