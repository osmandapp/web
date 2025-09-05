---
source-hash: e1ed0c38654083ff1654ec38b2f9235f0e80e91f2cdccf6bfa4e90d11da491a5
sidebar_position: 2
title: Kaarten downloaden
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

Het uploaden van kaarten naar de OsmAnd-app is een belangrijke stap om een soepele werking en het gebruik van offline navigatie te garanderen. Zonder offline kaarten kan de app niet volledig functioneren. Door kaarten te downloaden, krijgt u toegang tot kaarten van verschillende regio's, zodat u zonder internetverbinding kunt navigeren.

U hebt twee *belangrijkste* manieren om kaarten te downloaden: **1)** [bekijk de lijst met regio's in het *Hoofdmenu*](#maps-and-resources), of **2)** [selecteer de gewenste regio direct op de kaart](#select-on-the-map). Dit geeft u de flexibiliteit om de gewenste regio's te selecteren en zorgt ervoor dat de kaarten bij uw plannen passen.

Hoewel OsmAnd zowel [Vector](../map/vector-maps.md) als [Raster](../map/raster-maps.md) ondersteunt, wordt aanbevolen om te beginnen met offline vectorkaarten. Dit type kaart (lees hier meer over [OsmAnd-kaarttypen](../personal/maps-resources.md#map-types)) zorgt voor een betrouwbare werking van alle belangrijke functies van de applicatie, inclusief [Zoeken](../search/index.md), [Navigatie](../navigation/index.md) en [Contextmenu](../map/map-context-menu.md). Dit is vooral belangrijk als uw reizen trips naar afgelegen locaties of plaatsen met beperkte internettoegang omvatten.


## Downloaden {#download}

Begin met het laden van kaarten vanaf het [initiële instellingenscherm](#initial-setup-screen), of ga naar het hoofd *zijmenu* *→* [Kaarten & Bronnen](#maps-and-resources) en selecteer de gewenste kaarten uit de algemene lijst, of [selecteer een regio](#select-on-the-map) direct op de kaart door op de gewenste regio te tikken.


### Initieel instellingenscherm {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kaart downloaden Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaart downloaden iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Bij de eerste keer opstarten van de applicatie wordt u gevraagd een kaart te downloaden die is afgestemd op uw huidige locatie, bepaald door uw internetverbinding. Deze stap is optioneel, u kunt de download overslaan en direct doorgaan naar de lokale kaarteninterface voor uw regio.

Als u een VPN gebruikt, kan OsmAnd een kaart voorstellen op basis van de virtuele locatie van de VPN. In dergelijke gevallen kunt u handmatig een kaart selecteren die beter aansluit bij uw werkelijke geografische regio.


#### Drie-puntenmenu {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kaart downloaden Android](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![Kaart downloaden iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaart downloaden Android](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![Kaart downloaden iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Locatiemenu:**

- *Selecteer een andere regio.* Opent het menu [Kaarten downloaden](#maps-and-resources).
- *Sta ons toe uw locatie te bepalen.* [Vraagt toestemming](../start-with/first-steps.md#permission-to-access-the-location) om toegang te krijgen tot de locatie en de gewenste kaart te vinden met behulp van deze gegevens.

**Overig menu:**

- *Herstellen vanuit OsmAnd Cloud.* Opent het hoofdscherm van [OsmAnd Cloud](../personal/osmand-cloud.md) of het inlogscherm. Dit is handig als u de app opnieuw hebt geïnstalleerd of de vorige gebruikerservaring wilt herstellen zonder regio's en instellingen opnieuw te selecteren.
- *Herstellen vanuit bestand.* Opent de bestandsbeheerder van het apparaat om een `.osf`-bestand te selecteren en te importeren.


### Kaarten en bronnen {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Kaartmenu algemeen Android downloaden](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Kaartmenu algemeen iOS downloaden](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Het scherm [Kaarten & Bronnen](../personal/maps-resources.md) biedt toegang tot de volgende secties:

- [Downloads](../personal/maps-resources.md#downloads). Biedt een uitgebreide selectie van [OsmAnd-kaarttypen](../personal/maps-resources.md#map-types).
- [Lokaal](../personal/maps-resources.md#local). Toont alle kaartgegevens die momenteel op uw apparaat zijn opgeslagen, inclusief aangepaste en geïmporteerde bronnen.
- [Updates](../personal/maps-resources.md#updates). Hiermee kunt u maandelijks kaarten vernieuwen om uw gegevens actueel te houden.

#### Kaarten downloaden {#downloading-maps}

Om een specifiek kaarttype voor een land of regio te downloaden:

- Navigeer naar de map voor de gewenste regio, zoals Afrika, Europa of een ander continent.
- Selecteer uw voorkeursland of -regio uit de lijst.
- Op het volgende scherm bekijkt en kiest u uit de beschikbare kaarttypen voor dat gebied.

Informatie over andere kaarttypen vindt u in de sectie [Downloads](../personal/maps-resources.md#downloads) van het artikel **Kaarten**.

### Wereldkaartopties {#world-map-options}

OsmAnd bevat twee wereldkaartopties:

1. **Mini-wereldkaart** (vooraf geïnstalleerd). Een lichtgewicht kaart die basisnavigatie mogelijk maakt en een overzicht van de wereld biedt.
2. **Gedetailleerde wereldkaart** (downloadbaar). Een wereldwijde kaart met grote steden, wegen, rivieren en andere geografische kenmerken.

***Belangrijke opmerkingen:***

- De **Gedetailleerde wereldkaart vervangt geen individuele land- of regiokaarten.** Het is handig voor een overzicht, maar bevat niet hetzelfde detailniveau als regiokaarten.
- Als u gedetailleerde navigatie nodig hebt, **download dan handmatig specifieke land- of regiokaarten** via *Menu → Kaarten & Bronnen → Kaarten downloaden.*
- Gebruikers met **OsmAnd Pro of Maps+** kunnen een **onbeperkt aantal kaarten** downloaden, maar moeten elke regio nog steeds afzonderlijk downloaden.
- **Er is geen enkele optie om alle wereldkaarten tegelijk te downloaden.**


### Selecteren op de kaart {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kort tikken op de wereldkaart maakt het mogelijk om regiokaart te downloaden](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kort tikken op de wereldkaart maakt het mogelijk om regiokaart te downloaden](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Een manier om een kaart te downloaden is door uit te zoomen op de wereldkaart en kort te tikken om een regio te selecteren om te downloaden. Dit gebied wordt geel gemarkeerd en er verschijnt een paneel onderaan met de naam van de regio en een suggestie om deze te downloaden of andere kaarten te selecteren.

:::tip Kaartkleur
Op het kleine scherm wordt de geselecteerde kaart om te downloaden geel gemarkeerd, reeds gedownloade kaarten worden groen gemarkeerd en gedeactiveerde kaarten worden oranje gemarkeerd. **Gedeactiveerde** kaarten worden overgeslagen om het programma te versnellen voor het geval u veel geladen kaarten hebt.
:::

### Zoeken {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoekfunctie om kaart te downloaden Android](@site/static/img/settings/search_download_map_3_andr.png) ![Zoekfunctie om kaart te downloaden Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoekfunctie om kaart te downloaden iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Zoekfunctie om kaart te downloaden iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Zoeken maakt het gemakkelijk om een specifieke kaart of regio te vinden, wat een handige en snelle manier biedt om de gegevens te downloaden die u nodig hebt. U kunt de kaart vinden en downloaden met behulp van de [zoekfunctie](../search/index.md).

- Start een zoekopdracht door de naam van een land of regio in het zoekveld in te voeren. Selecteer vervolgens de gewenste kaart uit de lijst die verschijnt.
- Beschikbare kaarten om te downloaden worden grijs weergegeven met een downloadpictogram, gedownloade kaarten hebben een groene kleur en een menuknop.
- Tik op de naam van het gewenste resultaat en de lijst met regiokaarten wordt geopend.
- Selecteer [kaarttypen](../personal/maps-resources.md#map-types): *Standaardkaart, Alleen wegenkaart, Contourlijnen, Wikipedia*.

> *Laatst bijgewerkt: januari 2025*