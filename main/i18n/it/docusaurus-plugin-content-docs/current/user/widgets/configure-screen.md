---
source-hash: f123896d95f1b5ffa0ac74f2f92003e9fb8399728279d510e237d35cf9dd3f4d
sidebar_position: 1
title:  Configura Schermata
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

Il menu **Configura schermata** in OsmAnd consente di personalizzare l'interfaccia della mappa aggiungendo e disponendo widget, pulsanti e azioni rapide su più pannelli.

È possibile:

- Aggiungere widget [informativi](../widgets/info-widgets.md), [di navigazione](../widgets/nav-widgets.md) e [relativi ai preferiti](../widgets/markers.md).
- Aggiungere o modificare [Azioni Rapide](../widgets/quick-action.md), [Pulsanti personalizzati](../widgets/quick-action.md#custom-buttons) e [Pulsanti predefiniti](../widgets/map-buttons.md).
- Organizzare i widget in pannelli (superiore, inferiore, sinistro, destro, centrale).
- Creare più **pagine** all'interno dei pannelli laterali, scegliere la dimensione dei widget.
- Scegliere l'altezza della riga e attivare/disattivare le icone dei widget.

Tutti i widget sono [dipendenti dal profilo](../personal/profiles.md): ogni profilo ha il proprio layout, ordine, visibilità e impostazioni.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menu Configura schermata](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Pannelli Widget {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configura schermata](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configura schermata](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd consente di organizzare l'interfaccia della mappa utilizzando pannelli di widget personalizzabili.  
È possibile aggiungere, riordinare, raggruppare e rimuovere widget nei seguenti pannelli:

- **Pannello superiore**
- **Pannello inferiore**
- **Pannello sinistro**
- **Pannello destro**

Ogni pannello supporta diversi comportamenti di layout:

- I **pannelli Superiore e Inferiore** visualizzano i widget in righe. È possibile posizionare uno o due widget per riga e aggiungere più righe se necessario.
- I **pannelli Sinistro e Destro** supportano più pagine. È possibile raggruppare i widget in pagine separate e passare da una all'altra.


### Catalogo Widget {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Widget di navigazione:***  

- [Rilevamento](../widgets/nav-widgets.md#bearing-widget).  
    Questo set mostra il rilevamento assoluto o relativo verso un obiettivo in unità angolari.  
    Sono inclusi 3 widget: *Rilevamento relativo*, *Rilevamento magnetico*, *Rilevamento geografico*.

- [Profilo altimetrico](../widgets/nav-widgets#elevation-widget) (*Solo Superiore/Inferiore*, *Solo Android*).  
    Visualizza l'altitudine e la pendenza del percorso.

- [Corsie](../widgets/nav-widgets#lanes) (*Solo Superiore/Inferiore*).  
    Guida visiva alle corsie.

- [Barra dei preferiti sulla mappa](../widgets/markers.md#configure-marker-widgets) (*Solo Superiore/Inferiore*).  
    Mostra la distanza/direzione verso i preferiti salvati.  
    Configurabile per 1 o 2 preferiti.

- [Punto di navigazione](../widgets/nav-widgets.md#navigation-points).  
    Il set mostra la distanza rimanente fino a una destinazione, un punto intermedio, l'orario di arrivo a un punto intermedio o il tempo di percorrenza per un percorso calcolato.  
    Sono inclusi 4 widget: [Distanza dalla destinazione](../widgets/nav-widgets.md#distance-to-destination), [Distanza dall'intermedio](../widgets/nav-widgets.md#distance-to-intermediate), [Tempo all'intermedio](../widgets/nav-widgets.md#time-to-intermediate), [Tempo alla destinazione](../widgets/nav-widgets.md#time-to-destination).

- [Manovre del percorso](../widgets/nav-widgets.md#next-turn) (*Solo pannello Sinistro/Destro*).  
    Questo set si attiva durante la navigazione e mostra la distanza e la freccia per la manovra successiva.  
    Sono inclusi 3 widget: *Svolta successiva*, *Svolta successiva (piccolo)*, *Seconda svolta successiva*.

- [Limite di velocità](../widgets/nav-widgets.md#speed-limit).  
    Visualizza il limite di velocità attuale per la strada.

- [Tachimetro](../widgets/info-widgets.md#speedometer).  
    Mostra la velocità attuale basata sui dati GPS e la velocità limitata basata sui [dati di OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Nome della via](../widgets/nav-widgets#street-name) (*Solo Superiore/Inferiore*).  
    Visualizza la via attuale o imminente.

<br/>

***Widget informativi:***

- [Altitudine](../widgets/info-widgets.md#altitude-widgets).  
    Il set visualizza l'altitudine sul livello del mare per la posizione corrente o per il centro della mappa corrente.  
    Sono inclusi 2 widget: *Altitudine: posizione corrente*, *Elevazione: centro mappa*.

- [Velocità media](../widgets/info-widgets.md#average-speed).  
    Mostra la velocità media del viaggio corrente.

- [Livello batteria](../widgets/info-widgets.md#battery-level).  
    Visualizza il livello della batteria del dispositivo.

- [Widget Coordinate](../widgets/info-widgets#coordinates-widget) (*Solo Superiore/Inferiore*).  
    Questo set visualizza le coordinate geografiche della geolocalizzazione corrente.  
    Sono inclusi 2 widget: *Coordinate: centro mappa*, *Coordinate: posizione corrente*.

- [Velocità attuale](../widgets/info-widgets.md#current-speed).  
    Visualizza la velocità dal sensore GPS.

- [Ora attuale](../widgets/info-widgets.md#current-time).  
    Visualizza l'ora di sistema corrente.

- [Rapporto di planata](../widgets/info-widgets.md#glide-ratio).  
    I widget mostrano il rapporto di planata verso l'obiettivo e il rapporto di planata medio per il volo corrente.  
    Sono inclusi 2 widget: *Rapporto di planata verso l'obiettivo*, *Rapporto di planata medio*.

- [Info GPS](../widgets/info-widgets.md#gps-info) (*Solo Android*).  
    Mostra il numero di satelliti rilevati.

- [Preferiti sulla mappa](../widgets/markers.md).  
    Il set mostra la distanza o l'orario di arrivo previsto (ETA) per i primi due preferiti [nella lista](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    Sono inclusi 2 widget: *Primo preferito*, *Secondo preferito*.

- [Righello radiale](../widgets/info-widgets.md#radius-ruler).  
    Mostra la distanza tra la tua posizione e un punto sulla mappa, cerchiato dallo [strumento Righello radiale](../widgets/radius-ruler.md).

- [Alba, tramonto](../widgets/info-widgets.md#sun-position).  
    Mostra l'ora della prossima alba o tramonto per il centro della mappa.  
    Sono inclusi 2 widget: *Alba*, *Tramonto*.

<br/>

***Widget basati su plugin:***  

- [Note audio/video](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Accesso rapido per catturare media.  
    Sono inclusi 4 widget: *Su richiesta*, *Registra audio*, *Registra video*, *Scatta una foto*.

- [Widget sviluppatore](../widgets/info-widgets.md#developer-widgets).  
    Visualizza informazioni opzionali.  
    Sono inclusi 5 widget: *FPS rendering mappa*, *Inclinazione camera*, *Elevazione camera*, *Livello di zoom*, *Distanza dalla camera all'obiettivo*, *RAM disponibile*.  

- [Widget Sensori esterni](../widgets/info-widgets.md#external-sensors-widgets).  
    Il set aiuta a tracciare i dati dai sensori BLE/ANT+ in tempo reale.  
    Sono inclusi 6 widget: *Frequenza cardiaca*, *Potenza bicicletta* (*Solo Android*), *Cadenza bicicletta*, *Velocità bicicletta*, *Distanza bicicletta*, *Temperatura*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Apre l'app Mapillary per le immagini a livello stradale.

- [Stato di OsmAnd Tracker](../widgets/info-widgets.md#tracker-widget).  
    Accesso rapido all'[applicazione OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Widget Parcheggio](../widgets/info-widgets.md#parking-widget).  
    Distanza dal centro dello schermo alla posizione di parcheggio salvata.

- [Registrazione viaggio](../widgets/info-widgets.md#trip-recording-widgets).  
    Avvia e interrompe la registrazione della traccia e visualizza i dati della registrazione della traccia.  
    Sono inclusi 4 widget: *Distanza*, *Durata*, *Salita*, *Discesa*.

- [Meteo](../widgets/info-widgets.md#weather-widgets).  
    Visualizza informazioni meteorologiche dettagliate.  
    Sono inclusi 5 widget: *Temperatura*, *Pressione atmosferica*, *Vento*, *Nuvole*, *Precipitazioni*.

:::note Widget dipendenti dal pannello

- Disponibili solo nei **pannelli Superiore e Inferiore** e devono essere posizionati in righe separate: *Widget Coordinate, Widget Profilo altimetrico, Widget Corsie, Barra dei preferiti sulla mappa, Widget Nome della via*.
- Disponibili solo nei **pannelli Sinistro e Destro**: *Manovre del percorso*.

:::


### Righe {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Menu Configura schermata](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Menu Configura schermata](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



La funzione **Modalità riga** consente di aggiungere tutte le righe necessarie ai pannelli superiore e inferiore. È possibile visualizzare più widget per riga, aumentando la quantità di informazioni visibili.

***Come configurare le righe:***

- **Aggiungi widget**: Tocca il pulsante *Più* (Android) o *Aggiungi widget* (iOS), quindi seleziona dall'elenco dei widget disponibili.
- **Riordina widget**: Tocca il pulsante *Matita* (Android) o *Modifica* (iOS) per riorganizzare i widget.
- **Aggiungi righe**: Tocca il pulsante *Aggiungi riga* per creare nuove righe per i tuoi widget.
- **Sposta widget**: Trascina i widget tra righe diverse.
- **Accedi alle impostazioni del widget**: Tocca l'icona *\"i\"* (Android) o la freccia *\">\"* (iOS) per aprire le impostazioni del widget.
- **Salva modifiche**: Tocca *Applica* (Android) o *Fatto* (iOS) per salvare il layout.


#### Tipi di Widget e Restrizioni {#widget-types-and-restrictions}

La modalità consente di aggiungere **più di un widget in una singola riga** sui pannelli superiore e inferiore per visualizzare tutte le informazioni necessarie.  

- **Widget complessi**. È possibile aggiungere un solo widget complesso per riga. Questi includono:
    - [Barra dei preferiti sulla mappa (*Solo Android*)](../widgets/markers.md#configure-marker-widgets)
    - [Nome della via](../widgets/nav-widgets#street-name)
    - [Widget Coordinate](../widgets/info-widgets#coordinates-widget)
    - [Corsie](../widgets/nav-widgets#lanes)
    - [Profilo altimetrico (*Solo Android*)](../widgets/nav-widgets#elevation-widget)
    - [Manovre del percorso](../widgets/nav-widgets.md#next-turn)

- **Widget semplici**. È possibile aggiungere più widget semplici in una singola riga. Questi widget possono visualizzare *Nome*, *Unità di misura*, *Valore* e *Icona*.


### Pagine {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Modifica → Aggiungi pagina*  

![Pagina widget](@site/static/img/widgets/widget_page_1_andr.png) ![Pagina widget](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Modifica → Aggiungi pagina*

![Pagina widget](@site/static/img/widgets/widget_page_1_ios.png) ![Pagina widget](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

I widget nei pannelli destro e sinistro possono essere raggruppati in **Pagine**. La funzione **Modalità pagine** consente di aggiungere 5 pagine ai pannelli sinistro e destro.

***Come configurare le righe:***

- **Aggiungi una Pagina**. Vai alle impostazioni del Pannello Sinistro/Destro e tocca *Modifica → Aggiungi pagina*.
- **Organizza i widget per Pagina**. Questa funzione è utile quando sono necessari diversi set di widget per compiti diversi, come la navigazione rispetto alla consultazione della mappa.
- Le pagine consentono di creare **set di widget** per scenari specifici, migliorando il flusso di lavoro e riducendo il disordine.


## Impostazioni Widget {#widget-settings}

![Menu Configura schermata](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Menu Configura schermata](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Opzioni di dimensione del widget** (*per tutti i pannelli*):  
    È possibile personalizzare la dimensione dei **Widget semplici** nei **pannelli Superiore, Inferiore, Sinistro e Destro**:

    - **Piccolo**. Ideale per schermi compatti, risparmiando più spazio sullo schermo per le mappe.
    - **Medio** (*dimensione predefinita del widget*). Bilancia visibilità e utilizzo dello spazio.
    - **Grande**. Fornisce informazioni del widget più grandi e visibili.  

2. **Nascondere le icone dei widget** (*per i pannelli superiore e inferiore*):

    - Migliora la chiarezza e massimizza lo spazio per i dati importanti.
    - Particolarmente utile quando si visualizzano molti widget sulla stessa **riga**.

3. **Dimensione individuale per righe diverse** (*per tutti i pannelli*):

    - I widget possono essere dimensionati individualmente regolando la dimensione della riga e della colonna.
    - **NOTA:** La modifica della dimensione di un widget in una riga/colonna ridimensionerà tutti i widget in quella riga/colonna.

4. **Per modificare la dimensione del widget e la visibilità dell'icona:**

    - Seleziona un widget che hai già aggiunto al pannello.  
    - Tocca l'icona *Impostazioni* sul lato destro del campo del widget.
    - Tocca l'impostazione *Dimensione* e seleziona una delle dimensioni disponibili.
    - Passa alla posizione Off, nel campo *Mostra icona*.


## Personalizzazione Pannelli {#panels-customization}

### Menu Contestuale del Widget {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu contestuale del widget](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu contestuale del widget](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

Il **menu contestuale del widget** fornisce un modo rapido per gestire e configurare i widget direttamente dalla schermata della mappa. È possibile accedervi con un ***tocco prolungato*** su qualsiasi widget per personalizzare il layout dei widget senza lasciare la mappa.


- **Aggiungi widget a Destra/Sinistra** (solo per i *pannelli Superiore e Inferiore*)
    - Seleziona una posizione per il nuovo widget rispetto a quello corrente.
    - Scegli il widget dall'elenco [Widget disponibili](#widgets-catalog).

- **Aggiungi widget Sopra/Sotto** (solo per i *pannelli Sinistro e Destro*)
    - Seleziona se posizionare il nuovo widget sopra o sotto il widget corrente.
    - Tocca il widget richiesto nell'elenco per aggiungerlo alla posizione specificata.

- **Impostazioni**
    - Accedi alle impostazioni del widget (se disponibili) per personalizzarne l'aspetto o il comportamento.

- **Elimina**
    - Rimuovi il widget dal pannello.
    - Una richiesta di conferma assicura che l'azione sia intenzionale.

- **Azzera velocità media** (esempio di *Azioni specifiche del widget*)
    - Disponibile per il widget [Velocità media](../widgets/info-widgets.md#average-speed).
    - Tocco prolungato per azzerare istantaneamente il valore della velocità durante un viaggio.


### Copie di Widget {#copies-of-widgets}

*Menu OsmAnd → Configura schermata → Widget → Pannello*  

![Duplica widget](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd consente di aggiungere più istanze dello stesso widget a diversi pannelli o pagine. Questa funzione è particolarmente utile quando si necessita di informazioni coerenti su diverse viste o profili.  

***Come duplicare i widget:***

- **Aggiungi il widget**. Vai a: *Menu OsmAnd → Configura schermata → Widget → Pannello →* **Aggiungi** *widget*.
- **Duplica usando il menu contestuale**. Tocca il widget e seleziona **Duplica** dall'elenco delle azioni.
- **Metodo alternativo**. Seleziona lo stesso widget dall'elenco *Widget disponibili* e tocca *Aggiungi*.


### Sposta o Elimina {#move-or-delete}

*Menu OsmAnd → Configura schermata → Widget → Pannello*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



È possibile riorganizzare o rimuovere i widget dalla schermata dell'applicazione utilizzando la modalità **Modifica**.  

***Come spostare un widget:***

- Vai a: *Menu OsmAnd → Configura schermata → Widget → Pannello → Pulsante Modifica*.
- Tocco prolungato sull'**icona a destra** del widget.
- Trascinalo nella posizione desiderata nell'elenco dei widget.

***Come eliminare un widget:***  

- Segui gli stessi passaggi di cui sopra.
- Tocca l'**icona meno** a sinistra del nome del widget.
- Conferma l'eliminazione quando richiesto.


## Pulsanti {#buttons}

### Pulsanti Personalizzati {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Pagina widget](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Pagina widget](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Azione Rapida (Pulsanti personalizzati)** consente di aggiungere un elenco di singole azioni da tutte le [Azioni rapide](../widgets/quick-action.md#custom-buttons) disponibili. Queste azioni possono essere assegnate a uno o più pulsanti widget sulla schermata della mappa. I pulsanti personalizzati forniscono un accesso rapido alle azioni utilizzate di frequente.

### Pulsanti Predefiniti {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Pagina widget](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Pagina widget](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. I **Pulsanti predefiniti** consentono di personalizzare quali pulsanti mappa preimpostati sono visibili sulla schermata della mappa. È possibile scegliere di nascondere o mostrare i seguenti pulsanti:

    - [Modalità 3D](../widgets/map-buttons.md#3d-mode). Per iOS, il pulsante è sempre disponibile. Per Android, appare nell'elenco ed è disponibile per l'impostazione se è selezionato il motore di rendering della mappa [Versione 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

    - [Bussola](../widgets/map-buttons.md#display-options). Indica come è orientata la mappa sul dispositivo.  
    3 viste: *Sempre visibile*, *Sempre nascosta*, *Visibile se la mappa è ruotata*.

    - [Configura mappa](../map/configure-map-menu.md). Accedi alle opzioni per modificare lo stile della mappa, i livelli e le impostazioni aggiuntive.

    - [Menu](../widgets/map-buttons.md#main-menu). Apre il menu principale dell'applicazione per accedere a tutte le funzionalità.

    - [La mia posizione](../widgets/map-buttons.md#my-location-and-zoom). Centra la mappa sulla tua posizione attuale.

    - [Navigazione](../widgets/map-buttons.md#directions). Essenziale per la pianificazione del percorso e l'avvio della navigazione.

    - [Cerca](../widgets/map-buttons.md#search). Apre lo strumento di ricerca per trovare posizioni.

    - [Zoom avanti / indietro](../widgets/map-buttons.md#my-location-and-zoom). Regola il livello di zoom della mappa per mostrare più o meno dettagli.

2. Il **menu a tre punti** sulla schermata dei Pulsanti predefiniti contiene azioni come:

    - *Ripristina predefiniti*. Consente di riportare le impostazioni dei pulsanti al loro aspetto originale.
    - *Copia da un altro profilo*. Seleziona da quale profilo dell'elenco offerto desideri copiare le impostazioni dei pulsanti.

3. **L'aspetto del pulsante predefinito** (*Solo Android*) offre una varietà di opzioni di personalizzazione per questo tipo di pulsanti. Per modificare l'aspetto di un pulsante, tocca il pulsante richiesto dall'elenco e seleziona l'opzione [Aspetto](#button-appearance).


### Aspetto del Pulsante {#button-appearance}

<InfoAndroidOnly/>

![Aspetto del Pulsante](@site/static/img/widgets/button_appearance_settings_andr.png)

La funzione *Aspetto del pulsante* consente di personalizzare completamente l'aspetto dei pulsanti sull'interfaccia della mappa. Queste opzioni di personalizzazione sono disponibili sia per *Azione Rapida (Pulsanti personalizzati)* che per *Pulsanti predefiniti*, fornendo un controllo completo sull'aspetto dell'interfaccia della mappa e consentendo regolazioni precise del design dei pulsanti.

***Opzioni di personalizzazione***:

- **Icona**. Seleziona da un elenco di icone che rappresentano le azioni che hai già aggiunto, rendendo facile identificare le funzioni a colpo d'occhio.
- **Raggio dell'angolo**. Regola questa impostazione per cambiare la forma del pulsante, da angoli acuti e quadrati a bordi lisci e arrotondati.
- **Dimensione**. Scegli la dimensione del pulsante che meglio si adatta al tuo schermo e che risalta secondo necessità. Per i *Pulsanti predefiniti*, le dimensioni sono preimpostate e non possono essere regolate.
- **Opacità dello sfondo**. Controlla la visibilità dello sfondo del pulsante. Puoi impostarlo per essere completamente visibile o parzialmente trasparente, oppure visualizzare solo l'ombra della cornice e l'icona.


## Altro {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Pagina widget](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Altro*

![Pagina widget](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Distanza al tocco](../widgets/radius-ruler.md#distance-by-tap). Dà la possibilità di misurare la distanza dalla tua posizione al punto selezionato.
- [Tachimetro](../widgets/info-widgets.md#speedometer). Mostra la velocità attuale basata sui dati GPS e la velocità limitata basata sui [dati di OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). I dati visualizzati dipendono anche dall'impostazione [Tolleranza limite di velocità](../navigation/guidance/voice-navigation.md#speed-limit) di OsmAnd.


### Posizione Visualizzata (Posizione sulla schermata) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pagina widget](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Pagina widget](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Posizione sulla schermata* è il nome di questa impostazione nella versione iOS di OsmAnd.  

Consente di impostare il posizionamento del cursore su *[La mia posizione](../map/interact-with-map.md#my-location-and-zoom)* sulla mappa di OsmAnd. Sono disponibili tre opzioni:  

- **<Translate android="true" ids="position_on_map_center"/>**. Il cursore è sempre posizionato al centro dello schermo.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *La mia posizione* è posizionata leggermente sotto il centro dello schermo. Questa modalità consente di vedere più informazioni sulla mappa davanti al proprio movimento, il che è utile durante la navigazione.
- **<Translate android="true" ids="shared_string_automatic"/>**. Posiziona *La mia posizione* a seconda dell'*[Orientamento della mappa](../map/interact-with-map.md#map-orientation-modes)* (*In basso* - per la direzione di movimento, *Al centro* - per tutti gli altri).


## Azioni {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Pagina widget](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Qualsiasi pannello*

![Pagina widget](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

L'accesso ad azioni aggiuntive nella schermata Configura sono:

- *Android*. Situato nella schermata Configura in fondo allo schermo nella sezione *Azioni*: *Menu → Configura schermata → Azioni*.
- *Android / iOS*. Situato nelle schermate di ogni Pannello nel *menu a tre punti* nell'angolo in alto a destra dello schermo.

Azioni disponibili:

- **Ripristina predefiniti**. Questa funzione consente di ripristinare tutte le impostazioni ai valori predefiniti se si desidera ricominciare da capo o utilizzare solo quelle preimpostate all'avvio di OsmAnd.
- **Copia da un altro profilo**. Questa funzione consente di importare rapidamente le impostazioni da un altro profilo, selezionare quelle richieste dall'elenco e copiare.


## Cambia Profilo {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Per i dispositivi **Android**, è possibile cambiare profilo nella parte superiore della schermata principale di Configura Schermata utilizzando le icone dei profili disponibili.  
- Se si utilizza un dispositivo **iOS**, toccare l'icona del profilo nell'angolo superiore della schermata principale di Configura Schermata e selezionare il profilo richiesto dall'elenco per attivarlo.  

**Nota**: L'opzione *Cambia profilo* non visualizza tutti i profili esistenti, ma solo quelli che sono stati *attivati* nel menu Impostazioni.


## Articoli Correlati {#related-articles}

- [Pulsanti della mappa](./map-buttons.md)
- [Widget informativi](./info-widgets.md)
- [Widget di navigazione](./nav-widgets.md)
- [Righello radiale e Righello](./radius-ruler.md)
- [Widget Preferiti](./markers.md)
- [Azione Rapida](./quick-action.md)