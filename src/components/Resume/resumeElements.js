import styled from 'styled-components';
import colors from '../../colors';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    max-height: 1400px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: ${colors.tan};
`

export const Icon = styled(LinkRouter)`
    position: absolute;
    top: 20px; /* Adjust this value as needed */
    left: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    cursor: pointer;


    &:hover {
        color: ${colors.black};
    }

    @media screen and (max-width: 480px) {
        top: 10px;
        left: 16px;
    }
`;

export const PdfIframe = styled.iframe`
  display: block;
  margin: 0 auto;
  margin-top: 50px;
  padding: 50px 0;
  width: 90%;
  height: 800px; 
  border: none; 
  overflow: auto;
`;
