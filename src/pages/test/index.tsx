import { useEffect } from 'react';

import { useStore } from '../../hooks';

import { SayHi } from './components';

const Test: React.FC = () => {
  const { helloText, setHelloText } = useStore();

  useEffect(() => {
    setHelloText('Hello World!!!');
  }, []);

  return <SayHi helloText={helloText} />;
};

export default Test;
