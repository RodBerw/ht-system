export default function Header() {
  return (
    <header className="w-full py-4 px-10 bg-gradient-to-r from-gray-600 to-gray-400 shadow-lg flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-white tracking-wide">
        HT Seguros
      </h1>

      {/* Menu de Navegação */}
      <nav className="hidden md:flex gap-8 text-white text-lg">
        <a href="/" className="relative group">
          Início
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
        </a>
        <a href="/plans" className="relative group">
          Planos
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
        </a>
        <a href="/contact" className="relative group">
          Contato
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
        </a>
      </nav>

      {/* Botão de Login */}
      <button className="hidden md:block bg-white text-blue-700 px-5 py-2 rounded-full font-medium shadow-md hover:bg-gray-200 transition">
        Entrar
      </button>

      {/* Ícone do Menu Mobile */}
      <button className="md:hidden text-white text-3xl">☰</button>
    </header>
  );
}
