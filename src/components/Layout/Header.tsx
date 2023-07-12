import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { PATH } from '@/constants/path';

const Header = () => {
  return (
    <SHeader>
      <Link to={PATH.HOME}>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="24" fontFamily="Arial">
            dongyu
          </text>
        </svg>
      </Link>
      <a href="https://github.com/tenenger7125">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="24" fontFamily="Arial">
            깃허브로 가기
          </text>
        </svg>
      </a>
    </SHeader>
  );
};

const SHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
