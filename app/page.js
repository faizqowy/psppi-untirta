"use client";
import Header_one from "@/components/Header_one";
import Header_two from "@/components/Header_two";
import Footer from "@/components/Footer";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";

register();

export default function Home() {

  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
      <div className="w-[75%] flex flex-col justify-center">
        <Header_two />
        <div className="bg-white">
          <Swiper
            className="swiper"
            effect="creative"
            direction={'horizontal'}
            spaceBetween={50}
            pagination={{
                "clickable": true
            }}
            modules={[Pagination, EffectCreative]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            >
            <SwiperSlide>
              <div className="flex text-right">
              <Image src="/images/slider1.jpg" className="object-cover w-[50%] h-[400px] object-right" width={1920} height={1080} />
              <div className="self-center p-3">
                <h1 className="text-2xl font-bold">Program Studi<br/> Program Profesi Insinyur</h1>
                <p className="text-sm">Untuk memenuhi kebutuhan jumlah insinyur di masa sekarang ini, maka Pemerintah Republik Indonesia melalui Direktur Jenderal Kelembagaan Ilmu Pengetahuan Teknologi dan Pendidikan Tinggi yang berada di bawah Kementerian Riset, Teknologi dan Pendidikan Tinggi memberikan mandat kepada 40 perguruan tinggi baik negeri maupun swasta untuk menyelenggarakan Program Profesi Insinyur.</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex text-right">
              <Image src="/images/slider2.jpg" className="object-cover w-[50%] h-[400px] object-left" width={1920} height={1080} />
              <div className="self-center p-3">
                <h1 className="text-2xl font-bold">Program Studi<br/> Program Profesi Insinyur</h1>
                <p className="text-sm">Program Studi Program Profesi Insinyur (PSPPI) sebagai lingkup dari amanat Undang-Undang Nomor 11 Tahun 2014 tentang Keinsinyuran merupakan upaya pemerintah mempercepat terciptanya tenaga insinyur Indonesia yang mandiri, bertanggung jawab, dan memiliki etika profesi serta kualifikasi sesuai standar sertifikasi dalam waktu yang mendesak.</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex text-right">
              <Image src="/images/slider3.jpg" className="object-cover w-[50%] h-[400px] object-left" width={1920} height={1080} />
              <div className="self-center p-3">
                <h1 className="text-2xl font-bold">Program Studi<br/> Program Profesi Insinyur</h1>
                <p className="text-sm">Para sarjana teknik/teknik terapan/sains yang mengikuti PSPPI ini akan memperoleh sertifikat profesi Insinyur dan berhak menggunakan gelar Insinyur (Ir.).</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex text-right">
              <Image src="/images/slider4.jpg" className="object-cover w-[50%] h-[400px] object-right" width={1920} height={1080} />
              <div className="self-center p-3">
                <h1 className="text-2xl font-bold">Program Studi<br/> Program Profesi Insinyur</h1>
                <p className="text-sm">Program Pendidikan Reguler dan Program Rekognisi Pembelajaran Lampau (RPL), dengan demikian ITS<br/>
memiliki wewenang memberikan Gelar Insinyur (Ir.) bagi lulusan PSPPI. Pengelolaan PSPPI ITS dilaksanakan<br/>
 di bawah Rektor ITS dan Wakil Rektor ITS.</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex text-right">
              <Image src="/images/slider5.jpg" className="object-cover w-[50%] h-[400px] object-right" width={1920} height={1080} />
              <div className="self-center p-3">
                <h1 className="text-2xl font-bold">Program Studi<br/> Program Profesi Insinyur</h1>
                <p className="text-sm">Untuk memenuhi kebutuhan jumlah insinyur di masa sekarang ini, maka Pemerintah Republik Indonesia melalui Direktur Jenderal Kelembagaan Ilmu Pengetahuan Teknologi dan Pendidikan Tinggi yang berada di bawah Kementerian Riset, Teknologi dan Pendidikan Tinggi memberikan mandat kepada 40 perguruan tinggi baik negeri maupun swasta untuk menyelenggarakan Program Profesi Insinyur.</p>
              </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="mt-28 mb-28">
            <ul className="flex flex-row justify-evenly">
              <li>
                <div className="text-center">
                  <div className="w-[200px] h-[200px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3">
                    <a href="#"><Image src="/images/image1.jpg" className="object-cover rounded-full w-[160px] h-[160px]" width={200} height={200} /></a>
                  </div>
                  <h3 className="text-amber-700 text-xl mt-7 hover:text-amber-950 duration-500"><a href="#">Tentang PS PPI</a></h3>
                  <p className="mt-7 w-[200px]">Apa itu PS PPI?</p>
                </div>
              </li>
              <li>
                <div className="text-center">
                  <div className="w-[200px] h-[200px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3">
                    <a href="#"><Image src="/images/image2.jpg" className="object-cover rounded-full w-[160px] h-[160px]" width={200} height={200} /></a>
                  </div>
                  <h3 className="text-amber-700 text-xl mt-7 hover:text-amber-950 duration-500"><a href="#">Program Reguler</a></h3>
                  <p className="mt-7 w-[200px]">Penjelasan Program Reguler PS PPI</p>
                </div>
              </li>
              <li>
                <div className="text-center">
                  <div className="w-[200px] h-[200px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3">
                    <a href="#"><Image src="/images/image3.png" className="object-cover rounded-full w-[160px] h-[160px]" width={200} height={200} /></a>
                  </div>
                  <h3 className="text-amber-700 text-xl mt-7 hover:text-amber-950 duration-500"><a href="#">Program RPL</a></h3>
                  <p className="mt-7 w-[200px]">Penjelasan Program Rekognisi Pembelajaran Lampau</p>
                </div>
              </li>
              <li>
                <div className="text-center">
                  <div className="w-[200px] h-[200px] shadow-3xl rounded-full justify-center flex items-center hover:bg-blue-500 duration-500 mt-3">
                    <a href="#"><Image src="/images/image4.jpg" className="object-cover rounded-full w-[160px] h-[160px]" width={200} height={200} /></a>
                  </div>
                  <h3 className="text-amber-700 text-xl mt-7 hover:text-amber-950 duration-500"><a href="#">Admisi</a></h3>
                  <p className="mt-7 w-[200px]">Penjelasan pendaftaran PS PPI</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
      </div>

    </main>
  );
}
