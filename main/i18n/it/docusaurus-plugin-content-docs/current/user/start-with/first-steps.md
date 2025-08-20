---
source-hash: 0cd7fc222e201abda3ee41c3278fe75817181ab14d975d85f25fdb51e7498eae
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

Scopri come scaricare le mappe, come configurare l'applicazione, come usare la mappa e costruire un percorso, come avviare la navigazione e come cercare i punti di interesse. Familiarizza con i punti chiave della politica sulla privacy di OsmAnd e le autorizzazioni richieste.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigazione offline Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigazione offline iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Installa OsmAnd {#install-osmand}

OsmAnd è un'applicazione mobile per Mappe e Navigazione disponibile per **Android** e **iOS**. Puoi scaricarla dai mercati più popolari.

**Mercati Android**: [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand) e [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Maggiori informazioni](../purchases/index.md) sulle versioni e gli acquisti di OsmAnd.  


## Benvenuti in OsmAnd {#welcome-to-osmand}

Il nostro obiettivo è creare un'applicazione orientata alla mappa completamente funzionale che possa essere utilizzata per vari scopi offline e online. L'applicazione ha molte funzionalità, quindi non dovrai passare da un'app all'altra e tutto sarà a portata di mano.

- Visualizza una mappa mondiale con molti dettagli visualizzati in [diversi stili di mappa](../map/vector-maps.md).
- Visualizza, [cerca](../search/search-poi.md) e salva vari [Punti di interesse](../map/point-layers-on-map.md).
- [Pianifica un percorso](../plan-route/create-route.md) in auto, in bicicletta, a piedi e combinalo in percorsi multimodali.
- Avvia la [navigazione guidata vocale](../navigation/guidance/voice-navigation.md) quando accendi e spegni lo schermo.
- Rendi il tuo viaggio turistico ricco con [Wikipedia](../plugins/wikipedia.md) e [Wikivoyage](../plan-route/travel-guides.md) offline.
- Personalizza completamente come [viene visualizzata la mappa](../map/configure-map-menu.md) e quali [widget](../widgets/index.md) vengono visualizzati su di essa.
- Naviga [per percorso](../navigation/setup/route-navigation.md), [per traccia data](../navigation/setup/gpx-navigation.md), [per trasporto pubblico](../navigation/routing/public-transport-navigation.md) e [fuoristrada](../navigation/setup/markers-navigation.md).
- Tutto funziona **Offline**.
- E non dimenticare di contribuire a [OpenStreetMap](https://www.openstreetmap.org/) con il [Plugin di modifica OSM](../plugins/osm-editing.md).


## Guida alle azioni {#actions-guide}

### Autorizzazione all'accesso alla posizione {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Posizione precisa Android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Posizione precisa iOS](@site/static/img/steps/first_start_ios.png) ![Posizione precisa iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Ti consigliamo di concedere a OsmAnd l'autorizzazione a ricevere informazioni sulla posizione precisa del tuo dispositivo. Non raccogliamo, utilizziamo o condividiamo le tue informazioni private, quindi l'accesso alla geolocalizzazione precisa è necessario per il corretto funzionamento offline della ricerca, della navigazione e di altre funzioni di OsmAnd.  


### Come scaricare le mappe {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mostra sulla mappa](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mostra sulla mappa](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

L'app OsmAnd funziona con diversi tipi di mappe, ma può funzionare completamente solo con mappe offline scaricate, quindi dopo la schermata *<Translate android="true" ids="get_started"/>* ti viene chiesto di [*scaricare la mappa*](../start-with/download-maps.md#initial-setup-screen) della tua regione. Puoi scegliere una regione diversa, ripristinare da [OsmAnd Cloud](../personal/osmand-cloud.md) o saltare questo passaggio e scaricare le mappe in seguito.  
Per altre opzioni di download delle mappe disponibili, consulta l'[articolo Scarica mappe](../start-with/download-maps.md).

:::note Inizia a lavorare con le mappe offline
OsmAnd non può funzionare correttamente senza mappe offline scaricate. Sebbene l'applicazione supporti le mappe [Vettoriali](../map/vector-maps.md) e [Raster](../map/raster-maps.md), è fortemente consigliato iniziare a lavorare con le mappe vettoriali offline per far funzionare correttamente tutte le funzioni come [Ricerca](../search/index.md), [Navigazione](../navigation/index.md) e [Menu contestuale](../map/map-context-menu.md).
:::


### Come scaricare mappe per il mondo intero {#how-download-maps-for-the-whole-world}

Mentre OsmAnd ti consente di scaricare mappe per tutte le regioni disponibili, non esiste un unico pacchetto per scaricare il mondo intero in una volta sola. Invece, puoi scaricare mappe di singoli paesi o regioni in base alle tue esigenze.

***Punti chiave:***

- **OsmAnd Pro** e **Maps+** offrono **download illimitati di mappe**, ma è comunque necessario scaricare le mappe una regione alla volta.
- **Limitazioni di archiviazione.** Assicurati che il tuo dispositivo abbia spazio sufficiente prima di scaricare più regioni.
- **Aggiornamenti automatici.** Una volta scaricate, le mappe possono essere aggiornate tramite *Menu → Mappe e risorse → Aggiornamenti.*


### Come cambiare la lingua dell'app {#how-to-change-app-language}

L'opzione *Lingua di visualizzazione* viene utilizzata per cambiare la lingua dell'intera app, inclusi i prompt pop-up, il testo interno, i messaggi e altro ancora. Fino ad Android 12, OsmAnd ti consente di personalizzare la lingua di visualizzazione in base alle tue preferenze direttamente nell'app. A partire da Android 13 e sui dispositivi iOS, la lingua di visualizzazione può essere modificata solo nelle impostazioni di sistema (vedi come modificare le preferenze della lingua per app in [Android](https://developer.android.com/guide/topics/resources/app-languages) e [iOS](https://developer.apple.com/news/?id=u2cfuj88)).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *Impostazioni → App → OsmAnd → Lingua*

![Lingua impostazioni generali Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Impostazioni → OsmAnd Maps → Lingua*

![Lingua impostazioni generali iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Nessuna opzione per impostare le lingue dell'app
Su alcuni dispositivi Android (Xiaomi con Muiu 14), non esiste un'opzione per impostare le lingue delle app individualmente nelle impostazioni di sistema, quindi la lingua di OsmAnd può essere modificata solo con la lingua dell'intero sistema. Puoi consultare la discussione su [GitHub discussion](https://github.com/osmandapp/OsmAnd/issues/16990) per ulteriori informazioni.
:::


### Come gestire le tue impostazioni {#how-to-manage-your-settings}

Puoi gestire le impostazioni dell'applicazione come [Impostazioni globali](../personal/global-settings.md) o come [Configurazione del profilo](../personal/profiles.md) tramite il [Menu principale](../start-with/main-menu.md). L'applicazione viene fornita con un elenco predefinito di profili che possono essere modificati in seguito. Ogni profilo può essere considerato come un'applicazione mappa personalizzata per scopi specifici. Per impostazione predefinita, i profili vengono utilizzati solo come diverse modalità di navigazione.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gestisci profilo Android](@site/static/img/settings/manage_profile_android.png) ![Configura profilo Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gestisci profilo iOS](@site/static/img/settings/manage_profile_ios.png) ![Configura profilo iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Maggiori informazioni](../personal/global-settings.md) sulle impostazioni globali.
[Maggiori informazioni](../personal/profiles.md) sulle impostazioni del profilo.


### Come configurare i plugin {#how-to-configure-plugins}

I [Plugin](../plugins/index.md#configure-plugin) estendono notevolmente la funzionalità dell'applicazione. Quasi tutti i plugin hanno le proprie [Azioni mappa](../map/map-context-menu.md), [Livelli mappa](../map/configure-map-menu.md), [Download mappe](../start-with/download-maps.md) e [Impostazioni](../plugins/#plugin-settings).  

Puoi abilitare/disabilitare i plugin tramite [Menu principale](../start-with/main-menu.md) → [Plugin](../plugins/index.md#configure-plugin).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Abilita plugin Android](@site/static/img/settings/plugins_enable_android.png) ![Esempio plugin Android](@site/static/img/settings/plugin_example_android.png)

Per abilitare/disabilitare i plugin, vai a:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Abilita

</TabItem>

<TabItem value="ios" label="iOS">

![Abilita plugin iOS](@site/static/img/settings/plugins_enable_ios.png) ![Esempio plugin iOS](@site/static/img/settings/plugin_example_ios.png)

Per abilitare/disabilitare i plugin, vai a:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Maggiori informazioni](../plugins/index.md#configure-plugin) sui plugin di OsmAnd.


### Come usare una mappa {#how-to-use-a-map}

La mappa è un elemento centrale di OsmAnd, ed è importante sapere [come usarla](../map/interact-with-map.md) (gesti, pulsanti, ecc.). Puoi [configurare la mappa](../map/configure-map-menu.md) in base alle tue esigenze: [cambiare lo stile della mappa](../map/configure-map-menu.md#map-style-parameters), configurare diversi [livelli della mappa](../map/configure-map-menu.md#map-layers) come preferiti, POI, trasporto pubblico, tracce, curve di livello, ombreggiatura e altro.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configura mappa Android](@site/static/img/settings/configure_map_menu_android.png) ![Esempio di configurazione mappa Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configura mappa iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Esempio di configurazione mappa iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Maggiori informazioni](../map/configure-map-menu.md) sulla configurazione della mappa.


### Come configurare lo schermo {#how-to-configure-screen}

[Configura schermo](../widgets/configure-screen.md) ti consente di abilitare i widget [Informativi](../widgets/info-widgets.md) (altitudine, velocità, ora corrente, ecc.) e [Navigazionali](../widgets/nav-widgets.md) (destinazione, rilevamento, ora di arrivo, ecc.), [Azione rapida](../widgets/quick-action.md) e altri elementi che verranno visualizzati sulla mappa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configura schermo Android](@site/static/img/widgets/configure_screen_android.png) ![Esempio di configurazione schermo Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configura schermo iOS](@site/static/img/settings/configure_screen_ios.png) ![Esempio di configurazione schermo iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Maggiori informazioni](../widgets/configure-screen.md) sulla configurazione dello schermo.


### Come aggiungere dati personali alle mappe {#how-to-add-personal-data-to-maps}

OsmAnd ti consente di effettuare varie annotazioni sulla mappa per le tue esigenze personali. Ad esempio, [Punti preferiti](../personal/favorites.md) - punti personali con nome, icona e categoria, [Segnalibri](../personal/markers.md) - punti aggiunti rapidamente come destinazione, [Note audio/video](../plugins/audio-video-notes.md) - note multimediali registrate in un punto specifico, [Tracce](../personal/tracks/manage-tracks.md) - tracce e tour registrati e importati.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Aggiungi dati personali Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Aggiungi dati personali iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Maggiori informazioni](../map/point-layers-on-map.md) sui punti sulla mappa.


### Come sfogliare e trovare punti di interesse {#how-to-browse--find-point-of-interest}

I [Punti di interesse (POI)](../map/point-layers-on-map.md#points-of-interest-pois) sono servizi che possono essere cercati o evidenziati sulla mappa. Rappresentano luoghi interessanti o utili e sono distribuiti come parte delle [Mappe vettoriali](../map/vector-maps.md). Puoi usarli per [visualizzare sulla mappa](../map/point-layers-on-map.md#points-of-interest-pois), [navigare](../navigation/index.md) e [cercare](../search/search-poi.md) i punti di interesse sulla mappa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Selezione multipla POI](@site/static/img/map/multiple_selection_android.png) ![Cerca e visualizza POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Selezione multipla POI](@site/static/img/settings/multiple_selection_iOS.png) ![Cerca e visualizza POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Maggiori informazioni](../search/search-poi.md) sulla ricerca POI.


### Come pianificare un percorso {#how-to-plan-a-route}

[Pianifica percorso](../plan-route/create-route.md) è uno strumento potente che ti consente di creare un viaggio, modificare una traccia esistente e misurare la distanza sul posto. Puoi inserire rapidamente punti intermedi e collegarli tramite varie linee di navigazione (bici, pedonale, linea retta, ecc.). I risultati possono essere salvati in un file GPX, in modo da poter essere [condivisi](../personal/tracks/index.md) o [utilizzati per la navigazione](../navigation/setup/gpx-navigation.md) in seguito.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pianifica percorso Android](@site/static/img/settings/plan_route_android.png) ![Grafico pianifica percorso Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pianifica percorso iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Maggiori informazioni](../plan-route/create-route.md) sulla funzione di pianificazione del percorso.


### Come cercare per indirizzo {#how-to-search-by-address}

OsmAnd offre molte funzionalità di ricerca, inclusa la ricerca per indirizzo. Per impostazione predefinita, utilizza i [dati di OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) e dovrebbe essere in grado di trovare tutti gli indirizzi utilizzando l'input di Ricerca rapida. Inoltre, puoi [cercare](../search/search-address.md) per città, strada, codice postale e coordinate.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca indirizzo Android](@site/static/img/settings/address_search_android.png) ![Risultato ricerca Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca indirizzo iOS](@site/static/img/settings/address_search_ios.png) ![Risultato ricerca iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
È necessario scaricare la mappa prima di cercare un indirizzo. Inoltre, se la tua posizione attuale è troppo lontana dall'indirizzo di ricerca, potrebbe essere necessario aumentare il raggio di ricerca.
:::

[Maggiori informazioni](../search/search-address.md) sulla ricerca per indirizzo.


### Come avviare la navigazione {#how-to-start-navigation}

La [navigazione](../navigation/index.md) ti fornisce indicazioni passo-passo per la tua destinazione visualizzando il percorso, offrendo istruzioni svolta per svolta, informazioni stradali aggiuntive sulla superficie, la scorrevolezza, ecc., e una guida vocale opzionale.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Avvia navigazione Android](@site/static/img/settings/start_navigation_android.png) ![Grafico percorso Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avvia navigazione iOS](@site/static/img/settings/start_navigation_ios.png) ![Grafico percorso iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Maggiori informazioni](../navigation/index.md) sulla navigazione.


### Come registrare il tuo viaggio {#how-to-record-your-trip}

La [registrazione del viaggio](../plugins/trip-recording.md) è uno strumento speciale confezionato come plugin OsmAnd che ti consente di registrare tutti i movimenti sulla traccia utilizzando il GPS del dispositivo.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Registrazione viaggio Android](@site/static/img/settings/trip_recording_android.png) ![Panoramica registrazione viaggio Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avvia registrazione viaggio iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Menu registrazione viaggio iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Maggiori informazioni](../plugins/trip-recording.md) sulla registrazione del viaggio.


### Come modificare le mappe {#how-to-edit-maps}

OsmAnd è basato sui dati di [OpenStreetMap](https://www.openstreetmap.org/). Le mappe sono create da contributori volontari, quindi possono avere più o meno dettagli a seconda di quanto lavoro è stato fatto in una certa parte della mappa. Chiunque può registrarsi come contributore e aggiungere o modificare le mappe OSM. OsmAnd fornisce un plugin di modifica che aiuta a migliorare OpenStreetMap.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nota OSM Android](@site/static/img/settings/osm_note_android.png) ![Crea POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nota OSM iOS](@site/static/img/settings/osm_note_ios.png) ![Crea POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Maggiori informazioni](../plugins/osm-editing.md) sulla modifica OSM.


### Come chiudere l'app {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ci sono due varianti disponibili su come chiudere OsmAnd.

1. Chiudi un'app scorrendo verso l'alto e fuori dallo schermo. Per un elenco verticale di app, scorri a sinistra o a destra.  

2. Potrebbe essere necessario eseguire i seguenti passaggi prima di farlo, altrimenti OsmAnd verrà eseguito in background:
    - [Annulla navigazione](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Interrompi download e aggiornamento mappa](../start-with/download-maps.md)
    - [Interrompi registrazione viaggio](../plugins/trip-recording.md#create-new-track)
    - [Interrompi registrazione note audio/video](../plugins/audio-video-notes.md)

3. Funzione *Forza arresto*:
    - Tocca a lungo l'icona *OsmAnd → pulsante **i** → Forza arresto*.
    - Apri le impostazioni e tocca *App e notifiche → OsmAnd → Forza arresto*.

</TabItem>

<TabItem value="ios" label="iOS">

Chiudi un'app scorrendo verso l'alto e fuori dallo schermo. Per un elenco verticale di app, scorri a sinistra o a destra.  

Potrebbe essere necessario eseguire i seguenti passaggi prima di farlo, altrimenti OsmAnd verrà eseguito in background:

- [Annulla navigazione](../navigation/setup/route-navigation.md)
- [Interrompi download e aggiornamento mappa](../start-with/download-maps.md)
- [Interrompi registrazione viaggio](../plugins/trip-recording.md#create-new-track)
- [Interrompi registrazione note audio/video](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Scorciatoie app {#app-shortcuts}

<InfoAndroidOnly/>

Le [scorciatoie dell'applicazione](https://support.google.com/android/answer/9450271) sono disponibili per l'icona di OsmAnd. Basta toccare a lungo l'icona di OsmAnd sullo schermo del dispositivo per aprire il menu delle scorciatoie dell'applicazione. Qui, puoi premere brevemente per selezionare le seguenti azioni: *Naviga verso Casa*, *Naviga verso Lavoro*, *Avvia registrazione*, *Cerca*, *I miei luoghi*, *Naviga verso*. Un tocco lungo su un'azione ti consente di aggiungere una nuova icona di azione alla schermata del tuo dispositivo.

Tocca un'icona di azione per avviare immediatamente l'applicazione con l'azione selezionata.

![Scorciatoie](@site/static/img/steps/shortcuts_3_andr.png) ![Scorciatoie](@site/static/img/steps/shortcuts_4_andr.png)


## Aiuto offline {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Screenshot aiuto offline Android](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu mappe iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

Nel *Menu Aiuto* puoi trovare articoli dal nostro sito [www.osmand.net/docs](https://osmand.net/docs/intro/). Dopo il download iniziale (è richiesta una connessione Internet), gli articoli di aiuto sono disponibili offline.  
La prima sottosezione, *Aiuto offline*, contiene gli articoli **Più visti** (o popolari) tra i nostri utenti. Le sezioni **Guida utente** e **Risoluzione dei problemi** hanno la stessa struttura del sito web.  
Nel *Menu Aiuto*, puoi anche trovare link utili ai social network di OsmAnd, informazioni sulla versione della tua applicazione, note di rilascio e contatti di supporto. Tramite Aiuto, puoi anche inviare [logcat e log di crash](../troubleshooting/crash-logs.md#crash-and-logcat-logs).  

### Menu {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Screenshot aiuto offline Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu mappe iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>  

- **Invia log di crash** (*per Android*). Consente agli utenti di inviare rapporti di crash dell'app agli sviluppatori, aiutando nell'identificazione e risoluzione dei problemi.
- **Invia logcat log** (*per Android*). Fornisce agli utenti la possibilità di inviare log dettagliati dei crash dell'app agli sviluppatori, facilitando un'analisi e una risoluzione dei problemi più approfondite.
- **Invia log** (*per iOS*). Esegue una funzione simile alla funzione *Invia log di crash* per Android, consentendo agli utenti su dispositivi iOS di segnalare i crash dell'app agli sviluppatori per scopi di debug.
- **Copia versione build**. Consente agli utenti di comunicare rapidamente e accuratamente la versione corrente dell'app agli sviluppatori quando segnalano problemi, semplificando il processo di diagnosi e risoluzione.


### Più visti {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Screenshot aiuto offline Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu mappe iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Gli articoli più visti tra i nostri utenti si riferiscono agli articoli nell'app o sul sito che hanno ottenuto il maggior numero di visualizzazioni o interazioni utente. Questa metrica aiuta a identificare i contenuti particolarmente interessanti o utili per i tuoi utenti. Può fornire preziose informazioni sulle preferenze e gli interessi degli utenti, consentendo agli sviluppatori e ai creatori di contenuti di adattare i contenuti futuri per soddisfare meglio le esigenze del pubblico. Inoltre, evidenziare gli articoli popolari può aiutare i nuovi utenti a trovare risorse preziose all'interno dell'app.


### Guida utente {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Screenshot aiuto offline Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu mappe iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

La sezione **Guida Utente** del menu Aiuto è un manuale completo che segue la struttura del sito web di OsmAnd, garantendo la coerenza delle informazioni e la facilità di navigazione tra le piattaforme. Utilizzando l'Aiuto, puoi facilmente navigare dall'app al sito web, trovando gli stessi contenuti organizzati in modo familiare. Questa coerenza migliora l'usabilità fornendo un'unica risorsa di supporto per trovare risposte alle domande e risolvere i problemi rapidamente.


### Risoluzione dei problemi {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Screenshot aiuto offline Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu mappe iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Soluzioni e suggerimenti per risolvere problemi comuni. Se hai una domanda specifica, consulta [Risoluzione dei problemi](../troubleshooting/index.md) per ottenere una risposta.

- [Configurazione](../troubleshooting/setup.md). Durante la configurazione di un'applicazione, questi sono i problemi che più spesso si presentano.
- [Mappe e dati](../troubleshooting/maps-data.md). Problemi relativi a mappe, ricerca e il resto dei dati.
- [Navigazione](../troubleshooting/navigation.md). I problemi più comuni che si verificano in modalità navigazione.
- [Registrazione tracce](../troubleshooting/track-recording-issues.md). Problemi comuni relativi alla registrazione delle tracce come rumori, interruzioni e imprecisioni.
- [Generale](../troubleshooting/general.md). Problemi comuni associati a varie funzionalità di OsmAnd.
- [Log di crash](../troubleshooting/crash-logs.md). Come inviare i log di crash al team OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*solo per Android*). Problemi di navigazione automatica.

### Contattaci {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Screenshot aiuto offline Android](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu mappe iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Ti consente di porre domande o fare suggerimenti.

### Segnala problemi {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Screenshot aiuto offline Android](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu mappe iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Apri un problema su GitHub**. [Versione Android GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues), [Versione iOS GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): poni domande, scrivi di bug e proponi funzionalità.
- **Invia log di crash** (*per Android*). Contiene solo informazioni sui crash.
- [Invia logcat log](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Invia log](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). File di log dettagliato.

### Informazioni su OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Screenshot aiuto offline Android](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu mappe iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Puoi conoscere il nostro team, vedere la versione attuale dell'app e le novità, e scaricare la versione beta dell'app.


## Privacy {#privacy}

È un'applicazione [open source](https://github.com/osmandapp/osmand), senza pubblicità/tracker e focalizzata sulla privacy. Per preservare la massima privacy, OsmAnd offre le mappe offline come prima opzione, in modo che nessuna interazione o informazione geografica venga divulgata dal tuo dispositivo. Siamo molto attenti a quali dati vengono raccolti e quali dati vengono trasferiti dalla rete, puoi leggere di più nella nostra [Informativa sulla privacy](https://osmand.net/help-online/privacy-policy).  


## Permessi {#permissions}

OsmAnd non richiede alcuna autorizzazione obbligatoria nella versione iOS / Android.

**Essenziali**:

- **Internet**. Download iniziale / aggiornamento delle mappe offline. Inoltre, potrebbe essere necessario per accedere a funzionalità online come [Immagini a livello stradale](../map/point-layers-on-map.md#-street-level-imagery), [Foto online](../map/map-context-menu.md#online-photos) o [Mappe online](../map/raster-maps.md).
- **GPS** / **Rete GSM**. Determina la tua posizione, ti segue in modalità navigazione e registra il tuo viaggio (opzionale). Questa autorizzazione viene richiesta quando fai clic sul [pulsante la mia posizione](../widgets/map-buttons.md#my-location-and-zoom) o quando [avvii la navigazione](../navigation/setup/route-navigation.md#start--stop-navigation).

**Opzionali**:

- **Registrazione fotocamera/voce** (*Android*). Utilizzato solo dalle [note audio/video](../plugins/audio-video-notes.md). Questa funzione è confezionata come plugin e per impostazione predefinita è disabilitata. Ti consente di creare rapidamente note audio/video relative alla posizione durante un viaggio.


> *Ultimo aggiornamento: Gennaio 2025*