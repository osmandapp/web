import React from 'react';
import IframeResizer from '@iframe-resizer/react';
import styles from './QuizEmbed.module.css';

export default function QuizEmbed({ src }) {
  return (
    <div className={styles.quizFrame}>
      <IframeResizer
        license="GPLv3"
        src={src}
        heightCalculationMethod="max"
        className={styles.quizIframe}
      />
    </div>
  );
}