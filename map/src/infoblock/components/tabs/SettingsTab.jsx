import { Box } from '@mui/material';
import { useContext } from 'react';
import SelectTrackProfile from '../track/SelectTrackProfile';
import AppContext from '../../../context/AppContext';
// import RouteSettingsDialog from '../../../drawer/components/route/RouteSettingsDialog';

const SettingsTab = ({ width }) => {
    const ctx = useContext(AppContext);

    // const [openSettings, setOpenSettings] = useState(false);

    const geoRouter = ctx.trackRouter;
    const { type } = geoRouter.getProfile();

    return (
        <Box width={width}>
            <SelectTrackProfile geoRouter={geoRouter} label={`Next segment profile (${type})`} />
        </Box>
    );

    // return (
    //     <Box width={width}>
    //         <Grid container spacing={2}>
    //             <Grid item xs={11.5}>
    //                 <SelectTrackProfile geoRouter={geoRouter} label={`Route profile next segment (${type})`} />
    //             </Grid>
    //         </Grid>
    //     </Box>
    // );

    // return (
    //     <Box width={width}>
    //         {openSettings && (
    //             <RouteSettingsDialog
    //                 key="routesettingsdialog"
    //                 setOpenSettings={setOpenSettings}
    //                 profile={ctx.creatingRouteMode}
    //                 setProfile={ctx.setCreatingRouteMode}
    //                 useDev={false}
    //             />
    //         )}
    //         <Grid container spacing={2}>
    //             <Grid item xs={11.5}>
    //                 <SelectTrackProfile
    //                     profile={ctx.creatingRouteMode}
    //                     setProfile={ctx.setCreatingRouteMode}
    //                     label={'Route profile next segment'}
    //                 />
    //             </Grid>
    //             <Grid item xs={0.5}>
    //                 <IconButton
    //                     sx={{ ml: -4, mt: 2 }}
    //                     onClick={() => {
    //                         setOpenSettings(true);
    //                     }}
    //                 >
    //                     <Settings fontSize="medium" />
    //                 </IconButton>
    //             </Grid>
    //         </Grid>
    //     </Box>
    // );
};

export default SettingsTab;
