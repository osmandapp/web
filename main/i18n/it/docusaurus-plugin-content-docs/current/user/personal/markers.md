---
source-hash: 0353071eeb4cc978c117068bf19a65442825b1d24cf586249b32ac62e28c929f
sidebar_position: 8
title:  Segnalini
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

I segnalini sono punti speciali contrassegnati sulla mappa come bandierine che possono essere creati rapidamente con un solo tocco senza specificare nome e altre informazioni, a differenza dei [Punti preferiti](./favorites.md). I segnalini forniscono anche funzionalità aggiuntive con i [widget](../widgets/markers.md), le **frecce** (<Translate android="true" ids="show_arrows_on_the_map"/>) e l'**indicazione della distanza** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Segnalini mappa Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segnalini mappa iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Segnalini {#markers}

### Aggiungi / Modifica segnalini {#add--edit-markers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Tocca brevemente o a lungo la mappa e seleziona l'azione richiesta dal [menu contestuale della mappa](../map/map-context-menu.md#add--edit-marker).

![Azione Aggiungi/Modifica segnalino Android](@site/static/img/map/add_marker_android.png) ![Azione Passa segnalino Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Tocca brevemente o a lungo la mappa e scegli l'azione necessaria nel [menu contestuale della mappa](../map/map-context-menu.md#add--edit-marker).

![Azione Aggiungi/Modifica segnalino iOS](@site/static/img/map/add_marker_ios.png) ![Azione Ripristina segnalino Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

È possibile contrassegnare un punto o un oggetto per facilitare la pianificazione della navigazione. Devi solo toccare l'icona *bandiera* (*Android*) o *freccia* (*iOS*) nel menu per visualizzare la direzione e la distanza dal punto selezionato dalla tua posizione attuale (o dal punto centrale della mappa / dal punto iniziale toccato sulla mappa quando la posizione è disattivata).

***Azioni***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Posiziona un nuovo segnalino sul punto selezionato.
- **Contrassegna come passato** (*Android*) / Ignora (iOS). Disattiva il segnalino e lo inserisce nella Cronologia.
- **Rendi attivo** (*Android*). Sposta il segnalino nella posizione superiore (nel pannello superiore).
- **Ripristina segnalino** (*Android*). Sposta il segnalino dalla Cronologia all'elenco attivo.

:::note
Non puoi eliminare un segnalino immediatamente, devi prima disattivarlo (contrassegnarlo come passato), in modo che venga spostato nella [Cronologia](#history) e quindi puoi eliminarlo definitivamente dalla cronologia. Una volta disattivato, il segnalino verrà rimosso dalla mappa e dall'elenco degli itinerari.
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


### Elenco itinerari {#itinerary-list}

L'elenco itinerari rappresenta un elenco ordinato di segnalini in cui il primo segnalino in alto viene utilizzato nei widget per la navigazione. Leggi di più in merito nell'articolo [Naviga per segnalini](../navigation/setup/markers-navigation.md#itinerary-list).

### Gruppi di segnalini {#marker-groups}

<InfoAndroidOnly />

![Gruppi di segnalini mappa Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

I segnalini possono essere aggiunti ed eliminati come un intero gruppo da un gruppo di Preferiti o da un file GPX con waypoint. Ciò lo rende molto comodo da utilizzare in una modalità di navigazione speciale: [Naviga per segnalini](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Cronologia {#history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Cronologia segnalini mappa Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cronologia segnalini mappa iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

La cronologia è un elenco di tutti i segnalini disattivati (passati). Da questo elenco è possibile eliminare definitivamente un segnalino o ripristinarlo.


## Aspetto sulla mappa {#appearance-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![aspetto_sulla_mappa](@site/static/img/widgets/appearence_on_the_map-01.png) ![aspetto_sulla_mappa](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Aspetto segnalini mappa iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Aspetto segnalini mappa iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Il menu *Aspetto sulla mappa* è un'impostazione generale per la visualizzazione dei segnalini e dei puntatori aggiuntivi ad essi.
Nella versione iOS di OsmAnd, *Aspetto sulla mappa* è anche un'impostazione per la visualizzazione dei widget. Ci sono anche impostazioni aggiuntive per [configurare i widget con i segnalini](../widgets/markers.md#configure-marker-widgets).

- **Segnalini attivi**. Mostra informazioni sul primo o sui primi due segnalini nell'elenco dei segnalini mappa.
- **Indicazione della distanza** *(per iOS)*. Consente di scegliere se visualizzare o meno i widget e come appariranno: sopra la mappa (barra superiore) o sul lato destro dello schermo (widget).
- **Frecce sulla mappa**. Indica la direzione verso il segnalino tracciato (uno o due) come una freccia sulla mappa. Se il segnalino si trova nella parte visibile della mappa, non viene visualizzata alcuna freccia.
- **Linea di direzione**. Mostra la direzione, come una linea tratteggiata, da un punto particolare sulla mappa al segnalino tracciato in linea retta.
- ***Un tocco*** attivo (*per Android*). Con un solo tocco sul segnalino richiesto sulla mappa, questo segnalino si sposta in cima all'elenco dei segnalini mappa attivi senza aprire il menu contestuale.
- **Mantieni i segnalini passati sulla mappa** *(per Android)*. I segnalini aggiunti come gruppo di Preferiti o waypoint GPX contrassegnati come Passati rimarranno sulla mappa. Se il gruppo non è attivo, i segnalini scompariranno dalla mappa.


## Pianifica percorso per segnalini {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Segnalini mappa Punti percorso pianificato Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Segnalini mappa Opzioni percorso pianificato Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Utilizzando la funzionalità dello strumento Pianifica un percorso nell'elenco Segnalini, puoi ordinare i *Segnalini* *Porta a porta*, metterli in ordine inverso o creare un *Viaggio di andata e ritorno*. Se tocchi l'opzione *Navigazione*, i *Segnalini* verranno utilizzati come [destinazioni intermedie](../navigation/setup/route-navigation.md#intermediate-destinations).


## Azioni {#actions}

<InfoAndroidOnly />

![Segnalini mappa Altro Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. I segnalini possono essere ordinati nell'elenco per nome, prossimità, tempo di aggiunta.
- **<Translate android="true" ids="appearance_on_the_map"/>** o **<Translate ios="true" ids="shared_string_appearance"/>**. [Impostazioni per i segnalini mappa](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Aggiunge segnalini tramite [input coordinate](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Costruisce il percorso [per la navigazione](../navigation/setup/markers-navigation.md) utilizzando i segnalini scelti.
- **<Translate android="true" ids="marker_save_as_track"/>**. Salva i segnalini attivi in un file GPX.
- **<Translate android="true" ids="move_all_to_history"/>**. Disattiva tutti i segnalini e li sposta nella [Cronologia](#history).


## Articoli correlati {#related-articles}

- [Navigazione per segnalini](../navigation/setup/markers-navigation.md)
- [Widget segnalini](../widgets/markers.md)

> *Ultimo aggiornamento: agosto 2024*