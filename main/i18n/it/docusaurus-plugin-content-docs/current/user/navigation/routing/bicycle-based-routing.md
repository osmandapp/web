---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
sidebar_position: 3
title:  Navigazione per bicicletta (MTB)
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

La navigazione per bicicletta considera fattori come la disponibilità di piste ciclabili, sentieri e strade sicure e legali per i ciclisti. OsmAnd utilizza sempre i dati di elevazione per calcolare il tempo stimato di arrivo (tempo per coprire la distanza) secondo la [regola di Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Per impostazione predefinita, viene fornito il percorso più veloce.  
La navigazione per bicicletta può essere utile anche per la [mountain bike](#mtb-routing-particularities).  

È possibile configurare la *Navigazione per bicicletta* nella sezione [Parametri del percorso](../guidance/navigation-settings#route-parameters) delle impostazioni di Navigazione.


## Parametri del percorso - Bicicletta {#route-parameters---bicycle}

Le funzioni di navigazione per bicicletta di OsmAnd consentono ai ciclisti di inserire un punto di partenza e uno di arrivo, e quindi di generare un percorso che tenga conto delle loro preferenze e della geografia locale.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Impostazioni di navigazione per bicicletta](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione per bicicletta iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)  

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  |  Il meccanismo di calcolo del percorso sceglierà strade più dirette e, di conseguenza, più veloci.  | Nonostante l'aumento della velocità di spostamento, aumenta contemporaneamente anche la distanza percorsa. Ciò comporta un aumento dello sforzo muscolare. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Stile&nbsp;di&nbsp;guida* (iOS) | <details><summary> È possibile scegliere il proprio stile di guida per un migliore calcolo del percorso. </summary> ![Stile di guida ciclismo Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (verranno preferite strade meno trafficate con i tag [secondarie](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) e [residenziali](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Preferisci [strade non asfaltate](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li>  *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (questa opzione è una via di mezzo tra *preferisci strade secondarie* e *percorso più breve*) </li><li>  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (per il calcolo del percorso verranno preferite strade più larghe e solitamente più trafficate, che offrono percorsi più veloci) </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleziona le strade che vuoi evitare durante la navigazione.  </summary>![Evita strade Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | È possibile [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere uno o più tipi di strada dall'elenco:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evita di attraversare il confine con un altro paese)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto via acqua, che trasporta veicoli attraverso specchi d'acqua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Evita pavé](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parti di un'autostrada dove un corso d'acqua la attraversa) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [No sanpietrini](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Le restrizioni di accesso privato verranno ignorate durante il calcolo del percorso.  | Il tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* è usato in OSM per descrivere le restrizioni sull'uso di autostrade e altre vie di trasporto, così come edifici, ingressi, servizi ed entità ricreative.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Terreno&nbsp;preferito* (iOS) | <details><summary> I dati di elevazione verranno utilizzati nel calcolo del percorso: verranno impostate [penalità per le strade](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) con un altro profilo di elevazione. </summary> ![Usa dati di elevazione Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Questa preferenza può aiutare a evitare colline ripide o, viceversa, a preferirle. Se si sceglie un percorso *collinare*, verrà data preferenza a colline e montagne. Se *pianeggiante* - alle pianure, le colline saranno evitate. La preferenza meno collinare è una via di mezzo tra queste due opzioni. Senza dati di elevazione, verrà calcolato il percorso più veloce come su terreno pianeggiante. |


## Particolarità della navigazione MTB {#mtb-routing-particularities}

Il meccanismo di navigazione MTB (mountain bike) è lo stesso della navigazione per bicicletta. Si noti che ci sono alcune penalità per l'utilizzo dei [percorsi MTB](../../map/vector-maps.md#routes), e quindi è meno probabile che vengano proposti per andare in bicicletta a casa o al lavoro.