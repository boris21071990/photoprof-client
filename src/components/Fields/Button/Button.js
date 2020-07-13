import styled, { css } from 'styled-components';

import colors from '../../../theme/colors';

const Button = styled.button`
  background: ${colors.orange};
  padding: 15px;
  border: 0;
  color: ${colors.white};
  cursor: pointer;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export default Button;
