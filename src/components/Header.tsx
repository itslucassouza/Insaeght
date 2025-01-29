import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloqueia o scroll da página quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Limpa a classe ao desmontar o componente
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Função para rolar suavemente até uma seção
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Fecha o menu mobile após o clique
  };

  return (
    <header className="absolute flex items-center justify-center  top-0 left-0 w-full z-10 bg-black bg-opacity-30 h-[145px]">
      <div className="  md:w-[1050px] flex  items-center">
        {/* Botão do menu para mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <AiOutlineClose /> : <FiMenu />}
        </button>

        {/* Logo */}
        <div className="md:mr-0 w-[30%]  mt-5  space-x-2 p-10">
          <Image
            src="/result/INSAEGHT-MARCA-02.svg"
            width={140}
            height={253}
            alt="Logo"
            priority
          />
        </div>

        {/* Links da seção de desktop */}
        <nav className="hidden md:flex w-full  mt-5 items-center justify-center space-x-6 text-white mr-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="hover:text-gray-300"
          >
            HOME
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="hover:text-gray-300"
          >
            SOBRE
          </a>
          <a
            href="#method"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("method");
            }}
            className="hover:text-gray-300"
          >
            MÉTODO
          </a>
          <a
            href="#tech"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("tech");
            }}
            className="hover:text-gray-300"
          >
            TECNOLOGIA
          </a>
          <a
            href="#cases"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("cases");
            }}
            className="hover:text-gray-300"
          >
            CASES
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hover:text-gray-300"
          >
            CONTATO
          </a>
        </nav>

        {/* Ícone do WhatsApp */}
        <div className="sm:ml-0 md:flex  mt-5 items-center cursor-pointer  w-[10%] ">
          <FaWhatsapp className="text-3xl text-white" />
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <>
          <nav
            className="absolute 
          w-full
          min-h-[100vh]
          h-[100%]
          top-0 left-0 bottom-0 right-0
          bg-[#A711FF] bg-opacity-80 flex flex-col items-center justify-center space-y-6 p-4 text-white md:hidden"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden  w-[80%] flex justify-end"
            >
              {isOpen ? <AiOutlineClose size={30} /> : <FiMenu />}
            </button>
            <Image
              src="/result/INSAEGHT-MARCA-02.svg"
              width={150}
              height={200}
              alt="Banner"
            />
            {/* Links do menu mobile */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="hover:text-gray-300"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="hover:text-gray-300"
            >
              SOBRE
            </a>
            <a
              href="#method"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("method");
              }}
              className="hover:text-gray-300"
            >
              MÉTODO
            </a>
            <a
              href="#tech"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("tech");
              }}
              className="hover:text-gray-300"
            >
              TECNOLOGIA
            </a>
            <a
              href="#cases"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("cases");
              }}
              className="hover:text-gray-300"
            >
              CASES
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="hover:text-gray-300"
            >
              CONTATO
            </a>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
