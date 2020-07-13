import styled from 'styled-components';

import colors from '../../theme/colors';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const LoginButton = styled.div`
  cursor: pointer;
  padding: 12px;
  margin: 0 10px;
  background: ${colors.grey};
  color: ${colors.silverGrey};
  border-radius: 3px;
`;

const RegisterButton = styled.div`
  cursor: pointer;
  padding: 12px;
  margin: 0 10px;
  background: ${colors.orange};
  color: ${colors.white};
  border-radius: 3px;
`;

export { Container, LoginButton, RegisterButton };
