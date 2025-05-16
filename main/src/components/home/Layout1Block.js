import React from 'react';
import clsx from 'clsx';

export default function Layout1Block({ children, names, altSectionClass }) {
    return (
        <section className={clsx('section', altSectionClass)}>
            <div className="container">
                <div className="row padding-vert--md">
                    <div className="col col--2" />

                    <div className="col col--6 padding-vert--md padding-horiz--md" align="center">
                        <h1 className="index-title text--center">{names ? names[0] : ''}</h1>
                        {children}
                    </div>
                    <div className="col col--4" />
                </div>
            </div>
        </section>
    );
}