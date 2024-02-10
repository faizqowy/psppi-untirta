import Header_one from "../components/Header_one";
import Header_two from "../components/Header_two";
import Footer from "../components/Footer";

import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Suspense } from "react";


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
              <h1 className="text-sm font-bold ml-1 mt-1">Jadwal Kegiatan</h1>
            </div>
            <h1 className="text-3xl font-bold mb-4">Jadwal Kegiatan</h1>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Kegiatan</th>
                  <th className="px-4 py-2 border">Hari</th>
                  <th className="px-4 py-2 border">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Pendaftaran dan Seleksi Gelombang I</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">12 Agustus 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pendaftaran Program Profesi Insinyur (PPI)</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">19 Agustus 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pengumuman Peserta Tes Wawancara</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">26 Agustus 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pelaksanaan Tes Wawancara</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">2 September 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pengumuman Lolos Tes Wawancara</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">9 September 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">.</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pendaftaran Ulang dan Penerimaan Mahasiswa PPI Gelombang I	</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">16 September 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pengisian sipmaba secara online(termasuk upload dokumen data)</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">23 September 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Daftar Ulang Mahasiswa Baru (Pembayaran SPP)</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">26 Agustus 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Perwalian Mahasiswa (FRS Online)</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">30 September 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">.</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pendaftaran dan Seleksi Gelombang II</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">7 Oktober 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pendaftaran Program Profesi Insinyur (PPI)</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">14 Oktober 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pengumuman Peserta Tes Wawancara</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">21 Oktober 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pelaksanaan Tes Wawancara</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">28 Oktober 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pengumuman Lolos Tes Wawancara</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">4 November 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">.</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pendaftaran Ulang dan Penerimaan Mahasiswa PPI Gelombang II	</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">11 November 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pengisian sipmaba secara online(termasuk upload dokumen data)</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">18 November 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Daftar Ulang Mahasiswa Baru (Pembayaran SPP)</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">25 November 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Perwalian Mahasiswa (FRS Online)</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">2 Desember 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">.</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Pelaksanaan Rekognisi Pembelajaran Lampau</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">9 Desember 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Minggu I: Pembekalan Tatap Muka</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">16 Desember 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Minggu II-XV: Komunikasi Online</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">23 Desember 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Minggu XVI: Tatap Muka ke-2	</td>
                  <td className="border px-4 py-2 text-center">Senin</td>
                  <td className="border px-4 py-2 text-center">30 Desember 2024</td>
                </tr>
              </tbody>
            </table>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
