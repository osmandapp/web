import React from 'react';

export default function Layout2Blocks({ children, names }) {
    return (
        <div className="container">
            <div className="row padding-vert--md">
                <div className="col col--1" />

                <div className="col col--4 padding-vert--md padding-horiz--md" align="center">
                    <h1 className="index-title text--center">{names ? names[0]: ''}</h1>
                    {children[0]}
                </div>

                <div className="col col--2"/>

                <div className="col col--4 padding-vert--md padding-horiz--md" align="center">
                    <h1 className="index-title text--center">{names ? names[1] : ''}</h1>
                    {children[1]}
                </div>

                <div className="col col--1" />
            </div>
        </div>
    );
}