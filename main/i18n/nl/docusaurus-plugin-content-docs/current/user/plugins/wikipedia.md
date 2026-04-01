---
source-hash: 3a1b19203e3a6ba30e182f8b8c57f3ac468e000ae98042c571c03b94e20ce825
sidebar_position: 20
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

Wikipedia bij de hand hebben tijdens uw reis helpt u meer te leren over de plaatsen die u bezoekt. Het is offline beschikbaar en toont Populaire Plaatsen (Android) / Wikipedia-artikelen (iOS) gerelateerd aan de points of interest direct op de kaart.  

De Wikipedia-plugin is een aparte functie die naar behoefte kan worden in- of uitgeschakeld. Eenmaal ingeschakeld, kunt u Wikipedia-gegevens [downloaden](../personal/maps-resources#downloads-menu) voor elke geografische regio. De kaart heeft twee soorten geüploade kennis van Wikipedia: beknopte informatie en een volledig artikel.  


Beknopte informatie wordt geleverd door Wikipedia POI's (een afkorting voor "[point of interest](../map/point-layers-on-map.md)"). Als de Wikipedia-optie in het menu is ingeschakeld, verschijnt er een Wikipedia POI op de kaart. Wanneer u op een point of interest tikt, wordt deze uitgebreid om beknopte informatie van Wikipedia te geven, evenals de mogelijkheid om een volledig artikel te openen. De Wikipedia POI, evenals gerelateerde artikelen, zijn offline beschikbaar. U kunt ze naar behoefte lezen, van taal wisselen en naar andere informatie op Wikipedia zoeken.  


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) is een gratis, meertalige, open-collaboratieve online encyclopedie die wordt gemaakt en onderhouden door een gemeenschap van vrijwillige redacteuren met behulp van een op wiki gebaseerd bewerkingssysteem.  

