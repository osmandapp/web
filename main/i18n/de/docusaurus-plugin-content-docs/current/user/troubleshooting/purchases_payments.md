---
source-hash: fc1b2c0235716aa50473c8f887e1a5bd1752fd011931da9e6726f958a0e3fca9
sidebar_position: 2
title:  Käufe & Zahlungen
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

- Ein plattformübergreifendes Abonnement kann auf mehreren Geräten und Plattformen verwendet werden, **wenn es mit demselben OsmAnd Cloud-Konto verknüpft ist**.

- Einmalkäufe wie **OsmAnd+** (Android) und store-spezifische Käufe sind nicht zwischen den Plattformen übertragbar.

- Sie können OsmAnd Pro auf bis zu 6 Geräten verwenden, auch wenn diese unterschiedliche Betriebssysteme haben.

- Stellen Sie immer sicher, dass Sie auf allen Geräten dasselbe OsmAnd Cloud-Konto verwenden, um auf Ihre Käufe zuzugreifen.

- Weitere Details finden Sie unter: [Android-Käufe](../purchases/android.md), [iOS-Käufe](../purchases/ios.md), [Plattformübergreifende Käufe](../purchases/cross.md) und [OsmAnd Kartenportal](../purchases/web.md).


### Wie Sie Ihren Kauf mit dem OsmAnd Cloud-Konto verknüpfen {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Wenn Sie **kein** OsmAnd Cloud-Konto haben:

    - Öffnen Sie die OsmAnd-App auf dem Gerät, auf dem Sie den Kauf getätigt haben.
    - Gehen Sie zu *Menü → Einstellungen → OsmAnd Cloud*.
    - Tippen Sie auf **Neues Konto erstellen**.
    - Nachdem Sie das Konto erstellt haben, gehen Sie zu *OsmAnd Menü → Einstellungen → Käufe*.
    - Tippen Sie auf **Käufe wiederherstellen**, um Ihren Kauf mit einem neuen Konto zu verknüpfen.

2. Wenn Sie **bereits** ein OsmAnd Cloud-Konto haben:

    - Stellen Sie sicher, dass Sie auf dem Gerät, auf dem Sie den Kauf getätigt haben, in Ihrem OsmAnd Cloud-Konto angemeldet sind.
    - Navigieren Sie zu *OsmAnd Menü → Einstellungen → OsmAnd Cloud → Ich habe bereits ein Konto*
    - Nachdem Sie sich in Ihrem Konto angemeldet haben, gehen Sie zu *OsmAnd Menü → Einstellungen → Käufe*.
    - Tippen Sie auf **Käufe wiederherstellen**, um den Kauf mit Ihrem Konto zu synchronisieren.


> Weitere Informationen finden Sie in den Artikeln [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform) und [Plattformübergreifende Käufe](../purchases/cross.md).


### Kaufzuordnung bei mehreren OsmAnd Cloud-Konten {#purchase-association-with-multiple-osmand-cloud-accounts}


Ein plattformübergreifender Kauf, wie _Maps+_ und _Pro_, ist mit dem OsmAnd Cloud-Konto verknüpft, das zuletzt auf dem Gerät aktiviert wurde, auf dem sich der ursprüngliche Kaufbeleg (aus dem App Store oder von Google Play) befindet. Wenn sich ein Benutzer auf diesem Gerät von seinem Hauptkonto (`OsmAnd Cloud-Konto A`) abmeldet und sich bei einem neuen Konto (`OsmAnd Cloud-Konto B`) anmeldet, überträgt das OsmAnd-System die Lizenz automatisch auf das neue `OsmAnd Cloud-Konto B`. Infolgedessen verliert Ihr ursprüngliches OsmAnd Cloud-Konto seinen Kaufstatus auf anderen Plattformen, da die Lizenz immer nur auf einem OsmAnd Cloud-Konto aktiv sein kann.

Technisch funktioniert das so: Der Kauf selbst gehört zu Ihrer Apple-ID oder Ihrem Google-Konto, nicht zu einem OsmAnd-Konto. Die OsmAnd-App auf dem Gerät mit dem Kauf informiert unseren Server lediglich darüber, welches OsmAnd Cloud-Konto gerade aktiv ist. Der Server wiederum gewährt diesem Konto plattformübergreifenden Zugriff. Daher wird immer das Konto, das sich zuletzt auf dem „Hauptgerät“ anmeldet, zum Inhaber der Lizenz.

