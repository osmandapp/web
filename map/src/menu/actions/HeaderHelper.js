import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';
import { OBJECT_TYPE_FAVORITE } from '../../context/AppContext';

export function closeHeader({ ctx, setShowInfoBlock = null }) {
    if (setShowInfoBlock) {
        setShowInfoBlock(false);
    } else {
        ctx.setInfoBlockWidth(`${MENU_INFO_CLOSE_SIZE}px`);
    }
    if (ctx.currentObjectType === OBJECT_TYPE_FAVORITE) {
        ctx.setSelectedGpxFile({});
        ctx.setSelectedFavoriteObj(null);
    }
    ctx.setCurrentObjectType(null);
}
