---
source-hash: 8c47a63c8420d1c5228963331f215a7aa5c8808f6c030e2e1fc5ca817821edbb
sidebar_position: 4
title: Kaart configureren
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Overzicht {#overview}

Het menu **Kaart configureren** is een belangrijk onderdeel van het OsmAnd *Hoofdmenu*, waar u de kaartweergave kunt aanpassen aan uw behoeften. U kunt favoriete punten, navigatiemarkeringen of speciale nuttige plaatsen op de kaart markeren, specifieke routes of GPX-bestanden van derden weergeven, terreininformatie, satellietbeelden of andere beschikbare rasterafbeeldingen over elkaar heen leggen, informatie over openbaar vervoer weergeven en de kaartstijl wijzigen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Sectie **Weergeven**:

![Kaart configureren android](@site/static/img/map/configure_map_show1_andr.png) ![Kaart configureren android](@site/static/img/map/configure_map_show2_andr.png)

Sectie **Topografie**:

![Kaart configureren android](@site/static/img/map/configure_map_topography_andr.png)

Sectie **OpenStreetMap**:

![Kaart configureren android](@site/static/img/map/configure_map_osm_andr.png)

Secties **Routes en Kaartweergave**:

![Kaart configureren android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaart configureren ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


Het menu **Kaart configureren** is verdeeld in twee categorieën:

- [Kaartstijlparameters](#map-style-parameters). **Kaartweergave** (of **Renderer**) is een groep instellingen waarmee u de weergave van de hoofdkaart kunt wijzigen.
- [Kaartlagen](#map-layers). Met deze lagen kunt u informatie bovenop (of onder) de hoofdkaartlaag plaatsen, maar ze wijzigen de weergave van de kaart zelf niet.

**Opmerkingen:**

- Om de informatie op het scherm (widgets, pictogrammen) te wijzigen, kunt u instellingen maken in de [Kaartweergave](../widgets/index.md).
- De instellingen voor Kaart configureren zijn afhankelijk van uw [profiel](../personal/profiles.md).
- Let op - het menu Kaart configureren **sluit** wanneer u op het kaartveld tikt.

## Kaartlagen {#map-layers}

- [Vector kaartlaag](../map/vector-maps.md) - geeft alle vector kaartinformatie weer, inclusief OpenStreetMap, contourlijnen en nautische gegevens.
- [Kaartrasterbronnen](../map/raster-maps.md#select-raster-maps) - maakt het mogelijk om onderliggende / hoofdbron / overlay-kaarten te selecteren met transparantieniveaus.
- [Terrein](../plugins/topography.md#hillshade-slope-and-altitude-layers) - geeft helling / heuvelschaduw informatie, 3D-reliëf weer.
- [Grenzen van gedownloade kaarten](../map/vector-maps.md#show-borders) - geeft alle grenzen van gedownloade kaarten weer op de hoofdkaartlaag.
- [Coördinatenraster](../map/vector-maps.md#coordinates-grid) - bepaalt de zichtbaarheid van het coördinatenraster op de kaart.

## Kaartgegevenslagen {#map-data-layers}

   - [Favorieten](../map/point-layers-on-map.md) - geeft favoriete punten weer.
   - [POI](../map/point-layers-on-map.md) - geeft nuttige plaatsen van geselecteerde categorieën weer.
   - [Kaartmarkeringen](../map/point-layers-on-map.md) - geeft kaartmarkeringen weer.
   - [Overlay-labels](../map/point-layers-on-map.md) - toont namen van punten en favorieten op de kaart.
   - [Vervoer](../map/vector-maps.md#transport) - toont haltes van het openbaar vervoer.
   - [Tracks](../map/tracks/index.md) - geeft geïmporteerde, geplande of opgenomen tracks over de kaart weer.
   - [Street level imagery](../plugins/mapillary.md#map-layer) - geeft punten weer met beschikbare street-level imagery.
   - [Reisgidsen](../plan-route/travel-guides.md) - geeft reisgidsen weer op de kaart.
   - [Wikipedia](../plugins/wikipedia.md) - markeert Wikipedia-artikelen die aan de kaart zijn gekoppeld.
   - [Andere plug-inlagen](../plugins/index.md#configure-plugin) - veel plug-ins voegen hun lagen toe met extra informatie.

## Kaartstijlparameters {#map-style-parameters}

De kaartstijlinstellingen zijn afhankelijk van de weergegeven hoofdkaartstijl. U kunt hier meer over lezen in het artikel [Kaartstijlen](../map/vector-maps).

   - [Kaartstijl](../map/vector-maps.md#default-map-styles) - omvat OsmAnd (Stad), Topo, Nautisch en andere.
   - [Kaartmodus](../map/vector-maps.md#map-mode) - stelt u in staat de kaartweergave en navigatie te selecteren afhankelijk van het tijdstip van de dag.
   - [Kaartvergroter](../map/vector-maps.md#map-magnifier) - stelt u in staat de vergroting van de kaart te wijzigen.
   - [Tekstgrootte](../map/vector-maps.md#text-size) - stelt u in staat de tekstgrootte op de kaart te vergroten of te verkleinen.
   - [Kaarttaal](../map/vector-maps.md#map-language) - stelt u in staat de voorkeurstaal op de kaart te selecteren.
   - [Details](../map/vector-maps.md#details) - toont specifieke objecten.
   - [Verbergen](../map/vector-maps.md#hide) - verbergt specifieke objecten.
   - [Routes](../map/vector-maps.md#routes) - maakt het mogelijk routes en hun symbolen te markeren.

## UI-aanpassing (Android) {#ui-customization-android}

Voor elk geselecteerd profiel in het Android-systeem kunt u de volgorde van de menu-items van **Kaart configureren** wijzigen, de items verbergen, de standaardinstellingen herstellen of ze kopiëren van een ander profiel. Dit zal uw interactie met de OsmAnd-app verbeteren.

Ga naar: *Menu, Profiel configureren, UI-aanpassing, Kaart configureren*

![Kaartitems configureren](@site/static/img/settings/configure-screen-ui-customization.png)


> *Laatst bijgewerkt: februari 2025*