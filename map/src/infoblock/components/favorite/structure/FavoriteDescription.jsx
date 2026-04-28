import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SubTitleMenu from '../../../../frame/components/titles/SubTitleMenu';
import SectionRow from '../../../../frame/components/items/SectionRow';
import { htmlToText } from '../../../../frame/components/editor/htmlUtils';
import styles from '../wptEditPanel.module.css';

const ROW_MULTILINE_THRESHOLD = 50;

export default function FavoriteDescription({ favoriteDescription, onClick }) {
    const { t } = useTranslation();
    const ref = useRef(null);
    const [isMultiline, setIsMultiline] = useState(false);
    const preview = htmlToText(favoriteDescription) || t('web:add_notes');

    useEffect(() => {
        const wrap = ref.current;
        if (!wrap) return;
        const update = () => {
            const row = wrap.querySelector('[role="menuitem"]');
            setIsMultiline((row?.clientHeight ?? 0) > ROW_MULTILINE_THRESHOLD);
        };
        update();
        const observer = new ResizeObserver(update);
        observer.observe(wrap);

        return () => observer.disconnect();
    }, [preview]);

    return (
        <div ref={ref} className={isMultiline ? styles.descriptionSection : undefined}>
            <SubTitleMenu text={t('shared_string_description')} />
            <SectionRow id="se-add-fav-add-desc-btn" name={preview} maxLines={2} onClick={onClick} />
        </div>
    );
}
