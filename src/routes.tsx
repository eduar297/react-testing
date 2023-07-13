import { PokemonExample, FormExample, Home, Test } from './pages';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/pokemon-example',
    element: <PokemonExample />,
  },
  {
    path: '/form-example',
    element: <FormExample />,
  },
];

export default routes;
