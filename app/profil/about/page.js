import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";
import { Montserrat } from "next/font/google";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import { Suspense } from "react";

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
              <p>Apa Itu PS PPI ?</p>
            </div>
            <h1 className={"text-3xl font-bold py-2 mb-16 " + montserrat.className}>
              Program Profesi Insinyur <br/>Universitas Sultan Ageng Tirtayasa
            </h1>
            <p className="w-[80%]">
            Universitas Sultan Ageng Tirtayasa (UNTIRTA) telah menerima mandat untuk menyelenggarakan Program Studi Program Profesi Insinyur melalui surat Direktorat Jenderal Kelembagaan Ilmu Pengetahuan Teknologi dan Pendidikan Tinggi Nomor 0495/E1/HK.03.00/2024. Selanjutnya, Kementerian Riset Teknologi dan Pendidikan Tinggi, melalui Surat Keputusan Nomor 112/E/O/2024, memberikan izin kepada Universitas Sultan Ageng Tirtayasa untuk menyelenggarakan Program Studi Program Profesi Insinyur. 
            </p>
            <a className="text-blue-800 hover:text-black hover:no-underline underline" target="_blank" href="https://pmb.untirta.ac.id/pascasarjana-2024/">Info lebih lanjut</a>
            
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
