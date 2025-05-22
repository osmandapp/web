import React, { useState, useContext, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppContext from '../context/AppContext';
import {
    Box,
    Checkbox,
    Divider,
    FormControlLabel,
    Link,
    ListItemText,
    MenuItem,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import DeleteAccountDialog from './DeleteAccountDialog';
import AccountManager, { sendCode, userLogout } from '../manager/AccountManager';
import ChangeEmailDialog from './ChangeEmailDialog';
import DownloadBackupDialog from './DownloadBackupDialog';
import { useWindowSize } from '../util/hooks/useWindowSize';
import { makeStyles } from '@material-ui/core/styles';
import { FREE_ACCOUNT, getAccountInfo, INIT_LOGIN_STATE } from '../manager/LoginManager';
import { useTranslation } from 'react-i18next';
import FastSpringPurchaseButton from './FastSpringPurchaseButton';
import { purchases } from './FastSpringHelper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function LoginDialog() {
    const ctx = useContext(AppContext);
    const { i18n } = useTranslation();
    const lang = i18n.language;

    const [width] = useWindowSize();
    const widthDialog = width / 2 < 450 ? width * 0.75 : width / 2;

    const useStyles = makeStyles(() => ({
        paper: { maxWidth: `${widthDialog}px`, minWidth: `${widthDialog}px` },
    }));

    const classes = useStyles();

    const [openDangerousArea, setOpenDangerousArea] = useState(false);
    const [deleteAccountFlag, setDeleteAccountFlag] = useState(false);
    const [changeEmailFlag, setChangeEmailFlag] = useState(false);
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

    const toggleOpenDangerousArea = () => {
        setOpenDangerousArea(!openDangerousArea);
        setDeleteAccountFlag(false);
    };

    useEffect(() => {
        if (ctx.loginUser && ctx.loginUser !== '' && ctx.loginUser !== INIT_LOGIN_STATE) {
            getAccountInfo(ctx.setAccountInfo).then();
        }
    }, [ctx.loginUser]);

    const clickHandler = (event) => {
        if (event.detail % 3 === 0) {
            ctx.setDevelFeatures(!ctx.develFeatures);
        }
    };

    if (ctx.loginUser) {
        return (
            <Dialog id={'se-login-dialog'} classes={{ paper: classes.paper }} open={true} onClose={handleClose}>
                <DialogTitle sx={{ color: '#f8931d' }} onClick={clickHandler}>
                    {ctx.loginUser} {ctx.develFeatures && ' :-)'}
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
                                                ctx.accountInfo && `of ${ctx.accountInfo.maxAccSize / (1024 * 1024)} MB`
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
                        {ctx.accountInfo && (
                            <>
                                <Typography component={'span'} variant="h6" noWrap>
                                    {`Account info:`}
                                </Typography>
                                <MenuItem>
                                    <ListItemText>
                                        <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                            {`Subscription: ${getAccountType(ctx.accountInfo.account)} `}
                                            {ctx.accountInfo.type && `(type: ${ctx.accountInfo.type})`}
                                        </Typography>
                                    </ListItemText>
                                </MenuItem>
                                {ctx.accountInfo.startTime && ctx.accountInfo.expireTime && (
                                    <>
                                        <MenuItem sx={{ mt: -1 }}>
                                            <ListItemText>
                                                <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                                    {`Start time: ${ctx.accountInfo.startTime}`}
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
                                                            ctx.accountInfo.valid === 'false' ? '#ff8d90' : undefined,
                                                    }}
                                                    variant="body2"
                                                    noWrap
                                                >
                                                    {`Expire time: ${ctx.accountInfo.expireTime}`}
                                                </Typography>
                                            </ListItemText>
                                        </MenuItem>
                                    </>
                                )}
                                {ctx.accountInfo?.valid === 'false' && (
                                    <MenuItem sx={{ mt: -1 }}>
                                        <ListItemText>
                                            <Typography component={'span'} sx={{ ml: 1 }} variant="body2" noWrap>
                                                {`Valid: 😢 ${ctx.accountInfo.valid}`}
                                            </Typography>
                                        </ListItemText>
                                    </MenuItem>
                                )}
                            </>
                        )}
                        {(ctx.accountInfo?.inAppPurchases || ctx.accountInfo?.subscriptions) && (
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
                                    {ctx.accountInfo?.inAppPurchases && (
                                        <>
                                            <Typography variant="subtitle1" sx={{ ml: 2, mt: 1 }}>
                                                In-App Purchases:
                                            </Typography>
                                            {JSON.parse(ctx.accountInfo.inAppPurchases).map((item, idx) => (
                                                <Typography key={`iap-${idx}`} variant="body2" sx={{ ml: 3, mb: 0.5 }}>
                                                    {`${item.valid ? '✅' : '❌'} ${item.sku}` +
                                                        (item.purchaseTime ? ` → ${item.purchaseTime}` : '')}
                                                </Typography>
                                            ))}
                                        </>
                                    )}

                                    {/* Subscriptions */}
                                    {ctx.accountInfo?.subscriptions && (
                                        <>
                                            <Typography variant="subtitle1" sx={{ ml: 2, mt: 2 }}>
                                                Subscriptions:
                                            </Typography>
                                            {JSON.parse(ctx.accountInfo.subscriptions).map((item) => (
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

                        {ctx.develFeatures && ctx.loginUser && (
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
                                                    disabled={item.type === 'pro' && ctx.accountInfo?.valid === 'true'}
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
                <DialogActions>
                    <Link
                        sx={{ marginRight: 'auto', fontSize: '10pt', ml: 2, color: '#ff595e' }}
                        href="#"
                        color="inherit"
                        onClick={toggleOpenDangerousArea}
                    >
                        Dangerous area
                    </Link>
                </DialogActions>
                {openDangerousArea && <Divider sx={{ mb: 2, ml: 3, mr: 3, bgcolor: '#ff595e' }} />}
                {openDangerousArea && (
                    <Box sx={{ mb: 2 }}>
                        <Button
                            variant="contained"
                            component="span"
                            sx={{ backgroundColor: '#ff595e !important', ml: 3, mb: '10px' }}
                            onClick={() => {
                                setDeleteAccountFlag(true);
                            }}
                        >
                            Delete your account
                        </Button>
                        <Link
                            sx={{
                                mr: 'auto',
                                ml: '25px',
                                fontSize: '10pt',
                                color: '#ff595e',
                                whiteSpace: 'nowrap',
                            }}
                            href="#"
                            color="inherit"
                            onClick={() => {
                                setChangeEmailFlag(true);
                                sendCode({
                                    action: AccountManager.CHANGE_EMAIL_MSG,
                                    lang,
                                }).then();
                            }}
                        >
                            Change email
                        </Link>
                        {deleteAccountFlag && <DeleteAccountDialog setDeleteAccountFlag={setDeleteAccountFlag} />}
                        {changeEmailFlag && <ChangeEmailDialog setChangeEmailFlag={setChangeEmailFlag} />}
                    </Box>
                )}
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
