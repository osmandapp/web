---
source-hash: 9eeb971fd6641349b16bc288cd5ac3e907c5976d926bd8f926c804208efa4170

---
import Admonition from '@theme/Admonition';

# Twórz z OsmAnd {#build-with-osmand}

Przeczytaj **[Dokumentację techniczną](../technical/osmand-api-sdk/index.md)**, jak zintegrować się z OsmAnd.

## Użyj OsmAnd API {#use-osmand-api}

OsmAnd API pozwala kontrolować zainstalowaną aplikację OsmAnd. Rozpoczęcie tworzenia aplikacji za pośrednictwem API jest łatwe i proste, a także może być osadzone w dowolnej aplikacji, **bez wymagań licencyjnych** aplikacji docelowej. Jedyną wadą jest to, że musisz mieć już zainstalowany OsmAnd.

**Funkcje OsmAnd API:**

* Dodawanie ulubionych i znaczników do mapy
* Nawigacja między lokalizacjami
* Tworzenie notatek audio, wideo i zdjęć
* Rozpoczynanie i zatrzymywanie nagrywania ścieżki GPX
* Importowanie ścieżek GPX do OsmAnd i nawigowanie wzdłuż nich
* Wiele innych funkcji jest już obecnych lub może zostać zaimplementowanych na żądanie

### Rozpocznij tworzenie (API) {#start-development-api}

Możesz zbudować swój własny projekt w dowolny sposób. Integracja z OsmAnd API odbywa się za pomocą dwóch typów intencji: cichych lub widocznych. Cicha intencja nie utrzymuje OsmAnd otwartym, natomiast widoczna intencja przenosi OsmAnd do określonego ekranu. Istnieją plany dodania komunikacji międzyprocesowej Androida w przyszłości. Proszę zapoznać się z kodem źródłowym projektu OsmAnd API.

<Admonition type="caution" icon="🛠️&nbsp;" title="Przykłady">
  <p>
    Przeglądaj kod źródłowy GitHub i zainstaluj demo z Google Play.
  </p>
  <div>
    <a href="https://play.google.com/store/apps/details?id=net.osmand.osmandapidemo"><button class="button button--primary">Google Play</button></a> &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-api-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Przeczytaj **[Dokumentację techniczną](../technical/osmand-api-sdk/index.md)**, aby uzyskać więcej szczegółów.

### Licencja (API) {#license-api}

Ponieważ nie ma bezpośredniego użycia kodu z podstawowego projektu OsmAnd, licencja jest inna dla OsmAnd API i dla projektu OsmAnd Core. Najprawdopodobniej aplikacje korzystające z OsmAnd API będą pisane od podstaw, a ta aplikacja dostarczona jako przykład w ogóle nie będzie używana. Dla OsmAnd API używana jest najmniej restrykcyjna licencja, licencja MIT.

[https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md](https://github.com/osmandapp/osmand-api-demo/blob/master/LICENSE.md)


## Użyj OsmAnd SDK {#use-osmand-sdk}

OsmAnd Sample przedstawia możliwość zbudowania aplikacji na bazie rdzenia OsmAnd. OsmAnd udostępnia bibliotekę Java z wieloma wbudowanymi funkcjami. [Proszę zapoznać się z kodem źródłowym](https://github.com/osmandapp/osmand-api-demo). OsmAnd Sample nie jest przypadkiem użycia API, a LICENCJA OsmAnd Sample jest taka sama jak samej aplikacji OsmAnd. Zapewnia to możliwość pakowania i dystrybucji niezależnie od OsmAnd.


### Rozpocznij tworzenie (SDK) {#start-development-sdk}

<Admonition type="caution" icon="🛠️&nbsp;" title="Przykłady">
  <p>
    Przeglądaj kod źródłowy GitHub i zainstaluj demo APK.
  </p>
  <div>
    <a href="https://download.osmand.net/latest-night-build/OsmAnd-map-sample.apk"><button class="button button--primary">Pobierz APK</button></a>
 &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/osmandapp/osmand-api-demo/tree/master/OsmAnd-map-sample"><button class="button button--primary">Github</button></a>
  </div>
</Admonition>  

Przeczytaj **[dokumentację techniczną](../technical/osmand-api-sdk/index.md)**, aby uzyskać więcej szczegółów.


### Licencja (SDK) {#license-sdk}

[Licencja](https://github.com/osmandapp/Osmand/blob/master/LICENSE) dla aplikacji OsmAnd jest dość obszerna. Istnieją 2 ważne rzeczy: OsmAnd używa kodu stron trzecich tylko z licencjami permisywnymi, takimi jak (LGPL, MIT, Apache), a sam kod OsmAnd, chroniony prawami autorskimi OsmAnd BV, jest rozpowszechniany na licencji GPLv2 z wyjątkiem dystrybucji na rynkach Google Play bez pozwolenia. Zapewnia to możliwość budowania dowolnej aplikacji do użytku osobistego lub budowania aplikacji open source na licencji GPLv2 (ponieważ OsmAnd nie jest platformą, a cały kod zbudowany na rdzeniu musi być również licencjonowany jako GPL).

Jeśli chcesz zbudować aplikację do użytku wewnętrznego, skontaktuj się z <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>, w niektórych przypadkach udzielane są zwolnienia z kodu GPLv2 chronionego prawami autorskimi OsmAnd BV. W przypadku pozostałego kodu proszę dokładnie sprawdzić listę z [LICENCJI](https://github.com/osmandapp/Osmand/blob/master/LICENSE), która składa się tylko z licencji permisywnych (LGPL, MIT, Apache).

W razie jakichkolwiek pytań, prosimy o kontakt z <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>. Chętnie również udzielimy pomocy od doświadczonych programistów OsmAnd w budowaniu aplikacji specjalnego przeznaczenia.


## Skontaktuj się z nami w sprawie rozwoju {#contact-us-for-development}

W przypadku, gdy nie jesteś pewien, który przypadek najbardziej Ci odpowiada lub chciałbyś poprosić o pomoc programistów, którzy mają doświadczenie w budowaniu aplikacji zintegrowanych z OsmAnd, prosimy o kontakt <a class="mail-link" href="mailto:business@osmand.net">business@osmand.net</a>!