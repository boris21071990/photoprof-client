import styled from 'styled-components';

import colors from "../../theme/colors";

export const Wrapper = styled.div`
    display: flex;
`;

export const Page = styled.span`
    display: block;
    margin-right: 10px;
    padding: 10px 15px;
    color: ${colors.white};
    background: ${colors.darkGrey};
    cursor: pointer;
`;

export const CurrentPage = styled.span`
    display: block;
    margin-right: 10px;
    padding: 10px 15px;
    color: ${colors.white};
    background: ${colors.orange};
`;
