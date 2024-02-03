import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Download - PSPPI Untirta",
  description: "Download - PSPPI Untirta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
