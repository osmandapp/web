---
source-hash: f1a828f975c96bbfda684d9dc28a964129f8890ae914445426256bb589a6171f
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
- [Suche](../search/index.md) (Android) ist ein Werkzeug, mit dem Sie den Ort oder das Objekt finden können, das auf der Karte vorhanden ist.
- Die Schaltfläche [Richtungen](../widgets/map-buttons.md#navigation) ermöglicht es, eine Route zu erstellen und die Navigation zu starten.
- [Karte konfigurieren](../map/configure-map-menu.md) ist ein Menü, mit dem Sie die Kartenansicht konfigurieren können.
- [Karten herunterladen](../start-with/download-maps.md) ist ein Menü, das alle Dateien enthält, die heruntergeladen werden können.
- [Reiseführer (Beta)](../plan-route/travel-guides.md) (*Android*) ist ein Werkzeug, das die Verwendung des Wikivoyage-Reiseführers für Ihre Reise ermöglicht.
- [Route planen](../plan-route/create-route.md) ist ein Werkzeug, mit dem Sie Entfernungen auf der Karte messen, GPX-Tracks erstellen oder neue Segmente zu bestehenden hinzufügen können.
- [* Reiseaufzeichnung](../plugins/trip-recording.md) (*Android*) ist ein Werkzeug, mit dem Sie alle Bewegungen in einen Track aufzeichnen können, indem Sie das GPS des Telefons verwenden.

### Einstellungen {#settings}

- [Bildschirm konfigurieren](../widgets/configure-screen.md) ist ein Menü, mit dem die Anzeige von Widgets auf der Karte konfiguriert werden kann.
- [Plugins](../plugins/index.md#configure-plugin) ist eine Liste zusätzlicher Funktionen und erweiterter Einstellungen.
- [Einstellungen](../personal/global-settings.md) ist ein Menü, mit dem die Hauptparameter der App konfiguriert werden können.
- [Hilfe](./first-steps.md#offline-help) bietet schnellen Zugriff auf Ihre Anleitung, Informationen über die App-Version und ermöglicht eine schnelle Kontaktaufnahme mit dem Entwicklungsteam.

### Aktives Profil (Android) {#active-profile-android}

Das *Hauptmenü* bietet schnellen Zugriff zum Wechseln und [Anpassen des Profils](../personal/profiles.md). Der Hauptzweck von Profilen ist es, ein unterschiedliches Erscheinungsbild und Verhalten der Anwendung für die Navigation zu haben. Sie können es jedoch auch verwenden, um den Bildschirm und die Widgets anzupassen und die Profile für verschiedene Ansichtszwecke zu wechseln. Alle [Einstellungen](../personal/profiles.md) werden für jedes Profil separat konfiguriert.

![Profilmenü](@site/static/img/menu/profile_menu.png)

In diesem Menü können Sie das aktive Profil **wechseln**, das aktive Profil **konfigurieren** (Einstellungen ändern) oder alle Anwendungsprofile **verwalten**.


### Anpassen (Erweiterte Nutzung von Android) {#customize-advanced-use-of-android}

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,shared_string_drawer"/> →  &#65049; → Aktivieren*.  

![Elemente des Seitenmenüs](@site/static/img/settings/drawer_menu_correct.png)  

- Dieses Menü ermöglicht es Ihnen, die Reihenfolge zu ändern, Elemente aus dem [Seitenmenü](../personal/profiles.md#drawer) ausblenden oder anzeigen, eine Liste von Elementen aus einem anderen Profil kopieren und die Standardeinstellungen zurücksetzen.  

- Die *Minus*-Schaltfläche löscht ein Element aus dem *Hauptmenü* im Seitenmenü und verschiebt es in den Abschnitt *Versteckt*. Die *Verschieben*-Schaltfläche ändert die Position des ausgewählten Elements in der Liste.  

- Elemente, die in den Abschnitt *Versteckt* verschoben wurden, werden nicht im Seitenmenü angezeigt, aber alle Optionen, Einstellungen oder Plugins aus dieser Liste funktionieren weiterhin. Sie können Elemente wiederherstellen, indem Sie auf die grüne Schaltfläche links neben ihrem Namen tippen.  
    ![Versteckte Elemente des Seitenmenüs](@site/static/img/settings/drawer_menu_hidden_items.png)