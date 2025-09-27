---
source-hash: c674aa26de62610f1442ef441eaa008b20c3b4a69dd7617b13ccd27ccf7f2234
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

![Favorietenlaag Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorietenlaag iOS](@site/static/img/map/favorites_layer_ios.png)

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
- **Groep** — Selecteer uit een bestaande [Favorietengroep](#manage-favorites) of maak een nieuwe aan.
- **Visuele aanpassing** — Pictogram, kleur, vorm kunnen overeenkomen met het standaard [uiterlijk van de groep](#change-group-appearance) of individueel worden aangepast.


### Bewerken / Vervangen / Verwijderen {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favoriet bewerken Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favoriet bewerken iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Om een favorietenpunt te wijzigen:

1. [Tik](../map/map-context-menu.md#select-an-object-single-tap) op de favoriet op de kaart of ga naar [Mijn Favorieten](#manage-favorites).
2. Kies **Favoriet bewerken** in het [*contextmenu van de kaart*](../map/map-context-menu.md#add--edit-favorite).

***Beschikbare opties:***

- **Details bewerken** — Naam, pictogram, groep, adres en beschrijving.
- **Locatie vervangen** — Vervang een ander punt door dit punt. Handig voor het bijwerken van een specifiek punt (bijv. *Mijn geparkeerde auto*) of het aanmaken van een nieuw punt.
- **Verwijderen** — Verwijder de favoriet met de verwijderoptie, toegankelijk via het menu Bewerken of via de verwijderknop op Android.


### Favorietenpictogrammen {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Mijn plaatsen favorieten android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![mijn_plaatsen_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

Er is een breed scala aan pictogrammen voor POI's en waypoints beschikbaar in OsmAnd. U kunt:

- Een pictogram selecteren uit de lijst met [POI-categorieën](../search/search-poi.md#categories-and-their-filters).
- Een geschikt pictogram zoeken met de [zoekoptie](../search/search-all.md#how-to-use).


### Speciale Favorieten (Persoonlijk) {#special-favorites-personal}

De map *Persoonlijk* bevat speciale punten zoals **<Translate android="true" ids="favorite_home_category"/>** en **<Translate android="true" ids="work_button"/>**, die vaak worden gebruikt bij [navigatie](../navigation/setup/route-navigation.md#select-starting-point). Deze map heeft geen *drie-puntenmenu* en de parameters ervan kunnen niet worden gewijzigd.


## Favorieten Beheren {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Mijn plaatsen favorieten android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![mijn_plaatsen_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

In de sectie **Mijn Favorieten** kunt u:

- [Zoeken](#order--sorting--search) naar specifieke favorieten of groepen.
- [Bulkoperaties](#bulk-edit--delete) — Hernoemen, verplaatsen of verwijderen van meerdere favorieten tegelijk.

### Volgorde / Sorteren / Zoeken {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorietenmappen android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favorietenmappen ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Sorteren** — Mappen en punten van favorieten worden alfabetisch gesorteerd, met de [persoonlijke map](../personal/favorites.md#special-favorites-personal) bovenaan.
- **Zoeken** — Gebruik [Globaal zoeken](../search/search-all.md) om favorieten op naam te vinden. Favorieten worden gesorteerd op afstand tot het midden van de kaart.


### Bulk Bewerken / Verwijderen {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorietenacties android](@site/static/img/personal/favorites_actions_android.png) ![Favorietenactie verwijderen android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorietenacties ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Om meerdere favorieten te beheren, tikt u op het **Verwijder**-pictogram (*prullenbakpictogram op Android*) of de **Bewerk**-knop (*potloodpictogram op iOS*).
2. Selecteer individuele favorieten of hele mappen voor bulkoperaties.
3. **Beschikbare opties** — *Verwijderen* voor Android en iOS, *Verplaatsen naar een Favorietengroep*, *Delen* en *Kleur wijzigen* voor iOS.

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

Ga naar: *Drie-puntenmenu → Standaard uiterlijk wijzigen*

![Favorietenmap functies android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *Lang tikken op map → Standaard uiterlijk*

![Favorietenacties ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Gebruik het ***Drie-puntenmenu*** (*Android*) naast elke map en ***tik lang*** (*iOS*) op de map om groepen favorieten te beheren:

- **<Translate android="true" ids="shared_string_rename"/>** — Gebruik deze optie om de naam van de geselecteerde map te wijzigen.

- **<Translate android="true" ids="change_default_appearance"/>** — Pas aan hoe de favorietenpunten in de map op de kaart verschijnen door hun pictogrammen, kleuren of labels te wijzigen.

- **<Translate android="true" ids="shared_string_show_on_map"/>** of **Verberg op kaart** — Schakel deze optie in of uit om de favorietenpunten uit de map op de kaart weer te geven of te verbergen.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** of **Verwijder van kaartmarkeringen** (*alleen Android*) — Voeg alle favorietenpunten uit de map toe aan de *Lijst met kaartmarkeringen* of verwijder ze indien nodig voor eenvoudige referentie.

- **<Translate android="true" ids="shared_string_share"/>** — Deel de favorietenpunten in de map door ze te exporteren als een *Favorites.gpx*-bestand, waardoor het gemakkelijk is om uw gegevens over te dragen of er een back-up van te maken.

- **<Translate android="true" ids="shared_string_delete"/>** — Verwijder de geselecteerde favorietenmap en alle punten erin permanent.

Meer details in het artikel [Mijn Plaatsen](../personal/myplaces.md#favorites).



### Uiterlijk van Groep Wijzigen {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorietenmap functies android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorietenacties ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Instellingen voor *Uiterlijk van Groep Wijzigen*:

- **Pictogram, kleur, vorm** — Stel een standaardstijl in voor alle favorieten in een groep.
- **Consistentie** — Nieuwe favorieten die aan de groep worden toegevoegd, nemen automatisch het standaard uiterlijk over.
- **Aanpassing** — Overschrijf de standaardinstellingen voor bestaande punten in de map, alleen voor nieuwe favorieten, of pas toe op alles.


## Exporteren / Importeren {#export--import}

OsmAnd biedt verschillende methoden om favorieten te [back-uppen](./import-export.md) en [herstellen](./import-export.md#import):

- **Back-uplocaties** — Lokale opslag, [OsmAnd Cloud](../personal/osmand-cloud.md) (alleen met een [OsmAnd Pro of OsmAnd Start abonnement](../purchases/index.md)), of instant messaging-apps.

- **Bestandsformaat** — Favorieten worden opgeslagen als `.gpx`-bestanden (favorites.gpx).


### Gratis Cloudback-up {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorietenmap functies android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorietenacties ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

De [Gratis Favorietenback-up](../personal/osmand-cloud.md#osmand-start) is een speciaal aankoopabonnement waarmee u een back-up kunt maken van uw favorietenpunten (locaties) voor de **Android-, iOS**- of **Web**-versies in de OsmAnd-applicatie en deze kunt herstellen vanuit OsmAnd Cloud. Dit abonnement is beschikbaar voor gebruikers van [OsmAnd Free of Maps+](../purchases/index.md).

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

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorietenacties ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

U heeft een OsmAnd Cloud-account nodig om de functie *Gratis Instellingenback-up* te gebruiken. Als u een account heeft in *OsmAnd Pro* of een actief account in *OsmAnd Cloud*, ziet u de promotiebanner niet.

- *Banner Gratis Favorietenback-up*. Tik op deze banner om het back-upproces te starten.
- *Voltooi de registratiestap* als u geen OsmAnd Cloud-account heeft door de instructies in de [registratiegids](../personal/osmand-cloud.md#login) te volgen.
- *Navigeer naar het menu OsmAnd Aankopen* (*Menu → Instellingen → Aankopen*).
- *[OsmAnd Start-pakket](../personal/osmand-cloud.md#osmand-start)*. Selecteer deze optie om toegang te krijgen tot de functie Gratis Instellingenback-up.
- *Maak een back-up* van uw instellingen.


### Alle Favorieten {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorietenacties android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorieten exporteren importeren ios](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

U kunt uw favorieten exporteren en importeren met de speciale knoppen onderaan het Favorietenscherm. Een [.gpx-bestand](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) kan worden verzonden naar Dropbox, e-mail, messengers en andere applicaties op uw apparaat die deze functie ondersteunen.

- **Importeer**-knop (*Android*) / **Importeer favoriet** (*iOS*). Hiermee kunt u favorietenpunten (*favorites.gpx*) als waypoints importeren uit een *GPX*-bestand (een veelgebruikt GPS-gegevensformaat) vanuit de opslag van uw apparaat.
- **Deel**-knop (*Android*) / **Exporteer favoriet** (*iOS*). Hiermee kunt u al uw favorieten exporteren (delen) als een *favorites.gpx*-bestand.


### Favorietengroep {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorietenmap functies android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorietenacties ios](@site/static/img/personal/favorites_actions_1_ios.png)   ![Favorietenacties ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Tik op het **Drie-puntenmenu** (*Android*) of de **Bewerk**-knop (*potloodpictogram op iOS*) of **tik lang** op de map (*iOS*) van de geselecteerde favorietenmap.
- Kies de **Deel**-knop om het *Favorites.gpx*-bestand naar het geheugen van uw apparaat te sturen of te delen via messaging-apps.


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


## Gerelateerde Artikelen {#related-articles}

- [Tracks Beheren](../personal/tracks/manage-tracks.md#import--export-track)
- [Zoekgeschiedenis](../search/search-history.md#export-and-share)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)