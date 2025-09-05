---
source-hash: 5614ff96c05b150dc149ccfc7296cdeb953b69993517dcf326e81979e07d4a0f
sidebar_position: 1
title: Routenplanung
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


## Überblick {#overview}

Die Funktion **Routenplanung** in OsmAnd bietet eine schrittweise Navigationsführung für verschiedene [Routentypen](./../routing/osmand-routing.md#routing-types), einschließlich [Autofahren](./../routing/car-based-routing.md), [Gehen](./../routing/pedestrian-routing.md), Radfahren, [Reiten](./../routing/horse-routing.md) und [Skifahren](./../routing/ski-routing.md). Benutzer können Navigationseinstellungen anpassen, Ziele hinzufügen und Routen für Effizienz optimieren.

:::tip

- **Offline-Navigation** ist standardmäßig aktiviert. Sie können jedoch auch [Online-Routing-Engines](./../routing/online-routing.md) verwenden.

- **OsmAnd benötigt die Berechtigung**, um auf den [genauen Standort](../../start-with/first-steps.md#permission-to-access-the-location) für eine genaue Navigation zuzugreifen. Aktivieren Sie dies bei Bedarf in den Geräteeinstellungen.

:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Navigationsbildschirm Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Navigationsbildschirm Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsbildschirm iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Navigationsbildschirm iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Ziele festlegen {#set-destinations}

**Schritt 1: Karten herunterladen.**

Bevor Sie die Offline-Navigation verwenden, stellen Sie sicher, dass die erforderlichen [Karten heruntergeladen](../../start-with/download-maps.md) wurden. Gehen Sie zu *Menü → Karten & Ressourcen → Karten herunterladen*, um Karten für Ihre Region zu installieren.

**Schritt 2: Navigationsprofile konfigurieren.**

[Konfigurieren Sie die Profile](../../personal/profiles.md), die Sie verwenden möchten:

- Legen Sie [Fahrzeugparameter](../guidance/navigation-settings.md#size-parameters) fest (*wichtig für LKW-Fahrer*), wählen Sie den [Motortyp](../guidance/navigation-settings.md#fuel-used-by-motor) (*optional*).

- Konfigurieren Sie die [Darstellung der Routenlinie](../guidance/map-during-navigation#route-line-appearance) (*optional*, verfügbar für Pro-Benutzer ([Android](../../purchases/android.md#pro-features-pro-features) / [iOS](../../purchases/ios.md#pro-features-pro-features))).

- Konfigurieren Sie [Sprachansagen](../guidance/voice-navigation.md).

**Schritt 3: Ziele festlegen.**

1. Öffnen Sie das [*Navigationsmenü*](#navigation-menu):

    - Geben Sie den [Zielpunkt](#set-target-point) an.
    - Warten Sie, bis die Route berechnet ist. Danach können Sie zusätzliche Informationen zu Ihrer Route im Abschnitt *[Details](./route-details.md#overview)* abrufen.
    - Sie können zwischen verschiedenen [Routentypen](./../routing/osmand-routing.md#routing-types) (Profilen) wechseln, um das beste Ergebnis zu erzielen.
    - Fügen Sie [Zwischenziele](#intermediate-destinations) hinzu (optional).
    - Sie können auch den Startpunkt vom [aktuellen Standort](../../map/interact-with-map#my-location-and-zoom) auf den gewünschten ändern.

2. Zusätzliche [*Navigationseinstellungen*](#settings) können je nach Ihren Zwecken verwendet werden (Sie können konfigurieren, welche Straßen vermieden oder bevorzugt werden sollen, Kraftstoff sparen oder die schnellste Route wählen usw.).

3. [Starten](#start--stop-navigation) Sie die Navigation oder [simulieren Sie zuerst die Navigation](#simulated-navigation) (mit dieser Funktion können Sie Ihre Route testen, bevor Sie tatsächlich entlang dieser reisen).

4. Während der Route können Sie die Navigation [*Anhalten/Fortsetzen*](#pause--resume-navigation) und [*Beenden*](#start--stop-navigation).


:::note

**Die Route kann nicht erstellt werden, wenn *[Online-Karte](../../map/raster-maps.md#select-raster-maps)* als Kartenquelle ausgewählt ist.**

:::


### Navigationsmenü {#navigation-menu}

Es gibt 3 Möglichkeiten, das Navigationsmenü zu erreichen:

- Die [*Navigationsschaltfläche*](../../widgets/map-buttons.md#directions) auf dem Kartenbildschirm.
- *Richtung zu/von* in einem [*Kartenkontextmenü*](../../map/map-context-menu.md#directions-to--from).
- Navigationsbereich im [*Hauptmenü*](../../start-with/main-menu.md) *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationsmenü Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsmenü iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Startort festlegen (Standard: [*Mein aktueller Standort*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Zum [Festlegen Ihres Zielpunkts](#set-target-point) verwenden.
- **Hinzufügen** &nbsp;&#43; - [Zwischenpunkte](../../widgets/nav-widgets.md#distance-to-intermediate) entlang der Route einfügen.
- **Tauschen** &nbsp;&#8595;&#8593; - Start- und Endpunkte umkehren.
- **Sound-Taste** - [Sprachansagen](../guidance/voice-navigation.md) stummschalten.
- **<Translate android="true" ids="shared_string_settings"/>** – Routenpräferenzen und Straßenbeschränkungen [anpassen](#settings).

Legen Sie Ihr Ziel im *Navigationsmenü* fest mit:

- Spezielle Favoritenpunkte [Zuhause / Arbeit](#use-home-or-work-points).
- Vorherige Route oder [Verlauf](../../personal/global-settings.md#history).
- Die Schaltfläche **Abbrechen** führt zurück zum Hauptbildschirm.
- Die [Start-Schaltfläche](#start--stop-navigation) startet die Navigation, nachdem die Routenberechnung beendet ist.

### Startpunkt auswählen {#select-starting-point}

Als Startpunkt können Sie Ihren aktuellen Standort, den Standort eines [Favoritenpunkts](../../map/point-layers-on-map.md#favorites) wählen, einen Punkt auf der Karte auswählen oder die [Suche](../../search/index.md) verwenden. Sie können auch einen Startpunkt im [Kartenkontextmenü](../../map/map-context-menu.md) festlegen, indem Sie die Funktion [Routen von](../../map/map-context-menu.md#directions-to--from) auswählen.

### Zielpunkt festlegen {#set-target-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationsmenü Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsmenü iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

Das Wichtigste, um die Navigation zu starten, ist die Bestimmung Ihres Ziels. Der Zielpunkt kann über eine [*Suchfunktion*](../../search/index.md#overview) oder einfach auf einer Karte gefunden werden. Sie können den Zielpunkt auch im [*Navigationsmenü*](#navigation-menu) festlegen:

- **<Translate android="true" ids="search_button"/>** - Öffnet [das Suchmenü](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Öffnet das [Adresssuchmenü](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Öffnet die Karte, um einen Zielpunkt durch Tippen auf die Karte auszuwählen.
- **<Translate android="true" ids="shared_string_favorites"/>** - Ermöglicht die Verwendung von [Favoriten](../../personal/favorites.md) als Ziel.
- **<Translate android="true" ids="shared_string_markers"/>** - Ermöglicht die Auswahl eines der [Kartenmarkierungen](../../personal/markers.md) als Zielpunkt.
- **Startpunkt und Ziel tauschen** &nbsp;&#8595;&#8593; - Ermöglicht das Tauschen von *Start*- und *Endpunkten*.


### Zwischenziele {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Zwischen Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navigation Zwischen Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Zwischen iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigation Zwischen iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - ermöglicht das Öffnen der Ziellisten, um Änderungen vorzunehmen.
- **&nbsp;&#8592;** - wechselt zum Navigationsmenü-Bildschirm.
- **&nbsp;&#10005;** - ermöglicht das Löschen von Zielpunkten aus der Punkteliste.
- **&nbsp;&#61;** - ermöglicht das Ändern der Punktreihenfolge in der Punkteliste.
- *&nbsp;&#43; Hinzufügen* - öffnet das Kontextmenü *Zwischenziel hinzufügen*.
- *&nbsp;&#9776; Alle löschen* - ermöglicht das Löschen aller Zwischenziele.

Wenn Sie in der Zielliste **Sortieren** (*Android*) oder **Optionen** (*iOS*) wählen, gelangen Sie zu speziellen Optionen, um die Reihenfolge der Navigation zu Zwischenzielen anzupassen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Zwischen Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Zwischen iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

In diesem Menü finden Sie zusätzliche Optionen zur Verwaltung der Zielpunkte:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd bietet die kürzeste Route zwischen all Ihren Zielen an, die Reihenfolge des Besuchs kann jedoch bearbeitet werden. Der Startpunkt und das endgültige Ziel werden nicht geändert.

- **<Translate android="true" ids="switch_start_finish"/>** - Der Startpunkt und das endgültige Ziel werden vertauscht.

- **<Translate android="true" ids="reverse_all_points"/>** (*nur Android*) - Alle Punkte werden in umgekehrter Richtung gesetzt.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Sie können Zwischenziele aus diesem Menü hinzufügen.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Alle Zwischenziele werden von der Karte entfernt.

### Heim- oder Arbeitspunkte verwenden {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Spezielle Favoriten Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Spezielle Favoriten iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

**Zuhause**- und **Arbeit**-Registerkarten (oder [Spezielle Punkte](../../personal/favorites.md#special-favorites-personal) für Favoriten) können verwendet werden, um schnell Zielpunkte im Navigationsmenü festzulegen. Wenn Sie die Adressen der speziellen Favoriten nicht eingegeben haben, bleiben diese Felder leer. Wenn Sie auf dieses Feld tippen, werden Sie aufgefordert, diese POIs zu erstellen.

### Verlauf früherer Routen {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Vorherige Route Android](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Vorherige Route iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

Wenn die Aufzeichnung des [Navigationsverlaufs](../../personal/global-settings.md#history) aktiviert ist, können Sie die vorherigen Routen oder Ziele aus der Verlaufsliste für die Navigation verwenden. Diese Option kann nützlich sein, um schnell auf häufig verwendete Routen zuzugreifen. Die Elemente in der Verlaufsliste sind nach der letzten Verwendung sortiert, beginnend mit dem Neuesten.

:::note

- Wenn die [Protokollierung von Verlaufsdaten](../../personal/global-settings.md#history-options) deaktiviert ist, werden Sie nicht aufgefordert, frühere Routen für die Navigation zu verwenden.
- Sie können einige oder alle Verlaufsdatensätze Ihrer früheren Routen löschen. Dies kann auf der Registerkarte *[Navigationsverlauf](../../personal/global-settings.md#history-options)* der Verlaufsoption (*Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf*) erfolgen.

:::


## Navigation starten / stoppen {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationsbildschirm starten Android](@site/static/img/navigation/route/navigation_start_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsbildschirm iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Sobald Start- und Endpunkte ausgewählt sind, erstellt die App eine Route zwischen ihnen unter Verwendung eines aktiven Profils. [Das App-Profil](../../personal/profiles.md) und die [Widgets](../../widgets/index.md) werden erst gewechselt, wenn Sie die Schaltfläche *Start* der Navigation antippen.

- **Tippen Sie auf Start**, um die Navigation zu beginnen.
- [Pausieren](#pause--resume-navigation) Sie die Navigation, wenn Sie eine Pause machen. (*Nur Android*)
- **Stoppen** Sie die Navigation, indem Sie **Stopp** (*Android*) oder **Abbrechen** (*iOS*) auswählen.

:::note Routendetails
Zusätzliche Informationen zur erstellten Route, wie Höhe, Abbiegeanweisungen, Analysewerkzeug und andere, finden Sie im Abschnitt [**Details**](../setup/route-details.md).
:::

### Routenneuberechnung {#route-recalculation}

Die Route kann bei Abweichung automatisch neu berechnet werden. Die Parameter der Neuberechnung können Sie in den [Navigationseinstellungen](../guidance/navigation-settings.md#recalculate-route) ändern. Sie können auch die Benachrichtigung über die Routenneuberechnung in den Einstellungen der [Sprachansagen](../guidance/voice-navigation.md#voice-settings) deaktivieren.

### Navigation pausieren / fortsetzen {#pause--resume-navigation}

<InfoAndroidOnly/>

Wenn Sie eine Pause einlegen und kurz von der Route abweichen möchten, können Sie die Funktion *Navigation pausieren/fortsetzen* verwenden, um Sprachansagen anzuhalten und die Neuberechnung der Route zu stoppen.
Diese Option ist in der Android-Version der App in der *[Benachrichtigungsliste](../guidance/voice-navigation.md#text-notifications)* oder über das *[Schnellaktionsmenü](../../widgets/quick-action.md)* verfügbar.

![Benachrichtigungsbildschirm Android](@site/static/img/navigation/route/navigation_pause_android.png)

Um die Navigation fortzusetzen:

- Verwenden Sie die Nachricht von OsmAnd in der Benachrichtigungsleiste.
- Verwenden Sie das *Schnellaktionsmenü* oder den Dialog, der erscheint, wenn Sie die *[Navigationsschaltfläche](../../widgets/map-buttons.md#directions)* antippen (siehe Screenshot).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation fortsetzen Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation fortsetzen iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Wenn Sie die **Navigationsschaltfläche antippen**, während Sie sich auf Ihrer Route befinden, **stoppt die Navigation nicht, und Sprachansagen werden weiterhin ausgegeben**, obwohl die vorgeschlagenen Optionen "Fortsetzen" oder "Starten" verwirrend sein können.
:::


### Tipps zum Energiesparen {#power-saving-tips}

Navigation verwendet GPS und Hintergrundverarbeitung, was den Akku belasten kann. Um den Stromverbrauch zu optimieren:

- **Schalten Sie den Bildschirm aus**, während Sie sich auf Sprachansagen verlassen.
- Aktivieren Sie die [Bildschirmsteuerung](../guidance/voice-navigation.md#screen-control) (*nur Android*) unter *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Einstellungen {#settings}

![Routenplanung Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Navigationseinstellungen {#navigation-settings}

Um auf die Navigationseinstellungen zuzugreifen, führen Sie einen der folgenden Schritte aus:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.
- *Navigationsschaltfläche → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
Im Profil *Karte durchsuchen* gibt es keine Navigationseinstellungen.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profile Navigationseinstellungen iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** bestimmt, wie Routen berechnet werden. Zum Beispiel hat Ihr Fahrradprofil einen Navigations-Typ "Radfahren", der die Routing-Regeln festlegt. Sie können diese Regeln (als routing.xml-Datei) in OsmAnd importieren. Mehr über Routing können Sie auf unserer [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing)-Seite lesen.&nbsp;

- &nbsp;**<Translate android="true" ids="route_parameters"/>** steuert, welche Parameter während des Routings (dies ist der Prozess der Routenwahl für die Navigation) verwendet werden.

Bitte lesen Sie die Routenparameter für den entsprechenden Navigationstyp.

Wie Sie den [Routing-Typ](../routing/osmand-routing.md#routing-types) und die [Routenparameter](../guidance/navigation-settings.md#route-parameters) konfigurieren, können Sie im Artikel [Navigationseinstellungen](../guidance/navigation-settings.md) oder in Artikeln über spezifische Routing-Typen im Abschnitt [Routenparameter](../routing/osmand-routing.md#routing-types) nachlesen.

### Simulierte Navigation {#simulated-navigation}

Das Tool **Simulierte Navigation** ermöglicht es Ihnen, eine Route vor der Reise zu überprüfen. Dies hilft bei der Planung, Einarbeitung und dem Testen des OsmAnd-Navigationssystems.

#### Simulation starten / stoppen {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation simulieren Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation simulieren iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Wenn eine Navigationsroute erstellt wurde, können Sie die Navigation mit der Option **<Translate android="true" ids="simulate_navigation"/>** simulieren.

- Gehen Sie im [Navigationsmenü](#navigation-menu) zu *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Schalten Sie den Schalter um, um die Option zu aktivieren.
- Tippen Sie auf die Schaltfläche [Navigation starten](#start--stop-navigation), um die Simulation zu starten.
- Um die Navigationssimulation zu [stoppen](#start--stop-navigation), tippen Sie auf **Stopp** (*Android*) oder **Abbrechen** (*iOS*).


#### Geschwindigkeitsmodus {#speed-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Navigation simulieren Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Navigation simulieren iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Beschleunigt die Simulation auf geraden Strecken und verlangsamt an Kreuzungen.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Läuft mit einer festen Geschwindigkeit.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **Auf geraden Straßenabschnitten** ist die Geschwindigkeit nahe der maximal zulässigen Geschwindigkeit.
    - **An Kreuzungen** reduziert der Simulator die Geschwindigkeit.
    - **Zusätzliche Strafen** werden an Ampeln, Stoppschildern und ähnlichen Hindernissen angewendet.


## Karten fehlen oder sind nicht synchronisiert {#maps-missing-or-not-synchronized}

Um eine Route zu erstellen, müssen alle **erforderlichen Karten** heruntergeladen werden und das gleiche Veröffentlichungsdatum haben. Bitte beachten Sie, dass in einigen Situationen die Meldung über fehlende Karten im Routenplanungsmenü ausgeblendet sein könnte. Wenn Sie das Navigationsmenü nach oben ziehen, sehen Sie mögliche Gründe, warum Ihre Route nicht berechnet werden konnte.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Meldung keine Karten beim Erstellen der Navigation Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Meldung keine Karten beim Erstellen der Navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### Erforderliche Karten {#required-maps}

Im Dialog für die erforderlichen Karten werden Ihnen Vorschläge für herunterzuladende oder zu aktualisierende Karten angezeigt. Die Liste der verwendeten Karten ist möglicherweise nicht präzise, da sie eine sehr einfache Route berechnet. Um die genaue Liste der Karten zu erhalten, können Sie auf **Online berechnen** klicken. Wenn Sie **Heruntergeladene Karten verwenden** auswählen, versucht die Routenberechnung, bereits heruntergeladene Karten zu verwenden und die Warnmeldung zu überspringen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Meldung keine Karten beim Erstellen der Navigation Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meldung keine Karten beim Erstellen der Navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Häufige Probleme und Lösungen {#common-issues-and-solutions}

1. [Die möglichen Ursachen für eine langsame Routenberechnung.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Was tun, wenn die Routenlänge 250 Kilometer überschreitet.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Was tun, wenn die vorgeschlagene Route falsch erscheint.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Wie man die Situation löst, wenn die Navigation aufgrund fehlender notwendiger Karten nicht möglich ist.](#maps-missing-or-not-synchronized)

Weitere Schritte zur Fehlerbehebung finden Sie unter [Navigationsprobleme](../../troubleshooting/navigation.md).


## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Routendetails](./route-details.md)
- [Navigation nach Track](./gpx-navigation.md)
- [Navigation nach Markierungen](./markers-navigation.md)
- [Navigationseinstellungen](../guidance/navigation-settings.md)
- [Kartenbildschirm während der Navigation](../guidance/map-during-navigation.md)
- [Sprachansagen / Benachrichtigungen](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Zuletzt aktualisiert: Februar 2025*