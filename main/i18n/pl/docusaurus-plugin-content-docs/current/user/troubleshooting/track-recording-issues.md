---
source-hash: b20d566784f9980fe5e20bf7150aed84f093a993d25503654c0a929b88a08bd6
sidebar_position: 6
title: Nagrywanie śladu
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## Przegląd {#overview}

Ten artykuł dotyczy problemów z nagrywaniem śladów GPX, które od dawna obserwuje się w różnych wersjach systemów Android i iOS. Przez **tło** rozumiemy, że aplikacja OsmAnd nie pojawia się na pierwszym planie, zwłaszcza gdy ekran urządzenia jest wyłączony (co różni się od wewnętrznej definicji *tła* w urządzeniach).

**Uwagi**:

- Od Androida 11 (2020/12) nie ma już opcji uprawnień systemowych *Zawsze zezwalaj* na dostęp do lokalizacji w tle, ale **nie ogranicza to** nagrywania śladów OsmAnd w tle. Zgodnie z dokumentacją Google, jest to teraz uważane za **użycie na pierwszym planie**, ponieważ uprawnienie do korzystania z usługi na pierwszym planie jest używane wewnętrznie, a powiadomienie systemowe o nagrywaniu śladu jest zawsze widoczne.

- Należy pamiętać, że nowe sformułowanie Androida może być mylące:

  - **Zezwalaj tylko podczas używania aplikacji** oznacza, że aplikacja może stale odbierać dane o lokalizacji, dopóki jest wyświetlana na ekranie lub ma widoczne powiadomienie na pasku powiadomień *Androida*, tak jak OsmAnd podczas nawigacji lub nagrywania podróży. (Technicznie nazywa się to *trybem pierwszoplanowym*).

  - **Zezwalaj cały czas** oznacza natomiast, że aplikacja może w zasadzie uzyskać Twoją lokalizację „niezauważenie” bez spełnienia żadnego z tych warunków. Ale *Android* ogranicza częstotliwość dostępu do lokalizacji w tym trybie (*tła*) do czegoś w rodzaju raz na godzinę, co z pewnością nie jest prawidłowym trybem dla aplikacji nawigacyjnej.

## Nagrane ślady są zaszumione {#recorded-tracks-are-noisy}

Istnieją 2 typowe problemy z dokładnością prowadzące do *nieuporządkowanego* nagranego śladu.

- Dłuższe stanie w tym samym miejscu.
- Zły sygnał GPS i przełączanie na lokalizację opartą na sygnale sieciowym.

Działania, które możesz wykonać:

- Możesz uniknąć takich problemów, używając **Pauzy**, aby przerwać nagrywanie w takich warunkach.
- Możliwe jest również późniejsze edytowanie śladu i usunięcie *"zaszumionych"* punktów.
- Możesz też użyć ustawień *Wtyczki do nagrywania podróży*, aby filtrować *"zaszumione"* punkty już podczas nagrywania, w oparciu o Twoje **doświadczenie** i **urządzenie nagrywające**. Możesz filtrować punkty według różnych kryteriów:
  - Punkty o niskiej lub zerowej prędkości.
  - Punkty o złej precyzji (GPS 'hdop').
  - Punkty bliżej niż próg w metrach.

