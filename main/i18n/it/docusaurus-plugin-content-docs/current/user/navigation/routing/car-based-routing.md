---
source-hash: 918e5cde7ffddb7a99046ea161570b0112d11c17a7525a60f27a26db3726b779
sidebar_position: 2
title:  Percorso auto (Camion, Moto)
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

Il percorso basato sull'auto è progettato per aiutare i conducenti a navigare le strade in modo efficiente, sicuro e confortevole, fornendo indicazioni personalizzate adattate alle esigenze e preferenze uniche di ogni conducente. Impostazioni di percorso adeguate possono aiutare i conducenti a risparmiare tempo e carburante e a evitare pericoli sulla strada. Il percorso più veloce è offerto per impostazione predefinita.

:::info
Il meccanismo di percorso per i veicoli terrestri a motore differisce solo in alcune impostazioni. I parametri comuni sono descritti nella sezione [Auto](#route-parameters---car) di questo articolo. [Camion](#route-parameters---truck) e [Moto](#route-parameters---motorcycle) hanno le loro particolarità.
:::

Il percorso può essere configurato in base alle proprie esigenze nella sezione [Parametri del percorso](../../navigation/guidance/navigation-settings.md#route-parameters) delle impostazioni di navigazione del profilo corrispondente (*Guida, Camion, Moto*).


## Parametri del percorso - Auto {#route-parameters---car}

Il percorso auto è progettato per aiutare i conducenti a trovare i percorsi più efficienti e diretti verso le loro destinazioni. Tiene conto delle restrizioni comuni alla guida, come strade a senso unico, divieto di svolta, zone pedonali, e aiuta anche a evitare strade non adatte alle auto, come strade strette o strade con limitazioni di peso.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Impostazioni percorso auto Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Impostazioni percorso auto iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleziona le strade che vuoi evitare durante la navigazione. Puoi [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere i tipi di strada dall'elenco.  </summary>![Evita strade Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evita di attraversare un confine in un altro paese).</li><li>Evita [strade ghiacciate](https://wiki.openstreetmap.org/wiki/Key:ice_road) (strade stagionali nelle regioni fredde che sono poste su acqua ghiacciata) e [guadi](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parti di un'autostrada dove un corso d'acqua la attraversa). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto acquatico, che trasporta veicoli attraverso corpi d'acqua).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (treni che trasportano auto, che collegano due luoghi non facilmente accessibili tra loro su strada).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (adatto solo per veicoli 4WD).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Per il percorso auto si presume che la superficie delle strade sia [pavimentata](https://wiki.openstreetmap.org/wiki/Key:surface), salvo diversa indicazione. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Le restrizioni di accesso privato verranno ignorate durante il calcolo del percorso.  | Il tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* è usato in OSM per descrivere le restrizioni sull'uso di autostrade e altre vie di trasporto, così come edifici, ingressi, servizi e entità ricreative.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (solo&nbsp;auto) |  <details><summary> Le strade chiuse per la consegna merci verranno evitate. </summary>![Consegna merci Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Questa opzione si applica solo ai veicoli che trasportano merci, che pesano non più di 3,5 tonnellate. Se il peso del tuo veicolo è superiore a 3,5 tonnellate, dovresti usare il [profilo Camion](#route-parameters---truck).   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Per calcolare il percorso più efficiente in termini di carburante, il motore limita internamente la velocità a 60 km/h, ma non modifica il tempo stimato di arrivo. Quindi, nel caso di 2 percorsi uguali di partenza-arrivo, autostrada (120 km/h) e minore (60 km/h), verrà selezionato il percorso più breve. Per le strade di servizio con limite di velocità <60 km/h, verrà selezionato il percorso più veloce. |


## Parametri del percorso - Camion {#route-parameters---truck}

:::note
Per impostazione predefinita, il *profilo Camion* è disattivato. Per utilizzare questo profilo per il percorso, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Il percorso per camion è simile al percorso per auto, ma è progettato specificamente per i conducenti di veicoli commerciali di grandi dimensioni. Considera fattori aggiuntivi come [altezza, peso e larghezza del veicolo](../guidance/navigation-settings.md#size-parameters) e la possibilità di trasportare materiali pericolosi (vedi tabella sotto). Tutte le altre impostazioni di percorso sono identiche al [percorso auto](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Impostazioni percorso camion Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Impostazioni percorso camion iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (per **regione UE**) | <details><summary> Le autorità locali possono vietare il trasporto di materiali pericolosi su alcune strade o gallerie. </summary> ![Trasporto di materiali pericolosi Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Quando abilitato, il meccanismo di percorso per camion tiene conto del tag OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Puoi scegliere una delle cinque categorie (*A, B, C, D, E*) di materiali pericolosi secondo le **restrizioni UE**. |
| *<Translate android="true" ids="dangerous_goods"/>* (solo se è selezionata la **regione USA**) | <details><summary> Le regole di trasporto di materiali pericolosi negli USA differiscono da quelle dell'UE. Visualizzato solo se la Regione di Guida è impostata su USA. Puoi selezionare più classi. </summary> ![Trasporto di materiali pericolosi Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Seleziona uno dei tipi (da 1 a 9) di materiali pericolosi secondo le [**restrizioni USA**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Il trasporto di materiali pericolosi è vietato su alcune strade e gallerie. <ul><li>1. *Esplosivi* </li><li> 2. *Gas* </li><li> 3. *Liquidi infiammabili* </li><li> 4. *Solidi infiammabili* </li><li> 5. *Agenti ossidanti e perossidi organici* </li><li> 6. *Sostanze tossiche e infettive* </li><li> 7. *Sostanze radioattive* </li><li> 8. *Sostanze corrosive* </li><li> 9. *Varie* </li></ul> |


## Parametri del percorso - Moto {#route-parameters---motorcycle}

:::note
Per impostazione predefinita, il *profilo Moto* è disattivato. Per utilizzare questo profilo per il percorso, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Il percorso per moto è il processo di creazione di un percorso specificamente ottimizzato per i viaggi in moto. Questo tipo di percorso tiene conto delle esigenze e preferenze uniche dei motociclisti, fornendo le migliori condizioni di guida possibili. I percorsi sono tracciati tenendo conto di una serie di parametri come la scelta del tipo di superficie stradale (ad esempio, le cattive condizioni stradali possono essere preferite o evitate), l'evitamento degli ingorghi, l'accessibilità delle infrastrutture o la sicurezza.


## Altre impostazioni di percorso {#other-routing-settings}

- L'algoritmo di percorso può anche considerare limitazioni temporanee specificate in OpenStreetMap. Questo può essere fatto usando l'opzione *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Si noti che in alcuni casi, le informazioni da OSM possono essere obsolete.

- Nella sezione [*Ricalcola percorso*](../../navigation/guidance/navigation-settings.md#recalculate-route) dei *Parametri del percorso*, è possibile abilitare e regolare le opzioni di ricalcolo del percorso.

- Nella sezione [*Sviluppo*](../guidance/navigation-settings.md#development-settings) dei *Parametri del percorso*, è possibile provare nuove funzionalità di percorso che sono attualmente in fase di test. Si noti che queste impostazioni sono disponibili solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato.

- L'impostazione *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* nella versione *iOS* di OsmAnd si trova in *Impostazioni di navigazione → Parametri del percorso* (per *Android*, in *Parametri del veicolo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Questa impostazione viene utilizzata su strade sconosciute senza limiti di velocità. Questo è il caso più comune quando si naviga un percorso o un percorso online. Deve essere impostata in base ai parametri del proprio veicolo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La corretta configurazione delle impostazioni ti aiuterà a evitare problemi durante la creazione di un percorso. Puoi selezionare il percorso più appropriato a seconda del tipo di veicolo e delle restrizioni stradali, oltre a calcolare il tempo di percorrenza.

> *Ultimo aggiornamento: Luglio 2024*