---
source-hash: 2da53a8aa242bb195e58636b6ecf74b3bda942f80025c592da823faa4061ce50
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


# Android 5.5 {#android-55}



## Beta beitreten {#join-beta}

OsmAnd veröffentlicht täglich mehrere gebrauchsfertige Builds, die es Ihnen ermöglichen, neue Funktionen zu verfolgen und am OsmAnd-Übersetzungsprozess teilzunehmen. Sie können an der Testversion von OsmAnd über Google Play teilnehmen.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Was ist neu? {#whats-new}

- Die **[räumliche Suche](https://osmand.net/blog/offline-search-video)** ist standardmäßig aktiviert, mit genauerer Rangfolge, Synonymen und Korrekturvorschlägen bei falsch geschriebenen Wörtern.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** ist für alle Nutzer kostenlos und erhält [Vorschläge aus letzten Zielen](https://osmand.net/docs/user/navigation/auto-car#dashboard-suggestions), automatische [Freie Fahrt](https://osmand.net/docs/user/navigation/auto-car#destination-points) während der Fahrt sowie Unterstützung für [Google Assistant und Gemini](https://osmand.net/docs/user/navigation/auto-car#voice-control).
- Die **[kostenlose Version](https://osmand.net/docs/user/purchases/android#free-and-paid-features)** enthält alle Karten einer Region.
- Neues **Panoramax-Plugin** mit Straßenansichten als Kartenebene, filterbar nach Beitragendem, Datum und Typ.
- Realistische **[Sonnenschatten](https://osmand.net/docs/user/plugins/topography#sun-position)** von 3D-Gebäuden und Gelände sowie einstellbare **[Geländeschatten](https://osmand.net/docs/user/plugins/topography#terrain-shadows-android)** für 3D-Relief.
- Medienbibliothek in **[Meine Orte](https://osmand.net/docs/user/personal/myplaces)**, die Ihre Fotos, Videos und Audio-Notizen an einem Ort sammelt.
- Gestrichelte und gepunktete Linien im **[Track-Erscheinungsbild](https://osmand.net/docs/user/map/tracks/appearance#track-appearance-settings)**, auch als Standarderscheinungsbild eines Ordners verfügbar.
- Neue Einstellungen für die Reisegeschwindigkeit mit einem Geschwindigkeitsbereich für die Routenberechnung und einer Ankunftszeit, die auf Ihrer tatsächlichen Geschwindigkeit basiert, in den **[Fahrzeugparametern](https://osmand.net/docs/user/navigation/guidance/vehicle-parameters#default-speed)**.
- Neue **[Schnellaktion](https://osmand.net/docs/user/widgets/quick-action#my-places)**, um einen oder mehrere Tracks mit einem Tippen ein- oder auszublenden.
- Beschriftungen der **[Höhenlinien](https://osmand.net/docs/user/plugins/topography#contour-lines)** können bergauf ausgerichtet werden, wie auf topografischen Papierkarten.
- Unterstützung für BLE-Leistungsmesser in **[Externe Sensoren](https://osmand.net/docs/user/plugins/external-sensors#pair-new-sensor)**.

<!--
- Navigation settings included in route links.
- The trip recording "Notification" option is renamed to "Start from notification" to make clear it only adds a start button.
-->


## Fehlerbehebungen {#bug-fixes}

- Ein [Problem](https://github.com/osmandapp/OsmAnd/issues/24228) behoben, bei dem das Leeren des OsmAnd-Cloud-Papierkorbs gelöschte Daten wiederherstellte.
- [Ansagen zur Routenneuberechnung](https://github.com/osmandapp/OsmAnd/issues/25544) korrigiert, die nicht zur tatsächlichen Abweichung von der Route passten.
- Den [um 180° falsch ausgerichteten Kompass](https://github.com/osmandapp/OsmAnd/issues/26147) im umgekehrten Hochformat behoben.
- [Stopps mit Geschwindigkeit null](https://github.com/osmandapp/OsmAnd/issues/26351) in Geschwindigkeitsdiagrammen wiederhergestellt.
- Das [Verschwinden der Start-Schaltfläche](https://github.com/osmandapp/OsmAnd/issues/26305) bei der Streckenaufzeichnung mit großer Schrift- oder Anzeigegröße behoben.
- Verhindert, dass das [Track-Erscheinungsbild](https://github.com/osmandapp/OsmAnd/issues/25686) nach der Cloud-Synchronisation unangewendet bleibt.
- [OSMC-Symbole](https://github.com/osmandapp/OsmAnd/issues/26148) in der Liste „Was ist hier“ wiederhergestellt, die sich beim Tippen auf überlappende Routenschilder öffnet.
- [Sonnenfinsternis-Zeiten](https://github.com/osmandapp/OsmAnd/issues/25830) aktualisiert, sodass Ortszeiten statt weltweiter Zeiten angezeigt werden.

<!--
- Fixed the parking position marker not showing when Favorites are hidden.
- Fixed imported Favorites going to the wrong folder.
-->


