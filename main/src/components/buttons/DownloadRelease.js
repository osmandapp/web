import React from 'react';

export default function DownloadRelease({ blog, release }) {
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
    <div class="button-row">
        <a class="button button--active" href={'blog/'+osmand-android-4-1}><span class="emoji">&#x1F4D6;</span>Read more</a>
        <a class="button button--active" href={"https://download.osmand.net/releases/"+release}><span class="emoji">&#x2B07;</span>Download</a>
    </div>


}
