import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from "../../theme/colors";

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const NavigationLink = styled(Link)`
    color: ${colors.silverGrey};
    text-decoration: none;
    margin: 0 10px;
    
    :hover {
        color: ${colors.white}
    }
`;

export { Container, NavigationLink }
