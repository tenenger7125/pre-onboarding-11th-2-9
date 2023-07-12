import { styled } from 'styled-components';

type AdImageProps = {
  imgURL: string;
  linkTo: string;
};

const AdImage = ({ imgURL, linkTo }: AdImageProps) => {
  return (
    <SLayout href={linkTo} target="__blank">
      <img src={imgURL} alt="ad image" />
    </SLayout>
  );
};

const SLayout = styled.a`
  height: 50px;
  background-color: ${props => props.theme.colors.white[0]};
  text-align: center;
`;

export default AdImage;
