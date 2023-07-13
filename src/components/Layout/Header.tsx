import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { Title } from '@/components';

const Header = () => {
  const { org, repo } = useParams();

  return (
    <SHeader>
      <Title order={2}>{org && repo ? `${org} / ${repo}` : 'Git Hub'}</Title>
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
