import Image from "next/image";
import { useEffect, useState } from "react";

const about = [
  {
    title: "MISSÃO",
    description:
      "Navegar pelo mar de dados, projetando caminhos eficazes e inovadores.",
    icon: "/result/missao.png",
  },
  {
    title: "VISÃO",
    description:
      "Criar experiências memoráveis, simplificando a vida das pessoas.",
    icon: "/result/visao.png",
  },
  {
    title: "VALORES",
    description:
      "Determinação em valorizar pessoas, simplificar caminhos e transformar resultados.",
    icon: "/result/valo.png",
  },
];

export function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="sm:p-0 w-full flex items-center flex-col justify-center md:px-20">
      <div
        className="w-[320px] sm:w-full md:w-[1000px] mb-[50px] mx-auto 
             flex flex-col sm:flex-row justify-between sm:justify-center items-center p-0 gap-5"
      >
        <div className="sm:p-0 flex gap-4 md:flex flex-col">
          <div>
            <p className="text-[#707070] mt-4 opacity-50">/ sobre /</p>
          </div>

          <div className="flex flex-wrap">
            <p className="text-2xl leading-none text-[#707070] mb-1">
              INSAEGHT
            </p>
            <p className="text-2xl text-[#707070] leading-none">
              Talentos diversos e uma paixao compartilhada pela excelência
            </p>
          </div>

          <p className="text-[#707070]">
            Formada por profissionais com mais de 15 anos de mercados. Sao
            milhares de horas em projetos entregues com alto nivel de
            satisfacao.
          </p>

          <span className="font-bold text-[#707070]">
            Contamos com a skill de transformar a expedicao dos dados em uma
            narrativa simples com resultados prosperos
          </span>
        </div>
        <div className="flex items-center justify-center mt-[49px]">
          <Image
            src="/result/03-Sobre.png"
            width={isMobile ? 300 : 600}
            height={isMobile ? 400 : 300}
            alt="Banner"
          />
        </div>
      </div>

      {/* Contêiner dos cards com scroll horizontal e barra de scroll oculta */}
      <div className="w-full flex overflow-hidden justify-center md:w-[1000px]">
        <div
          className="flex overflow-x-auto gap-6 items-center h-full max-w-[90vw] scroll-snap-x-mandatory hide-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {about.map((item) => (
            <div
              key={item.title}
              className="
                min-w-[80%] 
                border
                bg-[#FBFBFB]
                ml-4 lg:ml-0 sm:min-w-[90%] md:min-w-[30%] h-[400px] flex flex-col items-center justify-center shadow-lg rounded-lg scroll-snap-align-start"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex items-center justify-center">
                <Image src={item.icon} width={170} height={170} alt="Banner" />
              </div>
              <div className="mt-4 items-center text-center">
                <p className="text-purple-600 font-semibold">{item.title}</p>
                <div className="bg-[#2BC0FB] h-[2px] w-full px-0 mt-2" />
              </div>
              <div className="flex items-center text-center w-full justify-center text-sm mt-4">
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-[19px]">
        <Image
          src="/result/03-Sobre.png"
          width={isMobile ? 130 : 180}
          height={isMobile ? 130 : 180}
          alt="Banner"
        />
      </div>

      {/* Estilo para ocultar a barra de scroll */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Oculta a barra de scroll no Chrome, Safari e Opera */
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* Oculta a barra de scroll no IE e Edge */
          scrollbar-width: none; /* Oculta a barra de scroll no Firefox */
        }
      `}</style>
    </section>
  );
}
