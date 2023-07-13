import { FormExample, Home, Test } from './pages';

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
    element: <h1>Fetch example</h1>,
  },
  {
    path: '/form-example',
    element: <FormExample />,
  },
];

export default routes;
