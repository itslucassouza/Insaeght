"use client";

import Header from "@/components/Header";
import ResponsiveCarousel from "@/components/Responsivel";
import { About } from "@/components/About";
import { Method } from "@/components/Method";
import { Tech } from "@/components/Tech";
import { Cases } from "@/components/Cases";
import { QuestionsPage } from "@/components/QuestionsPage";
import { FooterTablack } from "@/components/FooterBlack";
import { ContactHeader } from "@/components/HeaderContact";

export default function Home() {
  return (
    <div>
      <div>
        <section
          className="
        lg:px-[0] 
         mx-auto"
        >
          <ContactHeader />
        </section>
        <section
          className="
          px-[1.5rem] 
          lg:px-[0] 
          max-w-[1105px] mx-auto"
          id="home"
        >
          <Header />
        </section>

        <section className="">
          <ResponsiveCarousel />
        </section>

        <section
          id="about"
          className="
            sm: h-full
            lg:px-20 
             mx-auto flex items-center w-full "
        >
          <About />
        </section>
        <section
          id="method"
          className="
         w-full 
         mt-8
         "
        >
          <Method />
        </section>
        <section
          id="tech"
          className="
         w-full 
         mt-8
         "
        >
          <Tech />
        </section>

        <section
          id="cases"
          className="
         w-full 
         mt-8
         "
        >
          <Cases />
        </section>

        <section
          id="contact"
          className="
         w-full 
         mt-8
         "
        >
          <QuestionsPage />
        </section>

        <div className="h-5 bg-[#A711FF] mt-5" />

        <FooterTablack />
      </div>
    </div>
  );
}
