import React from 'react';
import { Accordion } from 'react-bootstrap';

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
  return <Accordion.Header className={className}>{children}</Accordion.Header>;
};

export default Header;
