import Header_one from "../components/Header_one";
import Header_two from "../components/Header_two";
import Footer from "../components/Footer";
import { Suspense } from "react";

import { Montserrat } from "next/font/google";

import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="ll:w-[1180px] w-[100%] flex flex-col justify-center">
          <Suspense>
            <Header_two />
          </Suspense>

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

            <h1 className={"text-3xl font-bold mb-4 " + montserrat.className}>
              Download
            </h1>

            <div className="flex flex-col gap-2">
              <a href="#">
                <Image
                  src="/images/download/profil.jpg"
                  alt="profil"
                  width={235}
                  height={100}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/download/leaflet.jpg"
                  alt="leaflet"
                  width={235}
                  height={100}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/download/srtpernyataan.jpg"
                  alt="suratpernyataan"
                  width={235}
                  height={100}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/download/jadwal.jpg"
                  alt="jadwal"
                  width={235}
                  height={100}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/download/skmaba.jpg"
                  alt="skmaba"
                  width={235}
                  height={100}
                />
              </a>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
