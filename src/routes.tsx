import { PokemonExample, FormExample, Home, Test, Page1 } from './pages';

type TRoute = {
  name: string;
  path: string;
  element: JSX.Element;
};

type TBasicRouter = 'home' | 'test' | 'pokemonExample' | 'formExample';

type TPageRouter = 'page1';

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
  page1: {
    name: 'Page 1',
    path: '/pages/page1',
    element: <Page1 />,
  },
};

const router = {
  basicsRouter,
  pagesRouter,
};

const basicsArrayRouter = Object.values(basicsRouter);
const pagesArrayRouter = Object.values(pagesRouter);
const routerArray = [...basicsArrayRouter, ...pagesArrayRouter];

export { router, basicsArrayRouter, pagesArrayRouter, routerArray };
