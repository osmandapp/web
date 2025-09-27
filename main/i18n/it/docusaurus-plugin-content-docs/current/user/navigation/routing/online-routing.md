---
source-hash: ad9c1155352c7c8fc6705861acfb7f006ba101d59528a256c0205ba34b62fd80
sidebar_position: 11
title:  Calcolo percorso online
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

Il calcolo del percorso online è un potente strumento che può aiutare gli utenti a risparmiare tempo e a navigare in modo più efficiente. Tuttavia, è importante notare che il calcolo del percorso online si basa sulla connettività Internet e potrebbe non essere disponibile in aree con scarsa copertura di rete. Inoltre, gli utenti dovrebbero sempre prestare attenzione e usare il proprio giudizio quando seguono un percorso suggerito da un servizio di calcolo del percorso online.

![Calcolo percorso online Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Parametri percorso - Calcolo percorso online {#route-parameters---online-routing}

Il *Calcolo percorso online* può essere abilitato nella sezione [Tipo di navigazione](../guidance/navigation-settings.md#overview) delle impostazioni di Navigazione del *Profilo* selezionato. In OsmAnd ci sono due *motori di calcolo del percorso online* predefiniti ([ZLZK](https://zlzk.biz/) e [OSM DE](https://routing.openstreetmap.de)), che forniscono tre tipi di *Calcolo percorso online*: *Bicicletta, Auto e A piedi*.

:::note
I tipi di calcolo del percorso online sono progettati per i profili *Guida, Ciclismo e Camminata*, sebbene possano essere utilizzati anche con altri profili OsmAnd (Camion, Motocicletta, Sci, Equitazione). Sono forniti "così come sono", quindi non è possibile personalizzarli in base alle proprie esigenze utilizzando diverse opzioni di navigazione.
:::

### Calcolo percorso online personalizzato {#custom-online-routing}

Oltre ai tipi di calcolo del percorso online preimpostati, è possibile configurare altri meccanismi di calcolo del percorso online.
Tocca il pulsante **+ Aggiungi motore di calcolo percorso online** e scegli uno dei tipi di calcolo del percorso online proposti ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Seleziona il veicolo appropriato e tocca *prova calcolo percorso* prima di salvare le modifiche.

![Calcolo percorso online personalizzato Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Calcolo percorso online personalizzato Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Puoi leggere le differenze tra i motori di calcolo del percorso online su [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Calcolo percorso GPX online personalizzato {#custom-online-gpx-routing}

Il server online costruisce un percorso utilizzando il punto di partenza e la destinazione. Dopo aver ricevuto la traccia dal server, OsmAnd crea un percorso utilizzando la funzione *[Associa alla strada](../setup/gpx-navigation.md#attach-to-the-roads)*. In questo modo, tutte le informazioni necessarie per il calcolo del percorso verranno prese dalle nostre mappe offline e verrà fornita una guida più precisa lungo il percorso.

![Calcolo percorso GPX personalizzato Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Calcolo percorso GPX personalizzato Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Impostazione Calcolo percorso online {#online-routing-setting}

Quando il calcolo del percorso online è selezionato per la navigazione, nelle impostazioni appare un'opzione aggiuntiva.

![Impostazioni Calcolo percorso online Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Consente di utilizzare il calcolo del percorso offline di OsmAnd, quando nelle impostazioni di navigazione è selezionato il calcolo del percorso online. Questa opzione può essere utile se un percorso è già stato costruito online, ma poi c'è stata una deviazione dal percorso e allo stesso tempo la connessione internet è andata persa. In questo caso, verrà utilizzato il calcolo del percorso offline per tornare al percorso precedentemente calcolato online.