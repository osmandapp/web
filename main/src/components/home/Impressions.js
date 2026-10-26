import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './Impressions.module.css';


const ImpressionsList = [
  {
    url: 'https://www.youtube.com/@Seba.adventure',
    source: 'YouTube',
    name: 'Seba Adventure',
    date: 'October 26, 2026',
    avatar: '/img/impressions/seba-adventure.jpg',
    content: (
      <>
        I take OsmAnd on all my trips. The offline maps work everywhere, even far from any mobile signal, and more than once they got me out of a tough spot when nothing else worked. It's my go-to navigation app for every adventure.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://tech.yahoo.com/apps/articles/switched-google-maps-open-source-124516835.html',
    source: 'How-To Geek',
    name: 'Nick Lewis',
    date: 'April 13, 2026',
    avatar: '/img/impressions/nick-lewis.jpg',
    content: (
      <>
        I switched from Google Maps to an open source alternative and I'm not going back. The privacy model is also vastly superior. The app behaves like a tool you shape to your needs rather than a one-size-fits-all solution.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://www.makeuseof.com/forget-google-maps-this-privacy-focused-navigation-app-better/',
    source: 'MakeUseOf',
    name: 'Bryan M. Wolfe',
    date: 'November 27, 2025',
    avatar: '/img/impressions/bryan-wolfe.jpg',
    content: (
      <>
        OsmAnd's most crucial attribute is that it doesn’t collect user data. It uses OpenStreetMap data to provide highly detailed offline maps that can be stored on your device. OsmAnd provides a solid alternative to Google Maps through its focus on privacy protection.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://play.google.com/store/apps/details?id=net.osmand',
    source: '@google-play',
    name: 'Simon Lyon',
    date: 'November 5, 2025',
    avatar: null,
    content: (
      <>
        Basically awesome. Completely local offline maps that blow Google Maps out the water. With GPS it not only shows the actual building I live in but that my flat is at the rear. Dozens of overlays like bus/train/cycling routes, contour lines, topography, etc.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://www.partireper.it/',
    source: 'partireper.it',
    name: 'Gionata Nencini',
    date: 'May 4, 2022',
    avatar:
      '/img/impressions/gionata-nencini.jpg',
    content: (
      <>
        OsmAnd+ opened to me and to my community/customers the freedom of discovery and scouting we had never experienced before on a motorcycle. I adore and support OsmAnd+ and talk about it during rides I lead, events I organize, books I write, tutorial I executes and workshops I run at Motoviaggio Store. Really glad to be an ambassador for this powerful and useful tool every traveler should have on their devices. Keep up the great work!
       </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://apps.apple.com/app/id934850257',
    source: '@app-store',
    name: 'Pashathelooser',
    date: 'October 21, 2026',
    avatar: null,
    content: (
      <>
        Last update for planning routes is absolutely amazing, screens with segments, switching between move types (it was horrible when you misstap “change to straight line” and ALL your track became a trash, now it’s perfect!!!), all analysis for height, distance is sooo useful! And all for free right on phone without internet. Lots of customisation for appearance is useful too. I appreciate all work you are doing!
      </>
    ),
    showOnHomepage: true,
  },
  
];



function Avatar({name, src}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    const words = name.split(/\s+/);
    const initials = (words.length > 1 ? words[0][0] + words[words.length - 1][0] : words[0][0]).toUpperCase();
    return <div className={clsx('avatar__photo', styles.avatarInitials)}>{initials}</div>;
  }
  return (
    <img
      alt={name}
      className="avatar__photo"
      src={src}
      width="48"
      height="48"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Impressions({ altSectionClass}) {
  let impColumns = [[], [], []];
  ImpressionsList.filter((imp) => imp.showOnHomepage).forEach((imp, i) =>
    impColumns[i % 3].push(imp),
  );
  return (
    <section className={clsx('section', altSectionClass)}>
      <div className="container">
        <h2 className={clsx('margin-bottom--lg', 'text--center')}>
          ❤️ Loved by Customers
        </h2>
        <div className={clsx('row', styles.impressionsSection)}>
          {impColumns.map((imps, ind) => (
            <div className="col col--4" key={ind}>
              {imps.map((i, ind2) => (
                <div className={clsx('card', styles.impression)} key={ind2}>
                  <div className="card__header">
                    <div className="avatar">
                      <Avatar name={i.name} src={i.avatar} />
                      <div className={clsx('avatar__intro', styles.impressionMeta)}>
                        <strong className="avatar__name">{i.name}</strong>
                        <span><a href={i.sourceurl? i.sourceurl : i.url}>{i.source}</a></span>
                      </div>
                    </div>
                  </div>


                  <div className={clsx('card__body', styles.impression)}>{i.content}</div>

                  <div className="card__footer">
                    <a className={styles.impressionMeta} href={i.url}>
                      {i.date}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
