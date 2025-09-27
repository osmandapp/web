---
source-hash: 54f960139673d7e63928d90ee9d92e56a29e0041c46723da9fc302c0ac415a0a
sidebar_position: 12
title:  BRouter
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
Algorytm routingu innej firmy, BRouter, jest dostępny tylko dla wersji aplikacji OsmAnd na Androida.
:::

*BRouter* to algorytm routingu innej firmy, który może być używany w aplikacji OsmAnd w [trybie nawigacji offline](../guidance/navigation-settings.md#navigation-type). Jest on zaprojektowany do optymalizacji trasy w oparciu o różne parametry, takie jak czas, odległość czy typ pojazdu.

[BRouter](http://brouter.de/) wykorzystuje dane OpenStreetMap do tworzenia trasy, a następnie dostosowuje ją w oparciu o określone parametry. Używa wstępnie obliczonych tras, aby szybko budować trasę w trybie offline. Pozwala również na dostosowywanie profili routingu, które są zdefiniowane przez zestaw parametrów uwzględniających różne czynniki przy wyborze trasy. Plik [BRouter readme.txt](http://brouter.de/brouter/readme.txt) wyjaśnia bardziej szczegółowo, jak zainstalować i używać programu.

OsmAnd zapewnia możliwość wyboru tras za pomocą BRoutera i konfigurowania profili routingu, aby lepiej zdefiniować trasę zgodnie z Twoimi potrzebami.

Więcej informacji można znaleźć na oficjalnej [stronie internetowej Broutera](http://www.brouter.de/brouter/algorithm.html).

Integracja BRoutera w OsmAnd bardzo się zmieniła latem 2019 roku. Ten przewodnik zakłada, że używasz aplikacji BRouter na Androida w wersji 1.5.0 lub wyższej, a także OsmAnd w wersji 3.4 lub wyższej.

:::note
Algorytm routingu innej firmy, BRouter, jest dostępny tylko dla wersji aplikacji OsmAnd na Androida.
:::  


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## Jak skonfigurować {#how-to-configure}

Postępuj zgodnie z tym przewodnikiem, aby zainstalować i skonfigurować aplikację innej firmy *BRouter Offline Navigation* do użytku w OsmAnd.

**1.** Aby rozpocząć, musisz zainstalować aplikację BRouter na swoim urządzeniu z Androidem z [F-Droid](https://f-droid.org/packages/btools.routingapp) lub [Sklepu Google Play](https://play.google.com/store/apps/details?id=btools.routingapp).
**2.** Następnie, aby nawigować za pomocą aplikacji OsmAnd po wstępnie obliczonych trasach z BRouterem, musisz:


  - Otwórz aplikację BRouter i dotknij *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - Przybliż i wybierz obszary, w których chcesz wyznaczać trasy. Następnie kliknij "Start Download", a BRouter rozpocznie pobieranie plików [segmentów](http://brouter.de/brouter/segments4/) dla wybranych obszarów.

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

**Uwaga**: będziesz musiał okresowo powtarzać ten krok, gdy tylko zechcesz mieć zaktualizowaną wersję danych OSM używanych do wyznaczania tras.

**3.** Gdy to zrobisz, uruchom ponownie aplikację BRouter i wybierz pozycję "BRouter App" w *Menu głównym*. Wybierz profil routingu w zależności od trybu podróży. Może to być jazda na rowerze, motorowerze, piesze wędrówki lub trekking. Lista dostępnych profili do pobrania w formacie *brf* znajduje się [tutaj](http://brouter.de/brouter/profiles2/). Możesz też spróbować użyć profilu routingu w [BRouter-online](http://brouter.de/brouter-web/).
Kliknij "Service-Mode". Następnie zaznacz pola dla trybów routingu, dla których chcesz użyć tego profilu. Możesz używać dwóch różnych profili dla każdego trybu transportu, które zostaną przypisane do ustawień "najkrótsza" i "najszybsza" (to tylko etykiety) w OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>  

**4.** Jeśli wcześniej załadowałeś już jakieś segmenty, zostaną one wyświetlone na mapie BRoutera. Segmenty mają cztery stany:

- *"Zielony"* kwadrat - Wybrany nowy segment do pobrania.
- *"Niebieski"* kwadrat - Segment ze zaktualizowanymi danymi.
- *"Szary"* kwadrat - Segment jest już pobrany, ale wymaga aktualizacji.
- *"Żółty"* kwadrat - Segment jest w trakcie aktualizacji.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Po załadowaniu wymaganych segmentów mapy za pomocą BRoutera i wybraniu w nim profilu routingu, wszystkie kolejne ustawienia tego typu nawigacji dokonywane są w aplikacji OsmAnd.

**6.** Możesz utworzyć "Profil aplikacji" w OsmAnd, który będzie używał BRoutera do routingu offline.
Użyj typu routingu *BRouter (offline)* z dowolnym [profilem](../../personal/profiles.md) w aplikacji OsmAnd. Aby to zrobić, przejdź do *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* i utwórz nowy profil oparty na wybranym profilu podstawowym (tutaj kolarstwo, do wyznaczania tras rowerowych), z wybraną przez siebie niestandardową nazwą ("BRouter" na poniższym zrzucie ekranu) i wykorzystując "BRouter (offline)" do nawigacji.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

Aplikacja BRouter powinna zostać uruchomiona przed OsmAnd, aby ta konkretna pozycja pojawiła się w OsmAnd. Dlatego, jeśli nie możesz znaleźć opcji nawigacji "BRouter (offline)", powinieneś wymusić zamknięcie OsmAnd i uruchomić go ponownie.

## OsmAnd w wersji 4.7.1 {#osmand-version-471}

Od wersji 4.7.1 OsmAnd obsługuje parametr profilu do mapowania: od wersji 3 OsmAnd można zdefiniować wiele profili w OsmAnd i łatwo przełączać się między nimi. Należy utworzyć nowy profil, na przykład kopiując istniejący profil *Kolarstwo* i nadając mu nową nazwę w formacie Brouter[fastbike]. W nazwie można użyć dowolnego z istniejących profili BRouter zainstalowanych na urządzeniu. Wszystkie pliki profili mają format nazwy "xxxxxxx.brf". Można też utworzyć własny nowy profil, na przykład "myprofile.brf".

Konwencja nazewnictwa w profilu OsmAnd jest ważna, ponieważ profil BRouter zawarty w tym profilu ustanawia faktyczny pomost między OsmAnd a BRouterem.

- Jeśli w profilu Osmand jako usługa nawigacyjna zdefiniowano *BRouter*
- ORAZ nazwa profilu wygląda jak "Brouter[mystring]"

Wtedy profil "mystring" zostanie użyty w aplikacji Brouter. To nowe mapowanie zastępuje w takim przypadku podstawowe mapowanie zdefiniowane powyżej i oparte na pliku "serviceconfig.dat".

### Przykłady: nazwa profilu Osmand - aplikacja Brouter {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] zostanie użyty profil "trekking", plik: trekking.brf
Brouter[fastbike] zostanie użyty profil "fastbike", plik: fastbike.brf
....
```

Uwaga:
Obecnie Osmand nie sprawdza zdefiniowanej nazwy (wielkość liter ma znaczenie) dla profilu Brouter (mystring).
Jeśli profil nie zostanie znaleziony, wyznaczanie trasy zakończy się niepowodzeniem z komunikatem "Nie można obliczyć trasy...".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Jak używać {#how-to-use}

Ta sekcja opisuje porównanie BRoutera z wewnętrznym routingiem aplikacji OsmAnd.

Gdy BRouter jest skonfigurowany, możemy porównać szybkość wstępnego obliczania danych routingu BRoutera z wewnętrznym routingiem OsmAnd. Wybierzmy dwa losowe punkty w Holandii i rozpocznijmy obliczanie podróży. W tym celu ustawiamy zrównoważony styl jazdy bez użycia danych o wysokości dla profilu podstawowego. Czas obliczania tej podróży wynosi 14,5 sekundy dla naszej wewnętrznej trasy OsmAnd. Czas obliczania trasy przy użyciu routingu BRouter jest krótszy niż 1 sekunda.

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
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/>  <Translate android="true" ids="fast_route_mode_descr"/> | W większości przypadków zostanie zaproponowana najkrótsza trasa. Często ta trasa może trwać dłużej, niż gdyby to ustawienie było wyłączone |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Przeczytaj o opcji Uwzględnij tymczasowe ograniczenia w tym [artykule](../routing/osmand-routing.md#consider-temporary-limitations).   | Algorytm routingu uwzględnia ograniczenia czasowe określone w OpenStreetMap. Należy pamiętać, że w niektórych przypadkach informacje z OSM mogą być nieaktualne.   |


### Inne ustawienia routingu {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Nawigacja → Ustawienia*, [obraz](../routing/online-routing.md#online-routing-setting)). Jeśli ta opcja jest włączona, OsmAnd dodaje dwa segmenty do obliczonej trasy Brouter: jeden z *[Mojej lokalizacji](../../map/interact-with-map.md#my-location-and-zoom)* do punktu początkowego trasy i drugi z końca trasy do punktu końcowego Twojej trasy. Ta opcja jest aktywna, jeśli odległość do lub od trasy przekracza 60 metrów.

- W sekcji [*Przelicz trasę*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Parametrów trasy* można włączyć i dostosować opcje przeliczania trasy.

- W sekcji [*Ustawienia deweloperskie*](../guidance/navigation-settings.md#development-settings) *Parametrów trasy* można wypróbować nowe funkcje routingu, które są obecnie w fazie testów. Należy pamiętać, że te ustawienia są dostępne tylko wtedy, gdy włączona jest [wtyczka deweloperska OsmAnd](../../plugins/development.md).