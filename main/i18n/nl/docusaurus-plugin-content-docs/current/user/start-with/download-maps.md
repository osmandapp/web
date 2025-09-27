---
source-hash: 6cae344524caaf33fb94aa4a15419e9183e99c9b4fa757ffe87fe4fa9acb30b3
sidebar_position: 2
title:  Kaarten Downloaden
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

Het uploaden van kaarten naar de OsmAnd-app is een belangrijke stap om een soepele werking en het gebruik van offline navigatie te garanderen. Zonder offline kaarten kan de app niet volledig functioneren. Door kaarten te downloaden krijgt u toegang tot kaarten van verschillende regio's, zodat u kunt navigeren zonder internetverbinding.  

U hebt twee *hoofd*manieren om kaarten te downloaden: **1)** begin vanaf het [initiële instellingenscherm](#initial-setup-screen) of [bekijk de lijst met regio's in het *Hoofdmenu*](#maps-and-resources), of **2)** [selecteer de gewenste regio direct op de kaart](#select-on-the-map). Dit geeft u de flexibiliteit om de regio's te selecteren die u wilt en zorgt ervoor dat de kaarten bij uw plannen passen.  

Hoewel OsmAnd zowel [Vector-](../map/vector-maps.md) als [Rasterkaarten](../map/raster-maps.md) ondersteunt, wordt aanbevolen om offline met vectorkaarten te beginnen. Dit type kaart (lees hier meer over [OsmAnd-kaarttypen](../personal/maps-resources.md#map-types)) zorgt voor een betrouwbare werking van alle belangrijke functies van de applicatie, inclusief [Zoeken](../search/index.md), [Navigatie](../navigation/index.md) en [Contextmenu](../map/map-context-menu.md). Dit is vooral belangrijk als uw reizen naar afgelegen locaties of plaatsen met beperkte internettoegang gaan.


## Initieel Instellingenscherm {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kaart downloaden Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaart downloaden iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Wanneer u de applicatie voor de eerste keer start, wordt u gevraagd een kaart te downloaden die is afgestemd op uw huidige locatie, bepaald door uw internetverbinding. Deze stap is optioneel, zodat u het downloaden kunt overslaan en direct naar de interface voor lokale kaarten voor uw regio kunt gaan.  

Als u een VPN gebruikt, kan OsmAnd een kaart voorstellen op basis van de virtuele locatie van de VPN. In dergelijke gevallen kunt u handmatig een kaart selecteren die beter aansluit bij uw werkelijke geografische regio.  


### Drie-puntenmenu {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kaart downloaden Android](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![Kaart downloaden iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kaart downloaden Android](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![Kaart downloaden iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Locatiemenu:**

- *Selecteer een andere regio.* Opent het menu [Kaarten downloaden](#maps-and-resources).
- *Sta ons toe uw locatie te bepalen.* [Vraagt om toestemming](../start-with/first-steps.md#permission-to-access-the-location) om toegang te krijgen tot de locatie en de vereiste kaart te vinden met behulp van deze gegevens.

**Ander menu:**

- *Herstellen vanuit OsmAnd Cloud.* Opent het hoofdscherm of inlogscherm van [OsmAnd Cloud](../personal/osmand-cloud.md). Dit is handig als u de app opnieuw hebt geïnstalleerd of de vorige gebruikerservaring wilt herstellen zonder opnieuw regio's en instellingen te selecteren.
- *Herstellen vanuit bestand.* Opent de bestandsbeheerder van het apparaat om een `.osf`-bestand te selecteren en te importeren.  


## Kaarten & Bronnen {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Algemeen menu kaart downloaden Android](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Algemeen menu kaart downloaden iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Het scherm [Kaarten & Bronnen](../personal/maps-resources.md) geeft toegang tot de volgende secties:

- [Downloads](../personal/maps-resources.md#downloads). Biedt een uitgebreide selectie van [OsmAnd-kaarttypen](../personal/maps-resources.md#map-types).
- [Lokaal](../personal/maps-resources.md#local). Toont alle kaartgegevens die momenteel op uw apparaat zijn opgeslagen, inclusief aangepaste en geïmporteerde bronnen.
- [Updates](../personal/maps-resources.md#updates). Hiermee kunt u kaarten maandelijks vernieuwen om uw gegevens actueel te houden.

### Kaarten downloaden {#downloading-maps}

Om een specifiek kaarttype voor een land of regio te downloaden:

- Navigeer naar de map voor de gewenste regio, zoals Afrika, Europa of een ander continent.
- Selecteer uw gewenste land of regio uit de lijst.
- Op het volgende scherm, bekijk en kies uit de beschikbare kaarttypen voor dat gebied.

U kunt informatie over andere kaarttypen vinden in de sectie [Downloads](../personal/maps-resources.md#downloads) van het artikel **Kaarten**.

## Wereldkaartopties {#world-map-options}

OsmAnd bevat twee wereldkaartopties:  

1. **Mini-wereldkaart** (vooraf geïnstalleerd). Een lichtgewicht kaart die basisnavigatie mogelijk maakt en een overzicht van de wereld biedt.  
2. **Gedetailleerde wereldkaart** (downloadbaar). Een wereldwijde kaart met grote steden, wegen, rivieren en andere geografische kenmerken.

***Belangrijke opmerkingen:***

- De **Gedetailleerde wereldkaart vervangt geen individuele land- of regiokaarten.** Het is nuttig voor een overzicht, maar bevat niet hetzelfde detailniveau als regiokaarten.  
- Als u gedetailleerde navigatie nodig heeft, **download dan handmatig specifieke land- of regiokaarten** via *Menu → Kaarten & Bronnen → Kaarten downloaden.*
- Gebruikers met **OsmAnd Pro of Maps+** kunnen een **onbeperkt aantal kaarten downloaden**, maar moeten nog steeds elke regio afzonderlijk downloaden.  
- **Er is geen enkele optie om alle wereldkaarten in één keer te downloaden.**


## Selecteer op de Kaart {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Kort tikken op de wereldkaart maakt het mogelijk om een regiokaart te downloaden](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Kort tikken op de wereldkaart maakt het mogelijk om een regiokaart te downloaden](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Een manier om een kaart te downloaden is door uit te zoomen op de wereldkaart en kort te tikken om een regio te selecteren om te downloaden. Dit gebied wordt geel gemarkeerd en onderaan verschijnt een paneel met de naam van de regio en een voorstel om deze te downloaden of andere kaarten te selecteren.  

:::tip Kaartkleur  
Op het kleine scherm wordt de kaart die is geselecteerd om te downloaden geel gemarkeerd, kaarten die al zijn gedownload worden groen gemarkeerd en gedeactiveerde kaarten worden oranje gemarkeerd. **Gedeactiveerde** kaarten worden overgeslagen om het programma te versnellen als u veel geladen kaarten hebt.
:::

## Zoeken {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zoekfunctie om kaart te downloaden Android](@site/static/img/settings/search_download_map_3_andr.png) ![Zoekfunctie om kaart te downloaden Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoekfunctie om kaart te downloaden iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Zoekfunctie om kaart te downloaden iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Zoeken maakt het gemakkelijk om een specifieke kaart of regio te vinden, wat een handige en snelle manier is om de gegevens te downloaden die u nodig hebt. U kunt de kaart vinden en downloaden met de [zoekfunctie](../search/index.md).

- Start een zoekopdracht door de naam van een land of regio in het zoekveld in te voeren. Selecteer vervolgens de gewenste kaart uit de lijst die verschijnt.
- Kaarten die beschikbaar zijn om te downloaden worden in het grijs weergegeven met een downloadicoon, gedownloade kaarten hebben een groene kleur en een menuknop.
- Tik op de naam van het gewenste resultaat en de lijst met kaarten voor de hele regio wordt geopend.
- Selecteer [kaarttypen](../personal/maps-resources.md#map-types): *Standaardkaart, Alleen-wegenkaart, Hoogtelijnen, Wikipedia*.