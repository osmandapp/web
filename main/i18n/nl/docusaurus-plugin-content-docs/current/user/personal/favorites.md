---
source-hash: 0b4ccedbab00f7e1bbfb641e2f35ec9e1e8bfde4a863b05a99381d9223043012
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

Met de functie **Favorieten** van OsmAnd kunt u bladwijzers (notities) op de kaart maken. Deze favoriete punten worden standaard weergegeven als gele sterren, maar u kunt ze volledig aanpassen met verschillende kleuren, vormen en pictogrammen. Favorieten worden gegroepeerd in een speciale kaartlaag, die zichtbaar wordt vanaf het *6e zoomniveau*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Introductie favorieten Android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Introductie favorieten iOS](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Favoriet punt {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorietenlaag Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorietenlaag iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Favorieten maken deel uit van een speciale kaartlaag en u kunt ze [weergeven of verbergen](../map/point-layers-on-map.md#favorites) samen met hun [namen](../map/point-layers-on-map.md#favorite-and-poi-names) op de kaart. Door op een favoriet punt te tikken, opent het [Contextmenu](../map/map-context-menu.md#favorites--track-points-from-the-group), zodat u details kunt bekijken en het punt kunt [bewerken of verwijderen](../map/map-context-menu.md#add--edit-favorite).


### Aanmaken {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Beschrijving favoriet toevoegen Android](@site/static/img/personal/favorite_add_descr_android.png) ![Favorietengroep Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Beschrijving favoriet toevoegen iOS](@site/static/img/personal/favorite_add_descr_ios.png) ![Favorietengroep iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Een favoriet punt toevoegen:

1. Selecteer een [POI](../map/point-layers-on-map.md#points-of-interest-pois) of een structuur op de kaart.
    Kort tikken voor een POI of lang tikken voor een algemeen kaartpunt.
2. Selecteer [Toevoegen (☆)](../map/map-context-menu.md#add--edit-favorite) in het kaartcontextmenu.

Bij het toevoegen van een punt uit OSM-gegevens wordt de relevante POI-informatie automatisch opgenomen. U kunt ook een favoriet maken door lang te tikken op een willekeurige kaartlocatie.

***Velden voor een favoriet punt:***

- **Naam** — Een unieke naam binnen de groep (*Verplicht*).
- **Adres** en **Beschrijving** (*Optioneel*).
- **Groep** — Selecteer uit een bestaande [Favorietengroep](#manage-favorites) of maak een nieuwe aan.
- **Visuele aanpassing** — Pictogram, kleur, vorm kunnen overeenkomen met de standaard [groepsweergave](#change-group-appearance) of individueel worden aangepast.


### Bewerken / Vervangen / Verwijderen {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoriet bewerken Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriet bewerken iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Een favoriet punt wijzigen:

1. [Tik](../map/map-context-menu.md#select-an-object-single-tap) op de favoriet op de kaart of ga naar [Mijn favorieten](#manage-favorites).
2. Kies **Favoriet bewerken** in het [*kaartcontextmenu*](../map/map-context-menu.md#add--edit-favorite).

***Beschikbare opties:***

- **Details bewerken** — Naam, pictogram, groep, adres en beschrijving.
- **Locatie vervangen** — Vervang een ander punt door dit punt. Handig voor het bijwerken van een specifiek punt (bijv. *Mijn geparkeerde auto*) of het maken van een nieuw punt.
- **Verwijderen** — Verwijder de favoriet met de verwijderoptie, toegankelijk via het menu Bewerken of via de verwijderknop op Android.


### Favoriete pictogrammen {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Mijn plaatsen favorieten Android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Mijn plaatsen iOS](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

Een breed scala aan pictogrammen voor POI's en waypoints is beschikbaar in OsmAnd. U kunt:

- Een pictogram selecteren uit de lijst met [POI-categorieën](../search/search-poi.md#categories-and-their-filters).
- Een geschikt pictogram vinden met de [zoekoptie](../search/search-all.md#how-to-use).


### Speciale favorieten (persoonlijk) {#special-favorites-personal}

De *Persoonlijke map* bevat speciale punten zoals **<Translate android="true" ids="favorite_home_category"/>** en **<Translate android="true" ids="work_button"/>**, die vaak worden gebruikt in [navigatie](../navigation/setup/route-navigation.md#select-starting-point). Deze map heeft geen *drie-puntenmenu* en de parameters kunnen niet worden gewijzigd.


## Favorieten beheren {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Mijn plaatsen favorieten Android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Mijn plaatsen iOS](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

In de sectie **Mijn favorieten** kunt u:

- [Zoeken](#order--sorting--search) naar specifieke favorieten of groepen.
- [Bulkbewerkingen](#bulk-edit--delete) — Meerdere favorieten tegelijk hernoemen, verplaatsen of verwijderen.

### Volgorde / Sorteren / Zoeken {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorietenmappen Android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favorietenmappen iOS](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Sorteren** — Favorietenmappen en -punten worden alfabetisch gesorteerd, met de [persoonlijke map](../personal/favorites.md#special-favorites-personal) bovenaan.
- **Zoeken** — Gebruik [Globaal zoeken](../search/search-all.md) om favorieten op naam te vinden. Favorieten worden gesorteerd op afstand vanaf het midden van de kaart.


### Bulk bewerken / verwijderen {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorietenacties Android](@site/static/img/personal/favorites_actions_android.png) ![Favorietenactie verwijderen Android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorietenacties iOS](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Om meerdere favorieten te beheren, tikt u op het pictogram **Verwijderen** (*prullenbakpictogram op Android*) of de knop **Bewerken** (*potloodpictogram op iOS*).
2. Selecteer individuele favorieten of hele mappen voor bulkbewerkingen.
3. **Beschikbare opties** — *Verwijderen* voor Android en iOS, *Verplaatsen naar een favorietengroep*, *Delen* en *Kleur wijzigen* voor iOS.

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


### Acties favorietengroep {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Drie-puntenmenu → Standaardweergave wijzigen*

![Functies favorietenmap Android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Lang tikken op map → Standaardweergave*

![Favorietenacties iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Gebruik het ***Drie-puntenmenu*** (*Android*) naast elke map en ***lang tikken*** (*iOS*) op de map om groepen favorieten te beheren:

- **<Translate android="true" ids="shared_string_rename"/>** — Gebruik deze optie om de naam van de geselecteerde map te wijzigen.

- **<Translate android="true" ids="change_default_appearance"/>** — Pas de weergave van de favoriete punten in de map op de kaart aan door hun pictogrammen, kleuren of labels te wijzigen.

- **<Translate android="true" ids="shared_string_show_on_map"/>** of **Verbergen op kaart** — Schakel deze optie in of uit om de favoriete punten uit de map op de kaart weer te geven of te verbergen.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** of **Verwijderen uit kaartmarkeringen** (*alleen Android*) — Voeg alle favoriete punten uit de map toe aan de *Kaartmarkeringenlijst* of verwijder ze indien nodig voor gemakkelijke referentie.

- **<Translate android="true" ids="shared_string_share"/>** — Deel de favoriete punten in de map door ze te exporteren als een *Favorites.gpx*-bestand, waardoor het gemakkelijk is om uw gegevens over te dragen of een back-up te maken.

- **<Translate android="true" ids="shared_string_delete"/>** — Verwijder permanent de geselecteerde favorietenmap en alle punten daarin.

Meer details in het artikel [Mijn plaatsen](../personal/myplaces.md#favorites).



### Groepsweergave wijzigen {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Functies favorietenmap Android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorietenacties iOS](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

*Instellingen voor groepsweergave wijzigen*:

- **Pictogram, kleur, vorm** — Stel een standaardstijl in voor alle favorieten in een groep.
- **Consistentie** — Nieuwe favorieten die aan de groep worden toegevoegd, nemen automatisch de standaardweergave over.
- **Aanpassing** — Overschrijf de standaardinstellingen voor bestaande punten in de map, alleen nieuwe favorieten, of pas toe op alles.


## Exporteren / Importeren {#export--import}

OsmAnd biedt verschillende methoden om een [back-up te maken](./import-export.md) en favorieten te [herstellen](./import-export.md#import):

- **Back-uplocaties** — Lokale opslag, [OsmAnd Cloud](../personal/osmand-cloud.md) (alleen met [OsmAnd Pro of OsmAnd Start-abonnement](../purchases/index.md)), of instant messaging-apps.

- **Bestandsformaat** — Favorieten worden opgeslagen als `.gpx`-bestanden (favorites.gpx).


### Gratis cloudback-up {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Functies favorietenmap Android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorietenacties iOS](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

De [Gratis favorietenback-up](../personal/osmand-cloud.md#osmand-start) is een speciaal aankoopabonnement waarmee u een back-up kunt maken van uw favoriete punten (locaties) voor **Android, iOS** of **Web**-versies in de OsmAnd-applicatie en deze kunt herstellen vanuit OsmAnd Cloud. Dit abonnement is beschikbaar voor gebruikers van [OsmAnd Free of Maps+](../purchases/index.md).

*Gratis favorietenback-up* biedt deze voordelen:

- **Geen betaling vereist**. Gebruik de back-upfunctie zonder betaalde abonnementen aan te schaffen.
- **Favoriete punten opslaan**. Sla uw favoriete punten regelmatig op in OsmAnd om te voorkomen dat u ze verliest als uw apparaat crasht of de app wordt verwijderd.
- **Favoriete punten overzetten**. Importeer uw favoriete punten naar een nieuw apparaat met de functie *Gratis favorietenback-up* als u OsmAnd op meerdere apparaten gebruikt.


#### Hoe maak je een back-up {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Functies favorietenmap Android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorietenacties iOS](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

U hebt een OsmAnd Cloud-account nodig om de functie *Gratis instellingenback-up* te gebruiken. Als u een account hebt in *OsmAnd Pro* of een actief account in *OsmAnd Cloud*, ziet u de promotiebanner niet.

- *Gratis favorietenback-upbanner*. Tik op deze banner om het back-upproces te starten.
- *Voltooi de registratiestap* als u geen OsmAnd Cloud-account hebt door de instructies in de [registratiehandleiding](../personal/osmand-cloud.md#login) te volgen.
- *Navigeer naar het menu OsmAnd Aankopen* (*Menu → Instellingen → Aankopen*).
- *[OsmAnd Start-pakket](../personal/osmand-cloud.md#osmand-start)*. Selecteer deze optie om toegang te krijgen tot de functie Gratis instellingenback-up.
- *Maak een back-up* van uw instellingen.


### Alle favorieten {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorietenacties Android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorieten exporteren importeren iOS](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

U kunt uw favorieten exporteren en importeren met de speciale knoppen onderaan het favorietenscherm. Een [.gpx-bestand](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) kan worden verzonden naar Dropbox, e-mail, messengers en andere applicaties die op uw apparaat zijn geïnstalleerd en deze functie ondersteunen.

- Knop **Importeren** (*Android*) / **Favoriet importeren** (*iOS*). Hiermee kunt u favoriete punten (*favorites.gpx*) importeren als waypoints vanuit een *GPX*-bestand (een veelvoorkomend GPS-gegevensformaat) vanuit de opslag van uw apparaat.
- Knop **Delen** (*Android*) / **Favoriet exporteren** (*iOS*). Hiermee kunt u al uw favorieten exporteren (delen) als een *favorites.gpx*-bestand.


### Favorietengroep {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Functies favorietenmap Android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorietenacties iOS](@site/static/img/personal/favorites_actions_1_ios.png) ![Favorietenacties iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Tik op het **Drie-puntenmenu** (*Android*) of de knop **Bewerken** (*potloodpictogram op iOS*) of **lang tikken** op de map (*iOS*) van de geselecteerde favorietenmap.
- Kies de knop **Delen** om het *Favorites.gpx*-bestand naar het geheugen van uw apparaat te sturen of deel het via messaging-apps.


### Automatische back-up van favorieten {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *Android → data → net.osmand → files → backup*

![Back-up exporteren favorieten Android](@site/static/img/personal/favorites_backup_export_andr.png) ![Automatische back-up favorieten Android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Bestanden → Op mijn iPhone → OsmAnd Maps → favourites_backup*

![Automatische back-up favorieten iOS](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

OsmAnd maakt een **back-upbestand** elke keer dat favorieten worden bewerkt.

- **Android**: Back-ups worden opgeslagen in *Android → data → net.osmand → files → backup*. Gebruik een bestandsbeheerder van derden om ze te openen.

- **iOS**: Bestanden bevinden zich in *Bestanden → Op mijn iPhone → OsmAnd Maps → favourites_backup*.

**Handmatige back-up export**

- Ga naar *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Exporteer het `.osf`-bestand naar lokale opslag, cloudservices of deel het direct.

:::caution
In de nieuwste versies van ***Android*** is de toegang tot systeemdirectory's beperkt. Echter, na het uitpakken van het favorietenbestand uit het archief, blijft het mogelijk om het door te sturen naar messengers of cloudservices, enz.
:::


### Favorieten in GPX-bestand {#favorites-in-gpx-file}

Alle informatie over een favoriet wordt opgeslagen en beschreven met behulp van tags. Bij het aanmaken van een favoriet punt kunt u uw eigen [beschrijving](#favorite-point) schrijven of informatie gebruiken uit de OSM [point of interest (POI)](../map/point-layers-on-map.md#points-of-interest-pois)-gegevens waaruit uw punt is gemaakt. Favoriete punten, POI's en Waypoints gebruiken dezelfde **tags** om informatie op te slaan en worden opgeslagen in **GPX-bestandsformaat**.


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
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)

> *Laatst bijgewerkt: april 2025*