---
source-hash: 627c2c21830d1233dba44cacd666d91b7c9653f1681b66a17ad59c7b8df6029b
sidebar_position: 4
title:  Navigazione pedonale
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

La navigazione pedonale si riferisce al processo di ricerca del percorso migliore per un pedone per spostarsi da un luogo all'altro, tenendo conto di fattori come le aree esclusivamente pedonali, i marciapiedi, gli attraversamenti pedonali e gli incroci a misura di pedone. Può anche considerare altri fattori come le *scale*, che possono essere utili per l'accessibilità delle sedie a rotelle. OsmAnd utilizza sempre i dati di elevazione per calcolare l'orario di arrivo previsto (tempo per coprire la distanza) secondo la [regola di Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Per configurare la *Navigazione pedonale*, andare alla sezione [Parametri percorso](../guidance/navigation-settings#route-parameters) delle impostazioni di Navigazione.
  
### Parametri percorso - A piedi {#route-parameters---walking}

La navigazione pedonale può essere utile non solo nelle aree urbane, dove i pedoni possono incontrare vari ostacoli nel tentativo di spostarsi da un luogo all'altro. È inoltre possibile utilizzare questo tipo di navigazione per fare jogging, escursioni e nordic walking fuori città o in montagna. È sufficiente regolare i parametri di navigazione in base alle proprie esigenze.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Impostazioni di navigazione pedonale Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione pedonale iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selezionare le strade che si desidera evitare durante la navigazione. È possibile [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere i tipi di strada dall'elenco.  </summary>![Evita strade Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto via acqua, che trasporta veicoli attraverso specchi d'acqua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> È possibile scegliere quale tipo di superficie preferire per la costruzione di un percorso. </summary> ![Elevazione pedonale Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | È possibile scegliere tra due opzioni:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Questi percorsi si trovano tipicamente in ambienti naturali come foreste, montagne e parchi. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Questo sistema di indicatori di superficie a rilievo può essere installato su sentieri, scale e piattaforme di trasporto pubblico per aiutare i pedoni non vedenti o ipovedenti a muoversi. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Le restrizioni di accesso privato saranno ignorate durante il calcolo del percorso.  | Il tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* è usato in OSM per descrivere le restrizioni sull'uso di autostrade e altre vie di trasporto, così come edifici, ingressi, servizi ed entità per il tempo libero.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> I dati di elevazione saranno utilizzati nel calcolo del percorso: verranno impostate delle [penalità](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) per le strade che si discostano dal tipo selezionato. </summary> ![Usa dati di elevazione Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Questa preferenza può aiutare a evitare colline ripide o, viceversa, a preferirle. L'uso di questa opzione può essere molto utile nella navigazione pedonale. Senza i dati di elevazione, verrà calcolato il percorso più veloce come su un terreno pianeggiante. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| I percorsi di *Via ferrata* saranno utilizzati per la navigazione quando questa opzione è abilitata insieme a *Usa dati di elevazione*.  | La [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) è un percorso di montagna attrezzato con cavi fissi, gradini, scale e ponti. |