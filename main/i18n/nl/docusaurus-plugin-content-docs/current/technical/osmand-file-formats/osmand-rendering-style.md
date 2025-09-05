---
source-hash: 3057ab836ad9930847a69d2d7861832dfef9678fdc1d8f87d5e96ad65d09220e
sidebar_position: 6
---

# Kaartweergavestijl - .render.xml {#map-rendering-style---renderxml}


Als u de standaardweergavestijl wilt wijzigen, moet u de [definitie op GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml) bekijken. U vindt allerlei stijlen via deze [link](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles), dus als u uw eigen stijl wilt maken, kunt u het eenvoudigste voorbeeld vinden.

Als u besluit uw eigen weergavestijl te maken, moet u mogelijk [uw eigen kaarten](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags) maken om aangepaste functieweergave toe te voegen.

## Secties van kaartstijl {#map-style-sections}

Het kaartstijlbestand bestaat uit verschillende secties.

| Sectie | Beschrijving |
|---------|-------------|
| **Header** | Bestaat uit `name` (stijlnaam), `defaultColor` (standaard kaartkleur kan worden overschreven door attribuut defaultColor) en `depends` (erft alle eigenschappen van de bovenliggende stijl). |
| **Parameters** | Gedefinieerd als `<renderingProperty>` heeft `attr` die in de stijl als parameternaam zal worden gebruikt en `name`, `description` zullen aan de gebruiker worden getoond. |
| **Attributen** en **constanten** | Gedefinieerd als `<renderingAttribute>` en als `<renderingConstant>` maakt het mogelijk om dezelfde blokken van weergavestijlen te hergebruiken voor verschillende kaartobjecten | 
| **Order** sectie | Gedefinieerd als een blok [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876). Elk kaartobject wordt in de order-sectie gezocht om te bepalen of het als punt, lijn of polygoon (`objectType`) zal worden weergegeven en in welke `order` het moet worden weergegeven. **Zoekparameters** (invoer): `tag`, `value`, `zoom`, `point` (waar of onwaar), `area` (osm-type), `cycle` (start- en eindpunt zijn hetzelfde). **Zoekresultaat** (uitvoer): `objectType` (punt = 1, lijn = 2, polygoon = 3), `order` (0-255). De volgorde van weergave is gedefinieerd als: polygonen, lijnschaduwen, lijnen, punten. Als de `order` voor polygonen hetzelfde is, worden polygonen weergegeven van de grootste polygoon naar de kleinste. Opmerking: polygonen mogen elkaar niet gedeeltelijk overlappen, anders is het gedrag niet gedefinieerd. |
| **Text** sectie | Gedefinieerd als een blok [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811). Elk weergegeven kaartobject wordt gezocht om te bepalen of het de tekst moet weergeven en hoe het moet worden weergegeven. **Zoekparameters** (invoer): `tag`, `value`, `zoom`, `nameTag` (elke teksttag wordt gecontroleerd). **Zoekresultaat** (uitvoer): `textOnPath`, `textMinDistance` (marge tussen dezelfde teksten, d.w.z. straatnamen, refs), `textSize`, `textColor`, `textHaloRadius`, `textOrder`, `textDy`, `textBold`, `nameTag2` (extra naam tussen haakjes indien aanwezig), `textShield` (achtergrond rond tekst), `icon` (icoon in plaats van tekst), `textItalic`, `textWrapWidth`, `intersectionMargin` (extra marge om tekst niet te overlappen). |
| **Point** sectie | Gedefinieerd als een blok [`<point>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467). Elk weergegeven puntkaartobject (gedefinieerd in de `order`-sectie) wordt in deze sectie gezocht om te bepalen hoe het moet worden weergegeven. **Zoekparameters** (invoer): `tag`, `value`, `zoom`, `e`. **Zoekresultaat** (uitvoer): `shield` (icoonschild), `icon`, `iconVisibleSize` (extra ruimte om iconen niet te overladen), `iconOrder`, `intersectionSizeFactor`. |
| **Polygon** sectie | Gedefinieerd als een blok [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580). Elk weergegeven polygoonkaartobject (gedefinieerd in de `order`-sectie) wordt in deze sectie gezocht om te bepalen hoe het moet worden weergegeven. **Zoekparameters** (invoer): `tag`, `value`, `zoom`. **Zoekresultaat** (uitvoer): `color` (kleur om de polygoon te vullen), `shader` (polygoon vullen met hetzelfde icoon), `color_2, color_N` (kleur van de omtrek rond de polygoon), `strokeWidth_2` (lijndikte), `pathEffect_2`, `cap_2`. |
| **Line** sectie | Gedefinieerd als een blok [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535). Elk weergegeven lijnkaartobject (gedefinieerd in de `order`-sectie) wordt in deze sectie gezocht om te bepalen hoe het moet worden weergegeven. 1 lijnobject kan worden weergegeven als meerdere gecombineerde lijnen tot -2 lagen eronder en tot 7 lagen erboven. **Zoekparameters** (invoer): `tag`, `value`, `zoom`, `nameTag` (elke teksttag wordt gecontroleerd). **Zoekresultaat** (uitvoer): `color, color_*` (kleur van de omtrek rond de polygoon), `strokeWidth, strokeWidth_*` (lijndikte), `pathEffect, pathEffect_*` (pad-effect), `cap, cap_*` (BUTT, ROUND, SQUARE), `pathIcon`, `pathIconStep`, `shadowRadius` (schaduw rond lijn). |


## Kaartfunctieselectoren {#map-feature-selectors}
Om te bepalen welke attributen uit de weergavestijl moeten worden opgehaald, wordt de volgende zoekprocedure voltooid:
- Zoek de meest interne `<case>` die overeenkomt met de zoekinvoerparameters `tag/value/zoom`, d.w.z. voor `highway=primary` wordt `<case tag="highway" value="primary">` gevonden.
- Alle interne elementen van `<case>` worden sequentieel diep toegepast en uitvoerparameters worden verzameld
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - uitvoer is 2 als `zoom=15` en uitvoer is 1 anders.    
- Gecontroleerd of `<case>` deel uitmaakt van een `<switch>` en zo ja, dan worden alle `apply` en `apply_if` van die switch ook geëvalueerd

Evaluatieregels:
- In elke 'case', `apply_if`, `switch`, `apply` worden invoerattributen gecontroleerd op overeenkomst (evalueren naar waar), anders wordt de sectie overgeslagen en worden uitvoerattributen niet verzameld.
- Alle regels worden sequentieel geëvalueerd en uitvoerparameters kunnen worden overschreven door de volgende regels
- `additional=?` is een speciaal invoerattribuut dat extra tags van het object controleert
- Kaartstijlparameters zijn ook invoerzoekparameters naast `tag/value/zoom`
    - Voorbeeld: `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. Invoerparameters: nightMode, streetLightingNight; uitvoerparameters - shield.


## Attributen (speciaal) & Constanten {#attributes-special--constants}
Renderingconstanten & renderingattributen zijn uitwisselbaar en kunnen worden gebruikt om de renderingstijl te vereenvoudigen en kopiëren/plakken van waarden of codeblokken te voorkomen. In het geval dat een attribuut zoals `color` een enkele waarde is, is het **voorkeur** om **renderingconstante** te gebruiken, omdat dit de prestaties van de renderingstijl aanzienlijk versnelt.

Renderingconstanten kunnen alleen worden gebruikt met één gegeven waarde: `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` en later in functieselectoren als `<apply_if shadowRadius="$motorwayShadowRadius"/>`.

Renderingattributen kunnen een ingebedde structuur hebben met extra selectoren en een van de volgende attributen uitvoeren (`attrColorValue`, `attrBoolValue`, `attrFloatValue`, `attrIntValue`, `attrStringValue`). Voorbeeld:
```
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```    

### Speciale attributen {#special-attributes}

Speciale attributen zijn `<renderingAttribute >` die niet door selectoren worden gebruikt, maar direct door de code worden gebruikt om specifieke functies op te vragen die in de applicatie worden getekend, zoals een navigatieroute, liniaal, gpx-track, enz.


| Speciaal attribuut | Beschrijving |
|-------------------|-------------|
| `measureDistanceLine` | Lijnweergave voor de functie Route plannen | 
| `markerGuideline`, `markerPlanRouteline` | Lijnen weergeven naar de markeringen |
| `route` | Een navigatieroute weergeven | 
| `gpx` | Een GPX-track weergeven |
| `publicTransportLine` | Een openbaarvervoernavigatieroute weergeven | 
| `walkingRouteLine` | Een openbaarvervoernavigatie weergeven: voetgangersroute tussen haltes | 
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | Hoe de Radius-Ruler widget weer te geven en afstand te meten door te tikken | 
|||
| `defaultColor` | Standaardkleur om de kaart te vullen (schakelt nacht-/dagmodus) |
| `shadowRendering` | Intern hoe schaduw weer te geven met Skia |
||| 
| `routeInfo_*` | Voorbeeld: `routeInfo_surface`, `routeInfo_roadClass` produceren klassen van wegen die in de legenda van de route moeten worden weergegeven. | 
|||
| `polygonMinSizeToDisplay` | Intern hoe kleine lijnen en kleine polygonen weer te geven | 
| `roadDensityZoomTile` | Intern hoe kleine lijnen en kleine polygonen weer te geven |
| `roadsDensityLimitPerTile` | Intern hoe kleine lijnen en kleine polygonen weer te geven |
| `defaultSymbolPathSpacing` | Intern hoe kleine lijnen en kleine polygonen weer te geven |
| `defaultBlockPathSpacing` | Intern hoe kleine lijnen en kleine polygonen weer te geven |
| `globalPathPadding` | Intern hoe kleine lijnen en kleine polygonen weer te geven |
|||
| `debugTextDisplayBBox` | Attributen om tekstweergave en positionering te debuggen | 
| `debugTextDisplayShieldBBox` | Attributen om tekstweergave en positionering te debuggen |
| `debugTextDoNotFindIntersections` | Attributen om tekstweergave en positionering te debuggen |
| `debugTextDoNotFindIntersectionsSameName` | Attributen om tekstweergave en positionering te debuggen |
| `debugTextDisplayShortRoadNames` | Attributen om tekstweergave en positionering te debuggen |

## Kaartstijlparameters {#map-style-parameters}

Kaartstijlparameters maken het mogelijk om meerdere weergavestijlen binnen één bestandsdefinitie te combineren, d.w.z. het is niet nodig om een aparte 'my_custom_style_night_mode.render.xml' te hebben, het is mogelijk om een parameter zoals `night_mode` (standaard ingeschakeld) te definiëren en bepaalde regels (zoals kleuren) aan te passen met behulp van deze parameter. Later in de gebruikersinterface is het mogelijk om die parameter eenvoudig te wijzigen en een andere kaartstijl in OsmAnd te hebben.

Hier is een definitie van de parameter `baseAppMode`. `possibleValues` zijn waarden die in de OsmAnd UI worden weergegeven, `category` helpt bij welke UI-categorie deze eigenschap behoort.
```
<renderingProperty attr="baseAppMode" name="Standaard weergavemodus" description="Kaartoptimalisatie voor respectievelijk gebruikersprofiel op basis van basis (bovenliggend) profiel"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

Later in de selectiestijl kunt u specificeren wanneer deze selector kan worden toegepast, d.w.z. voor welke toepassingsmodus die door de gebruiker is gespecificeerd
```
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Aantal wegen per tegel weer te geven -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

Dus als de gebruiker `moreDetailed=true` selecteert, is de uitvoerwaarde voor dichtheid `55` en als `baseAppMode=pedestrian` (een andere parameter) is deze `40`, anders `60`.