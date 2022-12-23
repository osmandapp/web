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

<LegendItem itemsMap={{
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
        }}>
</LegendItem>

### Landuse
<LegendItem itemsMap={{
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
        }}>
</LegendItem>


### Parking
<LegendItem itemsMap={{
        'Parking' : 'built-up-areas/built-up_Parking',
        'Parking Permissive access' : 'built-up-areas/built-up_ParkingPermissive',
        'Parking Access Customers' : 'built-up-areas/built-up_ParkingAccessCustomers',
        'ParkingPaid' : 'built-up-areas/built-up_ParkingPaid',
        'ParkingBicycle' : 'built-up-areas/built-up_ParkingBicycle',
        }}>
</LegendItem>

### Cemetery
<LegendItem itemsMap={{
        'Cemetery' : 'built-up-areas/built-up_cemeteryColor',
        'Christian cemetery' : 'built-up-areas/built-up_cemeteryColorСhristian',
        'Muslim cemetery' : 'built-up-areas/built-up_cemeteryColorMuslim',
        'Jewish cemetery' : 'built-up-areas/built-up_cemeteryColorJewish',
        }}>
</LegendItem>

### Education
<LegendItem itemsMap={{
        'KinderGarten' : 'built-up-areas/built-up_amenityKinderGarten',
        'School' : 'built-up-areas/built-up_amenitySchool',
        'College' : 'built-up-areas/built-up_amenityCollege',
        'University' : 'built-up-areas/built-up_amenityUniversity',
        'Training' : 'built-up-areas/built-up_amenityTraining',
        'Library' : 'built-up-areas/built-up_amenityLibrary',
        }}>
</LegendItem>

### Historic
<LegendItem itemsMap={{
        'Archaeological Site' : 'built-up-areas/built-up_ArchaeologicalSite',
        'Historic Ruins' : 'built-up-areas/built-up_HistoricRuins',
        'Palaeontological Site' : 'built-up-areas/built-up_PalaeontologicalSite',
        }}>
</LegendItem>


## Nature
<img src={require('@site/static/img/map-legend/osmand-nature.png').default} alt="OsmAnd Map style" />

## Icons
### Traffic, transportation
<img src={require('@site/static/img/map-legend/osmand-icons-traffic_transportation.png').default} alt="OsmAnd Map style" />


### Emergency, health

<LegendItem itemsMap={{
        'Hospital' : 'health/health_amenity_hospital',
        'Pharmacy' : 'health/health_amenity_pharmacy',
        'Emergency Phone' : 'health/health_emergency_phone',
        'Doctors' : 'health/health_amenity_doctors',
        'Veterinary' : 'health/health_amenity_veterinary',
        'Fire station' : 'health/health_amenity_fire_station',
        'Police' : 'health/health_amenity_police',
        'Dentist' : 'health/health_amenity_dentist',
        'Social facility' : 'health/health_social_facility',
        'Ambulance station' : 'health/health_ambulance_station',
        }}>
</LegendItem>

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
