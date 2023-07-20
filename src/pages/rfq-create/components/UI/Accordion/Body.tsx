import React from 'react';
import { Accordion } from 'react-bootstrap';

interface BodyProps {
  className?: string;
  children: React.ReactNode;
}

const Body = ({ className, children }: BodyProps) => {
  return <Accordion.Body className={className}>{children}</Accordion.Body>;
};

export default Body;
