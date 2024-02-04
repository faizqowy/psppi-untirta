import { IoIosArrowBack } from "react-icons/io";
import Footer from "./components/Footer";
import Header_one from "./components/Header_one";
import Header_two from "./components/Header_two";


export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center w-[100%]">
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
              <h1 className="text-sm font-bold ml-1 mt-1">Jadwal Kegiatan</h1>
            </div>
            <h1 className="text-3xl font-bold mb-4">Jadwal Kegiatan</h1>
            <p className="text-sm mb-4 py-40">
              Halaman yang Anda cari tidak ditemukan. Coba cari lagi atau kembali ke halaman utama.
            </p>
            <a href="/" className="text-sm font-bold hover:underline hover:cursor-pointer"><IoIosArrowBack className="inline-block text-sm" /> Kembali ke halaman utama</a>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}