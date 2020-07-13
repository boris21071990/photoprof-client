import styled, { css } from 'styled-components';

import colors from "../../../theme/colors";

const ErrorLabel = styled.div`
    padding-top: 10px;
    color: ${colors.red};
    ${props => props.center && css`
        text-align: center;
    `}
`;

export default ErrorLabel;
