import { useEffect } from 'react';
import { apiGet } from '../../util/HttpApi';

export default function GpxCollection({ tracks, setProcessDownload }) {
    useEffect(() => {
        if (tracks.length > 0) {
            downloadObf(`OsmAndCollection.travel.obf`).then();
        }
    }, [tracks]);

    const downloadObf = async (name) => {
        setProcessDownload(true);
        const names = tracks.map((obj) => obj.name);
        await apiGet({
            url: `${process.env.REACT_APP_USER_API_SITE}/mapapi/download-obf`,
            method: 'post',
            data: names,
            responseType: 'blob',
        }).then((resp) => {
            setProcessDownload(false);
            const url = document.createElement('a');
            url.href = URL.createObjectURL(resp.data);
            url.download = name;
            url.click();
        });
    };
}
