"use client"

import Header_one from "../components/Header_one";
import Header_two from "../components/Header_two";
import Footer from "../components/Footer";
import Image from "next/image";
import { FaClock } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import { Suspense } from "react";

import { useState, useEffect } from "react";

const headerStyle = {
  display: "block",
  float: "none",
  padding: "10px 0",
  paddingTop: "10px",
  paddingRight: "0px",
  paddingBottom: "10px",
  paddingLeft: "0px",
};

export default function Home() {
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    fetch(`/local-data/data.json`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

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
              <p>Archive by category &quot;news&quot;</p>
            </div>

            <header className=" page-header" style={headerStyle}>
              <h1 className="page-title text-base leading-normal  font-bold  border-l-4 border-solid pl-2 pt-1 pb-1 pr-4 bg-gray-100 border-red-400 ">Category: news</h1>
            </header>

            {/* Bagian Postingan */}
            <div className={post ? "grid md:grid-cols-2 grid-cols-1 mb-14" : ""}>
              {post ? post?.data.map((item, index) => {
                if(index === 0){
                  return(
                    <div key={index} className="p-5">
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
                  )
                }else{
                return(
                  <div key={index} className="p-5">
                    <h2 className="text-xl font-bold border-b border-black mb-2">{item.title}</h2>
                    <Image src={item.img} className="object-cover w-[100%] h-[250px] border-4 mb-3" width={1920} height={1080} />
                    <p className="mb-5 text-sm">
                      {item.content.slice(0, 200) + "..."}
                    </p>
                    <a href={"/post?postId=" + (index+1)} className="bg-gray-300 p-2 border-b border-black rounded-md hover:bg-gray-400 active:bg-gray-500 active:text-white duration-200">
                      Continue Reading
                    </a>
                    <div className="mt-5">
                      <div className="flex">
                        <FaClock className="mt-[2px] mr-2" />
                        <p className="text-sm mr-7">{item.date}</p>
                        <FaFolderOpen className="mt-[2px] mr-2" />
                        <p className="text-sm">
                          <a href="#" className="text-blue-950">
                            {item.category}
                          </a>
                        </p>
                      </div>
                      <div className="flex mt-3">
                        <IoIosPricetag className="mt-[2px] mr-1" size={30} />
                        <p className="text-sm mr-7">
                          {item.tags.map((tag, index) => {
                            if(index === item.tags.length-1){
                              return (
                                <a key={index} href="#" className="text-blue-800 hover:text-blue-950">
                                  {tag}
                                </a>
                              )
                            }else{
                            return (
                              <a key={index} href="#" className="text-blue-800 hover:text-blue-950">
                                {tag},
                              </a>
                            )}
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                )
                }
              }) : <div className="w-full animate-pulse bg-gray-300 py-36 text-center font-thin text-lg"></div>}
            </div>
            {/* Akhir Postingan */}
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
