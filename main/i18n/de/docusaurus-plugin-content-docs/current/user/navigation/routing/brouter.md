---
source-hash: 7669ebc684d82d59a895a98d5dc83c05fad8cf9113b076ddb5dd9660c461ce5e
sidebar_position: 12
title: BRouter
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




## Übersicht {#overview}

:::caution NUR ANDROID
Der Routing-Algorithmus BRouter eines Drittanbieters ist nur für die Android-Version der OsmAnd-App verfügbar.
:::

*BRouter* ist ein Routing-Algorithmus eines Drittanbieters, der in der OsmAnd-App für den [Offline-Navigationsmodus](../guidance/navigation-settings.md#navigation-type) verwendet werden kann. Er wurde entwickelt, um eine Route basierend auf verschiedenen Parametern wie Zeit, Entfernung oder Fahrzeugtyp zu optimieren.

[BRouter](http://brouter.de/) verwendet OpenStreetMap Daten, um eine Route zu erstellen, und passt diese dann basierend auf den angegebenen Parametern an. Es verwendet vorab berechnete Routen, um schnell eine Route offline zu erstellen. Es ermöglicht Ihnen auch, Routing-Profile anzupassen, die durch eine Reihe von Parametern definiert werden, um verschiedene Faktoren bei der Routenauswahl zu berücksichtigen. Die Datei [BRouter readme.txt](http://brouter.de/brouter/readme.txt) erklärt detaillierter, wie das Programm installiert und verwendet wird.

OsmAnd bietet Ihnen die Möglichkeit, Routen mit BRouter auszuwählen und Routing-Profile zu konfigurieren, um die Route besser an Ihre Bedürfnisse anzupassen.

Weitere Informationen finden Sie auf der offiziellen [Brouter-Website](http://www.brouter.de/brouter/algorithm.html).

Die BRouter-Integration in OsmAnd hat sich im Sommer 2019 stark verändert. Diese Anleitung geht davon aus, dass Sie die BRouter Android-App in Version 1.5.0 oder höher sowie OsmAnd in Version 3.4 oder höher verwenden.

:::note
Der Routing-Algorithmus BRouter eines Drittanbieters ist nur für die Android-Version der OsmAnd-App verfügbar.
:::


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## Konfiguration {#how-to-configure}

Befolgen Sie diese Anleitung zur Installation und Konfiguration der Drittanbieter-Anwendung *BRouter Offline Navigation* zur Verwendung in OsmAnd.

**1.** Zuerst müssen Sie die BRouter-App auf Ihrem Android-Gerät von [F-Droid](https://f-droid.org/packages/btools.routingapp) oder dem [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) installieren.
**2.** Um dann mit der OsmAnd-App entlang vorab berechneter Routen mit BRouter zu navigieren, müssen Sie:


  - Öffnen Sie die BRouter-Anwendung und tippen Sie auf *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - Zoomen Sie hinein und wählen Sie die Bereiche aus, in denen Sie Routen erstellen möchten. Klicken Sie dann auf "Download starten" und BRouter beginnt mit dem Herunterladen der [Segmentdateien](http://brouter.de/brouter/segments4/) für die ausgewählten Bereiche.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table>

**Beachten Sie**, dass Sie diesen Schritt regelmäßig wiederholen müssen, wenn Sie eine aktualisierte Version der für das Routing verwendeten OSM Daten haben möchten.

**3.** Sobald dies erledigt ist, starten Sie die BRouter-App erneut und wählen Sie im *Hauptmenü* den Eintrag "BRouter App". Wählen Sie ein Routing-Profil je nach Ihrer Reiseart. Dies kann Radfahren, Moped, Wandern oder Trekking sein. Eine Liste der verfügbaren Profile zum Download im *brf*-Format finden Sie [hier](http://brouter.de/brouter/profiles2/). Oder Sie können versuchen, das Routing-Profil in [BRouter-online](http://brouter.de/brouter-web/) zu verwenden.
Klicken Sie auf "Service-Modus". Aktivieren Sie dann die Kontrollkästchen für die Routing-Modi, für die Sie dieses Profil verwenden möchten. Sie können zwei verschiedene Profile pro Transportmodus verwenden, die den Voreinstellungen "kürzeste" und "schnellste" (dies sind nur Bezeichnungen) in OsmAnd zugeordnet werden.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>

**4.** Wenn Sie zuvor Segmente geladen haben, werden diese auf der BRouter Karte angezeigt. Die Segmente haben vier Zustände:

- *"Grünes"* Quadrat - Ausgewähltes neues Segment zum Herunterladen.
- *"Blaues"* Quadrat - Das Segment mit aktualisierten Daten.
- *"Graues"* Quadrat - Das Segment ist bereits heruntergeladen, muss aber aktualisiert werden.
- *"Gelbes"* Quadrat - Das Segment wird aktualisiert.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Wenn Sie die benötigten Kartensegmente mit BRouter geladen und ein Routing-Profil darin ausgewählt haben, werden alle weiteren Einstellungen dieser Art der Navigation in der OsmAnd-Anwendung vorgenommen.

**6.** Sie können in OsmAnd ein "Anwendungsprofil" erstellen, das BRouter für das Offline-Routing verwendet.
Verwenden Sie den Routing-Typ *BRouter (offline)* mit einem beliebigen [Profil](../../personal/profiles.md) in der OsmAnd-App. Gehen Sie dazu zum Hauptmenü *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* und erstellen Sie ein neues Profil basierend auf dem Basisprofil Ihrer Wahl (hier Radfahren, für Fahrrad-Routing), mit einem benutzerdefinierten Namen Ihrer Wahl ("BRouter" auf dem Screenshot unten) und unter Verwendung von "BRouter (offline)" für die Navigation.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

Die BRouter-App sollte vor OsmAnd gestartet werden, damit dieser spezifische Eintrag in OsmAnd erscheint. Wenn Sie die Navigationsoption "BRouter (offline)" nicht finden können, sollten Sie OsmAnd zwangsweise beenden und neu starten.

## OsmAnd Version 4.7.1 {#osmand-version-471}

Ab Version 4.7.1 unterstützt Osmand den Profilparameter für die Zuordnung: Seit Osmand Version 3 können viele Profile in Osmand definiert werden und Sie können einfach zwischen diesen Profilen wechseln. Ein neues Profil sollte erstellt werden, z. B. durch Kopieren des vorhandenen *Radfahr*-Profils und Benennung im Format Brouter[fastbike]. Sie können jedes der vorhandenen BRouter-Profile im Namen verwenden, die auf Ihrem Gerät installiert sind. Alle Profildateien haben das Namensformat 'xxxxxxx.brf'. Oder Sie können ein neues eigenes Profil erstellen, z. B. 'myprofile.brf'.

Die Namenskonvention im OsmAnd-Profil ist wichtig, da das in diesem Profil enthaltene BRouter-Profil die eigentliche Brücke zwischen OsmAnd und BRouter herstellt.

- Wenn in Osmand ein Profil *BRouter* als Navigationsdienst definiert hat
- UND der Profilname wie "Brouter[mystring]" aussieht

Dann wird das Profil "mystring" in der Brouter-App verwendet. Diese neue Zuordnung ersetzt in diesem Fall die oben definierte Basiszuordnung, die auf der Datei "serviceconfig.dat" basiert.

### Beispiele: Osmand-Profilname Brouter-App {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] "trekking" Profil wird verwendet Datei: trekking.brf
Brouter[fastbike] "fastbike" Profil wird verwendet Datei: fastbike.brf
....
```

Anmerkung:
Derzeit prüft Osmand den definierten Namen (Groß-/Kleinschreibung) für das Brouter-Profil (mystring) nicht.
Wenn kein Profil gefunden wird, schlägt das Routing mit "Route konnte nicht berechnet werden.." fehl.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Verwendung {#how-to-use}

Dieser Abschnitt beschreibt einen Vergleich von BRouter mit dem internen Routing der OsmAnd-Anwendung.

Wenn BRouter konfiguriert ist, können wir die Vorberechnungsgeschwindigkeit der BRouter-Routing Daten mit dem internen OsmAnd-Routing vergleichen. Wählen wir zwei zufällige Punkte in den Niederlanden und beginnen wir mit der Berechnung der Fahrt. Dazu stellen wir einen ausgewogenen Fahrstil ohne Verwendung von Höhendaten für das Basisprofil ein. Die Berechnungszeit für diese Fahrt beträgt 14,5 Sekunden für unsere interne OsmAnd-Route. Die Routenberechnungszeit bei Verwendung von BRouter-Routing beträgt weniger als 1 Sekunde.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>


## Routenparameter {#route-parameters}

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| Parameter | Beschreibung | Hinweis |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> <Translate android="true" ids="fast_route_mode_descr"/> | In den meisten Fällen wird die kürzeste Route vorgeschlagen. Oft kann diese Route länger dauern, als wenn die Einstellung deaktiviert wäre |
| *<Translate android="true" ids="temporary_conditional_routing"/>* | Lesen Sie mehr über die Option Temporäre Einschränkungen berücksichtigen in diesem [Artikel](../routing/osmand-routing.md#consider-temporary-limitations). | Der Routing-Algorithmus berücksichtigt die in OpenStreetMap angegebenen Zeitbeschränkungen. Beachten Sie, dass die Informationen aus der OSM in einigen Fällen veraltet sein können. |


### Weitere Routing Einstellungen {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navigation → Einstellungen*, [Bild](../routing/online-routing.md#online-routing-setting)). Wenn diese Option aktiviert ist, fügt OsmAnd zwei Segmente zum berechneten Brouter-Track hinzu: eines von *[Mein Standort](../../map/interact-with-map.md#my-location-and-zoom)* zum Startpunkt des Tracks und ein weiteres vom Ende des Tracks zum Endpunkt Ihrer Route. Diese Option ist aktiv, wenn die Entfernung zum oder vom Track 60 Meter überschreitet.

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie Optionen zur Routenneuberechnung aktivieren und anpassen.

- Im Abschnitt [*Entwicklung*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.

> *Zuletzt aktualisiert: Juni 2024*