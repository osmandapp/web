---
source-hash: db70d151504e034314031d79cbef9cd64a6f7a15179603897056aa6b65a3d432
sidebar_position: 5
sidebar_label: Tracks
title: Tracks
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overzicht {#overview}

De Web Planner biedt u een eenvoudige manier om met uw persoonlijke gegevens te werken direct in de browser. Na het inloggen kunt u uw tracks openen, aanpassen, nieuwe aanmaken of bestanden van uw computer uploaden. 

Alle wijzigingen worden automatisch gesynchroniseerd via [OsmAnd Cloud](../personal/osmand-cloud.md), zodat alles wat u op het web bijwerkt op uw apparaten verschijnt, en alles wat u op uw telefoon aanmaakt hier ook verschijnt. Dit maakt het gemakkelijk om tussen platforms te schakelen en uw gegevens consistent te houden waar u ook OsmAnd gebruikt.


## Hoe te gebruiken {#how-to-use}

Het is een betaalde functie <ProFeature/>. Om het te gebruiken, log in op uw OsmAnd Pro-account.

![Track login](@site/static/img/web/track_login.png) ![Track login](@site/static/img/web/track_login_2.png)

De Tracks-sectie bevat alle track-gerelateerde tools en acties. De volgende opties zijn beschikbaar:

- Tracks tonen van [OsmAnd Cloud](#cloud-tracks).
- Tracks toevoegen op de kaart (**Zichtbaar op de kaart** map).
- Alle tracks-info en grafiek bekijken
- Tracks wijzigen en toevoegen aan Cloud.
- Tracks downloaden en verwijderen.
- Nieuwe mappen aanmaken of verwijderen.
- Mappen downloaden als OSF- of OBF-verzameling.


## Zichtbaar op de kaart {#visible-on-the-map}

De weergave **Zichtbaar op de kaart** somt alle tracks op die momenteel op de kaart worden weergegeven. Elke track kan aan deze lijst worden toegevoegd vanuit het hoofd Tracks-paneel met de optie **⋮ → Track zichtbaar maken**.

Tracks die zichtbaar zijn op de kaart worden blauw gemarkeerd, terwijl tracks die momenteel verborgen zijn grijs verschijnen. Een schakelaar naast elke track laat u deze snel tonen of verbergen. De knop **Alles verbergen** schakelt alle zichtbare tracks tegelijk uit.

Onder de hoofdlijst toont de sectie **Recent zichtbaar** tracks die eerder op de kaart zijn getoond. Dit maakt het gemakkelijk om een track weer in te schakelen zonder deze opnieuw te zoeken in uw mappen of in OsmAnd Cloud.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## Menu van de track-map {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

Klik op de driepunt-knop (⋮) om het menu *Track-map* te openen. Van hieruit kunt u:

 - Downloaden als OSF.
 - Downloaden als OBF-verzameling. Exporteer de map in OsmAnd Binary Format, waarbij u kiest voor een [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) of een [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **OBF file**. U kunt een offline OBF-kaart downloaden en openen met OsmAnd op uw apparaat. Het is geschikt voor het weergeven van een groot aantal tracks op de kaart.
      -  **Travel OBF**. U kunt ook een kaart van tracks importeren als een reisboek, waarmee u individuele tracks op de kaart kunt selecteren en gebruiken zoals normale GPX-bestanden. Een reisboek ondersteunt ook functies zoals het weergeven van tracks als punten, filteren van tracks op activiteitstype en filteren van waypoints.
 - Hernoemen. Opent een dialoog waarin u een nieuwe naam voor de geselecteerde map kunt invoeren. De wijziging wordt gesynchroniseerd met OsmAnd Cloud en verschijnt op alle verbonden apparaten.
 - Verwijderen. Opent een bevestigingsdialoog. Het verwijderen van een map verwijdert deze permanent samen met alle tracks die het bevat. Deze actie wordt ook gesynchroniseerd via OsmAnd Cloud.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)

### Slimme mappen {#smart-folders}

**Slimme mappen** die op mobiele apparaten zijn gemaakt, kunnen via OsmAnd Cloud worden gesynchroniseerd en bekeken in de webversie. Om ervoor te zorgen dat ze op het web verschijnen, moet synchronisatie van [OsmAnd-instellingen](../personal/osmand-cloud.md#select-data-to-back-up) zijn ingeschakeld in de Cloud-instellingen.  
Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

Slimme mappen worden momenteel opgeslagen als onderdeel van globale instellingen, dus ze worden alleen naar de Cloud geüpload wanneer Instellingen-synchronisatie actief is. Na het maken of bewerken van een Slimme map wordt aanbevolen om een handmatige synchronisatie uit te voeren om de gegevens bij te werken.

Op het web worden Slimme mappen weergegeven in de tracklijst met een duidelijk sterpictogram, waardoor ze gemakkelijk te onderscheiden zijn van normale mappen. De mapnaam wordt als eerste gesynchroniseerd, terwijl de lijst met tracks afhangt van hoe de map op het apparaat is geconfigureerd.

Tracks worden alleen weergegeven als de configuratie van de Slimme map wordt ondersteund op het web. Dit omvat zowel [filterinstellingen](../personal/tracks/smart-folder.md#search-filter) als [groeperingsopties](../personal/tracks/smart-folder.md#managing-smart-folders). Als niet-ondersteunde parameters worden gebruikt (bijvoorbeeld dichtstbijzijnde stad), kan de map zonder tracks verschijnen. Voor de beste compatibiliteit, gebruik algemene parameters zoals activiteit, datum, afstand of duur.

De synchronisatie van Slimme mappen kan variëren afhankelijk van het platform en de synchronisatieconfiguratie. Voor de meest consistente resultaten, zorg ervoor dat Cloud-synchronisatie is ingeschakeld en up-to-date op alle apparaten.

In het drie-puntenmenu (⋮) kunt u de Slimme map downloaden als een OBF-verzameling.

![Smart Folders](@site/static/img/web/smart_folder.png) ![Smart Folders](@site/static/img/web/smart_folder_menu.png)


## Cloud-tracks {#cloud-tracks}

GPX-tracks die u hebt in [OsmAnd Cloud](../personal/osmand-cloud.md) zijn na inloggen beschikbaar voor weergave en bewerking. Alleen voor **Pro-gebruikers** <ProFeature/> en voor [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) gebruikers (die hun gegevens kunnen downloaden zelfs nadat hun Pro-abonnement is verlopen).

De volgende functies zijn beschikbaar na het kiezen van een cloud-track:
- *Informatie* - weergeven van track-gegevens.
- *Hoogte* - grafiek van hoogte.
- *Snelheid* - snelheidsgrafiek.
- *Helling* - hellingsgrafiek.
- *Hoogte herberekenen (Satelliet)* - herberekent de hoogtewaarden voor de geselecteerde track en toont deze op de hoogtegrafiek.
- *Wegtype* - breekt de track op in segmenten op basis van wegclassificatie.
- *Oppervlak* - toont de typen track-oppervlakken langs de route.
- *Gladheid* - toont segmentgladheid op basis van OSM-tags.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_new.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details_new.png)


## Gerelateerde artikelen {#related-articles}

- [Manage Tracks](../personal/tracks/manage-tracks.md)
- [Tracks Analyzer](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)