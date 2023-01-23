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
        'Embassy' : 'administrative/administrative_amenity_embassy',
        'Townhall' : 'administrative/administrative_amenity_townhall',
        'Courthouse' : 'administrative/administrative_amenity_courthouse',
        'Prison' : 'administrative/administrative_amenity_prison',
    }});

}

