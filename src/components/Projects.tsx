
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    //   {
    //   title: "Mobile Banking App",
    //   description: "Aplicativo móvel de banking com autenticação biométrica e transferências instantâneas.",
    //   technologies: [, "Firebase", "Spring Boot", "JWT"],
    //   githubUrl: "https://github.com/DouglasLessaT",
    //   liveUrl: "#",
    //   image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    // },
    {
      title: "GTCC - Gerenciador Apresentações de TCC",
      description: "Api de gerenciamento de apresentacoes ",
      technologies: ["Vue.js","Spring Boot", "MySQL"],
      githubUrl: "https://github.com/DouglasLessaT/GTCCBackEnd",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },    
    {
      title: "Surface Analytics Tool",
      description: "Ferramenta de análise de superfície, que coleta e analisa dados de sites para PenTesting.",
      technologies: ["Python", "Selenium", "Scrapy", "wappalyzer"],
      githubUrl: "https://github.com/DouglasLessaT/surface_analysis_tool",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      title: "EmergencyQueue {Em desenvovolvimento}",
      description: "Api de gerenciamento de filas de espera para atendimentos médicos de emergência.",
      technologies: ["Spring Boot","JWT", "PostgreSQL", "Golang"],
      githubUrl: "https://github.com/DouglasLessaT/MVPEmergencyQueue",
      liveUrl: "#",
      image: "https://wallpapers.com/images/high/hd-medical-health-icon-with-stethoscope-zwpo6s3pg7xqndlk.webp"
    },
        {
      title: "Demo Kafka e Docker",
      description: "Api de filas de mensagems com Kafka e Docker",
      technologies: ["Spring Boot","Typescript", "PostgreSQL"],
      githubUrl: "https://github.com/DouglasLessaT/KafkaDemo",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    
    
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-resume-gray/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-center">Projetos</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e soluções.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-resume-cyan/30 hover:border-resume-cyan bg-resume-gray">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-resume-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-resume-cyan">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-resume-cyan">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-resume-cyan/20 text-resume-cyan text-xs rounded-md border border-resume-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-resume-cyan/30 hover:border-resume-cyan hover:bg-resume-cyan/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  {/* <Button 
                    size="sm" 
                    className="flex-1 bg-resume-cyan hover:bg-resume-cyan/90 text-resume-dark"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
