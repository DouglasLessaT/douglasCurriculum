import { Globe, Smartphone, Layout, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const appWebServices = [
  {
    icon: <Globe size={24} />,
    title: "Sites Institucionais",
    description: "Sites responsivos para apresentar sua empresa, produtos e serviços.",
    features: ["Design único", "SEO otimizado", "Responsivo"]
  },
  {
    icon: <Smartphone size={24} />,
    title: "Web Apps",
    description: "Aplicações web com funcionalidades personalizadas para seu negócio.",
    features: ["React/TypeScript", "APIs seguras", "Dashboardadmin"]
  },
  {
    icon: <Layout size={24} />,
    title: "Landing Pages",
    description: "Páginas de alta conversão para seus campanhas e produtos.",
    features: ["Copy otimizado", "Formulários", "Integração email"]
  },
  {
    icon: <FileText size={24} />,
    title: "Portfólios",
    description: "Exposição profissional de projetos e trabajos realizados.",
    features: ["Galeria mídia", "Lightbox", "Contato integrado"]
  }
];

const ServiceDevAppWeb = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Aplicações Web
      </h2>
      <p className="text-gray-400 mb-10">
        Soluções web modernas para sua presença online
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {appWebServices.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-[280px]">
              <Card className="bg-[#0a0a0a] border border-red-900/50 p-5 h-full hover:border-red-700 transition-all group">
                <div className="w-10 h-10 rounded bg-red-900/20 flex items-center justify-center mb-4 text-red-500 group-hover:bg-red-900/40 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs text-red-400 bg-red-900/10 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 bg-transparent border border-red-800 text-red-400 hover:bg-red-900 hover:text-white" />
        <CarouselNext className="-right-4 bg-transparent border border-red-800 text-red-400 hover:bg-red-900 hover:text-white" />
      </Carousel>
    </section>
  );
};

export default ServiceDevAppWeb;