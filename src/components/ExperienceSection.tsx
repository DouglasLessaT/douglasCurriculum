
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Estagiário Dev",
    company: "Devena Tecnologia e Inovação",
    location: "Vitória - ES",
    period: "Set 2024 - Mar 2025",
    description: "Responsável por integrar relatórios criados em JasperSoft Studio, usando SQL para consultas e Java para manipulação de dados. Também encarregado de desenvolver regras de customização de CRM para empresas, utilizando JavaScript e TypeScript."
  },
    {
    title: "Suporte ao Cliente N1",
    company: "Genesis Tecnologia",
    location: "Rio Marino, Vila Velha - ES",
    period: "Jun 2024 - Set 2024",
    description: "Atuei como suporte ao cliente de primeiro nível, fornecendo assistência em software de gestão clinica. "
  },
  {
    title: "Suporte TI",
    company: "Dalta Industria e comercio de madeiras LTDA",
    location: "Rio Marino, Vila Velha - ES",
    period: "Jun 2019 - Mar 2024",
    description: "Atuei no suporte técnico da empresa, sendo responsável pela instalação e configuração de ambientes de trabalho, montagem e manutenção de infraestrutura de hardware, além da automação de processos utilizando Python. Realizei consultas e manipulação de dados em SQL para apoiar as demandas do setor, e ofereci suporte ao uso do pacote Microsoft Office."  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-resume-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Experiência Profissional</h2>
        
        <div className="space-y-8 mt-10">
          {experiences.map((exp, index) => (
            <Card key={index} className="experience-card animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-resume-cyan/20 flex items-center justify-center">
                    <Briefcase size={24} className="text-resume-cyan" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <div className="text-resume-cyan">{exp.company} | {exp.location}</div>
                    <div className="text-gray-400 text-sm">{exp.period}</div>
                  </div>
                  
                  <p className="text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
