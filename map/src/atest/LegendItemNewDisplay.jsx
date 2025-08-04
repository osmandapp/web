      
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import LegendItemNew from './LegendItemNew1'; // Adjust path if WaterwaysParser is in a different folder

const LegendItemNewDisplay = () => {

    return <LegendItemNew itemsName={[
          'River',
          'Canal',
          'Stream',
          'Drain',
          'Ditch',
          'Intermittent stream',
          'Dam',
          'Weir',
          'Groyne',
          'Breakwater',
          'Pier',
          'Cliff',
          'Slope',
          'Earth bank',
          'Ridge, arete',
          'Valley',
          'Waterfall',
          'Tree row',
          'Cutline',
          'Water-slide'
          ]} />;
};

export default LegendItemNewDisplay; // Export the component

    