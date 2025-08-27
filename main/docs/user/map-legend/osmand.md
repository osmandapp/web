---
sidebar_position: 1
title: OsmAnd Map Style
---
import LazyVisible from '@site/src/components/util/LazyVisible';
import React, {Suspense} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Translate from '@site/src/components/Translate.js';

# OsmAnd map style {#osmand-map-style}
<Translate android="yes" id="default_render_descr" />


## Highways {#highways}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
            svgPath="/img/map-legend/osmand-highways"
            svgParts={{
            'highways': 'Highways',
            'motorway': 'Motorway',
            'trunk': 'Trunk',
            'primary': 'Primary',
            'secondary': 'Secondary',
            'tertiary': 'Tertiary',
            'residential': 'Residential',
            'unclassified': 'Unclassified',
            'service': 'Service',
            'driveway': 'Driveway',
            'living_street': 'Living street',
            'pedestrian': 'Pedestrian',
            'road_unknown_type': 'Road (unknown type)',
            'track': 'Track',
            'cycleway': 'Cycleway',
            'raceway': 'Raceway',
            'escape_lane': 'Escape lane',
            'abandoned_road': 'Abandoned road',
            'abandoned_track': 'Abandoned track',
            'bus_way': 'Bus way',
            'footway': 'Footway',
            'footway_crossing': 'Footway crossing',
            'path': 'Path',
            'steps': 'Steps',
            'steps_with_a_ramp': 'Steps with a ramp',
            'escalator': 'Escalator',
            'goods_conveyor': 'Goods conveyor',
            'elevator': 'Elevator',
            'bridleway': 'Bridleway',
            'construction': 'Construction',
            'proposed': 'Proposed',
            'bridges_1': 'Bridges',
            'tunnels_1': 'Tunnels',
            'bridges_2': 'Bridges',
            'tunnels_2': 'Tunnels',
            'cycleway_lane': 'Cycleway lane',
            'cycleway_track': 'Cycleway track',
            'cycleway_opposite_lane': 'Cycleway opposite lane',
            'cycleway_share_busway': 'Cycleway-share busway',
            'cycleway_opposite': 'Cycleway opposite',
            'cycle_street': 'Cycle street'
            }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Railways {#railways}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
          svgPath={'/img/map-legend/osmand-railways'}
          svgParts={{
          'rail': 'Rail',
          'bridge': 'Bridge',
          'tunnel': 'Tunnel',
          'railway_spur': 'Railway spur',
          'tram': 'Tram',
          'subway': 'Subway',
          'subway_underground': 'Subway (underground)',
          'light_rail': 'Light rail',
          'abandoned': 'Abandoned',
          'disused': 'Disused',
          'preserved': 'Preserved',
          'narrow_gauge': 'Narrow gauge',
          'construction': 'Construction',
          'monorail': 'Monorail',
          'funicular': 'Funicular'
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Aerialways {#aerialways}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
          svgPath={'/img/map-legend/osmand-aerialways'}
          svgParts={{
          'cable_car': 'Cable car',
          'gondola': 'Gondola',
          'chair_lift': 'Chair lift',
          't_bar': 'T-bar',
          'j_bar': 'J-bar',
          'platter': 'Platter',
          'mixed_lift': 'Mixed-lift',
          'drag_lift': 'Drag lift',
          'magic_carpet': 'Magic carpet',
          'rope_tow': 'Rope tow',
          'goods': 'Goods',
          'zip_line': 'Zip-line'
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Routes {#routes}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
          svgPath={'/img/map-legend/osmand-routes'}
          svgParts={{
          'transport_bus': 'Bus',
          'transport_share_taxi': 'Share taxi',
          'transport_trolleybus': 'Trolleybus',
          'transport_tram': 'Tram',
          'transport_train': 'Train',
          'transport_light_rail': 'Light rail',
          'transport_monorail': 'Monorail',
          'transport_funicular': 'Funicular',
          'routes_hiking': 'Hiking route',
          'routes_hiking_osmc': 'Hiking route (OSMC)',
          'routes_ferry': 'Ferry route',
          'mtb_scale_imba_0': 'MTB Scale IMBA 0',
          'mtb_scale_imba_1': 'MTB Scale IMBA 1',
          'mtb_scale_imba_2': 'MTB Scale IMBA 2',
          'mtb_scale_imba_3_4': 'MTB Scale IMBA 3,4',
          'infrastructure_railway_platform': 'Railway platform',
          'infrastructure_public_transport_platform': 'Public transport platform',
          'infrastructure_runway': 'Runway',
          'infrastructure_taxiway': 'Taxiway',
          'infrastructure_leisure_track': 'Leisure track',
          'infrastructure_minor_power_line': 'Minor power line',
          'infrastructure_major_power_line': 'Major power line',
          'infrastructure_roller_coaster': 'Roller-coaster',
          'infrastructure_reinforced_slope': 'Reinforced slope',
          'infrastructure_crevasse': 'Crevasse',
          'illumination_not_illuminated_street': 'Not illuminated street',
          'cycling_international_network': 'International Cycling Network',
          'cycling_local_network': 'Local Cycling Network',
          'cycling_national_network': 'National Cycling Network',
          'cycling_regional_network': 'Regional Cycling Network',
          'cycling_bicycle_route': 'Bicycle route',
          'mtb_route': 'MTB route',
          'mtb_scale_0_easy': '0 - Easy',
          'mtb_scale_1_intermediate': '1 - Intermediate, uphill: 1',
          'mtb_scale_2_advanced': '2 - Advanced, uphill: 2',
          'mtb_scale_3_expert': '3 - Expert, uphill: 3',
          'mtb_scale_4_extreme_i': '4 - Extreme I, uphill: 4',
          'mtb_scale_5_extreme_ii': '5 - Extreme II, uphill: 5',
          'mtb_scale_6_impossible': '6 - Impossible',
          'biking_recommended': 'Recommended (yellow glow)',
          'biking_bad_for_biking': 'Bad for biking (transparent)',
          'barriers_regular': 'Regular barrier',
          'barriers_ditch': 'Ditch (barrier)',
          'barriers_hedge': 'Hedge',
          'barriers_city_wall': 'City wall',
          'barriers_retaining_wall': 'Retaining wall',
          'barriers_embankment': 'Embankment',
          'barriers_barrier_embankment': 'Barrier embankment',
          'barriers_pipeline': 'Pipeline',
          'boundaries_administrative': 'Administrative boundary',
          'boundaries_national_park': 'National park boundary',
          'illumination_illuminated_street': 'Illuminated street',
          'illumination_underground_illuminated_way': 'Underground illuminated way',
          'illumination_temporarily_illuminated_street': 'Temporarily illuminated street'
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Dirtbike scale {#dirtbike-scale}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
          svgPath={'/img/map-legend/osmand-routes-dirtbike'}
          svgParts={{
          'g0': '0',
          'g1': '1',
          'g2': '2',
          'g3': '3',
          'g4': '4',
          'g5': '5',
          'g6': '6',
          'g7': '?'
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Via ferrata {#via-ferrata}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
          svgPath={'/img/map-legend/osmand-via-ferrata'}
          svgParts={{
          'via_ferrata': 'Via ferrata',
          'scale_0': 'Scale 0',
          'scale_1': 'Scale 1',
          'scale_2': 'Scale 2',
          'scale_3': 'Scale 3',
          'scale_4': 'Scale 4',
          'scale_5': 'Scale 5',
          'scale_6': 'Scale 6'
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Path difficulty {#path-difficulty}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
          svgPath={'/img/map-legend/osmand-path-difficulty'}
          svgParts={{
          'hiking': 'Hiking',
          'mountain_hiking': 'Mountain hiking',
          'demanding_mountain_hiking': 'Demanding mountain hiking',
          'alpine_hiking': 'Alpine hiking',
          'demanding_alpine_hiking': 'Demanding alpine hiking',
          'difficult_alpine_hiking': 'Difficult alpine hiking',
          'grade_1': 'Grade 1',
          'grade_2': 'Grade 2',
          'grade_3': 'Grade 3',
          'grade_4': 'Grade 4',
          'grade_5': 'Grade 5'
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Surface smoothness {#surface-smoothness}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
          svgPath={'/img/map-legend/osmand-surface-smoothness'}
          svgParts={{
          'asphalt': 'Asphalt',
          'paved': 'Paved (concrete,stone,wood etc)',
          'loosely_paved': 'Loosely paved (compacted, gravel)',
          'ground_earth': 'Ground,earth',
          'sand': 'Sand',
          'grass': 'Grass',
          'grass_paver': 'Grass paver',
          'dirt': 'Dirt',
          'mud': 'Mud',
          'ice_snow': 'Ice,snow',
          'salt': 'Salt',
          'excellent': 'Excellent (grade1)',
          'good': 'Good (grade2)',
          'intermediate': 'Intermediate (grade3)',
          'bad': 'Bad (grade3)',
          'very_bad': 'Very bad (grade4)',
          'horrible': 'Horrible (grade4)',
          'very_horrible': 'Very horrible (grade5)',
          'impassable': 'Impassable (grade5)',
          'bad_trail_visibility': 'Bad trail visibility'
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Access {#access}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
          svgPath={'/img/map-legend/osmand-access'}
          svgParts={{
          'access_PrivateColor' :'Access Private',
          'access_DestinationColor' :'Access Destination',
          'access_PermissiveColor' :'Access Permissive',
          'access_CustomersColor' :'Access Customers',
          'access_DeliveryColor' :'Access Delivery',
          'access_AgriculturalColor' :'Access Agricultural',
          'access_EmergencyColor' :'Access Emergency',
          'access_tollColor' :'Access Toll'
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Waterways {#waterways}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
          svgPath={'/img/map-legend/osmand-waterways'}
          svgParts={{
          'river': 'River',
          'canal': 'Canal',
          'stream': 'Stream',
          'drain': 'Drain',
          'ditch': 'Ditch',
          'intermittent_stream': 'Intermittent stream',
          'dam': 'Dam',
          'weir': 'Weir',
          'groyne': 'Groyne',
          'breakwater': 'Breakwater',
          'pier': 'Pier',
          'cliff': 'Cliff',
          'slope': 'Slope',
          'earth_bank': 'Earth bank',
          'ridge_arete': 'Ridge, arete',
          'valley': 'Valley',
          'waterfall': 'Waterfall',
          'tree_row': 'Tree row',
          'cutline': 'Cutline',
          'water_slide': 'Water-slide'
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Buildings, transportation {#buildings-transportation}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItem = React.lazy(() => import('@site/src/components/docs/LegendItem.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItem 
          itemsMap={{
          'Regular Building' : 'buildigns/building_RegularColor',
          'Industrianl, garagaes etc.' : 'buildigns/building_IndustrialColor',
          'Residential' : 'buildigns/building_ResidentialColor',
          'Hospital, civic, educational' : 'buildigns/building_HospitalColor',
          'Commercial, retail' : 'buildigns/building_CommercialColor',
          'Place of worship, historic tower' : 'buildigns/building_churchColor',
          'Abandoned, damaged, collapsed' : 'buildigns/building_AbandonedColor',
          'Construction' : 'buildigns/building_ConstructionColor',
          'Proposed' : 'buildigns/building_ProposedColor',
          'Military: barraks' : 'buildigns/building_MilitaryColor',
          'Bunker' : 'buildigns/building_bunker',
          'Railway station' : 'buildigns/building_railway_station',
          'Aerialway station' : 'buildigns/building_aerialway_station',
          'Public transport platform' : 'buildigns/building_public_transport_platform',
          'Aerodrome' : 'buildigns/building_aerodromeColor',
          'Aeroway terminal' : 'buildigns/building_aerowayTerminalColor',
          'Apron' : 'buildigns/building_apronColor',
          'Helipad' : 'buildigns/building_aeroway_helipad',
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Sport, leisure {#sport-leisure}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItem = React.lazy(() => import('@site/src/components/docs/LegendItem.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItem 
          itemsMap={{
          'Stadium' : 'sport_leisure/sport_Stadium',
          'Sports Centre' : 'sport_leisure/sport_sportsCentreColor',
          'Track (leisure)' : 'sport_leisure/sport_track',
          'Golf Course' : 'sport_leisure/leisure_golfCourseColor',
          'Park' : 'sport_leisure/leisure_Park',
          'Recreation ground' : 'sport_leisure/leisure_recreationGroundColor',
          'Pitch' : 'sport_leisure/leisure_pitchColor',
          'Horse riding' : 'sport_leisure/leisure_horse_riding',
          'Playground' : 'sport_leisure/leisure_playgroundColor',
          'Common (leisure)' : 'sport_leisure/leisure_leisureCommonColor',
          'Camp site' : 'sport_leisure/leisure_camp_site',
          'Outdoor seating' : 'sport_leisure/leisure_outdoor_seating',
          'Caravan site' : 'sport_leisure/leisure_caravan_site',
          'Picnic site' : 'sport_leisure/leisure_picnic_site',
          'Rest area' : 'sport_leisure/leisure_rest_area',
          'Beach resort' : 'sport_leisure/leisure_beach_resort',
          'Bleachers' : 'sport_leisure/leisure_bleachers',
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Built-up areas {#built-up-areas}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItem = React.lazy(() => import('@site/src/components/docs/LegendItem.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItem 
          itemsMap={{
          'Place Of Worship' : 'built-up-areas/built-up_PlaceOfWorship',
          'Monastery' : 'built-up-areas/built-up_Monastery',
          'Water Park' : 'built-up-areas/built-up_WaterPark',
          'Theme Park' : 'built-up-areas/built-up_ThemePark',
          'Zoo' : 'built-up-areas/built-up_Zoo',
          'Climbing Crag' : 'built-up-areas/built-up_ClimbingCrag',
          'Landuse Allotments Color' : 'built-up-areas/built-up_landuseAllotmentsColor',
          'City Wall' : 'built-up-areas/built-up_CityWall',
          'Fountain' : 'built-up-areas/built-up_Fountain',
          'Cinema' : 'built-up-areas/built-up_amenityCinema',
          'Hospital' : 'built-up-areas/built-up_amenityHospital',
          'Social Facility' : 'built-up-areas/built-up_SocialFacility',
          'LandFill' : 'built-up-areas/built-up_LandFill',
          'Spoil heap' : 'built-up-areas/built-up_spoilHeapColor',
          'Landuse Construction Color' : 'built-up-areas/built-up_landuseConstructionColor',
          'Prison' : 'built-up-areas/built-up_Prison',
          'Quarry' : 'built-up-areas/built-up_landuseQuarry',
          'Military' : 'built-up-areas/built-up_landuseMilitary',
          'Military Danger Area' : 'built-up-areas/built-up_landuseMilitaryDangerArea',
          'Power Plant' : 'built-up-areas/built-up_landusePowerPlant',
          'Power Substation' : 'built-up-areas/built-up_landusePowerSubstation',
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Landuse {#landuse}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItem = React.lazy(() => import('@site/src/components/docs/LegendItem.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItem 
          itemsMap={{
          'Residential' : 'built-up-areas/built-up_Residential',
          'Residential (Rural)' : 'built-up-areas/built-up_ResidentialRural',
          'Industrial' : 'built-up-areas/built-up_landuseIndustrialColor',
          'Garages' : 'built-up-areas/built-up_landuseGaragesColor',
          'Railway' : 'built-up-areas/built-up_landuseRailway',
          'Farmyard' : 'built-up-areas/built-up_farmyardColor',
          'Retail' : 'built-up-areas/built-up_landuseRetailColor',
          'Commercial' : 'built-up-areas/built-up_landuseCommercialColor',
          'Abandone place' : 'built-up-areas/built-up_placeAbandoned',
          'Animal Keeping' : 'built-up-areas/built-up_AnimalKeeping',
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Parking {#parking}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItem = React.lazy(() => import('@site/src/components/docs/LegendItem.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItem 
          itemsMap={{
          'Parking' : 'built-up-areas/built-up_Parking',
          'Parking Permissive access' : 'built-up-areas/built-up_ParkingPermissive',
          'Parking Access Customers' : 'built-up-areas/built-up_ParkingAccessCustomers',
          'ParkingPaid' : 'built-up-areas/built-up_ParkingPaid',
          'ParkingBicycle' : 'built-up-areas/built-up_ParkingBicycle',
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Cemetery {#cemetery}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItem = React.lazy(() => import('@site/src/components/docs/LegendItem.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItem 
          itemsMap={{
          'Cemetery' : 'built-up-areas/built-up_cemeteryColor',
          'Christian cemetery' : 'built-up-areas/built-up_cemeteryColorСhristian',
          'Muslim cemetery' : 'built-up-areas/built-up_cemeteryColorMuslim',
          'Jewish cemetery' : 'built-up-areas/built-up_cemeteryColorJewish',
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Education {#education}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItem = React.lazy(() => import('@site/src/components/docs/LegendItem.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItem 
          itemsMap={{
          'KinderGarten' : 'built-up-areas/built-up_amenityKinderGarten',
          'School' : 'built-up-areas/built-up_amenitySchool',
          'College' : 'built-up-areas/built-up_amenityCollege',
          'University' : 'built-up-areas/built-up_amenityUniversity',
          'Training' : 'built-up-areas/built-up_amenityTraining',
          'Library' : 'built-up-areas/built-up_amenityLibrary',
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Historic {#historic}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItem = React.lazy(() => import('@site/src/components/docs/LegendItem.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItem 
          itemsMap={{
          'Archaeological Site' : 'built-up-areas/built-up_ArchaeologicalSite',
          'Historic Ruins' : 'built-up-areas/built-up_HistoricRuins',
          'Palaeontological Site' : 'built-up-areas/built-up_PalaeontologicalSite',
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Nature {#nature}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemWithProcessing = React.lazy(() => import('@site/src/components/docs/LegendItemWithProcessing.jsx'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemWithProcessing
          svgPath={'/img/map-legend/osmand-nature'}
          svgParts={{
          'water': 'Water',
          'swimming_pool': 'Swimming pool',
          'wood_unmaintained': 'Wood (unmaintained)',
          'broadleaved_wood': 'Broadleaved wood',
          'needleleaved_wood': 'Needleleaved wood',
          'mixed_wood': 'Mixed wood',
          'forest_maintained_by_human': 'Forest (maintained by human)',
          'broadleaved_forest': 'Broadleaved forest',
          'needleleaved_forest': 'Needleleaved forest',
          'mixed_forest': 'Mixed forest',
          'scrub': 'Scrub',
          'orchard': 'Orchard',
          'plant_nursery': 'Plant nursery',
          'olive_orchard': 'Olive orchard',
          'apple_orchard': 'Apple orchard',
          'almond_orchard': 'Almond orchard',
          'oil_palms_orchard': 'Oil palms orchard',
          'orange_orchard': 'Orange orchard',
          'banana_plants': 'Banana plants',
          'vineyard': 'Vineyard',
          'heath': 'Heath',
          'grass': 'Grass',
          'grassland': 'Grassland',
          'meadow': 'Meadow',
          'farmland': 'Farmland',
          'greenfield': 'Greenfield',
          'brownfield': 'Brownfield',
          'logging': 'Logging',
          'windfall': 'Windfall',
          'dead_wood': 'Dead wood',
          'aquaculture': 'Aquaculture',
          'greenhouse_horticulture': 'Greenhouse horticulture',
          'conservation': 'Conservation',
          'glacier': 'Glacier',
          'scree': 'Scree',
          'fell': 'Fell',
          'bare_rock': 'Bare rock',
          'reef': 'Reef',
          'coral_reef': 'Coral reef',
          'rocky_reef': 'Rocky reef',
          'crater_sinkhole': 'Crater, sinkhole',
          'sand': 'Sand',
          'shoal': 'Shoal',
          'garden': 'Garden',
          'nature_reserve': 'Nature reserve',
          'beach': 'Beach',
          'wetland': 'Wetland',
          'tidal_flat_mud_flat': 'Tidal flat (mud flat)',
          'bog': 'Bog',
          'marsh': 'Marsh',
          'swamp': 'Swamp',
          'reedbed': 'Reedbed',
          'wet_meadow': 'Wet meadow',
          'saltmarsh': 'Saltmarsh',
          'string_bog': 'String bog',
          'mangrove': 'Mangrove',
          'fen': 'Fen',
          'palsa_bog': 'Palsa bog',
          'intermittent_wetland': 'Intermittent wetland',
          'mud': 'Mud',
          'saltpond': 'Saltpond',
          'protected_area': 'Protected area'
          }}/>
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

## Icons {#icons}

### Traffic, transportation {#traffic-transportation}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedTraffic = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedTraffic.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
        <LegendItemAutogeneratedTraffic />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Emergency {#emergency}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedEmergency = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedEmergency.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedEmergency />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Health {#health}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedHealth = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedHealth.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedHealth />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Tourism {#tourism}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedTourism = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedTourism.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedTourism />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Entertainment {#entertainment}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedEntertainment = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedEntertainment.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedEntertainment />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Accomodation {#accomodation}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedAccomodation = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedAccomodation.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedAccomodation />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Education {#education}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedEducation = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedEducation.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedEducation />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Food and drink {#food-and-drink}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedSustenance = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedSustenance.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedSustenance />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Nature {#nature}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedNatural = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedNatural.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedNatural />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Sport {#sport}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedSport = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedSport.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedSport />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Finance {#finance}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedFinance = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedFinance.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedFinance />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Administrative {#administrative}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedAdministrative = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedAdministrative.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedAdministrative />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Service {#service}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedService = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedService.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedService />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Shops {#shops}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedShop = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedShop.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedShop />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Offices {#offices}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedOffice = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedOffice.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedOffice />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Craft {#craft}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedCraft = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedCraft.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedCraft />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Club {#club}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedClub = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedClub.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedClub />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Barriers {#barriers}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedBarrier = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedBarrier.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedBarrier />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>

### Man made {#man-made}

<LazyVisible>
  <BrowserOnly>
    {() => {
      const LegendItemAutogeneratedManmade = React.lazy(() => import('@site/src/components/docs/autogenerated/LegendItemAutogeneratedManmade.js'));
      return (
        <Suspense fallback={<div style={{height:240, width:'100%'}}>Loading…</div>}>
          <LegendItemAutogeneratedManmade />
        </Suspense>
      );
    }}
  </BrowserOnly>
</LazyVisible>
