import { Card } from 'react-bootstrap';

interface FooterProps {
  className?: string;
  children: React.ReactNode;
}

const Footer = ({ className, children }: FooterProps) => {
  return <Card.Footer className={className}>{children}</Card.Footer>;
};

export default Footer;
