import React, { Suspense } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import LazyVisible from '@site/src/components/docs/legend/LazyVisible';
import { componentMap } from './componentMap';

export default function LazyLegendContent({ sectionData }) {
  if (!sectionData || !sectionData.component) {
    return null;
  }

  const { component, height } = sectionData;

  const LegendComponent = componentMap[component];

  if (!LegendComponent) {
    return <div style={{color: 'red'}}>Error: Component '{component}' not found in componentMap.</div>;
  }

  const getProps = () => {
    switch (component) {
      case 'LegendItemWithProcessing':
        return { svgPath: sectionData.svgPath, svgParts: sectionData.svgParts };
      case 'LegendItem':
        return { itemsMap: sectionData.itemsMap };
      default:
        return {};
    }
  };

  return (
    <div style={{
      minHeight: height ? `${height}px` : '240px',
      // A subtle background can indicate that content is coming.
      backgroundColor: height ? '#fafafa' : 'transparent',
    }}>
      <LazyVisible>
        <BrowserOnly>
          {() => (
            <Suspense fallback={
              <div style={{ width: '100%', height: '100%', display: 'grid', placeContent: 'center', color: '#999' }}>
                Loading…
              </div>
            }>
              <LegendComponent {...getProps()} />
            </Suspense>
          )}
        </BrowserOnly>
      </LazyVisible>
    </div>
  );
}