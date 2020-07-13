import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from "../../theme/colors";

const Container = styled.div`
    flex-basis: 25%;
    padding: 10px;
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

export { Container, PhotoImage, PhotoLink, PhotoInformation, Photographer };