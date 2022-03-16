import React from 'react';
import iosres from '../translations/ios-values.json';
import andres from '../translations/android-values.json';

function getRes(id, and) {
    if (andres[id] && and) {
        return andres[id];
    } else if (iosres[id] && !and) {
        return iosres[id];
    }
    return <span>{'MISSING ' + (android ? "Android" : "iOS") + ' resource: ' + id + '!'}</span>
}

export default function Translate({ id, android, ids, delimeter = ' → ' }) {
    // console.log(and);
    let and = android && android !== 'no' && android !== 'false';
    if (id) {
        return getRes(id, and);
    }
    if (ids) {
        let res = '';
        let arr = ids.split(',');
        for (var i = 0; i < arr.length; i++) {
            if (i > 0) {
                res += delimeter;
            }
            res += getRes(arr[i], and);
        }
        return res;
    }
    return 'UNKNOWN <Translate> args!';

}
