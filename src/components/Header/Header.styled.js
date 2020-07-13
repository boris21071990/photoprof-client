import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '../../theme/colors';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${colors.dimGrey};
`;

export const LogoContainer = styled.div`
    width: 300px;
    height: 80px;
`;

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const NavigationLink = styled(Link)`
    color: ${colors.silverGrey};
    text-decoration: none;
    margin: 0 10px;
    
    :hover {
        color: ${colors.white}
    }
`;
