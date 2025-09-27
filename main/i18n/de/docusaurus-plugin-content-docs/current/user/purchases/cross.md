---
source-hash: 803b22736228c5b37a1814163faeb441138781434f1ba2a3069b7668f1ffe213
sidebar_position: 4
title:  Plattformübergreifende Käufe
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



## Unterstützte plattformübergreifende Käufe {#supported-cross-platform-purchases}

Die folgenden OsmAnd-Produkte unterstützen derzeit die Nutzung auf mehreren Plattformen (Android, iOS und Web):

- **OsmAnd Pro**-Abonnement
- **Maps+**-Abonnement
- **Maps+** einmaliger In-App-Kauf

Ab **OsmAnd Version 5.1**, die anlässlich unseres **15-jährigen Jubiläums** veröffentlicht wurde, wurde der plattformübergreifende Zugriff auf **Maps+** (früher bekannt als *Unbegrenzt*) erweitert. Zuvor war nur das [OsmAnd Pro](../personal/osmand-cloud.md#cross-platform)-Abonnement plattformübergreifend.

Um den plattformübergreifenden Zugriff zu aktivieren, müssen Käufe mit Ihrem [OsmAnd Cloud](../personal/osmand-cloud.md#login)-Konto verknüpft werden.
Sie können alle OsmAnd-Produkte hier vergleichen: [Unterschiede zwischen den Käufen](https://osmand.net/docs/user/purchases/android/#difference-between-purchases)

| **Produkttyp** | **Plattformübergreifend** | **Anmerkungen** |
|-------------------------------|--------------------|--------------------------------------------------------------------------|
| **OsmAnd Pro** (Abonnement) | ✔ | Funktioniert nach der Anmeldung bei OsmAnd Cloud auf Android, iOS und im Web, wenn es mit der Cloud verknüpft ist. |
| **Maps+** (Abonnement) | ✔ | Auf allen Plattformen nutzbar, muss aber über OsmAnd Cloud **auf dem Kaufgerät** aktiviert werden. |
| **Maps+** (einmaliger Kauf) | ✔ | Auf allen Plattformen nutzbar, muss aber über OsmAnd Cloud **auf dem Kaufgerät** aktiviert werden. |
| **OsmAnd+** (eigenständige App) | ✘ | Standardmäßig nicht zwischen Plattformen übertragbar, erfordert eine manuelle Registrierung des Kaufs im OsmAnd Cloud-Konto. Für Unterstützung kontaktieren Sie support@osmand.net. |


## So funktioniert es {#how-it-works}

Um Ihren **OsmAnd Pro**- oder **Maps+**-Kauf auf verschiedenen Plattformen (Android, iOS oder Web) zu nutzen, müssen Sie ihn **mit Ihrem OsmAnd Cloud-Konto verknüpfen**.

### Verknüpfen Sie Ihren Kauf {#link-your-purchase}

![Cloud-Verknüpfung](@site/static/img/purchases/cloud_activation.png)

Führen Sie diesen Schritt auf dem **Gerät aus, auf dem Sie den Kauf getätigt haben** (Android oder iOS, Version 5.0 oder höher):

1. Gehen Sie zu Ihrem [OsmAnd Cloud-Konto](../personal/osmand-cloud.md#login):
   _Menü → Einstellungen → OsmAnd Cloud → Neues Konto erstellen / Ich habe bereits ein Konto_

2. Sobald Sie angemeldet sind, wird Ihr **Pro**- oder **Maps+**-Kauf automatisch mit Ihrem **Cloud-Konto** verknüpft und als **plattformübergreifend** markiert, *sofern er nicht bereits mit einem anderen Konto verknüpft war.*



### Auf einem anderen Gerät oder einer anderen Plattform aktivieren {#activate-on-another-device-or-platform}

![Maps+ plattformübergreifend](@site/static/img/purchases/cross_purchase.png)
![Maps+ plattformübergreifend](@site/static/img/purchases/cross_purchase_1.png)

1. Gehen Sie zu Ihrem [OsmAnd Cloud-Konto](../personal/osmand-cloud.md#login):
   *Menü → Einstellungen → OsmAnd Cloud →* ***Mit demselben Konto anmelden***

2. Gehen Sie dann zu:
   *Menü → Einstellungen → Käufe*
   Ihr verknüpfter **Pro- oder Maps+**-Kauf sollte nun verfügbar sein.


### Fehlerbehebung {#troubleshooting}

Wenn Sie Ihren Kauf nicht in der Liste sehen:

1. Tippen Sie auf *Menü → Einstellungen → Käufe → Käufe wiederherstellen*
2. Stellen Sie sicher, dass Sie mit **demselben OsmAnd Cloud-Konto** angemeldet sind, das Sie auf dem ursprünglichen Gerät verwendet haben.

Wenn das Problem weiterhin besteht, kontaktieren Sie **support@osmand.net** und geben Sie Folgendes an:

- Ihre OsmAnd Cloud E-Mail-Adresse.
- Verwendete Plattform(en) und App-Store(s).
- Art des Kaufs (Pro / Maps+ einmalig / Maps+ Abonnement).


### Käufe und mehrere Konten {#purchases-and-multiple-accounts}

Ein plattformübergreifender Kauf ist mit dem OsmAnd Cloud-Konto verknüpft, das zuletzt auf dem Gerät aktiviert wurde, auf dem sich der ursprüngliche Kaufbeleg (aus dem App Store oder von Google Play) befindet. Wenn Sie sich von Ihrem Hauptkonto abmelden und sich auf diesem Gerät bei einem neuen Konto anmelden, überträgt das System die Lizenz automatisch auf das neue Konto. Infolgedessen verliert Ihr ursprüngliches OsmAnd Cloud-Konto seinen Kaufstatus auf anderen Plattformen, da die Lizenz immer nur auf einem OsmAnd Cloud-Konto aktiv sein kann. Weitere Informationen finden Sie [hier](../troubleshooting/purchases_payments.md#purchase-association-with-multiple-osmand-cloud-accounts).


## Beispiel {#example}

Sie haben **Maps+** als einmaligen In-App-Kauf in der kostenlosen Version von OsmAnd aus dem [Amazon Appstore](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8) erworben.
Später entscheiden Sie sich, auf ein iPhone umzusteigen und möchten **Maps+** mit der [OsmAnd iOS-Version](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257) verwenden.

Um Ihren Maps+-Kauf auf iOS zu aktivieren:

1. Öffnen Sie die **Amazon-Version** der OsmAnd-App auf Ihrem ursprünglichen Gerät.
2. Melden Sie sich bei Ihrem [OsmAnd Cloud-Konto](../personal/osmand-cloud.md#login) an:
   *Menü → Einstellungen → OsmAnd Cloud → Neues Konto erstellen / Ich habe bereits ein Konto*
3. Installieren Sie OsmAnd auf Ihrem iPhone aus dem [App Store](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257)
4. Melden Sie sich auf Ihrem iPhone mit **demselben OsmAnd Cloud-Konto** an.
5. Gehen Sie zu *Menü → Einstellungen → Käufe* und bestätigen Sie, dass **Maps+** als aktiv aufgeführt ist.

Damit ist die plattformübergreifende Aktivierung Ihres Kaufs abgeschlossen. Sie können **Maps+** nun auf Ihrem neuen Gerät weiter nutzen.

Viel Spaß bei der plattformübergreifenden Nutzung von Maps+/Pro!


## Verwandte Artikel {#related-articles}

- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Fehlerbehebung bei Käufen](../troubleshooting/purchases_payments.md)
- [Unterschiede zwischen den Käufen Android](./android.md#difference-between-purchases-android)
- [Unterschiede zwischen den Käufen iOS](./ios.md#difference-between-purchases-ios)