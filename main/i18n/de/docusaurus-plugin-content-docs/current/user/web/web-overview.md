---
source-hash: a52737232a71758590dfdb7cfbb68622999fbec373babd2b56b429093731d394
sidebar_position: 1
sidebar_label: Einführung
title: Einführung in den Web-Planer
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

<!--
<InfoIncompleteArticle/>
-->

## Überblick {#overview}

Der **Web-Planer**, auch bekannt als das [**OsmAnd Kartenportal**](https://osmand.net/map), ist eine browserbasierte Erweiterung der OsmAnd-Mobil-App. Es ermöglicht Benutzern, globale Karten anzuzeigen, Routen zu planen, die Navigation zu simulieren, persönliche Daten zu verwalten und über die Cloud auf synchronisierte Inhalte von ihren Geräten zuzugreifen.

Entwickelt als plattformübergreifender Begleiter zu OsmAnd für Android und iOS, hilft das Web-Portal Benutzern, Reisen zu planen, Tracks zu analysieren, Gelände anzuzeigen und Dateien mit jedem Desktop- oder Tablet-Browser zu verwalten – ohne eine App installieren zu müssen.

OsmAnd Web ist eng mit dem **OsmAnd Cloud**-Dienst integriert, der die Synchronisierung von Favoriten, Tracks und Backups über Geräte und Plattformen hinweg ermöglicht. Benutzer mit **OsmAnd Start** (kostenlos) oder **OsmAnd Pro** (kostenpflichtig) Konten können dieses Ökosystem voll ausnutzen, indem sie Daten zwischen Mobilgeräten und dem Web synchronisieren. Eine detaillierte Vergleich der *Start*- und *Pro*-Funktionen finden Sie im Abschnitt [Abonnement-Zugang](#subscription-access) unten.

> **Hinweis:** Auch ohne Anmeldung oder Verifizierung Ihres Kontos können Sie mehrere Kernfunktionen des Web-Kartenportals nutzen, einschließlich: [Navigationsroute](./planner.md), [Routenplaner](./planner.md), [Wetter-Overlays](./web-map.md#weather-on-the-web) und [Einstellungen](#settings).

<!--
After the structure of this section is approved, some links should be updated.
-->

## Wichtige Funktionen {#key-features}

Das Web-Portal bietet die folgenden Hauptfunktionen zur Arbeit mit Karten und persönlichen Daten im Browser: 

- [Karte](./web-map.md) mit globaler Abdeckung und hochwertigen Vektordaten.
- [Routenplanung](./planner.md) mit Profilen für Fußgänger, Auto, Fahrrad und andere.
- [Navigationsvorschau](./planner.md) mit Abbiegehinweisen.
- [Suche](./web-search.md) und [Erkundung](./web-search.md#explore) beliebter Orte in der Nähe.
- Anzeige von [Favoriten](./web-map.md#favorites), [Tracks](./web-map.md#tracks) und [POIs](./web-map.md#poi-overlay) auf der Karte.
- [Wetter-Overlays](./web-weather.md): Wind, Temperatur und Luftdruck.
- [Geländeschichten](./web-map.md#terrain): Schummerung, Hänge und Höhenansicht.
- [Track-Analysator](./web-tracks-analyzer.md) für Höhen- und Geschwindigkeitsprofile.
- Voller Zugriff auf synchronisierte Daten über [OsmAnd Cloud](./web-cloud#cloud-sync).
- Unterstützung für Dateiimport/-export (GPX: Tracks, Favoriten).
- Nahtlose Integration mit **OsmAnd Pro** und **OsmAnd Start**.

<!--
After the structure of this section is approved, some links should be updated.
-->


### Abonnement-Zugang {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

Das Web-Kartenportal unterstützt mehrere Zugriffsebenen: ohne Anmeldung, mit OsmAnd Start und mit OsmAnd Pro. Die folgende Tabelle fasst zusammen, welche Funktionen auf jeder Ebene verfügbar sind, damit Sie schnell sehen können, was Sie bereits haben und was mit einem Konto oder einem Upgrade verfügbar wird. Diese Übersicht soll Ihnen helfen zu entscheiden, ob Sie überhaupt ein Konto benötigen und, falls ja, welche Option am besten zu Ihrer Nutzung von OsmAnd passt.

| Funktion | Verfügbar in |
|--------|--------------|
| [Navigationsroute](./planner.md) | Ohne Anmeldung |
| [Routenplaner](./planner.md) | Ohne Anmeldung |
| [Wetter-Overlays](./web-weather.md) | Ohne Anmeldung |
| [Einstellungen](./web-map.md#settings) | Ohne Anmeldung |
| [Kartenmenü konfigurieren](./web-map.md#configure-map-menu) ([POIs](./web-map.md#poi-overlay), [Favoriten](./web-map.md#favorites), [Tracks](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/blog/start) oder <ProFeature/> |
| [Kartenmenü konfigurieren](./web-map.md#configure-map-menu) ([Gelände](./web-map.md#terrain))| <ProFeature/> |
| [OsmAnd Cloud Sync](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/blog/start) oder <ProFeature/> |
| [Websuche, Beliebte Orte](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) oder <ProFeature/> |
| [Track-Ordner und -Ebene](./web-tracks.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## Wie man anfängt {#how-to-start}

Um auf alle Funktionen des OsmAnd Web-Portals zugreifen zu können, müssen Sie sich mit einem OsmAnd Cloud-Konto anmelden.

- Wenn Sie bereits ein [**OsmAnd Pro**](../personal/osmand-cloud.md#login)-Abonnement haben oder ein kostenloses [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start)-Konto erstellen möchten, folgen Sie diesen Schritten:

1. Gehen Sie zum [**OsmAnd Kartenportal**](https://osmand.net/map).
2. Öffnen Sie das **Konto**-Menü:
   - **Anmelden**: Geben Sie die E-Mail-Adresse ein, die mit Ihrem Pro- oder Start-Abonnement verknüpft ist, oder
   - **Konto erstellen**: Registrieren Sie sich für ein kostenloses OsmAnd Start-Konto. Für eine detaillierte schrittweise Anleitung zur Erstellung eines neuen Kontos siehe den Artikel [OsmAnd-Konto](./web-cloud).

![Web Account](@site/static/img/web/web_account.png)

<!--

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

-->


## Verwandte Artikel {#related-articles}

- [Erste Schritte](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Web-Käufe](../purchases/web.md)
- [Plattformübergreifende Käufe](../purchases/cross.md)