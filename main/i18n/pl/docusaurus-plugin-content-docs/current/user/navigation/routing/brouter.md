---
source-hash: 7669ebc684d82d59a895a98d5dc83c05fad8cf9113b076ddb5dd9660c461ce5e
sidebar_position: 12
title: BRouter
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';

## Przegląd {#overview}

:::caution TYLKO ANDROID
Algorytm routingu innej firmy BRouter jest dostępny tylko dla wersji Android aplikacji OsmAnd.
:::

*BRouter* to algorytm routingu innej firmy, który może być używany w aplikacji OsmAnd w [trybie nawigacji offline](../guidance/navigation-settings.md#navigation-type). Został zaprojektowany do optymalizacji trasy w oparciu o różne parametry, takie jak czas, odległość lub typ pojazdu.

[BRouter](http://brouter.de/) wykorzystuje dane OpenStreetMap do tworzenia trasy, a następnie dostosowuje ją w oparciu o określone parametry. Wykorzystuje wstępnie obliczone trasy do szybkiego tworzenia trasy offline. Umożliwia również dostosowywanie profili routingu, które są definiowane przez zestaw parametrów w celu uwzględnienia różnych czynników przy wyborze trasy. Plik [BRouter readme.txt](http://brouter.de/brouter/readme.txt) wyjaśnia bardziej szczegółowo, jak zainstalować i używać programu.

OsmAnd zapewnia możliwość wyboru tras za pomocą BRouter i konfigurowania profili routingu w celu lepszego zdefiniowania trasy zgodnie z Twoimi potrzebami.

Więcej informacji można znaleźć na oficjalnej [stronie internetowej BRouter](http://www.brouter.de/brouter/algorithm.html).

Integracja BRouter w OsmAnd bardzo się zmieniła latem 2019 roku. Ten przewodnik zakłada, że używasz aplikacji BRouter na Androida w wersji 1.5.0 lub wyższej, a także OsmAnd w wersji 3.4 lub wyższej.

:::note
Algorytm routingu innej firmy BRouter jest dostępny tylko dla wersji Android aplikacji OsmAnd.
:::

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>

## Jak skonfigurować {#how-to-configure}

Postępuj zgodnie z tym przewodnikiem, aby zainstalować i skonfigurować aplikację innej firmy *BRouter Offline Navigation* do użytku w OsmAnd.

**1.** Na początek musisz zainstalować aplikację BRouter na swoim urządzeniu z Androidem z [F-Droid](https://f-droid.org/packages/btools.routingapp) lub [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) na swoim urządzeniu.
**2.** Następnie, aby nawigować za pomocą aplikacji OsmAnd wzdłuż wstępnie obliczonych tras za pomocą BRouter, musisz:

- Otwórz aplikację BRouter i dotknij *Menedżer pobierania*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

- Powiększ i wybierz obszary, w których chcesz wyznaczyć trasę. Następnie kliknij "Rozpocznij pobieranie", a BRouter rozpocznie pobieranie plików [segmentów](http://brouter.de/brouter/segments4/) dla wybranych obszarów.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table>

**Uwaga**: będziesz musiał powtarzać ten krok okresowo, gdy tylko będziesz chciał mieć zaktualizowaną wersję danych OSM używanych do routingu.

**3.** Gdy to zrobisz, ponownie uruchom aplikację BRouter i wybierz wpis "BRouter App" w *Menu głównym*. Wybierz profil routingu w zależności od trybu podróży. Może to być jazda na rowerze, motorowerem, wędrówki piesze lub trekking. Lista dostępnych profili do pobrania w formacie *brf* znajduje się [tutaj](http://brouter.de/brouter/profiles2/). Możesz też spróbować użyć profilu routingu w [BRouter-online](http://brouter.de/brouter-web/).
Kliknij "Tryb serwisowy". Następnie zaznacz pola dla trybów routingu, dla których chcesz używać tego profilu. Możesz użyć dwóch różnych profili dla każdego trybu transportu, które zostaną przypisane do ustawień "najkrótsza" i "najszybsza" (to tylko etykietowanie) w OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>

**4.** Jeśli wcześniej załadowałeś jakiekolwiek segmenty, zostaną one wyświetlone na mapie BRouter. Segmenty mają cztery stany:

- *"Zielony"* kwadrat - Wybrany nowy segment do pobrania.
- *"Niebieski"* kwadrat - Segment z zaktualizowanymi danymi.
- *"Szary"* kwadrat - Segment jest już pobrany, ale wymaga aktualizacji.
- *"Żółty"* kwadrat - Segment jest aktualizowany.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Po załadowaniu wymaganych segmentów mapy za pomocą BRouter i wybraniu w nim profilu routingu, wszystkie kolejne ustawienia tego typu nawigacji są wykonywane w aplikacji OsmAnd.

**6.** Możesz utworzyć "Profil aplikacji" w OsmAnd, który będzie używał BRouter do routingu offline.
Użyj typu routingu *BRouter (offline)* z dowolnym [profilem](../../personal/profiles.md) w aplikacji OsmAnd. Aby to zrobić, przejdź do głównego *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* i utwórz nowy profil na podstawie wybranego profilu bazowego (tutaj rowerowy, dla routingu rowerowego), z wybraną nazwą niestandardową ("BRouter" na poniższym zrzucie ekranu) i wykorzystując "BRouter (offline)" do nawigacji.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

Aplikacja BRouter powinna zostać uruchomiona przed OsmAnd, aby ten konkretny wpis pojawił się w OsmAnd. Dlatego, jeśli nie możesz znaleźć opcji nawigacji "BRouter (offline)", powinieneś wymusić zamknięcie OsmAnd i ponownie go uruchomić.

## OsmAnd Wersja 4.7.1 {#osmand-version-471}

Od wersji 4.7.1 wzwyż Osmand obsługuje parametr profilu dla mapowania: Od wersji 3 Osmand, wiele profili może być zdefiniowanych w Osmand i można łatwo przełączać się między tymi profilami. Należy utworzyć nowy profil, na przykład kopiując istniejący profil *Rowerowy* i nadając mu nową nazwę w formacie Brouter[fastbike]. Możesz użyć dowolnego z istniejących profili BRouter w nazwie, które są zainstalowane na Twoim urządzeniu. Wszystkie pliki profili mają format nazewnictwa 'xxxxxxx.brf'. Możesz też utworzyć nowy własny profil, np. 'myprofile.brf'.

Konwencja nazewnictwa w profilu OsmAnd jest ważna, ponieważ profil BRouter zawarty w tym profilu ustanawia rzeczywisty most między OsmAnd a BRouter.

- Jeśli w Osmand profil ma zdefiniowany *BRouter* jako usługę nawigacyjną
- ORAZ nazwa profilu wygląda jak "Brouter[mój_ciąg]"

Wtedy profil "mój_ciąg" zostanie użyty w aplikacji Brouter. To nowe mapowanie zastępuje w tym przypadku podstawowe mapowanie zdefiniowane powyżej i oparte na pliku "serviceconfig.dat".

### Przykłady: Nazwa profilu Osmand-app Brouter-app {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] zostanie użyty profil "trekking" plik: trekking.brf
Brouter[fastbike] zostanie użyty profil "fastbike" plik: fastbike.brf
....
```

Uwaga:
Obecnie Osmand nie sprawdza zdefiniowanej nazwy (z uwzględnieniem wielkości liter) dla profilu Brouter (mój_ciąg).
Jeśli nie zostanie znaleziony żaden profil, routing zakończy się niepowodzeniem z komunikatem "Nie można obliczyć trasy..".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Jak używać {#how-to-use}

Ta sekcja opisuje porównanie BRouter z wewnętrznym routingiem aplikacji OsmAnd.

Po skonfigurowaniu BRouter możemy porównać szybkość wstępnego obliczania danych routingu BRouter z wewnętrznym routingiem OsmAnd. Wybierzmy dwa losowe punkty w Holandii i rozpocznijmy obliczanie podróży. W tym celu ustawiamy zrównoważony styl jazdy bez używania danych wysokości dla profilu bazowego. Czas obliczania tej podróży wynosi 14,5 sekundy dla naszej wewnętrznej trasy OsmAnd. Czas obliczania trasy przy użyciu routingu BRouter wynosi mniej niż 1 sekundę.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>

## Parametry trasy {#route-parameters}

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| Parametr | Opis | Uwaga |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> <Translate android="true" ids="fast_route_mode_descr"/> | W większości przypadków zostanie zaproponowana najkrótsza trasa. Często ta trasa może zająć więcej czasu niż w przypadku wyłączenia ustawienia |
| *<Translate android="true" ids="temporary_conditional_routing"/>* | Przeczytaj o opcji Uwzględnij tymczasowe ograniczenia w tym [artykule](../routing/osmand-routing.md#consider-temporary-limitations). | Algorytm routingu uwzględnia ograniczenia czasowe określone w OpenStreetMap. Należy pamiętać, że w niektórych przypadkach informacje z OSM mogą być nieaktualne. |

### Inne ustawienia routingu {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Nawigacja → Ustawienia*, [obraz](../routing/online-routing.md#online-routing-setting)). Jeśli ta opcja jest włączona, OsmAnd dodaje dwa segmenty do obliczonej trasy Brouter: jeden od *[Moja lokalizacja](../../map/interact-with-map.md#my-location-and-zoom)* do punktu początkowego trasy, a drugi od końca trasy do punktu końcowego Twojej trasy. Ta opcja jest aktywna, jeśli odległość do lub od trasy przekracza 60 metrów.

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) w *Parametrach trasy* możesz włączyć i dostosować opcje przeliczania trasy.

- W sekcji [*Rozwój*](../guidance/navigation-settings.md#development-settings) w *Parametrach trasy* możesz wypróbować nowe funkcje routingu, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).

> *Ostatnia aktualizacja: czerwiec 2024*