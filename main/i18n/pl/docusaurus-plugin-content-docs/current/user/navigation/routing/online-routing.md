---
source-hash: 4f96a8e9fe2039b52000ce52f1a94177338192fe1d90ceb5161a41d19e94cfea
sidebar_position: 11
title: Routing online
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Przegląd {#overview}

<InfoAndroidOnly />

Routing online to potężne narzędzie, które może pomóc użytkownikom zaoszczędzić czas i efektywniej nawigować. Należy jednak pamiętać, że routing online opiera się na łączności z Internetem i może nie być dostępny w obszarach o słabym zasięgu sieci. Ponadto użytkownicy powinni zawsze zachować ostrożność i kierować się własnym osądem, podążając za jakąkolwiek trasą sugerowaną przez usługę routingu online.

![Routing online Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Parametry trasy - Routing online {#route-parameters---online-routing}

*Routing online* można włączyć w sekcji [Typ nawigacji](../guidance/navigation-settings.md#overview) w ustawieniach nawigacji wybranego *Profilu*. W OsmAnd dostępne są dwa predefiniowane *silniki routingu online* ([ZLZK](https://zlzk.biz/) i [OSM DE](https://routing.openstreetmap.de)), które zapewniają trzy typy *routingu online*: *Rower, Samochód i Pieszo*.

:::note
Typy routingu online są przeznaczone dla profili *Jazda samochodem, Jazda na rowerze i Pieszo*, chociaż mogą być również używane z innymi profilami OsmAnd (Ciężarówka, Motocykl, Narty, Jazda konna). Są one dostarczane „takie, jakie są", więc nie można ich dostosować do swoich potrzeb, używając różnych opcji nawigacji.
:::

### Niestandardowy routing online {#custom-online-routing}

Oprócz predefiniowanych typów routingu online, można skonfigurować inne mechanizmy routingu online.
Dotknij przycisku **+ Dodaj silnik routingu online** i wybierz jeden z proponowanych typów routingu online ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Wybierz odpowiedni pojazd i dotknij *testuj routing* przed zapisaniem zmian.

![Niestandardowy routing online Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Niestandardowy routing online Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Możesz przeczytać o różnicach między silnikami routingu online w [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Niestandardowy routing GPX online {#custom-online-gpx-routing}

Serwer online buduje trasę, używając punktu początkowego i docelowego. Po otrzymaniu śladu z serwera, OsmAnd tworzy trasę, używając funkcji *[Przyłącz do dróg](../setup/gpx-navigation.md#attach-to-the-roads)*. Wszystkie potrzebne informacje o routingu zostaną pobrane z naszych map offline, a dokładniejsze wskazówki dotyczące trasy zostaną dostarczone.

![Niestandardowy routing GPX Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Niestandardowy routing GPX Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Ustawienia routingu online {#online-routing-setting}

Gdy routing online jest wybrany do nawigacji, w ustawieniach pojawia się dodatkowa opcja.

![Ustawienia routingu online Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Pozwala na korzystanie z routingu offline OsmAnd, gdy routing online jest wybrany w ustawieniach nawigacji. Ta opcja może pomóc, jeśli trasa została już zbudowana online, ale potem nastąpiło odchylenie od trasy i jednocześnie utracono połączenie z Internetem. W takim przypadku routing offline zostanie użyty do powrotu na trasę, wcześniej obliczoną online.

> *Ostatnia aktualizacja: Czerwiec 2024*