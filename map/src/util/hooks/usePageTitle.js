import { useEffect, useRef } from 'react';

let originalTitle = null;

/**
 * Custom hook to manage page title temporarily.
 * Stores the original title and restores it when the component unmounts.
 *
 * @param {string|null} title - The title to set. If null or undefined, restores the original title.
 * @example
 * // Set a title based on search results
 * usePageTitle(searchQuery || null);
 *
 * // Set a title based on category
 * usePageTitle(categoryName);
 */
export function usePageTitle(title) {
    const hasSetTitleRef = useRef(false);

    useEffect(() => {
        if (originalTitle === null) {
            originalTitle = document.title;
        }
        if (title) {
            document.title = title;
            hasSetTitleRef.current = true;
        } else {
            document.title = originalTitle;
            hasSetTitleRef.current = false;
        }
        return () => {
            if (hasSetTitleRef.current) {
                document.title = originalTitle;
            }
        };
    }, [title]);
}
