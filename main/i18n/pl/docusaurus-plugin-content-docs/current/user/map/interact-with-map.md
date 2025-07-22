---
source-hash: ca480d4fada9f677b9e8a4b60267b6ef26adb8611c8539c54da069d6ba39c8d5
sidebar_position: 2
title: Interakcja z mapą
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

Ten artykuł wyjaśnia, jak dostosować mapę i wchodzić z nią w interakcje za pomocą różnych przycisków i gestów. Opisuje, jak obracać, powiększać, dostosowywać kąt widzenia oraz zmieniać kąt widzenia mapy, obracać ją ręcznie lub automatycznie za pomocą kompasu, lub zgodnie z kierunkiem.

## Gesty {#gestures}

Gesty są niezbędne do łatwej i intuicyjnej nawigacji po mapie.

| Akcja na mapie | Gest |
| :------------ | :------------ |
| **Przesuwanie** | Dotknij i przytrzymaj mapę **jednym** palcem, a następnie przeciągnij, aby się poruszać. |
| **Przeciąganie** | Przeciągnij mapę **jednym** palcem. |
| **Powiększanie** | Dwukrotnie dotknij mapę **jednym** palcem. <br/> Dwukrotnie dotknij **jednym** palcem i przesuń w dół. <br/> Zsuń **dwa** palce, aby powiększyć. |
| **Pomniejszanie** | Dwukrotnie dotknij **dwoma** palcami. <br/> Dwukrotnie dotknij **jednym** palcem i przesuń w górę. <br/> Rozsuń **dwa** palce, aby pomniejszyć. |
| **Obracanie** | Dotknij mapę **dwoma** palcami, a następnie obracaj palcami ruchem okrężnym. |
| **Pochylanie (3D)** | Dotknij **dwoma** palcami i przesuń je w górę lub w dół. <br/> Dostępne tylko z [silnikiem renderowania mapy](../personal/global-settings.md#map-rendering-engine) w wersji 2 (OpenGL). |

Animacje przesuwania można wyłączyć w ustawieniach za pomocą [specjalnej opcji](#no-animations).

## Moja lokalizacja i powiększenie {#my-location-and-zoom}

![Menu konfiguracji ekranu](@site/static/img/widgets/location_zoom_buttons.png)

**Moja lokalizacja**.
Przycisk *Moja lokalizacja* to okrągła ikona, która wskazuje, czy środek mapy jest zsynchronizowany z aktualną geolokalizacją Twojego urządzenia. Często nazywany przyciskiem „Gdzie jestem?”, pomaga szybko znaleźć Twoją lokalizację na mapie. Podczas nawigacji mapa zazwyczaj pozostaje zsynchronizowana z lokalizacją urządzenia, więc przycisk pozostaje ukryty. Staje się jednak widoczny, jeśli mapa i Twoja lokalizacja rozsynchronizują się z powodu interakcji użytkownika. Dotknięcie przycisku ponownie wyśrodkuje mapę na Twojej aktualnej lokalizacji, a dwukrotne dotknięcie przełączy widok na tryb 3D.

- Przycisk *Moja lokalizacja* ma następujące stany:
  - *Pełna niebieska ikona*. Lokalizacja została znaleziona, ale nie jest zsynchronizowana z mapą.
  - *Biała ikona*. Lokalizacja została znaleziona i jest zsynchronizowana z mapą.
  - *Szara ikona*. Lokalizacja nie została jeszcze znaleziona.
  - *Ikona strzałki*. Aktywowany jest tryb 3D.

- **Długie naciśnięcie** (*Android*) przycisku *Moja lokalizacja* otwiera [menu kontekstowe mapy](../map/map-context-menu.md), umożliwiając udostępnienie Twojej lokalizacji.

<br/>

**Przyciski powiększania**.
*Przyciski powiększania* są zawsze widoczne obok *Mojej lokalizacji* i umożliwiają kontrolowanie poziomu powiększenia mapy.

- Zmiana poziomu powiększenia nie wpływa na synchronizację mapy z Twoją lokalizacją.
- **Długie naciśnięcie** *przycisków powiększania* otwiera okno dialogowe *Lupa mapy*, umożliwiające dostosowanie poziomów szczegółowości mapy.
- Pamiętaj, że podczas nawigacji powiększenie może być automatycznie kontrolowane przez ustawienie **Automatyczne powiększenie**:
  - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*
  - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*

### Wygląd Mojej Lokalizacji {#my-location-appearance}

Możesz dostosować ikony przycisku **Moja lokalizacja** za pomocą ustawień wyglądu profilu. Więcej o tym, jak to zrobić, przeczytasz [tutaj](../personal/profiles.md#profile-appearance).

## Lupa mapy {#map-magnifier}

*Lupa mapy* to narzędzie, które poprawia widoczność mapy, podobnie jak lupa używana z mapami papierowymi. Pozwala powiększyć mapę, aby wyraźniej zobaczyć tekst i szczegóły, lub dostosować poziom szczegółowości, zachowując tę samą skalę. Aby uzyskać więcej informacji, przejdź do artykułu [Mapy wektorowe](../map/vector-maps.md#map-magnifier).

## Tryby orientacji mapy {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widżet kompasu](@site/static/img/map/map_orientation_mode_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widżet kompasu](@site/static/img/map/map_orientation_mode_ios.png)

</TabItem>

</Tabs>

*Tryby orientacji mapy* pozwalają wybrać sposób wyświetlania mapy na ekranie urządzenia. OsmAnd oferuje tryby takie jak **Ręcznie obrócona**, **Kierunek ruchu**, **Kierunek kompasu** i **Północ na górze**. Włączenie każdego trybu zmienia sposób orientacji mapy zgodnie z wybraną opcją. Aby uzyskać pełne szczegóły, zobacz artykuł [Przyciski mapy](../widgets/map-buttons.md#compass).

## Kompas {#compass}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widżet kompasu](@site/static/img/widgets/compass_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widżet kompasu](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Przycisk kompasu pokazuje, jak [zorientowana jest mapa](#map-orientation-modes). *Czerwona strzałka* na ikonach lub kierunek strzałki w trybie *Kierunek ruchu* wskazuje Północ. [Ikona na przycisku kompasu](../widgets/map-buttons.md#compass) wskazuje aktualny tryb orientacji mapy. Widżet przycisku kompasu oferuje trzy [opcje interakcji](../widgets/map-buttons.md#compass-tapping-behavior): *Pojedyncze dotknięcie* obraca mapę na Północ, *Podwójne dotknięcie* przełącza między wszystkimi trybami orientacji mapy, a *Długie dotknięcie* otwiera listę trybów.

## Obróć mapę według kierunku {#rotate-map-by-bearing}

W trybie **obracania mapy według kierunku** ([Kierunek ruchu](../widgets/map-buttons.md#compass)), mapa automatycznie dostosowuje się do kierunku Twojego ruchu, tak aby obszar przed Tobą był wyświetlany u góry ekranu. Ten tryb poprawia nawigację, przesuwając środek mapy nieco w dół, pokazując więcej trasy przed Tobą. Jeśli stoisz w miejscu, mapa pozostaje nieruchoma.

Możesz aktywować tę funkcję poprzez *Menu → Ustawienia → Profile → Ustawienia ogólne → Wygląd → Orientacja mapy* lub dwukrotnie dotykając [przycisk Kompasu](../widgets/map-buttons.md#compass-tapping-behavior). Więcej szczegółów na temat kierunku znajdziesz [tutaj](../widgets/nav-widgets.md#bearing-widget).

## Pochylenie mapy i horyzont {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Pochylenie Android 1](@site/static/img/map/tilt_horizon_andr_1.png) ![Pochylenie Android 2](@site/static/img/map/tilt_horizon_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pochylenie iOS 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Pochylenie iOS 2](@site/static/img/map/tilt_horizon_ios_2.png)

</TabItem>

</Tabs>

Dzięki nowemu [silnikowi renderowania mapy](../personal/global-settings.md#map-rendering-engine) możesz zmienić [pochylenie kamery](../plugins/development.md#camera-tilt) z 90 (bez pochylenia) do 10 stopni. Przy pochyleniu mapy mniejszym niż około 20-22 stopnie (ten parametr zależy od poziomu powiększenia), staje się widoczna wyimaginowana linia horyzontu. W przeciwieństwie do prawdziwego horyzontu, horyzont programu jest zawsze prosty.

Poniżej horyzontu widać tak zwaną *mgłę* lub *zamglenie*. Ten obszar mapy jest wypełniony szarym kolorem, widoczne są tylko nieliczne szczegóły mapy.
Użycie mgły jest konieczne, ponieważ wyświetlanie odległych obiektów na mapie wymaga znacznych zasobów obliczeniowych i nie zawsze jest uzasadnione ze względu na [zniekształcenia](../plugins/development.md#comparison-with-a-satellite-imagery) mapy przy małych kątach widzenia. Widoczna odległość na mapie OsmAnd jest obecnie ograniczona do 35 kafelków.

:::info
Pochylenie mapy można zmienić, długo naciskając ekran dwoma palcami i przesuwając je w górę/w dół. Możesz również zmienić pochylenie, dotykając ikony [Moja lokalizacja](#my-location-and-zoom) w prawym dolnym rogu ekranu (dostępne są tylko pozycje 45 i 90 stopni).
Nie można zmienić pochylenia kamery, gdy włączony jest stary [silnik renderowania mapy](../personal/global-settings.md#map-rendering-engine) (wersja 1).
:::

## Blokada ekranu dotykowego {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Przycisk szybkiej akcji Blokada ekranu dotykowego Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przycisk szybkiej akcji Blokada ekranu dotykowego iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Użyj funkcji **Blokada ekranu dotykowego**, aby uniknąć przypadkowych dotknięć podczas nawigacji. Jest to szczególnie pomocne podczas aktywności takich jak jazda na rowerze czy wędrówki, gdzie niezamierzone dotknięcia mogą zakłócić Twoją trasę.

**Odblokowywanie**.
Dotknij przycisk na ekranie lub, jeśli blokada jest aktywna, za pomocą zewnętrznego przycisku (np. Zmniejsz głośność), naciśnij zewnętrzny przycisk i dotknij przycisk na ekranie.

**Konfiguracja**.

- Przejdź do *Menu → Konfiguruj ekran → Niestandardowe przyciski*.
- Wybierz *+ → Dodaj akcję → Interfejs → Blokada ekranu dotykowego*.

Wyraźne komunikaty na ekranie poprowadzą Cię podczas blokowania i odblokowywania ekranu.

## Ustawienia {#settings}

### Dodatkowe ustawienia kompasu {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Wygładza obrót mapy z wolniejszą animacją obrotu, chociaż wprowadza to niewielkie opóźnienie, nie więcej niż 1 sekundę.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Wygładza obrót mapy z wolniejszą animacją obrotu, chociaż wprowadza to niewielkie opóźnienie, nie więcej niż 1 sekundę.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Brak animacji {#no-animations}

<InfoAndroidOnly/>

Możesz wyłączyć wszystkie animacje mapy podczas interakcji z mapą, w tym gesty i przyciski.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*

### Animuj własną pozycję {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*

Tworzy płynny efekt przesuwania mapy w stosunku do ikony *[Moja pozycja](../personal/profiles/#profile-appearance)*, gdy jest w ruchu. Efekt wprowadza niewielkie opóźnienie w stosunku do rzeczywistej pozycji, wynoszące około 1 sekundy. Zgłaszano, że włączenie tej funkcji może w niektórych okolicznościach powodować znaczne problemy z opóźnieniami, wyłącz ją, jeśli takie problemy wystąpią.

## Zewnętrzne urządzenia wejściowe {#external-input-devices}

Przyciski zewnętrznych urządzeń wejściowych zapewniają wygodny i efektywny sposób interakcji z mapą i interfejsem aplikacji OsmAnd. Znajdują się one na urządzeniach zewnętrznych, takich jak **klawiatury Bluetooth lub inne typy klawiatur**, **specjalistyczne przyciski na urządzeniach nawigacyjnych w pojazdach** lub kontrolery [WunderLINQ](https://blackboxembedded.com/) i [Parrot](https://www.parrot.com/en).

Jedną z głównych funkcji przycisków na zewnętrznych urządzeniach wejściowych jest powiększanie i pomniejszanie mapy. Umożliwiają one również nawigację po mapie i zmianę jej orientacji bez konieczności dotykania i gestykulowania na ekranie. Przyciski na zewnętrznych urządzeniach wejściowych obsługują wiele innych funkcji, takich jak otwieranie *Menu głównego*.

:::note
Klawiatura pozostaje funkcjonalna nawet po wyłączeniu opcji *Zewnętrzne urządzenia wejściowe* i wybraniu opcji *Brak*.
:::

### Wstępnie skonfigurowane urządzenie wejściowe {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Urządzenia zewnętrzne](@site/static/img/map/external_menu_android.png) ![Urządzenia zewnętrzne](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Urządzenia zewnętrzne](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>

Aby uzyskać dostęp do ustawień zewnętrznego urządzenia wejściowego, musisz włączyć tę funkcję.

- Przejdź do głównego *Menu → Ustawienia →* wybierz *Profil → Ustawienia ogólne → Inne → Zewnętrzne urządzenia wejściowe* i przełącz na *Włączone*.

- Wybierz urządzenie z obsługiwanych przez OsmAnd, dotykając elementu *Typ* na liście:
  **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*tylko Android*), lub utwórz [**własny typ**](#custom-input-device-type) (*tylko Android*).

- Dla każdego typu zewnętrznego urządzenia wejściowego istnieje inny **zdefiniowany zestaw przypisań akcji-klawiszy**. Dotknij *<Translate android="true" ids="key_assignments"/>*, aby zobaczyć listę akcji i klawiszy. Tabela klawiszy znajduje się poniżej.

- Więcej o akcjach zewnętrznych urządzeń wejściowych można przeczytać na GitHubie w pakiecie [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Klawisz | Urządzenie | Akcja |
| :--------- | :--------------- | :--------------- |
| **C** | *Klawiatura* | Przesuń - [Do mojej lokalizacji](#my-location-and-zoom) |
| **D** | *Klawiatura* | Zmień - [Orientacja mapy](#map-orientation-modes) |
| **N** | *Klawiatura* | Pokaż / Ukryj - Widok nawigacji |
| **S** | *Klawiatura* | Pokaż / Ukryj - [Widok wyszukiwania](../search/index.md) |
| **P** | *Klawiatura* | Zmień - Profil aplikacji na następny |
| **O** | *Klawiatura* | Zmień - Profil aplikacji na poprzedni |
| **&#8593;** | *Klawiatura* | Przesuń - Mapę w górę |
| **&#8595;** | *Klawiatura* | Przesuń - Mapę w dół |
| **&#8592;** | *Klawiatura* | Przesuń - Mapę w lewo |
| **&#8594;** | *Klawiatura* | Przesuń - Mapę w prawo |
| **&#43;** **=** | *Klawiatura* | Mapa - [Powiększ](#my-location-and-zoom) |
| **&#8722;** | *Klawiatura* | Mapa - [Pomniejsz](#my-location-and-zoom) |
| **Naciśnij wstecz** | *Klawiatura* | Nawiguj – Poprzedni ekran |
| **&#8595;** | *Wunderlinq* | Mapa - [Pomniejsz](#my-location-and-zoom) |
| **&#8593;** | *Wunderlinq* | Mapa - [Powiększ](#my-location-and-zoom) |
| **ESC** | *Wunderlinq* | Otwórz WunderLINQ Datagrid |
| **M** <br/> (*starszy Android*) | *Klawiatura* | Pokaż / Ukryj - [Menu boczne](../start-with/main-menu.md#main-menu-side-menu) |
| **Naciśnij joystick** <br/> (*starszy Android*) | *Klawiatura* | Przesuń - [Do mojej lokalizacji](#my-location-and-zoom) |
| **Przycisk multimedialny** <br/> (*tylko Android*) | *Klawiatura* | Pokaż / Ukryj - [Notatki AV](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*tylko Android*) | *Parrot* | Mapa - [Pomniejsz](#my-location-and-zoom) |
| **&#8594;** <br/> (*tylko Android*) | *Parrot* | Mapa - [Powiększ](#my-location-and-zoom) |

### Niestandardowy typ urządzenia wejściowego {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Urządzenia zewnętrzne](@site/static/img/map/external_mypilot_android.png) ![Urządzenia zewnętrzne](@site/static/img/map/external_mypilot2_android.png)

Jeśli chcesz przypisać klawisze do zewnętrznego urządzenia wejściowego (takiego jak klawiatura, joystick lub kontroler), musisz utworzyć typ urządzenia: przejdź do ustawień [Zewnętrzne urządzenie wejściowe](#external-input-devices), wybierz **Typ** z listy, dotknij &nbsp; "**＋**" &nbsp; i wprowadź nazwę. Każdy typ ma menu z następującymi opcjami: ***Zmień nazwę, Duplikuj*** i ***Usuń***.

### Dodaj akcję i przypisania klawiszy {#add-action--key-asssigments}

![Urządzenia zewnętrzne](@site/static/img/map/external_custom_4_andr.png) ![Urządzenia zewnętrzne](@site/static/img/map/external_custom_3_andr.png)

Po utworzeniu niestandardowego typu wejścia możesz przypisać wymagane akcje do klawiszy. Dostępny jest szeroki zakres [typów akcji](../widgets/quick-action.md#action-types) z widżetu Szybka akcja.

- Wybierz typ urządzenia, a następnie dotknij elementu **Przypisania klawiszy**.
- Dotknij przycisku ***Dodaj*** (&nbsp;"**＋**"&nbsp;) w prawym dolnym rogu ekranu.
- Wybierz wymaganą akcję, a następnie dotknij pola ***Dodaj klawisz*** i dotknij przycisku na swoim urządzeniu, aby przypisać go do akcji.

:::note

- Jeśli przypisany przycisk jest już używany do innej akcji, otrzymasz powiadomienie z opcją ponownego przypisania przycisku lub anulowania przypisania.
- Później możesz zmienić akcje i przypisania klawiszy lub dodać inne dla już utworzonych akcji, wystarczy wybrać element z listy Przypisania klawiszy.

:::

### Usuń przypisanie klawisza {#delete-key-assignment}

![Urządzenia zewnętrzne](@site/static/img/map/external_custom_1_andr.png)

Możesz usunąć wiele niepotrzebnych akcji jednocześnie za pomocą **przycisku Edytuj** (*w kształcie ołówka*) w prawym górnym rogu ekranu:

- ***Usuń jedną akcję*** dla każdej akcji, za pomocą przycisku &nbsp; "**−**" &nbsp; w polu elementu.
- ***Usuń wszystkie przypisania klawiszy*** dla wybranego typu, dotykając przycisku w prawym górnym rogu ekranu obok *Edytuj nazwę*.

## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](./map-context-menu.md)
- [Konfiguracja mapy](./configure-map-menu.md)
- [Mapy wektorowe (Style mapy)](./vector-maps.md)
- [Mapy rastrowe (Online / Offline)](./raster-maps.md)
- [Punkty na mapie](./point-layers-on-map.md)
- [Ślady i trasy](./tracks/index.md)
- [Menu kontekstowe śladów](./tracks/track-context-menu.md)
- [Transport publiczny](./public-transport.md)

> *Ostatnia aktualizacja: grudzień 2024*