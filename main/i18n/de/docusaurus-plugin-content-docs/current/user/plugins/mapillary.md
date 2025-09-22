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



## Übersicht {#overview}

Um sich schneller zurechtzufinden, können Sie in OsmAnd Straßenansichten Ihrer Routen oder Sonderziele verwenden, die von [Mapillary](https://www.mapillary.com/) bereitgestellt werden (eine Internetverbindung ist erforderlich).  

Die [Mapillary-Ebene](https://www.mapillary.com/) bringt Bilder auf Straßenebene direkt in die OsmAnd-App, sodass Sie die Umgebung eines beliebigen Sonderziels oder entlang Ihrer geplanten Route leicht überblicken können. Wenn Bilder fehlen, können Sie sie selbst hinzufügen, und andere können sie verwenden. Diese Funktion ist aus unserer Zusammenarbeit mit dem [Mapillary-Team](https://www.mapillary.com/about) entstanden und vereint die Vorteile beider Apps.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um Bilder auf Straßenebene auf der OsmAnd-Karte anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. Aktivieren Sie das [Mapillary-Plugin](../plugins/#enable--disable) im Abschnitt *Plugins* des *Hauptmenüs*.
2. Zeigen Sie die [Bilder auf Straßenebene](#enable-layer) auf der Karte für das gewünschte Profil im Menü "Karte konfigurieren" an.


## Kartenebene {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary-Plugin-Punkte auf der Karte Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary-Plugin-Punkte auf der Karte iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

Die Kartenebene mit Straßenbildern wird auf der OsmAnd-Karte als Reihen von verbundenen grünen Punkten angezeigt.

- An diesen grünen Punkten hängen die Fotos der Mapillary-Nutzer.
- Tippen Sie auf einen grünen Punkt auf der Karte, um ein Foto in der Straßenansicht zu öffnen. Fotos können auch aus einer Liste im [Kartenkontextmenü](#map-context-menu) ausgewählt werden, falls verfügbar.
- Nach der Auswahl wird der Anwendungsbildschirm in die OsmAnd-Karte und die Mapillary-Bilder auf Straßenebene aufgeteilt.
- Sie können [Filter](#data-filtering) anwenden, um die Fotos auszuwählen, die Sie auf der Karte anzeigen möchten.


### Ebene aktivieren {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary-Plugin Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Mapillary-Plugin-Bilder Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary-Plugin iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Mapillary-Plugin-Bilder iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Um Mapillary-Bilder auf Straßenebene auf der Karte anzuzeigen, müssen Sie diese Ebene im Menü "[Karte konfigurieren](../map/configure-map-menu.md)" im Abschnitt *Anzeigen* aktivieren.  

*Zugriff: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.  

:::note Mapillary-Fotoanzeige

- Tippen Sie auf die Schaltfläche *Drei-Punkte-Menü* (&#8285;), um das ausgewählte Bild in der [**Mapillary**](https://www.mapillary.com/mobile-apps)-Anwendung zu öffnen.
- Tippen Sie auf den Pfeil, um von Bild zu Bild zu wechseln.
:::


### Datenfilterung {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary-Plugin-Filter Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary-Plugin-Filter iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Sie können einen Filter erstellen und auswählen, welche Fotos auf der Karte angezeigt werden sollen. Wählen Sie zum Beispiel, ob nur aktuelle Bilder oder nur 360-Grad-Bilder angezeigt werden sollen.  

*Zugriff: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Kachel-Cache
Wenn die ausgewählten Bilder nicht angezeigt werden, verwenden Sie **Neu laden** für den **Kachel-Cache**.
:::


## Kartenkontextmenü {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary-Plugin Kartenkontextmenü Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary-Plugin Kartenkontextmenü iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Wenn das Mapillary-Plugin aktiviert ist, können Sie Fotos von Straßen ansehen, die in einem Radius von 40 Metern um den ausgewählten Punkt auf der Karte verfügbar sind. Die Fotos werden im [Kartenkontextmenü](../map/map-context-menu.md#online-photos) geöffnet.


## Fotos hinzufügen {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary-Plugin Kartenkontextmenü Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary-Plugin Kartenkontextmenü iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Um Fotos hinzuzufügen, müssen Sie sich in der [Mapillary-App](https://www.mapillary.com/mobile-apps) registrieren. Sie können auch Fotos zum Kartenkontextmenü hinzufügen, indem Sie auf die Schaltfläche *Fotos hinzufügen* im Abschnitt [Online-Fotos](../map/map-context-menu.md#online-photos) des Kartenkontextmenüs tippen. Daraufhin wird die Mapillary-Anwendung geöffnet.


## Mapillary-Widget {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="mapillary"/>*

![Mapillary-Plugin Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png)  ![Mapillary-Plugin Kartenkontextmenü Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate ios="true" ids="mapillary"/>*

![Mapillary-Plugin Kartenkontextmenü iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

Das [Mapillary-Widget](../widgets/info-widgets.md#mapillary-widget) wird verwendet, um schnellen Zugriff auf die Mapillary-Anwendung zu erhalten. Das Widget wird automatisch zum Hauptbildschirm hinzugefügt, wenn das Mapillary-Plugin aktiviert ist. Sie können das Mapillary-Widget und andere Widgets im Menü "[Bildschirm konfigurieren](../widgets/configure-screen.md)" aktivieren oder deaktivieren.


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)