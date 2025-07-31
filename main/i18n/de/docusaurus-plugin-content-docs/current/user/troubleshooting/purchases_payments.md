---
source-hash: 2c18098f94d113417dbc7c36dee6af4769f8e0f98a71713649f8f3d246f92e77
sidebar_position: 2
title: Käufe & Zahlungen
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Plattformübergreifende Käufe {#cross-platform-purchases}

**OsmAnd Pro** und **Maps+** (*Alle Weltkarten* für iOS) sind **plattformübergreifende Abonnements**, die ab OsmAnd 5.0 für Android und iOS verfügbar sind. Plattformübergreifend bedeutet, dass Sie ein Abonnement, das Sie beispielsweise in einem der Android-Stores (Google Play, Huawei AppGallery) erworben haben, auch auf iOS und in der Webversion nutzen können.

- Ein plattformübergreifendes Abonnement kann auf mehreren Geräten und Plattformen genutzt werden, **wenn es mit demselben OsmAnd Cloud-Konto verknüpft ist**.

- Einmalige Käufe wie **OsmAnd+** (Android) und Store-spezifische Käufe sind nicht zwischen Plattformen übertragbar.

- Sie können OsmAnd Pro auf bis zu 6 Geräten nutzen, auch wenn diese unterschiedliche Betriebssysteme verwenden.

- Stellen Sie immer sicher, dass Sie auf allen Geräten dasselbe OsmAnd Cloud-Konto verwenden, um auf Ihre Käufe zuzugreifen.

- Weitere Details finden Sie unter: [Android-Käufe](../purchases/android.md), [iOS-Käufe](../purchases/ios.md) und [OsmAnd Kartenportal](https://www.osmand.net/map).


### So verknüpfen Sie Ihren Kauf mit dem OsmAnd Cloud-Konto {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Wenn Sie **kein** OsmAnd Cloud-Konto haben:

    - Öffnen Sie die OsmAnd-App auf dem Gerät, auf dem Sie den Kauf getätigt haben.
    - Gehen Sie zu *Menü → Einstellungen → OsmAnd Cloud*.
    - Tippen Sie auf **Neues Konto erstellen**.
    - Nach der Kontoerstellung gehen Sie zu *OsmAnd Menü → Einstellungen → Käufe*.
    - Tippen Sie auf **Käufe wiederherstellen**, um Ihren Kauf mit einem neuen Konto zu verknüpfen.

2. Wenn Sie **bereits** ein OsmAnd Cloud-Konto haben:

    - Stellen Sie sicher, dass Sie auf dem Gerät, auf dem Sie den Kauf getätigt haben, in das OsmAnd Cloud-Konto eingeloggt sind.
    - Navigieren Sie zu *OsmAnd Menü → Einstellungen → OsmAnd Cloud → Ich habe bereits ein Konto*.
    - Nach dem Einloggen in Ihr Konto gehen Sie zu *OsmAnd Menü → Einstellungen → Käufe*.
    - Tippen Sie auf **Käufe wiederherstellen**, um den Kauf mit Ihrem Konto zu synchronisieren.


> Weitere Informationen finden Sie im Artikel [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform).


## OsmAnd in der Huawei AppGallery ohne Huawei Mobile Services kaufen und wiederherstellen {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **OsmAnd kaufen**:
   - Aktivieren Sie zunächst *Installation aus unbekannten Quellen* in den Geräteeinstellungen. Diese Option finden Sie normalerweise unter **Einstellungen → Sicherheit**.
   - Installieren Sie die [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), die für die App-Kompatibilität unerlässlich sind.
   - Öffnen Sie anschließend die *Huawei AppGallery* auf der [OsmAnd](https://appgallery.huawei.com/#/app/C101486545)-Seite und laden Sie die App herunter.
   - Zunächst ist nur die kostenlose Version zum Download verfügbar. Um einen Kauf zu tätigen, gehen Sie im OsmAnd *Menü → Einstellungen → Käufe* und wählen Sie den gewünschten Typ aus.
   - Weitere Details finden Sie auf [dieser Seite](https://osmand.net/docs/user/purchases/android#install-application).

2. **Kauf wiederherstellen**:
   - Um Ihren Kauf wiederherzustellen, melden Sie sich in der *Huawei AppGallery* mit demselben Konto an, das mit Ihrem OsmAnd-Kauf verknüpft ist.
   - Überprüfen Sie Ihren Transaktionsverlauf in der [Bestellhistorie der Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Möglicherweise müssen Sie die *Huawei AppGallery* aktualisieren und den Cache leeren, um Probleme zu vermeiden.
   - Um Ihre Käufe wiederherzustellen, folgen Sie in OsmAnd *Menü → Einstellungen → Käufe → Käufe wiederherstellen*.
   - Weitere Informationen finden Sie im Artikel [Android-Käufe](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Anweisungen zur Einrichtung der Huawei Mobile Services.
- Wie man OsmAnd ohne HMS Core kauft.
- Käufe in der Huawei AppGallery wiederherstellen.
-->

## Amazon Store wird geschlossen - was tun? {#amazon-store-is-closing---what-to-do}

Am **20. August 2025** wird Amazon den Amazon Appstore für Android-Geräte schließen. Die offizielle Ankündigung können Sie [hier](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program) nachlesen.

Wenn Sie Käufe über Amazon getätigt haben, müssen Sie Ihre **Abonnements (Pro, Maps+) oder In-App-Käufe (Maps+)** auf eine andere Plattform übertragen.

➡️ Derzeit ist eine [plattformübergreifende Übertragung für Abonnements und In-App-Käufe](../purchases/cross.md) möglich.
❗ **OsmAnd+** (eigenständige App) kann nicht über das OsmAnd Cloud-Konto zwischen Plattformen übertragen werden. Für Unterstützung wenden Sie sich bitte an **support@osmand.net**.

## So stellen Sie den Kauf des Topografie-Plugins (ehemals Höhenlinien) wieder her {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Um das [Topografie-Plugin](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid) wiederherzustellen:

1. Melden Sie sich mit demselben Google Play-Konto an, das Sie zum Kauf des Topografie-Plugins verwendet haben, und installieren Sie [die App](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Wenn die Schaltfläche *Installieren* inaktiv ist, stellen Sie sicher, dass sowohl die Google Play- als auch die OsmAnd-App auf dem neuesten Stand sind. Leeren Sie deren Cache, starten Sie Ihr Gerät neu und versuchen Sie, das Plugin erneut zu installieren.
3. Nach der Installation aktivieren Sie das Topografie-Plugin im *[OsmAnd-Menü → Plugins](../plugins/topography.md)*, laden die benötigten Dateien in den *[Karten und Ressourcen](../start-with/download-maps.md#maps-and-resources)* herunter und aktivieren es über das *[Karte konfigurieren-Menü](../map/configure-map-menu.md)*.


## So erkennen Sie, ob OsmAnd Unlimited aktiv ist {#how-to-identify-if-osmand-unlimited-is-active}

Navigieren Sie zu *Menü → Karten herunterladen* und tippen Sie auf den Kartenzähler (das Feld mit der Beschriftung *Kostenlose Version. X Downloads übrig*). Wenn OsmAnd Unlimited aktiv ist, wird stattdessen der verbleibende Gerätespeicher anstelle der Anzahl der kostenlosen Downloads angezeigt.


## Kann ich die Vollversion von OsmAnd als separate App für iOS erhalten? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Für iOS ist nur eine Version von OsmAnd verfügbar. Um auf die Vollversion zuzugreifen, müssen Sie zusätzliche Funktionen durch In-App-Käufe freischalten.


## Was bedeuten 5 oder 7 kostenlose Downloads? {#what-do-5-or-7-free-downloads-mean}

Sie erhalten 5 kostenlose Downloads auf iOS oder 7 auf Android. Jeder Download, sei es eine Karte, ein Update (Karten-Updates zählen als Downloads), Sprachpakete oder andere Elemente, reduziert die verfügbare Anzahl. Bitte beachten Sie, dass das Entfernen von Elementen aus Ihren Downloads die Anzahl der kostenlosen Downloads nicht wiederherstellt.


## Wie erhalte ich zusätzliche Kartendownloads in OsmAnd Free? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Wenn Sie alle 5 (iOS) oder 7 (Android) kostenlosen Downloads verbraucht haben, können Sie 3 zusätzliche Downloads erhalten, indem Sie sich für den *Mailingliste* anmelden. Ein Banner mit der Abonnementoption wird angezeigt, sobald alle kostenlosen Downloads verbraucht wurden.


## Bestätigungscode für OsmAnd Cloud nicht erhalten {#verification-code-for-osmand-cloud-not-received}

Wenn Sie den **Bestätigungscode** beim Erstellen eines **OsmAnd Cloud**-Kontos nicht erhalten, befolgen Sie diese Schritte, um das Problem zu beheben:

1. Überprüfen Sie Ihre E-Mail-Adresse.
    Stellen Sie sicher, dass Sie die **korrekte E-Mail-Adresse** eingegeben haben. Die E-Mail sollte mit derjenigen übereinstimmen, die für den Kauf von **OsmAnd Pro** oder die Registrierung Ihres **OsmAnd Cloud**-Kontos verwendet wurde.

2. Überprüfen Sie die Spam-Ordner.
    Manchmal kann die Bestätigungs-E-Mail als Spam gefiltert werden. Suchen Sie nach einer E-Mail von **OsmAnd** in Ihren Ordnern **Spam**, **Junk** oder **Werbung**.

3. Warten Sie auf die Ankunft des Codes.
    In einigen Fällen kann die E-Mail mit dem Aktivierungscode **verzögert** sein. Vermeiden Sie **mehrere Aktivierungsversuche** innerhalb kurzer Zeit, da dies zu zusätzlichen Verzögerungen führen kann.

4. Versuchen Sie, den Code erneut zu senden.
    Kehren Sie zum **OsmAnd Cloud-Anmeldebildschirm** zurück und wählen Sie **Code erneut senden**, falls verfügbar. Warten Sie einige Minuten, bevor Sie einen weiteren Code anfordern.

5. Überprüfen Sie die Einschränkungen des E-Mail-Servers.
    Wenn Sie eine **Firmen- oder benutzerdefinierte E-Mail-Domain** verwenden, erkundigen Sie sich bei Ihrem **E-Mail-Anbieter**, ob die E-Mail blockiert wird. Erwägen Sie die Verwendung eines anderen E-Mail-Dienstes (z. B. Gmail, Outlook), falls die Probleme weiterhin bestehen.

<!--
## Käufe & Zahlungen {#purchases--payments}

- Kauf wird nicht angezeigt
- Kauf wird nicht wiederhergestellt
- Zahlungsprobleme
- Rückerstattungsrichtlinie
- Schritt-für-Schritt-Lösungen für Probleme mit Käufen.
- Anweisungen zum Leeren des Caches von Google Play, Huawei AppGallery.
- Was tun, wenn der Kauf nicht angezeigt wird oder die Transaktion fehlschlägt.
- Kauf wird nicht angezeigt - Empfehlungen, wie Sie Ihr Konto überprüfen und Ihre Käufe wiederherstellen können.
- Zahlungsprobleme - Anweisungen zur Kontaktaufnahme mit dem Google Play Support bei Zahlungsproblemen.


## FAQ {#faq}

- Kann ich einen Kauf zwischen Android und iOS übertragen?
- Kann ich einen Kauf auf mehreren Geräten verwenden?
- Warum wird der Kauf nicht angezeigt?
- Wo finde ich Zahlungsdetails?
- Kann ich OsmAnd+ zwischen Android und iOS übertragen?
- Wie kann ich Käufe nach der Neuinstallation der App wiederherstellen?
- Was ist OsmAnd Pro und welche Vorteile bietet es?
- Kann ich mein Abonnement ohne Google Play aktivieren?
- Kann ich meinen Kauf mit meiner Familie teilen?
- Wie übertrage ich OsmAnd+ auf ein anderes Telefon?
- Warum wird mein Kauf nach der Neuinstallation nicht angezeigt?
- Warum kann ich meinen Kauf nicht fortsetzen?
- Woher weiß ich, ob mein Abonnement aktiv ist?
- Kann ich einen Kauf auf mehreren Geräten verwenden?
- Kann ich OsmAnd ohne Google Play kaufen?
- Wo finde ich meine Zahlungsdetails?
-->