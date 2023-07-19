import { PokemonExample, FormExample, Home, Test, RfqCreate } from './pages';

type TRoute = {
  name: string;
  path: string;
  element: JSX.Element;
  children?: TRoute[];
};

type TBasicRouter = 'home' | 'test' | 'pokemonExample' | 'formExample';

type TPageRouter = 'rfq';

const basicsRouter: Record<TBasicRouter, TRoute> = {
  home: {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  test: {
    name: 'Test',
    path: '/test',
    element: <Test />,
  },
  pokemonExample: {
    name: 'Pokemon example',
    path: '/pokemon-example',
    element: <PokemonExample />,
  },
  formExample: {
    name: 'Form example',
    path: '/form-example',
    element: <FormExample />,
  },
};

const pagesRouter: Record<TPageRouter, TRoute> = {
  rfq: {
    name: 'rfq',
    path: '/rfq-create',
    element: <RfqCreate />,
  },
};

const basicsRouterArray = Object.values(basicsRouter);
const pagesRouterArray = Object.values(pagesRouter);

export { basicsRouter, pagesRouter, basicsRouterArray, pagesRouterArray };
