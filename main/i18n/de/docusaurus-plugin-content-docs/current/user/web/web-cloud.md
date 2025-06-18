---
source-hash: 751ce0d01399c5201cf9fd9a85ce2e3a31e3f473f43bd4237e02b1fda097d4dd
sidebar_position: 2
sidebar_label: OsmAnd Cloud
title: OsmAnd Cloud auf der Website
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


<InfoIncompleteArticle/>

## Überblick {#overview}

Das [OsmAnd Kartenportal](https://osmand.net/map) ist ein browserbasierter Dienst von OsmAnd, der es Nutzern ermöglicht, Karten zu erkunden, ihre Daten zu verwalten, Reisen zu planen und zu erstellen oder einfach nur die Karte zu durchsuchen.

#### Abonnementszugänge {#subscription-accesses}

Das Kartenportal kann ohne Registrierung genutzt werden; einige Funktionen sind jedoch ausschließlich für OsmAnd Pro- und OsmAnd Start-Nutzer verfügbar:

| Funktionen | Versionen |
|--- |--- |
| [Navigationsroute](./planner.md) | Kostenlos |
| [Track erstellen](./planner.md) | Kostenlos |
| [Wetter](./web-map.md) | Kostenlos |
| [Favoriten](./web-map.md) | [Osmand Start](https://osmand.net/blog/start) oder <ProFeature/> |
| [OsmAnd Cloud Sync](./web-cloud.md) | [Osmand Start](https://osmand.net/blog/start) oder <ProFeature/> |
| [Websuche](./web-search.md)|[Osmand Start](https://osmand.net/blog/start) oder <ProFeature/>|
| [Tracks](./web-map.md) | <ProFeature/> |


## Wie man startet {#how-to-start}

Wenn Sie ein [OsmAnd Pro](../personal/osmand-cloud.md#login)-Konto haben oder ein [OsmAnd Start](../personal/osmand-cloud.md#osmand-start)-Konto erstellen möchten, müssen Sie die folgenden Schritte ausführen:

- Gehen Sie zum [*OsmAnd Kartenportal*](https://osmand.net/map).
- Öffnen Sie das Menü **Konto**.
  - *Anmelden*. Geben Sie die E-Mail-Adresse ein, mit der Sie Ihr Konto erstellt haben. Für Pro- oder Start-Abonnements.
  - *Konto erstellen*. Für OsmAnd Start.


## So ändern Sie die Sprache {#how-to-change-language}

Wenn Sie die Anzeigesprache ändern möchten:

- Die Webversion von OsmAnd verwendet die Sprache aus den Browser-Einstellungen.
- Für Chrome hat `chrome://settings/languages` Priorität.
- Sie können die System-(Menü-)Sprache manuell ändern, indem Sie auswählen:
    *Menü →* ⚙ *→ Sprache ausschalten*.


## Kontoverwaltung {#managing-account}

*Allgemeines Menü → Konto*

Nach der Registrierung im Web können Benutzer auf ihre Kontoinformationen zugreifen, Backups herunterladen, sich abmelden, ihr Konto löschen oder ihre E-Mail-Adresse ändern.

#### Auf Konto zugreifen {#access-account}

#### Backups {#backups}

#### Abmelden und Löschen {#log-out-and-delete}

#### E-Mail-Adresse ändern {#change-email-address}


## OsmAnd Pro und OsmAnd Start Sync {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** ist ein [plattformübergreifendes](../troubleshooting/setup.md#cross-platform) kostenpflichtiges Abonnement.
- **OsmAnd Start** ist eine [kostenlose OsmAnd Cloud Registrierung](https://osmand.net/blog/start).

Die plattformübergreifende Funktion ermöglicht es Ihnen, OsmAnd Pro auf allen Plattformen zu nutzen *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))*. Dazu müssen Sie:

1. Abonnieren Sie **OsmAnd Pro**. Lesen Sie hier mehr darüber, wie Sie dies für [Android](../purchases/android.md#how-to-buy) und für [iOS](../purchases/ios.md#how-to-buy) tun können.
2. Wie Sie ein **OsmAnd Start**-Konto erstellen, lesen Sie [hier](https://osmand.net/blog/start#how-to-create-an-account).
3. Registrieren Sie Ihr [Pro- oder Start-Konto](../troubleshooting/setup.md#cross-platform) auf dem OsmAnd-Server in der OsmAnd-App.
4. Die registrierte E-Mail-Adresse ist Ihr Login, um OsmAnd Pro auf der Webplattform zu aktivieren. Zuerst müssen Sie ein Passwort für die zukünftige Anmeldung am Webportal auswählen (bitte verwenden Sie die Anweisungen auf dem Webportal).

- Geben Sie Ihre *E-Mail-Adresse* und Ihr *Passwort* für [osmand.net/map](https://osmand.net/map/) ein.

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)

- Ihre Daten, wie z. B. Tracks (OsmAnd Pro) und Favoriten (OsmAnd Pro und OsmAnd Start), werden nach der Anmeldung im Menü angezeigt. Sie stehen zur Anzeige auf der Karte zur Verfügung. Sie müssen jedoch [diese Daten synchronisieren](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) von Ihren Geräten.

![View OsmAnd Web data](@site/static/img/web/web_data.png)

- Um ein *BACKUP HERUNTERZULADEN* von [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), klicken Sie auf das Anmeldefeld. Auf dem Anmeldefeld sehen Sie Informationen zu den Dateien (Gesamtzahl der Dateien, Gesamtgröße der Dateien, verwendeter Cloud-Speicher) und Kontoinformationen (Abonnementtyp, Startzeit und Ablaufzeit Ihres Abonnements).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)

Wählen Sie die benötigten Dateien zum Herunterladen aus, das `.zip` oder `.osf` Format der heruntergeladenen Dateien und klicken Sie auf die Schaltfläche *BACKUP HERUNTERLADEN*:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)

Es gibt auch eine Schaltfläche zum *Abmelden* vom Konto.

- *ABMELDEN*, *KONTO LÖSCHEN* oder *E-Mail-Adresse ändern* finden Sie ebenfalls im Anmeldefeld. Zum Öffnen von *KONTO LÖSCHEN* oder *E-Mail-Adresse ändern* müssen Sie auf *Gefahrenbereich* klicken.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)


## Cloud-Daten {#cloud-data}

[Tracks und Favoriten](web-map.md#tracks).
<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->



> *Zuletzt aktualisiert: September 2024*