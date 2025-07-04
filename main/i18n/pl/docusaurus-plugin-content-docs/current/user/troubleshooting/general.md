---
source-hash: 0a0e6bbadf34561e82d857c6270b71b1fa26543e35edd9ea4cda96e07711812f
sidebar_position: 2
title: Ogólne
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Ogólne zagadnienia związane z różnymi funkcjami OsmAnd.

## Zużycie baterii {#battery-consumption}

### OsmAnd zużywa zbyt dużo energii baterii {#osmand-seems-to-use-up-too-much-battery-power}

Pojawiły się doniesienia użytkowników o nadmiernym zużyciu baterii przez OsmAnd, z przypadkami, gdzie OsmAnd odpowiadał za nawet 90% zużycia baterii. Przeprowadziliśmy jednak wiele testów i nie udało nam się odtworzyć takich wyników.

W normalnych okolicznościach OsmAnd zużywa energię tylko wtedy, gdy jest to potrzebne do aktywnych funkcji, takich jak nawigacja na żywo lub nagrywanie śladu. Gdy te usługi są aktywne, pojawiają się w obszarze powiadomień Androida. Jeśli takie powiadomienie nie jest widoczne, OsmAnd nie zużywa energii w tle.

Na zużycie baterii wpływa kilka czynników: wiek urządzenia, liczba cykli ładowania, pojemność baterii, temperatura i inne. Poniżej przedstawiono typowe wskaźniki zużycia baterii, oparte na testach przeprowadzonych na urządzeniu średniej klasy:

| Funkcja urządzenia | Zużycie baterii na godzinę |
| :--- | :--- |
| Typowe uśpione urządzenie z aktywnymi tylko standardowymi aplikacjami | 0,5 % |
| Włączony ekran (zazwyczaj) | 6 % |
| Aktywny GPS (zazwyczaj) | 5 % |
| OsmAnd działający w tle do nagrywania śladu | 0,5 % |
| OsmAnd nie uruchamia żadnej usługi w tle | 0 % |

#### Zużycie baterii przez funkcje OsmAnd {#osmand-function-battery-consumption}

| Funkcja OsmAnd | Zużycie baterii na godzinę |
| :--- | :--- |
| Nagrywanie śladu z wyłączonym ekranem | 6 % |
| Nawigacja z włączonym ekranem | 12 % |

Całkowite zużycie energii powinno wynikać z dodania tych składników, w zależności od sposobu korzystania z OsmAnd. Prosimy o zgłaszanie, jeśli zauważysz znaczące odchylenia od tych typowych wartości.

### Optymalizacja zużycia baterii {#optimizing-battery-consumption}

Podczas korzystania z OsmAnd, kilka funkcji może wpływać na zużycie baterii, zwłaszcza podczas aktywności takich jak nawigacja czy nagrywanie śladu. Oto kilka wskazówek, które pomogą efektywnie zarządzać zużyciem baterii:

