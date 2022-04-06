import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
// https://reactjsexample.com/a-lightweight-production-ready-carousel-for-react/
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Screenshots() {
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
    "promo-1s.png",
    "promo-2s.png",
    "promo-3s.png",
    "promo-4s.png",
    "promo-5s.png",
    "promo-6s.png",
    "promo-7s.png",
    "promo-8s.png",
    "promo-9s.png",
    "promo-10s.png"
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
    <section>
      <div className='container padding-vert--md'>
        <div className='row'>
          <h1 className='index-title padding-horiz--md text--left col col--4'>Screenshots</h1>
          <div className='col col--4' />
          <div className='col col--4' >
            <ul className="tabs tabs--block">
              <li className={clsx({ "tabs__item": true, "tabs__item--active": android })} 
                  onChange={() => setAndroid(true)}>Android</li>
              <li className={clsx({ "tabs__item": true, "tabs__item--active": !android })} 
                  onChange={() => setAndroid(false)}>iOS</li>
            </ul>
          </div>
        </div>
        <Carousel responsive={responsive} autoPlay={false}
          itemClass="carousel-item-padding-10-px" className='padding-vert--md padding-horiz--md'>
          {(android ? imagesAndroid : imagesIOs).map((e) => {
            return <div key={e}>
              <img src={require('@site/static/img/promo/' + e).default} />
            </div>
          })}

        </Carousel>
      </div>
    </section>
  );
}
