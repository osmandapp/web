import React from 'react';
import ios from '../translations/ios-values.json';
import and from '../translations/android-values.json';

export default function Translate({ id, android }) {
    // console.log(and);
    if (and[id] && android && android !== 'no' && android !== 'false') {
        return and[id];
    } else if (ios[id] && (!android || android === 'false' || android === 'no')) {
         return ios[id];
    }
    return <span>{'MISSING ' + (android ? "Android" : "iOS") + ' resource: ' + id + '!'}</span>
}
