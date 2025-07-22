---
source-hash: 840895be86a2bc170c5cc62b0abac17afda6a3dcd33c15c2d2b335a1a52fa27e
sidebar_position: 3
title: Naviga per indicatori
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

Gli [indicatori della mappa](../../personal/markers.md) sono punti sulla mappa contrassegnati da bandierine. Possono essere utilizzati per una varietà di scopi, ad esempio per indicare una posizione che si desidera visitare, un punto di interesse che si desidera ricordare o per creare un percorso personalizzato.

Possono essere particolarmente utili per escursionisti, ciclisti o chiunque esplori una nuova area che desideri contrassegnare posizioni interessanti o punti di riferimento sulla mappa. La differenza principale rispetto ai [punti preferiti](../../personal/favorites.md) è che gli indicatori sono più veloci da creare in quanto non richiedono un nome.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Indicatore di navigazione Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Indicatore di navigazione iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Utilizzare gli indicatori nella navigazione {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Differenza navigazione indicatori Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Differenza navigazione indicatori Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Differenza navigazione indicatori iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Differenza navigazione indicatori iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

Gli *indicatori della mappa* possono fungere da [destinazioni](./route-navigation#set-destinations) durante la creazione di un percorso. Sono particolarmente utili quando è necessario impostare un percorso con punti intermedi.

Tuttavia, gli *indicatori della mappa* offrono anche varie funzionalità come [widget](../../widgets/markers.md), direzione dei movimenti, linee sulla mappa, in modo da poter utilizzare questi strumenti per la navigazione senza costruire una linea di percorso e avviare la navigazione con guida vocale completa.

Nel caso in cui sia necessaria una semplice navigazione punto-punto visualizzata come linee rette, è possibile costruire e ordinare un ***elenco di itinerari*** composto da indicatori come punti intermedi e utilizzare i widget per una navigazione semplice.


#### Raccomandazioni {#recommendations}

Ecco semplici passaggi consigliati per *navigare per indicatori*:

1. Creare indicatori. Trovare l'oggetto(i) desiderato(i) sulla mappa, toccarlo e scegliere il *[pulsante Indicatore](../../personal/markers.md#add--edit-markers)* nel *[menu contestuale della mappa](../../map/map-context-menu.md#add--edit-marker)*. È anche possibile creare indicatori da [preferiti](#add-group-of-favorite) o [tracce GPX](#add-group-of-track-waypoints).
2. [*Ordinare gli indicatori*](#sort-markers) nel modo preferito in cui si desidera passarli.
3. Personalizzare la *visualizzazione degli indicatori della mappa* se si desidera utilizzare gli indicatori senza avviare la navigazione. Abilitare le opzioni **Frecce sulla mappa** e **Linea di direzione** nella sezione *[Aspetto](../../personal/markers.md#appearance-on-the-map)* del *[menu Indicatori della mappa](../../personal/markers.md#actions)*.
4. Aggiungere *[widget Indicatori](../../personal/markers.md#markers)* nel *[menu Configura schermo](../../widgets/configure-screen.md)* (opzionale).
5. [*Contrassegnare come passati*](#pass-markers) gli indicatori già visitati o ripristinarli dalla cronologia se si desidera ripassarli.

:::note
Quando le opzioni **Frecce sulla mappa** e **Linea di direzione** sono abilitate nella sezione *Aspetto* del [menu Indicatori della mappa](../../personal/markers.md#appearance-on-the-map), si vedrà una freccia o una linea tratteggiata sulla mappa. La freccia mostra la direzione verso l'indicatore attivo quando si trova al di fuori della schermata corrente della mappa. La linea di direzione viene tracciata quando la propria geolocalizzazione e l'indicatore si trovano entrambi sulla stessa schermata.
:::


## Elenco itinerari {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Elenco indicatori Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Elenco indicatori iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


L'elenco itinerari rappresenta un elenco ordinato di indicatori *passabili* visibili sulla mappa. È possibile aggiungere ed eliminare punti uno per uno o farlo in blocco utilizzando un [file GPX](#add-group-of-track-waypoints) o un [gruppo di preferiti](#add-group-of-favorite) preparati in anticipo. Per competizioni locali o avventure potrebbe essere utile creare un elenco di punti da coordinate utilizzando lo [strumento di inserimento coordinate](../../plan-route/coordinate-input.md).


### Aggiungere singoli indicatori {#add-single-markers}

Gli *indicatori* possono essere aggiunti o eliminati dalla mappa toccando una sola volta lo schermo nella posizione desiderata. Quindi è necessario seguire le istruzioni dell'articolo *[menu contestuale della mappa](../../map/map-context-menu.md#add--edit-marker)*.


### Aggiungere gruppo di preferiti {#add-group-of-favorite}

<InfoAndroidOnly />

![Preferiti a indicatori 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Preferiti a indicatori 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

È possibile creare *indicatori della mappa* da *[Preferiti](../../personal/favorites.md)* utilizzando:

- *[Menu gruppi preferiti](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→I miei preferiti)*.
- Icona &#128681; nel menu interno dei preferiti *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→I miei preferiti→&#128681;)*.
- Opzione **'+'** (aggiungi) nella *[scheda Gruppi](../../personal/markers.md#marker-groups)* nel menu Indicatori della mappa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Aggiungere gruppo di waypoint di traccia {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX a indicatori 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Le tracce GPX con waypoint possono essere utilizzate come *indicatori della mappa* e rapidamente disattivate:

- Utilizzare l'opzione **'+'** (aggiungi) nella *[scheda Gruppi](../../personal/markers.md#marker-groups)* nel menu Indicatori della mappa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Attivare l'interruttore vicino alla traccia nella *[scheda Gruppi](../../personal/markers.md#marker-groups)* nel menu Indicatori della mappa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Solo le tracce con waypoint possono essere aggiunte all'*elenco indicatori della mappa*. La traccia che si intende aggiungere deve essere anche visibile (attiva) sulla mappa.
:::

![GPX a indicatori 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX a indicatori 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- È anche possibile creare *indicatori* da una traccia con waypoint utilizzando il *[menu contestuale della traccia](../../map/tracks/track-context-menu.md#points--waypoints)*: *Toccare una traccia visibile sulla mappa → nel menu contestuale della traccia scegliere Punti → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Ordina indicatori {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ordina indicatori in un elenco Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ordina indicatori in un elenco iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Premendo sull'angolo sinistro (*Android*) o sull'angolo destro (*iOS*) di una scheda *indicatore della mappa* nell'*[elenco indicatori della mappa](../../personal/markers.md#itinerary-list)* e spostandola su o giù, è possibile modificarne l'ordine nell'*elenco di navigazione* (mentre si sposta una scheda indicatore si vedrà una linea che indica dove verrà posizionato l'indicatore).

Nella versione Android dell'app OsmAnd, ci sono altre opzioni di ordinamento per gli *indicatori della mappa* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Ordina per* o *Pianifica un percorso*).


### Ordina per attributi {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ordinamento alternativo indicatori Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Ordinamento alternativo indicatori Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

È possibile ordinare gli *indicatori* per:

- **Nome** (*alfabeticamente*) — Se gli indicatori hanno nomi descrittivi, questo può essere un modo utile per trovare rapidamente l'indicatore che si sta cercando.
- **Distanza** (*più vicino o più lontano per primo*) - Questa opzione ordinerà gli indicatori per la loro distanza dalla posizione corrente.
- **Data** (*recentemente o molto tempo fa*) - Questo ordinerà gli indicatori per la data in cui sono stati aggiunti. Se sono stati aggiunti molti indicatori nel tempo, questo può essere un modo utile per vedere quali sono i più recenti.


### Riordina con lo strumento Pianifica percorso {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Ordinamento alternativo indicatori Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Ordinamento alternativo indicatori Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Utilizzando la funzionalità dello strumento Pianifica un percorso nell'elenco indicatori è possibile ordinare gli *indicatori* *Porta a porta*, metterli in ordine inverso o creare un *Viaggio di andata e ritorno*. Se si tocca un'opzione *Navigazione*, gli *indicatori* verranno utilizzati come [destinazioni intermedie](../setup/route-navigation.md#intermediate-destinations).


## Passa indicatori {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Passa indicatore Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Passa indicatore Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Passa indicatore iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Passa indicatore iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Un *indicatore* può essere contrassegnato come passato (*Android*) o ignorato (*iOS*).

- Tramite il *[menu contestuale della mappa](../../map/map-context-menu.md#add--edit-marker)*.
- Quando ci si avvicina a un *indicatore* a una distanza inferiore a 40 metri (*Android*) o 50 metri (*iOS*), un interruttore nella barra dei *[widget indicatori](../../widgets/markers.md#top-bar-widget)* diventa attivo.

Dopo aver passato un *indicatore*, questo si sposta nella cartella [Cronologia](../../personal/markers.md#history), da dove può essere ripristinato se necessario. L'indicatore successivo nell'[elenco](#itinerary-list) diventa attivo. A seconda delle [impostazioni](#use-markers-in-navigation), si potrebbe essere guidati ad esso con una freccia o una linea tratteggiata.


## Articoli correlati {#related-articles}

- [Informazioni sugli indicatori della mappa](../../personal/markers.md).
- [Widget indicatore](../../widgets/markers.md).
__
- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](./route-navigation.md)
- [Dettagli del percorso](./route-details.md)
- [Navigazione per traccia](./gpx-navigation.md)
- [Impostazioni di navigazione](../guidance/navigation-settings.md)
- [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md)
- [Istruzioni vocali / Notifiche](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ultimo aggiornamento: giugno 2025*