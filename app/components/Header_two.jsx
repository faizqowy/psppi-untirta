import { FaSearch } from "react-icons/fa";
import "./Headerone.css";
import Image from "next/image";

export default function Header_two() {
  return (
    <div className="bg-transparent shadow py-3">
      <div className="flex justify-center">
        <div className="lg:w-[100%] w-[100%] lg:mr-0 mr-4 flex flex-col lg:flex-row">
          <div className="text-2xl font-bold"
            style={{
              textAlign: "left",
              margin: "auto", 
            }}
          >
            <p>PROGRAM STUDI</p>
            <p>PROGRAM PROFESI INSINYUR</p>
            <p>UNIVERSITAS SULTAN AGENG TIRTAYASA</p>
          </div>
          <div className="flex justify-end">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/images/untirtalogo.jpg"
                alt="Unitrta Logo"
                className="object-cover w-[50%] h-[100px] object-right"
                width={1920}
                height={1080}
              />
              <Image
                src="/images/kemendikbud.jpg"
                alt="Kemendikbud"
                className="object-cover w-[50%] h-[100px] object-right"
                width={1920}
                height={1080}
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
        </div>
      </div>
    </div>
  );
}
