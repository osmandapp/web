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



## Überblick {#overview}

Um schneller voranzukommen, können Sie in OsmAnd Straßenansichten Ihrer Routen oder interessanter Orte nutzen, die von [Mapillary](https://www.mapillary.com/) bereitgestellt werden (eine Internetverbindung ist erforderlich).

[Die Mapillary-Ebene](https://www.mapillary.com/) bringt Straßenbilder direkt in die OsmAnd-App, sodass Sie die Umgebung jedes interessanten Ortes oder entlang der von Ihnen geplanten Route leicht überblicken können. Wenn Bilder fehlen, können Sie diese selbst hinzufügen, und andere können sie verwenden. Diese Funktion ist aus unserer Zusammenarbeit mit [dem Mapillary-Team](https://www.mapillary.com/about) entstanden, die die Vorteile beider Apps vereint.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um Straßenbilder auf der OsmAnd-Karte anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. Aktivieren Sie das [Mapillary-Plugin](../plugins/#enable--disable) im Abschnitt *Plugins* des *Hauptmenüs*.
2. Zeigen Sie die [Straßenbilder](#enable-layer) auf der Karte für das erforderliche Profil im Menü "Karte konfigurieren" an.


## Kartenebene {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary Plugin Punkte auf der Karte Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary Plugin Punkte auf der Karte iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

Die Kartenebene mit Straßenbildern wird auf der OsmAnd-Karte als Reihen von verbundenen grünen Punkten angezeigt.

- Mapillary-Benutzerfotos sind an diese grünen Punkte angehängt.
- Tippen Sie auf einen grünen Punkt auf der Karte, um ein Straßenansichtsfoto zu öffnen. Fotos können auch aus einer Liste im [Kartenkontextmenü](#map-context-menu) ausgewählt werden, falls verfügbar.
- Nach der Auswahl wird der Anwendungsbildschirm in OsmAnd-Karte und Mapillary-Straßenbilder aufgeteilt.
- Sie können [Filter](#data-filtering) anwenden, um die Fotos auszuwählen, die auf der Karte angezeigt werden sollen.


### Ebene aktivieren {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary Plugin Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Mapillary Plugin Bilder Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary Plugin iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Mapillary Plugin Bilder iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Um Mapillary-Straßenbilder auf der Karte anzuzeigen, müssen Sie diese Ebene im Menü [Karte konfigurieren](../map/configure-map-menu.md) im Abschnitt *Anzeigen* aktivieren.

*Zugriff: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note Mapillary Foto-Viewer

- Tippen Sie auf die *Drei-Punkte-Menü*-Schaltfläche (&#8285;), um das ausgewählte Bild in der [**Mapillary**](https://www.mapillary.com/mobile-apps)-Anwendung zu öffnen.
- Tippen Sie auf den Pfeil, um von Bild zu Bild zu wechseln.
:::


### Datenfilterung {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary Plugin Filter Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary Plugin Filter iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Sie können einen Filter erstellen und auswählen, welche Fotos auf der Karte angezeigt werden sollen. Wählen Sie zum Beispiel, nur aktuelle Bilder oder nur 360-Grad-Bilder anzuzeigen.

*Zugriff: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Kachel-Cache
Wenn die ausgewählten Bilder nicht angezeigt werden, verwenden Sie **Neu laden** für den **Kachel-Cache**.
:::


## Kartenkontextmenü {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary Plugin Kartenkontextmenü Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary Plugin Kartenkontextmenü iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Wenn das Mapillary-Plugin aktiviert ist, können Sie Fotos von Straßen anzeigen, die im Umkreis von 40 Metern um den ausgewählten Punkt auf der Karte verfügbar sind. Die Fotos werden im [Kartenkontextmenü](../map/map-context-menu.md#online-photos) geöffnet.


## Fotos hinzufügen {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapillary Plugin Kartenkontextmenü Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary Plugin Kartenkontextmenü iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Um Fotos hinzuzufügen, müssen Sie sich in der [Mapillary-App](https://www.mapillary.com/mobile-apps) registrieren. Sie können auch Fotos zum Kartenkontextmenü hinzufügen, indem Sie im Abschnitt [Online-Fotos](../map/map-context-menu.md#online-photos) des Kartenkontextmenüs auf die Schaltfläche *Fotos hinzufügen* tippen. Dann wird die Mapillary-Anwendung geöffnet.


## Mapillary Widget {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wähle ein Panel → <Translate android="true" ids="mapillary"/>*

![Mapillary Plugin Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png) ![Mapillary Plugin Kartenkontextmenü Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wähle ein Panel → <Translate ios="true" ids="mapillary"/>*

![Mapillary Plugin Kartenkontextmenü iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

Das [Mapillary-Widget](../widgets/info-widgets.md#mapillary-widget) wird verwendet, um schnell auf die Mapillary-Anwendung zuzugreifen. Das Widget wird automatisch zum Hauptbildschirm hinzugefügt, wenn das Mapillary-Plugin aktiviert ist. Sie können das Mapillary-Widget und andere Widgets im Menü [Bildschirm konfigurieren](../widgets/configure-screen.md) aktivieren oder deaktivieren.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Oktober 2024*