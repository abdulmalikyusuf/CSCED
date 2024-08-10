import { Outlet } from "react-router-dom";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

function RootLayout() {
  return (
    <>
      <Banner />
      <Header />
      <main className="bg-white min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
