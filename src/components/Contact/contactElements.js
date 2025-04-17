import styled from 'styled-components'
import colors from '../../colors'

export const InfoContainer = styled.div`
    color : #fff;
    background: ${colors.tan};
    display: flex;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 6px 0;
    }
`
 
export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 890px;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 0 16px; // Add some breathing room on mobile
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {    
        grid-template-areas: 
            'col1'
            'col2'; 
        grid-template-columns: 1fr;
    }`

export const Column1 = styled.div`
    margin-bottom: 10px;
    padding: 0 15px;
    grid-area: col1;
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically */
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 100%; // Full width on mobile
        padding: 0 10px; // Less padding for mobile
    }
`

export const Column2 = styled.div`
    margin-bottom: 10px;
    padding: 0 15px;
    grid-area: col2;
    display: flex;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 100%; // Full width on mobile
        padding: 0 50px; // Less padding for mobile
    }
`

export const EmailWrap = styled.div`
    max-width: 555px;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically */
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        margin-top: 10px;
        max-width: 100%; 
        max-height: 30%;
        justify-content: center;
    }
`

export const EmailA = styled.a`
    font-size: clamp(24px, 4vw, 48px); 
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    color: ${colors.primary};

    &:hover {
        color: ${colors.black};
        transition: 0.3s ease-in-out;
    }
`


export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;   

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const Form = styled.form` 
    background: ${colors.darkBrown};
    display: flex;
    flex-direction: column;
    max-width: 600px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    padding: 60px 100px;

    @media screen and (max-width: 922px) {
        transition: 0.9s ease-in-out;
        padding: 40px 70px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: ${colors.lightBrown};
    font-size: 45px;
    font-weight: 400;
    text-align: center;
`

export const FormH2 = styled.h2`
    margin-bottom: 40px;
    color: ${colors.lightBrown};
    font-size: 40px;
    font-weight: 400;
    text-align: center;

@media screen and (max-width: 922px) {
  display: none;
}
`

export const FormLabel = styled.label`
    margin-bottom: 8px; 
    font-size: 21px;
    color: ${colors.lightBrown};
`

export const FormInput = styled.input`
    background: ${colors.lightBrown};
    color: ${colors.darkBrown};
    padding: 8px;
    width: 100%;
    min-width: 150px;
    margin-bottom: 32px;
    border: none;
`

export const Text = styled.p` 
    text-align: left;
    margin-top: 24px;
    color: ${colors.primaryDark};
    font-size: 32px;
`

export const Spacer = styled.div`
  height: 16px;
  width: 100%;
`;

export const FormTextArea = styled.textarea`
    background: ${colors.lightBrown};
    color: ${colors.darkBrown};
    resize: none;
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    height: 120px;
`
