import React from 'react';
import { Row as _Row } from 'react-bootstrap';

interface RowProps {
  className?: string;
  children: React.ReactNode;
}

const Row = ({ children, className }: RowProps) => {
  return <_Row className={className}>{children}</_Row>;
};

export default Row;
