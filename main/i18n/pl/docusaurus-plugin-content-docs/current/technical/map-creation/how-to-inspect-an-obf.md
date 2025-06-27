---
source-hash: b53d59fe9eea1205645cb096e0a18766e1c4aa8cb5c9cbb49cd73ff14655af86
title: Jak sprawdzić plik binarny obf
versions: '*'
---

**_Ten artykuł wymaga weryfikacji_**

Jeśli chcesz sprawdzić zawartość pliku obf, musisz pobrać [OsmAndMapCreator](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). Znajdziesz tam aplikację konsolową Inspector (.sh, .bat). Ta aplikacja konsolowa ma opcjonalne parametry [-vmap, -vaddress, -vtransport] i jeden wymagany parametr (wejściowy plik obf). Określając opcjonalne parametry, możesz śledzić wszystkie informacje z pliku obf (uwaga: może być ogromny!).

Przykład i instrukcja krok po kroku dla użytkowników systemu Windows:
- mieć zainstalowane środowisko Java Runtime Environment
- pobierz lub skopiuj dowolną mapę offline Osmand z urządzenia na komputer, umieść ten plik obf najlepiej w folderze ze wszystkimi rozpakowanymi plikami Mapcreator
- Otwórz wiersz polecenia systemu Windows (np. naciskając klawisz Windows i „r”, a następnie wpisz cmd i naciśnij Enter
- przejdź do folderu, w którym rozpakowałeś Osmand-Mapcreator za pomocą polecenia cd i nazwy folderu
- wpisz `dir`, aby sprawdzić, czy jesteś w odpowiednim folderze z plikiem inspector.bat
- wpisz `inspector -h`, aby zobaczyć tekst pomocy
- wpisz `inspector -vaddress nazwa_twojej_mapy.obf \>output.csv`
- jeśli otrzymasz błąd konsoli Java dotyczący braku pamięci lub podobny, edytuj plik inspector.bat, zwiększając liczbę przy parametrze -Xmx512M (lub podobnym) krok po kroku do wyższej wartości
- spróbuj załadować ten (ewentualnie bardzo duży) plik tekstowy CSV do dowolnego edytora lub programu, który może ładować bardzo duże pliki, takiego jak Notepad++... lub spróbuj zaimportować go do dowolnego programu arkusza kalkulacyjnego, takiego jak Excel lub LibreOffice Calc (wybierz TAB jako separator pól)
- użyj dowolnej funkcji wyszukiwania, aby znaleźć nazwy miejsc lub nazwy ulic
