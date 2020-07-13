import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Location } from '@styled-icons/ionicons-sharp';

import colors from "../../theme/colors";

const Avatar = styled.div`
    width: 64px;
    height: 64px;
    overflow: hidden;
    border-radius: 64px;
    
    img {
        display: block;
        width: 100%;
        height: auto;
    }
`;

const Categories = styled.div`
    font-size: 11px;
    padding-top: 10px;
    color: ${colors.white};
`;

const Container = styled.div`
    padding: 60px;
    background: ${colors.darkGrey};
`;

const Description = styled.div`
    padding-top: 30px;
    padding-left: 84px;
    padding-right: 84px;
    color: ${colors.silverGrey};
`;

const FullName = styled.div`
    color: ${colors.white};
    font-size: 17px;
    font-weight: bold;
`;

const Header = styled.div`
    display: flex;
`;

const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
`;

const CityIcon = styled(Location)`
    color: ${colors.silverGrey};
`;

const CityName = styled.div`
    color: ${colors.silverGrey};
    padding-left: 10px;
`;

const CityWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 11px;
    color: ${colors.silverGrey};
    padding-top: 10px;
`;

const Photos = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`;

const PhotoLink = styled(Link)`
    display: block;
`;

const Photo = styled.div`
    flex-basis: 20%;
    padding: 10px;

    img {
        display: block;
        width: 100%;
        height: auto;
    }
`;

export {
    Avatar,
    Categories,
    Container,
    Description,
    FullName,
    Header,
    Information,
    CityIcon,
    CityName,
    CityWrapper,
    Photos,
    PhotoLink,
    Photo
};