---
source-hash: 02488ffc13aed2fc0d33253f071c8dbb2d3bc8a182a496a94f4a68885929b5dd
sidebar_position: 2
title:  Scarica Mappe
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



## Panoramica {#overview}

Il caricamento delle mappe nell'app OsmAnd è un passo fondamentale per garantire un funzionamento fluido e l'uso della navigazione offline. Senza mappe offline, l'app non può funzionare a pieno regime. Lo scaricamento delle mappe consente di accedere a mappe di diverse regioni, permettendo di navigare senza una connessione a Internet.  

Ci sono due modi *principali* per scaricare le mappe: **1)** iniziare dalla [schermata di configurazione iniziale](#initial-setup-screen) o [visualizzare l'elenco delle regioni nel *Menu principale*](#maps-and-resources), oppure **2)** [selezionare la regione richiesta direttamente sulla mappa](#select-on-the-map). Questo offre la flessibilità di selezionare le regioni desiderate e garantisce che le mappe si adattino ai propri piani.  

Sebbene OsmAnd supporti sia le mappe [Vettoriali](../map/vector-maps.md) che [Raster](../map/raster-maps.md), si consiglia di iniziare a lavorare con le mappe vettoriali offline. Questo tipo di mappa (per saperne di più sui [tipi di mappa di OsmAnd](../personal/maps-resources.md#map-types) clicca qui) garantisce il funzionamento affidabile di tutte le funzioni chiave dell'applicazione, tra cui [Ricerca](../search/index.md), [Navigazione](../navigation/index.md) e [Menu contestuale](../map/map-context-menu.md). Questo è particolarmente importante se i vostri viaggi includono spostamenti in luoghi remoti o in luoghi con accesso limitato a Internet.


## Schermata di Configurazione Iniziale {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Scarica mappa Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Scarica mappa iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Al primo avvio dell'applicazione, viene richiesto di scaricare una mappa adatta alla posizione corrente, determinata dalla connessione a Internet. Questo passaggio è facoltativo e consente di saltare il download e di procedere direttamente all'interfaccia delle mappe locali per la propria regione.  

Se si utilizza una VPN, OsmAnd potrebbe suggerire una mappa basata sulla posizione virtuale della VPN. In questi casi, è possibile selezionare manualmente una mappa che si allinei meglio con la propria regione geografica effettiva.  


### Menu a tre punti {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Scarica mappa Android](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![Scarica mappa iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Scarica mappa Android](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![Scarica mappa iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Menu Posizione:**

- *Seleziona una regione diversa.* Apre il menu [Scarica Mappe](#maps-and-resources).
- *Permettici di determinare la tua posizione.* [Richiede il permesso](../start-with/first-steps.md#permission-to-access-the-location) di accedere alla posizione e di trovare la mappa richiesta utilizzando questi dati.

**Altro menu:**

- *Ripristina da OsmAnd Cloud.* Apre la schermata principale di [OsmAnd Cloud](../personal/osmand-cloud.md) o la schermata di accesso. Questo è utile se si è reinstallata l'app o si desidera ripristinare la precedente esperienza utente senza dover riselezionare regioni e impostazioni.
- *Ripristina da file.* Apre il gestore di file del dispositivo per selezionare e importare un file `.osf`.  


## Mappe e Risorse {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu generale Scarica mappa Android](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu generale Scarica mappa iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

La schermata [Mappe e Risorse](../personal/maps-resources.md) fornisce l'accesso alle seguenti sezioni:

- [Download](../personal/maps-resources.md#downloads-menu). Offre una selezione completa di [tipi di mappe OsmAnd](../personal/maps-resources.md#map-types).
- [Locali](../personal/maps-resources.md#local-menu). Visualizza tutti i dati delle mappe attualmente memorizzati sul dispositivo, comprese le risorse personalizzate e importate.
- [Aggiornamenti](../personal/maps-resources.md#updates-menu). Consente di aggiornare le mappe mensilmente per mantenere i dati aggiornati.

### Scaricare le Mappe {#downloading-maps}

Per scaricare un tipo di mappa specifico per un paese o una regione:

- Accedere alla cartella della regione richiesta, ad esempio Africa, Europa o un altro continente.
- Selezionare il paese o la regione preferita dall'elenco.
- Nella schermata successiva, esaminare e scegliere tra i tipi di mappa disponibili per quella zona.

È possibile trovare informazioni su altri tipi di mappe nella sezione [Download](../personal/maps-resources.md#downloads-menu) dell'articolo **Mappe**.

## Opzioni Mappa del Mondo {#world-map-options}

OsmAnd include due opzioni di mappa del mondo:  

1. **Mappa del Mondo Mini** (preinstallata). Una mappa leggera che consente la navigazione di base e fornisce una panoramica del mondo.  
2. **Mappa del Mondo Dettagliata** (scaricabile). Una mappa globale con le principali città, strade, fiumi e altre caratteristiche geografiche.

***Note importanti:***

- La **Mappa del Mondo Dettagliata non sostituisce le mappe dei singoli paesi o regioni.** È utile per una visione d'insieme, ma non contiene lo stesso livello di dettaglio delle mappe regionali.  
- Se si necessita di una navigazione dettagliata, **scaricare manualmente le mappe specifiche del paese o della regione** tramite *Menu → Mappe e Risorse → Scarica Mappe.*
- Gli utenti con **OsmAnd Pro o Maps+** possono scaricare un **numero illimitato di mappe**, ma devono comunque scaricare ogni regione separatamente.  
- **Non esiste un'opzione unica per scaricare tutte le mappe del mondo in una sola volta.**


## Seleziona sulla Mappa {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Un tocco breve sulla mappa del mondo permette di scaricare la mappa della regione](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Un tocco breve sulla mappa del mondo permette di scaricare la mappa della regione](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Un modo per scaricare una mappa è quello di rimpicciolire la mappa del mondo e toccare brevemente per selezionare una regione da scaricare. Quest'area verrà evidenziata in giallo e in basso apparirà un pannello con il nome della regione e il suggerimento di scaricarla o di selezionare altre mappe.  

:::tip Colore della mappa  
Sullo schermo piccolo, la mappa selezionata per il download sarà evidenziata in giallo, le mappe già scaricate saranno evidenziate in verde e le mappe disattivate saranno evidenziate in arancione. Le mappe **disattivate** vengono ignorate per velocizzare il programma nel caso in cui si disponga di un gran numero di mappe caricate.
:::

## Cerca {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funzione di ricerca per scaricare la mappa Android](@site/static/img/settings/search_download_map_3_andr.png) ![Funzione di ricerca per scaricare la mappa Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Funzione di ricerca per scaricare la mappa iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Funzione di ricerca per scaricare la mappa iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

La ricerca facilita la ricerca di una mappa o di una regione specifica, fornendo un modo comodo e rapido per scaricare i dati necessari. È possibile trovare e scaricare la mappa utilizzando la [funzione di ricerca](../search/index.md).

- Avviare una ricerca inserendo il nome di un paese o di una regione nel campo di ricerca. Quindi selezionare la mappa richiesta dall'elenco che appare.
- Le mappe disponibili per il download sono visualizzate in grigio con un'icona di download, le mappe scaricate hanno un colore verde e un pulsante di menu.
- Toccare il nome del risultato richiesto e si aprirà l'elenco delle mappe della regione.
- Selezionare i [tipi di mappa](../personal/maps-resources.md#map-types): *Mappa standard, Mappa solo stradale, Curve di livello, Wikipedia*.