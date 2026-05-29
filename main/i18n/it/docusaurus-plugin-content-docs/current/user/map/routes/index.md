---
source-hash: f16263db8d987d5d802140c2f60261308cc6e1eb3b436559f0926217fa039b11
title: Itinerari
sidebar_position: 11
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

OsmAnd dispone di molte potenti funzionalità per visualizzare diversi [itinerari](./types-of-routes.md) sulla mappa. Per impostazione predefinita, questi itinerari fanno parte delle [mappe vettoriali](../../map/vector-maps.md#routes) (dati OpenStreetMap), tuttavia funzionalità analoghe sono fornite dalle [tracce](../../map/tracks/index.md) che possono essere create con [Pianifica un itinerario](../../plan-route/create-route.md), importate come [tracce GPX](#save-as-a-track), registrate con il [plugin Registrazione viaggio](../../plugins/trip-recording.md). La legenda degli itinerari sulla mappa è disponibile [qui](../../map-legend/osmand.md#routes).


## Visualizzare gli itinerari sulla mappa {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) ![Routes Classes](@site/static/img/map/routes_classes_android.png)

- Per visualizzare gli itinerari desiderati sulla mappa, attivali nell'*elenco Itinerari* del menu [Configura mappa](../../map/configure-map-menu.md).
- OsmAnd può evidenziare gli [itinerari presenti su OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). È possibile selezionarli toccando [il simbolo sull'itinerario](#save-as-a-track) e, se l'insieme visibile di itinerari è configurato correttamente, è possibile seguirne il colore e le icone.
- I tipi principali di itinerari possono anche essere filtrati per classi e sottoclassi, consentendo di visualizzare solo gruppi specifici all'interno di ciascun tipo. Ad esempio, è possibile mostrare gli itinerari escursionistici tramite i **simboli OSMC** come classi e tramite le reti *internazionali, nazionali, regionali* o *locali* come sottoclassi, attualmente disponibili quando è abilitato il plugin [Sviluppo OsmAnd](../../plugins/development.md).
- È possibile creare una traccia sopra gli itinerari utilizzando lo strumento [Pianifica un itinerario](../../plan-route/create-route.md). 
- Quando più itinerari percorrono la stessa strada, ciascun itinerario viene visualizzato come una linea semitrasparente separata posizionata sopra le altre. 
- Toccando un punto in cui si sovrappongono più itinerari viene visualizzato un menu contestuale con tutti gli itinerari che passano per quel punto. 
- Per visualizzare tutti gli elementi del nuovo schema di rendering degli itinerari sono necessarie mappe vettoriali aggiornate. 

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

- Per visualizzare gli itinerari desiderati sulla mappa, attivali nell'*elenco Itinerari* del menu [Configura mappa](../../map/configure-map-menu.md).
- OsmAnd può evidenziare gli [itinerari presenti su OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). È possibile selezionarli toccando [il simbolo sull'itinerario](#save-as-a-track) e, se l'insieme visibile di itinerari è configurato correttamente, è possibile seguirne il colore e le icone.
- È possibile creare una traccia sopra gli itinerari utilizzando lo strumento [Pianifica un itinerario](../../plan-route/create-route.md). 
- Quando più itinerari percorrono la stessa strada, ciascun itinerario viene visualizzato come una linea semitrasparente separata posizionata sopra le altre.   

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Azioni sugli itinerari {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios_new.png) ![Route info](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

Sulla mappa è possibile selezionare itinerari per [escursionismo, ciclismo, sci, MTB, dirt bike, viaggi e altro ancora](./types-of-routes.md). Dove disponibili, gli itinerari escursionistici mostrano i loro segnavia tramite i [simboli OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); gli altri tipi di itinerario utilizzano le proprie marcature.

Quando si tocca un **simbolo di itinerario** sulla mappa:

- Viene visualizzato un **elenco degli itinerari vicini** in quel punto.
- Dopo aver selezionato un itinerario dall'elenco, si apre il [menu contestuale](../../map/tracks/track-context-menu.md) per quell'itinerario, che mostra informazioni dettagliate e azioni disponibili.
- L'itinerario selezionato viene aperto nella visualizzazione traccia, consentendo di interagire con esso allo stesso modo di una traccia GPX.

Nel **menu contestuale** è possibile:

- Visualizzare [ulteriori informazioni](#route-info-and-elevation) sull'itinerario selezionato.
- [Salvare l'itinerario](#save-as-a-track) come **traccia GPX**.
- [Avviare la navigazione](#start-navigation) lungo l'itinerario.

### Dettagli area di arrampicata e parete rocciosa {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

Quando si seleziona un'[area di arrampicata o una parete rocciosa](./types-of-routes.md#climbing-routes), OsmAnd fornisce un riepilogo dettagliato del luogo di arrampicata, inclusi: nome e posizione, grado di difficoltà di arrampicata (UIAA, Francese, YDS, ecc.), tipo di roccia, altezza e lunghezza dell'itinerario, qualità dell'arrampicata e condizioni della superficie.

### Informazioni sull'itinerario e altitudine {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr_new.png) ![Route info](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios_new.png) ![Route info](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

Nel menu contestuale saranno visibili le seguenti informazioni:

- **Informazioni sull'itinerario**: Nome dell'itinerario, collegamento OSM (richiesto il plugin Modifica OSM), Tipo, Descrizione, Distanza, Direzione, Salita/Discesa, Intervallo altimetrico, Rete, Gestore, Stato, Colore, Andata e ritorno, Punti di inizio/fine e altro.
- **Generale**: Dimensione, Posizione, Data di creazione.
- **Informazioni aggiuntive**. Mostra il tipo di attività.
- Pulsanti di azione: [Salva come](#save-as-a-track) e [Avvia navigazione](#start-navigation).
- [Informazioni altimetriche](../../navigation/setup/route-details.md#elevation-info). Visualizza le informazioni sui dati altimetrici dell'itinerario.
- [Analizza traccia sulla mappa](../../map/tracks/index.md#analyze-track-on-map). Visualizza un'analisi dettagliata dei dati della traccia tramite grafici e mappe.

Per visualizzare il grafico dell'altitudine, della pendenza o dei dettagli altimetrici di un itinerario selezionato, tocca uno dei seguenti valori nel menu contestuale: **Distanza**, **Salita**, **Discesa** o **Altitudine**.

È anche possibile aprire la scheda *Traccia* e passare alla visualizzazione *Altitudine* per vedere il grafico altimetrico completo dell'itinerario.

**Nota:** i dati altimetrici vengono generati automaticamente e possono differire leggermente in base ai dati disponibili.

### Salva come traccia {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Per salvare l'itinerario come *file GPX*, tocca il pulsante **Salva (Scarica)** nel [pannello Info](../../map/tracks/track-context-menu.md#info-panel). Si aprirà il pannello dei pulsanti [Azioni rapide](../../map/tracks/track-context-menu.md#track-actions) dove avrai accesso alle azioni della traccia come la modifica dell'[Aspetto](../../map/tracks/appearance.md), la [Navigazione](../../navigation/setup/route-navigation.md) o la modifica di [Pianifica un itinerario](../../plan-route/create-route.md). Gli itinerari salvati si comportano come le altre tracce e sono disponibili nella raccolta tracce.

### Avvia navigazione {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Per avviare la navigazione lungo l'itinerario OSM selezionato, tocca il pulsante **Avvia navigazione** nel [**pannello Info**](../../map/tracks/track-context-menu.md#info-panel).

Verrà avviata la modalità [**Navigazione per traccia**](../../navigation/setup/gpx-navigation.md), che consente di seguire l'itinerario con indicazioni vocali e funzioni di navigazione.

### Azioni rapide {#quick-actions}

È possibile personalizzare l'attivazione o la disattivazione degli itinerari utilizzando il widget [Azione rapida](../../widgets/quick-action.md#configure-map).


## Ricerca itinerari {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png) ![Routes on the ground](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png) ![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>  

Trova gli itinerari utilizzando la [funzione di ricerca](../../search/index.md) per nome o selezionando "Itinerari" nella [sezione Categorie](../../search/search-poi.md#).

Per cercare, vai al menu *<Translate android="true" ids="search_button"/>* o a *<Translate android="true" ids="search_button,search_categories"/>* e inserisci la tua attività.

Vai a *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* per trovare gli itinerari desiderati. I risultati della ricerca degli itinerari mostrano il nome dell'itinerario, il tipo di attività, la lunghezza, la posizione, la salita/discesa (su Android) e la distanza dal punto più vicino. 

### Filtri itinerari {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2_new.png) ![Routes on the ground](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

Nei risultati della ricerca degli itinerari, tocca il pulsante **Filtri** nell'angolo in alto a destra per restringere l'elenco. La schermata Filtri include un campo **Filtra per nome**; un blocco **Tipo** con *Ufficio*, *Aggiunta postale* e *Partner postale*; e **criteri aggiuntivi** che dipendono dalla categoria o dall'attività dell'itinerario selezionato, poiché ciascuna categoria può esporre le proprie caratteristiche e valori di filtro.

È possibile attivare o disattivare i filtri tramite gli interruttori e alcune sezioni includono *Mostra tutto* per visualizzare valori aggiuntivi.


## Articoli correlati {#related-articles}

- [Menu contestuale della mappa](../../map/map-context-menu.md)
- [Configura mappa](../../map/configure-map-menu.md)
- [Tracce](../../map/tracks/index.md)
- [Menu contestuale tracce](../../map/tracks/track-context-menu.md)
- [Trasporto pubblico](../public-transport.md)
- [Aspetto della linea del percorso di navigazione](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [Ricerca POI](../../search/search-poi.md#)
- [Tipi di itinerari](./types-of-routes.md)