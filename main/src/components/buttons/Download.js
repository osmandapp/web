import React from 'react';

export default function Download({ link }) {
    return <div class="button-row">
        <a class="button button--active" href={ link }><span class="emoji">&#x2B07;</span>Download</a>
    </div>
}
