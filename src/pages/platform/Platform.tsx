import { Outlet } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";

function Platform() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "74px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default Platform;
