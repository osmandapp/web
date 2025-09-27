---
source-hash: 912ad78d69a9d46cc8391bc3f8411dc7ce9423498430a6854908948053c3f739
sidebar_position: 3
title:  Hauptmenü
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## Übersicht {#overview}

Das **Hauptmenü** ist eine primäre Liste von Optionen, die in der Anwendung zur Verfügung stehen. Es bietet schnellen Zugriff auf die Profilkonfiguration, globale Einstellungen, Suche, persönliche Daten, Navigation und andere Funktionen.

Das [Hauptmenü](../widgets/map-buttons.md#main-menu)-Symbol '&#8801;' befindet sich in der linken unteren Ecke des Kartenbildschirms. Im Navigationsmodus ist diese Schaltfläche standardmäßig nicht sichtbar. Sie erscheint nach einem kurzen Tippen auf die Karte.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Hauptmenü Android](@site/static/img/menu/main_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Hauptmenü iOS](@site/static/img/menu/main_menu_ios.png)

</TabItem>

</Tabs>


## Hauptmenü (Seitenmenü) {#main-menu-side-menu}

### Funktionen {#features}

- [Kartenmarkierungen](../personal/markers.md) ist ein Werkzeug, mit dem Sie einen Ort auf der Karte markieren können.
- [Meine Orte](../personal/myplaces.md) ist ein Menü, das standardmäßig Favoriten und Tracks enthält und zusätzlich [A/V-Notizen](../plugins/audio-video-notes.md) und [OSM-Bearbeitungen](../plugins/osm-editing.md) enthalten kann (wenn solche Plugins aktiviert sind).
- [Suche](../search/index.md) (Android) ist ein Werkzeug, mit dem Sie Orte oder Objekte finden können, die auf der Karte vorhanden sind.
- Die Schaltfläche [Route](../widgets/map-buttons.md#directions) ermöglicht es, eine Route zu erstellen und die Navigation zu starten.
- [Karte konfigurieren](../map/configure-map-menu.md) ist ein Menü, mit dem Sie die Kartenansicht konfigurieren können.
- [Karten herunterladen](../start-with/download-maps.md) ist ein Menü, das alle Dateien enthält, die heruntergeladen werden können.
- [Reiseführer (Beta)](../plan-route/travel-guides.md) (*Android*) ist ein Werkzeug, das die Verwendung des Wikivoyage-Reiseführers für Ihre Reise ermöglicht.
- [Route planen](../plan-route/create-route.md) ist ein Werkzeug, mit dem Sie Entfernungen auf der Karte messen, GPX-Tracks erstellen oder neue Segmente zu bestehenden hinzufügen können.
- [* Reiseaufzeichnung](../plugins/trip-recording.md) (*Android*) ist ein Werkzeug, mit dem Sie alle Bewegungen mithilfe des GPS des Telefons in einem Track aufzeichnen können.

### Einstellungen {#settings}

- [Bildschirm konfigurieren](../widgets/configure-screen.md) ist ein Menü, mit dem die Anzeige von Widgets auf der Karte konfiguriert werden kann.
- [Plugins](../plugins/index.md#configure-plugin) ist eine Liste zusätzlicher Funktionen und erweiterter Einstellungen.
- [Einstellungen](../personal/global-settings.md) ist ein Menü, mit dem die Hauptparameter der App konfiguriert werden können.
- [Hilfe](./first-steps.md#offline-help) bietet schnellen Zugriff auf Ihre Anleitung, Informationen über die App-Version und ermöglicht eine schnelle Kontaktaufnahme mit dem Entwicklungsteam.

### Aktives Profil (Android) {#active-profile-android}

Das *Hauptmenü* bietet schnellen Zugriff zum Wechseln und [Anpassen des Profils](../personal/profiles.md). Der Hauptzweck von Profilen ist es, ein unterschiedliches Erscheinungsbild der Anwendung für die Navigation zu haben. Sie können es jedoch auch verwenden, um den Bildschirm und die Widgets anzupassen und die Profile für verschiedene Ansichtszwecke zu wechseln. Alle [Einstellungen](../personal/profiles.md) werden für jedes Profil separat konfiguriert.

![Profilmenü](@site/static/img/menu/profile_menu.png)

In diesem Menü können Sie das aktive Profil **wechseln**, das aktive Profil **konfigurieren** (Einstellungen ändern) oder alle Anwendungsprofile **verwalten**.


### Anpassen (Erweiterte Nutzung von Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Aktivieren*.  

![Menüpunkte des Seitenmenüs](@site/static/img/settings/drawer_menu_correct.png)  

- In diesem Menü können Sie die Reihenfolge ändern, Elemente aus dem [Seitenmenü](../personal/profiles.md#drawer) ausblenden oder anzeigen, eine Liste von Elementen aus einem anderen Profil kopieren und die Standardeinstellungen zurücksetzen.  

- Die *Minus*-Schaltfläche löscht ein Element aus dem *Hauptmenü* im Seitenmenü und verschiebt es in den Abschnitt *Versteckt*. Die *Verschieben*-Schaltfläche ändert die Position des ausgewählten Elements in der Liste.  

- Elemente, die in den Abschnitt *Versteckt* verschoben wurden, werden nicht im Seitenmenü angezeigt, aber alle Optionen, Einstellungen oder Plugins aus dieser Liste funktionieren weiterhin. Sie können Elemente wiederherstellen, indem Sie auf die grüne Schaltfläche links neben ihrem Namen tippen.  
    ![Versteckte Menüpunkte des Seitenmenüs](@site/static/img/settings/drawer_menu_hidden_items.png)