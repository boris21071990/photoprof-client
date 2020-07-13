import styled from 'styled-components';
import { Heart } from '@styled-icons/ionicons-sharp/index';

import colors from '../../theme/colors';

const LikesWrapper = styled.div`
  display: flex;
  width: 50px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LikesIcon = styled(Heart)`
  color: ${(props) => (props.liked ? colors.orange : colors.silverGrey)};
`;

const LikesCount = styled.div`
  padding-left: 5px;
  color: ${(props) => (props.liked ? colors.orange : colors.silverGrey)};
`;

export { LikesWrapper, LikesIcon, LikesCount };
