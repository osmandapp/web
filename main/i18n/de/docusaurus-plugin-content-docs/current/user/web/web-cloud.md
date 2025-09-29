---
source-hash: 36fa594008d56ae693369164879dccfe01f275c12d52be379ad60b0b9c264d67
sidebar_position: 2
sidebar_label:  OsmAnd Cloud
title: OsmAnd Cloud auf der Webseite
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

## Übersicht {#overview}

Das [OsmAnd Kartenportal](https://osmand.net/map) ist ein browserbasierter Dienst von OsmAnd, der es Nutzern ermöglicht, Karten zu erkunden, ihre Daten zu verwalten, Reisen zu planen und zu erstellen oder einfach nur die Karte zu durchsuchen.



## Wie man anfängt {#how-to-start}

Um auf die OsmAnd Web-Funktionen zugreifen zu können, benötigen Sie ein Konto:

- Wenn Sie bereits ein [**OsmAnd Pro**](../personal/osmand-cloud.md#login)-Abonnement haben oder ein kostenloses [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start)-Konto erstellen möchten, folgen Sie diesen Schritten:

  1. Gehen Sie zum [**OsmAnd Kartenportal**](https://osmand.net/map).
  2. Öffnen Sie das Menü **Konto**.
     - **Anmelden**: Geben Sie die E-Mail-Adresse ein, die Sie für Ihr Pro- oder Start-Abonnement verwendet haben.
     - **Konto erstellen**: Nutzen Sie diese Option, um sich für ein kostenloses OsmAnd Start-Konto zu registrieren.

![Web-Konto](@site/static/img/web/web_account.png)

## Kontoverwaltung {#managing-account}

Um Ihr Konto zu verwalten, gehen Sie zu:  
**Allgemeines Menü → Konto**

Nach der Registrierung im Web können Sie:

- Kontoinformationen einsehen
- Cloud-Backups herunterladen
- Sich von Ihrem Konto abmelden
- Ihr Konto löschen
- Ihre E-Mail-Adresse ändern
- Ihre Zahlungen und Käufe einsehen

![Web-Konto](@site/static/img/web/web_account_2.png)

### Meine Daten {#my-data}

Sie können Backups herunterladen, die von Ihrem mobilen Gerät über **OsmAnd Cloud** erstellt und synchronisiert wurden.

- Gehen Sie zu **Allgemeines Menü → Konto → Meine Daten (OsmAnd Cloud) → Alle herunterladen**.

Dieser Abschnitt zeigt an:

- Die Anzahl der in Ihrer Cloud gespeicherten Dateien
- Das insgesamt genutzte Speichervolumen
- Verfügbarer Cloud-Speicherplatz

> 💡 Hier werden nur Backups angezeigt, die auf Geräten erstellt wurden, auf denen **OsmAnd Cloud** aktiviert ist.

### Zahlungen und Käufe {#payments-and-purchases}

- Gehen Sie zu **Allgemeines Menü → Konto → Zahlungen und Käufe**.

In diesem Abschnitt können Sie alle mit Ihrem Konto verknüpften Käufe und Abonnements einsehen.

Für weitere Details zur Nutzung Ihrer Käufe auf verschiedenen Plattformen lesen Sie über den [plattformübergreifenden Zugriff](../purchases/cross.md).

### E-Mail-Adresse ändern {#change-email-address}

So aktualisieren Sie Ihre E-Mail-Adresse:

1. Gehen Sie zu **Allgemeines Menü → Konto → E-Mail → ⋮ → E-Mail ändern**.
2. Geben Sie Ihre neue E-Mail-Adresse ein und bestätigen Sie sie.

> 🔒 Eine Bestätigungs-E-Mail wird an die neue Adresse gesendet, bevor die Änderung abgeschlossen wird.

### Abmelden und Konto löschen {#log-out-and-delete}

So melden Sie sich von Ihrem OsmAnd Web-Konto ab:

- Öffnen Sie **Allgemeines Menü → Konto**.
- Klicken Sie auf die Schaltfläche **Abmelden**, um Ihre aktuelle Sitzung zu beenden.

So löschen Sie Ihr Konto dauerhaft:

- Scrollen Sie zum Ende des Menüs **Konto**.
- Klicken Sie auf die Schaltfläche **Konto löschen**.
- Bestätigen Sie die Löschung. Diese Aktion ist unumkehrbar.


## OsmAnd Pro und OsmAnd Start Sync {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** ist ein [plattformübergreifendes](../troubleshooting/setup.md#initial-setup) kostenpflichtiges Abonnement. 
- **OsmAnd Start** ist eine [kostenlose Registrierung für OsmAnd Cloud](https://osmand.net/blog/start).

Die plattformübergreifende Fähigkeit ermöglicht es Ihnen, OsmAnd Pro auf allen Plattformen *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))* zu nutzen. Dazu müssen Sie:

1. **OsmAnd Pro** abonnieren. Lesen Sie mehr darüber, wie Sie dies für [Android hier](../purchases/android.md#how-to-buy) und für [iOS hier](../purchases/ios.md#how-to-buy) tun können.
2. Wie Sie ein **OsmAnd Start**-Konto erstellen, lesen Sie mehr [hier](https://osmand.net/blog/start#how-to-create-an-account).
3. Registrieren Sie Ihr [Pro- oder Start-Konto](/docs/user/personal/osmand-cloud/#cross-platform) auf dem OsmAnd-Server innerhalb der OsmAnd-App.
4. Die registrierte E-Mail-Adresse wird Ihr Login sein, um OsmAnd Pro auf der Web-Plattform zu aktivieren. Zuerst müssen Sie ein Passwort für den zukünftigen Zugang zum Webportal wählen (bitte folgen Sie den Anweisungen auf dem Webportal).


<!--

- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  

Choose needed files for downloading, `.zip` or `.osf` format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)  

There is also a button to *logout* of the account.  

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)  


## Cloud data {#cloud-data}

[Tracks and Favorites](web-map.md#tracks).

## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->