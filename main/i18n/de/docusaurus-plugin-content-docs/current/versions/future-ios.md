---
source-hash: 767578704635d01030c776c1a29804d758e70785b56523fd818befdf7a58df10
sidebar_position: 5
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

# iOS 5.5 {#ios-55}

## Beta beitreten {#join-beta}

iOS-Beta-Builds (TestFlight) werden in der Regel wöchentlich (nach einer Team-Sprint-Demo) bereitgestellt. Sie enthalten keine Beschreibungen und können eine fortlaufende Versionsnummerierung aufweisen. Sie gelten als stabil und einsatzbereit.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">TestFlight beitreten</a>
</div>

<br/>


## Was ist neu {#whats-new}

- **[CarPlay](https://osmand.net/docs/user/navigation/car-play)** ist für alle Nutzer kostenlos und erhält neue [Einstellungen](https://osmand.net/docs/user/navigation/car-play#settings) für Kartenausrichtung und Bildrate, wobei Zuhause mit einem Tippen aus dem Navigationsmenü erreichbar ist.
- Die **[kostenlose Version](https://osmand.net/docs/user/purchases/ios#free-and-paid-features)** enthält alle Karten einer Region.
- Neue **[Koordinatenformate](https://osmand.net/docs/user/search/search-coordinates#customize-coordinate-format)**, darunter EPSG-Systeme, Maidenhead-Locator und Schweizer Gitter, mit einem Primärformat und einer Liste bevorzugter Formate.
- Getrennte **[Widget-Layouts](https://osmand.net/docs/user/widgets/configure-screen#single-and-separate-layouts)** für Hoch- und Querformat sowie **[breite oder kompakte](https://osmand.net/docs/user/widgets/configure-screen#panels-layout)** obere und untere Leisten.
- Anpassbares **[Erscheinungsbild der Widget-Leiste](https://osmand.net/docs/user/widgets/configure-screen#widget-panel-appearance)** mit Widget-Größe, Symbolen sowie Text- und Hintergrundfarben.
- Neue Einstellung **[Bildschirm anlassen](https://osmand.net/docs/user/personal/profiles#appearance)** für jedes Profil: dem System-Timeout folgen, den Bildschirm nur während der Navigation anlassen oder immer anlassen.
- Beschriftungen der **[Höhenlinien](https://osmand.net/docs/user/plugins/topography#contour-lines)** können bergauf ausgerichtet werden, wie auf topografischen Papierkarten.
- Vollständige Erscheinungseinstellungen, wenn Sie **[mehrere Favoriten gleichzeitig ändern](https://osmand.net/docs/user/personal/favorites#bulk-edit--delete)**.
- **[Zwischenziele](https://osmand.net/docs/user/navigation/setup/route-details#turn-by-turn-information)** erscheinen in den Routendetails mit Nummer, Name sowie Entfernung und Zeit ab dem Start.

## Fehlerbehebungen {#bug-fixes}

- Ein [Problem](https://github.com/osmandapp/OsmAnd-iOS/issues/5696) behoben, bei dem das Leeren des OsmAnd-Cloud-Papierkorbs gelöschte Karten und Favoriten wiederherstellte.
- [Höhe fällt auf 0](https://github.com/osmandapp/OsmAnd-iOS/issues/5526) in im Hintergrund aufgezeichneten Tracks korrigiert.
- [OsmAnd-Cloud-Synchronisationskonflikte](https://github.com/osmandapp/OsmAnd-iOS/issues/5463) nach der Aktualisierung von Karten auf mehreren Geräten behoben.
- Verhindert, dass [Favoriten aus ausgeblendeten Ordnern](https://github.com/osmandapp/OsmAnd-iOS/issues/5558) in den Suchergebnissen erscheinen.
- Das [Schließen von „Route planen“](https://github.com/osmandapp/OsmAnd-iOS/issues/5947) beim Tippen auf einen Track auf der Karte behoben.
- Die [Fußgänger-Reisezeit](https://github.com/osmandapp/OsmAnd-iOS/issues/5787), die nach „An Straßen anhängen“ für Autorouten angezeigt wurde, korrigiert.
- [Wegpunkte, die zum aufgezeichneten Track hinzugefügt wurden](https://github.com/osmandapp/OsmAnd-iOS/issues/5893) und nicht auf Tippen reagierten, behoben.
- Das [Blinken des Wegpunktsymbols](https://github.com/osmandapp/OsmAnd-iOS/issues/2764) während der Streckenaufzeichnung gestoppt.

<!--
- Fixed map updates for mappers with Devanagari and Eastern Arabic numerals.
- Fixed the map zooming out when you add a Quick Action while moving.
- Fixed KML import creating an empty track.
-->


