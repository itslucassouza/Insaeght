import Image from "next/image";

export function ContactHeader() {
  return (
    <div className="flex items-center justify-center py-2 gap-4 bg-[#383837] text-white ">
      <div
        className="max-w-[1105px]
         w-full mx-auto flex md:justify-between
      "
      >
        <div className="flex text-xs items-center gap-2 ">
          <div className="flex items-center gap-1 ml-">
            <Image
              src="/result/icons/01-icone-01.png"
              width={15}
              height={10}
              alt="Banner"
            />
            <p className="font-bold">+55 11 99999.9999</p>
          </div>
          <div className="flex items-center gap-1 ml-3">
            <Image
              src="/result/icons/01-icone-02.png"
              width={15}
              height={10}
              alt="Banner"
            />
            <p className="font-bold">contato@insaeght.com.br</p>
          </div>
        </div>
        <div className="flex gap-1 ml-2">
          <Image
            src="/result/questions/01-icone-03.png"
            width={20}
            height={15}
            alt="Banner"
          />
          <Image
            src="/result/questions/01-icone-04.png"
            width={20}
            height={15}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
}
