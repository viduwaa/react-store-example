import { TbShoppingCartPlus } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { useEffect, useState } from "react";

export function About() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout); 
  }, []);
    
  return (
    <>
      <header>
        <h1 className="m-2 md:text-[3rem] text-[2rem] font-bold">About This Learning Project</h1>
      </header>
      <main className={`fade-in ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all m-2`}>
        <section className="border-b border-black mb-4 pb-5">
          <h2 className="flex  md:text-[2rem] text-[1.8rem]em] text-[1.5rem] font-semibold md:gap-3 gap-2">
            • Cart Management Expertise{" "}
            <span className="flex items-center gap-1 text-blue-600">
              <FaReact />
              <TbShoppingCartPlus />
            </span>
          </h2>
          <p className="ml-5 text-[1.3rem]">
            Main target was the functional cart system, complete with addition,
            removal, and quantity update functionalities, By doing this it
            helped to understand how React hooks, Context Providers work. <br />
            Also, using React Router on this project, like my{" "}
            <span className="underline">
              <a
                target="_blank"
                href="https://viduwaa.github.io/reactbasics-with-demo-website/"
              >
                first React project
              </a>
              ,
            </span>{" "}
            was a great way to practice it again.
          </p>
        </section>

        <section className="border-b border-black mb-4 pb-5">
          <h2 className="flex  md:text-[2rem] text-[1.8rem] font-semibold md:gap-3 gap-2">
            • TypeScript Integration
            <span className="flex items-center gap-1 text-blue-600">
              <SiTypescript />
            </span>
          </h2>
          <p className="ml-5 text-[1.3rem]">
            By using TypeScript's strong typing capabilities it helped me
            thourghout the development process. It helped me catch errors early,
            and what I'm doing wrong and what should I change at that moment to
            understand the code properly.
          </p>
        </section>

        <section className="border-b border-black mb-4 pb-5">
          <h2 className="flex  md:text-[2rem] text-[1.8rem] font-semibold md:gap-3 gap-2">
            • Tailwind CSS Styling
            <span className="flex items-center gap-1 text-blue-600">
              <SiTailwindcss color="#21BBBF" />
            </span>
          </h2>
          <p className="ml-5 text-[1.3rem]">
            The styling of this fully responsive website is made possible by the
            implementation of Tailwind CSS. <br />
            Still new to Tailwind but It's actually kind of growing on me. It
            looks ugly but it feels good rather than writing custom css and
            naming them with proper names.
          </p>
        </section>

        <section className="border-b border-black mb-4 pb-5">
          <h2 className="flex  md:text-[2rem] text-[1.8rem] font-semibold md:gap-3 gap-2">
            • Embracing Continuous Learning
            <span className="flex items-center gap-1 text-blue-600">
              <MdOutlineSelfImprovement />
            </span>
          </h2>
          <p className="ml-5 text-[1.3rem]">
            Still learning React + TS and will continue to make things for fun
            and improve my knowledge. <br />
            Feel free to reach out; insights contribute to this ongoing learning
            journey.
          </p>
        </section>
      </main>
    </>
  );
}
