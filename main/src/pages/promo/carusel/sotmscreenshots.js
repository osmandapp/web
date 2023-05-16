import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
// https://reactjsexample.com/a-lightweight-production-ready-carousel-for-react/
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SotmScreenshots({ altSectionClass }) {
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
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
   
  ];
  let imagesIOs = [
    "ios-1s.png",
    "ios-2s.png",
    "ios-3s.png",
    "ios-4s.png",
    "ios-5s.png",
    "ios-6s.png",
  ];
  const [android, setAndroid] = useState(true);

  return (
    <section className={clsx('section', altSectionClass)}>
      <div className='container'>
        <div className='row'>
          <h3 className='index-title padding-horiz--md text--left col col--4'>Pro features</h3>
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
              <img src={require('@site/src/pages/promo/carusel/' + e).default} />
            </div>
          })} 

        </Carousel>
      </div>
    </section>
  );
}
