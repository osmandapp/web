import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { createUrlParams } from '../../Utils';

export function useUpdateQueryParam() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    return (key, value, expectedLocation, { replace = true } = {}) => {
        if (expectedLocation && expectedLocation !== location.pathname) {
            // Prevent updating query param if location has changed
            return;
        }
        const next = new URLSearchParams(searchParams);
        if (value === null || value === undefined) {
            next.delete(key);
        } else {
            next.set(key, value);
        }

        const params = {};
        next.forEach((value, key) => {
            params[key] = value;
        });
        const nextStr = createUrlParams(params);
        const hash = window.location.hash || location.hash || '';
        navigate(
            {
                pathname: location.pathname,
                search: nextStr,
                hash,
            },
            { replace, preventScrollReset: true }
        );
    };
}
