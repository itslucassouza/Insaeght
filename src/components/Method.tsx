import Image from "next/image";
import { useEffect, useState } from "react";

interface methodProps {
  value: string;
  title: string;
  description: string;
  left?: boolean;
  icon: string;
}

interface MethodItemProps {
  item: methodProps;
  openModal: () => void;
}

const methods: methodProps[] = [
  {
    value: "01",
    title: "Desafio",
    description:
      "Processo de captação e entendimento inicial da necessidade do cliente",
    left: true,
    icon: "/result/06-01-Desafio.png",
  },
  {
    value: "02",
    title: "Direção",
    description:
      "Definição de skills necessárias, horas da equipe e cronograma geral",
    icon: "/result/icons/06-02-Direção.png",
  },
  {
    value: "03",
    title: "Preparação",
    description:
      "Análise detalhada da solicitação, criação do cronograma de trabalho e solicitação de acessos",
    left: true,
    icon: "/result/icons/06-03-Preparação.png",
  },
  {
    value: "04",
    title: "Roteiro (Padrões)",
    description:
      "Estabelecimento de padrões de desenvolvimento alinhados às melhores práticas do mercado",
    icon: "/result/icons/06-04-Roteiro.png",
  },
  {
    value: "05",
    title: "Expedição (Jornada)",
    description:
      "Implementação dos padrões estabelecidos, testes unitários, validação com o cliente e publicação",
    left: true,
    icon: "/result/icons/06-05-Expedição.png",
  },
  {
    value: "06",
    title: "Conquista",
    description: "Apresentação e conclusões finais do processo elaborado",
    icon: "/result/icons/06-06-Conquista.png",
  },
];

const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 ">
      <button
        onClick={onClose}
        className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 
           position-absolute t-0 
            "
      >
        Fechar
      </button>
      <div className="relative w-[90%] max-w-lg p-6 bg-[url('/result/bgmodal.png')] bg-cover bg-no-repeat  overflow-hidden">
        {/* Fundo com efeito de papel cortado */}
        <div
          className="absolute inset-0 -z-10 bg-gray-100"
          style={{
            clipPath:
              "polygon(10% 0%, 90% 0%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)",
          }}
        ></div>

        {/* Conteúdo do Modal */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            01 - Desafio
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Levantamento:</strong> Nesta fase, realizamos reuniões
            detalhadas e colaborativas com os stakeholders, focadas em
            compreender de forma profunda as necessidades, desafios e metas do
            cliente.
          </p>
          <p className="text-gray-700">
            <strong>Insights:</strong> Esses encontros criam um espaço para um
            diálogo aberto, permitindo que os participantes compartilhem suas
            perspectivas, insights e preocupações.
          </p>
          {/* Botão Fechar */}
        </div>
      </div>
    </div>
  );
};

const MethodItem = ({ item, openModal }: MethodItemProps) => {
  return (
    <>
      <div className="w-full  flex justify-center items-center sm:w-full md:w-[600px]  ">
        {item.left && (
          <div className="mt-[-20px] ml-[120px] flex ">
            <div className="text-4xl text-[#FFFFFF] flex items-center min-w-[40px]  ">
              {item.value}
            </div>
            <Image
              src="/result/06-Seta-01.png"
              width={150}
              height={150}
              alt={""}
            />
          </div>
        )}
        <div
          className="
        cursor-pointer
        mt-[-15px]
      bg-[#1C2026] 
      flex 
      h-[130px]
      rounded-[131px]
       text-[#9FA7C4] px-4 p-16 gap-4 items-center ml-[-80px] w-[395px] "
          onClick={() => openModal()}
        >
          <div className="flex items-center  justify-center  ">
            <Image src={item.icon} width={100} height={100} alt={""} />
          </div>
          <div>
            <p className="font-bold text-lg">{item.title}</p>
            <p className="text-medium">{item.description}</p>
          </div>
        </div>
        {!item.left && (
          <div className=" flex mt-[-20px] ml-[-80px]">
            <Image
              src="/result/06-Seta-02.png"
              width={150}
              height={150}
              alt={""}
            />
            <div className="text-4xl text-[#FFFFFF] flex items-center ">
              {item.value}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const MethodItemDesktop = ({ item, openModal }: MethodItemProps) => {
  return (
    <div
      className="w-full flex gap-5  sm:w-full md:w-[600px] "
      onClick={() => openModal()}
    >
      {item?.left && (
        <div className="text-4xl text-[#FFFFFF] flex items-center min-w-[40px] ">
          {item?.value}
        </div>
      )}
      <div className="bg-[#1C2026] flex rounded-[131px] w-full text-[#9FA7C4] p-4 gap-4 items-center ">
        <div className="flex items-center justify-center ">
          <Image src={item.icon} width={70} height={150} alt={""} />
        </div>
        <div>
          <p className="font-bold text-lg">{item.title}</p>
          <p className="text-medium">{item.description}</p>
        </div>
      </div>
      {!item.left && (
        <div className="text-4xl text-[#FFFFFF] flex items-center ">
          {item.value}
        </div>
      )}
    </div>
  );
};

export function Method() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#242E3D] flex flex-col  items-center  px-3 py-4 ">
      <h1 className="text-[#FFFFFF] font-bold text-2xl">MÉTODO INSAEGHT</h1>
      <p className="text-[#2BC0FB] text-sm">
        Clique no icone para ver o conteudo
      </p>
      <div className="flex gap-5 flex-col mt-10">
        {methods.map((item) => (
          <div key={item.description}>
            <Modal isOpen={isOpen} onClose={openModal} />
            {isMobile ? (
              <MethodItemDesktop
                item={item}
                openModal={() => setIsOpen(!isOpen)} // Passa uma função que altera o estado
              />
            ) : (
              <MethodItem
                item={item}
                openModal={() => setIsOpen(!isOpen)} // Passa uma função que altera o estado
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
