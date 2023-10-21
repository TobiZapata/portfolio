import { Sora } from "next/font/google";
import NavBar from "./navBar";
import Footer from "./footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Layout({ children }) {
  return (
    <div
      className={`page bg-fondo dark:bg-fondogris text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Footer />
      <NavBar />
      {children}
    </div>
  );
}
