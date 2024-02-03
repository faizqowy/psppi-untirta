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
      <div className="lg:w-[78%] w-[100%] flex flex-col justify-center">
          <Header_two />

          <section className="p-8 bg-white text-gray-600">
            <div className="flex mb-7">
              <a href="/" className="hover:cursor-pointer">
                <IoHomeSharp className="inline-block text-sm hover:fill-blue-950 duration-300" />
              </a>
              <IoIosArrowForward className="mt-2 inline-block text-sm" />
              <p>Biaya Perkuliahan</p>
            </div>
        
              <h1
                className="text-3xl font-bold mb-4 text-black" style={{fontFamily:'Montserrat'}}
                
              >
                Biaya Perkuliahan
              </h1>
              <p className="text-1xl font-bold mb-3 text-black">
                Biaya Perkuliahan PPI ITS, sebagai berikut:
              </p>
              <ul className="list-decimal pl-10 my-4">
                <li className="text-1xl font-bold mb-3 text-black">
                  Registrasi Calon Mahasiswa Baru PPI ITS
                </li>
                <p className="mb-3">
                  Biaya Registrasi PPI ITS sebesar Rp. 1.000.000,00 (satu juta
                  rupiah) melalui Registrasi Online pada website{" "}
                  <a href="http://smits.its.ac.id" style={{ color: "blue" }}>
                    http://smits.its.ac.id
                  </a>
                  .
                </p>

                <li className="text-1xl font-bold mb-3 text-black">
                  Pendaftaran Ulang Mahasiswa Baru PSPPI ITS
                </li>
                <p>
                  Tempat pendaftaran ulang di sekretariat Bagian Administrasi
                  Pembelajaran BAPKM – ITS, dengan biaya PPI sebesar Rp.
                  12.500.000,00 (sepuluh juta rupiah). Biaya PPI sudah termasuk
                  biaya pendaftaran keanggotaan PII (Persatuan Insinyur
                  Indonesia) dan biaya iuran PII pada tahun pertama. Biaya
                  Sertifikasi Insinyur Profesional Pratama (IPP), Sertifikasi
                  Insinyur Profesional Madya (IPM) atau Sertifikasi Insinyur
                  Profesional Utama ditanggung sendiri oleh mahasiswa dengan
                  besaran mengacu pada biaya di Persatuaan Insinyur Indonesia
                  (PII), yang dibayarkan jika mahasiswa mengajukan dan lolos
                  IPP/IPM/IPU dan dibayar sendiri oleh mahasiswa ke PII.
                </p>
              </ul>
        
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}
