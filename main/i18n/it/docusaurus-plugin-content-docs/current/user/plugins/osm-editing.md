---
source-hash: fb4dfa3af12638db8d07636ca58d9e23de9542afc7c2cd66d965f36e2bc93826
sidebar_position: 9
title:  Modifica di OpenStreetMap
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) è una comunità globale che mira a creare una mappa geografica dettagliata e libera del mondo e a fornire dati open-source aggiornati a ogni utente. Il plugin di modifica di OpenStreetMap consente di contribuire alla comunità.  

Con OsmAnd e il plugin di modifica OSM, è possibile contribuire facilmente con le proprie informazioni a OpenStreetMap.org, ad esempio per creare o modificare [PDI](#create--modify-poi), aggiungere o commentare [note](#create--modify-osm-note) e caricare [tracce](#upload-gps-track) GPX registrate.

## Parametri di configurazione richiesti {#required-setup-parameters}

Per utilizzare il plugin *Modifica di OpenStreetMap*, è necessario effettuare le seguenti impostazioni:

1. Abilitare il [Plugin](../plugins/index.md#enable--disable).  
2. Impostare la modifica di OpenStreetMap in qualsiasi [profilo](../personal/profiles.md).
3. Abilitare la visualizzazione di *Note OSM (online)* o *Modifiche OSM* sulla mappa nel menu [Configura mappa](../map/configure-map-menu).


## Impostazioni {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*  
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>  

:::note
Le impostazioni del plugin sono globali e si applicano a tutti i profili.
:::

- [Accedi a OpenStreetMap](#authorization). Accedere per caricare le modifiche nuove o modificate. Utilizzare il metodo sicuro *OAuth 2.0* o [accedere al sito OSM](https://www.openstreetmap.org/login). Per iOS, il pulsante per il metodo OAuth è disponibile solo per gli utenti con una versione supportata di iOS, 16.4
- **<Translate android="true" ids="offline_edition"/>**. Se questa impostazione è abilitata, le modifiche vengono prima salvate localmente (pulsante *Salva*) e caricate su richiesta. Se l'impostazione è disabilitata, le modifiche vengono caricate immediatamente (pulsante *Carica*).
- **<Translate android="true" ids="use_dev_url"/>** *(solo per Android)*. Consente di abilitare [dev.openstreetmap.org](https://dev.openstreetmap.org/) invece di [openstreetmap.org](http://openstreetmap.org/) per testare il caricamento di note OSM, PDI o tracce GPS. Quando è abilitato, si viene automaticamente disconnessi da OpenStreetMap.org. Questa impostazione è disponibile nell'elenco solo quando il *plugin di sviluppo OsmAnd* è abilitato.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Toccare per aprire [*Menu → I miei luoghi → Modifiche OSM*](../personal/myplaces.md). Questa scheda elenca le note OSM non modificate. Le seguenti azioni sono disponibili con la nota: *Carica*, *Mostra sulla mappa*, *Modifica nota OSM*, *Elimina*. Le note caricate o eliminate non vengono più visualizzate nell'elenco.  

:::note
Se si dispone di un abbonamento [OsmAnd Pro](../purchases/android.md#pro-features), le modifiche apportate a OSM appariranno sulla mappa di OsmAnd entro un'ora. Assicurarsi che gli [Aggiornamenti Live](../personal/maps-resources.md#live-updates) siano abilitati.
:::  


### Autorizzazione {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Accedere per contribuire con modifiche e file GPX.  

- Andare su [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) e *accedere* o *registrarsi*.
- Toccare il campo *Accedi a OpenStreetMap* nell'app OsmAnd, quindi toccare il pulsante *Accedi con OpenStreetMap*.  


### Aggiornamenti gratuiti della mappa per i mappatori {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_andr.png)   ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_ios.png)    ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

L'impostazione <Translate android="true" ids="map_updates_for_mappers"/> consente di abilitare gli **[aggiornamenti live](../personal/maps-resources.md#free-for-osm-mappers)** se si è un contributore attivo di OpenStreetMap. In questo modo è possibile usufruire di aggiornamenti orari gratuiti della mappa, a differenza degli aggiornamenti mensili standard. I contributori attivi di OpenStreetMap.org possono avere diritto a un numero illimitato di aggiornamenti orari della mappa. Accedere a OpenStreetMap per verificare la propria idoneità agli aggiornamenti illimitati mensili e orari della mappa.


### Livello di modifica OSM {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_open_street_map"/>*

![OSM editing layer Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM editing layer Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_open_street_map"/>*

![OSM editing layer iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

È possibile abilitare o disabilitare come livello separato la visualizzazione delle modifiche OSM nella sezione [Configura mappa](../map/configure-map-menu.md) del *Menu principale*. Le modifiche OSM includono quanto segue:  
- **Note OSM (online)**. Visualizza le note pubbliche di OpenStreetMap create dagli utenti per evidenziare problemi di mappatura o richiedere aggiornamenti. Le note sono mostrate come marcatori interattivi che possono essere esaminati, aperti e risolti dai mappatori.  
![OSM editing layer](@site/static/img/plugins/osm-editing/osm_editing_osm_note.png)  
- **Modifiche OSM**. Mostra le proprie modifiche OSM locali memorizzate sul dispositivo prima del caricamento sul server di OpenStreetMap. Questo livello aiuta a esaminare la geometria e gli attributi degli oggetti modificati o aggiunti.  
![OSM editing layer](@site/static/img/plugins/osm-editing/osm_editing_osm_edits.png)  
- **Tag Fixme**. Evidenzia gli oggetti contrassegnati con fixme=* in OSM. Questi elementi contengono commenti dei mappatori che indicano che le informazioni sono incomplete, incerte o necessitano di verifica sul campo.  
![OSM editing layer](@site/static/img/plugins/osm-editing/osm_editing_fixme_tags.png)  
- **Tag Note**. Visualizza gli oggetti che contengono tag note=* — commenti dei mappatori incorporati direttamente nei dati OSM. Questi tag descrivono solitamente condizioni temporanee o contesto aggiuntivo per future modifiche.  
![OSM editing layer](@site/static/img/plugins/osm-editing/osm_editing_note_tags.png)  
- **Icone a bassi livelli di zoom**. Abilita rappresentazioni semplificate simili a icone degli oggetti OSM utilizzando abbreviazioni brevi derivate dalle loro chiavi di tag principali. Il loro significato è descritto [qui](https://osmand.net/docs/user/map-legend/osmand#icons-for-low-zooms-option-simplified-icons-). Questa funzionalità rende più oggetti visibili ai bassi livelli di zoom senza sovraccaricare la mappa o causare sovrapposizioni di icone.  
![OSM editing layer](@site/static/img/plugins/osm-editing/osm_editing_icons_zoom.png)  


## Creare / Modificare PDI {#create--modify-poi}

Il plugin di modifica di OpenStreetMap consente di creare nuovi oggetti sulla mappa chiamati [punti di interesse o PDI](../map/point-layers-on-map.md#points-of-interest-pois). È possibile mappare un nuovo negozio, un punto di riferimento preferito, una panchina o un rifugio in modo che le persone possano trovarli.  

1. Toccare la mappa per posizionare un nuovo PDI, o toccare un PDI non ancora caricato.2. Toccare [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. Scegliere [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi) e aggiungere il suo nome e altre informazioni come orari di apertura, sito web, ecc. Quando si seleziona un PDI non caricato, *Crea PDI* cambia in *Modifica PDI*.
3. A seconda dell'impostazione [Modifica offline](#settings), è possibile salvare i dati localmente o [caricarli](../map/map-context-menu#-upload-poi--osm-note).


### Aggiungere tag {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Add POI tag ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

È possibile aggiungere facilmente [tag](https://wiki.openstreetmap.org/wiki/Tags) OSM al PDI. Quando si inseriscono alcuni caratteri nella barra di ricerca, il programma suggerisce i possibili tag.  

**Modifiche offline.**  
È possibile visualizzare, caricare su OSM o eliminare i PDI in *I miei luoghi → Modifiche OSM*. È anche possibile esportare le modifiche ai PDI in un [file OSC](https://wiki.openstreetmap.org/wiki/OsmChange) e importarlo in [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).  

### Aggiungere tipi di PDI non supportati {#add-unsupported-poi-types}

Nella scheda *Avanzate*, è possibile aggiungere tipi di PDI non supportati che possono essere utili per il proprio compito specifico. Questa opzione consente di inserire manualmente i dati dei PDI, estendendo così le funzionalità dell'applicazione.  

Un esempio di tipo di PDI non supportato che è possibile aggiungere è *amenity=freeshops*. Questo tipo può essere utile se si desidera contrassegnare negozi gratuiti o luoghi che forniscono prodotti gratuiti.

Per aggiungere tipi di PDI non supportati, seguire questi passaggi:

1. Aprire la scheda *Avanzate*.
2. Toccare *Tipo di PDI*.
3. Inserire la chiave *amenity* e il valore *freeshops* nei campi appropriati.
4. Compilare il resto dei dati richiesti per questo PDI.
5. Toccare *Aggiungi tag* per aggiungere il nuovo PDI al proprio database.

Ricordare che quando si aggiungono tipi di PDI non supportati, è importante assicurarsi che i dati siano inseriti correttamente per garantire il corretto funzionamento dell'applicazione e la successiva elaborazione delle informazioni.


## Creare / Modificare una nota OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*  

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)   ![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*  

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Per modificare, commentare o chiudere le note OSM, abilitare la loro visualizzazione sulla mappa nel menu [Configura mappa](../map/configure-map-menu.md).

- La funzione Note OSM consente di aggiungere note alla mappa. In queste note, è possibile descrivere errori o scrivere informazioni mancanti nei dati di OpenStreetMap. Voi e altri utenti potete lasciare commenti sulle vostre note.
- È possibile aiutare altri utenti controllando le loro domande o problemi, fornendo commenti e quindi chiudendo le note risolte.
- Per saperne di più sulle Note di OpenStreetMap [qui](https://wiki.openstreetmap.org/wiki/Notes).

Per creare una nota, non è necessario accedere a OpenStreetMap.org, è possibile inviarla in modo anonimo.

- Toccare la mappa dove deve essere posizionata la nuova nota OSM (o toccare una nota non caricata) e selezionare [Azioni](../map/map-context-menu.md#actions).
- Se si desidera aggiungere informazioni a una nota esistente o a una nota non caricata, modificare un commento o chiudere una nota, toccare la nota OSM sulla mappa e selezionare l'[azione richiesta](../map/map-context-menu.md#-comment--close-osm-note).
- È possibile caricare le modifiche non appena si è disponibili online. È anche possibile annullare le modifiche prima che vengano caricate.

:::info
Le note OSM caricate non sono visibili sulle mappe di OsmAnd in modalità offline.
:::


## Traccia GPS {#gps-track}

Le tracce GPS registrate sono utili per:

- **Mappatori**. Le tracce possono essere utilizzate per mappare tutti i tipi di percorsi.
- **Navigazione**. Sulla base dei dati del file GPX caricato, le applicazioni di navigazione e i dispositivi speciali possono calcolare le tracce.
- **Condividere informazioni** sulle tracce e sui percorsi registrati su [mappe basate su OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).  

:::info NOTA
Le tue tracce verranno aggiunte alle [tracce OSM](https://www.openstreetmap.org/traces) entro un'ora, dove saranno disponibili per te e per altri per la visualizzazione, la ricerca e l'utilizzo.
:::  


### Caricare una traccia GPS {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OpenStretMap editing plugin GPX to OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)  

</TabItem>

</Tabs>

Per [caricare la traccia GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), seguire i passaggi seguenti:  

- Trovare la traccia richiesta nella scheda [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).  
- Toccare il *menu a tre punti* accanto al nome della traccia e selezionare *Esporta*.

**Impostazioni:**

- **<Translate android="true" ids="shared_string_description"/>**. Consente di aggiungere una descrizione alla traccia. La descrizione si applica a tutte le tracce selezionate. Se non si inserisce nulla nel campo, i nomi delle tracce per ogni singola traccia vengono utilizzati come descrizioni.  
- **<Translate android="true" ids="gpx_tags_txt"/>**. Questa voce nella sezione delle impostazioni consente di aggiungere tag per identificare la traccia. Il tag predefinito è "osmand". Se la traccia è stata registrata con un'attività specifica in base al profilo selezionato, questa attività viene anche aggiunta automaticamente come tag durante il caricamento. Per gruppi di tracce caricate, ogni traccia riceve il proprio tag di attività. Per alcuni profili (ad es. Trasporto pubblico), il tag di attività non viene aggiunto. È possibile inserire manualmente tag aggiuntivi, separati da virgole.  
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Visibilità della traccia per gli utenti OSM:  
   - *Pubblica* significa che la traccia è pubblicamente disponibile e visualizzata in forma grezza nelle tue tracce GPS, negli elenchi di tracce GPS e negli elenchi di tracce con timestamp. I dati trasmessi tramite l'API non sono riferiti alla tua pagina della traccia. I timestamp dei punti della traccia non sono disponibili tramite l'API GPS pubblica e i punti della traccia non sono ordinati cronologicamente.
   - *Identificabile* significa che la traccia sarà visualizzata pubblicamente nei tuoi punti di traccia GPS e negli elenchi pubblici di tracce GPS, il che significa che altri utenti potranno scaricare la traccia grezza e associarla al tuo nome utente. I dati pubblici dei punti di traccia con timestamp dall'API GPS passati attraverso l'API dei punti di traccia si collegheranno alla tua pagina della traccia originale.
   - *Tracciabile* significa che la traccia non viene visualizzata negli elenchi pubblici, ma i punti della traccia elaborati con timestamp da essa (che non possono essere collegati direttamente a te) vengono caricati dall'API GPS pubblica.
   - *Privata* significa che la traccia non viene visualizzata negli elenchi pubblici, ma i punti della traccia da essa in ordine non cronologico sono disponibili tramite l'API GPS pubblica senza timestamp.
- **<Translate android="true" ids="login_account"/>** - [Account OSM](https://www.openstreetmap.org/login).

:::info
È possibile selezionare più di una traccia da caricare su OSM. Per fare ciò, toccare l'icona *Carica su OpenStreetMap* nella parte inferiore dello schermo, selezionare le tracce utilizzando la casella di controllo, toccare *Carica* e quindi *Continua*.
:::

### Generare un file OBF {#generate-obf-file}

È possibile creare un file OBF con [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) se si dispone di un ampio database di tracce GPX. Si tratta di una raccolta di tracce da osmand.net con il tag 'gpsies', una raccolta di tracce scaricate da OpenStreetMap o la propria raccolta.


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)