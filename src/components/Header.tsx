import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-black bg-opacity-30 h-[115px]  ">
      <div className=" mt-2 sm:justify-center md:container mx-auto p flex justify-center items-center ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <AiOutlineClose /> : <FiMenu />}
        </button>
        {/* Logo */}
        <div className="ml-[30px] lg:mr-0 flex justify-center items-center space-x-2 p-10 ">
          <Image src="/result/logo.png" width={140} height={253} alt="Logo" />
        </div>
        {/* Botão do menu para mobile */}

        {/* Links da seção de desktop */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#" className="hover:text-gray-300">
            HOME
          </a>
          <a href="#" className="hover:text-gray-300">
            SOBRE
          </a>
          <a href="#" className="hover:text-gray-300">
            MÉTODO
          </a>
          <a href="#" className="hover:text-gray-300">
            TECNOLOGIA
          </a>
          <a href="#" className="hover:text-gray-300">
            CASES
          </a>
          <a href="#" className="hover:text-gray-300">
            CONTATO
          </a>
        </nav>

        {/* Ícone do WhatsApp */}
        <div className="sm: ml-0 md:flex items-center ml-8">
          <FaWhatsapp className="text-3xl text-white" />
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <nav
            className="absolute 
          w-full
          h-[100vh]
          top-0 left-0 bottom-0 right-0
          bg-[#A711FF] bg-opacity-80 flex flex-col items-center justify-center space-y-6 p-4 text-white md:hidden"
          >
            <Image
              src="/result/logo.png"
              width={150}
              height={200}
              alt="Banner"
            />{" "}
            {/* Opacidade do menu mobile ajustada */}
            <a href="#" className="hover:text-gray-300">
              HOME
            </a>
            <a href="#" className="hover:text-gray-300">
              SOBRE
            </a>
            <a href="#" className="hover:text-gray-300">
              MÉTODO
            </a>
            <a href="#" className="hover:text-gray-300">
              TECNOLOGIA
            </a>
            <a href="#" className="hover:text-gray-300">
              CASES
            </a>
            <a href="#" className="hover:text-gray-300">
              CONTATO
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
