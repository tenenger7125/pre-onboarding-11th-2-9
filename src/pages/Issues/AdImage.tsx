import { styled } from 'styled-components';

const AdImage = () => {
  return (
    <SLayout href="https://www.wanted.co.kr/" target="__blank">
      <img
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=130&q=100"
        alt="ad image"
      />
    </SLayout>
  );
};

const SLayout = styled.a`
  height: 50px;
  background-color: ${props => props.theme.colors.white[0]};
  text-align: center;
`;

export default AdImage;
