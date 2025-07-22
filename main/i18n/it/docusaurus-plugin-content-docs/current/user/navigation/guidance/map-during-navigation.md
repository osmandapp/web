---
source-hash: 647711494d62816fdbd45cf8b18ef90488d2e460f73ad6eb67974d9a0645067f
sidebar_position: 1
title: Schermata mappa durante la navigazione
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

Questo articolo descrive come configurare l'aspetto della mappa durante la navigazione. Ciò include funzionalità come la visualizzazione di [POI lungo il percorso](#show-points-along-the-route), l'utilizzo di [avvisi sullo schermo](#screen-alerts), l'[aspetto della linea del percorso](#route-line-appearance) inclusi colore, larghezza e frecce di svolta. Queste funzionalità sono strettamente correlate alle [impostazioni di navigazione del percorso](../setup/route-navigation.md#settings).


## Mappa durante la navigazione {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Schermata mappa durante la navigazione](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Schermata mappa durante la navigazione](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Durante la navigazione, la mappa è uno strumento visivo per individuare la tua posizione, identificare la tua destinazione, pianificare il tuo percorso e visualizzare le indicazioni di navigazione. Puoi utilizzare lo zoom per farlo e trascinare e ruotare la mappa secondo necessità. La mappa può anche visualizzare informazioni stradali, nomi di strade, edifici e altri oggetti per aiutarti a determinare facilmente il tuo percorso.  

Durante la navigazione, l'aspetto della mappa si adatta in base al profilo di navigazione selezionato. Prima di iniziare la navigazione, assicurati che l'aspetto della mappa sia in linea con le tue preferenze su come dovrebbe funzionare durante la guida.

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | Il tempo per cui la visualizzazione della mappa è sincronizzata con la posizione corrente dopo lo spostamento. | *Valore:* <br /> Mai, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec.|
| *<Translate android="true" ids="auto_zoom_map"/>* | Scala automaticamente la mappa in base alla tua velocità, purché la mappa sia sincronizzata con la tua posizione corrente. | *Valore:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - zoom manuale. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - zoom 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - zoom 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - zoom 5 m. |
| *<Translate android="true" ids="snap_to_road"/>* | L'icona della posizione corrente sarà associata al percorso di navigazione corrente. | Puoi disattivare questa opzione, ma tutte le opzioni relative alla strada, come la visualizzazione delle corsie, non saranno visibili durante la navigazione. |
| *<Translate android="true" ids="approximate_bearing"/>* | Determina la direzione in base al percorso di navigazione che stai seguendo. | L'impostazione è visibile solo quando il [plugin di sviluppo OsmAnd](../../plugins/development.md) è abilitato. <br /> Queste impostazioni dovrebbero essere abilitate se l'orientamento della mappa direzionale è capovolto o traballa quando si utilizza [Android Auto](../auto-car.md#common-issues-and-solutions). |


## Mostra punti lungo il percorso {#show-points-along-the-route}

L'impostazione *Mostra lungo il percorso* consente di configurare parametri di percorso aggiuntivi ed è necessaria per il funzionamento di widget come il [Nome strada](../../widgets/nav-widgets#street-name) e il [Widget avvisi](../../widgets/nav-widgets.md#alert-widget). Le opzioni includono la visualizzazione di [**POI**](#points-of-interest-pois) e [**I miei preferiti**](#my-favorites) lungo il percorso o il loro utilizzo come aggiunta a quelli già configurati per il profilo, nonché la visualizzazione di un elenco completo di [**Avvisi sul traffico**](#traffic-warnings) lungo il percorso.  

- La possibilità di impostare distanze diverse (fino a 5 km, o 3,11 miglia, a seconda dell'[unità di lunghezza](../../personal/profiles.md#units--formats) impostata) dal percorso ai punti vicini è utile quando si utilizzano tipi di routing come [Linea retta](../routing/straight-line-routing.md) o [Diretto a punto](../routing/direct-to-point-routing.md).
- Per l'impostazione *Mostra lungo il percorso*, si consiglia di utilizzare i [Messaggi vocali](../guidance/voice-navigation.md) per la navigazione.
- *POI, Preferiti e Avvisi sul traffico* non vengono visualizzati nell'elenco per un percorso che hai già percorso.


### Visualizza e seleziona punti {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![punti lungo il percorso](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Mostra lungo il percorso*

![punti lungo il percorso](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Quando crei un percorso, puoi impostare i tipi di punti da visualizzare lungo il percorso nella sezione *Navigazione*.


### Punti di interesse (POI) {#points-of-interest-pois}

![Sovrapposizione POI Android](@site/static/img/map/poi_overlay_android.png) ![Sovrapposizione POI iOS](@site/static/img/map/poi_overlay_ios.png)

Le impostazioni POI in [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) sono associate all'impostazione **Mostra lungo il percorso**. Si tratta essenzialmente di un'impostazione aggiuntiva per la visualizzazione dei POI sulla mappa, direttamente correlata al percorso creato.  

Quando specifichi la visualizzazione di determinati POI su *Configura mappa*, vengono tutti visualizzati sulle mappe che hai scaricato, sia che tu abbia selezionato categorie o, se non ti interessa quale categoria, selezionato POI vicini.  

- Il numero e l'identificazione dei POI dipendono dalla *scala*.

- L'impostazione *Mostra lungo il percorso* visualizza la stessa categoria della *Sovrapposizione POI*, ma vedi l'*intero elenco* dei POI selezionati contemporaneamente, a partire dal punto della posizione corrente alla distanza impostata all'interno del tuo percorso.  

- Puoi rimuovere i POI non necessari dall'elenco o modificarli nel [Menu contestuale](../../map/map-context-menu.md) toccandone uno.

- L'elenco contiene i [tipi di POI](../../map/point-layers-on-map.md#poi-types) selezionati e brevi informazioni su ciascuno di essi, come l'*icona del tipo, il nome, la distanza dal punto di posizione corrente al POI lungo il percorso* e *indicazioni su quale lato del percorso in linea retta e a quale distanza si trova il POI*.  


### I miei preferiti {#my-favorites}

L'elenco contiene tutti i punti [Preferiti](../../personal/favorites.md#favorite-point) precedentemente aggiunti vicino al percorso che hai creato. Come per i POI, puoi selezionare la distanza a cui si trovano questi punti.  

- Se [disattivi la visualizzazione dei Preferiti sulla mappa](../../map/configure-map-menu.md), non scompaiono dall'elenco e continuano a essere visualizzati nel [widget](../../widgets/nav-widgets.md#street-name) e annunciati quando ti avvicini ad essi.

- Puoi aggiungere i tuoi *Punti preferiti* alla mappa non solo in anticipo, ma anche mentre navighi su un percorso.

- *Per aggiornare l'elenco*, disattiva I miei preferiti e poi riattivali.

- Ogni punto contiene un nome o coordinate, un gruppo, la distanza dal punto di posizione corrente al *Preferito* direttamente sulla linea del percorso, informazioni su quanto a destra o a sinistra il punto si trova dalla linea e la direzione del percorso.


### Avvisi sul traffico {#traffic-warnings}

Gli *Avvisi sul traffico* non vengono visualizzati direttamente sulla mappa come *POI* o *I miei preferiti*.

- **Per abilitare** questa opzione e vedere gli avvisi, devi prima abilitare e configurare il [Widget avvisi](../../widgets/nav-widgets.md#alert-widget).

- La scelta di visualizzare gli *Avvisi sul traffico* lungo il tuo percorso ti consente di vedere l'intero elenco appena prima di iniziare il tuo percorso, il che è utile quando pianifichi il tuo viaggio.

- Puoi rimuovere gli avvisi non necessari dall'elenco, o toccare il nome dell'avviso per [modificare la posizione](../../map/map-context-menu.md#avoid-road).


## Avvisi sullo schermo {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Le notifiche, come gli avvisi sul traffico o i limiti di velocità, appariranno sullo schermo come un widget. Appaiono nell'angolo inferiore sinistro mentre navighi. | [Tipi di widget avvisi](../../widgets/nav-widgets.md#alert-widget) |


## Aspetto della linea del percorso {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Percorso di navigazione Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Percorso di navigazione Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

Puoi selezionare l'aspetto della linea del percorso per stile o selezionare manualmente il colore, la larghezza e la trasparenza della linea. Inoltre, puoi scegliere se mostrare le frecce di svolta e le frecce di direzione sulla linea.

**Avanzate**: l'impostazione Personalizza linea del percorso consente di regolare l'aspetto della linea del percorso per visualizzare i cambiamenti di elevazione, salite o discese significative, ghiaccio sulla strada, strade non asfaltate, autostrade e altri possibili ostacoli. Puoi anche selezionare o creare [schemi di colori](../../personal/color-palette-schemes.md#routes) personalizzati da applicare alla linea del percorso.


:::note
 <ProFeature/> Alcuni parametri che puoi utilizzare solo con <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">abbonamento OsmAnd Pro</a>.
:::


### Colore {#color}

L'impostazione **Colore** modifica le tonalità di colore delle linee del percorso. Il loro colore generale cambia a seconda del tipo selezionato dalla collezione OsmAnd e in base alla **Legenda della mappa**. In alternativa, il loro colore diventa quello che imposti manualmente per colore e trasparenza.

- ***<Translate android="true" id="map_widget_renderer"/>***. Utilizzato con i colori predefiniti. Per una descrizione completa dei colori, vai a [Stili mappa predefiniti](../../map/vector-maps.md#default-map-styles).  
    ![stile mappa](@site/static/img/navigation/route/map_st_2.png)

- ***Personalizzato***. Consente di selezionare una linea in qualsiasi colore e trasparenza preferiti. Puoi selezionare impostazioni diverse per la mappa diurna e separatamente per la mappa notturna.  
    ![personalizzato](@site/static/img/navigation/route/custom.png)   ![personalizzato](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Mostra l'altezza del punto del percorso come un gradiente **verde-giallo-rosso**. Il **verde** indica il punto più basso del percorso, il **giallo** indica l'altezza media del punto e il **rosso** è il più alto. Se la differenza di altitudine del percorso è < 100 metri, il gradiente viene applicato parzialmente o non viene applicato, ad esempio per una semplice salita da 100 metri a 150 metri - il gradiente sarà **verde-giallo**. Nota che il colore non rappresenta il valore assoluto dell'altitudine.  
    ![Altitudine](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. La linea del percorso è colorata in diversi colori a seconda del profilo altimetrico del percorso. Una descrizione dettagliata si trova nell'articolo *Plugin Topografia*, sezione [Pendenza](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Altitudine](@site/static/img/navigation/route/Slope.png)   ![Altitudine](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Colora una linea di percorso o traccia in base alla *classificazione stradale*. Una descrizione dettagliata si trova nell'articolo *Mappe vettoriali - [Stile stradale](../../map/vector-maps.md#road-style)*, sezione.  
    ![Altitudine](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Fornisce informazioni sulla superficie fisica della strada o del sentiero. Una descrizione dettagliata si trova nell'articolo *Stile mappa OsmAnd - [Superficie](../../map-legend/osmand.md#surface-smoothness)*, sezione *Legenda mappa*.  
    ![Altitudine](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Classificazione della manovrabilità di strade o sentieri per veicoli a ruote, in particolare per quanto riguarda la regolarità e la scorrevolezza della superficie. Una descrizione dettagliata si trova nell'articolo *Stile mappa OsmAnd - [Scorrevolezza](../../map-legend/osmand.md#surface-smoothness)*, sezione *Legenda mappa*.  
    ![Altitudine](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Colora una linea di percorso o traccia in base alla *classificazione stradale invernale*. Una descrizione dettagliata si trova nell'articolo *Mappe vettoriali*, sezione [Strade invernali e ghiacciate](../../map/vector-maps.md#winter-and-ski).  
    ![Altitudine](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Colorazione di una linea di percorso o sentiero in base alla composizione della pavimentazione. Tipicamente, utilizzato quando la rete stradale è in gran parte non asfaltata. Una descrizione dettagliata si trova nell'articolo *Stile mappa OsmAnd - [Solidità della superficie](../../map-legend/osmand.md#surface-smoothness)*, sezione *Legenda mappa*.  
    ![Altitudine](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Difficoltà dei sentieri per cavalli***. Renderizza i sentieri in base alla difficoltà dei sentieri per cavalli.  
    ![Altitudine](@site/static/img/navigation/route/firmness.png)


### Larghezza {#width}

Puoi regolare la larghezza della linea del percorso per allinearla alla strada o al sentiero visualizzato sulla mappa. Per una più chiara identificazione visiva, puoi aumentare o diminuire manualmente la larghezza della linea secondo necessità. Per maggiori dettagli, consulta l'articolo *Tracce e percorsi — [Aspetto](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Viene utilizzato con la larghezza predefinita impostata da OsmAnd. Una descrizione completa si trova nell'articolo *Mappe vettoriali*, sezione [Stile mappa](../../map/vector-maps.md#default-map-styles).  
    ![stile mappa](@site/static/img/navigation/route/map_st_2.png)

- ***Larghezze sottile, media e spessa***. Puoi selezionare la larghezza della linea per adattarla alla larghezza della strada, o enfatizzare maggiormente la linea del percorso sulla mappa.  
    ![larghezza](@site/static/img/navigation/route/width_med.png)

- ***Personalizzato***. Ti consente di visualizzare una linea della larghezza che desideri. Utilizza la barra di scorrimento per selezionare la larghezza.  
    ![personalizzato](@site/static/img/navigation/route/custom_2.png)  


### Frecce di svolta {#turn-arrows}

L'impostazione Frecce di svolta ti consente di selezionare se visualizzare le frecce di svolta sulla linea del percorso.  

- ***Sulla mappa***  
    ![Altitudine](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![frecce di svolta ios mappa](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***Nell'app***  
    ![Altitudine](@site/static/img/navigation/route/turn_arr.png)   ![frecce di svolta ios](@site/static/img/navigation/route/turn_arr_ios.png)


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](../setup/route-navigation.md)
- [Navigazione per traccia](../setup/gpx-navigation.md)
- [Navigazione per marcatori](../setup/markers-navigation.md)
- [Dettagli del percorso](../setup/route-details.md)
- [Impostazioni di navigazione](./navigation-settings.md)
- [Messaggi vocali / Notifiche](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ultimo aggiornamento: Dicembre 2024*