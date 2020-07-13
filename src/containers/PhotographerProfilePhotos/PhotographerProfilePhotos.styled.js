import styled from 'styled-components';

import colors from '../../theme/colors';

export const Photos = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const Photo = styled.div`
    flex-basis: 25%;
    padding: 10px;

    img {
        width: 100%;
        height: auto;
    }
`;

export const DropzoneContainer = styled.div`
    padding: 40px;
    border: 1px dashed ${props => props.isDragActive ? colors.orange : colors.silverGrey};
    background: ${colors.darkGrey};
    text-align: center;
    cursor: pointer;
`;

export const DropzoneText = styled.div`
    padding: 5px 0;
    text-align: center;
    color: ${colors.silverGrey};
`;
