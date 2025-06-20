
import { Card } from "@/components/ui/card";

const HardSkills = [
  { name: "Java", level: 70 },
  { name: "SQL", level: 90 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 60 },
  { name: "C#", level: 65 },
  { name: "JasperSoft", level: 75 },
  { name: "Linux", level: 80 },
  { name: "Clound", level: 50 },
  { name: "Network Infrastructure", level: 70 },
];

const SoftSkills = [
  "Trabalho em Equipe",
  "Comunicação Eficaz",
  "Resolução de Problemas",
  "Adaptabilidade",
  "Proatividade",
  "Gerenciamento de Tempo",
  "Pensamento Crítico",
  "Atenção aos Detalhes"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-resume-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Habilidades</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold text-white mb-6">Hard Skills</h3>
            <div className="space-y-6">
              {HardSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-resume-gray rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyan-gradient rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold text-white mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SoftSkills.map((skill, index) => (
                <Card key={index} className="skill-card flex items-center">
                  <div className="mr-3 text-resume-cyan">•</div>
                  <span>{skill}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
