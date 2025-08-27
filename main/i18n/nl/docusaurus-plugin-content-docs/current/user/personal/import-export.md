---
source-hash: f24f24555f47b3d32f9623bdce45ca173d296caa2e59dbe6073460a5cd95119d
sidebar_position: 10
title:  Importeren / Exporteren
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

Met de **Importeer**- en **Exporteer**-tools in OsmAnd kunt u uw gegevens beheren. U kunt uw profielen, favorieten, routes en andere instellingen verplaatsen met behulp van een speciaal formaat via de apps op uw apparaat. Dit proces vereenvoudigt het opslaan en overdragen van gegevens tussen apparaten en stelt u in staat deze te delen met andere OsmAnd-gebruikers.

:::note Grote omvang
*Als de omvang van uw geselecteerde gegevens aanzienlijk is, zal het enige tijd duren voordat de applicatie het `.osf`-bestand heeft voorbereid.*
:::


## Gegevens exporteren / importeren {#export--import-data}

Met *Importeren* en *Exporteren* kunt u gegevens opslaan vanuit gegenereerde `.osf`-**bestanden** of [online bronnen](../map/raster-maps.md) gebruiken, waardoor het mogelijk is om informatie te herstellen na herinstallatie.

**Gegevenstypen** beschikbaar voor import/export:

- **Instellingen:**
        [Profielen](../personal/profiles.md#actions), &nbsp;[OsmAnd/Algemene Instellingen](../personal/global-settings.md), &nbsp;[Kleuren](../personal/color-palette-schemes.md), &nbsp;[Snelle actie](../widgets/quick-action.md), &nbsp;[POI-type](../map/point-layers-on-map.md#poi-types), &nbsp;[Weg vermijden](../map/map-context-menu.md#avoid-road).
- **Mijn plaatsen:**
        [Favorieten](../personal/favorites.md#export--import), &nbsp;[Routes](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[OSM-notities*, *OSM-bewerkingen](../plugins/osm-editing.md#create--modify-poi), &nbsp;[A/V-notities](../plugins/audio-video-notes.md), &nbsp;[Kaartmarkeringen](../personal/markers.md), &nbsp;[Markeringsgeschiedenis*, *Zoekgeschiedenis*, *Navigatiegeschiedenis](../personal/global-settings.md#history), &nbsp;*Reisplan*.
- **Bronnen:**
        [Renderstijl](../map/vector-maps.md#custom-map-style), &nbsp;[Routering](../navigation/routing/osmand-routing.md), &nbsp;[Online routeringsengines](../navigation/routing/online-routing.md), &nbsp;[Kaartbronnen*, *Standaard/Offline kaarten](../map/raster-maps.md), &nbsp;[Wikipedia- en reiskaarten](../plan-route/travel-guides.md), &nbsp;[Nautische kaarten](../plugins/nautical-charts.md), &nbsp;[Wegenkaarten](../map/vector-maps.md#road-style), &nbsp;[Topografiekaarten](../plugins/topography.md), &nbsp;[Steminstructies (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Steminstructies (opgenomen)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Back-up favorieten](../personal/favorites.md#automatic-favorites-backup).


### Exporteren {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*

![Profielen Acties Exporteren Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Back-up lokaal Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profielen Acties Exporteren iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png) ![Profielen Acties Exporteren iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Alle gegevens die u hebt geconfigureerd en gemaakt, kunnen worden geëxporteerd via het ***Exportmenu***. Het menu bestaat uit drie groepen: **Instellingen**, **Mijn plaatsen** en **Bronnen**, die alle beschikbare bestandsmappen bevatten. U kunt de bestanden die u wilt exporteren in elke map selecteren, één voor één of allemaal tegelijk. **Alle geëxporteerde bestanden worden opgeslagen in `.osf`-formaat**.


### Importeren {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*

| |
| --- | --- | --- |
| ![Profielen Acties Importeren Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Profielen Acties Importeren 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Profielen Acties Importeren 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*

| |
| --- | --- | --- |
| ![Profielen Acties Importeren iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Profielen Acties Importeren 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Profielen Acties Importeren 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) |

</TabItem>

</Tabs>

Opent en herstelt `.osf`-bestanden. Tik op het bestand in de bestandsbeheerder van het apparaat of gebruik de actieknop.

- *Sommige items bestaan al*. U kunt deze functie gebruiken om beide bestanden op te slaan of ze allemaal te vervangen.
- *Herstarten*. Na het importeren van de bestanden moet de applicatie opnieuw worden opgestart.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) is de alternatieve bron die u nodig hebt om uw persoonlijke instellingen en app-gegevens op te slaan. U kunt deze gegevens gebruiken op elk apparaat waarop de OsmAnd-app kan worden geïnstalleerd of bij gebruik van de desktop-app. Alle wijzigingen die u aanbrengt, kunnen worden gesynchroniseerd.


## Voorkomen van gegevensverlies {#preventing-data-loss}

In de *Android*- en *iOS*-versies van OsmAnd, als u de app volledig **verwijdert** of **Gegevens wissen** selecteert op uw apparaat in het menu Instellingen Applicatie-informatie, wordt de gegevensmap ook verwijderd uit de bestandsbeheerder van het apparaat. Als u geen voorzorgsmaatregelen neemt, leidt dit tot **verlies van alle gedownloade kaarten voor OsmAnd-gegevens, alle opgeslagen Favorieten, GPX-routes, steminstructies (TTS) en [andere gegevens](#export--import-data).**

Er zijn twee manieren om uw gegevens op te slaan voordat u de OsmAnd-app opnieuw installeert:

- Gebruik [OsmAnd Cloud](#osmand-cloud). U kunt een back-up van uw gegevens maken met behulp van OsmAnd-functies zoals [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), als gratis versie, of [OsmAnd Pro](../purchases/index.md), een betaald abonnement met meer functies.
- [Exporteer OSF-bestand](#export) met uw gegevens. Kopieer het `.osf`-bestand naar een map op uw apparaat of OsmAnd Cloud. Na het opnieuw installeren van OsmAnd, [importeert u dit `.osf`-bestand](#import) in de OsmAnd-app.


## Gerelateerde artikelen {#related-articles}

- [Profielen (Instellingen)](./profiles.md)
- [Routes beheren](../personal/tracks/manage-tracks.md#import--export-track)
- [Zoekgeschiedenis](../search/search-history.md#export-and-share)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)

### Veelvoorkomende problemen en oplossingen {#common-issues-and-solutions}

1. Hoe Favorieten en Routes over te zetten naar een nieuw apparaat. [(controleren)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Ik heb een GPX-bestand, hoe importeer ik het in OsmAnd? [(controleren)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Kaartgegevens verwijderen na de app-update (als "Multiuser Storage 1" is geselecteerd). [(controleren)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)

> *Laatst bijgewerkt: januari 2025*