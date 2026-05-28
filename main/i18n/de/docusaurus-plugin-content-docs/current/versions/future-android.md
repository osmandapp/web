---
source-hash: 99f4f132ee5c0b6fd48949f2e16d91c53267fa3ebef0498549f074e425034b5d
sidebar_position: 4
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


# Android 5.4 {#android-54}



## Beta beitreten {#join-beta}

OsmAnd veröffentlicht täglich mehrere gebrauchsfertige Builds, die es Ihnen ermöglichen, neue Funktionen zu verfolgen und am OsmAnd-Übersetzungsprozess teilzunehmen. Sie können an der Testversion von OsmAnd über Google Play teilnehmen.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Was ist neu? {#whats-new}

- Verbesserte **[Favoriten](https://osmand.net/docs/user/personal/favorites)** mit Unterstützung für Medienanhänge (Fotos, Audio und Video) und verbesserter Integration von Audio-/Video-Notizen.
- Verbesserte **[Navigations-Widgets](https://osmand.net/docs/user/widgets/nav-widgets)** mit flexiblerer Größen- und Layout-Anpassung für unterschiedliche Bildschirmdichten und -ausrichtungen.
- Kartenlegende zu **[Karte konfigurieren](https://osmand.net/docs/user/map/configure-map-menu)** hinzugefügt, um Routentypen und Kartenelemente besser zu verstehen.
- Verbesserte Routenfilterung und visuelle Steuerung in **[Karte konfigurieren](https://osmand.net/docs/user/map/configure-map-menu)**, einschließlich Routenklassifizierungen und Prioritäten.
- Verbesserte Track-Analyse mit neuen Diagrammtypen und detaillierteren Daten wie Oberfläche, Straßentyp und Steigung.
- Verbesserte Track-Verwaltung mit Vorschauen und verbesserter Organisation in **[Meine Orte](https://osmand.net/docs/user/personal/myplaces)**.
- Automatische Sicherung und zuverlässigere Synchronisation von Benutzerdaten in **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)**, einschließlich **[Smart Folders](https://osmand.net/docs/user/personal/tracks/smart-folder)**.
- Erste nautische Navigationsverbesserungen mit AIS-Erweiterungen und zusätzlichen Navigationsparametern und Widgets.
- Verbessertes **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**-Erlebnis mit verbesserter Suche und Navigationssteuerung.
- Möglichkeit zur Interaktion mit der Karte auf **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** hinzugefügt, einschließlich direkter Punktauswahl.
- Überarbeitetes **[Höhen-Widget](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)** mit detaillierteren Höheninformationen zur Route.

<!--
- New experimental **[Astronomy plugin](https://osmand.net/docs/user/plugins/astronomy)** with an astronomical overlay showing the paths of the Sun, planets and stars.
- Improved **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** section with clearer backup, version history and automatic backup settings.
- Updated **[Configure map](https://osmand.net/docs/user/map/configure-map-menu)** options with a clearer legend and improved filters for hiking, cycling and MTB routes.
- New and redesigned elevation and navigation widgets with elevation profiles, uphill/downhill metrics and average grade.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** improvements with extended widget support and better OBD II integration.
- More flexible **[widget and map button layout](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, especially in landscape mode.
- Enhanced Favorites management in **[My Places](https://osmand.net/docs/user/personal/myplaces)**.
- Smarter track organization with Smart Folders and clearer summary statistics.
- Advanced route and track analysis.
- Improved accessibility features, including more flexible audio and haptic navigation feedback.
- Initial groundwork for smartwatch integration for navigation and trip recording data.
-->


## Fehlerbehebungen {#bug-fixes}

- Ein [Problem](https://github.com/osmandapp/OsmAnd/issues/16507) behoben, bei dem Favoriteneigenschaften (Farbe, Symbol, Form) beim Ändern der Gruppe nicht aktualisiert wurden.
- [Falsche Ausfahrtsrichtungen](https://github.com/osmandapp/OsmAnd/issues/23104) an Kreisverkehren in Android Auto behoben.
- Ungenaue [Aufstiegs- und Abstiegswerte](https://github.com/osmandapp/OsmAnd/issues/20624) in Höhen-Widgets korrigiert.
- Verhindert, dass [ausgeblendete Favoriten](https://github.com/osmandapp/OsmAnd/issues/24689) auf der Karte wieder erscheinen, wenn Track-Wegpunkte zu einem Ordner hinzugefügt werden.
- [Inkonsistenzen zwischen Diagrammen](https://github.com/osmandapp/OsmAnd/issues/24712) auf dem Detailbildschirm behoben.
- Ein [Problem](https://github.com/osmandapp/OsmAnd/issues/24791) behoben, bei dem nicht angeheftete Favoritenordner nach einem Neustart der App wieder angeheftet erschienen.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->