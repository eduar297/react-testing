// Layout.tsx
import React from 'react';

import { Container } from 'reactstrap';

import { Navbar } from '../index';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="m-3 border-dashed border-primary-subtle">{children}</div>
      </Container>
    </>
  );
}

export default Layout;
