---
source-hash: f14066ee1c93315ba000b7389de0d0c6a42230c90308779a1b3a10e9a16d1fc7
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

Il plugin Visualizzazione Mappa Sci di OsmAnd mostra piste famose e popolari, aree sciistiche ufficialmente approvate e mappe dei percorsi della maggior parte delle stazioni sciistiche. Le mappe delle piste di [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) sono la fonte di dati per le mappe sciistiche di OsmAnd. Combinando mappe vettoriali con mappe raster, la mappa sciistica di OsmAnd è molto precisa e sarà utile per istruttori, scalatori e appassionati di sport invernali.

La mappa sciistica di OsmAnd fa parte delle mappe vettoriali e non richiede download aggiuntivi. È disabilitata per impostazione predefinita. La Mappa Sciistica di OsmAnd è uno degli [Stili Mappa](../map/vector-maps.md) che fornisce funzionalità aggiuntive evidenziando alcuni oggetti e rendendone altri meno visibili.

Di seguito sono mostrati due profili: quello a sinistra è per lo sci e quello a destra è per la guida. Il profilo Sci evidenzia sentieri, vie aeree, colori invernali e tutti gli oggetti della mappa utili per navigare nell'area sciistica.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mappe sciistiche in Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Nessuna mappa sciistica in Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mappe sciistiche in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Nessuna mappa sciistica in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Parametri di configurazione richiesti {#required-setup-parameters}

La seguente impostazione fa apparire la Mappa Sciistica di OsmAnd sullo schermo:

1. Abilita il [plugin Visualizzazione Mappa Sci](../plugins/index.md#enable--disable).
2. Imposta lo stile mappa [Inverno e Sci](#set-winter-and-ski-map-style) per il [profilo](../personal/profiles.md) richiesto.
3. Se necessario, [combina le mappe](#combine-maps).


### Imposta lo stile mappa Inverno e Sci {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![Abilita stile Inverno in Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Stile mappa plugin mappe sciistiche Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![Abilita stile Inverno in iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Stile mappa plugin mappe sciistiche iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Lo stile mappa Inverno e Sci evidenzia sentieri, percorsi di sci alpinismo, piste da slittino e informazioni relative all'inverno e allo sci. Per visualizzare lo stile sulla mappa, è necessario effettuare le seguenti impostazioni:

1. Seleziona il [profilo](../personal/profiles.md) richiesto.
2. Apri [Configura mappa](../map/configure-map-menu.md).
3. Scorri verso il basso fino a Stile mappa/Tipo mappa, aprilo e seleziona **Inverno e Sci**.

:::tip configurazioni
Il profilo Sci è progettato per essere utilizzato in combinazione con gli stili Inverno e Sci. Tuttavia, il tipo di navigazione per ogni profilo specifico può essere modificato e impostato individualmente, quindi la configurazione finale del profilo, dello stile mappa e della navigazione dipende completamente dalle tue impostazioni.
:::


### Combina Mappe {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nessuna combinazione di mappe in Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![Con combinazione di mappe in Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nessuna combinazione di mappe in iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![Con combinazione di mappe in iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

La [mappa vettoriale](../map/vector-maps.md) con lo [stile mappa Inverno e Sci](../map/vector-maps.md#winter-and-ski) incluso può essere completata con [Linee di livello](../plugins/topography.md#show-contour-linesterrain) e [Ombreggiatura](../plugins/topography.md#hillshade-map). Di seguito sono riportati due esempi. Le tracce sulla mappa vettoriale predefinita sono mostrate a sinistra, e le tracce sulla mappa vettoriale combinata con la mappa raster *Linee di livello* e *Ombreggiatura* sono mostrate a destra. Nel secondo caso, la mappa mostra più dati di elevazione per aiutare a stimare difficoltà, rischio e distanza.


### Disabilita Stile Mappa Sci {#disable-ski-map-style}

Se si preferisce rimuovere sentieri e colori invernali dalla mappa, o la stagione sciistica è finita, fare una delle seguenti operazioni:

- Deseleziona lo stile mappa [Inverno e Sci](#set-winter-and-ski-map-style) per il profilo richiesto.
- Cambia il [profilo Sci](../personal/profiles.md) con qualsiasi altro profilo.
- Disabilita il [plugin Visualizzazione Mappa Sci](../plugins/index.md#enable--disable).


:::info disinstalla plugin
Il plugin Visualizzatore Mappa Sci è un'applicazione separata e la disabilitazione della sua visualizzazione non lo rimuove. Se è necessario disinstallarlo, vai alle impostazioni di Android utilizzando *Apri Impostazioni* nel menu del plugin.
:::


## Profilo Sci {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Curve di profondità nautiche in Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Curve di profondità in iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Gli stili mappa Inverno e Sci possono essere abilitati in qualsiasi profilo. Ma è più utile nel [profilo Sci](../personal/profiles.md), dove è impostato per impostazione predefinita. Il profilo Sci è molto comodo per la [navigazione Sci](../navigation/routing/ski-routing.md).


## Stile Mappa Sci {#ski-map-style}

Utilizza la [Legenda Mappa Sci](../../user/map-legend/ski-map.md) per qualsiasi riferimento. Aiuta a identificare i tipi di piste sulla mappa, così come i tipi di vie aeree e altre caratteristiche che possono essere lette dalla mappa.

Leggendo la mappa, puoi scoprire i dettagli importanti per te, come la difficoltà di un particolare sentiero, il tipo di sentiero, se viene effettuata la battitura e se il sentiero è illuminato di notte.

Le opzioni qui descritte sono disponibili nella [navigazione Sci](../navigation/setup/route-navigation.md). La **navigazione Sci** imposta le opzioni di percorso individuali, che si applicano solo allo sci.


:::info stile di rendering
La Mappa Sciistica di OsmAnd è costruita come uno degli stili di rendering, che determina quali oggetti mostrare sulla mappa e l'aspetto degli oggetti. Tutti gli stili di rendering sono descritti nel file [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). Per le regole che definiscono la struttura interna del file XML, consulta la [documentazione sul Rendering](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Piste per difficoltà {#pistes-by-difficulty}

| Colore | Descrizione |
| --- | --- |
| ![Pista per principianti](@site/static/img/plugins/ski-maps/1c_green_1.png) | Verde - Pista per principianti |
| ![Colline facili](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Blu - Colline facili |
| ![Pendii intermedi](@site/static/img/plugins/ski-maps/3c_red_1.png) | Rosso - Pendii intermedi |
| ![Difficoltà avanzata](@site/static/img/plugins/ski-maps/4c_black_1.png) | Grigio - Pendii di difficoltà avanzata |
| ![Difficoltà esperta](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Giallo - Pendii di difficoltà esperta |

La difficoltà delle tracce è solitamente indicata da colori specifici. I colori possono essere diversi in diversi paesi e località. Di seguito sono riportate alcune linee guida pratiche.

:::tip guida
Per una guida più specifica per ogni tipo di difficoltà del sentiero, consulta il [riferimento sulla difficoltà delle piste OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) o qualsiasi altra fonte che consideri anche pendii, ostacoli e pericoli.
:::


### Piste per tipo {#piste-by-types}

Le piste si differenziano per tipo. Un tipo rappresenta caratteristiche diverse per una pista per soddisfare i requisiti di diverse attività legate all'inverno: sci alpino, pattinaggio classico, snowboard, slittino, sci di fondo, sci alpinismo, sci con gobbe, sci notturno, ecc. Comprendere il [tipo di pista](https://wiki.openstreetmap.org/wiki/Key:piste:type) sulla mappa aiuta a costruire un percorso di navigazione ottimale.

- **Pista da discesa/sci alpino.**
Utilizzata per la navigazione sciistica. Questo [tipo di pista](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) ha direzione e difficoltà, e molto spesso è circondata dai confini della stazione sciistica. Quando una pista da discesa viene selezionata per la navigazione sciistica, la direzione della pista viene presa in considerazione. Se i punti di partenza e di destinazione sono stabiliti in direzione opposta alla direzione della pista, la navigazione procede lungo la via aerea più vicina.

- **Pista da sci nordico/fondo.**
Utilizzata anche per la navigazione sciistica. Questo [tipo di pista](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) non ha difficoltà, può o meno avere una direzione, e molto spesso va oltre i confini della stazione sciistica. Quando si naviga lungo questo tipo di piste, i punti di partenza e di destinazione possono spesso essere scambiati.

- **Pista da sci alpinismo.**
Spesso utilizzata dagli sciatori per una salita nordica e una discesa. La difficoltà di una pista da sci alpinismo è spesso contrassegnata dal rispettivo colore. La navigazione sciistica può costruire un percorso lungo questo tipo di pista, che consente di combinare i tipi di pista.

- **Altra pista da sci.**
Tipi di piste come *Sentieri escursionistici* o *Piste da slittino* possono essere utilizzati per profili sciistici o escursionistici.


### Sentieri battuti {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Abilita battitura in Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Battitura visualizzata in Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Abilita battitura in iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Battitura visualizzata in iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Per verificare sulla mappa se una particolare pista è battuta, è necessario abilitare l'opzione **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** nell'elenco **<Translate android="true" ids="rendering_category_details"/>** aperto dal menu [Configura mappa](../map/configure-map-menu.md).
Macchine speciali battono le piste per prepararle all'attività appropriata, come il pattinaggio classico, il pattinaggio su ghiaccio e altri. La stessa pista può essere battuta in modo diverso in aree diverse.

### Percorsi delle piste da sci {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Percorsi disabilitati in Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Percorsi abilitati in Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Percorsi disabilitati in iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Percorsi abilitati in iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Per scoprire quali piste al di fuori della stazione sciistica è possibile navigare, è necessario abilitare l'opzione **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** nell'elenco **<Translate android="true" ids="rendering_category_routes"/>**, aperto dal menu [Configura mappa](../map/configure-map-menu.md).

Con il profilo Sci, la navigazione sciistica e lo stile mappa [Inverno e Sci](../map/vector-maps.md#winter-and-ski) abilitati, i percorsi delle [piste da sci](../map/vector-maps.md#routes) mostrano tutti i tipi di piste che la navigazione sciistica può utilizzare per costruire percorsi di navigazione lungo. Tali percorsi delle piste da sci, se abilitati, sono delineati con il colore viola principalmente al di fuori dei confini della stazione sciistica.


### Notte e illuminazione {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Abilita modalità Notte e illuminazione in Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Notte e illuminazione in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Abilitazione modalità Notte e illuminazione in iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Notte e illuminazione in iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

Lo stile **Inverno e sci** può essere utilizzato con la [modalità Notte o Alba/tramonto](../map/vector-maps.md#map-mode). Una scelta comoda per chi preferisce i colori scuri, o l'oscuramento dello schermo di notte, così come per chi pratica lo sci notturno. Insieme alla modalità Notte, le Mappe Sciistiche di OsmAnd possono anche mostrare quali piste hanno l'illuminazione con l'opzione [Illuminazione stradale](../map/vector-maps.md#details).

Entrambe le opzioni si trovano nel menu [Configura mappa](../map/configure-map-menu.md).

- Per abilitare l'opzione ***Modalità Notte***, scorri l'elenco verso il basso:
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*

- Per abilitare l'opzione ***Illuminazione stradale***, apri l'elenco **<Translate android="true" ids="rendering_category_details"/>** e attiva l'opzione:
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: Dicembre 2024*