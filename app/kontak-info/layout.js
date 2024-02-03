import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Kontak & Info - PSPPI Untirta",
  description: "Kontak & Info - PSPPI Untirta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
