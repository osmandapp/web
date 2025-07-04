---
source-hash: 257260cc6f5df1e2457058808df69ed24a8aea6a73cb5b7dee08308979c295ac
title: Tworzenie własnego przewodnika turystycznego
versions: '*'
---
import Translate from '@site/src/components/Translate.js';



**_Ten artykuł wymaga weryfikacji_**

Korzystając z [MapCreatora](../../versions/map-creator.md) OsmAnd, możesz stworzyć swój własny, unikalny [przewodnik turystyczny](../../user/plan-route/travel-guides.md). Jako podstawę przewodnika możesz wykorzystać tekst z dowolnego źródła (od Wikipedii po blog znajomego) i dopasować go do śladu GPX.

### Przygotuj pliki {#prepare-the-files}

Zapisz swój ślad z rozszerzeniem *[.GPX](../osmand-file-formats/osmand-gpx.md)*, a plik tekstowy jako *.html*. Aby pomyślnie utworzyć własny *Przewodnik turystyczny*, nazwy pliku GPX i pliku html muszą być identyczne. Na przykład, *Mediolan.gpx* i *Mediolan.html*.
Ślady GPX można pobrać z Internetu lub utworzyć [za pomocą OsmAnd](../../user/plan-route/create-route.md) lub dowolnego innego narzędzia do tworzenia GPX (Brouter lub podobnego).
Dodaj punkty, które chcesz odwiedzić, do swojej trasy, a następnie zapisz tę trasę jako ślad GPX.

Wybór źródła tekstu do przewodnika zależy wyłącznie od Ciebie. Może to być artykuł na blogu podróżniczym, strona Wikipedii itp. Po prostu skopiuj tekst, wklej go do edytora tekstu i zapisz z rozszerzeniem *.html*. Upewnij się, że nazwa śladu GPX i pliku HTML są identyczne.

### Uruchom narzędzie {#launch-the-tool}

Pobierz najnowszą wersję [OsmAnd MapCreator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) i rozpakuj pliki z archiwum.

:::note
Sposób użycia tego narzędzia opisano w artykule [Tworzenie własnych map rastrowych i wektorowych offline](./create-offline-maps-yourself.md#osmandmapcreator).
:::

Uruchom konsolę i otwórz folder MapCreator.

Przykład: `cd /home/user/OsmAndMapCreator-main/`

Dla *Linuksa* uruchom ./utilites.sh (dla *Windows*: plik utilities.bat) travel-guide-creator.

Po wyświetleniu monitu o podanie ścieżki, wklej ścieżkę do folderu, w którym masz przygotowane pliki.

Przykład: `cd /home/user/MyCustomGuides/`

Nie zalecamy umieszczania plików w samym folderze *OsmAnd MapCreator*. Prosimy zapoznać się z plikiem *Read me* w celu uzyskania szczegółowych instrukcji.

### Importuj pliki {#import-files}

Twój plik powinien zostać utworzony w ciągu kilku sekund. Domyślnie będzie nosił nazwę *travel_guide.sqlite*, ale możesz go zmienić. Upewnij się, że został zapisany z rozszerzeniem *sqlite*. Na przykład, *Mediolan_weekend_tour.sqlite*. Następnie przenieś go na swoje urządzenie. Dokładniej, do folderu, w którym przechowywane są przewodniki turystyczne OsmAnd. Możesz sprawdzić ścieżkę do tego folderu w *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*. Skopiuj plik tam za pomocą dowolnego mobilnego menedżera plików lub podłączając telefon do komputera. Uruchom ponownie aplikację.

### Użyj swojego przewodnika {#use-your-guide}

Po uruchomieniu aplikacji przejdź do menu *[Przewodniki turystyczne](../../user/plan-route/travel-guides.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*). Użyj wyszukiwania, aby wyświetlić nowe artykuły.