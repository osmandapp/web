---
source-hash: f1b6ce88c16188825c1c750fdab6393efc13e796dac9b76318385c1908db3134
sidebar_position: 3
title: Navigare tramite Segnalini
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

I [segnalini della mappa](../../personal/markers.md) sono punti sulla mappa contrassegnati da bandiere. Possono essere utilizzati per una varietà di scopi, come indicare una posizione che si desidera visitare, un punto di interesse che si desidera ricordare o per creare un percorso personalizzato.

Possono essere particolarmente utili per escursionisti, ciclisti o chiunque esplori una nuova area che desideri contrassegnare posizioni o punti di riferimento interessanti sulla mappa. La differenza principale dai [punti preferiti](../../personal/favorites.md) è che i segnalini sono più veloci da creare in quanto non richiedono un nome.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Segnalino di navigazione Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segnalino di navigazione iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Utilizzare i segnalini nella navigazione {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Differenza navigazione segnalini Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Differenza navigazione segnalini Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Differenza navigazione segnalini iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Differenza navigazione segnalini iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

I *segnalini della mappa* possono fungere da [destinazioni](./route-navigation#set-destinations) durante la creazione di un percorso. Sono particolarmente comodi quando è necessario impostare un percorso con punti intermedi.

Tuttavia, i *segnalini della mappa* offrono anche varie funzionalità come [widget](../../widgets/markers.md), direzione dei movimenti, linee sulla mappa, in modo da poter utilizzare questi strumenti per la navigazione senza costruire una linea di percorso e senza avviare la navigazione con guida vocale completa.

Nel caso in cui sia necessaria una semplice navigazione punto a punto visualizzata come linee rette, è possibile costruire e ordinare una ***lista itinerari*** composta da segnalini come punti intermedi e utilizzare i widget per una navigazione semplice.


#### Raccomandazioni {#recommendations}

Ecco i semplici passaggi raccomandati per la *navigazione tramite segnalini*:

1. Crea i segnalini. Trova l'oggetto/gli oggetti desiderati sulla mappa, toccalo e scegli il *[pulsante Segnalino](../../personal/markers.md#add--edit-markers)* nel *[menu contestuale della mappa](../../map/map-context-menu.md#add--edit-marker)*. Puoi anche creare segnalini da [preferiti](#add-group-of-favorite) o [tracce GPX](#add-group-of-track-waypoints).
2. [*Ordina i segnalini*](#sort-markers) nel modo preferito in cui desideri passarli.
3. Personalizza la *visualizzazione dei segnalini della mappa* se desideri utilizzare i segnalini senza avviare la navigazione. Abilita le opzioni **Frecce sulla mappa** e **Linea di direzione** nella sezione *[Aspetto](../../personal/markers.md#appearance-on-the-map)* del *[menu dei segnalini della mappa](../../personal/markers.md#actions)*.
4. Aggiungi i *[widget dei segnalini](../../personal/markers.md#markers)* nel *[menu Configura schermata](../../widgets/configure-screen.md)* (opzionale).
5. [*Contrassegna come passati*](#pass-markers) i segnalini già visitati o ripristinali dalla cronologia se desideri ripassarli.

:::note
Quando le opzioni **Frecce sulla mappa** e **Linea di direzione** sono abilitate nella sezione *Aspetto* del [menu dei segnalini della mappa](../../personal/markers.md#appearance-on-the-map), vedrai una freccia o una linea tratteggiata sulla mappa. La freccia mostra la direzione verso il segnalino attivo quando si trova al di fuori della schermata della mappa corrente. La linea di direzione viene tracciata quando la tua geolocalizzazione e il segnalino si trovano entrambi sulla stessa schermata.
:::


## Lista itinerari {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista segnalini Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista segnalini iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


La lista itinerari rappresenta un elenco ordinato di segnalini *passabili* visibili sulla mappa. Puoi aggiungere ed eliminare punti uno per uno o farlo in blocco utilizzando un [file GPX](#add-group-of-track-waypoints) o un [gruppo di preferiti](#add-group-of-favorite) preparati in anticipo. Per competizioni locali o avventure potrebbe essere utile creare un elenco di punti da coordinate utilizzando lo [strumento di input coordinate](../../plan-route/coordinate-input.md).


### Aggiungi singoli segnalini {#add-single-markers}

I *segnalini* possono essere aggiunti o eliminati dalla mappa toccando una sola volta lo schermo nella posizione desiderata. Quindi è necessario seguire le istruzioni dell'articolo *[menu contestuale della mappa](../../map/map-context-menu.md#add--edit-marker)*.


### Aggiungi gruppo di preferiti {#add-group-of-favorite}

<InfoAndroidOnly />

![Preferiti ai segnalini 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Preferiti ai segnalini 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Puoi creare *segnalini della mappa* dai *[preferiti](../../personal/favorites.md)* utilizzando:

- *[Menu gruppi preferiti](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→I miei preferiti)*.
- Icona &#128681; nel menu interno dei preferiti *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→I miei preferiti→&#128681;)*.
- Opzione **'+'** (aggiungi) nella *[scheda Gruppi](../../personal/markers.md#marker-groups)* nel menu dei segnalini della mappa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Aggiungi gruppo di waypoint di traccia {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX ai segnalini 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Le tracce GPX con waypoint possono essere utilizzate come *segnalini della mappa* e disattivate rapidamente:

- Utilizza l'opzione **'+'** (aggiungi) nella *[scheda Gruppi](../../personal/markers.md#marker-groups)* nel menu dei segnalini della mappa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Attiva l'interruttore vicino alla traccia nella *[scheda Gruppi](../../personal/markers.md#marker-groups)* nel menu dei segnalini della mappa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Solo le tracce con waypoint possono essere aggiunte alla *lista dei segnalini della mappa*. La traccia che intendi aggiungere dovrebbe essere anche visibile (attiva) sulla mappa.
:::

![GPX ai segnalini 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX ai segnalini 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Puoi anche creare *segnalini* da una traccia con waypoint usando il *[menu contestuale della traccia](../../map/tracks/track-context-menu.md#points--waypoints)*: *Tocca una traccia visibile sulla mappa → nel menu contestuale della traccia scegli Punti → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Ordina segnalini {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ordina segnalini in una lista Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ordina segnalini in una lista iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Premendo nell'angolo sinistro (*Android*) o nell'angolo destro (*iOS*) di una scheda *Segnalino mappa* nella *[lista Segnalini mappa](../../personal/markers.md#itinerary-list)* e spostandola verso l'alto o verso il basso, è possibile modificarne l'ordine nella *lista di navigazione* (mentre si sposta una scheda segnalino si vedrà una linea che indica dove verrà posizionato il segnalino).

Nella versione Android dell'app OsmAnd, ci sono altre opzioni di ordinamento per i *segnalini della mappa* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Ordina per* o *Pianifica un percorso*).


### Ordina per attributi {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ordinamento alternativo dei segnalini Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Ordinamento alternativo dei segnalini Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Puoi ordinare i *segnalini* per:

- **Nome** (*alfabeticamente*) — Se i segnalini hanno nomi descrittivi, questo può essere un modo utile per trovare rapidamente il segnalino che stai cercando.
- **Distanza** (*più vicino o più lontano per primo*) - Questa opzione ordinerà i segnalini in base alla loro distanza dalla tua posizione attuale.
- **Data** (*recentemente o molto tempo fa*) - Questo ordinerà i segnalini in base alla data in cui sono stati aggiunti. Se hai aggiunto molti segnalini nel tempo, questo può essere un modo utile per vedere quali sono i più recenti.


### Riordina con lo strumento Pianifica percorso {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Ordinamento alternativo dei segnalini Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Ordinamento alternativo dei segnalini Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Utilizzando la funzionalità di pianificazione di un percorso nello strumento Elenco segnalini, è possibile ordinare i *segnalini* *porta a porta*, metterli in ordine inverso o creare un *viaggio di andata e ritorno*. Se si tocca un'opzione *Navigazione*, i *segnalini* verranno utilizzati come [destinazioni intermedie](../setup/route-navigation.md#intermediate-destinations).


## Passa segnalini {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Passa segnalino Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Passa segnalino Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Passa segnalino iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Passa segnalino iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Un *segnalino* può essere contrassegnato come passato (*Android*) o ignorato (*iOS*).

- Tramite il *[menu contestuale della mappa](../../map/map-context-menu.md#add--edit-marker)*.
- Quando ti avvicini a un *segnalino* a una distanza inferiore a 40 metri (*Android*) o 50 metri (*iOS*), un interruttore nella barra dei *[widget dei segnalini](../../widgets/markers.md#top-bar-widget)* diventa attivo.

Dopo aver superato un *segnalino*, questo si sposta nella cartella [Cronologia](../../personal/markers.md#history), da dove può essere ripristinato se necessario. Il segnalino successivo nell'[elenco](#itinerary-list) diventa attivo. A seconda delle tue [impostazioni](#use-markers-in-navigation), potresti essere guidato ad esso con una freccia o una linea tratteggiata.


## Articoli correlati {#related-articles}

- [Informazioni sui segnalini della mappa](../../personal/markers.md).
- [Widget segnalino](../../widgets/markers.md).
__
- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](./route-navigation.md)
- [Dettagli del percorso](./route-details.md)
- [Navigazione per traccia](./gpx-navigation.md)
- [Impostazioni di navigazione](../guidance/navigation-settings.md)
- [Schermata mappa durante la navigazione](../guidance/map-during-navigation.md)
- [Indicazioni vocali / Notifiche](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ultimo aggiornamento: Giugno 2025*