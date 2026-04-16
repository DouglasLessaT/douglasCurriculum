import { Code, Database, Globe, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const devServices = [
  {
    icon: <Code size={32} />,
    title: "Desenvolvimento Web",
    description: "Criação de aplicações web modernas com React, TypeScript e JavaScript."
  },
  {
    icon: <Database size={32} />,
    title: "Desenvolvimento Backend",
    description: "APIs RESTful e GraphQL, integração com bancos de dados SQL e NoSQL."
  },
  {
    icon: <Globe size={32} />,
    title: "Sistemas Web",
    description: "Sistemas web completos, desde o backend até o frontend."
  },
  {
    icon: <Terminal size={32} />,
    title: "Automação de Scripts",
    description: "Automação de tarefas e processos com scripts em Python, Java e bash."
  }
];

const ServiceDev = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-red-400 mb-8 border-b border-red-800 pb-4">
        Desenvolvimento de Software
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {devServices.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4">
              <Card className="bg-red-900/20 border-red-800 p-6 hover:bg-red-900/40 transition-colors h-full">
                <div className="text-red-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-red-900/50 border-red-700 hover:bg-red-800 text-red-200" />
        <CarouselNext className="right-0 bg-red-900/50 border-red-700 hover:bg-red-800 text-red-200" />
      </Carousel>
    </section>
  );
};

export default ServiceDev;