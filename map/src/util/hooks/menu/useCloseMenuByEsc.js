import { useContext, useEffect } from 'react';
import AppContext from '../../../context/AppContext';

const ESC_IGNORE_TARGETS = 'input, textarea, [contenteditable="true"], [role="dialog"], [role="presentation"]';

export default function useCloseMenuByEsc(enabled = true) {
    const ctx = useContext(AppContext);

    const closable = enabled && ctx.closableMenu;

    useEffect(() => {
        if (!closable) return;
        const closeMenuByEsc = (e) => {
            if (e.key !== 'Escape') return;
            if (e.defaultPrevented) return;
            if (e.target.closest?.(ESC_IGNORE_TARGETS)) return;
            ctx.setCloseSelectedMenu(true);
        };
        window.addEventListener('keydown', closeMenuByEsc);

        return () => window.removeEventListener('keydown', closeMenuByEsc);
    }, [closable]);
}
