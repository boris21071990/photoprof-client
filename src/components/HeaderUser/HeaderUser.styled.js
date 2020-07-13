import styled from 'styled-components';

import colors from '../../theme/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const LogoutButton = styled.div`
  cursor: pointer;
  padding: 12px;
  margin: 0 10px;
  background: ${colors.grey};
  color: ${colors.silverGrey};
  border-radius: 3px;
`;
