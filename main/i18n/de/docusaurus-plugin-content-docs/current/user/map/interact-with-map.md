---
source-hash: e01063d9fc36bf4b74ae42e7ffe9e8041b28514fb02d5f5070fe0dae8604ff4b
sidebar_position: 2
title: Mit der Karte interagieren
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



## Überblick {#overview}

Dieser Artikel erklärt, wie man die Karte mit verschiedenen Schaltflächen und Gesten anpassen und mit ihr interagieren kann. Es wird behandelt, wie man die Karte dreht, zoomt, den Blickwinkel anpasst und den Blickwinkel der Karte ändert, sie manuell oder automatisch mit dem Kompass oder entsprechend der Peilung dreht.


## Gesten {#gestures}

Gesten sind unerlässlich, um die Karte einfach und intuitiv zu navigieren.

| Kartenaktion | Geste |
|:------------|:-------------|
| **Bewegen** | Tippen und halten Sie die Karte mit **einem** Finger, dann ziehen Sie, um sich zu bewegen. |
| **Wischen** | Wischen Sie die Karte mit **einem** Finger. |
| **Vergrößern** | Doppeltippen Sie mit **einem** Finger auf die Karte. <br/> Doppeltippen Sie mit **einem** Finger und wischen Sie nach unten. <br/> Ziehen Sie mit **zwei** Fingern zusammen, um zu vergrößern. |
| **Verkleinern**| Doppeltippen Sie mit **zwei** Fingern. <br/> Doppeltippen Sie mit **einem** Finger und wischen Sie nach oben. <br/> Ziehen Sie mit **zwei** Fingern auseinander, um zu verkleinern. |
| **Drehen** | Tippen Sie mit **zwei** Fingern auf die Karte und drehen Sie dann Ihre Finger in einer kreisförmigen Bewegung. |
| **Neigen (3D)** | Tippen Sie mit **zwei** Fingern und bewegen Sie diese nach oben oder unten. <br/> Nur verfügbar mit [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) Version 2 (OpenGL). |

