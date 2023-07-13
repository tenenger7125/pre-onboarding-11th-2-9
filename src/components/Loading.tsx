import { styled } from 'styled-components';

const Loading = () => {
  return (
    <SLayout>
      <img src="/images/ballTriangle.svg" alt="loading image" />
    </SLayout>
  );
};

const SLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default Loading;
