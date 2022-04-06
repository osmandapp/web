import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import boxStyles from './Box.module.css';
import clsx from 'clsx';

export default function Twitter() {
    // var fjs = document.getElementsByTagName(s)[0];
    // let id = "twitter-wjs";
    // if (!document.getElementById(id)) {
    //     var js = document.createElement("script");
    //     js.id = id;
    //     js.src = /^http:/.test(document.location) ? 'http' : 'https' + "://platform.twitter.com/widgets.js";
    //     fjs.parentNode.insertBefore(js, fjs);
    // }
    // return (
    //     <a class="twitter-timeline" href="https://twitter.com/osmandapp"
    //         data-widget-id="598236050113372160" height="502">Tweets by @osmandapp</a>
    // );
    return <div className={clsx(boxStyles.box, 'shadow--md')}>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="osmandapp"
        options={{ height: 400 }}
    />
    </div>;
}