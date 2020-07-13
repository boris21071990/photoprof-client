import styled from 'styled-components';
import colors from "../../theme/colors";

const Wrapper = styled.div`
    display: flex;
    background: ${colors.darkGrey};
`;

const PhotoContainer = styled.div`
    flex-basis: 50%;
    
    img {
        display: block;
        width: 100%;
    }
`;

const InformationContainer = styled.div`
    flex-basis: 50%;
`;

export {
    PhotoContainer,
    InformationContainer,
    Wrapper
};
