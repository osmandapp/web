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
        'Hospital' : 'health/health_amenity_hospital',
        'Pharmacy' : 'health/health_amenity_pharmacy',
        'Emergency Phone' : 'health/health_emergency_phone',
        'Doctors' : 'health/health_amenity_doctors',
        'Veterinary' : 'health/health_amenity_veterinary',
        'Fire station' : 'health/health_amenity_fire_station',
        'Police' : 'health/health_amenity_police',
        'Dentist' : 'health/health_amenity_dentist',
        'Social facility' : 'health/health_social_facility',
        'Ambulance station' : 'health/health_ambulance_station',
    }});

}

