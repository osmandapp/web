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

## Partecipa alla Beta {#join-beta}

Le build beta di iOS (TestFlight) vengono solitamente fornite settimanalmente (dopo una demo dello Sprint del team). Non contengono descrizioni e possono avere una numerazione di versione continua. Si presume che siano stabili e pronte all'uso.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Partecipa a TestFlight</a>
</div>

<br/>


## Novità {#whats-new}

- **[CarPlay](https://osmand.net/docs/user/navigation/car-play)** è gratuito per tutti gli utenti e include nuove [impostazioni](https://osmand.net/docs/user/navigation/car-play#settings) per l'orientamento della mappa e la frequenza dei fotogrammi, con Casa disponibile con un solo tocco dal menu Navigazione.
- La **[versione gratuita](https://osmand.net/docs/user/purchases/ios#free-and-paid-features)** include tutte le mappe di una regione.
- Nuovi **[formati delle coordinate](https://osmand.net/docs/user/search/search-coordinates#customize-coordinate-format)**, inclusi i sistemi EPSG, il localizzatore Maidenhead e la griglia svizzera, con un formato principale e un elenco di formati preferiti.
- **[Layout dei widget](https://osmand.net/docs/user/widgets/configure-screen#single-and-separate-layouts)** separati per Verticale e Orizzontale, oltre ai pannelli superiore e inferiore **[Ampi o Compatti](https://osmand.net/docs/user/widgets/configure-screen#panels-layout)**.
- **[Aspetto del pannello dei widget](https://osmand.net/docs/user/widgets/configure-screen#widget-panel-appearance)** personalizzabile con dimensione dei widget, icone e colori del testo e dello sfondo.
- Nuova impostazione **[Mantieni schermo acceso](https://osmand.net/docs/user/personal/profiles#appearance)** per ogni profilo: segui il timeout di sistema, mantieni lo schermo acceso solo durante la navigazione oppure sempre acceso.
- Le etichette delle **[curve di livello](https://osmand.net/docs/user/plugins/topography#contour-lines)** possono essere orientate verso monte, come nelle mappe topografiche cartacee.
- Impostazioni complete dell'aspetto quando **[modifichi più Preferiti](https://osmand.net/docs/user/personal/favorites#bulk-edit--delete)** contemporaneamente.
- Le **[destinazioni intermedie](https://osmand.net/docs/user/navigation/setup/route-details#turn-by-turn-information)** compaiono nei dettagli del percorso con numero, nome, distanza e tempo dalla partenza.

## Correzioni di bug {#bug-fixes}

- Risolto un [problema](https://github.com/osmandapp/OsmAnd-iOS/issues/5696) per cui lo svuotamento del cestino di OsmAnd Cloud ripristinava mappe e Preferiti eliminati.
- Corretta l'[elevazione che scendeva a 0](https://github.com/osmandapp/OsmAnd-iOS/issues/5526) nelle tracce registrate in background.
- Risolti i [conflitti di sincronizzazione di OsmAnd Cloud](https://github.com/osmandapp/OsmAnd-iOS/issues/5463) dopo l'aggiornamento delle mappe su più dispositivi.
- Impedito che i [Preferiti delle cartelle nascoste](https://github.com/osmandapp/OsmAnd-iOS/issues/5558) comparissero nei risultati di ricerca.
- Risolta la [chiusura di Pianifica un percorso](https://github.com/osmandapp/OsmAnd-iOS/issues/5947) quando tocchi una traccia sulla mappa.
- Corretto il [tempo di percorrenza a piedi](https://github.com/osmandapp/OsmAnd-iOS/issues/5787) mostrato per i percorsi in auto dopo Aggancia alle strade.
- Risolto il problema dei [waypoint aggiunti alla traccia in registrazione](https://github.com/osmandapp/OsmAnd-iOS/issues/5893) che non rispondevano ai tocchi.
- Eliminato il [lampeggio dell'icona del waypoint](https://github.com/osmandapp/OsmAnd-iOS/issues/2764) durante la registrazione della traccia.

<!--
- Fixed map updates for mappers with Devanagari and Eastern Arabic numerals.
- Fixed the map zooming out when you add a Quick Action while moving.
- Fixed KML import creating an empty track.
-->