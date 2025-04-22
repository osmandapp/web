import style from './buttons.module.css';
import React from 'react';
import BaseButton from './BaseButton';

export default function BlueBtn(props) {
    return <BaseButton {...props} className={style.blueButton} />;
}
