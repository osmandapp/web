---
source-hash: f47abfa20a1e2094476033fa2ea73c6c94bc39f2fc7f0a5024cacdd02d47d391
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

De OsmAnd Skikaartweergave plug-in toont beroemde en populaire hellingen, officieel goedgekeurde skigebieden en pistekaarten van de meeste skiresorts. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) pistekaarten zijn de gegevensbron voor OsmAnd skikaarten. Door vectorkaarten te combineren met rasterkaarten, is de OsmAnd skikaart zeer nauwkeurig en nuttig voor instructeurs, klimmers en wintersportliefhebbers.

De OsmAnd skikaart is een onderdeel van de vectorkaarten en vereist geen extra downloads. Standaard is deze uitgeschakeld. De OsmAnd Skikaart is een van de [Kaartstijlen](../map/vector-maps.md) die extra functies biedt door sommige objecten te markeren en andere minder zichtbaar te maken.  

Hieronder worden twee profielen getoond: het linker is voor skiën en het rechter voor autorijden. Het Skiprofiel markeert pistes, luchtwegen, winterkleuren en alle kaartobjecten die nuttig zijn voor navigatie in het skigebied.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Skikaarten in Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Geen skikaarten in Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Skikaarten in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Geen skikaarten in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Vereiste Instellingen {#required-setup-parameters}

De volgende instelling zorgt ervoor dat de OsmAnd Skikaart op het scherm verschijnt:

1. Schakel de [Skikaartweergave plug-in](../plugins/index.md#enable--disable) in.  
2. Stel de [Winter en Ski](#set-winter-and-ski-map-style) kaartstijl in voor het gewenste [profiel](../personal/profiles.md).  
3. Indien nodig, [combineer kaarten](#combine-maps).  
  

### Winter en Ski kaartstijl instellen {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*  

![Winterstijl inschakelen in Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Skikaarten plug-in kaartstijl Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*  

![Winterstijl inschakelen in iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Skikaarten plug-in kaartstijl iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

De Winter en Ski kaartstijl markeert pistes, toerskiroutes, rodelbanen en informatie met betrekking tot winter en skiën. Om de stijl op de kaart weer te geven, moet u de volgende instellingen maken:

1. Selecteer het gewenste [profiel](../personal/profiles.md).  
2. Open [Kaart configureren](../map/configure-map-menu.md).  
3. Scroll naar beneden naar Kaartstijl/Kaarttype, open het en vink **Winter en Ski** aan.

:::tip configuraties
Het Skiprofiel is ontworpen voor gebruik in combinatie met de Winter en Ski stijlen. Het navigatietype voor elk specifiek profiel kan echter worden gewijzigd en individueel worden ingesteld, dus de uiteindelijke configuratie van het profiel, de kaartstijl en de navigatie hangt volledig af van uw instellingen.
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

De [Vectorkaart](../map/vector-maps.md) met de [Winter en Ski kaartstijl](../map/vector-maps.md#winter-and-ski) kan worden aangevuld met [Hoogtelijnen](../plugins/topography.md#contour-lines) en [Schaduwreliëf](../plugins/topography.md#hillshade-slope-and-altitude-layers). Hieronder staan twee voorbeelden. De pistes op de standaard vectorkaart worden links getoond, en de pistes op de vectorkaart gecombineerd met de *Hoogtelijnen* en *Schaduwreliëf* rasterkaart rechts. In het tweede geval toont de kaart meer hoogtegegevens om de moeilijkheidsgraad, het risico en de afstand beter in te schatten.  


### Skikaartstijl uitschakelen {#disable-ski-map-style}

Als het verwijderen van pistes en winterkleuren van de kaart de voorkeur heeft, of als het skiseizoen voorbij is, doe dan een van de volgende dingen:

- Vink de [Winter en Ski](#set-winter-and-ski-map-style) kaartstijl uit voor het gewenste profiel.  
- Verander het [Skiprofiel](../personal/profiles.md) naar een ander profiel.
- Schakel de [Skikaartweergave plug-in](../plugins/index.md#enable--disable) uit.


:::info plug-in verwijderen
De Skikaartweergave plug-in is een aparte applicatie, en het uitschakelen van de weergave verwijdert deze niet. Als u deze wilt verwijderen, ga dan naar de Android-instellingen via *Instellingen openen* in het plug-in menu.  
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

De Winter en Ski kaartstijlen kunnen in elk profiel worden ingeschakeld. Maar het is het meest waardevol in het [Skiprofiel](../personal/profiles.md), waar het standaard is ingesteld. Het Skiprofiel is zeer comfortabel voor de [Skinavigatie](../navigation/routing/ski-routing.md).


## Skikaartstijl {#ski-map-style}

Gebruik de [Legenda skikaart](../../user/map-legend/ski-map.md) voor elke referentie. Het helpt om de soorten pistes op de kaart te identificeren, evenals de soorten luchtwegen en andere kenmerken die van de kaart kunnen worden afgelezen.

Door de kaart te lezen, kunt u details achterhalen die voor u belangrijk zijn, zoals de moeilijkheidsgraad van een bepaalde piste, het type piste, of er preparatie plaatsvindt en of de piste 's nachts verlicht is.

De hier beschreven opties zijn beschikbaar in de [Skinavigatie](../navigation/setup/route-navigation.md). De **Skinavigatie** stelt de individuele routeopties in, die alleen van toepassing zijn op skiën.


:::info renderstijl
De OsmAnd Skikaart is gebouwd als een van de renderstijlen, die bepaalt welke objecten op de kaart worden getoond en hoe objecten eruitzien. Alle renderstijlen worden beschreven in het [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml) bestand. Voor de regels die de interne structuur van het XML-bestand definiëren, zie de [Rendering documentatie](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Pistes per moeilijkheidsgraad {#pistes-by-difficulty}

| Kleur | Beschrijving |
| --- | --- |
| ![Piste voor beginners](@site/static/img/plugins/ski-maps/1c_green_1.png) | Groen - Piste voor beginners |
| ![ Gemakkelijke hellingen](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Blauw - Gemakkelijke hellingen |
| ![Hellingen voor gevorderden](@site/static/img/plugins/ski-maps/3c_red_1.png) | Rood - Hellingen voor gevorderden |
| ![Geavanceerde moeilijkheidsgraad](@site/static/img/plugins/ski-maps/4c_black_1.png) | Grijs - Hellingen met geavanceerde moeilijkheidsgraad |
| ![Expert moeilijkheidsgraad](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Geel - Hellingen met expert moeilijkheidsgraad |

De moeilijkheidsgraad van sporen wordt meestal aangegeven met specifieke kleuren. De kleuren kunnen verschillen per land en resort. Hieronder volgen enkele praktische richtlijnen.

:::tip richtlijnen
Voor meer specifieke richtlijnen voor elk type pistemoeilijkheid, zie de [OSM piste moeilijkheidsgraad referentie](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) of een andere bron die ook rekening houdt met hellingen, obstakels en gevaren. In de Winter en Ski kaartstijl kunnen bepaalde gemarkeerde gevaren (bijvoorbeeld lawinegevoelige gebieden getagd als hazard=avalanche) worden weergegeven als gevaren-POI op de kaart en moeten deze worden meegenomen bij de pistemoeilijkheidsgraad. 
:::


### Piste per types {#piste-by-types}

Pistes verschillen per type. Een type vertegenwoordigt verschillende kenmerken van een piste om te voldoen aan de eisen van verschillende wintergerelateerde activiteiten: alpineskiën, klassiek schaatsen, snowboarden, rodelen, backcountry skiën, toerskiën, buckelpisteskiën, nachtskiën, enz. Het begrijpen van het [type piste](https://wiki.openstreetmap.org/wiki/Key:piste:type) op de kaart helpt bij het uitstippelen van een optimale navigatieroute.

- **Afdalings-/alpineskipiste.**  
Gebruikt voor Skinavigatie. Dit [pistetype](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) heeft een richting en moeilijkheidsgraad, en bevindt zich meestal binnen de grenzen van het skiresort. Wanneer een afdalingspiste wordt geselecteerd voor Skinavigatie, wordt rekening gehouden met de richting van de piste. Als de vertrek- en bestemmingspunten tegenover de richting van de piste worden ingesteld, gaat de navigatie langs de dichtstbijzijnde luchtweg.

- **Nordic/backcountry skipiste.**  
Ook gebruikt voor Skinavigatie. Dit [pistetype](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) heeft geen moeilijkheidsgraad, kan al dan niet een richting hebben, en gaat meestal buiten de grenzen van het skiresort. Bij het navigeren langs dit type pistes kunnen de vertrek- en bestemmingspunten vaak worden omgewisseld.

- **Toerskipiste.**  
Vaak gebruikt door skiërs voor een Nordic-ascensie en een afdaling. De moeilijkheidsgraad van een toerskipiste wordt vaak aangegeven met de respectievelijke kleur. De Skinavigatie kan een route langs dit type piste uitstippelen, wat het mogelijk maakt om pistetypes te combineren.

- **Andere skipiste.**  
Pistetypes zoals *Wandelpaden* of *Rodelbanen* kunnen worden gebruikt voor ski- of wandelprofielen.


### Preparatie van pistes {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Preparatie inschakelen in Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Preparatie weergegeven in Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Preparatie inschakelen in iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Preparatie weergegeven in iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Om op de kaart te controleren of een bepaalde piste geprepareerd is, moet u de optie **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** inschakelen in de lijst **<Translate android="true" ids="rendering_category_details"/>** die geopend wordt vanuit het menu [Kaart configureren](../map/configure-map-menu.md).  
Speciale machines prepareren de sporen om ze voor te bereiden op de juiste activiteit, zoals klassiek schaatsen, ijsschaatsen en andere. Dezelfde piste kan in verschillende gebieden anders geprepareerd zijn.

### Skipisteroutes {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Skipistes en routes*

![Routes uitgeschakeld in Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Routes ingeschakeld in Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)


</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Skipistes en routes*

![Routes uitgeschakeld in iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Routes ingeschakeld in iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Om te weten te komen over welke pistes buiten het skiresort u kunt navigeren, moet u de optie **Skipistes en routes** inschakelen in de [**<Translate android="true" ids="rendering_category_routes"/>**](../map/routes.md) lijst, die geopend wordt vanuit het menu [Kaart configureren](../map/configure-map-menu.md).  

Met het Skiprofiel, de skinavigatie en de [Winter en Ski kaartstijl](../map/vector-maps.md#winter-and-ski) ingeschakeld, tonen de [Skipistes en routes](../map/vector-maps.md#ski-slopes-and-routes) alle soorten pistes die de Skinavigatie kan gebruiken om navigatieroutes langs uit te stippelen. Dergelijke skipisteroutes worden, indien ingeschakeld, meestal buiten de grenzen van het skiresort met een violette kleur omlijnd.  
Wanneer de optie [Skipistes en routes](../map/vector-maps.md#ski-slopes-and-routes) wordt ingeschakeld voor een kaartstijl anders dan Winter en Ski, worden alleen de hellingen weergegeven. Andere ski-gerelateerde kenmerken worden mogelijk niet getoond in deze stijl-laag.  
_Skipistes en routes_ [zijn klikbaar](../map/routes.md#actions-with-routes).


### Nacht en verlichting {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nachtmodus en verlichting inschakelen in Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Nacht en verlichting in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nachtmodus en verlichting inschakelen in iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Nacht en verlichting in iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

De **Winter en ski** stijl kan worden gebruikt met de [Nacht- of Zonsopgang/zonsondergangmodus](../map/vector-maps.md#map-mode). Een comfortabele keuze voor wie de voorkeur geeft aan donkere kleuren, of het scherm 's nachts donkerder wil maken, evenals voor wie aan nachtskiën doet. Samen met de Nachtmodus kan OsmAnd Skikaarten ook tonen welke pistes verlichting hebben met de optie [Straatverlichting](../map/vector-maps.md#details).  

Beide opties bevinden zich in het menu [Kaart configureren](../map/configure-map-menu.md).  

- Om de optie ***Nachtmodus*** in te schakelen, scrollt u naar beneden in de lijst:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*  

- Om de optie ***Straatverlichting*** in te schakelen, opent u de lijst **<Translate android="true" ids="rendering_category_details"/>** en schakelt u de optie in:  
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Gerelateerde artikelen {#related-articles}

- [Interactie met de kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)