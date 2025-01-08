import Image from "next/image";

export function FooterTablack() {
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
          <Image src="/result/logo.png" width={130} height={130} alt="Banner" />
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
