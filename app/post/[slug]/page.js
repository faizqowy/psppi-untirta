import Image from "next/image";
import data from "../../../public/local-data/data.json";

import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";

import { FaFolderOpen } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";
import { Suspense } from "react";

import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export async function generateStaticParams() {
  return [{slug : "1"}, {slug : "2"}, {slug : "3"}, {slug : "4"}];
  // return data.data.map((item) => {
  //   slug : item.postid
  // });
}

export default function Page({params}) {
  const {slug} = params;
  const mainP = data;
  const post = mainP?.data[slug-1];

  if(!post) {
    router.push("/");
  }else{
  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Suspense>
      <Header_one />
      </Suspense>
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
              <h1 className="text-sm font-bold ml-1 mt-1">{post.title}</h1>
            </div>
            <div className="">
              <div className="p-5">
                <h2 className="text-xl font-bold text-center border-black mb-2">{post.title}</h2>
                <Image src={post.img} className="object-cover w-[100%] h-[250px] border-4 mb-3" width={1920} height={1080} alt="" />
                <p className="mb-5 text-base">
                  {post.content}
                </p>
                <div className="mt-16 border-y-[1px] border-gray-300 w-12 justify-evenly">
                  <p className="text-sm text-nowrap">Share this:</p>
                  <div className="flex mt-2 gap-2 mb-2 gap-y-4">
                    <a className="facebook" href={"https://www.facebook.com/sharer/sharer.php?u=http://psppi-untirta.vercel.app/post/" + slug} target="blank" title="facebook">
                      <FaFacebook size={28} />
                    </a>
                    <a className="twitter" href={"https://twitter.com/intent/tweet?text=" + post.title + "&url=http://psppi-untirta.vercel.app/post/" + slug} target="blank" title="twitter">
                      <FaTwitter size={28}/>
                    </a>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-xs font-bold">Related</p>
                  <div className="flex flex-wrap justify-between gap-5 mt-8">
                    {mainP.data.map((item, index) => {
                      if(index !== slug-1){
                        return (
                         <div key={index}>
                            <a href={"/post/" + (index+1)} className="hover:cursor-pointer hover:text-blue-400 duration-200">{item.title}</a>
                            <p>{item.date}</p>
                            {item.tags.map((tag, index) => {
                              return (
                                <span key={index} className="text-xs bg-gray-200 p-1 rounded-lg">{tag}</span>
                              )
                            })}
                         </div> 
                        )
                      }
                    })}
                  </div>
                </div>
                  
                <div>
                  <div className="flex justify-between mt-8">
                    {mainP.data[slug-2] ? 
                    <div className="flex items-center  hover:text-blue-400 duration-200 gap-2">
                      <FaArrowLeft className="text-lg hover:fill-blue-400" />
                      <a href={"/post/" + (slug-1)} className="hover:cursor-pointer">{mainP.data[slug-2].title}</a>
                    </div>
                    :
                    <div className="text-white">.</div>
                    }

                    {mainP.data[slug] ?
                    <div className="flex items-center hover:text-blue-400 duration-200 gap-2">
                      <a href={"/post/" + (Number(slug)+1)} className="hover:cursor-pointer">{mainP.data[slug].title}</a>
                      <FaArrowRight className="text-lg hover:fill-blue-400" />
                    </div>
                    :
                    <div className="text-white">.</div>
                    }

                  </div>
                </div>
              </div>
            </div>
          </section>
          <Suspense>
          <Footer/>
          </Suspense>
        </div>
      </div>
    </main>
  );
  }
  
}