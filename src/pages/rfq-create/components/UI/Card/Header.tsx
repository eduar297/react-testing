import { Card } from 'react-bootstrap';

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
  return <Card.Header className={className}>{children}</Card.Header>;
};

export default Header;
