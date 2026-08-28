---
source-hash: 0000cb42245d9871184d8009b30a97fd6f15555a6510bbbd8d52edde2e10f458
sidebar_position: 7
title:  Favorieten
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

**Favorieten** is een functie van OsmAnd waarmee u bladwijzers (notities) op de kaart kunt maken. Deze favorietenpunten worden standaard weergegeven als gele sterren, maar u kunt ze volledig aanpassen met verschillende kleuren, vormen en pictogrammen. Favorieten zijn gegroepeerd in een speciale kaartlaag, die zichtbaar wordt vanaf het *6e zoomniveau*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorieten introductie android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorieten introductie ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Favorietenpunt {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Favorieten maken deel uit van een speciale kaartlaag, en u kunt ze [tonen of verbergen](../map/point-layers-on-map.md#favorites) samen met hun [namen](../map/point-layers-on-map.md#favorite-and-poi-names) op de kaart. Door op een favorietenpunt te tikken, opent u het [Contextmenu](../map/map-context-menu.md#favorites--track-points-from-the-group), waarmee u details kunt bekijken en het punt kunt [bewerken of verwijderen](../map/map-context-menu.md#add--edit-favorite).


### Aanmaken {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoriet beschrijving toevoegen Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Favorietengroep Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriet beschrijving toevoegen iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Favorietengroep iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Om een favorietenpunt toe te voegen:

1. Selecteer een [POI](../map/point-layers-on-map.md#points-of-interest-pois) of een structuur op de kaart.  
    Korte tik voor een POI of lange tik voor een algemeen kaartpunt.
2. Selecteer [Toevoegen (☆)](../map/map-context-menu.md#add--edit-favorite) in het contextmenu van de kaart.

Bij het toevoegen van een punt uit OSM-gegevens wordt de relevante POI-informatie automatisch opgenomen. U kunt ook een favoriet aanmaken door [lang te tikken](../map/map-context-menu.md#select-any-point-long-tap) op een willekeurige locatie op de kaart.

***Velden voor een Favorietenpunt:***

- **Naam** — Een unieke naam binnen de groep (*Vereist*).
- **Adres** en **Beschrijving** (*Optioneel*).
- **Groep** — Selecteer uit een bestaande [Favorietengroep](#manage-favorites) or maak een nieuwe aan. Op Android kunt u ook een submap binnen een groep selecteren of een nieuwe aanmaken. Geneste mappen worden weergegeven met hun volledige pad (bijvoorbeeld *Reizen* / *Italië* / *Rome*).
- **Visuele aanpassing** — Pictogram, kleur, vorm kunnen overeenkomen met het standaard [uiterlijk van de groep](#change-group-appearance) of individueel worden aangepast.
- **Media** (*Alleen Android*) — Voeg foto’s, video’s, audio-opnames of afbeeldingen uit uw Galerij of Bestanden toe.

**OPMERKING:** Als de Favorietenlaag is uitgeschakeld in [Kaart configureren](../map/configure-map-menu), wordt bij het toevoegen van een nieuw favorietenpunt de laag automatisch ingeschakeld zodat het nieuw toegevoegde favoriet zichtbaar is op de kaart.


### Bewerken / Vervangen / Verwijderen {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriet bewerken iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Om een favorietenpunt te wijzigen:

1. [Tik](../map/map-context-menu.md#select-an-object-single-tap) op de favoriet op de kaart of ga naar [Mijn Favorieten](#manage-favorites).
2. Kies **Favoriet bewerken** in het [*contextmenu van de kaart*](../map/map-context-menu.md#add--edit-favorite).

***Beschikbare opties:***

- **Details bewerken** — Naam, pictogram, groep, adres, beschrijving en bijgevoegde media.
- **Locatie vervangen** — Vervang een ander punt door dit punt. Handig voor het bijwerken van een specifiek punt (bijv. *Mijn geparkeerde auto*) of het aanmaken van een nieuw punt.
- **Verwijderen** — Verwijder de favoriet met de verwijderoptie, toegankelijk via het menu Bewerken of via de verwijderknop op Android.


### Favorietenpictogrammen {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Mijn plaatsen favorieten android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![mijn_plaatsen_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

Er is een breed scala aan pictogrammen voor POI's en waypoints beschikbaar in OsmAnd. U kunt:

- Een pictogram selecteren uit de lijst met [POI-categorieën](../search/search-poi.md#categories-and-their-filters).
- Een geschikt pictogram zoeken met de [zoekoptie](../search/search-all.md#how-to-use).


### Speciale Favorieten (Persoonlijk) {#special-favorites-personal}

De map *Persoonlijk* bevat speciale punten zoals **<Translate android="true" ids="favorite_home_category"/>** en **<Translate android="true" ids="work_button"/>**, die vaak worden gebruikt bij [navigatie](../navigation/setup/route-navigation.md#select-start-point). Deze map heeft geen *drie-puntenmenu* en de parameters ervan kunnen niet worden gewijzigd.


### Media (Alleen Android) {#media}

![Media](@site/static/img/personal/media_actions.webp) ![Media](@site/static/img/personal/media_menu.webp)

De Media-sectie stelt u in staat om foto’s, video’s, audio-opnames en afbeeldingen aan een favorietenpunt toe te voegen. Media kan worden toegevoegd tijdens het aanmaken van een favoriet of later via het scherm Favoriet bewerken. Tik op *Toevoegen* in de Media-sectie en kies een van de beschikbare opties:
- **Foto maken** — Maak een nieuwe foto met de camera van het apparaat.
- **Video-opname maken** — Neem een nieuwe video op.
- **Audio-opname maken** — Neem een audio-opname op.
- **Kiezen uit Galerij** — Selecteer een bestaande afbeelding van uw apparaat.
- **Kiezen uit Bestanden** — Selecteer een afbeelding uit het bestandssysteem.

Nadat media is toegevoegd, verschijnt het in de Media-kaart in het contextmenu van de favoriet. Dezelfde Media-kaart is ook beschikbaar voor [Waypoints](../map/tracks/track-context-menu.md#points--waypoints).

De Media-kaart toont voorbeelden van bijgevoegde items. De weergegeven items volgen de geselecteerde sorteervolgorde. Tik op *Alles weergeven* om de volledige galerij te openen. De galerij toont alle media die aan de geselecteerde favoriet zijn gekoppeld.

Tik op een item om het in volledig scherm te bekijken. Foto’s en video’s kunnen direct worden bekeken, terwijl audio-opnames afspeelbediening bevatten.


## Favorieten Beheren {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Mijn plaatsen favorieten android](@site/static/img/personal/my_places_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![mijn_plaatsen_ios](@site/static/img/personal/my_places_ios_new.png)

</TabItem>

</Tabs>

De sectie **Favorieten** stelt u in staat om:

- [Te zoeken](#order--sorting--search) naar specifieke favorieten of groepen. Op iOS worden favorietengroepen (mappen) georganiseerd in drie secties: **Vastgezet**, **Zichtbaar** en **Verborgen**. Lege secties worden niet weergegeven.
- [Bulkoperaties](#bulk-edit--delete) — Delen, verplaatsen of verwijderen van meerdere favorieten tegelijk.

### Volgorde / Sorteren / Zoeken {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites android](@site/static/img/personal/favorites_points_sorting.webp) ![Favorites android](@site/static/img/personal/favorites_folders_sorting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites iOS](@site/static/img/personal/favorites_points_sorting_ios.webp) ![Favorites iOS](@site/static/img/personal/favorites_folders_sorting.webp)
</TabItem>

</Tabs>

- **Sorteren** — Favorietenmappen en -punten kunnen worden gesorteerd met behulp van de beschikbare sorteeropties in het lijstmenu. Voor favorietenpunten zijn de volgende opties beschikbaar: *Naam A – Z*, *Naam Z – A*, *Laatst gewijzigd*, *Dichtst bij huidige locatie*, *Dichtst bij kaartcentrum*, *Nieuwste datum eerst* en *Oudste datum eerst*. Voor favorietenmappen zijn de volgende opties beschikbaar: *Naam A – Z*, *Naam Z – A*, *Laatst gewijzigd*, *Nieuwste datum eerst* en *Oudste datum eerst*. Standaard worden items gesorteerd op Naam A – Z. Vastgezette mappen worden altijd bovenaan de lijst weergegeven. Ze zijn visueel gescheiden van de rest van de mappen door een scheidingslijn. 
- **Zoeken** — Gebruik [Globaal zoeken](../search/search-all.md) om favorieten op naam te vinden. Favorieten worden gesorteerd op afstand tot het midden van de kaart. Om favorietenpunten uit de Favorietenlijst in het tabblad Mijn plaatsen te zoeken, tikt u op het pictogram *Zoeken* (vergrootglas).

### Bulk Bewerken / Verwijderen {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorietenacties android](@site/static/img/personal/favorites_group_actions.png) ![Favorietenactie verwijderen android](@site/static/img/personal/favorites_actions.png)

Om meerdere favorieten of mappen te beheren, activeer de *Selectiemodus*. U kunt Selectiemodus op twee manieren openen:
- Tik op het *drie-puntmenu* in de rechterbovenhoek en kies *Selecteren*.
- Tik lang op een favorietenpunt of map.

Wanneer Selectiemodus is ingeschakeld, verschijnen er selectievakjes naast de items in de lijst. Selecteer de vereiste favorieten of mappen door op de selectievakjes te tikken. Om alle items in de lijst te selecteren, tik op het Selecteer alles-pictogram in de rechterbovenhoek.

De beschikbare acties hangen af van het type geselecteerde item. Wanneer mappen zijn geselecteerd, zijn de volgende acties beschikbaar:
- **Delen** — Exporteer geselecteerde mappen als een Favorieten GPX-bestand.
- **Verwijderen** — Verwijder de geselecteerde mappen.

Wanneer favorietenpunten zijn geselecteerd, zijn de volgende acties beschikbaar:
- **Verplaatsen** — Verplaats geselecteerde favorieten naar een andere map.
- **Toevoegen aan kaartmarkeringen** — Voeg geselecteerde punten toe aan de lijst met kaartmarkeringen.
- **Toevoegen aan track** — Voeg geselecteerde punten toe aan een track.
- **Toevoegen aan navigatie** — Start navigatie naar het geselecteerde punt.
- **Verwijderen** — Verwijder de geselecteerde favorieten.

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_folders.webp) ![Favorites actions ios](@site/static/img/personal/favorites_actions_points.webp)

Om meerdere favorietenpunten of mappen te beheren, activeert u de *Selectiemodus* door op het *drie-puntmenu* in de rechterbovenhoek te tikken en *Selecteren* te kiezen. Wanneer Selectiemodus is ingeschakeld, verschijnen er selectievakjes naast de items in de lijst. Selecteer de vereiste favorietenpunten of mappen door op de selectievakjes te tikken. Om alle items in de lijst te selecteren, tik op het Selecteer alles-pictogram in de rechterbovenhoek.

De beschikbare acties voor geselecteerde favorietenpunten zijn als volgt:

- **Delen** — Exporteer geselecteerde punten als een Favorites.gpx-bestand.
- **Verplaatsen** — Verplaats geselecteerde favorietenpunten naar een andere map.
- **Uiterlijk wijzigen** — Wijzig het uiterlijk van geselecteerde favorietenpunten.
- **Toevoegen aan kaartmarkeringen** — Voeg geselecteerde punten toe aan de lijst met kaartmarkeringen.
- **Toevoegen aan track** — Voeg geselecteerde punten toe aan een track.
- **Toevoegen aan navigatie** — Voeg geselecteerde punten toe aan navigatie.
- **Verwijderen** — Verwijder de geselecteerde favorietenpunten.

Voor geselecteerde mappen zijn dezelfde acties beschikbaar, met de volgende extra opties:

- **Tonen op kaart** / **Verbergen op kaart** — Toon of verberg de favorietenpunten uit de geselecteerde mappen op de kaart.
- **Vastzetten** / **Losmaken map** — Zet de geselecteerde mappen vast of maak ze los.

</TabItem>

</Tabs>

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Acties voor Favorietengroepen {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.webp)

</TabItem>

</Tabs>

Op Android gebruikt u het ***Drie-puntmenu*** naast elke map om groepen favorieten te beheren. Op iOS gebruikt u ***lang tikken op de map*** om groepen favorieten te beheren: 

- **<Translate android="true" ids="shared_string_show_on_map"/>** / **Verberg op kaart** — Schakel deze optie in of uit om de favorietenpunten uit de map op de kaart weer te geven of te verbergen.
- **<Translate android="true" ids="pin_folder"/>** — Zet de geselecteerde map vast om deze bovenaan de favorietenlijst te houden voor snellere toegang.
- **<Translate android="true" ids="shared_string_rename"/>** — Gebruik deze optie om de naam van de geselecteerde map te wijzigen.
- [<Translate android="true" ids="change_default_appearance"/>](#change-group-appearance) — Pas aan hoe de favorietenpunten in de map op de kaart verschijnen door hun pictogrammen, kleuren of labels te wijzigen.
- **<Translate android="true" ids="shared_string_share"/>** — Deel de favorietenpunten in de map door ze te exporteren als een *Favorites.gpx*-bestand, waardoor het gemakkelijk is om uw gegevens over te dragen of er een back-up van te maken.
- **<Translate android="true" ids="shared_string_move"/>** — Verplaats de geselecteerde map, inclusief alle favorietenpunten en geneste submappen, naar een andere map. De huidige map en de bijbehorende submappen kunnen niet als bestemming worden geselecteerd.
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** / **Verwijder van kaartmarkeringen** — Voeg alle favorietenpunten uit de map toe aan de *Lijst met kaartmarkeringen* of verwijder ze indien nodig voor eenvoudige referentie.
- **<Translate android="true" ids="add_to_a_track"/>** — Voeg alle favorietenpunten uit de geselecteerde map toe aan een track. Dit opent het trackscherm waar u een track kunt kiezen of aanmaken.
- **Toevoegen aan navigatie** (*Alleen iOS*) — Voeg alle favorietenpunten uit de geselecteerde map toe aan navigatie.
- **<Translate android="true" ids="shared_string_delete"/>** — Verwijder de geselecteerde favorietenmap en alle punten erin permanent.

### Uiterlijk van Groep Wijzigen {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Drie-puntmenu → Standaard uiterlijk wijzigen*

![Favorietenmap functies android](@site/static/img/personal/favorite_change_appearance_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Lang tikken op map → Standaard uiterlijk*

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_3_ios.webp)

</TabItem>

</Tabs>

De optie **Uiterlijk van Groep Wijzigen** stelt u in staat om een standaardstijl in te stellen voor alle favorieten in een map. U kunt de volgende parameters aanpassen:

- **Pictogram** — Kies een pictogram uit de beschikbare categorieën.
- **Kleur** — Selecteer een effen kleur om favorieten te markeren.
- **Vorm** — Kies een markervorm (cirkel, vierkant, octagon).

Als de favorieten in een map al verschillende pictogrammen, kleuren of vormen hebben, wordt de *Oorspronkelijke staat* weergegeven. Dit betekent dat elke favoriet zijn huidige stijl behoudt tenzij u een nieuwe selecteert. Bij het opslaan wordt u ook gevraagd te kiezen hoe de wijzigingen moeten worden toegepast:

- **Alleen toepassen op nieuwe punten** — Bestaande favorieten blijven ongewijzigd; nieuwe favorieten erven het standaard uiterlijk.
- **Toepassen op bestaande punten** — Werk alleen de favorieten bij die al in de map staan.
- **Toepassen op alle punten** — Pas de nieuwe stijl toe op zowel bestaande als toekomstige favorieten.

Deze flexibiliteit stelt u in staat om het uiterlijk van een map te standaardiseren of unieke aanpassingen te behouden terwijl u nog steeds standaardwaarden instelt voor nieuwe punten.


## Exporteren / Importeren {#export--import}

OsmAnd biedt verschillende methoden om favorieten te [back-uppen](./import-export.md) en [herstellen](./import-export.md#import):

- **Back-uplocaties** — Lokale opslag, [OsmAnd Cloud](../personal/osmand-cloud.md) (alleen met een [OsmAnd Pro of OsmAnd Start abonnement](../purchases/index.md)), of instant messaging-apps.

- **Bestandsformaat** — Favorieten worden opgeslagen als `.gpx`-bestanden (favorites.gpx). Gebruik de `.osf`-indeling om favorieten met hun bijgevoegde media te back-uppen. Bij het importeren van de back-up worden zowel favorietenpunten als de bijbehorende media hersteld.


### Gratis Cloudback-up {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorietenmap functies android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_2_ios.webp)

</TabItem>

</Tabs>

De [Gratis Favorietenback-up](../personal/osmand-cloud.md#osmand-start) is een speciaal aankoopabonnement waarmee u een back-up kunt maken van uw favorietenpunten (locaties) voor **Android, iOS**- of **Web**-versies in de OsmAnd-applicatie en deze kunt herstellen vanuit OsmAnd Cloud. Dit abonnement is beschikbaar voor gebruikers van [OsmAnd Free of Maps+](../purchases/index.md).  

*Gratis Favorietenback-up* biedt deze voordelen:

- **Geen betaling vereist**. Gebruik de back-upfunctie zonder betaalde abonnementen aan te schaffen.
- **Favorietenpunten opslaan**. Sla uw favorietenpunten regelmatig op in OsmAnd om te voorkomen dat u ze verliest als uw apparaat crasht of de app wordt verwijderd.
- **Favorietenpunten overdragen**. Importeer uw favorietenpunten naar een nieuw apparaat met de functie *Gratis Favorietenback-up* als u OsmAnd op meerdere apparaten gebruikt.  


### Hoe een Back-up te Maken {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorietenmap functies android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

U heeft een OsmAnd Cloud-account nodig om de functie *Gratis Instellingenback-up* te gebruiken. Als u een account heeft in *OsmAnd Pro* of een actief account in *OsmAnd Cloud acount*, ziet u de promotiebanner niet.  

- *Banner Gratis Favorietenback-up*. Tik op deze banner om het back-upproces te starten.
- *Voltooi de registratiestap* als u geen OsmAnd Cloud-account heeft door de instructies in de [registratiegids](../personal/osmand-cloud.md#login) te volgen.
- *Navigeer naar het menu OsmAnd Aankopen* (*Menu → Instellingen → Aankopen*).
- *[OsmAnd Start-pakket](../personal/osmand-cloud.md#osmand-start)*. Selecteer deze optie om toegang tot de functie Gratis Instellingenback-up te krijgen.
- *Maak een back-up* van uw instellingen.

<!--
### All Favorites {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

You can export and import your favorites using the special buttons at the bottom of the Favorites screen. A [.gpx file](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) can be sent to Dropbox, email, messengers, and other applications installed on your device that support this feature.

- **Import** button (*Android*) / **Import favorite** (*iOS*). Allows you to import favorite points (*favorites.gpx*) as waypoints from a *GPX* file (a common GPS data format) from your device's storage.
- **Share** button (*Android*) / **Export favorite** (*iOS*). Allows you to export (share) all your favorites as a *favorites.gpx* file.
-->

### Favorietengroep {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_1_ios.webp) 
</TabItem>

</Tabs>

- Om meerdere favorietenmappen te delen, activeert u de [Selectiemodus](#bulk-edit--delete), selecteert u de gewenste mappen en tikt u op *Delen*.
- Om een enkele favorietenmap te delen, tikt u op het Drie-puntmenu (*Android*) of tikt u lang op de map (*iOS*) en kiest u *Delen* om het Favorites.gpx-bestand naar het geheugen van uw apparaat te sturen of te delen via messaging-apps. Op Android verschijnt, als de map bijgevoegde media bevat, een Deel-bladscherm. U kunt kiezen:
    - *Alleen punten* — Deel de favorietenpunten uit de map als een GPX-bestand.
    - *Punten en media* — Deel de favorietenpunten en bijgevoegde media als een OSF-archief.


### Automatische Favorietenback-up {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Android → data → net.osmand → files → backup*

![Favorieten back-up exporteren Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Favorieten automatische back-up android](@site/static/img/personal/favorites_autobackup_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Bestanden → Op mijn iPhone → OsmAnd Maps → favourites_backup*

![Favorieten automatische back-up ios](@site/static/img/personal/favorites_autobackup.png)  

</TabItem>

</Tabs>

OsmAnd maakt een **back-upbestand** telkens wanneer favorieten worden bewerkt.

- **Android**: Back-ups worden opgeslagen in *Android → data → net.osmand → files → backup*. Gebruik een bestandsbeheerder van derden om er toegang toe te krijgen.

- **iOS**: Bestanden bevinden zich in *Bestanden → Op mijn iPhone → OsmAnd Maps → favourites_backup*.

**Handmatige back-upexport**  

- Ga naar *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Exporteer het `.osf`-bestand naar lokale opslag, clouddiensten of deel het rechtstreeks.

:::caution
In de nieuwste versies van ***Android*** is de toegang tot systeemmappen beperkt. Na het uitpakken van het favorietenbestand uit het archief, blijft het echter mogelijk om het door te sturen naar messengers of clouddiensten, enz.  
:::


### Favorieten in GPX-bestand {#favorites-in-gpx-file}

Alle informatie over een Favoriet wordt opgeslagen en beschreven met behulp van tags. Bij het aanmaken van een Favorietenpunt kunt u uw eigen [beschrijving](#favorite-point) schrijven of informatie gebruiken uit de OSM [point of interest (POI)](../map/point-layers-on-map.md#points-of-interest-pois) gegevens waaruit uw punt is gemaakt. Favorietenpunten, POI's en Waypoints gebruiken dezelfde **tags** om informatie op te slaan en worden opgeslagen in **GPX-bestandsformaat**.

Favorieten kunnen ook verwijzingen naar bijgevoegde media bevatten met behulp van standaard GPX `<link>`-elementen. 


```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```  


## Gerelateerde artikelen {#related-articles}

- [Tracks beheren](../personal/tracks/manage-tracks.md#import--export-track)
- [Zoekgeschiedenis](../search/search-history.md#export-and-share)
- [Kleurpaletschema's](../personal/color-palette-schemes.md)