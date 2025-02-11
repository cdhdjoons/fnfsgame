import { Lilita_One } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const lilita = Lilita_One({
  variable: "--font-lilita",
  subsets: ["latin"],
  weight: '400',
});

export const metadata = {
  title: "FUSED N FURIOUS",
  description: "FNFSh_game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black flex justify-center min-h-screen m-0 p-0 ${lilita.className}`} >
        <div className=" w-full max-w-[500px] max-h-[1080px] bg-cover bg-no-repeat relative flex flex-col justify-between overflow-hidden"
          style={{ backgroundImage: `url(/image/BG_fnfs.png)` }}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
