import { styled } from 'styled-components';
import { Title } from '@/components';
import { useParams } from 'react-router-dom';

const Header = () => {
  const params = useParams();

  return (
    <SHeader>
      <Title order={2}>{params.org && params.repo ? `${params.org} / ${params.repo}` : 'Git Hub'}</Title>
    </SHeader>
  );
};

const SHeader = styled.header`
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
`;

export default Header;
