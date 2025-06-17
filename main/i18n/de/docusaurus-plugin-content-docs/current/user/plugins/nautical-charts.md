---
source-hash: f789f8966a523942fabf582dd575007a0776da10c974c2aa53db7149d09a0cac
sidebar_position: 7
title:  Nautische Kartenansicht
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Überblick {#overview}

:::info Bezahlte Funktion
Das Plugin Nautische Kartenansicht ist eine [bezahlte Funktion](../purchases/index.md) der OsmAnd-App.
:::

Die Nautische Kartenansicht ist eine detaillierte grafische Darstellung von Ozeanen, Meeren, Küstengebieten und Flüssen, die Ihnen hilft, sich auf dem Wasser zurechtzufinden und beliebte Routen, Hindernisse in Ihrem Fahrwasser, die nächsten Häfen, Ankerplätze und andere wichtige Orientierungspunkte zu kennen.

Eine nautische Karte ist eine sehr detaillierte topografische Karte, die Skippern hilft, ein Schiff auf einem ausgewählten Kurs auf dem Wasser zu navigieren. Sie ähnelt einer Straßenkarte für Autofahrer. Aus historischen Gründen oft als "Seekarte" bezeichnet, ist sie eine detaillierte grafische Darstellung von Ozeanen, Meeren, Küstengebieten und Flüssen.

Nautische Karten sind wichtig für professionelle Segler und Amateure, die ein Boot mieten, um durch die Kanäle der Stadt zu fahren. Die Karten liefern ihnen verschiedene Informationen wie Segelrouten, Navigationslichter, Gefahrenzonen, Zonen, in denen das Segeln oder Anlegen erlaubt oder verboten ist, usw.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Nautische Karten](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nautische Karten](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Warum das nautische Thema wichtig ist {#why-the-nautical-theme-matters}

Alle professionellen Segler müssen offizielle nautische Karten auf ihren Schiffen haben. Diese Karten werden von autorisierten Agenturen veröffentlicht und sind recht teuer. Die Agenturen investieren stark in die Aktualisierung der Karten. Sie geben regelmäßige Updates für die Karten heraus, aber da die Überprüfung der Informationen und die Verarbeitung der Updates Zeit in Anspruch nehmen, sind nautische Karten nie vollständig auf dem neuesten Stand.

Basierend auf [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap) Daten werden OsmAnd Nautische Karten von den Menschen erstellt, die sie verwenden. Jeder Kartenbenutzer kann zur Karte beitragen, indem er Informationen hinzufügt, die er für sich selbst als wichtig und nützlich erachtet, wodurch die Karte detaillierter und genauer wird, ideal für die Orientierung oder Routenplanung.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die folgende Einrichtung sorgt dafür, dass die Nautische Karte auf dem Bildschirm angezeigt wird:

1. [Kaufen](../plugins/index.md#purchase) und [Aktivieren](../plugins/index.md#enable--disable) Sie das Plugin Nautische Kartenansicht.
2. [Laden Sie](#download-nautical-maps) die nautischen Karten herunter.
3. Stellen Sie den [nautischen Kartenstil](#set-nautical-map-style) für das erforderliche [Profil](../personal/profiles.md) ein.


### Nautischen Kartenstil einstellen {#set-nautical-map-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![Nautischer Kartentyp in Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![Nautischer Kartentyp in iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Verwenden Sie die [Kartenlegende](../../user/map-legend/nautical-map.md) als Referenz für alles, was auf der nautischen Karte angezeigt wird. Sie erklärt die symbolischen Elemente auf einer nautischen Karte und dient als Nachschlagewerk, um Ihnen bei der Navigation zu helfen, wenn Sie unsicher sind. Durch die Einstellung des nautischen Kartenstils erhalten Sie die beste Ansicht der heruntergeladenen und angezeigten nautischen Daten.

Um den aktuellen Kartenstil auf Nautisch zu ändern, müssen Sie die folgenden Einstellungen vornehmen:

1. Wählen Sie das erforderliche [Profil](../personal/profiles.md) aus.
2. Öffnen Sie [Karte konfigurieren](../map/configure-map-menu.md).
3. Scrollen Sie nach unten zu Kartenstil, öffnen Sie ihn und markieren Sie **Nautisch**.


### Nautische Karten herunterladen {#download-nautical-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Nautische Plugin-Kartenansicht Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Nautische Plugin-Kartenansicht iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Für eine optimale Darstellung können Karten an die aktuellen Bedürfnisse angepasst werden: Markierungen und Symbole können mit Tiefenpunkten und, falls erforderlich, Konturen ergänzt werden. Andererseits können Standardkarten mit Informationen über Binnen-, Küsten- und Küstennahe Gewässer für eine bestimmte Region eine gute Ergänzung zu den Informationen über Wasserwege auf einer nautischen Karte sein.

Wenn Sie eine nautische Karte [herunterladen](../start-with/download-maps.md), werden auf der Karte weitere Details zur *Boots*navigation angezeigt. Einige Arten von [nautischen Karten](../start-with/download-maps.md#type-of-maps) enthalten Details wie:

- **Nautische Markierungen und Symbole.**
Markierungen und Symbole enthalten alle nautischen Navigationsmarkierungen sowohl für die Binnen- als auch für die Küstenschifffahrt. Das Wissen um diese Markierungen hilft Ihnen, die Lage von Felsen, Hindernissen, Ankerplätzen, Bojen, Strömungen, tiefem und flachem Wasser und den Seiten des Fahrwassers unabhängig von der Richtung usw. vorherzusagen. Markierungen und Symbole werden einmal für die ganze Welt heruntergeladen.

- **Tiefenpunkte.**
Nautische Daten aus den Tiefenpunktpaketen werden durch Zahlen dargestellt, die auf dem Wasser angezeigt werden und die geringste Tiefe an einem bestimmten Ort angeben. Tiefenpunkte sind für jede Hemisphäre und einige Regionen verfügbar.

- **Tiefenlinien.**
Tiefenlinienpakete ermöglichen es Ihnen, Bereiche gleicher Tiefe zu definieren. Sie dienen dazu, Veränderungen des Reliefs unter der Wasseroberfläche zu visualisieren. Tiefenlinien können für bestimmte Bereiche heruntergeladen und dann ausgeschaltet werden, wenn Sie sie nicht benötigen.

:::info Tiefenzahlen
Alle Tiefenzahlen auf den nautischen Karten sind in Metern angegeben.
:::


### Nautischen Kartenstil deaktivieren {#disable-nautical-map-style}

Um Nautisch zu entfernen und eine der konventionellen Karten von OsmAnd anzuzeigen, tun Sie Folgendes:

- Deaktivieren Sie das Nautische Plugin.
- Ändern Sie den Kartenstil auf etwas anderes als *Nautisch*.

:::info HINWEIS
Das Deaktivieren des Nautischen Plugins entfernt nicht die geladenen nautischen Daten, sodass diese auch dann auf der Karte sichtbar bleiben, wenn Sie die Rendering-Methode von nautisch auf eine andere Methode ändern, wenn nautische Daten heruntergeladen wurden.
:::


## Nautisches Profil {#nautical-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Nautische Tiefenlinien in Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Tiefenlinien in iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

Die nautische Karte kann in jedes Profil aufgenommen werden. Sie ist jedoch am wertvollsten im [Boots-Profil](../personal/profiles.md) und insbesondere in der [Boots-Navigation](../navigation/routing/boat-navigation.md).


## Nautischer Kartenstil {#nautical-map-style}

Das Nautische Plugin in OsmAnd erweitert die Vektor-Layer-Kartenstile um den Nautischen Kartenstil. Es ermöglicht Ihnen, Kartendaten gemäß den Regeln der Nautischen Karten anzuzeigen, z. B.: gelbe Bereiche für Land und Untiefen, hellblaue Bereiche für flaches Wasser usw. Weitere Informationen finden Sie in der [Kartenlegende](../../user/map-legend/nautical-map.md).


### Tiefenpunkte {#depth-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Nautische Karten](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nautische Karten](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Tiefenpunkt-[Pakete](../start-with/download-maps.md#type-of-maps) sind für Europa, die Nordhalbkugel und die Südhalbkugel verfügbar und dienen Informationszwecken. Tiefenpunkte zeigen Veränderungen in der Topographie unter der Wasseroberfläche an und geben die geringste Tiefe an. Dies ist für die *Boots*-Navigation notwendig. Nach dem Herunterladen müssen Sie die [Tiefenlinien](#depth-contours) einschalten, um sie auf der Karte anzuzeigen.


### Tiefenlinien {#depth-contours}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Nautische Tiefenlinien in Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Tiefenlinien in iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Wenn eine nautische Karte auf dem Bildschirm angezeigt wird, können Sie anpassen, was Sie sehen:

- Anzeigen oder Ausblenden der *Tiefenlinien*.
- Einstellen des Detailgrads der Informationen über den Meeresboden: [*Linienbreite* und *Linienfarbschema*](../map/vector-maps.md#-nautical-depth).

:::info HINWEIS
Sie können der OsmAnd-App helfen, die Tiefenlinien-Datenbank zu erweitern, indem Sie Ihre Informationen über [OpenSeaMap](https://map.openseamap.org/) hinzufügen.
:::


### Details zum Meeresboden {#seabed-details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![Details zum Meeresboden](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Details zum Meeresboden](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Die Daten zum Meeresboden enthalten Informationen über Vegetation und allgemeines Oberflächenmaterial wie Felsen, Muscheln, Kies, Korallen, Schlamm usw. Aufgrund der internationalen Klassifizierung der Meeresbodendaten gibt es Optionen zur Anzeige solcher Details auf einer Karte: *einfach*, *Kategorie*, *alle* oder *weglassen*. Weitere Informationen finden Sie in der [Kartenlegende für Meeresbodenbereiche](../map-legend/nautical-map.md#seabed-area).

- **Einfach** (*für Android-Version*) - zeigt die Seemarken-Symbole gemäß INT-1 Ref an, die die Beschaffenheit der Meeresbodenoberfläche angeben.
- **Kategorie** - zeigt zusätzlich zum Seemarken-Symbol auch das relevante Seemarken-Tag an, das das natürliche Material oder die Kategorie der Algen und Seegräser angibt.
- **Alle** - zeigt zusätzlich zum Seemarken-Symbol, Tag oder Kategorie auch Qualifikationen wie fein, klebrig, grob usw. an. Für Seegras und Algen werden Daten angezeigt, die mit den Tags *taxon* und *genus* markiert sind.
- **Weglassen** - zeigt keine Details des Meeresbodens an.

:::info HINWEIS
Weitere Details zur Klassifizierung der Oberflächendetails und der Rendering-Optionen finden Sie im [OSM Seamark Wiki](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::


## Verwandte Artikel {#related-articles}

- [Import / Export](../personal/import-export.md)
- [Farbschema-Paletten](../personal/color-palette-schemes.md)

> *Zuletzt aktualisiert: Juni 2023*