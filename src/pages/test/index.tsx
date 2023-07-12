import { useEffect } from 'react';

import { useStore } from '../../hooks';

import { SayHi } from './components';

const Test: React.FC = () => {
  const { helloText, setHelloText } = useStore();

  useEffect(() => {
    setHelloText('Hello World!!!');
  }, []);

  return (
    <div>
      <SayHi helloText={helloText} />
    </div>
  );
};

export default Test;
