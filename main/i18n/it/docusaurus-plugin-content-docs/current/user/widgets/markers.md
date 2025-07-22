---
source-hash: d3abf03ba6407956088e1ed644ced36e7ab7236b5ccbcd41e305f4fac26a3b36
sidebar_position: 6
title:  Widget Segnaposto
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

I segnaposto sono punti temporanei indicati sulla mappa sotto forma di bandierine. I widget mostrano la *Direzione*, la *Distanza*, l'*Indirizzo* e l'*Ora di arrivo stimata* al segnaposto. Consentono di trovare rapidamente i segnaposto sulla mappa e di modificarne la posizione. Per saperne di più sui segnaposto, consulta questo [articolo](../personal/markers).


## Widget Barra superiore {#top-bar-widget}

Il widget **Barra dei segnaposto mappa** (Android) / **Indicazione distanza - Barra superiore** (iOS) visualizza:

- Distanza dalla posizione corrente (o dal punto centrale della mappa / dal punto iniziale di contatto della mappa quando la Posizione è disattivata) al punto selezionato indicato dal Segnaposto sulla mappa ([Unità di lunghezza](../personal/profiles/#general-settings) possono essere scelte nelle impostazioni del Profilo).
- Una freccia dello stesso colore del segnaposto indica la direzione dalla posizione corrente (o dal punto centrale della mappa / dal punto iniziale di contatto della mappa quando la Posizione è disattivata) e l'orientamento nello spazio del dispositivo (direzione) verso il segnaposto.
- Indirizzo della posizione.
- Icona del menu che porta all'[Elenco segnaposto mappa](../personal/markers/#map-markers-menu).

È inoltre possibile selezionare la visualizzazione di uno o due segnaposto. Per saperne di più sulle impostazioni dei widget, consulta questo [articolo](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*La distanza dal segnaposto* è la lunghezza della linea retta tra la tua posizione (o il punto centrale della mappa / il punto iniziale di contatto della mappa quando la Posizione è disattivata) e il segnaposto.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Segnaposto mappa sul widget della barra superiore](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Abilita | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="map_markers_bar"/>* |
| Toccando | La parte visibile della mappa si sposta nella posizione del segnaposto. |
| Tocco lungo + spostamento | Per misurare la distanza e vedere la direzione da un punto particolare sulla mappa al segnaposto tracciato, è necessario effettuare un tocco lungo e spostare immediatamente leggermente la posizione della mappa (il menu contestuale non dovrebbe apparire). |
| Avvicinamento al segnaposto | Nel caso in cui la tua posizione si trovi entro un piccolo raggio dal segnaposto mappa (**< 50 m**), nel campo del widget puoi vedere un pulsante con un segno di spunta per eliminare rapidamente il segnaposto mappa (segna come passato). Il segnaposto selezionato viene sostituito dal segnaposto successivo nell'elenco dei segnaposto. |
| Formato distanza | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Segnaposto mappa sul widget della barra superiore](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Abilita | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="map_markers_bar"/>*|
| Toccando | La parte visibile della mappa si sposta nella posizione del segnaposto. |
| Toccando | Cambio tra "Distanza" / "Ora di arrivo stimata" (Modalità switch). |
| Avvicinamento al segnaposto | Nel caso in cui la tua posizione si trovi entro un piccolo raggio dal segnaposto mappa (**< 50 m**), nel campo del widget puoi vedere un pulsante con un segno di spunta per eliminare rapidamente il segnaposto mappa (segna come passato). Il segnaposto selezionato viene sostituito dal segnaposto successivo nell'elenco dei segnaposto. |
| Formato distanza | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Widget Pannello {#panel-widgets}

Il widget **Segnaposto mappa** *(per Android)* e **Indicazione distanza - Widget** *(per iOS)* visualizzano:

- *Distanza dalla posizione corrente* al punto selezionato indicato dal Segnaposto sulla mappa ([Unità di lunghezza](../personal/profiles/#general-settings) possono essere scelte nelle impostazioni del Profilo).
- *Ora di arrivo stimata o ETA*.
Questo è il tempo (hh:mm) in cui il veicolo o la persona dovrebbe arrivare a destinazione. Viene calcolato come la distanza dal segnaposto divisa per la velocità media.
La velocità media viene calcolata come la media di tutti i valori di velocità ricevuti dai punti di posizione per l'intervallo di tempo selezionato da 15 secondi a 60 minuti.

È inoltre possibile selezionare la visualizzazione di uno o due segnaposto. Per saperne di più sulle impostazioni dei widget, consulta questo [articolo](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*La distanza dal segnaposto* è la lunghezza della linea retta tra la tua posizione (o un punto particolare sulla mappa) e il segnaposto.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget pannello](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Abilita | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| Toccando 1 | Cambio tra "Distanza" / "Ora di arrivo stimata" (Modalità switch). |
| Toccando 2 | La parte visibile della mappa si sposta nella posizione del segnaposto (Modalità vai alla posizione del segnaposto) |
| Tocco lungo + spostamento | Per misurare la distanza e vedere la direzione da un punto particolare sulla mappa al segnaposto tracciato, è necessario effettuare un tocco lungo e spostare immediatamente leggermente la posizione della mappa (il menu contestuale non dovrebbe apparire). |
| Formato distanza | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Widget pannello](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Abilita | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="map_markers_bar"/>* |
| Toccando | La parte visibile della mappa si sposta nella posizione del segnaposto. |
| Toccando | Cambio tra "Distanza" / "Ora di arrivo stimata" (Modalità switch). |
| Formato distanza | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Configura widget segnaposto {#configure-marker-widgets}

Puoi leggere le informazioni generali sulle impostazioni del widget Segnaposto mappa in questa [pagina](../personal/markers#map-markers-widgets).

**Barra dei segnaposto mappa**
Il widget della barra superiore visualizza la distanza e la direzione al segnaposto mappa successivo dalla tua posizione corrente. Nelle impostazioni, puoi scegliere se visualizzare uno o due segnaposto nella parte superiore dello schermo.

![aspetto_sulla_mappa](@site/static/img/widgets/configure-marker-wid-02.png)

**Segnaposto mappa**
Il widget mostra la distanza o l'ora di arrivo stimata (ETA) per il primo o il secondo segnaposto nell'elenco dei segnaposto mappa. Puoi scegliere: un segnaposto, il primo o il secondo, da visualizzare sullo schermo o entrambi.

![aspetto_sulla_mappa](@site/static/img/widgets/configure-marker-wid-01.png) ![aspetto_sulla_mappa](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| Mostra | Questa modalità consente di scegliere quali informazioni visualizzerà il widget: *Distanza* o *Ora di arrivo stimata*. |
| Intervallo | Se in 'Mostra' è selezionata *Ora di arrivo stimata*, questa opzione appare con una scelta di tempi (da 15 secondi a 60 minuti) per il calcolo dell'ETA. |
| Clic sul widget | Questa impostazione consente di scegliere quale azione verrà eseguita quando si clicca sul widget: *Cambia modalità* o *Vai alla posizione del segnaposto*. |


## Aspetto sulla mappa {#appearance-on-the-map}

La configurazione dell'aspetto dei segnaposto mappa è disponibile sia nelle versioni Android che iOS di OsmAnd. Il menu "Aspetto sulla mappa" è un'impostazione generale per i segnaposto mappa e si applica indipendentemente dal fatto che i widget siano abilitati o meno. Puoi leggere le informazioni dettagliate in questa [pagina](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![aspetto_sulla_mappa](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Mostra informazioni sul primo o sui primi due segnaposto nell'elenco dei segnaposto mappa. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | Indica la direzione verso il segnaposto tracciato (uno o due) come una freccia sulla mappa. Se il segnaposto si trova nella parte visibile della mappa, non viene visualizzata alcuna freccia. |
| <Translate android="true" ids="show_guide_line"/> | Mostra la direzione, come una linea tratteggiata, da un punto particolare sulla mappa al segnaposto tracciato in linea retta. |
| <Translate android="true" ids="one_tap_active"/> | Con un solo tocco sul segnaposto richiesto sulla mappa, questo segnaposto si sposta in cima all'elenco dei segnaposto mappa attivi senza aprire il menu contestuale. |
| <Translate android="true" ids="keep_passed_markers"/> | I segnaposto aggiunti come gruppo di Preferiti o waypoint GPX contrassegnati come Passati rimarranno sulla mappa. Se il gruppo non è attivo, i segnaposto scompariranno dalla mappa. |

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Aspetto segnaposto mappa iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Mostra informazioni sul primo o sui primi due segnaposto nell'elenco dei segnaposto mappa. |
| <Translate android="true" ids="show_direction"/> | Consente di scegliere se visualizzare o meno i widget e come appariranno: sopra la mappa (<Translate android="true" ids="shared_string_topbar"/>) o sul lato destro dello schermo (<Translate android="true" ids="shared_string_widgets"/>). |
| Frecce sulla mappa | Indica la direzione verso il segnaposto tracciato (uno o due) come una freccia sulla mappa. Se il segnaposto si trova nella parte visibile della mappa, non viene visualizzata alcuna freccia. |
| Linea di direzione | Mostra la direzione, come una linea tratteggiata, da un punto particolare sulla mappa al segnaposto tracciato in linea retta. |

</TabItem>

</Tabs>


## Articoli correlati {#related-articles}

- [Configura schermo](./configure-screen.md)
- [Pulsanti mappa](./map-buttons.md)
- [Widget informativi](./info-widgets.md)
- [Widget di navigazione](./nav-widgets.md)
- [Righello raggio e righello](./radius-ruler.md)
- [Azione rapida](./quick-action.md)


> *Ultimo aggiornamento: Ottobre 2023*