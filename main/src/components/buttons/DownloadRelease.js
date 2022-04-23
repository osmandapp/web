import React from 'react';

export default function DownloadRelease({ blog, release }) {
    return <div class="button-row">
        <a class="button button--active" href={'https://osmand.net/blog/' + blog}><span class="emoji">&#x1F4D6;</span>Read more</a>
        <a class="button button--active" href={"https://download.osmand.net/releases/" + release}><span class="emoji">&#x2B07;</span>Download</a>
    </div>
}
