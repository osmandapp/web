---
source-hash: 7d2329d146d37fabfc8bb2a88931d3b6d8348378e4d02d7a0ec48973e6660cea
sidebar_position: 9
---

# Format katalogu kafelków - .metainfo {#tiles-directory-format---metainfo}

Format Metainfo używany w OsmAnd do przechowywania preferencji warstw kafelków. W OsmAnd dodajemy szereg tabel rozszerzających format:

| Pole | Specyfikacja i przeznaczenie |
| :---- | :--------------- |
| `[url_template]` | Ciąg znaków. Szablon URL do pobierania kafelków z:<br /> zoom: `{0}` lub `{$z}`<br /> x: `{1}` lub `{$x}`, y: `{2}` lub `{$y}`.<br /> Zwróć uwagę na kolejność x / y, może być inna w adresie URL<br /> nazwa serwera - `{rnd}` pobrane z [randoms]<br /> niektóre serwery oczekują quadkey - `{q}`, który powinien być użyty zamiast XYZ<br /> `{bbox}` - ramka ograniczająca, w stopniach, w formacie minDługość,minSzerokość,maxDługość,maxSzerokość, np. `-111.02783203,35.01200204,-111.00585938,35.02999637`<br /> przykłady:<br /> `http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{$z}/{$y}/{$x}`<br /> `http://a{rnd}.ortho.tiles.virtualearth.net/tiles/a{q}.jpeg?g=700`<br /> `https://encdirect.noaa.gov/arcgis/services/encdirect/enc_harbour/MapServer/WmsServer?bbox={bbox}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:4326&width=256&height=256&layers=0,6,11&map=&styles=` |
| `[randoms]` | Ciąg znaków. Nazwy lustrzanych serwerów. Oddzielone przecinkami. Jedna z tych wartości losowo zastąpi symbol zastępczy `{rdn}` w polu "url". |
| `[minzoom]` | Liczba całkowita. Minimalny poziom powiększenia. W regularnym formacie (OSM, Google Maps). |
| `[maxzoom]` | Liczba całkowita. Maksymalny poziom powiększenia. W regularnym formacie (OSM, Google Maps). |
| `[ellipsoid]` | Wartość logiczna "true" lub "false". True dla Mercatora eliptycznego (kafelki Yandex). False dla regularnego sferycznego Mercatora sieciowego (OSM, Google Maps). |
| `[inverted_y]` | Wartość logiczna "true" lub "false". True dla odwróconego numeru kafelka Y (kafelki Nakarte.me). |
| `[tile_size]` | Liczba całkowita 256 lub 512. Rozmiar boku pobieranego kafelka w pikselach. |
| `[img_density]` | Liczba całkowita. Gęstość obrazu kafelka. |
| `[avg_img_size]` | Liczba całkowita. Średni rozmiar obrazu kafelka. |
| `[expiration_time_minutes]` | Liczba całkowita. Określa, czy kafelki mają wygasnąć po podanej liczbie minut. Nadal będą wyświetlane, ale także ponownie pobierane. |

Klasa obsługująca to źródło kafelków znajduje się w lub w pobliżu [View](https://github.com/osmandapp/Osmand/blob/master/OsmAnd-java/src/main/java/net/osmand/map/TileSourceManager.java#L28).