Um den Kauf auf das richtige Konto (`OsmAnd Cloud-Konto A`) wiederherzustellen, müssen Sie die umgekehrte Aktion durchführen. Auf demselben Gerät, auf dem der Kauf getätigt wurde, müssen Sie sich vom falschen `OsmAnd Cloud-Konto B` abmelden und wieder beim `OsmAnd Cloud-Konto A` anmelden. Dieser Vorgang zwingt das System, den Kaufbeleg erneut zu überprüfen und die Lizenz wieder mit dem richtigen `OsmAnd Cloud-Konto A` zu verknüpfen, wodurch dessen plattformübergreifender Status wiederhergestellt wird.

> Weitere Informationen finden Sie im Artikel [Plattformübergreifende Käufe](../purchases/cross.md).

## Wie man OsmAnd in der Huawei AppGallery ohne Huawei Mobile Services kauft und wiederherstellt {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **OsmAnd kaufen**:
   - Aktivieren Sie zunächst *Installation aus unbekannten Quellen* in den Einstellungen Ihres Geräts. Diese Option finden Sie normalerweise unter **Einstellungen → Sicherheit**.
   - Installieren Sie die [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), die für die App-Kompatibilität unerlässlich sind.
   - Öffnen Sie als Nächstes die *Huawei AppGallery* auf der [OsmAnd](https://appgallery.huawei.com/#/app/C101486545)-Seite und laden Sie die App herunter.
   - Zunächst steht nur die kostenlose Version zum Download zur Verfügung. Um einen Kauf zu tätigen, gehen Sie zu OsmAnd *Menü → Einstellungen → Käufe* und wählen Sie den gewünschten Typ aus.
   - Weitere Details finden Sie auf [dieser Seite](https://osmand.net/docs/user/purchases/android#install-application).

2. **Kauf wiederherstellen**:
   - Um Ihren Kauf wiederherzustellen, melden Sie sich in der *Huawei AppGallery* mit demselben Konto an, das mit Ihrem OsmAnd-Kauf verknüpft ist.
   - Überprüfen Sie Ihren Transaktionsverlauf in der [Bestellhistorie der Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Möglicherweise müssen Sie die *Huawei AppGallery* aktualisieren und den Cache leeren, um Probleme zu vermeiden.
   - Um Ihre Käufe wiederherzustellen, folgen Sie dem Pfad *Menü → Einstellungen → Käufe → Käufe wiederherstellen* in OsmAnd.
   - Weitere Informationen finden Sie im Artikel [Android-Käufe](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions for setting up Huawei Mobile Services.
- How to buy OsmAnd without HMS Core.
- Restore purchases in the Huawei AppGallery.
-->

## Amazon Store schließt - was tun {#amazon-store-is-closing---what-to-do}

Am **20. August 2025** wird Amazon den Amazon Appstore für Android-Geräte einstellen. Die offizielle Ankündigung können Sie [hier](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program) lesen.

Wenn Sie Käufe über Amazon getätigt haben, müssen Sie **Ihre Abonnements (Pro, Maps+) oder In-App-Käufe (Maps+)** auf eine andere Plattform übertragen.

➡️ Derzeit ist eine [plattformübergreifende Übertragung für Abonnements und In-App-Käufe möglich](../purchases/cross.md).
❗ **OsmAnd+** (eigenständige App) kann nicht über das OsmAnd Cloud-Konto zwischen Plattformen übertragen werden. Für Unterstützung wenden Sie sich bitte an **support@osmand.net**.

## Wie man den Kauf des Topografie-Plugins (ehemals Höhenlinien) wiederherstellt {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Um das [Topografie-Plugin](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid) wiederherzustellen:

1. Melden Sie sich mit demselben Google Play-Konto an, mit dem Sie das Topografie-Plugin gekauft haben, und installieren Sie [die App](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Wenn die Schaltfläche *Installieren* inaktiv ist, stellen Sie sicher, dass sowohl die Google Play- als auch die OsmAnd-App auf dem neuesten Stand sind. Leeren Sie deren Cache, starten Sie Ihr Gerät neu und versuchen Sie erneut, das Plugin zu installieren.
3. Aktivieren Sie nach der Installation das Topografie-Plugin im *[OsmAnd-Menü → Plugins](../plugins/topography.md)*, laden Sie die erforderlichen Dateien unter *[Karten & Ressourcen](../start-with/download-maps.md#maps-and-resources)* herunter und aktivieren Sie es über das *[Kartenkonfigurationsmenü](../map/configure-map-menu.md)*.


## Wie erkenne ich, ob OsmAnd Unlimited aktiv ist? {#how-to-identify-if-osmand-unlimited-is-active}

Navigieren Sie zu *Menü → Karten herunterladen* und tippen Sie auf den Kartenzähler (das Feld mit der Aufschrift *Kostenlose Version. X Downloads übrig*). Wenn OsmAnd Unlimited aktiv ist, wird anstelle der Anzahl der kostenlosen Downloads der verbleibende Gerätespeicher angezeigt.


## Kann ich die Vollversion von OsmAnd als separate App für iOS erhalten? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Für iOS gibt es nur eine Version von OsmAnd. Um auf die Vollversion zuzugreifen, müssen Sie zusätzliche Funktionen durch In-App-Käufe freischalten.


## Was bedeuten 5 oder 7 kostenlose Downloads? {#what-do-5-or-7-free-downloads-mean}

Sie haben 5 kostenlose Downloads auf iOS oder 7 auf Android. Jeder Download, sei es eine Karte, ein Update (Kartenupdates zählen als Downloads), Sprachpakete oder andere Elemente, verringert die verfügbare Anzahl. Bitte beachten Sie, dass das Entfernen von Elementen aus Ihren Downloads die Anzahl der kostenlosen Downloads nicht wiederherstellt.


## Wie kann ich zusätzliche Kartendownloads in OsmAnd Free erhalten? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Wenn Sie alle 5 (iOS) oder 7 (Android) kostenlosen Downloads verbraucht haben, können Sie 3 zusätzliche Downloads erhalten, indem Sie sich *für die Mailingliste anmelden*. Ein Banner mit der Abonnementoption erscheint, sobald alle kostenlosen Downloads verbraucht sind.


## Bestätigungscode für OsmAnd Cloud nicht erhalten {#verification-code-for-osmand-cloud-not-received}

Wenn Sie beim Erstellen eines **OsmAnd Cloud**-Kontos den **Bestätigungscode** nicht erhalten, führen Sie die folgenden Schritte aus, um das Problem zu beheben:

1. Überprüfen Sie Ihre E-Mail-Adresse.
    Stellen Sie sicher, dass Sie die **richtige E-Mail-Adresse** eingegeben haben. Die E-Mail sollte mit der übereinstimmen, die Sie für den Kauf von **OsmAnd Pro** oder die Registrierung Ihres **OsmAnd Cloud**-Kontos verwendet haben.

2. Überprüfen Sie die Spam-Ordner.
    Manchmal wird die Bestätigungs-E-Mail als Spam gefiltert. Suchen Sie in Ihren **Spam**-, **Junk**- oder **Werbung**-Ordnern nach einer E-Mail von **OsmAnd**.

3. Warten Sie, bis der Code ankommt.
    In einigen Fällen kann sich die E-Mail mit dem Aktivierungscode **verzögern**. Vermeiden Sie **mehrere Aktivierungsversuche** innerhalb kurzer Zeit, da dies zu zusätzlichen Verzögerungen führen kann.

4. Versuchen Sie, den Code erneut zu senden.
    Kehren Sie zum **OsmAnd Cloud-Anmeldebildschirm** zurück und wählen Sie **Code erneut senden**, falls verfügbar. Warten Sie einige Minuten, bevor Sie einen weiteren Code anfordern.

5. Überprüfen Sie die Einschränkungen des E-Mail-Servers.
    Wenn Sie eine **Unternehmens- oder benutzerdefinierte E-Mail-Domäne** verwenden, erkundigen Sie sich bei Ihrem **E-Mail-Anbieter**, ob die E-Mail blockiert wird. Erwägen Sie die Verwendung eines anderen E-Mail-Dienstes (z. B. Gmail, Outlook), wenn die Probleme weiterhin bestehen.

<!--
## Purchases & Payments {#purchases--payments}

- Purchase Not Showing
- Purchase Not Restoring
- Payment Issues
- Refund Policy
- Step-by-step solutions to problems with purchases.
- Instructions for clearing the cache of Google Play, Huawei AppGallery.
- What to do if the purchase does not appear or the transaction fails.
- Purchase not showing up - recommendations on how to check your account and restore your purchases.
- Payment issues - instructions for contacting Google Play Support in case of paymentissues.


## FAQ {#faq}

- Can I transfer a purchase between Android and iOS?
- Can I use a purchase on multiple devices?
- Why does the purchase not appear?
- Where can I find payment details?
- Can I transfer OsmAnd+ between Android and iOS?
- How can I restore purchases after reinstalling the app?
- What is OsmAnd Pro and what are its advantages?
- Can I activate my subscription without Google Play?
- Can I share my purchase with my family?
- How do I transfer OsmAnd+ to another phone?
- Why doesn't my purchase appear after reinstalling?
- Why can't I resume my purchase?
- How do I know if my subscription is active?
- Can I use one purchase on multiple devices?
- Can I buy OsmAnd without Google Play?
- Where can I find my payment details?
-->