import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./i18n"; // import config-ka i18n
import Team from "./components/Team/Team.tsx";
import App from "./App.tsx";
import { MyLayout } from "./Layout.tsx";
import Pricing from "./components/Pricing/Pricing.tsx";
import Features from "./components/Features/Features.tsx";
import Careers from "./components/Careers/Careers.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route index element={<App />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/jobs" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
