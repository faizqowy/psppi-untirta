import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Montserrat } from "next/font/google";

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
              <p>Konsentrasi</p>
            </div>
            <div>
              <h1 className={"text-3xl font-bold py-2 mb-2 "  + montserrat.className}>
                Konsentrasi Pembimbingan
              </h1>
              <p className=" mb-4">
                Program Studi Program Profesi Insinyur, Untirta menawarkan konsentrasi pembimbingan dari Program Studi Sarjana (S1), Sarjana Terapan (S1T) atau DIV pada cakupan disiplin teknik
                keinsinyuran berikut ini (PP 25 Tahun 2019):
              </p>

              <ul className="list-decimal mb-2 pl-8">
                <li>Kebumian dan Energi</li>
                <ul className="list-disc mb-2 pl-8">
                  <li>Teknik Geofisika</li>
                  <li>Teknik Geomatika (dapat pula menerima dari Teknik Geodesi)</li>
                </ul>

                <li>Rekayasa Sipil dan Lingkungan Terbangun</li>
                <ul className="list-disc mb-2 pl-8">
                  <li>Teknik Sipil</li>
                  <li>Perencanaan Wilayah Kota (dapat pula menerima dari Planologi)</li>
                </ul>

                <li>Industri</li>
                <ul className="list-disc mb-2 pl-8">
                  <li>Teknik Mesin</li>
                  <li>Teknik Kimia</li>
                  <li>Teknik Industri</li>
                  <li>Teknik Fisika</li>
                  <li>Teknik Material</li>
                </ul>

                <li>Konservasi dan Pengelolaan Sumber Daya Alam</li>
                <ul className="list-disc mb-2 pl-8">
                  <li>Teknik Lingkungan (dapat pula menerima dari Teknik Penyehatan)</li>
                </ul>

                <li>Pertanian dan Hasil Pertanian</li>
                <ul className="list-disc mb-2 pl-8">
                  <li>(tidak ada di Untirta)</li>
                </ul>

                <li>Teknologi Kelautan dan Perkapalan</li>
                <ul className="list-disc mb-2 pl-8">
                  <li>Teknik Kelautan</li>
                  <li>Teknik Perkapalan</li>
                  <li>Teknik Sistem Perkapalan</li>
                  <li>Teknik Transportasi Laut</li>
                </ul>

                <li>Aeronotika dan Astronotika – (tidak ada di Untirta)</li>
              </ul>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
