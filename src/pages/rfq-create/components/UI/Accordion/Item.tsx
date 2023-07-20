import React from 'react';
import { Accordion } from 'react-bootstrap';

interface ItemProps {
  eventKey: string;
  className?: string;
  children: React.ReactNode;
}

const Item = ({ eventKey, className, children }: ItemProps) => {
  return (
    <Accordion.Item className={className} eventKey={eventKey}>
      {children}
    </Accordion.Item>
  );
};

export default Item;
