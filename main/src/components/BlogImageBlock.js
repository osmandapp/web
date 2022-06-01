import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function BlogImageBlock({ img1, img2, img3, img4 }) {
    return <table class="blogimage">
        <tr>
            <td><img src={useBaseUrl(`${img1}`)} /></td>
            <td><img src={img2} /></td>
            <td><img src={img3} /></td>
            <td><img src={img4} /></td>
        </tr>
    </table> 
}