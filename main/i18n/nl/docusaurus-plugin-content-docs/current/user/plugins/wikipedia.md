---
source-hash: 2f914f4ecf9df9f98177dd069c3c143806b2827059231c6238393af7c70a080d
sidebar_position: 18
title:  Wikipedia
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



## Overzicht {#overview}

:::info Betaalde functie
De Wikipedia-plugin is een [betaalde functie](../purchases/index.md) van de OsmAnd-app.  
:::

Wikipedia bij de hand hebben tijdens uw reis helpt u meer te leren over de plaatsen die u bezoekt. Het is offline beschikbaar en toont Populaire Plaatsen (Android) / Wikipedia-artikelen (iOS) gerelateerd aan de nuttige plaatsen direct op de kaart.  

De Wikipedia-plugin is een aparte functie die naar behoefte kan worden in- of uitgeschakeld. Eenmaal ingeschakeld, kunt u Wikipedia-gegevens [downloaden](../personal/maps-resources#downloads-menu) voor elke geografische regio. De kaart heeft twee soorten geüploade kennis van Wikipedia: beknopte informatie en een volledig artikel.  


Beknopte informatie wordt geleverd door Wikipedia POI's (een afkorting voor "[nuttige plaats](../map/point-layers-on-map.md)"). Als de Wikipedia-optie in het menu is ingeschakeld, verschijnt er een Wikipedia POI op de kaart. Wanneer u op een nuttige plaats tikt, wordt deze uitgebreid om beknopte informatie van Wikipedia te geven, evenals de mogelijkheid om een volledig artikel te openen. De Wikipedia POI, evenals gerelateerde artikelen, zijn offline beschikbaar. U kunt ze naar behoefte lezen, van taal wisselen en naar andere informatie op Wikipedia zoeken.  


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) is een gratis, meertalige, open-collaboratieve online encyclopedie die wordt gemaakt en onderhouden door een gemeenschap van vrijwillige redacteuren met behulp van een op wiki gebaseerd bewerkingssysteem.  

