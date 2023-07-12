import { StoreProvider } from './contexts';

import { Test } from './pages';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Test />
    </StoreProvider>
  );
};

export default App;
