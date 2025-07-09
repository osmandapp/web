---
source-hash: 451b8efe0bb4fc8a733a523dde0cd088f5c21c5cb00a83e08ca8410c09e04755
sidebar_position: 4
title: Cerca POI
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


<InfoIncompleteArticle/>


## Panoramica {#overview}

La funzionalità [Punti di Interesse (POI) di OsmAnd](https://wiki.openstreetmap.org/wiki/Points_of_interest) in OsmAnd fornisce accuratezza, visibilità e comodità nel trovare luoghi interessanti, percorsi e servizi vicino alla tua posizione attuale o a un'area selezionata sulla mappa.

La barra di ricerca ti consente di inserire parole chiave relative ai luoghi che ti interessano. La ricerca POI presenta anche un comodo elenco ordinato per [categoria](#poi-search-by-categories) per aiutarti a trovare rapidamente ciò che stai cercando, e il [filtro](#save-new-custom-filters) ti consente di selezionare caratteristiche POI specifiche per visualizzare solo risultati pertinenti.

La [ricerca personalizzata](#custom-poi-search) migliora la funzionalità di ricerca consentendo scelte multiple di categorie e sottocategorie. Puoi salvare i filtri creati per un uso futuro, rendendo più facile individuare rapidamente i POI che soddisfano criteri o preferenze specifici. Per maggiori dettagli, consulta la sezione sul salvataggio dei filtri personalizzati [qui](#save-new-custom-filters).

OsmAnd offre diversi modi per accedere allo strumento di ricerca dove si trova la sezione **Ricerca per categorie**.

- Il [pulsante di ricerca](../widgets/map-buttons.md#search) è sempre visualizzato sulla mappa, e toccandolo si accederà alla [schermata generale](#how-to-use) dello strumento, dove si trova la scheda *Categorie*.
- Vai al *Menu principale → Cerca → scheda Categorie*.
- Quando ti prepari a iniziare un percorso, tocca [*Navigazione → Imposta destinazione → Campo di ricerca → scheda Categorie*](../navigation/setup/route-navigation.md#set-target-point).
- Vai al *Menu principale → Configura mappa → Sovrapposizione POI → Cerca*](../map/point-layers-on-map.md#points-of-interest-pois).


## Come usare {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Tutti i tipi di POI in OsmAnd li puoi trovare qui:* [link gitHub](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Ricerca Punti di Interesse (POI):**
    - Ti permette di cercare:
       - POI vicini o di categorie specifiche.
       - [Percorsi OSM](../map/routes.md).
       - [Luoghi popolari (Wikipedia)](../map/map-context-menu.md#details).

    - Sono possibili filtri e ordinamento dei risultati per categoria, distanza o valutazione.

    - I risultati della ricerca mostrano la posizione del POI, le sue informazioni di contatto, le valutazioni e le recensioni.

- **Cerca POI per categoria direttamente sulla mappa**:
    - Devi selezionare le categorie richieste dall'[**elenco**](../map/point-layers-on-map.md#points-of-interest-pois) in *Configura mappa → Mostra sovrapposizione POI...* e cercare per icone nella posizione prevista.

    - *Android*: Puoi iniziare a cercare POI in *Menu → Cerca → Categorie*.

- **Ricerca per marchio:**
    - Quando si inserisce un nome di attività commerciale o di marchio (come Audi, Starbucks o Aldi), l'elenco dei risultati di ricerca viene ordinato con priorità per nome del POI e ordinato per distanza dalla posizione corrispondente.

    - Il nome della località viene visualizzato accanto a ogni risultato di ricerca per aiutarti a identificare la posizione giusta tra le altre a una distanza simile dalla tua.

    - Questo tipo di ricerca è comodo da usare se un punto vendita al dettaglio è specializzato nella vendita di beni o servizi di un solo marchio o se il marchio stesso è più conosciuto e riconoscibile del nome o della categoria del POI.

    - Per eseguire una ricerca, il tag `brand` e i nomi dei marchi devono essere aggiunti alla descrizione del POI.

    - Esempio di un negozio di auto: *Tipo di POI* - Concessionario auto, *nome* - Octo Automobile, [***nome del marchio***](https://wiki.openstreetmap.org/wiki/Key:brand) - Audi, BMW, Fiat, Jaguar, Land Rover.

    ![Search POI Android](@site/static/img/search/brand_search_andr.png)


:::note
Per eseguire alcune di queste operazioni (individuare indirizzi, POI) sarà necessario disporre del file della mappa vettoriale offline. Inizialmente, la ricerca si basa sui dati presenti sulla mappa nell'area visibile dello schermo del dispositivo. Se non si trova nulla, OsmAnd propone di aumentare il raggio di ricerca.
:::


## Ricerca POI per Categorie {#poi-search-by-categories}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

Lo strumento **Cerca per categorie** ti consente di trovare rapidamente oggetti, luoghi e percorsi classificati in diverse categorie. Ogni categoria ha un insieme unico di caratteristiche, e questo strumento ha filtri che ti consentono di affinare i risultati della ricerca selezionando diversi valori per caratteristiche aggiuntive.

Come funziona:

- *Selezione della categoria* - Selezioni la categoria che ti interessa, come ristoranti, hotel, negozi, percorsi OSM, luoghi popolari di Wikipedia e altri, da un elenco suggerito di categorie.
- *Filtri delle caratteristiche* - Dopo aver selezionato una categoria, l'applicazione mostra caratteristiche aggiuntive che possono essere utilizzate per affinare la ricerca. Ad esempio, per la categoria Ristoranti, puoi selezionare filtri come il tipo di cucina (italiana, cinese, ecc.), la fascia di prezzo, la valutazione e la disponibilità di parcheggio.
- *Applicazione dei filtri* - Selezioni i valori richiesti nei filtri, quindi l'applicazione applica questi filtri ai risultati della ricerca per mostrare solo le proprietà che corrispondono alle caratteristiche specificate.
- *Visualizzazione dei risultati* - Dopo aver applicato i filtri, OsmAnd visualizza un elenco con brevi informazioni corrispondenti alla categoria e alle caratteristiche impostate.

Vantaggi:

- *Personalizzazione dell'utente* - I filtri delle funzionalità consentono di personalizzare le ricerche per soddisfare le esigenze e le preferenze specifiche.
- *Risultati raffinati* - I filtri aiutano a raffinare i risultati della ricerca, rendendoli più pertinenti e accurati.
- *Categorie multiple* - Il database OpenStreetMap ha un ampio set di categorie POI, che ti consente di trovare siti di diversi tipi e categorie.

<!--
La ricerca per categoria POI ti consente di trovare e selezionare rapidamente luoghi di interesse in base alle tue esigenze. È uno strumento utile per viaggiare, trovare servizi o luoghi di interesse nelle vicinanze e pianificare percorsi basati su categorie POI selezionate.

OsmAnd inizia a trovare nomi e categorie di POI in base alle parole inserite. I primi risultati saranno categorie, i secondi risultati saranno POI con informazioni aggiuntive, nome completo, nome della categoria, direzione e distanza dal POI, orario di lavoro. Premendo la categoria desiderata si apre l'elenco dei POI di questa categoria.

Toccando il POI scelto nell'elenco si apre il [menu contestuale della mappa](../map/map-context-menu.md#select-an-object-single-tap) del POI.
-->

### Tipi di filtri {#types-of-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

Con la funzione **Filtro**, puoi selezionare le caratteristiche necessarie e, di conseguenza, ottenere un elenco contenente solo oggetti pertinenti. Per utilizzare il filtro:

- Seleziona la categoria che ti interessa dall'elenco delle categorie.
- Nella schermata che si apre, tocca l'icona che visualizza il filtro. Si trova sotto il campo di input, accanto a *Mostra sulla mappa*.
- Nel filtro, seleziona il tipo di caratteristiche.

![Search POI Android](@site/static/img/search/search_poi_filter_icon_andr.png)

Un filtro può essere composto da un numero considerevole di elementi, la cui presenza dipende dalla categoria selezionata. Ogni categoria ha un numero di filtri specifici per essa, organizzati in cartelle per tipo. Ci sono un totale di *22 categorie predefinite*. Alcune di esse sono elencate qui:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Alloggi](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) include strutture che offrono alloggi temporanei come hotel, motel, ostelli, pensioni e campeggi. Questi luoghi offrono servizi e comfort per un soggiorno confortevole durante il viaggio.
        Include *9* tipi di filtri: **Frigorifero** (ha *2* valori), **Riscaldamento** (ha *7* valori), **Tipo di accesso a Internet** (ha *3* valori), **Materasso** (ha *2* valori), **Tipo di pagamento** (più di *10* valori), **Doccia** (ha *1* valore), **Fumo** (ha *6* valori), **Valutazione a stelle** (ha *10* valori), **Accessibilità per sedie a rotelle** (ha *4* valori), Aperto ora / Aperto 24/7.

 2. **Caffè e ristorante**. [Caffè](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) e [ristoranti](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) rappresentano luoghi di servizio di ristorazione.
        Include *16* tipi di filtri: **Fasciatoio** (ha *3* valori), **Caffè** (ha *2* valori), **Cucina** (più di *10* valori), **Consegna** (ha *1* valore), **Dieta** (ha *8* valori), **Piatto** (più di *10* valori), **Ricarica acqua potabile** (ha *1* valore), **Drive-in** (ha *1* valore), **Tipo di accesso a Internet** (ha *3* valori), **Microbirrificio** (ha *1* valore), **Prodotti biologici** (ha *2* valori), **Posti a sedere all'aperto** (ha *1* valore), **Tipo di pagamento** (più di *10* valori), **Fumo** (ha *6* valori), **Asporto** (ha *1* valore), **Accessibilità per sedie a rotelle** (ha *4* valori), Aperto ora / Aperto 24/7.

 3. **Stazione di ricarica**. Una [stazione di ricarica](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) è una struttura infrastrutturale dove i proprietari di veicoli elettrici possono ricaricare le loro auto, motociclette o altri veicoli elettrici. Questi punti forniscono caricabatterie e connessioni appropriate per fornire energia alle batterie dei veicoli.
        Include *35* tipi di filtri: **Accesso biciclette** (ha *1* valore), **Accesso autobus** (ha *1* valore), **Accesso HGV** (ha *5* valori), **Accesso autoveicoli** (ha *1* valore), **Accesso scooter** (ha *1* valore), **Autenticazione tramite app** (ha *1* valore), **Autenticazione tramite carta chip** (ha *1* valore), **Autenticazione contactless** (ha *1* valore), **Autenticazione tramite chiave** (ha *1* valore), **Autenticazione richiesta** (ha *1* valore), **Autenticazione tramite telefonata** (ha *1* valore) **Autenticazione tramite messaggio breve** (ha *1* valore), **Costo** (ha *2* valori), **Tipo di accesso a Internet** (ha *3* valori), **Tipo di accesso a Internet** (ha *3* valori), **Accessibilità per sedie a rotelle** (ha *4* valori), Aperto ora / Aperto 24/7, e altro.

 4. **Minimarket e supermercato**. [Minimarket](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) e [supermercato](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) rappresentano strutture di vendita al dettaglio.
        Include *13* tipi di filtri: **Acquisto all'ingrosso** (ha *2* valori), **Prelievo contanti** (ha *5* valori), **Fasciatoio** (ha *3* valori), **Caffè** (ha *2* valori), **Consegna** (ha *1* valore), **Dieta** (ha *8* valori), **Gelato** (ha *1* valore), **Prodotti biologici** (ha *2* valori), **Tipo di pagamento** (più di *10* valori), **Filtro di seconda mano** (ha *2* valori), **Self checkout** (ha *2* valori), **Accessibilità per sedie a rotelle** (ha *4* valori), Aperto ora / Aperto 24/7.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Emergenza](https://wiki.openstreetmap.org/wiki/Key:emergency) include strutture e luoghi associati ai servizi di emergenza come ospedali, stazioni di polizia, stazioni dei vigili del fuoco e centri medici di primo soccorso.
        Non contiene filtri.

 6. **Stazione di servizio**. Una [stazione di servizio](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), nota anche come stazione di rifornimento, stazione di benzina, distributore di benzina e garage di benzina. È la struttura di tipo al dettaglio dove i veicoli a motore possono essere riforniti.
        Include *13* tipi di filtri: **Autolavaggio** (ha *2* valori), **Prelievo contanti** (ha *5* valori), **Aria compressa** (ha *1* valore), **Tipo di carburante (avia)** (ha più di *20* valori), **Carte carburante** (ha *5* valori), **Tipo di pagamento** (ha più di *20* valori), **Self checkout** (ha *2* valori), **Accesso motoslitta** (ha *3* valori), **Area di sosta** (più di *1* valore), **Aspirapolvere** (ha *1* valore), **Distributore automatico di carburante** (ha *1* valore), **Accessibilità per sedie a rotelle** (ha *4* valori), Aperto ora / Aperto 24/7.

 7. **Finanza**. [Finanza](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) utilizzata per gli uffici di aziende del settore finanziario.
        Include *5* tipi di filtri.

 8. **Cibo**. [Cibo](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) include tutti i luoghi che offrono cibo e bevande.
        Include *24* tipi di filtri.

 9. **Assistenza sanitaria**. [Assistenza sanitaria](https://wiki.openstreetmap.org/wiki/Healthcare) include servizi forniti da diversi professionisti in diversi tipi di strutture.
        Include *13* tipi di filtri.

 10. **Tempo libero**. [Tempo libero](https://wiki.openstreetmap.org/wiki/Category:Leisure) include vari tipi di luoghi e strutture per l'intrattenimento.
        Include *15* tipi di filtri.

 11. **Nautica**. Include POI relativi ai tipi nautici.
        Non contiene filtri.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Include POI vicini a te.
        Include *216* tipi di filtri.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parcheggio](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) include strutture utilizzate dal pubblico, dai clienti o da altri utenti autorizzati per parcheggiare veicoli come auto e camion, comunemente noti come parcheggi (inglese britannico) o parcheggi (inglese americano).
        Include *34* tipi di filtri.

 14. **Trasporto personale**. Tutti i [tipi di veicoli](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) possono essere in tuo possesso.
        Include *38* tipi di filtri.

 15. **Luoghi popolari (Wikipedia)**. Per cercare in questa categoria, devi scaricare la [mappa di Wikipedia](../plugins/wikipedia.md#overview) della regione che ti interessa.
        Non contiene filtri.

 16. **Accesso privato**.
        Include *6* tipi di filtri.

 17. **<Translate android="true" ids="poi_filter_public_transport"/>**. È un sistema di trasporto progettato per trasportare persone per scopi pubblici, accessibile a tutti i residenti e visitatori di una città o regione.
        Include *9* tipi di filtri.

 18. **Percorsi**. Include [percorsi OSM](../map/routes.md) per vari tipi di attività.
        Include *14* tipi di filtri: **Checkpoint**, **Nodo rete ciclabile**, **Nodo rete escursionistica**, **Rete percorsi (ciclabile)**, **Rete percorsi (escursionistica)**, **Categoria punto percorso**, **Sport aerei**, **Ciclismo**, **Guida**, **A piedi**, **Motociclismo**, **Altri percorsi**, **Sport acquatici**, **Sport invernali**.

 19. **Visite turistiche**. È un'attività in cui le persone visitano luoghi o siti interessanti per familiarizzare con essi e godere della loro bellezza, storia o significato.
        Include *8* tipi di filtri.

 20. **Sport**. Include aree per attività sportive.
        Include *11* tipi di filtri.

 21. **Negozio**. [Negozio](https://wiki.openstreetmap.org/wiki/Key:shop) si riferisce a una varietà di esercizi e attività commerciali che offrono vari beni o servizi in vendita, come negozi di alimentari, negozi di abbigliamento, negozi di elettronica e altri.
        Include *36* tipi di filtri.

 22. **Turismo**. [Turismo](https://wiki.openstreetmap.org/wiki/Key:tourism) include luoghi e cose di specifico interesse per i turisti, inclusi luoghi da vedere, luoghi dove alloggiare e cose e luoghi che forniscono informazioni e supporto ai turisti.
        Include *32* tipi di filtri.

 23. **Acqua**. Fonti di [acqua potabile](https://wiki.openstreetmap.org/wiki/Key:drinking_water) create o sistemate dall'uomo.
        Non contiene filtri.


### Riorganizza le categorie {#rearrange-categories}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

La funzione Riorganizza Categorie ti consente di elencare solo le categorie di cui hai bisogno e di disporle nell'ordine in cui ti è più comodo utilizzarle.

Descrizione e come usare:

- Inizialmente, *l'elenco è ordinato alfabeticamente*. Le categorie create vengono aggiunte anche in ordine alfabetico.
- Le modifiche nell'elenco delle categorie vengono apportate per ogni profilo separatamente.
- Sposta le categorie trascinandole e rilasciandole nella posizione giusta nell'elenco.
- *Per nascondere* le categorie non necessarie, tocca l'icona **meno**.
- **Disponibile**. Le categorie precedentemente *Nascoste* possono essere riportate nell'elenco visualizzato toccando l'icona **più**.
- Usa il pulsante **Ripristina predefiniti** per riportare l'elenco allo stato preimpostato.
- Le categorie create con [Ricerca personalizzata](#custom-poi-search) o [Filtri](#save-new-custom-filters) possono essere eliminate utilizzando l'icona **Elimina**.

![Search POI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)


### Ricerca online {#online-search}

<InfoAndroidOnly />

![Search POI Android](@site/static/img/search/search_online_2_andr.png)

La **Ricerca online** consente di trovare posizioni, indirizzi e punti di interesse in tempo reale. OsmAnd utilizza [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), un geocodificatore online sviluppato da OpenStreetMap che traduce le query di testo degli utenti in coordinate geografiche e viceversa ([*esempio*](#example-of-online-search-query)).

La Ricerca online include le seguenti funzionalità:

1. **Ricerca per posizione** - Puoi inserire il nome di una città, una strada, un quartiere o un'altra posizione e OsmAnd fornirà risultati corrispondenti alla query.
2. **Geocodifica** - La ricerca online converte le tue query di testo in coordinate geografiche, consentendo una localizzazione precisa.
3. **Geocodifica inversa** - Puoi inserire coordinate geografiche e la ricerca restituirà la posizione corrispondente come nome di città, nome di strada o luogo sulla mappa.
4. **Ricerca per punti di interesse** - Ti consente di cercare diversi punti per nome o categoria.

Utilizzo della ricerca online:

- La ricerca online garantisce che i dati siano aggiornati e che gli aggiornamenti siano disponibili, poiché il servizio viene costantemente aggiornato e utilizza fonti di dati aperte.
- Fornisce un'ampia copertura di luoghi e oggetti, consentendo di trovare luoghi di interesse in diverse regioni del mondo.
- Le ricerche online sono in tempo reale, fornendo un accesso rapido ai risultati della ricerca.
- Utile nelle città e sulle autostrade con una buona copertura Internet.
- La ricerca online è comoda da usare se non ci sono mappe della regione e se è impossibile scaricarle.
- *Richiede una connessione Internet costante e stabile.*

![Search POI Android](@site/static/img/search/search_poi_online_increase2_andr.png)

Per migliorare i risultati, prima di utilizzare lo strumento di ricerca, ingrandisci la mappa per avvicinarti al punto in cui devi trovare una posizione specifica. E durante la ricerca, puoi **aumentare il raggio di ricerca** per trovare luoghi più lontani dalla tua posizione. Quando cerchi offline, se i risultati richiesti non sono disponibili, OsmAnd suggerisce di utilizzare la ricerca online.

Puoi trovare informazioni sulla navigazione online nell'articolo [Routing online](../navigation/routing/online-routing.md).

#### Esempio di query di ricerca online {#example-of-online-search-query}

*Nominatim* in OsmAnd viene utilizzato come motore di ricerca per i dati di OpenStreetMap, con cui è possibile cercare per nome (la ricerca per indirizzo è attualmente disabilitata). Ogni risultato ha un link a una pagina di dettaglio per vedere quali dati sull'oggetto sono memorizzati nel database.

**Esempio di file XML.** Questo file XML non contiene alcuna informazione di stile associata. L'albero del documento è mostrato nel [link](https://nominatim.openstreetmap.org/search?format=xml&addressdetails=0&accept-language=en&q=%D0%9C%D1%96%D0%BD%D1%81%D0%BA+%D0%BD%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+72+&addressdetails=1&limit=300).


## Ricerca POI personalizzata {#custom-poi-search}

La ricerca POI personalizzata è una funzione di ricerca avanzata che consente di trovare POI di diverse categorie e combinarli per una ricerca più accurata e personalizzata. A differenza della ricerca POI standard, che è limitata ad alcune categorie predefinite, la ricerca POI personalizzata offre la flessibilità di selezionare e combinare diversi tipi di POI.

Ad esempio, puoi cercare ristoranti e farmacie contemporaneamente per trovare il luogo più vicino dove cenare e poi prendere i tuoi farmaci. Oppure cercare la stazione di servizio e il servizio auto più vicini quando hai un problema con la tua auto.

Questa funzionalità è particolarmente utile in vari casi:

- *Viaggio*. Quando si viaggia, utilizzando la ricerca personalizzata è possibile trovare rapidamente diversi luoghi di interesse e combinarli per creare un percorso ottimale.
- *Emergenze*. Se hai bisogno di trovare rapidamente diversi tipi di servizi, puoi utilizzare una ricerca POI personalizzata per ottenere tutte le informazioni di cui hai bisogno.
- *Ricerca di servizi nelle vicinanze*. La ricerca personalizzata ti consente di combinare diverse categorie POI per una facile ricerca se hai bisogno di trovare diversi tipi di servizi in un determinato quartiere o in una determinata sezione del percorso.

### Filtro POI personalizzato {#custom-poi-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom search Android](@site/static/img/search/search_custom_filter_andr.png) ![Custom search Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Custom POI iOS](@site/static/img/search/custom_poi_ios.png) ![Custom POI types iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Custom POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png) ![Custom POI types iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>

Il *filtro POI personalizzato* include set di categorie di servizi costituiti da valori pertinenti. OsmAnd ti consente di raccogliere e combinare i tipi di POI richiesti da una o più categorie suggerite.

Per creare filtri personalizzati per trovare luoghi sulla mappa, seleziona categorie e sottocategorie pertinenti di interesse. Puoi [salvare](#save-new-custom-filters) questi filtri per un uso successivo o [modificarli](#edit-an-existing-filter) se necessario. In alternativa, puoi visualizzare i dati filtrati senza salvare toccando il pulsante *Mostra*. Tuttavia, tieni presente che se non salvi i filtri, tutte le selezioni verranno annullate una volta che cambi ricerca o esci dallo strumento di ricerca.

- Ogni categoria di servizio contiene un elenco di valori generici disponibili per i tipi di POI.
- Hai la possibilità di selezionarli o deselezionarli individualmente toccando il campo del tipo che ti interessa.
- *Seleziona tutto* - Per fare ciò, seleziona il pulsante di attivazione/disattivazione.
- Affina l'elenco escludendo quelli non necessari - Inizia a digitare il nome suggerito nel campo *Cerca tipi di POI*.

#### Categorie e relativi filtri {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Include 25 tipi: *Lotti, Atollo, Borgo, Città, Blocco cittadino, Paese, Tribunale, Dogana, Ufficio diplomatico, Fattoria, Governo, Frazione, Isola, Isolotto, Abitazione isolata, Località, Quartiere, Polizia, Prigione, Quartiere, Area residenziale, Periferia, Città, Municipio, Villaggio*.

2. **Natale**. Include 5 tipi di filtri:
    *Evento natalizio, Mercatino di Natale, Piramide natalizia, Negozio di Natale, Albero di Natale*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Include 16 tipi: *Lotti, Atollo, Borgo, Città, Blocco cittadino, Paese, Tribunale, Dogana, Ufficio diplomatico, Fattoria, Governo, Frazione, Isola, Isolotto, Abitazione isolata, Località, Quartiere, Polizia, Prigione, Quartiere, Area residenziale, Periferia, Città, Municipio, Villaggio*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Include 14 tipi di filtri.

5. **Infrastrutture di emergenza**. Include 12 tipi di filtri.

6. **<Translate android="true" ids="amenity_type_finance"/>**. Include 12 tipi di filtri.

7. **Cibo**. Include 12 tipi di filtri.

8. **Pericolo**. Include 5 tipi: *Pericolo valanghe, Pericolo erosione, Pericolo inondazioni, Pericolo nucleare, Strada scivolosa*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Include 31 tipi di filtri.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Include 148 tipi di filtri.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Include 121 tipi di filtri.

12. **<Translate android="true" ids="amenity_type_military"/>**. Include 7 tipi: *Area pericolosa, Bunker militare, Base navale militare, Ufficio militare, Poligono militare, Zona militare, Sito di esplosione nucleare*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. Include 50 tipi di filtri.

14. **Nautica**. Include 41 tipi di filtri.

15. **<Translate android="true" ids="amenity_type_office"/>**. Include 39 tipi di filtri.

16. **Luoghi popolari (Wikipedia)**. Include 1 tipo: *Wikipedia*.

17. **Accesso privato**. Non include filtri.

18. **Percorsi**. Include 15 tipi di filtri.

19. **Servizio**. Include 111 tipi di filtri.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Include 119 tipi di filtri.

21. **Negozio**. Include 156 tipi di filtri.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Include 103 tipi di filtri.

23. **Trasporti**. Include 97 tipi di filtri.

24. **Definito dall'utente**. Include 1 tipo: *Codice postale definito dall'utente*.

<!--
:::note since OsmAnd 5.0 for Android
Available for search:

- Religious POIs based on the `amenity=place_of_worship` tag are divided into religious-specific locations such as churches, mosques, or synagogues.
- Minor amenities such as “bench”, "youth bench" (`amenity=bench`) are available in the category list.
:::
-->

### Salva nuovi filtri personalizzati {#save-new-custom-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Custom POI save Android](@site/static/img/search/custom_poi_save_android.png) ![Custom POI save Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI save iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Per **salvare** un filtro personalizzato, seleziona i tipi di filtro, quindi:

- Tocca il pulsante *Mostra* e seleziona il pulsante *Salva* per iOS o il pulsante con l'*icona che indica l'azione di salvataggio* per Android.
- Inserisci un nome per la nuova categoria.
- Il tuo filtro apparirà nell'elenco della *scheda Categorie* nello strumento di ricerca.

Un altro modo per **salvare**:

- Seleziona *[categoria](#poi-search-by-categories) → [icona filtro](#types-of-filters) →* seleziona *tipi* di caratteristiche *→ menu a tre punti → Salva filtro*.


### Modifica un filtro esistente {#edit-an-existing-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Dalla schermata principale:

- Tocca il pulsante *Lente d'ingrandimento* nell'angolo in alto a sinistra dello schermo del dispositivo per aprire il menu *Cerca*.
- Seleziona la scheda *Categorie*.
- Seleziona una categoria personalizzata salvata e apparirà la schermata dei risultati della ricerca.
- Tocca l'icona *Filtro* accanto a *Mostra sulla mappa* per aprire la schermata *Filtri*.
- Tocca il *menu a tre punti*.
- Nel menu a discesa, seleziona **Modifica filtro**.
- Per salvare una ricerca POI personalizzata dopo la modifica:
    - Seleziona le categorie POI e i tipi di filtro per esse *→* tocca *Mostra → menu a tre punti → Salva come →* inserisci un nuovo nome per il filtro o *salva* le modifiche a quello corrente.


### Elimina filtro POI personalizzato {#delete-custom-poi-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Custom POI delete Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Puoi eliminare solo le categorie create utilizzando filtri o la ricerca personalizzata.

- Vai alla scheda [Categorie](#poi-search-by-categories) e seleziona quella desiderata.
- Nel campo accanto a *Mostra sulla mappa*, tocca l'icona che rappresenta il *filtro*.
- Nel menu *Filtri*, tocca il *menu a tre punti* ( &#8285; ) situato nell'angolo in alto a destra dello schermo.
- Seleziona **Elimina filtro**.
- ***Non puoi annullare l'eliminazione.***


#### Elimina categorie personalizzate (iOS) {#delete-custom-categories-ios}

![Custom POI delete iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

Un'opzione aggiuntiva solo per l'app iOS è **Elimina categorie personalizzate**.

- Questo elemento si trova alla fine dell'elenco della scheda *Categorie*.
- Seleziona le categorie non necessarie elemento per elemento o *Seleziona tutto*.
- Tocca il pulsante **Elimina**.


## Articoli correlati {#related-articles}

- [Cerca tutto](./search-all.md)
- [Cerca indirizzo](./search-address.md)
- [Cronologia ricerche](./search-history.md)
- [Cerca coordinate](./search-coordinates.md)


> *Ultimo aggiornamento: Maggio 2025*