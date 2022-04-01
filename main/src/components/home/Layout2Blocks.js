import React from 'react';

export default function Layout2Blocks({ children }) {
    return (
    <div className="container">
        <div className="row padding-vert--md">
            <div className="col col--1" />
            
            <div className="col col--4 padding-vert--md padding-horiz--lg" align="center">
                {children[0]}
            </div>

            <div className="col col--2" />

            <div className="col col--4 padding-vert--md padding-horiz--lg" align="center">
                {children[1]}
            </div>
            
            <div className="col col--1" />
        </div>
    </div>
    );
}