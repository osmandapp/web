import { Box } from '@mui/material';
import { useContext } from 'react';
import SelectTrackProfile from '../track/SelectTrackProfile';
import AppContext from '../../../context/AppContext';

const SettingsTab = ({ width }) => {
    const ctx = useContext(AppContext);

    const geoRouter = ctx.trackRouter;
    const { type } = geoRouter.getProfile();

    return (
        <Box width={width}>
            <SelectTrackProfile geoRouter={geoRouter} label={`Next segment profile (${type})`} />
        </Box>
    );
};

export default SettingsTab;
