import "./styles/bootstrap.min.css"; 
import "./styles/font-awesome.min.css";
import "./styles/animate.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/dark.css"; 

import { Poppins } from "next/font/google";
import GoTop from "@/components/Common/GoTop";
import DemoSidebar from "@/components/Common/DemoSidebar/DemoSidebar";
import AosAnimation from "@/components/Layout/AosAnimation";
import DarkModeSwitcher from "@/components/Layout/DarkModeSwitcher";

const poppins = Poppins({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"] 
});

export const metadata = {
  title: "Digital Marketing Services - Stacked Marketing",
  description: "Stacked Marketing Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}

        <GoTop />

        <AosAnimation />

        <DarkModeSwitcher />

        {/* <DemoSidebar /> */}
      </body>
    </html>
  );
}
