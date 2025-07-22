---
source-hash: 44618d2a28205f83a5a0d07741bf7f6948d9ca1354f8bc8546bcb8ce70d1114e
sidebar_position: 9
title:  Modifica OpenStreetMap
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) è una comunità globale che mira a creare una mappa geografica dettagliata e gratuita del mondo e a fornire dati open-source aggiornati a ogni utente. Il plugin di modifica OpenStreetMap ti consente di contribuire alla comunità.

Con OsmAnd e il plugin di modifica OSM, puoi facilmente contribuire con le tue informazioni a OpenStreetMap.org, ad esempio per creare o modificare [POI](#create--modify-poi), aggiungere o commentare [note](#create--modify-osm-note) e caricare [tracce](#upload-gps-track) GPX registrate.

## Parametri di configurazione richiesti {#required-setup-parameters}

Per utilizzare il plugin *Modifica OpenStreetMap*, devi effettuare le seguenti impostazioni:

1. Abilita [Plugin](../plugins/index.md#enable--disable).
2. Imposta la modifica OpenStreetMap in qualsiasi [profilo](../personal/profiles.md).
3. Abilita la visualizzazione di *Note OSM (online)* o *Modifiche OSM* sulla mappa nel [menu Configura mappa](../map/configure-map-menu).


## Impostazioni {#settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

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

- [Accedi a OpenStreetMap](#authorization). Accedi per caricare modifiche nuove o modificate. Utilizza il metodo sicuro *OAuth 2.0* o [accedi al sito OSM](https://www.openstreetmap.org/login). Per iOS, il pulsante per il metodo OAuth è disponibile solo per gli utenti con una versione supportata di iOS, 16.4
- **<Translate android="true" ids="offline_edition"/>**. Se questa impostazione è abilitata, le modifiche vengono prima salvate localmente (pulsante *Salva*) e caricate su richiesta. Se l'impostazione è disabilitata, le modifiche vengono caricate immediatamente (pulsante *Carica*).
- **<Translate android="true" ids="use_dev_url"/>** *(solo Android)*. Consente di abilitare [dev.openstreetmap.org](https://dev.openstreetmap.org/) invece di [openstreetmap.org](http://openstreetmap.org/) per testare il caricamento di Note OSM, POI o tracce GPS. Quando abilitato, vieni automaticamente disconnesso da OpenStreetMap.org. Questa impostazione è disponibile nell'elenco solo quando il *plugin di sviluppo OsmAnd* è abilitato.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Toccalo per aprire [*Menu → I miei luoghi → Modifiche OSM*](../personal/myplaces.md). Questa scheda elenca le tue note OSM non modificate. Le seguenti azioni sono disponibili con la nota: *Carica*, *Mostra sulla mappa*, *Modifica nota OSM*, *Elimina*. Le note caricate o eliminate non vengono più visualizzate nell'elenco.

:::note
Se hai un abbonamento [OsmAnd Pro](../purchases/android.md#pro-features), le modifiche apportate a OSM appariranno sulla tua mappa OsmAnd entro un'ora. Assicurati che gli [Aggiornamenti in tempo reale](../personal/maps-resources.md#osmand-live) siano abilitati.
:::


### Autorizzazione {#authorization}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Accedi per contribuire con modifiche e file GPX.

- Vai su [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) e *accedi* o *registrati*.
- Tocca il campo *Accedi a OpenStreetMap* nell'app OsmAnd, quindi tocca il pulsante *Accedi con OpenStreetMap*.


### Aggiornamenti gratuiti delle mappe per i mappatori {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_andr.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_ios.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

L'impostazione <Translate android="true" ids="map_updates_for_mappers"/> ti consente di abilitare **[OsmAnd live](../personal/maps-resources.md#free-for-osm-mappers)** se sei un contributore attivo di OpenStreetMap. In questo modo puoi usufruire di aggiornamenti orari gratuiti delle mappe, a differenza degli aggiornamenti mensili standard. I contributori attivi di OpenStreetMap.org potrebbero avere diritto a aggiornamenti orari illimitati delle mappe. Accedi a OpenStreetMap per verificare la tua idoneità per aggiornamenti mensili e orari illimitati delle mappe.


### Livello di modifica OSM {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM editing layer Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM editing layer Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![OSM editing layer iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Puoi abilitare o disabilitare come livello separato la visualizzazione delle modifiche OSM come *Note OSM* (online), *Modifiche OSM*, *Tag Fixme*, *Tag Note*, *Icone a zoom bassi*, nella sezione [Configura mappa](../map/configure-map-menu.md) del *Menu principale*.


## Crea / Modifica POI {#create--modify-poi}

Il plugin di modifica OpenStreetMap ti consente di creare nuovi oggetti sulla mappa chiamati [punti di interesse o POI](../map/point-layers-on-map.md#points-of-interest-pois). Puoi mappare un nuovo negozio, un punto di riferimento preferito, una panchina o un riparo in modo che le persone possano trovarli.

1. Tocca la mappa per posizionare un nuovo POI o tocca un POI non ancora caricato.2. Tocca [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. Scegli [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi) e aggiungi il suo nome e altre informazioni come orari di apertura, sito web, ecc. Quando selezioni un POI non caricato, *Crea POI* cambia in *Modifica POI*.
3. A seconda dell'impostazione [Modifica offline](#settings), puoi salvare i dati localmente o [caricarli](../map/map-context-menu#-upload-poi--osm-note).


### Aggiungi tag {#add-tags}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add POI tag ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Puoi facilmente aggiungere [tag](https://wiki.openstreetmap.org/wiki/Tags) OSM al POI. Quando inserisci diversi caratteri nella barra di ricerca, il programma suggerisce possibili tag.

**Modifiche offline.**
Puoi visualizzare, caricare su OSM o eliminare POI in *I miei luoghi → Modifiche OSM*. Puoi anche esportare le modifiche dei tuoi POI OSM in un [file OSC](https://wiki.openstreetmap.org/wiki/OsmChange) e importarlo in [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### Aggiungi tipi di POI non supportati {#add-unsupported-poi-types}

Nella scheda *Avanzate*, puoi aggiungere tipi di POI non supportati che potrebbero essere utili per il tuo compito specifico. Questa opzione ti consente di inserire manualmente i dati del POI estendendo così la funzionalità dell'applicazione.

Un esempio di tipi di POI non supportati che puoi aggiungere è *amenity=freeshops*. Questo tipo può essere utile se vuoi contrassegnare negozi gratuiti o luoghi che forniscono prodotti gratuiti.

Per aggiungere tipi di POI non supportati, segui questi passaggi:

1. Apri la scheda *Avanzate*.
2. Tocca *Tipo POI*.
3. Inserisci la chiave *amenity* e il valore *freeshops* nei campi appropriati.
4. Compila il resto dei dati richiesti per questo POI.
5. Tocca *Aggiungi tag* per aggiungere il nuovo POI al tuo database.

Ricorda che quando aggiungi tipi di POI non supportati, è importante assicurarsi che i dati siano inseriti correttamente per garantire il corretto funzionamento dell'applicazione e la successiva elaborazione delle informazioni.


## Crea / Modifica nota OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Per modificare, commentare o chiudere le note OSM, abilita la loro visualizzazione sulla mappa nel [menu Configura mappa](../map/configure-map-menu.md).

- La funzione Note OSM ti consente di aggiungere note alla mappa. In queste note, puoi descrivere errori o scrivere informazioni mancanti nei dati di OpenStreetMap. Tu e altri utenti potete lasciare commenti sulle vostre note.
- Puoi aiutare altri utenti controllando le loro domande o problemi, lasciando commenti e quindi chiudendo le note risolte.
- Leggi di più sulle Note OpenStreetMap [qui](https://wiki.openstreetmap.org/wiki/Notes).

Per creare una nota, non è necessario accedere a OpenStreetMap.org, puoi inviarla in forma anonima.

- Tocca la mappa dove deve essere posizionata la nuova nota OSM (o tocca una nota non caricata) e seleziona [Azioni](../map/map-context-menu.md#actions).
- Se vuoi aggiungere informazioni a una nota esistente o a una nota non caricata, modificare un commento o chiudere una nota, tocca la nota OSM sulla mappa e seleziona l'[azione richiesta](../map/map-context-menu.md#-comment--close-osm-note).
- Puoi caricare le modifiche non appena sei disponibile online. Puoi anche annullare le modifiche prima che vengano caricate.

:::info
Le Note OSM caricate non sono visibili sulle mappe OsmAnd in modalità offline.
:::


## Traccia GPS {#gps-track}

Le tracce GPS che hai registrato sono utili per:

- **Mappatori**. Le tracce possono essere utilizzate per mappare tutti i tipi di percorsi.
- **Navigazione**. Sulla base dei dati del file GPX che hai caricato, le applicazioni di navigazione e i dispositivi speciali possono calcolare i percorsi.
- **Per condividere informazioni** sulle tracce e sui percorsi che hai registrato su [mappe basate su OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info NOTA
Le tue tracce verranno aggiunte a [OSM traces](https://www.openstreetmap.org/traces) entro un'ora, dove saranno disponibili per te e altri utenti per visualizzare, cercare e utilizzare.
:::


### Carica traccia GPS {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OpenStretMap editing plugin GPX to OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

Per [caricare la traccia GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), segui i passaggi seguenti:

- Trova la traccia richiesta nella scheda [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).
- Tocca il *menu a tre puntini* accanto al nome della traccia e seleziona *Esporta*.

**Impostazioni:**

- **<Translate android="true" ids="shared_string_description"/>**. Consente di aggiungere una descrizione alla traccia. La descrizione si applica a tutte le tracce selezionate. Se non inserisci nulla nel campo, i nomi delle tracce per ogni traccia separata vengono utilizzati come descrizioni.
- **<Translate android="true" ids="gpx_tags_txt"/>**. Questo elemento nella sezione delle impostazioni ti consente di aggiungere tag per identificare la traccia. Il tag predefinito è "osmand", puoi inserire tag aggiuntivi separati da virgole.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Visibilità della traccia per gli utenti OSM:
   - *Pubblica* significa che la traccia è pubblicamente disponibile e visualizzata in forma grezza nelle tue tracce GPS, negli elenchi di tracce GPS e negli elenchi di tracce con timestamp. I dati trasmessi tramite l'API non sono referenziati con la pagina della tua traccia. I timestamp dei punti di traccia non sono disponibili tramite l'API GPS pubblica e i punti di traccia non sono ordinati cronologicamente.
   - *Identificabile* significa che la traccia verrà visualizzata pubblicamente nei tuoi punti di traccia GPS e negli elenchi di tracce GPS pubbliche, il che significa che altri utenti potranno scaricare la traccia grezza e associarla al tuo nome utente. I dati dei punti di traccia con timestamp pubblici dall'API GPS passati tramite l'API dei punti di traccia si collegheranno alla tua pagina di traccia originale.
   - *Tracciabile* significa che la traccia non viene visualizzata negli elenchi pubblici, ma i punti di traccia elaborati con timestamp da essa (che non possono essere collegati direttamente a te) vengono caricati dall'API GPS pubblica.
   - *Privata* significa che la traccia non viene visualizzata negli elenchi pubblici, ma i punti di traccia da essa in ordine non cronologico sono disponibili tramite l'API GPS pubblica senza timestamp.
- **<Translate android="true" ids="login_account"/>** - [Account OSM](https://www.openstreetmap.org/login).

:::info
Puoi selezionare più di una traccia da caricare su OSM. Per fare ciò, tocca l'icona *Carica su OpenStreetMap* nella parte inferiore dello schermo, seleziona le tracce utilizzando la casella di controllo, tocca *Carica* e quindi *Continua*.
:::

### Genera file OBF {#generate-obf-file}

Puoi creare un file OBF con [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) se hai un ampio database di tracce GPX. Questa è una raccolta di tracce da osmand.net con il tag 'gpsies', una raccolta di tracce scaricate da OpenStreetMap o la tua collezione personale.


## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: maggio 2024*