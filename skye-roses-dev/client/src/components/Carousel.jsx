import React, { useState, useEffect } from "react";
import "../styles/carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import carouselImages from "../carouselImages";

export const Carousel = () => {
  const images = carouselImages.images;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextImage = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const prevImage = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, images.length]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevImage} />

      {images.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={index === idx ? "image" : "image-hidden"}
        />
      ))}

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextImage} />

      <span className="indicators">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={index === idx ? "indicator" : "indicator indicator-inactive"}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;