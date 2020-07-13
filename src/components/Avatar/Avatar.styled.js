import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../../theme/colors';

const AvatarLink = styled(Link)`
  display: block;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: auto;
`;

const AvatarContainer = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
  ${(props) =>
    props.bordered &&
    css`
      border: 5px solid ${colors.darkGrey};
    `}
`;

export { AvatarContainer, AvatarImage, AvatarLink };
