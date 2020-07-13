import styled from 'styled-components';
import { Location } from '@styled-icons/ionicons-sharp';

import { Link } from 'react-router-dom';

import colors from '../../theme/colors';

const Container = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    background: ${colors.darkGrey};
`;

const Information = styled.div`
    display: flex;
`;

const LinkToPhotographer = styled(Link)`
    margin-bottom: 10px;
    color: ${colors.orange};
    text-decoration: none;
    
    :hover {
        color: ${colors.white};
    }
`;

const CityIcon = styled(Location)`
    color: ${colors.silverGrey};
`;

const CityName = styled.div`
    padding-left: 10px;
`;

const CityWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 11px;
    color: ${colors.silverGrey};
`;

const Photos = styled.div`
    display: flex;
    margin: 5px -5px -5px -5px;
`;

const PhotoLink = styled(Link)`
    display: block;
    flex-basis: 20%;
    padding: 5px;
    
    img {
        width: 100%;
        height: auto;
    }
`;

const Profile = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 20px;
`;

export {
    Container,
    Information,
    LinkToPhotographer,
    CityIcon,
    CityName,
    Profile,
    CityWrapper,
    Photos,
    PhotoLink
};
