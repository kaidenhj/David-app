import styled from 'styled-components';
import colors from '../../colors';

export const Container = styled.div`
    min-height: 692px;
    max-height: 1400px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: ${colors.tan};
`

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
