import { styled } from 'styled-components';
import { Title } from '@/components';

const Error = () => {
  return (
    <SLayout>
      <Title order={1}>원하시는 페이지를 찾을 수 없습니다.</Title>
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

export default Error;
