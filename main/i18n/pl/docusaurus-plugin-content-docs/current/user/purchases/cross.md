---
source-hash: 803b22736228c5b37a1814163faeb441138781434f1ba2a3069b7668f1ffe213
sidebar_position: 4
title:  Zakupy międzyplatformowe
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



## Obsługiwane zakupy międzyplatformowe {#supported-cross-platform-purchases}

Następujące produkty OsmAnd obsługują obecnie korzystanie na wielu platformach (Android, iOS i Web):

- Subskrypcja **OsmAnd Pro**  
- Subskrypcja **Maps+**  
- Jednorazowy zakup w aplikacji **Maps+**

Począwszy od **wersji 5.1 OsmAnd**, wydanej z okazji naszych **15. urodzin**, dostęp międzyplatformowy został rozszerzony na **Maps+** (wcześniej znane jako *Unlimited*). Wcześniej tylko subskrypcja [OsmAnd Pro](../personal/osmand-cloud.md#cross-platform) była międzyplatformowa.  

Aby aktywować dostęp międzyplatformowy, zakupy muszą być powiązane z kontem [OsmAnd Cloud](../personal/osmand-cloud.md#login).  
Możesz porównać wszystkie produkty OsmAnd tutaj: [różnice między zakupami](https://osmand.net/docs/user/purchases/android/#difference-between-purchases)

| **Typ produktu**               | **Międzyplatformowy** | **Uwagi**                                                                 |
|-------------------------------|--------------------|--------------------------------------------------------------------------|
| **OsmAnd Pro** (subskrypcja) | ✔                  | Działa po zalogowaniu do OsmAnd Cloud na Androidzie, iOS i w przeglądarce, gdy jest połączone z Chmurą. |
| **Maps+** (subskrypcja)      | ✔                  | Możliwość używania na wszystkich platformach, ale musi być aktywowany przez OsmAnd Cloud **na urządzeniu, na którym dokonano zakupu**.     |
| **Maps+** (zakup jednorazowy) | ✔                  | Możliwość używania na wszystkich platformach, ale musi być aktywowany przez OsmAnd Cloud **na urządzeniu, na którym dokonano zakupu**. |
| **OsmAnd+** (samodzielna aplikacja)  | ✘                  | Domyślnie nieprzenoszalny między platformami, wymaga ręcznej rejestracji zakupu na koncie OsmAnd Cloud. Aby uzyskać pomoc, skontaktuj się z support@osmand.net. |


## Jak to działa {#how-it-works}

Aby korzystać z zakupu **OsmAnd Pro** lub **Maps+** na różnych platformach (Android, iOS lub Web), musisz **połączyć go ze swoim kontem OsmAnd Cloud**.

### Połącz swój zakup {#link-your-purchase}

![Cloud link](@site/static/img/purchases/cloud_activation.png)

Wykonaj ten krok na **urządzeniu, na którym dokonałeś zakupu** (Android lub iOS, wersja 5.0 lub nowsza):

1. Przejdź do swojego konta [OsmAnd Cloud](../personal/osmand-cloud.md#login):  
   _Menu → Ustawienia → OsmAnd Cloud → Utwórz nowe konto / Mam już konto_

2. Po zalogowaniu Twój zakup **Pro** lub **Maps+** zostanie automatycznie połączony z Twoim **kontem Cloud** i oznaczony jako **międzyplatformowy**, *jeśli nie był wcześniej połączony z innym kontem.*



### Aktywuj na innym urządzeniu lub platformie {#activate-on-another-device-or-platform}

![Maps+ cross](@site/static/img/purchases/cross_purchase.png)
![Maps+ cross](@site/static/img/purchases/cross_purchase_1.png)

1. Przejdź do swojego konta [OsmAnd Cloud](../personal/osmand-cloud.md#login):  
   *Menu → Ustawienia → OsmAnd Cloud →* ***Zaloguj się na to samo konto***

2. Następnie przejdź do:  
   *Menu → Ustawienia → Zakupy*  
   Twój połączony zakup **Pro lub Maps+** powinien być teraz dostępny.


### Rozwiązywanie problemów {#troubleshooting}

Jeśli nie widzisz swojego zakupu na liście:

1. Stuknij *Menu → Ustawienia → Zakupy → Przywróć zakupy*  
2. Upewnij się, że jesteś zalogowany na **to samo konto OsmAnd Cloud**, które było używane na oryginalnym urządzeniu.

Jeśli problem nadal występuje, skontaktuj się z **support@osmand.net** i podaj:

- Swój e-mail do konta OsmAnd Cloud.
- Platformy i sklepy z aplikacjami, z których korzystasz.
- Rodzaj zakupu (Pro / Maps+ jednorazowy / subskrypcja Maps+).


### Zakupy i wiele kont {#purchases-and-multiple-accounts}

Zakup międzyplatformowy jest powiązany z kontem OsmAnd Cloud, które zostało ostatnio aktywowane na urządzeniu posiadającym oryginalny dowód zakupu (z App Store lub Google Play). Jeśli wylogujesz się z głównego konta i zalogujesz na nowe na tym urządzeniu, system automatycznie przeniesie licencję na nowe konto. W rezultacie Twoje pierwotne konto OsmAnd Cloud traci status zakupów na innych platformach, ponieważ licencja może być aktywna tylko na jednym koncie OsmAnd Cloud w danym momencie. Więcej informacji znajdziesz [tutaj](../troubleshooting/purchases_payments.md#purchase-association-with-multiple-osmand-cloud-accounts).


## Przykład {#example}

Kupiłeś **Maps+** jako jednorazowy zakup w aplikacji w darmowej wersji OsmAnd ze sklepu [Amazon Appstore](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8).  
Później decydujesz się przejść na iPhone'a i chcesz używać **Maps+** z [wersją OsmAnd na iOS](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257).

Aby aktywować zakup Maps+ na iOS:

1. Otwórz **wersję Amazon** aplikacji OsmAnd na swoim oryginalnym urządzeniu.
2. Zaloguj się na swoje konto [OsmAnd Cloud](../personal/osmand-cloud.md#login):  
   *Menu → Ustawienia → OsmAnd Cloud → Utwórz nowe konto / Mam już konto*
3. Zainstaluj OsmAnd na swoim iPhonie ze sklepu [App Store](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257)
4. Zaloguj się na **to samo konto OsmAnd Cloud** na swoim iPhonie.
5. Przejdź do *Menu → Ustawienia → Zakupy* i potwierdź, że **Maps+** jest widoczne jako aktywne.

To kończy międzyplatformową aktywację Twojego zakupu. Możesz teraz kontynuować korzystanie z **Maps+** na nowym urządzeniu.

Ciesz się korzystaniem z Maps+/Pro na różnych platformach!


## Powiązane artykuły {#related-articles}

- [OsmAnd Cloud](../personal/osmand-cloud.md)  
- [Rozwiązywanie problemów z zakupami](../troubleshooting/purchases_payments.md)  
- [Różnice między zakupami na Androidzie](./android.md#difference-between-purchases-android)
- [Różnice między zakupami na iOS](./ios.md#difference-between-purchases-ios)