---
source-hash: c9cc4966613ed52d676e5a31b688413d05a80561124ece1be768467357788ff3
sidebar_position: 4
title:  Percorso pedonale
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Panoramica {#overview}

Il percorso pedonale si riferisce al processo di ricerca del percorso migliore per un pedone per spostarsi da un luogo all'altro, tenendo conto di fattori quali aree pedonali, marciapiedi, attraversamenti pedonali e incroci adatti ai pedoni. Può anche considerare altri fattori come le *scale*, che possono essere utili per l'accessibilità in sedia a rotelle. OsmAnd utilizza sempre i dati di elevazione quando calcola il tempo stimato di arrivo (tempo per coprire la distanza) secondo la [regola di Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Per configurare il *percorso pedonale* vai alla sezione [Parametri del percorso](../guidance/navigation-settings#route-parameters) delle impostazioni di navigazione.
  
### Parametri del percorso - A piedi {#route-parameters---walking}

Il percorso pedonale può essere utile non solo nelle aree urbane, dove i pedoni possono incontrare vari ostacoli quando cercano di spostarsi da un luogo all'altro. Puoi anche utilizzare questo tipo di percorso mentre fai jogging, escursioni e nordic walking fuori città o in montagna. Basta regolare i parametri di percorso in base alle tue esigenze.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Impostazioni percorso pedonale Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni percorso pedonale iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleziona le strade che vuoi evitare durante la navigazione. Puoi [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere i tipi di strada dall'elenco.  </summary>![Evita strade Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto acquatico, che trasporta veicoli attraverso corpi d'acqua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Puoi scegliere quale tipo di superficie preferire quando costruisci un percorso. </summary> ![Elevazione pedonale Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | Puoi scegliere tra due opzioni:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Questi percorsi si trovano tipicamente in ambienti naturali come foreste, montagne e parchi. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Questo sistema di indicatori di superficie a terra testurizzata può essere installato su sentieri, scale e piattaforme di trasporto pubblico per aiutare i pedoni ciechi o ipovedenti a muoversi. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Le restrizioni di accesso privato verranno ignorate durante il calcolo del percorso.  | Il tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* viene utilizzato in OSM per descrivere le restrizioni sull'uso di autostrade e altre vie di trasporto, nonché edifici, ingressi, servizi e entità ricreative.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> I dati di elevazione verranno utilizzati nel calcolo del percorso: verranno impostate [penalità](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) per le strade che differiscono dal tipo selezionato. </summary> ![Usa dati di elevazione Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Questa preferenza può aiutare a evitare salite ripide o, al contrario, a preferirle. L'utilizzo di questa opzione può essere molto utile nel percorso pedonale. Senza dati di elevazione verrà calcolato il percorso più veloce come su terreno pianeggiante. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| I percorsi *Via ferrata* verranno utilizzati per il routing quando questa opzione è abilitata insieme a *Usa dati di elevazione*.  | La [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) è un percorso di montagna attrezzato con cavi fissi, pioli, scale e ponti. |


## Altre impostazioni di percorso {#other-routing-settings}

- L'algoritmo di routing può anche considerare limitazioni temporanee specificate in OpenStreetMap. Questo può essere fatto utilizzando l'opzione *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Si noti che in alcuni casi, le informazioni da OSM possono essere obsolete.  

- Nella sezione [*Ricalcola percorso*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri del percorso*, è possibile abilitare e regolare le opzioni di ricalcolo del percorso.

- Nella sezione [*Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri del percorso*, è possibile provare nuove funzionalità di routing che sono attualmente in fase di test. Si noti che queste impostazioni sono disponibili solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri del percorso* (per *Android*, in *Parametri del veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Questa impostazione viene utilizzata su strade sconosciute senza limiti di velocità. Questo è il caso più comune quando si naviga su una traccia o un percorso online. Deve essere impostata in base ai parametri del proprio veicolo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La corretta configurazione delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, oltre a calcolare il tempo di percorrenza.

> *Ultimo aggiornamento: giugno 2024*