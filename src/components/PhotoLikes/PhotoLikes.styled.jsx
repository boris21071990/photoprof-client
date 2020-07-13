import styled from 'styled-components';
import { Heart } from "@styled-icons/ionicons-sharp/index";

import colors from "../../theme/colors";

const LikesContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LikesIcon = styled(Heart)`
    color: ${colors.silverGrey};
`;

const LikesTitle = styled.div`
    color: ${colors.silverGrey};
    font-size: 10px;
    padding-left: 5px;
`;

export { LikesContainer, LikesIcon, LikesTitle };
