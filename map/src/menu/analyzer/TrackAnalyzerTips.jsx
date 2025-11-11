import ThickDivider from '../../frame/components/dividers/ThickDivider';
import { Box } from '@mui/material';
import { ReactComponent as DestIcon } from '../../assets/icons/ic_action_point_destination.svg';
import { ReactComponent as SortIcon } from '../../assets/icons/ic_action_sort_by_name_ascending.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/ic_action_filter.svg';
import DividerWithMargin from '../../frame/components/dividers/DividerWithMargin';
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import TextWithLeftIcon from '../../frame/components/other/TextWithLeftIcon';

export default function TrackAnalyzerTips() {
    const { t } = useTranslation();

    return (
        <>
            <ThickDivider />
            <Box>
                <TextWithLeftIcon icon={<DestIcon />} text={t('web:track_analyzer_desc')} />
            </Box>
            <ThickDivider />
            <Box>
                <TextWithLeftIcon icon={<SortIcon />} text={t('web:track_analyzer_tips_1')} />
                <DividerWithMargin dashed={true} />
                <TextWithLeftIcon
                    icon={<FilterIcon />}
                    text={<Trans i18nKey="web:track_analyzer_tips_2" components={{ strong: <strong /> }} />}
                />
            </Box>
        </>
    );
}
