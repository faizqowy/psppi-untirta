import Header_one from "@/components/Header_one";
import Header_two from "@/components/Header_two";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "white", width: "78%", margin: "auto", padding: "20px" }}>
      <Header_one />
      <Header_two />

      <div>
        <h1 className="text-2xl font-bold py-2 mb-2 ">Konsentrasi Pembimbingan</h1>
        <p className=" mb-4">
          Program Studi Program Profesi Insinyur, Institut Teknologi Sepuluh Nopember (ITS) Surabaya menawarkan konsentrasi pembimbingan dari Program Studi Sarjana (S1), Sarjana Terapan (S1T) atau DIV pada cakupan disiplin teknik
          keinsinyuran berikut ini (PP 25 Tahun 2019):
        </p>

        <ul className="list-decimal mb-2 pl-8">
          <li>Kebumian dan Energi</li>
          <ul className="list-disc mb-2 pl-8">
            <li>Teknik Geofisika</li>
            <li>Teknik Geomatika (dapat pula menerima dari Teknik Geodesi)</li>
          </ul>

          <li>Rekayasa Sipil dan Lingkungan Terbangun</li>
          <ul className="list-disc mb-2 pl-8">
            <li>Teknik Sipil</li>
            <li>Perencanaan Wilayah Kota (dapat pula menerima dari Planologi)</li>
          </ul>

          <li>Industri</li>
          <ul className="list-disc mb-2 pl-8">
            <li>Teknik Mesin</li>
            <li>Teknik Kimia</li>
            <li>Teknik Industri</li>
            <li>Teknik Fisika</li>
            <li>Teknik Material</li>
          </ul>

          <li>Konservasi dan Pengelolaan Sumber Daya Alam</li>
          <ul className="list-disc mb-2 pl-8">
            <li>Teknik Lingkungan (dapat pula menerima dari Teknik Penyehatan)</li>
          </ul>

          <li>Pertanian dan Hasil Pertanian</li>
          <ul className="list-disc mb-2 pl-8">
            <li>(tidak ada di ITS)</li>
          </ul>

          <li>Teknologi Kelautan dan Perkapalan</li>
          <ul className="list-disc mb-2 pl-8">
            <li>Teknik Kelautan</li>
            <li>Teknik Perkapalan</li>
            <li>Teknik Sistem Perkapalan</li>
            <li>Teknik Transportasi Laut</li>
          </ul>

          <li>Aeronotika dan Astronotika – (tidak ada di ITS)</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
