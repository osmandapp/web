---
source-hash: cab83698857aced02ef3ef257f82a8843950da7227a14609c1fd937c86c5c499
sidebar_position: 2
title:  Ogólne
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Ogólne problemy związane z różnymi funkcjami OsmAnd.

## Zużycie baterii {#battery-consumption}

### OsmAnd wydaje się zużywać zbyt dużo energii z baterii {#osmand-seems-to-use-up-too-much-battery-power}

Pojawiły się zgłoszenia użytkowników o nadmiernym zużyciu energii przez OsmAnd, w przypadkach, gdy OsmAnd był odpowiedzialny za nawet 90% zużycia baterii. Jednak przeprowadziliśmy wiele testów i nie udało nam się odtworzyć takich wyników.  

W normalnych warunkach OsmAnd zużywa energię tylko wtedy, gdy jest to potrzebne do aktywnych funkcji, takich jak nawigacja na żywo czy nagrywanie trasy. Gdy te usługi są aktywne, pojawiają się w obszarze powiadomień systemu Android. Jeśli żadne takie powiadomienie nie jest widoczne, OsmAnd nie zużywa energii w tle.  

Na zużycie baterii wpływa kilka czynników: wiek urządzenia, liczba cykli ładowania, pojemność baterii, temperatura i inne. Poniżej przedstawiono typowe wskaźniki zużycia baterii, oparte na testach przeprowadzonych na urządzeniu średniej klasy:

| Funkcja urządzenia | Zużycie baterii na godzinę |
| :--- | :--- |
| Typowe urządzenie w trybie uśpienia z aktywnymi tylko standardowymi aplikacjami | 0.5 % |
| Ekran włączony (zazwyczaj) | 6 % |
| GPS aktywny (zazwyczaj) | 5 % |
| OsmAnd działający w tle do nagrywania trasy | 0.5 % |
| OsmAnd nie uruchamia żadnej usługi w tle | 0 % |

#### Zużycie baterii przez funkcje OsmAnd {#osmand-function-battery-consumption}

| Funkcja OsmAnd | Zużycie baterii na godzinę |
| :--- | :--- |
| Nagrywanie trasy z wyłączonym ekranem | 6 % |
| Nawigacja z włączonym ekranem | 12 % |

Całkowite zużycie energii powinno wynikać z sumowania tych składników w zależności od sposobu korzystania z OsmAnd. Prosimy o zgłaszanie, jeśli zauważysz znaczne odchylenia od tych typowych wartości.


### Optymalizacja zużycia baterii {#optimizing-battery-consumption}

Podczas korzystania z OsmAnd kilka funkcji może wpływać na zużycie baterii, zwłaszcza podczas takich działań jak nawigacja czy nagrywanie trasy. Oto kilka wskazówek, które pomogą efektywnie zarządzać zużyciem baterii:

- **Sterowanie ekranem podczas nawigacji** (*Android*). Aby oszczędzać energię, można skonfigurować OsmAnd tak, aby ekran pozostawał wyłączony podczas nawigacji, chyba że nastąpi skręt lub ważne zdarzenie. Jest to szczególnie przydatne podczas nawigacji głosowej. Aby uzyskać więcej szczegółów, zapoznaj się z *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2"/> → [<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)*.

