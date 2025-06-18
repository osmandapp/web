---
source-hash: 3057ab836ad9930847a69d2d7861832dfef9678fdc1d8f87d5e96ad65d09220e
sidebar_position: 6
---

# Karten-Rendering-Stil - .render.xml {#map-rendering-style---renderxml}


Wenn Sie den Standard-Rendering-Stil ändern möchten, müssen Sie sich die [Definition auf GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml) ansehen. Unter diesem [Link](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles) finden Sie alle Arten von Stilen. Wenn Sie also Ihren eigenen Stil erstellen möchten, können Sie das einfachste Beispiel finden.

Wenn Sie sich entscheiden, Ihren benutzerdefinierten Rendering-Stil zu erstellen, müssen Sie möglicherweise [Ihre eigenen Karten](../map-creation/create-offline-maps-yourself.md#custom-vector-map-tags) erstellen, um die Anzeige benutzerdefinierter Funktionen hinzuzufügen.

## Abschnitte des Kartenstils {#map-style-sections}

Die Datei des Kartenstils besteht aus mehreren Abschnitten.

| Abschnitt | Beschreibung |
|---------|-------------|
| **Header** | Besteht aus `name` (Stilname), `defaultColor` (Standardkartenfarbe, kann durch das Attribut defaultColor überschrieben werden) und `depends` (erbt alle Eigenschaften vom übergeordneten Stil). |
| **Parameter** | Definiert als `<renderingProperty>` hat `attr`, das im Stil als Parametername verwendet wird, und `name`, `description` werden dem Benutzer angezeigt. |
| **Attribute** und **Konstanten** | Definiert als `<renderingAttribute>` und als `<renderingConstant>` ermöglicht die Wiederverwendung derselben Blöcke von Rendering-Stilen für verschiedene Kartenobjekte | 
| **Order**-Abschnitt | Definiert als Block [`<order>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L2876). Jedes Kartenobjekt wird im Order-Abschnitt gesucht, um zu ermitteln, ob es als Punkt, Linie oder Polygon (`objectType`) gerendert wird und in welcher `order` es angezeigt werden soll. **Suchparameter** (Eingabe): `tag`, `value`, `zoom`, `point` (wahr oder falsch), `area` (osm-Typ), `cycle` (Start- und Endpunkt sind gleich). **Suchergebnis** (Ausgabe): `objectType` (Punkt = 1, Linie = 2, Polygon = 3), `order` (0-255). Die Reihenfolge des Renderings ist definiert als: Polygone, Linienschatten, Linien, Punkte. Wenn die `order` für Polygone gleich ist, werden die Polygone vom größten Polygon zum kleinsten angezeigt. Hinweis: Polygone sollten sich nicht teilweise überlappen, da ansonsten das Verhalten nicht definiert ist. |
| **Text**-Abschnitt | Definiert als Block [`<text>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#L3811). Jedes angezeigte Kartenobjekt wird gesucht, um zu ermitteln, ob es den Text anzeigen soll und wie es angezeigt werden soll. **Suchparameter** (Eingabe): `tag`, `value`, `zoom`, `nameTag` (jeder Text-Tag wird geprüft). **Suchergebnis** (Ausgabe): `textOnPath`, `textMinDistance` (Abstand zwischen gleichen Texten, z. B. Straßennamen, Referenzen), `textSize`, `textColor`, `textHaloRadius`, `textOrder`, `textDy`, `textBold`, `nameTag2` (zusätzlicher Name in Klammern, falls vorhanden), `textShield` (Hintergrund um den Text), `textItalic`, `textWrapWidth`, `intersectionMargin` (zusätzlicher Abstand, um Textüberlappungen zu vermeiden). |
| **Point**-Abschnitt | Definiert als Block [`<point>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#6467). Jedes angezeigte Punkt-Kartenobjekt (definiert im `order`-Abschnitt) wird in diesem Abschnitt gesucht, um zu bestimmen, wie es angezeigt werden soll. **Suchparameter** (Eingabe): `tag`, `value`, `zoom`, `e`. **Suchergebnis** (Ausgabe): `shield` (Icon-Schild), `icon`, `iconVisibleSize` (zusätzlicher Platz, um Icons nicht zu überladen), `iconOrder`, `intersectionSizeFactor`. |
| **Polygon**-Abschnitt | Definiert als Block [`<polygon>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#8580). Jedes angezeigte Polygon-Kartenobjekt (definiert im `order`-Abschnitt) wird in diesem Abschnitt gesucht, um zu bestimmen, wie es angezeigt werden soll. **Suchparameter** (Eingabe): `tag`, `value`, `zoom`. **Suchergebnis** (Ausgabe): `color` (Farbe zum Füllen des Polygons), `shader` (Polygon mit demselben Icon füllen), `color_2, color_N` (Farbe des Randes um das Polygon), `strokeWidth_2` (Randbreite), `pathEffect_2`, `cap_2`. |
| **Line**-Abschnitt | Definiert als Block [`<line>`](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/default.render.xml#9535). Jedes angezeigte Linien-Kartenobjekt (definiert im `order`-Abschnitt) wird in diesem Abschnitt gesucht, um zu bestimmen, wie es angezeigt werden soll. 1 Linienobjekt kann als mehrere kombinierte Linien gerendert werden, bis zu -2 Ebenen darunter und bis zu 7 Ebenen darüber. **Suchparameter** (Eingabe): `tag`, `value`, `zoom`, `nameTag` (jeder Text-Tag wird geprüft),. **Suchergebnis** (Ausgabe): `color, color_*` (Farbe des Randes um das Polygon), `strokeWidth, strokeWidth_*` (Randbreite), `pathEffect, pathEffect_*` (Pfad-Effekt), `cap, cap_*` (BUTT, ROUND, SQUARE), `pathIcon`, `pathIconStep`, `shadowRadius` (Schatten um die Linie). |


## Selektoren für Kartenfunktionen {#map-feature-selectors}
Um zu bestimmen, welche Attribute vom Rendering-Stil abgerufen werden sollen, wird folgendes Suchverfahren durchgeführt:
- Finden Sie den innersten `<case>`, der den Such-Eingabeparametern `tag/value/zoom` entspricht, z. B. für `highway=primary` wird `<case tag="highway" value="primary">` gefunden.
- Alle Interna von `<case>` werden sequenziell tief angewendet und Ausgabeparameter werden gesammelt.
 - `<case><apply output="1"/><apply_if zoom="15" output="2"> <case>` - Die Ausgabe ist 2 im Fall `zoom=15` und 1 sonst.
- Es wird geprüft, ob `<case>` Teil eines `<switch>` ist, und wenn ja, werden alle `apply` und `apply_if` dieses Schalters ebenfalls ausgewertet.

Auswertungsregeln:
- In jedem 'case', `apply_if`, `switch`, `apply` werden die Eingabeattribute auf Übereinstimmung geprüft (Auswertung auf true), andernfalls wird der Abschnitt übersprungen und die Ausgabeattribute werden nicht gesammelt.
- Alle Regeln werden sequenziell ausgewertet und Ausgabeparameter können durch folgende Regeln überschrieben werden.
- `additional=?` ist ein spezielles Eingabeattribut, das zusätzliche Tags des Objekts prüft.
- Kartenstilparameter sind neben `tag/value/zoom` ebenfalls Eingabe-Suchparameter.
    - Beispiel: `<apply_if nightMode="false" streetLightingNight="false" shield="street_lamp_lit_no_shield"/>`. Eingabeparameter: nightMode, streetLightingNight; Ausgabeparameter - shield.


## Attribute (speziell) & Konstanten {#attributes-special--constants}
Rendering-Konstanten und Rendering-Attribute sind austauschbar und können verwendet werden, um den Rendering-Stil zu vereinfachen und das Kopieren/Einfügen von Werten oder Codeblöcken zu vermeiden. Wenn ein Attribut wie `color` ein einzelner Wert ist, wird die Verwendung einer **Rendering-Konstante** **bevorzugt**, da dies die Leistung des Rendering-Stils erheblich beschleunigt.

Rendering-Konstanten können nur mit einem bestimmten Wert verwendet werden: `<renderingConstant name="motorwayShadowRadius" value="1.6"/>` und später in Feature-Selektoren als `<apply_if shadowRadius="$motorwayShadowRadius"/>`.

Rendering-Attribute können eine eingebettete Struktur mit zusätzlichen Selektoren haben und eines der folgenden Attribute ausgeben (`attrColorValue`, `attrBoolValue`, `attrFloatValue`, `attrIntValue`, `attrStringValue`). Beispiel:
```
    <renderingAttribute name="motorroadShadowColor">
		<case attrColorValue="#5f5fff"/>
	</renderingAttribute>
    .....
    <case showAccess="true" additional="motorroad=yes" attrColorValue="$motorroadShadowColor"/>
```    

### Spezielle Attribute {#special-attributes}

Spezielle Attribute sind `<renderingAttribute>`, die nicht von Selektoren verwendet werden, sondern direkt vom Code abgefragt werden, um bestimmte Funktionen abzubilden, die in der Anwendung gezeichnet werden, wie z. B. eine Navigationsroute, ein Lineal, ein GPX-Track usw.


| Spezielles Attribut | Beschreibung |
|-------------------|-------------|
| `measureDistanceLine` | Linien-Rendering für die Funktion "Route planen" | 
| `markerGuideline`, `markerPlanRouteline` | Rendering-Linien zu den Markern |
| `route` | Rendering einer Navigationsroute | 
| `gpx` | Rendering eines GPX-Tracks |
| `publicTransportLine` | Rendering einer Navigationsroute für öffentliche Verkehrsmittel | 
| `walkingRouteLine` | Rendering einer Navigation für öffentliche Verkehrsmittel: Fußgängerroute zwischen Haltestellen | 
| `rulerLineFont`, `rulerLine`, `rulerCircleAlt`, `rulerCircle` | Wie das Radius-Lineal-Widget gerendert wird und die Entfernung durch Tippen gemessen wird | 
|||
| `defaultColor` | Standardfarbe zum Füllen der Karte (schaltet Nacht-/Tagmodus) |
| `shadowRendering` | Intern wie Schatten mit Skia gerendert wird |
||| 
| `routeInfo_*` | Beispiel: `routeInfo_surface`, `routeInfo_roadClass` erzeugen Straßenklassen, die in der Legende der Route angezeigt werden. | 
|||
| `polygonMinSizeToDisplay` | Intern wie kleine Linien und kleine Polygone gerendert werden | 
| `roadDensityZoomTile` | Intern wie kleine Linien und kleine Polygone gerendert werden |
| `roadsDensityLimitPerTile` | Intern wie kleine Linien und kleine Polygone gerendert werden |
| `defaultSymbolPathSpacing` | Intern wie kleine Linien und kleine Polygone gerendert werden |
| `defaultBlockPathSpacing` | Intern wie kleine Linien und kleine Polygone gerendert werden |
| `globalPathPadding` | Intern wie kleine Linien und kleine Polygone gerendert werden |
|||
| `debugTextDisplayBBox` | Attribute zum Debuggen von Text-Rendering und -Positionierung | 
| `debugTextDisplayShieldBBox` | Attribute zum Debuggen von Text-Rendering und -Positionierung |
| `debugTextDoNotFindIntersections` | Attribute zum Debuggen von Text-Rendering und -Positionierung |
| `debugTextDoNotFindIntersectionsSameName` | Attribute zum Debuggen von Text-Rendering und -Positionierung |
| `debugTextDisplayShortRoadNames` | Attribute zum Debuggen von Text-Rendering und -Positionierung |

## Kartenstilparameter {#map-style-parameters}

Kartenstilparameter ermöglichen die Kombination mehrerer Rendering-Stile innerhalb einer Dateidefinition, d. h. es ist nicht erforderlich, separate 'my_custom_style_night_mode.render.xml' zu haben. Es ist möglich, einen Parameter wie `night_mode` (standardmäßig aktiviert) zu definieren und bestimmte Regeln (wie Farben) mithilfe dieses Parameters anzupassen. Später in der Benutzeroberfläche ist es möglich, diesen Parameter einfach zu wechseln und einen anderen Kartenstil in OsmAnd zu haben.

Hier ist eine Definition des Parameters `baseAppMode`. `possibleValues` sind Werte, die in der OsmAnd-Benutzeroberfläche angezeigt werden, `category` hilft dabei, zu welcher Benutzeroberflächenkategorie diese Eigenschaft gehört.
```
<renderingProperty attr="baseAppMode" name="Standard-Renderingmodus" description="Kartenoptimierung für das jeweilige Benutzerprofil basierend auf dem Basis-(Eltern-)Profil"
		type="string" possibleValues="default, car, bicycle, pedestrian, public_transport, boat, ski"/>
```

Später im Auswahlstil können Sie angeben, wann dieser Selektor angewendet werden kann, d. h. für welchen vom Benutzer angegebenen Anwendungsmodus.
```
<renderingAttribute name="roadsDensityLimitPerTile">
		<!-- Anzahl der Straßen pro Kachel anzeigen -->
		<case moreDetailed="true" attrIntValue="55"/>
		<case baseAppMode="pedestrian" attrIntValue="40"/>
		<case baseAppMode="bicycle" attrIntValue="40"/>
		<case attrIntValue="60"/>
	</renderingAttribute>
```

Wenn der Benutzer also `moreDetailed=true` auswählt, ist der Ausgabewert für die Dichte `55`, und wenn `baseAppMode=pedestrian` (ein anderer Parameter), ist er `40`, andernfalls `60`.