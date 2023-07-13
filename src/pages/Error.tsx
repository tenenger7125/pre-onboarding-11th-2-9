import { styled } from 'styled-components';
import { Title } from '@/components';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <SLayout>
      <Title order={1}>원하시는 페이지를 찾을 수 없습니다.</Title>
      <SBackButton onClick={() => navigate(-1)}>뒤로가기</SBackButton>
      <SContainer>
        <img alt="404 not found" src="/images/notFound.jpg"></img>
      </SContainer>
    </SLayout>
  );
};

const SLayout = styled.div`
  max-width: 800px;
  padding: 20px 0;
  margin: 0 auto;
  text-align: center;
`;

const SContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  img {
    max-width: 100%;
  }
`;

const SBackButton = styled.button`
  width: 200px;
  padding: 10px 20px;
  margin: 10px;

  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.white[0]};

  background-color: ${props => props.theme.colors.blue[6]};
  border: none;
  border-radius: 5px;

  cursor: pointer;
`;

export default Error;
