type SayHiProps = {
  helloText: string;
};

const SayHi = ({ helloText }: SayHiProps) => {
  return <p>{helloText}</p>;
};

export default SayHi;
