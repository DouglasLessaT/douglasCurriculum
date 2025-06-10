
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho de compras, pagamentos e gestão de produtos.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/DouglasLessaT",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com drag-and-drop e colaboração em tempo real.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com/DouglasLessaT",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Dashboard interativo para análise de dados com gráficos e relatórios personalizáveis.",
      technologies: ["Python", "Flask", "D3.js", "MySQL"],
      githubUrl: "https://github.com/DouglasLessaT",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      title: "Mobile Banking App",
      description: "Aplicativo móvel de banking com autenticação biométrica e transferências instantâneas.",
      technologies: ["React Native", "Firebase", "Node.js", "JWT"],
      githubUrl: "https://github.com/DouglasLessaT",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    }
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
                  <Button 
                    size="sm" 
                    className="flex-1 bg-resume-cyan hover:bg-resume-cyan/90 text-resume-dark"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
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
