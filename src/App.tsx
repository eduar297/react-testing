import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components';

import { basicsRouterArray, pagesRouterArray } from './routes';
import { StoreProvider } from './contexts';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {basicsRouterArray.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={route.element}
              />
            ))}
            {pagesRouterArray.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
