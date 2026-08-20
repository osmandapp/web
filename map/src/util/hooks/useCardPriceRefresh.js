import { useEffect } from 'react';

export default function useCardPriceRefresh(updateCardPrices, setUpdateCardPrices, onRefresh) {
    useEffect(() => {
        if (updateCardPrices) {
            onRefresh();
            setUpdateCardPrices(false);
        }
    }, [updateCardPrices]);
}
