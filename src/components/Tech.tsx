import { useState } from "react";

const sections = [
  {
    name: "Tratamento de dados",
    content: [
      { name: "Alteryx;" },
      { name: "PDI;" },
      { name: "Apache Hop;" },
      { name: "Data integration;" },
      { name: "Python;" },
      { name: "R;" },
      { name: "SQL;" },
    ],
  },
  {
    name: "Orquestradores",
    content: [
      { name: "Amazon Web Services (AWS)" },
      { name: "Google cloud Platform (GCP)" },
      { name: "Microsoft Azure" },
    ],
  },
  {
    name: "Visualização",
    content: [
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Qlik Sense" },
      { name: "Google Data Studio" },
    ],
  },
];

export function Tech() {
  const [activeSection, setActiveSection] = useState(sections[0].name);

  const handleSectionClick = (sectionName: string) => {
    setActiveSection((prev) => (prev === sectionName ? "" : sectionName));
  };

  return (
    <div className="flex flex-col items-center justify-center w-[320px] sm:w-full md:w-[800px] mx-auto">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-[#A711FF] font-bold text-2xl">TECNOLOGIAS</h1>
        <div className="border border-[#2BC0FB] w-[70%]" />
      </div>

      <div className="w-full flex flex-col gap-4 mt-4">
        {sections.map((section) => (
          <div
            key={section.name}
            className={`w-full flex flex-col justify-center items-center p-3 cursor-pointer transition-all duration-200
              ${
                activeSection === section.name ? "border-none " : "bg-[#D5D5D5]"
              }
            `}
            onClick={() => handleSectionClick(section.name)}
          >
            <div className="flex flex-col justify-center items-center">
              <p className="text-[#A711FF] font-semibold">{section.name}</p>
              <div className="border border-[#2BC0FB] w-[90%]" />
            </div>
            {activeSection === section.name && (
              <div className="mt-2 text-[#002944] grid grid-cols-2 grid-rows-3 w-[60%]">
                {section.content.map((item, index) => (
                  <p key={index} className="text-sm">
                    • {item.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
