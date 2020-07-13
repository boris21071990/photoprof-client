import styled from 'styled-components';

import colors from '../../theme/colors';

export const Row = styled.div`
    margin-top: 20px;
    
    &:first-child {
        margin-top: 0;
    }
`;

export const AvatarContainer = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
`;

export const AvatarImage = styled.img`
    width: 100%;
    height: auto;
`;
