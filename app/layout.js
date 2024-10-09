import "./globals.css";
import { montserrat } from "./ui/fonts";
import Navbar from "./navigation/navbar";
import Cover from "./components/page"
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar/>
        <Cover/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
