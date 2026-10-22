import { act, createElement, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import LoginContext, { LoginContextProvider } from '@map/context/LoginContext';
import { FREE_ACCOUNT } from '@map/manager/LoginManager';
import { apiGet } from '@map/util/HttpApi';

export const PRO_USER = 'pro@example.com';
export const FREE_USER = 'free@example.com';
// get-account-info of a paid account has no `account` field, a free one has account: 'Free'
export const PRO_INFO = { name: 'OsmAnd Pro', valid: 'true' };
export const FREE_INFO = { account: FREE_ACCOUNT };

let accountInfoReply;

// the server has a session of PRO_USER, get-account-info answers PRO_INFO until holdAccountInfo()
export function serveProSession() {
    accountInfoReply = Promise.resolve({ data: { info: PRO_INFO } });
    apiGet.mockImplementation(async (url) => {
        if (url.endsWith('/mapapi/auth/info')) {
            return { data: {}, json: async () => ({ username: PRO_USER }) };
        }
        if (url.endsWith('/mapapi/get-account-info')) {
            return accountInfoReply;
        }

        return null;
    });
}

// the next get-account-info stays unanswered until the returned function is called with the info
export function holdAccountInfo() {
    let answer;
    accountInfoReply = new Promise((resolve) => {
        answer = (info) => resolve({ data: { info } });
    });

    return async (info) => {
        answer(info);
        await flush();
    };
}

export function flush() {
    return act(() => new Promise((resolve) => setTimeout(resolve, 0)));
}

// renders children inside the real LoginContextProvider and waits for the session; login() is its current value
export async function renderWithLogin(children = null) {
    const previousActEnvironment = globalThis.IS_REACT_ACT_ENVIRONMENT;
    globalThis.IS_REACT_ACT_ENVIRONMENT = true;
    const container = document.createElement('div');
    document.body.append(container);
    const root = createRoot(container);
    let ltx;

    function Probe() {
        ltx = useContext(LoginContext);

        return null;
    }

    await act(async () => root.render(createElement(LoginContextProvider, null, createElement(Probe), children)));
    await flush();

    return {
        login: () => ltx,
        unmount: () => {
            act(() => root.unmount());
            container.remove();
            globalThis.IS_REACT_ACT_ENVIRONMENT = previousActEnvironment;
        },
    };
}
