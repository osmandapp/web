---
source-hash: 666034567fd284a4497490ffa9885eebc102c1d37823e71a52d03c189944eb25
sidebar_position: 5
title:  Percorsi con i mezzi pubblici
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';




## Panoramica {#overview}

La navigazione con i mezzi pubblici nell'app OsmAnd consente di elaborare percorsi utilizzando i mezzi pubblici, il che ti aiuterà sicuramente a muoverti più velocemente nella "giungla di cemento".

I dati sui percorsi dei mezzi pubblici sono tratti dal progetto [OpenStreetMap](http://openstreetmap.org/). OsmAnd utilizza lo [schema PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) per la navigazione. OsmAnd supporta i seguenti percorsi OpenStreetMap per la navigazione: *bus*, *filobus*, *taxi condiviso*, *funicolare*, *metropolitana*, *tram leggero*, *monorotaia*, *treno*, *tram*, *traghetto*. La velocità predefinita per ogni tipo di veicolo è configurata in [Routing xml](../../../technical/build-osmand/routing.md) e viene utilizzata per trovare i percorsi più veloci.

:::note
La navigazione con i mezzi pubblici è in fase di test. Per ora, puoi costruire e visualizzare il tuo percorso senza la funzione di navigazione completa.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione mezzi pubblici Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigazione mezzi pubblici iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Come si usa {#how-to-use}

Per iniziare a navigare in città con i mezzi pubblici, usa [il pulsante di navigazione](../../widgets/map-buttons.md#directions) nella schermata della mappa o seleziona l'opzione di navigazione nel *Menu principale*.  

**1.** Devi scegliere il *profilo di navigazione Trasporto pubblico*, i punti di partenza e di arrivo.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione percorsi mezzi pubblici Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigazione percorsi mezzi pubblici iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd offre opzioni di percorso con tempi di percorrenza a piedi e percorsi con i mezzi pubblici con informazioni sul percorso: tempo, distanza, trasferimento e percorsi pubblici. Devi scorrere la schermata di navigazione per selezionare l'opzione desiderata.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione mezzi pubblici Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigazione mezzi pubblici iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Puoi visualizzare tutti i suggerimenti di percorso possibili sulla mappa usando il pulsante *Mostra sulla mappa*. Scorri le schermate per visualizzare l'opzione di percorso successiva.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dettagli navigazione mezzi pubblici Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Dettagli navigazione mezzi pubblici iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Tocca il pulsante "Dettagli" per aprire una descrizione del percorso selezionato con tutte le fermate e i trasferimenti.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Elenco fermate mezzi pubblici Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Elenco fermate mezzi pubblici iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Dati e linee guida {#data-and-guideline}

OsmAnd utilizza un nuovo schema di trasporto pubblico, chiamato anche Public Transport Version 2 (PTv2) per l'algoritmo di navigazione OsmAnd Public Transport.

- Puoi controllare il tuo trasporto pubblico [qui](http://tools.geofabrik.de/osmi/).
- Una guida per costruire o modificare i percorsi dei mezzi pubblici è disponibile sul nostro [blog](https://osmand.net/blog/guideline-pt).
- La presentazione [2019: Navigazione con i mezzi pubblici usando OpenStreetMap di OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *Ultimo aggiornamento: Giugno 2024.*