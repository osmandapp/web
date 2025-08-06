      
import LegendItemNew from './LegendItemNew';

const LegendItemNewDisplay = () => {

    return <LegendItemNew svgPath={'/map/images/waterways.svg'} itemsName={[
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

export default LegendItemNewDisplay;