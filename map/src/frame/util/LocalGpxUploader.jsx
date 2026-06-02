import { styled } from '@mui/material/styles';
import useLocalGpxImport from '../../util/hooks/useLocalGpxImport';

/**
 * If you need to forward ref (for example, with <Toolip>),
 * don't play with forwardRef/cloneElement, just wrap with span:
 *
 * <Tooltip><span><LocalGpxUploader>...</LocalGpxUploader></span></Tooltip>
 */

export default function LocalGpxUploader({ children }) {
    const { importGpxFiles } = useLocalGpxImport();

    const fileSelected = (e) => {
        importGpxFiles(e.target.files);
    };

    const HiddenInput = styled('input')({ display: 'none' });

    return (
        <label htmlFor="se-upload-gpx">
            <HiddenInput id="se-upload-gpx" accept=".gpx" multiple type="file" onChange={fileSelected} />
            {children}
        </label>
    );
}
