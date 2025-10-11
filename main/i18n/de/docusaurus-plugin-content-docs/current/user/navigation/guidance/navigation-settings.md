---
source-hash: 2df261c9180b4551af320e1c543ad9f218568286c2606e5a64d23089fbff8bdd
sidebar_position: 1
title:  Navigationseinstellungen
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

Für eine erfolgreiche Navigation ist es wichtig, die entsprechenden Einstellungen entsprechend Ihren Bedürfnissen und Ihrer Art zu reisen – mit dem Auto, zu Fuß, zu Pferd oder auf Skiern – richtig zu konfigurieren. Dieser Artikel beschreibt die grundlegenden Routenparameter, [Sprachansagen](#voice-prompts), [Bildschirmwarnungen](#screen-alerts), das [Kartenverhalten während der Navigation](#map-during-navigation) und das [Aussehen der Routenlinien](#customize-route-line). Er beschreibt auch die [Fahrzeugeinstellungen](#vehicle-parameters) wie Standardgeschwindigkeit, Motortyp für die CO2-Berechnung, Tankkapazität und Größen-/Gewichtsbeschränkungen. Die Anpassung dieser Einstellungen hilft Ihnen, das Beste aus der Nutzung von OsmAnd herauszuholen und Ihr Ziel ohne unnötige Verzögerung zu erreichen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### So öffnen Sie die Einstellungen {#how-to-open}

Dieser Abschnitt stellt die Navigationseinstellungen vor, die für die Berechnung und Darstellung einer Route erforderlich sind und die Sie für das ausgewählte Profil festlegen können. Dieses Menü enthält Einstellungen für die [Routenvorbereitung](../setup/route-navigation.md), den [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md), und was Sie in den *Navigationseinstellungen* festlegen, wirkt sich direkt auf die Anzeige der Daten in den [Routendetails](../setup/route-details.md) aus.

Es gibt drei Möglichkeiten, auf das Menü "Navigationseinstellungen" zuzugreifen.

- Gehen Sie zum Hauptmenü *Menü → Einstellungen*, wählen Sie das gewünschte *Profil* aus und tippen Sie auf *Navigationseinstellungen*.

- Tippen Sie auf das *Navigationssymbol* auf dem Kartenbildschirm, wählen Sie dann das *Einstellungssymbol → Navigationseinstellungen*.

- Gehen Sie zum Hauptmenü *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.  

:::info
Das Standardprofil *Karte durchsuchen* hat keine Navigationseinstellungen.  
:::


## Navigationstyp {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

Die Navigation ist ein wichtiger Teil einer Reise, und die Wahl des *richtigen Navigationstyps* kann Ihre Reise erheblich erleichtern. Der von Ihnen gewählte Navigationstyp kann davon abhängen, wie Sie reisen und ob Sie eine Internetverbindung haben.  

- **Online-Navigation**
    Sie verwendet hauptsächlich ein spezielles Routingsystem oder eine Website, die es der OsmAnd-App ermöglicht, eine Route basierend auf aktuellen Informationen und anderen Faktoren zu planen. Informationen zur Auswahl der besten Online-Route finden Sie im Artikel [Online-Routing](../routing/online-routing.md). Dieser Navigationstyp ist nur für die *Android-Version* der App verfügbar.  

- **Offline-Navigation**
Sie erfordert keinen Internetzugang und bietet eine größere Auswahl an [Navigationstypen](../routing/osmand-routing.md#routing-types), die zur Berechnung einer Route verwendet werden können. Darunter sind *Fahrrad, Boot, Auto, zu Fuß, Ski* und *gerade Linie*. Derzeit gibt es 13 grundlegende Routing-Typen sowie einen externen [BRouter](../routing/brouter.md)-Routing-Typ, der zusätzliche Routing-Möglichkeiten bietet.  

Der Navigationstyp bestimmt, welche Regeln zur Berechnung von Routen verwendet werden. Wenn Sie einen bestimmten Navigationstyp benötigen, können Sie **Ihre eigene modifizierte *XML*-Routing-Datei importieren**. Lesen Sie mehr über Routing-Regeln auf unserer [GitHub-Seite](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Es gibt auch einen separaten Artikel über das XML-Format und dessen Verwendung, [Karten-Rendering-Stil](../../../technical/osmand-file-formats/osmand-rendering-style.md), der Ihnen bei der Erstellung einer Routendatei helfen kann.  


## Routenparameter {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** sind Einstellungen, die festlegen, wie die Anwendung eine Route zum Erreichen eines Ziels berechnet, unter Berücksichtigung von Faktoren wie Transportmittel, Routing-Prioritäten, Routenbedingungen, Routenkomplexität und Benutzerpräferenzen.  

Für jedes [Profil](../../personal/global-settings.md#default-profile), außer für *Karte durchsuchen*, wählt OsmAnd standardmäßig den optimalen [Navigationstyp](#navigation-type) und die relevanten [Routenparameter](../routing/osmand-routing.md#routing-types) aus. Sie können jedoch jeden beliebigen Typ wählen und die Parameter je nach Ihren Vorlieben und den äußeren Bedingungen der bevorstehenden Reise ändern.  

Alle Routenparameter werden in den entsprechenden Abschnitten der Dokumentation ausführlich beschrieben:  
*[Auto-Routing (LKW, Motorrad)](../routing/car-based-routing.md), [Fahrrad-Routing (MTB)](../routing/bicycle-based-routing.md), [Moped-Routing](../routing/moped-routing.md), [Fußgänger-Routing](../routing/pedestrian-routing.md), [ÖPNV-Routing](../routing/public-transport-navigation.md), [Reit-Routing](../routing/horse-routing.md), [Ski-Routing](../routing/ski-routing.md), [Zug-Routing](../routing/train-routing.md), [Boot-Routing](../routing/boat-navigation.md), [Direkt-zum-Punkt-Routing](../routing/direct-to-point-routing.md), [Geradliniges Routing](../routing/straight-line-routing.md), [Online-Routing](../routing/online-routing.md), [BRouter-Routing](../routing/brouter.md)*.  


### Route neu berechnen {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>  

Der Parameter **Routenberechnung** ändert die berechnete Route automatisch, wenn Sie davon abweichen oder in die entgegengesetzte Richtung fahren. In beiden Fällen hilft Ihnen diese Einstellung, Ihre Fahrtrichtung beizubehalten und Ihr Ziel zu erreichen, ohne Zeit mit der manuellen Suche nach einer neuen Route zu verschwenden.  

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> bei Abweichung*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | Wenn [Sprachansagen](../guidance/voice-navigation.md#voice-settings) aktiviert sind, kündigt OsmAnd an, dass die Route neu berechnet wird. |
|  *Route bei entgegengesetzter Richtung neu berechnen*  | Ihre Route wird neu berechnet, wenn Sie sich zum Startpunkt bewegen.  |  Wenn diese Einstellung deaktiviert ist, wird die Bewegung zum Startpunkt nicht als Abweichung vom Weg betrachtet (solange sie der berechneten Route folgt).  |


### Entwicklereinstellungen {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *Menü → Einstellungen → App-Profil → Navigationseinstellungen → Routenparameter → Entwicklung*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Menü → Einstellungen → App-Profil → Navigationseinstellungen → Routenparameter → Entwicklung*

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

Die Parameter im Abschnitt **Entwicklung** sind hauptsächlich für fortgeschrittene Benutzer gedacht und nur verfügbar, wenn das [OsmAnd-Entwickler-Plugin](../../plugins/development.md) aktiviert ist.  

| Parameter | Beschreibung |
|:------------|:---------------|
| *Routing-Typ* (*Android*) / *Routing-Algorithmus* (*iOS*) | <ul><li>**A*** 2-Phasen (*Android*) / **A*** (*iOS*) fügt dem Standardalgorithmus eine zusätzliche Phase hinzu, um die Qualität der berechneten Route zu verbessern. Diese Option kann nützlich sein, um Routen in großen und komplexen Straßennetzen zu finden, die Routenberechnung kann jedoch länger dauern.</li><li>**A* klassisch** (*Android*) / **Autobahnhierarchien** (*iOS*) optimiert die Routenplanung, indem Hauptstraßen und Autobahnen bevorzugt werden, wodurch die Anzahl der Abbiegungen und Kreuzungen auf der Route minimiert wird. Besonders effektiv über lange Strecken.</li><li>**HH (Highway Hierarchies) x Java** (*nur Android*) basiert auf der Implementierung hierarchischer Datenstrukturen zur Optimierung der Wegfindung auf einer Karte unter Berücksichtigung von Laufzeitbeschränkungen und dem Ressourcenverbrauch des Geräts und wird auf der Java-Plattform realisiert.</li><li>**HH (Highway Hierarchies) x C++** (*nur Android*) ist ein Algorithmus, der die Programmiersprache C++ verwendet, um Straßennetzdaten effizient zu verarbeiten und optimale Routen unter Verwendung hierarchischer Datenstrukturen zu erstellen. Er ist für die schnelle Verarbeitung großer Datenmengen optimiert und besonders effektiv für die Navigation auf Karten mit vielen Straßennetzen.</li></ul> |  
| *GPX-Annäherung* (*nur Android*)  | <ul><li>Die **routingbasierte** GPX-Annäherung in **C++ und Java** verwendet Routendaten, um GPS-Tracks mit bestehenden Straßenrouten anzunähern, was die Track-Genauigkeit verbessert und die Track-Größe reduziert.</li><li>Die **geometriebasierte** GPX-Annäherung in **C++ und Java** arbeitet nach geometrischen Prinzipien, um GPS-Tracks schnell und genau anzunähern, was eine effiziente Verarbeitung großer Datenmengen ermöglicht.</li></ul> |
| *Auto-Zoom* | <ul><li>**Diskret** ermöglicht das Zoomen auf der Karte auf eine bestimmte Detailebene, die in wenigen diskreten Schritten gemessen wird.</li><li>**Stufenlos** sorgt für eine allmähliche Änderung des Kartenmaßstabs mit sanften Animationseffekten ohne Ruckeln oder Sprünge.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*nur Android*)  | Verwenden Sie [Live-Updates](../../personal/maps-resources.md#live-updates) während des Routings. Beachten Sie, dass wir empfehlen, diese Option nur zu Testzwecken zu verwenden.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [Live updates](../../personal/maps-resources.md#live-updates) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Sprachansagen {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> button* *(or <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Choose profile → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

Der erste Teil des Artikels *[Sprachansagen / Benachrichtigungen](./voice-navigation.md)* beschreibt detailliert, wie Sprachansagen eingerichtet werden.  

Audioanweisungen während der Navigation helfen Ihnen als Fahrer oder Fußgänger, Ihr Ziel zu erreichen, während Sie [eine ausgewählte Route navigieren](../setup/route-navigation.md). Sie enthalten Informationen über Abbiegungen, Fahrtrichtungen, Verkehrszeichen, Entfernungen zum Ziel und andere Faktoren, die Ihre Navigation beeinflussen können.  

Wenn Sie einen Track als Zielpunkt auswählen, müssen Sie die Option [An Straßen ausrichten](../setup/gpx-navigation.md#attach-to-the-roads) verwenden, damit die Sprachansagen korrekt funktionieren.

*Sprachansagen* ermöglichen es Ihnen, sich auf die Straße zu konzentrieren und nicht durch die Karte oder das Navigationsgerät abgelenkt zu werden. Sie verbessern auch die Fahrsicherheit, verkürzen die Zeit, die für die Navigation in unbekanntem Gelände benötigt wird, und können für verschiedene [Routentypen](../routing/osmand-routing.md#routing-types) nützlich sein.

Im Abschnitt **Ankündigen** können Sie auswählen, welche Arten von Benachrichtigungen während der Navigation abgespielt oder angezeigt werden sollen:

- **Abbiegeanweisungen** (nur Android) – ermöglicht das Aktivieren oder Deaktivieren standardmäßiger Navigationsanweisungen wie *„Links abbiegen“*, *„Rechts abbiegen“* oder *„In 200 Metern…“*. Wenn die Option deaktiviert ist, werden Abbiege- und Straßennamenansagen nicht bereitgestellt, während Benachrichtigungen für Wegpunkte, Benutzerpunkte und Routenereignisse aktiv bleiben. Dieser Modus ist für Aktivitäten wie Rafting, Wandern oder Radfahren entlang vorausaufgezeichneter Tracks gedacht, wenn nur Warnungen für manuell hinzugefügte Wegpunkte erforderlich sind.
- **Straßennamen(TTS)** – kündigt die Namen der Straßen entlang Ihrer Route an.
- **Ausfahrtnummer** – kündigt die Ausfahrtnummer an, wenn Sie auf Autobahnen fahren.
- **Verkehrswarnungen** – gibt Warnungen über wichtige Straßenereignisse wie Staus oder Beschränkungen.
- **Fußgängerüberwege** – warnt Sie, wenn Sie sich Fußgängerüberwegen nähern.
- **[Geschwindigkeitskameras](https://osmand.net/docs/user/navigation/guidance/voice-navigation#speed-cameras)**  – warnt vor Geschwindigkeitskamerastandorten (wo gesetzlich erlaubt).
- **Tunnel** – informiert Sie, wenn Sie in einen Tunnel fahren.


## Bildschirmwarnungen {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

Die Navigationseinstellung **Bildschirmwarnung** aktiviert das [**Warnungs-Widget**](../../widgets/nav-widgets.md#alert-widget). *Details:*

- Wenn Sie sich einem der unterstützten Hindernisse auf der Straße nähern, erscheinen Benachrichtigungen in der unteren linken Ecke der Karte.
- Wenn Sie die in der OsmAnd-App verfügbaren [*Sprach- und Textansagen*](../../navigation/guidance/voice-navigation.md) konfigurieren, wird Ihre Reise komfortabler und sicherer.
- Das Aussehen und der Zeitpunkt der Ansagen hängen von Ihren Geschwindigkeitseinstellungen ab. Sie finden diese [im Artikel](../../../technical/algorithms/voice-prompt-triggering.md).  
- Das Verhalten von *Bildschirmwarnungen* wird auch durch die Einstellung [Punkte entlang der Route anzeigen](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route) beeinflusst.

Sie können ***auswählen, welche Warnungen*** Sie während der Navigation auf dem App-Bildschirm sehen möchten:

- **Geschwindigkeitsbegrenzung** ([OSM Wiki Info](https://wiki.openstreetmap.org/wiki/Speed_limits)). In der Einstellung "Bildschirmwarnungen" wird die *Geschwindigkeitsbegrenzung* nur auf dem Bildschirm mit aktivierten *Verkehrswarnungen* angezeigt. Wenn Sie Geschwindigkeitsbegrenzungen während der Navigation ohne andere Warnungen sehen möchten, verwenden Sie das [Widget](../../widgets/nav-widgets.md#speed-limit).
- **Verkehrswarnungen** ([OSM Wiki Info](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Zusätzliche Informationen finden Sie im Artikel [Kartenbildschirm während der Navigation](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Fußgängerüberwege** ([OSM Wiki Info](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Geschwindigkeitskameras** ([OSM Wiki Info](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Weitere Informationen zur Einstellung "Geschwindigkeitskamera" in OsmAnd finden Sie unter [Warnungstypen](../../widgets/nav-widgets.md#alert-types) und im Artikel *Globale Einstellungen*, Abschnitt [Rechtliches](../../personal/global-settings.md#legal).
- **Tunnel** ([OSM Wiki Info](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Die Arten von Warnungen haben ein unterschiedliches visuelles Erscheinungsbild, das von der Reiseregion abhängt. OsmAnd zielt nicht darauf ab, 100% identische Verkehrszeichen darzustellen, weist aber auf einige Ähnlichkeiten hin.  
:::


## Karte während der Navigation {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

Die **Karte wird während der Navigation verwendet**, um Ihren Standort zu bestimmen, Ihre Route zu planen und sich im Gelände zu orientieren. Während der Navigation können Sie die Karte mit *automatischer Zentrierung* anzeigen, sie verschieben und *hinein- und herauszoomen*, um den gewünschten Bereich zu sehen. Die Karte kann auch Markierungen anzeigen, die auf Sehenswürdigkeiten, Routen, Wetterbedingungen, Verkehrszeichen und andere Objekte hinweisen, die Ihnen bei der Navigation helfen. Die Karte kann in *Echtzeit* aktualisiert werden und zeigt *aktuelle Informationen* an, die die Routenplanung beeinflussen können.

Wie sich das Verhalten der Karte während der Navigation ändert, erfahren Sie im Artikel [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md).  

## Routenlinie anpassen {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

Mit der Einstellung **Routenlinie anpassen** können Sie das Aussehen der Routenlinie wählen, die während der Navigation auf der Karte sichtbar sein wird. Sie können die *Farbe*, die *Breite der Linie* und die Anzeige der *Abbiegepfeile* darauf auswählen. Für jedes Profil können Sie eine andere Linienansicht wählen. Alle diese Parameter werden im Artikel *Kartenbildschirm während der Navigation* im Abschnitt [Aussehen der Routenlinie](../../navigation/guidance/map-during-navigation.md#route-line-appearance) ausführlich beschrieben.


## Fahrzeugparameter {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Um sicherzustellen, dass OsmAnd die optimalste Route berechnet, ist es entscheidend, die Parameter Ihres Fahrzeugs zu konfigurieren – einschließlich Geschwindigkeit, Abmessungen, Gewicht und Kraftstoffart. Dies ermöglicht der App, die Fahrzeit genau zu schätzen, Straßenbeschränkungen zu vermeiden und den Kraftstoffverbrauch zu verfolgen, wie in unserer vollständigen Anleitung zu [Fahrzeugparametern](./vehicle-parameters.md) erklärt.


## Detaillierte Track-Führung {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Attach to the roads 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Navigation Settings Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Detailed track guidance*

![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

Die Funktion **Detaillierte Track-Führung** verbessert die Genauigkeit der Routennavigation bei der Verwendung von **trackbasierten Routen**. Wenn Sie einen Track als Ziel auswählen, können Sie die Einstellung [An Straßen ausrichten](../setup/gpx-navigation.md#attach-to-the-roads) aus dem Menü [Track folgen](../setup/gpx-navigation.md#follow-track-options) aktivieren. Dadurch wird sichergestellt, dass der Track an bestehenden Straßen ausgerichtet ist, sodass die Navigation präzise Anweisungen zu Kreisverkehren, Abbiegungen, Geschwindigkeitsbegrenzungen, Abbiegespuren und Straßennamen für die Straßen liefert.

Es gibt zwei Optionen für die Verwendung der *Detaillierten Track-Führung*:

- **<Translate android="true" ids="ask_every_time"/>** (*Standardeinstellungen*) – Die Option *An Straßen ausrichten* wird jedes Mal im Abschnitt [Routendetails](../setup/route-details.md) angezeigt, wenn eine trackbasierte Route berechnet wird. Dies ermöglicht es Ihnen, für jede Navigationssitzung zu entscheiden, ob die Straßenausrichtung angewendet werden soll.

- **<Translate android="true" ids="shared_string_always"/>** – Der Prozess der Straßenausrichtung wird für jede *Navigation nach Track*-Route automatisch angewendet, ohne dass eine manuelle Bestätigung erforderlich ist.

Weitere Informationen zur Verwendung der trackbasierten Navigation finden Sie unter [Navigation nach Track](../setup/gpx-navigation.md).


## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routenvorbereitung](../setup/route-navigation.md)
- [Navigation nach Track](../setup/gpx-navigation.md)
- [Navigation nach Markern](../setup/markers-navigation.md)
- [Routendetails](../setup/route-details.md)
- [Kartenbildschirm während der Navigation](./map-during-navigation.md)
- [Sprachansagen / Benachrichtigungen](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)