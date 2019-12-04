import Card from "./cards/Cards.jsx";
import cadastrarClientes from "./components/cadastrarClientes.jsx";
import cadastrarImoveis from "./components/cadastrarImoveis.jsx";
import visualizaClientes from "./components/visualizaClientes.jsx";
import visualizaCasas from "./components/visualizaCasas.jsx";
import visualizaApartamentos from "./components/visualizaApartamentos.jsx";
import visualizaStudios from "./components/visualizaStudios.jsx";

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
    path: "/visualizaCasas",
    component: visualizaCasas
  },
  {
    path: "/visualizaApartamentos",
    component: visualizaApartamentos
  },
  {
    path: "/visualizaStudios",
    component: visualizaStudios
  }
];

export default routes;
