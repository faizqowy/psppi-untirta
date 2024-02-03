import Header_one from "@/components/Header_one";
import Header_two from "@/components/Header_two";
import Footer from "@/components/Footer";

import { Montserrat } from "next/font/google";

import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="lg:w-[78%] w-[100%] flex flex-col justify-center">
          <Header_two />

          <section className="p-8 bg-white text-gray-600">
            <div className="flex mb-6 text-sm">
              <div className="flex pt-[2px] ml-1">
                <a href="/" className="text-blue-500 hover:text-[#FF0000] mr-2">
                  <FaHome />
                </a>
                  <IoIosArrowForward className="mr-2" />
              </div>
              <p className="font-bold">Download</p>
            </div>

            <h1 className={"text-3xl font-bold mb-4 " + montserrat.className }>
              Download
            </h1>
            <p className="font-bold mb-[30rem]">
              SEKRETARIAT PROGRAM STUDI
            </p>

            
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
