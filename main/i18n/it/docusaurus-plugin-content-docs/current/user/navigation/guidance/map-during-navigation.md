---
source-hash: 5ea4f39511656fdb1c0f82a7a7dd625d84541afc04cd5b239076bb4ba1bdd62c
sidebar_position: 2
title: Schermata della Mappa Durante la Navigazione
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

Questo articolo descrive come configurare l'aspetto della mappa durante la navigazione. Ciò include funzionalità come la visualizzazione di [PDI lungo il percorso](#show-points-along-the-route), l'utilizzo di [avvisi sullo schermo](#screen-alerts), l'[aspetto della linea del percorso](#route-line-appearance) inclusi colore, larghezza e frecce di svolta. Queste funzionalità sono strettamente correlate alle [impostazioni di navigazione del percorso](../setup/route-navigation.md#settings).


## Mappa Durante la Navigazione {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Schermata della mappa durante la navigazione](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Schermata della mappa durante la navigazione](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Durante la navigazione, la mappa è uno strumento visivo per localizzare la propria posizione, identificare la destinazione, pianificare il percorso e visualizzare le indicazioni di navigazione. È possibile utilizzare lo zoom per fare ciò e trascinare e ruotare la mappa secondo necessità. La mappa può anche visualizzare informazioni stradali, nomi di strade, edifici e altri oggetti per aiutarti a determinare facilmente il tuo percorso.  

Durante la navigazione, l'aspetto della mappa si adatta in base al profilo di navigazione selezionato. Prima di iniziare la navigazione, assicurati che l'aspetto della mappa sia in linea con le tue preferenze su come dovrebbe funzionare durante la guida.

| Parametro | Descrizione | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | Il tempo per cui la visualizzazione della mappa viene sincronizzata con la posizione corrente dopo lo spostamento. | *Valore:* <br /> Mai, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec.|
| *<Translate android="true" ids="auto_zoom_map"/>*  | Ridimensiona automaticamente la mappa in base alla tua velocità, finché la mappa è sincronizzata con la tua posizione attuale. | *Valore:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - zoom manuale. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - lo zoom è di 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - lo zoom è di 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - lo zoom è di 5 m. |
| *<Translate android="true" ids="snap_to_road"/>*  | L'icona della posizione corrente sarà associata al percorso di navigazione corrente. | È possibile disattivare questa opzione, ma anche tutte le opzioni relative alla strada, come la visualizzazione delle corsie, non saranno visibili durante la navigazione. |
| *<Translate android="true" ids="approximate_bearing"/>* | Determina la direzione in base al percorso di navigazione che si sta seguendo. | L'impostazione è visibile solo quando il [plugin Sviluppo di OsmAnd](../../plugins/development.md) è abilitato. <br /> Queste impostazioni dovrebbero essere abilitate se l'orientamento della mappa direzionale è invertito o si muove a scatti quando si utilizza [Android Auto](../auto-car.md#common-issues-and-solutions). |


## Mostra Punti Lungo il Percorso {#show-points-along-the-route}

L'impostazione *Mostra lungo il percorso* consente di configurare parametri di percorso aggiuntivi ed è necessaria per il funzionamento di widget come il [Nome della via](../../widgets/nav-widgets#street-name) e il [Widget Avvisi](../../widgets/nav-widgets.md#alert-widget). Le opzioni includono la visualizzazione di [**PDI**](#points-of-interest-pois) e [**I miei Preferiti**](#my-favorites) lungo il percorso o il loro utilizzo in aggiunta a quelli già configurati per il profilo, nonché la visualizzazione di un elenco completo di [**Avvisi sul traffico**](#traffic-warnings) lungo il percorso.  

- La possibilità di impostare distanze diverse (fino a 5 km, o 3,11 miglia, a seconda dell'[unità di lunghezza](../../personal/profiles.md#units--formats) impostata) dal percorso ai punti vicini è utile quando si utilizzano tipi di percorso come [Linea retta](../routing/straight-line-routing.md) o [Diretto al punto](../routing/direct-to-point-routing.md).
- Per l'impostazione *Mostra lungo il percorso*, si consiglia di utilizzare le [Istruzioni vocali](../guidance/voice-navigation.md) per la navigazione.
- *PDI, Preferiti e Avvisi sul traffico* non vengono visualizzati nell'elenco di un percorso già percorso.


### Visualizza e Seleziona Punti {#view-and-select-points}

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

Quando si crea un percorso, è possibile impostare i tipi di punti da visualizzare lungo il percorso nella sezione *Navigazione*.


### Punti di Interesse (PDI) {#points-of-interest-pois}

![Sovrapposizione PDI Android](@site/static/img/map/poi_overlay_android.png) ![Sovrapposizione PDI iOS](@site/static/img/map/poi_overlay_ios.png)

Le impostazioni dei PDI in [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) sono associate all'impostazione **Mostra lungo il percorso**. Si tratta essenzialmente di un'impostazione aggiuntiva per la visualizzazione dei PDI sulla mappa, direttamente correlata al percorso creato.  

Quando si specifica la visualizzazione di determinati PDI su *Configura mappa*, questi vengono tutti visualizzati sulle mappe scaricate, sia che si siano selezionate delle categorie, sia che, se non si tiene conto della categoria, si siano selezionati i PDI vicini.  

- Il numero e l'identificazione dei PDI *dipendono dalla scala*.

- L'impostazione *Mostra lungo il percorso* visualizza la stessa categoria di *Sovrapposizione PDI*, ma si vede l'*intero elenco* di PDI selezionati in una sola volta, a partire dal punto della posizione corrente alla distanza impostata all'interno del percorso.  

- È possibile rimuovere i PDI non necessari dall'elenco o modificarli nel [menu Contestuale](../../map/map-context-menu.md) toccandone uno.

- L'elenco contiene i [tipi di PDI](../../map/point-layers-on-map.md#poi-types) selezionati e brevi informazioni su ciascuno di essi, come l'*icona del tipo, il nome, la distanza dal punto di posizione corrente al PDI lungo il percorso* e *le indicazioni su quale lato del percorso in linea retta e a quale distanza si trova il PDI*.  


### I miei Preferiti {#my-favorites}

L'elenco contiene tutti i punti [Preferiti](../../personal/favorites.md#favorite-point) precedentemente aggiunti vicino al percorso creato. Come per i PDI, è possibile selezionare la distanza a cui si trovano questi punti.  

- Se si [disattiva la visualizzazione dei Preferiti sulla mappa](../../map/configure-map-menu.md), questi non scompaiono dall'elenco e continuano a essere visualizzati nel [widget](../../widgets/nav-widgets.md#street-name) e annunciati quando ci si avvicina.

- È possibile aggiungere i propri *punti Preferiti* alla mappa non solo in anticipo, ma anche durante la navigazione di un percorso.

- *Per aggiornare l'elenco*, disattivare e riattivare I miei Preferiti.

- Ogni punto contiene un nome o delle coordinate, un gruppo, la distanza dal punto di posizione corrente al *Preferito* direttamente sulla linea del percorso, informazioni sulla distanza a destra o a sinistra del punto dalla linea e la direzione del percorso.


### Avvisi sul Traffico {#traffic-warnings}

Gli *Avvisi sul traffico* non vengono visualizzati direttamente sulla mappa come i *PDI* o *I miei Preferiti*.

- **Per abilitare** questa opzione e vedere gli avvisi, è necessario prima abilitare e configurare il [Widget Avvisi](../../widgets/nav-widgets.md#alert-widget).

- La scelta di visualizzare gli *Avvisi sul traffico* lungo il percorso consente di vedere l'intero elenco poco prima di iniziare il percorso, il che è utile quando si pianifica il viaggio.

- È possibile rimuovere gli avvisi non necessari dall'elenco o toccare il nome dell'avviso per [modificare la posizione](../../map/map-context-menu.md#avoid-road).


## Avvisi sullo Schermo {#screen-alerts}

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
| **<Translate android="true" ids="screen_alerts"/>** | Le notifiche, come gli avvisi sul traffico o i limiti di velocità, appariranno sullo schermo come un widget. Appaiono nell'angolo in basso a sinistra durante la navigazione. | [Tipi di widget di avviso](../../widgets/nav-widgets.md#alert-widget) |


## Aspetto della Linea del Percorso {#route-line-appearance}

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

È possibile selezionare l'aspetto della linea del percorso per stile o selezionare manualmente il colore, la larghezza e la trasparenza della linea. Inoltre, è possibile scegliere se mostrare le frecce di svolta e le frecce di direzione sulla linea.

**Avanzate**: l'impostazione Personalizza linea del percorso consente di regolare l'aspetto della linea del percorso per visualizzare i cambiamenti di altitudine, salite o discese significative, ghiaccio sulla strada, strade non asfaltate, autostrade e altri possibili ostacoli. È inoltre possibile selezionare o creare [schemi di colori](../../personal/color-palette-schemes.md#routes) personalizzati da applicare alla linea del percorso.


:::note
 <ProFeature/> Alcuni parametri possono essere utilizzati solo con l'abbonamento <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro</a>.
:::


### Colore {#color}

L'impostazione **Colore** modifica le tonalità di colore delle linee del percorso. Il loro colore generale cambia a seconda del tipo selezionato dalla collezione OsmAnd e in base alla **Legenda della mappa**. In alternativa, il loro colore diventa quello impostato manualmente per colore e trasparenza.

- ***<Translate android="true" id="map_widget_renderer"/>***. Utilizzato con i colori predefiniti. Per una descrizione completa dei colori, vai a [Stili di mappa predefiniti](../../map/vector-maps.md#default-map-styles).  
    ![stile mappa](@site/static/img/navigation/route/map_st_2.png)

- ***Personalizzato***. Consente di selezionare una linea in qualsiasi colore e trasparenza preferiti. È possibile selezionare impostazioni diverse per la mappa diurna e separatamente per la mappa notturna.  
    ![personalizzato](@site/static/img/navigation/route/custom.png)   ![personalizzato](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Mostra l'altezza del punto del percorso come un gradiente **verde-giallo-rosso**. Il **verde** indica il punto più basso del percorso, il **giallo** indica l'altezza media del punto e il **rosso** è il più alto. Se la differenza di altitudine del percorso è < 100 metri, il gradiente viene applicato parzialmente o non viene applicato, ad esempio per una semplice salita da 100 metri a 150 metri - il gradiente sarà **verde-giallo**. Si noti che il colore non rappresenta il valore assoluto dell'altitudine.  
    ![Altitudine](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. La linea del percorso è colorata in diversi colori a seconda del profilo altimetrico del percorso. Una descrizione dettagliata si trova nell'articolo del *plugin Topografia*, sezione [Pendenza](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Altitudine](@site/static/img/navigation/route/Slope.png)   ![Altitudine](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Colora una linea di percorso o traccia in base alla *classificazione stradale*. Una descrizione dettagliata si trova nella sezione *Mappe vettoriali - [Stile strada](../../map/vector-maps.md#road-style)*.  
    ![Altitudine](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Fornisce informazioni sulla superficie fisica della strada o del sentiero. Una descrizione dettagliata si trova nell'articolo *Stile mappa OsmAnd - [Superficie](../../map-legend/osmand.md#surface-smoothness)* nella sezione *Legenda mappa*.  
    ![Altitudine](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Classificazione della manovrabilità di strade o sentieri per veicoli a ruote, in particolare per quanto riguarda la regolarità e la scorrevolezza della superficie. Una descrizione dettagliata si trova nell'articolo *Stile mappa OsmAnd - [Scorrevolezza](../../map-legend/osmand.md#surface-smoothness)* nella sezione *Legenda mappa*.  
    ![Altitudine](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Colora una linea di percorso o traccia in base alla *classificazione delle strade invernali*. Una descrizione dettagliata si trova nell'articolo *Mappe vettoriali*, sezione [Strade invernali e ghiacciate](../../map/vector-maps.md#winter-and-ski).  
    ![Altitudine](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Colorazione di una linea di percorso o sentiero in base alla composizione del fondo stradale. Tipicamente, utilizzato quando la rete stradale è in gran parte non asfaltata. Una descrizione dettagliata si trova nell'articolo *Stile mappa OsmAnd - [Consistenza della superficie](../../map-legend/osmand.md#surface-smoothness)* nella sezione *Legenda mappa*.  
    ![Altitudine](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Difficoltà dei sentieri per cavalli***. Renderizza i sentieri in base alla difficoltà dei percorsi per cavalli.  
    ![Altitudine](@site/static/img/navigation/route/firmness.png)


### Larghezza {#width}

È possibile regolare la larghezza della linea del percorso per allinearla alla strada o al sentiero visualizzato sulla mappa. Per un'identificazione visiva più chiara, è possibile aumentare o diminuire manualmente la larghezza della linea secondo necessità. Per maggiori dettagli, fare riferimento all'articolo *Tracce e Percorsi — [Aspetto](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Viene utilizzato con la larghezza predefinita impostata da OsmAnd. Una descrizione completa si trova nell'articolo *Mappe vettoriali*, sezione [Stile mappa](../../map/vector-maps.md#default-map-styles).  
    ![stile mappa](@site/static/img/navigation/route/map_st_2.png)

- ***Larghezze Sottile, Media e Grassetto***. È possibile selezionare la larghezza della linea in modo che corrisponda alla larghezza della strada o enfatizzare maggiormente la linea del percorso sulla mappa.  
    ![larghezza](@site/static/img/navigation/route/width_med.png)

- ***Personalizzato***. Consente di visualizzare una linea della larghezza desiderata. Utilizzare la barra di scorrimento per selezionare la larghezza.  
    ![personalizzato](@site/static/img/navigation/route/custom_2.png)  


### Frecce di Svolta {#turn-arrows}

L'impostazione Frecce di svolta consente di selezionare se le frecce di svolta vengono visualizzate sulla linea del percorso.  

- ***Sulla mappa***  
    ![Altitudine](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![frecce_svolta_ios_mappa](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***Nell'app***  
    ![Altitudine](@site/static/img/navigation/route/turn_arr.png)   ![frecce_svolta_ios](@site/static/img/navigation/route/turn_arr_ios.png)


## Articoli Correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Preparazione del percorso](../setup/route-navigation.md)
- [Navigazione tramite traccia](../setup/gpx-navigation.md)
- [Navigazione tramite indicatori](../setup/markers-navigation.md)
- [Dettagli del percorso](../setup/route-details.md)
- [Impostazioni di navigazione](./navigation-settings.md)
- [Istruzioni vocali / Notifiche](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)