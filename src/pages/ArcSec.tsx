import { useEffect, useRef } from "react";
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceInfoSec from "@/components/ServiceInfoSec";
import { motion } from "framer-motion";

const ArcSecHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles: any[] = [];
    const mouse = { x: null, y: null, radius: 150 };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!ctx || !canvas) return;
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 3;
            this.y -= forceDirectionY * force * 3;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles = [];
      let numberOfParticles = (canvas.height * canvas.width) / 10000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = Math.random() * (window.innerWidth - size * 2) + size * 2;
        let y = Math.random() * (window.innerHeight - size * 2) + size * 2;
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = "#ff0000ff";
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const connect = () => {
      if (!ctx) return;
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) ** 2) + ((particles[a].y - particles[b].y) ** 2);

          if (distance < (canvas.width / 8) * (canvas.height / 8)) {
            opacityValue = 1 - distance / 25000;
            ctx.strokeStyle = `rgba(220, 38, 38, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 0.3,
        duration: 0.8,
        ease: ["easeOut"] as any,
      },
    }),
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/80 via-red-950 to-red-900/30" />
      <div className="relative z-10 text-center p-6 w-full max-w-6xl mx-auto">
        <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
            ArcSec
          </h1>
        </motion.div>
        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-red-400 mb-6">
            Desenvolvimento & Segurança da Informação
          </h2>
        </motion.div>
        <motion.p custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
          Serviços especializados em desenvolvimento de software e segurança da informação.
          Protegendo seu negócio com qualidade e expertise.
        </motion.p>
      </div>
    </section>
  );
};

const ArcSec = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-resume-dark min-h-screen">
      <Navbar />
      <main>
        <ArcSecHero />
        <div className="container mx-auto px-4 py-20">
          <ServiceInfoSec />

          <section className="py-16 border-t border-red-900/50">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Planos de Serviços
            </h2>
            <p className="text-gray-400 mb-10">
              Escolha o plano ideal para seu projeto
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0a0a0a] border border-red-900/30 p-6 hover:border-red-700 transition-all">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">starter</div>
                <h3 className="text-xl font-semibold text-white mb-1">Básico</h3>
                <p className="text-red-400 text-sm mb-4">Ideal para pequenos projetos</p>
                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Landing page ou site institucional
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Design responsivo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Formulário de contato
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Suporte por email
                  </li>
                </ul>
                <button className="w-full py-2.5 border border-red-700 text-red-400 hover:bg-red-900/30 transition-colors text-sm">
                  Solicitar orçamento
                </button>
              </div>
              <div className="bg-red-950/30 border border-red-600 p-6 hover:border-red-500 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xs text-red-400 uppercase tracking-wider">popular</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">Profissional</h3>
                <p className="text-red-400 text-sm mb-4">Para negócios em crescimento</p>
                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Web app ou e-commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Integração Mercado Pago
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Painel administrativo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Suporte prioritário
                  </li>
                </ul>
                <button className="w-full py-2.5 bg-red-700 text-white hover:bg-red-600 transition-colors text-sm">
                  Solicitar orçamento
                </button>
              </div>
              <div className="bg-[#0a0a0a] border border-red-900/30 p-6 hover:border-red-700 transition-all">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">completo</div>
                <h3 className="text-xl font-semibold text-white mb-1">Enterprise</h3>
                <p className="text-red-400 text-sm mb-4">Soluções personalizadas</p>
                <ul className="text-gray-400 text-sm space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Sistema sob medida
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Múltiplas integrações
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Segurança avançada
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                    Suporte 24/7
                  </li>
                </ul>
                <button className="w-full py-2.5 border border-red-700 text-red-400 hover:bg-red-900/30 transition-colors text-sm">
                  Solicitar orçamento
                </button>
              </div>
            </div>
          </section>

          <section className="py-16 border-t border-red-900/50">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Stack Tecnológico
            </h2>
            <p className="text-gray-400 mb-10">
              Tecnologias que utilizo nos projetos
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Frontend", techs: ["React", "TypeScript", "Next.js"] },
                { name: "Backend", techs: ["Node.js", "Java", "Python"] },
                { name: "Database", techs: ["PostgreSQL", "MongoDB"] },
                { name: "Infra", techs: ["Docker", "Linux", "AWS"] }
              ].map((category, idx) => (
                <div key={idx} className="bg-[#0a0a0a] border border-red-900/30 p-4">
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech, i) => (
                      <span key={i} className="text-sm text-gray-300">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArcSec;