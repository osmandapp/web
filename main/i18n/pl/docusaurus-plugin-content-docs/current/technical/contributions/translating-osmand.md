---
source-hash: 393b89f8b1f2e0e68c20954707266d0a590a4377bd6dd4c21ecdbdeb01c7e21b
sidebar_position: 3
---

# Jak przetłumaczyć OsmAnd - Potrzebujemy Twojej Pomocy! {#how-to-translate-osmand---we-need-your-assistance}


Bardzo doceniamy Twoją pomoc w tłumaczeniu OsmAnd! Zapewnienie tłumaczeń tekstu wyświetlanego nie jest bardzo skomplikowane, preferowany sposób dostarczania tłumaczeń ciągów znaków jest opisany tutaj: [OsmAnd @ Hosted Weblate](https://hosted.weblate.org/projects/osmand/).

* Jeśli język, na który chcesz pomóc w tłumaczeniu, nie jest jeszcze tam wymieniony, utwórz zgłoszenie [tutaj](https://github.com/osmandapp/Osmand/issues) (wymaga konta github).
* Istniejące pliki językowe mogą być również modyfikowane poprzez edycję odpowiedniego pliku _strings.xml_ bezpośrednio w naszym kodzie za pomocą mechanizmów github, ale nie jest to preferowany sposób.
* Tylko dla informacji: główne ciągi znaków są przechowywane w [pliku American English strings.xml](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/res/values/strings.xml). Dane ciągów znaków dla ekstraktora danych mapy znajdują się w plikach `swing_messages_{language}.properties` w projekcie [DataExtractionOsm](https://github.com/osmandapp/Osmand/tree/master/DataExtractionOSM/src/net/osmand/swing) **(UWAGA Hardy: link jest uszkodzony!)**.

Dziękujemy za pomoc!

## Często Zadawane Pytania i Odpowiedzi: {#some-frequent-questions-and-answers}

#### P1: Które ciągi znaków powinienem przetłumaczyć? {#q1-which-strings-should-i-translate}
Narzędzie Weblate jest intuicyjne. Tylko jeśli spróbujesz edytować pliki bezpośrednio:
* W `strings.xml` ciągi znaków wyglądają tak: `<string name="shared_string_save_as_gpx">Zapisz jako ślad GPX</string>`. Przetłumacz tylko część `Zapisz trasę jako ślad GPX`.
* W `swing_messages.properties` ciągi znaków wyglądają tak: `IndexCreator.INDEX_CITIES=Indeksowanie miast...`. Przetłumacz tylko prawą część `Indeksowanie miast...`.

#### P2: Nie chcę tworzyć w Weblate ani github, czy mogę po prostu wysłać Wam plik? {#q2-i-dont-want-to-create-in-weblate-or-github-can-i-simply-post-you-the-file}
Tak, możesz wysłać plik e-mailem, ale spróbuj preferowanych sposobów, to proste.

#### P3: Jak sprawdzić, co zmieniło się w pliku __English strings.xml__? {#q3-how-should-i-check-what-has-changed-in-the-english-stringsxml}
Użyj Weblate, jak opisano powyżej, pokaże Ci wszystkie zmiany. Jeśli chcesz ręcznie sprawdzić źródło w porównaniu z Twoim plikiem: Nowe ciągi znaków są zazwyczaj dodawane na początku głównego pliku zasobów językowych. Możesz go pobrać i użyć narzędzia takiego jak pspad lub vim do ich porównania. Możesz również użyć *[blame](https://github.com/osmandapp/Osmand/blame/master/OsmAnd/res/values/strings.xml)* lub historii plików na githubie, aby wyświetlić ostatnie modyfikacje.

## Jakie języki zostaną uwzględnione w OsmAnd? {#what-languages-will-be-included-in-osmand}

> Drodzy tłumacze,
>
> Bardzo dziękuję wszystkim za wysiłki w celu uzupełnienia naszych tłumaczeń języka wyświetlanego, a także za lokalizację OsmAnd w coraz większej liczbie języków na [Weblate](https://hosted.weblate.org/projects/osmand/)!
>
> Proszę zwrócić uwagę na następujące kwestie: Z przyjemnością uwzględnię w menu wyboru języka wyświetlanego OsmAnd każdy nowy język z >10% wskaźnikiem tłumaczenia (oznaczę go jako "niekompletny", dopóki nie osiągnie ~80%). Proszę zgłosić problem z OsmAnd, jeśli potrzebujesz tego, ponieważ sporadycznie obserwuję te dane na Weblate.
>
> Niestety, języki z 3-literowymi kodami ISO 639-2 wydają się obecnie mieć problemy w Androidzie, zobacz np.* [https://code.google.com/p/android/issues/detail?id=49120](https://code.google.com/p/android/issues/detail?id=49120)* [https://code.google.com/p/android/issues/detail?id=106574](https://code.google.com/p/android/issues/detail?id=106574)
> Oznacza to, że niestety, każdy taki język może nie wyświetlać się w menu OsmAnd na Twoim urządzeniu. (Ten problem dotyczy tylko języka używanego w menu aplikacji, a nie na mapie, oczywiście.)
>
> Dziękuję,
> Dr Hardy Mueller