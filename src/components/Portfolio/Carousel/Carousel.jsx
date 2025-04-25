import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import carouselImages from "./data";
import { CarouselContainer, CarouselWrapper, CarouselTrack, Handle } from "./CarouselElements";
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io";


function Carousel() {
  const [cards] = useState([
    ...carouselImages,
    ...carouselImages,
    ...carouselImages
  ]);

  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const middleIndex = Math.floor(cards.length / 2);

  const cardsPerSet = carouselImages.length;
  const currentIndex = Math.round(-translateX / cardWidth);
  console.log("Current Portfilio Card Index"+currentIndex)

  useEffect(() => {
    if (cardRef.current && trackRef.current) {
      const cardW = cardRef.current.offsetWidth;
      setCardWidth(cardW);

      const containerWidth = trackRef.current.offsetWidth;
      const centerOffset = (cardW * middleIndex) - (containerWidth / 2) + (cardW / 2);
      setTranslateX(-centerOffset);
    }
  }, [cards, middleIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (trackRef.current) {
        centerCarousel(trackRef.current);
      }
    };

    window.addEventListener('resize', handleResize);
  } );

  const centerCarousel = (track) => {
    if (cardRef.current && trackRef.current) {
      const cardW = cardRef.current.offsetWidth;
      setCardWidth(cardW);
  
      requestAnimationFrame(() => {
        const containerWidth = trackRef.current.offsetWidth;
        const centerOffset = (cardW * middleIndex) - (containerWidth / 2) + (cardW / 2);
  
        setTimeout(() => {
          track.style.transition = "none";
          setTranslateX(-centerOffset);
        }, 300);
      });
    }
  };

  const handleClick = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "transform 0.3s ease";
  
    const offset = direction === 1 ? -cardWidth : cardWidth;
    setTranslateX(prev => prev + offset);
  
    if (currentIndex === Math.floor(cardsPerSet/2)|| currentIndex === Math.floor((cardsPerSet/2))+(2*cardsPerSet)-2){
      centerCarousel(track)
    }
  };

  return (
    <CarouselContainer>
      <Handle onClick={() => handleClick(0)}><IoMdArrowDropleft/></Handle>

      <CarouselWrapper>
        <CarouselTrack
          ref={trackRef}
          style={{
            transform: `translateX(${translateX}px)`
          }}
        >
          {cards.map((card, index) => (
              <Card
                ref={index === 0 ? cardRef : null}
                key={index}
                prop={card.img}
                description={card.description}
                button={card.button}
                header={card.header}
              />
          ))}
        </CarouselTrack>
      </CarouselWrapper>

      <Handle onClick={() => handleClick(1)}><IoMdArrowDropright/></Handle>
    </CarouselContainer>
  );
}

export default Carousel;


