---
source-hash: afe72063425498b71bb1dd721322f8785efd87d15a05cdd773b5036abe42e09b
sidebar_position: 0
title: Informazioni sul routing di OsmAnd
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

Il routing offline di OsmAnd si basa sui dati di OpenStreetMap e fornisce una varietà di percorsi per scopi diversi. Questo è un elenco di tipi di routing predefiniti che potrebbero essere estesi. Le regole di navigazione sono contenute nel file [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) e vengono utilizzate per il routing offline. Il tipo di percorso cambia automaticamente quando si cambia il profilo.


## Tipi di routing {#routing-types}

I seguenti profili con i relativi tipi di routing sono preimpostati in OsmAnd: *Guida, Ciclismo, Camminata, Camion, Motocicletta, Ciclomotore, Trasporto pubblico, Barca, Aereo, Sci, Treno, Equitazione*. Oltre a questi, è possibile creare i propri profili con regole di routing specifiche o [modificare l'algoritmo di routing di OsmAnd](../routing/osmand-routing.md#customize-offline-routing).

:::note

- I profili [**Camion, Motocicletta, Ciclomotore, Treno, Aereo, Barca ed Equitazione**](./osmand-routing.md) sono disattivati per impostazione predefinita. Per utilizzare questi profili, è necessario attivarli in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- Il tipo di navigazione [**Diretto al punto**](./direct-to-point-routing.md) non ha un proprio profilo e può essere utilizzato con qualsiasi profilo abilitato.

- Il routing offline di OsmAnd può essere **configurato modificando il [file .xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. Per maggiori informazioni, consultare l'articolo [*Personalizzare il routing offline*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Categoria | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *Routing offline di OsmAnd* | Il meccanismo di routing offline di OsmAnd utilizza mappe pre-scaricate come fonte di dati per il calcolo del percorso. | Tipi di navigazione: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Ciclomotore](./moped-routing.md), [Motocicletta](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Camion](car-based-routing#route-parameters---truck), [Treno](./train-routing.md). |
| *Routing diretto al punto* | Utilizza anche mappe offline e fornisce un routing in linea retta (o navigazione *punto a punto*). | Tipi di navigazione: *[Linea retta](./straight-line-routing.md)*, *[Diretto al punto](./direct-to-point-routing.md)*. |
| [*BRouter* *(offline)*](./brouter.md) | Routing offline fornito dall'app [BRouter](https://brouter.de/). | Disponibile **solo per Android**. La descrizione completa è disponibile [qui](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | Il routing online costruisce le risorse dei server online tramite la connessione Internet. | Disponibile **solo per Android**. È possibile configurare il [routing online](./online-routing.md) per costruire un percorso da vari motori di routing online come [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), GPX generico. |

- *[Routing auto (Camion, Moto)](./car-based-routing.md)* - OsmAnd fornisce indicazioni stradali per conducenti di auto, camion e motociclette.
- *[Routing bici (MTB)](./bicycle-based-routing.md)* - Il routing bici fornisce indicazioni di navigazione specifiche per ciclisti e appassionati di MTB. Può essere utilizzato anche dai conducenti di ciclomotori (scooter).
- *[Routing pedonale](./pedestrian-routing.md)* - può essere utilizzato non solo per passeggiare in città, ma anche durante le escursioni.
- *[Routing ciclomotore](./moped-routing.md)* - si basa sul routing bici, anche se ha le sue caratteristiche.
- *[Routing trasporto pubblico](./public-transport-navigation.md)* - può aiutarti mentre viaggi in città.
- *[Routing a cavallo](./horse-routing.md)* - fornisce agli equestri gli strumenti necessari per pianificare e godere delle loro attività di equitazione.
- *[Routing sci](./ski-routing.md)* - consente agli utenti di pianificare e navigare tour sciistici e altre attività sportive invernali utilizzando l'app mobile OsmAnd.
- *[Routing treno](./train-routing.md)* - offre l'opportunità di utilizzare i binari ferroviari per la navigazione.
- *[Routing barca](./boat-navigation.md)* - può essere utilizzato per costruire un percorso su fiumi, canali, piccoli laghi e in mare aperto, ma solo quando le vie navigabili sono contrassegnate in OpenStreetMap.
- *[Routing in linea retta](./straight-line-routing.md)* - fornisce un routing in linea retta (o navigazione "punto a punto") che viene ricalcolato quando la tua posizione cambia.
- *[Routing diretto al punto](./direct-to-point-routing.md)* - fornisce un routing in linea retta (o navigazione "punto a punto") che rimane stabile per tutta la navigazione, a differenza del routing in **linea retta** (il ricalcolo del percorso è disabilitato).


## Personalizzare il routing offline {#customize-offline-routing}

È possibile anche creare il proprio **file routing.xml** o modificare il file **routing.xml** predefinito e utilizzarlo per la navigazione (solo per utenti OsmAnd avanzati).

- Copiare il file [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) sul proprio dispositivo. Leggere attentamente le [informazioni di aiuto](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25). Come esempio, visualizzare il file [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) dell'utente OsmAnd.
- Dopo aver apportato le modifiche, il nuovo file *routing.xml* può essere aggiunto a OsmAnd toccandolo e selezionando di aprirlo nell'app OsmAnd.
- Selezionare il [tipo di navigazione](../../navigation/guidance/navigation-settings.md#navigation-type) modificato per il proprio profilo.

Maggiori informazioni su questa funzionalità sono disponibili nella [*documentazione tecnica*](../../../technical/osmand-file-formats/osmand-routing-xml.md) e sulla [*pagina GitHub di OsmAnd*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## Evita strade specifiche {#avoid-specific-roads}

:::caution
La funzione "Evita strade" è globale e influisce su tutti i **[Tipi di routing](#routing-types)** ad eccezione del *[routing online](../routing/online-routing.md)* e di *[BRouter](../routing/brouter.md)*.
:::

Ci sono due modi possibili per scegliere quali strade evitare durante il calcolo di un percorso:

- Selezionare il tipo di strada nella sezione [Parametri del percorso](../guidance/navigation-settings.md#route-parameters) delle [Impostazioni di navigazione](../guidance/navigation-settings.md). La descrizione di questa impostazione è fornita negli articoli sulle impostazioni dei [Tipi di routing](#routing-types). Ad esempio, vedere la descrizione del tipo di routing [Auto / Camion / Moto](../routing/car-based-routing.md#route-parameters---car).
- È inoltre possibile selezionare strade specifiche che non verranno utilizzate per il routing utilizzando l'opzione *[Evita strade](../../map/map-context-menu.md#avoid-road)* tramite il *menu contestuale della mappa* o utilizzando il *[menu Evita strade](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- La strada deve essere contrassegnata al massimo zoom, poiché OsmAnd potrebbe interpretare erroneamente il tocco e bloccare, ad esempio, il lato errato di una strada a due carreggiate o di un marciapiede.
- La funzione "Evita strade specifiche" funziona in modo errato con l'opzione [Navigazione per traccia](../setup/gpx-navigation.md) e non influisce sulla navigazione semplificata dei [Marcatori](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Menu Evita Strade {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *Pulsante Navigazione → Impostazioni → Evita strade...*

![Menu Evita strade Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *Pulsante Navigazione → Impostazioni → Evita strade*

![Menu Evita strade iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

In questo menu, è possibile annullare la selezione precedente della strada da evitare. Per farlo, toccare una croce (Android) o un **"-"** rosso di fronte alla strada che si intende utilizzare per il calcolo del percorso.

Utilizzando l'opzione *Seleziona sulla mappa* è possibile continuare a contrassegnare le strade come non valide per il routing sulla mappa di OsmAnd.

Quando si seleziona una strada da evitare utilizzando il *menu contestuale della mappa* o il *menu Evita strade*, l'elenco delle strade verrà visualizzato sopra la schermata della mappa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Elenco Evita strade sulla mappa Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Evita strada sul percorso iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Esporta / Importa {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Evita strada sulla mappa esporta Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Evita strada sulla mappa esporta Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Evita strada sulla mappa esporta iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Evita strada sulla mappa esporta iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

A seconda delle impostazioni del dispositivo e delle applicazioni disponibili, l'intero elenco di strade da evitare o solo una di esse può essere [esportato](../../personal/import-export.md#export) come file `.osf` in diverse posizioni. Selezionare le strade che si desidera esportare nell'elenco suggerito.

È possibile [importare](../../personal/import-export.md#import) strade da evitare durante il calcolo del percorso da altre fonti in formato file `.osf`. Inoltre, è possibile farlo utilizzando l'opzione *Importa* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). È possibile scegliere di importare tutti i dati o solo alcune strade da evitare (contrassegnando una strada con un segno di spunta nell'elenco).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Evita strada sulla mappa importa Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Evita strada sulla mappa importa iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
Il modo più conveniente per sincronizzare le strade da evitare tra i tuoi dispositivi è utilizzare [OsmAnd Cloud](../../personal/osmand-cloud.md) (richiede un abbonamento Pro).
:::


## Considera le limitazioni temporanee {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

L'opzione *Considera limitazioni temporanee* consente di tenere conto delle restrizioni stradali temporanee durante il calcolo dei percorsi. Queste possono includere cose come lavori stradali o chiusure stradali per qualche motivo (un incidente, riparazioni stradali, disastri naturali). L'attivazione di questa opzione può aiutarti a evitare deviazioni o ritardi inaspettati. Si prega di notare che a volte queste informazioni potrebbero essere obsolete.
In OpenStreetMap, queste informazioni sono solitamente contrassegnate con il tag [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).


## Sezione Sviluppo {#development-section}

La **sezione Sviluppo** delle impostazioni dei *Parametri del percorso* (*Menu → Impostazioni → profilo app → Impostazioni di navigazione → Parametri del percorso → Sviluppo*) è visibile solo quando il [plugin di sviluppo di OsmAnd](../../plugins/development.md) è abilitato. Include impostazioni come *Tipo di routing (Android) / Algoritmo di routing (iOS), Approssimazione GPX (solo Android), Autozoom e dati OsmAnd Live (solo Android)*. Leggi l'articolo [Impostazioni di navigazione](../../navigation/guidance/navigation-settings.md#development-settings) per una descrizione dettagliata.


> *Ultimo aggiornamento: Luglio 2024*