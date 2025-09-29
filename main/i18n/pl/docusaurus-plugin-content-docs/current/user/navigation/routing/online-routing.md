---
source-hash: ad9c1155352c7c8fc6705861acfb7f006ba101d59528a256c0205ba34b62fd80
sidebar_position: 11
title:  Wyznaczanie tras online
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

Wyznaczanie tras online to potężne narzędzie, które może pomóc użytkownikom zaoszczędzić czas i nawigować wydajniej. Należy jednak pamiętać, że wyznaczanie tras online opiera się na łączności z internetem i może nie być dostępne w obszarach o słabym zasięgu sieci. Ponadto użytkownicy powinni zawsze zachować ostrożność i kierować się własnym osądem, podążając dowolną trasą sugerowaną przez usługę wyznaczania tras online.

![Wyznaczanie tras online Android](@site/static/img/navigation/routing/online_routing_andr.png)

## Parametry trasy - Wyznaczanie tras online {#route-parameters---online-routing}

*Wyznaczanie tras online* można włączyć w sekcji [Typ nawigacji](../guidance/navigation-settings.md#overview) w ustawieniach nawigacji wybranego *Profilu*. W OsmAnd istnieją dwa predefiniowane *silniki routingu online* ([ZLZK](https://zlzk.biz/) i [OSM DE](https://routing.openstreetmap.de)), które zapewniają trzy typy *wyznaczania tras online*: *Rower, Samochód i Pieszo*.

:::note
Typy wyznaczania tras online są przeznaczone dla profili *Jazda samochodem, Jazda rowerem i Pieszo*, chociaż mogą być również używane z innymi profilami OsmAnd (Ciężarówka, Motocykl, Narty, Jazda konna). Są one dostarczane w stanie „tak jak jest”, więc nie można ich dostosować do własnych potrzeb za pomocą różnych opcji nawigacji.
:::

### Niestandardowe wyznaczanie tras online {#custom-online-routing}

Oprócz wstępnie ustawionych typów wyznaczania tras online można skonfigurować inne mechanizmy wyznaczania tras online.
Naciśnij przycisk **+ Dodaj silnik routingu online** i wybierz jeden z proponowanych typów routingu online ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Wybierz odpowiedni pojazd i naciśnij *testuj trasę* przed zapisaniem zmian.

![Niestandardowe wyznaczanie tras online Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Niestandardowe wyznaczanie tras online Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
O różnicach między silnikami routingu online można przeczytać w [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Niestandardowe wyznaczanie tras GPX online {#custom-online-gpx-routing}

Serwer online buduje trasę, korzystając z punktu początkowego i docelowego. Po otrzymaniu śladu z serwera OsmAnd tworzy trasę za pomocą funkcji *[Dołącz do dróg](../setup/gpx-navigation.md#attach-to-the-roads)*. Dzięki temu wszystkie potrzebne informacje o trasie zostaną pobrane z naszych map offline i zapewnione zostanie dokładniejsze prowadzenie po trasie.

![Niestandardowe wyznaczanie tras GPX Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Niestandardowe wyznaczanie tras GPX Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)

## Ustawienia wyznaczania tras online {#online-routing-setting}

Gdy do nawigacji wybrane jest wyznaczanie tras online, w ustawieniach pojawia się dodatkowa opcja.

![Ustawienia wyznaczania tras online Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Pozwala na użycie wyznaczania tras offline w OsmAnd, gdy w ustawieniach nawigacji wybrane jest wyznaczanie tras online. Ta opcja może pomóc, jeśli trasa została już zbudowana online, ale nastąpiło odchylenie od trasy i jednocześnie utracono połączenie z internetem. W takim przypadku do powrotu na trasę, wcześniej obliczoną online, zostanie użyte wyznaczanie tras offline.