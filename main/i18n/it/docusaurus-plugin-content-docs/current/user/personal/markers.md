---
source-hash: fac05f4f13c5bd5f7843d69f6e63dcd842a9f677768496e4a171674d0bf80050
sidebar_position: 8
title: Marcatori
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Panoramica {#overview}

I marcatori sono punti speciali contrassegnati sulla mappa come bandierine che possono essere creati rapidamente con un solo tocco senza specificare nome e altre informazioni, a differenza dei [punti preferiti](./favorites.md). I marcatori offrono anche funzionalità aggiuntive con i [widget](../widgets/markers.md), le **frecce** (<Translate android="true" ids="show_arrows_on_the_map"/>) e l'**indicazione della distanza** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Marcatori mappa Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marcatori mappa iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Marcatori {#markers}

### Aggiungi/Modifica Marcatori {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Tocca brevemente o a lungo la mappa e seleziona l'azione richiesta dal [menu contestuale della mappa](../map/map-context-menu.md#add--edit-marker).

![Azione aggiungi modifica marcatore Android](@site/static/img/map/add_marker_android.png) ![Azione passa marcatore Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Tocca brevemente o a lungo la mappa e scegli l'azione necessaria nel [menu contestuale della mappa](../map/map-context-menu.md#add--edit-marker).

![Azione aggiungi modifica marcatore iOS](@site/static/img/map/add_marker_ios.png) ![Azione ripristina marcatore Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

È possibile contrassegnare un punto o un oggetto per facilitare la pianificazione della navigazione. Basta toccare l'icona della *bandierina* (*Android*) o della *freccia* (*iOS*) nel menu per visualizzare la direzione e la distanza dal punto selezionato rispetto alla posizione corrente (o al punto centrale della mappa/al punto iniziale di tocco della mappa quando la posizione è disattivata).

***Azioni***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Inserisce un nuovo marcatore sul punto selezionato.
- **Marca passato** (*Android*) / Ignora (iOS). Disattiva il marcatore e lo sposta nella Cronologia.
- **Rendi attivo** (*Android*). Sposta il marcatore nella posizione superiore (sul pannello superiore).
- **Ripristina marcatore** (*Android*). Sposta il marcatore dalla Cronologia all'elenco attivo.

:::note
Non è possibile eliminare immediatamente un marcatore; è necessario prima disattivarlo (contrassegnarlo come passato), in modo che venga spostato nella [Cronologia](#history), e quindi è possibile eliminarlo definitivamente dalla cronologia. Una volta disattivato, il marcatore verrà rimosso dalla mappa e dall'elenco degli itinerari.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Elenco Itinerari {#itinerary-list}

L'elenco degli itinerari rappresenta un elenco ordinato di marcatori, dove il primo marcatore viene utilizzato nei widget per la navigazione. Per maggiori informazioni, consulta l'articolo [Naviga per marcatori](../navigation/setup/markers-navigation.md#itinerary-list).

### Gruppi di Marcatori {#marker-groups}

<InfoAndroidOnly />

![Gruppi di marcatori mappa Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

I marcatori possono essere aggiunti ed eliminati come un intero gruppo da un gruppo di Preferiti o da un file GPX con waypoint. Ciò rende molto comodo il loro utilizzo in una modalità di navigazione speciale: [Naviga per marcatori](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Cronologia {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cronologia marcatori mappa Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cronologia marcatori mappa iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

La cronologia è un elenco di tutti i marcatori disattivati (passati). Da questo elenco è possibile eliminare definitivamente un marcatore o ripristinarlo.


## Aspetto sulla Mappa {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![aspetto_sulla_mappa](@site/static/img/widgets/appearence_on_the_map-01.png) ![aspetto_sulla_mappa](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Aspetto marcatori mappa iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Aspetto marcatori mappa iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Il menu *Aspetto sulla Mappa* è un'impostazione generale per la visualizzazione dei marcatori e dei puntatori aggiuntivi ad essi.
Nella versione iOS di OsmAnd, *Aspetto sulla Mappa* è anche un'impostazione per la visualizzazione dei widget. Ci sono anche impostazioni aggiuntive per [configurare i widget con i marcatori](../widgets/markers.md#configure-marker-widgets).

- **Marcatori attivi**. Mostra informazioni sul primo o sui primi due marcatori nell'elenco dei marcatori della mappa.
- **Indicazione della distanza** *(per iOS)*. Consente di scegliere se visualizzare i widget e come appariranno: sopra la mappa (Barra superiore) o sul lato destro dello schermo (Widget).
- **Frecce sulla mappa**. Indica la direzione verso il marcatore tracciato (uno o due) come una freccia sulla mappa. Se il marcatore si trova nella parte visibile della mappa, non viene visualizzata alcuna freccia.
- **Linea di direzione**. Mostra la direzione, come una linea tratteggiata, da un punto particolare sulla mappa al marcatore tracciato in linea retta.
- ***Un tocco*** attivo (*per Android*). Con un solo tocco sul marcatore richiesto sulla mappa, questo marcatore si sposta in cima all'elenco dei marcatori attivi della mappa senza aprire il menu contestuale.
- **Mantieni i marcatori passati sulla mappa** *(per Android)*. I marcatori aggiunti come gruppo di Preferiti o waypoint GPX contrassegnati come Passati rimarranno sulla mappa. Se il gruppo non è attivo, i marcatori scompariranno dalla mappa.


## Pianifica Percorso per Marcatori {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Punti di pianificazione percorso marcatori mappa Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Opzioni di pianificazione percorso marcatori mappa Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Utilizzando la funzionalità di pianificazione di un percorso nello strumento Elenco marcatori, è possibile ordinare i *Marcatori* *Porta a porta*, metterli in ordine inverso o creare un *Viaggio di andata e ritorno*. Se si tocca l'opzione *Navigazione*, i *Marcatori* verranno utilizzati come [destinazioni intermedie](../navigation/setup/route-navigation.md#intermediate-destinations).


## Azioni {#actions}

<InfoAndroidOnly />

![Marcatori mappa Altro Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. I marcatori possono essere ordinati nell'elenco per nome, prossimità, tempo di aggiunta.
- **<Translate android="true" ids="appearance_on_the_map"/>** o **<Translate ios="true" ids="shared_string_appearance"/>**. [Impostazioni per i marcatori della mappa](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Aggiunge marcatori tramite [input coordinate](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Costruisce un percorso [per la navigazione](../navigation/setup/markers-navigation.md) utilizzando i marcatori scelti.
- **<Translate android="true" ids="marker_save_as_track"/>**. Salva i marcatori attivi in un file GPX.
- **<Translate android="true" ids="move_all_to_history"/>**. Disattiva tutti i marcatori e li sposta nella [Cronologia](#history).


## Articoli Correlati {#related-articles}

- [Navigazione per marcatori](../navigation/setup/markers-navigation.md)
- [Widget marcatori](../widgets/markers.md)

> *Ultimo aggiornamento: agosto 2024*