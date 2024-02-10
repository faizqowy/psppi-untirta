import Header_one from "../components/Header_one";
import Header_two from "../components/Header_two";
import Footer from "../components/Footer";

import { Montserrat } from "next/font/google";

import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Suspense } from "react";



const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-[100%]">
      <Header_one />
      <div className="flex flex-row justify-center">
        <div className="ll:w-[1180px] w-[100%] flex flex-col justify-center">
          <Suspense>
          <Header_two />
          </Suspense>

          <section className="p-8 bg-white text-gray-600">
            <div className="flex mb-6 text-sm">
              <div className="flex pt-[2px] ml-1">
                <a href="/" className="text-blue-500 hover:text-red-600 mr-2">
                  <FaHome />
                </a>
                <IoIosArrowForward className="mr-2" />
              </div>
              <p className="font-bold">Sistem Perkuliahan</p>
            </div>

            <h1 className={"text-3xl font-bold mb-4 " + montserrat.className}>
              Sistem Perkuliahan
            </h1>
            <p>
              Dalam Program Rekognisi Pembelajaran Lampau (RPL) di PSPPI ITS,
              mahasiswa direncanakan menempuh program satu semester dengan beban
              studi 24 SKS. Beban 24 SKS tersebut terbagi pada beberapa Mata
              Kuliah yaitu:
            </p>

            <ul className="list-decimal pl-10 my-4">
              <li>Kode Etik dan Etika Profesi Insinyur (2 sks)</li>
              <li>Profesionalisme (2 sks)</li>
              <li>
                Keselamatan, Kesehatan, Keamanan Kerja dan Lingkungan (2 sks)
              </li>
              <li>Praktek Keinsinyuran (12 SKS)</li>
              <li>Studi Kasus (4 sks)</li>
              <li>Seminar (2 sks)</li>
            </ul>

            <p>Sistem RPL Mata Kuliah Praktek Keinsinyuran (12 SKS):</p>

            <ul className="list-decimal pl-10 my-4">
              <li>
                Setelah calon mahasiswa melakukan pendaftaran, kemudian
                melakukan self assessment dengan cara menjawab pertanyaan secara
                daring. Pertanyaan-pertanyaan tersebut harus dijawab sesuai
                pengalaman yang sudah dilalui setelah selesai pendidikan di
                sarjana/ sarjana terapan/ diploma empat.
              </li>
              <li>
                Selain itu, calon mahasiswa juga harus mengisi portofolio, yang
                berisi kegiatan keinsinyuran sejak lulus sarjana/ sarjana
                terapan bidang teknik. Saat tes wawancara, dokumen self
                assessment dan portofolio kegiatan keinsinyuran tersebut akan
                dikonfirmasi ulang oleh Tim Penguji
              </li>
              <li>
                Tim Penguj memutuskan apakah mahasiswa diterima atau tidak
                menjadi mahasiswa di PSPPI-ITS
              </li>
              <li>
                Proses self assessment, mengisi portfolio kegiatan keinsinyuran
                dan wawancara tersebut merupakan proses Rekognisi Pembelajaran
                Lampau (RPL) di PSPPI-ITS, dan diakui sebagai Mata Kuliah
                Praktek Keinsinyuran (12 SKS).
              </li>
            </ul>

            <p>
              Sistem RPL Mata Kuliah Kode Etik dan Etika Profesi Insinyur (2
              sks), Profesionalisme (2 sks) dan Keselamatan, Kesehatan, Keamanan
              Kerja dan Lingkungan (2 sks):
            </p>

            <ul className="list-decimal pl-10 my-4">
              <li>
                Setelah calon mahasiswa melakukan pendaftaran, kemudian
                melakukan self assessment dengan cara menjawab pertanyaan secara
                daring. Pertanyaan-pertanyaan tersebut harus dijawab sesuai
                pengalaman yang sudah dilalui setelah selesai pendidikan di
                sarjana/ sarjana terapan/ diploma empat
              </li>
              <li>
                Selain proses self assessment tersebut, mahasiswa akan diberi
                pembekalan pada minggu pertama tatap muka, yaitu pada minggu
                ke-1 sesuai kalender akademis ITS. Dalam pembekalan tersebut,
                mahasiswa akan diberi materi yang disertai dengan diskusi di
                dalam kelas. Di akhir pembekalan, mahasiswa akan diberi tugas
                terkait kode etik, profesionalisme dan K3L di tempat kerja
                masing-masing. Contoh bentuk tugas tersebut misalnya melakukan
                evaluasi atas sistem K3L di tempat kerja masing-masing
                mahasiswa, dsb.
              </li>
              <li>
                Pada minggu ke-2 sampai dengan minggu ke-7 mahasiswa dapat
                berkomunikasi secara daring dengan dosen masing-masing, terkait
                tugas pembelajaran tersebut.
              </li>
              <li>
                Pada minggu ke-8 dilaksanakan tatap muka kedua yang kegiatannya
                dapat berupa pembahasan tugas dan/atau evaluasi, tugas lanjutan
                dan diskusi.
              </li>
              <li>
                Pada minggu ke-9 sampai dengan minggu ke-15 mahasiswa dapat
                berkomunikasi secara daring dengan dosen masing-masing, terkait
                tugas pembelajaran tersebut.
              </li>
              <li>Pada minggu ke-16 dilakukan evaluasi akhir.</li>
              <li>
                Hasil dari proses tersebut merupakan bentuk RPL untuk ketiga
                mata kuliah tersebut.
              </li>
            </ul>

            <p>Sistem RPL Mata Kuliah Studi Kasus (4 SKS):</p>

            <ul className="list-decimal pl-10 my-4">
              <li>
                Setelah calon mahasiswa melakukan pendaftaran, kemudian
                melakukan self assessment dengan cara menjawab pertanyaan secara
                daring. Pertanyaan-pertanyaan tersebut harus dijawab sesuai
                pengalaman yang sudah dilalui setelah selesai pendidikan di
                sarjana/ sarjana terapan/ diploma empat.
              </li>
              <li>
                Pada minggu ke-1 mahasiswa akan diberi studi kasus keinsinyuran
                yang harus dikerjakan. Konsultasi studi kasus tersebut dapat
                dilakukan secara daring antara mahasiswa dengan dosen.
              </li>
              <li>
                Minggu ke-16 mahasiswa melakukan presentasi hasil dari studi
                kasus.
              </li>
              <li>
                Hasil dari proses tersebut merupakan bentuk RPL untuk Mata
                Kuliah Studi Kasus tersebut.
              </li>
            </ul>

            <p>Sistem RPL Mata Kuliah Seminar (2 SKS):</p>

            <ul className="list-decimal pl-10 my-4">
              <li>
                Setelah calon mahasiswa melakukan pendaftaran, kemudian
                melakukan self assessment dengan cara menjawab pertanyaan secara
                daring. Pertanyaan-pertanyaan tersebut harus dijawab sesuai
                pengalaman yang sudah dilalui setelah selesai pendidikan di
                sarjana/ sarjana terapan/ diploma empat.
              </li>
              <li>
                Pengakuan mata kuliah ini adalah berupa pengalaman mahasiswa
                melakukan presentasi karya ilmiah pada forum ilmiah di bidang
                keinsinyuran. Sebagai bukti kegiatan tersebut mahasiswa harus
                mengunggah soft copy makalahnya (prosiding) pada proses self
                assessment di atas, disertai data kegiatan seminar, waktu dan
                lokasi kegiatan. Ketentuan lain dari syarat ini adalah bahwa
                mahasiswa harus menjadi penulis pertama dan mempresentasikan
                sendiri makalah tersebut. Apabila mahasiswa pernah melakukan hal
                tersebut maka akan dinilai sebagai bentuk RPL Mata Kuliah
                Seminar (2 sks).
              </li>
              <li>
                Dalam hal mahasiswa tidak memiliki karya ilmiah yang
                diseminarkan, maka presentasi di Mata Kuliah Studi Kasus
                merupakan pengganti dari poin 2 tersebut di atas.
              </li>
              <li>
                Hasil dari proses tersebut merupakan bentuk RPL untuk Mata
                Kuliah Seminar tersebut.
              </li>
            </ul>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
