---
source-hash: 652f7e88fdf4d2bae94537d58c7ea9e1d5aa0e57dfb954e058fd661aae10355c
sidebar_position: 11
title:  OsmAnd Tracker
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


<InfoAndroidOnly />

## Übersicht {#overview}

OsmAnd Tracker ist ein modifizierter Telegram-Client, der zur flexiblen Überwachung und zum Senden von Nachrichten mit GPS-Standorten in Echtzeit entwickelt wurde.

[OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) hilft Ihnen, Ihre Kontakte auf einer Karte in OsmAnd zu sehen. Es hat einen sozialen Aspekt, das heißt, um es zu verwenden, müssen Sie der Plattform, die OsmAnd wählt, Zugriff auf Ihre Kontakte gewähren.

Wir haben uns für [Telegram](https://telegram.org/) als offenste soziale Plattform entschieden, weil es eine [Open API](https://core.telegram.org/api) und ein Open SDK hat und darüber hinaus schließlich eine Open Server-Implementierung (Blockchain) haben wird.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Funktionsweise {#how-it-works}

Wichtig ist, dass es ein hohes Maß an Kompatibilität zwischen den Apps gibt. Sie können Ihren Standort ganz einfach mit Ihren Kontakten teilen, ohne die mobile Telegram-App zu haben (OsmAnd Online GPS Tracker ist ein unabhängiger Telegram-Client), und umgekehrt müssen Ihre Kontakte [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) nicht haben, um Ihren Standort zu sehen.

Wir haben [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) so konzipiert, dass Sie die Telegram-App und die OsmAnd-App weiterhin so nutzen können, wie Sie es gewohnt sind, ohne zusätzliche Einschränkungen.

Die Anwendung sendet Live-Standortnachrichten an ausgewählte Chats für die von Ihnen festgelegte Zeit, zeigt eine Liste Ihrer Kontakte und Gruppen an und überprüft Chats auf Nachrichten mit Ihrem Standort, die dann auf der Karte in OsmAnd angezeigt werden.
Die Anwendung sendet oder zeigt Ihre Textnachrichten nicht an.

Melden Sie sich mit Ihrer bei Telegram registrierten Telefonnummer an, um Folgendes zu ermöglichen:

- Verwalten Sie die Liste der Kontakte und Gruppen, die Ihnen ihren Standort senden.
- Zeigen Sie den Standort von Kontakten und Gruppen in Echtzeit auf einer Karte in OsmAnd an.
- Legen Sie die Zeit für die Standortfreigabe separat für jeden Chat fest.
- Legen Sie fest, wie oft Ihr Standort aktualisiert wird.
- Überwachen Sie die Chronologie Ihrer Bewegungen und Ihrer Kontakte.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Installieren Sie die OsmAnd Online GPS Tracker APK:

- [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [OsmAnd Server](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## Plugin-Einstellungen {#plugin-settings}

Es gibt verschiedene Einstellungen zum Verwalten der Häufigkeit der Standortfreigabe und zum Steuern der Anzeige der Ihnen gesendeten Standorte.

Zum Öffnen des Menüs *Einstellungen*:

*Bildschirm [Mein Standort](#my-location-screen) → Bildschirm nach unten bewegen (Kontaktliste) → ⋮ → Einstellungen*
oder
*Bildschirm [Jetzt live](#live-now-screen) → ⋮ → Einstellungen*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Position {#position}

**Meinen Standort senden** – ermöglicht es Ihnen, das Intervall für das Senden Ihrer Position von einmal pro Sekunde (zur Erhöhung der Genauigkeit) bis einmal in 5 Minuten (zur Reduzierung des Stromverbrauchs) einzustellen.

**Nicht in Bewegung** – ermöglicht es Ihnen, die Zeit (von 1 Minute bis 1 Stunde) einzustellen, nach der der Standort eines Kontakts als veraltet gilt. Wenn ein Standort veraltet wird, wird er grau.

**Standortverlauf** – ermöglicht es Ihnen, die Zeit (von 5 Minuten bis 24 Stunden) einzustellen, nach der der Kontakt mit dem gelöschten Standort aus der Liste und der OsmAnd-Karte ausgeblendet wird.

**Standort senden als** – ermöglicht es Ihnen, eine Kategorie für das Senden von Nachrichten über Ihren Standort in Telegram auszuwählen (3 Arten des Sendens): Text, Karte, Text und Karte.

**Pufferablaufzeit** – ermöglicht es Ihnen, die Zeit zum Speichern von Punkten im Puffer auszuwählen.

**Hintergrundarbeit** – ermöglicht es Ihnen, die Einstellungen zur Akkuoptimierung zu ändern, um die Standortfreigabe zu stabilisieren.

**Standortquelle** – ermöglicht es Ihnen, *Google Play Services* (standardmäßig) oder *Android API* zur Bestimmung des Standorts auszuwählen.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Einheiten & Formate {#units--formats}

Ermöglicht das Hinzufügen von Einstellungen für Einheiten und Formate. Jetzt können Sie Ihre bevorzugten Werte für Telegram-Nachrichten auswählen, wenn Sie Standortdaten teilen.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Aussehen {#appearance}

Ermöglicht das Anzeigen der Anzahl der von anderen Kontakten empfangenen sowie der von Ihnen gesendeten GPS-Punkte.


### Datenschutz {#privacy}

Verwendung von Proxy innerhalb des OsmAnd Trackers. Gehen Sie zu Einstellungen und geben Sie Ihre Proxy-Daten ein: *Einstellungen → Datenschutz → Proxy-Einstellungen*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### GPS-Einstellungen {#gps-settings}

Einstellungen für den Standortpunkt. Wenn Sie zum Beispiel einige Zeit an einem Ort verweilen, ohne sich zu bewegen, werden Ihre Standortpunktedaten nicht gesendet und Ihre GPX-Spur zeigt genauere und präzisere Daten an.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Standort teilen als {#share-location-as}

Wenn Sie mehrere Geräte mit einem Telegram-Konto verbinden möchten, müssen Sie auf "Gerät hinzufügen" klicken und das Gerät benennen.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### OsmAnd Connect {#osmand-connect}

Diese Einstellung ermöglicht es Ihnen, die Version von OsmAnd auszuwählen, in der Ihre Kontakte mit ihrem Standort auf der Karte angezeigt werden.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Konto {#account}

Verwenden Sie diese Einstellung, um zu überprüfen, welches Telegram-Konto Sie derzeit verwenden. Auch in diesem Menü können Sie die OsmAnd Telegram-Anwendung verlassen, indem Sie einfach auf die Schaltfläche *Abmelden* tippen.


### Logcat-Puffer {#logcat-buffer}

Hier können Sie detaillierte Protokolle der App überprüfen und teilen.


## Bildschirm Mein Standort {#my-location-screen}

Auf diesem Bildschirm sehen Sie Ihre Telegram-Kontakte. Sie können einen oder mehrere auswählen, Freigabeoptionen festlegen und Ihren Standort freigeben.

Nach dem ersten Start sehen Sie eine Liste der vorgeschlagenen Kontakte. Dies sind die fünf letzten Kontakte, mit denen Sie Ihren Standort geteilt haben. Sie können nur einmal klicken, um die Standortfreigabe mit diesen Kontakten fortzusetzen.

Freigabezeit ist die letzte Freigabezeit, die Sie für den Kontakt ausgewählt haben.

Wenn Sie mit der Freigabe beginnen, sehen Sie auf dem Bildschirm *Mein Standort* eine Liste der vorgeschlagenen Kontakte und eine Schaltfläche *Zurück zu OsmAnd*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Bildschirm Jetzt live {#live-now-screen}

In diesem Menü sehen Sie alle Kontakte, die einen Standort mit Ihnen teilen. Tippen Sie auf den Kontakt und sehen Sie ihn auf der **OsmAnd-Karte**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Aktive Markierung auf der OsmAnd-Karte {#active-marker-on-the-osmand-map}

Ermöglicht es Ihnen, die Entfernung, Geschwindigkeit und Winkelbewegung Ihrer Kontakte auf der OsmAnd-Karte und im Telegram-Text zu verfolgen. Sie können verstehen, wohin und wie sich Ihr Kontakt bewegt.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Bildschirm Zeitachse {#timeline-screen}

Dies ist die dritte Registerkarte in der Anwendung. Dies ist die dritte Registerkarte in der App. Hier können Sie einen Tag auswählen, um den Verlauf der mit Ihnen geteilten Standorte anzuzeigen. Durch Auswahl eines Tages werden die Kontakte angezeigt, die an diesem Tag ihren Standort gezeigt haben.

Überwachung ermöglicht es Ihnen, Informationen im Hintergrund zu sammeln, wenn Ihre Kontakte sie teilen. Dazu müssen Sie sie aktivieren.

Um alle Informationen über den Standort eines Kontakts anzuzeigen, tippen Sie auf dessen Symbol oder öffnen Sie eine GPX-Spur in OsmAnd und erkunden Sie die Spur detaillierter ([lesen Sie hier mehr](./trip-recording.md)). Sie können die GPX-Spur auch für einen ausgewählten Zeitraum teilen: indem Sie sie an eine E-Mail oder einen beliebigen Instant Messenger senden.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Sie können die Online-Bewegung Ihrer Kontakte auf der OsmAnd-Karte mithilfe der Online-GPS-Spur sehen. Dazu müssen Sie bei dem Kontakt in der *Zeitachse* *Live* aktivieren. Wenn es zu diesem Zeitpunkt viele gemeinsame Kontakte gibt, wählt die OsmAnd-App zufällig die Farbe der Spuren aus.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Wenn Sie auf "In OsmAnd anzeigen" oder auf die Minikarte tippen, können Sie spezielle Einstellungen für die GPX-Verfolgung Ihres Kontakts in der OsmAnd-App auswählen und dessen Bewegung in Echtzeit auf der OsmAnd-Karte sehen.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Wenn am ausgewählten Datum keine Daten gesammelt wurden, wird eine spezielle Benachrichtigung auf dem Bildschirm angezeigt. Sie können zum nächsten Datum wechseln, indem Sie auf den Pfeil vorwärts oder rückwärts tippen.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Tracker-Widget {#tracker-widget}

Um das [Widget](../widgets/info-widgets.md#tracker-widget-android) anzuzeigen, müssen Sie zuerst das OsmAnd Tracker-Plugin aktivieren. Danach erscheint in der oberen rechten Ecke des OsmAnd-Bildschirms ein Widget mit dem Wort *Start*.

Um es zu deaktivieren, können Sie zu *Hauptmenü → Bildschirm konfigurieren* gehen.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png)   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

Das Widget hat mehrere Ansichten.

1. Die erste ist *Start*.
   Wenn Sie auf *Start* tippen, gelangen Sie zu [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), wo Sie beliebige Kontakte auswählen oder auf vorgeschlagene Kontakte tippen können.
2. Zweitens, wenn Sie Ihren Standort freigeben, ändert das Widget sein Aussehen.

   - Das grüne *OK*-Emoji-Symbol bedeutet, dass Ihr Standort jetzt freigegeben wird. Alles ist normal, die Freigabe läuft ohne Fehler.
   - Ein orangefarbenes *OK*-Emoji-Symbol bedeutet, dass Ihr Standort nicht gesendet werden kann. Es gibt ein Problem mit der Internet- oder GPS-Verbindung.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Wenn Sie längere Zeit keine Internetverbindung haben, werden Ihre Standortpunkte im OsmAnd Tracker-Puffer gespeichert. Das Widget in OsmAnd ändert sein Aussehen in ein graues Emoji-Symbol. Es zeigt die Pufferfüllzeit an, wie lange der Puffer bereits Ihre Standortpunkte speichert.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Sobald die Internetverbindung wiederhergestellt ist, beginnt das Hochladen von Standortpunkten aus dem Puffer. Das OsmAnd-Widget ändert sein Aussehen und die Anzahl der Minuten beginnt zu sinken. Wenn alle Standortpunkte aus dem Puffer auf Telegram hochgeladen wurden, erscheint das Emoji-*OK*-Symbol auf dem Widget.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Wenn Sie das Widget als *OK*-Emoji-Symbol sehen, bedeutet dies, dass alles in Ordnung ist. Der Austauschprozess läuft ohne Probleme.


## OsmAnd Assistent {#osmand-assistant}

Die OsmAnd-App verfügt über einen eigenen Telegram-Bot namens "OsmAnd Assistant", der Ihnen hilft, OsmAnd Telegram mit Trackern oder APIs von Drittanbietern zu integrieren. Sie können nicht nur Ihren Standort teilen, sondern auch den Standort Ihres Fahrrads oder einer Gruppe von Personen, die über die API verfügbar sind. OsmAnd Telegram bietet Ihnen eine schöne Darstellung Ihrer Standorte auf der Karte in OsmAnd selbst.

Bitte teilen Sie uns Ihre Meinung zu dieser neuen App auf [Twitter](https://twitter.com/osmandapp) und anderen sozialen Kanälen mit.

Um die GPS-Positionen von Kontakten auf der Karte anzuzeigen, benötigen Sie die neueste Version von [OsmAnd oder OsmAnd+](./../purchases/android.md). Die mindestens unterstützte Version von OsmAnd oder OsmAnd+ ist 3.0.4.

> *Zuletzt aktualisiert: Juli 2024*