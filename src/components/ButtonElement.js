import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import colors from '../colors'

export const Button = styled(LinkRouter)`
    border-radius: 50px;
    white-space: nowrap;
 color: ${({ colorLight }) => colorLight ? colors.white : colors.black};
    text-decoration: underline;
    cursor: pointer;
    display: flex;

    &:hover {
        transition: all 0.2s ease-in-out;
        font-weight: bold;
        color: ${colors.primary};
    }
`