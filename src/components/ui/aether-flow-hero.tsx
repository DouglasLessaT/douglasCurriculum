"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Github, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import douglasImg from '../../assets/douglas-lessat.jpg';

const AetherFlowHero = () => {
  const isMobile = useIsMobile();
  const baseRoute = process.env.NODE_ENV === "production" ? "/douglasCurriculum" : "";
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
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
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = '#0DE8E8';
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
            + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));

          if (distance < (canvas.width / 8) * (canvas.height / 8)) {
            opacityValue = 1 - (distance / 25000);

            let dx_mouse_a = particles[a].x - mouse.x;
            let dy_mouse_a = particles[a].y - mouse.y;
            let distance_mouse_a = Math.sqrt(dx_mouse_a * dx_mouse_a + dy_mouse_a * dy_mouse_a);

            if (mouse.x && distance_mouse_a < mouse.radius) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
            } else {
              ctx.strokeStyle = `rgba(0, 150, 255, ${opacityValue})`;
            }

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
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(10, 22, 40, 0.1)';
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {(
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-resume-dark2 via-resume-dark to-resume-surface/50" />

      <div className="relative z-10 text-center p-6 w-full max-w-6xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-resume-blue/10 border border-resume-blue/30 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-resume-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-resume-blue"></span>
          </span>
          <span className="text-sm font-medium text-gray-300">
            Disponível para oportunidades
          </span>
        </motion.div>

        <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight px-2 sm:px-4 py-[10px] sm:py-[15px] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Douglas Lessa
          </h1>
        </motion.div>

        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-resume-blue mb-6 sm:mb-8">
            Desenvolvedor & Analista de Sistemas
          </h2>
        </motion.div>

        <motion.p
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 px-3 sm:px-4"
        >
          Especializando-me em Algoritmos, Matemática, Arquitetura e CyberSecurity.
          Formado em Análise de Sistemas pela Unisales, com experiência em Java, SQL,
          JavaScript e TypeScript.
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12"
        >
          <a href={`${baseRoute}/resume.pdf`} download>
            <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-resume-blue text-white font-semibold rounded-lg shadow-lg hover:bg-resume-blue-light transition-all duration-300 flex items-center gap-2 hover:shadow-glow-blue text-sm sm:text-base">
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Download CV</span>
              <span className="sm:hidden">CV</span>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/douglaslessat/" target="_blank" rel="noopener noreferrer">
            <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </button>
          </a>
          <a href="https://github.com/DouglasLessaT" target="_blank" rel="noopener noreferrer">
            <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </button>
          </a>
        </motion.div>

        <motion.div
          custom={5}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">2+</div>
            <div className="text-xs sm:text-sm text-gray-500">Anos</div>
          </div>
          <div className="w-px h-10 sm:h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">10+</div>
            <div className="text-xs sm:text-sm text-gray-500">Projetos</div>
          </div>
          <div className="w-px h-10 sm:h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">8</div>
            <div className="text-xs sm:text-sm text-gray-500">Certificações</div>
          </div>
        </motion.div>
      </div>

      <motion.button
        custom={6}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default AetherFlowHero;
