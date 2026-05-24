const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center px-6 py-24 select-none">
      
      <div className="text-center max-w-2xl mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-blue-500 font-bold block mb-3">
          Who We Are
        </span>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          About FluxEscapes
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed font-medium">
          We are a team of passionate individuals dedicated to creating immersive travel experiences that blend cutting-edge technology with sustainable practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        
        <div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between">
          <div>

            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
              Security & Innovation
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We take safety and privacy seriously. By implementing robust data measures, we ensure a completely secure and cutting-edge digital travel ecosystem.
            </p>
          </div>
        </div>

        <div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between">
          <div>
    
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
              Our Mission
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our mission is to revolutionize the way people explore the world by providing seamless, protected, innovative, and deeply sustainable travel solutions.
            </p>
          </div>
        </div>

        <div className="bg-neutral-900/40 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between">
          <div>
    
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4">
              Our Values
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We believe in the power of travel to connect people and places. Our principles guide every single technological framework and physical experience we map out.
            </p>
          </div>
        </div>

      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-16 max-w-4xl text-xs font-mono tracking-widest uppercase text-neutral-400">
        <span className="px-4 py-2 rounded-full border border-neutral-800/80 bg-neutral-900/20">
          • Innovation-driven
        </span>
        <span className="px-4 py-2 rounded-full border border-neutral-800/80 bg-neutral-900/20">
          • Eco Sustainability
        </span>
        <span className="px-4 py-2 rounded-full border border-neutral-800/80 bg-neutral-900/20">
          • Customer-Centricity
        </span>
        <span className="px-4 py-2 rounded-full border border-neutral-800/80 bg-neutral-900/20">
          • Encrypted Safety
        </span>
      </div>

    </div>
  );
};

export default About;