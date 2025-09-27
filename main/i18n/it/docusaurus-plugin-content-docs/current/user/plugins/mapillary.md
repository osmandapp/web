---
source-hash: c1e40198b8d078b7e3678c0105a5dc91442a1ca2f47b65d03facbd7ca77df64a
sidebar_position: 6
title:  Mapillary
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

Per spostarsi più velocemente, in OsmAnd è possibile utilizzare le viste a livello stradale dei percorsi o dei luoghi di interesse fornite da [Mapillary](https://www.mapillary.com/) (è necessaria una connessione a Internet).  

[Il livello Mapillary](https://www.mapillary.com/) porta le immagini a livello stradale direttamente nell'app OsmAnd, in modo da poter avere una facile visione d'insieme dei dintorni di qualsiasi luogo di interesse o lungo il percorso pianificato. Se le immagini mancano, è possibile aggiungerle personalmente e altri potranno utilizzarle. Questa funzione è nata dalla nostra collaborazione con [il team di Mapillary](https://www.mapillary.com/about), unendo i vantaggi di entrambe le app.


## Parametri di configurazione richiesti {#required-setup-parameters}

Per visualizzare le immagini a livello stradale sulla mappa di OsmAnd, è necessario effettuare le seguenti impostazioni:

1. Abilitare il [plugin Mapillary](../plugins/#enable--disable) nella sezione *Plugin* del *Menu principale*.
2. Visualizzare le [Immagini a livello stradale](#enable-layer) sulla mappa per il profilo richiesto nel menu Configura mappa.


## Livello mappa {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Punti del plugin Mapillary sulla mappa Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Punti del plugin Mapillary sulla mappa iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

Il livello della mappa con le immagini stradali viene visualizzato sulla mappa di OsmAnd come file di punti verdi collegati.

- Le foto degli utenti di Mapillary sono allegate a questi punti verdi.
- Toccate un punto verde sulla mappa per aprire una foto con vista stradale. Le foto possono anche essere selezionate da un elenco nel [menu contestuale della mappa](#map-context-menu), se disponibile.
- Dopo la selezione, la schermata dell'applicazione viene divisa tra la mappa di OsmAnd e le immagini stradali a livello stradale di Mapillary.
- È possibile applicare dei [filtri](#data-filtering) per selezionare le foto da visualizzare sulla mappa.


### Abilitare il livello {#enable-layer}

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

:::note Visualizzatore foto Mapillary

- Toccare il pulsante del *menu a tre punti* (&#8285;) per aprire l'immagine selezionata nell'applicazione [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Toccare la freccia per passare da un'immagine all'altra.
:::


### Filtraggio dei dati {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Filtro del plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Filtro del plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

È possibile creare un filtro e selezionare le foto da visualizzare sulla mappa. Ad esempio, scegliere di visualizzare solo le immagini recenti o solo le immagini a 360 gradi.  

*Per accedere: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Cache delle tile
Se le immagini selezionate non vengono visualizzate, utilizzare **Ricarica** per la **Cache delle tile**.
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

Se il plugin Mapillary è abilitato, è possibile visualizzare le foto delle strade disponibili in un raggio di 40 metri dal punto selezionato sulla mappa. Le foto vengono aperte nel [menu contestuale della mappa](../map/map-context-menu.md#online-photos).


## Aggiungere foto {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu contestuale della mappa del plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu contestuale della mappa del plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Per aggiungere foto, è necessario registrarsi nell'app [Mapillary](https://www.mapillary.com/mobile-apps). È anche possibile aggiungere foto al menu contestuale della mappa toccando il pulsante *Aggiungi foto* nella sezione [Foto online](../map/map-context-menu.md#online-photos) del menu contestuale della mappa. Verrà quindi aperta l'applicazione Mapillary.


## Widget Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegliere un pannello → <Translate android="true" ids="mapillary"/>*

![Plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png)  ![Menu contestuale della mappa del plugin Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegliere un pannello → <Translate ios="true" ids="mapillary"/>*

![Menu contestuale della mappa del plugin Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

Il [widget Mapillary](../widgets/info-widgets.md#mapillary-widget) viene utilizzato per accedere rapidamente all'applicazione Mapillary. Il widget viene aggiunto automaticamente alla schermata principale quando il plugin Mapillary è abilitato. È possibile abilitare o disabilitare il widget Mapillary e altri widget nel menu [Configura schermata](../widgets/configure-screen.md).


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)