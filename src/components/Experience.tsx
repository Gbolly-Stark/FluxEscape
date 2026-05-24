import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowLeftRef = useRef<HTMLDivElement>(null);
  const rowRightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !rowLeftRef.current || !rowRightRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", 
        pin: true,     
        scrub: 1,      
      }
    });

    tl.to(rowLeftRef.current, {
      x: "-25%",
      ease: "none"
    }, 0)
    .to(rowRightRef.current, {
      x: "25%",
      ease: "none"
    }, 0);

  }, { scope: containerRef });

  const dummyCardsRow1 = [
  { title: "Cyberpunk District", geo: "Neo-Tokyo", img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80" },
  { title: "Silicon Valley Hub", geo: "San Francisco", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80" },
  { title: "Historic Underground", geo: "London", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80" },
  { title: "Alpine Science Lab", geo: "Zurich", img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80" }

  ];

const dummyCardsRow2 = [
  { 
    title: "Industrial Techno Club", 
    geo: "Berlin", 
    img: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    title: "Canal Side Studios", 
    geo: "Amsterdam", 
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    title: "Futuristic Mega City", 
    geo: "Seoul", 
    img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    title: "Volcanic Energy Grid", 
    geo: "Reykjavik", 
    img: "https://images.unsplash.com/photo-1504893524553-ac55fce698be?auto=format&fit=crop&w=600&q=80" 
  }
];
  return (
    <div 
      ref={containerRef} 
      className="w-full h-screen bg-[#050505] flex flex-col justify-center relative overflow-hidden select-none"
    >
      <div className="absolute top-12 left-12 z-10 max-w-md">
        <span className="text-xs uppercase tracking-[0.4em] text-blue-400 font-semibold block mb-2">
          Curated Destinations
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
          Explore Our Unique Experiences
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-10 w-full mt-16">
        
      
        <div className="w-full overflow-hidden">
          <div 
            ref={rowLeftRef} 
            className="flex gap-6 w-[150%] pl-[10%]"
          >
            {dummyCardsRow1.map((card, idx) => (
              <div 
                key={idx} 
                className="flex-1 min-w-[300px] md:min-w-[420px] h-[220px] md:h-[280px] relative rounded-2xl overflow-hidden group border border-neutral-800/60 transition-colors duration-300"
              >
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-between z-10">
                  <span className="text-xs font-mono text-neutral-300 tracking-widest">{card.geo}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                      {card.title}
                    </h3>
                    <div className="w-8 h-[2px] bg-neutral-400 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    
        <div className="w-full overflow-hidden">
          <div 
            ref={rowRightRef} 
            className="flex gap-6 w-[150%] -translate-x-[20%]"
          >
            {dummyCardsRow2.map((card, idx) => (
              <div 
                key={idx} 
                className="flex-1 min-w-[300px] md:min-w-[420px] h-[220px] md:h-[280px] relative rounded-2xl overflow-hidden group border border-neutral-800/60 transition-colors duration-300"
              >
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-between z-10">
                  <span className="text-xs font-mono text-neutral-300 tracking-widest">{card.geo}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-purple-400 transition-colors">
                      {card.title}
                    </h3>
                    <div className="w-8 h-[2px] bg-neutral-400 group-hover:w-16 group-hover:bg-purple-500 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}