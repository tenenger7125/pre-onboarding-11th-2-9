import { styled } from 'styled-components';
import { Title } from '@/components';
import { useLocation } from 'react-router-dom';
import { pathnames } from '@/utils/pathnames';

const Header = () => {
  const { pathname } = useLocation();
  const { org, repo } = pathnames.getOrgAndRepo(pathname);

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
