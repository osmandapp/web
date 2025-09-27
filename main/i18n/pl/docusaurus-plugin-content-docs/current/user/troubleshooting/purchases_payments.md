---
source-hash: fc1b2c0235716aa50473c8f887e1a5bd1752fd011931da9e6726f958a0e3fca9
sidebar_position: 2
title:  Zakupy i płatności
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Zakupy międzyplatformowe {#cross-platform-purchases}

**OsmAnd Pro** i **Maps+** (*Wszystkie mapy świata* dla iOS) to **subskrypcje międzyplatformowe** dostępne na Androida i iOS od wersji OsmAnd 5.0. Międzyplatformowość oznacza, że jeśli kupisz subskrypcję, na przykład w jednym ze sklepów na Androida (Google Play, Huawei AppGallery), możesz z niej korzystać również na iOS i w wersji internetowej.

- Z subskrypcji międzyplatformowej można korzystać na wielu urządzeniach i platformach, **jeśli jest ona połączona z tym samym kontem OsmAnd Cloud**.

- Jednorazowe zakupy, takie jak **OsmAnd+** (Android) i zakupy specyficzne dla sklepu, nie mogą być przenoszone między platformami.

- Możesz używać OsmAnd Pro na maksymalnie 6 urządzeniach, nawet jeśli działają na różnych systemach operacyjnych.

- Zawsze upewnij się, że używasz tego samego konta OsmAnd Cloud na wszystkich urządzeniach, aby mieć dostęp do swoich zakupów.

- Więcej szczegółów można znaleźć w artykułach: [Zakupy na Androida](../purchases/android.md), [Zakupy na iOS](../purchases/ios.md), [Zakupy międzyplatformowe](../purchases/cross.md) i [Portal map OsmAnd](../purchases/web.md).


### Jak połączyć zakup z kontem OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Jeśli **nie masz** konta OsmAnd Cloud:

    - Otwórz aplikację OsmAnd na urządzeniu, na którym dokonałeś zakupu.
    - Przejdź do *Menu → Ustawienia → OsmAnd Cloud*.
    - Stuknij **Utwórz nowe konto**.
    - Po utworzeniu konta przejdź do *Menu OsmAnd → Ustawienia → Zakupy*.
    - Stuknij **Przywróć zakupy**, aby połączyć zakup z nowym kontem.

2. Jeśli **masz już** konto OsmAnd Cloud:

    - Upewnij się, że jesteś zalogowany na konto OsmAnd Cloud na urządzeniu, na którym dokonałeś zakupu.  
    - Przejdź do *Menu OsmAnd → Ustawienia → OsmAnd Cloud → Mam już konto*
    - Po zalogowaniu się na swoje konto przejdź do *Menu OsmAnd → Ustawienia → Zakupy*.
    - Stuknij **Przywróć zakupy**, aby zsynchronizować zakup ze swoim kontem.


> Więcej informacji można znaleźć w artykułach [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform) i [Zakupy międzyplatformowe](../purchases/cross.md).


### Powiązanie zakupu z wieloma kontami OsmAnd Cloud {#purchase-association-with-multiple-osmand-cloud-accounts}


Zakup międzyplatformowy, taki jak _Maps+_ i _Pro_, jest powiązany z kontem OsmAnd Cloud, które zostało ostatnio aktywowane na urządzeniu posiadającym oryginalny dowód zakupu (z App Store lub Google Play). Jeśli użytkownik na tym urządzeniu wyloguje się ze swojego głównego konta (`konto OsmAnd Cloud A`) i zaloguje się na nowe (`konto OsmAnd Cloud B`), system OsmAnd automatycznie przeniesie licencję na nowe `konto OsmAnd Cloud B`. W rezultacie Twoje oryginalne konto OsmAnd Cloud traci status zakupów na innych platformach, ponieważ licencja może być aktywna tylko na jednym koncie OsmAnd Cloud w danym momencie.

Technicznie działa to w następujący sposób: sam zakup należy do Twojego Apple ID lub konta Google, a nie do konta OsmAnd. Aplikacja OsmAnd na urządzeniu z zakupem po prostu informuje nasz serwer, które konto OsmAnd Cloud jest aktualnie aktywne. Serwer z kolei przyznaje temu kontu dostęp międzyplatformowy. Dlatego ostatnie konto, które zaloguje się na "głównym" urządzeniu, zawsze staje się posiadaczem licencji.

Aby przywrócić zakup na właściwe konto (`konto OsmAnd Cloud A`), musisz wykonać odwrotną czynność. Na tym samym urządzeniu, na którym dokonano zakupu, musisz wylogować się z nieprawidłowego `konta OsmAnd Cloud B` i zalogować się ponownie na `konto OsmAnd Cloud A`. Ten proces zmusi system do ponownej weryfikacji dowodu zakupu i ponownego powiązania licencji z właściwym `kontem OsmAnd Cloud A`, przywracając jego status międzyplatformowy.

> Więcej informacji można znaleźć w artykule [Zakupy międzyplatformowe](../purchases/cross.md).

## Jak kupić i przywrócić OsmAnd w Huawei AppGallery bez usług mobilnych Huawei {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Kup OsmAnd**:
   - Najpierw włącz *Instaluj z nieznanych źródeł* w ustawieniach urządzenia. Zwykle można znaleźć tę opcję w **Ustawienia → Bezpieczeństwo**.
   - Zainstaluj [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), które są niezbędne do zapewnienia zgodności aplikacji.
   - Następnie otwórz *Huawei AppGallery* na stronie [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) i pobierz aplikację.
   - Początkowo do pobrania dostępna jest tylko wersja bezpłatna. Aby dokonać zakupu, przejdź do *Menu OsmAnd → Ustawienia → Zakupy* i wybierz wymagany typ.
   - Aby uzyskać więcej informacji, odwiedź [tę stronę](https://osmand.net/docs/user/purchases/android#install-application).

2. **Przywróć zakup**:
   - Aby przywrócić zakup, zaloguj się do *Huawei AppGallery* przy użyciu tego samego konta, które jest powiązane z zakupem OsmAnd.
   - Sprawdź historię transakcji w [historii zamówień Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Może być konieczne zaktualizowanie *Huawei AppGallery* i wyczyszczenie pamięci podręcznej, aby uniknąć problemów.
   - Aby przywrócić zakupy, postępuj zgodnie z instrukcjami *Menu → Ustawienia → Zakupy → Przywróć zakupy* w OsmAnd.
   - Aby uzyskać więcej informacji, zobacz artykuł [Zakupy na Androida](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions for setting up Huawei Mobile Services.
- How to buy OsmAnd without HMS Core.
- Restore purchases in the Huawei AppGallery.
-->

## Sklep Amazon jest zamykany - co robić {#amazon-store-is-closing---what-to-do}

**20 sierpnia 2025 r.** Amazon zamknie Amazon Appstore dla urządzeń z systemem Android. Oficjalne ogłoszenie można przeczytać [tutaj](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

Jeśli dokonałeś zakupów przez Amazon, będziesz musiał **przenieść swoje subskrypcje (Pro, Maps+) lub zakupy w aplikacji (Maps+)** na inną platformę.

➡️ Obecnie [przeniesienie międzyplatformowe jest możliwe w przypadku subskrypcji i zakupów w aplikacji](../purchases/cross.md).  
❗ **OsmAnd+** (samodzielna aplikacja) nie może być przenoszona między platformami za pośrednictwem konta OsmAnd Cloud. Aby uzyskać pomoc, skontaktuj się z **support@osmand.net**.

## Jak przywrócić zakup wtyczki Topografia (dawniej Linie konturowe) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Aby przywrócić [wtyczkę Topografia](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Zaloguj się na to samo konto Google Play, którego użyłeś do zakupu wtyczki Topografia i zainstaluj [aplikację](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Jeśli przycisk *Zainstaluj* jest nieaktywny, upewnij się, że aplikacje Google Play i OsmAnd są aktualne. Wyczyść ich pamięć podręczną, uruchom ponownie urządzenie i spróbuj ponownie zainstalować wtyczkę.
3. Po instalacji włącz wtyczkę Topografia w *[Menu OsmAnd → Wtyczki](../plugins/topography.md)*, pobierz wymagane pliki w *[Mapy i zasoby](../start-with/download-maps.md#maps-and-resources)* i aktywuj ją poprzez *[Menu Konfiguruj mapę](../map/configure-map-menu.md)*.


## Jak sprawdzić, czy OsmAnd Unlimited jest aktywny {#how-to-identify-if-osmand-unlimited-is-active}

Przejdź do *Menu → Pobierz mapy* i stuknij licznik map (pole z etykietą *Wersja darmowa. Pozostało X pobrań*). Jeśli OsmAnd Unlimited jest aktywny, na wyświetlaczu pojawi się pozostała pamięć urządzenia zamiast liczby bezpłatnych pobrań.


## Czy mogę uzyskać pełną wersję OsmAnd jako osobną aplikację na iOS? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Na iOS dostępna jest tylko jedna wersja OsmAnd. Aby uzyskać dostęp do pełnej wersji, należy odblokować dodatkowe funkcje poprzez zakupy w aplikacji.


## Co oznacza 5 lub 7 darmowych pobrań? {#what-do-5-or-7-free-downloads-mean}

Masz do dyspozycji 5 darmowych pobrań na iOS lub 7 na Androida. Każde pobranie, niezależnie od tego, czy jest to mapa, aktualizacja (aktualizacje map liczą się jako pobrania), pakiety głosowe czy inne elementy, zmniejsza dostępną liczbę. Pamiętaj, że usunięcie elementów z pobranych nie przywraca liczby bezpłatnych pobrań.


## Jak mogę uzyskać dodatkowe pobrania map w OsmAnd Free? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Jeśli wykorzystałeś wszystkie 5 (iOS) lub 7 (Android) darmowych pobrań, możesz otrzymać 3 dodatkowe pobrania, *subskrybując listę mailingową*. Baner z opcją subskrypcji pojawi się po wykorzystaniu wszystkich darmowych pobrań.


## Nie otrzymano kodu weryfikacyjnego dla OsmAnd Cloud {#verification-code-for-osmand-cloud-not-received}

Jeśli nie otrzymasz **kodu weryfikacyjnego** podczas tworzenia konta **OsmAnd Cloud**, wykonaj następujące kroki, aby rozwiązać problem:  

1. Sprawdź swój adres e-mail.  
    Upewnij się, że wpisałeś **poprawny adres e-mail**. Adres e-mail powinien być zgodny z adresem użytym do zakupu **OsmAnd Pro** lub rejestracji konta **OsmAnd Cloud**.  

2. Sprawdź foldery spamu.  
    Czasami wiadomość e-mail z weryfikacją może zostać przefiltrowana jako spam. Poszukaj wiadomości e-mail od **OsmAnd** w folderach **Spam**, **Śmieci** lub **Oferty**.  

3. Poczekaj na nadejście kodu.  
    W niektórych przypadkach wiadomość e-mail z kodem aktywacyjnym może być **opóźniona**. Unikaj **wielokrotnych prób aktywacji** w krótkim czasie, ponieważ może to spowodować dodatkowe opóźnienia.  

4. Spróbuj ponownie wysłać kod.  
    Wróć do **ekranu logowania OsmAnd Cloud** i wybierz **Wyślij kod ponownie**, jeśli jest dostępny. Poczekaj kilka minut przed zażądaniem kolejnego kodu.  

5. Sprawdź ograniczenia serwera poczty e-mail.  
    Jeśli używasz **firmowej lub niestandardowej domeny e-mail**, skontaktuj się z **dostawcą poczty e-mail**, aby upewnić się, że wiadomość e-mail nie jest blokowana. Rozważ użycie innej usługi poczty e-mail (np. Gmail, Outlook), jeśli problemy będą się powtarzać.

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