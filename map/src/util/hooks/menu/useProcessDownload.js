import { useContext } from 'react';
import AppContext from '../../../context/AppContext';

export function useProcessDownload(...keyParts) {
    const ctx = useContext(AppContext);
    const key = keyParts.join(':');

    const processDownload = ctx.processingDownloads.includes(key);

    function setProcessDownload(download) {
        ctx.setProcessingDownloads((prev) => (download ? [...prev, key] : prev.filter((k) => k !== key)));
    }

    return [processDownload, setProcessDownload];
}
