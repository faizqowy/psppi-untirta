import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

import { Suspense } from "react";




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
              <h1 className="text-sm font-bold ml-1 mt-1">
                Jadwal Pendaftaran
              </h1>
            </div>

            <h1 className={"text-3xl font-bold mb-16 " + montserrat.className} >
              Jadwal Pendaftaran
            </h1>
            {/* <p className="font-bold mb-2">Pendaftaran:</p> */}

            {/* <p className="mb-2">
              Pendaftaran dilaksanakan pada 19 Juni – 12 Juli 2019 yang
              meliputi:
            </p>

            <ul className="list-decimal pl-10 my-4">
              <li>
                Pembayaran biaya pendaftaran sebesar Rp 1.000.000,00 di
                bank-bank yang ditunjuk
              </li>
              <li>
                Calon mahasiswa akan mendapatkan{" "}
                <span style={{ fontStyle: "italic" }}>username</span> dan{" "}
                <span style={{ fontStyle: "italic" }}>password</span> untuk
                melakukan akses pada Form Rekognisi Pembelajaran Lampau (Form
                RPL) untuk melakukan{" "}
                <span style={{ fontStyle: "italic" }}>self assessment</span>.
              </li>
            </ul>

            <p className="mb-2 font-bold">
              Pengumuman peserta Tes Wawancara mulai tanggal 17 Juli 2019:
            </p>
            <p className="mb- font-bold">Pelaksanaan Tes Wawancara:</p>
            <p className="mb-2">
              Pelaksanaan Tes Wawancara tiap calon mahasiswa dilaksanakan 1 hari
              kurang lebih selama 30 menit:
            </p> */}

            <table className="border-collapse w-full mb-10">
              <tbody>
                {/* Baris pertama */}
                <tr>
                  <td className="border p-2">Pendaf. Gel 3</td>
                  <td className="border p-2 flex justify-center">:</td>
                  <td className="border p-2">
                    10 Juni - 18 Juli 2024
                  </td>
                </tr>

                {/* Baris kedua */}
                <tr>
                  <td className="border p-2">Seleksi</td>
                  <td className="border p-2 flex justify-center">:</td>
                  <td className="border p-2">20 Juli 2024</td>
                </tr>

                <tr>
                  <td className="border p-2">Hasil Seleksi</td>
                  <td className="border p-2 flex justify-center">:</td>
                  <td className="border p-2">23 Juli 2024</td>
                </tr>
              </tbody>
            </table>
            
            <p className="mb-2 font-bold">Pendaftaran:</p>
            <p>Untuk melakukan pendaftaran, silakan tekan tombol di bawah ini.</p>
            <a className="text-blue-800 hover:text-black underline hover:no-underline" href="https://pmb.untirta.ac.id/pascasarjana-2024/" target="_blank">Daftar Sekarang</a>

            {/* <p className="mb-2 font-bold">Pengumuman Hasil Seleksi:</p>

            <p className="mb-2">
              Hasil seleksi diumumkan pada tanggal 31 Juli 2019 di Website
              Seleksi Masuk Untirta (SMITS){" "}
              <a href="https://untirta.ac.id/" style={{ color: "blue" }}>
                https://untirta.ac.id/
              </a>
            </p>

            <p className="mb-2 ">Melakukan Pembayaran SPP</p>

            <p className="mb-2 font-bold">
              Pendaftaran Ulang dan Penerimaan Mahasiswa
            </p>

            <p className="mb-2">
              Peserta yang dinyatakan lulus ujian masuk diwajibkan melakukan
              kegiatan berikut:
            </p>

            <table className="border-collapse w-full mb-2">
              <tbody>
                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Pengisian data secara online
                  </td>
                </tr>                
                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    2– 4 Agustus 2019
                  </td>
                </tr>

                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Bayar SPP (Pembayaran Biaya Pendidikan Semester)
                  </td>
                </tr>

                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    6-9 Agustus 2019
                  </td>
                </tr>

                
                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Verifikasi biodata (secara online dan harus datang ke BAKPM)
                  </td>
                </tr>

                
                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    6-11 Agustus 2019
                  </td>
                </tr>

                
                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Perwalian Mahasiswa (FRS Online)
                  </td>
                </tr>

                
                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    19-23 Agustus 2019
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mb-2 font-bold"> Biaya Pendidikan</p>

            <p className="mb-3">
              Setelah dinyatakan diterima, calon mahasiswa diwajibkan membayar
              biaya Program Profesi Insinyur (PPI) sebesar Rp. 12.500.000,- (dua
              belas juta lima ratus ribu rupiah). Biaya PPI sudah termasuk biaya
              pendaftaran keanggotaan PII (Persatuan Insinyur Indonesia) dan
              iuran tahun pertama. Biaya Sertifikasi Insinyur Profesional
              Pratama (IPP), Sertifikasi Insinyur Profesional Madya (IPM) atau
              Sertifikasi Insinyur Profesional Utama ditanggung sendiri oleh
              mahasiswa dengan besaran mengacu pada biaya di Persatuaan Insinyur
              Indonesia (PII), yang dibayarkan jika mahasiswa mengajukan dan
              lolos IPP/IPM/IPU dan dibayar sendiri oleh mahasiswa ke PII.
            </p> */}
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
