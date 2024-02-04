"use client";
import Header_one from "@/app/components/Header_one";
import Header_two from "@/app/components/Header_two";
import Footer from "@/app/components/Footer";
import { Nunito_Sans } from "next/font/google";

import { FaFolderOpen } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";

import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

register();

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="lg:w-[78%] w-[100%] flex flex-col justify-center">
          <Header_two />
          <div className={"bg-white " + nunitoSans.className}>
            <Swiper
              className="swiper"
              effect="creative"
              direction={"horizontal"}
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, EffectCreative, Navigation]}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-20%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              navigation={true}
              height={500}
            >
              <SwiperSlide>
                <div className="flex text-right">
                  <Image src="/images/slider1.jpg" className="object-cover w-[50%] h-[400px] object-right" width={1920} height={1080} />
                  <div className="self-center p-3">
                    <h1 className="text-2xl font-bold">
                      Program Studi
                      <br /> Program Profesi Insinyur
                    </h1>
                    <p className="text-sm">
                      Untuk memenuhi kebutuhan jumlah insinyur di masa sekarang ini, maka Pemerintah Republik Indonesia melalui Direktur Jenderal Kelembagaan Ilmu Pengetahuan Teknologi dan Pendidikan Tinggi yang berada di bawah Kementerian
                      Riset, Teknologi dan Pendidikan Tinggi memberikan mandat kepada 40 perguruan tinggi baik negeri maupun swasta untuk menyelenggarakan Program Profesi Insinyur.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex text-right">
                  <Image src="/images/slider2.jpg" className="object-cover w-[50%] h-[400px] object-left" width={1920} height={1080} />
                  <div className="self-center p-3">
                    <h1 className="text-2xl font-bold">
                      Program Studi
                      <br /> Program Profesi Insinyur
                    </h1>
                    <p className="text-sm">
                      Program Studi Program Profesi Insinyur (PSPPI) sebagai lingkup dari amanat Undang-Undang Nomor 11 Tahun 2014 tentang Keinsinyuran merupakan upaya pemerintah mempercepat terciptanya tenaga insinyur Indonesia yang
                      mandiri, bertanggung jawab, dan memiliki etika profesi serta kualifikasi sesuai standar sertifikasi dalam waktu yang mendesak.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex text-right">
                  <Image src="/images/slider3.jpg" className="object-cover w-[50%] h-[400px] object-left" width={1920} height={1080} />
                  <div className="self-center p-3">
                    <h1 className="text-2xl font-bold">
                      Program Studi
                      <br /> Program Profesi Insinyur
                    </h1>
                    <p className="text-sm">Para sarjana teknik/teknik terapan/sains yang mengikuti PSPPI ini akan memperoleh sertifikat profesi Insinyur dan berhak menggunakan gelar Insinyur (Ir.).</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex text-right">
                  <Image src="/images/slider4.jpg" className="object-cover w-[50%] h-[400px] object-right" width={1920} height={1080} />
                  <div className="self-center p-3">
                    <h1 className="text-2xl font-bold">
                      Program Studi
                      <br /> Program Profesi Insinyur
                    </h1>
                    <p className="text-sm">
                      Program Pendidikan Reguler dan Program Rekognisi Pembelajaran Lampau (RPL), dengan demikian UNTIRTA
                      <br />
                      memiliki wewenang memberikan Gelar Insinyur (Ir.) bagi lulusan PSPPI. Pengelolaan PSPPI UNTIRTA dilaksanakan
                      <br />
                      di bawah Rektor UNTIRTA dan Wakil Rektor UNTIRTA.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex text-right">
                  <Image src="/images/slider5.jpg" className="object-cover w-[50%] h-[400px] object-right" width={1920} height={1080} />
                  <div className="self-center p-3">
                    <h1 className="text-2xl font-bold">
                      Program Studi
                      <br /> Program Profesi Insinyur
                    </h1>
                    <p className="text-sm">
                      Untuk memenuhi kebutuhan jumlah insinyur di masa sekarang ini, maka Pemerintah Republik Indonesia melalui Direktur Jenderal Kelembagaan Ilmu Pengetahuan Teknologi dan Pendidikan Tinggi yang berada di bawah Kementerian
                      Riset, Teknologi dan Pendidikan Tinggi memberikan mandat kepada 40 perguruan tinggi baik negeri maupun swasta untuk menyelenggarakan Program Profesi Insinyur.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="mt-28 mb-28 flex flex-row justify-center">
              <ul className="flex flex-col lg:flex-row lg:justify-around lg:w-[100%]">
                <li>
                  <div className="text-center">
                    <div className="w-[180px] h-[180px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3">
                      <a href="#">
                        <Image src="/images/image1.jpg" className="object-cover rounded-full w-[150px] h-[150px]" width={200} height={200} />
                      </a>
                    </div>
                    <h3 className="text-amber-700 text-xl mt-7 hover:text-amber-950 duration-500">
                      <a href="#">Tentang PS PPI</a>
                    </h3>
                    <p className="mt-7 w-[200px]">Apa itu PS PPI?</p>
                  </div>
                </li>
                <li>
                  <div className="text-center">
                    <div className="w-[180px] h-[180px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3">
                      <a href="#">
                        <Image src="/images/image2.jpg" className="object-cover rounded-full w-[150px] h-[150px]" width={200} height={200} />
                      </a>
                    </div>
                    <h3 className="text-amber-700 text-xl mt-7 hover:text-amber-950 duration-500">
                      <a href="#">Program Reguler</a>
                    </h3>
                    <p className="mt-7 w-[200px]">Penjelasan Program Reguler PS PPI</p>
                  </div>
                </li>
                <li>
                  <div className="text-center">
                    <div className="w-[180px] h-[180px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3">
                      <a href="#">
                        <Image src="/images/image3.png" className="object-cover rounded-full w-[150px] h-[150px]" width={200} height={200} />
                      </a>
                    </div>
                    <h3 className="text-amber-700 text-xl mt-7 hover:text-amber-950 duration-500">
                      <a href="#">Program RPL</a>
                    </h3>
                    <p className="mt-7 w-[200px]">Penjelasan Program Rekognisi Pembelajaran Lampau</p>
                  </div>
                </li>
                <li>
                  <div className="text-center">
                    <div className="w-[180px] h-[180px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3">
                      <a href="#">
                        <Image src="/images/image4.jpg" className="object-cover rounded-full w-[150px] h-[150px]" width={200} height={200} />
                      </a>
                    </div>
                    <h3 className="text-amber-700 text-xl mt-7 hover:text-amber-950 duration-500">
                      <a href="#">Admisi</a>
                    </h3>
                    <p className="mt-7 w-[200px]">Penjelasan pendaftaran PS PPI</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bagian Postingan */}
            <div className="grid md:grid-cols-2 grid-cols-1 mb-14">
              <div className="p-5">
                <h2 className="text-xl font-bold border-b border-black mb-2">Sekilas Prodi Program Profesi Insinyur Untirta</h2>
                <Image src="/images/article1.png" className="object-cover w-[100%] h-[130px] border-4 mb-3" width={1920} height={1080} />
                <p className="mb-5 text-sm">
                  Untuk memenuhi kebutuhan jumlah insinyur di masa sekarang ini, maka Pemerintah Republik Indonesia melalui Direktur Jenderal Kelembagaan Ilmu Pengetahuan Teknologi dan Pendidikan Tinggi yang berada di bawah Kementerian
                  Riset, Teknologi dan Pendidikan Tinggi memberikan mandat kepada 40 perguruan tinggi baik negeri maupun swasta untuk menyelenggarakan Program Profesi Insinyur. Program Studi Program Profesi Insinyur (PSPPI) sebagai lingkup
                  dari amanat Undang-Undang Nomor 11 Tahun 2014 tentang Keinsinyuran merupakan upaya pemerintah mempercepat terciptanya tenaga insinyur Indonesia yang mandiri, bertanggung jawab, dan memiliki etika profesi serta kualifikasi
                  sesuai standar sertifikasi dalam waktu yang mendesak.
                </p>
                <a href="/post?postId=1" className="bg-gray-300 p-2 border-b border-black rounded-md hover:bg-gray-400 active:bg-gray-500 active:text-white duration-200">
                  Continue Reading
                </a>
                <div className="mt-5">
                  <div className="flex">
                    <FaClock className="mt-[2px] mr-2" />
                    <p className="text-sm mr-7">12 February 2024</p>
                    <FaFolderOpen className="mt-[2px] mr-2" />
                    <p className="text-sm">
                      <a href="#" className="text-blue-950">
                        info
                      </a>
                    </p>
                  </div>
                  <div className="flex mt-3">
                    <IoIosPricetag className="mt-[2px] mr-1" size={30} />
                    <p className="text-sm mr-7">
                      <a href="#" className="text-blue-800 hover:text-blue-950">
                        prodi profesi insinyur
                      </a>
                      ,
                      <a href="#" className="text-blue-800 hover:text-blue-950">
                        Untirta
                      </a>
                      ,
                      <a href="#" className="text-blue-800 hover:text-blue-950">
                        Profesi Insinyur
                      </a>
                      ,
                      <a href="#" className="text-blue-800 hover:text-blue-950">
                        PS PPI
                      </a>
                      ,
                      <a href="#" className="text-blue-800 hover:text-blue-950">
                        PS PPI - Untirta
                      </a>
                      ,
                      <a href="#" className="text-blue-800 hover:text-blue-950">
                        PSPPI
                      </a>
                      ,
                      <a href="#" className="text-blue-800 hover:text-blue-950">
                        PSPPI-Untirta
                      </a>
                      ,
                      <a href="#" className="text-blue-800 hover:text-blue-950">
                        Cilegon
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">Pendaftaran PSPPI 2024</h2>
                <div className="mb-5 w-[100%]">
                  <Image src="/images/article2.jpg" className="mr-3 object-cover object-top float-left w-[100%] h-[200px] border-4 mb-3" width={1920} height={1080} />
                  <p className="w-[100%] text-sm px-3">
                    Pendaftaran Program Studi Program Profesi Insinyur 2020 sudah dibuka. Daftarkan dirimu sekarang, jangan lupa melengkapi persyaratan pendaftaran. Cek Seluruh informasi di website ini.
                  </p>
                </div>
                <a href="/post?postId=2" className="bg-gray-300 p-2 border-b border-black rounded-md hover:bg-gray-400 active:bg-gray-500 active:text-white duration-200">
                  Continue Reading
                </a>
                <div className="flex mt-5">
                  <FaClock className="mt-[2px] mr-2" />
                  <p className="text-sm mr-7">12 February 2024</p>
                  <FaFolderOpen className="mt-[2px] mr-2" />
                  <p className="text-sm">
                    <a href="#" className="text-blue-950">
                      news
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">Perkuliahan Program Profesi Insinyur ke 3</h2>
                <div className="mb-5 w-[100%]">
                  <Image src="/images/article3.jpg" className="object-top mr-3 object-cover float-left w-[100%] h-[200px] border-4 mb-3" width={1920} height={1080} />
                  <p className="w-[100%] text-sm px-3">
                    Pada hari Sabtu tanggal 16 Desember 2017 telah diadakan perkuliahan ke tiga (3) yang bertempat di Ruang Sidang Pascasarjana UNTIRTA, di Gedung Pascasarjana UNTIRTA Lantai 2. Acara perkuliahan berlangsung dari pukul 08.00 WIB
                    hingga selesai pukul 12.00 WIB.
                  </p>
                </div>
                <a href="/post?postId=3" className="bg-gray-300 p-2 border-b border-black rounded-md hover:bg-gray-400 active:bg-gray-500 active:text-white duration-200">
                  Continue Reading
                </a>
                <div className="flex mt-5">
                  <FaClock className="mt-[2px] mr-2" />
                  <p className="text-sm mr-7">12 February 2024</p>
                  <FaFolderOpen className="mt-[2px] mr-2" />
                  <p className="text-sm">
                    <a href="#" className="text-blue-950">
                      news
                    </a>
                  </p>
                </div>

                <div className="flex mt-3">
                  <IoIosPricetag className="mt-[2px] mr-1" size={30} />
                  <p className="text-sm mr-7">
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      prodi profesi insinyur
                    </a>
                    ,
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      perkuliahan
                    </a>
                    ,
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      Profesi Insinyur
                    </a>
                    ,
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      PS PPI
                    </a>
                    ,
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      PS PPI - Untirta
                    </a>
                    ,
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      PSPPI
                    </a>
                    ,
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      PSPPI-Untirta
                    </a>
                    ,
                  </p>
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">Kuliah Mid Semester PSPPI – UNTIRTA</h2>
                <div className="mb-5 w-[100%]">
                  <Image src="/images/article4.jpg" className="object-top mr-3 object-cover float-left w-[100%] h-[200px] border-4 mb-3" width={1920} height={1080} />
                  <p className="w-[100%] text-sm px-3">
                    Kuliah Mid Semester PPI UNTIRTA sedang berjalan hari ini, Sabtu, 21 Oktober 2017. Dibuka dengan Sambutan Pak Hidayat Soegihardjo selaku Kaprodi PPI UNTIRTA yang baru, kegiatan perkuliahan berjalan
                  </p>
                </div>
                <a href="/post?postId=4" className="bg-gray-300 p-2 border-b border-black rounded-md hover:bg-gray-400 active:bg-gray-500 active:text-white duration-200">
                  Continue Reading
                </a>
                <div className="flex mt-5">
                  <FaClock className="mt-[2px] mr-2" />
                  <p className="text-sm mr-7">12 February 2024</p>
                  <FaFolderOpen className="mt-[2px] mr-2" />
                  <p className="text-sm">
                    <a href="#" className="text-blue-950">
                      news
                    </a>
                  </p>
                </div>

                <div className="flex mt-3">
                  <IoIosPricetag className="mt-[2px] mr-1" size={30} />
                  <p className="text-sm mr-7">
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      prodi profesi insinyur
                    </a>
                    ,
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      Materi
                    </a>
                    ,
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      Perkuliahan
                    </a>
                    ,
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      PSPPI-Untirta
                    </a>
                    ,
                    <a href="#" className="text-blue-800 hover:text-blue-950">
                      Midsemester
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Akhir Postingan */}
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
