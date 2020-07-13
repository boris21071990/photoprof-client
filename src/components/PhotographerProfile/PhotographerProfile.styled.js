import styled from 'styled-components';

import colors from "../../theme/colors";

export const Container = styled.div`
    background: ${colors.dimGrey};
    padding: 30px;
    margin-top: 20px;

    &:first-child {
        margin-top: 0;
    }
`;
