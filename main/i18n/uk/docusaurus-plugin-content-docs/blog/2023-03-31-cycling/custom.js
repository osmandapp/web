import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
// https://reactjsexample.com/a-lightweight-production-ready-carousel-for-react/
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CyclingShots({ altSectionClass }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2048 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2048, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 720, min: 480 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };
  let imagesAndroid = [
    "prpo1.png",
    "prpo2.png",
    "prpo3.png",
    "prpo4.png",
   
  ];
  let imagesIOs = [
    "ios-1s.png",
    "ios-2s.png",
    "ios-3s.png",
    "ios-4s.png",
    "ios-5s.png",
    "ios-6s.png",
    "ios-7s.png",
    "ios-8s.png",
    "ios-9s.png",
    "ios-10s.png",
  ];
  const [android, setAndroid] = useState(true);

  return (
    <section className={clsx('section', altSectionClass)}>
      <div className='container'>
       
        <Carousel responsive={responsive} autoPlay={false}
          itemClass="carousel-item-padding-10-px" className='padding-vert--md padding-horiz--md'>
          {(android ? imagesAndroid : imagesIOs).map((e) => {
            return <div key={e}>
              <img src={require('@site/blog/2023-03-31-cycling/' + e).default} />
            </div>
          })}

        </Carousel>
      </div>
    </section>
  );
}
