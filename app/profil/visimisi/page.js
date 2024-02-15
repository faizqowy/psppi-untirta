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
              <p>Visi-Misi</p>
            </div>
            <h1 className={"text-3xl font-bold py-2 mb-2 " + montserrat.className}>
              Visi-Misi
            </h1>
            <h3 className="font-bold py-2 mb-2 text-blue-700  ">Visi Universitas</h3>
            <p className="mb-2">
            Terwujudnya Untirta Sebagai Healthy, Integrated, Smart and Green (HITS Green) University yang Unggul, Berkarakter dan Berdaya Saing Global pada Tahun 2035.
            </p>

            <h2 className="font-bold py-2 mb-2 text-blue-700">Misi Universitas</h2>
            <ul className="list-decimal mb-2 pl-12">
              <li className="mb-2 ">
              Meningkatkan kualitas, relevansi dan daya saing pendidikan serta lulusan yang unggul, berkarakter dan berdaya saing
              </li>
              <li className="mb-2">
                Meningkatkan kualitas dan kuantitas penelitian dan pengabdian kepada masyarakat yang inovatif berbasis kebutuhan nyata sesuai perkembangan zaman.
              </li>
              <li className="mb-2">
              Meningkatkan daya dukung tatakelola perguruan tinggi yang baik sebagai implementasi dari Healthy, Integrated, Smart and Green (HITS Green) University.
              </li>
            </ul>

            <h2 className="font-bold py-2 mb-2 text-blue-700 ">Tujuan Universitas</h2>
            <ul className="list-decimal mb-2 pl-12">
              <li className="mb-2">Menyelenggarakan pendidikan akademik, profesi dan/atau vokasi.</li>
              <li className="mb-2">Melakukan pengembangan pendidikan tinggi dengan melaksanakan Tri Dharma Perguruan Tinggi yang meliputi pendidikan, penelitian dan penagbdian kepada masyarakat.</li>
            </ul>

            <h2 className="font-bold py-2 mb-2 text-blue-700">University Values</h2>
            <p className="mb-2">Value Untirta adalah JAWARA (Jujur, Adil, Wibawa, Amanah, Religius, dan Akuntabel). Untirta merupakan rumah yang tidak hanya berperan sebagai tempat, namun juga sebagai sumber pengetahuan, keteladanan, dan kebajikan. Oleh karena itu seluruh civitas academica Untirtaberkewajiban menjunjung tinggi nilai-nilai dasar dalam melaksanakan tugas dan</p>

            <h2 className="font-bold py-2 mb-2 text-blue-700">Visi Keilmuan PSPPI Untirta</h2>
            <p className="mb-2">Visi keilmuan program studi program profesi insinyur (PSPPI) Untirta adalah menjadi penyelenggara pendidikan profesi keinsinyuran yang Healthy, Integrated, Smart and Green (HITS Green) dengan melakukan sinergi dan kolaborasi bersama industri untuk mencetak insinyur profesional yang Unggul, Berkarakter dan Berdaya Saing Global pada Tahun 2035.</p>

            <h2 className="font-bold py-2 mb-2 text-blue-700">Tujuan Pendidikan PSPPI Untirta</h2>
            <ul className="list-disc mb-2 pl-12">
              <li className="mb-2">Insinyur profesional yang mampu menerapkan praktik manajemen operasi (operation management) yang efisien pada industri petrokimia, manufaktur, dan pembangkit energi.</li>
              <li className="mb-2">Insinyur profesional yang mampu merancang sistem transportasi dan logistik yang efisien pada industri petrokimia, manufaktur, dan pembangkit energi.</li>
              <li className="mb-2">Insinyur profesional yang mampu untuk melakukan kegiatan pengajaran dan penelitian pada industri petrokimia, manufaktur, dan pembangkit energi.</li>
              <li className="mb-2">Insinyur profesional yang mampu menyediakan pelatihan praktik keinsinyuran pada industri petrokimia, manufaktur, dan pembangkit energi.</li>
              <li className="mb-2">Insinyur profesional yang mampu menyediakan jasa konsultasi pada industri petrokimia, manufaktur, dan pembangkit energi.</li>
              <li className="mb-2">Insinyur profesional yang mampu menjadi wirausaha (entrepreneur) pada industri petrokimia, manufaktur, dan pembangkit energi.</li>
            </ul>


            <h2 className="font-bold py-2 mb-2 text-blue-700">Dasar Hukum & Regulasi Program Profesi Insinyur:</h2>
            <ul className="list-disc mb-2 pl-12">
              <li className="mb-2">Undang-Undang No. 20 Tahun 2003 tentang Sistem Pendidikan Nasional</li>
              <li className="mb-2">Undang-Undang No 12 Tahun 2012 Tentang Pendidikan Tinggi</li>
              <li className="mb-2">Undang Undang Nomor 11 Tahun 2014 Tentang Keinsinyuran</li>
              <li className="mb-2">Peraturan Pemerintah No. 25 Tahun 2019 tentang Peraturan Pelaksanaan UU No. 11 Tahun 2014 Tentang Keinsinyuran</li>
              <li className="mb-2">Perpres No. 8 Tahun 2012 tentang Kerangka Kualifikasi Nasional Indonesia</li>
              <li className="mb-2">Permendikbud No. 3 Tahun 2020 tentang Standard Nasional Pendidikan Tinggi</li>
              <li className="mb-2">Peraturan Pemerintah No. 25 Tahun 2019 tentang Peraturan Pelaksanaan UU No. 11 Tahun 2014 Tentang Keinsinyuran</li>
              <li className="mb-2">Peraturan Menteri Riset Dikti No. 35 Tahun 2016 Tentang Penyelenggaraan Program Profesi Insinyur/li</li>
              <li className="mb-2">Peraturan Menteri Riset Dikti No. 26 Tahun 2016 Tentang Rekognisi Pembelajaran Lampau</li>
              <li className="mb-2">Peraturan Dirjen No. 1462 Tahun 2016 Tentang Panduan Penyelenggaraan PS PPI</li>
              <li className="mb-2">SK BAN-PT No. 39/SK/BAN-PT/Min-Akred/PP/VII/201</li>
            </ul>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
