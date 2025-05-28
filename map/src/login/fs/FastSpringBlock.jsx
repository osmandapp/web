import { Checkbox, Divider, FormControlLabel, MenuItem } from '@mui/material';
import { purchases } from './FastSpringHelper';
import FastSpringPurchaseButton from './FastSpringPurchaseButton';
import React, { useContext, useState } from 'react';
import LoginContext from '../../context/LoginContext';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';

export default function FastSpringBlock() {
    const ltx = useContext(LoginContext);

    const [selectedProducts, setSelectedProducts] = useState([]);

    const toggleProductSelection = (item) => {
        setSelectedProducts((prevSelected) => {
            if (prevSelected.includes(item)) {
                return prevSelected.filter((product) => product !== item);
            } else {
                return [...prevSelected, item];
            }
        });
    };

    return (
        <>
            <Divider sx={{ mt: 2 }} />
            <SubTitleMenu text={`${t('web:subscriptions_and_purchases')}:`} />
            <MenuItem sx={{ mt: -1 }}>
                {purchases.products.map((item, index) => (
                    <FormControlLabel
                        key={item.key + index}
                        label={item.value}
                        control={
                            <Checkbox
                                size="small"
                                checked={selectedProducts.includes(item.key)}
                                onChange={() => toggleProductSelection(item.key)}
                            />
                        }
                    />
                ))}
            </MenuItem>
            <MenuItem sx={{ mt: -1 }}>
                {purchases.subscriptions.map((item, index) => (
                    <FormControlLabel
                        key={item.key + index}
                        label={item.value}
                        control={
                            <Checkbox
                                size="small"
                                disabled={item.type === 'pro' && ltx.accountInfo?.state === 'active'}
                                checked={selectedProducts.includes(item.key)}
                                onChange={() => toggleProductSelection(item.key)}
                            />
                        }
                    />
                ))}
            </MenuItem>
            <FastSpringPurchaseButton selectedProducts={selectedProducts} ltx={ltx} />
            <FastSpringPurchaseButton selectedProducts={selectedProducts} testMode={true} ltx={ltx} />
        </>
    );
}
