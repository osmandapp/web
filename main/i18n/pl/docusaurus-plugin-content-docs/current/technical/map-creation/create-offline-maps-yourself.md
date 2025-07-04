---
source-hash: 0ece8e7a1a25127672614cdf13cd0688a67a4cbb64515cc18d60c278f7999862
title: Tworzenie map rastrowych i wektorowych offline
versions: '*'
intro: Dzięki OsmAndMapCreator istnieje wiele sposobów tworzenia i dostosowywania map rastrowych i wektorowych do własnych potrzeb.
---

## OsmAndMapCreator {#osmandmapcreator}

[**OsmAndMapCreator**](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator) może być używany do samodzielnego tworzenia dowolnych map obsługiwanych przez OsmAnd. Najnowszą wersję można pobrać ze [strony internetowej](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). OsmAndMapCreator posiada interfejs użytkownika do tworzenia map rastrowych i wektorowych. *Aby utworzyć mapę wektorową, potrzebny będzie plik OSM (`*.pbf, *.osm.gz, *.osm.bz2`)*, a *aby utworzyć plik mapy sqlite online, potrzebny będzie `podstawowy adres URL kafelka`*.

### Mapy rastrowe (proste) {#raster-maps-simple}

Po wybraniu kafelków, z których chcesz utworzyć mapę w menu **Źródło kafelków** i pomyślnym załadowaniu ich do OsmAndMapCreator, możesz kliknąć prawym przyciskiem myszy na obszar, który chcesz wstępnie załadować. Następnie możesz utworzyć plik `.sqlitedb` w **Źródło kafelków** → **Utwórz bazę danych sqlite**.

Aby utworzyć mapę wektorową, potrzebny będzie plik OSM (*.pbf, *.osm.gz, *.osm.bz2), a aby utworzyć mapę sqlite online, potrzebny będzie adres URL podstawowego kafelka.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png').default} alt="Pobierz mapy rastrowe" />

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-raster-maps.png').default} alt="Utwórz mapy sqlitedb" />

### Mapy wektorowe (proste) {#vector-maps-simple}

Kroki tworzenia mapy wektorowej za pomocą interfejsu użytkownika OsmAndMapCreator:

