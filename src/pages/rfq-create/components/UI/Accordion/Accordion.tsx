import { Accordion as _Accordion } from 'react-bootstrap';

interface AccordionProps {
  defaultActiveKey?: string;
  alwaysOpen?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Accordion = ({
  defaultActiveKey,
  alwaysOpen = false,
  className,
  children,
}: AccordionProps) => {
  return (
    <_Accordion
      className={className}
      defaultActiveKey={defaultActiveKey}
      alwaysOpen={alwaysOpen}
    >
      {children}
    </_Accordion>
  );
};

export default Accordion;
