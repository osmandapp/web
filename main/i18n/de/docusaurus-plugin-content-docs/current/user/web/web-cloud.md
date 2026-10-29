---
source-hash: 3d7c0440f81fe7d7c68aa8cdc03f7757d017ff3c9522e4e2e9666eb2f8516db1
sidebar_position: 2
sidebar_label:  Account
title: OsmAnd Account
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


## Übersicht {#overview}

Die Anmeldung mit einem OsmAnd-Konto verwandelt den [OsmAnd Web Planner](https://osmand.net/map) von einem einfachen Kartenviewer in Ihren persönlichen Arbeitsbereich. Dasselbe Konto, das Sie in der mobilen App verwenden, verbindet die Website mit Ihren **OsmAnd Cloud**-Daten und Käufen, sodass Sie Ihren gespeicherten Inhalt und Abonnements an einem einzigen Ort im Web zugreifen können.


## Autorisierung {#authorization}

### Registrieren {#sign-up}

Um auf OsmAnd Web-Funktionen zugreifen zu können, müssen Sie ein Konto erstellen. Verwenden Sie den Registrierungsablauf:

- Gehen Sie zum [**OsmAnd Kartenportal**](https://osmand.net/map).
- Öffnen Sie das **Konto**-Menü.
- Wählen Sie **Neues Konto erstellen**. Das Dialogfeld „Neues Konto erstellen“ öffnet sich.
- Geben Sie im Feld **E-Mail** die E-Mail-Adresse ein, die Sie für Ihr OsmAnd-Konto verwenden möchten, und klicken Sie auf **Weiter**.
- Ein Verifizierungscode wird an diese E-Mail-Adresse gesendet. Überprüfen Sie Ihren Posteingang (und den Spam-Ordner, falls nötig).
- Im nächsten Dialog geben Sie den Verifizierungscode ein und klicken Sie auf **Weiter**, um Ihre E-Mail zu bestätigen. Wenn Sie den Code nicht erhalten haben, verwenden Sie den Link **I didn't receive verification code** und folgen Sie den Anweisungen.

Nach der Verifizierung des Codes wird Ihr Web-Konto erstellt und Sie werden automatisch angemeldet.

![Web Sign Up](@site/static/img/web/web_sign_up.png) ![Web Sign Up](@site/static/img/web/web_ver_code.png)


### Anmelden {#login}

Wenn Sie bereits ein OsmAnd-Konto haben, können Sie sich auf dem [**OsmAnd Kartenportal**](https://osmand.net/map) mit derselben E-Mail-Adresse und demselben Passwort anmelden. Gehen Sie zum **Konto-Menü** und wählen Sie die Option **Log in option**. Geben Sie im sich öffnenden Dialog die mit Ihrem OsmAnd-Konto verknüpfte E-Mail-Adresse ein, geben Sie Ihr Passwort ein und wählen Sie **Continue**. Nach einer erfolgreichen Anmeldung öffnet sich das OsmAnd-Konto-Panel und Sie können mit Ihren Daten, Käufen und Einstellungen arbeiten.


## Kontoverwaltung {#managing-account}

### Meine Daten {#my-data}

Sie können Backups herunterladen, die von Ihrem mobilen Gerät über **OsmAnd Cloud** erstellt und synchronisiert wurden.  
Gehen Sie zu: *General Menu → Account → My data (OsmAnd Cloud) → Download all*

Dieser Abschnitt zeigt an:

- Die Anzahl der in Ihrer Cloud gespeicherten Dateien.
- Das insgesamt genutzte Speichervolumen.
- Verfügbarer Cloud-Speicherplatz.

>💡 Hier werden nur Backups angezeigt, die auf Geräten erstellt wurden, auf denen **OsmAnd Cloud** aktiviert ist.

Wenn Sie eine Kopie all Ihrer Daten speichern möchten, verwenden Sie **Download all**. Dies öffnet ein Dialogfeld, in dem Sie:

- Auswählen können, welche Daten exportiert werden sollen (z. B. *My places, Settings, Resources, Maps*),
- Das Exportformat wählen können (*ZIP or OSF*).
- Eine Schätzung der Download-Größe und -Dauer sehen können.

Klicken Sie auf **Download Backup**, um den Export zu starten und das Archiv auf Ihren Computer zu speichern.

![Web Account](@site/static/img/web/web_download_all.png)

### Zahlungen und Käufe {#payments-and-purchases}

Dieser Abschnitt zeigt alle mit Ihrem OsmAnd-Konto verknüpften Produkte und Abonnements. Um ihn zu öffnen,  
gehen Sie zu: *General Menu → Account → Payments and Purchases*

Hier können Sie eine Liste aller mit Ihrer E-Mail-Adresse verknüpften Käufe sehen:
- Kostenlose und kostenpflichtige Pläne (wie OsmAnd Start or OsmAnd Pro).
- Einmalige Produkte (z. B. Maps+ oder Sondereditionen).
- Abonnements, die monatlich oder jährlich erneuert werden.

Für jeden Eintrag in der Liste werden angezeigt:
- Produktname und Symbol.
- Typ – monatliches Abonnement, jährliches Abonnement oder Einmalzahlung.
- Status – *Active, Expired or Canceled*.
- Datumsinformationen.

Wenn Sie auf ein Produkt in der Liste klicken, öffnet sich die Detailseite. Dort können Sie sehen, wo das Produkt gekauft wurde (*Google Play, Apple App Store, Huawei AppGallery, Amazon* or *OsmAnd Web*) und einen Link oder Anweisungen finden, wie Sie das Abonnement im entsprechenden Store verwalten oder stornieren können. Wenn das Produkt über OsmAnd Web (FastSpring) gekauft wurde, zeigt die Detailseite einen Link **Manage subscription**, der das FastSpring-Kontoverwaltungsportal öffnet, wo Sie Ihre Zahlungsmethode aktualisieren, das Abonnement stornieren oder reaktivieren, den Plan ändern oder Rechnungen herunterladen können.

Wenn noch keine Käufe mit Ihrem Konto verknüpft sind, zeigt dieser Abschnitt einen leeren Zustand mit der Meldung **You don’t have any purchases** und einen Button **Learn more**, der zu einer Seite mit verfügbaren OsmAnd-Plänen und Upgrade-Optionen führt.

Für weitere Details zur Nutzung Ihrer Käufe auf verschiedenen Plattformen lesen Sie über den [cross-platform access](../purchases/cross.md).

![Web Account](@site/static/img/web/web_purchases.png)

### Cloud-Synchronisierung {#cloud-sync}

Cloud Sync ermöglicht es Ihnen, die Daten, die Sie zu **OsmAnd Cloud** synchronisiert haben, direkt auf dem [Web Map Portal](https://osmand.net/map/) anzuzeigen. Sobald Sie sich mit Ihrem OsmAnd Start- oder OsmAnd Pro-Konto anmelden, zeigt die Website die Favoriten, Tracks und Backup-Dateien an, die Sie zuvor aus Ihrer mobilen App synchronisiert haben. Es ist eine einfache Möglichkeit, Ihren Cloud-Inhalt auf einem größeren Bildschirm anzuzeigen und Ihre Backups herunterzuladen, wann immer Sie es brauchen.

Diese Elemente werden direkt nach der Anmeldung auf der Website im Menü sichtbar. Um diese Informationen zu aktualisieren, müssen Sie Ihre Daten von Ihren Geräten aus synchronisieren, indem Sie die Aktion [Sync now action](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) in der mobilen App verwenden.

Die Verfügbarkeit von Cloud Sync hängt von Ihrem Kontotyp ab:
- [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) – synchronisiert [Favorites](../web/web-favorites.md) und zeigt sie im Web an.
- OsmAnd Pro – synchronisiert [Tracks](../web/web-tracks.md), Favoriten und [Backups](#my-data) und entsperrt vollen Web-Zugang zu Cloud-Daten.

![Web Track](@site/static/img/web/web_track_start.png) ![Web Track](@site/static/img/web/web_track_pro.png)

### OsmAnd Cloud {#osmand-cloud}

Wenn Sie angemeldet sind, erscheint der Abschnitt **OsmAnd Cloud** in Menu → Settings und umfasst Änderungen und Papierkorb.

Die Option **Changes** zeigt eine chronologische Liste der in Ihrem **OsmAnd Cloud**-Konto gespeicherten Dateien. Die Elemente sind nach Monaten gruppiert und enthalten den Dateinamen, den Typ der Änderung (z. B. hinzugefügt, geändert oder gelöscht), die Zeit des letzten Updates und das Gerät, das es erstellt hat. Für jeden Eintrag können Sie das Dreipunkt-Menü öffnen und *Download* wählen, um die ausgewählte Datei auf Ihren Computer zu speichern, oder *Delete*.

Die Option **Trash** enthält Dateien, die aus **OsmAnd Cloud** gelöscht wurden. Die Liste ist ebenfalls nach Monaten gruppiert und zeigt, wann jede Datei entfernt wurde und von welchem Gerät. Verwenden Sie das Dreipunkt-Menü neben einer Datei, um eine Kopie *Download*, *Restore from trash* (die Datei zu **OsmAnd Cloud** zurückzuführen, damit sie wieder in Ihren Daten verfügbar wird) oder *Delete immediately* zu wählen, um sie dauerhaft zu entfernen. Dies hilft, versehentlichen Datenverlust zu verhindern, während Sie Cloud-Speicher freigeben können, wenn Sie sicher sind, dass eine Datei nicht mehr benötigt wird. Sie können auch alle gelöschten Elemente auf einmal löschen, indem Sie das Papierkorb-Symbol im Header des Papierkorb-Panels klicken. Dies öffnet den Dialog **Empty trash**, in dem Sie die Löschung bestätigen, um alle Dateien aus dem Papierkorb dauerhaft zu entfernen.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

### Verbundene Apps {#connected-apps}

Der Abschnitt **Connected Apps** ermöglicht es Ihnen, externe Dienste mit Ihrem OsmAnd-Konto zu verknüpfen. Derzeit unterstützt er die Integration mit [Garmin Connect™](https://connect.garmin.com/app/), die eine automatische Synchronisierung von Garmin-Aktivitäten ermöglicht. Um ihn zu öffnen, gehen Sie zu: *OsmAnd Web Map → Account → Connected apps*.

Die Garmin Connect-Integration ist nur für [OsmAnd Pro](https://osmand.net/docs/user/purchases/) Benutzer verfügbar. Wenn Sie kein aktives Pro-Abonnement haben, öffnet die Auswahl des Garmin Connect-Elements die Preisseite.

Um Ihr Garmin Connect™-Konto zu verbinden, klicken Sie auf **Connect**. Sie werden zur Garmin-Autorisierungsseite weitergeleitet, wo Sie sich anmelden und den Zugriff auf Ihre Garmin Connect™-Daten gewähren müssen. Während der Autorisierung können Sie die Synchronisierung kürzlicher Aktivitäten aktivieren, um Daten aus den letzten 30 Tagen zu importieren. Aktivitäten, die älter als 30 Tage sind, können nicht automatisch importiert werden.

Nach der Verbindung erstellt OsmAnd einen dedizierten Garmin Connect-Ordner im [Tracks section](./web-tracks.md) und beginnt automatisch mit dem Import von Aktivitäten. Neue in Garmin Connect™ aufgezeichnete Aktivitäten werden diesem Ordner ohne manuellen Import hinzugefügt. Der Ordner wird auch mit OsmAnd-Mobil-Apps synchronisiert, wenn [OsmAnd Cloud](../personal/osmand-cloud.md) aktiviert ist.

Das Garmin Connect-Menü enthält zwei Abschnitte: **My data** und **Settings**. In My data können Sie die Anzahl der synchronisierten Aktivitäten anzeigen, die zuletzt abgerufene Aktivität öffnen oder die Garmin Connect™-Aktivitätenseite über die Schaltfläche **View on Garmin Connect™** öffnen. In den Einstellungen können Sie festlegen, welche Aktivitätstypen mit der Option „Activities to sync“ synchronisiert werden sollen.

Aktivitäten sind in Kategorien wie Cycling, Walking & Running, Water Sports und Winter & Other Sports gruppiert. Einzelne Aktivitätstypen können aktiviert oder deaktiviert werden. Standardmäßig sind nach der Verbindung alle unterstützten Aktivitätstypen ausgewählt.

Um Ihr Garmin Connect™-Konto zu trennen, gehen Sie zu *Settings → Disconnect* und bestätigen Sie die Aktion. Zuvor importierte Tracks bleiben im Garmin Connect-Ordner, aber neue Aktivitäten werden nicht mehr synchronisiert.

![Garmin Connect](@site/static/img/web/garmin_connect_new.png) ![Garmin Connect](@site/static/img/web/garmin_connect_2_new.png)


## Fehlerbehebung {#troubleshooting}

### Passwort zurücksetzen {#reset-password}

Wenn Sie Ihr Passwort nicht erinnern, verwenden Sie den Link **I don’t have or forgot password** im Anmelde-Dialog. Dies öffnet das Panel **Change or reset password**. Geben Sie die E-Mail-Adresse ein, die Sie zur Kontoerstellung verwendet haben, und klicken Sie auf **Continue**. Eine Nachricht mit einem Verifizierungscode wird an diese E-Mail gesendet. Auf dem nächsten Bildschirm geben Sie den Verifizierungscode und Ihr neues Passwort ein, dann wählen Sie **Continue**, um zu bestätigen. Wenn der Code akzeptiert wird, wird Ihr Passwort aktualisiert und Sie können sich mit den neuen Anmeldedaten bei OsmAnd Web anmelden.

![Web Account](@site/static/img/web/web_password.png)

### E-Mail-Adresse ändern {#change-email-address}

Um Ihre E-Mail-Adresse zu aktualisieren,
gehen Sie zu *General Menu → Account → Email → ⋮ → Change email*

Das Dialogfeld „E-Mail ändern“ erscheint. Ein Verifizierungscode wird an die aktuelle E-Mail-Adresse gesendet. Geben Sie diesen Code im Feld **Code from Old Email** ein, geben Sie die neue Adresse in **New Email** an, dann wählen Sie **Next**. Aus Sicherheitsgründen wird eine Bestätigungsnachricht an Ihre neue E-Mail-Adresse gesendet, die Sie darüber informiert, dass die Konto-E-Mail aktualisiert wurde.

![Web Account](@site/static/img/web/web_email_new.png)

### Abmelden und Konto löschen {#logout-and-delete}

![Web Account](@site/static/img/web/web_logout_new.png)

Das OsmAnd-Konto-Panel enthält Steuerelemente zum Beenden der aktuellen Web-Sitzung und zum dauerhaften Entfernen des Kontos.

Um sich abzumelden, öffnen Sie OsmAnd Konto und verwenden Sie den Button **Logout** in der oberen rechten Ecke des Panels (Symbol mit einem Pfeil, der ein Quadrat verlässt). Die Auswahl von Logout schließt das Konto-Panel und beendet die aktive Sitzung auf der Website.

Um ein Konto zu löschen, wählen Sie **Delete account** am unteren Rand des OsmAnd-Konto-Panels. Ein Bestätigungs-Dialog erscheint mit der Meldung *“Are you sure you want to do this?”* und einer kurzen Erklärung, dass alle Daten und Kontodetails aus **OsmAnd Cloud** entfernt werden und sekundäre Geräte den Zugriff auf kostenpflichtige Funktionen verlieren. Ein Verifizierungscode wird an die Konto-E-Mail-Adresse gesendet. Geben Sie den Code im Feld „Code from Email“ ein und wählen Sie **DELETE THIS ACCOUNT**, um den Vorgang abzuschließen. Diese Operation ist dauerhaft und kann nicht rückgängig gemacht werden.

![Web Account](@site/static/img/web/web_delete.png)


## Verwandte Artikel {#related-articles}

- [Introduction](./web-overview.md)
- [Cross-Platform Purchases](../purchases/cross.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Tracks](./web-tracks.md)