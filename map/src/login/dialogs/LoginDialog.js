import React, { useState, useContext, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext from '../../context/AppContext';
import {
    Checkbox,
    Divider,
    FormControlLabel,
    ListItemText,
    MenuItem,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import DownloadBackupDialog from './DownloadBackupDialog';
import { useWindowSize } from '../../util/hooks/useWindowSize';
import { makeStyles } from '@material-ui/core/styles';
import { getAccountInfo, INIT_LOGIN_STATE } from '../../manager/LoginManager';
import FastSpringPurchaseButton from '../fs/FastSpringPurchaseButton';
import { purchases } from '../fs/FastSpringHelper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function LoginDialog() {
    const ctx = useContext(AppContext);

    const [width] = useWindowSize();
    const widthDialog = width / 2 < 450 ? width * 0.75 : width / 2;

    const useStyles = makeStyles(() => ({
        paper: { maxWidth: `${widthDialog}px`, minWidth: `${widthDialog}px` },
    }));

    const classes = useStyles();

    const [openDownloadBackupDialog, setOpenDownloadBackupDialog] = useState(false);

    const [selectedProducts, setSelectedProducts] = useState([]);

    const toggleProductSelection = (item) => {
        setSelectedProducts((prevSelected) => {
            if (prevSelected.includes(item)) {
                return prevSelected.filter((product) => product !== item);
            } else {
                return [...prevSelected, item];
            }
        });
    };

    useEffect(() => {
        if (ctxl.loginUser && ctxl.loginUser !== '' && ctxl.loginUser !== INIT_LOGIN_STATE) {
            getAccountInfo(ctx.setAccountInfo).then();
        }
    }, [ctxl.loginUser]);

    const clickHandler = (event) => {
        if (event.detail % 3 === 0) {
            ctx.setDevelFeatures(!ctx.develFeatures);
        }
    };

    if (ctxl.loginUser) {
        return (
            <Dialog id={'se-login-dialog'} classes={{ paper: classes.paper }} open={true} onClose={handleClose}>
                <DialogTitle sx={{ color: '#f8931d' }} onClick={clickHandler}>
                    {ctxl.loginUser} {ctx.develFeatures && ' :-)'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText component={'span'}>
                        <Divider />
                        {!ctx.listFiles || !ctx.listFiles.userid ? (
                            <></>
                        ) : (
                            <>
                                <Typography component={'span'} variant="h6" noWrap>
                                    {`Files info:`}
                                </Typography>
                                <MenuItem>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                            {`Total files: ${ctx.listFiles.totalFiles} (${ctx.listFiles.totalFileVersions} including versions)`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem sx={{ mt: -1 }}>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                            {`Total files size: ${(
                                                ctx.listFiles.totalFileSize /
                                                1024.0 /
                                                1024.0
                                            ).toFixed(1)} MB`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem sx={{ mt: -1 }}>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                            {`Cloud storage used: ${(
                                                ctx.listFiles.totalZipSize /
                                                1024 /
                                                1024.0
                                            ).toFixed(1)} MB ${
                                                ctxl.accountInfo &&
                                                `of ${ctxl.accountInfo.maxAccSize / (1024 * 1024)} MB`
                                            }`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                <Button id={'se-download-backup'} onClick={() => setOpenDownloadBackupDialog(true)}>
                                    Download backup
                                </Button>
                            </>
                        )}
                        <Divider sx={{ mt: 1 }} />
                        {ctxl.accountInfo && (
                            <>
                                <Typography component={'span'} variant="h6" noWrap>
                                    {`Account info:`}
                                </Typography>
                                <MenuItem>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                            {`Subscription: ${getAccountType(ctx.accountInfo.account)} `}
                                            {ctxl.accountInfo.type && `(type: ${ctxl.accountInfo.type})`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                {ctxl.accountInfo.startTime && ctxl.accountInfo.expireTime && (
                                    <>
                                        <MenuItem sx={{ mt: -1 }}>
                                            <ListItemText>
                                                <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                                    {`Start time: ${ctxl.accountInfo.startTime}`}
                                                </Typography>
                                            </ListItemText>
                                        </MenuItem>
                                        <MenuItem sx={{ mt: -1 }}>
                                            <ListItemText>
                                                <Typography
                                                    component={'span'}
                                                    sx={{
                                                        ml: 1,
                                                        color:
                                                            ctxl.accountInfo.valid === 'false' ? '#ff8d90' : undefined,
                                                    }}
                                                    variant="body2"
                                                    noWrap
                                                >
                                                    {`Expire time: ${ctxl.accountInfo.expireTime}`}
                                                </Typography>
                                            </ListItemText>
                                        </MenuItem>
                                    </>
                                )}
                                {ctxl.accountInfo?.valid === 'false' && (
                                    <MenuItem sx={{ mt: -1 }}>
                                        <ListItemText>
                                            <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                                {`Valid: 😢 ${ctxl.accountInfo.valid}`}
                                            </Typography>
                                        </ListItemText>
                                    </MenuItem>
                                )}
                            </>
                        )}
                        {(ctxl.accountInfo?.inAppPurchases || ctxl.accountInfo?.subscriptions) && (
                            <Accordion
                                disableGutters
                                elevation={0}
                                square
                                sx={{
                                    boxShadow: 'none',
                                    '&::before': { display: 'none' },
                                    border: 'none',
                                    margin: 0,
                                    mt: 1,
                                }}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 32 }}>
                                    <Typography
                                        sx={{ ml: -1, color: '#237bff', textTransform: 'uppercase' }}
                                        variant="subtitle2"
                                        noWrap
                                    >
                                        More info
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ p: 0 }}>
                                    {/* In-App Purchases */}
                                    {ctxl.accountInfo?.inAppPurchases && (
                                        <>
                                            <Typography variant="subtitle1" sx={{ ml: 2, mt: 1 }}>
                                                In-App Purchases:
                                            </Typography>
                                            {JSON.parse(ctxl.accountInfo.inAppPurchases).map((item, idx) => (
                                                <Typography key={`iap-${idx}`} variant="body2" sx={{ ml: 3, mb: 0.5 }}>
                                                    {`${item.valid ? '✅' : '❌'} ${item.sku}` +
                                                        (item.purchaseTime ? ` → ${item.purchaseTime}` : '')}
                                                </Typography>
                                            ))}
                                        </>
                                    )}

                                    {/* Subscriptions */}
                                    {ctxl.accountInfo?.subscriptions && (
                                        <>
                                            <Typography variant="subtitle1" sx={{ ml: 2, mt: 2 }}>
                                                Subscriptions:
                                            </Typography>
                                            {JSON.parse(ctxl.accountInfo.subscriptions).map((item) => (
                                                <Typography
                                                    key={`${item.sku}-${item.startTime || Math.random()}`}
                                                    variant="body2"
                                                    sx={{ ml: 3, mb: 0.5 }}
                                                >
                                                    {`${item.valid ? '✅' : '❌'} ${item.sku}` +
                                                        (item.startTime ? ` — ${item.startTime}` : '') +
                                                        (item.expireTime ? ` → ${item.expireTime}` : '')}
                                                </Typography>
                                            ))}
                                        </>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                        )}

                        {ctx.develFeatures && ctxl.loginUser && (
                            <>
                                <Divider sx={{ mt: 1 }} />
                                <Typography component={'span'} variant="h6" noWrap>
                                    Subscriptions & Purchases:
                                </Typography>
                                <MenuItem sx={{ mt: -1 }}>
                                    {purchases.products.map((item, index) => (
                                        <FormControlLabel
                                            key={item.key}
                                            label={item.value}
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    checked={selectedProducts.includes(item.key)}
                                                    onChange={() => toggleProductSelection(item.key)}
                                                />
                                            }
                                        />
                                    ))}
                                </MenuItem>
                                <MenuItem sx={{ mt: -1 }}>
                                    {purchases.subscriptions.map((item, index) => (
                                        <FormControlLabel
                                            key={item.key}
                                            label={item.value}
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    disabled={item.type === 'pro' && ctxl.accountInfo?.valid === 'true'}
                                                    checked={selectedProducts.includes(item.key)}
                                                    onChange={() => toggleProductSelection(item.key)}
                                                />
                                            }
                                        />
                                    ))}
                                </MenuItem>
                                <FastSpringPurchaseButton selectedProducts={selectedProducts} ctx={ctx} />
                                <FastSpringPurchaseButton
                                    selectedProducts={selectedProducts}
                                    testMode={true}
                                    ctx={ctx}
                                />
                            </>
                        )}
                    </DialogContentText>
                </DialogContent>
                {openDownloadBackupDialog && (
                    <DownloadBackupDialog
                        openDownloadBackupDialog={openDownloadBackupDialog}
                        setOpenDownloadBackupDialog={setOpenDownloadBackupDialog}
                        widthDialog={widthDialog}
                    />
                )}
            </Dialog>
        );
    }
    return <></>;
}
