---
source-hash: 263596e04f0705ae1c8c57f5afa60aa2cbe3498370962ed69729ec73d60d14f6
sidebar_position: 3
title:  Koordinateneingabe
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



<InfoAndroidOnly />

## Übersicht {#overview}

*Koordinateneingabe* ist ein einfaches und benutzerfreundliches Werkzeug, um Wegpunkte durch Angabe ihrer geografischen Lage zu erstellen. Diese Funktion kann nützlich sein, um zu bestimmten Orten zu navigieren, die Sie nur durch ihre Koordinaten kennen: hinzugefügte Punkte können als [GPX-Track gespeichert](#save-as-track) und später für die [GPX-Navigation](../navigation/setup/gpx-navigation.md) oder [Navigation nach Markierungen](../navigation/setup/markers-navigation.md#add-gpx) verwendet werden.

![Koordinateneingabe Übersicht](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Anwendung {#how-to-use}

Sie können Wegpunkte aus dem Menü *[Kartenmarkierungen](../personal/markers.md#actions)* oder aus [Meine Orte](../personal/myplaces.md) erstellen (siehe Screenshots). Bitte folgen Sie diesen Pfaden, um die Option zur Koordinateneingabe zu erreichen:
  - *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Erd-Schaltfläche am unteren Bildschirmrand*
  - *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Koordinateneingabe finden](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Koordinateneingabe finden](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Nachdem Sie den Bildschirm zur Koordinateneingabe geöffnet haben:

- &nbsp;Stellen Sie sicher, dass die richtigen [Maßeinheiten](#coordinates-format) verwendet werden. Wenn nicht, ändern Sie das Koordinatenformat im Menü [Optionen](#options).
- &nbsp;Geben Sie die Koordinaten des Punktes mithilfe der [Vorlage](#add-a-point) ein. Nachdem Sie auf die Schaltfläche *[Hinzufügen](#add-a-point)* geklickt haben, wird Ihr Punkt zur *[Punkteliste](#points-list)* hinzugefügt. Bei Bedarf können Sie weitere Punkte eingeben.
- &nbsp;Speichern Sie Ihre Punkte als *[Track](../personal/tracks/manage-tracks.md)* über das *[Optionsmenü](#options)* oder die &#8592; *(Zurück)*-Schaltfläche.

:::note
Die Ergebnisse der Punkterstellung nach Koordinaten - ein *[GPX-Track](../personal/tracks/manage-tracks.md)* mit Wegpunkten - finden Sie im Menü [Meine Orte](../personal/myplaces.md) (Ordner *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Optionen {#options}

Über das Optionsmenü können Sie hinzugefügte Punkte [speichern](#save-as-track) als Track, erweiterte Eingabeoptionen aktivieren (Systemtastatur und zweistellige Längengrade) oder das Koordinatenformat ändern.

![Koordinateneingabe Optionsmenü Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - öffnet ein Dialogfeld, mit dem Sie den erstellten Punkt (oder die Punkte) als GPX-Track speichern können. Sie können den Namen des Tracks ändern oder den Standardnamen beibehalten.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - ermöglicht die Verwendung der Android-Systemtastatur zur Eingabe von Koordinaten.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - ermöglicht die Eingabe von Längengraden mit nur zwei Ziffern. Dies kann nützlich sein für Längengrade von 0° bis 99° (zum Beispiel in Europa).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - ermöglicht die Änderung des Koordinatenformats für die Eingabe.

### Koordinatenformat {#coordinates-format}

Bei der Eingabe von Koordinaten ist es wichtig sicherzustellen, dass die entsprechenden Maßeinheiten verwendet werden. Wir unterstützen Dezimalgrad (DD), Grad und Minuten oder Grad, Minuten und Sekunden (DMS).

|Koordinatenformat| Beispiel |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Punkt hinzufügen {#add-a-point}

Nachdem Sie die korrekten Einheiten ausgewählt haben, können Sie die Koordinaten zukünftiger Wegpunkte eingeben.
Der Bildschirm zur Koordinateneingabe besteht aus den folgenden Elementen:

![Koordinateneingabe Menü Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Öffnet das *[Optionen](#options)*-Menü (oben beschrieben).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Wird zur Eingabe von Daten im ausgewählten Format verwendet (D - Grad, M - Minuten, S - Sekunden). Sie können das Koordinatenformat im *[<Translate android="true" ids="shared_string_options"/> Menü](#options)* ändern.
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> und <Translate android="true" ids="navigate_point_longitude"/>* Halbkugel-Schaltflächen. Ermöglichen das Wechseln der Himmelsrichtungen: *Süd - Nord* und *West - Ost*.
- &nbsp;*Punktname*-Feld. Sie können den Standardnamen belassen oder einen eigenen Namen vergeben.
- &nbsp;*X*-Schaltfläche. Löscht das Eingabefeld der entsprechenden Zeile.

### Kurztastatur {#short-keyboard}

Zur Eingabe von Daten können Sie die Kurztastatur (Standard) oder die Systemtastatur (Android) verwenden. Um die Eingabemethode zu ändern, gehen Sie zum Menü *[Optionen](#options)*. Nach Eingabe von Längen- und Breitengrad können Sie den Punkt über die Schaltfläche *+Hinzufügen* zur *[Liste](#points-list)* hinzufügen.

![Koordinateneingabe Punkt hinzufügen Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- Die Schaltfläche *<Translate android="true" ids="shared_string_add"/>* ermöglicht das Speichern eines Punktes in der *[Punkteliste](#points-list)*.
- Die Schaltfläche *<Translate android="true" ids="shared_string_clear"/>* setzt alle eingegebenen Daten zurück.
- &#9032; ermöglicht das Springen zum nächsten Wert.
- Mit den *Tastaturtasten* können Sie Daten eingeben, löschen, zum nächsten Koordinatenwert springen und die Tastatur ausblenden.

### Punkteliste {#points-list}

Zeigt bereits erstellte Punkte an: Name, Entfernung und Richtung zu diesem Punkt.

![Koordinateneingabe Punkt speichern Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Koordinateneingabe Punkt speichern Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

Die Schaltfläche **⁝** öffnet ein Aktionsmenü zum Bearbeiten oder Löschen des ausgewählten Punktes.
Wenn Sie auf einen Punkt tippen, wird es möglich, seine Koordinaten zu ändern. Tippen Sie auf die Schaltfläche *Anwenden*, um die Änderungen zu speichern.

## Als Track speichern {#save-as-track}

Um Ihre Punkte als Track zu speichern, tippen Sie auf die Schaltfläche *Zurück* ( &#8592; ) oder verwenden Sie das Menü *[Optionen](#options)*.

![Koordinateneingabe Punkt speichern Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Koordinateneingabe Punkt speichern Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

Im Popup-Menü können Sie einen eigenen Tracknamen eingeben oder ihn standardmäßig speichern. Tippen Sie auf <Translate android="true" ids="shared_string_save"/>, um die hinzugefügten Punkte als neuen Track zu speichern.
Sie finden Ihren Track im Menü [Meine Orte](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).