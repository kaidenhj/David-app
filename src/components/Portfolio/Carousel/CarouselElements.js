import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const CarouselTrack = styled.div`
  display: flex;
`;

export const Handle = styled.div`
  font-size: 1.25rem; /* corresponds to 'text-xl' in Tailwind */
  cursor: pointer;
  padding: 0 1rem;
  user-select: none;
  z-index: 10;

  @media (min-width: 768px) {
    font-size: 3rem; /* corresponds to 'md:text-5xl' in Tailwind */
  }
`;
