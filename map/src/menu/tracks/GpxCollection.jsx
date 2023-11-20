import { useEffect } from 'react';
import { apiGet } from '../../util/HttpApi';

export default function GpxCollection({ tracks, setProcessDownload }) {
    //const [openMenu, setOpenMenu] = useState(false);
    //const [processDownload, setProcessDownload] = useState(false);
    //const [openDialog, setOpenDialog] = useState(false);
    //const [collection, setCollection] = useState(tracks);
    // const toggleShowDialog = () => {
    //     setOpenDialog(!openDialog);
    // };

    useEffect(() => {
        if (tracks.length > 0) {
            downloadObf(`OsmAndCollection.obf`).then();
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

    // function deleteFile(index) {
    //     collection.splice(index, 1);
    //     setCollection([...collection]);
    // }

    // const CollectionRow = ({ track, index }) => {
    //     return (
    //         <MenuItem sx={{ ml: 3 }} key={'filename' + index} divider>
    //             <ListItemText inset>
    //                 <Typography sx={{ ml: -4 }} variant="inherit" noWrap>
    //                     {track.name}
    //                 </Typography>
    //             </ListItemText>
    //             <IconButton
    //                 variant="contained"
    //                 type="button"
    //                 onClick={(e) => {
    //                     deleteFile(index);
    //                     e.stopPropagation();
    //                 }}
    //             >
    //                 <Close fontSize="small" />
    //             </IconButton>
    //         </MenuItem>
    //     );
    // };

    // return (
    //     <>
    //         <Dialog open={true}>
    //             {processDownload ? <LinearProgress /> : <></>}
    //             <DialogTitle>
    //                 <MenuItem onClick={() => setOpenMenu(!openMenu)}>
    //                     <ListItemIcon className={styles.icon}>
    //                         <FolderIcon />
    //                     </ListItemIcon>
    //                     <ListItemText> Gpx Collection </ListItemText>
    //                     <Button sx={{ borderRadius: 28, minWidth: '30px !important' }} size="small">
    //                         <Typography variant="body2" color="textSecondary">
    //                             {collection.length > 0 ? `${collection.length}` : ''}
    //                         </Typography>
    //                     </Button>
    //                 </MenuItem>
    //             </DialogTitle>
    //             <DialogContent>
    //                 {collection.length > 0 &&
    //                     collection.map((track, index) => {
    //                         return CollectionRow({ track: track, index: index });
    //                     })}
    //             </DialogContent>
    //             <DialogActions>
    //                 <Button
    //                     variant="contained"
    //                     component="span"
    //                     onClick={(e) => {
    //                         setOpenActions(false);
    //                         e.stopPropagation();
    //                     }}
    //                 >
    //                     Cancel
    //                 </Button>
    //                 {collection.length > 0 && (
    //                     <Button
    //                         variant="contained"
    //                         component="span"
    //                         onClick={(e) => {
    //                             setOpenDialog(true);
    //                             e.stopPropagation();
    //                         }}
    //                     >
    //                         Get Map
    //                     </Button>
    //                 )}
    //             </DialogActions>
    //         </Dialog>
    //         <Dialog open={openDialog} onClose={toggleShowDialog}>
    //             <DialogTitle>Get Map</DialogTitle>
    //             <DialogContent>
    //                 <DialogContentText>
    //                     {` You can download offline map OBF (OsmAnd Binary Format) and open it with OsmAnd on device, it's suitable to display large quantity of tracks will be visible on the map.`}
    //                 </DialogContentText>
    //                 <DialogContentText>
    //                     {` Also on Android you can import map of tracks as Travel book which will allow you also to select a specific track on the map and use it as normal GPX. Travel book also supports features such as displaying tracks as points, filtering tracks by activity type and filtering waypoints.`}
    //                 </DialogContentText>
    //             </DialogContent>
    //             <DialogActions>
    //                 <Button onClick={toggleShowDialog}>Cancel</Button>
    //                 <Button
    //                     onClick={() => {
    //                         downloadObf(`OsmAndCollection.obf`).then();
    //                         setOpenDialog(false);
    //                     }}
    //                 >
    //                     Obf
    //                 </Button>
    //                 <Button
    //                     onClick={() => {
    //                         downloadObf(`OsmAndCollection.travel.obf`).then();
    //                         setOpenDialog(false);
    //                     }}
    //                 >
    //                     Travel obf
    //                 </Button>
    //             </DialogActions>
    //         </Dialog>
    //     </>
    // );
}
