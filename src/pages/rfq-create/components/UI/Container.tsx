import { Container as _Container } from 'react-bootstrap';

interface ContainerProps {
  fluid?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Container = ({ fluid, className, children }: ContainerProps) => {
  return (
    <_Container fluid={fluid} className={className}>
      {children}
    </_Container>
  );
};

export default Container;
