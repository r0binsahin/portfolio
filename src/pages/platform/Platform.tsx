import { Outlet } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";

function Platform() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Platform;
