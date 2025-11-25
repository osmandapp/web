---
source-hash: f030adaf04100e4f0054a1731b744c1e0da563d8249c4753b4176a96ec81468d
sidebar_position: 4
title:  Ricerca PDI
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

La funzionalità [Punto di Interesse (PDI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) (PDI) di OsmAnd offre precisione, visibilità e convenienza nel trovare luoghi, percorsi e servizi interessanti vicino alla propria posizione attuale o a un'area selezionata sulla mappa.  

La barra di ricerca consente di inserire parole chiave relative ai luoghi di interesse. La ricerca PDI presenta anche un comodo elenco ordinato per [categoria](#poi-search-by-categories) per aiutare a trovare rapidamente ciò che si sta cercando, e il [filtro](#save-new-custom-filters) permette di selezionare caratteristiche specifiche dei PDI per visualizzare solo i risultati pertinenti.  

[Ricerca personalizzata](#customize-poi-search) migliora la funzionalità di ricerca consentendo la scelta di più categorie e sottocategorie. È possibile salvare i filtri creati per un uso futuro, rendendo più facile individuare rapidamente i PDI che soddisfano criteri o preferenze specifici. Per maggiori dettagli, consultare la sezione sul salvataggio dei filtri personalizzati [qui](#save-new-custom-filters).  

OsmAnd offre diversi modi per accedere allo strumento di Ricerca in cui si trova la sezione **Ricerca per categorie**.

- Il [pulsante Cerca](../widgets/map-buttons.md#search) è sempre visualizzato sulla mappa e toccandolo si accede alla [schermata generale](#how-to-use) dello strumento, dove si trova la scheda *Categorie*.
- Andare al *Menu principale → Cerca → Scheda Categorie*.
- Quando ci si prepara a iniziare un percorso, toccare [*Navigazione → Imposta destinazione → Campo di ricerca → Scheda Categorie*](../navigation/setup/route-navigation.md#set-target-point).  
- Andare al *Menu principale → Configura mappa → Livello PDI → Cerca*](../map/point-layers-on-map.md#points-of-interest-pois).


## Come si usa {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca PDI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ricerca PDI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Tutti i tipi di PDI in OsmAnd si possono trovare qui:* [link github](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Ricerca di Punti di Interesse (PDI) per tipo e nome**:
    - Permette di cercare:
       - Punti di interesse (PDI) nelle vicinanze o categorie specifiche di PDI.
       - [Percorsi OSM](../map/routes.md) per nome e per numero di riferimento.
       - [Luoghi popolari (Wikipedia)](../map/map-context-menu.md#details).
    - È possibile filtrare e ordinare i risultati per categoria, distanza o valutazione.
    
- **Cerca PDI sulla mappa** - Mostra sulla mappa:
    1. È possibile selezionare le categorie richieste dall'[**elenco**](../map/point-layers-on-map.md#points-of-interest-pois) in *Configura mappa → Mostra livello PDI...* e cercare tramite le icone nella posizione desiderata.
    2. È possibile inserire prima una query di ricerca o iniziare a cercare PDI in *Menu → Cerca → Categorie* e poi fare clic su **Mostra sulla mappa**.

- **Ricerca per marchio**:
    - La ricerca di un'attività commerciale per nome del marchio (come Audi, Starbucks o Aldi) è molto simile alla ricerca di diversi PDI per tipo; la differenza principale è che l'elenco dei marchi è fornito all'interno della mappa ed è soggetto a modifiche ad ogni aggiornamento. 
    - Il marchio è definito dal tag OSM [***brand*** *name*](https://wiki.openstreetmap.org/wiki/Key:brand) e OsmAnd raccoglie un numero limitato di tipi di marchi per mappa, con un massimo di 1000 marchi per mappa, tuttavia si assicura che l'elenco dei marchi sia allineato tra le mappe vicine.

![Ricerca PDI Android](@site/static/img/search/brand_search_andr.png) ![Ricerca PDI Android](@site/static/img/search/brand_search_2_andr.png)


:::note
Per eseguire alcune di queste operazioni (individuare indirizzi, PDI) è necessario disporre del file della mappa vettoriale offline. Inizialmente, la ricerca si basa sui dati presenti sulla mappa nell'area visibile dello schermo del dispositivo. Se non si trova nulla, OsmAnd propone di aumentare il raggio di ricerca.
:::  


## Ricerca PDI per Categorie {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca PDI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca PDI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

Lo strumento **Ricerca per Categorie** consente di trovare rapidamente oggetti, luoghi e percorsi classificati in diverse categorie. Ogni categoria ha un insieme unico di caratteristiche e questo strumento dispone di filtri che consentono di affinare i risultati della ricerca selezionando valori diversi per caratteristiche aggiuntive.

Come funziona:

- *Selezione della categoria* - Si seleziona la categoria di interesse, come ristoranti, hotel, negozi, percorsi OSM, luoghi popolari di Wikipedia e altri, da un elenco di categorie suggerite.
- *Filtri per caratteristiche* - Dopo aver selezionato una categoria, l'applicazione mostra caratteristiche aggiuntive che possono essere utilizzate per affinare la ricerca. Ad esempio, per la categoria Ristoranti, è possibile selezionare filtri come tipo di cucina (italiana, cinese, ecc.), fascia di prezzo, valutazione e disponibilità di parcheggio.
- *Applicazione dei filtri* - Si selezionano i valori richiesti nei filtri, dopodiché l'applicazione applica questi filtri ai risultati della ricerca per mostrare solo le proprietà che corrispondono alle caratteristiche specificate.
- *Visualizzazione dei risultati* - Dopo aver applicato i filtri, OsmAnd visualizza un elenco con brevi informazioni corrispondenti alla categoria e alle caratteristiche impostate.

Vantaggi:

- *Personalizzazione dell'utente* - I filtri delle caratteristiche consentono di personalizzare le ricerche per soddisfare esigenze e preferenze specifiche.
- *Risultati affinati* - I filtri aiutano a perfezionare i risultati della ricerca, rendendoli più pertinenti e precisi.
- *Categorie multiple* - Il database di OpenStreetMap ha un vasto insieme di categorie di PDI, che consente di trovare siti di diversi tipi e categorie.

<!--
POI category search allows you to quickly find and select places of interest based on your needs. It is a handy tool for traveling, finding nearby services or places of interest, and planning routes based on selected POI categories.  

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info, full name, categorie name, direction and distance to POI, work time. Pressing to needed categorie opens POI list of this categorie. 

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an-object-single-tap) of POI.   
-->

### Tipi di Filtri {#types-of-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca PDI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca PDI iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

Con la funzione **Filtro**, è possibile selezionare le caratteristiche necessarie e ottenere di conseguenza un elenco contenente solo gli oggetti pertinenti. Per utilizzare il filtro:

- Selezionare la categoria di interesse dall'elenco delle categorie.
- Nella schermata che si apre, toccare l'icona che visualizza il filtro. Si trova sotto il campo di immissione, accanto a *Mostra sulla mappa*.
- Nel filtro, selezionare il tipo di caratteristiche.

![Ricerca PDI Android](@site/static/img/search/search_poi_filter_icon_andr.png)  

Un filtro può essere composto da un numero piuttosto elevato di elementi, la cui presenza dipende dalla categoria selezionata. Ogni categoria ha un numero di filtri specifici, organizzati in cartelle per tipo. In totale ci sono *22 categorie predefinite*. Alcune di esse sono elencate qui:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Alloggio](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) include strutture che forniscono alloggio temporaneo come hotel, motel, ostelli, pensioni e campeggi. Questi luoghi offrono servizi e comfort per un soggiorno confortevole durante il viaggio.  
        Include *9* tipi di filtri: **Frigorifero** (ha *2* valori), **Riscaldamento** (ha *7* valori), **Tipo di accesso a Internet** (ha *3* valori), **Materasso** (ha *2* valori), **Tipo di pagamento** (più di *10* valori), **Doccia** (ha *1* valore), **Fumatori** (ha *6* valori), **Classificazione a stelle** (ha *10* valori), **Accessibilità per sedie a rotelle** (ha *4* valori), Aperto ora / Aperto 24/7.

 2. **Bar e ristoranti**. [Bar](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) e [ristoranti](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) rappresentano luoghi di ristorazione.  
        Include *16* tipi di filtri: **Fasciatoio** (ha *3* valori), **Caffè** (ha *2* valori), **Cucina** (più di *10* valori), **Consegna a domicilio** (ha *1* valore), **Dieta** (ha *8* valori), **Piatto** (più di *10* valori), **Ricarica acqua potabile** (ha *1* valore), **Drive-in** (ha *1* valori), **Tipo di accesso a Internet** (ha *3* valori), **Microbirrificio** (ha *1* valore), **Prodotti biologici** (ha *2* valori), **Posti a sedere all'aperto** (ha *1* valore), **Tipo di pagamento** (più di *10* valori), **Fumatori** (ha *6* valori), **Da asporto** (ha *1* valore), **Accessibilità per sedie a rotelle** (ha *4* valori), Aperto ora / Aperto 24/7.

 3. **Stazione di ricarica**. Una [stazione di ricarica](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) è un'infrastruttura dove i proprietari di veicoli elettrici possono ricaricare le loro auto, moto o altri veicoli elettrici. Questi punti forniscono caricabatterie e connessioni appropriate per fornire energia alle batterie dei veicoli.
        Include *35* tipi di filtri: **Accesso biciclette** (ha *1* valore), **Accesso autobus** (ha *1* valore), **Accesso mezzi pesanti** (ha *5* valori), **Accesso auto** (ha *1* valore), **Accesso scooter** (ha *1* valore), **Autenticazione tramite app** (ha *1* valore), **Autenticazione tramite chip card** (ha *1* valore), **Autenticazione contactless** (ha *1* valore), **Autenticazione tramite chiave** (ha *1* valore), **Autenticazione richiesta** (ha *1* valore), **Autenticazione tramite telefonata** (ha *1* valore) **Autenticazione tramite messaggio breve** (ha *1* valore), **A pagamento** (ha *2* valori), **Tipo di accesso a Internet** (ha *3* valori), **Tipo di accesso a Internet** (ha *3* valori), **Accessibilità per sedie a rotelle** (ha *4* valori), Aperto ora / Aperto 24/7, e altri.  

 4. **Minimarket e supermercato**. [Minimarket](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) e [supermercato](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) rappresentano strutture di vendita al dettaglio.
        Include *13* tipi di filtri: **Acquisto all'ingrosso** (ha *2* valori), **Prelievo contanti** (ha *5* valori), **Fasciatoio** (ha *3* valori), **Caffè** (ha *2* valori), **Consegna a domicilio** (ha *1* valore), **Dieta** (ha *8* valori), **Gelato** (ha *1* valore), **Prodotti biologici** (ha *2* valori), **Tipo di pagamento** (più di *10* valori), **Filtro Seconda Mano** (ha *2* valori), **Cassa automatica** (ha *2* valori), **Accessibilità per sedie a rotelle** (ha *4* valori), Aperto ora / Aperto 24/7.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Emergenza](https://wiki.openstreetmap.org/wiki/Key:emergency) include strutture e luoghi associati ai servizi di emergenza come ospedali, stazioni di polizia, caserme dei vigili del fuoco e centri di primo soccorso medico.  
        Non contiene alcun filtro.

 6. **Stazione di servizio**. Una [stazione di carburante](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), nota anche come stazione di servizio, distributore di benzina o garage di benzina. È la struttura di tipo commerciale dove i veicoli a motore possono essere riforniti.  
        Include *13* tipi di filtri: **Autolavaggio** (ha *2* valori), **Prelievo contanti** (ha *5* valori), **Aria compressa** (ha *1* valori), **Tipo di carburante (avia)** (ha più di *20* valori), **Carte carburante** (ha *5* valori), **Tipo di pagamento** (ha più di *20* valori), **Cassa automatica** (ha *2* valori), **Accesso motoslitte** (ha *3* valori), **Bagno** (più di *1* valori), **Aspirapolvere** (ha *1* valori), **Distributore automatico di carburante** (ha *1* valori), **Accessibilità per sedie a rotelle** (ha *4* valori), Aperto ora / Aperto 24/7.  

 7. **Finanza**. [Finanza](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) utilizzato per uffici di aziende del settore finanziario.  
        Include *5* tipi di filtri.  

 8. **Cibo**. [Cibo](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) include tutti i luoghi che forniscono cibo e bevande.  
        Include *24* tipi di filtri.

 9. **Assistenza sanitaria**. [Assistenza sanitaria](https://wiki.openstreetmap.org/wiki/Healthcare) include servizi forniti da diversi professionisti in diversi tipi di strutture.  
        Include *13* tipi di filtri.

 10. **Tempo libero**. [Tempo libero](https://wiki.openstreetmap.org/wiki/Category:Leisure) include vari tipi di luoghi e strutture per l'intrattenimento.  
        Include *15* tipi di filtri.

 11. **Nautica**. Include PDI relativi ai tipi nautici.  
        Non contiene alcun filtro.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Include i PDI che sono vicini a te.  
        Include *216* tipi di filtri.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Parcheggio](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) include strutture utilizzate dal pubblico, clienti o altri utenti autorizzati per parcheggiare veicoli come auto e camion, comunemente noto come parcheggio (inglese britannico) o lotto di parcheggio (inglese americano).  
        Include *34* tipi di filtri.

 14. **Trasporto personale**. Tutti i [tipi di veicoli](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) possono essere in tuo possesso.  
        Include *38* tipi di filtri.

 15. **Luoghi popolari (Wikipedia)**. Per cercare in questa categoria, è necessario scaricare la [mappa Wikipedia](../plugins/wikipedia.md#overview) della regione di interesse.  
        Non contiene alcun filtro.

 16. **Accesso privato**.  
        Include *6* tipi di filtri.

 17. **<Translate android="true" ids="poi_filter_public_transport"/>**. È un sistema di trasporto progettato per trasportare persone per scopi pubblici, accessibile a tutti i residenti e visitatori di una città o regione.  
        Include *9* tipi di filtri.

 18. **Percorsi**. Include [percorsi OSM](../map/routes.md) per vari tipi di attività.  
        Include *14* tipi di filtri: **Checkpoint**, **Nodo rete ciclabile**, **Nodo rete escursionistica**, **Rete percorsi (ciclismo)**, **Rete percorsi (escursionismo)**, **Categoria punto percorso**, **Sport aerei**, **Ciclismo**, **Guida**, **A piedi**, **Motociclismo**, **Altri percorsi**, **Sport acquatici**, **Sport invernali**.

 19. **Visite turistiche**. È un'attività in cui le persone visitano luoghi o siti interessanti per familiarizzare con essi e godere della loro bellezza, storia o significato.  
        Include *8* tipi di filtri.

 20. **Sport**. Include aree per attività sportive.  
        Include *11* tipi di filtri.

 21. **Negozio**. [Negozio](https://wiki.openstreetmap.org/wiki/Key:shop) si riferisce a una varietà di stabilimenti e attività commerciali che offrono vari beni o servizi in vendita, come negozi di alimentari, negozi di abbigliamento, negozi di elettronica e altri.  
        Include *36* tipi di filtri.

 22. **Turismo**. [Turismo](https://wiki.openstreetmap.org/wiki/Key:tourism) include luoghi e cose di specifico interesse per i turisti, inclusi luoghi da vedere, luoghi in cui soggiornare e cose e luoghi che forniscono informazioni e supporto ai turisti.  
        Include *32* tipi di filtri.

 23. **Acqua**. Fonti di [acqua potabile](https://wiki.openstreetmap.org/wiki/Key:drinking_water) create o predisposte dall'uomo.  
        Non contiene alcun filtro.


### Riorganizza Categorie {#rearrange-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca PDI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca PDI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

La funzione Riorganizza Categorie consente di elencare solo le categorie necessarie e di disporle nell'ordine più comodo per l'utente.

Descrizione e modo d'uso:

- Inizialmente, *l'elenco è ordinato alfabeticamente*. Anche le categorie create vengono aggiunte in ordine alfabetico.
- Le modifiche all'elenco delle categorie vengono apportate separatamente per ogni profilo.
- Spostare le categorie trascinandole nella posizione desiderata dell'elenco.
- *Per nascondere* le categorie non necessarie, toccare l'icona **meno**.
- **Disponibile**. Le categorie precedentemente *Nascoste* possono essere riportate nell'elenco visualizzato toccando l'icona **più**.
- Utilizzare il pulsante **Ripristina predefiniti** per riportare l'elenco allo stato preimpostato.
- Le categorie create con [Ricerca personalizzata](#customize-poi-search) o [Filtri](#save-new-custom-filters) possono essere eliminate utilizzando l'icona **Elimina**.  

![Ricerca PDI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)  


### Ricerca Online {#online-search}

<InfoAndroidOnly />

![Ricerca PDI Android](@site/static/img/search/search_online_2_andr.png)  

La **Ricerca Online** consente di trovare luoghi, indirizzi e punti di interesse in tempo reale. OsmAnd utilizza [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), un geocodificatore online sviluppato da OpenStreetMap che traduce le query testuali degli utenti in coordinate geografiche e viceversa.  

La Ricerca Online include le seguenti funzionalità:

1. **Ricerca per località** - È possibile inserire il nome di una città, una via, un quartiere o un'altra località e OsmAnd fornirà risultati corrispondenti alla query.
2. **Geocodifica** - La ricerca online converte le query testuali in coordinate geografiche, consentendo una localizzazione precisa.
3. **Geocodifica inversa** - È possibile inserire coordinate geografiche e la Ricerca restituirà la località corrispondente come nome di città, nome di via o luogo sulla mappa.
4. **Ricerca per Punti di Interesse** - Consente di cercare diversi punti per nome o categoria.

Uso della Ricerca Online:

- La ricerca online garantisce che i dati siano aggiornati e che gli aggiornamenti siano disponibili, poiché il servizio è costantemente aggiornato e utilizza fonti di dati aperte.
- Fornisce un'ampia copertura di luoghi e oggetti, consentendo di trovare punti di interesse in diverse regioni del mondo.
- Le ricerche online sono in tempo reale e forniscono un accesso rapido ai risultati della ricerca.
- Utile nelle città e sulle autostrade con una buona copertura Internet.
- La ricerca online è comoda da usare se non ci sono mappe della regione e se è impossibile scaricarle.
- *Richiede una connessione Internet costante e stabile.*  

![Ricerca PDI Android](@site/static/img/search/search_poi_online_increase2_andr.png)  

Per migliorare i risultati, prima di utilizzare lo strumento di ricerca, ingrandire la mappa per avvicinarsi al punto in cui è necessario trovare una posizione specifica. E durante la ricerca, è possibile **aumentare il raggio di ricerca** per trovare luoghi più lontani dalla propria posizione. Durante la ricerca offline, se i risultati richiesti non sono disponibili, OsmAnd suggerisce di utilizzare la ricerca online.  

È possibile trovare informazioni sulla Navigazione Online nell'articolo [Routing online](../navigation/routing/online-routing.md).



## Personalizza Ricerca PDI {#customize-poi-search}

La Personalizzazione della Ricerca PDI è una funzione di ricerca avanzata che consente di trovare PDI di diverse categorie e di combinarli per una ricerca più accurata e personalizzata. A differenza della ricerca PDI standard, che è limitata ad alcune categorie predefinite, la ricerca PDI personalizzata offre la flessibilità di selezionare e combinare diversi tipi di PDI.  

Ad esempio, è possibile cercare contemporaneamente ristoranti e farmacie per trovare il posto più vicino dove cenare e poi prendere le medicine. Oppure cercare la stazione di servizio e l'autofficina più vicine quando si ha un problema con l'auto.  

Questa funzionalità è particolarmente utile in vari casi:  

- *Viaggi*. Durante i viaggi, utilizzando la ricerca personalizzata è possibile trovare rapidamente diversi luoghi di interesse e combinarli per creare un percorso ottimale.
- *Emergenze*. Se è necessario trovare rapidamente diversi tipi di servizi, è possibile utilizzare una ricerca PDI personalizzata per ottenere tutte le informazioni necessarie.
- *Ricerca di servizi nelle vicinanze*. La Ricerca personalizzata consente di combinare diverse categorie di PDI per una facile ricerca se è necessario trovare diversi tipi di servizi in un determinato quartiere o su un determinato tratto del percorso.

### Filtro PDI personalizzato {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca personalizzata Android](@site/static/img/search/search_custom_filter_andr.png)   ![Ricerca personalizzata Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Custom POI iOS](@site/static/img/search/custom_poi_ios.png)   ![Custom POI types iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Ricerca personalizzata iOS](@site/static/img/search/custom_poi_filter_1_ios.png)   ![Tipi di PDI personalizzato iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>  

Il *Filtro PDI personalizzato* include insiemi di categorie di servizi costituiti da valori pertinenti. OsmAnd consente di raccogliere e combinare i tipi di PDI richiesti da una o più categorie suggerite.  

Per creare filtri personalizzati per la ricerca di luoghi sulla mappa, selezionare le categorie e le sottocategorie di interesse pertinenti. È possibile [salvare](#save-new-custom-filters) questi filtri per un uso successivo o [modificarli](#edit-an-existing-filter) se necessario. In alternativa, è possibile visualizzare i dati filtrati senza salvarli toccando il pulsante *Mostra*. Tuttavia, si noti che se non si salvano i filtri, tutte le selezioni verranno annullate una volta che si cambia ricerca o si esce dallo strumento di ricerca.

- Ogni categoria di servizi contiene un elenco di valori generici disponibili per i tipi di PDI.
- È possibile selezionarli o deselezionarli individualmente toccando il campo del tipo di interesse.
- *Seleziona tutto* - Per fare ciò, selezionare il pulsante di attivazione/disattivazione.
- Affinare l'elenco escludendo quelli non necessari - Iniziare a digitare il nome suggerito nel campo *Cerca tipi di PDI*.  

### Categorie e loro Filtri {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Include 25 tipi: *Orti, Atollo, Borgo, Città, Isolati urbani, Nazione, Tribunale, Dogana, Ufficio diplomatico, Fattoria, Governo, Frazione, Isola, Isolotto, Abitazione isolata, Località, Quartiere, Polizia, Prigione, Quartiere, Area residenziale, Sobborgo, Cittadina, Municipio, Villaggio*.  

2. **Natale**. Include 5 tipi di filtri:  
    *Evento natalizio, Mercatino di Natale, Piramide natalizia, Negozio natalizio, Albero di Natale*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Include 16 tipi: *Orti, Atollo, Borgo, Città, Isolati urbani, Nazione, Tribunale, Dogana, Ufficio diplomatico, Fattoria, Governo, Frazione, Isola, Isolotto, Abitazione isolata, Località, Quartiere, Polizia, Prigione, Quartiere, Area residenziale, Sobborgo, Cittadina, Municipio, Villaggio*.  

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Include 14 tipi di filtri.  

5. **Infrastruttura di emergenza**. Include 12 tipi di filtri.  

6. **<Translate android="true" ids="amenity_type_finance"/>**. Include 12 tipi di filtri.

7. **Cibo**. Include 12 tipi di filtri.  

8. **Pericolo**. Include 5 tipi: *Pericolo valanghe, Pericolo erosione, Pericolo inondazioni, Pericolo nucleare, Strada sdrucciolevole*. La categoria Pericolo include sia i PDI con tag hazard=* sui nodi sia i segmenti di strada o sentiero (ways) contrassegnati con lo stesso tag, se esportati come oggetti ricercabili. Per una panoramica visiva di tutte le icone di pericolo utilizzate sulla mappa, vedere la sezione [Pericolo](https://osmand.net/docs/user/map-legend/osmand/#hazard).

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Include 31 tipi di filtri.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Include 148 tipi di filtri.  

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Include 121 tipi di filtri.  

12. **<Translate android="true" ids="amenity_type_military"/>**. Include 7 tipi: *Area di pericolo, Bunker militare, Base navale militare, Ufficio militare, Poligono militare, Zona militare, Sito di esplosione nucleare*.  

13. **<Translate android="true" ids="amenity_type_natural"/>**. Include 50 tipi di filtri.  

14. **Nautica**. Include 41 tipi di filtri.  

15. **<Translate android="true" ids="amenity_type_office"/>**. Include 39 tipi di filtri.

16. **Luoghi popolari (Wikipedia)**. Include 1 tipo: *Wikipedia*.

17. **Accesso privato**. Non include alcun filtro.

18. **Percorsi**. Include 15 tipi di filtri.  

19. **Servizio**. Include 111 tipi di filtri.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Include 119 tipi di filtri.  

21. **Negozio**. Include 156 tipi di filtri.  

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Include 103 tipi di filtri.

23. **Trasporti**. Include 97 tipi di filtri.  

24. **Definito dall'utente**. Include 1 tipo: *Altro codice postale definito dall'utente*.

<!--
:::note since OsmAnd 5.0 for Android
Available for search:

- Religious POIs based on the `amenity=place_of_worship` tag are divided into religious-specific locations such as churches, mosques, or synagogues.
- Minor amenities such as “bench”, "youth bench" (`amenity=bench`) are available in the category list.
:::
-->

### Salva Nuovi Filtri Personalizzati {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Salvataggio PDI personalizzato Android](@site/static/img/search/custom_poi_save_android.png) ![Salvataggio PDI personalizzato Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Salvataggio PDI personalizzato iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Per **salvare** un filtro personalizzato, selezionare i tipi di filtro, e poi:

- Toccare il pulsante *Mostra* e selezionare il pulsante *Salva* per iOS o il pulsante con l'*icona che indica l'azione di salvataggio* per Android.
- Inserire un nome per la nuova categoria.
- Il filtro apparirà nell'elenco della *scheda Categorie* nello strumento di Ricerca.  

Un altro modo per **salvare**:

- Selezionare *[categoria](#poi-search-by-categories) → [icona filtro](#types-of-filters) →* selezionare *tipi* di caratteristiche *→ menu a tre punti → Salva filtro*.


### Modifica un Filtro Esistente {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Eliminazione PDI personalizzato Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Eliminazione PDI personalizzato iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

Dalla schermata principale:

- Toccare il pulsante *Lente d'ingrandimento* nell'angolo in alto a sinistra dello schermo del dispositivo per aprire il menu *Cerca*.
- Selezionare la scheda *Categorie*.
- Selezionare una categoria personalizzata salvata e apparirà la schermata dei risultati della ricerca.
- Toccare l'icona *Filtro* accanto a *Mostra sulla mappa* per aprire la schermata *Filtri*.
- Toccare il *menu a tre punti*.
- Nel menu a discesa, selezionare **Modifica filtro**.
- Per salvare una ricerca PDI personalizzata dopo la modifica:  
    - Selezionare le categorie PDI e i tipi di filtro per esse *→* toccare *Mostra → menu a tre punti → Salva come →* inserire un nuovo nome per il filtro o *salvare* le modifiche a quello corrente.


### Elimina Filtro PDI Personalizzato {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Eliminazione PDI personalizzato Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Eliminazione PDI personalizzato iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

È possibile eliminare solo le categorie create utilizzando filtri o la ricerca personalizzata.

- Andare alla scheda [Categorie](#poi-search-by-categories) e selezionare quella desiderata.
- Nel campo accanto a *Mostra sulla mappa*, toccare l'icona che rappresenta il *filtro*.
- Nel menu *Filtri*, toccare il *menu a tre punti* ( &#8285; ) situato nell'angolo in alto a destra dello schermo.
- Selezionare **Elimina Filtro**.
- ***Non è possibile annullare l'eliminazione.***


### Elimina Categorie Personalizzate (iOS) {#delete-custom-categories-ios}

![Eliminazione PDI personalizzato iOS](@site/static/img/search/custom_poi_delete_3_ios.png)  

Un'opzione aggiuntiva solo per l'app iOS è **Elimina Categorie Personalizzate**.

- Questa voce si trova alla fine dell'elenco della scheda *Categorie*.
- Selezionare le categorie non necessarie una per una o *Seleziona tutto*.
- Toccare il pulsante **Elimina**.  


## Articoli Correlati {#related-articles}

- [Cerca Tutto](./search-all.md)
- [Ricerca Indirizzo](./search-address.md)
- [Cronologia Ricerche](./search-history.md)
- [Ricerca Coordinate](./search-coordinates.md)