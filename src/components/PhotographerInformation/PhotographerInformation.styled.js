import styled from 'styled-components';

import colors from "../../theme/colors";

const Wrapper = styled.div`
    display: flex;
    padding: 40px;
    background: #232323;
    align-items: center;
`;

const AvatarContainer = styled.div``;

const FullNameContainer = styled.div`
    padding-left: 20px;
    
    a {
        font-size: 17px;
        color: ${colors.silverGrey};
        text-decoration: none;
    }
`;

export {
    Wrapper,
    AvatarContainer,
    FullNameContainer
};