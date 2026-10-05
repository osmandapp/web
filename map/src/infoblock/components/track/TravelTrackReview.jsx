import React, { useContext, useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import isEqual from 'lodash-es/isEqual';
import AppContext from '../../../context/AppContext';
import LoginContext from '../../../context/LoginContext';
import { INIT_LOGIN_STATE } from '../../../manager/LoginManager';
import { apiGet, apiPost } from '../../../util/HttpApi';
import { OSM_GPX_ABORT_KEYS, TRAVEL_REVIEWS_URL } from '../../../menu/travel/TravelMenu';
import { activityLabel } from '../../../map/util/activities';
import activities from '../../../resources/activities.json';
import ThickDivider from '../../../frame/components/dividers/ThickDivider';
import DividerWithMargin from '../../../frame/components/dividers/DividerWithMargin';
import SubTitleMenu from '../../../frame/components/titles/SubTitleMenu';
import DefaultItem from '../../../frame/components/items/DefaultItem';
import SelectItem from '../../../frame/components/items/SelectItem';
import TextWithLeftIcon from '../../../frame/components/other/TextWithLeftIcon';
import PrimaryBtn from '../../../frame/components/btns/PrimaryBtn';
import GrayBtnWithBlueHover from '../../../frame/components/btns/GrayBtnWithBlueHover';
import ColorBlock from '../../../frame/components/other/ColorBlock';
import { ReactComponent as UserIcon } from '../../../assets/icons/ic_action_user.svg';
import { ReactComponent as NoteIcon } from '../../../assets/icons/ic_action_note_dark.svg';
import { ReactComponent as InfoIcon } from '../../../assets/icons/ic_action_info_outlined.svg';
import styles from '../../infoblock.module.css';

const VERDICTS = ['ok', 'wrong_activity', 'bad_quality', 'bad_line', 'simulated', 'garbage'];
const MAX_OTHER_COMMENTS = 3;
const ACTIVITY_IDS = activities.groups.flatMap((g) => g.activities.map((a) => a.id));

export default function TravelTrackReview() {
    const ctx = useContext(AppContext);
    const ltx = useContext(LoginContext);

    const { t } = useTranslation();

    const [review, setReview] = useState(null); // { id, view, failed }: the public reviews of the opened track
    const [verdict, setVerdict] = useState('');
    const [activity, setActivity] = useState('');
    const [comment, setComment] = useState('');
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const id = ctx.selectedGpxFile?.id;
        setReview(null);
        fillForm(null);
        if (id == null || ltx.loginUser === INIT_LOGIN_STATE) {
            return;
        }
        apiGet(`${TRAVEL_REVIEWS_URL}/reviews`, {
            params: { ids: id },
            abortControllerKey: OSM_GPX_ABORT_KEYS.reviews,
        }).then((response) => {
            if (response?.aborted) {
                return;
            }
            if (!response?.ok) {
                setReview({ id, view: null, failed: true });
                return;
            }
            const view = response.data?.[id] ?? null;
            setReview({ id, view });
            fillForm(view?.mine);
        });
    }, [ctx.selectedGpxFile?.id, ltx.loginUser]);

    function fillForm(mine) {
        setVerdict(mine?.verdict ?? '');
        setActivity(mine?.activity ?? '');
        setComment(mine?.comment ?? '');
    }

    async function saveReview(sentVerdict) {
        const id = ctx.selectedGpxFile.id;
        setSaving(true);
        const response = await apiPost(`${TRAVEL_REVIEWS_URL}/review`, {
            id,
            verdict: sentVerdict,
            activity: sentVerdict ? activity : '',
            comment: sentVerdict ? comment : '',
        });
        setSaving(false);
        if (!response?.ok) {
            ctx.setNotification({
                text: response?.status === 401 ? t('web:travel_review_sign_in') : t('web:travel_review_not_saved'),
                severity: 'error',
            });
            return;
        }
        setReview((prev) => (prev?.id === id ? { id, view: response.data } : prev));
        if (!sentVerdict) {
            fillForm(null);
        }
        ctx.setNotification({
            text: sentVerdict ? t('web:travel_review_saved') : t('web:travel_review_removed'),
            severity: 'success',
        });
    }

    const view = review?.view;
    const summary = review ? reviewSummary(view, t) || t('web:travel_no_reviews') : t('shared_string_loading');
    const otherComments = [view?.admin, ...(view?.users ?? [])]
        .filter((r) => r?.comment && !isEqual(r, view?.mine))
        .slice(0, MAX_OTHER_COMMENTS)
        .map((r) => `“${r.comment}”`);
    const activityOptions = [
        { key: '', name: t('web:travel_review_activity_not_set'), divider: true },
        ...ACTIVITY_IDS.map((key) => ({ key, name: activityLabel(key, t) })),
    ];

    return (
        <>
            <ThickDivider mt={0} mb={0} />
            <SubTitleMenu text={t('web:travel_review')} />
            <DefaultItem
                icon={<UserIcon />}
                name={t('web:travel_reviews')}
                additionalInfo={review?.failed ? t('web:travel_reviews_error') : summary}
                revertText={true}
            />
            {otherComments.length > 0 && (
                <>
                    <DividerWithMargin margin={'64px'} />
                    <DefaultItem
                        icon={<NoteIcon />}
                        name={t('poi_dialog_comment')}
                        additionalInfo={otherComments.join(' ')}
                        revertText={true}
                        maxLines={4}
                    />
                </>
            )}
            <ThickDivider mt={0} mb={0} />
            {review && ltx.isLoggedIn() && (
                <>
                    <SelectItem
                        title={t('web:travel_review_verdict')}
                        value={verdict}
                        options={VERDICTS}
                        getOptionLabel={(v) => t(`web:travel_review_verdict_${v}`)}
                        getOptionValue={(v) => v}
                        onSelect={setVerdict}
                        placeholder={t('web:travel_review_verdict_not_set')}
                    />
                    <SelectItem
                        title={t('web:travel_review_activity')}
                        value={activity}
                        options={activityOptions}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.key}
                        onSelect={setActivity}
                        showDivider={false}
                    />
                    <Box className={styles.travelReviewForm}>
                        <TextField
                            id="se-travel-review-comment"
                            label={t('poi_dialog_comment')}
                            fullWidth
                            multiline
                            minRows={2}
                            variant="filled"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <Box className={styles.travelReviewButtons}>
                            <PrimaryBtn
                                id="se-travel-review-send"
                                text={t('web:travel_review_send')}
                                action={() => saveReview(verdict)}
                                disabled={!verdict || saving}
                                span={true}
                            />
                            {view?.mine && (
                                <GrayBtnWithBlueHover
                                    id="se-travel-review-clear"
                                    text={t('web:travel_review_clear')}
                                    action={() => saveReview('')}
                                    disabled={saving}
                                    span={true}
                                />
                            )}
                        </Box>
                    </Box>
                </>
            )}
            {!ltx.isLoggedIn() && ltx.loginUser !== INIT_LOGIN_STATE && (
                <TextWithLeftIcon icon={<InfoIcon />} text={t('web:travel_review_sign_in')} />
            )}
            <ThickDivider mt={0} mb={0} />
            <ColorBlock color={'#f0f0f0'} />
        </>
    );
}

// "Admin: wrong line · Users (3): bad quality 2, correct 1"
function reviewSummary(view, t) {
    const label = (r) => {
        const verdict = t(`web:travel_review_verdict_${r.verdict}`);

        return r.activity ? `${verdict} → ${activityLabel(r.activity, t)}` : verdict;
    };
    const parts = [];
    if (view?.admin) {
        parts.push(t('web:travel_review_admin', { verdict: label(view.admin) }));
    }
    if (view?.users?.length) {
        const counts = {};
        view.users.forEach((r) => {
            counts[label(r)] = (counts[label(r)] ?? 0) + 1;
        });
        const verdicts = Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .map(([v, n]) => `${v} ${n}`)
            .join(', ');
        parts.push(t('web:travel_review_users', { n: view.users.length, verdicts }));
    }

    return parts.join(' · ');
}
