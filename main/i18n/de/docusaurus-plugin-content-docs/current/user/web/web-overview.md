---
source-hash: 5c0ec057fd60df8e67edea1ef3d5a69cce84edf9177789c1998911043f2d9f81
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


## Überblick {#overview}

Der **Web-Planer**, auch bekannt als das [**OsmAnd Kartenportal**](https://osmand.net/map), ist eine browserbasierte Erweiterung der OsmAnd-Mobil-App. Es ermöglicht Benutzern, globale Karten anzuzeigen, Routen zu planen, die Navigation zu simulieren, persönliche Daten zu verwalten und über die Cloud auf synchronisierte Inhalte von ihren Geräten zuzugreifen.

Entwickelt als plattformübergreifender Begleiter zu OsmAnd für Android und iOS, hilft das Web-Portal Benutzern, Reisen zu planen, Tracks zu analysieren, Gelände anzuzeigen und Dateien mit jedem Desktop- oder Tablet-Browser zu verwalten – ohne eine App installieren zu müssen.

OsmAnd Web ist eng mit dem **OsmAnd Cloud**-Dienst integriert, der die Synchronisierung von Favoriten, Tracks und Backups über Geräte und Plattformen hinweg ermöglicht. Benutzer mit **OsmAnd Start** (kostenlos) oder **OsmAnd Pro** (kostenpflichtig) Konten können dieses Ökosystem voll ausnutzen, indem sie Daten zwischen Mobilgeräten und dem Web synchronisieren. Eine detaillierte Vergleich der *Start*- und *Pro*-Funktionen finden Sie im Abschnitt [Abonnement-Zugang](#subscription-accesses) unten.

> **Hinweis:** Auch ohne Anmeldung oder Verifizierung Ihres Kontos können Sie mehrere Kernfunktionen des Web-Kartenportals nutzen, einschließlich: [Navigationsroute](./web-navigation.md), [Routenplaner](./planner.md), [Wetter-Overlays](./web-weather.md) und [Einstellungen](./web-map.md#settings).


## Wichtige Funktionen {#key-features}

Das Web-Portal bietet die folgenden Hauptfunktionen zur Arbeit mit Karten und persönlichen Daten im Browser: 

- [Karte](./web-map.md) mit globaler Abdeckung und hochwertigen Vektordaten.
- [Routenplanung](./planner.md) mit Profilen für Fußgänger, Auto, Fahrrad und andere.
- [Navigation](./web-navigation.md) Vorschau mit Abbiegehinweisen.
- [Suche](./web-search.md) und [Erkundung](./web-search.md#explore) beliebter Orte in der Nähe.
- Anzeige von [Favoriten](./web-map.md#favorites), [Tracks](./web-map.md#tracks) und [POIs](./web-map.md#poi-overlay) auf der Karte.
- [Wetter-Overlays](./web-weather.md): Wind, Temperatur und Luftdruck.
- [Geländeschichten](./web-map.md#terrain): Schummerung, Hänge und Höhenansicht.
- [Track-Analysator](./web-tracks-analyzer.md) für Höhen- und Geschwindigkeitsprofile.
- Voller Zugriff auf synchronisierte Daten über [OsmAnd Cloud](./web-cloud#cloud-sync).
- Unterstützung für Dateiimport/-export (GPX: Tracks, Favoriten).
- Nahtlose Integration mit **OsmAnd Pro** und **OsmAnd Start**.

### Abonnement-Zugang {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

Das Web-Kartenportal unterstützt mehrere Zugriffsebenen: ohne Anmeldung, mit OsmAnd Start und mit OsmAnd Pro. Die folgende Tabelle fasst zusammen, welche Funktionen auf jeder Ebene verfügbar sind, damit Sie schnell sehen können, was Sie bereits haben und was mit einem Konto oder einem Upgrade verfügbar wird. Diese Übersicht soll Ihnen helfen zu entscheiden, ob Sie überhaupt ein Konto benötigen und, falls ja, welche Option am besten zu Ihrer Nutzung von OsmAnd passt.

| Funktion | Verfügbar in |
|--------|--------------|
| [Navigationsroute](./web-navigation.md) | Ohne Anmeldung |
| [Routenplaner](./planner.md) | Ohne Anmeldung |
| [Wetter-Overlays](./web-weather.md) | Ohne Anmeldung |
| [Einstellungen](./web-map.md#settings) | Ohne Anmeldung |
| [Kartenmenü konfigurieren](./web-map.md#configure-map-menu) ([POIs](./web-map.md#poi-overlay), [Favoriten](./web-map.md#favorites), [Tracks](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) oder [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Kartenmenü konfigurieren](./web-map.md#configure-map-menu) ([Gelände](./web-map.md#terrain))| [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [OsmAnd Cloud Sync](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) oder [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Websuche, Beliebte Orte](./web-search.md) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) oder [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |
| [Track-Ordner und -Ebene](./web-tracks.md) | [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/) |


## Wie man anfängt {#how-to-start}

Um auf alle Funktionen des OsmAnd Web-Portals zugreifen zu können, müssen Sie sich mit einem OsmAnd Cloud-Konto anmelden.

- Wenn Sie bereits ein [**OsmAnd Pro**](../personal/osmand-cloud.md#login)-Abonnement haben oder ein kostenloses [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start)-Konto erstellen möchten, folgen Sie diesen Schritten:

1. Gehen Sie zum [**OsmAnd Kartenportal**](https://osmand.net/map).
2. Öffnen Sie das **Konto**-Menü:
   - **Anmelden**: Geben Sie die E-Mail-Adresse ein, die mit Ihrem Pro- oder Start-Abonnement verknüpft ist, oder
   - **Konto erstellen**: Registrieren Sie sich für ein kostenloses OsmAnd Start-Konto. Für eine detaillierte schrittweise Anleitung zur Erstellung eines neuen Kontos siehe den Artikel [OsmAnd-Konto](./web-cloud).

![Web Account](@site/static/img/web/web_account.png)


## Verwandte Artikel {#related-articles}

- [Erste Schritte](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Web-Käufe](../purchases/web.md)
- [Plattformübergreifende Käufe](../purchases/cross.md)