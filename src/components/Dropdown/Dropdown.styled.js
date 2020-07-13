import styled from "styled-components";
import { CaretDown } from "@styled-icons/ionicons-sharp/index";

import colors from "../../theme/colors";

const Container = styled.div`
    position: relative;
`;

const Button = styled.div`
    background: ${colors.darkGrey};
    color: ${colors.silverGrey};
    padding: 20px;
    cursor: pointer;
`;

const Options = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 999;
    background: ${colors.darkGrey};
    display: ${({ isOpen }) => isOpen ? 'block' : 'none' };
`;

const Option = styled.div`
    padding: 10px 20px;
    color: ${colors.silverGrey};
    cursor: pointer;
`;

const Icon = styled(CaretDown)`
    color: ${colors.silverGrey};
    position: absolute;
    top: 50%;
    margin-top: -6px;
    right: 20px;
`;

export {
    Button,
    Container,
    Icon,
    Options,
    Option
};