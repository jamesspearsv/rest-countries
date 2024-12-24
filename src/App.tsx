import { Outlet } from "react-router";
import TitleBar from "./components/TitleBar";

export default function App() {
  return (
    <main>
      <TitleBar />
      <Outlet />
    </main>
  );
}
