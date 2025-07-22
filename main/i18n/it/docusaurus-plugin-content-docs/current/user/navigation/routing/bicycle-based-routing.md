---
source-hash: 11ccd7dd12c26392daa1886c0a0736ecbb759c2d6277a6807c7a313134cd6080
sidebar_position: 3
title:  Percorso in bicicletta (MTB)
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

Il percorso in bicicletta considera fattori come la disponibilità di piste ciclabili, sentieri e strade sicure e legali per i ciclisti. OsmAnd utilizza sempre i dati di elevazione quando calcola l'orario di arrivo stimato (tempo per coprire la distanza) secondo la [regola di Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Per impostazione predefinita viene fornito il percorso più veloce.
Il percorso in bicicletta può essere utile anche per la [mountain bike](#mtb-routing-particularities).

Puoi configurare il *Percorso in bicicletta* nella sezione [Parametri del percorso](../guidance/navigation-settings#route-parameters) delle impostazioni di navigazione.


## Parametri del percorso - Bicicletta {#route-parameters---bicycle}

Le funzionalità di percorso in bicicletta di OsmAnd consentono ai ciclisti di inserire un punto di partenza e di arrivo e quindi generare un percorso che tenga conto delle loro preferenze e della geografia locale.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni percorso in bicicletta](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni percorso in bicicletta iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | Il meccanismo di percorso sceglierà strade più dirette e, di conseguenza, più veloci. | Nonostante l'aumento della velocità di movimento, la distanza percorsa aumenta contemporaneamente. Ciò comporta un aumento dello sforzo muscolare. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Stile&nbsp;di&nbsp;guida* (iOS) | <details><summary> Puoi scegliere il tuo stile di guida per un percorso migliore. </summary> ![Stile di guida in bicicletta Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (saranno preferite strade meno trafficate con i tag [secondario](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) e [residenziale](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Preferisci [strade non asfaltate](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (questa opzione è una via di mezzo tra *preferisci strade secondarie* e *percorso più breve*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (per il percorso saranno preferite strade più larghe e solitamente più trafficate, che offrono percorsi più veloci) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Seleziona le strade che vuoi evitare durante la navigazione. </summary>![Evita strade Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | Puoi [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere il tipo di strada(e) dall'elenco: <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evita di attraversare un confine in un altro paese)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto acquatico, che trasporta veicoli attraverso specchi d'acqua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Evita ciottolato](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parti di un'autostrada dove un corso d'acqua la attraversa) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [No selciato](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Le restrizioni di accesso privato verranno ignorate durante il calcolo del percorso. | Il tag *[privato](https://wiki.openstreetmap.org/wiki/Key:access)* viene utilizzato in OSM per descrivere le restrizioni sull'uso di autostrade e altre vie di trasporto, nonché edifici, ingressi, servizi e strutture ricreative. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Terreno&nbsp;preferito* (iOS) | <details><summary> I dati di elevazione verranno utilizzati nel calcolo del percorso: verranno impostate [penalità per le strade](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) con un altro profilo di elevazione. </summary> ![Usa dati di elevazione Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Questa preferenza può aiutare a evitare salite ripide o viceversa, a preferirle. Se scegli un percorso *collinare*, verrà data preferenza a colline e montagne. Se *pianeggiante* - a pianure, le colline saranno evitate. La preferenza meno collinare è una via di mezzo tra queste due opzioni. Senza dati di elevazione verrà calcolato il percorso più veloce come su terreno pianeggiante. |


## Particolarità del percorso MTB {#mtb-routing-particularities}

Il meccanismo di percorso MTB (mountain bike) è lo stesso del percorso in bicicletta. Si noti che ci sono alcune penalità per l'utilizzo di [percorsi MTB](../../map/vector-maps.md#routes), e quindi è meno probabile che vengano offerti per andare in bicicletta a casa o al lavoro.


## Altre impostazioni di percorso {#other-routing-settings}

- L'algoritmo di percorso può anche considerare limitazioni temporanee specificate in OpenStreetMap. Ciò può essere fatto utilizzando l'opzione *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Si noti che in alcuni casi, le informazioni da OSM possono essere obsolete.

- Nella sezione [*Ricalcola percorso*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri del percorso*, è possibile abilitare e regolare le opzioni di ricalcolo del percorso.

- Nella sezione [*Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri del percorso*, è possibile provare nuove funzionalità di percorso che sono attualmente in fase di test. Si noti che queste impostazioni sono disponibili solo quando il [plugin di sviluppo di OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri del percorso* (per *Android*, in *Parametri del veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Questa impostazione viene utilizzata su strade sconosciute senza limiti di velocità. Questo è il caso più frequente quando si naviga su una traccia o un percorso online. Deve essere impostata in base ai parametri del tuo veicolo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La corretta configurazione delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, nonché calcolare il tempo di viaggio.

> *Ultimo aggiornamento: Giugno 2024*