Wisch-Animationen können in den Einstellungen mit einer [speziellen Option](#no-animations) deaktiviert werden.


## Mein Standort und Zoom {#my-location-and-zoom}

![Konfigurationsbildschirmmenü](@site/static/img/widgets/location_zoom_buttons.png)

**Mein Standort**.
Die Schaltfläche *Mein Standort* ist ein kreisförmiges Symbol, das anzeigt, ob das Zentrum der Karte mit der aktuellen Geolokalisierung Ihres Geräts synchronisiert ist. Oft als "Wo bin ich?"-Schaltfläche bezeichnet, hilft sie Ihnen, schnell Ihren Standort auf der Karte zu finden. Während der Navigation bleibt die Karte normalerweise mit dem Standort des Geräts synchronisiert, sodass die Schaltfläche ausgeblendet bleibt. Sie wird jedoch sichtbar, wenn die Karte und Ihr Standort aufgrund von Benutzerinteraktionen nicht mehr synchron sind. Durch Tippen auf die Schaltfläche wird die Karte auf Ihren aktuellen Standort zentriert, und ein Doppeltipp wechselt die Ansicht in den 3D-Modus.

- Die Schaltfläche *Mein Standort* hat die folgenden Zustände:
  - *Vollblaues Symbol*. Der Standort wurde gefunden, ist aber nicht mit der Karte synchronisiert.
  - *Weißes Symbol*. Der Standort wurde gefunden und ist mit der Karte synchronisiert.
  - *Graues Symbol*. Der Standort wurde noch nicht gefunden.
  - *Pfeilsymbol*. Der 3D-Modus ist aktiviert.

- **Langes Tippen** (*Android*) auf die Schaltfläche *Mein Standort* öffnet das [Kartenkontextmenü](../map/map-context-menu.md), mit dem Sie Ihren Standort teilen können.

<br/>

**Zoom-Schaltflächen**.
*Zoom-Schaltflächen* sind immer neben *Mein Standort* sichtbar und ermöglichen es Ihnen, den Zoomfaktor der Karte zu steuern.

- Das Ändern des Zoomfaktors hat keinen Einfluss auf die Synchronisierung der Karte mit Ihrem Standort.
- **Langes Tippen** auf die *Zoom-Schaltflächen* öffnet den *Kartenlupen*-Dialog, mit dem Sie die Detailstufen der Karte anpassen können.
- Beachten Sie, dass während der Navigation der Zoom automatisch durch die Einstellung **Auto-Zoom** gesteuert werden kann:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*

### Erscheinungsbild "Mein Standort" {#my-location-appearance}

Sie können die Schaltflächensymbole von **Mein Standort** über die Profile-Erscheinungsbildeinstellungen anpassen. Weitere Informationen dazu finden Sie [hier](../personal/profiles.md#profile-appearance).


## Kartenlupe {#map-magnifier}

Die *Kartenlupe* ist ein Werkzeug, das die Sichtbarkeit der Karte verbessert, ähnlich einer Lupe, die bei Papierkarten verwendet wird. Sie ermöglicht es Ihnen, in die Karte hineinzuzoomen, um Text und Details klarer zu sehen oder den Detailgrad bei gleichbleibendem Maßstab anzupassen. Weitere Informationen finden Sie im Artikel [Vektorkarten](../map/vector-maps.md#map-magnifier).


## Kartenorientierungsmodi {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Kompass-Widget](@site/static/img/map/map_orientation_mode_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Kompass-Widget](@site/static/img/map/map_orientation_mode_ios.png)

</TabItem>

</Tabs>

*Kartenorientierungsmodi* ermöglichen es Ihnen, zu wählen, wie die Karte auf dem Gerätebildschirm angezeigt wird. OsmAnd bietet Modi wie **Manuell gedreht**, **Bewegungsrichtung**, **Kompassrichtung** und **Norden oben**. Das Aktivieren jedes Modus ändert die Ausrichtung der Karte entsprechend der ausgewählten Option. Vollständige Details finden Sie im Artikel [Karten-Schaltflächen](../widgets/map-buttons.md#compass).


## Kompass {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Kompass-Widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Kompass-Widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Die Kompass-Schaltfläche zeigt an, wie die [Karte ausgerichtet ist](#map-orientation-modes). Der *rote Pfeil* auf den Symbolen oder die Richtung des Pfeils im *Bewegungsrichtungsmodus* zeigt Norden an. [Das Symbol auf der Kompass-Schaltfläche](../widgets/map-buttons.md#compass) zeigt den aktuellen Kartenorientierungsmodus an. Das Kompass-Schaltflächen-Widget bietet drei [Interaktionsoptionen](../widgets/map-buttons.md#compass-tapping-behavior): *Einmaliges Tippen* dreht die Karte nach Norden, *Doppeltippen* wechselt zwischen allen Kartenorientierungsmodi und *Langes Tippen* öffnet die Liste der Modi.


## Karte nach Peilung drehen {#rotate-map-by-bearing}

Im Modus **Karte nach Peilung drehen** ([Bewegungsrichtung](../widgets/map-buttons.md#compass)) richtet sich die Karte automatisch an Ihrer Bewegungsrichtung aus, sodass der Bereich vor Ihnen am oberen Bildschirmrand angezeigt wird. Dieser Modus verbessert die Navigation, indem er das Kartenzentrum leicht nach unten verschiebt und so mehr von der bevorstehenden Route anzeigt. Wenn Sie stehen, bleibt die Karte fixiert.

Sie können diese Funktion über *Menü → Einstellungen → Profile → Allgemeine Einstellungen → Erscheinungsbild → Kartenausrichtung* oder durch Doppeltippen auf die [Kompass-Schaltfläche](../widgets/map-buttons.md#compass-tapping-behavior) aktivieren. Weitere Details zur Peilung finden Sie [hier](../widgets/nav-widgets.md#bearing-widget).


## Kartenneigung und Horizont {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Neigung Android 1](@site/static/img/map/tilt_horizon_andr_1.png) ![Neigung Android 2](@site/static/img/map/tilt_horizon_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Neigung iOS 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Neigung iOS 2](@site/static/img/map/tilt_horizon_ios_2.png)
</TabItem>

</Tabs>

Mit der neuen Karten-[Rendering-Engine](../personal/global-settings.md#map-rendering-engine) können Sie die [Kameraneigung](../plugins/development.md#camera-tilt) von 90 (keine Neigung) auf 10 Grad ändern. Bei einer Kartenneigung von weniger als etwa 20-22 Grad (dieser Parameter hängt vom Zoomfaktor ab) wird die imaginäre Horizontlinie sichtbar. Im Gegensatz zur realen ist die Programmhorizontlinie immer gerade.

Unterhalb des Horizonts sehen Sie den sogenannten *Dunst* oder *Nebel*. Dieser Bereich der Karte ist grau gefüllt, nur wenige Kartendetails sind zu erkennen.
Die Verwendung von Nebel ist notwendig, da die Anzeige entfernter Objekte auf der Karte erhebliche Rechenressourcen erfordert und aufgrund von Karten-[Verzerrungen](../plugins/development.md#comparison-with-a-satellite-imagery) bei kleinen Betrachtungswinkeln nicht immer gerechtfertigt ist. Die sichtbare Entfernung auf der OsmAnd-Karte ist derzeit auf 35 Kacheln begrenzt.

:::info
Die Kartenneigung kann durch langes Tippen auf den Bildschirm mit zwei Fingern und deren Auf-/Abwärtsbewegung geändert werden. Sie können die Neigung auch ändern, indem Sie auf das Symbol [Mein Standort](#my-location-and-zoom) in der unteren rechten Ecke des Bildschirms tippen (nur 45- und 90-Grad-Positionen sind verfügbar).
Sie können die Kameraneigung nicht ändern, wenn die alte [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) (Version 1) aktiviert ist.
:::


## Touchscreen-Sperre {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schnellaktionstaste Touchscreen-Sperre Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Schnellaktionstaste Touchscreen-Sperre iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Verwenden Sie die Funktion **Touchscreen-Sperre**, um versehentliche Berührungen während der Navigation zu vermeiden. Dies ist besonders hilfreich bei Aktivitäten wie Radfahren oder Wandern, wo unbeabsichtigte Berührungen Ihre Route stören könnten.

**Entsperren**.
Tippen Sie auf die Bildschirmtaste, oder, wenn die Sperre aktiviert ist, über eine externe Taste (z.B. Lautstärke runter), drücken Sie die externe Taste und tippen Sie auf die Bildschirmtaste.

**Einrichtung**.

- Navigieren Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen*.
- Wählen Sie *+ → Aktion hinzufügen → Schnittstelle → Touchscreen-Sperre*.

Klare Bildschirmmeldungen führen Sie beim Sperren oder Entsperren des Bildschirms.


## Einstellungen {#settings}

### Zusätzliche Kompass-Einstellungen {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Glättet die Drehung der Karte mit einer langsameren Rotationsanimation, obwohl dies eine leichte Verzögerung von nicht mehr als 1 Sekunde mit sich bringt.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Glättet die Drehung der Karte mit einer langsameren Rotationsanimation, obwohl dies eine leichte Verzögerung von nicht mehr als 1 Sekunde mit sich bringt.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Keine Animationen {#no-animations}

<InfoAndroidOnly/>

Sie können alle Kartenanimationen während der Karteninteraktionen, einschließlich Gesten und Schaltflächen, deaktivieren.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Eigene Position animieren {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*

Erzeugt einen sanften Karten-Schwenkeffekt gegenüber dem Symbol *[Meine Position](../personal/profiles/#profile-appearance)*, wenn es in Bewegung ist. Der Effekt führt zu einer leichten Verzögerung gegenüber der tatsächlichen Position von etwa 1 Sekunde. Es wurde berichtet, dass die Aktivierung unter bestimmten Umständen zu ausgeprägten Verzögerungsproblemen führen kann; deaktivieren Sie sie, wenn solche Probleme auftreten.


## Externe Eingabegeräte {#external-input-devices}

Die Tasten externer Eingabegeräte bieten eine bequeme und effiziente Möglichkeit, mit der Karte und der OsmAnd-Anwendungsoberfläche zu interagieren. Sie befinden sich auf externen Geräten, wie z.B. **Bluetooth- oder anderen Tastaturen**, **spezialisierten Tasten an Fahrzeugnavigationsgeräten** oder [WunderLINQ](https://blackboxembedded.com/) und [Parrot](https://www.parrot.com/en) Controllern.

Eine der Hauptfunktionen der Tasten an externen Eingabegeräten ist das Vergrößern und Verkleinern der Karte. Sie ermöglichen es auch, die Karte zu navigieren und ihre Ausrichtung zu ändern, ohne auf den Bildschirm tippen und gestikulieren zu müssen. Tasten an externen Eingabegeräten unterstützen viele andere Funktionen, wie z.B. das Öffnen des *Hauptmenüs*.

:::note
Die Tastatur bleibt funktionsfähig, auch wenn die Option *Externe Eingabegeräte* ausgeschaltet und *Keine* ausgewählt ist.
:::

### Vorkonfiguriertes Eingabegerät {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Externe Geräte](@site/static/img/map/external_menu_android.png) ![Externe Geräte](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Externe Geräte](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>

Um auf die Einstellungen eines externen Eingabegeräts zuzugreifen, müssen Sie diese Funktion aktivieren.

- Gehen Sie zum Haupt-*Menü → Einstellungen →* wählen Sie das *Profil → Allgemeine Einstellungen → Sonstiges → Externe Eingabegeräte* und schalten Sie auf *Aktiviert*.

- Wählen Sie ein Gerät aus den von OsmAnd unterstützten Geräten aus, indem Sie auf das Element *Typ* in der Liste tippen:
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*nur Android*), oder erstellen Sie [**Ihren eigenen Typ**](#custom-input-device-type) (*nur Android*).

- Für jeden Typ von externem Eingabegerät gibt es eine andere **zugewiesene Aktion-Taste-Kombination**. Tippen Sie auf die *<Translate android="true" ids="key_assignments"/>*, um eine Liste der Aktionen und Tasten anzuzeigen. Die Tastentabelle ist unten aufgeführt.

- Weitere Informationen zu Aktionen externer Eingabegeräte finden Sie auf GitHub im Paket [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Taste | Gerät | Aktion |
|:---------|:---------------|:---------------|
|**C**| *Tastatur* | Bewegen - [Zum Standort](#my-location-and-zoom) |
|**D**| *Tastatur* | Ändern - [Kartenausrichtung](#map-orientation-modes) |
|**N**| *Tastatur* | Anzeigen / Ausblenden - Navigationsansicht |
|**S**| *Tastatur* | Anzeigen / Ausblenden - [Suchansicht](../search/index.md) |
|**P**| *Tastatur* | Ändern - App-Profil zum nächsten |
|**O**| *Tastatur* | Ändern - App-Profil zum vorherigen |
|**&#8593;**| *Tastatur* | Bewegen - Karte nach oben |
|**&#8595;**| *Tastatur* | Bewegen - Karte nach unten |
|**&#8592;**| *Tastatur* | Bewegen - Karte nach links |
|**&#8594;**| *Tastatur* | Bewegen - Karte nach rechts |
|**&#43;** **=**| *Tastatur* | Karte - [Vergrößern](#my-location-and-zoom) |
|**&#8722;**| *Tastatur* | Karte - [Verkleinern](#my-location-and-zoom) |
|**Zurück drücken**| *Tastatur* | Navigieren – Vorheriger Bildschirm |
|**&#8595;**| *Wunderlinq* | Karte - [Verkleinern](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq* | Karte - [Vergrößern](#my-location-and-zoom) |
| **ESC** | *Wunderlinq* | WunderLINQ Datagrid öffnen |
| **M** <br/> (*älteres Android*) | *Tastatur* | Anzeigen / Ausblenden - [Seitenmenü](../start-with/main-menu.md#main-menu-side-menu) |
| **Joystick-Druck** <br/> (*älteres Android*) | *Tastatur* | Bewegen - [Zum Standort](#my-location-and-zoom) |
| **Medientaste** <br/> (*nur Android*)| *Tastatur* | Anzeigen / Ausblenden - [AV-Notizen](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*nur Android*)| *Parrot* | Karte - [Verkleinern](#my-location-and-zoom) |
| **&#8594;** <br/> (*nur Android*) | *Parrot* | Karte - [Vergrößern](#my-location-and-zoom) |


### Benutzerdefinierter Eingabegerätetyp {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Externe Geräte](@site/static/img/map/external_mypilot_android.png) ![Externe Geräte](@site/static/img/map/external_mypilot2_android.png)

Wenn Sie Tasten für ein externes Eingabegerät (wie Tastatur, Joystick oder Controller) zuweisen möchten, müssen Sie einen Gerätetyp erstellen: Gehen Sie zur Einstellung [Externes Eingabegerät](#external-input-devices), wählen Sie **Typ** aus der Liste, tippen Sie auf das &nbsp;"**＋**"&nbsp; und geben Sie einen Namen ein. Jeder Typ hat ein Menü mit den folgenden Optionen: ***Umbenennen, Duplizieren*** und ***Entfernen***.

### Aktion hinzufügen & Tastenbelegungen {#add-action--key-asssigments}

![Externe Geräte](@site/static/img/map/external_custom_4_andr.png) ![Externe Geräte](@site/static/img/map/external_custom_3_andr.png)

Nachdem Sie einen benutzerdefinierten Eingabetyp erstellt haben, können Sie die erforderlichen Aktionen den Tasten zuweisen. Eine breite Palette von [Aktionstypen](../widgets/quick-action.md#action-types) aus dem Schnellaktions-Widget ist verfügbar.

- Wählen Sie einen Gerätetyp aus und tippen Sie dann auf das Element **Tastenbelegungen**.
- Tippen Sie auf die Schaltfläche ***Hinzufügen*** (&nbsp;"**＋**"&nbsp;) in der unteren rechten Ecke des Bildschirms.
- Wählen Sie die gewünschte Aktion aus, tippen Sie dann auf das Feld ***Taste hinzufügen*** und tippen Sie auf die Taste auf Ihrem Gerät, um sie der Aktion zuzuweisen.

:::note

- Wenn die zugewiesene Taste bereits für eine andere Aktion verwendet wird, erhalten Sie eine Benachrichtigung mit der Option, die Taste neu zuzuweisen oder die Zuweisung abzubrechen.
- Später können Sie Aktionen und Tastenbelegungen ändern oder weitere für bereits erstellte Aktionen hinzufügen, wählen Sie einfach ein Element in der Liste der Tastenbelegungen aus.

:::

### Tastenbelegung löschen {#delete-key-assignment}

![Externe Geräte](@site/static/img/map/external_custom_1_andr.png)

Sie können mehrere unnötige Aktionen gleichzeitig mit der **Bearbeiten-Schaltfläche** (*Bleistift-förmig*) in der oberen rechten Ecke des Bildschirms löschen:

- ***Eine Aktion entfernen*** pro Aktion, mit der &nbsp;"**−**"&nbsp;-Schaltfläche im Elementfeld.
- ***Alle Tastenbelegungen entfernen*** für den ausgewählten Typ, indem Sie auf die Schaltfläche in der oberen rechten Ecke des Bildschirms neben dem *Namen bearbeiten* tippen.


## Verwandte Artikel {#related-articles}

- [Karten-Kontextmenü](./map-context-menu.md)
- [Karte konfigurieren](./configure-map-menu.md)
- [Vektorkarten (Kartenstile)](./vector-maps.md)
- [Rasterkarten (Online / Offline)](./raster-maps.md)
- [Punkte auf der Karte](./point-layers-on-map.md)
- [Spuren und Routen](./tracks/index.md)
- [Spuren-Kontextmenü](./tracks/track-context-menu.md)
- [Öffentlicher Nahverkehr](./public-transport.md)


> *Zuletzt aktualisiert: Dezember 2024*