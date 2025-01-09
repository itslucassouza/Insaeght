import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const data = Object.fromEntries(formData.entries());

      emailjs
        .sendForm(
          "service_11schgl",
          "template_5gezc9j",
          form.current,
          "FtGGWEo42c43XLTSh"
        )
        .then(
          (result) => {
            console.log("E-mail enviado com sucesso!", result.text);
            alert("Mensagem enviada com sucesso!");
            form.current?.reset(); // Limpa o formulário após o envio
          },
          (error) => {
            console.log("Erro ao enviar e-mail:", error.text);
            alert("Erro ao enviar a mensagem. Tente novamente.");
          }
        );
    }
  };

  return (
    <div className="flex w-full h-full">
      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-2 gap-4">
        {/* Campo Oculto para to_name */}
        <input
          type="hidden"
          name="to_name"
          value="Equipe Insaeght" // Defina o nome do destinatário aqui
        />

        {/* Campo Nome */}
        <div>
          <label htmlFor="nome" className="sr-only">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Campo Sobrenome */}
        <div>
          <label htmlFor="sobrenome" className="sr-only">
            Sobrenome
          </label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            placeholder="Sobrenome"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Campo E-mail */}
        <div>
          <label htmlFor="email" className="sr-only">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Campo WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className="sr-only">
            WhatsApp
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            placeholder="WhatsApp"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Campo Endereço */}
        <div className="col-span-2">
          <label htmlFor="endereco" className="sr-only">
            Endereço
          </label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            placeholder="Endereço"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Campo Mensagem */}
        <div className="col-span-2">
          <label htmlFor="mensagem" className="sr-only">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Mensagem"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
        </div>

        {/* Botão de Enviar */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full px-6 cursor-pointer flex items-center justify-center gap-2 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300"
          >
            <Image
              src="/result/icons/09-Enviar-01.png"
              width={10}
              height={10}
              alt="Ícone de enviar"
            />
            Enviar
            <Image
              src="/result/icons/09-Enviar-02.png"
              width={10}
              height={10}
              alt="Ícone de enviar"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export function QuestionsPage() {
  return (
    <div className="mx-auto w-[70%] md:w-[1000px] flex flex-col md:flex-row">
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
              alt="Ícone de localização"
            />
            <div className="text-sm text-[#383837]">
              <p>Av. Paulista, 1106, Sala 01 </p>
              <p>16º Andar | Bela Vista, SP</p>
            </div>
          </div>
          <div className="flex gap-3 text-sm">
            <Image
              src="/result/questions/08-02-Telefone.png"
              width={25}
              height={15}
              alt="Ícone de telefone"
            />
            <p className="font-bold">(11) 1234.5678 </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/result/questions/01-icone-03.png"
              width={25}
              height={15}
              alt="Ícone de rede social"
            />
            <Image
              src="/result/questions/01-icone-04.png"
              width={25}
              height={15}
              alt="Ícone de rede social"
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
