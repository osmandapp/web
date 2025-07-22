---
source-hash: ca480d4fada9f677b9e8a4b60267b6ef26adb8611c8539c54da069d6ba39c8d5
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

Dieser Artikel erklärt, wie Sie die Karte mit verschiedenen Schaltflächen und Gesten anpassen und mit ihr interagieren können. Es wird erläutert, wie Sie die Karte drehen, zoomen, den Blickwinkel anpassen und den Blickwinkel der Karte ändern, sie manuell oder automatisch mit dem Kompass oder gemäß der Peilung drehen können.


## Gesten {#gestures}

Gesten sind unerlässlich, um einfach und intuitiv auf der Karte zu navigieren.

| Kartenaktion  | Geste  |
|:------------|:-------------|
| **Verschieben**    | Tippen und halten Sie die Karte mit **einem** Finger und ziehen Sie dann, um sich zu bewegen. |
| **Wischen**   | Wischen Sie mit **einem** Finger über die Karte. |
| **Vergrößern** | Doppeltippen Sie mit **einem** Finger auf die Karte. <br/> Doppeltippen Sie mit **einem** Finger und wischen Sie nach unten. <br/> Ziehen Sie mit **zwei** Fingern auseinander, um zu vergrößern. |
| **Verkleinern**| Doppeltippen Sie mit **zwei** Fingern. <br/> Doppeltippen Sie mit **einem** Finger und wischen Sie nach oben. <br/> Ziehen Sie mit **zwei** Fingern zusammen, um zu verkleinern. |
| **Drehen**  | Tippen Sie mit **zwei** Fingern auf die Karte und drehen Sie dann Ihre Finger kreisförmig. |
| **Neigen (3D)** | Tippen Sie mit **zwei** Fingern und bewegen Sie diese nach oben oder unten. <br/> Nur mit [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) Version 2 (OpenGL) verfügbar. |

