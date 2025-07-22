---
source-hash: 27c365e2cc23607b9c9893a7baf13d93386a9e23a925c712b829dec94e7a4355
sidebar_position: 2
title:  Pulsanti della mappa
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

I pulsanti della mappa, tra cui *Zoom*, *Cerca*, *Indicazioni*, *Bussola*, *La mia posizione*, *Modalità 3D* e *Menu*, sono i controlli principali per interagire con la mappa. Ogni pulsante offre funzionalità specifiche per migliorare la tua esperienza di navigazione e utilizzo della mappa.


## La mia posizione e Zoom {#my-location-and-zoom}

![Menu della schermata di configurazione](@site/static/img/widgets/location_zoom_buttons.png)

Utilizza questi pulsanti per controllare come viene visualizzata la mappa sullo schermo del tuo dispositivo:

- **La mia posizione**. Mostra se il centro della mappa è sincronizzato con la geolocalizzazione corrente del tuo dispositivo.
- **Zoom**. Ti consente di regolare il livello di zoom della mappa per fornire più o meno dettagli.
Se desideri maggiori informazioni sull'utilizzo di questi pulsanti, puoi consultare l'articolo [Interagire con la mappa](../map/interact-with-map.md#my-location-and-zoom).


## Indicazioni {#directions}

![Il pulsante Indicazioni consente](@site/static/img/widgets/directions_button_allows.png)

Il pulsante **Indicazioni** è essenziale per la pianificazione e la navigazione del percorso:

- [Costruisci un percorso](../navigation/index.md). Usa questo pulsante per creare un percorso.
- [Avvia navigazione](../navigation/index.md). Avvia la navigazione passo-passo.
- In modalità navigazione, il pulsante *Indicazioni* non è visibile per impostazione predefinita, ma appare dopo un breve tocco sulla mappa.

Stati indicativi del pulsante *Indicazioni*:

- L'*icona predefinita grigia* indica che il percorso non è ancora stato creato. Toccando questa icona si apre la funzionalità di [configurazione del percorso](../navigation/setup/route-navigation.md).
- L'*icona predefinita blu* indica che il percorso è stato costruito, ma la navigazione non è ancora iniziata. Toccando questa icona si apre la funzionalità di [configurazione del percorso](../navigation/setup/route-navigation.md#start--stop-navigation).
- L'*icona a freccia blu* indica che la navigazione è attiva. Toccando questa icona si aprono i [dettagli del percorso corrente](../navigation/setup/route-details.md).


## Configura mappa {#configure-map}

![Configura mappa](@site/static/img/widgets/configure_map.png)

Il pulsante **Configura mappa** fornisce l'accesso al [menu Configura mappa](../map/configure-map-menu.md). L'icona riflette anche il [profilo app corrente](../personal/profiles.md), consentendoti di identificare e passare da un profilo all'altro.


## Menu principale {#main-menu}

![Pulsante Menu principale](@site/static/img/widgets/main_menu_button.png)

Il pulsante [**Menu principale**](../start-with/main-menu.md) apre il menu generale, garantendo l'accesso a [tutte le funzionalità dell'applicazione](../start-with/main-menu.md). In modalità navigazione, questo pulsante è nascosto per impostazione predefinita e diventa visibile dopo un breve tocco sulla mappa.


## Cerca {#search}

![Pulsante Cerca](@site/static/img/widgets/search_button.png)

Il pulsante Cerca offre un accesso rapido alle [funzionalità di ricerca](../search/index.md), consentendoti di trovare posizioni, punti di interesse e altre informazioni direttamente dalla mappa.


## Bussola {#compass}

