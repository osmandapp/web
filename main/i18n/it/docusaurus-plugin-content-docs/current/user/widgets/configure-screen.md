---
source-hash: cbfcf0aa9a07f3ab40e670385d79d1a04431696bcbef518decc18f41ef282921
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

Il menu **Configura schermata** in OsmAnd ti permette di personalizzare l'interfaccia della mappa aggiungendo e organizzando widget, pulsanti e azioni rapide su più pannelli.

Puoi:

- Aggiungere widget [informativi](../widgets/info-widgets.md), [di navigazione](../widgets/nav-widgets.md) e [relativi ai marcatori](../widgets/markers.md).
- Aggiungere o modificare [Azioni rapide](../widgets/quick-action.md), [Pulsanti personalizzati](../widgets/quick-action.md#custom-buttons) e [Pulsanti predefiniti](../widgets/map-buttons.md).
- Organizzare i widget in pannelli (superiore, inferiore, sinistro, destro, centrale).
- Creare più **pagine** all'interno dei pannelli laterali, scegliere la dimensione dei widget.
- Scegliere l'altezza della riga e attivare/disattivare le icone dei widget.

Tutti i widget sono [dipendenti dal profilo](../personal/profiles.md) — ogni profilo ha il proprio layout, ordine, visibilità e impostazioni.


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

OsmAnd ti permette di organizzare l'interfaccia della mappa usando pannelli widget personalizzabili.  
Puoi aggiungere, riordinare, raggruppare e rimuovere widget nei seguenti pannelli:

- **Pannello superiore**
- **Pannello inferiore**
- **Pannello sinistro**
- **Pannello destro**

Ogni pannello supporta diversi comportamenti di layout:

- I **pannelli superiore e inferiore** visualizzano i widget in righe. Puoi posizionare uno o due widget per riga e aggiungere più righe se necessario.
- I **pannelli sinistro e destro** supportano più pagine. Puoi raggruppare i widget in pagine separate e passare da una all'altra.


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

- [Rilevamento](../widgets/nav-widgets.md#bearing).  
    Questo set mostra il rilevamento assoluto o relativo a un obiettivo in unità angolari.  
    Sono inclusi 3 widget: *Rilevamento relativo*, *Rilevamento magnetico*, *Rilevamento vero*.

- [Profilo altimetrico](../widgets/nav-widgets#elevation-widget) (*Solo superiore/inferiore*, *Solo Android*).  
    Visualizza l'altitudine e la pendenza del percorso.

- [Corsie](../widgets/nav-widgets#lanes) (*Solo superiore/inferiore*).  
    Guida visiva delle corsie.

- [Barra dei marcatori della mappa](../widgets/markers.md#configure-marker-widgets-android) (*Solo superiore/inferiore*).  
    Mostra distanza/direzione ai marcatori salvati.  
    Configurabile per 1 o 2 marcatori.

- [Punto di navigazione](../widgets/nav-widgets.md#navigation-points).  
    Il set mostra la distanza rimanente a una destinazione, un punto intermedio, l'ora di arrivo a un punto intermedio o il tempo di viaggio per un percorso calcolato.  
    Sono inclusi 4 widget: [Distanza dalla destinazione](../widgets/nav-widgets.md#distance-to-destination), [Distanza dal punto intermedio](../widgets/nav-widgets.md#distance-to-intermediate), [Tempo al punto intermedio](../widgets/nav-widgets.md#time-to-intermediate), [Tempo alla destinazione](../widgets/nav-widgets.md#time-to-destination).

- [Manovre del percorso](../widgets/nav-widgets.md#next-turn) (*Solo pannello sinistro/destro*).  
    Questo set si attiva durante la navigazione e mostra la distanza e la freccia per la prossima manovra.  
    Sono inclusi 3 widget: *Prossima svolta*, *Prossima svolta (piccola)*, *Seconda prossima svolta*.

- [Limite di velocità](../widgets/nav-widgets.md#speed-limit).  
    Visualizza il limite di velocità attuale per la strada.

- [Tachimetro](../widgets/info-widgets.md#speedometer).  
    Mostra la velocità attuale basata sui dati GPS e la velocità limitata basata sui [dati OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Nome della strada](../widgets/nav-widgets#street-name) (*Solo superiore/inferiore*).  
    Visualizza la strada attuale o successiva.

<br/>

***Widget informativi:***

- [Altitudine](../widgets/info-widgets.md#altitude-widgets).  
    Il set visualizza l'altitudine sul livello del mare per la posizione attuale o per il centro della mappa attuale.  
    Sono inclusi 2 widget: *Altitudine: posizione attuale*, *Altitudine: centro mappa*.

- [Velocità media](../widgets/info-widgets.md#average-speed-widget).  
    Mostra la velocità media del viaggio attuale.

- [Livello batteria](../widgets/info-widgets.md#battery-level).  
    Visualizza il livello della batteria del dispositivo.

- [Widget coordinate](../widgets/info-widgets#coordinates-widget) (*Solo superiore/inferiore*).  
    Questo set visualizza le coordinate geografiche della geolocalizzazione attuale.  
    Sono inclusi 2 widget: *Coordinate: centro mappa*, *Coordinate: posizione attuale*.

- [Velocità attuale](../widgets/info-widgets.md#speed).  
    Visualizza la velocità dal sensore GPS.

- [Ora attuale](../widgets/info-widgets.md#current-time).  
    Visualizza l'ora di sistema attuale.

- [Rapporto di planata](../widgets/info-widgets.md#glide-ratio).  
    I widget mostrano il rapporto di planata verso l'obiettivo e il rapporto di planata medio per il volo attuale.  
    Sono inclusi 2 widget: *Rapporto di planata verso l'obiettivo*, *Rapporto di planata medio*.

- [Info GPS](../widgets/info-widgets.md#gps-info) (*Solo Android*).  
    Mostra il numero di satelliti rilevati.

- [Marcatori mappa](../widgets/markers.md).  
    Il set mostra la distanza o l'ora di arrivo stimata (ETA) per i primi due marcatori nell'[elenco itinerario](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    Sono inclusi 2 widget: *Primo marcatore*, *Secondo marcatore*.

- [Righello raggio](../widgets/info-widgets.md#radius-ruler).  
    Mostra la distanza tra la tua posizione e un punto sulla mappa, cerchiato dallo [strumento righello raggio](../widgets/radius-ruler.md).

- [Alba, tramonto](../widgets/info-widgets.md#sunset-and-sunrise).  
    Mostra l'ora della prossima alba o tramonto per il centro della mappa.  
    Sono inclusi 2 widget: *Alba*, *Tramonto*.

<br/>

***Widget basati su plugin:***  

- [Note audio/video](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Accesso rapido per acquisire media.  
    Sono inclusi 4 widget: *Su richiesta*, *Registra audio*, *Registra video*, *Scatta una foto*.

- [Widget sviluppatore](../widgets/info-widgets.md#developer-widgets).  
    Visualizza informazioni opzionali.  
    Sono inclusi 5 widget: *FPS rendering mappa*, *Inclinazione telecamera*, *Elevazione telecamera*, *Livello zoom*, *Distanza dalla telecamera all'obiettivo*, *RAM disponibile*.  

- [Widget sensori esterni](../widgets/info-widgets.md#external-sensors-widgets).  
    Il set aiuta a tracciare i dati dei sensori BLE/ANT+ in tempo reale.  
    Sono inclusi 6 widget: *Frequenza cardiaca*, *Potenza bicicletta* (*Solo Android*), *Cadenza bicicletta*, *Velocità bicicletta*, *Distanza bicicletta*, *Temperatura*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Apre l'app Mapillary per le immagini a livello stradale.

- [Stato OsmAnd Tracker](../widgets/info-widgets.md#tracker-widget).  
    Accesso rapido all'[applicazione OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Widget parcheggio](../widgets/info-widgets.md#parking-widget).  
    Distanza dal centro dello schermo alla posizione di parcheggio salvata.

- [Registrazione viaggio](../widgets/info-widgets.md#trip-recording-widgets).  
    Avvia e interrompe la registrazione della traccia e visualizza i dati di registrazione della traccia.  
    Sono inclusi 4 widget: *Distanza*, *Durata*, *Salita*, *Discesa*.

- [Meteo](../widgets/info-widgets.md#weather-widgets).  
    Visualizza informazioni meteorologiche dettagliate.  
    Sono inclusi 5 widget: *Temperatura*, *Pressione atmosferica*, *Vento*, *Nuvole*, *Precipitazioni*.

:::note Widget dipendenti dal pannello

- Disponibili solo nei **pannelli superiore e inferiore** e devono essere posizionati in righe separate: *Widget coordinate, Widget profilo altimetrico, Widget corsie, Barra marcatori mappa, Widget nome strada*.
- Disponibili solo nei **pannelli sinistro e destro**: *Manovre del percorso*.

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



La funzione **Modalità riga** ti permette di aggiungere tutte le righe necessarie ai pannelli superiore e inferiore. Puoi visualizzare più widget per riga, aumentando la quantità di informazioni visibili.

***Come configurare le righe:***

- **Aggiungi widget**: Tocca il pulsante *Più* (Android) o *Aggiungi widget* (iOS), quindi seleziona dall'elenco dei widget disponibili.
- **Riordina widget**: Tocca il pulsante *Matita* (Android) o *Modifica* (iOS) per riorganizzare i widget.
- **Aggiungi righe**: Tocca il pulsante *Aggiungi riga* per creare nuove righe per i tuoi widget.
- **Sposta widget**: Trascina i widget tra le diverse righe.
- **Accedi alle impostazioni del widget**: Tocca l'icona *"i"* (Android) o la freccia *">"* (iOS) per aprire le impostazioni del widget.
- **Salva modifiche**: Tocca *Applica* (Android) o *Fatto* (iOS) per salvare il layout.


#### Tipi di widget e restrizioni {#widget-types-and-restrictions}

La modalità ti permette di aggiungere **più di un widget in una singola riga** sui pannelli superiore e inferiore per visualizzare quante più informazioni necessarie.  

- **Widget complessi**. Solo un widget complesso può essere aggiunto per riga. Questi includono:
    - [Barra marcatori mappa (*Solo Android*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Nome strada](../widgets/nav-widgets#street-name)
    - [Widget coordinate](../widgets/info-widgets#coordinates-widget)
    - [Corsie](../widgets/nav-widgets#lanes)
    - [Profilo altimetrico (*Solo Android*)](../widgets/nav-widgets#elevation-widget)
    - [Manovre del percorso](../widgets/nav-widgets.md#next-turn)

- **Widget semplici**. Possono essere aggiunti più widget semplici a una singola riga. Questi widget possono visualizzare *Nome*, *Unità di misura*, *Valore* e *Icona*.


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

I widget nei pannelli destro e sinistro possono essere raggruppati in **Pagine**. La funzione **Modalità pagine** ti permette di aggiungere 5 pagine ai pannelli sinistro e destro.

***Come configurare le righe:***

- **Aggiungi una pagina**. Vai alle impostazioni del pannello sinistro/destro e tocca *Modifica → Aggiungi pagina*.
- **Organizza i widget per pagina**. Questa funzione è utile quando sono necessari diversi set di widget per diverse attività, come la navigazione rispetto alla navigazione sulla mappa.
- Le pagine ti permettono di creare **set di widget** per scenari specifici, migliorando il flusso di lavoro e riducendo il disordine.


## Impostazioni Widget {#widget-settings}

![Menu Configura schermata](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Menu Configura schermata](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Opzioni dimensione widget** (*per tutti i pannelli*):  
    Puoi personalizzare la dimensione dei **widget semplici** nei **pannelli superiore, inferiore, sinistro e destro**:

    - **Piccolo**. Ideale per display compatti, risparmiando più spazio sullo schermo per le mappe.
    - **Medio** (*dimensione widget predefinita*). Bilancia visibilità e utilizzo dello spazio.
    - **Grande**. Fornisce informazioni widget più grandi e visibili.  

2. **Nascondere le icone dei widget** (*per i pannelli superiore e inferiore*):

    - Migliora la chiarezza e massimizza lo spazio per i dati importanti.
    - Particolarmente utile quando si visualizzano molti widget sulla stessa **riga**.

3. **Dimensione individuale per diverse righe** (*per tutti i pannelli*):

    - I widget possono essere dimensionati individualmente regolando la dimensione di riga e colonna.
    - **NOTA:** La modifica della dimensione di un widget in una riga/colonna ridimensionerà tutti i widget in quella riga/colonna.

4. **Per modificare la dimensione del widget e la visibilità dell'icona:**

    - Seleziona un widget che hai già aggiunto al pannello.  
    - Tocca l'icona *Impostazioni* sul lato destro del campo del widget.
    - Tocca l'impostazione *Dimensione* e seleziona una delle dimensioni disponibili.
    - Passa alla posizione Off, nel campo *Mostra icona*.


## Personalizzazione Pannelli {#panels-customization}

### Menu contestuale del widget {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Duplicato widget](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Duplicato widget](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

Il **menu contestuale del widget** fornisce un modo rapido per gestire e configurare i widget direttamente dalla schermata della mappa. Puoi accedervi ***toccando a lungo*** qualsiasi widget per personalizzare il layout dei widget senza lasciare la mappa.

**Per i pannelli superiore e inferiore**  

- *Aggiungi widget a destra/sinistra:*

    - Seleziona una posizione per il nuovo widget rispetto a quello attuale.
    - Scegli il widget dall'elenco [Widget disponibili](#widgets-for-all-panels).

**Per i pannelli sinistro e destro**  

- *Aggiungi widget sopra/sotto:*

    - Seleziona se posizionare il nuovo widget sopra o sotto il widget attuale.
    - Tocca il widget richiesto nell'elenco per aggiungerlo alla posizione specificata.

**Azioni generali per tutti i pannelli**  

- *Impostazioni*.
    - Accedi alle impostazioni del widget (se disponibili) per personalizzarne l'aspetto o il comportamento.

- *Reset velocità media*.
    - Disponibile per il widget [Velocità media](../widgets/info-widgets.md#average-speed).
    - Tocca a lungo per reimpostare istantaneamente il valore della velocità durante un viaggio.

- *Elimina*.
    - Rimuovi il widget dal pannello.
    - Un prompt di conferma assicura che l'azione sia intenzionale.

### Copie di widget {#copies-of-widgets}

*Menu OsmAnd → Configura schermata → Widget → Pannello*  

![Duplicato widget](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd ti permette di aggiungere più istanze dello stesso widget a pannelli o pagine diverse. Questa funzione è particolarmente utile quando hai bisogno di informazioni coerenti tra diverse visualizzazioni o profili.  

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



Puoi riorganizzare o rimuovere i widget dalla schermata dell'applicazione usando la modalità **Modifica**.  

***Come spostare un widget:***

- Vai a: *Menu OsmAnd → Configura schermata → Widget → Pannello → Pulsante Modifica*.
- Tocca a lungo l'**icona a destra** del widget.
- Trascinalo nella posizione desiderata nell'elenco dei widget.

***Come eliminare un widget:***  

- Segui gli stessi passaggi di cui sopra.
- Tocca l'**icona meno** a sinistra del nome del widget.
- Conferma l'eliminazione quando richiesto.


## Pulsanti {#buttons}

### Pulsanti personalizzati {#custom-buttons}

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

**Azione rapida (Pulsanti personalizzati)** ti permette di aggiungere un elenco di singole azioni da tutte le [Azioni rapide](../widgets/quick-action.md#custom-buttons) disponibili. Queste azioni possono essere assegnate a uno o più pulsanti widget sulla schermata della mappa. I pulsanti personalizzati forniscono un accesso rapido alle azioni usate frequentemente.

### Pulsanti predefiniti {#default-buttons}

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

1. I **pulsanti predefiniti** ti permettono di personalizzare quali pulsanti mappa preimpostati sono visibili sulla schermata della mappa. Puoi scegliere di nascondere o mostrare i seguenti pulsanti:

    - [Modalità 3D](../widgets/map-buttons.md#3d-mode). Per iOS, il pulsante è sempre disponibile. Per Android, appare nell'elenco ed è disponibile per l'impostazione se è selezionato il motore di rendering della mappa [Versione 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

    - [Bussola](../widgets/map-buttons.md#display-options). Indica come la mappa è orientata sul dispositivo.  
    3 visualizzazioni: *Sempre visibile*, *Sempre nascosta*, *Visibile se la mappa è ruotata*.

    - [Configura mappa](../map/configure-map-menu.md). Accedi alle opzioni per modificare lo stile, i livelli e le impostazioni aggiuntive della mappa.

    - [Menu](../widgets/map-buttons.md#main-menu). Apre il menu principale dell'applicazione per accedere a tutte le funzioni.

    - [La mia posizione](../widgets/map-buttons.md#my-location-and-zoom). Centra la mappa sulla tua posizione attuale.

    - [Navigazione](../widgets/map-buttons.md#directions). Essenziale per la pianificazione del percorso e l'avvio della navigazione.

    - [Cerca](../widgets/map-buttons.md#search). Apre lo strumento di ricerca per trovare posizioni.

    - [Zoom avanti / indietro](../widgets/map-buttons.md#my-location-and-zoom). Regola il livello di zoom della mappa per mostrare più o meno dettagli.

2. Il **menu a tre punti** nella schermata dei pulsanti predefiniti contiene azioni come:

    - *Ripristina predefiniti*. Ti permette di riportare le impostazioni dei pulsanti al loro aspetto originale.
    - *Copia da un altro profilo*. Seleziona da quale profilo dall'elenco offerto vuoi copiare le impostazioni dei pulsanti.

3. L'**aspetto predefinito dei pulsanti** (*Solo Android*) offre una varietà di opzioni di personalizzazione per questi tipi di pulsanti. Per modificare l'aspetto di un pulsante, tocca il pulsante richiesto dall'elenco e seleziona l'opzione [Aspetto](#button-appearance).


### Aspetto del pulsante {#button-appearance}

<InfoAndroidOnly/>

![Aspetto del pulsante](@site/static/img/widgets/button_appearance_settings_andr.png)

La funzione *Aspetto del pulsante* ti permette di personalizzare completamente l'aspetto dei pulsanti sulla tua interfaccia mappa. Queste opzioni di personalizzazione sono disponibili sia per i *Pulsanti rapidi (Pulsanti personalizzati)* che per i *Pulsanti predefiniti*, fornendo un controllo completo sull'aspetto dell'interfaccia mappa e consentendo regolazioni precise al design dei pulsanti.

***Opzioni di personalizzazione***:

- **Icona**. Seleziona da un elenco di icone che rappresentano le azioni che hai già aggiunto, rendendo facile identificare le funzioni a colpo d'occhio.
- **Raggio d'angolo**. Regola questa impostazione per cambiare la forma del pulsante, da angoli acuti e quadrati a bordi lisci e arrotondati.
- **Dimensione**. Scegli la dimensione del pulsante che meglio si adatta al tuo schermo e che risalta come necessario. Per i *Pulsanti predefiniti*, le dimensioni sono preimpostate e non possono essere regolate.
- **Opacità dello sfondo**. Controlla la visibilità dello sfondo del pulsante. Puoi impostarlo completamente visibile o parzialmente trasparente, o visualizzare solo l'ombra del bordo e l'icona.


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
- [Distanza al tocco](../widgets/radius-ruler.md#distance-by-tap). Permette di misurare la distanza dalla tua posizione al punto selezionato.
- [Tachimetro](../widgets/info-widgets.md#speedometer). Mostra la velocità attuale basata sui dati GPS e la velocità limitata basata sui [dati OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). I dati visualizzati dipendono anche dall'impostazione [Tolleranza limite di velocità](../navigation/guidance/voice-navigation.md#speed-limit) di OsmAnd.


### Posizione visualizzazione (Posizione della posizione sullo schermo) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pagina widget](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Pagina widget](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Posizione della posizione sullo schermo* è il nome di questa impostazione nella versione iOS di OsmAnd.  

Ti permette di impostare il posizionamento del cursore su *[La mia posizione](../map/interact-with-map.md#my-location-and-zoom)* sulla mappa di OsmAnd. Sono disponibili tre opzioni:  

- **<Translate android="true" ids="position_on_map_center"/>**. Il cursore è sempre posizionato al centro dello schermo.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *La mia posizione* è posizionata leggermente sotto il centro dello schermo. Questa modalità ti permette di vedere più informazioni sulla mappa davanti al tuo movimento, il che è utile durante la navigazione.
- **<Translate android="true" ids="shared_string_automatic"/>**. Posiziona *La mia posizione* a seconda dell'[Orientamento mappa](../map/interact-with-map.md#map-orientation-modes) (*In basso* - per la direzione di movimento, *Centro* - per tutti gli altri).


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

L'accesso ad azioni aggiuntive nella schermata Configura si trova:

- *Android*. Nella schermata Configura, in fondo alla schermata, nella sezione *Azioni*: *Menu → Configura schermata → Azioni*.
- *Android / iOS*. Nelle schermate di ogni Pannello nel *menu a tre punti* nell'angolo in alto a destra dello schermo.

Azioni disponibili:

- **Ripristina predefiniti**. Questa funzione ti permette di ripristinare tutte le impostazioni ai valori predefiniti se vuoi ricominciare da capo, o usare solo quelli preimpostati all'avvio di OsmAnd.
- **Copia da un altro profilo**. Questa funzione ti permette di importare rapidamente le impostazioni da un altro profilo, selezionando quelle richieste dall'elenco e copiandole.


## Cambia profilo {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menu Configura schermata](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Per i dispositivi **Android**, puoi cambiare profilo nella parte superiore della schermata iniziale di Configura Schermata usando le icone del profilo disponibili.  
- Se stai usando un dispositivo **iOS**, tocca l'icona del profilo nell'angolo in alto della schermata iniziale di Configura Schermata e seleziona il profilo richiesto dall'elenco per attivarlo.  

**Nota bene**. L'opzione *Cambia profilo* non visualizza tutti i profili esistenti, ma solo quelli che sono stati *attivati* nel menu Impostazioni.


## Articoli correlati {#related-articles}

- [Pulsanti mappa](./map-buttons.md)
- [Widget informativi](./info-widgets.md)
- [Widget di navigazione](./nav-widgets.md)
- [Righello raggio e Righello](./radius-ruler.md)
- [Widget marcatore](./markers.md)
- [Azione rapida](./quick-action.md)

> *Ultimo aggiornamento: Luglio 2025*