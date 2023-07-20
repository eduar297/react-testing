import { Col as _Col } from 'react-bootstrap';

interface ColProps {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  className?: string;
  children: React.ReactNode;
}

const Col = ({ xs, sm, md, lg, xl, className, children }: ColProps) => {
  return (
    <_Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={className}>
      {children}
    </_Col>
  );
};

export default Col;
