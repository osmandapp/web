---
source-hash: e245d0a8d185e0eb4570fd1b908d1c8ccda0b97d189a853407a98e84348a2b57
sidebar_position: 7
title:  Android Auto
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';




## Ritardi di localizzazione (crash ANR) {#location-delays-anr-crashes}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_troubleshooting_1.png)

Android Auto e OsmAnd possono rilevare contemporaneamente la posizione del veicolo, il che può causare un ritardo di 3-5 secondi nella visualizzazione delle informazioni nei widget correlati o bloccare il sistema. Per evitare ciò, è necessario:

1. Aprire le impostazioni di Android Auto.
2. Nelle Impostazioni, trovare Autorizzazioni di localizzazione.
3. Questa sezione mostra un elenco di app a cui è consentito utilizzare la localizzazione in Android Auto. Trovare l'app OsmAnd e consentire l'utilizzo della localizzazione.
4. La localizzazione sarà ora rilevata solo dall'app OsmAnd in Android Auto, evitando ritardi nella visualizzazione delle informazioni sulla posizione.


## Problema di orientamento della mappa {#map-orientation-issue}

L'orientamento della mappa nella direzione di movimento è [capovolto e traballante](https://github.com/osmandapp/OsmAnd/issues/16041). Risolto attivando l'opzione ["Orientamento approssimativo"](../navigation/guidance/map-during-navigation.md#map-during-navigation):

- Visibile solo se è abilitato [Sviluppo OsmAnd](../plugins/development.md).
- Posizionato in *Menu → Impostazioni → Profilo → Impostazioni di navigazione → [Mappa durante la navigazione](../navigation/guidance/map-during-navigation.md) → Orientamento approssimativo*.


## Problema di controllo del volume {#volume-control-issue}

Nella maggior parte dei casi, tutti i tipi di **segnali** rimangono a volume massimo costante, che non è influenzato dalle impostazioni di riproduzione audio simultanea. Per modificare il volume dei suggerimenti di navigazione di OsmAnd quando si utilizza Android Auto, andare su *Impostazioni → Voce → Volume voce* sullo schermo del sistema multimediale del veicolo.

Se questo metodo non funziona, c'è un'altra opzione. Per regolare il volume delle notifiche, è necessario attivare Google Assistant durante una chiamata. Tenere premuto il pulsante sul volante che attiva Google Assistant e, durante la chiamata, regolare il volume utilizzando la plancia o il volante.