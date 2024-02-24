"use client"
import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";
import { Suspense } from "react";
import data from "../../../public/local-data/data.json";
import { FaFolderOpen, FaClock } from "react-icons/fa";
import {IoIosPricetag} from "react-icons/io";

import { useSearchParams } from "next/navigation";

import { Montserrat } from "next/font/google";

import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
    const searchParams = useSearchParams();
    const search = searchParams.get("search");

    const post = data;

  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="lg:w-[1024px] w-[100%] flex flex-col justify-center">
          <Suspense>
            <Header_two />
          </Suspense>

          <section className="p-8 bg-white text-gray-600">
            <div className="flex mb-6 text-sm">
              <div className="flex pt-[2px] ml-1">
                <a href="/" className="text-blue-500 hover:text-[#FF0000] mr-2">
                  <FaHome />
                </a>
                <IoIosArrowForward className="mr-2" />
              </div>
              <p className="font-bold">Search</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mb-14">
              {post?.data.map((item, index) => {
                if(item.title.toLowerCase().includes(search.toLowerCase())){
                  return (
                    <div key={index} className="p-5">
                      <h2 className="text-xl font-bold border-b border-black mb-2">{item.title}</h2>
                      <Image src={item.img} className="object-cover w-[100%] h-[250px] border-4 mb-3" width={1920} height={1080} />
                      <p className="mb-5 text-sm">
                        {item.content.slice(0, 200) + "..."}
                      </p>
                      <a href={"/post/" + (index+1)} className="bg-gray-300 p-2 border-b border-black rounded-md hover:bg-gray-400 active:bg-gray-500 active:text-white duration-200">
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
              })}
            </div>

          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
