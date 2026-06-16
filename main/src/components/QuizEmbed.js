import React from 'react';
import IframeResizer from 'iframe-resizer-react';

export default function QuizEmbed({ src }) {
  return (
    <IframeResizer
      src={src}
      heightCalculationMethod="max"
      style={{
        width: '1px',
        minWidth: '100%',
        border: 'none',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        margin: '20px 0',
      }}
    />
  );
}
