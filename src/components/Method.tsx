import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface methodProps {
  value: string;
  title: string;
  description: string;
  left?: boolean;
  icon: string;
  modalValues?: any;
}

interface MethodItemProps {
  item: methodProps;
  openModal: (value: any) => void;
}

const methods: methodProps[] = [
  {
    value: "01",
    title: "Desafio",
    description:
      "Processo de captação e entendimento inicial da necessidade do cliente",
    left: true,
    icon: "/result/06-01-Desafio.png",
    modalValues: {
      modalTitle: "Desafio",
      modalNumber: "01",
      contents: [
        {
          title: "Levantamento",
          content:
            "Nesta fase, realizamos reuniões detalhadas e colaborativas com os stakeholders, focadas em compreender de forma profunda as necessidades, desafios e metas do cliente. Essas discussões ajudam a garantir que todas as partes estejam na mesma página quanto às expectativas e objetivos do projeto.",
        },
        {
          title: "Insights",
          content:
            "Esses encontros criam um espaço para um diálogo aberto, permitindo que os participantes compartilhem suas perspectivas, insights e preocupações.",
        },
      ],
    },
  },
  {
    value: "02",
    title: "Direção",
    description:
      "Definição de skills necessárias, horas da equipe e cronograma geral",
    icon: "/result/icons/06-02-Direção.png",
    modalValues: {
      modalTitle: "Direção",
      modalNumber: "02",
      contents: [
        {
          title: "Definição",
          content:
            "Nesta etapa, realizamos a definição das ferramentas e tecnologias a serem utilizadas, levando em Direção consideração as necessidades específicas do projeto e as02 Definição de skills competências da equipe necessárias, horas da envolvida. Essa análise equipe e cronograma geral cuidadosa é essencial para garantir que as soluções adotadas sejam as mais adequadas, otimizando recursos e maximizando a Preparação eficiência.",
        },
        {
          title: "Planejamento",
          content:
            "Simultaneamente, solicitação de acessos construímos um cronograma geral do projeto, detalhando as principais etapas e marcos.",
        },
      ],
    },
  },
  {
    value: "03",
    title: "Preparação",
    description:
      "Análise detalhada da solicitação, criação do cronograma de trabalho e solicitação de acessos",
    left: true,
    icon: "/result/icons/06-03-Preparação.png",
    modalValues: {
      modalTitle: "Preparação",
      modalNumber: "03",
      contents: [
        {
          title: "Documentação",
          content:
            "Criamos um documento detalhado que Definição de skills descreve o escopo do projeto, necessárias, horas da incluindo objetivos, entregáveis, equipe e cronograma geral restrições e premissas. Esse documento serve como guia para toda a equipe e garante que todos estejam alinhados quanto às expectativas do projeto.",
        },
        {
          title: "Acessos",
          content:
            "Solicitamos todos os acessos necessários aos sistemas e dados que serão utilizados no projeto, garantindo que a equipe possa iniciar o trabalho sem atrasos e com todas as permissões necessárias.",
        },
        {
          title: "Planejamento",
          content:
            "Utilizando metodologias ágeis como o Scrum, definimos as horas, tarefas e prazos para cada atividade do projeto. Dividimos o trabalho em sprints e organizamos as tarefas de forma a maximizar a eficiência e a colaboração da equipe.",
        },
      ],
    },
  },
  {
    value: "04",
    title: "Roteiro (Padrões)",
    description:
      "Estabelecimento de padrões de desenvolvimento alinhados às melhores práticas do mercado",
    icon: "/result/icons/06-04-Roteiro.png",
    modalValues: {
      modalTitle: "Roteiro",
      modalNumber: "04",
      contents: [
        {
          title: "Documentação",
          content:
            "Baseando-se  no documento criado na etapa de preparação, aplicamos as melhores práticas de desenvolvimento de sofware e análise de dados.  Isso inclui padrões de cronograma de trabalho e codificação, controle de solicitação de acessos versão, revisão de código e integração contínua.",
        },
        {
          title: "Publicação",
          content:
            "Definimos um modelo para a publicação e atualização do processo, garantindo que qualquer mudança seja devidamente documentada e comunicada. Isso inclui a criação de pipelines automatizados para a implantação de código e a atualização de modelos analiticos.",
        },
      ],
    },
  },
  {
    value: "05",
    title: "Expedição (Jornada)",
    description:
      "Implementação dos padrões estabelecidos, testes unitários, validação com o cliente e publicação",
    left: true,
    icon: "/result/icons/06-05-Expedição.png",
    modalValues: {
      modalTitle: "Expedição (Jornada)",
      modalNumber: "05",
      contents: [
        {
          title: "Implementação",
          content:
            "Aplicamos os padrões e melhores práticas definidos anteriormente para desenvolver as soluções propostas. Esta fase envolve a codificação, configuração de ferramentas e integração do sistema.",
        },
        {
          title: "Testes",
          content:
            "Realizamos testes unitários rigorosos para garantir que cada componente funcione corretamente de forma isolada. Em seguida, realizamos testes de integração para garantir que todos os componentes funcionem harmoniosamente. ",
        },
        {
          title: "Validação",
          content:
            "Durante a fase de homologação, validamos as soluções com o cliente, garantindo que todas as funcionalidades atendam às suas necessidades e expectativas. Qualquer ajuste necessário é realizado com base no feedback do cliente.",
        },
        {
          title: "Documentação",
          content:
            "Documentamos todo o processo de desenvolvimento, incluindo decisões tomadas, mudanças realizadas e justificativas para essas mudanças. Isso garante transparência e facilita a manutenção futura.",
        },
      ],
    },
  },
  {
    value: "06",
    title: "Conquista",
    description: "Apresentação e conclusões finais do processo elaborado",
    icon: "/result/icons/06-06-Conquista.png",
    modalValues: {
      modalTitle: "Conquista",
      modalNumber: "06",
      contents: [
        {
          title: "Demonstração",
          content:
            "Apresentamos o projeto finalizado, destacando a aplicação prática das soluções desenvolvidas. ",
        },
        {
          content:
            "Além disso, conduziremos uma sessão de transferência de conhecimento, abordando aspectos gerais do projeto para garantir uma compreensão abrangente. ",
        },
        {
          title: "Melhoria contínua",
          content:
            "Reflexão e análise detalhada dos resultados obtidos, identificando áreas para aprimoramento.",
        },
        {
          content:
            "Coleta de feedback para assegurar um processo contínuo de melhoria e evolução. ",
        },
      ],
    },
  },
];

