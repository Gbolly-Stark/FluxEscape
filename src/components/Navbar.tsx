const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <a href="/" className="flex items-center gap-3 group">
          <img 
            src="/Logo.png" 
            alt="FluxEscapes Logo" 
            className="h-10 w-10 rounded-full object-cover border border-white/20 group-hover:border-blue-500/50 transition-colors duration-300" 
          />
          <span className="text-xl font-black tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
            FluxEscapes
          </span>
        </a>

        <div className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-neutral-300">
            <li className="relative group">
              <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="/about" className="hover:text-white transition-colors duration-300">Destinations</a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>

      
        <div>
          <a 
            href="/journey" 
            className="inline-flex items-center justify-center px-5 py-2 text-xs font-semibold tracking-widest text-white uppercase border border-white/20 rounded-full bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95"
          >
            Book Trip
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;