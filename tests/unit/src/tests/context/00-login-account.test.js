import { act } from 'react';
import { FREE_INFO, FREE_USER, PRO_INFO, holdAccountInfo, renderWithLogin, serveProSession } from '../../util/login';

let view;

beforeEach(() => {
    serveProSession();
});

afterEach(() => {
    view?.unmount();
});

test('after a logout the next user gets their own account, not the one of the previous user', async () => {
    view = await renderWithLogin();
    expect(view.login().accountInfo).toEqual(PRO_INFO);

    await act(() => view.login().setLoginUser(''));
    expect(view.login().accountInfo).toBeNull();

    const answerFree = holdAccountInfo();
    await act(() => view.login().setLoginUser(FREE_USER));
    await answerFree(FREE_INFO);
    expect(view.login().accountInfo).toEqual(FREE_INFO);
    expect(view.login().isProAccount()).toBe(false);
});
