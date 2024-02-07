import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Persyaratan Pendaftaran - PSPPI Untirta",
  description: "Persyaratan Pendaftaran Program Profesi Insinyur Untirta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
