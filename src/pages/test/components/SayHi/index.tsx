type SayHiProps = {
  helloText: string;
};

const SayHi = ({ helloText }: SayHiProps) => {
  return <h1>{helloText}</h1>;
};

export default SayHi;
