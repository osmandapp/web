---
source-hash: 90a0b74b4490473745395b99a2752c49185e30cca6fc93a62ca20659393e7eed
sidebar_position: 5
title: Wygląd śladu
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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Przegląd {#overview}

Funkcja **Wygląd śladu** umożliwia użytkownikom dostosowanie sposobu wyświetlania śladów na mapie. Obejmuje to dostosowanie koloru, szerokości, wskaźników kierunku i innych elementów wizualnych. Dostosowanie wyglądu śladu pomaga odróżnić wiele śladów, wyróżnić określone trasy i poprawić czytelność mapy.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

![Track Appearance overview Android](@site/static/img/map/track-appear-and-1.png)  ![Track menu Appearance Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance iOS](@site/static/img/map/track_appearence_1_ios.png) ![Track menu Appearance iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Dostęp do menu {#access-to-the-menu}

Wygląd śladu można modyfikować za pomocą jednej z następujących metod:

- **Z Moich Miejsc**. Otwórz *Menu → Moje Miejsca → Ślady*, wybierz ślad, dotknij *ikonę Wygląd* w [menu kontekstowym śladu](../../map/tracks/track-context-menu.md#overview).
- **Z mapy**. Dotknij ślad bezpośrednio na mapie, a następnie dotknij *ikonę Wygląd* w sekcji *Przegląd*.
- **Z nagrywania śladu**. Zmodyfikuj wygląd aktualnie nagrywanego śladu za pomocą [menu kontekstowego nagrywania śladu](../../plugins/trip-recording.md#сurrent-track-recording).  
- **Z menu Konfiguruj mapę**. Przejdź do *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* dla wyświetlanych śladów.


## Ustawienia wyglądu śladu {#track-appearance-settings}

### Kolor {#color}

:::tip purchases
Niektóre ustawienia są dostępne tylko w *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> i <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Funkcje darmowe i płatne.
:::

![Appearance](@site/static/img/map/appearance_color_andr.png)

Kolor śladu można ustawić ręcznie lub użyć **wizualizacji danych opartej na kolorze** (np. prędkość, wysokość, nachylenie). Jeśli ślad nie posiada pewnych danych, OsmAnd wyświetla brakujące sekcje na szaro.

**Dostępne opcje kolorów:**

- **Ustawienia darmowe**: *<Translate android="true" ids="track_coloring_solid"/> kolor*, *<Translate android="true" ids="shared_string_speed"/>* (jeśli nagrano) i *<Translate android="true" ids="altitude"/>* (jeśli nagrano).

    ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- [Funkcja Pro](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Więcej szczegółów na temat dostosowywania wyglądu linii trasy można znaleźć w [Ekran mapy podczas nawigacji](../../navigation/guidance/map-during-navigation.md#color) oraz na temat wyboru i tworzenia niestandardowego koloru w [Schematy kolorów](../../personal/color-palette-schemes.md#routes).


### Szerokość {#width}

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Track Appearance](@site/static/img/map/track_appearance_width_andr.png)  

Wygląd śladu można dostosować w kilku menu aplikacji:

- [*Ślad → Wygląd*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Ustawienia nawigacji → Dostosuj linię trasy*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Moje Miejsca → Zakładka Ślady → dowolny folder → Domyślny wygląd*](../../personal/tracks/manage-tracks.md#track-folder).

Dostosuj szerokość śladu, aby poprawić widoczność na mapie.

- **Dostępne opcje**: **Cienki, Średni** i **Gruby**.

- **Niestandardowa szerokość**: Regulowana od 1 do 24 px za pomocą suwaka.

- **Szerokość oparta na profilu**: Można ustawić za pomocą *Ustawienia nawigacji → [Dostosuj linię trasy](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Interwał podziału {#split-interval}

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)  

Wybierz, czy interwał na śladzie ma być dzielony **według odległości czy według czasu**.

### Strzałki kierunku {#direction-arrows}

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Dodaje **znaczniki strzałek** wzdłuż śladu, aby wskazać kierunek ruchu.

### Ikony początku i końca {#start-and-finish-icons}

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Umożliwia wybranie, czy mają być wyświetlane **ikony początku i końca** dla segmentów śladu.

### Połącz luki {#join-gaps}

Łączy **segmenty śladu**, które zostały przerwane z powodu utraty sygnału GPS lub pauzy w nagrywaniu. Funkcja **<Translate android="true" ids="join_segments"/>** (*Android*) lub **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) umożliwia połączenie tych luk w wybranym śladzie GPX za pomocą prostych linii.

### Przywróć do oryginału {#reset-to-original}

Przywraca wszystkie **ustawienia wyglądu śladu** do wartości domyślnych.


## Ślad 3D {#3d-track}

:::info Paid feature
**Ślad 3D** to płatna funkcja **OsmAnd Pro** dla [iOS](../../purchases/ios.md#pro-features) i [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

Funkcja **Ślad 3D** generuje trójwymiarową wizualizację poprzez integrację danych wysokościowych ze standardowymi śladami 2D. Ta funkcjonalność tworzy wzbogaconą o głębię reprezentację, umożliwiając precyzyjną analizę śladu w odniesieniu do terenu. Poprzez uwzględnienie szczegółów wysokościowych, ślad 3D oferuje bardziej kompleksowy widok topografii i kontekstu geograficznego trasy.

### Ustawienia śladu 3D {#3d-track-settings}

**Wysokość ściany**  
Ślad 3D można wizualizować według wysokości i innych dostępnych danych w ramach śladu lub według stałej wysokości.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Wysokość*, &nbsp;*Prędkość*, &nbsp;*Stała wysokość*. Dane z czujnika 3D: &nbsp;*Tętno*, &nbsp;*Kadencja rowerowa*, &nbsp;*Moc rowerowa*, &nbsp;*Temperatura*, &nbsp;*Prędkość rowerowa*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Jeśli wizualizowany według *Wysokości* lub *Prędkości*, można skalować dane 3D, aby uzyskać bardziej wyraźną wizualizację śladu 3D w zakresie od *Brak* do *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. Jeśli wizualizowany według *Stała wysokość*, ustaw stałą wysokość dla śladu 3D, definiując jego wysokość na mapie w zakresie od *Brak* do *2000 m*.

- Można to połączyć z [Reliefem 3D](../../plugins/topography.md#3d-relief). Jeśli źródłem danych 3D nie jest wysokość, reprezentacja 3D będzie połączeniem wysokości reliefu i wybranych danych, takich jak prędkość lub tętno.

**<Translate android="true" ids="wall_color"/>**  
Dostosowuje **kolor śladu 3D** za pomocą gradientów lub wizualizacji opartej na danych.  
Opcje obejmują: *Brak*, &nbsp;*Jednolity*, &nbsp;*Gradient w dół*, &nbsp;*Gradient w górę*, &nbsp;*Wysokość*, &nbsp;*Nachylenie*, &nbsp;*Prędkość*.

**<Translate android="true" ids="track_line"/>**  
Dodaje [podświetloną linię](#color) do góry lub dołu śladu 3D.  
Opcje obejmują: *Góra*, &nbsp;*Dół*, &nbsp;*Góra i dół*.

> **UWAGA**: *Wersja aplikacji na **Androida** wymaga włączenia silnika renderowania map [Wersja 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine), aby korzystać z wizualizacji śladu 3D.*


### Przypadki użycia {#use-cases}

Funkcja śladu 3D jest bardzo korzystna w przypadku aktywności takich jak paralotniarstwo, gdzie wizualizacja ścieżki lotu może dostarczyć głębszych informacji. Renderując ślad w 3D, można wykorzystać funkcje takie jak **Wysokość ściany** i **Kolor ściany**, aby uzyskać cenne informacje wizualne do analizy.

1. **Wizualizacja według prędkości w 3D**.  
    Jednym z typowych zastosowań jest wykorzystanie śladów 3D do wizualizacji zmian prędkości. Pozwala to na precyzyjne określenie konkretnych odcinków śladu, na których zwolniłeś lub przyspieszyłeś.  

    Dzięki kolorowi ściany opartemu na nachyleniu, możesz obserwować, jak teren, zwłaszcza wzgórza i wzniesienia, wpływał na Twoją prędkość. Ta kombinacja wizualizacji prędkości i nachylenia zapewnia szczegółowe zrozumienie wydajności podczas całej aktywności.

2. **Wizualizacja według czujnika tętna z reliefem 3D**.  
    Innym przydatnym zastosowaniem jest połączenie danych z czujnika tętna z mapami reliefu 3D. Pozwala to na bezpośrednie mapowanie wahań tętna na teren, dając kompleksowy obraz tego, jak zmiany wysokości mogły wpłynąć na Twój wysiłek fizyczny.  

    Funkcja reliefu 3D, która wyolbrzymia wysokość, działa niezależnie od widoku śladu 3D. Dwa parametry wyolbrzymienia pionowego mogą być dostosowane, aby lepiej zrozumieć korelację między tętnem a wysokością terenu.

3. **Wizualizacja wysokości śladu i linii koloru nachylenia na płaskim widoku Ziemi.**  
    Podczas wizualizacji danych wysokościowych zaleca się użycie płaskiego widoku Ziemi, aby uniknąć problemów, takich jak błędy GPS, które mogą spowodować, że odcinki śladu będą wyświetlane pod ziemią.  

    W tym scenariuszu zmiany nachylenia mogą być wizualizowane oddzielnie wzdłuż linii śladu, podczas gdy kolor ściany jest wykorzystywany do reprezentowania wysokości. Ta metoda zapewnia, że nawet przy potencjalnych niedokładnościach danych, nadal otrzymujesz wyraźną i dokładną wizualizację nachylenia i wysokości.

## Zmień wygląd wielu śladów {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Change Appearance](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Change Appearance](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

Zakładka [Ślady](../../personal/tracks/manage-tracks.md) automatycznie wyświetla wszystkie kiedykolwiek nagrane, utworzone lub zaimportowane ślady. Są one uporządkowane według folderów lub wyświetlane jako lista poniżej nich.  

Modyfikuj wygląd wielu śladów w *Moje Miejsca → Ślady*:

- **Zmień domyślny wygląd** - Stosuje ustawienia do wszystkich śladów w [folderze](../../personal/tracks/manage-tracks.md#track-folder).
- **Przywróć do oryginału** - Przywraca indywidualne ustawienia śladu.

- [Tryb wyboru](../../personal/tracks/manage-tracks.md#selection-mode) - Zmienia wygląd określonych śladów w wybranym folderze lub całej listy w zakładce Ślady.
    - Wybierz *menu z trzema kropkami* w prawym górnym rogu zakładki Ślady i dotknij *Wybierz*.
    - Następnie dotknij *menu z trzema kropkami* u góry ekranu i wybierz *Zmień wygląd*.  

Opcje dostosowywania wyglądu zbiorczego:

- **Strzałki kierunku** - Dodaje [wskaźniki ruchu](#direction-arrows).  
    Stany: *Bez zmian*, &nbsp;*Oryginalny*, &nbsp;*Włączony*, &nbsp;*Wyłączony*.

- **Pokaż ikony początku i końca** - [Wyświetla znaczniki](#start-and-finish-icons) dla punktów początkowych i końcowych śladu.  
    Stany: *Bez zmian*, &nbsp;*Oryginalny*, &nbsp;*Włączony*, &nbsp;*Wyłączony*.

- **Kolor** – Zastosuj ręczne lub oparte na danych [kolorowanie](#color).

- **Szerokość** – Dostosuj [szerokość linii śladu](#width) za pomocą predefiniowanych ustawień lub ręcznie.

- **Interwał podziału** – [Ustaw interwał](#split-interval) dla znaczników odległości / czasu.  
    Stany: *Bez zmian*, &nbsp;*Oryginalny*, &nbsp;*Wybierz*: *Czas* lub *Odległość*.

Oryginalne i niezmienione:

- **Oryginalny** - Przywraca oryginalne parametry z pliku śladu.

- **Bez zmian** - Zachowuje bieżące ustawienia podczas sesji edycji.


## Kolory śladów w plikach GPX {#track-colors-in-gpx-files}

OsmAnd obsługuje **niestandardowe kolory śladów** w plikach GPX za pomocą znacznika `<osmand:color>` w sekcji `<extensions>` elementu `<trk>`. Umożliwia to użytkownikom definiowanie kolorów dla poszczególnych śladów, co zwiększa wizualne rozróżnienie, gdy na mapie wyświetlanych jest wiele śladów.

Aby określić kolor dla śladu, użyj następującego formatu:  

```xml
<trk>
  <name>Przykładowy ślad</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- Tag `<osmand:color>` akceptuje **szesnastkowe kody kolorów** (np. `#FF0000` dla czerwonego).
- Jeśli w pliku GPX istnieje wiele śladów, każdy ślad może mieć swój własny tag `<osmand:color>`.


**Zachowanie w OsmAnd:**

1. **Domyślne przypisanie koloru**:  

    - Gdy **ślad GPX jest importowany jako pojedynczy ślad** (opcja ***Importuj jako jeden ślad***), cały ślad otrzymuje **domyślny kolor GPX** (czerwony).  
    - W OsmAnd **4.9.10 i nowszych** ten problem został rozwiązany — indywidualne kolory śladów są teraz zachowywane po imporcie.

2. **Wyświetlanie pojedynczego koloru dla połączonych śladów:**  

    - Jeśli ślady są **łączone** za pomocą ***Połącz segmenty***, wynikowy ślad jest traktowany jako **jeden ciągły ślad z jednym segmentem**.
    - Reprezentacja wielokolorowa **nie jest obsługiwana** dla połączonych śladów.
    - Połączony ślad będzie wyświetlany przy użyciu **głównego koloru GPX** (domyślnie: czerwony), nawet jeśli poszczególne segmenty śladu pierwotnie miały różne kolory.

3. **Priorytet ustawień wyglądu:**  

    - OsmAnd obecnie obsługuje **ustawienia koloru i szerokości tylko dla całego śladu**.
    - Te ustawienia wyglądu są przechowywane w **rozszerzeniach GPX najwyższego poziomu**.
    - Jeśli kolor lub szerokość są **ustawione na najwyższym poziomie** (albo w pliku GPX, albo ręcznie w OsmAnd), to ustawienie będzie miało pierwszeństwo przed kolorami przypisanymi do poszczególnych segmentów śladu.

**Obejście dla śladów wielokolorowych:**

- Aby zachować **indywidualne kolory dla wielu śladów**, **importuj ślady oddzielnie** zamiast je łączyć.

- Dostosuj kolory śladów ręcznie w **Ustawieniach wyglądu śladu**:

  - Otwórz ślad w OsmAnd.
  - Dotknij ślad, aby otworzyć **Menu kontekstowe**.
  - Wybierz **Wygląd**.
  - Wybierz preferowany kolor.

- Zapewnia to, że każdy ślad zachowuje swoją **zamierzoną reprezentację kolorystyczną**, nawet jeśli plik GPX pierwotnie zawierał wiele segmentów o różnych kolorach.


## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](../map-context-menu.md)
- [Konfiguruj mapę](../configure-map-menu.md)
- [Punkty na mapie](../point-layers-on-map.md)
- [Ślady](../tracks/index.md)
- [Menu kontekstowe śladów](../tracks/track-context-menu.md)
- [Nagrywanie podróży](../../plugins/trip-recording.md)

> *Ostatnia aktualizacja: luty 2025*