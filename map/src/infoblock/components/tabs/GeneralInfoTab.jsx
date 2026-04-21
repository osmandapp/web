import React, { useContext } from 'react';
import { Box, Divider, Checkbox, FormControlLabel } from '@mui/material';
import AppContext, { isLocalTrack } from '../../../context/AppContext';
import GeneralInfo from '../track/GeneralInfo';
import { hasSegments, isEmptyTrack } from '../../../manager/track/TracksManager';
import GpxGraphProvider from '../../../graph/track/GpxGraphProvider';
import SubTitleMenu from '../../../frame/components/titles/SubTitleMenu';
import DefaultItem from '../../../frame/components/items/DefaultItem';
import ThickDivider from '../../../frame/components/dividers/ThickDivider';
import DividerWithMargin from '../../../frame/components/dividers/DividerWithMargin';
import { ReactComponent as UserIcon } from '../../../assets/icons/ic_action_user.svg';
import { ReactComponent as EmailIcon } from '../../../assets/icons/ic_action_at_mail.svg';
import { ReactComponent as LinkIcon } from '../../../assets/icons/ic_action_link.svg';
import { useTranslation } from 'react-i18next';

export default function GeneralInfoTab() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const author = ctx.selectedGpxFile?.metaData?.ext?.author ?? null;

    function AuthorCard({ author, t }) {
        const hasEmail = !!author.email;
        const hasLink = !!author.link?.href;

        return (
            <>
                <SubTitleMenu text={t('shared_string_author')} />
                {author.name && (
                    <>
                        <DefaultItem
                            icon={<UserIcon />}
                            name={t('shared_string_name')}
                            additionalInfo={author.name}
                            revertText={true}
                        />
                        {(hasEmail || hasLink) && <DividerWithMargin margin={'64px'} />}
                    </>
                )}
                {hasEmail && (
                    <>
                        <DefaultItem
                            icon={<EmailIcon />}
                            name={t('web:shared_string_email')}
                            additionalInfo={author.email}
                            revertText={true}
                            onClick={() => window.open(`mailto:${author.email}`, '_blank')}
                        />
                        {hasLink && <DividerWithMargin margin={'64px'} />}
                    </>
                )}
                {hasLink && (
                    <DefaultItem
                        icon={<LinkIcon />}
                        name={t('web:shared_string_link')}
                        additionalInfo={author.link.text || author.link.href}
                        revertText={true}
                        onClick={() => window.open(author.link.href, '_blank', 'noopener,noreferrer')}
                    />
                )}
            </>
        );
    }

    return (
        <>
            <Box>
                {author && (
                    <Box sx={{ mx: -3, mt: -3 }}>
                        <AuthorCard author={author} t={t} />
                        <ThickDivider mt={'0px'} mb={'0px'} />
                    </Box>
                )}
                <GeneralInfo width={ctx.infoBlockWidth} />
                {isLocalTrack(ctx) && (
                    <>
                        {!isEmptyTrack(ctx.selectedGpxFile) && <Divider sx={{ mt: '3px', mb: '12px' }} />}
                        <div style={{ marginLeft: '15px', marginTop: '-10px' }}>
                            {!isEmptyTrack(ctx.selectedGpxFile, false, true) && (
                                <FormControlLabel
                                    sx={{
                                        '& .MuiTypography-root': { fontSize: '12px' },
                                        transform: 'scale(0.8)',
                                    }}
                                    key={'show_points'}
                                    label={'Show track points'}
                                    control={
                                        <Checkbox
                                            sx={{ marginLeft: '-30px' }}
                                            checked={ctx.showPoints.points}
                                            onChange={() => ctx.mutateShowPoints((o) => (o.points = !o.points))}
                                        />
                                    }
                                ></FormControlLabel>
                            )}
                            {!isEmptyTrack(ctx.selectedGpxFile, true, false) && (
                                <FormControlLabel
                                    sx={{
                                        '& .MuiTypography-root': { fontSize: '12px' },
                                        transform: 'scale(0.8)',
                                    }}
                                    key={'show_wpts'}
                                    label={'Show track wpts'}
                                    control={
                                        <Checkbox
                                            sx={{ marginLeft: '-30px' }}
                                            checked={ctx.showPoints.wpts}
                                            onChange={() => ctx.mutateShowPoints((o) => (o.wpts = !o.wpts))}
                                        />
                                    }
                                ></FormControlLabel>
                            )}
                        </div>
                    </>
                )}
                {hasSegments(ctx.selectedGpxFile) && <GpxGraphProvider width={ctx.infoBlockWidth} />}
            </Box>
        </>
    );
}
