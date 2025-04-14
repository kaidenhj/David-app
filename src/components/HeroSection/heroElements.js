import styled from 'styled-components'
import colors from '../../colors'


export const HeroContainer = styled.div`
    background: ${colors.tan};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 38px;
    height: 820px;
    position: relative;
    z-index: 1;

    :before {
        conetent: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradiant(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
        linear-gradiant(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`
 
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImgBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: ${colors.black};
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: ${colors.black};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`


export const HeroContent = styled.div`
    z-index: 3;
    bottom: 80px; /* Adjust to move it further up or down */
    left: 40px;  /* Adjust to move it further left or right */
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const HeroH1 = styled.h2`
    color: ${colors.primaryDark};
    font-size: 48px;
    text-align: left;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: ${colors.primary};
    font-size; 24px;
    text-align: left;
    max-width: 1200px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
 `

