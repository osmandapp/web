---
source-hash: bd839a5ee6ccc19abd4bedd194ba51bd5ed2b39816629811284b6f76740aeab1
sidebar_position: 2
title: Guide di viaggio
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

:::info Funzione a pagamento
Le Guide di viaggio sono una [funzione a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

Le guide di viaggio virtuali in OsmAnd offrono agli utenti informazioni preziose, raccomandazioni e suggerimenti. Consentono inoltre ai viaggiatori di accedere a informazioni di navigazione complete sulle attrazioni nell'app.

Le guide di viaggio di OsmAnd si basano sui dati di [Wikivoyage](https://www.wikivoyage.org/), un progetto comunitario simile a Wikipedia, dove autori volontari creano articoli aggiornati.
Le informazioni di Wikivoyage includono i fatti principali su un luogo, trasporti, attrazioni, shopping e altro ancora.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Visualizzazione guide di viaggio Generale](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu mappe iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Come usare {#how-to-use}

- [Scarica](#download-articles) *Guide di viaggio*.
- Sfoglia [articoli](#browse-articles) su un paese, una regione, una città, un'attrazione.
    - In alternativa, [visualizza articoli e/o punti delle guide di viaggio sulla mappa](#travel-routes) utilizzando il menu Configura mappa.
    - Sfoglia le attrazioni sulla mappa, aggiungile a *[Segnalibri mappa](../personal/markers.md#add--edit-markers)* o *[Preferiti](../personal/favorites.md#favorite-group-actions)*.
    - Usando il pulsante *[Leggi completo](#manage-as-gpx-track)*, vai all'*[articolo](#travel-article) all'interno di *Guide di viaggio*.
- [Segnalibra](#explore-and-bookmark) gli articoli per leggerli in seguito.
- Scegli i [punti](#points) dagli articoli da visitare e aggiungili alla mappa di OsmAnd.
- Ottieni maggiori informazioni sui luoghi da visitare dagli [articoli offline di Wikipedia](#combine-with-wikipedia).
- [Costruisci un percorso](../navigation/setup/route-navigation.md#set-destinations) verso le attrazioni turistiche scelte o una passeggiata libera tra i punti.

:::note
Gli articoli delle *Guide di viaggio* sono archiviati all'interno di OsmAnd come tracce GPX con Waypoint. Dopo aver aggiunto queste tracce alla mappa (vedi le sezioni *[Punti](#points)* o *[Percorsi di viaggio](#travel-routes)* di questo articolo), puoi gestirle tramite il menu *[I miei luoghi](../personal/myplaces.md)*.
:::

### Scarica articoli {#download-articles}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Menu download guide di viaggio](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Menu mappe iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Prima di iniziare a utilizzare le guide di viaggio, è necessario scaricarle tramite il [menu Scarica mappa](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Gli articoli sono raggruppati per regioni: *Africa, Asia, Australia e Oceania, America Centrale, Europa, Nord America, Russia e Sud America*, quindi non è necessario scaricare guide di viaggio per una città o un paese separato.
Salvando le regioni richieste sul tuo dispositivo, puoi sfogliare gli articoli con OsmAnd anche quando sei all'estero o fuori dalla portata della tua rete mobile.

:::note
Oltre alle guide di paesi, regioni o città, puoi trovare guide di luoghi di film, libri, giochi per computer, luoghi della memoria di grandi persone e così via.
Ci sono anche guide specializzate, come l'elenco della Rete globale dei geoparchi UNESCO o gli aeroporti internazionali più grandi e complessi del mondo.
:::

## Sfoglia articoli {#browse-articles}

La schermata *Guide di viaggio* è composta da due parti generali: un [*campo di ricerca*](#search) e un elenco di *guide di viaggio* con due schede: *[<Translate android="true" ids="shared_string_explore"/> e <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Puoi passare da una all'altra con un semplice tocco su una scheda.
Quando apri *Guide di viaggio* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd ti mostrerà articoli su luoghi interessanti situati vicino alle coordinate geografiche del centro corrente della mappa. Quando tocchi un elemento dall'elenco, si apre l'[articolo della guida di viaggio](#travel-article). Nella parte inferiore dello schermo c'è un interruttore per la *scheda Segnalibri*.

### Esplora e segnalibra {#explore-and-bookmark}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Schermata principale guide di viaggio](@site/static/img/guides/travel_guides_main_screen_1.png) ![Schermata principale guide di viaggio 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schermata principale guide di viaggio](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Schermata principale guide di viaggio 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

Nella scheda **Esplora** o **<Translate android="true" ids="popular_destinations"/>**, sono elencati i primi 30 articoli su destinazioni adiacenti al centro dello schermo (fuori posizione). Toccando un elemento dall'elenco con un titolo e una breve descrizione dell'articolo, puoi visualizzare il testo completo di quell'articolo.
Se tocchi il pulsante *Segnalibro*, l'articolo verrà salvato per una lettura successiva e sarà disponibile nella scheda Segnalibri. Nella scheda *Articoli segnalibrati*, gli articoli sono disposti nell'ordine in cui sono stati salvati, con gli articoli più recenti in cima.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Apre l'[articolo di viaggio](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Sposta l'articolo selezionato in <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Rimuove l'articolo selezionato da <Translate android="true" ids="saved_articles"/>.

### Cerca {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu ricerca guide di viaggio](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu ricerca guide di viaggio](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Il campo di ricerca si trova nella parte superiore della schermata <Translate android="true" ids="shared_string_travel_guides"/>. Se inizi a digitare le prime lettere di un paese, una città o un luogo famoso, sotto il campo di ricerca apparirà un elenco di articoli. Toccando quello necessario, puoi iniziare a leggere.
Accanto a ogni risultato di ricerca sono elencate le prime 3 lingue più comunemente usate in cui l'articolo selezionato può essere letto. Tuttavia, gli articoli popolari sono disponibili in più lingue rispetto alle 3 elencate.

**Funzionalità aggiuntive:**

- Puoi cercare attrazioni culturali speciali, come *Turismo di Harry Potter*, *Città fantasma*, *Monarchie* e altre.
- Per eliminare la cronologia delle ricerche, devi utilizzare il pulsante [<Translate android="true" ids="shared_string_options"/>](#options).

<!--
- La ricerca è completa solo quando premi &#128269; o spazio alla fine della parola. - non funziona come dovrebbe
-->

### Opzioni {#options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu opzioni guide di viaggio](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu ricerca guide di viaggio](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

In questo menu, puoi personalizzare l'aspetto degli articoli quando lavori offline. NOTA, che le guide di viaggio *[scaricate](#download-articles)* non contengono immagini. Appaiono solo quando visualizzi gli articoli con una connessione Internet attiva.
Nel menu Opzioni, puoi scegliere se salvare le immagini negli articoli visualizzati per usarle quando sei offline. Puoi anche cancellare la cache delle immagini esistente o eliminare la cronologia delle ricerche (funziona solo quando cerchi in *Guide di viaggio*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Le immagini negli articoli possono essere scaricate per l'uso offline.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Cancella la cache delle immagini per liberare memoria.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Cancella la [cronologia delle ricerche](#search).

## Articolo di viaggio {#travel-article}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Articolo guide di viaggio](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu ricerca guide di viaggio](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Puoi aprire un articolo dalle opzioni suggerite nella *[scheda Esplora](#explore-and-bookmark)* o utilizzando l'opzione *[Cerca](#search)*. Quando aggiungi attrazioni turistiche chiamate *[Punti](#points)* da un *articolo di guida di viaggio* alla mappa di OsmAnd, puoi anche aprire l'articolo utilizzando il pulsante *Leggi completo* nella [sezione descrizione](../map/tracks/track-context-menu.md#description-and-info) del waypoint.

I seguenti controlli si trovano nella parte superiore dello schermo:

- Interruttore per cambiare la lingua dell'articolo. La lingua può essere selezionata tra le opzioni disponibili. La lingua di sistema viene utilizzata per impostazione predefinita.
- Utilizzando il pulsante &#8942;, puoi condividere l'articolo con i tuoi amici. Il link si apre nell'app OsmAnd, il file delle guide di viaggio appropriato deve essere scaricato sul dispositivo del destinatario o sul sito [Wikivoyage](https://www.wikivoyage.org/), se il destinatario non ha l'app OsmAnd o per dispositivi iOS.
- Toccando la barra di navigazione si apre il *[Menu di navigazione guide di viaggio](#navigation-menu)*.

Nella parte inferiore dello schermo ci sono pulsanti come:

- [Contenuti](#table-of-contents). Apre l'indice dell'articolo.
- [Punti](#points). Mostra le attrazioni turistiche relative all'articolo su una mappa.
- [Segnalibro](#explore-and-bookmark). Ti consente di aggiungere un articolo ai segnalibri per una lettura successiva.


### Menu di navigazione {#navigation-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu contenuti guide di viaggio](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu ricerca guide di viaggio](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Per passare da un articolo all'altro negli *articoli della guida di viaggio*, utilizza il **Menu di navigazione**. Puoi accedervi toccando il campo dell'indirizzo sopra l'immagine. NOTA, che gli articoli nelle Guide di viaggio sono raggruppati come segue: *Continente → Regione → Paese → Provincia (regione) → Città*.
Se tocchi la freccia nell'angolo in alto a sinistra dello schermo, andrai direttamente alla scheda *Esplora* o *Articoli segnalibrati* (a seconda di quale scheda hai aperto in precedenza).


### Indice {#table-of-contents}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu contenuti guide di viaggio](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu ricerca guide di viaggio](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

La maggior parte degli *articoli delle guide di viaggio* ha la stessa struttura di contenuto: *introduzione* (immagini e descrizione del sito turistico) e *capitoli successivi*.

- &nbsp;*Capire*. Dettagli sulla cultura e le abitudini locali.
- &nbsp;*Come arrivare*. Dettagli su come arrivare in alcuni luoghi e quanto costerà questo percorso.
- &nbsp;*Vedere*. Un elenco di attrazioni (musei, siti storici e così via) con descrizioni complete: prezzi dei biglietti, orari di apertura, link utili e numeri di telefono.
- &nbsp;*Fare*. Luoghi dove trascorrere il tempo.
- &nbsp;*Comprare*. Siti per fare shopping.
- &nbsp;*Mangiare*. Strutture di ristorazione (divise per budget: budget, fascia media, lusso).
- &nbsp;*Bere*. Bar e caffè.
- &nbsp;*Dormire*. Alloggi divisi per budget (budget, fascia media, lusso).
- &nbsp;*Prossimi passi*. Luoghi più vicini da Wikivoyage.

### Punti {#points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menu punti guide di viaggio](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Menu punti guide di viaggio](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu ricerca guide di viaggio](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Menu ricerca guide di viaggio](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

Gli *articoli delle guide di viaggio* contengono spesso attrazioni turistiche raggruppate per argomento. Toccando una volta il pulsante *Punti* nella parte inferiore dell'*[Articolo](#travel-article)*, tutte le attrazioni relative all'argomento (luoghi dove mangiare, opzioni di alloggio, aeroporti, negozi, monumenti storici e così via) verranno aggiunte alla mappa e potranno essere *[gestite come una traccia](#manage-as-gpx-track)*.

Per impostazione predefinita, i gruppi di attrazioni sono contrassegnati da determinate icone: le categorie *Mangiare e bere* con coltello e forchetta in un cerchio rosso, *Fare e vedere* con una macchina fotografica in un cerchio verde e altre. Puoi gestire i gruppi di punti con &#8942; come una *[cartella di waypoint](../map/tracks/track-context-menu.md#points--waypoints)*.

:::note
I punti negli *articoli di viaggio* si riferiscono ai waypoint su una traccia GPX.
Puoi anche *[aggiungere punti alla mappa](#travel-routes)* nel menu *Configura mappa*. Puoi visualizzarli tutti o selezionare una categoria specifica.
:::


## Percorsi di viaggio {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Un modo alternativo per sfogliare le *Guide di viaggio* è visualizzarle sulla mappa utilizzando il menu *Configura mappa*. Questa funzione non si applica alla possibilità fornita da OsmAnd di utilizzare Wikivoyage, si applica solo alle tracce. Puoi leggere di più nel nostro [blog](https://osmand.net/blog/routes#generated-travel-routes).

![Menu punti guide di viaggio](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Menu punti guide di viaggio](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Percorsi di viaggio e articoli sulla mappa {#travel-routes-and-articles-on-the-map}

![Menu punti guide di viaggio](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Menu punti guide di viaggio](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

Dopo aver abilitato la visualizzazione dei *Percorsi di viaggio* nel menu *Configura mappa*, sulla mappa appariranno cerchi di diversi colori. Quelli arancioni rappresentano le tracce dei percorsi, gli articoli dei percorsi e alcuni waypoint. Tocca un percorso, un articolo o un punto specifico e quindi tocca il pulsante *Scarica* (&#9047;), e potrai [gestirli come una traccia](#manage-as-gpx-track).

### Guide di viaggio personalizzate {#custom-travel-guides}

Ti consigliamo di aggiungere nuovi articoli o modifiche a [Wikivoyage](https://en.wikivoyage.org/). Aggiorniamo le Guide di viaggio circa ogni 6 mesi e puoi scaricare nuovi articoli. Puoi anche creare il tuo *Libro di viaggio*. Come farlo è descritto nella documentazione tecnica (vedi l'articolo *[Crea guida di viaggio personalizzata](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Raccolte di tracce {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Gestisci come traccia GPX {#manage-as-gpx-track}

![Menu punti guide di viaggio 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Menu punti guide di viaggio 2](@site/static/img/guides/travel_guides_articles_my_places.png)

Dopo aver aggiunto le *Guide di viaggio* alla mappa, gli *articoli di viaggio* possono essere salvati come traccia GPX e gestiti tramite il menu *[I miei luoghi](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Possono essere visualizzati sulla mappa, condivisi, rinominati, inseriti in un'altra cartella, esportati o eliminati.

- &nbsp;In *[Panoramica](../map/tracks/track-context-menu.md#overview)*, puoi leggere una breve descrizione o aprire l'[articolo della guida di viaggio](#travel-article) toccando il pulsante *Leggi completo*. *Modifica* ti consente di correggere l'articolo.
- &nbsp;Non ci sono informazioni nella sezione *[Traccia](../map/tracks/track-context-menu.md#altitude--speed-graphs)*, i file GPX delle *Guide di viaggio* contengono solo waypoint.
- &nbsp;Sotto *[Punti](../map/tracks/track-context-menu.md#points--waypoints)* vedi cartelle con punti raggruppati per nome (Compra, Fai, Bevi e così via).
- &nbsp;Il pulsante *[Opzioni](../map/tracks/track-context-menu.md#options)* esegue le stesse funzioni di una traccia normale.

:::info
I *Punti* sono archiviati in un [file GPX](../../technical/osmand-file-formats/osmand-gpx.md) (un formato comunemente usato per le tracce) come [Waypoint](../map/point-layers-on-map.md#track-waypoints). Il numero di punti (waypoint) contenuti nella traccia è indicato accanto all'icona &#128681; nel campo della traccia.
Nel *[menu contestuale della traccia](../map/tracks/track-context-menu.md)* del file GPX puoi trovare informazioni generali sull'articolo a cui appartiene questa traccia.
:::

## Combina con Wikipedia {#combine-with-wikipedia}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Guide di viaggio combinate con Wikipedia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Guide di viaggio combinate con Wikipedia 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu ricerca guide di viaggio](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![Menu ricerca guide di viaggio](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

Negli *articoli delle guide di viaggio* puoi trovare informazioni utili sulle attrazioni turistiche (informazioni di contatto, link web, prezzi e così via). Molti articoli hanno un pulsante *Wikipedia* che consente di aprire un *[articolo di Wikipedia](../plugins/wikipedia.md)* (online o offline) sul luogo di interesse.

In alcuni casi, la *[scheda Segnalibri](#explore-and-bookmark)* di OsmAnd ti chiederà di scaricare il [livello mappa di Wikipedia](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) per sfogliare gli articoli correlati offline.

![Guide di viaggio scarica Wikipedia](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info NOTA
Il [plugin Wikipedia](../plugins/wikipedia.md) è una [funzione a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: gennaio 2025*