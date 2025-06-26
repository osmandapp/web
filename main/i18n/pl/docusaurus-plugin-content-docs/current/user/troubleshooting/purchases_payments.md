---
source-hash: 212ac4c80976038c3369ba42db713fb837385f1080dd80dd1129601cbee0ccec
sidebar_position: 2
title: Zakupy i płatności
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## Zakupy międzyplatformowe {#cross-platform-purchases}

**OsmAnd Pro** i **Maps+** (*Wszystkie mapy świata* dla iOS) to **subskrypcje międzyplatformowe** dostępne dla systemów Android i iOS, począwszy od OsmAnd 5.0. Międzyplatformowość oznacza, że jeśli kupisz subskrypcję, na przykład w jednym ze sklepów Android (Google Play, Huawei AppGallery), możesz jej również używać na iOS i w wersji internetowej.

- Subskrypcja międzyplatformowa może być używana na wielu urządzeniach i platformach, **jeśli jest połączona z tym samym kontem OsmAnd Cloud**.

- Zakupy jednorazowe, takie jak **OsmAnd+** (Android) i zakupy specyficzne dla sklepu, nie są przenoszalne między platformami.

- Możesz używać OsmAnd Pro na maksymalnie 6 urządzeniach, nawet jeśli działają na różnych systemach operacyjnych.

- Zawsze upewnij się, że używasz tego samego konta OsmAnd Cloud na wszystkich urządzeniach, aby uzyskać dostęp do swoich zakupów.