- **Sterowanie ekranem podczas nawigacji** (*Android*). Aby oszczędzać energię, możesz skonfigurować OsmAnd tak, aby ekran był wyłączony podczas nawigacji, chyba że nastąpi skręt lub ważne wydarzenie. Jest to szczególnie przydatne podczas nawigacji głosowej. Aby uzyskać więcej szczegółów, zapoznaj się z *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Ustawienia nawigacji oszczędzające energię**. Możesz zmniejszyć zużycie baterii, minimalizując częstotliwość odświeżania mapy i ograniczając dokładność GPS. Aby dostosować te ustawienia, przejdź do *Nawigacja → Ustawienia → Nawigacja po trasie*. Aby uzyskać więcej informacji, zapoznaj się z [oszczędzaniem energii podczas nawigacji](../navigation/setup/route-navigation.md#saving-power-during-navigation).

- **Zarządzanie warstwami mapy i szczegółami**. Dezaktywuj niepotrzebne funkcje mapy, takie jak relief 3D, linie konturowe lub cieniowanie wzgórz. Możesz również zmniejszyć liczbę wyświetlanych obiektów (etykiety POI, granice, numery domów itp.) za pomocą menu *Konfiguruj mapę*. Wyłączenie tych warstw pomaga zmniejszyć częstotliwość odświeżania mapy, co obniża zużycie energii.

- **Wyłączenie automatycznego powiększania**. Automatyczne powiększanie podczas nawigacji może powodować częste odświeżanie mapy, co zwiększa zużycie baterii. Wyłączenie tej funkcji może pomóc zmniejszyć zużycie energii. Przejdź do *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*, aby wyłączyć automatyczne powiększanie. Aby uzyskać więcej szczegółów, odwiedź [Mapa podczas nawigacji](../navigation/guidance/map-during-navigation.md).

- **Optymalizacja ustawień nagrywania śladu**. Pamiętaj, aby dostosować dokładność GPS i użycie ekranu podczas nagrywania śladu, aby oszczędzać baterię. Odwiedź sekcję [Rozwiązywanie problemów z nagrywaniem śladu](../troubleshooting/track-recording-issues.md), aby uzyskać więcej wskazówek.

## Prywatność {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Jak usunąć historię wyszukiwania {#how-to-delete-search-history}

Aby usunąć historię wyszukiwania w OsmAnd:

1. Otwórz menu *Wyszukaj*.
2. Długo naciśnij dowolny wynik wyszukiwania.
3. Wybierz wyniki, które chcesz usunąć, lub użyj opcji *Zaznacz wszystko* w lewym górnym rogu, aby usunąć wszystkie wyniki.
4. Naciśnij ikonę *Kosza* w prawym górnym rogu, aby potwierdzić usunięcie.

Aby uzyskać bardziej szczegółowe instrukcje dotyczące funkcji wyszukiwania, możesz zapoznać się z [tym przewodnikiem](../search/search-history.md).

## Inne {#other}

### Problem z połączeniem GPS (Android) {#problem-with-the-gps-connection-android}

OsmAnd opiera się na danych lokalizacyjnych dostarczanych przez Twoje urządzenie z Androidem za pośrednictwem Android API.

Aby rozwiązać problemy z połączeniem GPS, wykonaj następujące kroki:

1. **Zmień źródło lokalizacji**. Wypróbuj różne opcje, takie jak Usługi Google Play lub Android API w *Ustawienia OsmAnd → Źródło lokalizacji*.
2. **Zaktualizuj Google Service API**. Upewnij się, że masz najnowszą wersję z [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Sprawdź ustawienia lokalizacji Androida**. Przejdź do Ustawień systemowych Androida i upewnij się, że Dostęp do lokalizacji jest włączony i ustawiony na Wysoką dokładność. Możesz również spróbować wyczyścić pamięć podręczną i ponownie uruchomić urządzenie. Problemy z GPS mogą wystąpić, jeśli budynki lub duże obiekty zakłócają sygnał. Przetestuj wydajność GPS, a jeśli sygnał jest słaby, ustaw minimalną dokładność nagrywania na ponad 15 metrów.
4. **Włącz widżet GPS**. Użyj widżetu informacji GPS, aby sprawdzić połączenia satelitarne. Jeśli nie ma połączeń satelitarnych, Twoje urządzenie nie określi lokalizacji, a liczba satelitów będzie wynosić 0. Więcej szczegółów można znaleźć w [przewodniku po widżecie GPS](../widgets/info-widgets.md#gps-info-android).
5. **Używaj tylko sygnału GPS**. Ustaw urządzenie tak, aby używało tylko GPS (wyłącz lokalizację opartą na Wi-Fi lub Bluetooth). Instrukcje są dostępne na [Wsparciu Google](https://support.google.com/android/answer/3467281?hl=en).
6. **Zainstaluj ponownie OsmAnd**. Jeśli powyższe kroki nie działają, spróbuj ponownie zainstalować aplikację OsmAnd, aby wyczyścić błędne dane i rozwiązać problemy z GPS. Przedtem wyeksportuj wszystkie swoje zapisane dane.
7. **Sprawdź pamięć RAM urządzenia**. Jeśli problem nadal występuje, może to być spowodowane niewystarczającą ilością pamięci, więc upewnij się, że Twoje urządzenie ma wystarczającą ilość dostępnej pamięci RAM.

### Problem z niezgodnością adresu e-mail podczas zakupu OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Jeśli napotkasz problem, w którym adres e-mail powiązany z Twoim zakupem OsmAnd Pro nie zgadza się z adresem e-mail aplikacji OsmAnd, wykonaj następujące kroki, aby rozwiązać problem:

1. **Sprawdź konta Google Play i Pay**. Upewnij się, że poprawny adres e-mail jest powiązany z Twoimi kontami Google Play Store i Pay. Proces płatności jest obsługiwany przez te usługi, a niezgodność adresu e-mail może wystąpić z powodu starego adresu e-mail nadal powiązanego z Twoim profilem płatności.

2. **Zweryfikuj adres e-mail aplikacji OsmAnd**. Sprawdź ponownie adres e-mail w aplikacji OsmAnd, aby upewnić się, że zgadza się z Twoim aktualnym adresem e-mail Google Play. Można to zrobić, otwierając aplikację i przechodząc do ustawień konta.

3. **Przywróć zakupy**. Sprawdź dostępność i odpowiedniość swojego zakupu. Aby to zrobić, przejdź do *Menu OsmAnd → Ustawienia → Zakupy*. Jeśli wyświetlane dane nie odpowiadają Twoim oczekiwaniom, spróbuj [Przywróć zakupy](./purchases_payments.md#how-to-restore-purchases).

4. **Wyczyść pamięć podręczną i dane aplikacji**. Wyczyść pamięć podręczną i dane aplikacji OsmAnd, przechodząc do *Ustawień urządzenia → Aplikacje → OsmAnd → Pamięć → Wyczyść pamięć podręczną i Wyczyść dane*. Spowoduje to odświeżenie aplikacji i usunięcie wszelkich pozostałych problemów ze starego konta.

5. **Zainstaluj ponownie OsmAnd**. Jeśli wyczyszczenie pamięci podręcznej nie rozwiąże problemu, spróbuj odinstalować i ponownie zainstalować aplikację. Przedtem upewnij się, że wykonałeś kopię zapasową wszelkich ważnych danych (śladów, ulubionych), przechodząc do *Menu → Ustawienia → Eksportuj do pliku*. Ponowna instalacja aplikacji zapewni prawidłowe odświeżenie wszystkich danych konta.

6. **Wyłącz proxy**. Sprawdź ustawienia proxy aplikacji i upewnij się, że proxy jest wyłączone, przechodząc do *Menu → Ustawienia → Ustawienia OsmAnd → Proxy*. Proxy lub VPN mogą zakłócać synchronizację konta.

7. **Zaloguj się ponownie lub użyj sieci Web do zarządzania kontem**. Jeśli nadal masz problemy, spróbuj wylogować się i zalogować ponownie, aby odświeżyć połączenie aplikacji z Twoim aktualnym kontem. Jeśli napotkasz jakiekolwiek problemy z usunięciem starego konta w aplikacji, rozważ zarządzanie kontem za pośrednictwem wersji internetowej OsmAnd.