&nbsp;  
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Vereiste Instellingen {#required-setup-parameters}

Om Wikipedia-gegevens op de kaart weer te geven, moet u de volgende instellingen maken:

1. [Aankopen](../plugins/index.md#purchase) en [Inschakelen](../plugins/index.md#enable--disable) van de Wikipedia-plugin in de sectie Plugins van het *Hoofdmenu*.
2. Download de [Wikipedia-pakketten](#download-wikipedia-packages) voor de vereiste regio's.  
3. Toon de [Wikipedia POI's](#display-wikipedia-on-the-map) op de kaart voor het vereiste profiel.  
4. Configureer voorkeurstalen om [artikelen](#set-preferred-language) te lezen.


## Wikipedia-pakketten Downloaden {#download-wikipedia-packages}

Wikipedia-gegevens zijn beschikbaar voor elke geografische regio. Als het voor de ene regio is geladen en voor de andere niet, kunt u in het eerste geval met Wikipedia-informatie werken bij het bekijken van de regio op een kaart, en in het andere geval zal de regio geen Wikipedia-informatie hebben. Eenmaal geladen, wordt Wikipedia-data algemeen beschikbaar, ook offline.

Om de Wikipedia-gegevens voor een regio te downloaden, gaat u naar de [beschikbare pakketten om te downloaden in het *Hoofdmenu*](../start-with/download-maps.md#downloading-maps), zoekt u de benodigde regio en opent u deze. De Wikipedia-gegevens bevinden zich tussen andere pakketten.

U kunt Wikipedia-gegevens als volgt per regio openen om te downloaden:

1. **Android**. Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Selecteer de gewenste regio. Zodra de regio is geopend, bevinden de Wikipedia-gegevens zich tussen andere pakketten.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Om te zien welke gegevens al zijn geüpload, gaat u naar *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Wikipedia downloaden in Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Om te zien welke gegevens al zijn geüpload, gaat u naar *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![Wikipedia downloaden in iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Wikipedia op de Kaart Weergeven {#display-wikipedia-on-the-map}

Door Wikipedia-gegevens voor de vereiste regio's te laden, kunt u de zichtbaarheid van die gegevens op de kaart regelen. De zichtbaarheid wordt geregeld door [Populaire Plaatsen (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **voor Android** / [Wikipedia POI's](../map/point-layers-on-map.md#-wikipedia) **voor iOS**, die kunnen worden getoond of verborgen voor alle geüploade regio's door een bepaald [profiel](../personal/profiles.md), bijvoorbeeld een profiel voor autorijden, een profiel voor fietsen, een ander profiel om openbaar vervoer te tonen, en andere.  

Om Wikipedia POI's te tonen of te verbergen, selecteert u eerst een profiel en schakelt u vervolgens de **Wikipedia**-optie in/uit.

Om Wikipedia POI's te tonen/verbergen, doet u het volgende:

1. Ga naar: 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Selecteer een profiel en zoek naar de sectie *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* van de instellingen in het menu.  
3. Schakel *<Translate android="true" ids="poi_osmwiki"/>* **voor Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **voor iOS** in.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia POI's op Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia POI op iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Wikipedia Zoeken {#search-wikipedia}

Met geüploade Wikipedia-gegevens is het, ongeacht de zichtbaarheidsmodus van de [Wikipedia POI's](../map/point-layers-on-map.md#-wikipedia) op de kaart, mogelijk om [te zoeken](../search/search-poi.md) naar alle informatie van Wikipedia.

Wanneer u op de Zoekknop tikt, verschijnt er een extra paneel waarmee u de volledige tekst en/of een specifieke categorie kunt [doorzoeken](../search/index.md). In het eerste geval tonen de zoekresultaten Wikipedia POI's met bijbehorende Wikipedia-artikelen naast andere soorten informatie. In het geval van een [zoekopdracht in de Wikipedia-categorie](../search/search-poi.md#poi-search-by-categories), tonen de zoekresultaten alleen Wikipedia-informatie, gesorteerd op de dichtstbijzijnde locatie ten opzichte van het gebied van de kaart dat momenteel op het scherm wordt weergegeven.  

- In de **Android**-versie kunt u [Zoeken](../search/index.md) openen door op het *Zoekicoon* in de linkerbovenhoek van het scherm te tikken en/of op de *Zoekoptie* in het menu te tikken.
- In de **iOS**-versie bevindt het Zoekicoon zich in de linkerbovenhoek van het scherm om [Zoeken](../search/index.md) te openen.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia search on Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia search on iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Om te zoeken op [categorie](../search/search-poi.md#poi-search-by-categories) in Wikipedia, selecteert u: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia-categorie op Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia-categorie op iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Tik indien nodig op de optie **Toon Wikipedia op de kaart** bovenaan het zoekpaneel en de zoekresultaten uit de Wikipedia-categorie verschijnen op de kaart.  


## Wikipedia-artikel {#wikipedia-article}

Om het Wikipedia-artikel te openen:

1. Schakel de [Wikipedia POI-laag](../map/point-layers-on-map.md#-wikipedia) in voor een specifiek profiel.
2. Tik op een POI op de kaart.
3. Tik in het [contextmenu](../map/map-context-menu.md) van een POI op *Details* (of trek het *contextmenu* gewoon omhoog) om een samenvatting van het gekozen Wikipedia-artikel te bekijken.
4. Als u op die tekst tikt (voor de iOS-versie), wordt u doorgestuurd naar het offline Wikipedia-artikel.
5. Gebruik de knop *Lees artikel* of *Lees volledig artikel* om de volledige versie van het Wikipedia-artikel te openen.



<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Franse Wikipedia POI in het Engels](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Franse Wikipedia POI in het Engels in iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Wikipedia-instellingen {#wikipedia-settings}

U kunt de [taal (talen) instellen](#set-preferred-language) waarin u [artikelen](#wikipedia-article) wilt lezen en ook de [opties voor het downloaden van afbeeldingen](#download-images) configureren voor elk [profiel](../personal/profiles.md).

### Voorkeurstaal Instellen {#set-preferred-language}

In de **Android**- en **iOS**-versies van de OsmAnd-app kunt u uw voorkeurstaal (of talen) voor het weergeven van Wikipedia-artikelen instellen via het menu *Kaart configureren*. Als u meer dan één taal selecteert, worden de *Wikipedia*-artikelen op de kaart in een van deze talen weergegeven. Ga naar:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Selecteer het gewenste profiel en kies in de sectie *<Translate android="true" ids="shared_string_show"/>* *<Translate android="true" ids="poi_osmwiki"/>* voor Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* voor iOS.  
3. Schakel de optie *<Translate android="true" ids="shared_string_all_languages"/>* uit.  
4. Selecteer een of meer specifieke talen in de geopende lijst.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Een voorkeurstaal instellen op Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Een voorkeurstaal instellen op iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
In de **iOS**-versie kunt u de voorkeurstaal voor Wikipedia-artikelen ook instellen via:  

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Talen Wisselen Binnen het Artikel {#switch-languages-inside-the-article}

Als het *Wikipedia-artikel* in verschillende talen beschikbaar is, kunt u tijdens het lezen van taal wisselen. Nadat u op het bijbehorende pictogram in de rechterbovenhoek van het scherm hebt getikt, krijgt u opties om uit te kiezen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Talen wisselen voor een specifiek artikel](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Talen wisselen voor een specifiek artikel](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Afbeeldingen Downloaden {#download-images}

U kunt kiezen of u afbeeldingen van Wikipedia op uw apparaat wilt downloaden of niet binnen het *Wikipedia-artikel*:

- **Android**. Open *[Wikipedia-artikel](#display-wikipedia-on-the-map) → &#8942; → Opties*
- **iOS**. Open *[Wikipedia-artikel](#display-wikipedia-on-the-map) → Afbeeldingspictogram*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Afbeeldingen wisselen](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Afbeeldingen wisselen](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

In de **iOS**-versie van de app kunt u ook de opties voor het downloaden van afbeeldingen openen via de *instellingen van de Wikipedia-plugin*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Afbeeldingen wisselen](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Gerelateerde Artikelen {#related-articles}

- [Interactie met de Kaart](../../user/map/interact-with-map.md)
- [Algemene Instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)