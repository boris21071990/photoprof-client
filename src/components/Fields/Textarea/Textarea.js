import styled, { css } from 'styled-components';

import colors from "../../../theme/colors";

const Textarea = styled.textarea`
    background: ${colors.darkGrey};
    padding: 15px;
    border: 0;
    color: ${colors.white};
    min-height: 150px;
    ${props => props.fullWidth && css`
        width: 100%;
    `}
`;

export default Textarea;
