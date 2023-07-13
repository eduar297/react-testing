import { StoreProvider } from './contexts';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components';

import routes from './routes';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
