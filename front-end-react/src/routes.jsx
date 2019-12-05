import Card from "./cards/Cards.jsx";
import cadastrarClientes from "./components/cadastrarClientes.jsx";
import cadastrarImoveis from "./components/cadastrarImoveis.jsx";
import visualizaClientes from "./components/visualizaClientes.jsx";
import visualizaImoveis from "./components/visualizaImoveis.jsx";

const routes = [
  {
    path: "/",
    exact: true,
    component: Card
  },
  {
    path: "/cadastrarClientes",
    component: cadastrarClientes
  },
  {
    path: "/cadastrarImoveis",
    component: cadastrarImoveis
  },
  {
    path: "/visualizaClientes",
    component: visualizaClientes
  },
  {
    path: "/visualizaImoveis",
    component: visualizaImoveis
  }
];

export default routes;
