---
source-hash: 54f960139673d7e63928d90ee9d92e56a29e0041c46723da9fc302c0ac415a0a
sidebar_position: 12
title:  BRouter
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

:::caution NUR FÜR ANDROID
Der Routing-Algorithmus BRouter von Drittanbietern ist nur für die Android-Version der OsmAnd-App verfügbar.
:::

*BRouter* ist ein Routing-Algorithmus von Drittanbietern, der in der OsmAnd-App für den [Offline-Navigationsmodus](../guidance/navigation-settings.md#navigation-type) verwendet werden kann. Er ist darauf ausgelegt, eine Route basierend auf verschiedenen Parametern wie Zeit, Entfernung oder Fahrzeugtyp zu optimieren.

[BRouter](http://brouter.de/) verwendet OpenStreetMap-Daten, um eine Route zu erstellen, und passt sie dann basierend auf den angegebenen Parametern an. Er verwendet vorausberechnete Routen, um schnell eine Route offline zu erstellen. Er ermöglicht auch die Anpassung von Routing-Profilen, die durch eine Reihe von Parametern definiert sind, um verschiedene Faktoren bei der Routenauswahl zu berücksichtigen. Die [BRouter readme.txt](http://brouter.de/brouter/readme.txt) Datei erklärt detaillierter, wie das Programm installiert und verwendet wird.

OsmAnd bietet Ihnen die Möglichkeit, Routen mit BRouter auszuwählen und Routing-Profile zu konfigurieren, um die Route besser an Ihre Bedürfnisse anzupassen.

Für weitere Informationen können Sie die offizielle [BRouter-Webseite](http://www.brouter.de/brouter/algorithm.html) besuchen.

Die BRouter-Integration in OsmAnd hat sich im Sommer 2019 stark verändert. Diese Anleitung geht davon aus, dass Sie die BRouter Android-App in Version 1.5.0 oder höher sowie OsmAnd in Version 3.4 oder höher verwenden.

:::note
Der Routing-Algorithmus BRouter von Drittanbietern ist nur für die Android-Version der OsmAnd-App verfügbar.
:::  


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## Wie man konfiguriert {#how-to-configure}

Folgen Sie dieser Anleitung, um die Drittanbieter-Anwendung *BRouter Offline Navigation* für die Verwendung in OsmAnd zu installieren und zu konfigurieren.

**1.** Zuerst müssen Sie die BRouter-App auf Ihrem Android-Gerät aus dem [F-Droid](https://f-droid.org/packages/btools.routingapp) oder dem [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) installieren.
**2.** Um dann mit der OsmAnd-App entlang vorausberechneter Routen mit BRouter zu navigieren, müssen Sie:


  - die BRouter-Anwendung öffnen und auf *Download-Manager* tippen.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - Vergrößern Sie die Ansicht und wählen Sie die Gebiete aus, in denen Sie Routen erstellen möchten. Klicken Sie dann auf „Download starten“ und BRouter beginnt mit dem Herunterladen der [Segmente](http://brouter.de/brouter/segments4/) Dateien für die ausgewählten Gebiete.

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

**Hinweis**: Sie müssen diesen Schritt regelmäßig wiederholen, wann immer Sie eine aktualisierte Version der OSM-Daten für das Routing verwenden möchten.

**3.** Sobald dies erledigt ist, starten Sie die BRouter-App erneut und wählen Sie den Eintrag „BRouter App“ im *Hauptmenü*. Wählen Sie ein Routing-Profil je nach Ihrer Fortbewegungsart. Dies kann Radfahren, Moped, Wandern oder Trekking sein. Eine Liste der verfügbaren Profile zum Herunterladen im *brf*-Format finden Sie [hier](http://brouter.de/brouter/profiles2/). Oder Sie können versuchen, das Routing-Profil in [BRouter-online](http://brouter.de/brouter-web/) zu verwenden.
Klicken Sie auf „Service-Modus“. Aktivieren Sie dann die Kontrollkästchen für die Routing-Modi, für die Sie dieses Profil verwenden möchten. Sie können zwei verschiedene Profile pro Fortbewegungsart verwenden, die den Voreinstellungen „kürzeste“ und „schnellste“ (dies sind nur Bezeichnungen) in OsmAnd zugeordnet werden.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>  

**4.** Wenn Sie bereits Segmente geladen haben, werden diese auf der BRouter-Karte angezeigt. Die Segmente haben vier Zustände:

- *„Grünes“* Quadrat - Ausgewähltes neues Segment zum Herunterladen.
- *„Blaues“* Quadrat - Das Segment mit aktualisierten Daten.
- *„Graues“* Quadrat - Das Segment ist bereits heruntergeladen, muss aber aktualisiert werden.
- *„Gelbes“* Quadrat - Das Segment wird gerade aktualisiert.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Wenn Sie die erforderlichen Kartensegmente mit BRouter geladen und ein Routing-Profil darin ausgewählt haben, werden alle weiteren Einstellungen dieser Navigationsart in der OsmAnd-Anwendung vorgenommen.

**6.** Sie können ein „Anwendungsprofil“ in OsmAnd erstellen, das BRouter für das Offline-Routing verwendet.
Verwenden Sie den Routing-Typ *BRouter (offline)* mit einem beliebigen [Profil](../../personal/profiles.md) in der OsmAnd-App. Gehen Sie dazu zum Hauptmenü *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* und erstellen Sie ein neues Profil basierend auf dem Basisprofil Ihrer Wahl (hier Radfahren, für Fahrrad-Routing), mit einem benutzerdefinierten Namen Ihrer Wahl („BRouter“ im Screenshot unten) und unter Verwendung von „BRouter (offline)“ für die Navigation.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

Die BRouter-App sollte vor OsmAnd gestartet werden, damit dieser spezifische Eintrag in OsmAnd erscheint. Wenn Sie also die Navigationsoption „BRouter (offline)“ nicht finden können, sollten Sie OsmAnd zwangsbeenden und neu starten.

## OsmAnd Version 4.7.1 {#osmand-version-471}

Ab Version 4.7.1 unterstützt OsmAnd den Profilparameter für die Zuordnung: Seit OsmAnd Version 3 können viele Profile in OsmAnd definiert werden, und Sie können einfach zwischen diesen Profilen wechseln. Ein neues Profil sollte erstellt werden, zum Beispiel durch Kopieren des bestehenden *Radfahren*-Profils und Vergabe eines neuen Namens im Format Brouter[fastbike]. Sie können jeden der bestehenden BRouter-Profilnamen verwenden, die auf Ihrem Gerät installiert sind. Alle Profildateien haben das Namensformat 'xxxxxxx.brf'. Oder Sie könnten ein eigenes neues Profil erstellen, wie z.B. 'meinprofil.brf'.

Die Namenskonvention im OsmAnd-Profil ist wichtig, da das darin enthaltene BRouter-Profil die eigentliche Brücke zwischen OsmAnd und BRouter herstellt.

- Wenn in OsmAnd ein Profil *BRouter* als Navigationsdienst definiert hat
- UND der Profilname wie „Brouter[meinezeichenfolge]“ aussieht

Dann wird das Profil „meinezeichenfolge“ in der BRouter-App verwendet. Diese neue Zuordnung ersetzt in diesem Fall die oben definierte grundlegende Zuordnung, die auf der Datei „serviceconfig.dat“ basiert.

### Beispiele: OsmAnd-Profilname BRouter-App {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] "trekking" Profil wird verwendet Datei: trekking.brf
Brouter[fastbike] "fastbike" Profil wird verwendet Datei: fastbike.brf
....
```

Anmerkung:
Derzeit prüft OsmAnd den definierten Namen (Groß-/Kleinschreibung beachten) für das BRouter-Profil (meinezeichenfolge) nicht.
Wenn kein Profil gefunden wird, schlägt das Routing mit „Route konnte nicht berechnet werden..“ fehl.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Wie man es benutzt {#how-to-use}

Dieser Abschnitt beschreibt einen Vergleich von BRouter mit dem internen Routing der OsmAnd-Anwendung.

Wenn BRouter konfiguriert ist, können wir die Vorausberechnungsgeschwindigkeit der BRouter-Routingdaten mit dem internen OsmAnd-Routing vergleichen. Wählen wir zwei zufällige Punkte in den Niederlanden und starten die Berechnung der Fahrt. Dafür stellen wir einen ausgewogenen Fahrstil ohne Verwendung von Höhendaten für das Basisprofil ein. Die Berechnungszeit für diese Fahrt beträgt 14,5 Sekunden für unsere interne OsmAnd-Route. Die Routenberechnungszeit bei Verwendung des BRouter-Routings beträgt weniger als 1 Sekunde.

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
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/>  <Translate android="true" ids="fast_route_mode_descr"/> | In den meisten Fällen wird die kürzeste Route vorgeschlagen. Oft kann diese Route länger dauern, als wenn die Einstellung deaktiviert wäre |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Lesen Sie mehr über die Option „Temporäre Einschränkungen berücksichtigen“ in diesem [Artikel](../routing/osmand-routing.md#consider-temporary-limitations).   | Der Routing-Algorithmus berücksichtigt die in OpenStreetMap angegebenen Zeitbeschränkungen. Beachten Sie, dass die Informationen aus OSM in einigen Fällen veraltet sein können.   |


### Andere Routing-Einstellungen {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navigation → Einstellungen*, [Bild](../routing/online-routing.md#online-routing-setting)). Wenn diese Option aktiviert ist, fügt OsmAnd dem berechneten BRouter-Track zwei Segmente hinzu: eines von *[Mein Standort](../../map/interact-with-map.md#my-location-and-zoom)* zum Startpunkt des Tracks und ein weiteres vom Ende des Tracks zum Zielpunkt Ihrer Route. Diese Option ist aktiv, wenn die Entfernung zum oder vom Track 60 Meter überschreitet.

- Im Abschnitt [*Route neu berechnen*](../../navigation/guidance/navigation-settings.md#recalculate-route) der *Routenparameter* können Sie die Optionen zur Routenneuberechnung aktivieren und anpassen.

- Im Abschnitt [*Entwicklung*](../guidance/navigation-settings.md#development-settings) der *Routenparameter* können Sie neue Routing-Funktionen ausprobieren, die sich derzeit in der Testphase befinden. Beachten Sie, dass diese Einstellungen nur verfügbar sind, wenn das [OsmAnd-Entwicklungs-Plugin](../../plugins/development.md) aktiviert ist.