import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "./sass/main.scss"; //sass the main css
import "./sass/tailwind.css"; //tailwind css
import AppRouter from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <AppRouter />
    </PrimeReactProvider>
  </StrictMode>
);
