import { useContext, useEffect } from 'react';
import AppContext from '../../../context/AppContext';

export const CLOSE_MENU_BUTTON_ID = 'se-close-menu-button';

const ESC_IGNORE_TARGETS = 'input, textarea, [contenteditable="true"]';

// the menu panels stay mounted while hidden, so Esc follows the Close button that is actually visible
function isCloseMenuButtonVisible() {
    return [...document.querySelectorAll(`#${CLOSE_MENU_BUTTON_ID}`)].some((el) => el.checkVisibility());
}

export default function useCloseMenuByEsc() {
    const ctx = useContext(AppContext);

    useEffect(() => {
        if (!ctx.closableMenu) return;
        const closeMenuByEsc = (e) => {
            if (e.key !== 'Escape') return;
            if (e.defaultPrevented) return;
            if (e.target.closest?.(ESC_IGNORE_TARGETS)) return;
            if (!isCloseMenuButtonVisible()) return;
            ctx.setCloseSelectedMenu(true);
        };
        window.addEventListener('keydown', closeMenuByEsc);

        return () => window.removeEventListener('keydown', closeMenuByEsc);
    }, [ctx.closableMenu]);
}
