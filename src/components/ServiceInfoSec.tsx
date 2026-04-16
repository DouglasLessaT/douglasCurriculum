import { useState, useEffect, useRef } from "react";
import { Lock, Bug, Server, FileCode, Shield, Cloud } from "lucide-react";

const securityServices = [
  {
    icon: <Lock size={40} />,
    title: "ANÁLISE DE VULNERABILIDADES",
    description: "Identificação e análise de falhas de segurança em aplicações e infraestrutura.",
    features: ["Scanner automatizado", "Relatório técnico", "Priorização de riscos"],
    color: "from-red-600 to-red-800"
  },
  {
    icon: <Bug size={40} />,
    title: "PENTEST",
    description: "Testes de penetração para avaliar a segurança real do seu sistema.",
    features: ["Black box", "Gray box", "White box", "Relatório executivo"],
    color: "from-orange-600 to-orange-800"
  },
  {
    icon: <Server size={40} />,
    title: "HARDENING",
    description: "Fortalecimento de servidores e configuração segura.",
    features: ["Linux hardening", "Docker", "Network segment"],
    color: "from-yellow-600 to-yellow-800"
  },
  {
    icon: <FileCode size={40} />,
    title: "CODE REVIEW",
    description: "Análise de código para identificar falhas de segurança.",
    features: ["OWASP Top 10", "CWE", "Sugestões de correção"],
    color: "from-amber-600 to-amber-800"
  },
  {
    icon: <Shield size={40} />,
    title: "CONSULTORIA",
    description: "Consultoria especializada em segurança da informação.",
    features: ["ISO 27001", "LGPD", "PCI-DSS"],
    color: "from-red-500 to-red-700"
  },
  {
    icon: <Cloud size={40} />,
    title: "CLOUD SECURITY",
    description: "Segurança para ambientes cloud AWS, Azure e GCP.",
    features: ["IAM", "Network security", "Criptografia"],
    color: "from-red-700 to-red-900"
  }
];

const ServiceInfoSec = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const relativeScroll = scrollY - sectionTop + windowHeight * 0.4;
      const totalCards = securityServices.length;
      const cardPortion = sectionHeight / totalCards;
      
      let newIndex = Math.floor(relativeScroll / cardPortion);
      newIndex = Math.max(0, Math.min(newIndex, totalCards - 1));
      
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20" ref={sectionRef}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Segurança da Informação
      </h2>
      <p className="text-gray-400 mb-10">
        Proteção e consultoria em segurança cibernética
      </p>

      <div className="flex flex-col md:flex-row gap-1 overflow-hidden rounded-xl">
        {securityServices.map((service, index) => {
          const isExpanded = index === activeIndex;
          
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl border border-red-900/30 transition-all duration-500 ease-out cursor-pointer
                ${isExpanded ? 'md:w-[400px] bg-red-950/40' : 'md:w-[100px]' }
                h-[280px] md:h-[320px]
                flex-shrink-0
              `}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`} />
              
              <div className="relative h-full flex flex-col">
                <div className={`p-4 flex items-start justify-center
                  ${isExpanded ? 'pt-6' : 'pt-4' }
                `}>
                  <div className={`text-red-500 transition-all duration-500
                    ${isExpanded ? 'scale-100' : 'scale-75' }
                  `}>
                    {service.icon}
                  </div>
                </div>

                <div className={`flex-1 px-4 transition-all duration-500 overflow-hidden
                  ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:translate-y-0' }
                `}>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 text-center">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, i) => (
                      <span key={i} className="text-xs text-red-300 bg-red-900/30 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {!isExpanded && (
                  <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {service.title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-gray-500 text-sm text-center mt-4">
        Scroll para explorar
      </p>
    </section>
  );
};

export default ServiceInfoSec;