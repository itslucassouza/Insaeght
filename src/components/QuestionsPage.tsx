import Image from "next/image";

const Form: React.FC = () => {
  return (
    <div className="flex w-full h-full">
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className="sr-only">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="sobrenome" className="sr-only">
            Sobrenome
          </label>
          <input
            type="text"
            id="sobrenome"
            placeholder="Sobrenome"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="sr-only">
            WhatsApp
          </label>
          <input
            type="tel"
            id="whatsapp"
            placeholder="WhatsApp"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="endereco" className="sr-only">
            Endereço
          </label>
          <input
            type="text"
            id="endereco"
            placeholder="Endereço"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="mensagem" className="sr-only">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            placeholder="Mensagem"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full px-6 
            flex items-center justify-center gap-2
            py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300"
          >
            <Image
              src="/result/icons/09-Enviar-01.png"
              width={10}
              height={10}
              alt={""}
            />
            Enviar
            <Image
              src="/result/icons/09-Enviar-02.png"
              width={10}
              height={10}
              alt={""}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export function QuestionsPage() {
  return (
    <div className=" mx-auto w-[70%] md:w-[1000px] flex flex-col md:flex-row  ">
      <div className="flex flex-col w-full lg:p-8 mx-auto justify-center">
        <p className="text-[#A711FF] font-bold text-2xl">
          Estamos sempre prontos para ajudar e tirar suas dúvidas
        </p>
        <p className="text-[#9FA7C4] text-base">
          Entre agora em contato e transforme agora seus conteúdos em novas
          possibilidades de negócio.
        </p>

        <div className="my-5 flex flex-col gap-4">
          <div className="flex gap-3">
            <Image
              src="/result/questions/08-01-Local.png"
              width={25}
              height={15}
              alt="Banner"
            />
            <div className="text-sm text-[#383837]">
              <p>Av. Paulista, 1106, Sala 01 </p>
              <p>16º Andar | Bela Vista, SP</p>
            </div>
          </div>
          <div className="flex gap-3 text-sm ">
            <Image
              src="/result/questions/08-02-Telefone.png"
              width={25}
              height={15}
              alt="Banner"
            />
            <p className="font-bold">(11) 1234.5678 </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/result/questions/01-icone-03.png"
              width={25}
              height={15}
              alt="Banner"
            />
            <Image
              src="/result/questions/01-icone-04.png"
              width={25}
              height={15}
              alt="Banner"
            />
            <p className="text-xs">@insaeghtdataconsult</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:p-8 mx-auto justify-center">
        <Form />
      </div>
    </div>
  );
}
