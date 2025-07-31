---
source-hash: e1ed0c38654083ff1654ec38b2f9235f0e80e91f2cdccf6bfa4e90d11da491a5
sidebar_position: 2
title: Scaricare mappe
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

Caricare le mappe nell'app OsmAnd è un passaggio fondamentale per garantire il buon funzionamento e l'utilizzo della navigazione offline. Senza mappe offline, l'app non può funzionare completamente. Scaricare le mappe ti dà accesso a mappe di diverse regioni, permettendoti di navigare senza una connessione Internet.

Hai due modi *principali* per scaricare le mappe: **1)** [visualizzare l'elenco delle regioni nel *Menu principale*](#maps-and-resources), oppure **2)** [selezionare la regione richiesta direttamente sulla mappa](#select-on-the-map). Questo ti dà la flessibilità di selezionare le regioni che desideri e assicura che le mappe si adattino ai tuoi piani.

Sebbene OsmAnd supporti sia le [mappe vettoriali](../map/vector-maps.md) che quelle [raster](../map/raster-maps.md), si consiglia di iniziare a lavorare offline con le mappe vettoriali. Questo tipo di mappa (leggi di più sui [tipi di mappa OsmAnd](../personal/maps-resources.md#map-types) qui) garantisce un funzionamento affidabile di tutte le funzioni chiave dell'applicazione, inclusi [Cerca](../search/index.md), [Navigazione](../navigation/index.md) e [Menu contestuale](../map/map-context-menu.md). Questo è particolarmente importante se i tuoi viaggi includono spostamenti in luoghi remoti o con accesso limitato a Internet.


## Scarica {#download}

Inizia a caricare le mappe dalla [schermata di configurazione iniziale](#initial-setup-screen), oppure vai al *menu laterale* principale *→* [Mappe e risorse](#maps-and-resources) e seleziona le mappe richieste dall'elenco generale, oppure [seleziona una regione](#select-on-the-map) direttamente sulla mappa toccando la regione di cui hai bisogno.


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

Se stai utilizzando una VPN, OsmAnd potrebbe suggerire una mappa basata sulla posizione virtuale della VPN. In questi casi, puoi selezionare manualmente una mappa che si allinei meglio alla tua regione geografica effettiva.


#### Menu a tre punti {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Scarica mappa Android](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![Scarica mappa iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Scarica mappa Android](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![Scarica mappa iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Menu Posizione:**

- *Seleziona una regione diversa.* Apre il menu [Scarica mappe](#maps-and-resources).
- *Consentici di determinare la tua posizione.* [Richiede il permesso](../start-with/first-steps.md#permission-to-access-the-location) di accedere alla posizione e trovare la mappa richiesta utilizzando questi dati.

**Altro menu:**

- *Ripristina da OsmAnd Cloud.* Apre la schermata principale di [OsmAnd Cloud](../personal/osmand-cloud.md) o la schermata di accesso. Questo è utile se hai reinstallato l'app o vuoi ripristinare la precedente esperienza utente senza riselezionare regioni e impostazioni.
- *Ripristina da file.* Apre il file manager del dispositivo per selezionare e importare un file `.osf`.


### Mappe e risorse {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Scarica menu mappa generale Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Scarica menu mappa generale iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

La schermata [Mappe e risorse](../personal/maps-resources.md) fornisce l'accesso alle seguenti sezioni:

- [Download](../personal/maps-resources.md#downloads). Offre una selezione completa di [tipi di mappa OsmAnd](../personal/maps-resources.md#map-types).
- [Locale](../personal/maps-resources.md#local). Visualizza tutti i dati della mappa attualmente archiviati sul tuo dispositivo, incluse risorse personalizzate e importate.
- [Aggiornamenti](../personal/maps-resources.md#updates). Ti consente di aggiornare le mappe mensilmente per mantenere i tuoi dati aggiornati.

#### Download delle mappe {#downloading-maps}

Per scaricare un tipo di mappa specifico per un paese o una regione:

- Naviga nella cartella della regione richiesta, come Africa, Europa o un altro continente.
- Seleziona il tuo paese o regione preferito dall'elenco.
- Nella schermata successiva, rivedi e scegli tra i tipi di mappa disponibili per quell'area.

Puoi trovare informazioni su altri tipi di mappe nella sezione [Download](../personal/maps-resources.md#downloads) dell'articolo **Mappe**.

### Opzioni della mappa del mondo {#world-map-options}

OsmAnd include due opzioni per la mappa del mondo:

1. **Mappa Mini Mondo** (preinstallata). Una mappa leggera che consente la navigazione di base e fornisce una panoramica del mondo.
2. **Mappa Dettagliata del Mondo** (scaricabile). Una mappa globale con le principali città, strade, fiumi e altre caratteristiche geografiche.

***Note importanti:***

- La **Mappa Dettagliata del Mondo non sostituisce le mappe individuali di paesi o regioni.** È utile per una panoramica ma non contiene lo stesso livello di dettaglio delle mappe regionali.
- Se hai bisogno di una navigazione dettagliata, **scarica manualmente le mappe specifiche di paesi o regioni** tramite *Menu → Mappe e risorse → Scarica mappe.*
- Gli utenti con **OsmAnd Pro o Maps+** possono scaricare un **numero illimitato di mappe** ma devono comunque scaricare ogni regione separatamente.
- **Non esiste un'unica opzione per scaricare tutte le mappe del mondo contemporaneamente.**


### Seleziona sulla mappa {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Toccando brevemente la mappa del mondo è possibile scaricare la mappa della regione](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Toccando brevemente la mappa del mondo è possibile scaricare la mappa della regione](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Un modo per scaricare una mappa è rimpicciolire la mappa del mondo e toccare brevemente per selezionare una regione da scaricare. Quest'area verrà evidenziata in giallo e apparirà un pannello in basso con il nome della regione e un suggerimento per scaricarla o selezionare altre mappe.

:::tip Colore della mappa
Sullo schermo piccolo, la mappa selezionata per il download sarà evidenziata in giallo, le mappe già scaricate saranno evidenziate in verde e le mappe disattivate saranno evidenziate in arancione. Le mappe **disattivate** vengono ignorate per velocizzare il programma nel caso in cui tu abbia molte mappe caricate.
:::

### Cerca {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Funzione di ricerca per scaricare la mappa Android](@site/static/img/settings/search_download_map_3_andr.png) ![Funzione di ricerca per scaricare la mappa Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Funzione di ricerca per scaricare la mappa iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Funzione di ricerca per scaricare la mappa iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

La ricerca semplifica la ricerca di una mappa o regione specifica, fornendo un modo comodo e veloce per scaricare i dati di cui hai bisogno. Puoi trovare e scaricare la mappa utilizzando la [funzione di ricerca](../search/index.md).

- Avvia una ricerca inserendo il nome di un paese o di una regione nel campo di ricerca. Quindi seleziona la mappa richiesta dall'elenco che appare.
- Le mappe disponibili per il download sono visualizzate in grigio con un'icona di download, le mappe scaricate hanno un colore verde e un pulsante di menu.
- Tocca il nome del risultato richiesto e si aprirà l'elenco delle mappe regionali.
- Seleziona i [tipi di mappa](../personal/maps-resources.md#map-types): *Mappa standard, Mappa solo strade, Curve di livello, Wikipedia*.

> *Ultimo aggiornamento: Gennaio 2025*