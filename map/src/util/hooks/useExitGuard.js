import { useEffect, useRef, useState } from 'react';

/**
 * Guards actions with an "Exit without saving?" dialog.
 * The dialog is fully defined in the calling component — text, style, callbacks.
 * This hook only manages the pending-action state.
 *
 * Usage:
 *   const { guardAction, dialog } = useExitGuard({
 *       hasChanges,
 *       renderDialog: ({ onKeepEditing, onExit }) => (
 *           <ExitWithoutSavingDialog open={true} onKeepEditing={onKeepEditing} onExit={onExit} />
 *       ),
 *       onExitConfirmed: () => { ... cleanup ... },
 *       // Optional: expose guardAction to other components via ctx.exitGuards.
 *       // register(fn) is called with a stable guard on mount, register(null) on unmount.
 *       register: (fn) => ctx.setExitGuards((prev) => fn ? { ...prev, myKey: fn } : omit(prev, 'myKey')),
 *   });
 *
 *   // Wrap any user action:
 *   guardAction(() => doSomething());
 *
 *   // Place once in JSX:
 *   {dialog}
 *
 * @param {boolean}  hasChanges        - whether there are unsaved changes
 * @param {Function} renderDialog      - ({ onKeepEditing, onExit }) => ReactElement
 * @param {Function} [onExitConfirmed] - called before the pending action when user confirms exit
 * @param {Function} [register]        - called with stable guardAction on mount, null on unmount
 */
export default function useExitGuard({ hasChanges, renderDialog, onExitConfirmed, register }) {
    const [pendingAction, setPendingAction] = useState(null);

    function guardAction(action) {
        if (hasChanges) {
            setPendingAction(() => action);
            return;
        }
        action();
    }

    const guardRef = useRef(guardAction);
    guardRef.current = guardAction;

    useEffect(() => {
        if (!register) return;
        const stableGuard = (action) => guardRef.current(action);
        register(stableGuard);
        return () => register(null);
    }, []);

    const dialog =
        pendingAction !== null
            ? renderDialog({
                  onKeepEditing: () => setPendingAction(null),
                  onExit: () => {
                      setPendingAction(null);
                      onExitConfirmed?.();
                      pendingAction();
                  },
              })
            : null;

    return { guardAction, dialog };
}
