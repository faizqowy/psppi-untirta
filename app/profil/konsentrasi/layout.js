import { Inter } from "next/font/google";
import { Nunito_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Konsentrasi Pembimbingan - PSPPI Untirta",
  description: "Konsentrasi Pembimbingan Program Profesi Insinyur Untirta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
