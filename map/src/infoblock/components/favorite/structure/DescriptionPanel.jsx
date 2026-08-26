import React, { useState } from 'react';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReactComponent as CloseRoundedIcon } from '../../../../assets/icons/ic_action_close_rounded.svg';
import SecondaryMenuDrawer from '../../../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../../../frame/components/header/HeaderWithUnderline';
import ActionIconBtn from '../../../../frame/components/btns/ActionIconBtn';
import RichTextEditor from '../../../../frame/components/editor/RichTextEditor';
import { textToHTML } from '../../../../frame/components/editor/htmlUtils';

export default function DescriptionPanel({ description, setDescription, onClose }) {
    const { t } = useTranslation();

    const [initialContent] = useState(() => textToHTML(description));

    function handleClear() {
        setDescription('');
        onClose();
    }

    return (
        <SecondaryMenuDrawer onClose={onClose}>
            <HeaderWithUnderline
                title={t('shared_string_description')}
                onClose={onClose}
                showBackButton
                appBarProps={{ id: 'se-back-description-panel' }}
                rightContent={
                    <Tooltip title={t('web:clear_description')} arrow>
                        <span>
                            <ActionIconBtn
                                id="se-clear-description"
                                icon={<CloseRoundedIcon />}
                                onClick={handleClear}
                            />
                        </span>
                    </Tooltip>
                }
            />
            <RichTextEditor content={initialContent} onChange={setDescription} editorId="se-edit-fav-dialog-desc" />
        </SecondaryMenuDrawer>
    );
}
