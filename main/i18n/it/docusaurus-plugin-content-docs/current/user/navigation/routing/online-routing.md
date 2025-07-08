---
source-hash: 4f96a8e9fe2039b52000ce52f1a94177338192fe1d90ceb5161a41d19e94cfea
sidebar_position: 11
title:  Routing online
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Panoramica {#overview}

<InfoAndroidOnly />

Il routing online è uno strumento potente che può aiutare gli utenti a risparmiare tempo e a navigare in modo più efficiente. Tuttavia, è importante notare che il routing online si basa sulla connettività internet e potrebbe non essere disponibile in aree con scarsa copertura di rete. Inoltre, gli utenti dovrebbero sempre prestare attenzione e usare il proprio giudizio quando seguono un percorso suggerito da un servizio di routing online.

![Routing online Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Parametri del percorso - Routing online {#route-parameters---online-routing}

Il *routing online* può essere abilitato nella sezione [Tipo di navigazione](../guidance/navigation-settings.md#overview) delle impostazioni di navigazione del *Profilo* selezionato. In OsmAnd ci sono due *motori di routing online* predefiniti ([ZLZK](https://zlzk.biz/) e [OSM DE](https://routing.openstreetmap.de)), che forniscono tre tipi di *routing online*: *Bicicletta, Auto e A piedi*.

:::note
I tipi di routing online sono progettati per i profili *Guida, Ciclismo e Camminata*, sebbene possano essere utilizzati anche con altri profili OsmAnd (Camion, Moto, Sci, Equitazione). Sono forniti "così come sono", quindi non è possibile personalizzarli in base alle proprie esigenze utilizzando diverse opzioni di navigazione.
:::

### Routing online personalizzato {#custom-online-routing}

Oltre ai tipi di routing online preimpostati, è possibile configurare altri meccanismi di routing online.
Tocca il pulsante **+ Aggiungi motore di routing online** e scegli uno dei tipi di routing online proposti ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Seleziona il veicolo appropriato e tocca *test routing* prima di salvare le modifiche.

![Routing online personalizzato Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Routing online personalizzato Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Puoi leggere le differenze tra i motori di routing online in [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Routing GPX online personalizzato {#custom-online-gpx-routing}

Il server online costruisce un percorso utilizzando il punto di partenza e la destinazione. Dopo aver ricevuto la traccia dal server, OsmAnd crea un percorso utilizzando la funzione *[Aggancia alle strade](../setup/gpx-navigation.md#attach-to-the-roads)*. Quindi tutte le informazioni di routing necessarie saranno prese dalle nostre mappe offline e verrà fornita una guida più precisa lungo il percorso.

![Routing GPX personalizzato Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Routing GPX personalizzato Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Impostazioni di routing online {#online-routing-setting}

Quando il routing online è selezionato per la navigazione, appare un'opzione aggiuntiva nelle impostazioni.

![Impostazioni Routing online Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Consente di utilizzare il routing offline di OsmAnd, quando il routing online è selezionato nelle impostazioni di navigazione. Questa opzione può essere utile se un percorso è già stato costruito online, ma poi c'è stata una deviazione dal percorso e allo stesso tempo la connessione internet è andata persa. In questo caso, il routing offline verrà utilizzato per tornare al percorso, precedentemente calcolato online.

> *Ultimo aggiornamento: giugno 2024*