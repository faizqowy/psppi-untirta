import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";
import { Montserrat } from "next/font/google";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ backgroundColor: "white", width: "78%", margin: "auto", padding: "20px" }}>
      <Header_one />
      <Header_two />
      <section className="p-8 bg-white text-gray-600">
        <div className="flex mb-7">
          <a href="/" className="hover:cursor-pointer">
            <IoHomeSharp className="inline-block text-sm hover:fill-blue-950 duration-300" />
          </a>
          <IoIosArrowForward className="mt-2 inline-block text-sm" />
          <p>Kurikulum</p>
        </div>
        <div>
          <h1 className={"text-3xl font-bold + montserrat.className  py-2 mb-2 "} style={{ fontFamily: "Montserrat" }}>
            Kurikulum
          </h1>

          <h2 className="text-3xl mb-2">Capaian Pembelajaran Lulusan Minimum:</h2>

          <ul className="list-decimal mb-2 pl-12">
            <li className="mb-2">Mampu melakukan perencanaan keinsinyuran dengan memanfaatkan sumberdaya dan melakukan evaluasi keinsinyuran secara komprehensif dengan memanfaatkan ilmu pengetahuan dan teknologi;</li>
            <li className="mb-2">Mampu memecahkan permasalahan keinsinyuran melalui monodisiplin dan multidisiplin;</li>
            <li className="mb-2">Mampu melakukan riset dan mengambil keputusan keinsinyuran sesuai etika profesi secara strategis dan akuntabel.</li>
          </ul>

          <p className="mb-2">Program Studi Program Profesi Institut Teknologi Sepuluh Nopember (ITS) Surabaya, memuat materi perkuliahan dengan muatan 24 sks, yang terdiri dari:</p>

          <ol className="list-decimal mb-2 pl-12">
            <li className="mb-2">Kode etik dan etika profesi insinyur (2 sks)</li>
            <li className="mb-2">Profesionalisme (2 sks)</li>
            <li className="mb-2">Keselamatan, Kesehatan, Keamanan Kerja dan Lingkungan (2 sks)</li>
            <li className="mb-2">Praktek Keinsinyuran (12 SKS)</li>
            <li className="mb-2">Studi Kasus (4 sks)</li>
            <li className="mb-2">Seminar (2 sks)</li>
          </ol>
        </div>
      </section>
      <Footer />
    </div>
  );
}
