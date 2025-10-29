---
source-hash: 7ec189e5ebc7bca3eaaa66be6d97617ba61c06de602535da3e7881dac213769a
sidebar_position: 7
title:  Ansicht Nautische Karte
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


## Übersicht {#overview}

:::info Kostenpflichtige Funktion
Das Plugin "Ansicht Nautische Karte" ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App.
:::

Die Ansicht Nautische Karte ist eine detaillierte grafische Darstellung von Ozeanen, Meeren, Küstengebieten und Flüssen, die Ihnen hilft, auf dem Wasser zu navigieren und beliebte Routen, Hindernisse auf Ihrer Wasserstraße, die nächsten Häfen, Ankerplätze und andere wichtige Orientierungspunkte zu kennen.

Eine Seekarte ist eine hochdetaillierte topografische Karte, die Skippern hilft, ein Schiff auf einem ausgewählten Kurs auf dem Wasser zu navigieren. Sie ähnelt einer Straßenkarte für Autofahrer. Aus historischen Gründen wird sie oft als *'Chart'* bezeichnet und ist eine detaillierte grafische Darstellung von Ozeanen, Meeren, Küstengebieten und Flüssen.

Seekarten sind wichtig für professionelle Segler und Amateure, die ein Boot mieten, um durch die Kanäle der Stadt zu fahren. Die Karten liefern ihnen verschiedene Informationen wie Segelrouten, Navigationslichter, Gefahrenzonen, Zonen, in denen das Segeln oder Anlegen erlaubt oder verboten ist, usw.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nautische Karten](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nautische Karten](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Warum das nautische Thema wichtig ist {#why-the-nautical-theme-matters}

Alle professionellen Seeleute sind verpflichtet, offizielle Seekarten an Bord ihrer Schiffe zu haben. Diese Karten werden von autorisierten Agenturen herausgegeben und sind recht teuer. Die Agenturen investieren viel, um die Karten auf dem neuesten Stand zu halten. Sie geben regelmäßig Aktualisierungen für die Karten heraus, aber da es Zeit braucht, die Informationen zu überprüfen und die Aktualisierungen zu verarbeiten, sind Seekarten nie vollständig aktuell.

Basierend auf den Daten von [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap) werden die nautischen Karten von OsmAnd von den Menschen erstellt, die sie benutzen. Jeder Kartennutzer kann zur Karte beitragen, indem er Informationen hinzufügt, die er für sich selbst wichtig und nützlich findet, und so die Karte detaillierter und genauer macht, ideal für die Orientierung oder Routenplanung.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die folgende Einrichtung sorgt dafür, dass die nautische Karte auf dem Bildschirm angezeigt wird:

1. [Kaufen](../plugins/index.md#purchase) und [Aktivieren](../plugins/index.md#enable--disable) Sie das Plugin "Ansicht Nautische Karte".
2. [Laden Sie die nautischen Karten herunter](#download-nautical-maps).
3. Stellen Sie den [nautischen Kartenstil](#set-nautical-map-style) für das gewünschte [Profil](../personal/profiles.md) ein.


### Nautischen Kartenstil einstellen {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*  

![Nautischer Kartentyp in Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*  

![Nautischer Kartentyp in iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Verwenden Sie die [Kartenlegende](../../user/map-legend/nautical-map.md) als Referenz für alles, was auf der nautischen Karte angezeigt wird. Sie erklärt die symbolischen Elemente auf einer Seekarte und dient als Referenz, um Ihnen bei Zweifeln bei der Navigation zu helfen. Durch die Einstellung des nautischen Kartenstils erhalten Sie die beste Ansicht der heruntergeladenen und angezeigten nautischen Daten.

Um den aktuellen Kartenstil auf Nautisch zu ändern, müssen Sie die folgenden Einstellungen vornehmen:

1. Wählen Sie das gewünschte [Profil](../personal/profiles.md).
2. Öffnen Sie [Karte konfigurieren](../map/configure-map-menu.md).
3. Scrollen Sie nach unten zu Kartenstil, öffnen Sie ihn und wählen Sie **Nautisch**.


### Nautische Karten herunterladen {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*  

![Ansicht der Karten des Nautik-Plugins Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*  

![Ansicht der Karten des Nautik-Plugins iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Für eine optimale Darstellung können die Karten an die aktuellen Bedürfnisse angepasst werden: Seezeichen und Symbole können mit Tiefenpunkten und bei Bedarf mit Konturen ergänzt werden. Andererseits können Standardkarten mit Informationen über Binnen-, Küsten- und küstennahe Gewässer für eine bestimmte Region eine gute Ergänzung zu den Informationen über Wasserstraßen auf einer nautischen Karte sein.

Wenn Sie eine nautische Karte [herunterladen](../start-with/download-maps.md), erscheinen auf der Karte mehr Details zur *Bootsnavigation*. Einige Arten von [nautischen Karten](../plugins/nautical-charts/#nautical-map-style) enthalten Details wie:

- **Nautische Seezeichen und Symbole.**  
    Seezeichen und Symbole enthalten alle nautischen Navigationszeichen für die Binnen- und Küstenschifffahrt. Die Kenntnis dieser Zeichen hilft Ihnen, die Lage von Felsen, Hindernissen, Ankerplätzen, Bojen, Strömungen, tiefem und flachem Wasser sowie die Seiten des Fahrwassers unabhängig von der Richtung usw. vorherzusagen. Seezeichen und Symbole werden einmal für die ganze Welt heruntergeladen.

- **Tiefenpunkte.**  
    Nautische Daten aus den Tiefenpunkt-Paketen werden durch Zahlen dargestellt, die auf dem Wasser angezeigt werden und die geringste Tiefe an einem bestimmten Ort angeben. Tiefenpunkte sind für jede Hemisphäre und einige Regionen verfügbar.

- **Tiefenlinien.**  
    Tiefenlinien-Pakete ermöglichen es Ihnen, Bereiche gleicher Tiefe zu definieren.  Sie dienen dazu, Reliefveränderungen unter der Wasseroberfläche zu visualisieren. Tiefenlinien können für bestimmte Gebiete heruntergeladen und bei Nichtgebrauch wieder ausgeschaltet werden.

:::info Tiefenangaben
Alle Tiefenangaben auf den nautischen Karten sind in Metern angegeben.
:::


### Nautischen Kartenstil deaktivieren {#disable-nautical-map-style}

Um die nautische Ansicht zu entfernen und eine der herkömmlichen Karten von OsmAnd anzuzeigen, führen Sie einen der folgenden Schritte aus:

- Deaktivieren Sie das Nautik-Plugin.
- Ändern Sie den Kartenstil auf einen anderen als *Nautisch*.

:::info HINWEIS
Das Deaktivieren des Nautik-Plugins entfernt keine geladenen nautischen Daten, so dass selbst wenn Sie die Darstellungsmethode von nautisch auf eine andere Methode ändern, wenn nautische Daten heruntergeladen wurden, sie auf der Karte sichtbar bleiben.
:::


## Nautisches Profil {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Nautische Tiefenlinien in Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Tiefenlinien in iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

Die nautische Karte kann in jedes Profil aufgenommen werden. Sie ist jedoch am wertvollsten im [Bootsprofil](../personal/profiles.md) und insbesondere bei der [Bootsnavigation](../navigation/routing/boat-navigation.md).


## Nautischer Kartenstil {#nautical-map-style}

Das Nautik-Plugin in OsmAnd erweitert die Kartenstile der Vektorebene um den nautischen Kartenstil. Er ermöglicht es Ihnen, Kartendaten nach den Regeln der nautischen Karte darzustellen, zum Beispiel: gelbe Bereiche für Land und Untiefen, hellblaue Bereiche für seichte Gewässer, usw. Weitere Informationen finden Sie in der [Kartenlegende](../../user/map-legend/nautical-map.md).


### Meeresbodendetails {#seabed-detail}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*  

![Meeresbodendetails](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *Menü → Karte konfigurieren → Kartenstil → Details → Meeresbodendetail*

![Meeresbodendetails](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Meeresbodendaten enthalten Informationen über Vegetation und allgemeines Oberflächenmaterial wie felsige Felsen, Muscheln, Kies, Korallen, Schlick usw. Aufgrund der internationalen Klassifizierung von Meeresbodendaten gibt es Optionen zur Anzeige solcher Details auf einer Karte: *einfach*, *Kategorie*, *alle* oder *weglassen*. Verwenden Sie die [Kartenlegende für Meeresbodengebiete](../map-legend/nautical-map.md#seabed-area) für weitere Informationen.

- **Einfach** (*für Android-Version*) – zeigt die Seezeichen-Symbole gemäß INT-1 Ref an, die die Beschaffenheit der Meeresbodenoberfläche angeben.  
- **Kategorie** – zusätzlich zum Seezeichen-Symbol auch das entsprechende Seezeichen-Tag, das das natürliche Material oder die Kategorie Seetang und Seegras angibt.
- **Alle** – zusätzlich zum Seezeichen-Symbol, Tag oder der Kategorie auch Qualifikationen wie fein, klebrig, grob usw. an. Für Seegras und Seetang werden Daten angezeigt, die mit den Tags *taxon* und *genus* gekennzeichnet sind.  
- **Weglassen** – zeigt keine Details des Meeresbodens an.  

:::info HINWEIS
Weitere Einzelheiten zur Klassifizierung der Oberflächendetails und den Darstellungsoptionen finden Sie im [Seamark-Wiki von OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::

### Lichthinderdetails {#light-detail}

Android Gehen Sie zu: *Menü → Karte konfigurieren → Kartenstil Nautisch → Andere Kartenattribute → Lichthinderdetail*

iOS Gehen Sie zu: *Menü → Karte konfigurieren → Kartentyp Nautisch → Details → Lichthinderdetail*

Diese Option zeigt das Informationsniveau für Navigationslichter an. Sie können wählen, wie detailliert die Lichtmerkmale in der Nähe jedes Leuchtturms oder jeder Bake angezeigt werden.

- **Einfach** – zeigt den Standard-Seezeichen-Namen und das Lichtmerkmal.
- **Sektoren** – zeigt volle Sektor-Bögen und Details für alle sichtbaren Lichtsektoren an.
- **Sektor 1–5** – zeigt Details nur für eine bestimmte Sektornummer an.
- **Klein** – verwendet ein kompaktes Etikettformat für Lichtmerkmale.
- **Nur Name** – zeigt nur den Namen des Seezeichens ohne Lichtdaten an.
- **Weglassen** – versteckt alle Lichtinformationen.


## Marine-Kartenstil {#marine-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marine in Android](@site/static/img/plugins/nautical-charts/marine_android.png)

Gehen Sie zu: *Menü* → *Karte konfigurieren* → *Kartenstil* → *Marine*

</TabItem>

<TabItem value="ios" label="iOS">

![Marine in iOS](@site/static/img/plugins/nautical-charts/marine_ios.png)

Gehen Sie zu: *Menü* → *Karte konfigurieren* → *Kartentyp* → *Marine*

</TabItem>

</Tabs>

Dieser Stil fügt visuelle Elemente für die maritime Navigation hinzu, einschließlich Navigationslichter mit INT-1-Lichtmerkmalen, die den Typ, die Farbe und den Rhythmus eines Lichtsignals beschreiben (z. B. ob es blinkt, seine Farbe und das Intervall zwischen den Blitzen), und farbige Sektorlichter, die die Richtung und Farbe des vom Meer aus sichtbaren Lichts anzeigen.

Im Marine-Stil werden Lichtsektoren um Leuchttürme und Baken angezeigt: weiß (auf der Karte in Gelb dargestellt) zeigt die sichere Richtung für die Navigation an, rot markiert gefährliche oder eingeschränkte Bereiche, und grün zeigt Hilfs- oder seitliche Richtungen an.

:::info
Um diese Informationen anzuzeigen, muss das Nautik-Plugin aktiviert sein und die World Seamarks-Karte (oder World_seamarks_2.obf) heruntergeladen werden. Die Informationen sind nicht für die offizielle Navigation geeignet.
:::


### Kartenattribute {#map-attributes}
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Attribute in Android](@site/static/img/plugins/nautical-charts/marine_details_android.png)

Gehen Sie zu: *Menü* → *Karte konfigurieren* → *Kartenstil Marine* → *Andere Kartenattribute*

</TabItem>

<TabItem value="ios" label="iOS">

![Attribute in iOS](@site/static/img/plugins/nautical-charts/marine_details_ios.png)

Gehen Sie zu: *Menü* → *Karte konfigurieren* → *Kartentyp Marine* → *Details* → *Lichthinderdetail/Meeresbodendetail*

Gehen Sie zu: *Menü* → *Karte konfigurieren* → *Kartentyp Marine* → Wählen Sie andere Optionen

</TabItem>

</Tabs>

Nach der Aktivierung des Marine-Kartenstils können Sie zusätzliche visuelle Elemente fein einstellen. Diese Optionen ermöglichen es Ihnen, zu steuern, wie Navigationshilfen, Tiefenlinien, Meeresbodendetails und Farben auf der Karte erscheinen.

- **[Lichthinderdetail](../plugins/nautical-charts/#light-detail)**. Legt fest, wie Seezeichen-Lichtinformationen angezeigt werden. Optionen: **Standard** (voller Name mit Lichtmerkmalen), *Klein* (kompaktes Format), *Nur Name* (nur Lichtname) oder *Weglassen* (Etiketten ausblenden).
- **[Meeresbodendetail](../plugins/nautical-charts/#seabed-detail)**. Steuert das Niveau der Textinformationen über den Meeresboden. Optionen: Einfach (Grundinfo), Kategorie (Oberflächentyp), Alle (vollständige Daten) oder Weglassen (kein Text).
- **Wasserfarbe**. Legt die Basisfarbe für Wasserbereiche fest. Optionen: *Standard, Blau, Weiß* oder *Grau* – nützlich zur Anpassung der Sichtbarkeit und des Kontrasts unter verschiedenen Beleuchtungsmodi.
- **Fahrwasserfarbe**. Ändert die Farbe von Navigationsfahrwassern und Kanälen. Optionen: *Weiß, Helleres Weiß, Grau, Grün* oder *Gelb*, um die Lesbarkeit je nach Kartenhintergrund zu verbessern.
- **Watt-Stil**. Passt die Farbe und Textur für Watts an. Optionen: *Hellgrün, Dunkelgrün, Feuchtgebiet* oder *Watt* – jede hebt flache Gezeitenbereiche unterschiedlich hervor.
- **ENC-Marker**. Umschalten *Ein/Aus*. Wenn aktiviert, zeigt es Electronic Navigational Chart (ENC)-Marker wie Bojen, Baken und andere Navigationshilfen an.
- **Muschel-Stil**. Legt fest, wie Muscheln oder Bodenoberflächenmerkmale auf dem Meeresboden erscheinen. Optionen: *Grau, Felsen, Steine* oder *Rot*, je nach bevorzugtem visuellen Stil.
- **Gepunktete Tiefenlinien**. Umschalten *Ein/Aus*. Wenn aktiviert, zeigt es Tiefenlinien als gestrichelt an, was die Lesbarkeit in dichten Bereichen verbessert.
- **Tiefenfarbenschema**. Wählt das Farbschema für Tiefenzonen aus. Optionen: *PAPER* (traditionelle Papierkartenfarben) oder *ECDIS* (Standardpalette für elektronische Navigationssysteme).
- **Tiefenpunktgröße**. Legt die Schriftgröße für Tiefenpunktzahlen (Tiefenwerte) fest. Optionen: *Standard, 10, 12, 14* oder *16* – größere Werte verbessern die Sichtbarkeit auf hochauflösenden Bildschirmen.
- **Tiefenpunktabstand**. Steuert, wie häufig Tiefenpunkte auf der Karte erscheinen. Optionen: *Standard, 0, 5, 10, 15, 30, 60* oder *120*, die den Abstand zwischen angezeigten Tiefenpunkten bestimmen.
- **Sicherheitstiefenlinie**. Hebt die Linie hervor, die die Sicherheits-Tiefenschwelle markiert. Optionen: *Aus, 0 m, 1 m, 2 m, 3 m, 4 m, 5 m* oder *10 m*. Nützlich, um sichere Navigationsbereiche von flachen Zonen zu unterscheiden.


## Zusätzliche nautische Daten {#additional-nautical-data}

### Tiefenpunkte {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nautische Karten](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nautische Karten](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Tiefenpunkt-[Pakete](../start-with/download-maps.md#overview) sind für Europa, die Nordhalbkugel und die Südhalbkugel verfügbar und dienen der Information. Tiefenpunkte zeigen topografische Veränderungen unter der Wasseroberfläche an und geben die geringste Tiefe an. Dies ist für die *Bootsnavigation* notwendig. Nach dem Herunterladen müssen Sie die [Tiefenlinien](#depth-contours) einschalten, um sie auf der Karte anzuzeigen.


### Tiefenlinien {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*  

![Nautische Tiefenlinien in Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Tiefenlinien in iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Wenn eine nautische Karte auf dem Bildschirm angezeigt wird, können Sie anpassen, was Sie sehen:

- *Tiefenlinien* ein- oder ausblenden.
- Einstellen des Detaillierungsgrads der Meeresbodeninformationen: [*Linienbreite* und *Linienfarbschema*](../map/vector-maps.md#-nautical-depth).

:::info HINWEIS
Sie können der OsmAnd-App helfen, die Datenbank der Tiefenlinien zu erweitern, indem Sie Ihre Informationen über [OpenSeaMap](https://map.openseamap.org/) hinzufügen.
:::


## Verwandte Artikel {#related-articles}

- [Import / Export](../personal/import-export.md)
- [Farbpaletten-Schemata](../personal/color-palette-schemes.md)