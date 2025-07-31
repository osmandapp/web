---
source-hash: e35d8bb8c463024a373522c4e8114cf2ea9c85d3dca5ea142e9e2507d2330c58
sidebar_position: 3
title: Hauptmenü
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';




## Überblick {#overview}

Das **Hauptmenü** ist eine primäre Liste von Optionen, die in der Anwendung verfügbar sind. Es bietet schnellen Zugriff auf die Profilkonfiguration, globale Einstellungen, Suche, persönliche Daten, Navigation und andere Funktionen.

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

- [Kartenmarkierungen](../personal/markers.md) ist ein Werkzeug, das es ermöglicht, Orte auf der Karte zu markieren.
- [Meine Orte](../personal/myplaces.md) ist ein Menü, das standardmäßig Favoriten und Tracks enthält und zusätzlich [A/V-Notizen](../plugins/audio-video-notes.md) und [OSM-Bearbeitungen](../plugins/osm-editing.md) (wenn solche Plugins aktiviert sind) enthalten kann.
- [Suche](../search/index.md) (Android) ist ein Werkzeug, das es Ihnen ermöglicht, den Ort oder das Objekt zu finden, das auf der Karte existiert.
- Die Schaltfläche [Wegbeschreibung](../widgets/map-buttons.md#directions) ermöglicht das Erstellen einer Route und das Starten der Navigation.
- [Karte konfigurieren](../map/configure-map-menu.md) ist ein Menü, das die Konfiguration der Kartenansicht ermöglicht.
- [Karten herunterladen](../start-with/download-maps.md) ist ein Menü, das alle herunterladbaren Dateien enthält.
- [Reiseführer (Beta)](../plan-route/travel-guides.md) (*Android*) ist ein Werkzeug, das die Verwendung des Wikivoyage-Führers für Ihre Reise ermöglicht.
- [Route planen](../plan-route/create-route.md) ist ein Werkzeug, das es Ihnen ermöglicht, Entfernungen auf der Karte zu messen, GPX-Tracks zu erstellen oder neue Segmente zu bestehenden hinzuzufügen.
- [* Trip-Aufzeichnung](../plugins/trip-recording.md) (*Android*) ist ein Werkzeug, das es ermöglicht, alle Bewegungen mit dem GPS des Telefons in einem Track aufzuzeichnen.

### Einstellungen {#settings}

- [Bildschirm konfigurieren](../widgets/configure-screen.md) ist ein Menü, das die Anzeige von Widgets auf der Karte konfiguriert.
- [Plugins](../plugins/index.md#configure-plugin) ist eine Liste zusätzlicher Funktionen und erweiterter Einstellungen.
- [Einstellungen](../personal/global-settings.md) ist ein Menü, das die Konfiguration der Hauptparameter der App ermöglicht.
- [Hilfe](./first-steps.md#offline-help) bietet schnellen Zugriff auf Ihren Leitfaden, Informationen zur App-Version und ermöglicht eine schnelle Kontaktaufnahme mit dem Entwicklungsteam.

### Aktives Profil (Android) {#active-profile-android}

Das *Hauptmenü* bietet schnellen Zugriff zum Wechseln und [Anpassen von Profilen](../personal/profiles.md). Der Hauptzweck von Profilen ist es, ein unterschiedliches Erscheinungsbild der Anwendung für die Navigation zu haben. Sie könnten es jedoch auch verwenden, um den Bildschirm und die Widgets anzupassen und Profile für verschiedene Ansichtszwecke zu wechseln. Alle [Einstellungen](../personal/profiles.md) werden für jedes Profil separat konfiguriert.

![profile_menu](@site/static/img/menu/profile_menu.png)

In diesem Menü können Sie das aktive Profil **wechseln**, das aktive Profil **konfigurieren** (Einstellungen ändern) oder alle Anwendungsprofile **verwalten**.


### Anpassen (Erweiterte Nutzung von Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Aktivieren*.  

![Drawer menu items ](@site/static/img/settings/drawer_menu_correct.png)  

- Dieses Menü ermöglicht es Ihnen, die Reihenfolge zu ändern, Elemente aus dem [Drawer](../personal/profiles.md#drawer) auszublenden oder anzuzeigen, eine Liste von Elementen aus einem anderen Profil zu kopieren und die Standardeinstellungen zurückzusetzen.  

- Die Schaltfläche *Minus* löscht ein Element aus dem *Hauptmenü* im Drawer und verschiebt es in den Abschnitt *Ausgeblendet*. Die Schaltfläche *Verschieben* ändert die Position des ausgewählten Elements in der Liste.  

- Elemente, die in den Abschnitt *Ausgeblendet* verschoben wurden, werden nicht im Drawer-Menü angezeigt, aber alle Optionen, Einstellungen oder Plugins aus dieser Liste funktionieren weiterhin. Sie können Elemente wiederherstellen, indem Sie auf die grüne Schaltfläche links neben ihren Namen tippen.  
    ![Drawer menu hidden items ](@site/static/img/settings/drawer_menu_hidden_items.png)

> *Zuletzt aktualisiert: Juli 2022*