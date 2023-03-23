import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Accueil from "./Pages/Accueil/Accueil";
import Fiche from "./Pages/Fiche-logement/Fiche";
import APropos from "./Pages/A-propos/APropos";
import Erreur404 from "./Pages/404/404";

function RoutesPath() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<Navigate replace to="/accueil" />} path="/" />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/logement/:id" element={<Fiche />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Erreur404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default RoutesPath;
