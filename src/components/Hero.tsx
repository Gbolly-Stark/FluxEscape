import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const zoomImageRef = useRef<HTMLImageElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current || !zoomImageRef.current || !introTextRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=140%",
        pin: true,
        scrub: true,
      },
    });

    tl.to(zoomImageRef.current, {
      scale: 4,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    })
    .to(introTextRef.current, {
      scale: 2,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
    }, "<")
    .from(contentRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.7,
      ease: "power3.out",
    }, "-=0.6");

  }, { scope: heroRef });

  return (
    <div 
      ref={heroRef} 
      style={{ 
        width: "100%", 
        height: "100vh", 
        backgroundColor: "#050505",
        position: "relative",
        overflow: "hidden"
      }}
    >
      
      <div 
        ref={contentRef}
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center p-6 z-1 bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.15)_0%,transparent_70%)]"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-blue-400 font-semibold mb-3">
          The Next Generation
        </span>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 max-w-4xl leading-[0.95]">
          Horizon in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Motion</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed tracking-wide">
          Escape the ordinary. Experience luxury, fluid travel curated for the modern explorer.
        </p>
        
        <a 
          href="/journey" 
          className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium text-white transition-all duration-300 ease-out border border-blue-500/30 rounded-full shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 active:scale-95"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative tracking-wider font-semibold text-sm">Begin Your Journey</span>
        </a>
      </div>

      <div 
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          zIndex: 2,
          overflow: "hidden",
          pointerEvents: "none"
        }}
      >
        <img
          ref={zoomImageRef}
          src="/hero-bg.jpg"
          alt="Hero Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <div 
          ref={introTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/30"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-widest text-white uppercase drop-shadow-2xl">
            Explore The Fluid
          </h2>
          <p className="text-sm md:text-base text-gray-200 tracking-[0.2em] uppercase mt-4 opacity-80">
            Scroll to uncover
          </p>
        </div>
      </div>

    </div>
  );
}