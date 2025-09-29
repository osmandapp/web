---
source-hash: 80dc4983a69b5c41013a01014add8bf4ae3e59f35fc0c079bd4e47887e3e4bea
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
Nawigacja transportem publicznym jest w fazie testów. Na razie można zbudować i wyświetlić trasę bez pełnej funkcji nawigacji.
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


## Dane i wytyczne {#data-and-guideline}

OsmAnd wykorzystuje nowy schemat transportu publicznego, zwany również Public Transport Version 2 (PTv2), dla algorytmu nawigacji transportem publicznym OsmAnd.

- Możesz sprawdzić swój transport publiczny [tutaj](http://tools.geofabrik.de/osmi/).
- Przewodnik po budowaniu lub dostosowywaniu tras transportu publicznego jest dostępny na naszym [blogu](https://osmand.net/blog/guideline-pt).
- Prezentacja [2019: Public Transport Navigation using OpenStreetMap by OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).