---
source-hash: 4d9f5039ab11085fb01ba9a87295b0709bf9134ac4123b410ba74a735353f314
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

La navigazione con i trasporti pubblici nell'app OsmAnd consente di elaborare i percorsi utilizzando i trasporti pubblici, il che vi aiuterà sicuramente a muovervi più velocemente nella "giungla di cemento".

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

**2.** OsmAnd offre opzioni di percorso con tempi di percorrenza a piedi e percorsi con i mezzi pubblici con informazioni sul percorso: tempo, distanza, trasferimento e percorsi pubblici. È necessario scorrere la schermata di navigazione per selezionare l'opzione desiderata.  

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

## Tipi di trasporti pubblici {#public-transport-types}

È possibile cercare Percorsi di Trasporto Pubblico ben curati in base alle proprie preferenze e scegliere di:

- Evitare gli autobus (e i filobus)
- Evitare le metropolitane
- Evitare i treni
- Evitare i tram
- Evitare i traghetti
- Evitare i taxi collettivi

In base alle impostazioni predefinite, OsmAnd cerca percorsi che includono tutti i tipi di trasporti pubblici supportati.

## Percorsi alternativi {#alternative-routes}

I Percorsi Alternativi sono sezioni di un percorso servite da diversi servizi di trasporto e che condividono lo stesso tracciato e le stesse fermate.

Diversi servizi di trasporto possono utilizzare numeri di percorso (refs) diversi o anche tipi di trasporto diversi.

L'interfaccia utente visualizza i Percorsi Alternativi come badge colorati con i loro refs.

## Prestazioni e risultati {#performance-and-results}

**Profilo Trasporto pubblico -> Impostazioni -> Impostazioni di navigazione -> Parametri del percorso**

1. **Numero massimo di cambi di trasporto**.

Le prestazioni e il consumo di memoria del Router per i Trasporti Pubblici dipendono dalla profondità di ricerca.

Il parametro più importante che influisce su questa profondità è il **Numero massimo di cambi di trasporto**.

Utilizziamo **2** come valore predefinito, che sembra ottimale per le reti di trasporti pubblici moderne.

Se si verificano prestazioni basse o errori di memoria insufficiente, provate a diminuire questo valore.

Se ci si trova in una piccola città o si percorrono brevi tratti, un valore di **1** potrebbe funzionare meglio.
<!--
There are two more parameters that help you choose the best routes.

2. **Display N best routes** (specify the number of best routes to display)

By default, OsmAnd displays the **10** best routes (including alternative routes).

You can decrease or increase this limit, or even display all routes.

Note: displaying unlimited routes might slow down your device.

Possible values: 0 (show all), 5, 10 (default), 15, 100
-->

## Dati e linee guida {#data-and-guideline}

OsmAnd utilizza un nuovo schema di trasporto pubblico, chiamato anche Public Transport Version 2 (PTv2), per l'algoritmo di navigazione del trasporto pubblico di OsmAnd.

- Potete controllare il vostro trasporto pubblico [qui](http://tools.geofabrik.de/osmi/).
- Una guida per la creazione o la modifica dei percorsi del trasporto pubblico è disponibile sul nostro [blog](https://osmand.net/blog/guideline-pt).
- La presentazione [2019: Public Transport Navigation using OpenStreetMap by OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).