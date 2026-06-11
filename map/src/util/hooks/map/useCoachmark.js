import { useEffect } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const COACHMARKS_STORAGE_KEY = 'coachmarksSeen';

// Generic one-time onboarding hint. Highlights `targetId` with a Driver.js popover the first time
// it becomes available, then never again (per-`id` flag in localStorage). Reusable on any element.
// `side`/`align` control where the popover appears relative to the element (Driver.js placement).
export function useCoachmark({ id, targetId, description, enabled = true, side = 'right', align = 'start' }) {
    useEffect(() => {
        if (!enabled) return;
        if (!id || !targetId) return;
        if (isCoachmarkSeen(id)) return;

        const element = document.getElementById(targetId);
        if (!element) return;

        markCoachmarkSeen(id);

        const driverObj = driver({
            showProgress: false,
            showButtons: ['close'],
            steps: [{ element: `#${targetId}`, popover: { description, side, align } }],
        });
        driverObj.drive();

        return () => driverObj.destroy();
    }, [enabled, id, targetId, description, side, align]);
}

function readSeen() {
    try {
        return JSON.parse(localStorage.getItem(COACHMARKS_STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function isCoachmarkSeen(id) {
    return readSeen()[id] === true;
}

function markCoachmarkSeen(id) {
    const seen = readSeen();
    seen[id] = true;
    localStorage.setItem(COACHMARKS_STORAGE_KEY, JSON.stringify(seen));
}
