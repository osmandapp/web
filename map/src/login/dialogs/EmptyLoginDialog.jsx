import BaseLoginDialog from './BaseLoginDialog';
import React, { useContext, useEffect, useState } from 'react';
import LoginContext from '../../context/LoginContext';
import EmptyLogin from '../EmptyLogin';
import Login from '../Login';
import CreateAccount from '../CreateAccount';
import { useTranslation } from 'react-i18next';

export default function EmptyLoginDialog() {
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const [openCreateAccountDialog, setOpenCreateAccountDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');

    useEffect(() => {
        if (openLoginDialog) {
            setDialogTitle(t('user_login'));
        } else if (openCreateAccountDialog) {
            setDialogTitle(t('register_opr_create_new_account'));
        } else {
            setDialogTitle('');
        }
    }, [openLoginDialog, openCreateAccountDialog]);

    function closeDialog() {
        ltx.setOpenLoginDialog(false);
        setOpenLoginDialog(false);
        setOpenCreateAccountDialog(false);
    }

    function reopenLoginDialog() {
        setOpenLoginDialog(true);
        setOpenCreateAccountDialog(false);
    }

    return (
        <BaseLoginDialog open={ltx.openLoginDialog} title={dialogTitle} onClick={closeDialog}>
            {!openLoginDialog && !openCreateAccountDialog && (
                <EmptyLogin
                    description={'web:empty_login_prices_desc'}
                    setOpenLoginDialog={setOpenLoginDialog}
                    setOpenCreateAccountDialog={setOpenCreateAccountDialog}
                />
            )}
            {openLoginDialog && <Login dialog={true} />}
            {openCreateAccountDialog && <CreateAccount dialog={true} reopenLoginDialog={reopenLoginDialog} />}
        </BaseLoginDialog>
    );
}
