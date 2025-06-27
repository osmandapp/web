---
source-hash: 4555734ace3e7132cbe343a64b51b8a14b9f7d50262e566f5b87185e156e7f36
sidebar_position: 5
title:  Wyznaczanie tras komunikacji miejskiej
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

Nawigacja komunikacją miejską w aplikacji OsmAnd pozwala na wyznaczanie tras z wykorzystaniem transportu publicznego, co z pewnością pomoże szybciej poruszać się po „betonowej dżungli”.

Dane o trasach komunikacji miejskiej pochodzą z projektu [OpenStreetMap](http://openstreetmap.org/). OsmAnd wykorzystuje schemat [PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) do nawigacji. OsmAnd obsługuje następujące trasy OpenStreetMap do nawigacji: *autobus*, *trolejbus*, *share_taxi*, *kolej linowo-terenowa*, *metro*, *lekka kolej*, *kolej jednoszynowa*, *pociąg*, *tramwaj*, *prom*. Domyślna prędkość dla każdego typu pojazdu jest skonfigurowana w [Routing xml](../../../technical/build-osmand/routing.md) i jest używana do znajdowania najszybszych tras.

:::note
Wyznaczanie tras komunikacji miejskiej jest w fazie testów. Na razie możesz budować i przeglądać swoją trasę bez pełnej funkcji nawigacji.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Nawigacja komunikacja miejska Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Nawigacja komunikacja miejska iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Jak używać {#how-to-use}

Aby rozpocząć nawigację po mieście komunikacją miejską, użyj [przycisku nawigacji](../../widgets/map-buttons.md#directions) na ekranie mapy lub wybierz opcję nawigacji w *Menu głównym*.  

**1.** Musisz wybrać *profil nawigacji komunikacji miejskiej*, punkty początkowy i docelowy.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trasy nawigacji komunikacji miejskiej Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Trasy nawigacji komunikacji miejskiej iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd oferuje opcje tras z czasami przejścia pieszo oraz trasy komunikacji miejskiej z informacjami o trasie: czas, odległość, przesiadki i trasy publiczne. Musisz przewinąć ekran nawigacji, aby wybrać wymaganą opcję.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Nawigacja komunikacja miejska trasa Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Nawigacja komunikacja miejska trasa iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Możesz wyświetlić wszystkie możliwe sugestie tras na mapie za pomocą przycisku *Pokaż na mapie*. Przesuwaj ekrany, aby wyświetlić następną opcję trasy.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Szczegóły nawigacji komunikacji miejskiej Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Szczegóły nawigacji komunikacji miejskiej iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Dotknij przycisku „Szczegóły”, aby otworzyć opis wybranej trasy ze wszystkimi przystankami i przesiadkami.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Lista przystanków nawigacji komunikacji miejskiej Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Lista przystanków nawigacji komunikacji miejskiej iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Dane i wytyczne {#data-and-guideline}

OsmAnd wykorzystuje nowy schemat transportu publicznego, zwany również Public Transport Version 2 (PTv2), dla algorytmu nawigacji transportu publicznego OsmAnd.

- Możesz sprawdzić swój transport publiczny [tutaj](http://tools.geofabrik.de/osmi/).
- Przewodnik po budowaniu lub dostosowywaniu tras transportu publicznego jest dostępny na naszym [blogu](https://osmand.net/blog/guideline-pt).
- Prezentacja [2019: Nawigacja transportem publicznym przy użyciu OpenStreetMap przez OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *Ostatnia aktualizacja: czerwiec 2024.*