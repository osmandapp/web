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



## Partecipa alla Beta {#join-beta}

OsmAnd releases several Ready-To-Use builds daily, allowing you to track new features and participate in the OsmAnd translation process. You can take part in testing the beta version of OsmAnd using Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Novità {#whats-new}

- Migliorati i **[Preferiti](https://osmand.net/docs/user/personal/favorites)** con il supporto per allegati multimediali (foto, audio e video) e una migliore integrazione delle note audio/video.
- Migliorati i **[widget di navigazione](https://osmand.net/docs/user/widgets/nav-widgets)** con dimensioni più flessibili e adattamento del layout su diverse densità e orientamenti dello schermo.
- Aggiunta la legenda della mappa in **[Configura mappa](https://osmand.net/docs/user/map/configure-map-menu)** per una migliore comprensione dei tipi di percorso e degli elementi della mappa.
- Migliorato il filtraggio dei percorsi e il controllo visivo in **[Configura mappa](https://osmand.net/docs/user/map/configure-map-menu)**, inclusi le classificazioni e le priorità dei percorsi.
- Migliorata l'analisi delle tracce con nuovi tipi di grafici e dati più dettagliati come superficie, tipo di strada e pendenza.
- Gestione avanzata delle tracce con anteprime e organizzazione migliorata in **[I miei luoghi](https://osmand.net/docs/user/personal/myplaces)**.
- Backup automatico e sincronizzazione più affidabile dei dati utente in **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)**, inclusi **[Cartelle Smart](https://osmand.net/docs/user/personal/tracks/smart-folder)**.
- Miglioramenti iniziali alla navigazione nautica con miglioramenti AIS e parametri e widget di navigazione aggiuntivi.
- Esperienza migliorata su **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** con ricerca e controlli di navigazione migliorati.
- Aggiunta la possibilità di interagire con la mappa su **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**, inclusa la selezione diretta dei punti.
- Ridisegnato il **[widget di elevazione](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)** con informazioni più dettagliate sull'elevazione del percorso.

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


## Correzioni di bug {#bug-fixes}

- Risolto un [problema](https://github.com/osmandapp/OsmAnd/issues/16507) per cui le proprietà dei preferiti (colore, icona, forma) non venivano aggiornate quando si cambiava il relativo gruppo.
- Corrette le [direzioni di uscita errate](https://github.com/osmandapp/OsmAnd/issues/23104) mostrate sulle rotonde in Android Auto.
- Corretti i valori inaccurati di [salita e discesa](https://github.com/osmandapp/OsmAnd/issues/20624) nei widget di elevazione.
- Impedito che i [preferiti nascosti](https://github.com/osmandapp/OsmAnd/issues/24689) riapparissero sulla mappa quando si aggiungono waypoint di traccia a una cartella.
- Risolte le [incongruenze tra i grafici](https://github.com/osmandapp/OsmAnd/issues/24712) nella schermata Dettagli.
- Risolto un [problema](https://github.com/osmandapp/OsmAnd/issues/24791) per cui le cartelle di Preferiti non fissate apparivano di nuovo fissate dopo il riavvio dell'app.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->