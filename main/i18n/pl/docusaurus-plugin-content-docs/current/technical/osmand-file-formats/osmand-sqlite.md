---
source-hash: 777e1b6ae34dee89414b4c08be679e9d019b5045cbf293b733879b6dfb3cd8db
sidebar_position: 9
---

# Format kafelków SQLite - .sqlite {#tiles-sqlite-format---sqlite}



Format SQLite używany w OsmAnd opiera się na formacie "BigPlanet" SQLite obsługiwanym przez MOBAC. W OsmAnd dodajemy szereg tabel rozszerzających format:

|Tabela|Kolumna|Specyfikacja i cel|
|:----|:-----|:---------------|
|"info"|"url"|Ciąg znaków. Szablon URL do pobierania kafelków z powiększeniem ≣ `{z}` ≣ `{0}`, `{x}` ≣ `{1}`, `{y}` ≣ `{2}`, nazwa serwera ≣ `{rnd}`|
||"randoms"|Ciąg znaków. Nazwy lustrzanych serwerów. Rozdzielone przecinkami. Jedna z tych wartości losowo zastąpi symbol zastępczy `{rdn}` w polu "url".|
||"referer"|Ciąg znaków. Nagłówek HTTP Referer. Używany do pobierania.|
||"rule"|Ciąg znaków. Obsługiwany szablon: 1 (taki sam jak pusty), wms_tile, yandex_traffic. Dodaje specyficzne algorytmy pobierania kafelków. wms_tile używa serwera proxy, takiego jak whoots.mapwarper.net, do obsługi źródeł WMS.|
||"useragent"|Ciąg znaków. Nagłówek HTTP User Agent. Używany do pobierania.|
||"minzoom"|Liczba całkowita. Minimalny poziom powiększenia. Odpowiednia liczba całkowita. (Również odwrócona w przypadku BigPlanet).|
||"maxzoom"|Liczba całkowita. Maksymalny poziom powiększenia. Odpowiednia liczba całkowita. (Również odwrócona w przypadku BigPlanet).|
||"ellipsoid"|Liczba całkowita 0 lub 1. 1 dla Mercatora Eliptycznego (kafelki Yandex). 0 dla zwykłego Sferycznego Mercatora Web (OSM, mapy Google).|
||"inverted\_y"|Liczba całkowita 0 lub 1. 1 dla odwróconej liczby kafelka Y (kafelki Nakarte.me).|
||"timecolumn"|Ciąg znaków "yes" lub "no". Tabela kafelków z kolumną "time" wskazuje, kiedy każdy kafelek został pobrany.|
||"expireminutes"|Liczba całkowita. Określa, czy kafelki mają wygasnąć po podanej liczbie minut. Nadal będą wyświetlane, ale także ponownie pobierane.|
||"tilenumbering"|Ciąg znaków "" lub "BigPlanet". Jeśli "BigPlanet", powiększenie zostanie odwrócone i obliczone jako z = 17 - powiększenie.|
||"tilesize"|Liczba całkowita. Pusta lub 256 lub 512, opcjonalnie, służy do opisania rozmiaru kafelka.|
|"tiles"|"x", "y", "z"|Liczba całkowita. Wskazuje współrzędne Mercatora kafelka. Należy pamiętać, że powiększenie może być odwrócone w przypadku BigPlanet.|
||"image"|Obiekt Blob bajtów obrazu.|
||"time"|Liczba całkowita. Sygnatura czasowa pobrania obrazu.|

Ten format jest również używany przez pliki Hillshade i Slope dystrybuowane przez aplikację OsmAnd.

Klasa obsługująca to to SQLiteTileSource pod adresem lub w pobliżu [https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36).