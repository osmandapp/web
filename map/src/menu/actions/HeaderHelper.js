import { MENU_INFO_CLOSE_SIZE } from '../../manager/GlobalManager';

export function closeHeader(ctx) {
    ctx.setInfoBlockWidth(MENU_INFO_CLOSE_SIZE);
    ctx.setCurrentObjectType(null);
}