Il pulsante Bussola indica l'orientamento della mappa sullo schermo del tuo dispositivo. Per ulteriori informazioni, fai riferimento all'articolo [Interagire con la mappa](../map/interact-with-map.md#map-orientation--compass).


### Modalità di orientamento della mappa {#map-orientation-modes}

- ![Bussola](@site/static/img/widgets/map_butt_manually_ios.png)
**Ruotata manualmente**. In questa modalità, puoi ruotare manualmente la mappa con un [gesto a due puntatori (tocco e rotazione con due dita)](../map/interact-with-map.md#gestures) in base alle tue preferenze. L'orientamento della mappa non dipende dalla direzione di marcia o dalla bussola del dispositivo, ma è determinato da te. La modalità di rotazione manuale è impostata per impostazione predefinita.

- ![Bussola](@site/static/img/widgets/map_butt_movem_dir_ios.png)
**Direzione del movimento**. In questa modalità, la mappa è orientata in base alla direzione del tuo movimento nota dai dati GPS. Ad esempio, se giri a destra, anche la mappa ruota in modo che il lato destro dello schermo corrisponda alla direzione del movimento. Per i dettagli, vai a [Ruota mappa per rilevamento](../map/interact-with-map#rotate-map-by-bearing).

- ![Bussola](@site/static/img/widgets/map_butt_compas_dir_ios.png)
**Direzione della bussola**. L'icona sul pulsante punta al Nord effettivo e la mappa si muove in base all'orientamento della bussola del tuo dispositivo. In questo modo, il nord della mappa corrisponde al nord reale e puoi vedere l'orientamento della mappa rispetto al terreno circostante. Il tuo dispositivo dovrebbe essere nella posizione più orizzontale possibile. Se il tuo dispositivo non dispone di un sensore bussola, l'orientamento della mappa rimane invariato.

- ![Bussola](@site/static/img/widgets/map_butt_north_up_ios.png)
**Nord in alto**. In questa modalità, la mappa è fissa (con un blocco rigido) nella direzione Nord, che è il bordo superiore del tuo dispositivo. Indipendentemente dalla direzione in cui si muove il dispositivo, la mappa rimane statica e puoi vedere la tua posizione rispetto all'ambiente circostante. La mappa non ha rotazione automatica o manuale.

### Comportamento del tocco della bussola {#compass-tapping-behavior}

Il pulsante bussola fornisce più azioni per controllare l'orientamento della mappa:

- **Tocco singolo**. Un *tocco singolo* del [pulsante Bussola](../widgets/map-buttons.md#compass) (situato nell'angolo in alto a sinistra dello schermo quando [visibile](../widgets/map-buttons.md#display-options)) riorienta istantaneamente l'orientamento della mappa *verso il Nord* in tutte le modalità di orientamento della mappa. Anche se la mappa è nella modalità *Direzione bussola*, ruota comunque per un momento e poi torna all'orientamento dinamico di quella modalità.

- **Doppio tocco**. Per passare rapidamente tra le modalità di orientamento della mappa, come seguire la direzione GPS o ruotare con il dispositivo, *tocca due volte* il [pulsante Bussola](../widgets/map-buttons.md#compass) (quando [visibile](../widgets/map-buttons.md#display-options)).

- **Tocco lungo**. Con un *tocco lungo* il [pulsante Bussola](../widgets/map-buttons.md#compass) (quando [visibile](../widgets/map-buttons.md#display-options)) puoi aprire un elenco di tutte le modalità di orientamento della mappa e selezionare quella richiesta. Questo elenco può essere aperto anche nelle [Impostazioni profilo](../personal/profiles.md#appearance).


### Opzioni di visualizzazione {#display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget Bussola](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget Bussola](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

L'icona della bussola sul pulsante punta sempre a Nord. Puoi selezionare come viene visualizzato il pulsante bussola sullo schermo.

- **Sempre visibile**. Il pulsante non scompare dallo schermo.
- **Sempre nascosto**. In questo caso, non puoi cambiare rapidamente l'orientamento della mappa, ma il pulsante non occuperà spazio sullo schermo.
- **Visibile se la mappa è ruotata**. Il pulsante non è visibile mentre la bussola punta a Nord sul bordo superiore del tuo dispositivo.


## Modalità 3D {#3d-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*

![Modalità 3D](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*

![Modalità 3D](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>

- *<Translate android="true" ids="shared_string_hidden"/>*. Se questa modalità è selezionata per un pulsante, è necessario utilizzare un gesto per cambiare la visualizzazione della mappa. Tocca la mappa con due dita e spostale su e giù per regolare l'inclinazione della mappa.
- *<Translate android="true" ids="shared_string_visible"/>*. Il pulsante viene sempre visualizzato sulla schermata della mappa.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. Il pulsante viene visualizzato sulla schermata della mappa quando si cambia la visualizzazione della mappa con un gesto [*due dita e sposta*](../map/interact-with-map.md#gestures).

### Impostazioni aggiuntive {#additional-settings}

1. **Visualizza il pulsante**. (*Per Android*) L'impostazione per il pulsante *Modalità 3D* appare nell'elenco della schermata Configura solo se è selezionato il motore di rendering della mappa [Versione 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

2. **Salva l'angolo**. Dopo essere passato alla modalità 3D e aver cambiato l'angolo manualmente con un gesto, l'angolo viene salvato e utilizzato la prossima volta che la modalità 3D viene attivata. Questa opzione viene salvata solo per il profilo selezionato in quel momento.

3. **Spostamento**. Puoi posizionare il pulsante ovunque sullo schermo del tuo dispositivo. Per farlo, tieni premuto il pulsante e, senza togliere il dito, trascinalo nella posizione desiderata.

4. **Posizione del pulsante**. La posizione del pulsante sulla mappa nella schermata dell'applicazione viene salvata separatamente per ogni profilo.

5. **Raccomandazione**. Si consiglia di scaricare e abilitare la [mappa Hillshade](../plugins/topography.md#hillshade-slope-and-altitude-layers) per la regione selezionata.


## Pulsanti personalizzati {#custom-buttons}

Il [widget Azione rapida](./quick-action.md) è un pulsante configurabile con vari tipi di azione che possono essere assegnati. È anche possibile avere più [Pulsanti personalizzati](./quick-action.md#custom-buttons).


## Aspetto dei pulsanti della mappa {#map-button-appearance}

<InfoAndroidOnly/>

| Pulsanti predefiniti | Pulsanti personalizzati |
| :--- | :--- |
| ![Aspetto dei pulsanti della mappa](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![Aspetto dei pulsanti della mappa](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

Le impostazioni per l'aspetto dei pulsanti della mappa sono disponibili tramite i seguenti menu:

- *Menu → Configura schermata → Pulsanti → Pulsanti predefiniti*
- *Menu → Configura schermata → Pulsanti personalizzati → Azione rapida → menu a tre punti → Aspetto*

La personalizzazione dell'aspetto dei pulsanti ti consente di regolare le dimensioni, la forma, l'icona e l'opacità dello sfondo sia per [Azione rapida (pulsanti personalizzati)](../widgets/quick-action.md#button-appearance) che per [Pulsanti predefiniti](../widgets/configure-screen.md#button-appearance). Questa flessibilità ti consente di personalizzare l'interfaccia in base alle tue preferenze e migliorare l'usabilità.


## Articoli correlati {#related-articles}

- [Configura schermata](./configure-screen.md)
- [Widget informativi](./info-widgets.md)
- [Widget di navigazione](./nav-widgets.md)
- [Righello-raggio e Righello](./radius-ruler.md)
- [Widget marcatori](./markers.md)
- [Azione rapida](./quick-action.md)

> *Ultimo aggiornamento: Febbraio 2025*