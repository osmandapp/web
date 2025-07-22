---
source-hash: 9157ad0f0a716d1c05272f2fefedef4131754bbfda33b5fd36124e58bb0e2ce1
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




## Übersicht {#overview}

Das **Hauptmenü** ist eine primäre Liste von Optionen, die in der Anwendung verwendet werden können. Es bietet schnellen Zugriff auf die Profilkonfiguration, globale Einstellungen, Suche, persönliche Daten, Navigation und andere Funktionen.

Das Symbol für das [Hauptmenü](../widgets/map-buttons.md#main-menu) '&#8801;' befindet sich in der linken unteren Ecke des Kartenbildschirms. Im Navigationsmodus ist diese Schaltfläche standardmäßig nicht sichtbar. Sie erscheint nach einem kurzen Tippen auf die Karte.

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
- [Meine Orte](../personal/myplaces.md) ist ein Menü, das standardmäßig Favoriten und Tracks enthält und zusätzlich [A/V-Notizen](../plugins/audio-video-notes.md) und [OSM-Bearbeitungen](../plugins/osm-editing.md) enthalten kann (wenn diese Plugins aktiviert sind).
- [Suche](../search/index.md) (Android) ist ein Werkzeug, mit dem Sie Orte oder Objekte finden können, die auf der Karte existieren.
- Die Schaltfläche [Route](../widgets/map-buttons.md#directions) ermöglicht das Erstellen einer Route und das Starten der Navigation.
- [Karte konfigurieren](../map/configure-map-menu.md) ist ein Menü, das die Konfiguration der Kartenansicht ermöglicht.
- [Karten herunterladen](../start-with/download-maps.md) ist ein Menü, das alle Dateien enthält, die heruntergeladen werden können.
- [Reiseführer (Beta)](../plan-route/travel-guides.md) (*Android*) ist ein Werkzeug, das die Verwendung des Wikivoyage-Führers für Ihre Reise ermöglicht.
- [Route planen](../plan-route/create-route.md) ist ein Werkzeug, mit dem Sie Entfernungen auf der Karte messen, GPX-Tracks erstellen oder neue Segmente zu bestehenden hinzufügen können.
- [* Fahrtaufzeichnung](../plugins/trip-recording.md) (*Android*) ist ein Werkzeug, das die Aufzeichnung aller Bewegungen in einem Track mithilfe des GPS des Telefons ermöglicht.

### Einstellungen {#settings}

- [Bildschirm konfigurieren](../widgets/configure-screen.md) ist ein Menü, das die Konfiguration der Anzeige von Widgets auf der Karte ermöglicht.
- [Plugins](../plugins/index.md#configure-plugin) ist eine Liste zusätzlicher Funktionen und erweiterter Einstellungen.
- [Einstellungen](../personal/global-settings.md) ist ein Menü, das die Konfiguration der wichtigsten App-Parameter ermöglicht.
- [Hilfe](./first-steps.md#offline-help) bietet schnellen Zugriff auf Ihren Leitfaden, Informationen zur App-Version und ermöglicht die schnelle Kontaktaufnahme mit dem Entwicklungsteam.

### Aktives Profil (Android) {#active-profile-android}

Das *Hauptmenü* bietet schnellen Zugriff zum Wechseln und [Anpassen des Profils](../personal/profiles.md). Der Hauptzweck von Profilen ist es, ein anderes Erscheinungsbild für die Navigation zu haben. Sie können es jedoch auch verwenden, um Bildschirm und Widgets anzupassen und Profile für verschiedene Ansichtszwecke zu wechseln. Alle [Einstellungen](../personal/profiles.md) werden für jedes Profil separat konfiguriert.

![Profilmenü](@site/static/img/menu/profile_menu.png)

In diesem Menü können Sie das aktive Profil **wechseln**, das aktive Profil **konfigurieren** (Einstellungen ändern) oder alle Anwendungsprofile **verwalten**.


### Anpassen (Erweiterte Nutzung von Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> → &#65049; → Aktivieren*.

![Menüelemente der Schublade](@site/static/img/settings/drawer_menu_correct.png)

- Dieses Menü ermöglicht es Ihnen, die Reihenfolge zu ändern, Elemente aus der [Schublade](../personal/profiles.md#drawer) auszublenden oder anzuzeigen, eine Liste von Elementen aus einem anderen Profil zu kopieren und die Standardeinstellungen zurückzusetzen.

- Die Schaltfläche *Minus* löscht ein Element aus dem *Hauptmenü* in der Schublade und verschiebt es in den Bereich *Ausgeblendet*. Die Schaltfläche *Verschieben* ändert die Position des ausgewählten Elements in der Liste.

- Elemente, die in den Bereich *Ausgeblendet* verschoben wurden, werden nicht im Schubladenmenü angezeigt, aber alle Optionen, Einstellungen oder Plugins aus dieser Liste funktionieren weiterhin. Sie können Elemente wiederherstellen, indem Sie auf die grüne Schaltfläche links neben ihren Namen tippen.
    ![Ausgeblendete Elemente des Schubladenmenüs](@site/static/img/settings/drawer_menu_hidden_items.png)

> *Zuletzt aktualisiert: Juli 2022*