import { ReactComponent as LogoMapsPlusIcon } from '../../assets/icons/ic_action_osmand_maps_plus.svg';
import { PRODUCT_NAME_MAPS_PLUS } from '../../shop/products/ProductManager';
import styles from './pro.module.css';
import PlanButton from './PlanButton';

export default function ButtonMapsPlus({ onClick }) {
    return (
        <PlanButton
            className={styles.mapsPlusButton}
            logo={<LogoMapsPlusIcon />}
            label={<span className={styles.mapsPlusButtonText}>{PRODUCT_NAME_MAPS_PLUS}</span>}
            onClick={onClick}
        />
    );
}
