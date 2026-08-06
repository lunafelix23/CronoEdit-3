import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Agenda from "./pages/Agenda";
import Pendencias from "./pages/Pendencias";
import EditaisList from "./pages/EditaisList";
import NovoEdital from "./pages/NovoEdital";
import EditalDetalhe from "./pages/EditalDetalhe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/editais" element={<EditaisList />} />
          <Route path="/editais/novo" element={<NovoEdital />} />
          <Route path="/editais/:id" element={<EditalDetalhe />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/pendencias" element={<Pendencias />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}