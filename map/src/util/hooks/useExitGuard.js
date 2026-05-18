import { useLayoutEffect, useState } from 'react';

/**
 * Guards actions with an "Exit without saving?" dialog.
 *
 * Handles two kinds of triggers:
 *   1. Local (back button, close icon): call guardAction(fn) directly.
 *   2. External (map marker click, context menu, etc.): pass a `register`
 *      callback — the hook registers itself in context so any caller can do
 *      ctx.exitGuards.wptEdit.guard(fn).  Re-registers automatically when hasChanges
 *      changes so callers always see the current state.
 * For URL navigations use React Router's useBlocker.
 *
 * Usage:
 *   const { guardAction, dialog } = useExitGuard({
 *       hasChanges,
 *       renderDialog: ({ onKeepEditing, onExit }) => (
 *           <ExitWithoutSavingDialog open={true} onKeepEditing={onKeepEditing} onExit={onExit} />
 *       ),
 *       register: (g) => ctx.setExitGuards((prev) => ({ ...prev, wptEdit: g ?? undefined })), // optional
 *   });
 *
 *   guardAction(() => doSomething());  // wrap any local action
 *   {dialog}                           // place once in JSX
 *
 * @param {boolean}  hasChanges   - whether there are unsaved changes
 * @param {Function} renderDialog - ({ onKeepEditing, onExit }) => ReactElement
 * @param {Function} [register]   - (guard | null) => void — called with
 *                                  { hasChanges, guard: fn } on mount/update
 *                                  and with null on unmount
 */
export default function useExitGuard({ hasChanges, renderDialog, register }) {
    const [pendingAction, setPendingAction] = useState(null);

    function guardAction(action) {
        if (hasChanges) {
            setPendingAction(() => action);
            return;
        }
        action();
    }

    // Register in context using useLayoutEffect (fires synchronously after DOM
    // update, before paint) so callers never see a stale or missing guard.
    // Re-runs whenever hasChanges flips to keep the registered snapshot current.
    useLayoutEffect(() => {
        register?.({ hasChanges, guard: guardAction });
        return () => register?.(null);
    }, [hasChanges]);

    const dialog =
        pendingAction !== null
            ? renderDialog({
                  onKeepEditing: () => setPendingAction(null),
                  onExit: () => {
                      const action = pendingAction;
                      setPendingAction(null);
                      action();
                  },
              })
            : null;

    return { guardAction, dialog };
}
