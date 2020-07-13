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

export const Row = styled.div`
    margin-top: 20px;
    
    &:first-child {
        margin-top: 0;
    }
`;

export const AvatarContainer = styled.div`
    width: 100px;
    height: 100px;
    cursor: pointer;
`;

export const AvatarImage = styled.img`
    width: 100%;
    height: auto;
`;

export const PhotosWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const PhotoContainer = styled.div`
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
