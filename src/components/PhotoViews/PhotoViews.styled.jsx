import styled from 'styled-components';
import { Eye } from '@styled-icons/ionicons-sharp';

import colors from "../../theme/colors";

const ViewsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ViewsIcon = styled(Eye)`
    color: ${colors.silverGrey};
`;

const ViewsTitle = styled.div`
    color: ${colors.silverGrey};
    font-size: 10px;
    padding-left: 5px;
`;

export { ViewsContainer, ViewsIcon, ViewsTitle };
