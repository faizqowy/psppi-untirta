"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import Header_one from "../components/Header_one";
import Header_two from "../components/Header_two";
import Footer from "../components/Footer";

import { FaFolderOpen } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";

import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { TwitterShareButton, FacebookShareButton, TwitterIcon, FacebookIcon } from "next-share";

export default function Post() {
  const [post, setPost] = useState(null);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const val = searchParams.get("postId")
  var search = searchParams.get("search");
  const router = useRouter();
  
  search = search === null ? null : search;
  useEffect(() => {
    fetch(`/local-data/data.json`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);


  if(post?.data.length < val) {
    router.push("/post?postId=1");
  }else if(search === null){
  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="lg:w-[78%] w-[100%] flex flex-col justify-center">
          <Header_two />
          <section className="p-8 bg-white text-gray-600">
            <div className="flex mb-7">
              <a href="/" className="hover:cursor-pointer">
                <IoHomeSharp className="inline-block text-sm hover:fill-blue-950 duration-300" />
              </a>
              <IoIosArrowForward className="mt-2 inline-block text-sm" />
              <h1 className="text-sm font-bold ml-1 mt-1">{post?.data[val-1].title}</h1>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-center">{post?.data[val-1].title}</h1>
            <div className="flex flex-row justify-center w-[100%]">
              {post ? 
                <Image className="center" src={post?.data[val-1].img} alt="post-image" width={500} height={300} />
                :
                <div className="w-[100%] py-32 text-bold text-3xl animate-pulse  bg-[#d1d1d1] border text-center items-center">.</div>
              }
            </div>
            <p className="text-base mt-4">{post?.data[val-1].content}</p>
            <div className="mt-16 border-y-[1px] border-gray-300 w-12 justify-evenly">
              <p className="text-sm text-nowrap">Share this:</p>
              <div className="flex mt-2 gap-2 mb-2 gap-y-4">
                <TwitterShareButton url={"http://psppi-untirta.vercel.app" + pathName + "?postId=" + val} title={post?.data[val-1].title} className="m-3">
                  <TwitterIcon size={28} round={true} />
                </TwitterShareButton>
                <FacebookShareButton url={"http://psppi-untirta.vercel.app" + pathName + "?postId=" + val} quote={post?.data[val-1].title} className="m-3">
                  <FacebookIcon size={28} round={true} />
                </FacebookShareButton>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-xs font-bold">Related</p>
              <div className="flex flex-wrap justify-between gap-5 mt-8">
                {post?.data.map((item, index) => {
                  if(index !== val-1){
                    return (
                     <div key={index}>
                        <a href={"/post?postId=" + (index+1)} className="hover:cursor-pointer hover:text-blue-400 duration-200">{item.title}</a>
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
                {post?.data[val-2] ? 
                <div className="flex items-center  hover:text-blue-400 duration-200 gap-2">
                  <FaArrowLeft className="text-lg hover:fill-blue-400" />
                  <a href={"/post?postId=" + (val-1)} className="hover:cursor-pointer">{post?.data[val-2].title}</a>
                </div>
                :
                <div className="text-white">.</div>
                }
                
                {post?.data[val] ?
                <div className="flex items-center hover:text-blue-400 duration-200 gap-2">
                  <a href={"/post?postId=" + (parseInt(val)+1)} className="hover:cursor-pointer">{post?.data[val].title}</a>
                  <FaArrowRight className="text-lg hover:fill-blue-400" />
                </div>
                :
                <div className="text-white">.</div>
                }

              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
  }else{
    return(
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="lg:w-[78%] w-[100%] flex flex-col justify-center">
          <Header_two />
          <section className="p-8 bg-white text-gray-600">
            <div className="flex mb-7">
              <a href="/" className="hover:cursor-pointer">
                <IoHomeSharp className="inline-block text-sm hover:fill-blue-950 duration-300" />
              </a>
              <IoIosArrowForward className="mt-2 inline-block text-sm" />
              <h1 className="text-sm font-bold ml-1 mt-1">SEARCH RESULT</h1>
            </div>
            <h2>SEARCH RESULT</h2>
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
              })}
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>)
  }

}