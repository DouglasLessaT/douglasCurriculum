
import { useEffect } from 'react';
import { renderDonut } from './ui/AsciiArt';
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only render ASCII art on desktop screens
    if (!isMobile) {
      // Renderizar o Donut no contêiner esquerdo
      renderDonut('ascii-art-left');

      // Renderizar o Donut no contêiner direito
      renderDonut('ascii-art-right');
    }
  }, [isMobile]);

  return (
    <section className="min-h-screen flex justify-center bg-black relative">
      {!isMobile && (
        <div
          id="ascii-art-animeted"
          className="absolute inset-0 flex justify-between items-center z-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="hidden md:block">
            <div
              id="ascii-art-left"
              style={{ fontSize: '3px' }}
              className="text-resume-cyan opacity-60"
            ></div>
          </div>

          <div className="hidden md:block">
            <div
              id="ascii-art-right"
              style={{ fontSize: '3px', transform: 'scaleX(-1)' }}
              className="text-resume-cyan opacity-60"
            ></div>
          </div>
        </div>
      )}

      <div
        id="about" 
        className="container relative z-10 mx-auto flex items-center justify-center"
      >
        <div className="px-4 py-10 md:py-20 w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-white">Olá, eu sou</span>
                  <br />
                  <span className="text-resume-cyan">Douglas Lessat</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300">
                  Desenvolvedor & Analista de Sistemas
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Atualmente me especializando em Algoritimos, Matemática,
                Arquitetura e CyberSecurity, sou formado em Análise de Sistemas
                na Unisales - Centro Universitário Salesiano. Focado no
                desenvolvimento e de soluções de software e integração de
                sistemas, com experiência em tecnologias como Java, SQL,
                JavaScript e TypeScript.
                <br />
                Estou sempre em busca de novos desafios e oportunidades para
                aprimorar minhas habilidades e contribuir para o sucesso de
                projetos inovadores. Sendo assim estou aberto a novas
                oportunidades de trabalho para conseguir me ingrsar em uma
                faculdede de Engenharia da computação e seguir em estudo na
                area de computação quântica.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-resume-cyan hover:bg-resume-cyan/80 text-black">
                    <Download size={18} className="mr-2" /> Download CV
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/douglaslessat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-resume-cyan text-resume-cyan hover:bg-resume-cyan/10"
                  >
                    <Linkedin size={18} className="mr-2" /> LinkedIn
                  </Button>
                </a>
                <a
                  href="https://github.com/DouglasLessaT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-resume-cyan text-resume-cyan hover:bg-resume-cyan/10"
                  >
                    <Github size={18} className="mr-2" /> GitHub
                  </Button>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative">
                <div className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-resume-cyan p-1">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHwy6IpvmrTog/profile-displayphoto-shrink_800_800/B4DZRIh5hzHMAc-/0/1736383634942?e=1749081600&v=beta&t=qmL8X-SU68tWLR50ZH0F9ab4MUj_bob4UUGzVNLxKgY"
                    alt="Douglas Lessat"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -inset-1 rounded-full bg-cyan-gradient opacity-30 blur-md -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
