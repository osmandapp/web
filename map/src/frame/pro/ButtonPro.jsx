import { ReactComponent as ProIcon } from '../../assets/pro.svg';
import { ReactComponent as LogoProIcon } from '../../assets/ic_action_osmand_pro_logo_colored.svg';
import styles from './pro.module.css';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import PlanButton from './PlanButton';

export default function ButtonPro({ type, onClick }) {
    const ctx = useContext(AppContext);

    function open() {
        if (onClick) {
            onClick();
        } else {
            ctx.setOpenProFeatures({ type });
        }
    }

    return (
        <PlanButton
            className={styles.proButton}
            logo={<LogoProIcon style={{ width: '24px', height: '24px' }} />}
            label={<ProIcon />}
            onClick={open}
        />
    );
}
