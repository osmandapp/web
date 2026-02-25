---
source-hash: 03e7029ed54c48eb315daeba4a60cfe373d1904acc8dc97cd146fa5c3bc2a0ce
sidebar_position: 2
title:  Mit der Karte interagieren
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Übersicht {#overview}

Dieser Artikel erklärt, wie Sie die Karte mit verschiedenen Schaltflächen und Gesten anpassen und mit ihr interagieren können. Er behandelt, wie man die Karte dreht, zoomt, den Blickwinkel anpasst und den Blickwinkel der Karte ändert, sie manuell oder automatisch mit dem Kompass oder nach Peilung dreht.


## Kartenbewegung {#map-movement}

### Gesten {#gestures}

Gesten sind unerlässlich, um einfach und intuitiv auf der Karte zu navigieren.

| Kartenaktion | Geste |
|:------------|:-------------|
| **Verschieben** | Tippen und halten Sie die Karte mit **einem** Finger, dann ziehen Sie, um sich zu bewegen. |
| **Wischen** | Wischen Sie mit **einem** Finger über die Karte. |
| **Vergrößern** | Doppeltippen Sie mit **einem** Finger auf die Karte. <br/> Doppeltippen Sie mit **einem** Finger und wischen Sie nach unten. <br/> Ziehen Sie mit **zwei** Fingern auf, um zu vergrößern. |
| **Verkleinern**| Doppeltippen Sie mit **zwei** Fingern. <br/> Doppeltippen Sie mit **einem** Finger und wischen Sie nach oben. <br/> Ziehen Sie mit **zwei** Fingern zusammen, um zu verkleinern. |
| **Drehen** | Tippen Sie mit **zwei** Fingern auf die Karte und drehen Sie Ihre Finger in einer kreisförmigen Bewegung. |
| **Neigen (3D)** | Tippen Sie mit **zwei** Fingern und bewegen Sie sie nach oben oder unten. <br/> Nur mit der [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) Version 2 (OpenGL) verfügbar. |

Wisch-Animationen können in den Einstellungen mit einer [speziellen Option](#remove-animations) deaktiviert werden.

### Meine Position und Zoom {#my-position-and-zoom}

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

**Meine Position**.  
Die Schaltfläche *Meine Position* ist ein kreisförmiges Symbol, das anzeigt, ob die Kartenmitte mit dem aktuellen geografischen Standort Ihres Geräts synchronisiert ist. Oft als „Wo bin ich?“-Schaltfläche bezeichnet, hilft sie Ihnen, Ihren Standort schnell auf der Karte zu finden. Während der Navigation bleibt die Karte normalerweise mit dem Standort des Geräts synchronisiert, sodass die Schaltfläche verborgen bleibt. Sie wird jedoch sichtbar, wenn die Karte und Ihr Standort durch Benutzerinteraktion nicht mehr synchron sind. Ein Tippen auf die Schaltfläche zentriert die Karte wieder auf Ihren aktuellen Standort, und ein Doppeltipp schaltet die Ansicht in den 3D-Modus.

- Die Schaltfläche *Meine Position* hat die folgenden Zustände:
  - *Vollständig blaues Symbol*. Der Standort wurde gefunden, ist aber nicht mit der Karte synchronisiert.
  - *Weißes Symbol*. Der Standort wurde gefunden und ist mit der Karte synchronisiert.
  - *Graues Symbol*. Der Standort wurde noch nicht gefunden.
  - *Pfeilsymbol*. Der 3D-Modus ist aktiviert.

- **Langes Tippen** (*Android*) auf die Schaltfläche *Meine Position* öffnet das [Kartenkontextmenü](../map/map-context-menu.md), mit dem Sie Ihren Standort teilen können.

<br/>

**Zoom-Schaltflächen**.  
*Zoom-Schaltflächen* sind immer neben *Meine Position* sichtbar und ermöglichen es Ihnen, die Zoomstufe der Karte zu steuern.

- Das Ändern der Zoomstufe beeinflusst nicht die Synchronisation der Karte mit Ihrem Standort.
- **Langes Tippen** auf die *Zoom-Schaltflächen* öffnet den Dialog *Kartenlupe*, mit dem Sie die Detailstufen der Karte anpassen können.
- Beachten Sie, dass während der Navigation der Zoom durch die Einstellung **Auto-Zoom** automatisch gesteuert werden kann:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

Sie können die Symbole der Schaltfläche **Meine Position** über die Einstellungen zur Profildarstellung anpassen. Lesen Sie [hier](../personal/profiles.md#profile-appearance) mehr darüber, wie das geht.


## Interaktion mit der Karte {#map-interaction}

### Touchscreen-Sperre {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Quick action button Touch Screen Lock Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action button Touch Screen Lock iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Verwenden Sie die Funktion **Touchscreen-Sperre**, um versehentliches Tippen während der Navigation zu vermeiden. Dies ist besonders hilfreich bei Aktivitäten wie Radfahren oder Wandern, bei denen unbeabsichtigte Berührungen Ihre Route stören könnten.

**Entsperren**.  
Tippen Sie auf die Schaltfläche auf dem Bildschirm, oder, wenn die Sperre über eine externe Taste (z. B. Leiser-Taste) aktiviert ist, drücken Sie die externe Taste und tippen Sie auf die Schaltfläche auf dem Bildschirm.  

**Einrichtung**.

- Navigieren Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen*.
- Wählen Sie *+ → Aktion hinzufügen → Benutzeroberfläche → Touchscreen-Sperre*.

Klare Bildschirmnachrichten führen Sie beim Sperren oder Entsperren des Bildschirms.


### Eigene Position animieren {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,position_animation"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,animate_my_location"/>*  

Erzeugt einen sanften Schwenkeffekt der Karte im Vergleich zum Symbol *[Meine Position](../personal/profiles/#profile-appearance)*, wenn man sich bewegt. Der Effekt führt zu einer leichten Verzögerung von etwa 1 Sekunde gegenüber der tatsächlichen Position. Es wurde berichtet, dass die Aktivierung dieser Funktion unter bestimmten Umständen zu spürbaren Verzögerungen führen kann. Deaktivieren Sie sie, wenn solche Probleme auftreten.


### Animationen entfernen {#remove-animations}

<InfoAndroidOnly/>  

Sie können alle Kartenanimationen während der Interaktion mit der Karte, einschließlich Gesten und Schaltflächen, deaktivieren.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


## Kartenorientierung {#map-orientation}

### Kartenausrichtungsmodi {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

*Kartenausrichtungsmodi* ermöglichen es Ihnen zu wählen, wie die Karte auf dem Bildschirm des Geräts angezeigt wird. OsmAnd bietet Modi wie **Manuell gedreht**, **Bewegungsrichtung**, **Kompassrichtung** und **Norden ist oben**. Das Aktivieren jedes Modus ändert die Art und Weise, wie die Karte entsprechend der ausgewählten Option ausgerichtet wird. Für vollständige Details siehe den Artikel [Karten-Schaltflächen](../widgets/map-buttons.md#compass).


### Nach Kompass drehen {#rotate-by-compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Die Kompass-Schaltfläche zeigt an, wie die [Karte ausgerichtet ist](#map-orientation-modes). Der *rote Pfeil* auf den Symbolen oder die Richtung des Pfeils im Modus *Bewegungsrichtung* zeigt nach Norden. [Das Symbol auf der Kompass-Schaltfläche](../widgets/map-buttons.md#compass) zeigt den aktuellen Kartenausrichtungsmodus an. Das Kompass-Schaltflächen-Widget bietet drei [Interaktionsoptionen](../widgets/map-buttons.md#compass-tapping-behavior): *Einzeltippen* dreht die Karte nach Norden, *Doppeltippen* wechselt zwischen allen Kartenausrichtungsmodi und *Langes Tippen* öffnet die Liste der Modi.


### Karte nach Peilung drehen {#rotate-map-by-bearing}

Im Modus **Karte nach Peilung drehen** ([Bewegungsrichtung](../widgets/map-buttons.md#compass)) richtet sich die Karte automatisch nach Ihrer Bewegungsrichtung aus, sodass der Bereich vor Ihnen oben auf dem Bildschirm angezeigt wird. Dieser Modus verbessert die Navigation, indem er den Kartenmittelpunkt leicht nach unten verschiebt und mehr von der vorausliegenden Route anzeigt. Wenn Sie stillstehen, bleibt die Karte fixiert.  

Sie können diese Funktion über *Menü → Einstellungen → Profile → Allgemeine Einstellungen → Darstellung → Kartenausrichtung* aktivieren oder durch Doppeltippen auf die [Kompass-Schaltfläche](../widgets/map-buttons.md#compass-tapping-behavior). Weitere Details zur Peilung finden Sie [hier](../widgets/nav-widgets.md#bearing-widget).


## Kartenperspektive {#map-perspective}

### Kartenneigung und Horizont {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tilt android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Tilt android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Tilt ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Tilt ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

Mit der neuen [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) können Sie die [Kameraneigung](../plugins/development.md#camera-tilt) von 90 (keine Neigung) auf 10 Grad ändern. Ungefähr bei einer Kartenneigung von weniger als 20-22 Grad (dieser Parameter hängt von der Zoomstufe ab) wird die imaginäre Horizontlinie sichtbar. Im Gegensatz zum realen Horizont ist der Programmhorizont immer gerade.  

Unter dem Horizont können Sie sogenannten *Dunst* oder *Nebel* sehen. Dieser Bereich der Karte ist mit grauer Farbe gefüllt, nur wenige Kartendetails sind zu erkennen.  
Die Verwendung von Nebel ist notwendig, da die Anzeige von entfernten Objekten auf der Karte erhebliche Rechenressourcen erfordert und aufgrund von Karten-[Verzerrungen](../plugins/development.md#comparison-with-a-satellite-imagery) bei kleinen Betrachtungswinkeln nicht immer gerechtfertigt ist. Daher ist die sichtbare Entfernung auf der OsmAnd-Karte derzeit auf 35 Kacheln begrenzt.  

:::info
Die Kartenneigung kann durch langes Tippen auf den Bildschirm mit zwei Fingern und deren Bewegung nach oben/unten geändert werden. Sie können die Neigung auch durch Tippen auf das Symbol [Meine Position](#my-position-and-zoom) in der unteren rechten Ecke des Bildschirms ändern (nur 45- und 90-Grad-Positionen sind verfügbar).  
Sie können die Kameraneigung nicht ändern, wenn die alte [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) (Version 1) eingeschaltet ist.
:::


### Kartenlupe {#map-magnifier}

Die *Kartenlupe* ist ein Werkzeug, das die Sichtbarkeit der Karte verbessert, ähnlich einer Lupe, die bei Papierkarten verwendet wird. Sie ermöglicht es Ihnen, in die Karte hineinzuzoomen, um Text und Details klarer zu sehen oder den Detaillierungsgrad bei gleichem Maßstab anzupassen. Weitere Informationen finden Sie im Artikel [Vektorkarten](../map/vector-maps.md#map-magnifier).


### Globusansicht {#globe-view}

<InfoAndroidOnly/> 

![Globe View](@site/static/img/map/globe_view_1.png) ![Globe View](@site/static/img/map/globe_view_2.png)

**Globusansicht** ermöglicht es Ihnen, die Karte als sphärische Erde anstelle einer flachen Projektion anzuzeigen. Dieser Modus ändert die Geometrie der Kartenoberfläche und passt die Karteninteraktion an die sphärische Navigation an.  
Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Global View*

Die Globusansicht ist derzeit nur verfügbar, wenn:
- Das [Development-Plugin](../plugins/development.md) aktiviert ist.  
Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,plugin_settings,debugging_and_development"/>*
- Die [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) auf Version 2 (OpenGL) eingestellt ist.  
Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine,map_rendering_engine_v2"/>*  

Wenn die Globusansicht aktiviert ist, rotiert die Karte als Globus. Ziehen-Gesten drehen die Erde, und Zoom ändert den Kameradistanz anstelle der Skalierung einer flachen Oberfläche. Kartenelemente wie Tracks, Marker, Symbole und 3D-Objekte werden direkt auf der sphärischen Oberfläche gerendert und folgen ihrer Krümmung. Objekte verschwinden allmählich hinter dem Horizont, wenn sich der Globus dreht.

Die Interaktion in der Nähe des Horizonts kann begrenzt sein, um unbeabsichtigte Bewegungen über große Entfernungen zu verhindern. Der Globus kann nicht über die Pole umgedreht werden. Bei sehr niedrigen Zoomstufen bleibt das visuelle Erscheinungsbild von Straßen und Beschriftungen konsistent, während er rotiert.


## Externe Eingabegeräte {#external-input-devices}

Tasten externer Eingabegeräte bieten eine bequeme und effiziente Möglichkeit, mit der Karte und der Benutzeroberfläche der OsmAnd-Anwendung zu interagieren. Sie befinden sich auf externen Geräten wie **Bluetooth- oder anderen Tastaturtypen**, **spezialisierten Tasten an Fahrzeugnavigationsgeräten** oder [WunderLINQ](https://blackboxembedded.com/)- und [Parrot](https://www.parrot.com/en)-Controllern (*nur Android*).  

Eine der Hauptfunktionen von Tasten auf externen Eingabegeräten ist das Vergrößern und Verkleinern der Karte. Sie ermöglichen es auch, auf der Karte zu navigieren und ihre Ausrichtung zu ändern, ohne auf den Bildschirm tippen und gestikulieren zu müssen. Tasten auf externen Eingabegeräten unterstützen viele weitere Funktionen, wie das Öffnen des *Hauptmenüs* und das Auslösen von *Schnellaktionen*. Benutzer können auch Tastenzuweisungen für unterstützte Geräte (Tastatur, WunderLINQ und benutzerdefinierte externe Controller) anpassen.

:::note
Die Tastatur bleibt auch dann funktionsfähig, wenn die Option *Externe Eingabegeräte* ausgeschaltet und *Keine* ausgewählt ist. Benutzerdefinierte Tastenzuweisungen funktionieren jedoch nur, wenn *Externe Eingabegeräte* aktiviert sind.
:::

### Vorkonfiguriertes Eingabegerät {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![External devices](@site/static/img/map/external_menu_android.png) ![External devices](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![External devices](@site/static/img/map/external_types_2_ios.png)

</TabItem>

</Tabs>  

Um auf die Einstellungen eines externen Eingabegeräts zuzugreifen, müssen Sie diese Funktion aktivieren.

- Gehen Sie zum Hauptmenü *Menü → Einstellungen →* wählen Sie das *Profil → Allgemeine Einstellungen → Sonstiges → Externe Eingabegeräte* und schalten Sie auf *Aktiviert*.

- Wählen Sie ein von OsmAnd unterstütztes Gerät aus, indem Sie auf den Punkt *Typ* in der Liste tippen:  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*nur Android*) oder erstellen Sie [**Ihren eigenen Typ**](#custom-input-device-type).

- Für jeden Typ von externem Eingabegerät gibt es eine andere **definierte Zuweisung von Aktions-Tasten-Bündeln**. Der Abschnitt *<Translate android="true" ids="key_assignments"/>* zeigt die Liste der Aktionen und ihrer zugewiesenen Tasten. Die Tabelle der Tasten ist unten dargestellt. Dies sind Standardzuweisungen – sie können nach Benutzerpräferenzen geändert oder erweitert werden.

- Sie können mehr über die Aktionen externer Eingabegeräte auf GitHub im Paket [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82) lesen.

| Taste | Gerät | Aktion |
|:---------|:---------------|:---------------|
|**C**| *Tastatur* | Verschieben - [Zu meiner Position](#my-position-and-zoom) |
|**D**| *Tastatur* | Ändern - [Kartenausrichtung](#map-orientation-modes) |
|**N**| *Tastatur* | Anzeigen / Ausblenden - Navigationsansicht |
|**S**| *Tastatur* | Anzeigen / Ausblenden - [Suchansicht](../search/index.md) |
|**P**| *Tastatur* | Ändern - App-Profil zum nächsten |
|**O**| *Tastatur* | Ändern - App-Profil zum vorherigen |
|**&#8593;**| *Tastatur* | Verschieben - Karte nach oben  |
|**&#8595;**| *Tastatur* | Verschieben - Karte nach unten  |
|**&#8592;**| *Tastatur* | Verschieben - Karte nach links  |
|**&#8594;**| *Tastatur* | Verschieben - Karte nach rechts  |
|**&#43;** **=**| *Tastatur*  | Karte - [Vergrößern](#my-position-and-zoom) |
|**&#8722;**| *Tastatur*  | Karte - [Verkleinern](#my-position-and-zoom) |
|**Zurück drücken**| *Tastatur*   | Navigieren – Vorheriger Bildschirm  |
|**&#8595;**| *Wunderlinq*  | Karte - [Verkleinern](#my-position-and-zoom) |
|**&#8593;**| *Wunderlinq*  | Karte - [Vergrößern](#my-position-and-zoom) |
| **ESC** | *Wunderlinq*  | WunderLINQ Datagrid öffnen |
| **M** | *Tastatur*  | Anzeigen / Ausblenden - [Seitenmenü](../start-with/main-menu.md#main-menu-side-menu) |
| **Joystick-Druck** <br/> (*Legacy Android*) | *Tastatur*  | Verschieben - [Zu meiner Position](#my-position-and-zoom) |
| **Medientaste** <br/> (*nur Android*)| *Tastatur*  | Anzeigen / Ausblenden - [AV-Notizen](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*nur Android*)| *Parrot*  | Karte - [Verkleinern](#my-position-and-zoom) |
| **&#8594;** <br/> (*nur Android*) | *Parrot*  | Karte - [Vergrößern](#my-position-and-zoom) |


### Benutzerdefinierter Eingabegerätetyp {#custom-input-device-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_mypilot_android.png)  ![External devices](@site/static/img/map/external_mypilot2_android.png)

Wenn Sie Tasten für ein externes Eingabegerät (wie eine Tastatur, einen Joystick oder einen Controller) zuweisen möchten, müssen Sie einen Gerätetyp erstellen: Gehen Sie zur Einstellung [Externe Eingabegeräte](#external-input-devices), wählen Sie **Typ** aus der Liste, tippen Sie auf das &nbsp; "**＋**" &nbsp; und geben Sie einen Namen ein. Jeder Typ hat ein Menü mit den folgenden Optionen: ***Umbenennen, Duplizieren*** und ***Entfernen***.

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/> → Device → Add*

![External devices](@site/static/img/map/external_mypilot_ios.png)  ![External devices](@site/static/img/map/external_mypilot2_ios.png)

Wenn Sie Tasten für ein externes Eingabegerät (wie eine Tastatur, einen Joystick oder einen Controller) zuweisen möchten, müssen Sie einen Gerätetyp erstellen: Gehen Sie zur Einstellung [Externe Eingabegeräte](#external-input-devices), wählen Sie **Device** aus der Liste, tippen Sie auf &nbsp; "**Add**" &nbsp;und geben Sie einen Namen ein. Jeder Typ hat ein Menü mit den folgenden Optionen: ***Umbenennen, Duplizieren*** und ***Entfernen***.

</TabItem>

</Tabs>  

### Aktion & Tastenzuweisungen hinzufügen {#add-action--key-asssigments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![External devices](@site/static/img/map/external_custom_4_andr.png)  ![External devices](@site/static/img/map/external_custom_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External devices](@site/static/img/map/external_custom_4_ios.png)  ![External devices](@site/static/img/map/external_custom_3_ios.png) 

</TabItem>

</Tabs>  

Nachdem Sie einen benutzerdefinierten Eingabetyp erstellt haben, können Sie den Tasten die erforderlichen Aktionen zuweisen. Eine breite Palette von [Aktionstypen](../widgets/quick-action.md#action-types) aus dem Schnellaktions-Widget ist verfügbar.

- Wählen Sie einen Gerätetyp aus und tippen Sie dann auf den Punkt **Tastenzuweisungen**.
- Tippen Sie auf die Schaltfläche ***Hinzufügen*** (&nbsp;"**＋**"&nbsp;).
- Wählen Sie die gewünschte Aktion aus, tippen Sie dann auf das Feld ***Taste hinzufügen*** und tippen Sie auf die Taste an Ihrem Gerät, um sie der Aktion zuzuweisen.  

:::note

- Mehrere Tasten können einer Aktion zugewiesen werden.
- Wenn die zugewiesene Taste bereits für eine andere Aktion verwendet wird, erhalten Sie eine Benachrichtigung mit der Option, die Taste neu zuzuweisen oder die Zuweisung abzubrechen.
- Später können Sie Aktionen und Tastenzuweisungen ändern oder weitere für bereits erstellte Aktionen hinzufügen, wählen Sie einfach einen Eintrag in der Liste der Tastenzuweisungen aus.

:::

### Tastenzuweisung löschen {#delete-key-assignment}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![External devices](@site/static/img/map/external_custom_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External devices](@site/static/img/map/external_custom_1_ios.png)

</TabItem>

</Tabs> 

Sie können mehrere unnötige Aktionen mit der **Bearbeiten-Schaltfläche** (*bleistiftförmig* auf Android) auf einmal löschen:

- ***Eine Aktion entfernen*** pro Aktion, mit der &nbsp; "**−**" &nbsp;-Schaltfläche im Elementfeld. Tastenzuweisung kann auch über das Kontextmenü (langes Tippen auf das Element) entfernt werden, indem Sie **Entfernen** tippen.
- ***Alle Tastenzuweisungen entfernen*** für den ausgewählten Typ, indem Sie auf die Schaltfläche in der oberen rechten Ecke des Bildschirms neben dem *Namen bearbeiten* auf Android tippen; indem Sie auf die Schaltfläche **Alle löschen** auf iOS tippen.


## Verwandte Artikel {#related-articles}

- [Kartenkontextmenü](./map-context-menu.md)
- [Karte konfigurieren](./configure-map-menu.md)
- [Vektorkarten (Kartenstile)](./vector-maps.md)
- [Rasterkarten (Online / Offline)](./raster-maps.md)
- [Punkte auf der Karte](./point-layers-on-map.md)
- [Tracks und Routen](./tracks/index.md)
- [Tracks-Kontextmenü](./tracks/track-context-menu.md)
- [Öffentlicher Verkehr](./public-transport.md)