&nbsp;  
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Vereiste Instellingen {#required-setup-parameters}

Om Wikipedia-gegevens op de kaart weer te geven, moet u de volgende instellingen maken:

1. [Purchase](../plugins/index.md#purchase) en [Enable](../plugins/index.md#enable--disable) Wikipedia plugin in de Plugins sectie van het *Main Menu*.
2. Download de [Wikipedia-pakketten](#download-wikipedia-packages) voor de vereiste regio's.  
3. Toon de [Wikipedia POIs](#display-wikipedia-on-the-map) op de kaart voor het vereiste profiel.  
4. Configureer voorkeur [talen](#set-preferred-language) om artikelen te lezen.


## Download Wikipedia Packages {#download-wikipedia-packages}

Wikipedia-gegevens zijn beschikbaar voor elke geografische regio. Als het voor de ene regio is geladen en voor de andere niet, kunt u in het eerste geval met Wikipedia-informatie werken bij het bekijken van de regio op een kaart, en in het andere geval zal de regio geen Wikipedia-informatie hebben. Eenmaal geladen, wordt Wikipedia-data algemeen beschikbaar, ook offline.

Om de Wikipedia-gegevens voor een regio te downloaden, gaat u naar de [beschikbare pakketten om te downloaden in het *Main Menu*](../start-with/download-maps.md#downloading-maps), zoekt u de benodigde regio en opent u deze. De Wikipedia-gegevens bevinden zich tussen andere pakketten.

U kunt Wikipedia-gegevens als volgt per regio openen om te downloaden:

1. **Android**. Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Selecteer de vereiste regio. Zodra de regio is geopend, bevinden de Wikipedia-gegevens zich tussen andere pakketten.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Om te zien welke gegevens al zijn geüpload, gaat u naar *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Download Wikipedia in Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Om te zien welke gegevens al zijn geüpload, gaat u naar *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![Download Wikipedia in iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Display Wikipedia on the Map {#display-wikipedia-on-the-map}

Door Wikipedia-gegevens voor de vereiste regio's te laden, kunt u de zichtbaarheid van die gegevens op de kaart regelen. De zichtbaarheid wordt geregeld door [Popular Places (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **for Android** / [Wikipedia POIs](../map/point-layers-on-map.md#-wikipedia) **for iOS**, die kunnen worden getoond of verborgen voor alle geüploade regio's door een bepaald [profiel](../personal/profiles.md), bijvoorbeeld een profiel voor driving, een profiel voor cycling, een ander profiel om public transport te tonen, en anderen.  

Om Wikipedia POIs te tonen of te verbergen, selecteer eerst een profiel en schakel vervolgens de **Wikipedia** optie in/uit.

Om Wikipedia POIs te tonen/verbergen, doet u het volgende:

1. Ga naar: 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Selecteer een Profile, en zoek naar de *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* sectie van de instellingen in het menu.  
3. Schakel  *<Translate android="true" ids="poi_osmwiki"/>* **for Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **for iOS** in.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia POIs on Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia POI on iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Search Wikipedia {#search-wikipedia}

Met geüploade Wikipedia-gegevens is het, ongeacht de zichtbaarheidsmodus van de [Wikipedia POIs](../map/point-layers-on-map.md#-wikipedia) op de kaart, mogelijk om [te zoeken](../search/search-poi.md) naar alle informatie van Wikipedia.

Wanneer u op de Search button tikt, verschijnt er een extra paneel waarmee u de gehele tekst en/of een specifieke categorie kunt [zoeken](../search/index.md). In het eerste geval tonen de zoekresultaten Wikipedia POIs met bijbehorende Wikipedia-artikelen naast andere soorten informatie. In het geval van een [Wikipedia category search](../search/search-poi.md#poi-search-by-categories), tonen de zoekresultaten alleen Wikipedia-informatie, gesorteerd op de dichtstbijzijnde locatie ten opzichte van het gebied van de kaart dat momenteel op het scherm wordt weergegeven.  

- In de **Android** versie kunt u [Search](../search/index.md) openen door op het *Search icon* in de upper left corner van het scherm te tikken en/of op de *Search option* in het menu te tikken.
- In de **iOS** versie, om [Search](../search/index.md) te openen, bevindt het Search icon zich in de upper left corner van het scherm.

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

- Om te zoeken naar de Wikipedia [category](../search/search-poi.md#poi-search-by-categories), selecteer: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia category on Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia category on iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Tik indien nodig op de **Show Wikipedia on the map** optie bovenaan het search panel en de zoekresultaten uit de Wikipedia category verschijnen op de kaart.  


## Wikipedia Article {#wikipedia-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Om het Wikipedia-artikel te openen:

1. Schakel [Wikipedia POI layer](../map/point-layers-on-map.md#-wikipedia) in voor een gespecificeerd profiel.
2. Tik op POI op de kaart.
3. In het [context menu](../map/map-context-menu.md) van een POI tik op [Details](../map/map-context-menu.md#details) (of trek het *context menu* gewoon omhoog) om een abstract van het gekozen [Wikipedia article](../map/map-context-menu.md#article-description) te bekijken.
4. Gebruik de *Read full article* knop om de volledige versie van het Wikipedia-artikel te openen.
5. Als de Wikipedia-gegevens niet zijn gedownload, verschijnt de *Read on Wikipedia* knop.
6. Tikken op deze knop opent een dialoog met de volgende opties: 
- Download Wikipedia and Open in Browser (paid version).
- Read Wikipedia offline and Open in Browser (free version).

![French Wikipedia POI in English](@site/static/img/plugins/wikipedia/wikipedia_article_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Om het Wikipedia-artikel te openen:

1. Schakel [Wikipedia POI layer](../map/point-layers-on-map.md#-wikipedia) in voor een gespecificeerd profiel.
2. Tik op POI op de kaart.
3. In het [context menu](../map/map-context-menu.md) van een POI tik op [Details](../map/map-context-menu.md#details) (of trek het *context menu* gewoon omhoog) om een abstract van het gekozen [Wikipedia article](../map/map-context-menu.md#article-description) te bekijken.
4. Als u op die tekst tikt, wordt u doorgestuurd naar het offline Wikipedia-artikel.
5. Gebruik de *Read article* knop om de volledige versie van het Wikipedia-artikel te openen.

![French Wikipedia POI in English in iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Wikipedia Settings {#wikipedia-settings}

U kunt de [taal(-en)](#set-preferred-language) instellen waarin u de voorkeur hebt om [artikelen](#wikipedia-article) te lezen en ook de [images download options](#download-images) configureren voor elk [profiel](../personal/profiles.md).

### Set Preferred Language {#set-preferred-language}

In de **Android** en **iOS** versies van de OsmAnd-app kunt u uw voorkeurstaal (of talen) voor het weergeven van Wikipedia-artikelen instellen met behulp van het *Configure map menu*. Als u meer dan één taal selecteert, worden de *Wikipedia* artikelen op de kaart weergegeven in een van hen. Ga naar:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Selecteer het benodigde profiel en kies in de *<Translate android="true" ids="shared_string_show"/>* sectie *<Translate android="true" ids="poi_osmwiki"/>* voor Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* voor iOS.  
3. Schakel de *<Translate android="true" ids="shared_string_all_languages"/>* optie uit.  
4. Selecteer specifieke taal(-en) in de geopende lijst.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Setting a preferred language on Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Setting a preferred language on iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
In de **iOS** versie kunt u de voorkeurstaal voor Wikipedia-artikelen ook instellen met behulp van:  

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Switch Languages Inside the Article {#switch-languages-inside-the-article}

In geval het *Wikipedia article* beschikbaar is in verschillende talen, kunt u de taal wisselen tijdens het lezen. Na het tikken op het bijbehorende icoon in de upper right corner van het scherm krijgt u opties om uit te kiezen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Download Images {#download-images}

U kunt kiezen of u afbeeldingen van Wikipedia op uw apparaat wilt downloaden of niet binnen het *Wikipedia article*:

- **Android**. Open *[Wikipedia article](#display-wikipedia-on-the-map) → &#8942; → Options*
- **iOS**. Open *[Wikipedia article](#display-wikipedia-on-the-map) → Image icon*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Switching images](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Switching images](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

In de **iOS** versie van de app kunt u ook toegang krijgen tot de image download options met behulp van *Wikipedia plugin settings*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Switching images](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)