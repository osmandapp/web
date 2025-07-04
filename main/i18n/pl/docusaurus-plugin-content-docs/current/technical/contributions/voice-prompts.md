---
source-hash: aa3fd23b95c957def9ede8e26af7d7b5f4e4f85fb050e7a8c1cfc60a5f8eeb64
sidebar_position: 4
---

# Komunikaty głosowe nawigacji {#navigation-voice-prompts}


## 1. Podstawy {#1-some-basics}

* OsmAnd obsługuje zarówno syntezowane komunikaty głosowe Text-to-Speech (TTS), jak i nagrane głosy.
* Preferowane jest używanie głosu TTS, jest on bardziej elastyczny i może np. również wymawiać nazwy miejsc lub ulic.
* Nagrane głosy są zalecane tylko jako rozwiązanie awaryjne, jeśli Twoje urządzenie w ogóle nie jest w stanie obsługiwać TTS w wybranym języku.
* Aby używać TTS, Twoje urządzenie musi mieć zainstalowany silnik TTS, który obsługuje język, który chcesz usłyszeć. Większość urządzeń ma już jeden lub dwa silniki preinstalowane. Tylko w przypadku mniej popularnych języków może być konieczne znalezienie i zainstalowanie silnika TTS innej firmy.
* To, dla jakich zdarzeń oferowane są komunikaty głosowe i ich synchronizacja, jest regulowane przez kod routera głosowego OsmAnd.
* Ale słownictwo i konstrukcja zdań dla każdego języka są określone w pliku konfiguracyjnym _xx-yy_tts.js_, gdzie xx to kod języka ISO 639-1, a yy to opcjonalny specyfikator regionalny lub podobny. Tylko dla nagranych głosów wymagany jest dodatkowy podfolder _voice_ z wszystkimi niezbędnymi nagranymi wyrażeniami jako pliki _.ogg_.
* Konwencja folderów/plików na urządzeniu to `voice/xx[-yy]-tts/xx[-yy]_tts.js`.

Pliki konfiguracyjne _tts.js_ powinny zawierać nagłówek w następujący sposób, śledząc, które konkretne funkcje zostały zaimplementowane i zweryfikowane dla danego pliku:

```
// ZAINSTALOWANE (X) lub BRAKUJĄCE ( ) FUNKCJE, (N/A) jeśli nie są potrzebne w tym języku:
//
// (X) Podstawowe komunikaty nawigacyjne: trasa (ponownie) obliczona (z obsługą odległości i czasu), zakręty, ronda, zawracanie, prosto/kontynuuj, przybycie
// (X) Ogłaszanie nazw pobliskich punktów (cel / pośredni / punkt trasy GPX / ulubione / POI)
// (X) Komunikaty ostrzegawcze: RADAR; OGRANICZENIE PRĘDKOŚCI; KONTROLA GRANICZNA; KOLEJ; ZMNIEJSZENIE RUCHU; BRAMKA POBORU OPŁAT; STOP; PIESZY; MAKSYMALNA; TUNEL
// (X) Inne komunikaty: utrata GPS, poza trasą, powrót na trasę
// (X) Obsługa nazw ulic i przyimków (na / do) oraz celu ulicy (w kierunku)
// (X) Obsługa jednostek odległości (metry / stopy / jardy)
// (N/A) Gramatyka specjalna: (proszę określić jaka)
// (X) Obsługa ogłaszania zjazdów z autostrad
```

## 2. Języki i warianty głosowe {#2-voice-languages-and-variants}

* Niektóre popularne pakiety komunikatów głosowych są preinstalowane w OsmAnd, inne wymagają jednorazowego pobrania. (Należy pamiętać, że również te preinstalowane wyglądają tak, jakby były pobierane.)
* Dla niektórych języków oferujemy różne warianty regionalne. Słyszenie odpowiedniej regionalnej wymowy zależy od możliwości Twojego urządzenia.
* Dla niektórych głosów oferujemy również dodatkowe warianty z np. krótszymi ('swobodnymi') komunikatami lub niektórymi komunikatami wyciszonymi, aby zmniejszyć gadatliwość.

## 3. Testowanie komunikatów głosowych {#3-testing-of-voice-prompts}

Możesz tymczasowo włączyć wtyczkę deweloperską OsmAnd, a następnie przejść do jej ustawień i użyć przycisku `Testuj komunikaty głosowe`. Udostępnia on kilka przykładów ogłoszeń dla każdego typu komunikatu OsmAnd, używając szerokiego zakresu liczb do testowania formatowania czasu/odległości i wymowy. Podpis przycisku określa podstawową treść komunikatu, dokładne sformułowanie jest określone w testowanym pliku tts.js.
Istnieje również przycisk testowy pokazujący ustawienia urządzenia i możliwości językowe.

Podczas nawigacji, bieżący komunikat głosowy można zawsze wywołać, dotykając widżetu strzałki skrętu.

## 4. Tworzenie nowego języka/wariantu głosu TTS {#4-creating-a-new-tts-voice-languagevariant}

Kilka wskazówek:

- OsmAnd dostarcza tylko słownictwo, kolejność słów, gramatykę w zakresie deklinacji, przypadków, liczby pojedynczej/mnogiej itp., natomiast wymowa jest wykonywana przez silnik TTS, którego używasz na urządzeniu (istnieją wbudowane i firm trzecich)
- Odbywa się to w jednym pliku definicji głosu dla każdego języka. Na githubie pliki znajdują się <a href="https://github.com/osmandapp/OsmAnd-resources/tree/master/voice">tutaj</a>, a powyżej znajdują się konwencje folderów/plików na Twoim urządzeniu lokalnie.
- Plik jest teraz w js (przeniesiony z poprzedniego PROLOGu, aby był bardziej powszechny).
- Aby utworzyć nowy plik konfiguracyjny, zacznij od sklonowania z _en\_tts.js_, tj. użyj go jako szablonu.
- Pomocne może być następnie przejrzenie istniejących plików konfiguracyjnych dla języków o bardziej złożonej gramatyce (np. niemieckiego, czeskiego lub słowackiego), aby zapoznać się z istniejącymi rozwiązaniami dla specjalnej gramatyki, kolejności słów, tworzenia liczb itp. Szczególnie przyjrzyj się językom podobnym do Twojego.
- Możesz przetestować swój własny plik tts (lub swoje ulepszenia do istniejących) samodzielnie lokalnie, przed żądaniem ściągnięcia, po prostu umieść go na swoim urządzeniu z poprawną konwencją pliku/folderu.
