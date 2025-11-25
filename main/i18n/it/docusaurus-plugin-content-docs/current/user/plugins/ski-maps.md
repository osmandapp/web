---
source-hash: f47abfa20a1e2094476033fa2ea73c6c94bc39f2fc7f0a5024cacdd02d47d391
sidebar_position: 13
title:  Visualizzazione Mappa Sci
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

Il plugin Visualizzazione Mappa Sci di OsmAnd mostra piste famose e popolari, aree sciistiche ufficialmente approvate e mappe dei sentieri della maggior parte delle stazioni sciistiche. Le mappe delle piste di [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) sono la fonte dei dati per le mappe sciistiche di OsmAnd. Combinando mappe vettoriali con mappe raster, la mappa sciistica di OsmAnd è molto accurata e sarà utile per istruttori, alpinisti e appassionati di sport invernali.

La mappa sciistica di OsmAnd fa parte delle mappe vettoriali e non richiede download aggiuntivi. È disabilitata per impostazione predefinita. La Mappa Sci di OsmAnd è uno degli [Stili mappa](../map/vector-maps.md) che fornisce funzionalità aggiuntive evidenziando alcuni oggetti e rendendone altri meno visibili.  

Di seguito sono mostrati due profili: quello a sinistra è per lo sci e quello a destra per la guida. Il profilo Sci evidenzia sentieri, aerialways, colori invernali e tutti gli oggetti della mappa utili per la navigazione nell'area sciistica.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mappe sciistiche in Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Nessuna mappa sciistica in Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mappe sciistiche in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Nessuna mappa sciistica in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Parametri di configurazione richiesti {#required-setup-parameters}

L'impostazione seguente fa apparire la Mappa Sci di OsmAnd sullo schermo:

