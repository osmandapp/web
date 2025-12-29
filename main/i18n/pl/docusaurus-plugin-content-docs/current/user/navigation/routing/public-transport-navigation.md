---
source-hash: 4d9f5039ab11085fb01ba9a87295b0709bf9134ac4123b410ba74a735353f314
sidebar_position: 5
title:  Nawigacja transportem publicznym
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Przegląd {#overview}

Nawigacja transportem publicznym w aplikacji OsmAnd pozwala na wyznaczanie tras z wykorzystaniem transportu publicznego, co z pewnością pomoże w szybszym poruszaniu się po "betonowej dżungli".

Dane o trasach transportu publicznego pochodzą z projektu [OpenStreetMap](http://openstreetmap.org/). OsmAnd do nawigacji wykorzystuje schemat [PTv2](https://wiki.openstreetmap.org/wiki/Public_transport). OsmAnd obsługuje nawigację po trasach OpenStreetMap dla *bus*, *trolleybus*, *share_taxi*, *funicular*, *subway*, *light_rail*, *monorail*, *train*, *tram*, *ferry*. Domyślna prędkość dla każdego typu pojazdu jest skonfigurowana w [pliku XML routingu](../../../technical/build-osmand/routing.md) i jest używana do znajdowania najszybszych tras.

:::note
Wyznaczanie tras transportem publicznym jest w fazie testów. Na razie można zbudować i wyświetlić trasę bez pełnej funkcji nawigacji.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nawigacja transportem publicznym Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Nawigacja transportem publicznym iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Jak używać {#how-to-use}

Aby rozpocząć nawigację po mieście transportem publicznym, użyj [przycisku nawigacji](../../widgets/map-buttons.md#directions) na ekranie mapy lub wybierz opcję nawigacji w *Menu głównym*.  

**1.** Musisz wybrać *profil nawigacji transportem publicznym*, punkt początkowy i docelowy.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trasy nawigacji transportem publicznym Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Trasy nawigacji transportem publicznym iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd oferuje opcje tras z czasem przejścia pieszo oraz trasy transportem publicznym z informacjami o trasie: czas, odległość, przesiadki i trasy publiczne. Musisz przewinąć ekran nawigacji, aby wybrać wymaganą opcję.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sposób nawigacji transportem publicznym Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Sposób nawigacji transportem publicznym iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Możesz wyświetlić wszystkie możliwe propozycje tras na mapie za pomocą przycisku *Pokaż na mapie*. Przesuwaj ekrany, aby zobaczyć następną opcję trasy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Szczegóły nawigacji transportem publicznym Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Szczegóły nawigacji transportem publicznym iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Dotknij przycisku "Szczegóły", aby otworzyć opis wybranej trasy ze wszystkimi przystankami i przesiadkami.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista przystanków nawigacji transportem publicznym Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Lista przystanków nawigacji transportem publicznym iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>

## Typy transportu publicznego {#public-transport-types}

Możesz wyszukiwać dobrze zorganizowane trasy transportu publicznego zgodnie z preferencjami i wybrać opcję:

- Unikaj autobusów (i trolejbusów)
- Unikaj metra
- Unikaj pociągów
- Unikaj tramwajów
- Unikaj promów
- Unikaj współdzielonych taksówek

Domyślnie OsmAnd wyszukuje trasy obejmujące wszystkie obsługiwane typy transportu publicznego.

## Alternatywne trasy {#alternative-routes}

Alternatywne trasy to odcinki trasy obsługiwane przez różne usługi transportowe, które dzielą tę samą ścieżkę i przystanki.

Różne usługi transportowe mogą używać różnych numerów tras (refs) lub nawet różnych typów transportu.

Interfejs użytkownika wyświetla alternatywne trasy jako kolorowe odznaki z ich refami.

## Wydajność i wyniki {#performance-and-results}

**Profil transportu publicznego -> Ustawienia -> Ustawienia nawigacji -> Parametry trasy**

1. **Maksymalna liczba zmian transportu**.

Wydajność i zużycie pamięci routera transportu publicznego zależy od głębokości wyszukiwania.

Najważniejszym parametrem wpływającym na tę głębokość jest **Maksymalna liczba zmian transportu**.

Używamy wartości **2** jako domyślnej, co wydaje się optymalne dla nowoczesnych sieci transportu publicznego.

Jeśli napotkasz niską wydajność lub błędy braku pamięci, spróbuj zmniejszyć tę wartość.

Jeśli jesteś w małym mieście lub podróżujesz krótkimi trasami, wartość **1** może działać lepiej.
<!--
There are two more parameters that help you choose the best routes.

2. **Display N best routes** (specify the number of best routes to display)

By default, OsmAnd displays the **10** best routes (including alternative routes).

You can decrease or increase this limit, or even display all routes.

Note: displaying unlimited routes might slow down your device.

Possible values: 0 (show all), 5, 10 (default), 15, 100
-->

## Dane i wytyczne {#data-and-guideline}

OsmAnd wykorzystuje nowy schemat transportu publicznego, zwany również Public Transport Version 2 (PTv2), dla algorytmu nawigacji transportem publicznym OsmAnd.

- Możesz sprawdzić swój transport publiczny [tutaj](http://tools.geofabrik.de/osmi/).
- Przewodnik po budowaniu lub dostosowywaniu tras transportu publicznego jest dostępny na naszym [blogu](https://osmand.net/blog/guideline-pt).
- Prezentacja [2019: Public Transport Navigation using OpenStreetMap by OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).