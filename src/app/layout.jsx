import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/src/app/globals.scss";
import Footer from "@/src/app/layout/footer";
import Header from "@/src/app/layout/header";
import TopBar from "@/src/app/layout/topbar";
import { Toaster } from "react-hot-toast";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "",
    description:
      "",
    url: "/",
    siteName: " Circadian Insurance Brokers",
    locale: "en_US",
    type: "website",
    images: "#",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
