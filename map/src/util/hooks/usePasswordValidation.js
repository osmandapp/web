import { useEffect, useState } from 'react';
import { EMPTY_INPUT } from '../../manager/LoginManager';
import { useTranslation } from 'react-i18next';

export function usePasswordValidation(userPassword1, userPassword2) {
    const { t } = useTranslation();

    const [passwordError, setPasswordError] = useState(EMPTY_INPUT);

    useEffect(() => {
        if (userPassword1 !== EMPTY_INPUT && userPassword2 !== EMPTY_INPUT) {
            if (userPassword1 !== userPassword2) {
                setPasswordError(t('web:passwords_not_match'));
            } else if (userPassword1.length < 8 || userPassword2.length < 8) {
                setPasswordError(t('web:min_8_symbols_password'));
            } else {
                setPasswordError(EMPTY_INPUT);
            }
        }
    }, [userPassword1, userPassword2, t]);

    return passwordError;
}
