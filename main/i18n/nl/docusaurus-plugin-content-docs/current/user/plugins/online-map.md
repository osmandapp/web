---
source-hash: 3e42829208c8917b36961ec73fb21e320c1dcf70572f1c674c9c940e72223a0e
sidebar_position: 8
title:  Online Maps
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overzicht {#overview}

OsmAnd Online kaarten zijn een uitgebreide aanvulling op de OpenStreetMap-database die al in de applicatie aanwezig is. Met deze plugin kunt u lagen aan uw kaart toevoegen met informatie uit een andere bron, beginnend met de satelliet- of wandelroutesweergave en eindigend met zeer specifieke gegevens, zoals de locatie van brandkranen. U kunt ook de hoofdbron van de kaart wijzigen van vectorkaarten naar online tegels.


## Vereiste Instelparameters {#required-setup-parameters}

De mogelijkheid om Online kaarten te gebruiken is automatisch ingeschakeld in de iOS-versie van OsmAnd. Om Online kaarten in Android weer te geven, moet u de volgende instellingen maken:

1. [Inschakelen](../plugins/index.md#enable--disable) **Online Maps** plugin in het *Hoofdmenu → Plugins → Online Maps*.
2. Maak de nodige instellingen in de [Kaartbron](../map/raster-maps.md#layers) sectie van het Kaart configureren-menu.
3. Stel de *Kaartbron*, *Overlay* en *Underlay* kaart in. Selecteer uw favoriete satellietkaartprovider.
4. Download de geselecteerde [Online map](#how-to-prepare-raster-maps) indien nodig.


## Rasterkaarten op Apparaat Gebruiken {#use-raster-maps-on-device}

U kunt gedetailleerde informatie over het visualiseren en aanpassen van rasterkaarten vinden in het artikel [Raster Maps](../map/raster-maps.md). Hoe te gebruiken:

1. [Selecteer](../map/raster-maps.md#layers) de rasterkaart als een *Hoofdlaag*, *Underlay* of *Overlay* laag.
    - [Wijzig](../map/raster-maps.md#overlay) laagparameters (transparantie).

2. [Bereid voor / kopieer](../map/raster-maps.md#preparecopy-maps) rasterkaarten naar het apparaat.
    - [Nieuwe online rasterkaartbron toevoegen](../map/raster-maps.md#add-new-online-source)
    - [Magische URL toevoegen](../map/raster-maps.md#magic-url-to-install-map-source) om kaartbron te installeren.

3. [Beheer](../map/raster-maps.md#manage-map-data) rasterkaarten.
    - [Tegels downloaden / bijwerken](../map/raster-maps.md#download--update-tiles).
    - [Wijzig](../map/raster-maps.md#change-parameters) rasterkaartparameters.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Hoe Rasterkaarten Voor te Bereiden {#how-to-prepare-raster-maps}

:::info
Hoofdartikel over het voorbereiden van kaarten [leest u hier](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Ondanks dat de plugin *Online Maps* heet, kunt u de kaarten ook zonder internetverbinding gebruiken. U hoeft alleen de delen van de kaarten (vaak tegels genoemd) op te slaan om ze later te gebruiken. Om dat te doen, downloadt u een specifieke [Map Creator tool](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) ontwikkeld door het OsmAnd-team.

Selecteer het gebied dat u wilt downloaden, klik op het Preload-gebied, stel vervolgens de kleinste en de grootste zoomniveaus in die u wilt weergeven en download de tegels.
Voor de <b>Android-versie</b> kunt u ze kopiëren naar de map <i>osmand/tiles/*tile type*</i> van uw telefoon. U moet ook <i>Configure map-. Overlay map</i> openen en OsmAnd online tegels kiezen.

Voor de <b>iOS-versie</b> kunt u een SQ Lite-bestand op uw telefoon kiezen (elke messenger of dropbox), OsmAnd zal voorstellen om het toe te voegen. U moet ook <i>Map → Overlay / Underlay or Map type</i> openen en de nieuwe kaartbron kiezen.

Hoe u een SQ Lite-bestand toevoegt in de Android- en iOS-versie van OsmAnd kunt u lezen in het <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis project</b></a>.


Online tegels kunnen handig zijn wanneer u slechts een klein deel van de kaart of een specifiek type ervan nodig heeft om in een beperkt gebied te gebruiken, maar niet de hele regio wilt downloaden. Ze kunnen in eindeloze situaties van pas komen.

![Online Maps](@site/static/img/plugins/online-maps/map_creator.jpg)

![Online Maps](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Gerelateerde Artikelen {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

### Common Issues and Solutions {#common-issues-and-solutions}

1. Online Maps do not appear in the Map Source menu:  
  
    - Verify that the Online Maps plugin is enabled: *Menu → Plugins → Online Maps*.  
    - Ensure you have an active internet connection to access satellite imagery.  
    - Check if the selected Online Map is downloaded or requires [additional settings](../map/raster-maps.md#layers).