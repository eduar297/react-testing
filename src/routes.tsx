import { FetchExample, FormExample, Home, Test } from './pages';

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
    path: '/fetch-example',
    element: <FetchExample />,
  },
  {
    path: '/form-example',
    element: <FormExample />,
  },
];

export default routes;
