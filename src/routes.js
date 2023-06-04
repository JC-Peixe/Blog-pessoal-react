import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/menu";
import Rodape from "componentes/rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrado from "paginas/NaoEncontrado";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
          <Route path="posts/:id" element={<Post />} />
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
        <Route>

          <Route path="*" element={<NaoEncontrado />} />
          <Route path="/posts/*" element={<NaoEncontrado />} />
        </Route>

      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
