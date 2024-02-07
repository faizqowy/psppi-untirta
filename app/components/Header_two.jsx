"use client"
import Image from "next/image";
import { Nunito_Sans, Montserrat } from "next/font/google";
import { VscSearch } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";


const nunitoSans = Nunito_Sans({subsets:['latin'], weights: [700]})
const montserrat = Montserrat({subsets:['latin'], weights: [700]})

export default function Header_two() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const searchBtn = useRef();
  const router = useRouter();

  const [menuOpen, setMenu] = useState(false);
  const [profilOpen, setProfil] = useState(false);
  const [pendaftaranOpen, setPendaftaran] = useState(false);
  const [input, setInput] = useState(search ? search : "");

  function openProfil() {
    if(profilOpen) {  
      setProfil(false);
    }
    else {
      setProfil(true);
    }

  }

  function openPendaftaran() {
    if(pendaftaranOpen) {  
      setPendaftaran(false);
    }
    else {
      setPendaftaran(true);
    }
  }

  function openMenu() {
    if(menuOpen) {  
      setMenu(false);
    }
    else {
      setMenu(true);
    }
  }

  function inputSearch() {
    if(input === "") {
      searchBtn.current.click();
    }
    else {
      router.push(`/search?search=${input}`);
    }
  }

  return (
    <div className="bg-transparent shadow py-3">
      <div className="flex justify-center">
        <div className="lg:w-[100%] w-[100%] lg:mx-0 mx-4 flex flex-col lg:flex-row justify-between">
          <div className="flex-row" style={{ display: "flex", alignItems: "center" }}>
              <a href="/">
                <Image
                  src="/images/psppi.jpg"
                  alt="PSPPI Logo"
                  className="object-cover w-[100%] md:h-[130px] lg:block hidden object-center border-4 border-blue-500 shadow-black shadow-lg"
                  width={1920}
                  height={1080}
                  style={{ borderRadius: "10px" }}
                />
              </a>
            </div>
          <div className="flex justify-center">
            <div className={"text-blue-600 text-2xl font-extrabold self-end " + montserrat.className}>
              <p>PROGRAM STUDI</p>
              <p>PROGRAM PROFESI INSINYUR</p>
              <p>UNIVERSITAS SULTAN AGENG TIRTAYASA</p>
            </div>
          </div>
          <div className="flex lg:justify-end justify-center">
            <div className="flex justify-between items-center">
              <Image
                  src="/images/psppi.jpg"
                  alt="PSPPI Logo"
                  className="object-cover w-[100%] lg:hidden h-[100px] object-right border-4 border-blue-500 shadow-black shadow-lg"
                  width={1920}
                  height={1080}
                  style={{ borderRadius: "10px" }}
              />
              <Image
                src="/images/untirtalogo.jpg"
                alt="Unitrta Logo"
                className="object-cover w-[50%] lg:h-[120px] h-[100px] object-right"
                width={1920}
                height={1080}
              />
              <Image
                src="/images/kemendikbud.jpg"
                alt="Kemendikbud"
                className="object-cover w-[50%] lg:h-[120px] h-[100px] object-right"
                width={1920}
                height={1080}
              />
              <Image
                src="/images/pii.jpg"
                alt="PII Logo"
                className="object-cover w-[50%] lg:h-[120px] h-[100px] object-right"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>

        
      </div>

      <div className="border bg-[#EAEAEA] w-[100%] my-3 md:flex justify-between">
        <div onClick={() => openMenu()} className={menuOpen ? "ml-3 menu-btn md:hidden block menOpen" : "ml-3 menu-btn md:hidden block"}>
        </div>
        <ul className={menuOpen ? "md:flex items-center flex-wrap md:w-[85%]" : "md:flex items-center flex-wrap md:w-[85%] hidden"}>
          <a href="/">
          <li className="md:text-center cursor-pointer text-sm md:border-r-[1px] p-2 md:border-b-0 border-b-[0.3px] hover:bg-white border-gray-400">
            Home
          </li>
          </a>
          <li onMouseLeave={()=> openProfil()} onMouseEnter={() => openProfil()} className="md:flex hidden items-center text-center text-sm md:border-r-[1px] p-2 hover:bg-white border-gray-400 relative">
            <p className="cursor-default">Profil</p> <IoIosArrowDown className="text-xs inline" />
            <div className={profilOpen ? "bg-[#2e2e2e] absolute left-0 top-9 md:w-56 z-30 w-[100%]" : "hidden"}>
              <ul className="text-start">
              <a href="/profil/visimisi"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Visi-Misi</li></a>
              <a href="/profil/kurikulum"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Kurikulum</li></a>
              <a href="/profil/managemen"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Manajemen & Dosen</li></a>
              <a href="/profil/konsentrasi"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Konsentrasi Pembimbingan</li></a>
              </ul>
            </div>
          </li>
          
          <li onClick={()=> openProfil()} className="flex md:hidden items-center text-center text-sm md:border-r-[1px] p-2 hover:bg-white border-gray-400 relative md:border-b-0 border-b-[0.3px]">
            <p className="cursor-default" href="/">Profil</p> <IoIosArrowDown className="text-xs inline" />
            <div className={profilOpen ? "bg-[#2e2e2e] absolute left-0 top-9 md:w-56 z-30 w-[100%]" : "hidden"}>
              <ul className="text-start">
                <a href="/profil/visimisi"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Visi-Misi</li></a>
                <a href="/profil/kurikulum"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Kurikulum</li></a>
                <a href="/profil/managemen"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Manajemen & Dosen</li></a>
                <a href="/profil/konsentrasi"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Konsentrasi Pembimbingan</li></a>
              </ul>
            </div>
          </li>

          <li onMouseLeave={()=> openPendaftaran()} onMouseEnter={() => openPendaftaran()} className="md:flex hidden items-center text-center text-sm md:border-r-[1px] p-2 hover:bg-white border-gray-400 relative">
            <p className="cursor-default" >Pendaftaran</p> <IoIosArrowDown className="text-xs inline" />
            <div className={pendaftaranOpen ? "bg-[#2e2e2e] absolute left-0 top-9 md:w-56 z-30 w-[100%]" : "hidden"}>
              <ul className="text-start">
                <a href="/pendaftaran/jadwal"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Jadwal</li></a>
                <a href="/pendaftaran/persyaratan"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Persyaratan</li></a>
              </ul>
            </div>
          </li>
          
          <li onClick={()=> openPendaftaran()} className="flex md:hidden items-center text-center text-sm md:border-r-[1px] p-2 hover:bg-white border-gray-400 relative md:border-b-0 border-b-[0.3px]">
            <p className="cursor-default" >Pendaftaran</p> <IoIosArrowDown className="text-xs inline" />
            <div className={pendaftaranOpen ? "bg-[#2e2e2e] absolute left-0 top-9 md:w-56 z-30 w-[100%]" : "hidden"}>
              <ul className="text-start">
                <a href="/pendaftaran/jadwal"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Jadwal</li></a>
                <a href="/pendaftaran/persyaratan"><li className="text-white cursor-pointer hover:bg-[#414141]  border-y-[1px] p-2 border-zinc-800">Persyaratan</li></a>
              </ul>
            </div>
          </li>
          <a href="/biaya-perkuliahan">
          <li className="md:border-b-0 border-b-[0.3px] md:text-center cursor-pointer text-sm md:border-r-[1px] p-2 hover:bg-white border-gray-400">
            Biaya Perkuliahan
          </li>
          </a>
          <a href="/jadwal-kegiatan">
          <li className="md:border-b-0 border-b-[0.3px] md:text-center cursor-pointer text-sm md:border-r-[1px] p-2 hover:bg-white border-gray-400">
            Jadwal Kegiatan
          </li>
          </a>
          <a href="/news">
          <li className="md:border-b-0 border-b-[0.3px] md:text-center cursor-pointer text-sm md:border-r-[1px] p-2 hover:bg-white border-gray-400">
            News
          </li>
          </a>
          <a href="/kontak-info">
          <li className="md:border-b-0 border-b-[0.3px] md:text-center cursor-pointer text-sm md:border-r-[1px] p-2 hover:bg-white border-gray-400">
            Kontak & Info
          </li>
          </a>
          <a href="/download">
          <li className="md:border-b-0 border-b-[0.3px] md:text-center cursor-pointer text-sm md:border-r-[1px] p-2 hover:bg-white border-gray-400">
            Download
          </li>
          </a>
          <a href="/sistem-perkuliahan">
          <li className="md:border-b-0 border-b-[0.3px] md:text-center cursor-pointer text-sm md:border-r-[1px] p-2 hover:bg-white border-gray-400">
            Sistem Perkuliahan
          </li>
          </a>
        </ul>
        <div className={menuOpen ? "md:border-b-0 border-b-2 md:flex items-center md:w-[15%] justify-evenly bg-white" : "md:border-b-0 border-b-2 md:flex items-center md:w-[15%] md:justify-normal justify-evenly bg-white hidden"}>
          <input value={input} type="text" placeholder="Search" className="border-none p-2 md:w-[80%] w-[100%]" onInput={e => setInput(e.target.value)}/>
          <VscSearch className="text-sm ml-1 cursor-pointer" onClick={()=> inputSearch()} />
        </div>
      </div>
    </div>
  );
}
