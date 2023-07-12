import { createContext, useState, ReactNode } from 'react';

interface StoreState {
  helloText: string;
  setHelloText: (value: string) => void;
}

export const StoreContext = createContext<StoreState>({
  helloText: '',
  setHelloText: () => {},
});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [helloText, setHelloText] = useState<string>('');

  return (
    <StoreContext.Provider
      value={{
        helloText,
        setHelloText,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
