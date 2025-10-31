---
source-hash: 2c2d25b6ae77f1d55f733737ddf11f54c5c9eec7a72184fdb55506bdac760262
sidebar_position: 5
title:  Wygląd trasy
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

Funkcja **Wygląd trasy** pozwala użytkownikom dostosować sposób wyświetlania tras na mapie. Obejmuje to dostosowanie koloru, szerokości, wskaźników kierunku i innych elementów wizualnych. Dostosowanie wyglądu trasy pomaga rozróżnić wiele tras, wyróżnić określone trasy i poprawić czytelność mapy.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Przegląd wyglądu trasy Android](@site/static/img/map/track-appear-and-1.png)  ![Menu trasy Wygląd Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Menu trasy Wygląd iOS](@site/static/img/map/track_appearence_1_ios.png) ![Menu trasy Wygląd iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Dostęp do menu {#access-to-the-menu}

Możesz modyfikować wygląd trasy, korzystając z jednej z następujących metod:

- **Z Moich miejsc**. Otwórz *Menu → Moje miejsca → Trasy*, wybierz trasę, dotknij *ikony Wygląd* w [menu kontekstowym trasy](../../map/tracks/track-context-menu.md#overview).
- **Z mapy**. Dotknij trasy bezpośrednio na mapie, a następnie dotknij *ikony Wygląd* w sekcji *Przegląd*.
- **Z nagrywania trasy**. Zmodyfikuj wygląd aktualnie nagrywanej trasy za pomocą [menu kontekstowego nagrywania trasy](../../plugins/trip-recording.md#current-track-recording).  
- **Z menu Konfiguruj mapę**. Przejdź do *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* dla wyświetlanych tras.


## Ustawienia wyglądu trasy {#track-appearance-settings}

### Kolor {#color}

:::tip purchases
Z niektórych ustawień można korzystać tylko z *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> i <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Darmowe i płatne funkcje.
:::

![Wygląd](@site/static/img/map/appearance_color_andr.png)

Możesz ustawić kolor trasy ręcznie lub użyć **wizualizacji danych opartej na kolorach** (np. prędkość, wysokość, nachylenie). Jeśli w trasie brakuje pewnych danych, OsmAnd wyświetla brakujące odcinki na szaro.

**Dostępne opcje kolorów:**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android"> 

![Menu trasy Wygląd Kolor trasy Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Wygląd Kolor trasy Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Menu kontekstowe kolorowania iOS](@site/static/img/map/colorisation_ios.png)

Lista **Kolorowania** otwiera się jako menu kontekstowe. Elementy mogą występować w trzech stanach: 
1. <Translate ios="true" ids="shared_string_enabled"/>. Można go zastosować do bieżącej trasy.
2. <Translate ios="true" ids="weather_update_disabled"/>. Trasie brakuje wymaganych danych.
3. PRO. Dostępne dla bieżącej trasy, ale wymaga subskrypcji; dotknięcie otwiera ekran [<Translate ios="true" ids="purchase_dialog_title"/>](https://osmand.net/docs/user/purchases/ios).

</TabItem>

</Tabs>

- **Darmowe ustawienia**: *<Translate android="true" ids="track_coloring_solid"/> kolor*, *<Translate android="true" ids="shared_string_speed"/>* (jeśli zarejestrowano) i *<Translate android="true" ids="altitude"/>* (jeśli zarejestrowano).   
- [Funkcja Pro](../../purchases/index.md): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Więcej szczegółów na temat dostosowywania wyglądu linii trasy można znaleźć w artykule [Ekran mapy podczas nawigacji](../../navigation/guidance/map-during-navigation.md#color), a na temat wybierania i tworzenia niestandardowego koloru w artykule [Schematy kolorów](../../personal/color-palette-schemes.md#routes).


### Szerokość {#width}

![Menu trasy Wygląd Grubość trasy Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Wygląd trasy](@site/static/img/map/track_appearance_width_andr.png)  

Możesz dostosować wygląd trasy w kilku menu aplikacji:

- [*Trasa → Wygląd*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Ustawienia nawigacji → Dostosuj linię trasy*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Moje miejsca → zakładka Trasy → dowolny folder → Domyślny wygląd*](../../personal/tracks/manage-tracks.md#track-folder).

Dostosuj szerokość trasy, aby poprawić jej widoczność na mapie.

- **Opcje predefiniowane**: **Cienka, Średnia** i **Pogrubiona**.

- **Szerokość niestandardowa**: Regulowana od 1 do 24 px za pomocą suwaka.

- **Szerokość oparta na profilu**: Można ustawić w *Ustawienia nawigacji → [Dostosuj linię trasy](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Podział interwału {#split-interval}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu trasy Wygląd Podział interwału Android](@site/static/img/map/split_interval_android.png)  ![Podział interwału Android](@site/static/img/map/split_interval_2_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Menu trasy Wygląd Podział interwału](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Podział interwału](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

</TabItem>

</Tabs>

Wybierz, czy interwał na trasie ma być dzielony **według odległości**, **czasu** lub **w górę/w dół** (Android), lub według **odległości** lub **czasu** (iOS). Aby wyświetlić szczegółowe statystyki według interwałów, zobacz [Analizuj według interwałów](../../map/tracks/track-context-menu.md#analyze-by-intervals) (tylko Android).


### Strzałki kierunku {#direction-arrows}

![Menu trasy Wygląd strzałki kierunku Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Dodaje **znaczniki w postaci strzałek** wzdłuż trasy, aby wskazać kierunek ruchu.

### Ikony startu i mety {#start-and-finish-icons}

![Menu trasy Wygląd ikony startu i mety Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Pozwala wybrać, czy mają być wyświetlane **ikony startu i mety** dla segmentów trasy.

### Połącz przerwy {#join-gaps}

Łączy **segmenty trasy**, które zostały przerwane z powodu utraty sygnału GPS lub przerwy w nagrywaniu. Funkcja **<Translate android="true" ids="join_segments"/>** (*Android*) lub **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) pozwala połączyć te przerwy w wybranej trasie GPX za pomocą prostych linii.

### Przywróć oryginalne {#reset-to-original}

Przywraca wszystkie **ustawienia wyglądu trasy** do ich wartości domyślnych.


## Trasa 3D {#3d-track}

:::info Paid feature
**Trasa 3D** to płatna funkcja **OsmAnd Pro** dla [iOS](../../purchases/ios.md#pro-features) i [Androida](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menu trasy Wygląd Wizualizacja 3D](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menu trasy Wygląd Wizualizacja 3D](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

Funkcja **Trasa 3D** generuje trójwymiarową wizualizację poprzez integrację danych o wysokości ze standardowymi trasami 2D. Ta funkcjonalność tworzy reprezentację o zwiększonej głębi, umożliwiając precyzyjną analizę trasy w odniesieniu do terenu. Dzięki uwzględnieniu szczegółów dotyczących wysokości, trasa 3D oferuje bardziej kompleksowy widok topografii i kontekstu geograficznego trasy.

### Ustawienia trasy 3D {#3d-track-settings}

**Wysokość ściany**  
Możesz wizualizować trasę 3D według wysokości i innych dostępnych danych w ramach trasy lub według stałej wysokości.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Wysokość*, &nbsp;*Prędkość*, &nbsp;*Stała wysokość*. Dane z czujników 3D: &nbsp;*Tętno*, &nbsp;*Kadencja rowerowa*, &nbsp;*Moc rowerowa*, &nbsp;*Temperatura*, &nbsp;*Prędkość rowerowa*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. W przypadku wizualizacji według *Wysokości* lub *Prędkości* można skalować dane 3D, aby uzyskać bardziej wyrazistą wizualizację trasy 3D w zakresie od *Brak* do *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. W przypadku wizualizacji według *Stała wysokość* ustaw stałą wysokość dla trasy 3D, definiując jej wysokość na mapie w zakresie od *Brak* do *2000 m*.

- Można to połączyć z [Rzeźbą terenu 3D](../../plugins/topography.md#3d-relief). Jeśli źródłem danych 3D nie jest wysokość, reprezentacja 3D będzie połączeniem wysokości rzeźby terenu i wybranych danych, takich jak prędkość lub tętno.

**<Translate android="true" ids="wall_color"/>**  
Dostosowuje **kolor trasy 3D** za pomocą gradientów lub wizualizacji opartej na danych.  
Opcje obejmują: *Brak*, &nbsp;*Jednolity*, &nbsp;*Gradient w dół*, &nbsp;*Gradient w górę*, &nbsp;*Wysokość*, &nbsp;*Nachylenie*, &nbsp;*Prędkość*.

**<Translate android="true" ids="track_line"/>**  
Dodaje [podświetloną linię](#color) na górze lub na dole trasy 3D.  
Opcje obejmują: *Góra*, &nbsp;*Dół*, &nbsp;*Góra i dół*.

> **UWAGA**: *Wersja aplikacji na **Androida** wymaga włączenia silnika renderowania mapy [Wersja 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine), aby korzystać z wizualizacji trasy 3D.*


### Przypadki użycia {#use-cases}

Funkcja trasy 3D jest bardzo przydatna w takich aktywnościach jak paralotniarstwo, gdzie wizualizacja toru lotu może dostarczyć głębszych spostrzeżeń. Renderując trasę w 3D, można wykorzystać takie funkcje jak **Wysokość ściany** i **Kolor ściany**, aby uzyskać cenne informacje wizualne do analizy.

1. **Wizualizacja według prędkości w 3D**.  
    Jednym z powszechnych zastosowań jest wykorzystanie tras 3D do wizualizacji zmian prędkości. Pozwala to na zlokalizowanie konkretnych odcinków trasy, na których zwolniłeś lub przyspieszyłeś.  

    Dzięki kolorowi ściany opartemu na nachyleniu można zaobserwować, jak teren, w szczególności wzniesienia i pochyłości, wpłynął na prędkość. To połączenie wizualizacji prędkości i nachylenia zapewnia szczegółowe zrozumienie wydajności podczas całej aktywności.

2. **Wizualizacja za pomocą czujnika tętna z rzeźbą terenu 3D**.  
    Innym wnikliwym zastosowaniem jest połączenie danych z czujnika tętna z mapami rzeźby terenu 3D. Pozwala to na mapowanie wahań tętna bezpośrednio na terenie, dając kompleksowy obraz tego, jak zmiany wysokości mogły wpłynąć na wysiłek fizyczny.  

    Funkcja rzeźby terenu 3D, która wyolbrzymia wysokość, działa niezależnie od widoku trasy 3D. Można dostosować dwa parametry wyolbrzymienia pionowego, aby lepiej zrozumieć korelację między tętnem a wysokością terenu.

3. **Wizualizacja wysokości trasy i linii koloru nachylenia w widoku płaskiej ziemi.**  
    Podczas wizualizacji danych o wysokości zaleca się korzystanie z widoku płaskiej ziemi, aby uniknąć problemów, takich jak błędy GPS, które mogą powodować, że fragmenty trasy pojawią się pod ziemią.  

    W tym scenariuszu zmiany nachylenia mogą być wizualizowane oddzielnie wzdłuż linii trasy, podczas gdy kolor ściany jest używany do reprezentowania wysokości. Ta metoda zapewnia, że nawet przy potencjalnych niedokładnościach danych, nadal otrzymujesz wyraźną i dokładną wizualizację nachylenia i wysokości.

## Zmiana wyglądu dla wielu tras {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wygląd Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Wygląd Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zmień wygląd](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Zmień wygląd](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

Zakładka [Trasy](../../personal/tracks/manage-tracks.md) automatycznie wyświetla wszystkie kiedykolwiek zarejestrowane, utworzone lub zaimportowane trasy. Są one uporządkowane według folderów lub wyświetlane jako lista pod nimi.  

Zmodyfikuj wygląd wielu tras w *Moje miejsca → Trasy*:

- **Zmień domyślny wygląd** - Stosuje ustawienia do wszystkich tras w [folderze](../../personal/tracks/manage-tracks.md#track-folder).
- **Przywróć oryginalne** - Przywraca indywidualne ustawienia trasy.

- [Tryb wyboru](../../personal/tracks/manage-tracks.md#selection-mode) - Zmienia wygląd określonych tras w wybranym folderze lub całej listy w zakładce Trasy.
    - Wybierz *menu z trzema kropkami* w prawym górnym rogu zakładki Trasy i dotknij *Wybierz*.
    - Następnie dotknij *menu z trzema kropkami* u góry ekranu i wybierz *Zmień wygląd*.  

Opcje masowego dostosowywania wyglądu:

- **Strzałki kierunku** - Dodaje [wskaźniki ruchu](#direction-arrows).  
    Stany: *Bez zmian*, &nbsp;*Oryginalny*, &nbsp;*Włącz*, &nbsp;*Wyłącz*.

- **Pokaż ikony startu i mety** - [Wyświetla znaczniki](#start-and-finish-icons) dla punktów początkowych i końcowych trasy.  
    Stany: *Bez zmian*, &nbsp;*Oryginalny*, &nbsp;*Włącz*, &nbsp;*Wyłącz*.

- **Kolor** – Zastosuj ręczne lub oparte na danych [kolorowanie](#color).

- **Szerokość** – Dostosuj [szerokość linii trasy](#width) za pomocą ustawień predefiniowanych lub ręcznie.

- **Podział interwału** – [Ustaw interwał](#split-interval) dla znaczników odległości / czasu.  
    Stany: *Bez zmian*, &nbsp;*Oryginalny*, &nbsp;*Wybierz*: *Czas* lub *Odległość*.

Oryginalny i bez zmian:

- **Oryginalny** - Przywraca oryginalne parametry z pliku trasy.

- **Bez zmian** - Zachowuje bieżące ustawienia podczas sesji edycji.


## Kolory tras w plikach GPX {#track-colors-in-gpx-files}

OsmAnd obsługuje **niestandardowe kolory tras** w plikach GPX za pomocą znacznika `<osmand:color>` w sekcji `<extensions>` elementu `<trk>`. Pozwala to użytkownikom definiować kolory dla poszczególnych tras, poprawiając wizualne rozróżnienie, gdy na mapie wyświetlanych jest wiele tras.

Aby określić kolor trasy, użyj następującego formatu:  

```xml
<trk>
  <name>Example Track</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- Znacznik `<osmand:color>` akceptuje **szesnastkowe kody kolorów** (np. `#FF0000` dla czerwonego).
- Jeśli w pliku GPX istnieje wiele tras, każda trasa może mieć własny znacznik `<osmand:color>`.


**Zachowanie w OsmAnd:**

1. **Domyślne przypisanie koloru**:  

    - Gdy **trasa GPX jest importowana jako pojedyncza trasa** (opcja ***Importuj jako jedną trasę***), całej trasie przypisywany jest **domyślny kolor GPX** (czerwony).  
    - W OsmAnd **4.9.10 i nowszych** ten problem został rozwiązany — poszczególne kolory tras są teraz zachowywane po imporcie.

2. **Wyświetlanie jednego koloru dla połączonych tras:**  

    - Jeśli trasy są **łączone** za pomocą opcji ***Połącz segmenty***, wynikowa trasa jest traktowana jako **jedna ciągła trasa z jednym segmentem**.
    - Reprezentacja wielokolorowa **nie jest obsługiwana** dla połączonych tras.
    - Połączona trasa będzie wyświetlana przy użyciu **głównego koloru GPX** (domyślnie: czerwony), nawet jeśli poszczególne segmenty trasy miały pierwotnie różne kolory.

3. **Priorytet ustawień wyglądu:**  

    - OsmAnd obecnie obsługuje **ustawienia koloru i szerokości tylko dla całej trasy**.
    - Te ustawienia wyglądu są przechowywane w **rozszerzeniach GPX najwyższego poziomu**.
    - Jeśli kolor lub szerokość są **ustawione na najwyższym poziomie** (w pliku GPX lub ręcznie w OsmAnd), to ustawienie będzie miało pierwszeństwo przed kolorami przypisanymi do poszczególnych segmentów trasy.

**Obejście dla tras wielokolorowych:**

- Aby zachować **indywidualne kolory dla wielu tras**, **importuj trasy oddzielnie**, zamiast je łączyć.

- Dostosuj kolory tras ręcznie w **Ustawieniach wyglądu trasy**:

  - Otwórz trasę w OsmAnd.
  - Dotknij trasy, aby otworzyć **Menu kontekstowe**.
  - Wybierz **Wygląd**.
  - Wybierz preferowany kolor.

- Zapewnia to, że każda trasa zachowuje swoją **zamierzoną reprezentację kolorystyczną**, nawet jeśli plik GPX pierwotnie zawierał wiele segmentów o różnych kolorach.


## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](../map-context-menu.md)
- [Konfiguruj mapę](../configure-map-menu.md)
- [Punkty na mapie](../point-layers-on-map.md)
- [Trasy](../tracks/index.md)
- [Menu kontekstowe tras](../tracks/track-context-menu.md)
- [Nagrywanie podróży](../../plugins/trip-recording.md)