- **Google Services API lub Android API**. Możesz dodatkowo zmienić sposób, w jaki OsmAnd odbiera dane o lokalizacji na urządzeniach z Androidem. W [Ustawienia OsmAnd → Źródło lokalizacji](../personal/global-settings.md#location-source) wybierz między **Usługami Google Play** a **Android API**, w wielu przypadkach zmiana na **Android API** pomaga poprawić nagrane ślady i sprawia, że są mniej zaszumione.

## Nagrane ślady mają luki {#recorded-tracks-have-gaps}

Począwszy od Androida 4.4, funkcje oszczędzania energii mogą ograniczać użycie procesora, zmniejszać jasność ekranu i wyłączać aplikacje działające w tle, gdy ekran jest wyłączony. Może to wpływać na wydajność OsmAnd w zastosowaniach zewnętrznych, renderowanie map i nagrywanie śladów. Aby uniknąć problemów, rozważ całkowite wyłączenie funkcji oszczędzania energii. Z doświadczenia użytkowników wynika, że ma to niewielki wpływ na żywotność baterii w większości urządzeń.

### Konfigurowanie OsmAnd do nagrywania śladów {#configuring-osmand-for-track-recording}

- **Zapobiegaj samodzielnemu logowaniu**. Upewnij się, że ustawienie *Zapobiegaj samodzielnemu logowaniu* w sekcji Wtyczki/Nagrywanie podróży jest dezaktywowane, aby OsmAnd mógł nagrywać ślady przy wyłączonym ekranie.
- **Zaktualizuj OsmAnd**. Wersje Androida używają różnych strategii w celu zmniejszenia zużycia energii poprzez [wyłączanie aplikacji działających w tle](https://dontkillmyapp.com/). Wersja 3.9 lub nowsza używa usługi pierwszoplanowej, widocznej na pasku powiadomień, [aby utrzymać aplikację działającą w tle](https://dontkillmyapp.com/) na większości wersji Androida. Jest to szczególnie skuteczne na Androidzie 8+ ([Problem #5255](https://github.com/osmandapp/Osmand/issues/5255), [Problem #5587](https://github.com/osmandapp/Osmand/issues/5587)).

### Optymalizacja Androida do nagrywania śladów {#optimizing-android-for-track-recording}

- **Wyklucz OsmAnd z optymalizacji zasilania**. W ustawieniach Zasilania lub Oszczędzania energii urządzenia z Androidem znajdź OsmAnd w sekcji *Aplikacje*, *Aplikacje* lub *Menedżer aplikacji*. Znajdź *Oszczędzanie energii* lub *Zużycie energii* i wyklucz OsmAnd z optymalizacji zasilania. ([Problem #5255](https://github.com/osmandapp/Osmand/issues/5255))

- **Wyłącz tryb oszczędzania energii**. Całkowite wyłączenie oszczędzania energii w Androidzie może pomóc, zwłaszcza na starszych wersjach Androida. Może to rozwiązać problemy z wydajnością podczas nagrywania śladów lub nawigacji.

### Kontroluj zachowanie aplikacji w tle w iOS {#control-the-behavior-of-ios-background-apps}

iOS może automatycznie zawieszać lub zatrzymywać aplikacje działające w tle, gdy zasoby systemowe są ponownie przydzielane. OsmAnd nie może zastąpić tego zachowania. Jeśli nagrywanie śladu zostanie przerwane, gdy urządzenie jest zablokowane, może to spowodować luki w nagraniu. Możesz edytować te luki za pomocą narzędzia [Planuj trasę](https://docs.osmand.net/docs/user/plan-route/create-route).

Więcej szczegółów na temat tego, jak iOS obsługuje śledzenie lokalizacji, znajdziesz w dokumentacji Apple [tutaj](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).

### Testowane ustawienia zasilania dla Androida 9, 10 i 11 (Hardy, 2020-08-25) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Następujące ustawienia zasilania zostały pomyślnie przetestowane w systemach Android 9, 10, a później 11 (na urządzeniach Samsung), aby OsmAnd rejestrował ślady bez przerw. Proszę przejrzeć te **10 ustawień** i odpowiednio je ustawić:

- (1) **Oszczędzanie energii (tryb)** = WYŁĄCZONE (lub *Zoptymalizowany* w Androidzie 10)
- (2) **Adaptacyjne oszczędzanie energii** = WYŁĄCZONE (Gdy WŁĄCZONE, czasami może być aktywowany tryb średniego oszczędzania energii, co uniemożliwia OsmAnd logowanie)
- (3) **Adaptacyjna bateria** = WŁĄCZONE (nie powinno to wpływać na aplikacje wyłączone z optymalizacji baterii, patrz (9) poniżej)
- (4) **Uśpij nieużywane aplikacje** = WYŁĄCZONE (WŁĄCZONE prawdopodobnie też jest w porządku, jeśli OsmAnd jest wyłączony z optymalizacji baterii, patrz (9) poniżej)
- (5) **Automatyczne wyłączanie nieużywanych aplikacji** = WYŁĄCZONE (wydaje się, że występuje tylko w Androidzie 9)
- (6) **Optymalizuj ustawienia** = WYŁĄCZONE (w Androidzie 10 w *Pielęgnacja urządzenia / Zaawansowane*, w Androidzie 11 wydaje się, że zniknęło)
- (7) **Automatyczna optymalizacja (codziennie)** = WŁĄCZONE (prawdopodobnie nieistotne)
- (8) **Automatyczne ponowne uruchamianie (o ustalonych godzinach)** = WYŁĄCZONE (prawdopodobnie nieistotne)
- (9) **Optymalizuj zużycie baterii** (w *Aplikacje / OsmAnd / Bateria* lub *Aplikacje / 3 kropki / Dostęp specjalny / Optymalizuj zużycie baterii / Wszystkie / OsmAnd*) = zaleca się wyłączenie OsmAnd z optymalizacji baterii (chociaż nie jest to konieczne na wszystkich urządzeniach)
- (10) **Zezwalaj na aktywność w tle** = WŁĄCZONE dla OsmAnd w *Aplikacje / OsmAnd / Bateria* dla Androida 11

Niektóre z tych ustawień wzajemnie na siebie wpływają, więc bądź precyzyjny. Najlepiej wyszukać powyższe ustawienia po nazwie (z wyrażeniami w nawiasach i bez nich). W zależności od wersji Androida mogą być rozproszone po różnych ekranach *Ustawień Androida*:

- *Pielęgnacja urządzenia*
- *Pielęgnacja urządzenia / 3 kropki / Automatyzacja*
- *Pielęgnacja urządzenia / Zaawansowane*
- *Pielęgnacja urządzenia / Bateria*
- *Pielęgnacja urządzenia / Bateria / Ustawienia*
- *Pielęgnacja urządzenia / Bateria / Zarządzanie zasilaniem aplikacji*
- *Pielęgnacja urządzenia / Bateria / Więcej ustawień baterii*

## Jak śledzić przebytą odległość {#how-to-track-traveled-distance}

OsmAnd nie posiada specjalnego widżetu podobnego do licznika kilometrów, możesz użyć [wtyczki Nagrywanie podróży](../plugins/trip-recording.md#new-track-recording), aby śledzić przebytą odległość i resetować ją w razie potrzeby.

## OsmAnd 3.9: Problemy z wysokością podczas korzystania z Usług Google Play {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play zmieniło swoją politykę i aby się do niej dostosować, OsmAnd, począwszy od wersji 3.9 (z wyłączeniem wersji Nightly, F-Droid i Huawei), jest zobowiązany do korzystania z Usług Google Play w celu uzyskiwania poprawek lokalizacji podczas działania w tle (czyli, w terminologii Androida, jako usługa pierwszoplanowa z widocznym powiadomieniem systemowym).

Po tej zmianie wydaje się, że występuje problem z rejestrowaniem wysokości: Najwyraźniej Usługi Google Play bardzo agresywnie interpolują pomiar wysokości, zobacz [problem na GitHubie #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Ten problem dotyczy Androida 10, prawdopodobnie nie Androida 11. [Problem](https://issuetracker.google.com/issues/180218747) został już zgłoszony na stronie Google i prawdopodobnie zostanie naprawiony 09-03-2021.

Jako obejście, w [*Ustawienia OsmAnd → Źródło lokalizacji*](../personal/global-settings.md#location-source) możesz zmienić źródło lokalizacji z **Usług Google Play** na **Android API**.

## OsmAnd 3.9: Wybudzanie GPS zastąpione ciągłą usługą pierwszoplanową (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

Od wersji 3.9, gdy wymagane jest nagrywanie śladu lub nawigacja, OsmAnd stale obsługuje GPX za pośrednictwem usługi tła *Androida*, co jest widoczne jako powiadomienie systemowe *Androida*.

Poprzednia strategia wykorzystująca tryb drzemki i okresowe wybudzanie GPS została usunięta z naszego kodu (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), zgodnie z nowymi ograniczeniami Google Play dotyczącymi dostępu do lokalizacji w tle. W rezultacie poniższe sekcje (A) i (B) dotyczą tylko wersji OsmAnd sprzed 3.9:

**<del> (A) Strategia wybudzania GPS</del>**

- (A1) Podczas używania OsmAnd, np. Nawigacji. Moduł GPS systemu jest włączony przez cały czas, ponieważ ciągłe informacje o lokalizacji są tutaj kluczowe. Wpływ na zużycie baterii (rząd wielkości) wydaje się wynosić około 5% na godzinę na starszych systemach do Androida 4.4 i 2-3% na nowszych systemach.
- (A2) Do nagrywania śladu w *tle* bez jednoczesnej nawigacji. Do nagrywania z interwałami do 15 sekund również utrzymujemy GPS włączony, inne strategie nie zaoszczędzą dużo energii baterii.
- (A3) Dla interwałów >=30s, włączamy GPS tylko dla każdego punktu próbkowania. Ma to zauważalny wpływ na dokładność zarejestrowanych punktów, ale zmniejsza zużycie baterii do rzędu wielkości 1,2% na godzinę dla 30-sekundowego nagrywania śladu.

**<del> (B) Problemy z wybudzaniem GPS</del>**

Aby osiągnąć wybudzanie GPS, do tej pory używamy Android Alarm Manager do okresowego wybudzania urządzenia (również z trybu Doze, który został wprowadzony w Androidzie 6). Nowe wersje Androida wprowadziły następujące problemy:

- **(B1) setRepeating() Menedżera Alarmów stało się niedokładne począwszy od Androida 4.4:**
  Rozwiązanie: Używamy teraz *setRepeating()* tylko do Androida 4.2, nowej metody *setExact()* począwszy od Androida 4.4 i *setExactAndAllowWhileIdle()* dla Androida 8+. ([Problem #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Począwszy od Androida 4.4, systemy ograniczają liczbę razy, kiedy *setExact()* jest wykonywane wielokrotnie**, np. raz na 5 lub nawet 15 minut. (Rzeczywista wartość wydaje się być bardzo specyficzna dla urządzenia.)
  Nie znaleziono dobrego rozwiązania na razie. Obecne rozwiązanie polega na tym, że nie używamy wybudzania przez Menedżera Alarmów, zamiast tego utrzymujemy GPS zawsze włączony do logowania śladu w tle na urządzeniach z Androidem 5+ dla wszystkich interwałów nagrywania krótszych niż 5 minut. Daje to niezawodne i precyzyjne ślady kosztem większego zużycia baterii. ([Problem #5632](https://github.com/osmandapp/Osmand/issues/5632))