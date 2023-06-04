import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/menu";
import Rodape from "componentes/rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        {/*
          NA ROTA "/", A ESTRUTURA A SER RENDERIZADA É:
        <PaginaPadrao>
          <inicio/>
        </PaginaPadrao>
          NA ROTA "/sobremim", A ESTRUTURA A SER RENDERIZADA É:
        <PaginaPadrao>
          <sobremim/>
        </PaginaPadrao>

        */}
        <Route path="*" element={<div>Página não Encontrada</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
