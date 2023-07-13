import { styled } from 'styled-components';
import { Title } from '@/components';
import { useLocation } from 'react-router-dom';

const getTitle = (pathname: string) => {
  const [org, repo] = pathname.split('/').filter((_, i) => i === 1 || i === 2);

  return org && repo ? `${org} / ${repo}` : 'Git Hub';
};

const Header = () => {
  const { pathname } = useLocation();

  return (
    <SHeader>
      <Title order={2}>{getTitle(pathname)}</Title>
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
