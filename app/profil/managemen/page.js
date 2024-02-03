import Header_one from "@/components/Header_one";
import Header_two from "@/components/Header_two";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "white", width: "78%", margin: "auto", padding: "20px" }}>
      <Header_one />
      <Header_two />

      <div>
        <h2 className="text-3xl font-bold py-2 mb-2 " style={{ fontFamily: "Montserrat" }}>
          Manajemen dan Dosen
        </h2>

        <strong className="mb-2">MANAJEMEN PROGRAM STUDI PROGRAM PROFESI INSINYUR</strong>
        <p>
          <strong className="mb-2">Ketua Program Studi:</strong> Ir. I Made Yulistya Negara, ST, M.Sc, IPM
          <br />
          <strong className="mb-2">Sekretaris Program Studi:</strong> Ir. Defry Agatha Ardianta, S.T., M.T, IPM
        </p>

        <h3 className="py-4">
          <strong>DOSEN PENGAJAR</strong>
        </h3>
        <ul className="list-decimal mb-2 pl-12">
          <li className="mb-2">Ir. Patdono Suwignjo, M.Eng, IPU</li>
          <li className="mb-2">Ir. Moses L. S., M.Sc, M.Reg.Sc, Ph.D, IPU</li>
          {/* Add more Dosen Pengajar here */}
        </ul>

        <h3 className="py-4">
          <strong>DOSEN TIDAK TETAP/PEMBIMBING LAPANGAN</strong>
        </h3>
        <ul className="list-decimal mb-2 pl-12">
          <li className="mb-2">
            <strong>Djoko Sukalisno K., Dipl.HE, PU-SDA, ACPE</strong> [BBWS Brantas]
          </li>
          <li className="mb-2">
            <strong>Unggul Cariawan, M.Econ, IPM</strong> [PT. Jasa Marga (Persero) Tbk.]
          </li>
          <li className="mb-2">
            <strong>Firnandi Imawan, IPM </strong> [PT. XL Axiata, Tbk]
          </li>
          <li className="mb-2">
            <strong>Herwanto Budi Sardjono, IPM</strong> [PT. JAYA CM]
          </li>
          <li className="mb-2">
            <strong>Tito Ari Bawono, IPM</strong> [PT. Jaya Kontruksi M.P, Tbk]
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}
