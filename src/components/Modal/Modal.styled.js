import styled from 'styled-components';

import colors from '../../theme/colors';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999999;
`;

const Container = styled.div`
  padding: 40px;
  background: ${colors.grey};
`;

export { Container, Wrapper };
