import Header_one from "../../components/Header_one";
import Header_two from "../../components/Header_two";
import Footer from "../../components/Footer";

import { IoHomeSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="w-[78%] flex flex-col justify-center">
          <Header_two />
          <section className="p-8 bg-white text-gray-600">
            <div className="flex mb-7">
              <a href="/" className="hover:cursor-pointer">
                <IoHomeSharp className="inline-block text-sm hover:fill-blue-950 duration-300" />
              </a>
              <IoIosArrowForward className="mt-2 inline-block text-sm" />
              <h1 className="text-sm font-bold ml-1 mt-1">Jadwal Kegiatan</h1>
            </div>
            <h1 className="text-3xl font-bold mb-4">Persyaratan Pendaftaran</h1>

            <hr class="lg:w-[100%] w-[100%] h-0.5 mx-auto my-2 bg-gray-50 border border-gray-0 rounded md:my-6 dark:bg-gray-300" />

            <blockquote className="text-xl italic">
              <p class="text-justify">
                "Persyaratan pendaftaran juga dapat di lihat pada website{" "}
                <strong>smits.its.ac.id</strong>
              </p>
            </blockquote>
            <hr class="lg:w-[100%] w-[100%] h-0.5 bg-gray-50 border border-gray-0 rounded my-6 dark:bg-gray-300 mb-0" />
            <p class="mb-2">
              Peminat Program Profesi Insinyur Institut Teknologi Sepuluh
              Nopember (ITS) Surabaya wajib memenuhi persyaratan sebagai berikut
              :
            </p>

            <ul className="list-decimal pl-10 my-4 mb-2">
              <li>
                Berlatar belakang Sarjana (S1) bidang teknik, sarjana terapan
                bidang teknik, sarjana pendidikan bidang teknik, atau sarjana
                bidang sains, yang didapat dari perguruan tinggi yang
                terakreditasi.
              </li>
              <li>Mendaftar untuk mengikuti pendidikan profesi insinyur</li>
              <li>
                Sehat jasmani, rohani, bebas narkotika, psikotropika, dan zat
                adiktif.
              </li>
              <li>
                Telah memiliki pengalaman kerja dalam praktik bidang
                keinsinyuran paling sedikit 2 (dua) tahun.
              </li>
              <li>
                Syarat khusus untuk sarjana pendidikan bidang teknik atau sains
                yaitu telah melakukan program penyetaraan dengan sarjana bidang
                teknik atau sarjana terapan bidang teknik setelah berpengalaman
                kerja di bidang keinsinyuran paling sedikit 3 (tiga) tahun; atau
                memiliki pengalaman kerja keinsinyuran lebih dari 5 (lima)
                tahun.
              </li>
              <li>
                Pengalaman kerja dibuktikan dengan surat pengalaman kerja dari
                masing-masing lembaga tempat yang bersangkutan bekerja.
              </li>
              <li>
                Bidang studi yang tercantum pada ijazah Sarjana/ Sarjana
                Terapan/ Diploma IV ada dalam list Konsentrasi Pembimbingan
                PSPPI ITS.
              </li>
            </ul>

            <p className="mb-2">
              Persyaratan Pendaftaran PSPPI ITS dengan menyertakan dokumen
              sebagai berikut:
            </p>

            <ul className="list-decimal pl-10 my-2">
              <li>Foto copy Ijazah Sarjana/ Sarjana Terapan/ Diploma IV</li>
              <li>Foto copy Transkrip Sarjana/ Sarjana Terapan/ Diploma IV</li>
              <li>
                Surat Keterangan Pengalaman Kerja dari Instansi/Perusahaan
                minimal selama minimal 2 tahun
              </li>
              <li>Foto copy KTP</li>
              <li>
                Surat Keterangan Berbadan Sehat untuk mengikuti kuliah PSPPI ITS
              </li>
              <li>Foto berwarna 4×6 cm sebanyak 3 (tiga) lembar.</li>
              <li>Bukti pelunasan biaya pendaftaran program.</li>
            </ul>
            <p>
              Surat pernyataan kesediaan mengikuti PSPPI ITS dan Surat
              pernyataan keaslian dokumen.
            </p>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