1. Abilitare il [plugin Visualizzazione Mappa Sci](../plugins/index.md#enable--disable).  
2. Impostare lo stile mappa [Inverno e Sci](#set-winter-and-ski-map-style) per il [profilo](../personal/profiles.md) richiesto.  
3. Se necessario, [combinare le mappe](#combine-maps).  
  

### Impostare lo stile mappa Inverno e Sci {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*  

![Abilita stile Inverno in Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Stile mappa plugin mappe sciistiche Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*  

![Abilita stile Inverno in iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Stile mappa plugin mappe sciistiche iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Lo stile mappa Inverno e Sci evidenzia sentieri, percorsi di scialpinismo, piste da slittino e informazioni relative all'inverno e allo sci. Per visualizzare lo stile sulla mappa, è necessario effettuare le seguenti impostazioni:

1. Selezionare il [profilo](../personal/profiles.md) richiesto.  
2. Aprire [Configura mappa](../map/configure-map-menu.md).  
3. Scorrere fino a Stile mappa/Tipo di mappa, aprirlo e selezionare **Inverno e Sci**.

:::tip configurazioni
Il profilo Sci è progettato per essere utilizzato in combinazione con gli stili Inverno e Sci. Tuttavia, il tipo di navigazione per ogni profilo specifico può essere modificato e impostato individualmente, quindi la configurazione finale del profilo, dello stile della mappa e della navigazione dipende completamente dalle tue impostazioni.
:::


### Combinare le mappe {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nessuna combinazione di mappe in Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Con combinazione di mappe in Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nessuna combinazione di mappe in iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![Con combinazione di mappe in iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

La [mappa vettoriale](../map/vector-maps.md) con lo [stile mappa Inverno e Sci](../map/vector-maps.md#winter-and-ski) incluso può essere completata con le [linee di contorno](../plugins/topography.md#contour-lines) e l'[ombreggiatura del rilievo](../plugins/topography.md#hillshade-slope-and-altitude-layers). Di seguito sono riportati due esempi. Le piste sulla mappa vettoriale predefinita sono mostrate a sinistra, e le piste sulla mappa vettoriale combinata con la mappa raster *Linee di contorno* e *Ombreggiatura del rilievo* sono mostrate a destra. Nel secondo caso, la mappa mostra più dati di elevazione per aiutare a stimare la difficoltà, il rischio e la distanza.  


### Disabilitare lo stile Mappa Sci {#disable-ski-map-style}

Se si preferisce rimuovere i sentieri e i colori invernali dalla mappa, o se la stagione sciistica è finita, eseguire una delle seguenti operazioni:

- Deselezionare lo stile mappa [Inverno e Sci](#set-winter-and-ski-map-style) per il profilo richiesto.  
- Cambiare il [profilo Sci](../personal/profiles.md) con un qualsiasi altro profilo.
- Disabilitare il [plugin Visualizzazione Mappa Sci](../plugins/index.md#enable--disable).


:::info disinstallare il plugin
Il plugin Visualizzazione Mappa Sci è un'applicazione separata e la disabilitazione della sua visualizzazione non lo rimuove. Se è necessario disinstallarlo, andare alle impostazioni di Android utilizzando *Apri Impostazioni* nel menu del plugin.  
:::


## Profilo Sci {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Andare a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Profilo Sci in Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Andare a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Profilo Sci in iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Gli stili mappa Inverno e Sci possono essere abilitati in qualsiasi profilo. Ma è più utile nel [profilo Sci](../personal/profiles.md), dove è impostato di default. Il profilo Sci è molto comodo per la [navigazione Sci](../navigation/routing/ski-routing.md).


## Stile Mappa Sci {#ski-map-style}

Utilizzare la [Legenda mappa sci](../../user/map-legend/ski-map.md) per qualsiasi riferimento. Aiuta a identificare i tipi di piste sulla mappa, così come i tipi di aerialways e altre caratteristiche che possono essere lette dalla mappa.

Leggendo la mappa, è possibile scoprire i dettagli importanti per voi, come la difficoltà di un particolare sentiero, il tipo di sentiero, se viene effettuata la preparazione e se il sentiero è illuminato di notte.

Le opzioni qui descritte sono disponibili nella [navigazione Sci](../navigation/setup/route-navigation.md). La **navigazione Sci** imposta le opzioni di percorso individuali, che si applicano solo allo sci.


:::info stile di rendering
La Mappa Sci di OsmAnd è costruita come uno degli stili di rendering, che determina quali oggetti mostrare sulla mappa e l'aspetto degli oggetti. Tutti gli stili di rendering sono descritti nel file [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). Per le regole che definiscono la struttura interna del file XML, vedere la [documentazione sul rendering](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Piste per difficoltà {#pistes-by-difficulty}

| Colore | Descrizione |
| --- | --- |
| ![Pista per principianti](@site/static/img/plugins/ski-maps/1c_green_1.png) | Verde - Pista per principianti |
| ![Piste facili](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Blu - Piste facili |
| ![Piste intermedie](@site/static/img/plugins/ski-maps/3c_red_1.png) | Rosso - Piste intermedie |
| ![Difficoltà avanzata](@site/static/img/plugins/ski-maps/4c_black_1.png) | Nero - Piste di difficoltà avanzata |
| ![Difficoltà per esperti](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Giallo - Piste di difficoltà per esperti |

La difficoltà delle tracce è solitamente indicata da colori specifici. I colori possono essere diversi in diversi paesi e resort. Di seguito sono riportate alcune linee guida pratiche.

:::tip guida
Per una guida più specifica per ogni tipo di difficoltà di pista, consultare il [riferimento difficoltà piste OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) o qualsiasi altra fonte che consideri anche pendenze, ostacoli e pericoli. Nello stile mappa Inverno e Sci, determinati pericoli mappati (ad esempio aree soggette a valanghe taggate come hazard=avalanche) possono essere mostrati come POI di pericolo sulla mappa e devono essere tenuti in considerazione insieme alla difficoltà della pista.  
:::


### Piste per tipo {#piste-by-types}

Le piste si differenziano per tipo. Un tipo rappresenta caratteristiche diverse per una pista per soddisfare i requisiti di diverse attività legate all'inverno: sci alpino, pattinaggio classico, snowboard, slittino, sci fuoripista, scialpinismo, sci su gobbe, sci notturno, ecc. Comprendere il [tipo di pista](https://wiki.openstreetmap.org/wiki/Key:piste:type) sulla mappa aiuta a costruire un percorso di navigazione ottimale.

- **Pista da sci alpino/discesa.**  
Utilizzata per la navigazione Sci. Questo [tipo di pista](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) ha una direzione e una difficoltà, e molto spesso è circondata dai confini della stazione sciistica. Quando una pista da discesa viene selezionata per la navigazione Sci, viene presa in considerazione la direzione della pista. Se i punti di Partenza e Destinazione sono stabiliti in senso opposto alla direzione della pista, la navigazione procede lungo l'aerialway più vicina.

- **Pista da sci nordico/fuoripista.**  
Utilizzata anche per la navigazione Sci. Questo [tipo di pista](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) non ha difficoltà, può avere o meno una direzione e molto spesso va oltre i confini della stazione sciistica. Durante la navigazione lungo questo tipo di piste, i punti di Partenza e Destinazione possono spesso essere scambiati.

- **Pista da scialpinismo.**  
Spesso utilizzata dagli sciatori per una salita nordica e una discesa. La difficoltà di una pista da scialpinismo è spesso contrassegnata dal rispettivo colore. La navigazione Sci può costruire un percorso lungo questo tipo di pista, il che consente di combinare i tipi di pista.

- **Altre piste da sci.**  
Tipi di piste come *Sentieri escursionistici* o *Piste da slittino* possono essere utilizzati per i profili di sci o escursionismo.


### Preparazione delle piste {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Abilita preparazione in Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Preparazione visualizzata in Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Abilita preparazione in iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Preparazione visualizzata in iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Per verificare sulla mappa se una particolare pista è preparata, è necessario abilitare l'opzione **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** nell'elenco **<Translate android="true" ids="rendering_category_details"/>** aperto dal menu [Configura mappa](../map/configure-map-menu.md).  
Macchine speciali preparano le piste per renderle adatte all'attività appropriata, come il pattinaggio classico, il pattinaggio su ghiaccio e altro. La stessa pista può essere preparata in modo diverso in aree diverse.

### Percorsi delle piste da sci {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Piste da sci e percorsi*

![Percorsi disabilitati in Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Percorsi abilitati in Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)


</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Piste da sci e percorsi*

![Percorsi disabilitati in iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Percorsi abilitati in iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Per scoprire su quali piste al di fuori della stazione sciistica è possibile navigare, è necessario abilitare l'opzione **Piste da sci e percorsi** nell'elenco [**<Translate android="true" ids="rendering_category_routes"/>**](../map/routes.md), aperto dal menu [Configura mappa](../map/configure-map-menu.md).  

Con il profilo Sci, la navigazione sci e lo [stile mappa Inverno e Sci](../map/vector-maps.md#winter-and-ski) abilitati, le [Piste da sci e percorsi](../map/vector-maps.md#ski-slopes-and-routes) mostrano tutti i tipi di piste che la navigazione Sci può utilizzare per costruire percorsi di navigazione. Tali percorsi delle piste da sci, se abilitati, sono delineati con il colore viola principalmente al di fuori dei confini della stazione sciistica.  
Quando si abilita l'opzione [Piste da sci e percorsi](../map/vector-maps.md#ski-slopes-and-routes) per uno stile mappa diverso da Inverno e Sci, vengono visualizzate solo le piste. Altre funzionalità relative allo sci potrebbero non essere mostrate in questo livello di stile.  
_Le piste da sci e i percorsi_ [sono cliccabili](../map/routes.md#actions-with-routes).


### Notte e illuminazione {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Abilita modalità Notte e Illuminazione in Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Notte e illuminazione in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Abilitazione modalità Notte e Illuminazione in iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Notte e Illuminazione in iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

Lo stile **Inverno e sci** può essere utilizzato con la [modalità Notte o Alba/tramonto](../map/vector-maps.md#map-mode). Una scelta comoda per chi preferisce i colori scuri, o scurire lo schermo di notte, così come per chi pratica lo sci notturno. Insieme alla modalità Notte, le Mappe Sci di OsmAnd possono anche mostrare quali piste hanno l'illuminazione con l'opzione [Illuminazione stradale](../map/vector-maps.md#details).  

Entrambe le opzioni si trovano nel menu [Configura mappa](../map/configure-map-menu.md).  

- Per abilitare l'opzione ***Modalità notte***, scorrere l'elenco:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*  

- Per abilitare l'opzione ***Illuminazione stradale***, aprire l'elenco **<Translate android="true" ids="rendering_category_details"/>** e attivare l'opzione:  
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)