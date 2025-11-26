import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/providers/AuthProvider";
import AuthContextProvider from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Course Lab",
  description: "The Best Online Platform to learn demandable skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins.variable} antialiased gradient-bg`}>
        <AuthProvider>
          <AuthContextProvider>
            <header>
              <Navbar />
            </header>
            <main className="min-h-[calc(100vh-360px)]">
              {children} <Toaster position="top-right" />
            </main>

            <footer>
              <Footer />
            </footer>
          </AuthContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
