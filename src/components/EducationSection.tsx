
import { Card } from "@/components/ui/card";
import { Book, Award } from "lucide-react";

const education = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Unisales - Centro Universitário Salesiano",
    period: "2021 - 2025",
    type: "education" 
  }
];

const certifications = [
  {
    name: "Junior cybersecurity Analystyst Carrer Part",
    issuer: "Cisco",
    year: "2025",
    type: "certification"
  },
  {
    name: "Network Defense",
    issuer: "Cisco",
    year: "2025",
    type: "certification"
  },
  {
    name: "Endpoint Security",
    issuer: "Cisco",
    year: "2025",
    type: "certification"
  },
  {
    name: "Cyber Threat Management",
    issuer: "Cisco",
    year: "2025",
    type: "certification"
  },
  {
    name: "Ethical Hacker",
    issuer: "Cisco",
    year: "2024",
    type: "certification"
  },
  {
    name: "Network Device Initial Configuration",
    issuer: "Cisco", 
    year: "2025",
    type: "certification"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-resume-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Formação & Certificações</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white flex items-center mb-6">
              <Book size={22} className="text-resume-cyan mr-2" />
              Formação Acadêmica
            </h3>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="experience-card animate-slide-up">
                  <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                  <p className="text-resume-cyan">{item.institution}</p>
                  <p className="text-gray-400 text-sm">{item.period}</p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white flex items-center mb-6">
              <Award size={22} className="text-resume-cyan mr-2" />
              Certificações
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="skill-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h4 className="text-white font-medium">{cert.name}</h4>
                  <div className="flex justify-between mt-2">
                    <span className="text-resume-cyan text-sm">{cert.issuer}</span>
                    <span className="text-gray-400 text-sm">{cert.year}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
