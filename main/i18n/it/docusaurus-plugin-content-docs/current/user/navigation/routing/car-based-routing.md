---
source-hash: c8f39d23c520f3d8eb8713729cf8047052d90c32210529157c5a7347608706bb
sidebar_position: 2
title:  Navigazione auto (Camion, Moto)
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

La navigazione basata sull'auto è progettata per aiutare i conducenti a percorrere le strade in modo efficiente, sicuro e confortevole, fornendo indicazioni personalizzate e adatte alle esigenze e preferenze uniche di ogni conducente. Impostazioni di navigazione corrette possono aiutare i conducenti a risparmiare tempo e carburante, e a evitare pericoli sulla strada. La navigazione più veloce è offerta per impostazione predefinita.

:::info
Il meccanismo di navigazione per i veicoli a motore terrestri differisce solo per alcune impostazioni. I parametri comuni sono descritti nella sezione [Auto](#route-parameters---car) di questo articolo. [Camion](#route-parameters---truck) e [Moto](#route-parameters---motorcycle) hanno le loro particolarità.
:::

La navigazione può essere configurata in base alle proprie esigenze nella sezione [Parametri del percorso](../../navigation/guidance/navigation-settings.md#route-parameters) delle Impostazioni di navigazione del profilo corrispondente (*Guida, Camion, Moto*).

## Parametri del percorso - Auto {#route-parameters---car}

La navigazione per auto è progettata per aiutare i conducenti a trovare i percorsi più efficienti e diretti verso le loro destinazioni. Tiene conto delle comuni restrizioni alla guida, come strade a senso unico, divieti di svolta, zone pedonali, e aiuta anche a evitare strade non adatte alle auto, come strade strette o strade con limiti di peso.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Impostazioni di navigazione auto Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Impostazioni di navigazione auto iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selezionare le strade che si desidera evitare durante la navigazione. È possibile [selezionare una strada sulla mappa](../../map/map-context-menu/#avoid-road) o scegliere i tipi di strada dall'elenco.  </summary>![Evita strade Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evita di attraversare un confine verso un altro paese).</li><li>Evita [strade di ghiaccio](https://wiki.openstreetmap.org/wiki/Key:ice_road) (strade stagionali in regioni fredde che vengono tracciate su acqua ghiacciata) e [guadi](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parti di un'autostrada dove un corso d'acqua la attraversa). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo di trasporto acquatico, che trasporta veicoli attraverso specchi d'acqua).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (treni navetta per auto, che collegano due luoghi non facilmente accessibili tra loro su strada).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (adatto solo a veicoli 4WD).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Per la navigazione in auto si presume che la superficie delle strade sia [asfaltata](https://wiki.openstreetmap.org/wiki/Key:surface), se non diversamente specificato. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Le restrizioni di accesso privato verranno ignorate durante il calcolo del percorso.  | Il tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* è usato in OSM per descrivere le restrizioni sull'uso di autostrade e altre vie di trasporto, così come di edifici, ingressi, servizi ed entità ricreative.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (solo&nbsp;auto) |  <details><summary> Le strade chiuse alla consegna di merci saranno evitate. </summary>![Consegna merci Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Questa opzione si applica solo ai veicoli che trasportano merci, con un peso non superiore a 3,5 tonnellate. Se il peso del veicolo è superiore a 3,5 tonnellate, è necessario utilizzare il [profilo Camion](#route-parameters---truck).   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Per calcolare un percorso efficiente dal punto di vista del consumo di carburante, il motore di navigazione limita internamente la velocità a 60 km/h, senza però modificare il tempo stimato di arrivo. Quindi, nel caso di 2 percorsi identici per partenza e arrivo: autostrada (120 km/h) e strada secondaria (60 km/h) - verrà selezionato il percorso più breve. Per le strade di servizio che hanno un limite di velocità < 60 km/h, verrà selezionato il percorso più veloce. |

## Parametri del percorso - Camion {#route-parameters---truck}

:::note
Per impostazione predefinita, il *profilo Camion* è disattivato. Per utilizzare questo profilo per la navigazione, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

La navigazione per camion è simile a quella per auto, ma è progettata specificamente per i conducenti di grandi veicoli commerciali. Considera fattori aggiuntivi come le restrizioni di [altezza, peso e larghezza del veicolo](../guidance/vehicle-parameters.md#size-parameters) e la possibilità di trasportare materiali pericolosi (controllare la tabella sottostante). Tutte le altre impostazioni di navigazione sono identiche a quelle della [navigazione per auto](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Impostazioni di navigazione camion Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Impostazioni di navigazione camion iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (per la **regione UE**) | <details><summary> Le autorità locali possono vietare il trasporto di materiali pericolosi su alcune strade o gallerie. </summary> ![Trasporto di materiali pericolosi Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Quando abilitato, il meccanismo di navigazione per camion tiene conto del tag OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. È possibile scegliere una delle cinque categorie (*A, B, C, D, E*) di materiali pericolosi secondo le **restrizioni UE**. |
| *<Translate android="true" ids="dangerous_goods"/>* (solo se è selezionata la **regione USA**) | <details><summary> Le regole per il trasporto di materiali pericolosi negli Stati Uniti differiscono da quelle dell'UE. Visualizzato solo se la Regione di guida è impostata su US. È possibile selezionare più classi. </summary> ![Trasporto di materiali pericolosi Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Selezionare uno dei tipi (da 1 a 9) di materiali pericolosi secondo le [**restrizioni USA**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Il trasporto di materiali pericolosi è vietato su alcune strade e gallerie. <ul><li>1. *Esplosivi* </li><li> 2. *Gas* </li><li> 3. *Liquidi infiammabili* </li><li> 4. *Solidi infiammabili* </li><li> 5. *Agenti ossidanti e perossidi organici* </li><li> 6. *Sostanze tossiche e infettive* </li><li> 7. *Sostanze radioattive* </li><li> 8. *Sostanze corrosive* </li><li> 9. *Varie* </li></ul> |

## Parametri del percorso - Moto {#route-parameters---motorcycle}

:::note
Per impostazione predefinita, il *profilo Moto* è disattivato. Per utilizzare questo profilo per la navigazione, è necessario attivarlo in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

La navigazione per moto è il processo di creazione di un percorso specificamente ottimizzato per i viaggi in moto. Questo tipo di navigazione tiene conto delle esigenze e delle preferenze uniche dei motociclisti, fornendo le migliori condizioni di guida possibili. I percorsi sono tracciati tenendo conto di una serie di parametri come la scelta del fondo stradale (ad esempio, le cattive condizioni stradali possono essere preferite o evitate), l'evitamento degli ingorghi, l'accessibilità delle infrastrutture o la sicurezza.