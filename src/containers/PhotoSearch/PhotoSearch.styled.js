import styled from 'styled-components';

import colors from '../../theme/colors';

export const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

export const DropdownContainer = styled.div`
    flex-basis: 40%;
    padding-right: 20px;
`;

export const Submit = styled.button`
    flex-basis: 20%;
    background: ${colors.orange};
    padding: 15px;
    border: 0;
    color: ${colors.white};
    cursor: pointer;
    font-weight: bold;
`;
