---
source-hash: 7ec189e5ebc7bca3eaaa66be6d97617ba61c06de602535da3e7881dac213769a
sidebar_position: 7
title:  Visualizzazione Mappa Nautica
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Panoramica {#overview}

:::info Funzionalità a pagamento
Il plugin Visualizzazione Mappa Nautica è una [funzionalità a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

La Visualizzazione Mappa Nautica è una rappresentazione grafica dettagliata di oceani, mari, aree costiere e fiumi che aiuta a navigare in acqua e a conoscere le rotte popolari, gli ostacoli sulla via navigabile, i porti più vicini, gli ancoraggi e altri punti di riferimento importanti.

Una mappa nautica è una mappa topografica molto dettagliata per aiutare gli skipper a navigare un'imbarcazione su una rotta selezionata in acqua. È simile a una mappa stradale per chi viaggia in auto. Spesso chiamata *'Carta'* per ragioni storiche, è una rappresentazione grafica dettagliata di oceani, mari, aree costiere e fiumi.

Le mappe nautiche sono importanti per i marinai professionisti e per i dilettanti che noleggiano una barca per navigare nei canali della città. Le mappe forniscono loro varie informazioni come rotte di navigazione, fanali di navigazione, zone di pericolo, zone in cui è consentito o vietato navigare o attraccare, ecc.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mappe nautiche](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mappe nautiche](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Perché il tema nautico è importante {#why-the-nautical-theme-matters}

Tutti i marinai professionisti sono tenuti ad avere a bordo delle loro navi mappe nautiche ufficiali. Queste mappe sono pubblicate da agenzie autorizzate e sono piuttosto costose. Le agenzie investono molto per mantenere le mappe aggiornate. Emettono aggiornamenti regolari alle mappe, ma poiché ci vuole tempo per verificare le informazioni ed elaborare gli aggiornamenti, le mappe nautiche non sono mai completamente aggiornate.

Basate sui dati di [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), le mappe nautiche di OsmAnd sono create dalle persone che le utilizzano. Ogni utente della mappa può contribuire alla mappa aggiungendo informazioni che ritiene importanti e utili per sé, rendendo così la mappa più dettagliata e accurata, ideale per l'orientamento o la pianificazione del percorso.


## Parametri di configurazione richiesti {#required-setup-parameters}

La seguente configurazione fa apparire la mappa nautica sullo schermo:

1. [Acquista](../plugins/index.md#purchase) e [Abilita](../plugins/index.md#enable--disable) il plugin Visualizzazione Mappa Nautica.
2. [Scarica](#download-nautical-maps) le mappe nautiche.
3. Imposta lo stile mappa [Nautico](#set-nautical-map-style) per il [profilo](../personal/profiles.md) richiesto.


### Imposta Stile Mappa Nautico {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*  

![Tipo di mappa nautica in Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*  

![Tipo di mappa nautica in iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Usa la [Legenda della mappa](../../user/map-legend/nautical-map.md) per qualsiasi riferimento a ciò che è mostrato sulla mappa nautica. Spiega gli elementi simbolici su una mappa nautica e serve come riferimento per aiutarti a navigare in caso di dubbio. Impostando lo stile mappa Nautico, puoi ottenere la migliore visualizzazione dei dati nautici scaricati e visualizzati.

Per cambiare lo stile mappa corrente in Nautico, è necessario effettuare le seguenti impostazioni:

1. Seleziona il [profilo](../personal/profiles.md) richiesto.
2. Apri [Configura mappa](../map/configure-map-menu.md).
3. Scorri verso il basso fino a Stile mappa, aprilo e seleziona **Nautico**.


### Scarica Mappe Nautiche {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*  

![Visualizzazione mappe plugin nautico Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*  

![Visualizzazione mappe plugin nautico iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Per una presentazione ottimale, le mappe possono essere adattate alle esigenze attuali: possono essere aggiunti segni e simboli con punti di profondità e, se necessario, curve di livello. D'altra parte, le mappe standard con informazioni sulle acque interne, costiere e vicine alla costa per una particolare regione possono essere un buon complemento alle informazioni sulle vie navigabili su una mappa nautica.

Quando [scarichi](../start-with/download-maps.md) una mappa nautica, sulla mappa compaiono maggiori dettagli relativi alla navigazione *Barca*. Alcuni tipi di [mappe nautiche](../plugins/nautical-charts/#nautical-map-style) contengono dettagli come:

- **Segni e simboli nautici.**
    I segni e i simboli contengono tutti i segnali di navigazione nautica sia per la navigazione interna che costiera. Conoscere questi segni ti aiuterà a prevedere la posizione di rocce, ostacoli, ancoraggi, boe, correnti, acque profonde e poco profonde, e i lati del canale, indipendentemente dalla direzione, ecc. I segni e i simboli vengono scaricati una volta per tutto il mondo.

- **Punti di profondità.**
    I dati nautici dei pacchetti di punti di profondità sono rappresentati da numeri visualizzati sull'acqua che indicano la profondità più bassa in una particolare posizione. I punti di profondità sono disponibili per ogni emisfero e alcune regioni.

- **Curve di profondità.**
    I pacchetti di curve di profondità consentono di definire aree di uguale profondità.  Sono destinati a visualizzare i cambiamenti di rilievo sotto la superficie dell'acqua. Le curve di profondità possono essere scaricate per determinate aree e poi disattivate se non ne hai bisogno.

:::info Numeri di profondità
Tutti i numeri di profondità sulle Mappe Nautiche sono indicati in metri.
:::


### Disabilita Stile Mappa Nautico {#disable-nautical-map-style}

Per rimuovere lo stile Nautico e visualizzare una delle mappe convenzionali di OsmAnd, esegui una delle seguenti operazioni:

- Disabilita il plugin Nautico.
- Cambia lo stile della mappa in qualsiasi altro stile diverso da *Nautico*.

:::info NOTA
La disabilitazione del plugin Nautico non rimuove i dati nautici caricati, quindi anche se si cambia il metodo di rendering da nautico a qualsiasi altro metodo quando i dati nautici sono scaricati, questi rimangono visibili sulla mappa.
:::


## Profilo Nautico {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Curve di profondità nautiche in Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Curve di profondità in iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

La mappa nautica può essere inclusa in qualsiasi profilo. Tuttavia, è più utile nel [profilo Barca](../personal/profiles.md) e specialmente nella [navigazione in Barca](../navigation/routing/boat-navigation.md).


## Stile Mappa Nautico {#nautical-map-style}

Il plugin Nautico in OsmAnd estende gli stili di mappa del livello vettoriale con lo stile mappa Nautico. Permette di visualizzare i dati della mappa secondo le regole della mappa nautica, ad esempio: aree gialle per la terra e le secche, aree azzurre per le acque poco profonde, ecc. Per maggiori informazioni, vedi [Legenda della mappa](../../user/map-legend/nautical-map.md).


### Dettaglio Fondale Marino {#seabed-detail}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*  

![Dettagli del fondale marino](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *Menu → Configura mappa → Stile mappa → Dettagli → Dettaglio fondale marino*

![Dettagli del fondale marino](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

I dati del fondale marino contengono informazioni sulla vegetazione e sul materiale superficiale generale come rocce, conchiglie, ghiaia, corallo, limo, ecc. A causa della classificazione internazionale dei dati del fondale marino, ci sono opzioni per visualizzare tali dettagli su una mappa: *semplice*, *categoria*, *tutti* o *omettere*. Usa la [Legenda della mappa dell'area del fondale marino](../map-legend/nautical-map.md#seabed-area) per maggiori informazioni.

- **Semplice** (*per la versione Android*) - mostra i simboli dei segnali marittimi in conformità con INT-1 Ref, indicando la natura della superficie del fondale marino.
- **Categoria** - oltre al simbolo del segnale marittimo, mostra anche il relativo tag del segnale marittimo, indicando il materiale naturale, o la categoria di alghe e fanerogame.
- **Tutti** - oltre al simbolo del segnale marittimo, al tag o alla categoria, mostra anche qualifiche come fine, appiccicoso, grossolano, ecc. Per le fanerogame e le alghe, mostra i dati contrassegnati con i tag *taxon* e *genus*.
- **Omettere** - non mostra i dettagli del fondale marino.

:::info NOTA
Per maggiori dettagli sulla classificazione dei dettagli della superficie e le opzioni di rendering, fare riferimento alla [wiki dei segnali marittimi di OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::

### Dettaglio Luci {#light-detail}

Android Vai a: *Menu → Configura mappa → Stile mappa Nautico → Altri attributi mappa → Dettaglio luci*

iOS Vai a: *Menu → Configura mappa → Tipo mappa Nautico → Dettagli → Dettaglio luci*

Questa opzione visualizza il livello di informazioni per i fanali di navigazione. Puoi scegliere quanto dettagliate appaiano le caratteristiche delle luci vicino a ogni faro o boa.

- **Semplice** – mostra il nome predefinito del segnale marittimo e la caratteristica della luce.
- **Settori** – visualizza archi di settore completi e dettagli per tutti i settori di luce visibili.
- **Settore 1–5** – mostra dettagli solo per un numero specifico di settore.
- **Piccolo** – utilizza un formato di etichetta compatto per le caratteristiche delle luci.
- **Solo nome** – mostra solo il nome del segnale marittimo senza dati sulle luci.
- **Omettere** – nasconde tutte le informazioni sulle luci.


## Stile Mappa Marino {#marine-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marino Android](@site/static/img/plugins/nautical-charts/marine_android.png)

Vai a: *Menu* → *Configura mappa* → *Stile mappa* → *Marino*

</TabItem>

<TabItem value="ios" label="iOS">

![Marino iOS](@site/static/img/plugins/nautical-charts/marine_ios.png)

Vai a: *Menu* → *Configura mappa* → *Tipo mappa* → *Marino*

</TabItem>

</Tabs>

Questo stile aggiunge elementi visivi per la navigazione marittima, inclusi fanali di navigazione con caratteristiche luminose INT-1, che descrivono il tipo, il colore e il ritmo di un segnale luminoso (ad esempio, se lampeggia, il suo colore e l'intervallo tra i lampeggi), e luci a settori colorati che indicano la direzione e il colore della luce visibile dal mare.

Nello stile Marino, i settori luminosi sono visualizzati intorno ai fari e alle boe: il bianco (mostrato in giallo sulla mappa) indica la direzione sicura per la navigazione, il rosso segna aree pericolose o ristrette, e il verde mostra direzioni ausiliarie o laterali.

:::info
Per visualizzare queste informazioni, il plugin Nautico deve essere abilitato e la mappa World Seamarks (o World_seamarks_2.obf) deve essere scaricata. Le informazioni non sono destinate all'uso ufficiale per la navigazione.
:::


### Attributi Mappa {#map-attributes}
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Attributi Android](@site/static/img/plugins/nautical-charts/marine_details_android.png)

Vai a: *Menu* → *Configura mappa* → *Stile mappa Marino* → *Altri attributi mappa*

</TabItem>

<TabItem value="ios" label="iOS">

![Attributi iOS](@site/static/img/plugins/nautical-charts/marine_details_ios.png)

Vai a: *Menu* → *Configura mappa* → *Tipo mappa Marino* → *Dettagli* → *Dettaglio luci/Dettaglio fondale marino*

Vai a: *Menu* → *Configura mappa* → *Tipo mappa Marino* → Scegli altre opzioni

</TabItem>

</Tabs>

Dopo aver abilitato lo stile mappa Marino, puoi affinare ulteriormente gli elementi visivi aggiuntivi. Queste opzioni ti permettono di controllare come appaiono gli ausili alla navigazione, le curve di profondità, i dettagli del fondale marino e i colori sulla mappa.

- **[Dettaglio luci](../plugins/nautical-charts/#light-detail)**. Definisce come vengono visualizzate le informazioni sulle luci dei segnali marittimi. Opzioni: **Predefinito** (nome completo con caratteristiche luminose), *Piccolo* (formato compatto), *Solo nome* (solo nome della luce), o *Omettere* (nascondi etichette).
- **[Dettaglio fondale marino](../plugins/nautical-charts/#seabed-detail)**. Controlla il livello di informazioni testuali sul fondale marino. Opzioni: Semplice (info di base), Categoria (tipo di superficie), Tutti (dati completi), o Omettere (nessun testo).
- **Colore acqua**. Imposta il colore di base per le aree d'acqua. Opzioni: *Predefinito, Blu, Bianco*, o *Grigio* — utile per regolare visibilità e contrasto in diverse modalità di illuminazione.
- **Colore via di mezzo**. Cambia il colore delle vie di navigazione e dei canali. Opzioni: *Bianco, Più bianco, Grigio, Verde*, o *Giallo* per migliorare la leggibilità in base allo sfondo della carta.
- **Stile piane di marea**. Regola il colore e la texture utilizzati per le piane di marea. Opzioni: *Verde chiaro, Verde scuro, Zona umida*, o *Marea* — ciascuna evidenzia in modo diverso le zone intertidali poco profonde.
- **Marcatori ENC**. Attiva/Disattiva. Quando abilitato, mostra i marcatori della Carta Navigazionale Elettronica (ENC) come boe, fanali e altri ausili alla navigazione.
- **Stile conchiglie**. Definisce come appaiono le conchiglie o le caratteristiche della superficie del fondale. Opzioni: *Grigio, Rocce, Pietre*, o *Rosso*, a seconda dello stile visivo preferito.
- **Curve di profondità tratteggiate**. Attiva/Disattiva. Quando abilitato, visualizza le linee di contorno di profondità come tratteggiate, migliorando la leggibilità in aree dense.
- **Schema colori profondità**. Seleziona lo schema di colori per le zone di profondità. Opzioni: *PAPER* (colori tradizionali delle carte cartacee) o *ECDIS* (palette standard del sistema di navigazione elettronica).
- **Dimensione sondaggio spot**. Imposta la dimensione del carattere per i numeri di sondaggio spot (valori di profondità). Opzioni: *Predefinito, 10, 12, 14*, o *16* — valori più grandi migliorano la visibilità su schermi ad alta risoluzione.
- **Distanza sondaggio spot**. Controlla con quale frequenza appaiono i sondaggi di profondità sulla mappa. Opzioni: *Predefinito, 0, 5, 10, 15, 30, 60*, o *120*, che determina la spaziatura tra i punti di profondità visualizzati.
- **Contorno profondità di sicurezza**. Evidenzia la linea di contorno che segna la soglia di profondità di sicurezza. Opzioni: *Off, 0 m, 1 m, 2 m, 3 m, 4 m, 5 m*, o *10 m*. Utile per distinguere le aree di navigazione sicure dalle zone poco profonde.


## Dati Nautici Aggiuntivi {#additional-nautical-data}

### Punti di Profondità {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mappe nautiche](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mappe nautiche](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

I [pacchetti](../start-with/download-maps.md#overview) di punti di profondità sono disponibili per l'Europa, l'emisfero settentrionale e l'emisfero meridionale e sono informativi. I punti di profondità indicano i cambiamenti di topografia sotto la superficie dell'acqua, indicando la profondità più bassa. Questo è necessario per la navigazione *Barca*. Dopo il download, è necessario attivare le [Curve di profondità](#depth-contours) per visualizzarle sulla mappa.


### Curve di Profondità {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*  

![Curve di profondità nautiche in Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Curve di profondità in iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Quando una mappa nautica è visualizzata sullo schermo, puoi regolare ciò che vedi:

- Mostra o nascondi le *Curve di profondità*.
- Impostazione del livello di dettaglio delle informazioni sul fondale marino: [*Spessore linea* e *Schema colori linea*](../map/vector-maps.md#-nautical-depth).

:::info NOTA
Puoi aiutare l'app OsmAnd ad aumentare il database delle Curve di profondità aggiungendo le tue informazioni tramite [OpenSeaMap](https://map.openseamap.org/)
:::


## Articoli correlati {#related-articles}

- [Importa / Esporta](../personal/import-export.md)
- [Schemi di tavolozze di colori](../personal/color-palette-schemes.md)