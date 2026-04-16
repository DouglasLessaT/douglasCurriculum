import { ShoppingCart, CreditCard, Package, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ecommerceServices = [
  {
    icon: <CreditCard size={24} />,
    title: "Mercado Pago",
    description: "Integração completa com checkout transparente e split de pagamentos.",
    features: ["Pix", "Cartão", "Boleto", "Split"]
  },
  {
    icon: <Package size={24} />,
    title: "Vindi",
    description: "Gestão de assinaturas, cobranças recorrentes e membrecías.",
    features: ["Recorrência", "Trial", "Upgrade", "Cancelamento"]
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "E-commerce",
    description: "Loja virtual completa com catálogo, carrinho e finalização.",
    features: ["Catálogo", "Carrinho", "Checkout", "Pedidos"]
  },
  {
    icon: <Truck size={24} />,
    title: "Frete",
    description: "Cálculo automático de frete com rastreamento em tempo real.",
    features: ["Correios", " JadLog", "Rastreamento", "Etiquetas"]
  }
];

const ServiceDevEcommerce = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Web Commerce
      </h2>
      <p className="text-gray-400 mb-10">
        Lojas virtuais e integrações de pagamento
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {ecommerceServices.map((service, index) => (
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

export default ServiceDevEcommerce;