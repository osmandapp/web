import style from './buttons.module.css';
import React from 'react';
import BaseButton from './BaseButton';

export default function PrimaryBtn(props) {
    return <BaseButton {...props} className={style.primaryButton} />;
}
