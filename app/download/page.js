import Header_one from "../components/Header_one";
import Header_two from "../components/Header_two";
import Footer from "../components/Footer";
import { Suspense } from "react";

import { Montserrat } from "next/font/google";

import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";

// HALO


import Image from "next/image";

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
            <div className="flex mb-6 text-sm">
              <div className="flex pt-[2px] ml-1">
                <a href="/" className="text-blue-500 hover:text-[#FF0000] mr-2">
                  <FaHome />
                </a>
                <IoIosArrowForward className="mr-2" />
              </div>
              <p className="font-bold">Download</p>
            </div>

            <h1 className={"text-3xl font-bold mb-12 " + montserrat.className}>
              Download
            </h1>

            <div className="flex flex-col gap-2">
              <a href="/file-download/statutauntirta.pdf" className="w-[260px] border text-center rounded-full bg-gradient-to-tr hover:bg-gradient-to-bl duration-200 text-white from-gray-900 to-amber-950 p-1 flex" download={"statutauntirta.pdf"}><div className="w-[70%]"><span className="font-extrabold">Download</span> <br/> <span className="text-xs">Statuta Untirta</span></div><FaDownload className="self-center w-[30%]" size={25}/></a>
              <a href="/file-download/skpsppi.pdf" className="w-[260px] border text-center rounded-full bg-gradient-to-tr hover:bg-gradient-to-bl duration-200 text-white from-gray-900 to-amber-950 p-1 flex" download={"skpsppi.pdf"}><div className="w-[70%]"><span className="font-extrabold">Download</span> <br/> <span className="text-xs">SK Pendirian PSPPI Untirta</span></div><FaDownload className="self-center w-[30%]" size={25}/></a>
              <a href="/file-download/sertifakreditasi.pdf" className="w-[260px] border text-center rounded-full bg-gradient-to-tr hover:bg-gradient-to-bl duration-200 text-white from-gray-900 to-amber-950 p-1 flex" download={"sertifakreditasi.pdf"}><div className="w-[70%]"><span className="font-extrabold">Download</span> <br/> <span className="text-xs">Sertifikat Akreditasi</span></div><FaDownload className="self-center w-[30%]" size={25}/></a>
              <a href="/file-download/formcv.pdf" className="w-[260px] border text-center rounded-full bg-gradient-to-tr hover:bg-gradient-to-bl duration-200 text-white from-blue-950 to-amber-950 p-1 flex" download={"formcv.pdf"}><div className="w-[70%]"><span className="font-extrabold">Download</span> <br/> <span className="text-xs">Format curriculum vitae</span></div><FaDownload className="self-center w-[30%]" size={25}/></a>
              <a href="/file-download/pernyataankeaslian.pdf" className="w-[260px] border text-center rounded-full bg-gradient-to-tr hover:bg-gradient-to-bl duration-200 text-white from-blue-950 to-amber-950 p-1 flex" download={"pernyataankeaslian.pdf"}><div className="w-[70%]"><span className="font-extrabold">Download</span> <br/> <span className="text-xs">Surat pernyataan keaslian dokumen</span></div><FaDownload className="self-center w-[30%]" size={25}/></a>
              <a href="/file-download/pernyataankesanggupan.pdf" className="w-[260px] border text-center rounded-full bg-gradient-to-tr hover:bg-gradient-to-bl duration-200 text-white from-blue-950 to-amber-950 p-1 flex" download={"pernyataankesanggupan.pdf"}><div className="w-[70%]"><span className="font-extrabold">Download</span> <br/> <span className="text-xs">Surat pernyataan kesangupan pembiayaan</span></div><FaDownload className="self-center w-[30%]" size={25}/></a>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
