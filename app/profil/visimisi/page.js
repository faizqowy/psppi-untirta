import Header_one from "@/app/components/Header_one";
import Header_two from "@/app/components/Header_two";
import Footer from "@/app/components/Footer";
import { Montserrat } from "next/font/google";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const montserrat = Montserrat({ subsets: ["latin"] });

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
              <p>Visi-Misi</p>
            </div>
            <h1 className={"text-3xl font-bold + montserrat.className  py-2 mb-2 "} style={{ fontFamily: "Montserrat" }}>
              Visi-Misi
            </h1>
            <h3 className="font-bold py-2 mb-2 text-blue-700  ">Visi</h3>
            <p className="mb-2">
              Visi dari Program Studi Program Profesi Insinyur adalah menghasilkan lulusan yang beretika, menjunjung kode etik keinsinyuran dan profesional dalam bekerja di bidang keinsinyuran untuk mendukung ITS menjadi perguruan tinggi
              dengan reputasi internasional dalam ilmu pengetahuan, teknologi, dan seni, terutama yang menunjang industri dan kelautan yang berwawasan lingkungan.
            </p>

            <h2 className="font-bold py-2 mb-2 text-blue-700">Misi</h2>
            <p className="mb-2">Visi di atas dirumuskan menjadi misi dari Program Studi Program Profesi Insinyur, dengan mengacu pada Tri Dharma Perguruan Tinggi, yaitu:</p>
            <ul className="list-decimal mb-2 pl-12">
              <li className="mb-2 ">
                Menyelenggarakan pendidikan tinggi di bidang profesi insinyur untuk menghasilkan lulusan yang dapat melaksanakan praktek keinsinyuran dalam ilmu pengetahuan dan teknologi, serta mampu bersaing di tingkat nasional maupun
                internasional.
              </li>
              <li className="mb-2">Menjadi jembatan perguruan tinggi dengan dunia usaha dan industri sehingga terjalin kerja sama saling menguntungkan.</li>
            </ul>

            <h2 className="font-bold py-2 mb-2 text-blue-700 ">Tujuan</h2>
            <p className="mb-2">Tujuan dari Program Studi Program Profesi Insinyur adalah sebagai berikut</p>
            <ul className="list-decimal mb-2 pl-12">
              <li className="mb-2">Menghasilkan insinyur yang dapat melakukan praktik keinsinyuran sesuai dengan bidang kejuruan yang ditekuni.</li>
              <li className="mb-2">Meningkatkan kualitas tenaga pendidik dalam keinsinyuran.</li>
            </ul>
            <p className="mb-2">Berperan aktif dalam kegiatan keinsinyuran di Indonesia sehingga dapat meningkatkan peran serta ITS dalam pembangunan nasional.</p>

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
