import { useLayoutEffect, useRef, useState } from 'react';

export function useIsVisible() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const check = () => {
        if (!ref.current) {
            setIsVisible(false);
            return;
        }

        let node = ref.current;
        let visible = true;

        while (node) {
            const cs = getComputedStyle(node);
            if (cs.display === 'none' || cs.visibility === 'hidden') {
                visible = false;
                break;
            }
            node = node.parentElement;
        }

        const rect = ref.current.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
            visible = false;
        }

        setIsVisible(visible);
    };

    // update on each render
    useLayoutEffect(() => {
        check();
    });

    // update on mount and when element's attributes or window size changes
    useLayoutEffect(() => {
        if (!ref.current) return;

        const mo = new MutationObserver(check);
        let n = ref.current;
        while (n) {
            mo.observe(n, { attributes: true, attributeFilter: ['style', 'class'] });
            n = n.parentElement;
        }

        window.addEventListener('resize', check);
        return () => {
            mo.disconnect();
            window.removeEventListener('resize', check);
        };
    }, []);

    return [ref, isVisible ? 'visible' : 'invisible'];
}
