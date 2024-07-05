import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";

import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import { Suspense } from "react";
import { Montserrat } from "next/font/google";
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
              <h1 className="text-sm font-bold ml-1 mt-1">
                Persyaratan Pendaftaran
              </h1>
            </div>
            <h1
              className={"text-3xl font-bold mb-4" + montserrat.className}
            >
              Persyaratan Pendaftaran
            </h1>

            <p class="mb-2">
              Peminat Program Profesi Insinyur Universitas Sultan Ageng Tirtayasa (Untirta) wajib memenuhi persyaratan sebagai berikut
              :
            </p>

            <ul className="list-decimal pl-10 my-4 mb-16">
            
            <li>Berlatar belakang Sarjana (S1) bidang teknik /D4 Teknik, sarjana terapan bidang teknik, sarjana pendidikan bidang teknik, atau sarjana bidang sains, yang didapat dari perguruan tinggi yang terakreditasi.</li>
            <li>Dapat mendaftar pendidikan profesi insinyur melalui program reguler atau program RPL.</li>
            <li>Persyaratan Program Reguler</li>
              <ul className="list-disc list-inside">
                <li>S1 Teknik/D4 Teknik fresh graduate/pengalaman keinsinyuran/keteknikan antara 0 - 2 tahun yang terhitung sejak lulus Pendidikan S1 Teknik/D4 Teknik fresh graduate</li>
                <li>S.Si dan S.Pd Teknik dengan pengalaman keinsinyuran/keteknikan minimal 4 tahun yang terhitung sejak lulus Pendidikan Sarjana S1 Teknik/D4 Teknik</li>
              </ul>

            <li>Persyaratan Program Rekognisi Pembelajaran Lampau (RPL)</li>
              <ul className="list-disc list-inside">
                <li>S1 Teknik/D4 Teknik dengan pengalaman keinsinyuran minimal 2 tahun yang terhitung sejak lulus Pendidikan Sarjana S1 Teknik/D4 Teknik .</li>
              </ul>
            <li>Untuk program RPL memiliki pengalaman kerja dibuktikan dengan surat keterangan dari instansi/ perusahaan/ lembaga tempat yang bersangkutan bekerja.</li>
            <li>Mengikuti seleksi wawancara dengan menyertakan curriculum vitae lengkap.</li>
            </ul>

            <h1
              className={"text-3xl font-bold mb-4" + montserrat.className}
            >
              Dokumen yang dipersiapkan
            </h1>
            <p className="mb-2">
              Persyaratan Pendaftaran PSPPI Untirta dengan menyertakan dokumen
              sebagai berikut:
            </p>
            <ul className="list-decimal pl-10 my-2">
              <li>Mengisi curriculum vitae <a href="/formcv.doc" className="cursor-pointer underline text-blue-700 hover:text-black" download={"formcv.doc"}>(download)</a></li>
              <li>Copy Ijazah S1.</li>
              <li>Copy Transkrip S1.</li>
              <li>Surat Keterangan Pengalaman Kerja dari Instansi/ Perusahaan khusu untuk program RPL. (Format Bebas) </li>
              <li>Copy KTP.</li>
              <li>Pas Foto terbaru.</li>
              <li>Surat pernyataan keaslian dokumen. <a href="/pernyataankeaslian.docx" className="cursor-pointer underline text-blue-700 hover:text-black" download={"pernyataankeaslian.docx"}>(download)</a></li>
              <li>Surat pernyataan kesangupan pembiayaan. <a href="/pernyataankesanggupan.docx" className="cursor-pointer underline text-blue-700 hover:text-black" download={"pernyataankesanggupan.docx"}>(download)</a></li>

            </ul>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}