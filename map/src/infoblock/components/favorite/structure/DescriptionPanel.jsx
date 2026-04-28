import React, { useState } from 'react';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReactComponent as CloseRoundedIcon } from '../../../../assets/icons/ic_action_close_rounded.svg';
import SecondaryMenuDrawer from '../../../../frame/components/other/SecondaryMenuDrawer';
import HeaderWithUnderline from '../../../../frame/components/header/HeaderWithUnderline';
import ActionIconBtn from '../../../../frame/components/btns/ActionIconBtn';
import Editor from '../../../../frame/components/editor/Editor';
import { textToHTML } from '../../../../frame/components/editor/htmlUtils';

export default function DescriptionPanel({ description, setDescription, onClose }) {
    const { t } = useTranslation();
    const [html, setHtml] = useState(textToHTML(description));

    function handleSave() {
        setDescription(html);
        onClose();
    }

    function handleClear() {
        setDescription('');
        onClose();
    }

    return (
        <SecondaryMenuDrawer onClose={handleSave}>
            <HeaderWithUnderline
                title={t('shared_string_description')}
                onClose={handleSave}
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
            <Editor content={textToHTML(description)} onChange={setHtml} editorId="se-edit-fav-dialog-desc" />
        </SecondaryMenuDrawer>
    );
}
