import styled from 'styled-components';

const Title = ({ order, line, fz, display, p, children }: TitleProps) => {
  const TitleOrder: keyof JSX.IntrinsicElements = `h${order}`;

  return (
    <STitle as={TitleOrder} $line={line} $fz={fz} $display={display} $p={p}>
      {children}
    </STitle>
  );
};

const STitle = styled.div<Partial<TitleProps>>`
  display: ${props => props.$display};
  padding: ${props => props.$p};
  margin: 10px 0;
  font-size: ${props => props.$fz && `${props.$fz}px`};
  font-weight: 700;

  ${props =>
    props.$line &&
    `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${props.$line};
    overflow: hidden;
    text-overflow: ellipsis;
    `}
`;

Title.defaultProps = {
  order: 2,
  display: 'block',
  p: '0 0',
};

type TitleProps = {
  order: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode | string;
  line?: number;
  $line?: number;
  fz?: number;
  $fz?: number;
  display?: string;
  $display?: string;
  p?: string;
  $p?: string;
};

export default Title;
