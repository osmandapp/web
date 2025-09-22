---
source-hash: 80dc4983a69b5c41013a01014add8bf4ae3e59f35fc0c079bd4e47887e3e4bea
sidebar_position: 5
title:  Percorsi con i trasporti pubblici
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

La navigazione con i trasporti pubblici nell'app OsmAnd consente di elaborare percorsi utilizzando i trasporti pubblici, il che vi aiuterà sicuramente a muovervi più velocemente nella "giungla di cemento".

I dati sui percorsi del trasporto pubblico sono presi dal progetto [OpenStreetMap](http://openstreetmap.org/). OsmAnd utilizza lo [schema PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) per la navigazione. OsmAnd supporta i seguenti percorsi OpenStreetMap per la navigazione: *autobus*, *filobus*, *taxi collettivo*, *funicolare*, *metropolitana*, *metropolitana leggera*, *monorotaia*, *treno*, *tram*, *traghetto*. La velocità predefinita per ogni tipo di veicolo è configurata nel file [Routing xml](../../../technical/build-osmand/routing.md) e viene utilizzata per trovare i percorsi più veloci.

:::note
Il calcolo dei percorsi con i trasporti pubblici è in fase di test. Per ora è possibile creare e visualizzare il percorso senza la funzione di navigazione completa.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione trasporto pubblico Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigazione trasporto pubblico iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Come si usa {#how-to-use}

Per iniziare a navigare in città con i mezzi pubblici, utilizzare [il pulsante di navigazione](../../widgets/map-buttons.md#directions) sulla schermata della mappa o selezionare l'opzione di navigazione nel *Menu principale*.  

**1.** È necessario scegliere il *profilo di navigazione Trasporto pubblico*, i punti di partenza e di destinazione.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione percorsi trasporto pubblico Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigazione percorsi trasporto pubblico iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd offre opzioni di percorso con tempi di percorrenza a piedi e percorsi con i mezzi pubblici con informazioni sul percorso: tempo, distanza, trasferimenti e percorsi pubblici. È necessario scorrere la schermata di navigazione per selezionare l'opzione desiderata.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione percorso trasporto pubblico Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigazione percorso trasporto pubblico iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** È possibile visualizzare tutti i suggerimenti di percorso possibili sulla mappa utilizzando il pulsante *Mostra sulla mappa*. Scorrere le schermate per visualizzare l'opzione di percorso successiva.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione dettagli trasporto pubblico Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigazione dettagli trasporto pubblico iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Toccare il pulsante "Dettagli" per aprire una descrizione del percorso selezionato con tutte le fermate e i trasferimenti.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Elenco fermate trasporto pubblico Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Elenco fermate trasporto pubblico iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Dati e linee guida {#data-and-guideline}

OsmAnd utilizza un nuovo schema di trasporto pubblico, chiamato anche Public Transport Version 2 (PTv2), per l'algoritmo di navigazione del trasporto pubblico di OsmAnd.

- Potete controllare il vostro trasporto pubblico [qui](http://tools.geofabrik.de/osmi/).
- Una guida per la creazione o la modifica dei percorsi del trasporto pubblico è disponibile sul nostro [blog](https://osmand.net/blog/guideline-pt).
- La presentazione [2019: Public Transport Navigation using OpenStreetMap by OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).