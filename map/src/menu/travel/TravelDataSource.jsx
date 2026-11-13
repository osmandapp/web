import React from 'react';
import { Trans } from 'react-i18next';
import { ReactComponent as InfoIcon } from '../../assets/icons/ic_action_info_outlined.svg';
import TextWithLeftIcon from '../../frame/components/other/TextWithLeftIcon';
import styles from './travel.module.css';

export const OSM_TRACES_URL = 'https://www.openstreetmap.org/traces';
const UPLOAD_TRACK_DOCS_URL = 'https://osmand.net/docs/user/plugins/osm-editing#upload-gps-track';

// the tip row cancels clicks, so a link keeps its own
function ExternalLink({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dataSourceLink}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </a>
    );
}

// where the Travel tracks come from and how to add one
export default function TravelDataSource() {
    return (
        <TextWithLeftIcon
            icon={<InfoIcon />}
            text={
                <span id="se-travel-data-source">
                    <Trans
                        i18nKey="web:travel_data_source"
                        components={{
                            osm: <ExternalLink href={OSM_TRACES_URL} />,
                            upload: <ExternalLink href={UPLOAD_TRACK_DOCS_URL} />,
                        }}
                    />
                </span>
            }
        />
    );
}
