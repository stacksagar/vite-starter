import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as MaterialProvider } from "@material-tailwind/react";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MaterialProvider>
        <App />
      </MaterialProvider>
    </BrowserRouter>
  </StrictMode>
);
