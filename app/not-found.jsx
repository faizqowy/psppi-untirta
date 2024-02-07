import { IoIosArrowBack } from "react-icons/io";
import Footer from "./components/Footer";
import Header_one from "./components/Header_one";
import Header_two from "./components/Header_two";
import { Suspense } from "react";


export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="w-[78%] flex flex-col justify-center">
          <Suspense>
          <Header_two />
          </Suspense>
          <section className="p-8 bg-white text-gray-600">
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