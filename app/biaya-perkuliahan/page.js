import Header_one from "../components/Header_one";
import Header_two from "../components/Header_two";
import Footer from "../components/Footer";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Suspense } from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className="flex flex-col justify-center w-[100%]">
       <Header_one />
      <div className="flex flex-row justify-center">
      <div className="lg:w-[1024px] w-[100%] flex flex-col justify-center">
          <Suspense>
          <Header_two />
          </Suspense>

          <section className="p-8 bg-white text-gray-600">
            <div className="flex mb-7">
              <a href="/" className="hover:cursor-pointer">
                <IoHomeSharp className="inline-block text-sm hover:fill-blue-950 duration-300" />
              </a>
              <IoIosArrowForward className="mt-2 inline-block text-sm" />
              <p>Biaya Perkuliahan</p>
            </div>
        
              <h1
                className={"text-3xl font-bold mb-16" + montserrat.className}
                
              >
                Biaya Perkuliahan
              </h1>
              <p className="mb-2 mt-10">
                Biaya perkuliahan Program Profesi Insinyur Universitas Sultan Ageng Tirtayasa (Untirta) adalah sebagai berikut:
              </p>
              <a className="text-blue-800 hover:text-black underline hover:no-underline" href="https://pmb.untirta.ac.id/pascasarjana-2024/" terget="_blank">Cek Biaya</a>
        
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}