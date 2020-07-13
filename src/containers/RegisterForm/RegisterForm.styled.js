import styled from 'styled-components';

import colors from '../../theme/colors';

const Container = styled.div`
  min-width: 300px;
`;

const Title = styled.div`
  color: ${colors.white};
  font-size: 17px;
  text-align: center;
  font-weight: bold;
`;

const Row = styled.div`
  margin-top: 20px;
`;

export { Container, Row, Title };
