---
source-hash: e0f816c2ee06112779d7dbcf8e23176de7256a523ebca82309dd4e8a0dd894d4
sidebar_position: 8
title: Online kaarten
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

OsmAnd Online kaarten zijn een uitgebreide aanvulling op de OpenStreetMap-database die al in de applicatie aanwezig is. Met deze plug-in kunt u lagen aan uw kaart toevoegen met informatie uit een andere bron, te beginnen met de satelliet- of wandelroutesweergave en eindigend met zeer specifieke gegevens, zoals de locatie van brandkranen. U kunt ook de hoofdbron van de kaart wijzigen van vectorkaarten naar online tegels.

## Vereiste instellingsparameters {#required-setup-parameters}

De mogelijkheid om online kaarten te gebruiken is automatisch ingeschakeld in de iOS-versie van OsmAnd. Om online kaarten in Android weer te geven, moet u de volgende instellingen maken:

1. [Schakel](../plugins/index.md#enable--disable) de plug-in **Online kaarten** in via *Hoofdmenu → Plug-ins → Online kaarten*.
2. Maak de nodige instellingen in de sectie [Kaartbron](../map/raster-maps.md#select-raster-maps) van het menu Kaart configureren.
3. Stel de *Kaartbron*, *Overlay* en *Underlay* kaart in. Selecteer uw voorkeurssatellietkaartprovider.
4. Download de geselecteerde [Online kaart](#how-to-prepare-raster-maps) indien nodig.

## Rasterkaarten op apparaat gebruiken {#use-raster-maps-on-device}

Gedetailleerde informatie over het visualiseren en aanpassen van rasterkaarten vindt u in het artikel [Rasterkaarten](../map/raster-maps.md). Hoe te gebruiken:

1. [Selecteer](../map/raster-maps.md#select-raster-maps) de rasterkaart als *Hoofd*, *Underlay* of *Overlay* laag.
    - [Wijzig](../map/raster-maps.md#how-to-use-raster-maps) laageigenschappen (transparantie).

2. [Bereid / kopieer](../map/raster-maps.md#prepare--copy-raster-maps-to-device) rasterkaarten naar het apparaat.
    - [Nieuwe online rasterkaartbron toevoegen](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Magic URL toevoegen](../map/raster-maps.md#magic-url-to-install-map-source) om kaartbron te installeren.

3. [Beheer](../map/raster-maps.md#manage-raster-maps) rasterkaarten.
    - [Tegels downloaden / bijwerken](../map/raster-maps.md#download--update-tiles).
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
Hoofdartikel om kaarten voor te bereiden [lees hier](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Ondanks dat de plug-in *Online kaarten* heet, kunt u de kaarten ook zonder internetverbinding gebruiken. U hoeft alleen de delen van kaarten (vaak tegels genoemd) op te slaan om ze later te gebruiken. Om dat te doen, downloadt u een specifieke [Map Creator tool](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) ontwikkeld door het OsmAnd-team.

Selecteer het gebied dat u wilt downloaden, klik op het voorlaadgebied, stel vervolgens de kleinste en grootste zoomniveaus in die u wilt weergeven en download de tegels.
Voor de **Android-versie** kunt u ze kopiëren naar de map *osmand/tiles/*tegeltype** op uw telefoon. U moet ook de *Kaart configureren - Overlay kaart* openen en OsmAnd online tegels kiezen.

Voor de **iOS-versie** kunt u een SQ Lite-bestand op uw telefoon kiezen (elke messenger of Dropbox), OsmAnd zal voorstellen om het toe te voegen. U moet ook *Kaart → Overlay / Underlay of Kaarttype* openen en een nieuwe kaartbron kiezen.

Hoe u een SQ Lite-bestand toevoegt in de Android- en iOS-versie van OsmAnd kunt u lezen in het [**Anygis-project**](https://anygis.ru/Web/Html/Osmand_en).

Online tegels kunnen nuttig zijn wanneer u slechts een klein deel van de kaart of een specifiek type ervan nodig hebt om in een beperkt gebied te gebruiken, maar niet de hele regio wilt downloaden. Ze kunnen in eindeloze situaties van pas komen.

![Online kaarten](@site/static/img/plugins/online-maps/map_creator.jpg)

![Online kaarten](@site/static/img/plugins/online-maps/map_creator_menu.jpg)

## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (kaartstijlen)](../../user/map/vector-maps.md)

### Veelvoorkomende problemen en oplossingen {#common-issues-and-solutions}

1. Online kaarten verschijnen niet in het menu Kaartbron:

    - Controleer of de plug-in Online kaarten is ingeschakeld: *Menu → Plug-ins → Online kaarten*.
    - Zorg ervoor dat u een actieve internetverbinding hebt om toegang te krijgen tot satellietbeelden.
    - Controleer of de geselecteerde online kaart is gedownload of [aanvullende instellingen](../map/raster-maps.md#select-raster-maps) vereist.

> *Laatst bijgewerkt: januari 2025*