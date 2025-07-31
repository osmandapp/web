---
source-hash: b955b527f4a6288fa803d731df2f410db4fb91c6a6b0ec46ae14193d525bf995
sidebar_position: 7
title:  Vista Mappa Nautica
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
Il plugin Vista Mappa Nautica è una [funzionalità a pagamento](../purchases/index.md) dell'app OsmAnd.
:::

La Vista Mappa Nautica è una rappresentazione grafica dettagliata di oceani, mari, aree costiere e fiumi che ti aiuta a navigare in acqua e a conoscere rotte popolari, ostacoli nel tuo corso d'acqua, porti più vicini, ancoraggi e altri importanti punti di riferimento.

Una mappa nautica è una mappa topografica altamente dettagliata per aiutare gli skipper a navigare una nave su una rotta selezionata sull'acqua. È simile a una mappa stradale per chi viaggia in auto. Spesso chiamata "Carta" per ragioni storiche, è una rappresentazione grafica dettagliata di oceani, mari, aree costiere e fiumi.

Le mappe nautiche sono importanti per i marinai professionisti e gli amatori che noleggiano una barca per navigare nei canali della città. Le mappe forniscono loro varie informazioni come rotte di navigazione, luci di navigazione, zone di pericolo, zone in cui è consentito o proibito navigare o attraccare, ecc.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mappe nautiche](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mappe nautiche](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Perché il tema nautico è importante {#why-the-nautical-theme-matters}

Tutti i marinai professionisti sono tenuti ad avere mappe nautiche ufficiali sulle loro navi. Queste mappe sono pubblicate da agenzie autorizzate e sono piuttosto costose. Le agenzie investono molto per mantenere le mappe aggiornate. Rilasciano aggiornamenti regolari alle mappe, ma poiché ci vuole tempo per verificare le informazioni ed elaborare gli aggiornamenti, le mappe nautiche non sono mai completamente aggiornate.

Basate sui dati di [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), le mappe nautiche di OsmAnd sono create dalle persone che le utilizzano. Ogni utente della mappa può contribuire alla mappa aggiungendo informazioni che ritiene importanti e utili per sé, rendendo così la mappa più dettagliata e precisa, ideale per l'orientamento o la pianificazione del percorso.


## Parametri di configurazione richiesti {#required-setup-parameters}

La seguente configurazione fa sì che la mappa nautica venga visualizzata sullo schermo:

1. [Acquista](../plugins/index.md#purchase) e [Abilita](../plugins/index.md#enable--disable) il plugin Vista mappa nautica.
2. [Scarica](#download-nautical-maps) le mappe nautiche.
3. Imposta lo [stile mappa nautica](#set-nautical-map-style) per il [profilo](../personal/profiles.md) richiesto.


### Imposta lo stile della mappa nautica {#set-nautical-map-style}

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

Utilizza la [Legenda della mappa](../../user/map-legend/nautical-map.md) per qualsiasi riferimento a ciò che è mostrato sulla mappa nautica. Spiega gli elementi simbolici su una mappa nautica e serve come riferimento per aiutarti a navigare in caso di dubbio. Impostando lo stile della mappa nautica, puoi ottenere la migliore visualizzazione dei dati nautici scaricati e visualizzati.

Per cambiare lo stile della mappa corrente in Nautico, devi effettuare le seguenti impostazioni:

1. Seleziona il [profilo](../personal/profiles.md) richiesto.
2. Apri [Configura mappa](../map/configure-map-menu.md).
3. Scorri verso il basso fino a Stile mappa, aprilo e seleziona **Nautico**.


### Scarica mappe nautiche {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Vista mappe plugin nautico Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Vista mappe plugin nautico iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Per una presentazione ottimale, le mappe possono essere adattate alle esigenze attuali: segni e simboli possono essere aggiunti con punti di profondità e, se necessario, contorni. D'altra parte, le mappe standard con informazioni sulle acque interne, costiere e vicine alla costa per una particolare regione possono essere un buon complemento alle informazioni sui corsi d'acqua su una mappa nautica.

Quando [scarichi](../start-with/download-maps.md) una mappa nautica, sulla mappa appaiono più dettagli relativi alla navigazione in *barca*. Alcuni tipi di [mappe nautiche](../start-with/download-maps.md#type-of-maps) contengono dettagli come:

- **Segni e simboli nautici.**
I segni e i simboli contengono tutti i segni di navigazione nautica sia per la navigazione interna che costiera. Conoscere questi segni ti aiuterà a prevedere la posizione di rocce, ostruzioni, ancoraggi, boe, correnti, acque profonde e poco profonde e lati del canale, indipendentemente dalla direzione, ecc. I segni e i simboli vengono scaricati una volta per il mondo intero.

- **Punti di profondità.**
I dati nautici dei pacchetti di punti di profondità sono rappresentati da numeri visualizzati sull'acqua che indicano la profondità più bassa in una particolare posizione. I punti di profondità sono disponibili per ogni emisfero e alcune regioni.

- **Contorni di profondità.**
I pacchetti di contorni di profondità ti consentono di definire aree di uguale profondità. Sono destinati a visualizzare i cambiamenti nel rilievo sotto la superficie dell'acqua. I contorni di profondità possono essere scaricati per determinate aree e quindi disattivati se non ne hai bisogno.

:::info Numeri di profondità
Tutti i numeri di profondità sulle mappe nautiche sono indicati in metri.
:::


### Disabilita lo stile della mappa nautica {#disable-nautical-map-style}

Per rimuovere Nautico e visualizzare una delle mappe convenzionali di OsmAnd, esegui una delle seguenti operazioni:

- Disabilita il plugin Nautico.
- Cambia lo stile della mappa in qualsiasi cosa diversa da *Nautico*.

:::info NOTA
La disabilitazione del plugin Nautico non rimuove i dati nautici caricati, quindi anche se cambi il metodo di rendering da nautico a qualsiasi altro metodo quando i dati nautici vengono scaricati, rimangono visibili sulla mappa.
:::


## Profilo nautico {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Contorni di profondità nautici in Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Contorni di profondità in iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

La mappa nautica può essere inclusa in qualsiasi profilo. Tuttavia, è più preziosa nel [profilo Barca](../personal/profiles.md) e specialmente nella [navigazione in barca](../navigation/routing/boat-navigation.md).


## Stile della mappa nautica {#nautical-map-style}

Il plugin Nautico in OsmAnd estende gli stili di mappa del livello vettoriale con lo stile di mappa Nautico. Ti consente di visualizzare i dati della mappa secondo le regole della mappa Nautica, ad esempio: aree gialle per terra e secche, aree azzurre per acque poco profonde, ecc. Per maggiori informazioni, vedi [Legenda della mappa](../../user/map-legend/nautical-map.md).


### Punti di profondità {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mappe nautiche](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mappe nautiche](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

I pacchetti di punti di profondità [packages](../start-with/download-maps.md#type-of-maps) sono disponibili per l'Europa, l'emisfero settentrionale e l'emisfero meridionale e sono informativi. I punti di profondità indicano i cambiamenti nella topografia sotto la superficie dell'acqua, indicando la profondità più bassa. Questo è necessario per la navigazione in *barca*. Dopo aver scaricato, è necessario attivare i [contorni di profondità](#depth-contours) per visualizzarli sulla mappa.


### Contorni di profondità {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Contorni di profondità nautici in Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Contorni di profondità in iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Quando una mappa nautica viene visualizzata sullo schermo, è possibile regolare ciò che si vede:

- Mostra o nascondi i *contorni di profondità*.
- Impostazione del livello di dettaglio delle informazioni del fondale marino: [*Larghezza della linea* e *Schema colori della linea*](../map/vector-maps.md#-nautical-depth).

:::info NOTA
Puoi aiutare l'app OsmAnd ad aumentare il database dei contorni di profondità aggiungendo le tue informazioni utilizzando [OpenSeaMap](https://map.openseamap.org/)
:::


### Dettagli del fondale marino {#seabed-details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![Dettagli del fondale marino](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Dettagli del fondale marino](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

I dati del fondale marino contengono informazioni sulla vegetazione e sul materiale superficiale generale come rocce, conchiglie, ghiaia, corallo, limo, ecc. A causa della classificazione internazionale dei dati del fondale marino, ci sono opzioni per visualizzare tali dettagli su una mappa: *semplice*, *categoria*, *tutti* o *omettere*. Utilizza la [legenda della mappa dell'area del fondale marino](../map-legend/nautical-map.md#seabed-area) per maggiori informazioni.

- **Semplice** (*per la versione Android*) - mostra i simboli del segnale marittimo in conformità con INT-1 Ref, indicando la natura della superficie del fondale marino.
- **Categoria** - oltre al simbolo del segnale marittimo, mostra anche il tag del segnale marittimo pertinente, indicando il materiale naturale, o la categoria di alghe e posidonie.
- **Tutti** - oltre al simbolo, tag o categoria del segnale marittimo, mostra anche qualifiche come fine, appiccicoso, grossolano, ecc. Per alghe e posidonie, mostra i dati contrassegnati con i tag *taxon* e *genus*.
- **Ometti** - non mostra i dettagli del fondale marino.

:::info NOTA
Per maggiori dettagli sulla classificazione dei dettagli della superficie e sulle opzioni di rendering, fare riferimento alla [wiki seamark di OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::


## Articoli correlati {#related-articles}

- [Importa / Esporta](../personal/import-export.md)
- [Schemi di colori della tavolozza](../personal/color-palette-schemes.md)

> *Ultimo aggiornamento: Giugno 2023*