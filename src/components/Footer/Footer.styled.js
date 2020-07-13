import styled from 'styled-components';
import colors from '../../theme/colors';
import {Link} from "react-router-dom";

const FooterWrapper = styled.div`
    margin-top: 20px;
    background: ${colors.dimGrey};
`;

const FooterContainer = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
`;

const FooterColumn = styled.div`
    flex-basis: 50%;
    padding: 40px 20px;
`;

const FooterColumnRow = styled.div`
    padding: 10px 0;
`;

const FooterLink = styled(Link)`
    color: ${colors.silverGrey};
    text-decoration: none;
    
    :hover {
        color: ${colors.white}
    }
`;

const FooterText = styled.div`
    padding: 10px 0;
    color: ${colors.silverGrey};
`;

export {
    FooterWrapper,
    FooterContainer,
    FooterColumn,
    FooterColumnRow,
    FooterLink,
    FooterText
};
