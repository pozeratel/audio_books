import { Outlet } from "react-router-dom";
import Headers from "../../Components/Header/Header";

export default function AppLayout() {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
}
