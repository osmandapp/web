---
source-hash: 46f8bd9f97c636e1d4eed0afa1bdf6ebb5963b97004fdc01d9e05197cf654281
sidebar_position: 9
title: OpenStreetMap Bewerken
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) is een wereldwijde gemeenschap die tot doel heeft een gedetailleerde, gratis geografische kaart van de wereld te creëren en actuele open-source gegevens aan elke gebruiker te leveren. De OpenStreetMap-bewerkingsplugin stelt u in staat om bij te dragen aan de gemeenschap.

Met OsmAnd en de OSM-bewerkingsplugin kunt u eenvoudig uw eigen informatie bijdragen aan OpenStreetMap.org, zoals het aanmaken of wijzigen van [POI's](#create--modify-poi), het toevoegen of becommentariëren van [notities](#create--modify-osm-note), en het uploaden van opgenomen GPX [tracks](#upload-gps-track).

## Vereiste instellingen {#required-setup-parameters}

Om de *OpenStreetMap-bewerkingsplugin* te gebruiken, moet u de volgende instellingen maken:

1. [Plugin inschakelen](../plugins/index.md#enable--disable).
2. OpenStreetMap-bewerking instellen in elk [profiel](../personal/profiles.md).
3. De weergave van *OSM-notities (online)* of *OSM-bewerkingen* op de kaart inschakelen in het [Kaart configureren-menu](../map/configure-map-menu).

## Instellingen {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
De plugin-instellingen zijn globaal en gelden voor alle profielen.
:::

- [Inloggen op OpenStreetMap](#authorization). Log in om nieuwe of gewijzigde wijzigingen te uploaden. Gebruik de beveiligde *OAuth 2.0-methode* of [log in op de OSM-site](https://www.openstreetmap.org/login). Voor iOS is de knop voor de OAuth-methode alleen beschikbaar voor gebruikers met een ondersteunde versie van iOS, 16.4
- **<Translate android="true" ids="offline_edition"/>**. Als deze instelling is ingeschakeld, worden de wijzigingen eerst lokaal opgeslagen (*Opslaan*-knop) en op verzoek geüpload. Als de instelling is uitgeschakeld, worden de wijzigingen onmiddellijk geüpload (*Uploaden*-knop).
- **<Translate android="true" ids="use_dev_url"/>** *(Alleen Android)*. Hiermee kunt u [dev.openstreetmap.org](https://dev.openstreetmap.org/) inschakelen in plaats van [openstreetmap.org](http://openstreetmap.org/) om het uploaden van OSM-notities, POI's of GPS-tracks te testen. Wanneer ingeschakeld, wordt u automatisch uitgelogd bij OpenStreetMap.org. Deze instelling is alleen beschikbaar in de lijst wanneer de *OsmAnd-ontwikkelingsplugin* is ingeschakeld.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Tik hierop om [*Menu → Mijn plaatsen → OSM-bewerkingen*](../personal/myplaces.md) te openen. Dit tabblad toont uw onbewerkte OSM-notities. De volgende acties zijn beschikbaar met de notitie: *Uploaden*, *Tonen op kaart*, *OSM-notitie wijzigen*, *Verwijderen*. Geüploade of verwijderde notities worden niet langer weergegeven in de lijst.

:::note
Als u een [OsmAnd Pro](../purchases/android.md#pro-features)-abonnement heeft, verschijnen wijzigingen die in OSM zijn aangebracht binnen een uur op uw OsmAnd-kaart. Zorg ervoor dat [Live-updates](../personal/maps-resources.md#osmand-live) zijn ingeschakeld.
:::

### Autorisatie {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Log in om wijzigingen en GPX-bestanden bij te dragen.

- Ga naar [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) en *log in* of *meld u aan*.
- Tik op het veld *Inloggen op OpenStreetMap* in de OsmAnd-app en tik vervolgens op de knop *Aanmelden met OpenStreetMap*.

### Gratis kaartupdates voor mappers {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_andr.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_ios.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

De instelling <Translate android="true" ids="map_updates_for_mappers"/> stelt u in staat om **[OsmAnd live](../personal/maps-resources.md#free-for-osm-mappers)** in te schakelen als u een actieve OpenStreetMap-bijdrager bent. Op deze manier kunt u genieten van gratis uurlijkse kaartupdates, in tegenstelling tot de standaard maandelijkse updates. Actieve bijdragers aan OpenStreetMap.org kunnen recht hebben op onbeperkte uurlijkse kaartupdates. Meld u aan bij OpenStreetMap om uw geschiktheid voor onbeperkte maandelijkse en uurlijkse kaartupdates te controleren.

### OSM-bewerkingslaag {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM editing layer Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM editing layer Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![OSM editing layer iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

U kunt de weergave van OSM-wijzigingen, zoals *OSM-notities* (online), *OSM-bewerkingen*, *Fixme-tags*, *Notitie-tags*, *Pictogrammen bij lage zoomniveaus*, als een aparte laag in- of uitschakelen in het gedeelte [Kaart configureren](../map/configure-map-menu.md) van het *Hoofdmenu*.

## POI aanmaken / wijzigen {#create--modify-poi}

De OpenStreetMap-bewerkingsplugin stelt u in staat om nieuwe objecten op de kaart aan te maken, genaamd [Points of Interest of POI](../map/point-layers-on-map.md#points-of-interest-pois). U kunt een nieuwe winkel, favoriete bezienswaardigheid, bankje of schuilplaats in kaart brengen, zodat mensen ze kunnen vinden.

1. Tik op de kaart om een nieuwe POI te plaatsen, of tik op een POI die nog niet is geladen.
2. Tik op [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
3. Kies [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi), en voeg de naam en andere informatie toe, zoals openingstijden, website, enz. Wanneer u een niet-geüploade POI selecteert, verandert *POI aanmaken* in *POI wijzigen*.
4. Afhankelijk van de instelling [Offline bewerken](#settings), kunt u de gegevens lokaal opslaan of [uploaden](../map/map-context-menu#-upload-poi--osm-note).

### Tags toevoegen {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add POI tag ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

U kunt eenvoudig OSM [tags](https://wiki.openstreetmap.org/wiki/Tags) toevoegen aan de POI. Wanneer u meerdere tekens in de zoekbalk invoert, stelt het programma mogelijke tags voor.

**Offline wijzigingen.**
U kunt POI's bekijken, uploaden naar OSM of verwijderen in *Mijn plaatsen → OSM-bewerkingen*. U kunt uw OSM POI-wijzigingen ook exporteren naar een [OSC-bestand](https://wiki.openstreetmap.org/wiki/OsmChange) en importeren in [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### Niet-ondersteunde POI-typen toevoegen {#add-unsupported-poi-types}

Op het tabblad *Geavanceerd* kunt u niet-ondersteunde POI-typen toevoegen die nuttig kunnen zijn voor uw specifieke taak. Deze optie stelt u in staat om POI-gegevens handmatig in te voeren, waardoor de functionaliteit van de applicatie wordt uitgebreid.

Een voorbeeld van niet-ondersteunde POI-typen die u kunt toevoegen, is *amenity=freeshops*. Dit type kan nuttig zijn als u gratis winkels of plaatsen wilt markeren die gratis producten aanbieden.

Volg deze stappen om niet-ondersteunde POI-typen toe te voegen:

1. Open het tabblad *Geavanceerd*.
2. Tik op *POI-type*.
3. Voer de sleutel *amenity* en de waarde *freeshops* in de juiste velden in.
4. Vul de rest van de vereiste gegevens voor deze POI in.
5. Tik op *Tag toevoegen* om de nieuwe POI aan uw database toe te voegen.

Onthoud dat bij het toevoegen van niet-ondersteunde POI-typen het belangrijk is om ervoor te zorgen dat de gegevens correct worden ingevoerd om de juiste werking van de applicatie en de daaropvolgende verwerking van de informatie te garanderen.

## OSM-notitie aanmaken / wijzigen {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Om OSM-notities te bewerken, te becommentariëren of te sluiten, schakelt u hun weergave op de kaart in via het [Kaart configureren-menu](../map/configure-map-menu.md).

- Met de OSM-notitiesfunctie kunt u notities aan de kaart toevoegen. In deze notities kunt u fouten beschrijven of schrijven over ontbrekende informatie in de OpenStreetMap-gegevens. U en andere gebruikers kunnen opmerkingen achterlaten bij uw notities.
- U kunt andere gebruikers helpen door hun vragen of problemen te controleren, opmerkingen te geven en vervolgens de opgeloste notities te sluiten.
- Lees meer over de OpenStreetMap-notities [hier](https://wiki.openstreetmap.org/wiki/Notes).

Om een notitie aan te maken, hoeft u niet in te loggen op OpenStreetMap.org, u kunt deze anoniem verzenden.

- Tik op de kaart waar de nieuwe OSM-notitie moet worden geplaatst (of tik op een niet-geüploade notitie), en selecteer [Acties](../map/map-context-menu.md#actions).
- Als u informatie wilt toevoegen aan een bestaande notitie of een niet-geüploade notitie, een opmerking wilt bewerken of een notitie wilt sluiten, tikt u op de OSM-notitie op de kaart en selecteert u de [vereiste actie](../map/map-context-menu.md#-comment--close-osm-note).
- U kunt wijzigingen uploaden zodra u online beschikbaar bent. U kunt wijzigingen ook ongedaan maken voordat ze worden geüpload.

:::info
De geüploade OSM-notities zijn niet zichtbaar op OsmAnd-kaarten in de offline modus.
:::

## GPS-track {#gps-track}

De GPS-tracks die u heeft opgenomen zijn nuttig voor:

- **Mappers**. Tracks kunnen worden gebruikt om allerlei paden in kaart te brengen.
- **Navigatie**. Op basis van de geüploade GPX-bestandsgegevens kunnen navigatietoepassingen en speciale apparaten tracks berekenen.
- **Informatie delen** over de tracks en routes die u heeft opgenomen op [OpenStreetMap-gebaseerde kaarten](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info OPMERKING
Uw tracks worden binnen een uur toegevoegd aan [OSM-sporen](https://www.openstreetmap.org/traces), waar ze beschikbaar zullen zijn voor u en anderen om te bekijken, te zoeken en te gebruiken.
:::

### GPS-track uploaden {#upload-gps-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OpenStretMap editing plugin GPX to OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

Volg de onderstaande stappen om de [GPS-track te uploaden](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks):

- Zoek de vereiste track in het tabblad [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).
- Tik op het *drie-stippenmenu* naast de tracknaam en selecteer *Exporteren*.

**Instellingen:**

- **<Translate android="true" ids="shared_string_description"/>**. Hiermee kunt u een beschrijving aan de track toevoegen. De beschrijving is van toepassing op alle geselecteerde tracks. Als u niets in het veld invoert, worden de tracknamen voor elke afzonderlijke track gebruikt als beschrijvingen.
- **<Translate android="true" ids="gpx_tags_txt"/>**. Dit item in de instellingensectie stelt u in staat om tags toe te voegen om de track te identificeren. De standaardtag is "osmand", u kunt extra tags invoeren, gescheiden door komma's.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Trackzichtbaarheid voor OSM-gebruikers:
   - *Openbaar* betekent dat de track openbaar beschikbaar is en in ruwe vorm wordt weergegeven in uw GPS-tracks, GPS-tracklijsten en tijdgestempelde tracklijsten. De via de API verzonden gegevens worden niet gekoppeld aan uw trackpagina. Tijdstempels van traceerpunten zijn niet beschikbaar via de openbare GPS API en trackpunten zijn niet chronologisch geordend.
   - *Identificeerbaar* betekent dat de track openbaar wordt weergegeven in uw GPS-trackpunten en openbare GPS-tracklijsten, wat betekent dat andere gebruikers de ruwe track kunnen downloaden en deze kunnen koppelen aan uw gebruikersnaam. Openbare tijdgestempelde trackpuntgegevens van de GPS API die via de trackpunten API zijn doorgegeven, linken naar uw oorspronkelijke trackpagina.
   - *Traceerbaar* betekent dat de track niet wordt weergegeven in openbare lijsten, maar dat de verwerkte trackpunten met tijdstempels ervan (die niet direct aan u kunnen worden gekoppeld) worden geladen vanuit de openbare GPS API.
   - *Privé* betekent dat de track niet wordt weergegeven in openbare lijsten, maar dat de trackpunten ervan in niet-chronologische volgorde beschikbaar zijn via de openbare GPS API zonder tijdstempels.
- **<Translate android="true" ids="login_account"/>** - [OSM-account](https://www.openstreetmap.org/login).

:::info
U kunt meer dan één track selecteren om te uploaden naar OSM. Tik hiervoor op het pictogram *Uploaden naar OpenStreetMap* onderaan het scherm, selecteer tracks met het selectievakje, tik op *Uploaden* en vervolgens op *Doorgaan*.
:::

### OBF-bestand genereren {#generate-obf-file}

U kunt een OBF-bestand maken met [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) als u een grote GPX-trackdatabase heeft. Dit is een verzameling tracks van osmand.net met de tag 'gpsies', een verzameling gedownloade tracks van OpenStreetMap of uw eigen verzameling.

## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vector kaarten (kaartstijlen)](../../user/map/vector-maps.md)

> *Laatst bijgewerkt: mei 2024*