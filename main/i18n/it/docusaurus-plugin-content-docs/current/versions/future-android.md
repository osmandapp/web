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



## Partecipa alla Beta {#join-beta}

OsmAnd rilascia ogni giorno diverse build pronte all'uso, permettendoti di seguire le nuove funzionalità e di partecipare al processo di traduzione di OsmAnd. Puoi partecipare ai test della versione beta di OsmAnd tramite Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## Novità {#whats-new}

- La **[Ricerca spaziale](https://osmand.net/blog/offline-search-video)** è attiva per impostazione predefinita, con un ordinamento più accurato, sinonimi e correzioni suggerite per le parole scritte in modo errato.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** è gratuito per tutti gli utenti e include [suggerimenti dalle destinazioni recenti](https://osmand.net/docs/user/navigation/auto-car#dashboard-suggestions), [Percorso libero](https://osmand.net/docs/user/navigation/auto-car#destination-points) automatico durante la guida e supporto per [Google Assistant e Gemini](https://osmand.net/docs/user/navigation/auto-car#voice-control).
- La **[versione gratuita](https://osmand.net/docs/user/purchases/android#free-and-paid-features)** include tutte le mappe di una regione.
- Nuovo **plugin Panoramax** con immagini a livello stradale come livello della mappa, filtrate per autore, data e tipo.
- **[Ombre del sole](https://osmand.net/docs/user/plugins/topography#sun-position)** realistiche proiettate da edifici 3D e terreno, e **[Ombre del terreno](https://osmand.net/docs/user/plugins/topography#terrain-shadows-android)** regolabili per il Rilievo 3D.
- Libreria multimediale in **[I miei luoghi](https://osmand.net/docs/user/personal/myplaces)** che raccoglie in un unico posto le tue foto, i video e le note audio.
- Linee tratteggiate e punteggiate nell'**[aspetto della traccia](https://osmand.net/docs/user/map/tracks/appearance#track-appearance-settings)**, disponibili anche come aspetto predefinito di una cartella.
- Nuove impostazioni di velocità di viaggio con un intervallo di velocità per il calcolo del percorso e un orario di arrivo basato sulla tua velocità effettiva nei **[parametri del veicolo](https://osmand.net/docs/user/navigation/guidance/vehicle-parameters#default-speed)**.
- Nuova **[Azione rapida](https://osmand.net/docs/user/widgets/quick-action#my-places)** per mostrare o nascondere una o più tracce con un solo tocco.
- Le etichette delle **[curve di livello](https://osmand.net/docs/user/plugins/topography#contour-lines)** possono essere orientate verso monte, come nelle mappe topografiche cartacee.
- Supporto per i misuratori di potenza BLE in **[Sensori esterni](https://osmand.net/docs/user/plugins/external-sensors#pair-new-sensor)**.

<!--
- Navigation settings included in route links.
- The trip recording "Notification" option is renamed to "Start from notification" to make clear it only adds a start button.
-->


## Correzioni di bug {#bug-fixes}

- Risolto un [problema](https://github.com/osmandapp/OsmAnd/issues/24228) per cui lo svuotamento del cestino di OsmAnd Cloud ripristinava i dati eliminati.
- Corretti gli [annunci di ricalcolo del percorso](https://github.com/osmandapp/OsmAnd/issues/25544) che non corrispondevano alla reale deviazione dal percorso.
- Risolto il problema della [bussola sfasata di 180°](https://github.com/osmandapp/OsmAnd/issues/26147) con orientamento verticale capovolto.
- Ripristinate le [soste a velocità zero](https://github.com/osmandapp/OsmAnd/issues/26351) nei grafici della velocità.
- Risolto il problema del [pulsante Avvia](https://github.com/osmandapp/OsmAnd/issues/26305) della registrazione del viaggio che scompariva con caratteri o schermo di grandi dimensioni.
- Impedito che l'[aspetto della traccia](https://github.com/osmandapp/OsmAnd/issues/25686) restasse non applicato dopo la sincronizzazione con il Cloud.
- Ripristinati i [simboli OSMC](https://github.com/osmandapp/OsmAnd/issues/26148) nell'elenco Cosa c'è qui che si apre quando tocchi gli scudetti dei percorsi sovrapposti.
- Aggiornati gli [orari delle eclissi solari](https://github.com/osmandapp/OsmAnd/issues/25830) per mostrare gli orari locali invece di quelli mondiali.

<!--
- Fixed the parking position marker not showing when Favorites are hidden.
- Fixed imported Favorites going to the wrong folder.
-->
