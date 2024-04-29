import { Outlet } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Platform() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "65px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Platform;
