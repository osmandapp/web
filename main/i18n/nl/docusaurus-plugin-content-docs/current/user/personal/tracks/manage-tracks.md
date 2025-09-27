---
source-hash: df7c8f53eee21b0eb4dfeaecf53d0c5ae26f02cec322c124641bc379e421196b
sidebar_position: 2
title:  Tracks Beheren
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

Alle tracks in OsmAnd worden opgeslagen in een tabblad in *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd verwerkt het trackbestand in [GPX-formaat](https://en.wikipedia.org/wiki/GPS_Exchange_Format), maar [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) & [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) kunnen worden geïmporteerd en geconverteerd naar GPX. Lees meer over verschillende soorten tracks in het artikel [Tracks op kaart](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Overzicht tracks beheren Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overzicht tracks beheren iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Een track aanmaken {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een route plannen track-wijzigen-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een route plannen track-wijzigen-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

U kunt op de volgende manieren tracks toevoegen in OsmAnd:

1. **[Importeer](./manage-tracks.md#import--export-track)** een track van een externe bron.
2. Maak een nieuwe track aan in de applicatie met de tool **[Route plannen](../../plan-route/create-route.md)**.
3. Neem een track op in de applicatie met de plug-in **[Reisregistratie](../../plugins/trip-recording.md)**.
4. Voer meerdere punten in via coördinaten en sla ze op als een track met de tool **[Coördinaten invoeren](../../plan-route/coordinate-input.md)**.
5. U kunt ook **Waypoints** toevoegen aan een nieuwe track via het **[Contextmenu](../../map/map-context-menu.md#-add--edit-track-waypoint)**.


## Tracks beheren {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *tabblad <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![Mijn plaatsen met tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *tabblad <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Mijn plaatsen met tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Alle tracks die ooit zijn opgenomen, aangemaakt of geïmporteerd, worden automatisch weergegeven in de map [Mijn plaatsen](../../personal/myplaces.md) in het tabblad *Tracks*. Ze zijn georganiseerd per map of worden weergegeven in een lijst eronder.


### Trackmenu {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *tabblad <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Mijn plaatsen met tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *tabblad <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Contextmenu van een track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Elke track heeft, net als mappen, een menu waarmee u tracks efficiënt kunt beheren. U opent het als volgt:

- *Android* - tik op het *drie-puntenmenu* in het trackveld.
- *iOS* - tik lang op de gewenste track in de lijst.

Het menu biedt de volgende acties:

- **Toon/Verberg op kaart** — Toont of verbergt de geselecteerde tracks op de kaart, waardoor hun locatie visueel wordt weergegeven.

- [Openen](../../map/tracks/index.md#configure-map) (*iOS*) — Deze instelling is beschikbaar in het menu Kaart configureren. Gelegen in *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, geeft het u toegang tot het [contextmenu van de geselecteerde track](../../map/tracks/track-context-menu.md) wanneer u erop tikt.

- **Uiterlijk** (*iOS*) — Pas het [uiterlijk van tracks](../../map/tracks/appearance.md) aan naar uw voorkeuren.

- **Navigatie** (*iOS*) — Start [navigatie](../../navigation/setup/gpx-navigation.md) langs de geselecteerde track.

- **Analyseer op kaart** (*Android*) / **Analyseren** (*iOS*) — Opent de tool [Analyseer op kaart](../../navigation/setup/route-details.md#analyze-on-map) binnen Route details voor verdere analyse.

- **Delen** — Maakt het delen van de geselecteerde track met anderen mogelijk.

- **Wijzigingen uploaden naar OSM** (*iOS*) — [Upload de wijzigingen](../../plugins/osm-editing.md#gps-track) die u aan de track hebt aangebracht rechtstreeks naar *OpenStreetMap*.

- **Bewerken** (*iOS*) — Gebruik de tool [Route plannen](../../plan-route/create-route.md#modify-existing-gpx-track) om tracks te wijzigen.

- **Dupliceren** (*iOS*) — Maakt een kopie van de geselecteerde track.

- **Hernoemen** — Wijzig de naam van de geselecteerde track voor een betere organisatie.

- **Verplaatsen** — Hiermee kunt u de geselecteerde track naar een andere map verplaatsen.

- **Exporteren** (*Android*) — Navigeer naar het tabblad *Menu → Instellingen → Acties* om alle tracks uit een map te exporteren.

- **Verwijderen** — Verwijder permanent de geselecteerde track die niet langer nodig is.


### Zoeken {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoekfunctie tracks Mijn plaatsen Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoekfunctie tracks Mijn plaatsen iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Tik op de knop &#x1F50D; bovenaan het scherm van het apparaat om het sorteermenu van de tracklijst te openen.  

Beschikbaar:

- Zoeken op tracknaam.
- [Sorteer op](#sort-by) voor beter zoeken als u de titel niet meer weet.
- [Filter](./smart-folder.md#search-filter) (*alleen Android*) als u de specifieke kenmerken van de track nodig heeft.


### Selectiemodus {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sorteerfunctie tracks Mijn plaatsen Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tracks Mijn plaatsen iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

Het menu-item **Selecteren** biedt opties voor het beheren van mappen en tracks. Met deze functie kunt u meerdere tracks of trackmappen selecteren. U kunt ook alle tracks en mappen selecteren door op de speciale knop **Alles selecteren** te tikken.

Nadat u uw keuze heeft gemaakt, zijn de volgende stappen beschikbaar:  

- **Toon op kaart** — Met deze functie kunt u de geselecteerde tracks op de kaart weergeven om hun locatie en onderlinge relatie beter te begrijpen.

- **Delen** (*Android*) / **Exporteren** (*iOS*) — Als u geselecteerde gegevens wilt delen met andere gebruikers of wilt opslaan in een cloudservice, kunt u met de functie *Delen/Exporteren* tracks en mappen verzenden via verschillende deelmethoden.

- **Uploaden naar OpenStreetMap** — U kunt geselecteerde tracks indienen bij OpenStreetMap en zo bijdragen aan de ontwikkeling en verbetering van de gegevens.

- **Verplaatsen** — U kunt uw gegevens organiseren door geselecteerde tracks en mappen naar andere mappen te verplaatsen.

- [Activiteit wijzigen](../../map/tracks/track-context-menu.md#ttrack-activity-type) — Met deze actie kunt u het activiteitstype wijzigen, bijvoorbeeld naar *Auto*, *Avontuurlijke motorsport*, *Backpacken* of andere, voor de geselecteerde track.

- [Uiterlijk wijzigen](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Met deze optie kunt u het uiterlijk van geselecteerde tracks aanpassen, waardoor ze beter zichtbaar en herkenbaar worden op de kaart.

- **Verwijderen** — Als de geselecteerde tracks of mappen niet langer nodig zijn, kunt u ze met de functie Verwijderen verwijderen, waarbij de app bevestigingsopties biedt om onbedoeld verwijderen te voorkomen.


### Tracks sorteren {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sorteerfunctie tracks Mijn plaatsen Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Sorteerfunctie tracks Mijn plaatsen iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd biedt een eenvoudige manier om uw tracks te sorteren, zodat u een grote verzameling kunt beheren of snel specifieke functies kunt vinden. Om het sorteermenu te openen, tikt u op **Sorteer op** bovenaan de tracklijst.

***Sorteeropties:***

- **Dichtstbijzijnde** — Toont tracks die het dichtst bij uw huidige locatie zijn.
- **Laatst gewijzigd** — Toont tracks gesorteerd op hun meest recente wijzigingsdatum.
- **Naam: A - Z** — Rangschikt tracks alfabetisch van A tot Z.
- **Naam: Z - A** — Rangschikt tracks alfabetisch van Z tot A.
- **Nieuwste datum eerst** — Toont tracks op aanmaakdatum, met de nieuwste bovenaan.
- **Oudste datum eerst** — Toont tracks op aanmaakdatum, met de oudste bovenaan.
- **Langste afstand eerst** — Toont tracks gesorteerd op lengte, met de langste bovenaan.
- **Kortste afstand eerst** — Toont tracks gesorteerd op lengte, met de kortste bovenaan.
- **Langste duur eerst** — Sorteert tracks op duur, met de langste bovenaan.
- **Kortste duur eerst** — Sorteert tracks op duur, met de kortste bovenaan.

### Submappen sorteren {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sorteerfunctie tracks Mijn plaatsen Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Sorteerfunctie tracks Mijn plaatsen iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Als u [submappen](#folder-actions) wilt sorteren, gaat u naar het drie-puntenmenu binnen de geselecteerde map en selecteert u de gewenste [opties](#sort-by).  

De geselecteerde sorteeroptie wordt niet alleen toegepast op de huidige submap, maar ook op alle geneste mappen en tracks op alle niveaus. Dit zorgt voor een consistente structuur in uw opgeslagen gegevens.


## Trackmap {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Tik op het *drie-puntenmenu* in het mapveld om het mapmenu te **openen**.

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

> Tik lang op het mapveld om het mapmenu te **openen**.

![Contextmenu van een track in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Met het trackmapmenu kunt u mappen bekijken, hernoemen, exporteren en beheren.


***Acties met een map:***

- **Naam** — Toont de mapnaam, aanmaakdatum en het aantal tracks dat de map bevat.
- **Toon alle tracks op de kaart** (*alleen Android*) — Toont alle tracks in de map op de kaart. Als er veel tracks zijn, kan dit ervoor zorgen dat het apparaat vastloopt.
- **Naam bewerken** (*Android*) / **Hernoemen** (*iOS*) — Hiermee kunt u de map hernoemen.
- [Standaard uiterlijk wijzigen](../../map/tracks/appearance.md) (*Android*) / **Uiterlijk** (*iOS*) — Wijzigt het uiterlijk van alle tracks in de map.
- [Exporteren](../../personal/import-export.md) — Opent het tabblad *Menu → Instellingen → Acties* om alle tracks in de map te exporteren als een [`.osf`-bestand](../../personal/import-export.md#export).
- [Verplaatsen](#track-folder) — Hiermee kunt u de map verplaatsen naar een andere bestaande map of een nieuwe aanmaken.
- [Map verwijderen](#delete-folder) — Verwijdert de map na bevestiging. ***Deze actie is onomkeerbaar.***


### Mapstatistieken {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *tabblad <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/>*

![Mijn plaatsen met tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *tabblad <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Mijn plaatsen met tracks in iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

Onderaan de lijst in het tabblad *Tracks*, en onder de lijst met tracks **in elk van uw mappen**, bevindt zich een informatiesectie waarmee u de algemene samenvattende statistieken voor de tracks in de geselecteerde map kunt bekijken. Alle waarden worden weergegeven in de door u geselecteerde [eenheden](../../personal/profiles.md#units--formats).

- *Aantal **Tracks** in de map* — Toont het aantal tracks in de geselecteerde map.
- *Totale som van* **Afstanden** — De totale lengte van alle tracks in de geselecteerde map, gemeten in de door u geselecteerde eenheden, wordt weergegeven.
- *Som van* **Stijgingen** — De gegevens geven de totale verticale stijging aan over alle tracks in de geselecteerde map.
- *Som van* **Dalingen** — Deze parameter is de som van de verticale dalingen op alle tracks in de geselecteerde map.
- *Som van* **Duur** *tijd* — Dit toont de totale tijd die nodig is om alle tracks in de geselecteerde map te voltooien.
- *Totale **Grootte** van gedownloade bestanden in MB* — De totale gedownloade bestandsgrootte in megabytes toont hoeveel ruimte alle tracks in de geselecteerde map op uw apparaat innemen.


### Mapacties {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Sorteerfunctie tracks Mijn plaatsen Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Tracks Mijn plaatsen iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

De acties in de map helpen u bij het organiseren, sorteren en importeren van tracks, om uw navigatiegegevens te structureren.  

Hoe mapacties te openen:

- Open het tabblad Tracks in Mijn plaatsen.
- Navigeer naar de map die u wilt beheren.
- Tik op het *drie-puntenmenu* in de rechterbovenhoek om het menu met mapacties te openen.

***Acties in het mapmenu:***

- [Selecteren](#selection-mode) — Tik op de gewenste mappen en tracks om acties uit het menu toe te passen in de *selectiemodus*.
- [Submappen sorteren](#sort-by) — Pas een sorteervolgorde (bijv. op naam, datum) toe op alle submappen en tracks op elk niveau.
- [Slimme map toevoegen](../tracks/smart-folder.md#how-to-create-smart-folder) — Sorteer routes en tracks automatisch op basis van criteria die u instelt.
- [Importeren](#import) — Upload GPX- of andere trackbestanden van uw apparaat naar OsmAnd voor offline gebruik.
- **Nieuwe map toevoegen** — Om uw routes en tracks in logische categorieën te organiseren, plaatst u ze in verschillende mappen. Dit helpt om uw navigatie-informatie te structureren.


### Map verwijderen {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *tabblad <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Mijn plaatsen met tracks in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *tabblad <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Contextmenu van een track in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

U kunt een map met alle tracks die deze bevat verwijderen. Om dit te doen:

- Tik op het *drie-puntenmenu* in het mapveld om te verwijderen.
- Onderaan het menu vindt u de optie **Map verwijderen**.
- ***LET OP: Deze actie is onomkeerbaar.***


## Track importeren / exporteren {#import--export-track}

### Importeren {#import}

Met de importtool kunt u tracks uit externe bestanden toevoegen voor offline navigatie en analyse. Methoden voor het importeren van tracks:

1. **Directe bestandsimport:**

    - Tik op een GPX-, KML- of KMZ-bestand vanuit berichtenapps, e-mail, Google Drive of bestandsbeheerders.
    - Selecteer Openen in OsmAnd wanneer daarom wordt gevraagd.
    - De geïmporteerde track wordt opgeslagen in de map **Import** in *Mijn plaatsen*.
    - Stappen: Tik op het GPX-bestand → Openen in OsmAnd.

2. **Importeren via het menu *Mijn plaatsen*:**

    - Open het *menu Mijn plaatsen → Tracks*.
    - Selecteer het te importeren GPX-bestand.

    *Extra opties:*

    - **GPX-bestanden met één track** - importeer de hele track direct.
    - **GPX-bestanden met meerdere tracks** - kies ervoor om het enkele GPX-bestand te importeren of selecteer specifieke tracks.

***LET OP:*** *Tracks die handmatig aan de OsmAnd-map op uw apparaat zijn toegevoegd, worden automatisch geïmporteerd zonder de applicatie opnieuw te starten.*  


### Exporteren {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![import multitrack](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Exporteren | Importeren |
|:------------|:---------------|
| ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Exporteren </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Exporteren </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

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

Er zijn verschillende manieren om een of meer trackbestanden te exporteren naar een messenger, e-mail, bestandsbeheerder of app.  

1. Via [*Contextmenu van track → Delen*](../../map/tracks/track-context-menu.md#options).

2. Via *Menu Mijn plaatsen → Tracks → Map / Trackmenu*:

    - Om [**een enkele track te exporteren**](#track-menu), selecteert u het menu van de track.
    - Om [**meerdere tracks te exporteren**](#track-folder), selecteert u het menu van de gewenste map.

3. Via [Lokaal back-upbestand](../../personal/import-export.md#export). GPX-tracks exporteren als `.osf`-bestanden.


## Gerelateerde artikelen {#related-articles}

- [Track tonen op kaart](../../map/tracks/index.md)
- [Analyseer op kaart](../../map/tracks/index.md#analyze-track-on-map)
- [Contextmenu van track](../../map/tracks/track-context-menu.md)
- [Navigatie per track](../../navigation/setup/gpx-navigation.md)
- [Reisregistratie](../../plugins/trip-recording.md)