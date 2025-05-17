import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
// https://reactjsexample.com/a-lightweight-production-ready-carousel-for-react/
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Screenshots({ altSectionClass }) {
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
    "a1.png",
    "a2.png",
    "a3.png",
    "a4.png",
    "a5.png",
    "a6.png",
    "a7.png",
    "a8.png",
    "a9.png",
    "a10.png",
   
  ];
  let imagesIOs = [
    "i1.png",
    "i2.png",
    "i3.png",
    "i4.png",
    "i5.png",
    "i6.png",
    "i7.png",
    "i8.png",
    "i9.png",
    "i10.png",

  ];
  const [android, setAndroid] = useState(true);

  return (
    <section className={clsx('section', altSectionClass)}>
      <div className='container'>
        <div className='row'>
          <h5 className='index-title padding-horiz--md text--left col col--4'></h5>
          <div className='col col--4' />
          <div className='col col--4' >
            <ul className="tabs tabs--block">
              <li className={clsx({"tabs__item": true, "flex-1": true, "tabs__item--active": android })} 
                  onClick={() => setAndroid(true)}>Android</li>
              <li className={clsx({ "tabs__item": true, "flex-1": true, "tabs__item--active": !android })} 
                  onClick={() => setAndroid(false)}>iOS</li>
            </ul>
          </div>
        </div>
        <Carousel responsive={responsive} autoPlay={false}
          itemClass="carousel-item-padding-10-px" className='padding-vert--md padding-horiz--md'>
          {(android ? imagesAndroid : imagesIOs).map((e) => {
            return <div key={e}>
              <img src={require('@site/blog/2023-07-12-raster-maps/carousel/' + e).default} />
            </div>
          })} 

        </Carousel>
      </div>
    </section>
  );
}
