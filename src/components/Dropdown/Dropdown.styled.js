import styled from "styled-components";
import { CaretDown } from "@styled-icons/ionicons-sharp/index";

import colors from "../../theme/colors";

export const Container = styled.div`
    position: relative;
`;

export const Button = styled.div`
    background: ${colors.darkGrey};
    color: ${colors.silverGrey};
    padding: 20px;
    cursor: pointer;
`;

export const Options = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 999;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
    background: ${colors.darkGrey};
    display: ${({ isOpen }) => isOpen ? 'block' : 'none' };
`;

export const Option = styled.div`
    padding: 10px 20px;
    color: ${colors.silverGrey};
    cursor: pointer;

    &:hover {
        color: ${colors.white};
        background: ${colors.orange};
    }
`;

export const Icon = styled(CaretDown)`
    color: ${colors.silverGrey};
    position: absolute;
    top: 50%;
    margin-top: -6px;
    right: 20px;
`;

export const Overlay = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 899;
`;
