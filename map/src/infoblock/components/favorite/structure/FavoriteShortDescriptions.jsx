import { Box, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import omit from 'lodash-es/omit';
import { ReactComponent as CancelIcon } from '../../../../assets/icons/ic_action_cancel.svg';
import SubTitleMenu from '../../../../frame/components/titles/SubTitleMenu';
import { getLanguageName } from '../../../../util/LanguageDisplayName';
import { WIKI_DEFAULT_LANG } from '../../../../util/lang';
import styles from '../wptEditPanel.module.css';

export default function FavoriteShortDescriptions({ shortDescriptions, setShortDescriptions }) {
    const { t } = useTranslation();

    function updateShortDescription(key, value) {
        setShortDescriptions((prev) => ({ ...prev, [key]: value }));
    }

    function removeShortDescription(key) {
        setShortDescriptions((prev) => omit(prev, key));
    }

    return (
        <>
            <SubTitleMenu text={t('shared_string_wikipedia')} />
            <Box className={clsx(styles.fields, styles.shortDescriptionFields)}>
                {Object.entries(shortDescriptions).map(([key, value]) => {
                    const lang = getShortDescriptionLang(key);

                    return (
                        <TextField
                            key={key}
                            id={`se-edit-fav-short-desc-${lang}`}
                            label={t(`lang_${lang}`, { defaultValue: getLanguageName(lang) })}
                            fullWidth
                            multiline
                            variant="filled"
                            value={value}
                            onChange={(e) => updateShortDescription(key, e.target.value)}
                            inputProps={{ className: styles.fieldInput }}
                            InputLabelProps={{ className: styles.fieldLabel }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Tooltip title={t('shared_string_delete')}>
                                            <IconButton
                                                id={`se-remove-fav-short-desc-${lang}`}
                                                size="small"
                                                onClick={() => removeShortDescription(key)}
                                            >
                                                <CancelIcon className={styles.removeIcon} />
                                            </IconButton>
                                        </Tooltip>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    );
                })}
            </Box>
        </>
    );
}

function getShortDescriptionLang(key) {
    return key.split(':')[1] ?? WIKI_DEFAULT_LANG;
}
