import { act } from 'react';
import { createRoot } from 'react-dom/client';

export function mountRoot() {
    const previousActEnvironment = globalThis.IS_REACT_ACT_ENVIRONMENT;
    globalThis.IS_REACT_ACT_ENVIRONMENT = true;
    const container = document.createElement('div');
    document.body.append(container);
    const root = createRoot(container);

    return {
        root,
        unmount: () => {
            act(() => root.unmount());
            container.remove();
            globalThis.IS_REACT_ACT_ENVIRONMENT = previousActEnvironment;
        },
    };
}
