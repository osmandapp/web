---
source-hash: ccc92258ad1865c820ecfed771b07e1d48a441845c435a996fe12367c3ecf9df
sidebar_position: 2
title:  Routes beheren
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

Alle routes in OsmAnd worden opgeslagen in een tabblad in *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd verwerkt het routebestand in [GPX-formaat](https://en.wikipedia.org/wiki/GPS_Exchange_Format), maar [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) & [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) kunnen worden geïmporteerd en geconverteerd naar GPX. Lees meer over verschillende soorten routes in het artikel [Routes op kaart](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Overzicht routes beheren Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overzicht routes beheren iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Een route maken {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen route wijzigen-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen route wijzigen-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

U kunt routes toevoegen in OsmAnd op de volgende manieren:

1. **[Importeer](./manage-tracks.md#import--export-track)** een route vanuit een externe bron.
2. Maak een nieuwe route in de applicatie met behulp van de tool **[Een route plannen](../../plan-route/create-route.md)**.
3. Neem een route op in de applicatie met behulp van de plug-in **[Rit opnemen](../../plugins/trip-recording.md)**.
4. Voer meerdere punten in op coördinaten en sla deze op als een route met behulp van de tool **[Coördinateninvoer](../../plan-route/coordinate-input.md)**.
5. U kunt ook **Waypoints** toevoegen aan een nieuwe route via **[Contextmenu](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)**.


## Routes beheren {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tabblad*

![Mijn plaatsen met routes in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tabblad*

![Mijn plaatsen met routes in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Alle ooit opgenomen, gemaakte of geïmporteerde routes worden automatisch weergegeven in de map [Mijn plaatsen](../../personal/myplaces.md) in het tabblad *Routes*. Ze zijn georganiseerd per map of worden eronder in een lijst weergegeven.


### Routemenu {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tabblad*

![Mijn plaatsen met routes in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tabblad*

![Contextmenu van een route in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Elke route, net als mappen, heeft een menu, waarmee u routes efficiënt kunt beheren. Zo opent u het:

- *Android* - tik op het *drie-stippenmenu* in het routeveld.
- *iOS* - lang tikken op de gewenste route in de lijst.

Het menu biedt de volgende acties:

- **Tonen/verbergen op kaart** — Toont of verbergt de geselecteerde routes op de kaart, waarbij hun locatie visueel wordt weergegeven.

- [Openen](../../map/tracks/index.md#configure-map) (*iOS*) — Deze instelling is beschikbaar in het menu Kaart configureren. Gelegen in het *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, kunt u hiermee het [contextmenu van de geselecteerde route](../../map/tracks/track-context-menu.md) openen wanneer u erop tikt.

- **Uiterlijk** (*iOS*) — Pas het [uiterlijk van routes](../../map/tracks/appearance.md) aan uw voorkeuren aan.

- **Navigatie** (*iOS*) — Start [navigatie](../../navigation/setup/gpx-navigation.md) langs de geselecteerde route.

- **Analyseren op kaart** (*Android*) / **Analyseren** (*iOS*) — Opent de tool [Analyseren op kaart](../../navigation/setup/route-details.md#analyze-on-map) binnen Routegegevens voor verdere analyse.

- **Delen** — Maakt het delen van de geselecteerde route met anderen mogelijk.

- **Wijzigingen uploaden naar OSM** (*iOS*) — [Upload de wijzigingen](../../plugins/osm-editing.md#gps-track) die u aan de route hebt aangebracht rechtstreeks naar *OpenStreetMap*.

- **Bewerken** (*iOS*) — Gebruik de tool [Een route plannen](../../plan-route/create-route.md#modify-gpx-track) om routes te wijzigen.

- **Dupliceren** (*iOS*) — Maakt een kopie van de geselecteerde route.

- **Naam wijzigen** — Wijzig de naam van de geselecteerde route voor een betere organisatie.

- **Verplaatsen** — Hiermee kunt u de geselecteerde route naar een andere map verplaatsen.

- **Exporteren** (*Android*) — Navigeer naar *Menu → Instellingen → Acties* tabblad om alle routes uit een map te exporteren.

- **Verwijderen** — Verwijder permanent de geselecteerde route die niet langer nodig is.


### Zoeken {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mijn plaatsen routes zoekfunctie Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mijn plaatsen routes zoekfunctie iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Tik op de &#x1F50D; knop bovenaan het scherm van het apparaat om het sorteermenu van de routeslijst te openen.  

Beschikbaar:

- Zoeken op routenaam.
- [Sorteren op](#sort-by) voor beter zoeken als u de titel niet meer weet.
- [Filteren](./smart-folder.md#search-filter) (*alleen Android*) als u de specifieke kenmerken van de route nodig hebt.


### Selectiemodus {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mijn plaatsen routes sorteerfunctie Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mijn plaatsen routes iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

Het menu-item **Selecteren** biedt opties voor het beheren van mappen en routes. Met deze functie kunt u meerdere routes of routemappen selecteren. U kunt ook alle routes en mappen selecteren door op de speciale knop **Alles selecteren** te tikken.

Zodra u uw keuze hebt gemaakt, worden de volgende stappen geboden:  

- **Tonen op kaart** — Met deze functie kunt u de geselecteerde routes op de kaart weergeven om hun locatie en onderlinge relatie beter te begrijpen.

- **Delen** (*Android*) / **Exporteren** (*iOS*) — Als u geselecteerde gegevens wilt delen met andere gebruikers of wilt opslaan in een cloudservice, kunt u met de functie *Delen/Exporteren* routes en mappen verzenden met verschillende deelmethoden.

- **Uploaden naar OpenStreetMap** — U kunt geselecteerde routes indienen bij OpenStreetMap, wat bijdraagt aan de ontwikkeling en verbetering van de gegevens.

- **Verplaatsen** — U kunt uw gegevens organiseren door geselecteerde routes en mappen naar andere mappen te verplaatsen.

- [Activiteit wijzigen](../../map/tracks/track-context-menu.md#track-information-activity) — Met deze actie kunt u het activiteitstype, bijvoorbeeld *Auto*, *Avontuurlijke motorsport*, *Backpacking* of andere, voor de geselecteerde route wijzigen.

- [Uiterlijk wijzigen](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Met deze optie kunt u het uiterlijk van geselecteerde routes aanpassen, waardoor ze beter zichtbaar en herkenbaar worden op de kaart.

- **Verwijderen** — Als de geselecteerde routes of mappen niet langer nodig zijn, kunt u met de functie Verwijderen deze verwijderen, waarbij de app bevestigingsopties biedt om onbedoeld verwijderen te voorkomen.


### Sorteren op {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mijn plaatsen routes sorteerfunctie Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Mijn plaatsen routes sorteerfunctie iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd biedt een eenvoudige manier om uw routes te sorteren, zodat u een grote verzameling kunt beheren of snel specifieke functies kunt vinden. Om het sorteermenu te openen, tikt u op **Sorteren op** bovenaan de routeslijst.

***Sorteeropties:***

- **Dichtstbijzijnde** — Toont routes die het dichtst bij uw huidige locatie liggen.

- **Laatst gewijzigd** — Toont routes gesorteerd op hun meest recente wijzigingsdatum.

- **Naam: A - Z** — Rangschikt routes alfabetisch van A tot Z.

- **Naam: Z - A** — Rangschikt routes alfabetisch van Z tot A.

- **Nieuwste datum eerst** — Toont routes op aanmaakdatum, met de nieuwste bovenaan.

- **Oudste datum eerst** — Toont routes op aanmaakdatum, met de oudste bovenaan.

- **Langste afstand eerst** — Toont routes gesorteerd op lengte, met de langste bovenaan.

- **Kortste afstand eerst** — Toont routes gesorteerd op lengte, met de kortste bovenaan.

- **Langste duur eerst** — Sorteert routes op duur, met de langste bovenaan.

- **Kortste duur eerst** — Sorteert routes op duur, met de kortste bovenaan.

#### Submappen sorteren {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mijn plaatsen routes sorteerfunctie Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Mijn plaatsen routes sorteerfunctie iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Als u [submappen](#folder-actions) wilt sorteren, gaat u naar het drie-stippenmenu in de geselecteerde map en selecteert u de gewenste [opties](#sort-by).  

De geselecteerde sorteeroptie wordt niet alleen toegepast op de huidige submap, maar ook op alle geneste mappen en routes op alle niveaus. Dit zorgt voor een consistente structuur in uw opgeslagen gegevens.


## Routemap {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![importeer multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contextmenu van een route in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Met het routemapmenu kunt u mappen bekijken, hernoemen, exporteren en beheren.

Hoe het mapmenu te openen:

- *Android* - tik op het *drie-stippenmenu* in het mapveld.
- *iOS* - lang tikken op het mapveld.

***Acties met een map:***

- **Naam** — Toont de mapnaam, aanmaakdatum en het aantal routes dat het bevat.

- **Toon alle routes op de kaart** (*alleen Android*) — Toont alle routes in de map op de kaart —  
    *OPMERKING: Als er veel routes zijn, kan dit ertoe leiden dat het apparaat vastloopt.*

- **Naam bewerken** (*Android*) / **Naam wijzigen** (*iOS*) — Hiermee kunt u de map hernoemen.

- [Standaard uiterlijk wijzigen](../../map/tracks/appearance.md) (*Android*) / **Uiterlijk** (*iOS*) — Wijzigt het weergave-uiterlijk van alle routes in de map.

- [Exporteren](../../personal/import-export.md) — Opent het tabblad *Menu → Instellingen → Acties* om alle routes in de map te exporteren als een [`.osf`-bestand](../../personal/import-export.md#export).

- [Verplaatsen](#track-folder) — Hiermee kunt u de map verplaatsen naar een andere bestaande map of een nieuwe aanmaken.

- [Map verwijderen](#delete-folder) — Verwijdert de map na bevestiging.  
    ***OPMERKING: Deze actie is onomkeerbaar.***


### Mapstatistieken {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> tabblad*

![Mijn plaatsen met routes in Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tabblad*

![Mijn plaatsen met routes in iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

Onderaan de lijst in het tabblad *Routes*, en onder de lijst met routes **in elk van uw mappen**, bevindt zich een informatiegedeelte waarmee u de algemene samenvattende statistieken voor de routes in de geselecteerde map kunt bekijken. Alle waarden worden weergegeven in de [eenheden](../../personal/profiles.md#units--formats) die u hebt geselecteerd.

- *Aantal **Routes** in de map* — Toont het aantal routes in de geselecteerde map.

- *Totaal aantal* **Afstanden** — De totale lengte van alle routes in de geselecteerde map, gemeten in de eenheden die u hebt geselecteerd, wordt weergegeven.

- *Totaal aantal* **Stijgingen** — De gegevens geven de totale verticale stijging over alle routes in de geselecteerde map aan.

- *Totaal aantal* **Dalingen** — Deze parameter is de som van verticale dalingen op alle routes in de geselecteerde map.

- *Totaal aantal* **Duur** *tijd* — Dit toont de totale tijd die nodig is om alle routes in de geselecteerde map te voltooien.

- *Totale **Grootte** van gedownloade bestanden in MB* — De totale gedownloade bestandsgrootte in megabytes toont hoeveel ruimte alle routes in de geselecteerde map op uw apparaat innemen.


### Mapacties {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Mijn plaatsen routes sorteerfunctie Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Mijn plaatsen routes iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

De acties in de map helpen u bij het organiseren, sorteren en importeren van routes, om uw navigatiegegevens te structureren.  

Hoe mapacties te openen:

- Open het tabblad Routes in Mijn plaatsen.
- Navigeer naar de map die u wilt beheren.
- Tik op het *drie-stippenmenu* in de rechterbovenhoek om het menu met mapacties te openen.

***Acties in het mapmenu:***

- [Selecteren](#selection-mode) — Tik op de gewenste mappen en routes om acties uit het menu in de *selectiemodus* toe te passen.

- [Submappen sorteren](#sort-by) — Pas een sorteervolgorde (bijv. op naam, datum) toe op alle submappen en routes op elk niveau.

- [Slimme map toevoegen](../tracks/smart-folder.md#how-to-create-smart-folder) — Sorteer routes en routes automatisch op basis van criteria die u instelt.

- [Importeren](#import) — Upload GPX- of andere routebestanden van uw apparaat naar OsmAnd voor offline gebruik.

- **Nieuwe map toevoegen** — Om uw routes en routes in logische categorieën te organiseren, plaatst u ze in verschillende mappen. Dit helpt om uw navigatie-informatie te structureren.


### Map verwijderen {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tabblad*

![Mijn plaatsen met routes in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tabblad*

![Contextmenu van een route in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

U kunt een map met alle daarin opgenomen routes verwijderen. Om dit te doen:

- Tik op het *drie-stippenmenu* in het mapveld om te verwijderen.
- Onderaan het menu vindt u de optie **Map verwijderen**.
- ***OPMERKING: Deze actie is onomkeerbaar.***


## Route importeren / exporteren {#import--export-track}

### Importeren {#import}

De importtool stelt u in staat om routes toe te voegen vanuit externe bestanden voor offline navigatie en analyse. Methoden voor het importeren van routes:

1. **Directe bestandsimport:**

    - Tik op een GPX-, KML- of KMZ-bestand vanuit berichtenapps, e-mail, Google Drive of bestandsbeheerders.
    - Selecteer Openen in OsmAnd wanneer daarom wordt gevraagd.
    - De geïmporteerde route wordt opgeslagen in de map **Import** in *Mijn plaatsen*.
    - Stappen: Tik op het GPX-bestand → Openen in OsmAnd.

2. **Importeren via het menu *Mijn plaatsen*:**

    - Open het *Mijn plaatsen menu → Routes*.
    - Selecteer het GPX-bestand om te importeren.

    *Aanvullende opties:*

    - **GPX-bestanden met één route** - importeer de hele route direct.
    - **GPX-bestanden met meerdere routes** - kies om het enkele GPX-bestand te importeren of selecteer specifieke routes.

***OPMERKING:*** *Routes die handmatig aan de OsmAnd-map op uw apparaat zijn toegevoegd, worden automatisch geïmporteerd zonder de applicatie opnieuw op te starten.*  


### Exporteren {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![importeer multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![importeer multitrack](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Exporteren | Importeren |
|:------------|:---------------|
| ![importeer multitrack](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Exporteren </summary> ![importeer multitrack](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![importeer multitrack](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Exporteren </summary> ![importeer multitrack](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table>
-->

</TabItem>

</Tabs>

Er zijn verschillende manieren om één of meerdere routebestanden te exporteren naar een messenger, e-mail, bestandsbeheerder of app.  

1. Via [*Route contextmenu → Delen*](../../map/tracks/track-context-menu.md#options).

2. Via *Mijn plaatsen menu → Routes → Map / Routemenu*:

    - Om [**één route te exporteren**](#track-menu), selecteert u het menu van de route.
    - Om [**meerdere routes te exporteren**](#track-folder), selecteert u het menu van de gewenste map.

3. Via [Lokaal back-upbestand](../../personal/import-export.md#export-to-file). GPX-routes exporteren als `.osf`-bestanden.


## Gerelateerde artikelen {#related-articles}

- [Route op kaart tonen](../../map/tracks/index.md)
- [Analyseren op kaart](../../map/tracks/index.md#analyze-track-on-map)
- [Route contextmenu](../../map/tracks/track-context-menu.md)
- [Navigatie per route](../../navigation/setup/gpx-navigation.md)
- [Rit opnemen](../../plugins/trip-recording.md)

> *Laatst bijgewerkt: april 2025*