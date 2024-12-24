import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import TitleBar from "./components/TitleBar";

export default function App() {
  // derive color mode state based on local storage value
  const [colorMode, setColorMode] = useState<"light" | "dark">(() => {
    const item = localStorage.getItem("rc-color-mode");
    if (item != null) {
      // parse item value from local storage
      const mode: "light" | "dark" = JSON.parse(item);
      if (mode === "light" || mode === "dark") return mode;
    }
    return "light";
  });

  // store color mode in local storage when updated
  useEffect(() => {
    localStorage.setItem("rc-color-mode", JSON.stringify(colorMode));
  }, [colorMode]);

  return (
    <main className={colorMode === "dark" ? "darkMode" : "lightMode"}>
      <TitleBar colorMode={colorMode} setColorMode={setColorMode} />
      <Outlet />
    </main>
  );
}
