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

## Deelnemen aan bèta {#join-beta}

iOS-bètaversies (TestFlight) worden meestal wekelijks geleverd (na een Team Sprint-demo). Ze bevatten geen beschrijvingen en kunnen doorlopende versies hebben. Ze worden als stabiel en gebruiksklaar beschouwd.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Deelnemen aan TestFlight</a>
</div>

<br/>


## Wat is er nieuw {#whats-new}

- **[CarPlay](https://osmand.net/docs/user/navigation/car-play)** is gratis voor alle gebruikers en krijgt nieuwe [instellingen](https://osmand.net/docs/user/navigation/car-play#settings) voor kaartoriëntatie en framerate, met Home met één tik beschikbaar in het Navigatiemenu.
- De **[gratis versie](https://osmand.net/docs/user/purchases/ios#free-and-paid-features)** bevat alle kaarten van één regio.
- Nieuwe **[coördinatenformaten](https://osmand.net/docs/user/search/search-coordinates#customize-coordinate-format)**, waaronder EPSG-systemen, Maidenhead-locator en Zwitsers coördinatenstelsel, met een primair formaat en een lijst met voorkeursformaten.
- Aparte **[widgetindelingen](https://osmand.net/docs/user/widgets/configure-screen#single-and-separate-layouts)** voor staand en liggend, plus **[Breed of Compact](https://osmand.net/docs/user/widgets/configure-screen#panels-layout)** bovenste en onderste panelen.
- Aanpasbaar **[uiterlijk van widgetpanelen](https://osmand.net/docs/user/widgets/configure-screen#widget-panel-appearance)** met widgetgrootte, pictogrammen en tekst- en achtergrondkleuren.
- Nieuwe instelling **[Scherm aan houden](https://osmand.net/docs/user/personal/profiles#appearance)** voor elk profiel: de systeemtime-out volgen, het scherm alleen tijdens navigatie aan houden, of het altijd aan houden.
- Labels van **[hoogtelijnen](https://osmand.net/docs/user/plugins/topography#contour-lines)** kunnen bergopwaarts gericht zijn, zoals op papieren topografische kaarten.
- Volledige uiterlijkinstellingen wanneer u **[meerdere Favorieten tegelijk wijzigt](https://osmand.net/docs/user/personal/favorites#bulk-edit--delete)**.
- **[Tussenbestemmingen](https://osmand.net/docs/user/navigation/setup/route-details#turn-by-turn-information)** verschijnen in de routedetails met hun nummer, naam en de afstand en tijd vanaf de start.


## Bugfixes {#bug-fixes}

- Een [probleem](https://github.com/osmandapp/OsmAnd-iOS/issues/5696) opgelost waarbij het legen van de prullenbak van OsmAnd Cloud verwijderde kaarten en Favorieten herstelde.
- [Hoogte die naar 0 zakte](https://github.com/osmandapp/OsmAnd-iOS/issues/5526) in tracks die op de achtergrond zijn opgenomen gecorrigeerd.
- [Synchronisatieconflicten van OsmAnd Cloud](https://github.com/osmandapp/OsmAnd-iOS/issues/5463) na het bijwerken van kaarten op meerdere apparaten opgelost.
- Voorkomen dat [Favorieten uit verborgen mappen](https://github.com/osmandapp/OsmAnd-iOS/issues/5558) in zoekresultaten verschijnen.
- Opgelost dat [Route plannen werd gesloten](https://github.com/osmandapp/OsmAnd-iOS/issues/5947) wanneer u op een track op de kaart tikt.
- [Reistijd voor voetgangers](https://github.com/osmandapp/OsmAnd-iOS/issues/5787) die voor autoroutes werd getoond na Aan wegen koppelen gecorrigeerd.
- Opgelost dat [waypoints die aan de opnametrack zijn toegevoegd](https://github.com/osmandapp/OsmAnd-iOS/issues/5893) niet op tikken reageerden.
- Het [knipperen van het waypointpictogram](https://github.com/osmandapp/OsmAnd-iOS/issues/2764) tijdens trackopname gestopt.

<!--
- Fixed map updates for mappers with Devanagari and Eastern Arabic numerals.
- Fixed the map zooming out when you add a Quick Action while moving.
- Fixed KML import creating an empty track.
-->

