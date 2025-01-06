import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Exemplo de itens do carrossel
export const items = {
  items: {
    bootstrap: [],
    elastic: [],
    responsive: [
      {
        id: 1,
        imageUrlDesktop: "/result/Banner.png",
        imageUrlMobile: "/result/02-Banner.png", // Adicione o URL da imagem para mobile aqui
      },
      {
        id: 2,
        imageUrlDesktop: "/result/Banner.png",
        imageUrlMobile: "/result/02-Banner.png",
      },
    ],
  },
};

export default function ResponsiveCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define como "mobile" se a largura for menor ou igual a 768px
    };

    handleResize(); // Verifica o tamanho da tela no carregamento
    window.addEventListener("resize", handleResize); // Adiciona um listener para redimensionamento

    return () => {
      window.removeEventListener("resize", handleResize); // Limpa o listener quando o componente é desmontado
    };
  }, []);
  return (
    <Carousel
      dynamicHeight
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {items.items.responsive.map((item) => (
        <div key={item.id} className="relative w-full h-[600px] md:h-[600px]">
          <Image
            src={isMobile ? item.imageUrlMobile : item.imageUrlDesktop}
            alt="Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 mx-auto w-[300px] sm:px-9 md:w-auto flex flex-col items-center justify-center gap-6 text-white">
            <p>SEJA BEM VINDO</p>
            <div className="border-2 border-blue-500 w-[187px]" />
            <p className=" font-bold text-2xl md:text-5xl text-center">
              TRANSFORMAR É SIMPLES!
            </p>
            <p className="text-center">
              Somos uma consultoria de dados especializada em transformar
              informações em insights e automação.
            </p>
            <span className="indicator-dot"></span>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
