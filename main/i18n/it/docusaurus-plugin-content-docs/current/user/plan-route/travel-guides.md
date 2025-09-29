---
source-hash: 4d1fd6f77d3485a33ced776546c65769d6a354be721ca6e2b421c4ef414bb7e8
sidebar_position: 2
title:  Guide di viaggio
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Panoramica {#overview}

:::info Funzionalità a pagamento
Le Guide di viaggio sono una [funzionalità a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

Le guide di viaggio virtuali in OsmAnd offrono agli utenti informazioni preziose, raccomandazioni e consigli. Permettono inoltre ai viaggiatori di accedere a informazioni di navigazione complete sulle attrazioni nell'app.

Le guide di viaggio di OsmAnd si basano sui dati di [Wikivoyage](https://www.wikivoyage.org/), un progetto comunitario simile a Wikipedia, in cui autori volontari creano articoli aggiornati.
Le informazioni di Wikivoyage includono i fatti principali su un luogo, i trasporti, le attrazioni, lo shopping e altro ancora.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Vista generale delle guide di viaggio](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu Mappe iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Come si usa {#how-to-use}

- [Scaricare](#download-articles) le *Guide di viaggio*.
- Sfogliare gli [articoli](#browse-articles) su un paese, una regione, una città, un'attrazione.
    - In alternativa, [visualizzare articoli e/o punti delle guide di viaggio sulla mappa](#travel-routes) utilizzando il menu Configura mappa.
    - Sfogliare le attrazioni sulla mappa, aggiungerle ai *[Segnalibri mappa](../personal/markers.md#add--edit-markers)* o ai *[Preferiti](../personal/favorites.md#favorite-group-actions)*.
    - Utilizzando il pulsante *[Leggi tutto](#manage-as-gpx-track)*, andare all'[articolo](#travel-article) all'interno delle *Guide di viaggio*.
- Aggiungere articoli ai [Segnalibri](#explore-and-bookmark) per leggerli in seguito.
- Scegliere i [punti](#points) dagli articoli da visitare e aggiungerli alla mappa di OsmAnd.
- Ottenere maggiori informazioni sui luoghi da visitare dagli [articoli di Wikipedia](#combine-with-wikipedia) offline.
- [Costruire un percorso](../navigation/setup/route-navigation.md#set-destinations) verso le attrazioni turistiche scelte o una passeggiata libera tra i punti.

:::note
Gli articoli delle *Guide di viaggio* sono memorizzati all'interno di OsmAnd come tracce GPX con Waypoint. Dopo aver aggiunto queste tracce alla mappa (vedere le sezioni *[Punti](#points)* o *[Itinerari di viaggio](#travel-routes)* di questo articolo), è possibile gestirle tramite il menu *[I miei luoghi](../personal/myplaces.md)*.
:::

### Scaricare articoli {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Menu di download delle guide di viaggio](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Menu Mappe iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Prima di iniziare a utilizzare le guide di viaggio, è necessario scaricarle tramite il [menu Scarica mappe](../start-with/download-maps.md#maps-and-resources) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Gli articoli sono raggruppati per regioni: *Africa, Asia, Australia e Oceania, America Centrale, Europa, Nord America, Russia e Sud America*, quindi non è necessario scaricare guide di viaggio per una singola città o paese.
Salvando le regioni richieste sul proprio dispositivo, è possibile sfogliare gli articoli con OsmAnd anche quando si è all'estero o fuori dalla portata della rete mobile.

:::note
Oltre alle guide su paesi, regioni o città, è possibile trovare guide su luoghi di film, libri, videogiochi, luoghi della memoria di grandi personaggi e così via.
Esistono anche guide specializzate, come l'elenco della Rete Globale dei Geoparchi UNESCO o i più grandi e complessi aeroporti internazionali del mondo.
:::

## Sfogliare gli articoli {#browse-articles}

La schermata *Guide di viaggio* è composta da due parti generali: un [*campo di ricerca*](#search) e un elenco di *guide di viaggio* con due schede: *[<Translate android="true" ids="shared_string_explore"/> e <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. È possibile passare da una all'altra con un singolo tocco su una scheda.
Quando si aprono le *Guide di viaggio* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd mostrerà articoli su luoghi interessanti situati vicino alle coordinate geografiche del centro attuale della mappa. Toccando un elemento dall'elenco, si apre l'[articolo della Guida di viaggio](#travel-article). In fondo alla schermata c'è un interruttore per la scheda *Segnalibri*.

### Esplora e aggiungi ai segnalibri {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata principale delle guide di viaggio](@site/static/img/guides/travel_guides_main_screen_1.png) ![Schermata principale delle guide di viaggio 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schermata principale delle guide di viaggio](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Schermata principale delle guide di viaggio 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

Nella scheda **Esplora** o **<Translate android="true" ids="popular_destinations"/>**, sono elencati i primi 30 articoli sulle destinazioni adiacenti al centro dello schermo (fuori dalla posizione). Toccando un elemento dall'elenco con un titolo e una breve descrizione dell'articolo, è possibile visualizzare il testo completo di quell'articolo.
Se si tocca il pulsante *Segnalibro*, l'articolo verrà salvato per una lettura successiva e sarà disponibile nella scheda Segnalibri. Nella scheda *Articoli salvati*, gli articoli sono disposti nell'ordine in cui sono stati salvati, con i più recenti in alto.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Apre l'[articolo della Guida di viaggio](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Sposta l'articolo selezionato in <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Rimuove l'articolo selezionato da <Translate android="true" ids="saved_articles"/>.

### Ricerca {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu di ricerca delle guide di viaggio](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu di ricerca delle guide di viaggio](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Il campo di ricerca si trova nella parte superiore della schermata <Translate android="true" ids="shared_string_travel_guides"/>. Se si iniziano a digitare le prime lettere di un paese, una città o un luogo famoso, apparirà un elenco di articoli sotto il campo di ricerca. Toccando quello desiderato, si può iniziare a leggere.
Accanto a ogni risultato di ricerca sono elencate le prime 3 lingue più comunemente usate in cui l'articolo selezionato può essere letto. Tuttavia, gli articoli popolari sono disponibili in più lingue rispetto alle 3 elencate.

**Funzionalità aggiuntive:**

- È possibile cercare attrazioni culturali speciali, come *turismo di Harry Potter*, *città fantasma*, *monarchie* e altre.
- Per eliminare la cronologia delle ricerche, è necessario utilizzare il [pulsante <Translate android="true" ids="shared_string_options"/>](#options).

<!-- 
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### Opzioni {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu delle opzioni delle guide di viaggio](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu di ricerca delle guide di viaggio](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

In questo menu, è possibile personalizzare l'aspetto degli articoli quando si lavora offline. NOTA che le guide di viaggio *[scaricate](#download-articles)* non contengono immagini. Appaiono solo quando si visualizzano gli articoli con una connessione Internet attiva.
Nel menu Opzioni, è possibile scegliere se salvare le immagini negli articoli visualizzati per utilizzarle quando si è offline. È anche possibile svuotare la cache delle immagini esistenti o eliminare la cronologia delle ricerche (funziona solo quando si cerca nelle *Guide di viaggio*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Le immagini negli articoli possono essere scaricate per l'uso offline.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Svuota la cache delle immagini per liberare memoria.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Cancella la [cronologia delle ricerche](#search).

## Articolo di viaggio {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Articolo delle guide di viaggio](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu di ricerca delle guide di viaggio](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

È possibile aprire un articolo dalle opzioni suggerite nella *[scheda Esplora](#explore-and-bookmark)* o utilizzando l'opzione *[Ricerca](#search)*. Quando si aggiungono attrazioni turistiche chiamate *[Punti](#points)* da un *articolo della Guida di viaggio* alla mappa di OsmAnd, è anche possibile aprire l'articolo utilizzando il pulsante *Leggi tutto* nella [sezione descrizione](../map/tracks/track-context-menu.md#description-and-info) del waypoint.

I seguenti controlli si trovano nella parte superiore dello schermo:

- Interruttore per cambiare la lingua dell'articolo. La lingua può essere selezionata tra le opzioni disponibili. La lingua di sistema viene utilizzata per impostazione predefinita.
- Utilizzando il pulsante &#8942;, è possibile condividere l'articolo con i propri amici. Il link si apre nell'app OsmAnd, il file delle guide di viaggio appropriato deve essere scaricato sul dispositivo del destinatario o sul sito di [Wikivoyage](https://www.wikivoyage.org/), se il destinatario non ha l'app OsmAnd o per i dispositivi iOS.
- Toccando la barra di navigazione si apre il *[Menu di navigazione delle guide di viaggio](#navigation-menu)*.

Nella parte inferiore dello schermo ci sono pulsanti come:

- [Contenuti](#table-of-contents). Apre l'indice dell'articolo.
- [Punti](#points). Mostra le attrazioni turistiche relative all'articolo su una mappa.
- [Segnalibro](#explore-and-bookmark). Permette di aggiungere un articolo ai segnalibri per una lettura successiva.


### Menu di navigazione {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu dei contenuti delle guide di viaggio](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu di ricerca delle guide di viaggio](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Per passare da un articolo all'altro negli *articoli della Guida di viaggio*, utilizzare il **Menu di navigazione**. È possibile accedervi toccando il campo dell'indirizzo sopra l'immagine. NOTA che gli articoli nelle Guide di viaggio sono raggruppati come segue: *Continente → Regione → Paese → Provincia (regione) → Città*.
Se si tocca la freccia nell'angolo in alto a sinistra dello schermo, si andrà direttamente alla scheda *Esplora* o *Articoli salvati* (a seconda di quale scheda si è aperta in precedenza).


### Indice {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu dei contenuti delle guide di viaggio](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu di ricerca delle guide di viaggio](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

La maggior parte degli *articoli della Guida di viaggio* ha la stessa struttura di contenuti: *introduzione* (immagini e descrizione del sito turistico) e *capitoli successivi*.

- &nbsp;*Capire*. Dettagli sulla cultura e le abitudini locali.
- &nbsp;*Come arrivare*. Dettagli su come raggiungere alcuni luoghi e quanto costerà questo percorso.
- &nbsp;*Vedere*. Un elenco di attrazioni (musei, siti storici e così via) con descrizioni complete: prezzi dei biglietti, orari di apertura, link utili e numeri di telefono.
- &nbsp;*Fare*. Luoghi dove trascorrere il tempo.
- &nbsp;*Comprare*. Siti per lo shopping.
- &nbsp;*Mangiare*. Strutture di ristorazione (divise per budget: economico, medio, di lusso).
- &nbsp;*Bere*. Bar e caffè.
- &nbsp;*Dormire*. Alloggi divisi per budget (economico, medio, di lusso).
- &nbsp;*Prossime tappe*. Luoghi più vicini da Wikivoyage.

### Punti {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu dei punti delle guide di viaggio](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Menu dei punti delle guide di viaggio](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu di ricerca delle guide di viaggio](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Menu di ricerca delle guide di viaggio](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

Gli *articoli della Guida di viaggio* contengono spesso attrazioni turistiche raggruppate per argomento. Toccando una volta il pulsante *Punti* nella parte inferiore dell'*[Articolo](#travel-article)*, tutte le attrazioni relative all'argomento (luoghi dove mangiare, opzioni di alloggio, aeroporti, negozi, monumenti storici e così via) verranno aggiunte alla mappa e potranno essere *[gestiti come una Traccia](#manage-as-gpx-track)*.

Per impostazione predefinita, i gruppi di attrazioni sono contrassegnati da icone specifiche: le categorie *Mangiare e Bere* con un coltello e una forchetta in un cerchio rosso, *Fare e Vedere* con una fotocamera in un cerchio verde, e altre. È possibile gestire i gruppi di punti con &#8942; come una *[cartella Waypoint](../map/tracks/track-context-menu.md#points--waypoints)*.

:::note
I punti negli *Articoli di viaggio* si riferiscono a waypoint su una traccia GPX.
È anche possibile *[aggiungere punti alla mappa](#travel-routes)* nel menu *Configura mappa*. È possibile visualizzarli tutti o selezionare una categoria specifica.
:::


## Itinerari di viaggio {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Un modo alternativo per sfogliare le *Guide di viaggio* è visualizzarle sulla mappa utilizzando il menu *Configura mappa*. Questa funzione non si applica alla possibilità offerta da OsmAnd di utilizzare Wikivoyage, ma solo alle tracce. Potete leggere di più nel nostro [blog](https://osmand.net/blog/routes#generated-travel-routes).

![Menu dei punti delle guide di viaggio](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Menu dei punti delle guide di viaggio](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Itinerari di viaggio e articoli sulla mappa {#travel-routes-and-articles-on-the-map}

![Menu dei punti delle guide di viaggio](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Menu dei punti delle guide di viaggio](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

Dopo aver abilitato la visualizzazione degli *Itinerari di viaggio* nel menu *Configura mappa*, sulla mappa appariranno cerchi di diversi colori. Quelli arancioni rappresentano tracce di percorsi, articoli di percorsi e alcuni waypoint. Toccate un percorso, un articolo o un punto specifico e poi toccate il pulsante *Download* (&#9047;), e potrete [gestirli come una traccia](#manage-as-gpx-track).

### Guide di viaggio personalizzate {#custom-travel-guides}

Vi consigliamo di aggiungere nuovi articoli o modifiche a [Wikivoyage](https://en.wikivoyage.org/). Aggiorniamo le Guide di viaggio circa ogni 6 mesi e potete scaricare nuovi articoli. Potete anche creare la vostra *Guida di viaggio* personale. Come farlo è descritto nella documentazione tecnica (vedere l'articolo *[Creare una guida di viaggio personalizzata](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Gestire come traccia GPX {#manage-as-gpx-track}

![Menu dei punti delle guide di viaggio 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Menu dei punti delle guide di viaggio 2](@site/static/img/guides/travel_guides_articles_my_places.png)

Dopo aver aggiunto le *Guide di viaggio* alla mappa, gli *Articoli di viaggio* possono essere salvati come traccia GPX e gestiti tramite il menu *[I miei luoghi](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Possono essere visualizzati sulla mappa, condivisi, rinominati, inseriti in un'altra cartella, esportati o eliminati.

- &nbsp;In *[Panoramica](../map/tracks/track-context-menu.md#overview)*, è possibile leggere una breve descrizione o aprire l'[articolo della Guida di viaggio](#travel-article) toccando il pulsante *Leggi tutto*. *Modifica* consente di correggere l'articolo.
- &nbsp;Non ci sono informazioni nella sezione *[Traccia](../map/tracks/track-context-menu.md#altitude--speed-graphs)*, i file GPX delle *Guide di viaggio* contengono solo waypoint.
- &nbsp;Sotto *[Punti](../map/tracks/track-context-menu.md#points--waypoints)* si vedono cartelle con punti raggruppati per nome (Comprare, Fare, Bere e così via).
- &nbsp;Il pulsante *[Opzione](../map/tracks/track-context-menu.md#options)* svolge le stesse funzioni della traccia normale.

:::info
I *Punti* sono memorizzati in un [file GPX](../../technical/osmand-file-formats/osmand-gpx.md) (un formato comunemente usato per le tracce) come [Waypoint](../map/point-layers-on-map.md#track-waypoints). Il numero di punti (waypoint) contenuti nella traccia è indicato accanto all'icona &#128681; nel campo della traccia.
Nel *[menu contestuale della traccia](../map/tracks/track-context-menu.md)* del file GPX è possibile trovare informazioni generali sull'articolo a cui appartiene questa traccia.
:::

## Combinare con Wikipedia {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Guide di viaggio combinate con Wikipedia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Guide di viaggio combinate con Wikipedia 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu di ricerca delle guide di viaggio](@site/static/img/guides/travel_guides_wikipedia_1_ios.png)  ![Menu di ricerca delle guide di viaggio](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

Negli *articoli della Guida di viaggio* è possibile trovare informazioni utili sulle attrazioni turistiche (informazioni di contatto, link web, prezzi e così via). Molti articoli hanno un pulsante *Wikipedia* che consente di aprire un *[articolo di Wikipedia](../plugins/wikipedia.md)* (online o offline) sul luogo di interesse.

In alcuni casi, la *[scheda Segnalibri](#explore-and-bookmark)* di OsmAnd vi chiederà di scaricare il [livello mappa di Wikipedia](../plugins/wikipedia.md#download-wikipedia-packages) per sfogliare gli articoli correlati offline.

![Download di Wikipedia per le guide di viaggio](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info NOTA
Il [plugin Wikipedia](../plugins/wikipedia.md) è una [funzionalità a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)