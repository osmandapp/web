---
source-hash: 21283db3b00701562a96fe4d5d41814c5e611b4278089388e11aae43e71649e9
sidebar_position: 2
title:  Interakcja z mapą
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

W tym artykule wyjaśniono, jak dostosowywać mapę i wchodzić z nią w interakcje za pomocą różnych przycisków i gestów. Opisano w nim, jak obracać, powiększać, dostosowywać kąt widzenia i zmieniać kąt widzenia mapy, obracać ją ręcznie lub automatycznie za pomocą kompasu lub zgodnie z namiarem.


## Gesty {#gestures}

Gesty są niezbędne do łatwego i intuicyjnego poruszania się po mapie.

| Akcja na mapie | Gest |
|:---|:---|
| **Przesuń** | Dotknij i przytrzymaj mapę **jednym** palcem, a następnie przeciągnij, aby się poruszać. |
| **Przesuń** | Przesuń mapę **jednym** palcem. |
| **Powiększ** | Stuknij dwukrotnie mapę **jednym** palcem. <br/> Stuknij dwukrotnie **jednym** palcem i przesuń w dół. <br/> Uszczypnij **dwoma** palcami, aby powiększyć. |
| **Pomniejsz** | Stuknij dwukrotnie **dwoma** palcami. <br/> Stuknij dwukrotnie **jednym** palcem i przesuń w górę. <br/> Uszczypnij **dwoma** palcami, aby pomniejszyć. |
| **Obróć** | Stuknij mapę **dwoma** palcami, a następnie obróć palce ruchem okrężnym. |
| **Pochyl (3D)** | Stuknij **dwoma** palcami i przesuń je w górę lub w dół. <br/> Dostępne tylko z [silnikiem renderowania mapy](../personal/global-settings.md#map-rendering-engine) w wersji 2 (OpenGL). |

Animacje przesuwania można wyłączyć w ustawieniach za pomocą [specjalnej opcji](#no-animations).


## Moja lokalizacja i Powiększenie {#my-location-and-zoom}

![Menu Konfiguruj ekran](@site/static/img/widgets/location_zoom_buttons.png)

**Moja lokalizacja**.  
Przycisk *Moja lokalizacja* to okrągła ikona, która wskazuje, czy środek mapy jest zsynchronizowany z bieżącą geolokalizacją urządzenia. Często nazywany przyciskiem "Gdzie jestem?", pomaga szybko znaleźć swoją lokalizację na mapie. Podczas nawigacji mapa zazwyczaj pozostaje zsynchronizowana z lokalizacją urządzenia, więc przycisk pozostaje ukryty. Staje się on jednak widoczny, jeśli mapa i lokalizacja nie są zsynchronizowane z powodu interakcji użytkownika. Stuknięcie przycisku spowoduje ponowne wyśrodkowanie mapy na bieżącej lokalizacji, a podwójne stuknięcie przełączy widok w tryb 3D.

- Przycisk *Moja lokalizacja* ma następujące stany:
  - *Pełna niebieska ikona*. Lokalizacja została znaleziona, ale nie jest zsynchronizowana z mapą.
  - *Biała ikona*. Lokalizacja została znaleziona i jest zsynchronizowana z mapą.
  - *Szara ikona*. Lokalizacja nie została jeszcze znaleziona.
  - *Ikona strzałki*. Tryb 3D jest aktywny.

- **Długie stuknięcie** (*Android*) przycisku *Moja lokalizacja* otwiera [menu kontekstowe mapy](../map/map-context-menu.md), umożliwiając udostępnienie swojej lokalizacji.

<br/>

**Przyciski powiększenia**.  
*Przyciski powiększenia* są zawsze widoczne obok przycisku *Moja lokalizacja* i umożliwiają sterowanie poziomem powiększenia mapy.

- Zmiana poziomu powiększenia nie wpływa na synchronizację mapy z lokalizacją.
- **Długie stuknięcie** *przycisków powiększenia* otwiera okno dialogowe *Lupa mapy*, umożliwiając dostosowanie poziomu szczegółowości mapy.
- Należy pamiętać, że podczas nawigacji powiększenie może być kontrolowane automatycznie przez ustawienie **Automatyczne powiększanie**:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

### Wygląd Mojej lokalizacji {#my-location-appearance}

Możesz dostosować ikony przycisku **Moja lokalizacja** za pomocą ustawień wyglądu profilu. Przeczytaj więcej o tym, jak to zrobić [tutaj](../personal/profiles.md#profile-appearance).


## Lupa mapy {#map-magnifier}

*Lupa mapy* to narzędzie, które poprawia widoczność mapy, podobnie jak szkło powiększające używane z mapami papierowymi. Pozwala powiększyć mapę, aby wyraźniej zobaczyć tekst i szczegóły lub dostosować poziom szczegółowości przy zachowaniu tej samej skali. Aby uzyskać więcej informacji, przejdź do artykułu [Mapy wektorowe](../map/vector-maps.md#map-magnifier).


## Tryby orientacji mapy {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widżet Kompas](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widżet Kompas](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

*Tryby orientacji mapy* pozwalają wybrać sposób wyświetlania mapy na ekranie urządzenia. OsmAnd oferuje takie tryby jak **Obracana ręcznie**, **Kierunek ruchu**, **Kierunek kompasu** i **Północ na górze**. Włączenie każdego trybu zmienia sposób orientacji mapy zgodnie z wybraną opcją. Pełne szczegóły można znaleźć w artykule [Przyciski mapy](../widgets/map-buttons.md#compass).


## Kompas {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widżet Kompas](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widżet Kompas](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Przycisk kompasu pokazuje, jak [zorientowana jest mapa](#map-orientation-modes). *Czerwona strzałka* na ikonach lub kierunek strzałki w trybie *Kierunek ruchu* wskazuje północ. [Ikona na przycisku kompasu](../widgets/map-buttons.md#compass) wskazuje bieżący tryb orientacji mapy. Widżet przycisku kompasu oferuje trzy [opcje interakcji](../widgets/map-buttons.md#compass-tapping-behavior): *Pojedyncze stuknięcie* obraca mapę na północ, *Podwójne stuknięcie* przełącza między wszystkimi trybami orientacji mapy, a *Długie stuknięcie* otwiera listę trybów.


## Obracanie mapy według namiaru {#rotate-map-by-bearing}

W trybie **obracania mapy według namiaru** ([Kierunek ruchu](../widgets/map-buttons.md#compass)), mapa automatycznie dopasowuje się do kierunku ruchu, dzięki czemu obszar przed Tobą jest wyświetlany na górze ekranu. Tryb ten usprawnia nawigację, przesuwając środek mapy nieco w dół, pokazując więcej trasy przed Tobą. Jeśli stoisz w miejscu, mapa pozostaje nieruchoma.  

Funkcję tę można aktywować za pomocą *Menu → Ustawienia → Profile → Ustawienia ogólne → Wygląd → Orientacja mapy* lub poprzez dwukrotne stuknięcie [przycisku Kompas](../widgets/map-buttons.md#compass-tapping-behavior). Więcej szczegółów na temat namiaru można znaleźć [tutaj](../widgets/nav-widgets.md#bearing-widget).


## Pochylenie mapy i horyzont {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pochylenie android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Pochylenie android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Pochylenie ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Pochylenie ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

Dzięki nowemu [silnikowi renderowania mapy](../personal/global-settings.md#map-rendering-engine) można zmienić [pochylenie kamery](../plugins/development.md#camera-tilt) z 90 (bez pochylenia) do 10 stopni. Przy pochyleniu mapy mniejszym niż 20-22 stopnie (parametr ten zależy od poziomu powiększenia), widoczna staje się wyimaginowana linia horyzontu. W przeciwieństwie do prawdziwego, horyzont programu jest zawsze prosty.  

Pod horyzontem widać tak zwaną *mgłę*. Ten obszar mapy jest wypełniony szarym kolorem, można zaobserwować tylko kilka szczegółów mapy.  
Zastosowanie mgły jest konieczne, ponieważ wyświetlanie odległych obiektów na mapie wymaga znacznych zasobów obliczeniowych i nie zawsze jest uzasadnione ze względu na [zniekształcenia](../plugins/development.md#comparison-with-a-satellite-imagery) mapy przy małych kątach widzenia. Tak więc widoczna odległość na mapie OsmAnd jest obecnie ograniczona do 35 kafelków.  

:::info
Pochylenie mapy można zmienić, dotykając długo ekranu dwoma palcami i przesuwając je w górę/w dół. Można również zmienić pochylenie, dotykając ikony [Moja lokalizacja](#my-location-and-zoom) w prawym dolnym rogu ekranu (dostępne są tylko pozycje 45 i 90 stopni).  
Nie można zmienić pochylenia kamery, gdy włączony jest stary [silnik renderowania mapy](../personal/global-settings.md#map-rendering-engine) (wersja 1).
:::


## Blokada ekranu dotykowego {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przycisk szybkiej akcji Blokada ekranu dotykowego Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przycisk szybkiej akcji Blokada ekranu dotykowego iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Użyj funkcji **Blokada ekranu dotykowego**, aby uniknąć przypadkowych dotknięć podczas nawigacji. Jest to szczególnie przydatne podczas takich aktywności jak jazda na rowerze czy piesze wędrówki, gdzie niezamierzone dotknięcia mogą zakłócić trasę.

**Odblokowywanie**.  
Stuknij przycisk na ekranie lub, jeśli blokada jest aktywowana za pomocą przycisku zewnętrznego (np. Zmniejsz głośność), naciśnij przycisk zewnętrzny i stuknij przycisk na ekranie.  

**Konfiguracja**.

- Przejdź do *Menu → Konfiguruj ekran → Przyciski niestandardowe*.
- Wybierz *+ → Dodaj akcję → Interfejs → Blokada ekranu dotykowego*.

Wyraźne komunikaty na ekranie poprowadzą Cię podczas blokowania lub odblokowywania ekranu.


## Ustawienia {#settings}

### Dodatkowe ustawienia kompasu {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Wygładza obrót mapy za pomocą wolniejszej animacji obrotu, chociaż wprowadza to niewielkie opóźnienie, nie większe niż 1 sekunda.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Wygładza obrót mapy za pomocą wolniejszej animacji obrotu, chociaż wprowadza to niewielkie opóźnienie, nie większe niż 1 sekunda.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Brak animacji {#no-animations}

<InfoAndroidOnly/>  

Możesz wyłączyć wszystkie animacje mapy podczas interakcji z mapą, w tym gesty i przyciski.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Animuj własną pozycję {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Tworzy płynny efekt przesuwania mapy w porównaniu z ikoną *[Moja pozycja](../personal/profiles/#profile-appearance)* podczas ruchu. Efekt wprowadza niewielkie opóźnienie w stosunku do rzeczywistej pozycji, wynoszące około 1 sekundy. Zgłaszano, że włączenie tej opcji powoduje w niektórych okolicznościach wyraźne problemy z opóźnieniami; należy ją wyłączyć, jeśli takie problemy wystąpią.


## Zewnętrzne urządzenia wejściowe {#external-input-devices}

Przyciski zewnętrznych urządzeń wejściowych zapewniają wygodny i wydajny sposób interakcji z mapą i interfejsem aplikacji OsmAnd. Znajdują się one na urządzeniach zewnętrznych, takich jak **klawiatury Bluetooth lub innego typu**, **specjalistyczne przyciski na urządzeniach nawigacyjnych w pojazdach** lub kontrolery [WunderLINQ](https://blackboxembedded.com/) i [Parrot](https://www.parrot.com/en).  

Jedną z głównych funkcji przycisków na zewnętrznych urządzeniach wejściowych jest powiększanie i pomniejszanie mapy. Umożliwiają one również nawigację po mapie i zmianę jej orientacji bez konieczności stukania i wykonywania gestów na ekranie. Przyciski na zewnętrznych urządzeniach wejściowych obsługują wiele innych funkcji, takich jak otwieranie *Menu głównego*.

:::note
Klawiatura pozostaje funkcjonalna nawet wtedy, gdy opcja *Zewnętrzne urządzenia wejściowe* jest wyłączona, a wybrano *Brak*.
:::

### Skonfigurowane urządzenie wejściowe {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Urządzenia zewnętrzne](@site/static/img/map/external_menu_android.png) ![Urządzenia zewnętrzne](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Urządzenia zewnętrzne](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>  

Aby uzyskać dostęp do ustawień zewnętrznego urządzenia wejściowego, należy włączyć tę funkcję.

- Przejdź do *Menu główne → Ustawienia →* wybierz *Profil → Ustawienia ogólne → Inne → Zewnętrzne urządzenia wejściowe* i przełącz na *Włączone*.

- Wybierz urządzenie z listy obsługiwanych przez OsmAnd, stukając pozycję *Typ* na liście:  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*tylko Android*) lub utwórz [**własny typ**](#custom-input-device-type) (*tylko Android*).

- Dla każdego typu zewnętrznego urządzenia wejściowego istnieje inny **zdefiniowany zestaw przypisań akcja-klawisz**. Stuknij *<Translate android="true" ids="key_assignments"/>*, aby zobaczyć listę akcji i klawiszy. Tabela klawiszy znajduje się poniżej.

- Więcej informacji na temat akcji zewnętrznych urządzeń wejściowych można znaleźć na GitHub w pakiecie [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Klawisz | Urządzenie | Akcja |
|:---|:---|:---|
|**C**| *Klawiatura* | Przesuń - [Do Mojej lokalizacji](#my-location-and-zoom) |
|**D**| *Klawiatura* | Zmień - [Orientacja mapy](#map-orientation-modes) |
|**N**| *Klawiatura* | Pokaż / Ukryj - Widok nawigacji |
|**S**| *Klawiatura* | Pokaż / Ukryj - [Widok wyszukiwania](../search/index.md) |
|**P**| *Klawiatura* | Zmień - Profil aplikacji na następny |
|**O**| *Klawiatura* | Zmień - Profil aplikacji na poprzedni |
|**&#8593;**| *Klawiatura* | Przesuń - Mapa w górę |
|**&#8595;**| *Klawiatura* | Przesuń - Mapa w dół |
|**&#8592;**| *Klawiatura* | Przesuń - Mapa w lewo |
|**&#8594;**| *Klawiatura* | Przesuń - Mapa w prawo |
|**&#43;** **=**| *Klawiatura* | Mapa - [Powiększ](#my-location-and-zoom) |
|**&#8722;**| *Klawiatura* | Mapa - [Pomniejsz](#my-location-and-zoom) |
|**Naciśnij Wstecz**| *Klawiatura* | Nawiguj – Poprzedni ekran |
|**&#8595;**| *Wunderlinq* | Mapa - [Pomniejsz](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq* | Mapa - [Powiększ](#my-location-and-zoom) |
| **ESC** | *Wunderlinq* | Otwórz siatkę danych WunderLINQ |
| **M** <br/> (*starszy Android*) | *Klawiatura* | Pokaż / Ukryj - [Menu boczne](../start-with/main-menu.md#main-menu-side-menu) |
| **Naciśnięcie joysticka** <br/> (*starszy Android*) | *Klawiatura* | Przesuń - [Do Mojej lokalizacji](#my-location-and-zoom) |
| **Przycisk multimedialny** <br/> (*tylko Android*)| *Klawiatura* | Pokaż / Ukryj - [Notatki AV](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*tylko Android*)| *Parrot* | Mapa - [Pomniejsz](#my-location-and-zoom) |
| **&#8594;** <br/> (*tylko Android*) | *Parrot* | Mapa - [Powiększ](#my-location-and-zoom) |


### Niestandardowy typ urządzenia wejściowego {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Urządzenia zewnętrzne](@site/static/img/map/external_mypilot_android.png)  ![Urządzenia zewnętrzne](@site/static/img/map/external_mypilot2_android.png)

Jeśli chcesz przypisać klawisze do zewnętrznego urządzenia wejściowego (takiego jak klawiatura, joystick lub kontroler), musisz utworzyć typ urządzenia: przejdź do ustawienia [Zewnętrzne urządzenie wejściowe](#external-input-devices), wybierz **Typ** z listy, stuknij&nbsp; "**＋**" &nbsp; i wprowadź nazwę. Każdy typ ma menu z następującymi opcjami: ***Zmień nazwę, Duplikuj*** i ***Usuń***.

### Dodaj akcję i przypisania klawiszy {#add-action--key-asssigments}

![Urządzenia zewnętrzne](@site/static/img/map/external_custom_4_andr.png)  ![Urządzenia zewnętrzne](@site/static/img/map/external_custom_3_andr.png)

Po utworzeniu niestandardowego typu wejścia można przypisać wymagane akcje do klawiszy. Dostępna jest szeroka gama [typów akcji](../widgets/quick-action.md#action-types) z widżetu Szybka akcja.

- Wybierz typ urządzenia, a następnie stuknij pozycję **Przypisania klawiszy**.
- Stuknij przycisk ***Dodaj*** (&nbsp;"**＋**"&nbsp;) w prawym dolnym rogu ekranu.
- Wybierz wymaganą akcję, a następnie stuknij pole ***Dodaj klawisz*** i stuknij przycisk na urządzeniu, aby przypisać go do akcji.  

:::note

- Jeśli przypisywany przycisk jest już używany do innej akcji, otrzymasz powiadomienie z opcją ponownego przypisania przycisku lub anulowania przypisania.
- Później można zmienić akcje i przypisania klawiszy lub dodać inne dla już utworzonych akcji, wystarczy wybrać element na liście Przypisania klawiszy.

:::

### Usuń przypisanie klawisza {#delete-key-assignment}

![Urządzenia zewnętrzne](@site/static/img/map/external_custom_1_andr.png)

Możesz usunąć wiele niepotrzebnych akcji jednocześnie za pomocą **przycisku Edytuj** (*w kształcie ołówka*) w prawym górnym rogu ekranu:

- ***Usuń jedną akcję*** na akcję, za pomocą przycisku&nbsp; "**−**" &nbsp;w polu elementu.
- ***Usuń wszystkie przypisania klawiszy*** dla wybranego typu, stukając przycisk w prawym górnym rogu ekranu obok *Edytuj nazwę*.


## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](./map-context-menu.md)
- [Konfiguracja mapy](./configure-map-menu.md)
- [Mapy wektorowe (Style mapy)](./vector-maps.md)
- [Mapy rastrowe (Online / Offline)](./raster-maps.md)
- [Punkty na mapie](./point-layers-on-map.md)
- [Ślady i trasy](./tracks/index.md)
- [Menu kontekstowe śladów](./tracks/track-context-menu.md)
- [Transport publiczny](./public-transport.md)