import React from 'react';
import clsx from 'clsx';
import styles from './Impressions.module.css';


const ImpressionsList = [
  {
    url: 'https://twitter.com/acemarke/status/1452725153998245891',
    handle: 'acemarke',
    name: 'Mark Erikson',
    date: 'Oct 26, 2021',
    avatar:
      'https://pbs.twimg.com/profile_images/842582724737163264/tFKLiJI5_400x400.jpg',
    content: (
      <>
        We&apos;ve been using Docusaurus for all the Redux org docs sites for
        the last couple years, and it&apos;s great! We&apos;ve been able to
        focus on content, customize some presentation and features, and It Just
        Works.
      </>
    ),
    showOnHomepage: true,
  },
  {
    url: 'https://twitter.com/arcanis/status/1351620354561732608',
    handle: 'arcanis',
    name: 'Maël',
    date: 'Jan 20, 2021',
    avatar:
      'https://pbs.twimg.com/profile_images/1497225853931040769/5mXZAHFR_400x400.jpg',
    content: (
      <>
        I&apos;ve used Docusaurus for two websites this year, and I&apos;ve been
        very happy about the v2. Looks good, and simple to setup.
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
                        <span>@{i.handle}</span>
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
