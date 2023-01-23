import React from 'react';
import clsx from 'clsx';
import styles from '../LegendItem.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import LegendItem from "../LegendItem";


// This code was automatically generated 
// with Java-tools SvgMapLegendGenerator

export default function Render() {

    return LegendItem({itemsMap: {
        'Bank' : 'finance/finance_amenity_bank',
        'Atm' : 'finance/finance_amenity_atm',
        'Payment terminal' : 'finance/finance_payment_terminal',
        'Payment centre' : 'finance/finance_payment_centre',
        'Money lender' : 'finance/finance_money_lender',
        'Money transfer' : 'finance/finance_shop_yes',
        'Bureau de change' : 'finance/finance_amenity_bureau_de_change',
        'Mobile money agent' : 'finance/finance_mobile_money_agent',
        'Ticket validator' : 'finance/finance_ticket_validator',
    }});

}

