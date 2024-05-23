import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';

export function closeHeader({ ctx, setShowInfoBlock = null }) {
    if (setShowInfoBlock) {
        setShowInfoBlock(false);
    } else {
        ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE);
    }
    ctx.setCurrentObjectType(null);
}
