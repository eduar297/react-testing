import { Card as _Card } from 'react-bootstrap';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return <_Card className={className}>{children}</_Card>;
};

export default Card;
