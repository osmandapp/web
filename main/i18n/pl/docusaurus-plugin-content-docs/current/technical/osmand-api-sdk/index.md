---
source-hash: 4d2b414b19a5309ab189a4b85deee780fc65f5fbe7b235b81ae54779300d0e0a

---
# OsmAnd API, SDK - Przykłady {#osmand-api-sdk---samples}
Jeśli chcesz używać OsmAnd jako biblioteki dla swojej aplikacji, możesz rozważyć użycie jej za pośrednictwem SDK lub API. Obecnie te opcje są dostępne tylko dla systemu Android.

Istnieją 2 główne sposoby ponownego wykorzystania mocy OsmAnd w Twojej aplikacji:
- Android OsmAnd AIDL API
- Android OsmAnd Full Library SDK

Cały kod dla 2 przykładów jest dostępny w [pojedynczym repozytorium](https://github.com/osmandapp/osmand-api-demo).

## Przykłady SDK {#sdk-examples}

Oto lista przykładów użycia SDK w Twoim produkcie.

[Prosta mapa](./add_mapview.md) - jak dodać mapę do prostej aplikacji.

## Android OsmAnd AIDL API {#android-osmand-aidl-api}
Główna koncepcja tego podejścia polega na tym, że aplikacja docelowa komunikuje się z OsmAnd za pośrednictwem [AIDL](https://developer.android.com/guide/components/aidl) lub API intencji. OsmAnd posiada bogatą różnorodność metod obsługiwanych przez [interfejs AIDL](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/aidl/IOsmAndAidlInterface.aidl). Istnieje kilka aplikacji zbudowanych przy użyciu tych podejść, a główna koncepcja polega na tym, że aplikacja zawiera kilka ekranów i przycisk „Przejdź do mapy”, a w tle aplikacja całkowicie rekonfiguruje OsmAnd i zapewnia wywołanie zwrotne dla głównych operacji, takich jak nawigacja, pozyskiwanie lokalizacji GPS, a także zawiera elementy interfejsu użytkownika, takie jak widżety / przyciski szuflady, dzięki czemu użytkownik może nawigować z mapy z powrotem do docelowego API.

Lista API jest dość długa i można się z nią zapoznać w [aplikacji demonstracyjnej](https://download.osmand.net/latest-night-build/OsmAnd-api-sample.apk).

**Zalety**
- Brak problemów z licencją - dostępne do wszystkich możliwych celów
- Zawsze wspierane, wersjonowane i utrzymywane przez zespół OsmAnd
- Najłatwiejsza integracja wymaga najmniejszej liczby linii kodu
- Zawsze nie mieszać logiki OsmAnd i logiki biznesowej aplikacji
- Najmniejszy rozmiar (2 MB)

**Wady**
- Wymaga zainstalowania aplikacji OsmAnd obok Twojej aplikacji
- Ograniczona liczba metod w porównaniu do podejścia Full Library SDK
- Ograniczone możliwości brandingu, choć może mieć markowe logo, markowe profile, style map itp. w aplikacji OsmAnd
- Nie można przekazywać kodu i elementów interfejsu użytkownika do OsmAnd, więc cała interakcja może odbywać się tylko poprzez przełączanie ekranów między aplikacjami i wywołania zwrotne

Sprawdź przykład w [repozytorium Github](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample).

## Android OsmAnd Full Library SDK {#android-osmand-full-library-sdk}
Biblioteka OsmAnd Full ponownie wykorzystuje kompletny OsmAnd jako bibliotekę. Zasadniczo cały kod / wszystkie fragmenty interfejsu użytkownika są częścią tej biblioteki, co daje swobodę używania tego, co jest już obecne w OsmAnd, ale wymaga dobrego zrozumienia, jak można połączyć kilka warstw / usług.

**Zalety**
- Nie ma potrzeby instalowania OsmAnd / OsmAnd+
- Wszystkie możliwe funkcje / metody z OsmAnd są dostępne do ponownego użycia
- Nie wymaga dużo własnego kodu do zbudowania bogatej aplikacji

**Wady**
- Brak pełnej dokumentacji
- Ścisła licencja kodu, dokładnie taka sama jak sam kod OsmAnd
- API, które korzysta z serwerów OsmAnd, wymaga bezpośredniej zgody zespołu OsmAnd
- API nie jest stabilne (ponieważ nie jest to API, to w zasadzie wewnętrzna biblioteka)
- Rozmiar 70-150 MB (możliwe zmniejszenie poprzez usunięcie mapy bazowej świata 20 MB). Inne manipulacje rozmiarem mogą być wykonane w zależności od przeznaczenia aplikacji docelowej.

Sprawdź przykład w [repozytorium Github](https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample).
Aplikacja demonstracyjna [OsmAnd-map-sample.apk](https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk).

## Licencja {#license}
Możesz sprawdzić [Licencję OsmAnd](https://osmand.net/help-online/license) i [pełną wersję](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE).