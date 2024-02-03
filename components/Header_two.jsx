import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

export default function HeaderTwo() {
  return (
    <div className="bg-transparent shadow py-3">
      <div className="flex justify-end">
        <div className="text-blue-500 flex items-center">
          <div className="flex flex-col">
            <div
              className="object-left p-3"
              style={{
                fontSize: "15px",
                color: "#FFFFFF ",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                <div className="text-left">
                  <p>PROGRAM STUDI</p>
                  <p>PROGRAM PROFESI INSINYUR UNIVERSITAS </p>
                  <p>SULTAN AGENG TIRTAYASA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/untirtalogo.jpg"
              alt="Untirta Logo"
              className="object-cover w-[50%] h-[100px] object-right"
              width={1920}
              height={1080}
              style={{ marginLeft: "10px" }}
            />
            <Image
              src="/images/ristekdikti.jpg"
              alt="Ristekdikti Logo"
              className="object-cover w-[50%] h-[100px] object-right"
              width={1920}
              height={1080}
              style={{ marginLeft: "10px", marginRight: "10px" }}
            />
            <Image
              src="/images/pii.jpg"
              alt="PII Logo"
              className="object-cover w-[50%] h-[100px] object-right"
              width={1920}
              height={1080}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          {/* Gambar lainnya atau komponen lainnya */}
        </div>
      </div>
    </div>
  );
}
