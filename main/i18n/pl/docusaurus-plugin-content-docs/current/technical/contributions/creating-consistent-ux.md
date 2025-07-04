---
source-hash: 00c5daf74a16f214549f0a88cc1cb9258c0e4c09765d41d21306b6e11418fa8c
sidebar_position: 2
---

# Tworzenie spójnego doświadczenia użytkownika {#creating-a-consistent-user-experience}

Użyteczność naszych złożonych funkcji jest zdecydowanie zwiększona dzięki odpowiedniemu słownictwu i dobrym tłumaczeniom, a także dzięki jak największej spójności. Warto przez chwilę zastanowić się nad wieloma wyrażeniami lub zdaniami. :)

Proszę zwrócić uwagę na następujące kwestie:

## 1. Spójne słownictwo {#1-consistent-wording}

Używaj tylko **jednego wyrażenia** dla danej funkcji, nie mieszaj dwóch możliwych wyrażeń. Przykłady:

* Sprawdź istniejące wyrażenia i użyj ich ponownie w nowych ciągach znaków
* Używaj _"nawigacja"_, a nie _"wyznaczanie trasy"_, konsekwentnie.
* Używaj _"śledzenie"_, a nie _"monitorowanie"_
* Używamy _"pozycja"_ dla określenia miejsca, w którym się znajdujesz, podczas gdy _"lokalizacja"_ odnosi się do dowolnych punktów
* Używamy _"cel podróży"_, a nie _"punkt docelowy"_
* Używamy _"prędkość"_, a nie _"szybkość"_
* Znać różnicę między _"wysokością n.p.m."_ a _"wysokością"_
* Teraz jest _"OsmAnd"_, a nie _"Osmand"_ :)

## 2. Tworzenie tekstu {#2-authoring-text}

* Proszę spróbować ponownie wykorzystać istniejące stałe ciągi znaków w jak największym stopniu, jest to dobre dla pamięci i wydajności.
* Dla często używanych ciągów znaków 'XXX' często mamy `shared_string_XXX`
* Ciągi znaków są często ponownie używane! Zmieniając istniejące ciągi znaków, proszę dwukrotnie sprawdzić wszystkie ich wystąpienia w kodzie
* Niepotrzebny tekst zaśmieca ekrany, nie pomagając zbytnio. Proszę być krótkim i precyzyjnym, dodawać tylko słowa, które przekazują _niezbędne_ informacje.
* Proszę dwukrotnie sprawdzić wygląd słownictwa w aplikacji, w szczególności na urządzeniach o niskiej gęstości pikseli. Zbyt wiele łamań wierszy, ucięty tekst lub rozdmuchane przyciski menu mogą sprawić, że ekran lub okno dialogowe będą bezużyteczne.
* W niektórych przypadkach istnieją konwencje, które warto sprawdzić, zamiast "wynajdywać coś". Jeśli więc 99% komercyjnych systemów nawigacyjnych w Twoim języku ogłasza "dotarłeś do celu", to użycie "dotarłeś tam, gdzie chciałeś" może nie być najlepszym wyborem... :)
* Wyraźnie oznacz wszystkie funkcje, które wymagają dostępu do Internetu, wyrażeniem "online".
* Podstawowym językiem dla OsmAnd jest amerykański angielski. Istnieje folder tłumaczeń dla brytyjskiego angielskiego dla wszystkich wyrażeń i pisowni, które się różnią.

## 3. Renderowanie {#3-rendering}

* Uwaga dotycząca renderowania: Wygląd mapy w naszych stylach map został przetestowany pod kątem użyteczności i widoczności w wielu lokalizacjach map, na wielu urządzeniach i technologiach ekranowych, oraz w różnych warunkach oświetleniowych. _"Spontaniczne ulepszenia"_ renderera są prawie zawsze wątpliwe, mogą co najmniej wymagać więcej badań i testów, niż mogłoby się wydawać... :)