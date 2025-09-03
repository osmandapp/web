import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export function useUpdateQueryParam() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    return (key, value, { replace = true } = {}) => {
        const next = new URLSearchParams(searchParams);
        if (value === null || value === undefined) {
            next.delete(key);
        } else {
            next.set(key, value);
        }
        const nextStr = next.toString();
        const hash = window.location.hash || location.hash || '';
        navigate(
            {
                pathname: location.pathname,
                search: nextStr ? `?${nextStr}` : '',
                hash,
            },
            { replace, preventScrollReset: true }
        );
    };
}