- **Ustawienia nawigacji oszczędzające energię**. Możesz zmniejszyć zużycie baterii, minimalizując częstotliwość odświeżania mapy i ograniczając dokładność GPS. Aby dostosować te ustawienia, przejdź do *Nawigacja → Ustawienia → Nawigacja po trasie*. Więcej informacji można znaleźć w sekcji [oszczędzanie energii podczas nawigacji](../navigation/setup/route-navigation.md#power-saving-tips).

- **Zarządzanie warstwami i szczegółami mapy**. Dezaktywuj niepotrzebne funkcje mapy, takie jak rzeźba terenu 3D, linie konturowe czy cieniowanie wzgórz. Możesz również zmniejszyć liczbę wyświetlanych obiektów (etykiety POI, granice, numery domów itp.) za pomocą menu *Konfiguruj mapę*. Wyłączenie tych warstw pomaga zmniejszyć częstotliwość odświeżania mapy, co obniża zużycie energii.

- **Wyłączanie automatycznego powiększania**. Automatyczne powiększanie podczas nawigacji może powodować częste odświeżanie mapy, co zwiększa zużycie baterii. Wyłączenie tej funkcji może pomóc zmniejszyć zużycie energii. Przejdź do *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*, aby wyłączyć automatyczne powiększanie. Dalsze szczegóły można znaleźć w sekcji [Mapa podczas nawigacji](../navigation/guidance/map-during-navigation.md).

- **Optymalizacja ustawień nagrywania trasy**. Upewnij się, że dostosowałeś dokładność GPS i użycie ekranu podczas nagrywania trasy, aby oszczędzać baterię. Odwiedź sekcję [Rozwiązywanie problemów z nagrywaniem trasy](../troubleshooting/track-recording-issues.md), aby uzyskać więcej wskazówek.


## Prywatność {#privacy}

<!--
Privacy related issues (delete history / check internet usage / permissions).
-->

### Jak usunąć historię wyszukiwania {#how-to-delete-search-history}

Aby usunąć historię wyszukiwania w OsmAnd:

1. Otwórz menu *Wyszukaj*.
2. Przytrzymaj dłużej dowolny wynik wyszukiwania.
3. Wybierz wyniki, które chcesz usunąć, lub użyj opcji *Zaznacz wszystko* w lewym górnym rogu, aby usunąć wszystkie wyniki.
4. Stuknij ikonę *Kosz* w prawym górnym rogu, aby potwierdzić usunięcie.

Bardziej szczegółowe instrukcje dotyczące funkcji wyszukiwania można znaleźć w [tym przewodniku](../search/search-history.md).


## Inne {#other}

### Problem z połączeniem GPS (Android) {#problem-with-the-gps-connection-android}

OsmAnd opiera się na danych o lokalizacji dostarczanych przez urządzenie z systemem Android za pośrednictwem interfejsu Android API.  

Aby rozwiązać problemy z połączeniem GPS, wykonaj następujące kroki:

1. **Zmień źródło lokalizacji**. Wypróbuj różne opcje, takie jak Usługi Google Play lub Android API w *Ustawienia OsmAnd → Źródło lokalizacji*.
2. **Zaktualizuj Google Service API**. Upewnij się, że masz najnowszą wersję z [Google Play](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en&gl=US).
3. **Sprawdź ustawienia lokalizacji Androida**. Przejdź do Ustawień systemu Android i upewnij się, że Dostęp do lokalizacji jest włączony i ustawiony na Wysoką dokładność. Możesz również spróbować wyczyścić pamięć podręczną i ponownie uruchomić urządzenie. Problemy z GPS mogą wystąpić, jeśli budynki lub duże obiekty zakłócają sygnał. Przetestuj działanie GPS, a jeśli sygnał jest słaby, ustaw minimalną dokładność nagrywania na ponad 15 metrów.
4. **Włącz widżet GPS**. Użyj widżetu informacji GPS, aby sprawdzić połączenia z satelitami. Jeśli nie ma połączeń z satelitami, urządzenie nie określi lokalizacji, a liczba satelitów będzie wynosić 0. Więcej szczegółów można znaleźć w [przewodniku po widżecie GPS](../widgets/info-widgets.md#gps-info).
5. **Używaj tylko sygnału GPS**. Ustaw urządzenie tak, aby korzystało tylko z GPS (wyłącz lokalizację opartą na Wi-Fi lub Bluetooth). Instrukcje są dostępne na stronie [Pomocy Google](https://support.google.com/android/answer/3467281?hl=en).
6. **Zainstaluj ponownie OsmAnd**. Jeśli powyższe kroki nie pomogą, spróbuj ponownie zainstalować aplikację OsmAnd, aby usunąć błędne dane i rozwiązać problemy z GPS. Przed wykonaniem tej czynności wyeksportuj wszystkie zapisane dane.
7. **Sprawdź pamięć RAM urządzenia**. Jeśli problem nadal występuje, może to być spowodowane niewystarczającą ilością pamięci, więc upewnij się, że urządzenie ma wystarczającą ilość dostępnej pamięci RAM.


### Problem z niezgodnością adresów e-mail podczas zakupu OsmAnd Pro {#email-mismatch-issue-during-osmand-pro-purchase}

<!-- ???
or this title:
### Resolving payment account and app email sync issues in OsmAnd {#resolving-payment-account-and-app-email-sync-issues-in-osmand}
-->

Jeśli napotkasz problem, w którym adres e-mail powiązany z zakupem OsmAnd Pro nie pasuje do adresu e-mail w aplikacji OsmAnd, wykonaj następujące kroki, aby rozwiązać problem:

1. **Sprawdź konta Google Play i Pay**. Upewnij się, że prawidłowy adres e-mail jest powiązany z Twoimi kontami w Sklepie Google Play i Pay. Proces płatności jest obsługiwany przez te usługi, a niezgodność adresów e-mail może wynikać z tego, że stary adres e-mail jest nadal powiązany z Twoim profilem płatności.

2. **Zweryfikuj adres e-mail w aplikacji OsmAnd**. Sprawdź ponownie adres e-mail w aplikacji OsmAnd, aby upewnić się, że pasuje do Twojego obecnego adresu e-mail w Google Play. Można to zrobić, otwierając aplikację i przechodząc do ustawień konta.

3. **Przywróć zakupy**. Sprawdź dostępność i poprawność swojego zakupu. Aby to zrobić, przejdź do *Menu OsmAnd → Ustawienia → Zakupy*. Jeśli wyświetlane dane nie odpowiadają Twoim oczekiwaniom, spróbuj [Przywrócić zakupy](./purchases_payments.md#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services).

4. **Wyczyść pamięć podręczną i dane aplikacji**. Wyczyść pamięć podręczną i dane aplikacji OsmAnd, przechodząc do *Ustawienia → Aplikacje → OsmAnd → Pamięć → Wyczyść pamięć podręczną i Wyczyść dane* na swoim urządzeniu. Spowoduje to odświeżenie aplikacji i usunięcie wszelkich pozostałych problemów ze starego konta.

5. **Zainstaluj ponownie OsmAnd**. Jeśli wyczyszczenie pamięci podręcznej nie rozwiąże problemu, spróbuj odinstalować i ponownie zainstalować aplikację. Przed wykonaniem tej czynności upewnij się, że wykonałeś kopię zapasową ważnych danych (tras, ulubionych), przechodząc do *Menu → Ustawienia → Eksportuj do pliku*. Ponowna instalacja aplikacji zapewni prawidłowe odświeżenie wszystkich szczegółów konta.

6. **Wyłącz proxy**. Sprawdź ustawienia proxy aplikacji i upewnij się, że proxy jest wyłączone, przechodząc do *Menu → Ustawienia → Ustawienia OsmAnd → Proxy*. Proxy lub VPN mogą zakłócać synchronizację konta.

7. **Zaloguj się ponownie lub użyj wersji internetowej do zarządzania kontem**. Jeśli nadal występują problemy, spróbuj wylogować się i zalogować ponownie, aby odświeżyć połączenie aplikacji z bieżącym kontem. Jeśli napotkasz problemy z usunięciem starego konta w aplikacji, rozważ zarządzanie kontem za pośrednictwem internetowej wersji OsmAnd.