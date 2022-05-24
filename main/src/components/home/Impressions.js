import React from 'react';
import clsx from 'clsx';
import styles from './Impressions.module.css';


const ImpressionsList = [
  {
    url: 'http://youtube.com/c/creedaz',
    source: 'YouTube',
    name: 'Manav (Creedaz)',
    date: 'May 11, 2022',
    avatar:
      'https://i.imgur.com/UtVMWqB.jpeg',
    content: (
      <>
        I am mapping the trails in the Indian Himalayas. The various topo layers in OsmAnd help me understand the terrain. Further, the wide range of plugins (contour lines, hill shades, slopes, Open Street Map editing) has made OsmAnd my daily driver for hiking and trail running. The map markers and OSM Notes help me plan my week long hiking traverses and I can also overlay digitised maps for cross referencing. I also use the desktop editor to map hiking routes, high altitude glacial lake, mountain passes, peaks, and POIs (spring, shelters, waterfalls, cairn, campsites etc).
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://apps.apple.com/pl/app/osmand-maps-travel-navigate/id934850257?l',
    source: '@app-store',
    name: 'Jan Iłowski',
    date: 'Jule 15, 2021',
    avatar:
      'https://pbs.twimg.com/profile_images/1497225853931040769/5mXZAHFR_400x400.jpg',
    content: (
      <>
        Best maps application for privacy, however the UI could use some work
The idea of computing all the routes on my device locally is absolutely wonderful. The app has great functions overall, however it has a steep learning curve. I could see many people used to Google/Apple Maps struggle to make the switch because of convenience, even if OSM offers superior functionality and more precise information.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://www.bestapp.com/best-navigation-apps/',
    source: 'www.bestapp.com',
    sourceurl: 'https://www.bestapp.com/',
    name: 'bestapp.com',
    date: 'April 20, 2022',
    avatar:
      'https://i.imgur.com/jv3iLWy.png',
    content: (
      <>
       If you’re concerned about online privacy, then you’ll want to be especially careful when choosing a navigation app. After all, for these apps to function you’ll need to at least share your location, and you may find yourself sharing other personal details as well. OsmAnd is open-source navigation app and has particularly strong privacy policies — it doesn’t collect user data, and let you decide exactly what the app has access to.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://play.google.com/store/apps/details?id=net.osmand&hl=en&gl=US&reviewId=gp%3AAOqpTOGgIkri9G_5UZmBArExTCXTQLvFCDnvIaZ8Hgy3nPQjg_jYRF59tjauouwqIj-Qt8O3X_bzuerC5tU5yQ',
    source: '@google-play',
    name: 'James Avery',
    date: 'June 1, 2021',
    avatar:
      'https://play-lh.googleusercontent.com/a-/AOh14Ghvd2bMMvRXnxTZKouBfCkqzCQwEn1mDLJvYuWaiPs=w48-h48-n-rw',
    content: (
      <>
        Much better than Google Maps for navigating by foot or by bike. User submissions makes all the little paths available, and makes sure that they are actually usable (or they wouldn't have been submitted). Offline maps work really well, too, even in back country. I always make sure to download the region if I plan to go hiking. Only downside compared to Google Maps is the user interface for navigation, which could still use some work. Wonderful project!
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
      'https://i.imgur.com/KgfFveg.jpg',
    content: (
      <>
        OsmAnd+ opened to me and to my community/customers the freedom of discovery and scouting we had never experienced before on a motorcycle. I adore and support OsmAnd+ and talk about it during rides I lead, events I organize, books I write, tutorial I executes and workshops I run at Motoviaggio Store. Really glad to be an ambassador for this powerful and useful tool every traveler should have on their devices. Keep up the great work!
       </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://play.google.com/store/apps/dev?id=8483587772816822023',
    source: '@google-play',
    name: 'Matias Lavik',
    date: 'April 18, 2022',
    avatar:
      'https://play-lh.googleusercontent.com/a-/AOh14GgQEjZsYdJgNCKw8bOrnnYDuD7bd0gRYsSKqLdVjw=w48-h48-n-rw',
    content: (
      <>
        If you're a little bit technical then this could really be the best map app for walking around in cities. It has *a lot* of details, such as benches, playgrounds, parks, wheelchair accessibility and various info about stores and restaurants, such as WiFi access. The map rendering looks great, and it's easy to see where you can find grass and parks, etc.
       </>
    ),
    showOnHomepage: true,    
  }
  
];



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
                      <img
                        alt={i.name}
                        className="avatar__photo"
                        src={i.avatar}
                        width="48"
                        height="48"
                        loading="lazy"
                      />
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
