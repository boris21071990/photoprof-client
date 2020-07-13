import styled from 'styled-components';

import colors from '../../theme/colors';

export const Title = styled.div`
    font-size: 19px;
    font-weight: bold;
    color: ${colors.silverGrey};
    padding: 0 20px;
`;

export const Photographers = styled.div`
    display: flex;
    padding: 20px 10px;
`;

export const Photographer = styled.div`
    padding: 10px;
    flex-basis: 10%;
    
    img {
        width: 100%;
        height: auto;
    }
`;
