---
source-hash: 18d9873a363946b476ae9c98d895b7afc2dcac45571f524bfe437e0a7bba8153
sidebar_position: 3
title:  Navigare con i marcatori
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

I [marcatori mappa](../../personal/markers.md) sono punti sulla mappa contrassegnati da bandierine. Possono essere utilizzati per vari scopi, come indicare un luogo che si desidera visitare, un punto di interesse che si vuole ricordare o per creare un percorso personalizzato.  

Possono essere particolarmente utili per escursionisti, ciclisti o chiunque esplori una nuova area e voglia segnare luoghi interessanti o punti di riferimento sulla mappa. La differenza principale rispetto ai [Punti preferiti](../../personal/favorites.md) è che i marcatori sono più veloci da creare poiché non richiedono un nome.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marcatore di navigazione Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marcatore di navigazione iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Utilizzare i marcatori nella navigazione {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Differenza marcatore navigazione Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Differenza marcatore navigazione Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Differenza marcatore navigazione iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Differenza marcatore navigazione iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

I *marcatori mappa* possono servire come [destinazioni](./route-navigation#set-destinations) durante la creazione di un percorso. Sono particolarmente comodi quando è necessario impostare un percorso con punti intermedi.

Tuttavia, i *marcatori mappa* forniscono anche varie funzionalità come [widget](../../widgets/markers.md), direzione dei movimenti, linee sulla mappa, quindi è possibile utilizzare questi strumenti per la navigazione senza costruire una linea di percorso e senza attivare la navigazione con guida vocale completa.

Nel caso in cui si necessiti di una semplice navigazione da punto a punto visualizzata come linee rette, è possibile creare e ordinare un ***Elenco itinerario*** composto da marcatori come punti intermedi e utilizzare i widget per una navigazione semplice.


### Raccomandazioni {#recommendations}

Ecco semplici passaggi consigliati per *Navigare con i marcatori*:

1. Creare i marcatori. Trovare l'oggetto o gli oggetti desiderati sulla mappa, toccarli e scegliere il *[pulsante Marcatore](../../personal/markers.md#add--edit-markers)* nel *[menu contestuale della mappa](../../map/map-context-menu.md#add--edit-marker)*. È anche possibile creare marcatori da [preferiti](#add-group-of-favorite) o [tracce GPX](#add-group-of-track-waypoints).
2. [*Ordinare i marcatori*](#sort-markers) nel modo preferito in cui si desidera passarli
3. Personalizzare la *Vista marcatori mappa* se si desidera utilizzare i marcatori senza avviare la navigazione. Abilitare le opzioni **Frecce sulla mappa** e **Linea di direzione** nella sezione *[Aspetto](../../personal/markers.md#appearance-on-the-map)* del *[menu Marcatori mappa](../../personal/markers.md#actions)*.
4. Aggiungere i *[widget Marcatori](../../personal/markers.md#markers)* nel *[menu Configura schermata](../../widgets/configure-screen.md)* (opzionale).
5. [*Segnare come superati*](#pass-markers) i marcatori già visitati o ripristinarli dalla cronologia se si desidera passarli di nuovo.

:::note
Quando le opzioni **Frecce sulla mappa** e **Linea di direzione** sono abilitate nella sezione *Aspetto* del [menu Marcatori mappa](../../personal/markers.md#appearance-on-the-map), vedrai una freccia o una linea tratteggiata sulla mappa. La freccia mostra la direzione verso il marcatore attivo quando questo si trova al di fuori della schermata della mappa corrente. La linea di direzione viene disegnata quando la tua geolocalizzazione e il marcatore si trovano entrambi sulla stessa schermata.  
:::


## Elenco itinerario {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Elenco marcatori Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Elenco marcatori iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


L'elenco itinerario rappresenta un elenco ordinato di marcatori *superabili* che sono visibili sulla mappa. È possibile aggiungere ed eliminare punti uno per uno o farlo in blocco utilizzando un [file GPX](#add-group-of-track-waypoints) preparato in anticipo o un [gruppo di Preferiti](#add-group-of-favorite). Per competizioni locali o avventure, potrebbe essere utile creare un elenco di punti a partire dalle coordinate utilizzando lo [strumento di inserimento coordinate](../../plan-route/coordinate-input.md).


### Aggiungere singoli marcatori {#add-single-markers}

I *marcatori* possono essere aggiunti o eliminati dalla mappa con un singolo tocco sullo schermo nella posizione desiderata. Successivamente, è necessario seguire le istruzioni dell'articolo sul *[menu contestuale della mappa](../../map/map-context-menu.md#add--edit-marker)*.  


### Aggiungere un gruppo di preferiti {#add-group-of-favorite}

<InfoAndroidOnly />

![Preferiti a marcatori 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Preferiti a marcatori 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

È possibile creare *marcatori mappa* dai *[Preferiti](../../personal/favorites.md)* utilizzando:

- Il *[menu dei gruppi di Preferiti](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→I miei preferiti)*.
- L'icona &#128681; nel menu interno dei Preferiti *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→I miei preferiti→&#128681;)*.
- L'opzione **'+'** (aggiungi) nella *[scheda Gruppi](../../personal/markers.md#marker-groups)* nel menu Marcatori mappa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.  


### Aggiungere un gruppo di waypoint di traccia {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX a marcatori 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Le tracce GPX con waypoint possono essere utilizzate come *marcatori mappa* e disattivate rapidamente:

- Utilizzare l'opzione **'+'** (aggiungi) nella *[scheda Gruppi](../../personal/markers.md#marker-groups)* nel menu Marcatori mappa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Attivare l'interruttore vicino alla traccia nella *[scheda Gruppi](../../personal/markers.md#marker-groups)* nel menu Marcatori mappa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Solo le tracce con waypoint possono essere aggiunte all'*Elenco marcatori mappa*. La traccia che si intende aggiungere deve essere anche visibile (attiva) sulla mappa.
:::

![GPX a marcatori 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX a marcatori 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- È anche possibile creare *Marcatori* da una traccia con waypoint utilizzando il *[menu contestuale della traccia](../../map/tracks/track-context-menu.md#points--waypoints)*: *Toccare una traccia visibile sulla mappa → nel menu contestuale della traccia scegliere Punti → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Ordinare i marcatori {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ordinare i marcatori in un elenco Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ordinare i marcatori in un elenco iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Premendo sull'angolo sinistro (*Android*) o destro (*iOS*) di una scheda *Marcatore mappa* nell'*[Elenco marcatori mappa](../../personal/markers.md#itinerary-list)* e spostandola verso l'alto o il basso, è possibile cambiarne l'ordine nell'*Elenco di navigazione* (mentre si sposta una scheda marcatore, si vedrà una linea che indica dove verrà posizionato il marcatore).

Nella versione Android dell'app OsmAnd, ci sono altre opzioni di ordinamento per i *marcatori mappa* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Ordina per* o *Pianifica un percorso*).


### Ordinare per attributi {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ordinamento alternativo dei marcatori Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Ordinamento alternativo dei marcatori Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

È possibile ordinare i *Marcatori* per:

- **Nome** (*alfabeticamente*) — Se i marcatori hanno nomi descrittivi, questo può essere un modo utile per trovare rapidamente il marcatore che si sta cercando.
- **Distanza** (*dal più vicino o dal più lontano*) - Questa opzione ordinerà i marcatori in base alla loro distanza dalla posizione corrente.
- **Data** (*recentemente o molto tempo fa*) - Questo ordinerà i marcatori in base alla data in cui sono stati aggiunti. Se si sono aggiunti molti marcatori nel tempo, questo può essere un modo utile per vedere quali sono i più recenti.


### Riordinare con lo strumento Pianifica un percorso {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Ordinamento alternativo dei marcatori Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Ordinamento alternativo dei marcatori Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Utilizzando la funzionalità Pianifica un percorso nell'elenco Marcatori, è possibile ordinare i *Marcatori* *Porta a porta*, metterli in ordine inverso o creare un *Viaggio di andata e ritorno*. Se si tocca l'opzione *Navigazione*, i *Marcatori* verranno utilizzati come [destinazioni intermedie](../setup/route-navigation.md#intermediate-destinations).


## Superare i marcatori {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Superare un marcatore Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Superare un marcatore Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Superare un marcatore iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Superare un marcatore iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Un *Marcatore* può essere segnato come superato (*Android*) o ignorato (*iOS*).

- Tramite il *[menu contestuale della mappa](../../map/map-context-menu.md#add--edit-marker)*.  
- Quando ci si avvicina a un *Marcatore* a una distanza inferiore a 40 metri (*Android*) o 50 metri (*iOS*), un interruttore nella barra dei *[widget Marcatori](../../widgets/markers.md#top-bar-widget)* diventa attivo.  

Dopo aver superato un *Marcatore*, questo viene spostato nella cartella [Cronologia](../../personal/markers.md#history), da cui può essere ripristinato se necessario. Il marcatore successivo nell'[elenco](#itinerary-list) diventa attivo. A seconda delle [impostazioni](#use-markers-in-navigation), si potrebbe essere guidati verso di esso con una freccia o una linea tratteggiata.


## Articoli correlati {#related-articles}

- [Informazioni sui marcatori mappa](../../personal/markers.md).
- [Widget Marcatori](../../widgets/markers.md).  
__
- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](./route-navigation.md)
- [Dettagli del percorso](./route-details.md)
- [Navigazione tramite traccia](./gpx-navigation.md)
- [Impostazioni di navigazione](../guidance/navigation-settings.md)
- [Schermata della mappa durante la navigazione](../guidance/map-during-navigation.md)
- [Istruzioni vocali / Notifiche](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)