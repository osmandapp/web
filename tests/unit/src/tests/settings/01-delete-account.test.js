import AccountManager from '@map/manager/AccountManager';
import { apiPost } from '@map/util/HttpApi';
import { findRequest } from '../../util/requests';

test('the code of the account deletion is sent in the body, not in the url', async () => {
    apiPost.mockResolvedValue({ status: 200 });
    const setAccountDeleted = jest.fn();

    await AccountManager.deleteAccount({ code: 'Pass word&1', setError: jest.fn(), setAccountDeleted });

    const { url, body, options } = findRequest(apiPost, '/mapapi/auth/delete-account');
    expect(url).not.toContain('?');
    expect(options.params).toBeUndefined();
    expect(options.headers['Content-Type']).toBe('application/x-www-form-urlencoded');
    expect(new URLSearchParams(body).get('token')).toBe('Pass word&1');
    expect(setAccountDeleted).toHaveBeenCalledWith(true);
});
