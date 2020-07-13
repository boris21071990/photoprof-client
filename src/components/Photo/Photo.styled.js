import styled from 'styled-components';
import colors from "../../theme/colors";

const Wrapper = styled.div`
    padding: 30px;
    background: ${colors.darkGrey};
`;

const PhotoContainer = styled.div`
    height: 500px;
    text-align: center;
    
    img {
        height: 100%;
        width: auto;
    }
`;

export {
    PhotoContainer,
    Wrapper
};
