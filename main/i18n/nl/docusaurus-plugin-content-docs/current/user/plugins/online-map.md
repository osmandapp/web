---
source-hash: e0f816c2ee06112779d7dbcf8e23176de7256a523ebca82309dd4e8a0dd894d4
sidebar_position: 8
title: Online Kaarten
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

OsmAnd Online kaarten zijn een uitgebreide aanvulling op de OpenStreetMap-database die al in de applicatie aanwezig is. Met deze plug-in kunt u lagen aan uw kaart toevoegen met informatie uit een andere bron, beginnend met de satelliet- of wandelroutesweergave en eindigend met zeer specifieke gegevens, zoals de locatie van brandkranen. U kunt ook de hoofdbron van de kaart wijzigen van vectorkaarten naar online tegels.

## Vereiste instellingsparameters {#required-setup-parameters}

De mogelijkheid om online kaarten te gebruiken is automatisch ingeschakeld in de iOS-versie van OsmAnd. Om online kaarten weer te geven in Android, moet u de volgende instellingen doen:

1. [Schakel](../plugins/index.md#enable--disable) de plug-in **Online Kaarten** in via *Hoofdmenu → Plug-ins → Online Kaarten*.
2. Maak de nodige instellingen in de sectie [Kaartbron](../map/raster-maps.md#select-raster-maps) van het menu Kaart configureren.
3. Stel de *Kaartbron*, *Overlay* en *Underlay* kaart in. Selecteer uw voorkeurssatellietkaartprovider.
4. Download de geselecteerde [Online kaart](#how-to-prepare-raster-maps) indien nodig.

## Rasterkaarten gebruiken op apparaat {#use-raster-maps-on-device}

Gedetailleerde informatie over het visualiseren en aanpassen van rasterkaarten vindt u in het artikel [Rasterkaarten](../map/raster-maps.md). Hoe te gebruiken:

1. [Selecteer](../map/raster-maps.md#select-raster-maps) de rasterkaart als *Hoofd*, *Underlay* of *Overlay* laag.
    - [Wijzig](../map/raster-maps.md#how-to-use-raster-maps) laageigenschappen (transparantie).

2. [Bereid / kopieer](../map/raster-maps.md#prepare--copy-raster-maps-to-device) rasterkaarten naar het apparaat.
    - [Voeg een nieuwe online rasterkaartbron toe](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Voeg Magic URL toe](../map/raster-maps.md#magic-url-to-install-map-source) om kaartbron te installeren.

3. [Beheer](../map/raster-maps.md#manage-raster-maps) rasterkaarten.
    - [Download / update tegels](../map/raster-maps.md#download--update-tiles).
    - [Wijzig](../map/raster-maps.md#change-raster-map-parameters) rasterkaartparameters.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configureer underlay / overlay Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configureer underlay / overlay iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>

## Hoe rasterkaarten voor te bereiden {#how-to-prepare-raster-maps}

:::info
Hoofdartikel voor het voorbereiden van kaarten [lees hier](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Hoewel de plug-in *Online Kaarten* heet, kunt u de kaarten ook zonder internetverbinding gebruiken. U hoeft alleen de delen van de kaarten (vaak tegels genoemd) op te slaan om ze later te gebruiken. Download hiervoor een specifieke [Map Creator tool](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) ontwikkeld door het OsmAnd-team.

Selecteer het gebied dat u wilt downloaden, klik op 'Preload area', stel vervolgens de kleinste en grootste zoomniveaus in die u wilt weergeven en download de tegels.
Voor de <b>Android-versie</b> kunt u ze kopiëren naar de map <i>osmand/tiles/*tegeltype*</i> op uw telefoon. U moet ook de <i>Kaart configureren - Overlay kaart</i> openen en OsmAnd online tegels kiezen.

Voor de <b>iOS-versie</b> kunt u een SQ Lite-bestand op uw telefoon kiezen (elke messenger of dropbox), OsmAnd zal voorstellen om het toe te voegen. U moet ook <i>Kaart → Overlay / Underlay of Kaarttype</i> openen en een nieuwe kaartbron kiezen.

Hoe u een SQ Lite-bestand toevoegt in de Android- en iOS-versie van OsmAnd kunt u lezen in het <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis-project</b></a>.

Online tegels kunnen handig zijn wanneer u slechts een klein deel van de kaart of een specifiek type ervan nodig heeft voor gebruik in een beperkt gebied, maar niet de hele regio wilt downloaden. Ze kunnen van pas komen in talloze situaties.

![Online Kaarten](@site/static/img/plugins/online-maps/map_creator.jpg)

![Online Kaarten](@site/static/img/plugins/online-maps/map_creator_menu.jpg)

## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (kaartstijlen)](../../user/map/vector-maps.md)

### Veelvoorkomende problemen en oplossingen {#common-issues-and-solutions}

1. Online kaarten verschijnen niet in het menu Kaartbron:

    - Controleer of de plug-in Online Kaarten is ingeschakeld: *Menu → Plug-ins → Online Kaarten*.
    - Zorg ervoor dat u een actieve internetverbinding heeft om toegang te krijgen tot satellietbeelden.
    - Controleer of de geselecteerde online kaart is gedownload of [aanvullende instellingen](../map/raster-maps.md#select-raster-maps) vereist.

> *Laatst bijgewerkt: januari 2025*