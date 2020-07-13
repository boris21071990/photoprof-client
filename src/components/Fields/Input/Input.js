import styled, { css } from 'styled-components';

import colors from "../../../theme/colors";

const Input = styled.input`
    background: ${colors.darkGrey};
    padding: 15px;
    border: 0;
    color: ${colors.white};
    ${props => props.fullWidth && css`
        width: 100%;
    `}
`;

export default Input;
