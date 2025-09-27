---
source-hash: 2e10650d0eee32138985228898ac7ac712a0a70a1f315f227a751d0c2f14ae10
sidebar_position: 6
title:  Widget Marcatori
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

I marcatori sono punti temporanei indicati sulla mappa sotto forma di bandierine. I widget mostrano la *Direzione*, la *Distanza*, l'*Indirizzo* e l'*Orario di arrivo previsto* al marcatore. Permettono di trovare rapidamente i marcatori sulla mappa e di modificarne la posizione. Per saperne di più sui marcatori, consultare questo [articolo](../personal/markers).


## Widget Barra Superiore {#top-bar-widget}

Il widget **Barra marcatori mappa** (Android) / **Indicazione distanza - Barra superiore** (iOS) visualizza:

- Distanza dalla posizione corrente (o dal punto centrale della mappa / dal punto iniziale di tocco della mappa quando la Posizione è disattivata) al punto selezionato indicato dal Marcatore sulla mappa (le [Unità di lunghezza](../personal/profiles/#general-settings) possono essere scelte nelle impostazioni del Profilo).
- Una freccia dello stesso colore del marcatore indica la direzione dalla posizione corrente (o dal punto centrale della mappa / dal punto iniziale di tocco della mappa quando la Posizione è disattivata) e l'orientamento nello spazio del dispositivo (direzione) verso il marcatore.
- Indirizzo della posizione.
- Icona del menu che porta a [Elenco marcatori mappa](../navigation/setup/markers-navigation.md#itinerary-list).

È anche possibile selezionare la visualizzazione di uno o due marcatori. Per saperne di più sulle impostazioni dei widget, consultare questo [articolo](https://osmand.net/docs/user/personal/markers#appearance-on-the-map).
:::info
*La distanza dal marcatore* è la lunghezza della linea retta tra la propria posizione (o il punto centrale della mappa / il punto iniziale di tocco della mappa quando la Posizione è disattivata) e il marcatore.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Marcatori mappa sul widget della barra superiore](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Abilita | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="map_markers_bar"/>* |
| Con un tocco | La parte visibile della mappa si sposta sulla posizione del marcatore. |
| Tocco lungo + spostamento | Per misurare la distanza e vedere la direzione da un punto particolare della mappa al marcatore tracciato, è necessario effettuare un tocco lungo e spostare immediatamente e leggermente la posizione della mappa (il menu contestuale non deve apparire). |
| Avvicinamento al marcatore | Se la vostra posizione si trova entro un piccolo raggio dal marcatore della mappa (**< 50 m**), nel campo del widget è possibile visualizzare un pulsante di spunta per eliminare rapidamente il marcatore della mappa (contrassegnarlo come superato). Il marcatore spuntato viene sostituito dal marcatore successivo nell'elenco dei marcatori. |
| Formato distanza | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Marcatori mappa sul widget della barra superiore](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Abilita | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="map_markers_bar"/>*|
| Con un tocco | La parte visibile della mappa si sposta sulla posizione del marcatore. |
| Con un tocco | Passaggio da "Distanza" a "Orario di arrivo previsto" (modalità di commutazione). |
| Avvicinamento al marcatore | Se la vostra posizione si trova entro un piccolo raggio dal marcatore della mappa (**< 50 m**), nel campo del widget è possibile visualizzare un pulsante di spunta per eliminare rapidamente il marcatore della mappa (contrassegnarlo come superato). Il marcatore spuntato viene sostituito dal marcatore successivo nell'elenco dei marcatori. |
| Formato distanza | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Widget del Pannello {#panel-widgets}

Il widget **Marcatori mappa** *(per Android)* e **Indicazione distanza - Widget** *(per iOS)* visualizza:

- *Distanza dalla posizione corrente* al punto selezionato indicato dal Marcatore sulla mappa (le [Unità di lunghezza](../personal/profiles/#general-settings) possono essere scelte nelle impostazioni del Profilo).
- *Orario di arrivo previsto o ETA*.
È l'ora (hh:mm) in cui il veicolo o la persona dovrebbe arrivare a destinazione. Viene calcolato come la distanza dal marcatore divisa per la velocità media.
La velocità media è calcolata come la media di tutti i valori di velocità ricevuti dai punti di localizzazione per l'intervallo di tempo selezionato da 15 secondi a 60 minuti.

È anche possibile selezionare la visualizzazione di uno o due marcatori. Per saperne di più sulle impostazioni dei widget, consultare questo [articolo](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*La distanza dal marcatore* è la lunghezza della linea retta tra la propria posizione (o un punto particolare della mappa) e il marcatore.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget del pannello](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Abilita | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| Con un tocco 1 | Passaggio da "Distanza" a "Orario di arrivo previsto" (modalità di commutazione). |
| Con un tocco 2 | La parte visibile della mappa si sposta sulla posizione del marcatore (Vai alla modalità di localizzazione del marcatore) |
| Tocco lungo + spostamento | Per misurare la distanza e vedere la direzione da un punto particolare della mappa al marcatore tracciato, è necessario effettuare un tocco lungo e spostare immediatamente e leggermente la posizione della mappa (il menu contestuale non deve apparire). |
| Formato distanza | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Widget del pannello](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Abilita | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="map_markers_bar"/>* |
| Con un tocco | La parte visibile della mappa si sposta sulla posizione del marcatore. |
| Con un tocco | Passaggio da "Distanza" a "Orario di arrivo previsto" (modalità di commutazione). |
| Formato distanza | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Configurare i Widget Marcatori {#configure-marker-widgets}

È possibile leggere le informazioni generali sulle impostazioni del widget Marcatori mappa in questa [pagina](../personal/markers#appearance-on-the-map).

### Barra marcatori mappa {#map-markers-bar}
Il widget della barra superiore visualizza la distanza e la direzione rispetto al marcatore mappa successivo dalla posizione corrente. Nelle impostazioni è possibile scegliere se visualizzare uno o due marcatori nella parte superiore dello schermo.

![aspetto_sulla_mappa](@site/static/img/widgets/configure-marker-wid-02.png)

### Marcatori mappa {#map-markers}
Il widget mostra la distanza o l'orario di arrivo previsto (ETA) per il primo o il secondo marcatore nell'elenco dei marcatori mappa. È possibile scegliere: un marcatore, il primo o il secondo, da visualizzare sullo schermo o entrambi.

![aspetto_sulla_mappa](@site/static/img/widgets/configure-marker-wid-01.png) ![aspetto_sulla_mappa](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| Mostra | Questa modalità consente di scegliere quali informazioni visualizzerà il widget: *Distanza* o *Orario di arrivo previsto*. |
| Intervallo | Se in 'Mostra' è selezionato *Orario di arrivo previsto*, questa opzione appare con una scelta di tempi (da 15 secondi a 60 minuti) per il calcolo dell'ETA. |
| Clicca sul widget | Questa impostazione consente di scegliere quale azione verrà eseguita quando si fa clic sul widget: *Cambia modalità* o *Vai alla posizione del marcatore*. |


## Aspetto sulla mappa {#appearance-on-the-map}

La configurazione dell'aspetto dei marcatori mappa è disponibile sia nella versione Android che in quella iOS di OsmAnd. Il menu "Aspetto sulla mappa" è un'impostazione generale per i marcatori mappa e si applica indipendentemente dal fatto che i widget siano abilitati o meno. È possibile leggere le informazioni dettagliate in questa [pagina](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![aspetto_sulla_mappa](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Mostra le informazioni sul primo o sui primi due marcatori nell'elenco dei marcatori mappa. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | Indica la direzione del marcatore tracciato (uno o due) con una freccia sulla mappa. Se il marcatore si trova nella parte visibile della mappa, non viene visualizzata alcuna freccia. |
| <Translate android="true" ids="show_guide_line"/> | Mostra la direzione, come una linea tratteggiata, da un punto particolare della mappa al marcatore tracciato in linea retta. |
| <Translate android="true" ids="one_tap_active"/> | Con un solo tocco sul marcatore desiderato sulla mappa, questo marcatore si sposta in cima all'elenco dei marcatori mappa attivi senza aprire il menu contestuale. |
| <Translate android="true" ids="keep_passed_markers"/> | I marcatori aggiunti come gruppo di Preferiti o waypoint GPX contrassegnati come Superati rimarranno sulla mappa. Se il gruppo non è attivo, i marcatori scompariranno dalla mappa. |

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Aspetto Marcatori Mappa iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Mostra le informazioni sul primo o sui primi due marcatori nell'elenco dei marcatori mappa. |
| <Translate android="true" ids="show_direction"/> | Consente di scegliere se visualizzare o meno i widget e come appariranno: sopra la mappa (<Translate android="true" ids="shared_string_topbar"/>) o sul lato destro dello schermo (<Translate android="true" ids="shared_string_widgets"/>). |
| Frecce sulla mappa | Indica la direzione del marcatore tracciato (uno o due) con una freccia sulla mappa. Se il marcatore si trova nella parte visibile della mappa, non viene visualizzata alcuna freccia. |
| Linea di direzione | Mostra la direzione, come una linea tratteggiata, da un punto particolare della mappa al marcatore tracciato in linea retta. |

</TabItem>

</Tabs>


## Articoli Correlati {#related-articles}

- [Configura Schermo](./configure-screen.md)
- [Pulsanti Mappa](./map-buttons.md)
- [Widget Informativi](./info-widgets.md)
- [Widget di Navigazione](./nav-widgets.md)
- [Righello-raggio e Righello](./radius-ruler.md)
- [Azione Rapida](./quick-action.md)