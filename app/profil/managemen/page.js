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
        <div className="lg:w-[1025px] w-[100%] flex flex-col justify-center">
          <Suspense>
          <Header_two />
          </Suspense>
          <section className="p-8 bg-white text-gray-600">
          <div className="flex mb-7">
            <a href="/" className="hover:cursor-pointer">
              <IoHomeSharp className="inline-block text-sm hover:fill-blue-950 duration-300" />
            </a>
            <IoIosArrowForward className="mt-2 inline-block text-sm" />
            <p>Managemen</p>
          </div>
          <div>
            <h2 className={"text-3xl font-bold + montserrat.className  py-2 mb-2 "} style={{ fontFamily: "Montserrat" }}>
              Manajemen dan Dosen
            </h2>
    
            <strong className="mb-2">MANAJEMEN PROGRAM STUDI PROGRAM PROFESI INSINYUR</strong>
            <p>
              <strong className="mb-2">Ketua Program Studi:</strong> Ir. I Made Yulistya Negara, ST, M.Sc, IPM
              <br />
              <strong className="mb-2">Sekretaris Program Studi:</strong> Ir. Defry Agatha Ardianta, S.T., M.T, IPM
            </p>
    
            <h3 className="py-4">
              <strong>DOSEN PENGAJAR</strong>
            </h3>
            <ul className="list-decimal mb-2 pl-12">
              <li className="mb-2">Ir. Patdono Suwignjo, M.Eng, IPU</li>
              <li className="mb-2">Ir. Moses L. S., M.Sc, M.Reg.Sc, Ph.D, IPU</li>
              {/* Add more Dosen Pengajar here */}
            </ul>
    
            <h3 className="py-4">
              <strong>DOSEN TIDAK TETAP/PEMBIMBING LAPANGAN</strong>
            </h3>
            <ul className="list-decimal mb-2 pl-12">
              <li className="mb-2">
                <strong>Djoko Sukalisno K., Dipl.HE, PU-SDA, ACPE</strong> [BBWS Brantas]
              </li>
              <li className="mb-2">
                <strong>Unggul Cariawan, M.Econ, IPM</strong> [PT. Jasa Marga (Persero) Tbk.]
              </li>
              <li className="mb-2">
                <strong>Firnandi Imawan, IPM </strong> [PT. XL Axiata, Tbk]
              </li>
              <li className="mb-2">
                <strong>Herwanto Budi Sardjono, IPM</strong> [PT. JAYA CM]
              </li>
              <li className="mb-2">
                <strong>Tito Ari Bawono, IPM</strong> [PT. Jaya Kontruksi M.P, Tbk]
              </li>
            </ul>
          </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}

