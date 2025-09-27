---
source-hash: 7f2e85f7e22604bcf22bbc6bdb7faf78780ede4bd62e7cd5554ceedacb06dd7d
sidebar_position: 6
title:  Nagrywanie trasy
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Przegląd {#overview}

Ten artykuł omawia problemy z nagrywaniem śladów GPX, które od dłuższego czasu obserwuje się w różnych wersjach systemów Android i iOS. Przez **działanie w tle** rozumiemy sytuację, w której aplikacja OsmAnd nie jest widoczna na pierwszym planie, zwłaszcza gdy ekran urządzenia jest wyłączony (co różni się od wewnętrznej definicji *działania w tle* w urządzeniach).

**Uwagi**:

- Od Androida 11 (grudzień 2020 r.) nie ma już opcji systemowej *Zawsze zezwalaj* na dostęp do lokalizacji w tle, ale **nie ogranicza to** nagrywania śladów przez OsmAnd w tle. Zgodnie z dokumentacją Google, jest to teraz uważane za **użycie na pierwszym planie**, ponieważ wewnętrznie używane jest uprawnienie do korzystania z usługi na pierwszym planie, a powiadomienie systemowe o nagrywaniu śladu jest zawsze widoczne.

- Należy pamiętać, że nowe sformułowania w Androidzie mogą być mylące:

  - **Zezwalaj tylko podczas używania aplikacji** oznacza, że aplikacja może ciągle odbierać dane o lokalizacji, dopóki jest wyświetlana na ekranie lub ma widoczne powiadomienie na pasku powiadomień *Androida*, tak jak ma to miejsce w OsmAnd podczas nawigacji lub zapisu podróży. (Technicznie nazywa się to *trybem pierwszego planu*).

  - **Zezwalaj przez cały czas** z kolei oznacza, że aplikacja może w zasadzie uzyskiwać Twoją lokalizację „niezauważenie”, bez spełnienia żadnego z tych warunków. Jednak *Android* ogranicza częstotliwość dostępu do lokalizacji w tym (*tle*) trybie do około raz na godzinę, co z pewnością nie jest odpowiednim trybem dla aplikacji nawigacyjnej.


## Zarejestrowane ślady są zaszumione {#recorded-tracks-are-noisy}

Istnieją 2 typowe problemy z dokładnością, które prowadzą do *chaotycznego* zapisu śladu.

- Dłuższe stanie w jednym miejscu lub zbyt częste zapisywanie punktów (odpowiadające temu zygzakowanie zawyża prawdziwe wartości).
- Słaby sygnał GPS lub przełączanie na lokalizację opartą na sygnale sieciowym.

Działania zaradcze:

- Wstrzymuj nagrywanie podczas postoju lub użyj filtra *Minimalne przemieszczenie* we wtyczce Zapis podróży.
- Wybierz odpowiedni odstęp czasowy lub odległościowy między zapisywanymi punktami, aby uchwycić krętość trasy, ale nie tworzyć wielu dodatkowych punktów (których rozrzut spowoduje szum i zawyży odległość oraz wahania wysokości).
- Możliwe jest również późniejsze edytowanie śladu i usuwanie *„zaszumionych”* punktów.
- Możesz też użyć ustawień *wtyczki Zapis podróży*, aby filtrować *„zaszumione”* punkty już podczas nagrywania, w oparciu o swoje **doświadczenie** i **urządzenie nagrywające**. Możesz filtrować punkty według różnych kryteriów:
  - Punkty o niskiej lub zerowej prędkości.
  - Punkty o niskiej precyzji (GPS 'hdop').
  - Punkty bliższe niż określony próg w metrach.

- **Usługi Google Play lub Android API**. Możesz zmienić sposób, w jaki OsmAnd odbiera dane o lokalizacji na urządzeniach z Androidem. W [Ustawienia OsmAnd → Źródło lokalizacji](../personal/global-settings.md#location-source) wybierz pomiędzy **Usługami Google Play** a **Android API**. W wielu przypadkach zmiana na **Android API** pomaga poprawić jakość zapisywanych śladów i sprawia, że są one mniej zaszumione.


## Zarejestrowane ślady mają przerwy {#recorded-tracks-have-gaps}

### Konfiguracja OsmAnd do nagrywania trasy {#configuring-osmand-for-track-recording}

- **Zapobiegaj autonomicznemu logowaniu**. Upewnij się, że ustawienie *Zapobiegaj autonomicznemu logowaniu* w menu Wtyczki/Zapis podróży jest wyłączone, aby umożliwić OsmAnd nagrywanie śladów przy wyłączonym ekranie.
- **Zaktualizuj OsmAnd**. Wersje Androida stosują różne strategie w celu zmniejszenia zużycia energii poprzez [zabijanie aplikacji działających w tle](https://dontkillmyapp.com/). Wersja 3.9 lub nowsza używa usługi pierwszego planu, widocznej na pasku powiadomień, [aby utrzymać aplikację działającą w tle](https://dontkillmyapp.com/) na większości wersji Androida. Jest to szczególnie skuteczne na Androidzie 8+ ([Problem #5255](https://github.com/osmandapp/Osmand/issues/5255), [Problem #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Optymalizacja Androida do nagrywania trasy {#optimizing-android-for-track-recording}

Począwszy od Androida 4.4, funkcje oszczędzania energii mogą ograniczać użycie procesora, zmniejszać jasność ekranu i zabijać aplikacje działające w tle, gdy ekran jest wyłączony. Może to wpływać na wydajność OsmAnd podczas użytkowania na zewnątrz, renderowania map i nagrywania śladów. Późniejsze wersje Androida dodały oparte na sztucznej inteligencji mechanizmy oszczędzania energii, takie jak **Bateria adaptacyjna** i **Automatyczne oszczędzanie energii**, wprowadzając dynamiczne i jeszcze mniej przewidywalne zachowanie. Aby uniknąć problemów z nagrywaniem, przynajmniej na początku lub w celach diagnostycznych, **rozważ całkowite wyłączenie funkcji oszczędzania energii**. Użytkownicy zgłaszają, że wpływ na żywotność baterii dla większości urządzeń jest znośny.

- **Wyklucz OsmAnd z *Optymalizacji baterii*.** W *Ustawieniach* swojego urządzenia z Androidem znajdź OsmAnd w sekcji *Aplikacje*, *Aplikacje* lub *Menedżer aplikacji*. Zlokalizuj sekcję *Bateria*, *Oszczędzanie energii* lub *Zużycie energii* i wyklucz OsmAnd z optymalizacji baterii. ([Problem #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Wyłącz tryb *Oszczędzania energii*.** Ten tryb ma duże szanse wpłynąć na/zabić nawet usługi pierwszego planu, takie jak zapis podróży w OsmAnd.

- **Wyłącz *Adaptacyjne oszczędzanie energii*.** Włączenie tej opcji spowoduje zastosowanie ogólnosystemowych zasad opartych na wzorcach użytkowania w celu dezaktywacji/aktywacji powyższego trybu „oszczędzania energii”.

- **Wyłącz *Baterię adaptacyjną*, chyba że regularnie używasz aplikacji OsmAnd.** *Bateria adaptacyjna* działa na zasadzie per-aplikacja, również w oparciu o wzorce użytkowania. Jej wpływ na konkretną aplikację można zmniejszyć, wyłączając tę aplikację z *Optymalizacji baterii* (np. ustawiając na *Niezoptymalizowana*). Jednak *Bateria adaptacyjna* nadal może zabijać usługi pierwszego planu, takie jak zapis podróży w OsmAnd, jeśli urządzenie uzna OsmAnd za aplikację z puli „rzadko używanych”.

### Kontrola zachowania aplikacji działających w tle w iOS {#control-the-behavior-of-ios-background-apps}

iOS może automatycznie zawieszać lub zatrzymywać aplikacje działające w tle, gdy zasoby systemowe są realokowane. OsmAnd nie może obejść tego zachowania. Jeśli nagrywanie śladu zostanie przerwane, gdy urządzenie jest zablokowane, może to pozostawić luki w nagraniu. Możesz edytować te luki za pomocą narzędzia [Planowanie trasy](https://docs.osmand.net/docs/user/plan-route/create-route).

Więcej szczegółów na temat tego, jak iOS obsługuje śledzenie lokalizacji, można znaleźć w dokumentacji Apple [tutaj](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Przetestowane ustawienia zasilania dla Androida 9, 10 i 11 (Hardy, 25.08.2020) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Poniższe ustawienia zasilania zostały pomyślnie przetestowane na Androidzie 9, 10, a później 11 (na urządzeniach Samsung), aby OsmAnd rejestrował ślady bez przerw. Proszę przejrzeć te **10 ustawień** i skonfigurować je odpowiednio:

- (1) **Oszczędzanie energii (tryb)** = WYŁ. (lub *Zoptymalizowany* w Androidzie 10)
- (2) **Adaptacyjne oszczędzanie energii** = WYŁ. (Gdy jest WŁ., tryb oszczędzania energii może być czasami aktywowany, co uniemożliwia logowanie przez OsmAnd.)
- (3) **Bateria adaptacyjna** = WŁ. (I tak nie wpływa na aplikacje wyłączone z optymalizacji baterii, patrz (9) poniżej, **chyba że aplikacja jest używana rzadko**. Dla bezpieczeństwa ustaw na WYŁ.)
- (4) **Usypiaj nieużywane aplikacje** = WŁ. (Ale OsmAnd jest wyłączony z optymalizacji baterii, patrz (9) poniżej!)
- (5) **Automatycznie wyłączaj nieużywane aplikacje** = WYŁ. (Wydaje się, że występuje tylko w Androidzie 9.)
- (6) **Optymalizuj ustawienia** = WYŁ. (W Androidzie 10 w *Pielęgnacja urządzenia / Zaawansowane*, w Androidzie 11 wydaje się, że zniknęło.)
- (7) **Automatyczna optymalizacja (codziennie)** = WŁ. (Nie ma tutaj wpływu.)
- (8) **Automatyczne ponowne uruchamianie (o ustalonych godzinach)** = WYŁ. (Nie ma tutaj wpływu.)
- (9) **Optymalizuj zużycie baterii** (W *Ustawienia Androida / Aplikacje / OsmAnd / Bateria* lub *Ustawienia / Aplikacje / 3 kropki / Dostęp specjalny / Optymalizuj zużycie baterii / Wszystkie / OsmAnd*) = Wyłącz OsmAnd z optymalizacji baterii (bardzo wskazane, chociaż nie jest to konieczne, jeśli aplikacja jest często uruchamiana przez użytkownika).
- (10) **Zezwalaj na aktywność w tle** = WŁ. dla OsmAnd w *Aplikacje / OsmAnd / Bateria* dla Androida 11

Niektóre z tych ustawień oddziałują na siebie, więc bądź dokładny. Najlepiej wyszukiwać powyższe ustawienia po nazwie (z i bez wyrażeń w nawiasach). W zależności od wersji Androida mogą być one rozproszone po różnych *ekranach ustawień Androida*:

- *Pielęgnacja urządzenia*
- *Pielęgnacja urządzenia / 3 kropki / Automatyzacja*
- *Pielęgnacja urządzenia / Zaawansowane*
- *Pielęgnacja urządzenia / Bateria*
- *Pielęgnacja urządzenia / Bateria / Ustawienia*
- *Pielęgnacja urządzenia / Bateria / Zarządzanie energią aplikacji*
- *Pielęgnacja urządzenia / Bateria / Więcej ustawień baterii*


## Jak śledzić przebytą odległość {#how-to-track-traveled-distance}

OsmAnd nie ma specjalnego widżetu podobnego do licznika kilometrów, możesz użyć [wtyczki Zapis podróży](../plugins/trip-recording.md#new-track-recording), aby śledzić przebytą odległość i resetować ją w razie potrzeby.


## OsmAnd 3.9: Problemy z wysokością podczas korzystania z Usług Google Play {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play zmieniło swoją politykę i aby się do niej dostosować, OsmAnd, począwszy od wersji 3.9 (z wyłączeniem wersji Nightly, F-Droid i Huawei), jest zobowiązany do korzystania z Usług Google Play w celu uzyskiwania poprawek lokalizacji podczas działania w tle (czyli, w terminologii Androida, jako usługa pierwszego planu z widocznym powiadomieniem systemowym).

Po tej zmianie wydaje się, że występuje problem z zapisem wysokości: najwyraźniej Usługi Google Play bardzo agresywnie interpolują pomiar wysokości, zobacz [problem na GitHubie #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Ten problem dotyczy Androida 10, być może nie Androida 11. [Problem](https://issuetracker.google.com/issues/180218747) został już zgłoszony na stronie internetowej Google i prawdopodobnie zostanie naprawiony 09-03-2021.

Jako obejście, w [*Ustawienia OsmAnd → Źródło lokalizacji*](../personal/global-settings.md#location-source) można przełączyć źródło lokalizacji z **Usług Google Play** na **Android API**.


## OsmAnd 3.9: Wybudzanie GPS zastąpione ciągłą usługą pierwszego planu (grudzień 2020) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

Od wersji 3.9, gdy wymagane jest nagrywanie śladu lub nawigacja, OsmAnd stale obsługuje GPX za pośrednictwem usługi działającej w tle *Androida*, co jest widoczne jako powiadomienie systemowe *Androida*.

Poprzednia strategia polegająca na używaniu trybu drzemki i okresowego wybudzania GPS została usunięta z naszego kodu (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), zgodnie z nowymi ograniczeniami Google Play dotyczącymi dostępu do lokalizacji w tle. W rezultacie poniższe sekcje (A) i (B) dotyczą tylko wersji OsmAnd wcześniejszych niż 3.9:

**<del> (A) Strategia wybudzania GPS</del>**

- (A1) Gdy OsmAnd jest używany, np. do nawigacji. Utrzymujemy moduł GPS systemu włączony przez cały czas, ponieważ ciągła informacja o lokalizacji jest tutaj kluczowa. Wpływ na zużycie baterii (rząd wielkości) wydaje się wynosić około 5% na godzinę na starszych systemach do Androida 4.4 i 2-3% na nowszych systemach.
- (A2) Do nagrywania śladu w *tle* bez jednoczesnej nawigacji. Przy nagrywaniu z interwałami do 15 sekund również utrzymujemy GPS włączony, inne strategie nie zaoszczędzą dużo energii baterii.
- (A3) Dla interwałów >=30 sekund, włączamy GPS tylko dla każdego punktu próbkowania. Ma to zauważalny wpływ na dokładność zapisywanych punktów, ale zmniejsza zużycie baterii do rzędu 1,2% na godzinę przy 30-sekundowym nagrywaniu śladu.

**<del> (B) Problemy z wybudzaniem GPS</del>**

Aby osiągnąć wybudzanie GPS, do tej pory używaliśmy Android Alarm Manager do okresowego wybudzania urządzenia (również z trybu drzemki, który został wprowadzony w Androidzie 6). Nowe wersje Androida wprowadziły następujące problemy:

- **(B1) `setRepeating()` Alarm Managera stało się niedokładne począwszy od Androida 4.4:**  
Obejście: Obecnie używamy *setRepeating()* tylko do Androida 4.2, nowej metody *setExact()* od Androida 4.4 i *setExactAndAllowWhileIdle()* dla Androida 8+. ([Problem #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Począwszy od Androida 4.4, systemy ograniczają liczbę powtarzalnych wykonań *setExact()*** do np. raz na 5 lub nawet 15 minut. (Rzeczywista wartość wydaje się być bardzo zależna od urządzenia.)  
Na razie nie znaleziono dobrego rozwiązania. Obecnym obejściem jest to, że nie używamy wybudzania przez Alarm Manager, zamiast tego utrzymujemy GPS zawsze włączony do logowania śladu w tle na urządzeniach z Androidem 5+ dla wszystkich interwałów nagrywania krótszych niż 5 minut. Daje to niezawodne i precyzyjne ślady kosztem większego zużycia baterii. ([Problem #5632](https://github.com/osmandapp/Osmand/issues/5632))