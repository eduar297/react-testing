import React from 'react';
import { Card } from 'react-bootstrap';

interface BodyProps {
  className?: string;
  children: React.ReactNode;
}

const Body = ({ className, children }: BodyProps) => {
  return <Card.Body className={className}>{children}</Card.Body>;
};

export default Body;
