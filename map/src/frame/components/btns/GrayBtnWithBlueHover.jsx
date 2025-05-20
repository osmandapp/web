import style from './buttons.module.css';
import React from 'react';
import BaseButton from './BaseButton';

export default function GrayBtnWithBlueHover(props) {
    return <BaseButton {...props} className={style.grayButton} />;
}
