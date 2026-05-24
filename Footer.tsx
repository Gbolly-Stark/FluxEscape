const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-neutral-900 py-12 px-6 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-black tracking-widest uppercase text-white">
            FluxEscapes
          </span>
        </div>

        <p className="text-xs tracking-wider text-neutral-600 order-last md:order-none">
          &copy; {new Date().getFullYear()} FluxEscapes. All rights reserved.
        </p>

        <div className="flex gap-6 text-xs font-mono tracking-widest uppercase text-neutral-500">
          <a href="/privacy" className="hover:text-blue-500 transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-blue-500 transition-colors">Terms</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;