import Header_one from "@/components/Header_one";
import Header_two from "@/components/Header_two";
import Footer from "@/components/Footer";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="w-[78%] flex flex-col justify-center">
          <Header_two />
          <section className="p-8 bg-white text-gray-600">
            <div className="flex mb-7">
              <a href="/" className="hover:cursor-pointer">
                <IoHomeSharp className="inline-block text-sm hover:fill-blue-950 duration-300" />
              </a>
              <IoIosArrowForward className="mt-2 inline-block text-sm" />
              <h1 className="text-sm font-bold ml-1 mt-1">
                Jadwal Penting Pendaftaran
              </h1>
            </div>

            <h1 className="text-3xl font-bold mb-4" style={{fontFamily:'Moserrat'}}>
              Jadwal Penting Pendaftaran
            </h1>
            <p className="font-bold mb-3">Pendaftaran:</p>

            <p className="mb-3">
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

            <p className="mu-3 mb-3 font-bold">
              Pengumuman peserta Tes Wawancara mulai tanggal 17 Juli 2019:
            </p>
            <p className="mu-3 mb-3 font-bold">Pelaksanaan Tes Wawancara:</p>
            <p className="mu-3 mb-3">
              Pelaksanaan Tes Wawancara tiap calon mahasiswa dilaksanakan 1 hari
              kurang lebih selama 30 menit:
            </p>

            <table className="border-collapse w-full mb-3">
              <tbody>
                {/* Baris pertama */}
                <tr>
                  <td className="border p-2">Hari, Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    Sabtu – Minggu, 27-28 Juli 2019
                  </td>
                </tr>

                {/* Baris kedua */}
                <tr>
                  <td className="border p-2">Waktu</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">08.00 – 16.00</td>
                </tr>

                <tr>
                  <td className="border p-2">Tempat</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <p className="mb-8">
                      Program Studi Program Profesi Insinyur
                    </p>
                    <p>Gedung Pascasarjana Lt. 2</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mu-3 mb-3 font-bold">Pengumuman Hasil Seleksi:</p>

            <p className="mu-3 mb-3">
              Hasil seleksi diumumkan pada tanggal 31 Juli 2019 di Website
              Seleksi Masuk ITS (SMITS){" "}
              <a href="http://smits.its.ac.id" style={{ color: "blue" }}>
                http://smits.its.ac.id
              </a>
            </p>

            <p className="mu-3 mb-3 ">Melakukan Pembayaran SPP</p>

            <p className="mu-3 mb-3 font-bold">
              Pendaftaran Ulang dan Penerimaan Mahasiswa
            </p>

            <p className="mu-3 mb-3">
              Peserta yang dinyatakan lulus ujian masuk diwajibkan melakukan
              kegiatan berikut:
            </p>

            <table className="border-collapse w-full mb-3">
              <tbody>
                {/* Baris pertama */}
                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Pengisian data secara online
                  </td>
                </tr>

                {/* Baris kedua */}
                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    2– 4 Agustus 2019
                  </td>
                </tr>

                {/* Baris ketiga */}
                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Bayar SPP (Pembayaran Biaya Pendidikan Semester)
                  </td>
                </tr>

                {/* Baris keempat */}
                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    6-9 Agustus 2019
                  </td>
                </tr>

                {/* Baris kelima */}
                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Verifikasi biodata (secara online dan harus datang ke BAKPM)
                  </td>
                </tr>

                {/* Baris keenam */}
                <tr>
                  <td className="border p-2 font-bold">Tanggal</td>
                  <td className="border p-2">:</td>
                  <td className="border p-2">
                    <br />
                    6-11 Agustus 2019
                  </td>
                </tr>

                {/* Baris ketujuh */}
                <tr>
                  <td className="border p-2 font-bold" colSpan="3">
                    Perwalian Mahasiswa (FRS Online)
                  </td>
                </tr>

                {/* Baris kedelapan */}
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

            <p className="mu-3 mb-3 font-bold"> Biaya Pendidikan</p>

            <p className="mu-3 mb-3">
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
            </p>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
