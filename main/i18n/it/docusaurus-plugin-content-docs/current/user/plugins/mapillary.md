---
source-hash: aedd55d826014d3cfaaa5918963baf22bd911b20a8772409d2eb09fa220d9c67
sidebar_position: 6
title: Mapillary
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

Per spostarsi più velocemente, in OsmAnd è possibile utilizzare le visualizzazioni a livello stradale dei percorsi o dei punti di interesse fornite da [Mapillary](https://www.mapillary.com/) (è necessaria una connessione a Internet).

Il [livello Mapillary](https://www.mapillary.com/) porta le immagini a livello stradale direttamente nell'app OsmAnd, in modo da poter facilmente avere una panoramica dei dintorni di qualsiasi luogo di interesse o lungo il percorso pianificato. Se le immagini mancano, è possibile aggiungerle autonomamente e altri possono utilizzarle. Questa funzione è nata dalla nostra collaborazione con il [team Mapillary](https://www.mapillary.com/about), unendo i vantaggi di entrambe le app.

## Parametri di configurazione richiesti {#required-setup-parameters}

Per visualizzare le immagini a livello stradale sulla mappa di OsmAnd, è necessario effettuare le seguenti impostazioni:

1. Abilitare il [plugin Mapillary](../plugins/#enable--disable) nella sezione *Plugin* del *Menu principale*.
2. Visualizzare le [immagini a livello stradale](#enable-layer) sulla mappa per il profilo richiesto nel menu Configura mappa.

## Livello mappa {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Punti del plugin Mapillary sulla mappa Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Punti del plugin Mapillary sulla mappa iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

Il livello della mappa con le immagini stradali viene visualizzato sulla mappa di OsmAnd come righe di punti verdi collegati.

- Le foto degli utenti Mapillary sono allegate a questi punti verdi.
- Tocca un punto verde sulla mappa per aprire una foto di Street View. Le foto possono anche essere selezionate da un elenco nel [menu contestuale della mappa](#map-context-menu), se disponibile.
- Dopo la selezione, la schermata dell'applicazione è divisa tra la mappa di OsmAnd e le immagini a livello stradale di Mapillary.
- È possibile applicare [filtri](#data-filtering) per selezionare le foto da visualizzare sulla mappa.

### Abilita livello {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugin Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Immagini del plugin Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plugin Mapillary iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Immagini del plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Per visualizzare le immagini a livello stradale di Mapillary sulla mappa, è necessario abilitare questo livello nel menu [Configura mappa](../map/configure-map-menu.md) nella sezione *Mostra*.

*Per accedere: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note Visualizzatore di foto Mapillary

- Tocca il pulsante *menu a tre puntini* (&#8285;) per aprire l'immagine selezionata nell'applicazione [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Tocca la freccia per passare da un'immagine all'altra.
:::

### Filtro dati {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Filtro plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Filtro plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

È possibile creare un filtro e selezionare quali foto visualizzare sulla mappa. Ad esempio, scegliere di visualizzare solo le immagini recenti o solo le immagini a 360 gradi.

*Per accedere: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Cache delle tessere
Se le immagini selezionate non vengono visualizzate, utilizzare **Ricarica** per la **Cache delle tessere**.
:::

## Menu contestuale della mappa {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu contestuale della mappa del plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contestuale della mappa del plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Se il plugin Mapillary è abilitato, è possibile visualizzare le foto delle strade disponibili entro un raggio di 40 metri dal punto selezionato sulla mappa. Le foto vengono aperte nel [menu contestuale della mappa](../map/map-context-menu.md#online-photos).

## Aggiungi foto {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu contestuale della mappa del plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contestuale della mappa del plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Per aggiungere foto, è necessario registrarsi nell'[app Mapillary](https://www.mapillary.com/mobile-apps). È anche possibile aggiungere foto al menu contestuale della mappa toccando il pulsante *Aggiungi foto* nella sezione [Foto online](../map/map-context-menu.md#online-photos) del menu contestuale della mappa. Quindi si aprirà l'applicazione Mapillary.

## Widget Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="mapillary"/>*

![Plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png) ![Menu contestuale della mappa del plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegli un pannello → <Translate ios="true" ids="mapillary"/>*

![Menu contestuale della mappa del plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

Il [widget Mapillary](../widgets/info-widgets.md#mapillary-widget) viene utilizzato per ottenere un rapido accesso all'applicazione Mapillary. Il widget viene aggiunto automaticamente alla schermata principale quando il plugin Mapillary è abilitato. È possibile abilitare o disabilitare il widget Mapillary e altri widget nel menu [Configura schermo](../widgets/configure-screen.md).

## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (stili di mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: ottobre 2024*