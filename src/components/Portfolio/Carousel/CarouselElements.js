import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 40px 0;
`

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  flex-direction: row;
  flex-grow: 1;
`;

export const CarouselTrack = styled.div`
  display: flex;
`;

export const Handle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem; /* corresponds to 'text-xl' in Tailwind */
  cursor: pointer;
  padding: 0 1rem;
  user-select: none;
  z-index: 1;


  @media (min-width: 768px) {
    font-size: 3rem; /* corresponds to 'md:text-5xl' in Tailwind */
  }
`;
