---
source-hash: aa7b248df7d6116b19b0428376bb9c1f59b764588678067dd00d7ee9bd820a7a
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

Das [OsmAnd Kartenportal](https://osmand.net/map) ist ein browserbasierter Dienst von OsmAnd, der es Benutzern ermöglicht, Karten zu erkunden, ihre Daten zu verwalten, Reisen zu planen und zu erstellen oder einfach die Karte zu durchsuchen.

## So starten Sie {#how-to-start}

Um auf die OsmAnd Web-Funktionen zuzugreifen, benötigen Sie ein Konto:

- Wenn Sie bereits ein [**OsmAnd Pro**](../personal/osmand-cloud.md#login)-Abonnement haben oder ein kostenloses [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start)-Konto erstellen möchten, gehen Sie wie folgt vor:

  1. Gehen Sie zum [**OsmAnd Kartenportal**](https://osmand.net/map).
  2. Öffnen Sie das Menü **Konto**.
     - **Anmelden**: Geben Sie die E-Mail-Adresse ein, die Sie für Ihr Pro- oder Start-Abonnement verwendet haben.
     - **Konto erstellen**: Verwenden Sie diese Option, um sich für ein kostenloses OsmAnd Start-Konto zu registrieren.

![Web Account](@site/static/img/web/web_account.png)

## Kontoverwaltung {#managing-account}

Um Ihr Konto zu verwalten, gehen Sie zu:
**Allgemeines Menü → Konto**

Nach der Registrierung im Web können Sie:

- Kontoinformationen anzeigen
- Cloud-Backups herunterladen
- Sich von Ihrem Konto abmelden
- Ihr Konto löschen
- Ihre E-Mail-Adresse ändern
- Ihre Zahlungen und Käufe einsehen

![Web Account](@site/static/img/web/web_account_2.png)

### Meine Daten {#my-data}

Sie können Backups herunterladen, die von Ihrem Mobilgerät über **OsmAnd Cloud** erstellt und synchronisiert wurden.

- Gehen Sie zu **Allgemeines Menü → Konto → Meine Daten (OsmAnd Cloud) → Alles herunterladen**.

Dieser Abschnitt zeigt an:

- Die Anzahl der in Ihrer Cloud gespeicherten Dateien
- Das insgesamt genutzte Speichervolumen
- Den verfügbaren Cloud-Speicherplatz

> 💡 Hier werden nur Backups angezeigt, die auf Geräten erstellt wurden, auf denen **OsmAnd Cloud** aktiviert ist.

### Zahlungen und Käufe {#payments-and-purchases}

- Gehen Sie zu **Allgemeines Menü → Konto → Zahlungen und Käufe**.

In diesem Abschnitt können Sie alle Käufe und Abonnements einsehen, die mit Ihrem Konto verknüpft sind.

Weitere Informationen zur Nutzung Ihrer Käufe auf verschiedenen Plattformen finden Sie unter [plattformübergreifender Zugriff](../purchases/cross.md).

### E-Mail-Adresse ändern {#change-email-address}

So aktualisieren Sie Ihre E-Mail-Adresse:

1. Gehen Sie zu **Allgemeines Menü → Konto → E-Mail → ⋮ → E-Mail ändern**.
2. Geben Sie Ihre neue E-Mail-Adresse ein und bestätigen Sie.

> 🔒 Eine Bestätigungs-E-Mail wird an die neue Adresse gesendet, bevor die Änderung abgeschlossen ist.

### Abmelden und Konto löschen {#log-out-and-delete}

So melden Sie sich von Ihrem OsmAnd Web-Konto ab:

- Öffnen Sie **Allgemeines Menü → Konto**.
- Klicken Sie auf die Schaltfläche **Abmelden**, um Ihre aktuelle Sitzung zu beenden.

So löschen Sie Ihr Konto dauerhaft:

- Scrollen Sie zum Ende des Menüs **Konto**.
- Klicken Sie auf die Schaltfläche **Konto löschen**.
- Bestätigen Sie die Löschung. Diese Aktion ist irreversibel.

## OsmAnd Pro und OsmAnd Start Synchronisierung {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** ist ein [plattformübergreifendes](../troubleshooting/setup.md#cross-platform) kostenpflichtiges Abonnement.
- **OsmAnd Start** ist eine [kostenlose OsmAnd Cloud Registrierung](https://osmand.net/blog/start).

Die plattformübergreifende Funktionalität ermöglicht es Ihnen, OsmAnd Pro auf allen Plattformen zu nutzen (*[Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map)*). Dazu müssen Sie:

1. **OsmAnd Pro** abonnieren. Weitere Informationen dazu finden Sie [hier für Android](../purchases/android.md#how-to-buy) und [hier für iOS](../purchases/ios.md#how-to-buy).
2. Wie Sie ein **OsmAnd Start**-Konto erstellen, erfahren Sie [hier](https://osmand.net/blog/start#how-to-create-an-account).
3. Registrieren Sie Ihr [Pro- oder Start-Konto](../troubleshooting/setup.md#cross-platform) auf dem OsmAnd-Server innerhalb der OsmAnd-App.
4. Die registrierte E-Mail-Adresse ist Ihr Login, um OsmAnd Pro auf der Webplattform zu aktivieren. Beim ersten Mal müssen Sie ein Passwort für den zukünftigen Zugang zum Webportal wählen (bitte folgen Sie den Anweisungen auf dem Webportal).

<!--

- Geben Sie Ihre *E-Mail-Adresse* und Ihr *Passwort* für [osmand.net/map](https://osmand.net/map/) ein.

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)

- Ihre Daten, wie z.B. Tracks (OsmAnd Pro) und Favoriten (OsmAnd Pro und OsmAnd Start), werden nach dem Login im Menü angezeigt. Sie stehen zur Anzeige auf der Karte zur Verfügung. Sie müssen diese Daten jedoch von Ihren Geräten [synchronisieren](https://osmand.net/docs/user/personal/osmand-cloud#last-sync).

![View OsmAnd Web data](@site/static/img/web/web_data.png)

- Um ein *BACKUP HERUNTERZULADEN* von [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), klicken Sie auf das Login-Feld. Im Login-Feld sehen Sie Dateiinformationen (Gesamtzahl der Dateien, Gesamtgröße der Dateien, genutzter Cloud-Speicher) und Kontoinformationen (Abonnementtyp, Startzeit und Ablaufzeit Ihres Abonnements).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)

Wählen Sie die benötigten Dateien zum Herunterladen, das `.zip`- oder `.osf`-Format der heruntergeladenen Dateien und klicken Sie auf die Schaltfläche *BACKUP HERUNTERLADEN*:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)

Es gibt auch eine Schaltfläche zum *Abmelden* vom Konto.

- *ABMELDEN*, *KONTO LÖSCHEN* oder *E-Mail ändern* finden Sie ebenfalls im Login-Feld. Zum Öffnen von *KONTO LÖSCHEN* oder *E-Mail ändern* müssen Sie auf *Gefährlicher Bereich* klicken.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)


## Cloud-Daten {#cloud-data}

[Tracks und Favoriten](web-map.md#tracks).

## Kartenstil {#map-style}

In diesem Menüabschnitt können Sie den Kartenstil ändern. Weitere Informationen dazu finden Sie im Artikel [Vektorkarten (Kartenstile)](../map/vector-maps.md) für die OsmAnd-App. Die Einstellungen in der Webversion unterscheiden sich nicht.
**Einige Beispiele:**

- Nautischer Kartenstil

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo-Kartenstil

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->

> *Zuletzt aktualisiert: Juli 2024*