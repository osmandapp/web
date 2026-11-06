import { useContext, useEffect } from 'react';
import AppContext from '../../../context/AppContext';

export default function useClearOpenedPopper(open, anchorEl) {
    const ctx = useContext(AppContext);

    useEffect(() => {
        if (!open && ctx.openedPopper === anchorEl) {
            ctx.setOpenedPopper(null);
        }
    }, [open]);

    useEffect(() => {
        return () => ctx.setOpenedPopper((popper) => (popper === anchorEl ? null : popper));
    }, []);
}
