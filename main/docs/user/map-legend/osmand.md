---
sidebar_position: 1
---
import Translate from '@site/src/components/Translate.js';
import LegendItem from '@site/src/components/docs/LegendItem.js';

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OsmAnd map style
<Translate android="yes" id="default_render_descr" />


## Highways
<img src={require('@site/static/img/map-legend/osmand-highways.png').default} alt="OsmAnd Map style" />

## Railways
<img src={require('@site/static/img/map-legend/osmand-railways.png').default} alt="OsmAnd Map style" />

## Aerialways
<img src={require('@site/static/img/map-legend/osmand-aerialways.png').default} alt="OsmAnd Map style" />

## Routes
<img src={require('@site/static/img/map-legend/osmand-routes.png').default} alt="OsmAnd Map style" />

## Via ferrata
<img src={require('@site/static/img/map-legend/osmand-via-ferrata.png').default} alt="OsmAnd Map style" />

## Path difficulty
<img src={require('@site/static/img/map-legend/osmand-path-difficulty.png').default} alt="OsmAnd Map style" />

## Surface smoothness
<img src={require('@site/static/img/map-legend/osmand-surface-smoothness.png').default} alt="OsmAnd Map style" />

## Access
<img src={require('@site/static/img/map-legend/osmand-access.png').default} alt="OsmAnd Map style" />


<LegendItem itemsMap={{
        'Access Private' : 'access/access_PrivateColor',
        'Access Destination' : 'access/access_DestinationColor',
        'Access Permissive' : 'access/access_PermissiveColor',
        'Access Customers' : 'access/access_CustomersColor',
        'Access Delivery' : 'access/access_DeliveryColor',
        'Access Agricultural' : 'access/access_AgriculturalColor',
        'Access Emergency' : 'access/access_EmergencyColor',
        'Access Toll' : 'access/access_tollColor'
        }}>
</LegendItem>


## Waterways
<img src={require('@site/static/img/map-legend/osmand-waterways.png').default} alt="OsmAnd Map style" />

## Buildings, transportation

<LegendItem itemsMap={{
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
        }}>
</LegendItem>

## Sport, leisure
<img src={require('@site/static/img/map-legend/osmand-sport-leisure.png').default} alt="OsmAnd Map style" />

<LegendItem itemsMap={{
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
        }}>
</LegendItem>



## Built-up areas
<img src={require('@site/static/img/map-legend/osmand-built-up_areas.png').default} alt="OsmAnd Map style" />

## Nature
<img src={require('@site/static/img/map-legend/osmand-nature.png').default} alt="OsmAnd Map style" />

## Icons
### Traffic, transportation
<img src={require('@site/static/img/map-legend/osmand-icons-traffic_transportation.png').default} alt="OsmAnd Map style" />

### Emergency, health
<img src={require('@site/static/img/map-legend/osmand-icons-emergency.png').default} alt="OsmAnd Map style" />

### Tourism, entertainment
<img src={require('@site/static/img/map-legend/osmand-icons-tourism-entertainment.png').default} alt="OsmAnd Map style" />

### Religion
<img src={require('@site/static/img/map-legend/osmand-icons-religion.png').default} alt="OsmAnd Map style" />

### Accomodation
<img src={require('@site/static/img/map-legend/osmand-icons-accomodation.png').default} alt="OsmAnd Map style" />

### Food and drink
<img src={require('@site/static/img/map-legend/osmand-icons-food-and-drink.png').default} alt="OsmAnd Map style" />

### Nature
<img src={require('@site/static/img/map-legend/osmand-icons-nature.png').default} alt="OsmAnd Map style" />

### Leisure, sport
<img src={require('@site/static/img/map-legend/osmand-icons-leisure-sport.png').default} alt="OsmAnd Map style" />

### Other amenities
<img src={require('@site/static/img/map-legend/osmand-icons-other-amenities.png').default} alt="OsmAnd Map style" />

### Shops
<img src={require('@site/static/img/map-legend/osmand-icons-shops.png').default} alt="OsmAnd Map style" />

### Offices
<img src={require('@site/static/img/map-legend/osmand-icons-offices.png').default} alt="OsmAnd Map style" />

### Craft
<img src={require('@site/static/img/map-legend/osmand-icons-craft.png').default} alt="OsmAnd Map style" />

### Club
<img src={require('@site/static/img/map-legend/osmand-icons-club.png').default} alt="OsmAnd Map style" />

### Barriers
<img src={require('@site/static/img/map-legend/osmand-icons-barriers.png').default} alt="OsmAnd Map style" />

### Man made
<img src={require('@site/static/img/map-legend/osmand-icons-man-made.png').default} alt="OsmAnd Map style" />