const Modal = ({ isOpen, onClose, content }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
      <div className="w-[38%] flex justify-end items-end">
        <AiOutlineClose
          onClick={onClose}
          color="white"
          className="h-[40px] cursor-pointer"
          size={40}
        />
      </div>

      <div className="relative w-[90%] max-w-lg p-6 bg-[url('/result/bgmodal.png')] bg-cover bg-no-repeat overflow-hidden">
        {/* Fundo com efeito de papel cortado */}
        <div
          className="absolute inset-0 -z-10 bg-gray-100"
          style={{
            clipPath:
              "polygon(10% 0%, 90% 0%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)",
          }}
        ></div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {content.modalNumber} - {content.modalTitle}
          </h2>

          {content.contents?.map((item: any, index: number) => (
            <div key={index} className="mb-4">
              <p className="text-gray-700 mb-2">
                {item.title && <strong>{item.title}:</strong>}{" "}
                {item.content || "N/A"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MethodItem = ({ item, openModal }: MethodItemProps) => {
  return (
    <>
      <div className="w-full  flex justify-center items-center sm:w-full md:w-[600px]">
        {item.left && (
          <div className="mt-[-20px] ml-[120px] flex">
            <div className="text-5xl text-[#FFFFFF] flex items-center min-w-[40px] pr-4">
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
          className="cursor-pointer mt-[-15px] bg-[#1C2026] flex h-[130px] rounded-[131px] text-[#9FA7C4] px-4 p-16 gap-4 items-center ml-[-80px] w-[395px]"
          onClick={() => openModal(item.modalValues)}
        >
          <div className="flex items-center justify-center">
            <Image src={item.icon} width={100} height={100} alt={""} />
          </div>
          <div>
            <p className="font-bold text-lg">{item.title}</p>
            <p className="text-medium">{item.description}</p>
          </div>
        </div>
        {!item.left && Number(item.value) !== 6 && (
          <div className="flex mt-[-20px] ml-[-30px] ">
            <Image
              src="/result/06-Seta-02.png"
              width={150}
              height={150}
              alt={""}
            />
            <div className="text-5xl text-[#FFFFFF] flex items-center pl-5  ">
              {item.value}
            </div>
          </div>
        )}
        {!item.left && Number(item.value) === 6 && (
          <div className="flex mt-[-20px] ml-[-20px] ">
            <div className=" flex h-full flex-col items-center justify-center position-relative">
              <Image
                src="/result/06-Seta-03.png"
                width={150}
                height={150}
                alt={""}
              />
              <div>
                <Image
                  src="/result/06-Seta-04.png"
                  width={100}
                  height={100}
                  alt={""}
                  className=" relative  left-[73px] top-[15px] mb-20"
                />
              </div>
            </div>
            <div className="text-5xl text-[#FFFFFF] flex items-center  pl-5 ">
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
      className="w-full flex gap-5 sm:w-full md:w-[600px] cursor-pointer"
      onClick={() => openModal(item.modalValues)}
    >
      {item?.left && (
        <div className="text-4xl text-[#FFFFFF] flex items-center min-w-[40px]">
          {item?.value}
        </div>
      )}
      <div className="bg-[#1C2026] flex rounded-[131px] w-full text-[#9FA7C4] p-4 gap-4 items-center">
        <div className="flex items-center justify-center">
          <Image src={item.icon} width={70} height={150} alt={""} />
        </div>
        <div>
          <p className="font-bold text-lg">{item.title}</p>
          <p className="text-medium">{item.description}</p>
        </div>
      </div>
      {!item.left && (
        <div className="text-4xl text-[#FFFFFF] flex items-center">
          {item.value}
        </div>
      )}
    </div>
  );
};

export const Method = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

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

  const openModal = (content: any) => {
    setModalContent(content); // Define o conteúdo do modal
    setIsOpen(true); // Abre o modal
  };

  return (
    <div className="bg-[#242E3D] flex flex-col items-center px-3 py-4">
      <h1 className="text-[#FFFFFF] font-bold text-2xl">MÉTODO INSAEGHT</h1>
      <p className="text-[#2BC0FB] text-sm">
        Clique no ícone para ver o conteúdo
      </p>
      <div className="flex gap-5 flex-col mt-10">
        {methods.map((item) => (
          <div key={item.description}>
            {/* Modal */}
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              content={modalContent}
            />

            {/* Condicional para mobile ou desktop */}
            {isMobile ? (
              <MethodItemDesktop
                item={item}
                openModal={openModal} // Passa a função para abrir o modal
              />
            ) : (
              <MethodItem
                item={item}
                openModal={openModal} // Passa a função para abrir o modal
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
