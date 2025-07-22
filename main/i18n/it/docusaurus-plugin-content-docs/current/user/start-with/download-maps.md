---
source-hash: b74e034d907048857594823cf149189c003eb875c25da16719cff9a3addc6202
sidebar_position: 2
title: Scarica mappe
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

Caricare mappe sull'app OsmAnd è un passo fondamentale per garantire il buon funzionamento e l'utilizzo della navigazione offline. Senza mappe offline, l'app non può funzionare completamente. Scaricare le mappe ti dà accesso a mappe di diverse regioni, permettendoti di navigare senza una connessione Internet.

Hai due modi *principali* per scaricare le mappe: **1)** [visualizzare l'elenco delle regioni nel *Menu principale*](#maps-and-resources), o **2)** [selezionare la regione richiesta direttamente sulla mappa](#select-on-the-map). Questo ti dà la flessibilità di selezionare le regioni che desideri e garantisce che le mappe si adattino ai tuoi piani.

Sebbene OsmAnd supporti sia [vettoriali](../map/vector-maps.md) che [raster](../map/raster-maps.md), si consiglia di iniziare a lavorare con le mappe vettoriali offline. Questo tipo di mappa (leggi di più sui [tipi di mappa OsmAnd](../personal/maps-resources.md#map-types) qui) garantisce il funzionamento affidabile di tutte le funzioni chiave dell'applicazione, tra cui [Ricerca](../search/index.md), [Navigazione](../navigation/index.md) e [Menu contestuale](../map/map-context-menu.md). Ciò è particolarmente importante se i tuoi viaggi includono spostamenti in località remote o luoghi con accesso a Internet limitato.


## Scarica {#download}

Inizia a caricare le mappe dalla [schermata di configurazione iniziale](#initial-setup-screen), oppure vai al *menu laterale* principale *→* [Mappe e risorse](#maps-and-resources) e seleziona le mappe richieste dall'elenco generale, oppure [seleziona una regione](#select-on-the-map) direttamente sulla mappa toccando la regione che ti serve.


### Schermata di configurazione iniziale {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Scarica mappa Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Scarica mappa iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Al primo avvio dell'applicazione, ti viene chiesto di scaricare una mappa personalizzata in base alla tua posizione attuale, determinata dalla tua connessione Internet. Questo passaggio è facoltativo, permettendoti di saltare il download e procedere direttamente all'interfaccia delle mappe locali per la tua regione.

Se stai utilizzando una VPN, OsmAnd potrebbe suggerire una mappa basata sulla posizione virtuale della VPN. In questi casi, puoi selezionare manualmente una mappa che si allinei meglio con la tua regione geografica effettiva.


#### Menu a tre punti {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Scarica mappa Android](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![Scarica mappa iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Scarica mappa Android](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![Scarica mappa iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Menu posizione:**

- *Seleziona una regione diversa.* Apre il menu [Scarica mappe](#maps-and-resources).
- *Consentici di determinare la tua posizione.* [Richiede il permesso](../start-with/first-steps.md#permission-to-access-the-location) per accedere alla posizione e trovare la mappa richiesta utilizzando questi dati.

**Altro menu:**

- *Ripristina da OsmAnd Cloud.* Apre la schermata principale di [OsmAnd Cloud](../personal/osmand-cloud.md) o la schermata di accesso. Ciò è utile se hai reinstallato l'app o desideri ripristinare l'esperienza utente precedente senza riselezionare regioni e impostazioni.
- *Ripristina da file.* Apre il file manager del dispositivo per selezionare e importare un file `.osf`.


### Mappe e risorse {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menu generale scarica mappa Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menu generale scarica mappa iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

La schermata [Mappe e risorse](../personal/maps-resources.md) fornisce l'accesso alle seguenti sezioni:

- [Download](../personal/maps-resources.md#downloads). Offre una selezione completa di [tipi di mappa OsmAnd](../personal/maps-resources.md#map-types).
- [Locale](../personal/maps-resources.md#local). Visualizza tutti i dati delle mappe attualmente archiviati sul tuo dispositivo, incluse risorse personalizzate e importate.
- [Aggiornamenti](../personal/maps-resources.md#updates). Ti consente di aggiornare le mappe mensilmente per mantenere i tuoi dati aggiornati.

#### Scaricare mappe {#downloading-maps}

Per scaricare un tipo di mappa specifico per un paese o una regione:

- Naviga nella cartella della regione richiesta, come Africa, Europa o un altro continente.
- Seleziona il tuo paese o regione preferito dall'elenco.
- Nella schermata successiva, rivedi e scegli tra i tipi di mappa disponibili per quell'area.

Puoi trovare informazioni su altri tipi di mappe nella sezione [Download](../personal/maps-resources.md#downloads) dell'articolo **Mappe**.

### Opzioni mappa del mondo {#world-map-options}

OsmAnd include due opzioni di mappa del mondo:

1. **Mini mappa del mondo** (preinstallata). Una mappa leggera che consente la navigazione di base e fornisce una panoramica del mondo.
2. **Mappa del mondo dettagliata** (scaricabile). Una mappa globale con le principali città, strade, fiumi e altre caratteristiche geografiche.

***Note importanti:***

- La **Mappa del mondo dettagliata non sostituisce le singole mappe di paesi o regioni.** È utile per una panoramica ma non contiene lo stesso livello di dettaglio delle mappe regionali.
- Se hai bisogno di una navigazione dettagliata, **scarica manualmente mappe di paesi o regioni specifiche** tramite *Menu → Mappe e risorse → Scarica mappe.*
- Gli utenti con **OsmAnd Pro o Maps+** possono scaricare un **numero illimitato di mappe** ma devono comunque scaricare ogni regione separatamente.
- **Non esiste un'unica opzione per scaricare tutte le mappe del mondo contemporaneamente.**


### Seleziona sulla mappa {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Un breve tocco sulla mappa del mondo consente di scaricare la mappa della regione](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Un breve tocco sulla mappa del mondo consente di scaricare la mappa della regione](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Un modo per scaricare una mappa è rimpicciolire sulla mappa del mondo e toccare brevemente per selezionare una regione da scaricare. Quest'area sarà evidenziata in giallo e apparirà un pannello in basso con il nome della regione e un suggerimento per scaricarla o selezionare altre mappe.

:::tip Colore mappa
Sullo schermo piccolo, la mappa selezionata per il download sarà evidenziata in giallo, le mappe già scaricate saranno evidenziate in verde e le mappe disattivate saranno evidenziate in arancione. Le mappe **disattivate** vengono bypassate per velocizzare il programma nel caso in cui tu abbia molte mappe caricate.
:::

### Ricerca {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funzione di ricerca per scaricare mappa Android](@site/static/img/settings/search_download_map_3_andr.png) ![Funzione di ricerca per scaricare mappa Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Funzione di ricerca per scaricare mappa iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Funzione di ricerca per scaricare mappa iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

La ricerca rende facile trovare una mappa o una regione specifica, fornendo un modo conveniente e veloce per scaricare i dati di cui hai bisogno. Puoi trovare e scaricare la mappa utilizzando la [funzione di ricerca](../search/index.md).

- Avvia una ricerca inserendo il nome di un paese o di una regione nel campo di ricerca. Quindi seleziona la mappa richiesta dall'elenco che appare.
- Le mappe disponibili per il download sono visualizzate in grigio con un'icona di download, le mappe scaricate hanno un colore verde e un pulsante di menu.
- Tocca il nome del risultato richiesto e si aprirà l'elenco delle mappe regionali.
- Seleziona i [tipi di mappa](../personal/maps-resources.md#map-types): *Mappa standard, Mappa solo strade, Curve di livello, Wikipedia*.

> *Ultimo aggiornamento: Gennaio 2025*