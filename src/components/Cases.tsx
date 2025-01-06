import Image from "next/image";

const caseDatas = [
  {
    lebel: "Engenharia de Dados",
    project: "Auditoria Contínua",
    icon: "/result/cases/07-01-Icone.png",
  },
  {
    lebel: "Automação com Dados",
    project: "Ciclo de vida dos usuários",
    icon: "/result/cases/07-02-Icone.png",
  },
  {
    lebel: "Ciência de Dados",
    project: "Modelo de indicação personalizada",
    icon: "/result/cases/07-03-Icone.png",
  },
  {
    lebel: "Migração",
    project: "Redeﬁnição de origem de indicadores",
    icon: "/result/cases/07-04-Icone.png",
  },
];

export function Cases() {
  return (
    <div className=" bg-[#242E3D]">
      <div
        className="
        sm:w-full
        md:w-[900px]
        p-0 lg:py-6
       mx-auto flex flex-col items-center justify-center"
      >
        <h3 className="text-[#A711FF] text-2xl font-bold mb-4">CASES</h3>

        <div
          className="w-full text-white flex
           
        flex-wrap gap-4 items-center justify-center"
        >
          {caseDatas.map((item) => (
            <div
              key={item.lebel}
              className="sm: w-[80%] md:w-[49%] 
              flex
              mt-2
              justify-center
              items-center
              gap-4
              h-[90px]
              border-1 p-0 px-0 border-[#A711FF] 
              rounded-full outline outline-2 outline-purple-500"
            >
              <div className="flex py-5 ml-5 items-center justify-center w-[10%] ">
                <Image src={item.icon} width={55} height={55} alt="Banner" />
              </div>
              <div className="w-[90%]">
                <p className="text-xs font-bold mb-1">
                  Área de atuação:{" "}
                  <span className="text-sm  mb-1">{item.lebel}</span>
                </p>
                <div className="border-2 border-[#FFFFFF] w-[10%] mt-1 mb-1" />
                <p className="font-bold text-sm ">
                  Projeto: <span className="text-sm "> {item.project} </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
