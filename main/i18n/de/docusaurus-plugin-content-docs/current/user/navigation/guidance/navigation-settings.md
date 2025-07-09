---
source-hash: c8d86e0d815539ea1395efc415de2d8d02dbf19117cd20b4d4915ea3473d7023
sidebar_position: 7
title: Navigationseinstellungen
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

## Übersicht {#overview}

Für eine erfolgreiche Navigation ist es wichtig, die entsprechenden Einstellungen richtig zu konfigurieren, je nach Ihren Bedürfnissen und Ihrer Reiseart – ob mit dem Auto, zu Fuß, zu Pferd oder auf Skiern. Dieser Artikel beschreibt die grundlegenden Routenparameter, [Sprachansagen](#voice-prompts), [Bildschirmwarnungen](#screen-alerts), das [Kartenverhalten während der Navigation](#map-during-navigation) und die [Anpassung der Routenlinien](#customize-route-line). Er enthält auch Details zu Fahrzeugeinstellungen wie [Standardgeschwindigkeit](#default-speed) und [Maximale/minimale Geschwindigkeit](#road-speeds), [Motortyp](#fuel-used-by-motor) für die CO2-Berechnung, [Tankkapazität](#fuel-tank-capacity) und [Größe/Gewicht](#size-parameters), die die Route beeinflussen können. Das Anpassen dieser Einstellungen hilft Ihnen, OsmAnd optimal zu nutzen und Ihr Ziel ohne unnötige Verzögerung zu erreichen.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Wie zu öffnen {#how-to-open}

Dieser Abschnitt stellt die Navigationseinstellungen vor, die für die Berechnung und Darstellung einer Route erforderlich sind und die Sie für das ausgewählte Profil festlegen können. Dieses Menü enthält Einstellungen für die [Routenvorbereitung](../setup/route-navigation.md), den [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md), und was Sie in den *Navigationseinstellungen* festlegen, beeinflusst direkt die Anzeige der Daten in den [Routendetails](../setup/route-details.md).

Es gibt drei Möglichkeiten, auf das Menü Navigationseinstellungen zuzugreifen.

- Gehen Sie zum Haupt-*Menü → Einstellungen*, wählen Sie das gewünschte *Profil* und tippen Sie auf *Navigationseinstellungen*.

- Tippen Sie auf das *Navigationssymbol* auf dem Kartenbildschirm und wählen Sie dann das *Einstellungssymbol → Navigationseinstellungen*.

- Gehen Sie zum Haupt-*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
Das Standardprofil *Karte durchsuchen* hat keine Navigationseinstellungen.
:::

## Navigationstyp {#navigation-type}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png) ![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>

Navigation ist ein wichtiger Bestandteil einer Reise, und die Wahl *des richtigen Typs* der Navigation kann Ihre Reise erheblich erleichtern. Der gewählte Navigationstyp kann davon abhängen, wie Sie reisen und ob Sie eine Internetverbindung haben.

- **Online-Navigation**
Sie verwendet hauptsächlich ein spezielles Routing-System oder eine Website, die es der OsmAnd-App ermöglicht, eine Route basierend auf aktuellen Informationen und anderen Faktoren zu planen. Informationen zur Auswahl der besten Online-Route finden Sie im Artikel [Online-Routing](../routing/online-routing.md). Dieser Navigationstyp ist nur für die *Android-Version* der App verfügbar.

- **Offline-Navigation**
Sie erfordert keinen Internetzugang und bietet eine größere Auswahl an [Navigationstypen](../routing/osmand-routing.md#routing-types), die zur Routenberechnung verwendet werden können. Dazu gehören *Fahrrad, Boot, Auto, zu Fuß, Ski* und *gerade Linie*. Derzeit gibt es 13 grundlegende Routing-Typen sowie einen externen [BRouter](../routing/brouter.md)-Routing-Typ, der zusätzliche Routing-Möglichkeiten bietet.

Der Navigationstyp bestimmt, welche Regeln zur Routenberechnung verwendet werden. Wenn Sie einen bestimmten Navigationstyp benötigen, können Sie **Ihre eigene modifizierte *XML*-Routing-Datei importieren**. Lesen Sie mehr über Routing-Regeln auf unserer [GitHub-Seite](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Und es gibt einen separaten Artikel über das XML-Format und seine Verwendung, [Karten-Rendering-Stil](../../../technical/osmand-file-formats/osmand-rendering-style.md), der Ihnen bei der Erstellung einer Routendatei helfen kann.

## Routenparameter {#route-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="route_parameters"/>** sind Einstellungen, die festlegen, wie die Anwendung eine Route zu einem Ziel berechnet, unter Berücksichtigung von Faktoren wie Transportart, Routing-Prioritäten, Routenbedingungen, Routenkomplexität und Benutzerpräferenzen.

Für jedes [Profil](../../personal/global-settings.md#default-profile), außer *Karte durchsuchen*, wählt OsmAnd standardmäßig den optimalen [Navigationstyp](#navigation-type) und die relevanten [Routenparameter](../routing/osmand-routing.md#routing-types). Sie können jedoch jeden gewünschten Typ auswählen und die Parameter je nach Ihren Vorlieben und den externen Bedingungen der bevorstehenden Reise ändern.

Alle Routenparameter sind in den entsprechenden Abschnitten der Dokumentation detailliert beschrieben:
*[Auto-Routing (LKW, Motorrad)](../routing/car-based-routing.md), [Fahrrad-Routing (MTB)](../routing/bicycle-based-routing.md), [Moped-Routing](../routing/moped-routing.md), [Fußgänger-Routing](../routing/pedestrian-routing.md), [Öffentliche Verkehrsmittel-Routing](../routing/public-transport-navigation.md), [Reit-Routing](../routing/horse-routing.md), [Ski-Routing](../routing/ski-routing.md), [Zug-Routing](../routing/train-routing.md), [Boots-Routing](../routing/boat-navigation.md), [Direkt-zu-Punkt-Routing](../routing/direct-to-point-routing.md), [Gerade-Linie-Routing](../routing/straight-line-routing.md), [Online-Routing](../routing/online-routing.md), [BRouter-Routing](../routing/brouter.md)*.

### Route neu berechnen {#recalculate-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>

Der Parameter **Routenberechnung** ändert die berechnete Route automatisch, wenn Sie von ihr abweichen oder in die entgegengesetzte Richtung fahren. In beiden Fällen hilft Ihnen diese Einstellung, Ihre Fahrtrichtung beizubehalten und Ihr Ziel zu erreichen, ohne Zeit mit der manuellen Suche nach einer neuen Route zu verschwenden.

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> bei Abweichung* | <Translate android="true" ids="recalculate_route_distance_promo"/> | Wenn [Sprachansagen](../guidance/voice-navigation.md#voice-settings) aktiviert sind, kündigt OsmAnd an, dass die Route neu berechnet wird. |
| *Route bei umgekehrter Richtung neu berechnen* | Ihre Route wird neu berechnet, wenn Sie sich zum Startpunkt bewegen. | Wenn diese Einstellung deaktiviert ist, wird die Bewegung zum Startpunkt nicht als Abweichung vom Weg betrachtet (solange sie der berechneten Route folgt). |

### Entwicklungseinstellungen {#development-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *Menü → Einstellungen → App-Profil → Navigationseinstellungen → Routenparameter → Entwicklung*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *Menü → Einstellungen → App-Profil → Navigationseinstellungen → Routenparameter → Entwicklung*

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>

Die Parameter im Abschnitt **Entwicklung** sind hauptsächlich für fortgeschrittene Benutzer gedacht und nur verfügbar, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

| Parameter | Beschreibung |
|:------------|:---------------|
| *Routing-Typ* (*Android*) / *Routing-Algorithmus* (*iOS*) | <ul><li>**A*** 2-phasig (*Android*) / **A*** (*iOS*) fügt dem Standardalgorithmus eine zusätzliche Phase hinzu, um die Qualität der berechneten Route zu verbessern. Diese Option kann nützlich sein, um Routen in großen und komplexen Straßennetzen zu finden, die Routenberechnung kann jedoch länger dauern.</li><li>**A* classic** (*Android*) / **Highway hierarchies** (*iOS*) optimieren die Routenplanung, indem sie Hauptstraßen und Autobahnen bevorzugen und die Anzahl der Abbiegungen und Kreuzungen auf der Route minimieren. Besonders effektiv über lange Distanzen.</li><li>**HH (Highway Hierarchies) x Java** (*Android only*) basiert auf der Implementierung hierarchischer Datenstrukturen zur Optimierung der Pfadfindung auf einer Karte, unter Berücksichtigung von Laufzeitbeschränkungen und Geräteressourcenverbrauch, und wird auf der Java-Plattform realisiert.</li><li>**HH (Highway Hierarchies) x C++** (*Android only*) ist ein Algorithmus, der die Programmiersprache C++ verwendet, um Straßennetzdaten effizient zu verarbeiten und optimale Routen mithilfe hierarchischer Datenstrukturen zu erstellen. Er ist für die schnelle Verarbeitung großer Datenmengen optimiert und besonders effektiv für die Navigation auf Karten mit vielen Straßennetzen.</li></ul> |
| *GPX-Approximation* (*Android only*) | <ul><li>**Routing-basiert** GPX-Approximation in **C++ und Java** verwendet Routendaten, um GPS-Tracks mit bestehenden Straßenrouten zu approximieren, was die Genauigkeit des Tracks verbessert und die Trackgröße reduziert.</li><li>**Geometrie-basiert** GPX-Approximationen in **C++ und Java** arbeiten auf der Grundlage geometrischer Prinzipien, um GPS-Tracks schnell und genau zu approximieren, was eine effiziente Verarbeitung großer Datenmengen ermöglicht.</li></ul> |
| *Auto-Zoom* | <ul><li>**Diskret** ermöglicht das Zoomen der Karte auf eine bestimmte Detailstufe, gemessen in wenigen diskreten Schritten.</li><li>**Sanft** bietet eine allmähliche Änderung des Kartenmaßstabs mit sanften Animationseffekten ohne Ruckeln oder Sprünge.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*Android only*) | Verwenden Sie [OsmAnd Live-Updates](../../personal/maps-resources.md#osmand-live) während des Routings. Beachten Sie, dass wir die Verwendung dieser Option nur zu Testzwecken empfehlen. |

<!--
| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>* | Ermöglicht die Verwendung von [OsmAnd Live-Updates](../../personal/maps-resources.md#osmand-live) während des Routings. Beachten Sie, dass wir die Verwendung dieser Option nur zu Testzwecken empfehlen. |
| *<Translate android="true" ids="use_two_phase_routing"/>* | Fügt dem Standardalgorithmus (A*) eine zusätzliche Phase hinzu, um die Qualität der berechneten Route zu verbessern. Diese Option kann nützlich sein, um Routen in großen und komplexen Straßennetzen zu finden, obwohl die Routenberechnung länger dauern kann. |
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/> |
-->

## Sprachansagen {#voice-prompts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> Taste* *(oder <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Profil auswählen → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

Der erste Teil des Artikels *[Sprachansagen / Benachrichtigungen](./voice-navigation.md)* beschreibt detailliert, wie Sprachansagen eingerichtet werden.

Audioanweisungen während der Navigation helfen Ihnen als Fahrer oder Fußgänger, Ihr Ziel zu erreichen, während Sie [eine ausgewählte Route navigieren](../setup/route-navigation.md). Sie enthalten Informationen über Abbiegungen, Fahrtrichtungen, Verkehrsschilder, Entfernungen zu Ihrem Ziel und andere Faktoren, die Ihre Navigation beeinflussen können.

Wenn Sie einen Track als Zielpunkt auswählen, müssen Sie die Option [An Straßen anheften](../setup/gpx-navigation.md#attach-to-the-roads) verwenden, damit die Sprachansagen korrekt funktionieren.

*Sprachansagen* ermöglichen es Ihnen, sich auf die Straße zu konzentrieren und nicht durch die Karte oder das Navigationsgerät abgelenkt zu werden. Sie verbessern auch die Fahrsicherheit, reduzieren die Zeit, die für die Navigation in unbekanntem Gelände benötigt wird, und können für verschiedene [Routentypen](../routing/osmand-routing.md#routing-types) nützlich sein.

## Bildschirmwarnungen {#screen-alerts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>

Die Navigationseinstellung **Bildschirmwarnung** aktiviert das [**Warnungs-Widget**](../../widgets/nav-widgets.md#alert-widget). *Details:*

- Wenn Sie sich einem der unterstützten Hindernisse auf der Straße nähern, erscheinen Benachrichtigungen in der unteren linken Ecke der Karte.
- Wenn Sie die in der OsmAnd-App verfügbaren [*Sprach- und Textansagen*](../../navigation/guidance/voice-navigation.md) konfigurieren, haben Sie eine komfortablere und sicherere Reise.
- Das Aussehen und der Zeitpunkt der Ansagen hängen von Ihren Geschwindigkeitseinstellungen ab. Sie finden diese [im Artikel](../../../technical/algorithms/voice-prompt-triggering.md).
- Das Verhalten von *Bildschirmwarnungen* wird auch durch die Einstellung [Punkte entlang der Route anzeigen](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route) beeinflusst.

Sie können ***auswählen, welche Warnungen*** Sie während der Navigation auf dem App-Bildschirm sehen möchten:

- **Geschwindigkeitsbegrenzung** ([OSM Wiki Info](https://wiki.openstreetmap.org/wiki/Speed_limits)). In den Bildschirmwarnungen wird die *Geschwindigkeitsbegrenzung* nur auf dem Bildschirm angezeigt, wenn *Verkehrswarnungen* aktiviert sind. Wenn Sie Geschwindigkeitsbegrenzungen während der Navigation ohne andere Warnungen sehen möchten, verwenden Sie das [Widget](../../widgets/nav-widgets.md#speed-limit).
- **Verkehrswarnungen** ([OSM Wiki Info](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Weitere Informationen finden Sie im Artikel [Kartenbildschirm während der Navigation](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Fußgängerüberwege** ([OSM Wiki Info](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Radarkameras** ([OSM Wiki Info](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Weitere Informationen zur Einstellung der Radarkamera in OsmAnd finden Sie unter [Warnungstypen](../../widgets/nav-widgets.md#alert-types) und im Artikel *Globale Einstellungen*, Abschnitt [Rechtliches](../../personal/global-settings.md#legal).
- **Tunnel** ([OSM Wiki Info](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Die Warnungstypen haben ein unterschiedliches visuelles Erscheinungsbild, das von der Reiseregion abhängt. OsmAnd zielt nicht darauf ab, 100% identische Verkehrsschilder darzustellen, weist aber auf einige Ähnlichkeiten hin.
:::

## Karte während der Navigation {#map-during-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*

</TabItem>

</Tabs>

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

Die **Karte wird während der Navigation verwendet**, um Ihren Standort zu bestimmen, Ihre Route zu planen und die Orientierung zu erleichtern. Während der Navigation können Sie die Karte mit *Auto-Zentrierung* anzeigen, sie verschieben und *vergrößern und verkleinern*, um den gewünschten Bereich zu sehen. Die Karte kann auch Markierungen anzeigen, die auf interessante Orte, Routen, Wetterbedingungen, Verkehrsschilder und andere Objekte hinweisen, die Ihnen bei der Navigation helfen. Die Karte kann in *Echtzeit* aktualisiert werden und zeigt *aktuelle Informationen* an, die die Routenplanung beeinflussen können.

Wie sich das Verhalten der Karte während der Navigation ändert, erfahren Sie im Artikel [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md).

## Routenlinie anpassen {#customize-route-line}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>

Mit der Einstellung **Routenlinie anpassen** können Sie das Aussehen der Routenlinie wählen, die während der Navigation auf der Karte sichtbar sein wird. Sie können die *Farbe*, die *Breite der Linie* und die Anzeige der *Abbiegepfeile* darauf auswählen. Für jedes Profil können Sie eine andere Linienansicht wählen. Alle diese Parameter sind im Artikel *Kartenbildschirm während der Navigation* im Abschnitt [Aussehen der Routenlinie](../../navigation/guidance/map-during-navigation.md#route-line-appearance) detailliert beschrieben.

## Fahrzeugparameter {#vehicle-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>

Für eine optimale Routenberechnung in OsmAnd sollten Sie die folgenden Fahrzeugparameter berücksichtigen:

1. Legen Sie die [*Standardgeschwindigkeit* oder *Straßengeschwindigkeiten*](#default-speed--road-speeds) fest, sowie die [minimale und maximale Geschwindigkeit](#road-speeds) des Fahrzeugs. Dies hilft der Anwendung, die für die Route benötigte Zeit zu bestimmen und die beste Route unter Berücksichtigung der Geschwindigkeitsbegrenzungen auf verschiedenen Straßenabschnitten zu wählen.
2. Geben Sie den [*Kraftstofftyp*](#fuel-used-by-motor) an, der vom Motor verwendet wird. Dies ermöglicht der App, die CO2-Emissionen abzuschätzen.
3. Geben Sie die [*Kapazität Ihres Tanks*](#fuel-tank-capacity) ein, um Ihren Kraftstoffstand und -verbrauch genau zu verfolgen.
4. Definieren Sie [*Größen- und Gewichtsparameter*](#size-parameters) Ihres Fahrzeugs, die der App helfen können, die optimale Route zu berechnen und Hindernisse auf der Straße aufgrund von Einschränkungen zu vermeiden.

Die korrekte Einstellung der Parameter in der OsmAnd-App hilft Ihnen, Probleme bei der Navigation einer Route zu vermeiden, die am besten geeignete Route entsprechend dem Fahrzeugtyp und den Straßenbeschränkungen zu wählen und die Reisezeit zu berechnen.

### Größenparameter {#size-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Fahrzeugparameter beeinflussen die Navigation und Routenplanung, da sie die Verfügbarkeit von Straßen, Brücken, Fähren, Dämmen und anderer Infrastruktur bestimmen. Wenn Höhe, Breite, Länge oder Gewicht eines Fahrzeugs die zulässigen Werte für bestimmte Straßenabschnitte überschreiten, findet das OsmAnd-Navigationssystem eine alternative Route, um Hindernisse auf dem Weg zu vermeiden.

- Die Maßeinheiten entsprechen den in *Allgemeine Einstellungen → [Einheiten & Formate](../../personal/profiles.md#units--formats)* ausgewählten Einstellungen.
- Die Fahrzeugparameter können manuell eingestellt werden.
- Wenn Sie den Fahrzeugmessparameter manuell auswählen, bietet Ihnen die Anwendung den nächstgelegenen Wert aus der vorgefertigten Liste an. Dies ist notwendig, um Fehler zu vermeiden und die Route korrekter zu erstellen.
- Sie können Fahrzeugparameter aus einer vorgefertigten Liste von Größen auswählen.
- Stellen Sie die Größe nicht auf *Keine* ein, da dies bedeutet, dass keine Einschränkungen für den ausgewählten Parameter angewendet werden.

#### Einschränkungen {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> Limit**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Der Gewichtsparameter ist nur in Navigationstypen wie [*Auto, LKW* und *Motorrad*](../../navigation/routing/car-based-routing.md) verfügbar.

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.** [**<Translate android="true" ids="routing_attr_height_name"/> Limit**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Der Höhenparameter ist nur in Navigationstypen wie *[Auto, LKW, Motorrad](../../navigation/routing/car-based-routing.md)* und *[Boot](../../navigation/routing/boat-navigation.md)* verfügbar.

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> Limit**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Der Längenparameter ist nur in Navigationstypen wie [*Auto, LKW* und *Motorrad*](../../navigation/routing/car-based-routing.md) verfügbar.

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> Limit**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Der Breitenparameter ist nur in Navigationstypen wie *[Auto, LKW, Motorrad](../../navigation/routing/car-based-routing.md)* und *[Boot](../../navigation/routing/boat-navigation.md)* verfügbar.

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Grenzwerte für Fahrzeugparameter können für die Navigation und Verkehrssicherheit wichtig sein. Einige dieser Einschränkungen können umfassen:

1. Beschränkungen für Fahrzeuge, die in bestimmten städtischen Gebieten fahren.
2. Beschränkungen für den Fahrzeugverkehr auf bestimmten Straßenabschnitten, z. B. dort, wo es Brücken, Tunnel mit begrenztem Raum, niedrige Überführungen, komplexe Kurven oder andere Bauwerke gibt.
3. Gewichtsbeschränkungen pro Fahrzeugachse können besonders für Lastwagen wichtig sein.
4. Beschränkungen für Fahrzeuge, die unter bestimmten Bedingungen fahren, z. B. bei hohen Temperaturen, nassen oder verschneiten Straßen, nachts oder bei Wetterbedingungen mit eingeschränkter Sicht.

Diese Einschränkungen können für die Navigation wichtig sein und sollten bei der Routenplanung berücksichtigt werden. Wenn ein Fahrzeug die Grenzwerte überschreitet, kann dies zu Problemen mit der Verkehrssicherheit, Infrastrukturschäden, Bußgeldern bei Unfällen und anderen rechtlichen Konsequenzen führen. Daher sollten Fahrer die Route sorgfältig prüfen und sicherstellen, dass die Höhe ihres Fahrzeugs den Grenzwerten entspricht.

### Kraftstoffparameter {#fuel-parameters}

#### Kraftstoffart des Motors {#fuel-used-by-motor}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Wenn Sie den Motortyp in den Fahrzeugparametern auswählen, werden die [***CO2-Fußabdruckdaten***](../../navigation/setup/route-details.md#elevation-info) oberhalb des Diagramms in den [Routendetails](../setup/route-details.md) angezeigt.
Es stehen sechs Kraftstofftypen zur Verfügung: ***Benzin, Diesel, LPG, CNG, Elektro*** und ***Hybrid***.

**Anwendbarkeit:**

Die Einstellung **Kraftstoffart des Motors** ist nur in fahrzeugbasierten Navigationstypen wie *[Auto, Motorrad und LKW](../../navigation/routing/car-based-routing.md)* verfügbar.

#### Tankkapazität {#fuel-tank-capacity}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>

Der Parameter **Tankkapazität** ermöglicht es Ihnen, den Kraftstoffstand und -verbrauch Ihres Fahrzeugs genauer zu verfolgen, indem Sie das Gesamtvolumen Ihres Tanks angeben. Die Maßeinheit für die Kraftstoffkapazität wird durch die Einstellungen in *Menü → Profil konfigurieren → Allgemeine Einstellungen → Einheiten & Formate → Volumeneinheit* bestimmt. Eine detaillierte Anleitung zum Festlegen von Einheiten & Formaten finden Sie im Artikel [Profil (Einstellungen)](https://osmand.net/docs/user/personal/profiles#units--formats).

OsmAnd unterstützt die folgenden Einheiten für die Kapazität:

- Gallonen - **gal**. Diese Abkürzung wird verwendet, um sowohl **imperiale Gallonen** als auch **US-Gallonen** darzustellen, abhängig von Ihren ausgewählten Einheitenpräferenzen.
- Liter - **l**. Die metrische Einheit für die Kapazität.

**Anwendbarkeit:**

Die Einstellung **Tankkapazität** ist nur in fahrzeugbasierten Navigationstypen verfügbar. Für Navigationstypen wie *Fahrrad*, *Reiten*, *Zu Fuß* und *Ski* wird dieser Parameter in den Fahrzeugparametern nicht angezeigt.

Durch die Eingabe der genauen Kapazität Ihres Kraftstofftanks kann die App ein maßgeschneidertes Erlebnis bieten, einschließlich:

- Präzise Verfolgung des verbleibenden Kraftstoffs basierend auf Ihrem Verbrauch.
- Verbesserte Routenplanung mit Kraftstoffstopps, die auf Ihre Tankgröße optimiert sind.

Um genaue Berechnungen und Navigationsvorschläge zu gewährleisten, überprüfen Sie, ob Ihre ausgewählte Einheit dem Messstandard Ihres Tanks entspricht.

### Standardgeschwindigkeit / Straßengeschwindigkeiten {#default-speed--road-speeds}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>

Für alle Navigationsarten können die minimale und maximale zulässige Geschwindigkeit, sowohl standardmäßig als auch auf der Straße, unterschiedlich sein, gemäß bestimmten Werten ([Standardgeschwindigkeitsbegrenzungen](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) und Beschränkungen für Fahrzeuge. Die Geschwindigkeit wird auch in bestimmten Schritten eingestellt, um die Anwendungseinstellungen maximal nutzbar zu machen. Für die Profile *Gehen*, *Reiten* und *Radfahren* in kleinen Schritten, die 0,1 km/h entsprechen ([Einheiten & Formate](https://osmand.net/docs/user/personal/profiles#units--formats)), und für die anderen Profile in Schritten, die 1 km/h entsprechen.
Geschwindigkeitseinstellungen bestimmen, wann [Sprachansagen](../guidance/voice-navigation.md) aktiviert werden.

Diese Parameter werden als Geschwindigkeit verwendet, um die [Ankunftszeit](../../widgets/nav-widgets.md#time-to-intermediate) zu schätzen, wenn die Geschwindigkeit nicht aus Kartendaten bestimmt werden kann:

- für das ausgewählte Profil;
- wenn die verwendeten Straßen keine Geschwindigkeitsbegrenzungen haben, die auch das Routing beeinflussen können;
- wenn benutzergenerierte oder importierte Tracks ausgewählt sind.

#### Standardgeschwindigkeit {#default-speed}

Die **Standardgeschwindigkeit** ist die voreingestellte Bewegungsgeschwindigkeit. Sie wird verwendet, um die Ankunftszeit zu berechnen und die optimale Route basierend auf der Bewegungsgeschwindigkeit zu bestimmen, die die Anwendung für diese Transportart als typisch ansieht. Zum Beispiel Auto, öffentliche Verkehrsmittel, Fußgänger oder die von Ihnen manuell eingestellte Geschwindigkeit.

#### Straßengeschwindigkeiten {#road-speeds}

<InfoAndroidOnly />

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

<!--
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>

:::note
Diese Einstellungen sind unter iOS verfügbar unter *Menü → Einstellungen → App-Profil → Navigationseinstellungen → Routenparameter → Straßengeschwindigkeiten*.
:::
-->

- **Mindestgeschwindigkeit**
Die Einstellung legt die minimale Fahrgeschwindigkeit für alle Straßentypen auf der Route fest. Sie erhöht die Priorität für Straßen mit einer empfohlenen Geschwindigkeit, die unter der Mindestgeschwindigkeit liegt.
- **Höchstgeschwindigkeit**
Die Einstellung legt die maximale Fahrgeschwindigkeit fest und verringert die Priorität für Straßen mit einer möglichen Geschwindigkeit, die über dem Maximum liegt.

## Detaillierte Track-Führung {#detailed-track-guidance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Attach to the roads 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png) ![Navigation Settings Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Detaillierte Track-Führung*

![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_1_ios.png) ![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

Die Funktion **Detaillierte Track-Führung** verbessert die Genauigkeit der Routennavigation bei Verwendung von **trackbasierten Routen**. Wenn Sie einen Track als Ziel auswählen, können Sie die Einstellung [An Straßen anheften](../setup/gpx-navigation.md#attach-to-the-roads) aus dem Menü [Track folgen](../setup/gpx-navigation.md#follow-track-options) aktivieren. Dies stellt sicher, dass der Track für eine reibungslosere, präzisere Navigation an bestehende Straßen angepasst wird.

Es gibt zwei Optionen für die Verwendung der *Detaillierten Track-Führung*:

- **<Translate android="true" ids="ask_every_time"/>** (*Standardeinstellungen*) – Die Option *An Straßen anheften* wird jedes Mal im Abschnitt [Routendetails](../setup/route-details.md) angezeigt, wenn eine trackbasierte Route berechnet wird. Dies ermöglicht Ihnen zu entscheiden, ob die Straßenanheftung für jede Navigationssitzung angewendet werden soll.

- **<Translate android="true" ids="shared_string_always"/>** – Der Straßenanheftungsprozess wird automatisch für jede *Navigation nach Track*-Route angewendet, ohne dass eine manuelle Bestätigung erforderlich ist.

Weitere Informationen zur Verwendung der trackbasierten Navigation finden Sie unter [Navigation nach Track](../setup/gpx-navigation.md).

## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routenvorbereitung](../setup/route-navigation.md)
- [Navigation nach Track](../setup/gpx-navigation.md)
- [Navigation nach Markierungen](../setup/markers-navigation.md)
- [Routendetails](../setup/route-details.md)
- [Kartenbildschirm während der Navigation](./map-during-navigation.md)
- [Sprachansagen / Benachrichtigungen](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Zuletzt aktualisiert: April 2025*