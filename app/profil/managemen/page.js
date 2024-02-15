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
        <div className="ll:w-[1180px] w-[100%] flex flex-col justify-center">
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
              <h2 className={"text-3xl font-bold py-2 mb-2 " + montserrat.className}>
                Manajemen dan Dosen
              </h2>

              <strong className="mb-2">MANAJEMEN PROGRAM STUDI PROGRAM PROFESI INSINYUR</strong>
              <p className="mb-7">
                <strong className="mb-2">Ketua Program Studi:</strong> -
                <br />
                <strong className="mb-2">Sekretaris Program Studi:</strong> -
              </p>

              <h3 className="font-extrabold text-xl">Dosen Pengampu Mata Kuliah :</h3>
              <table className="w-full mt-4 md:text-base text-xs">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-2 py-2">No</th>
                    <th className="border border-gray-400 py-2">NIDN</th>
                    <th className="border border-gray-400 py-2">Nama</th>
                    <th className="border border-gray-400 py-2">Status</th>
                    <th className="border border-gray-400 py-2">Homebase</th>
                    <th className="border border-gray-400 py-2">Mata Kuliah Di Ampu</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="border border-gray-400 py-2">1</td>
                    <td className="border border-gray-400 py-2">0002037602</td>
                    <td className="border border-gray-400 py-2">ASEP RIDWAN</td>
                    <td className="border border-gray-400 py-2">Tetap</td>
                    <td className="border border-gray-400 py-2">S2 Teknik Industri</td>
                    <td className="border border-gray-400 py-2">Seminar</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">2</td>
                    <td className="border border-gray-400 py-2">0021277030</td>
                    <td className="border border-gray-400 py-2">SIRAJUDDIN</td>
                    <td className="border border-gray-400 py-2">Tetap</td>
                    <td className="border border-gray-400 py-2">S2 Teknik Industri</td>
                    <td className="border border-gray-400 py-2">Kode Etik dan Etika Profesi Insinyur</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">3</td>
                    <td className="border border-gray-400 py-2">0008057604</td>
                    <td className="border border-gray-400 py-2">SUPRIYANTO</td>
                    <td className="border border-gray-400 py-2">Tetap</td>
                    <td className="border border-gray-400 py-2">S1 Informatika</td>
                    <td className="border border-gray-400 py-2">Studi Kasus</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">4</td>
                    <td className="border border-gray-400 py-2">0013127604</td>
                    <td className="border border-gray-400 py-2">BOBBY KURNIAWAN</td>
                    <td className="border border-gray-400 py-2">Tetap</td>
                    <td className="border border-gray-400 py-2">S1 Teknik Industri</td>
                    <td className="border border-gray-400 py-2">Profesionalisme Keinsinyuran</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">5</td>
                    <td className="border border-gray-400 py-2"></td>
                    <td className="border border-gray-400 py-2">EDIYANTO ARIEF</td>
                    <td className="border border-gray-400 py-2">Industri</td>
                    <td className="border border-gray-400 py-2"></td>
                    <td className="border border-gray-400 py-2">Keamanan, Kesehatan, Keselamatan Kerja dan Lingkungan (K3L)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 py-2">6</td>
                    <td className="border border-gray-400 py-2"></td>
                    <td className="border border-gray-400 py-2">WAHIDIN</td>
                    <td className="border border-gray-400 py-2">Industri</td>
                    <td className="border border-gray-400 py-2"></td>
                    <td className="border border-gray-400 py-2">Praktek Keinsinyuran</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
