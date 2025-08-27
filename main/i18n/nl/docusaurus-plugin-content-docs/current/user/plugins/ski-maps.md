---
source-hash: 75b343dc56914a3acab72cd3b0a8c476b5b8c888a2b3d0ebf1e06e1edbfdfd2f
sidebar_position: 13
title:  Skikaartweergave
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

De OsmAnd Skikaartweergave-plugin toont beroemde en populaire pistes, officieel goedgekeurde skigebieden en routekaarten van de meeste skiresorts. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) pistekaarten zijn de gegevensbron voor OsmAnd skikaarten. Gecombineerde vectorkaarten met rasterkaarten maken de OsmAnd skikaart zeer nauwkeurig en nuttig voor instructeurs, klimmers en wintersporters.

De OsmAnd skikaart is een onderdeel van de vectorkaarten en vereist geen aanvullende downloads. Deze is standaard uitgeschakeld. De OsmAnd Skikaart is een van de [Kaartstijlen](../map/vector-maps.md) die extra functies biedt door sommige objecten te markeren en andere minder zichtbaar te maken.

Hieronder worden twee profielen getoond: het linkerprofiel is voor skiën en het rechterprofiel is voor autorijden. Het skiprofiel markeert paden, luchtwegen, winterkleuren en alle kaartobjecten die nuttig zijn voor navigatie in het skigebied.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Skikaarten in Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Geen skikaarten in Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Skikaarten in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Geen skikaarten in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Vereiste instellingsparameters {#required-setup-parameters}

De volgende instelling zorgt ervoor dat de OsmAnd Skikaart op het scherm verschijnt:

1. Schakel de [Skikaartweergave-plugin](../plugins/index.md#enable--disable) in.
2. Stel de [Winter- en Skikaartstijl](#set-winter-and-ski-map-style) in voor het vereiste [profiel](../personal/profiles.md).
3. Indien nodig, [combineer kaarten](#combine-maps).


### Winter- en Skikaartstijl instellen {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![Winterstijl inschakelen in Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Skikaarten plugin kaartstijl Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![Winterstijl inschakelen in iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Skikaarten plugin kaartstijl iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

De Winter- en Skikaartstijl markeert paden, skitoerroutes, sleeroutes en informatie met betrekking tot winter en skiën. Om de stijl op de kaart weer te geven, moet u de volgende instellingen maken:

1. Selecteer het vereiste [profiel](../personal/profiles.md).
2. Open [Kaart configureren](../map/configure-map-menu.md).
3. Scroll naar beneden naar Kaartstijl/Kaarttype, open het en vink **Winter en Ski** aan.

:::tip configuraties
Het skiprofiel is ontworpen voor gebruik in combinatie met de Winter- en Skistijlen. Het navigatietype voor elk specifiek profiel kan echter individueel worden gewijzigd en ingesteld, dus de uiteindelijke configuratie van het profiel, de kaartstijl en de navigatie hangt volledig af van uw instellingen.
:::


### Kaarten combineren {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Geen kaartcombinatie in Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Met kaartcombinatie in Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Geen kaartcombinatie in iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![Met kaartcombinatie in iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

De [Vectorkaart](../map/vector-maps.md) met de inbegrepen [Winter- en Skikaartstijl](../map/vector-maps.md#winter-and-ski) kan worden aangevuld met [Contourlijnen](../plugins/topography.md#show-contour-linesterrain) en [Schaduwkaart](../plugins/topography.md#hillshade-map). Hieronder staan twee voorbeelden. De sporen op de standaard vectorkaart worden links getoond, en de sporen op de vectorkaart gecombineerd met de *Contourlijnen* en *Schaduwkaart* rasterkaart worden rechts getoond. In het tweede geval toont de kaart meer hoogtegegevens om de moeilijkheidsgraad, het risico en de afstand te helpen inschatten.


### Skikaartstijl uitschakelen {#disable-ski-map-style}

Als het verwijderen van paden en winterkleuren van de kaart de voorkeur heeft, of het skiseizoen is voorbij, doe dan een van de volgende dingen:

- Vink de [Winter- en Skikaartstijl](#set-winter-and-ski-map-style) uit voor het vereiste profiel.
- Wijzig het [Skiprofiel](../personal/profiles.md) naar een ander profiel.
- Schakel de [Skikaartweergave-plugin](../plugins/index.md#enable--disable) uit.


:::info plugin verwijderen
De Skikaartweergave-plugin is een aparte applicatie, en het uitschakelen van de weergave verwijdert deze niet. Als u deze wilt verwijderen, gaat u naar de Android-instellingen via *Instellingen openen* in het pluginmenu.
:::


## Skiprofiel {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Nautische dieptecontouren in Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Dieptecontouren in iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Winter- en Skikaartstijlen kunnen in elk profiel worden ingeschakeld. Maar het is het meest waardevol in het [Skiprofiel](../personal/profiles.md), waar het standaard is ingesteld. Het Skiprofiel is zeer comfortabel voor de [Skinavigatie](../navigation/routing/ski-routing.md).


## Skikaartstijl {#ski-map-style}

Gebruik de [Skikaartlegenda](../../user/map-legend/ski-map.md) voor elke referentie. Het helpt om de soorten pistes op de kaart te identificeren, evenals de soorten luchtwegen en andere kenmerken die van de kaart kunnen worden afgelezen.

Door de kaart te lezen, kunt u de details vinden die belangrijk voor u zijn, zoals de moeilijkheidsgraad van een bepaalde piste, het type piste, of er geprepareerd wordt en of de piste 's nachts verlicht is.

De hier beschreven opties zijn beschikbaar in de [Skinavigatie](../navigation/setup/route-navigation.md). De **Skinavigatie** stelt de individuele routeopties in, die alleen van toepassing zijn op skiën.


:::info renderingstijl
OsmAnd Skikaart is gebouwd als een van de renderingstijlen, die bepaalt welke objecten op de kaart worden getoond en het uiterlijk van objecten. Alle renderingstijlen worden beschreven in het bestand [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). Voor de regels die de interne structuur van het XML-bestand definiëren, zie de [Renderingdocumentatie](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Pistes op moeilijkheidsgraad {#pistes-by-difficulty}

| Kleur | Beschrijving |
| --- | --- |
| ![Beginner piste](@site/static/img/plugins/ski-maps/1c_green_1.png) | Groen - Beginner piste |
| ![ Gemakkelijke heuvels](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Blauw - Gemakkelijke heuvels |
| ![Gemiddelde hellingen](@site/static/img/plugins/ski-maps/3c_red_1.png) | Rood - Gemiddelde hellingen |
| ![Gevorderde moeilijkheidsgraad](@site/static/img/plugins/ski-maps/4c_black_1.png) | Grijs - Hellingen van gevorderde moeilijkheidsgraad |
| ![Expert moeilijkheidsgraad](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Geel - Hellingen van expert moeilijkheidsgraad |

De moeilijkheidsgraad van sporen wordt meestal aangegeven met specifieke kleuren. De kleuren kunnen verschillen in verschillende landen en resorts. Hieronder staan enkele praktische richtlijnen.

:::tip begeleiding
Voor meer specifieke begeleiding voor elk type moeilijkheidsgraad van paden, zie de [OSM piste moeilijkheidsgraad referentie](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) of een andere bron die ook hellingen, obstakels en gevaren in overweging neemt.
:::


### Piste per type {#piste-by-types}

Pistes verschillen per type. Een type vertegenwoordigt verschillende kenmerken voor een piste om te voldoen aan de eisen van verschillende wintergerelateerde activiteiten: alpineskiën, klassiek schaatsen, snowboarden, sleeën, backcountry skiën, skitoeren, buckelpisteskiën, nachtskiën, enz. Het begrijpen van het [type piste](https://wiki.openstreetmap.org/wiki/Key:piste:type) op de kaart helpt bij het opbouwen van een optimale navigatieroute.

- **Afdaling/alpineskipiste.**
Gebruikt voor skinavigatie. Dit [pistetype](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) heeft richting en moeilijkheidsgraad, en meestal wordt het omringd door de grenzen van het skigebied. Wanneer een afdalingspiste wordt geselecteerd voor skinavigatie, wordt rekening gehouden met de richting van de piste. Als de vertrek- en bestemmingspunten tegengesteld zijn aan de richting van de piste, gaat de navigatie langs de dichtstbijzijnde luchtweg.

- **Noords/backcountry skipiste.**
Ook gebruikt voor skinavigatie. Dit [pistetype](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) heeft geen moeilijkheidsgraad, heeft al dan niet een richting, en gaat meestal verder dan de grenzen van het skigebied. Bij het navigeren langs dit type pistes kunnen de vertrek- en bestemmingspunten vaak worden omgewisseld.

- **Skitoer piste.**
Vaak gebruikt door skiërs voor een Noordse beklimming en een afdaling. De moeilijkheidsgraad van een skitoer piste wordt vaak gemarkeerd met de respectievelijke kleur. De skinavigatie kan een route langs dit type piste bouwen, waardoor u de pistetypes kunt combineren.

- **Andere skipiste.**
Pistetypes zoals *Wandelpaden* of *Slepaden* kunnen worden gebruikt voor ski- of wandelprofielen.


### Geprepareerde paden {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Grooming inschakelen in Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Grooming weergegeven in Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Grooming inschakelen in iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Grooming weergegeven in iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Om op de kaart te controleren of een bepaalde piste geprepareerd is, moet u de optie **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** inschakelen in de lijst **<Translate android="true" ids="rendering_category_details"/>** die geopend wordt vanuit het menu [Kaart configureren](../map/configure-map-menu.md).
Speciale machines prepareren de sporen om ze voor te bereiden op de juiste activiteit, zoals klassiek schaatsen, ijsschaatsen en andere. Dezelfde piste kan in verschillende gebieden anders geprepareerd worden.

### Skipisteroutes {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Routes uitgeschakeld in Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Routes ingeschakeld in Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Routes uitgeschakeld in iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Routes ingeschakeld in iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Om te achterhalen welke pistes buiten het skigebied u kunt navigeren, moet u de optie **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** inschakelen in de lijst **<Translate android="true" ids="rendering_category_routes"/>**, geopend vanuit het menu [Kaart configureren](../map/configure-map-menu.md).

Met het skiprofiel, de skinavigatie en de [Winter- en Skikaartstijl](../map/vector-maps.md#winter-and-ski) ingeschakeld, tonen de [Skipistes](../map/vector-maps.md#routes) alle soorten pistes die de skinavigatie kan gebruiken om navigatieroutes langs te bouwen. Dergelijke skipisteroutes, indien ingeschakeld, zijn omrand met de violette kleur, meestal buiten de grenzen van het skigebied.


### Nacht en verlichting {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nachtmodus en verlichting inschakelen in Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Nacht en verlichting in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nachtmodus en verlichting inschakelen in iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Nacht en verlichting in iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

De stijl **Winter en ski** kan worden gebruikt met de [Nacht- of Zonsopgang/zonsondergangmodus](../map/vector-maps.md#map-mode). Een comfortabele keuze voor degenen die de voorkeur geven aan donkere kleuren, of het scherm 's nachts donkerder maken, evenals voor degenen die nachtskiën beoefenen. Samen met de Nachtmodus kunnen OsmAnd Skikaarten ook laten zien welke pistes verlichting hebben met de optie [Straatverlichting](../map/vector-maps.md#details).

Beide opties bevinden zich in het menu [Kaart configureren](../map/configure-map-menu.md).

- Om de optie ***Nachtmodus*** in te schakelen, scrollt u naar beneden in de lijst:
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*

- Om de optie ***Straatverlichting*** in te schakelen, opent u de lijst **<Translate android="true" ids="rendering_category_details"/>** en schakelt u de optie in:
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (kaartstijlen)](../../user/map/vector-maps.md)

> *Laatst bijgewerkt: december 2024*