Wisch-Animationen können in den Einstellungen mit einer [Spezialoption](#no-animations) deaktiviert werden.


## Mein Standort und Zoom {#my-location-and-zoom}

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

**Mein Standort**.  
Die Schaltfläche *Mein Standort* ist ein kreisförmiges Symbol, das anzeigt, ob die Kartenmitte mit der aktuellen Geolokalisierung Ihres Geräts synchronisiert ist. Oft als "Wo bin ich?"-Schaltfläche bezeichnet, hilft sie Ihnen, schnell Ihren Standort auf der Karte zu finden. Während der Navigation bleibt die Karte normalerweise mit dem Standort des Geräts synchronisiert, sodass die Schaltfläche ausgeblendet bleibt. Sie wird jedoch sichtbar, wenn die Karte und Ihr Standort aufgrund von Benutzerinteraktionen nicht mehr synchron sind. Durch Tippen auf die Schaltfläche wird die Karte auf Ihren aktuellen Standort zentriert, und ein Doppeltipp schaltet die Ansicht in den 3D-Modus.

- Die Schaltfläche *Mein Standort* hat folgende Zustände:
  - *Voll blaues Symbol*. Der Standort wurde gefunden, ist aber nicht mit der Karte synchronisiert.
  - *Weißes Symbol*. Der Standort wurde gefunden und ist mit der Karte synchronisiert.
  - *Graues Symbol*. Der Standort wurde noch nicht gefunden.
  - *Pfeilsymbol*. Der 3D-Modus ist aktiviert.

- **Langes Tippen** (*Android*) auf die Schaltfläche *Mein Standort* öffnet das [Karten-Kontextmenü](../map/map-context-menu.md), mit dem Sie Ihren Standort teilen können.

<br/>

**Zoom-Schaltflächen**.  
Die *Zoom-Schaltflächen* sind immer neben *Mein Standort* sichtbar und ermöglichen Ihnen, den Zoomfaktor der Karte zu steuern.

- Das Ändern des Zoomfaktors wirkt sich nicht auf die Synchronisierung der Karte mit Ihrem Standort aus.
- **Langes Tippen** auf die *Zoom-Schaltflächen* öffnet den Dialog *Kartenvergrößerung*, mit dem Sie die Detailstufen der Karte anpassen können.
- Beachten Sie, dass während der Navigation der Zoom automatisch durch die Einstellung **Auto-Zoom** gesteuert werden kann:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

### Aussehen von Mein Standort {#my-location-appearance}

Sie können die Symbole der Schaltfläche **Mein Standort** mithilfe der Einstellungen für das Profil-Aussehen anpassen. Lesen Sie hier mehr darüber, wie Sie dies tun können: [hier](../personal/profiles.md#profile-appearance).


## Kartenvergrößerung {#map-magnifier}

Die *Kartenvergrößerung* ist ein Werkzeug, das die Sichtbarkeit der Karte verbessert, ähnlich einer Lupe bei Papierkarten. Sie ermöglicht es Ihnen, die Karte zu vergrößern, um Text und Details klarer zu sehen, oder die Detailstufe anzupassen, während der gleiche Maßstab beibehalten wird. Weitere Informationen finden Sie im Artikel [Vektorkarten](../map/vector-maps.md#map-magnifier).


## Kartenorientierungsmodi {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

Mit den *Kartenorientierungsmodi* können Sie auswählen, wie die Karte auf dem Bildschirm angezeigt wird. OsmAnd bietet Modi wie **Manuell gedreht**, **Bewegungsrichtung**, **Kompassrichtung** und **Norden ist oben**. Durch Aktivieren jedes Modus ändert sich die Ausrichtung der Karte entsprechend der ausgewählten Option. Ausführliche Informationen finden Sie im Artikel [Kartenschaltflächen](../widgets/map-buttons.md#compass).


## Kompass {#compass}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Die Kompass-Schaltfläche zeigt, wie die [Karte ausgerichtet ist](#map-orientation-modes). Der *rote Pfeil* auf den Symbolen oder die Richtung des Pfeils im Modus *Bewegungsrichtung* zeigt nach Norden. [Das Symbol auf der Kompass-Schaltfläche](../widgets/map-buttons.md#compass) zeigt den aktuellen Kartenorientierungsmodus an. Das Kompass-Schaltflächen-Widget bietet drei [Interaktionsmöglichkeiten](../widgets/map-buttons.md#compass-tapping-behavior): *Einmaliges Tippen* dreht die Karte nach Norden, *Doppeltes Tippen* wechselt zwischen allen Kartenorientierungsmodi und *Langes Tippen* öffnet die Liste der Modi.


## Karte nach Peilung drehen {#rotate-map-by-bearing}

Im Modus **Karte nach Peilung drehen** ([Bewegungsrichtung](../widgets/map-buttons.md#compass)) richtet sich die Karte automatisch nach Ihrer Bewegungsrichtung aus, sodass der Bereich vor Ihnen oben auf dem Bildschirm angezeigt wird. Dieser Modus verbessert die Navigation, indem er die Kartenmitte leicht nach unten verschiebt und mehr vom weiteren Routenverlauf anzeigt. Wenn Sie stehen, bleibt die Karte fixiert.

Sie können diese Funktion über *Menü → Einstellungen → Profile → Allgemeine Einstellungen → Aussehen → Kartenorientierung* oder durch doppeltes Tippen auf die [Kompass-Schaltfläche](../widgets/map-buttons.md#compass-tapping-behavior) aktivieren. Weitere Details zur Peilung finden Sie [hier](../widgets/nav-widgets.md#bearing-widget).


## Kartenneigung und Horizont {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Tilt android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Tilt android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Tilt ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Tilt ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

Mit der neuen Karten-[Rendering-Engine](../personal/global-settings.md#map-rendering-engine) können Sie die [Kameraneigung](../plugins/development.md#camera-tilt) von 90 (keine Neigung) auf 10 Grad ändern. Bei einer Kartenneigung von weniger als etwa 20-22 Grad (dieser Parameter hängt vom Zoomfaktor ab) wird die imaginäre Horizontlinie sichtbar. Im Gegensatz zur realen ist der Programmhorizont immer gerade.

Unter dem Horizont können Sie sogenannten *Dunst* oder *Nebel* sehen. Dieser Bereich der Karte ist mit grauer Farbe gefüllt, nur wenige Kartendetails sind zu sehen.
Die Verwendung von Nebel ist notwendig, da die Anzeige entfernter Objekte auf der Karte erhebliche Rechenressourcen erfordert und aufgrund von Karten-[Verzerrungen](../plugins/development.md#comparison-with-a-satellite-imagery) bei kleinen Blickwinkeln nicht immer gerechtfertigt ist. Die sichtbare Entfernung auf der OsmAnd-Karte ist derzeit auf 35 Kacheln begrenzt.

:::info
Die Kartenneigung kann durch langes Tippen mit zwei Fingern auf den Bildschirm und Bewegen dieser nach oben/unten geändert werden. Sie können die Neigung auch ändern, indem Sie auf das Symbol [Mein Standort](#my-location-and-zoom) in der unteren rechten Ecke des Bildschirms tippen (nur 45- und 90-Grad-Positionen sind verfügbar).
Sie können die Kameraneigung nicht ändern, wenn die alte [Karten-Rendering-Engine](../personal/global-settings.md#map-rendering-engine) (Version 1) eingeschaltet ist.
:::


## Touchscreen-Sperre {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Quick action button Touch Screen Lock Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action button Touch Screen Lock iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Verwenden Sie die Funktion **Touchscreen-Sperre**, um versehentliche Berührungen während der Navigation zu vermeiden. Dies ist besonders hilfreich bei Aktivitäten wie Radfahren oder Wandern, bei denen unbeabsichtigte Berührungen Ihre Route stören könnten.

**Entsperren**.
Tippen Sie auf die Schaltfläche auf dem Bildschirm, oder, wenn die Sperre aktiviert ist, über eine externe Schaltfläche (z. B. Lautstärke leiser), drücken Sie die externe Schaltfläche und tippen Sie auf die Schaltfläche auf dem Bildschirm.

**Einrichtung**.

- Navigieren Sie zu *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen*.
- Wählen Sie *+ → Aktion hinzufügen → Benutzeroberfläche → Touchscreen-Sperre*.

Klare Bildschirmmeldungen führen Sie beim Sperren oder Entsperren des Bildschirms.


## Einstellungen {#settings}

### Zusätzliche Kompass-Einstellungen {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Glättet die Drehung der Karte mit einer langsameren Dreh-Animation, obwohl dies eine leichte Verzögerung von nicht mehr als 1 Sekunde mit sich bringt.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Glättet die Drehung der Karte mit einer langsameren Dreh-Animation, obwohl dies eine leichte Verzögerung von nicht mehr als 1 Sekunde mit sich bringt.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Keine Animationen {#no-animations}

<InfoAndroidOnly/>  

Sie können alle Kartenanimationen während der Karteninteraktionen, einschließlich Gesten und Schaltflächen, deaktivieren.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Eigene Position animieren {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Erstellt einen sanften Kartenschwenkeffekt im Vergleich zum Symbol *[Meine Position](../personal/profiles/#profile-appearance)*, wenn Sie sich bewegen. Der Effekt führt zu einer leichten Verzögerung gegenüber der tatsächlichen Position von etwa 1 Sekunde. Es wurde berichtet, dass die Aktivierung dieser Funktion unter bestimmten Umständen zu ausgeprägten Verzögerungsproblemen führt. Deaktivieren Sie sie, wenn solche Probleme auftreten.


## Externe Eingabegeräte {#external-input-devices}

Die Schaltflächen externer Eingabegeräte bieten eine bequeme und effiziente Möglichkeit, mit der Karte und der OsmAnd-Anwendungsoberfläche zu interagieren. Sie befinden sich auf externen Geräten, wie z. B. **Bluetooth- oder anderen Tastaturen**, **spezialisierten Tasten an Fahrzeugnavigationsgeräten** oder [WunderLINQ](https://blackboxembedded.com/)- und [Parrot](https://www.parrot.com/en)-Controllern.

Eine der Hauptfunktionen der Tasten an externen Eingabegeräten ist das Vergrößern und Verkleinern der Karte. Sie ermöglichen es Ihnen auch, auf der Karte zu navigieren und ihre Ausrichtung zu ändern, ohne auf den Bildschirm tippen und gestikulieren zu müssen. Die Tasten an externen Eingabegeräten unterstützen viele andere Funktionen, z. B. das Öffnen des *Hauptmenüs*.

:::note
Die Tastatur ist auch dann funktionsfähig, wenn die Option *Externe Eingabegeräte* ausgeschaltet ist und *Keine* ausgewählt ist.
:::

### Vorkonfiguriertes Eingabegerät {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![External devices](@site/static/img/map/external_menu_android.png) ![External devices](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![External devices](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>  

Um auf die Einstellungen eines externen Eingabegeräts zuzugreifen, müssen Sie diese Funktion aktivieren.

- Gehen Sie zum Haupt-*Menü → Einstellungen →* Wählen Sie das *Profil → Allgemeine Einstellungen → Andere → Externe Eingabegeräte* und schalten Sie auf *Aktiviert*.

- Wählen Sie ein von OsmAnd unterstütztes Gerät aus, indem Sie auf das Element *Typ* in der Liste tippen:
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*nur Android*), oder erstellen Sie [**Ihren eigenen Typ**](#custom-input-device-type) (*nur Android*).

- Für jeden Typ eines externen Eingabegeräts gibt es eine andere **definierte Aktion-Taste-Zuordnung**. Tippen Sie auf die *<Translate android="true" ids="key_assignments"/>*, um eine Liste der Aktionen und Tasten anzuzeigen. Die Tastaturtabelle ist unten dargestellt.

- Weitere Informationen zu Aktionen externer Eingabegeräte finden Sie auf GitHub im Paket [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Taste | Gerät | Aktion |
|:---------|:---------------|:---------------|
|**C**| *Tastatur*   | Bewegen - [Zu Mein Standort](#my-location-and-zoom) |
|**D**| *Tastatur*   | Ändern - [Kartenorientierung](#map-orientation-modes) |
|**N**| *Tastatur*   | Anzeigen / Ausblenden - Navigationsansicht |
|**S**| *Tastatur*   | Anzeigen / Ausblenden - [Suchansicht](../search/index.md) |
|**P**| *Tastatur*   | Ändern - App-Profil zum nächsten |
|**O**| *Tastatur*   | Ändern - App-Profil zum vorherigen |
|**&#8593;**| *Tastatur*   | Bewegen - Karte nach oben  |
|**&#8595;**| *Tastatur*   | Bewegen - Karte nach unten  |
|**&#8592;**| *Tastatur*   | Bewegen - Karte nach links  |
|**&#8594;**| *Tastatur*   | Bewegen - Karte nach rechts  |
|**&#43;** **=**| *Tastatur*  | Karte - [Vergrößern](#my-location-and-zoom) |
|**&#8722;**| *Tastatur*  | Karte - [Verkleinern](#my-location-and-zoom) |
|**Zurück drücken**| *Tastatur*   | Navigieren – Vorheriger Bildschirm  |
|**&#8595;**| *Wunderlinq*  | Karte - [Verkleinern](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq*  | Karte - [Vergrößern](#my-location-and-zoom) |
| **ESC** | *Wunderlinq*  | WunderLINQ Datagrid öffnen |
| **M** <br/> (*älteres Android*) | *Tastatur*  | Anzeigen / Ausblenden - [Seitenmenü](../start-with/main-menu.md#main-menu-side-menu) |
| **Joystick drücken** <br/> (*älteres Android*) | *Tastatur*  | Bewegen - [Zu Mein Standort](#my-location-and-zoom) |
| **Medientaste** <br/> (*nur Android*)| *Tastatur*  | Anzeigen / Ausblenden - [AV-Notizen](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*nur Android*)| *Parrot*  | Karte - [Verkleinern](#my-location-and-zoom) |
| **&#8594;** <br/> (*nur Android*) | *Parrot*  | Karte - [Vergrößern](#my-location-and-zoom) |


### Benutzerdefinierter Eingabegerätetyp {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_mypilot_android.png)  ![External devices](@site/static/img/map/external_mypilot2_android.png)

Wenn Sie Tasten für ein externes Eingabegerät (wie Tastatur, Joystick oder Controller) zuweisen möchten, müssen Sie einen Gerätetyp erstellen: Gehen Sie zur Einstellung [Externe Eingabegeräte](#external-input-devices), wählen Sie **Typ** aus der Liste, tippen Sie auf die&nbsp;  "**＋**"  &nbsp; und geben Sie einen Namen ein. Jeder Typ verfügt über ein Menü mit den folgenden Optionen: ***Umbenennen, Duplizieren*** und ***Entfernen***.

### Aktion und Tastenbelegungen hinzufügen {#add-action--key-asssigments}

![External devices](@site/static/img/map/external_custom_4_andr.png)  ![External devices](@site/static/img/map/external_custom_3_andr.png)

Nachdem Sie einen benutzerdefinierten Eingabetyp erstellt haben, können Sie die erforderlichen Aktionen den Tasten zuweisen. Eine breite Palette von [Aktionstypen](../widgets/quick-action.md#action-types) aus dem Quick Action Widget ist verfügbar.

- Wählen Sie einen Gerätetyp und tippen Sie dann auf das Element **Tastenbelegungen**.
- Tippen Sie auf die Schaltfläche ***Hinzufügen*** (&nbsp;"**＋**"&nbsp;) in der unteren rechten Ecke des Bildschirms.
- Wählen Sie die gewünschte Aktion aus, tippen Sie dann auf das Feld ***Taste hinzufügen*** und tippen Sie auf die Schaltfläche auf Ihrem Gerät, um sie der Aktion zuzuweisen.

:::note

- Wenn die Taste, die Sie zuweisen, bereits für eine andere Aktion verwendet wird, erhalten Sie eine Benachrichtigung mit der Option, die Taste neu zuzuweisen oder die Zuweisung abzubrechen.
- Später können Sie Aktionen und Tastenbelegungen ändern oder weitere für bereits erstellte Aktionen hinzufügen, wählen Sie einfach ein Element in der Liste der Tastenbelegungen aus.

:::

### Tastenbelegung löschen {#delete-key-assignment}

![External devices](@site/static/img/map/external_custom_1_andr.png)

Sie können mehrere unnötige Aktionen mit der Schaltfläche **Bearbeiten** (*stiftförmig*) in der oberen rechten Ecke des Bildschirms auf einmal löschen:

- ***Eine Aktion entfernen*** pro Aktion, mit der Schaltfläche&nbsp;  "**−**"  &nbsp;im Elementfeld.
- ***Alle Tastenbelegungen entfernen*** für den ausgewählten Typ, indem Sie auf die Schaltfläche in der oberen rechten Ecke des Bildschirms neben *Namen bearbeiten* tippen.


## Verwandte Artikel {#related-articles}

- [Karten-Kontextmenü](./map-context-menu.md)
- [Karte konfigurieren](./configure-map-menu.md)
- [Vektorkarten (Kartenstile)](./vector-maps.md)
- [Rasterkarten (Online / Offline)](./raster-maps.md)
- [Punkte auf der Karte](./point-layers-on-map.md)
- [Tracks und Routen](./tracks/index.md)
- [Track-Kontextmenü](./tracks/track-context-menu.md)
- [Öffentlicher Nahverkehr](./public-transport.md)


> *Zuletzt aktualisiert: Dezember 2024*