- Aby uzyskać więcej szczegółów, zobacz: [Zakupy Android](../purchases/android.md), [Zakupy iOS](../purchases/ios.md) i [Portal map OsmAnd](https://www.osmand.net/map).

### Jak połączyć swój zakup z kontem OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Jeśli **nie masz** konta OsmAnd Cloud:

    - Otwórz aplikację OsmAnd na urządzeniu, na którym dokonałeś zakupu.
    - Przejdź do *Menu → Ustawienia → OsmAnd Cloud*.
    - Stuknij **Utwórz nowe konto**.
    - Po utworzeniu konta przejdź do *Menu OsmAnd → Ustawienia → Zakupy*.
    - Stuknij **Przywróć zakupy**, aby połączyć swój zakup z nowym kontem.

2. Jeśli **już masz** konto OsmAnd Cloud:

    - Upewnij się, że jesteś zalogowany na konto OsmAnd Cloud na urządzeniu, na którym dokonałeś zakupu.
    - Przejdź do *Menu OsmAnd → Ustawienia → OsmAnd Cloud → Mam już konto*.
    - Po zalogowaniu się na konto przejdź do *Menu OsmAnd → Ustawienia → Zakupy*.
    - Stuknij **Przywróć zakupy**, aby zsynchronizować zakup z kontem.

> Aby uzyskać więcej informacji, przeczytaj artykuł [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform).

## Jak kupić i przywrócić OsmAnd w Huawei AppGallery bez Huawei Mobile Services {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Kup OsmAnd**:
   - Najpierw włącz *Instaluj z nieznanych źródeł* w ustawieniach urządzenia. Zazwyczaj tę opcję można znaleźć w **Ustawienia → Bezpieczeństwo**.
   - Zainstaluj [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), co jest niezbędne do zgodności aplikacji.
   - Następnie otwórz *Huawei AppGallery* na stronie [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) i pobierz aplikację.
   - Początkowo dostępna jest tylko darmowa wersja. Aby dokonać zakupu, przejdź do OsmAnd *Menu → Ustawienia → Zakupy* i wybierz wymagany typ.
   - Aby uzyskać więcej szczegółów, odwiedź [tę stronę](https://osmand.net/docs/user/purchases/android#install-application).

2. **Przywróć zakup**:
   - Aby przywrócić zakup, zaloguj się do *Huawei AppGallery* za pomocą tego samego konta, które jest powiązane z Twoim zakupem OsmAnd.
   - Sprawdź historię transakcji w [historii zamówień Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Może być konieczne zaktualizowanie *Huawei AppGallery* i wyczyszczenie pamięci podręcznej, aby uniknąć problemów.
   - Aby przywrócić zakupy, postępuj zgodnie z *Menu → Ustawienia → Zakupy → Przywróć zakupy* w OsmAnd.
   - Aby uzyskać więcej informacji, zobacz artykuł [Zakupy Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions for setting up Huawei Mobile Services.
- How to buy OsmAnd without HMS Core.
- Restore purchases in the Huawei AppGallery.
-->

## Sklep Amazon zostanie zamknięty - co robić {#amazon-store-is-closing---what-to-do}

Pracujemy nad rozwiązaniem umożliwiającym przeniesienie zakupów dokonanych za pośrednictwem Amazon na inne platformy.
Obecnie [możliwe jest przeniesienie subskrypcji i zakupów w aplikacji](../purchases/cross.md).
Opcja przeniesienia aplikacji OsmAnd+ jest nadal w fazie rozwoju.

20 sierpnia 2025 roku Amazon zamknie Amazon Appstore dla urządzeń z systemem Android — szczegóły [tutaj](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

## Jak przywrócić zakup wtyczki Topografia (dawniej Linie konturowe) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Aby przywrócić [wtyczkę Topografia](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Zaloguj się na to samo konto Google Play, którego użyto do zakupu wtyczki Topografia, i zainstaluj [aplikację](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Jeśli przycisk *Zainstaluj* jest nieaktywny, upewnij się, że zarówno aplikacje Google Play, jak i OsmAnd są aktualne. Wyczyść ich pamięć podręczną, uruchom ponownie urządzenie i spróbuj ponownie zainstalować wtyczkę.
3. Po instalacji włącz wtyczkę Topografia w *[Menu OsmAnd → Wtyczki](../plugins/topography.md)*, pobierz wymagane pliki w *[Mapy i zasoby](../start-with/download-maps.md#maps-and-resources)* i aktywuj ją za pomocą *[Menu konfiguracji mapy](../map/configure-map-menu.md)*.

## Jak sprawdzić, czy OsmAnd Unlimited jest aktywny {#how-to-identify-if-osmand-unlimited-is-active}

Przejdź do *Menu → Pobierz mapy* i stuknij licznik map (pole oznaczone *Wersja darmowa. Pozostało X pobrań*). Jeśli OsmAnd Unlimited jest aktywny, wyświetlacz pokaże pozostałą pamięć urządzenia zamiast liczby darmowych pobrań.

## Czy mogę uzyskać pełną wersję OsmAnd jako osobną aplikację dla iOS? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Dla iOS dostępna jest tylko jedna wersja OsmAnd. Aby uzyskać dostęp do pełnej wersji, musisz odblokować dodatkowe funkcje poprzez zakupy w aplikacji.

## Co oznaczają 5 lub 7 darmowych pobrań? {#what-do-5-or-7-free-downloads-mean}

Masz prawo do 5 darmowych pobrań na iOS lub 7 na Androida. Każde pobranie, czy to mapy, aktualizacji (aktualizacje map liczą się jako pobrania), pakietów głosowych czy innych elementów, zmniejsza dostępną liczbę. Pamiętaj, że usunięcie elementów z pobranych plików nie przywraca liczby darmowych pobrań.

## Jak mogę uzyskać dodatkowe pobrania map w OsmAnd Free? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Jeśli wykorzystałeś wszystkie 5 (iOS) lub 7 (Android) darmowych pobrań, możesz otrzymać 3 dodatkowe pobrania, *subskrybując listę mailingową*. Baner z opcją subskrypcji pojawi się po wykorzystaniu wszystkich darmowych pobrań.

## Kod weryfikacyjny dla OsmAnd Cloud nie został odebrany {#verification-code-for-osmand-cloud-not-received}

Jeśli nie otrzymasz **kodu weryfikacyjnego** podczas tworzenia konta **OsmAnd Cloud**, wykonaj następujące kroki, aby rozwiązać problem:

1. Sprawdź swój adres e-mail.
    Upewnij się, że podałeś **poprawny adres e-mail**. Adres e-mail powinien być zgodny z tym, którego użyto do zakupu **OsmAnd Pro** lub rejestracji konta **OsmAnd Cloud**.

2. Sprawdź foldery spamowe.
    Czasami e-mail weryfikacyjny może zostać odfiltrowany jako spam. Poszukaj wiadomości e-mail od **OsmAnd** w folderach **Spam**, **Niechciane** lub **Promocje**.

3. Poczekaj na nadejście kodu.
    W niektórych przypadkach e-mail z kodem aktywacyjnym może być **opóźniony**. Unikaj **wielokrotnych prób aktywacji** w krótkim czasie, ponieważ może to spowodować dodatkowe opóźnienia.

4. Spróbuj ponownie wysłać kod.
    Wróć do **ekranu logowania OsmAnd Cloud** i wybierz **Wyślij ponownie kod**, jeśli jest dostępny. Poczekaj kilka minut przed ponownym żądaniem kodu.

5. Zweryfikuj ograniczenia serwera pocztowego.
    Jeśli używasz **firmowej lub niestandardowej domeny e-mail**, skontaktuj się z **dostawcą poczty e-mail**, aby upewnić się, że wiadomość e-mail nie jest blokowana. Rozważ użycie innej usługi e-mail (np. Gmail, Outlook), jeśli problemy nadal występują.

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