1. Plik OSM
    - Pobierz go z [Geofabrik](https://www.geofabrik.de/data/download.html) lub mały eksport z [OpenStreetMap](https://www.openstreetmap.org/export#map=19/48.80672/2.13187)
    - Konwertuj [Shapefile na OSM](https://wiki.openstreetmap.org/wiki/OGR)
    - Wygeneruj [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) samodzielnie za pomocą dowolnych narzędzi programistycznych, możesz kontynuować, konwertując go do [formatu OBF](../osmand-file-formats/osmand-obf.md), który OsmAnd może zrozumieć
2. Zaznacz pola wyboru, czy chcesz wygenerować mapy zawierające dane adresowe / routingowe / transportowe / mapowe
3. Wybierz w **Plik** → **Utwórz .obf z pliku**.
4. Po zakończeniu procesu będziesz mieć plik `.obf` w katalogu roboczym.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-vector-maps.png').default} alt="Utwórz mapy wektorowe" />

Więcej parametrów dotyczących generowania map wektorowych można określić w powłoce `utilities.sh`.

## Mapy wektorowe (skrypt powłoki) {#vector-maps-shell-script}

Najbardziej typowym i najpotężniejszym sposobem tworzenia map używanym przez programistów jest skrypt powłoki `utilities.sh` spakowany w OsmAndMapCreator. Posiada on również wiele innych metod narzędziowych do tworzenia niestandardowych map, takich jak mapa bazowa lub mapa z nazwami regionów i granicami (regions.ocbf).

Przykładowy skrypt:
```
wget -N http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip
wget  https://creator.osmand.net/osm-extract/albania_europe/albania_europe.pbf
unzip OsmAndMapCreator-main.zip -d OsmAndMapCreator
OsmAndMapCreator/utilities.sh generate-poi albania_europe.pbf --chars-build-poi-nameindex=3
```

Skrypt generujący przyjmuje tylko 1 plik OSM do przetworzenia na raz (.pbf, .osm.gz, osm.bz2, .osm) i wiele opcjonalnych parametrów określonych jako `--xxxxxx`.

| Główne polecenie | Opis |
|---|---|
| `generate-obf` | Generuje pełny obf z mapą, adresem, POI, transportem, informacjami o routingu |
| `generate-obf-no-address` | Generuje pełny obf, ale bez informacji adresowych |
| `generate-address` | Generuje mapę tylko z informacjami adresowymi |
| `generate-poi` | Generuje mapę tylko z informacjami POI |
| `generate-map` | Generuje mapę tylko z informacjami o renderowaniu mapy |
| `generate-roads` | Generuje mapę tylko z informacjami o routingu |

Wszystkie dodatkowe parametry można znaleźć w kodzie, jeśli nie są odpowiednio udokumentowane [Main Utilities](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/MainUtilities.java#L219). Wszystkie parametry są opcjonalne!

| Parametry | Opis |
|---|---|
| `--add-region-tags` | Spowalnia proces tworzenia mapy, dodając do każdej drogi znacznik nazwy regionu, w którym została przetworzona. Jest to potrzebne tylko dla mapy bazowej świata lub podczas przetwarzania regionów wielonarodowych, we wszystkich innych przypadkach łatwiej jest mieć odpowiednią nazwę dla pliku, np. germany_... , us_.... Jeśli nie masz tego parametru i nie określisz go, prawdopodobnie zobaczysz niezlokalizowane odznaki dróg / tras transportu publicznego w OsmAnd. |
| `--keep-only-sea-objects` | Usuwa obiekty, które nie są częścią oceanu / morza, jest używany do tworzenia mapy morskiej |
| `--ram-process` | Określa, że tworzenie będzie używać bazy danych RAM SQlite zamiast dysku - [więcej informacji](#ram-to-process-maps). |
| `--srtm=<FOLDER>` | Określa folder z obrazami TIF-DEM, dzięki czemu informacje o wysokości i nachyleniu zostaną zakodowane w drogach |
| `--rendering-types=<FILE>` | Lokalizacja rendering_types.xml z regułami i tagami OSM, które muszą być zakodowane w OBF - [więcej informacji](#custom-vector-map-tags). |
| `--poi-types=<FILE>` | Lokalizacja poi_types.xml z regułami i tagami OSM, które muszą być zakodowane w OBF dla POI - [więcej informacji](#custom-vector-map-tags). |
| `--extra-relations=<FILE>` | Plik OSM z poligonami, takimi jak Strefy Niskiej Emisji, których tagi powinny być propagowane do dróg. |

**Uwaga**: Tworzenie map za pomocą batch.xml jest przestarzałe, proszę używać metod powłoki wymienionych powyżej i łączyć z pobieraniem / cyklami za pomocą standardowych możliwości skryptów powłoki.

### RAM do przetwarzania map {#ram-to-process-maps}

Tworzenie map jest pamięciożerne i intensywne pod względem operacji wejścia/wyjścia. Innymi słowy: trwa bardzo długo i może zabraknąć pamięci! Proszę najpierw sprawdzić generowanie na małych mapach.
Aby przydzielić więcej pamięci JVM, można zadeklarować zmienną środowiskową JAVA_OPTS.
```
export JAVA_OPTS="-Xms256M -Xmx6400M"
OsmAndMapCreator/utilities.sh generate-obf ....
```

Co można zrobić, aby poprawić wydajność:

- Używaj dysków SSD.
- Używaj wielu dysków.
- Używaj przetwarzania "w pamięci".
Jeśli chcesz uniknąć używania miejsca na dysku i używać tylko pamięci RAM, aby przyspieszyć proces - określ parametr `--ram-process`. To przetwarzanie "w pamięci" przyspieszy generowanie mapy o 10-50%, ale wymaga dużo pamięci. 10% do 50% zależy od rozmiaru mapy. Mniejsze mapy mniej korzystają z przetwarzania w pamięci niż większe mapy, ponieważ dostęp do dysku do początkowego odczytu i końcowego zapisu mapy odgrywa większą rolę, podczas gdy większe mapy wymagają więcej "obliczeń".

W normalnym przetwarzaniu "na dysku" plik *nodes.tmp.odb* jest tworzony z pliku *.osm* lub *.osm.pbf*. Ten plik *nodes.tmp.odb* jest plikiem bazy danych sqlite i jest około 15 do 25 razy większy niż oryginalny plik *.osm.pbf*, który pobrałeś z [geofabrik.de](http://download.geofabrik.de/). Tak więc, jeśli oryginalny plik *.osm.pbf* ma 300 MB, plik *nodes.tmp.odb* będzie miał od 5 GB do 6 GB! Zauważ, że mniejsze mapy będą miały współczynnik około 15x, podczas gdy duże mapy (>350 MB) będą miały wzrost przestrzeni od 20x do 25x.

Przy przetwarzaniu "w pamięci" ten plik *nodes.tmp.odb* zostanie utworzony w pamięci roboczej. Będziesz potrzebować "rozmiaru nodes.tmp.odb" + 20-25%. Należy pamiętać, że nie trzeba zwiększać parametru `-Xmx`, ponieważ SQLite w pamięci nie zajmuje pamięci JVM i używa tylko natywnej pamięci operacyjnej.

Przykład: dla pliku *.osm.pbf* o rozmiarze 250 MB zostanie wygenerowany plik *nodes.tmp.odb* o rozmiarze ~4,5 GB.

### Niestandardowa mapa wektorowa (tagi) {#custom-vector-map-tags}

Renderowanie i wyszukiwanie POI w OsmAnd opiera się na informacjach zapisanych w [OBF](../osmand-file-formats/osmand-obf.md). Ma on inną strukturę niż inne formaty OSM i jest zoptymalizowany pod kątem użytku mobilnego. Zawartość można sprawdzić za pomocą [Inspektora binarnego](../map-creation/how-to-inspect-an-obf.md). Trzy najważniejsze części pliku OBF to:

- **Sekcja mapy** używana do renderowania mapy, zdefiniowana przez [Typy renderowania](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml)
- **Sekcja POI** używana do wyszukiwania POI i informacji o obiektach, zdefiniowana przez [Typy POI](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml)
- **Sekcja routingu** używana do routingu, zdefiniowana przez [Typy routingu](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) - ten sam plik co typy renderowania, ale ma własną sekcję `<category name="routing"> - routing_type`.

`rendering_types.xml` i `poi_types.xml` mogą być nadpisane podczas procesu tworzenia mapy w ustawieniach interfejsu użytkownika OsmAndMapCreator lub jako parametry wiersza poleceń `--rendering-types=<path>`, `--poi-types==<path>` do `utilities.sh generate-obf` (spakowane z OsmAndMapCreator).

- Główny typ obiektu mapy (`<type tag="abandoned:highway" value="track" minzoom="13"/>`) jest rejestrowany dla każdej encji OSM (węzła, drogi lub multipoligonu). Dla jednej encji może być zarejestrowanych wiele głównych typów (np. droga + tramwaj + trasa autobusowa), tag `order` sortuje typy w obrębie encji.
- Dodatkowy typ obiektu mapy (`<type tag="service" value="driveway" minzoom="13" additional="true"/>`) to dodatkowe informacje dołączone do encji OSM, więc jeśli encja OSM nie jest zarejestrowana z głównym typem, nie zostanie zapisana w OBF. Zazwyczaj przechowuje informacje do wyświetlania dodatkowych funkcji, takich jak kolor, gładkość.
- Typ obiektu mapy tekstowej (`<type tag="int_ref" additional="text" minzoom="1" order="32"/>`), przechowuje informacje tekstowe o obiekcie, aby można je było później wyświetlić na mapie.
- `entity_convert` reprezentuje proste skrypty transformacji tagów (`<entity_convert pattern="tag_transform" from_tag="bridge" if_tag1="highway" if_value1="proposed" routing="no"/>`). Jest często używany do łączenia tagów w określone typy, dzięki czemu łatwiej jest je wyświetlać za pomocą niestandardowego stylu renderowania. Pozwala również na transformację tagów specyficznych dla regionu i umożliwia renderowanie różnych funkcji w zależności od kraju.
- Propagacja tagów relacji. OsmAnd nie indeksuje obiektów relacji (z wyjątkiem multipoligonów - przechowywanych jako obiekty obszarowe), ale pozwala na propagowanie, wypychanie tagów z relacji na członków. Oczywiście jeden członek może mieć wiele relacji nadrzędnych i możliwe są konflikty tagów. OsmAnd obsługuje 3 sposoby radzenia sobie z konfliktami:
  - łączy wszystkie tagi jako długi, oddzielony przecinkami ciąg (dobry do renderowania nazw tras autobusowych jako długiego ciągu na drodze - `nameTags`, `namePrefix`).
  - sortuje wartości i zachowuje najwyższą wartość (dobry do renderowania tras lokalnych vs międzynarodowych - `relationGroupSort`, `additionalTags`, `additionalNamePrefix`).
  - generuje unikalne tagi dla każdej relacji (nieużywane na razie, ale przechowuje informacje bez utraty - `relationGroupNameTags`, `relationGroupAdditionalTags`, `relationGroupPrefix`). **Więcej informacji** można znaleźć w [Typach renderowania](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml).

**Czytaj więcej**: zazwyczaj niestandardowe mapy wektorowe są łączone z [niestandardowym stylem renderowania](../osmand-file-formats/osmand-rendering-style.md).

## Mapy rastrowe (zaawansowane) {#raster-maps-advanced}

OSM to duża baza danych map, ale nie zawsze zawiera potrzebne informacje (na przykład o pustyniach). Czasami potrzebne informacje można uzyskać z innych źródeł, takich jak mapy papierowe lub zdjęcia satelitarne.

Istnieją specjalne programy do przygotowania, konwersji, kalibracji wszelkich map źródłowych (map w formacie obrazu, formacie pdf, rastrowych map online) na mapy online OsmAnd.

Poniżej o niektórych z nich.

### MOBAC {#mobac}

Mobile Atlas Creator (MOBAC) to program open source (GPL) do tworzenia atlasów offline. Mobile Atlas Creator może wykorzystywać dużą liczbę różnych map online, takich jak OpenStreetMap i inni dostawcy map, jako źródło do tworzenia atlasu offline.

Wystarczy [pobrać](https://mobac.sourceforge.io/) program, a następnie go uruchomić.

W oknie dialogowym wyboru formatu wybierz *OsmAnd SQLite* lub *OsmAnd tile storage*. SQLite to pojedynczy plik z wybranym obszarem, podczas gdy kafelki to oddzielne fragmenty mapy zebrane na Twoim urządzeniu. SQLite często okazuje się wygodniejszy, ponieważ jest przechowywany w jednym miejscu i zajmuje mniej miejsca.

Wybierz źródło mapy, poziomy powiększenia i inne funkcje. Wybierz obszar, a następnie wybierz menu *Selection* -> *Add selection*.

Następnie możesz utworzyć swój plik SQLite: 'Atlas' -> 'Create Atlas'.

### MAPC2MAPC {#mapc2mapc}

[MAPC2MAPC](https://www.the-thorns.org.uk/mapping/) to program dla systemu Windows do manipulowania mapami cyfrowymi i konwertowania ich między różnymi platformami i oprogramowaniem.

Na przykład, możesz konwertować i kalibrować dowolny format obrazu i mapy PDF na mapę online OsmAnd.

[Samouczek wideo](https://www.youtube.com/watch?v=Y_fekLfcUOc) dotyczący korzystania z programu.

### SASPlanet {#sasplanet}

SASPlanet to darmowe, otwarte oprogramowanie nawigacyjne z możliwością przeglądania i pobierania map oraz zdjęć satelitarnych Ziemi z różnych usług online do mapy online OsmAnd.

[Pobierz](http://www.sasgis.org/download/) program, [angielski przewodnik](https://www.evernote.com/shard/s100/client/snv?noteGuid=e659886a-096c-46b4-8280-b57b77373847&noteKey=dac8148d9a74ed77&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs100%2Fsh%2Fe659886a-096c-46b4-8280-b57b77373847%2Fdac8148d9a74ed77&title=How%2Bto%2Buse%2BSAS.Planet.%2BEnglish%2Bguideline).

### Geolokalizowany PDF lub TIFF {#geolocated-pdf-or-tiff}

Jak przekonwertować geolokalizowane pliki pdf/tif/tiff do [OsmAnd SQLitedb](../osmand-file-formats/osmand-sqlite.md) w systemie Windows.
Georeferencjonowanie plików tif/tiff i pdf można dość prosto wykonać w QGIS.

1. **Zainstaluj i uruchom OSGeo4W**

[OSGeo4W](https://trac.osgeo.org/osgeo4w/) to binarna dystrybucja szerokiego zestawu otwartego oprogramowania geoprzestrzennego dla systemu Windows. Obejmuje QGIS, GDAL/OGR, GRASS, a także wiele innych pakietów (ponad 150). Pobierz i uruchom [OSGeo4W](https://trac.osgeo.org/osgeo4w/) instalator sieciowy.

Teraz, z menu Start, uruchom OSGeo4W Shell. Powinien uruchomić się w domyślnym katalogu _C:\OSGeo4W_. Przejdź do folderu roboczego (lub możesz po prostu użyć _C:\OSGeo4W_ do tego celu).

2. **Konwertuj tif/pdf na mbtiles**

Aby przekonwertować _tif/pdf_ na _mbtiles_ uruchom (zastępując nazwy plików _tif/pdf_ i _mbtiles_ tam, gdzie to konieczne):

&nbsp;<i>gdal_translate -co "ZLEVEL=9" -of mbtiles map_1.tif map_1.mbtiles --config gdal_pdf_dpi 600</i>&nbsp;

&nbsp;<i>gdaladdo -r nearest map_1.mbtiles</i>&nbsp;

Pierwsze polecenie pozwala _GDAL_ określić maksymalne powiększenie, które może wygenerować na podstawie rozdzielczości obrazu. I konwertuje plik _tif/pdf_ na _mbtiles_ z określoną rozdzielczością DPI. Możesz swobodnie eksperymentować z tym ustawieniem, ale bądź ostrożny, ponieważ wysokie wartości DPI sprawią, że proces konwersji będzie bardzo długi, a wynikowy rozmiar pliku bardzo duży.

Drugie polecenie pozwala _GDAL_ określić i wygenerować mniejsze poziomy powiększenia na podstawie maksymalnego poziomu powiększenia, który już istnieje. Często zdarza się, że wykonanie tych dwóch poleceń zajmuje trochę czasu.

3. **Zainstaluj Pythona ze sklepu Microsoft Store**

Prawdopodobnie najłatwiejszym sposobem jest przejście do [Microsoft Store](https://apps.microsoft.com/detail/9nj46sx7x90p).

Jeśli podczas próby wykonania skryptu Pythona w następnym kroku wystąpi błąd:

_Traceback (ostatnie wywołanie):_

_Plik ```<console>```, linia 1, w ```<module>```_

_ImportError: Brak modułu o nazwie PIL_

Następnie w PowerShell uruchom następujące polecenie:

_pip install Pillow_

4. **Konwertuj format mbtiles na sqlitedb (odpowiedni dla OsmAnd i RMaps)**

Skrypt Pythona _mbtiles2osmand.py_ znajdziesz na [GitHubie](https://github.com/tarwirdur/mbtiles2osmand). Pobierz go do swojego folderu roboczego i uruchom Wiersz Poleceń lub PowerShell.

**Użycie:**

&nbsp;<i>python3_ mbtiles2osmand.py [-h] [-f] [--jpg JPEG_QUALITY] input output</i>&nbsp;

&nbsp;<u>Argumenty pozycyjne:</u>&nbsp;

**input**&nbsp;&nbsp;&nbsp;&nbsp; plik wejściowy

**output**&nbsp;&nbsp;&nbsp;&nbsp; plik wyjściowy

&nbsp;<u>Argumenty opcjonalne:</u>&nbsp;

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;pokaż tę wiadomość pomocy i zakończ

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;nadpisz plik wyjściowy, jeśli istnieje

**--jpg JPEG_QUALITY** &nbsp;&nbsp;&nbsp;&nbsp;konwertuj kafelki na JPEG z określoną jakością

**Przykłady:**

Prosty:

&nbsp;<i>python3 mbtiles2osmand.py _input.mbtiles output.sqlitedb_</i>&nbsp;

Konwersja kafelków na jpeg z kompresją:

&nbsp;<i>python3 mbtiles2osmand.py _--jpg 75 input.mbtiles output.sqlitedb_</i>&nbsp;

5. **Skopiuj plik .sqlitedb do OsmAnd**

Teraz powinieneś mieć plik .sqlitedb gotowy w swoim folderze roboczym. Skopiuj go do odpowiedniego folderu OsmAnd i użyj go jako głównej, podkładowej lub nakładkowej mapy. Więcej szczegółów znajdziesz w [Przewodniku użytkownika](../../user/map/raster-maps.md). Gotowe!

6. **(OPCJONALNIE) Połącz wiele plików osmand w jeden plik**

Jeśli potrzebujesz, możesz znaleźć plik skryptu unite_osmand.py na [GitHubie](https://github.com/tarwirdur/mbtiles2osmand). Ponownie - pobierz go do swojego folderu roboczego i uruchom Wiersz Poleceń lub PowerShell.

**Użycie:**

&nbsp;<i>python3 unite_osmand.py [-h] [-f] input [input ...] output</i>&nbsp;

<u>Argumenty pozycyjne:</u>

**input** &nbsp;&nbsp;&nbsp;&nbsp; pliki wejściowe. Jeśli wiele plików zawiera kafelek o tych samych współrzędnych, użyty zostanie kafelek z pierwszego (z listy argumentów) pliku

**output** &nbsp;&nbsp;&nbsp;&nbsp;plik wyjściowy

<u>Argumenty opcjonalne:</u>

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;pokaż tę wiadomość pomocy i zakończ

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;nadpisz plik wyjściowy, jeśli istnieje

7. **DODATKOWO: Konwertuj pojedynczy GeoPDF na GeoTIFF**

Jeśli z jakiegokolwiek powodu chcesz przekonwertować pojedynczy _geopdf_ na _geotiff_, użyj polecenia _gdal_translate_ i wprowadź własne parametry tam, gdzie oznaczono < >. Możesz użyć _gdal_translate_ z opcjonalnymi parametrami lub bez nich. Przetwarzanie może zająć dużo czasu, a wynikowy plik tiff może być naprawdę duży, zwłaszcza jeśli zawiera ortofotografię i cieniowany teren. Dlatego dobrym pomysłem może być wykluczenie niektórych warstw PDF (patrz drugi przykład).

**Użycie:**

&nbsp;<i>gdal_translate ```<nazwa pliku GeoPDF> <Nazwa pliku wyjściowego Geotiff>``` -of gtiff --config
gdal_pdf_layers_off “```<nazwa warstwy pdf 1>,<nazwa warstwy pdf 2>,<nazwa warstwy pdf 3>```” --config gdal_pdf_dpi ```<wyjściowe dpi>```</i>&nbsp;

**Przykłady:**

Konwersja pliku PDF ze wszystkimi jego warstwami na geotiff w domyślnej rozdzielczości DPI:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff</i>&nbsp;

Wykluczanie kilku warstw z konwersji za pomocą parametru _gdal_pdf_layers_off_ , po którym następuje lista nazw warstw oddzielonych przecinkami. Plik wyjściowy to geotiff o określonej rozdzielczości 600 DPI:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff --config gdal_pdf_layers_off “Map_Collar, Map_Frame.Projections_and_Grids, Map_Frame.Terrain.Shaded_Relief, Images.Orthoimage” --config gdal_pdf_dpi 600</i>&nbsp;

8. **Źródła:**

- [Gdal2mbtiles](https://github.com/tarwirdur/mbtiles2osmandhttps://gist.github.com/jbaranski/0073f7b98bdf1f64f49988853daed67bhttps://github.com/ecometrica/gdal2mbtiles) (tylko w celach informacyjnych),
- [Jak przekonwertować geopdf na geotiff za pomocą GDAL](https://opengislab.com/blog/2016/4/2/usgs-geopdf-to-geotif-with-gdal),
- Zobacz także [Tworzenie map nakładkowych dla OsmAnd w systemie Linux](https://shallowsky.com/blog/mapping/osmand-making-overlay-maps.html).

## Typowe problemy {#common-issues}

### Problem OutOfMemoryError {#outofmemoryerror-issue}

**Problem**: OsmAndMapCreator kończy się błędem - OutOfMemoryError.

Plik, który próbujesz przetworzyć za pomocą OsmAndMapCreator, jest zbyt duży. Spróbuj przetworzyć mniejszy plik lub zwiększ pamięć dla OsmAndMapCreator w pliku .sh lub .bat. Parametr `-Xmx` określa, ile pamięci program może zużyć. Ustawienia mogą być różne dla maszyn 64-bitowych (więcej niż 1,5 GB) i 32-bitowych (maksymalnie około 1,5 GB).

### Problem z pustym plikiem {#empty-file-issue}

**Problem**: Po konwersji pliku .osm na .obf z tylko indeksem POI, plik .obf jest pusty, chociaż oryginalny plik .osm zawierał POI.

Może to być spowodowane brakiem kluczowego tagu dla OsmAndMapCreator, aby rozpoznać POI, gdy konwertowałeś osm z innego źródła, takiego jak Garmin. Jeśli punkt w pliku OSM wygląda tak:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
  </node>
```
zmień go, aby zawierał dodatkowy tag 'amenity', np.:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
    <tag k='amenity' v='point' />
  </node>
```

Następnie przekonwertuj plik za pomocą OsmAndMapCreator. Możesz sprawdzić na stronie OSM, jakie tagi są dobre do użycia, a także zweryfikować, które tagi są obsługiwane przez [OsmAnd](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml).