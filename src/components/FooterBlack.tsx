import Image from "next/image";

export function FooterTablack() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="
      bg-[#383837]
      flex
      flex-col
      items-center
      "
      >
        <div
          className="
        w-full lg:w-[1000px]  
        flex items-center justify-center p-10
        "
        >
          <div className=" w-full flex p-8 items-center justify-center">
            <Image
              src="/result/INSAEGHT-MARCA-02.svg"
              width={200}
              height={200}
              alt="Banner"
              priority
            />
            <nav
              className=" 
                     sm: hidden md:flex mt-4 w-full justify-between items-center text-white px-8 "
            >
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
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center p-2">
        <p className="text-sm text-[#808184]">
          © 2024 | Insaeght. Todos os direitos reservados.
        </p>
      </div>
    </>
  );
}
