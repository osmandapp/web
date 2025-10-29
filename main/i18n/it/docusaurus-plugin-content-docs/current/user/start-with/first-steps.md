---
source-hash: 22db732c5f66852486fa2129937bfba2c697d211dccbcef555621bf176facb12
sidebar_position: 1
title:  Primi Passi
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Panoramica {#overview}

Benvenuti in OsmAnd (OpenStreetMap Automated Navigation Directions)!  

Scoprite come scaricare le mappe, come configurare l'applicazione, come usare la mappa e creare un percorso, come avviare la navigazione e come cercare i punti di interesse. Familiarizzate con i punti chiave della politica sulla privacy di OsmAnd e dei permessi richiesti.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione offline Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigazione offline iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Installare OsmAnd {#install-osmand}

OsmAnd è un'applicazione mobile per mappe e navigazione disponibile per **Android** e **iOS**. È possibile scaricarla dai market più popolari.

**Market Android**: [Google play store](https://play.google.com/store/apps/details?id=net.osmand) e [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Leggi di più](../purchases/index.md) sulle versioni di OsmAnd e sugli acquisti.  


## Benvenuti in OsmAnd {#welcome-to-osmand}

Il nostro obiettivo è creare un'applicazione orientata alle mappe completamente funzionale che possa essere utilizzata per vari scopi offline e online. L'applicazione ha molte funzionalità, quindi non dovrete passare da un'app all'altra e tutto sarà a portata di mano.

- Visualizzare una mappa mondiale con molti dettagli mostrati in [diversi stili di mappa](../map/vector-maps.md).
- Visualizzare, [cercare](../search/search-poi.md) e salvare vari [Punti di interesse](../map/point-layers-on-map.md).
- [Pianificare un percorso](../plan-route/create-route.md) in auto, bicicletta, a piedi e combinarli in percorsi multimodali.
- Avviare la [navigazione con guida vocale](../navigation/guidance/voice-navigation.md) quando si accende e si spegne lo schermo.
- Arricchire il vostro viaggio turistico con [Wikipedia](../plugins/wikipedia.md) e [Wikivoyage](../plan-route/travel-guides.md) offline.
- Personalizzare completamente come [la mappa viene visualizzata](../map/configure-map-menu.md) e quali [widget](../widgets/index.md) sono mostrati su di essa.
- Navigare [seguendo un percorso](../navigation/setup/route-navigation.md), [seguendo una traccia data](../navigation/setup/gpx-navigation.md), [con i trasporti pubblici](../navigation/routing/public-transport-navigation.md) e [fuoristrada](../navigation/setup/markers-navigation.md).
- Tutto funziona **Offline**.
- E non dimenticate di contribuire a [OpenStreetMap](https://www.openstreetmap.org/) con il [Plugin di modifica OSM](../plugins/osm-editing.md).


## Guida alle Azioni {#actions-guide}

### Permesso di accedere alla posizione {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Posizione precisa android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Posizione precisa iOS](@site/static/img/steps/first_start_ios.png) ![Posizione precisa iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Si consiglia di concedere a OsmAnd il permesso di ricevere informazioni sulla posizione precisa del dispositivo. Non raccogliamo, utilizziamo o condividiamo le vostre informazioni private, quindi l'accesso alla geolocalizzazione precisa è necessario per il corretto funzionamento offline della ricerca, della navigazione e di altre funzioni di OsmAnd.  


### Come scaricare le mappe {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mostra sulla mappa](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mostra sulla mappa](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

L'app OsmAnd funziona con diversi tipi di mappe, ma può funzionare pienamente solo con le mappe offline scaricate, quindi dopo la schermata *<Translate android="true" ids="get_started"/>* viene richiesto di [*scaricare la mappa*](../start-with/download-maps.md#initial-setup-screen) della propria regione. È possibile scegliere una regione diversa, ripristinare da [OsmAnd Cloud](../personal/osmand-cloud.md), o saltare questo passaggio e scaricare le mappe in un secondo momento.  
Per altre opzioni di download delle mappe disponibili, consultare l'articolo [Scaricare le mappe](../start-with/download-maps.md).

:::note Iniziare a lavorare con le mappe offline
OsmAnd non può funzionare correttamente senza le mappe offline scaricate. Sebbene l'applicazione supporti mappe [Vettoriali](../map/vector-maps.md) e [Raster](../map/raster-maps.md), si consiglia vivamente di iniziare a lavorare con le mappe vettoriali offline per far funzionare correttamente tutte le funzioni come [Ricerca](../search/index.md), [Navigazione](../navigation/index.md) e [Menu contestuale](../map/map-context-menu.md).
:::


### Come scaricare le mappe per il mondo intero {#how-download-maps-for-the-whole-world}

Sebbene OsmAnd consenta di scaricare le mappe per tutte le regioni disponibili, non esiste un unico pacchetto per scaricare il mondo intero in una sola volta. È invece possibile scaricare le mappe dei singoli Paesi o regioni in base alle proprie esigenze.

***Punti chiave:***

- **OsmAnd Pro** e **Maps+** offrono **download illimitati di mappe**, ma è comunque necessario scaricare le mappe una regione alla volta.
- **Limitazioni di archiviazione.** Assicurarsi che il dispositivo disponga di spazio sufficiente prima di scaricare più regioni.
- **Aggiornamenti automatici.** Una volta scaricate, le mappe possono essere aggiornate tramite *Menu → Mappe e risorse → Aggiornamenti.*


### Come cambiare la lingua dell'app {#how-to-change-app-language}

L'opzione *Lingua di visualizzazione* viene utilizzata per cambiare la lingua dell'intera app, inclusi i messaggi a comparsa, il testo interno, i messaggi e altro ancora. Fino ad Android 12, OsmAnd consente di personalizzare la lingua di visualizzazione in base alle proprie preferenze direttamente nell'app. A partire da Android 13 e sui dispositivi iOS, la lingua di visualizzazione può essere modificata solo nelle impostazioni di sistema (vedere come modificare le preferenze linguistiche per app in [Android](https://developer.android.com/guide/topics/resources/app-languages) e [iOS](https://developer.apple.com/news/?id=u2cfuj88)).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare a: *Impostazioni → App → OsmAnd → Lingua*

![Impostazioni Generali Lingua Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *Impostazioni → OsmAnd Maps → Lingua*

![Impostazioni Generali Lingua iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Nessuna opzione per impostare le lingue dell'app
Su alcuni dispositivi Android (Xiaomi con Muiu 14), non c'è l'opzione per impostare le lingue delle app individualmente nelle impostazioni di sistema, quindi la lingua di OsmAnd può essere cambiata solo con la lingua dell'intero sistema. È possibile consultare la discussione su [GitHub discussion](https://github.com/osmandapp/OsmAnd/issues/16990) per ulteriori informazioni.
:::


### Come gestire le impostazioni {#how-to-manage-your-settings}

È possibile gestire le impostazioni dell'applicazione come [Impostazioni globali](../personal/global-settings.md) o come [Configurazione del profilo](../personal/profiles.md) tramite il [Menu principale](../start-with/main-menu.md). L'applicazione viene fornita con un elenco predefinito di profili che possono essere modificati in seguito. Ogni profilo può essere considerato come un'applicazione di mappe personalizzata per scopi specifici. Per impostazione predefinita, i profili servono solo come diverse modalità di navigazione.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gestisci profilo Android](@site/static/img/settings/manage_profile_android.png) ![Configura profilo Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gestisci profilo iOS](@site/static/img/settings/manage_profile_ios.png) ![Configura profilo iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Leggi di più](../personal/global-settings.md) sulle Impostazioni globali.
[Leggi di più](../personal/profiles.md) sulle Impostazioni del profilo.


### Come configurare i plugin {#how-to-configure-plugins}

I [Plugin](../plugins/index.md#configure-plugin) estendono notevolmente le funzionalità dell'applicazione. Quasi tutti i plugin hanno le proprie [Azioni sulla mappa](../map/map-context-menu.md), [Livelli mappa](../map/configure-map-menu.md), [Download mappe](../start-with/download-maps.md) e [Impostazioni](../plugins/#plugin-settings).  

È possibile abilitare/disabilitare i plugin tramite [Menu principale](../start-with/main-menu.md) → [Plugin](../plugins/index.md#configure-plugin).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Abilita plugin Android](@site/static/img/settings/plugins_enable_android.png) ![Esempio plugin Android](@site/static/img/settings/plugin_example_android.png)

Per abilitare/disabilitare i plugin, andare a:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Abilita

</TabItem>

<TabItem value="ios" label="iOS">

![Abilita plugin iOS](@site/static/img/settings/plugins_enable_ios.png) ![Esempio plugin iOS](@site/static/img/settings/plugin_example_ios.png)

Per abilitare/disabilitare i plugin, andare a:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Leggi di più](../plugins/index.md#configure-plugin) sui plugin di OsmAnd.


### Come usare una mappa {#how-to-use-a-map}

La mappa è un elemento centrale di OsmAnd, ed è importante sapere [come usarla](../map/interact-with-map.md) (gesti, pulsanti, ecc.). È possibile [configurare la mappa](../map/configure-map-menu.md) secondo le proprie esigenze: [cambiare lo stile della mappa](../map/configure-map-menu.md#map-style-parameters), configurare diversi [livelli della mappa](../map/configure-map-menu.md#map-layers) come preferiti, PDI, trasporti pubblici, tracce, curve di livello, ombreggiatura del rilievo e altri.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configura mappa Android](@site/static/img/settings/configure_map_menu_android.png) ![Esempio configurazione mappa Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configura mappa iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Esempio configurazione mappa iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Leggi di più](../map/configure-map-menu.md) sulla configurazione della mappa.


### Come configurare la schermata {#how-to-configure-screen}

[Configura schermata](../widgets/configure-screen.md) consente di abilitare widget [Informativi](../widgets/info-widgets.md) (altitudine, velocità, ora corrente, ecc.) e [di Navigazione](../widgets/nav-widgets.md) (destinazione, rilevamento, ora di arrivo, ecc.), [Azione rapida](../widgets/quick-action.md) e altri elementi che verranno visualizzati sopra la Mappa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configura schermata Android](@site/static/img/widgets/configure_screen_android.png) ![Esempio configurazione schermata Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configura schermata iOS](@site/static/img/settings/configure_screen_ios.png) ![Esempio configurazione schermata iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Leggi di più](../widgets/configure-screen.md) sulla configurazione della Schermata.


### Come aggiungere dati personali alle mappe {#how-to-add-personal-data-to-maps}

OsmAnd consente di inserire vari segni sulla Mappa per le proprie esigenze personali. Ad esempio, [Punti preferiti](../personal/favorites.md) - punti personali con nome, icona e categoria, [Segnalibri](../personal/markers.md) - punti aggiunti rapidamente come destinazione, [Note audio/video](../plugins/audio-video-notes.md) - note multimediali registrate in un punto specifico, [Tracce](../personal/tracks/manage-tracks.md) - tracce e tour registrati e importati.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aggiungi dati personali Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aggiungi dati personali iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Leggi di più](../map/point-layers-on-map.md) sui punti sulla mappa.


### Come sfogliare e trovare punti di interesse {#how-to-browse--find-point-of-interest}

I [Punti di interesse (PDI)](../map/point-layers-on-map.md#points-of-interest-pois) sono servizi che possono essere cercati o evidenziati sulla mappa. Rappresentano luoghi interessanti o utili e sono distribuiti come parte delle [Mappe Vettoriali](../map/vector-maps.md). È possibile utilizzarli per [visualizzarli sulla mappa](../map/point-layers-on-map.md#points-of-interest-pois), [navigare](../navigation/index.md) e [cercare](../search/search-poi.md) i punti di interesse sulla Mappa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Selezione multipla PDI](@site/static/img/map/multiple_selection_android.png) ![Cerca e visualizza PDI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Selezione multipla PDI](@site/static/img/settings/multiple_selection_iOS.png) ![Cerca e visualizza PDI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Leggi di più](../search/search-poi.md) sulla ricerca dei PDI.


### Come pianificare un percorso {#how-to-plan-a-route}

[Pianifica percorso](../plan-route/create-route.md) è uno strumento potente che consente di creare un viaggio, modificare una traccia esistente e misurare la distanza sul posto. È possibile inserire rapidamente punti intermedi e collegarli con varie linee di navigazione (bicicletta, pedonale, linea retta, ecc.). I risultati possono essere salvati in un file GPX, in modo da poterli [condividere](../personal/tracks/index.md) o [utilizzare per la navigazione](../navigation/setup/gpx-navigation.md) in un secondo momento.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica percorso Android](@site/static/img/settings/plan_route_android.png) ![Grafico pianificazione percorso Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica percorso iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Leggi di più](../plan-route/create-route.md) sulla funzione di pianificazione del percorso.


### Come cercare per indirizzo {#how-to-search-by-address}

OsmAnd offre molte funzionalità di ricerca, inclusa la ricerca per indirizzo. Per impostazione predefinita, utilizza i dati di [OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) e dovrebbe essere in grado di trovare tutti gli indirizzi utilizzando l'input di ricerca Rapida. Inoltre, è possibile [cercare](../search/search-address.md) per città, via, codice postale e coordinate.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca indirizzo Android](@site/static/img/settings/address_search_android.png) ![Risultato ricerca Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca indirizzo iOS](@site/static/img/settings/address_search_ios.png) ![Risultato ricerca iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
È necessario scaricare la mappa prima di cercare un indirizzo al suo interno. Inoltre, se la posizione corrente è troppo lontana dall'indirizzo cercato, potrebbe essere necessario aumentare il raggio di ricerca.
:::

[Leggi di più](../search/search-address.md) sulla ricerca per indirizzo.


### Come avviare la navigazione {#how-to-start-navigation}

La [Navigazione](../navigation/index.md) fornisce una guida passo-passo verso la destinazione, mostrando il percorso, offrendo istruzioni di svolta, informazioni stradali aggiuntive sulla superficie, scorrevolezza, ecc. e una guida vocale opzionale.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Avvia navigazione Android](@site/static/img/settings/start_navigation_android.png) ![Grafico percorso Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avvia navigazione iOS](@site/static/img/settings/start_navigation_ios.png) ![Grafico percorso iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Leggi di più](../navigation/index.md) sulla navigazione.


### Come registrare il tuo viaggio {#how-to-record-your-trip}

La [Registrazione viaggio](../plugins/trip-recording.md) è uno strumento speciale confezionato come plugin di OsmAnd che consente di registrare tutti i movimenti su una traccia utilizzando il GPS del dispositivo.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Registrazione viaggio Android](@site/static/img/settings/trip_recording_android.png) ![Panoramica registrazione viaggio Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avvia registrazione viaggio iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menu registrazione viaggio iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Leggi di più](../plugins/trip-recording.md) sulla registrazione del viaggio.


### Come modificare le mappe {#how-to-edit-maps}

OsmAnd è alimentato dai dati di [OpenStreetMap](https://www.openstreetmap.org/). Le mappe sono create da contributori volontari, quindi possono avere più o meno dettagli a seconda di quanto lavoro è stato fatto in una certa parte della mappa. Chiunque può registrarsi come contributore e aggiungere o modificare le mappe OSM. OsmAnd fornisce un plugin di modifica che aiuta a migliorare OpenStreetMap.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nota OSM Android](@site/static/img/settings/osm_note_android.png) ![Crea PDI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nota OSM iOS](@site/static/img/settings/osm_note_ios.png) ![Crea PDI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Leggi di più](../plugins/osm-editing.md) sulla modifica di OSM.


### Come chiudere l'app {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ci sono due varianti disponibili per chiudere OsmAnd.

1. Chiudere un'app scorrendola verso l'alto e fuori dallo schermo. Per un elenco verticale di app, scorrere a sinistra o a destra.  

2. Potrebbe essere necessario eseguire i seguenti passaggi prima di farlo, altrimenti OsmAnd verrà eseguito in background:
    - [Annullare la navigazione](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Interrompere il download e l'aggiornamento delle mappe](../start-with/download-maps.md)
    - [Interrompere la registrazione del viaggio](../plugins/trip-recording.md#new-track-recording)
    - [Interrompere la registrazione di note audio/video](../plugins/audio-video-notes.md)

3. Funzione *Arresto forzato*:
    - Tocco lungo sull'icona *OsmAnd → pulsante **i** → Arresto forzato*.
    - Aprire le impostazioni e toccare *App e notifiche → OsmAnd → Arresto forzato*.

</TabItem>

<TabItem value="ios" label="iOS">

Chiudere un'app scorrendola verso l'alto e fuori dallo schermo. Per un elenco verticale di app, scorrere a sinistra o a destra.  

Potrebbe essere necessario eseguire i seguenti passaggi prima di farlo, altrimenti OsmAnd verrà eseguito in background:

- [Annullare la navigazione](../navigation/setup/route-navigation.md)
- [Interrompere il download e l'aggiornamento delle mappe](../start-with/download-maps.md)
- [Interrompere la registrazione del viaggio](../plugins/trip-recording.md#new-track-recording)
- [Interrompere la registrazione di note audio/video](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Scorciatoie dell'app {#app-shortcuts}

<InfoAndroidOnly/>

Le [scorciatoie dell'applicazione](https://support.google.com/android/answer/9450271) sono disponibili per l'icona di OsmAnd. Basta un tocco lungo sull'icona di OsmAnd sullo schermo del dispositivo per aprire il menu delle scorciatoie dell'applicazione. Qui, è possibile premere brevemente per selezionare le seguenti azioni: *Naviga verso Casa*, *Naviga verso Lavoro*, *Avvia Registrazione*, *Cerca*, *I miei luoghi*, *Naviga verso*. Un tocco lungo su un'azione consente di aggiungere una nuova icona di azione alla schermata del dispositivo.

Tocca un'icona di azione per avviare immediatamente l'applicazione con l'azione selezionata.

![Scorciatoie](@site/static/img/steps/shortcuts_3_andr.png) ![Scorciatoie](@site/static/img/steps/shortcuts_4_andr.png)


## Aiuto offline {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata aiuto offline Android](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Mappe iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

Nel *menu Aiuto* è possibile trovare articoli dal nostro sito [www.osmand.net/docs](https://osmand.net/docs/intro/). Dopo il download iniziale (richiesta connessione a Internet), gli articoli di aiuto sono disponibili offline.  
La prima sottosezione, *Aiuto offline* contiene gli articoli **Più visti** (o popolari) tra i nostri utenti. Questi articoli sono visualizzati nella lingua impostata per l'applicazione, se questa lingua è supportata sul nostro sito di documentazione. Le lingue supportate attualmente includono: *<Translate android="true" ids="lang_en"/>, <Translate android="true" ids="lang_ar"/>, <Translate android="true" ids="lang_de"/>, <Translate android="true" ids="lang_es"/>, <Translate android="true" ids="lang_fr"/>, <Translate android="true" ids="lang_it"/>, <Translate android="true" ids="lang_nl"/>, <Translate android="true" ids="lang_pl"/>, <Translate android="true" ids="lang_pt"/>, <Translate android="true" ids="lang_tr"/>*, e *<Translate android="true" ids="lang_uk"/>*. Se cambiate la lingua dell'applicazione, riavviate OsmAnd per aprire la documentazione nella lingua selezionata. Quando una traduzione non è disponibile, verrà visualizzata automaticamente la versione inglese della pagina. Le sezioni **Guida utente** e **Risoluzione problemi** hanno la stessa struttura del sito web.  
Nel *menu Aiuto*, è anche possibile trovare link utili ai social network di OsmAnd, informazioni sulla versione della propria applicazione, note di rilascio e contatti di supporto. Tramite l'Aiuto, è anche possibile inviare [logcat e log di crash](../troubleshooting/crash-logs.md#crash-and-logcat-logs).  

### Menu {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata aiuto offline Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Mappe iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>  

- **Invia log di crash** (*per Android*). Consente agli utenti di inviare segnalazioni di crash dell'app agli sviluppatori, aiutando nell'identificazione e risoluzione dei problemi.
- **Invia logcat log** (*per Android*). Fornisce agli utenti la possibilità di inviare log dettagliati dei crash dell'app agli sviluppatori, facilitando un'analisi e una risoluzione dei problemi più approfondite.
- **Invia log** (*per iOS*). Svolge una funzione simile alla funzione *Invia log di crash* per Android, consentendo agli utenti su dispositivi iOS di segnalare i crash dell'app agli sviluppatori per scopi di debug.
- **Copia versione build**. Consente agli utenti di comunicare rapidamente e accuratamente la versione corrente dell'app agli sviluppatori quando segnalano problemi, semplificando il processo di diagnosi e risoluzione.


### Più visti {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata aiuto offline Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Mappe iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Gli articoli più visti tra i nostri utenti si riferiscono agli articoli nell'app o sul sito che hanno raccolto il maggior numero di visualizzazioni o interazioni da parte degli utenti. Questa metrica aiuta a identificare i contenuti particolarmente interessanti o utili per i vostri utenti. Può fornire preziose informazioni sulle preferenze e gli interessi degli utenti, consentendo a sviluppatori e creatori di contenuti di adattare i contenuti futuri per soddisfare meglio le esigenze del pubblico. Inoltre, evidenziare gli articoli popolari può aiutare i nuovi utenti a trovare risorse preziose all'interno dell'app.


### Guida utente {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata aiuto offline Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Mappe iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

La sezione **Guida utente** del menu Aiuto è un manuale completo che segue la struttura del sito web di OsmAnd, garantendo la coerenza delle informazioni e la facilità di navigazione tra le piattaforme. Utilizzando l'Aiuto, è possibile navigare facilmente dall'app al sito web, trovando gli stessi contenuti organizzati in modo familiare. Questa coerenza migliora l'usabilità fornendo un'unica risorsa di supporto per trovare rapidamente risposte alle domande e risolvere i problemi.


### Risoluzione problemi {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata aiuto offline Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Mappe iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Soluzioni e suggerimenti per risolvere problemi comuni. Se avete una domanda specifica, consultate [Risoluzione problemi](../troubleshooting/index.md) per trovare una risposta.

- [Configurazione](../troubleshooting/setup.md). Durante la configurazione di un'applicazione, questi sono i problemi che si presentano più spesso.
- [Mappe e dati](../troubleshooting/maps-data.md). Problemi relativi a mappe, ricerca e al resto dei dati.
- [Navigazione](../troubleshooting/navigation.md). I problemi più comuni che si verificano in modalità di navigazione.
- [Registrazione traccia](../troubleshooting/track-recording-issues.md). Problemi comuni relativi alla registrazione della traccia come rumori, interruzioni e imprecisioni.
- [Generale](../troubleshooting/general.md). Problemi comuni associati a varie funzionalità di OsmAnd.
- [Log di crash](../troubleshooting/crash-logs.md). Come inviare i log di crash al team di OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*solo per Android*). Problemi di navigazione con Auto.

### Contattaci {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata aiuto offline Android](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Mappe iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Consente di porre domande o fare suggerimenti.

### Segnala problemi {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata aiuto offline Android](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Mappe iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Apri segnalazione su GitHub**. [Versione Android GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [versione iOS GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): fai domande, scrivi di bug e proponi funzionalità.
- **Invia log di crash** (*per Android*). Contiene solo informazioni sui crash.
- [Invia logcat log](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Invia log](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). File di log dettagliato.

### Informazioni su OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata aiuto offline Android](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Mappe iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Puoi conoscere il nostro team, vedere la versione attuale dell'app e le novità, e scaricare la versione beta dell'app.


## Privacy {#privacy}

È un'applicazione [open source](https://github.com/osmandapp/osmand), senza pubblicità / senza tracker e focalizzata sulla privacy. Per preservare la massima privacy, OsmAnd offre in primo luogo le mappe offline, in modo che nessuna interazione o informazione geografica venga divulgata dal vostro dispositivo. Siamo molto attenti a quali dati vengono raccolti e quali dati vengono trasferiti dalla rete, potete leggere di più nella nostra [Politica sulla privacy](https://osmand.net/help-online/privacy-policy).  


## Permessi {#permissions}

OsmAnd non ha permessi obbligatori nella versione iOS / Android.

**Essenziali**:

- **Internet**. Download iniziale / aggiornamento delle mappe offline. Potrebbe anche essere necessario per accedere a funzionalità online come [Immagini a livello stradale](../map/point-layers-on-map.md#-street-level-imagery), [Foto online](../map/map-context-menu.md#online-photos) o [Mappe online](../map/raster-maps.md).
- **GPS** / **Rete GSM**. Determinare la propria posizione, seguirvi in modalità di navigazione e registrare il vostro viaggio (opzionale). Questo permesso viene richiesto quando si fa clic sul [pulsante della mia posizione](../widgets/map-buttons.md#my-location-and-zoom) o quando si [avvia la navigazione](../navigation/setup/route-navigation.md#start--stop-navigation).

**Opzionali**:

- **Fotocamera/Registrazione vocale** (*Android*). Utilizzato solo dalle [Note audio/video](../plugins/audio-video-notes.md). Questa funzione è confezionata come un plugin e disabilitata per impostazione predefinita. Consente di creare rapidamente note audio/video relative alla posizione durante un viaggio.