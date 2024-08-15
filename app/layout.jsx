import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trenda, Social marketplace for individuals and businesses. Top listing for classified ads, bid,  sell and grow your online business",
  description: "Trenda, social marketplace, ecommerce, electronics, ads, shopping, sell, find online, reach million",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


export default MainLayout;