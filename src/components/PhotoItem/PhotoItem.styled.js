import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../theme/colors';

import { Eye, Heart } from '@styled-icons/ionicons-sharp/index';

const Container = styled.div`
  flex-basis: 25%;
  padding: 10px;
`;

const LikesContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LikesIcon = styled(Heart)`
  color: ${colors.silverGrey};
`;

const LikesTitle = styled.div`
  color: ${colors.silverGrey};
  font-size: 10px;
  padding-left: 5px;
`;

const PhotoLink = styled(Link)`
  display: block;
`;

const PhotoImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const PhotoInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${colors.darkGrey};
  position: relative;
`;

const Photographer = styled.div`
  position: absolute;
  top: 0;
  margin-top: -25px;
  left: 50%;
  margin-left: -25px;
  z-index: 99;
`;

const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ViewsIcon = styled(Eye)`
  color: ${colors.silverGrey};
`;

const ViewsTitle = styled.div`
  color: ${colors.silverGrey};
  font-size: 10px;
  padding-left: 5px;
`;

export {
  Container,
  LikesContainer,
  LikesIcon,
  LikesTitle,
  PhotoImage,
  PhotoLink,
  PhotoInformation,
  Photographer,
  ViewsContainer,
  ViewsIcon,
  ViewsTitle,
};
