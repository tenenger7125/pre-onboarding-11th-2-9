import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Home = () => {
  return (
    <SLayout>
      <Link to={`/angular/angular-cli/issues`}>angular</Link>
      <Link to={`/facebook/react/issues`}>react</Link>
    </SLayout>
  );
};

const SLayout = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;

  a {
    padding: 10px;
  }
  > a:hover {
    background-color: ${props => props.theme.colors.gray[2]};
  }
`;

export default Home;
