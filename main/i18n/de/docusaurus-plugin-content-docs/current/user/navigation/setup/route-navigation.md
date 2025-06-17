---
source-hash: ae22b6cd7849daf3b25f0a644bcdf63cfd6f3e48185e0d277a59873ba978a352
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

Die Funktion **Routenplanung** in OsmAnd bietet Schritt-für-Schritt-Navigationsanweisungen für verschiedene [Routing-Typen](./../routing/osmand-routing.md#routing-types), darunter [Fahren](./../routing/car-based-routing.md), [Gehen](./../routing/pedestrian-routing.md), Radfahren, [Reiten](./../routing/horse-routing.md) und [Skifahren](./../routing/ski-routing.md). Benutzer können Navigationseinstellungen anpassen, Ziele hinzufügen und Routen für Effizienz optimieren.

:::tip

- **Offline-Navigation** ist standardmäßig aktiviert. Sie können jedoch auch [Online-Routing-Engines](./../routing/online-routing.md) verwenden.

- **OsmAnd benötigt die Berechtigung**, auf den [genauen Standort](../../start-with/first-steps.md#permission-to-access-the-location) zuzugreifen, um eine genaue Navigation zu gewährleisten. Aktivieren Sie dies bei Bedarf in den Geräteeinstellungen.

:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigationsbildschirm Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Navigationsbildschirm Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsbildschirm iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Navigationsbildschirm iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Ziele festlegen {#set-destinations}

**Schritt 1: Karten herunterladen.**

Bevor Sie die Offline-Navigation verwenden, stellen Sie sicher, dass die erforderlichen [Karten heruntergeladen](../../start-with/download-maps.md) sind. Gehen Sie zu *Menü → Karten & Ressourcen → Karten herunterladen*, um Karten für Ihre Region zu installieren.

**Schritt 2: Navigationsprofile konfigurieren.**

[Konfigurieren Sie die Profile](../../personal/profiles.md), die Sie verwenden möchten:

- Stellen Sie [Fahrzeugparameter](../guidance/navigation-settings.md#size-parameters) ein (*wichtig für Lkw-Fahrer*), wählen Sie den [Motortyp](../guidance/navigation-settings.md#fuel-used-by-motor) aus (*optional*).

- Konfigurieren Sie die [Darstellung der Routenlinie](../guidance/map-during-navigation#route-line-appearance) (*optional*, verfügbar für Pro-Benutzer ([Android](../../purchases/android.md#pro-features-pro-features) / [iOS](../../purchases/ios.md#pro-features-pro-features))).

- Konfigurieren Sie [Sprachansagen](../guidance/voice-navigation.md).

**Schritt 3: Ziele festlegen.**

1. Öffnen Sie das [*Navigationsmenü*](#navigation-menu):

    - Geben Sie den [Zielpunkt](#set-target-point) an.
    - Warten Sie, bis die Route berechnet ist. Danach können Sie im Abschnitt *[Details](./route-details.md#overview)* zusätzliche Informationen zu Ihrer Route erhalten.
    - Sie können zwischen verschiedenen [Routing-Typen](./../routing/osmand-routing.md#routing-types) (Profilen) wechseln, um das beste Ergebnis zu erzielen.
    - Fügen Sie [Zwischenziele](#intermediate-destinations) hinzu (optional).
    - Sie können auch den Abfahrtspunkt vom [aktuellen Standort](../../map/interact-with-map#my-location-and-zoom) auf den gewünschten ändern.

2. Je nach Ihren Zwecken können zusätzliche [*Navigationseinstellungen*](#settings) verwendet werden (Sie können konfigurieren, welche Straßen vermieden oder bevorzugt werden sollen, Kraftstoff sparen oder die schnellste Route wählen usw.).

3. [Starten Sie](#start--stop-navigation) die Navigation oder [simulieren Sie zunächst die Navigation](#simulated-navigation) (mit dieser Funktion können Sie Ihre Route testen, bevor Sie sie tatsächlich abfahren).

4. Während der Fahrt können Sie die Navigation [*pausieren/fortsetzen*](#pause--resume-navigation) und [*stoppen*](#start--stop-navigation).


:::note

**Die Route kann nicht erstellt werden, wenn die *[Online-Karte](../../map/raster-maps.md#select-raster-maps)* als Kartenquelle ausgewählt ist.**

:::


### Navigationsmenü {#navigation-menu}

Es gibt 3 Möglichkeiten, das Navigationsmenü zu erreichen:

- Die [*Navigationstaste*](../../widgets/map-buttons.md#directions) auf dem Kartenbildschirm.
- *Richtung zu/von* in einem [*Kartenkontextmenü*](../../map/map-context-menu.md#directions-to--from).
- Navigationsbereich im [*Hauptmenü*](../../start-with/main-menu.md) (*<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>*).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigationsmenü Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsmenü iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Legt den Startort fest (Standard: [*Mein aktueller Standort*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** – Wird verwendet, um [Ihren Zielpunkt festzulegen](#set-target-point).
- **Hinzufügen** &nbsp;&#43; – Fügt [Zwischenpunkte](../../widgets/nav-widgets.md#distance-to-intermediate) entlang der Route ein.
- **Tauschen** &nbsp;&#8595;&#8593; – Kehrt die Punkte *Start* und *Ziel* um.
- **Tontaste** – Schaltet die [Sprachansagen](../guidance/voice-navigation.md) stumm.
- **<Translate android="true" ids="shared_string_settings"/>** – [Passen Sie](#settings) die Routenpräferenzen und Straßenbeschränkungen an.

Legen Sie Ihr Ziel im *Navigationsmenü* fest, indem Sie Folgendes verwenden:

- Spezielle Favoritenpunkte [Zuhause / Arbeit](#use-home-or-work-points).
- Vorherige Route oder [Verlauf](../../personal/global-settings.md#history).
- Die Taste **Abbrechen** führt zurück zum Hauptbildschirm.
- Die Taste [Start](#start--stop-navigation) startet die Navigation nach Beendigung der Routenberechnung.

### Startpunkt auswählen {#select-starting-point}

Als Startpunkt können Sie Ihren aktuellen Standort, den Standort eines [Favoritenpunkts](../../map/point-layers-on-map.md#favorites) auswählen, einen Punkt auf der Karte auswählen oder die [Suche](../../search/index.md) verwenden. Sie können einen Startpunkt auch im [Kartenkontextmenü](../../map/map-context-menu.md) festlegen, indem Sie die Funktion [Richtung von](../../map/map-context-menu.md#directions-to--from) auswählen.

### Zielpunkt festlegen {#set-target-point}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigationsmenü Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsmenü iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

Das Wichtigste, um die Navigation zu starten, ist die Bestimmung Ihres Ziels. Der Zielpunkt kann über die Funktion [*Suche*](../../search/index.md#overview) oder einfach auf einer Karte gefunden werden. Sie können den Zielpunkt auch im [*Navigationsmenü*](#navigation-menu) festlegen:

- **<Translate android="true" ids="search_button"/>** – Öffnet [das Suchmenü](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** – Öffnet [das Adresssuchmenü](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** – Öffnet die Karte, um einen Zielpunkt durch Tippen auf die Karte auszuwählen.
- **<Translate android="true" ids="shared_string_favorites"/>** – Ermöglicht die Verwendung von [Favoriten](../../personal/favorites.md) als Ziel.
- **<Translate android="true" ids="shared_string_markers"/>** – Ermöglicht die Auswahl eines der [Kartenmarkierungen](../../personal/markers.md) als Zielpunkt.
- **Startpunkt und Ziel tauschen** &nbsp;&#8595;&#8593; – Ermöglicht das Tauschen der Punkte *Start* und *Ziel*.


### Zwischenziele {#intermediate-destinations}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Zwischenziele Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navigation Zwischenziele Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Zwischenziele iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigation Zwischenziele iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** – ermöglicht das Öffnen der Zielliste, um Änderungen vorzunehmen.
- **&nbsp;&#8592;** – wechselt zum Navigationsmenübildschirm.
- **&nbsp;&#10005;** – ermöglicht das Löschen eines Zielpunkts aus der Punkteliste.
- **&nbsp;&#61;** – ermöglicht das Ändern der Punktreihenfolge in der Punkteliste.
- *&nbsp;&#43; Hinzufügen* – öffnet das Kontextmenü *Zwischenziel hinzufügen*.
- *&nbsp;&#9776; Alle löschen* – ermöglicht das Löschen aller Zwischenziele.

Wenn Sie in der Zielliste **Sortieren** (*Android*) oder **Optionen** (*iOS*) auswählen, gelangen Sie zu speziellen Optionen zur Anpassung der Reihenfolge der Navigation zu Zwischenzielen.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Zwischenziele Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Zwischenziele iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

In diesem Menü finden Sie zusätzliche Optionen zur Verwaltung der Zielpunkte:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** – OsmAnd bietet die kürzeste Route zwischen all Ihren Zielen an, die Reihenfolge des Besuchs kann jedoch bearbeitet werden. Der Startpunkt und das Endziel werden nicht geändert.

- **<Translate android="true" ids="switch_start_finish"/>** – Der Startpunkt und das Endziel werden getauscht.

- **<Translate android="true" ids="reverse_all_points"/>** (*nur Android*) – Alle Punkte werden in umgekehrter Richtung angeordnet.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Sie können Zwischenziele aus diesem Menü hinzufügen.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Alle Zwischenziele werden von der Karte entfernt.

### Zuhause- oder Arbeitspunkte verwenden {#use-home-or-work-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Spezielle Favoriten Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Spezielle Favoriten iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

Die Registerkarten **Zuhause** und **Arbeit** (oder [Spezielle Punkte](../../personal/favorites.md#special-favorites-personal) für Favoriten) können verwendet werden, um schnell Zielpunkte im Navigationsmenü festzulegen. Wenn Sie die Adressen der speziellen Favoriten noch nicht eingegeben haben, bleiben diese Felder leer. Wenn Sie auf dieses Feld tippen, werden Sie aufgefordert, diese POIs zu erstellen.

### Verlauf früherer Routen {#history-of-previous-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Vorherige Route Android](@site/static/img/navigation/route/previous_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Vorherige Route iOS](@site/static/img/navigation/route/previous_ios.png)

</TabItem>

</Tabs>

Wenn die Aufzeichnung des [Navigationsverlaufs](../../personal/global-settings.md#history) aktiviert ist, können Sie frühere Routen oder Ziele aus der Verlaufsliste für die Navigation verwenden. Diese Option kann für den schnellen Zugriff auf häufig verwendete Routen nützlich sein. Die Elemente in der Verlaufsliste sind nach der letzten Verwendung sortiert, beginnend mit dem neuesten.

:::note

- Wenn die [Protokollierung der Verlaufsdaten](../../personal/global-settings.md#history-options) deaktiviert ist, werden Sie nicht aufgefordert, frühere Routen für die Navigation zu verwenden.
- Sie können einige oder alle Verlaufsdatensätze über Ihre früheren Routen löschen. Dies kann auf der Registerkarte *[Navigationsverlauf](../../personal/global-settings.md#history-options)* der Verlaufsoption (*Menü → Einstellungen → OsmAnd-Einstellungen → Verlauf*) erfolgen.

:::


## Navigation starten / stoppen {#start--stop-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigationsbildschirm starten Android](@site/static/img/navigation/route/navigation_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsbildschirm iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Sobald Start- und Endpunkt ausgewählt sind, erstellt die App eine Route zwischen ihnen mit einem aktiven Profil. Das [App-Profil](../../personal/profiles.md) und die [Widgets](../../widgets/index.md) werden erst gewechselt, wenn Sie auf die Schaltfläche *Start* der Navigation tippen.

- **Tippen Sie auf Start**, um die Navigation zu beginnen.
- [Pausieren Sie](#pause--resume-navigation) die Navigation, wenn Sie eine Pause machen. (*nur Android*)
- **Stoppen Sie** die Navigation, indem Sie **Stopp** (*Android*) oder **Abbrechen** (*iOS*) auswählen.

:::note Routendetails
Zusätzliche Informationen zur erstellten Route, wie Höhe, Abbiegeanweisungen, Analysewerkzeug und andere, finden Sie im Abschnitt [**Details**](../setup/route-details.md).
:::

### Routenneuberechnung {#route-recalculation}

Die Route kann im Falle einer Abweichung automatisch neu berechnet werden. Sie können die Parameter der Neuberechnung in den [Navigationseinstellungen](../guidance/navigation-settings.md#recalculate-route) ändern. Sie können auch die Benachrichtigung über die Routenneuberechnung in den Einstellungen der [Sprachansagen](../guidance/voice-navigation.md#voice-settings) deaktivieren.

### Navigation pausieren / fortsetzen {#pause--resume-navigation}

<InfoAndroidOnly/>

Wenn Sie eine Pause einlegen und kurz von der Route abweichen möchten, können Sie die Funktion *Navigation pausieren/fortsetzen* verwenden, um Sprachansagen zu pausieren und die Neuberechnung der Route zu stoppen.
Diese Option ist in der Android-Version der App in der *[Benachrichtigungsliste](../guidance/voice-navigation.md#text-notifications)* oder im *[Schnellaktionen-Menü](../../widgets/quick-action.md)* verfügbar.

![Benachrichtigungsbildschirm Android](@site/static/img/navigation/route/navigation_pause_android.png)

Um die Navigation fortzusetzen:

- Verwenden Sie die Nachricht von OsmAnd in der Benachrichtigungsleiste.
- Verwenden Sie das *Schnellaktionen-Menü* oder den Dialog, der erscheint, wenn Sie auf die *[Navigationstaste](../../widgets/map-buttons.md#directions)* tippen (siehe Screenshot).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation fortsetzen Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation fortsetzen ios](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Wenn Sie während Ihrer Route auf die **Navigationstaste tippen**, **stoppt die Navigation nicht und die Sprachansagen werden weiterhin ausgegeben**, obwohl die vorgeschlagenen Optionen Fortsetzen oder Start verwirrend sein können.
:::

### Tipps zum Stromsparen {#power-saving-tips}

Navigation nutzt GPS und Hintergrundverarbeitung, was den Akku belasten kann. Um den Stromverbrauch zu optimieren:

- **Schalten Sie den Bildschirm aus**, während Sie sich auf Sprachansagen verlassen.
- Aktivieren Sie die [Bildschirmsteuerung](../guidance/voice-navigation.md#screen-control) (*nur Android*) unter *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Einstellungen {#settings}

![Routenplanung Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)

### Navigationseinstellungen {#navigation-settings}

Um auf die Navigationseinstellungen zuzugreifen, folgen Sie einem der folgenden Schritte:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.
- *Navigationstaste → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
Im Profil *Karte durchsuchen* gibt es keine Navigationseinstellungen.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profile Navigationseinstellungen iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** bestimmt, wie Routen berechnet werden. Zum Beispiel hat Ihr Fahrradprofil einen Navigations-Typ Radfahren, der die Routing-Regeln festlegt. Sie können diese Regeln (als routing.xml-Datei) in OsmAnd importieren. Mehr über das Routing können Sie auf unserer [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing)-Seite lesen.&nbsp;

- &nbsp;**<Translate android="true" ids="route_parameters"/>** steuert, welche Parameter beim Routing verwendet werden (dies ist der Prozess der Auswahl einer Route für die Navigation).

Bitte lesen Sie über die Routenparameter für den entsprechenden Navigationstyp.

Wie Sie den [Routing-Typ](../routing/osmand-routing.md#routing-types) und die [Routenparameter](../guidance/navigation-settings.md#route-parameters) konfigurieren, können Sie im Artikel [Navigationseinstellungen](../guidance/navigation-settings.md) oder in Artikeln über spezifische Routing-Typen im Abschnitt [Routenparameter](../routing/osmand-routing.md#routing-types) lesen.

### Simulierte Navigation {#simulated-navigation}

Das Werkzeug **Simulierte Navigation** ermöglicht es Ihnen, eine Route vor der Fahrt zu überprüfen. Dies hilft bei der Planung, Einarbeitung und dem Testen des Navigationssystems von OsmAnd.

#### Simulation starten / stoppen {#start--stop-simulation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Simulierte Navigation Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simulierte Navigation ios](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Wenn eine Navigationsroute erstellt wurde, können Sie die Navigation mit der Option **<Translate android="true" ids="simulate_navigation"/>** simulieren.

- Gehen Sie im [Navigationsmenü](#navigation-menu) zu *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Schalten Sie den Schalter um, um die Option zu aktivieren.
- Tippen Sie auf die Schaltfläche [Navigation starten](#start--stop-navigation), um die Simulation zu starten.
- Um die Navigation zu [stoppen](#start--stop-navigation), tippen Sie auf **Stopp** (*Android*) oder **Abbrechen** (*iOS*).

#### Geschwindigkeitsmodus {#speed-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simulierte Navigation Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Simulierte Navigation ios](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** – Beschleunigt die Simulation auf geraden Strecken, verlangsamt sich an Kreuzungen.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** – Läuft mit konstanter Geschwindigkeit.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **Auf geraden Straßenabschnitten** ist die Geschwindigkeit nahe der maximal zulässigen Geschwindigkeit.
    - **An Kreuzungen** reduziert der Simulator die Geschwindigkeit.
    - **Zusätzliche Strafen** werden an Ampeln, Stoppschildern und ähnlichen Hindernissen angewendet.


## Karten fehlen oder nicht synchronisiert {#maps-missing-or-not-synchronized}

Um eine Route zu erstellen, müssen alle **notwendigen Karten** heruntergeladen sein und das gleiche Veröffentlichungsdatum haben. Bitte beachten Sie, dass in einigen Situationen die Meldung über fehlende Karten im Routenplanungsmenü verborgen sein kann. Wenn Sie das Navigationsmenü nach oben ziehen, sehen Sie mögliche Gründe, warum Ihre Route nicht berechnet werden konnte.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Meldung keine Karten beim Erstellen der Navigation Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meldung keine Karten beim Erstellen der Navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### Erforderliche Karten {#required-maps}

Im Dialogfeld für erforderliche Karten sehen Sie Vorschläge für Karten, die heruntergeladen oder aktualisiert werden müssen. Die Liste der verwendeten Karten ist möglicherweise nicht genau, da sie eine sehr einfache Route berechnet. Um die genaue Liste der Karten zu erhalten, können Sie auf **Online berechnen** klicken. Wenn Sie **Heruntergeladene Karten verwenden** auswählen, versucht die Routenberechnung, bereits heruntergeladene Karten zu verwenden und die Warnmeldung zu überspringen.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Meldung keine Karten beim Erstellen der Navigation Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Meldung keine Karten beim Erstellen der Navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Häufige Probleme und Lösungen {#common-issues-and-solutions}

1. [Mögliche Ursachen für langsame Routenberechnung.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Was tun, wenn die Routenlänge 250 Kilometer überschreitet?](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Was tun, wenn die vorgeschlagene Route falsch erscheint?](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Wie löst man die Situation, wenn eine Navigation aufgrund fehlender notwendiger Karten nicht möglich ist?](#maps-missing-or-not-synchronized)

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