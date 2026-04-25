---
source-hash: e22fb8635f9ca67db7272704ab1bb824bba0f0025c8378fd7b5a17ae0d2d6e7d
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

Ten artykuł wyjaśnia, jak dostosowywać i wchodzić w interakcje z mapą za pomocą różnych przycisków i gestów. Omawia, jak obracać, powiększać, dostosowywać kąt widzenia i zmieniać kąt widzenia mapy, obracać ją ręcznie lub automatycznie za pomocą kompasu lub zgodnie z namiar.


## Ruch mapy {#map-movement}

### Gesty {#gestures}

Gesty są niezbędne do łatwego i intuicyjnego poruszania się po mapie.

| Akcja na mapie  | Gest  |
|:----------------|:------|
| **Przesuwanie**    | Dotknij i przytrzymaj mapę **jednym** palcem, następnie przesuń, aby się poruszać. |
| **Suwanie**   | Przesuń mapę **jednym** palcem. |
| **Powiększenie** | Podwójne dotknięcie mapy **jednym** palcem. <br/> Podwójne dotknięcie **jednym** palcem i przesunięcie w dół. <br/> Uszczypnij **dwoma** palcami, aby powiększyć. |
| **Zmniejszenie**| Podwójne dotknięcie **dwoma** palcami. <br/> Podwójne dotknięcie **jednym** palcem i przesunięcie w górę. <br/> Uszczypnij **dwoma** palcami, aby zmniejszyć. |
| **Obracanie**  | Dotknij mapy **dwoma** palcami, następnie obróć palce ruchem okrężnym. |
| **Nachylenie (3D)** | Dotknij **dwoma** palcami i przesuń je w górę lub w dół. <br/> Dostępne tylko z [silnikiem renderowania mapy](../personal/global-settings.md#map-rendering-engine) w wersji 2 (OpenGL). |

Animacje suwania można wyłączyć w ustawieniach za pomocą [specjalnej opcji](#remove-animations).

### Moja pozycja i powiększenie {#my-position-and-zoom}

![Menu konfiguracji ekranu](@site/static/img/widgets/location_zoom_buttons.png)

**Moja pozycja**.  
Przycisk *Moja pozycja* to okrągła ikona wskazująca, czy centrum mapy jest zsynchronizowane z bieżącą geolokalizacją urządzenia. Często nazywany przyciskiem „Gdzie jestem?”, pomaga szybko znaleźć swoją lokalizację na mapie. Podczas nawigacji mapa zazwyczaj pozostaje zsynchronizowana z lokalizacją urządzenia, więc przycisk pozostaje ukryty. Jednak staje się widoczny, jeśli mapa i Twoja lokalizacja wyjdą z synchronizacji z powodu interakcji użytkownika. Naciśnięcie przycisku spowoduje ponowne wyśrodkowanie mapy na bieżącej lokalizacji, a podwójne naciśnięcie przełączy widok na tryb 3D.

- Przycisk *Moja pozycja* ma następujące stany:
  - *Pełna niebieska ikona*. Lokalizacja została znaleziona, ale nie jest zsynchronizowana z mapą.
  - *Biała ikona*. Lokalizacja została znaleziona i jest zsynchronizowana z mapą.
  - *Szara ikona*. Lokalizacja jeszcze nie została znaleziona.
  - *Ikona strzałki*. Tryb 3D jest aktywowany.

- **Długie naciśnięcie** (*Android*) przycisku *Moja pozycja* otwiera [menu kontekstowe mapy](../map/map-context-menu.md), umożliwiając udostępnienie lokalizacji.

<br/>

**Przyciski powiększenia**.  
*Przyciski powiększenia* są zawsze widoczne obok *Mojej pozycji* i pozwalają kontrolować poziom powiększenia mapy.

- Zmiana poziomu powiększenia nie wpływa na synchronizację mapy z lokalizacją.
- **Długie naciśnięcie** *przycisków powiększenia* otwiera okno dialogowe *Powiększalnik mapy*, umożliwiając dostosowanie poziomów szczegółowości mapy.
- Pamiętaj, że podczas nawigacji powiększenie może być kontrolowane automatycznie przez ustawienie **Auto powiększenie**:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

Możesz dostosować ikony przycisku **Moja pozycja** za pomocą ustawień wyglądu profilu. Więcej informacji na ten temat znajdziesz [tutaj](../personal/profiles.md#profile-appearance).


## Interakcja z mapą {#map-interaction}

### Blokada ekranu dotykowego {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Przycisk szybkiej akcji Blokada ekranu dotykowego Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Przycisk szybkiej akcji Blokada ekranu dotykowego iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Użyj funkcji **Blokada ekranu dotykowego**, aby uniknąć przypadkowych dotknięć podczas nawigacji. Jest to szczególnie pomocne podczas aktywności takich jak jazda na rowerze lub wędrówki, gdzie niezamierzone dotknięcia mogą zakłócić trasę.

**Odblokowywanie**.  
Dotknij przycisku na ekranie lub, jeśli blokada jest aktywowana, za pomocą zewnętrznego przycisku (np. Ściszanie), naciśnij zewnętrzny przycisk i dotknij przycisku na ekranie.  

**Konfiguracja**.

- Przejdź do *Menu → Konfiguruj ekran → Niestandardowe przyciski*.
- Wybierz *+ → Dodaj akcję → Interfejs → Blokada ekranu dotykowego*.

Jasne komunikaty na ekranie poprowadzą Cię podczas blokowania lub odblokowywania ekranu.

### Animuj własną pozycję {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,position_animation"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,animate_my_location"/>*  

Tworzy płynny efekt panoramy mapy w stosunku do ikony *[Moja pozycja](../personal/profiles/#profile-appearance)* podczas ruchu. Efekt wprowadza lekkie opóźnienie w stosunku do prawdy terenowej około 1 sekundy. Włączenie tej opcji może powodować pewne wyraźne problemy z opóźnieniem w niektórych okolicznościach, wyłącz ją, jeśli takie problemy wystąpią.

### Usuń animacje {#remove-animations}

<InfoAndroidOnly/>  

Możesz wyłączyć wszystkie animacje mapy podczas interakcji z mapą, w tym gesty i przyciski.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


## Orientacja mapy {#map-orientation}

### Tryby orientacji mapy {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widżet kompasu](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widżet kompasu](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

*Tryby orientacji mapy* pozwalają wybrać, jak mapa jest wyświetlana na ekranie urządzenia. OsmAnd oferuje tryby takie jak **Obrócona ręcznie**, **Kierunek ruchu**, **Kierunek kompasu** i **Północ na górze**. Włączenie każdego trybu zmienia sposób orientacji mapy zgodnie z wybraną opcją. Szczegółowe informacje znajdziesz w artykule [Przyciski mapy](../widgets/map-buttons.md#compass).

### Obracaj za pomocą kompasu {#rotate-by-compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widżet kompasu](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widżet kompasu](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Przycisk kompasu pokazuje, jak [mapa jest zorientowana](#map-orientation-modes). *Czerwona strzałka* na ikonach lub kierunek strzałki w trybie *Kierunek ruchu* wskazuje Północ. [Ikona na przycisku kompasu](../widgets/map-buttons.md#compass) wskazuje bieżący tryb orientacji mapy. Widżet przycisku kompasu oferuje trzy [opcje interakcji](../widgets/map-buttons.md#compass-tapping-behavior): *Pojedyncze dotknięcie* obraca mapę na Północ, *Podwójne dotknięcie* przełącza między wszystkimi trybami orientacji mapy, a *Długie dotknięcie* otwiera listę trybów.

### Obracaj mapę według namiaru {#rotate-map-by-bearing}

W trybie **obracania mapy według namiaru** ([Kierunek ruchu](../widgets/map-buttons.md#compass)), mapa automatycznie wyrównuje się z kierunkiem ruchu, więc obszar przed Tobą jest wyświetlany na górze ekranu. Ten tryb poprawia nawigację, przesuwając nieco centrum mapy w dół, pokazując więcej trasy przed Tobą. Jeśli stoisz w miejscu, mapa pozostaje nieruchoma.  

Możesz aktywować tę funkcję za pomocą *Menu → Ustawienia → Profile → Ustawienia ogólne → Wygląd → Orientacja mapy* lub przez podwójne dotknięcie [przycisku Kompas](../widgets/map-buttons.md#compass-tapping-behavior). Więcej szczegółów na temat namiaru znajdziesz [tutaj](../widgets/nav-widgets.md#bearing-widget).


## Perspektywa mapy {#map-perspective}

### Nachylenie mapy i horyzont {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Nachylenie android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Nachylenie android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Nachylenie ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Nachylenie ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  

</TabItem>

</Tabs>  

Za pomocą nowego silnika renderowania map [../personal/global-settings.md#map-rendering-engine] możesz zmieniać [nachylenie kamery](../plugins/development.md#camera-tilt) od 90 (brak nachylenia) do 10 stopni. Około przy nachyleniu mapy mniejszym niż 20-22 stopnie (ten parametr zależy od poziomu powiększenia), staje się widoczna wyobrażona linia horyzontu. W przeciwieństwie do rzeczywistej, horyzont programu jest zawsze prosty.  

Pod horyzontem możesz zobaczyć tak zwaną *mgłę* lub *tuman*. Ten obszar mapy jest wypełniony szarym kolorem, tylko kilka szczegółów mapy można zaobserwować.  
Użycie mgły jest konieczne, ponieważ wyświetlanie odległych obiektów na mapie wymaga znacznych zasobów obliczeniowych i nie zawsze jest uzasadnione z powodu zniekształceń mapy [../plugins/development.md#comparison-with-a-satellite-imagery] przy małych kątach widzenia. Dlatego widoczna odległość na mapie OsmAnd jest obecnie ograniczona do 35 kafelków.  

:::info
Nachylenie mapy można zmienić przez długie dotknięcie ekranu dwoma palcami i przesunięcie ich w górę/w dół. Możesz również zmienić nachylenie, dotykając ikony [Moja pozycja](#my-position-and-zoom) w prawym dolnym rogu ekranu (dostępne tylko pozycje 45 i 90 stopni).  
Nie możesz zmienić nachylenia kamery, gdy stary [silnik renderowania mapy](../personal/global-settings.md#map-rendering-engine) (wersja 1) jest włączony.
:::

### Powiększalnik mapy {#map-magnifier}

*Powiększalnik mapy* to narzędzie, które poprawia widoczność mapy, podobne do lupy używanej z mapami papierowymi. Pozwala powiększyć mapę, aby zobaczyć tekst i szczegóły wyraźniej lub dostosować poziom szczegółowości przy zachowaniu tej samej skali. Więcej informacji znajdziesz w artykule [Mapy wektorowe](../map/vector-maps.md#map-magnifier).

### Widok globu {#globe-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Przejdź do: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,show_spherical_map"/>*

![Widok globu](@site/static/img/map/globe_view_1.png) ![Widok globu](@site/static/img/map/globe_view_2.png)

**Widok globu** pozwala wyświetlać mapę jako sferyczną Ziemię zamiast płaskiej projekcji. Ten tryb zmienia geometrię powierzchni mapy i dostosowuje interakcję mapy do nawigacji sferycznej.  

Widok globu jest obecnie dostępny tylko wtedy, gdy:
- Wtyczka [Development](../plugins/development.md) jest włączona.  
Przejdź do: *<Translate android="true" ids="shared_string_menu,plugin_settings,debugging_and_development"/>*
- Wtyczka [Topography](../plugins/topography.md) jest włączona.  
Przejdź do: *<Translate android="true" ids="shared_string_menu,plugin_settings,srtm_plugin_name"/>*
- [Silnik renderowania mapy](../personal/global-settings.md#map-rendering-engine) jest ustawiony na Wersję 2 (OpenGL).  
Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine,map_rendering_engine_v2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,show_spherical_map"/>*

![Widok globu](@site/static/img/map/globe_view_1_ios.png) ![Widok globu](@site/static/img/map/globe_view_2_ios_new.png)

**Widok globu** pozwala wyświetlać mapę jako sferyczną Ziemię zamiast płaskiej projekcji. Ten tryb zmienia geometrię powierzchni mapy i dostosowuje interakcję mapy do nawigacji sferycznej.  

</TabItem>

</Tabs>

Gdy Widok globu jest włączony, mapa obraca się jak globus. Gesty przesuwania obracają Ziemię, a powiększenie zmienia odległość kamery zamiast skalowania płaskiej powierzchni. Elementy mapy, takie jak ślady, markery, symbole i obiekty 3D, są renderowane bezpośrednio na powierzchni sferycznej i podążają za jej krzywizną. Obiekty stopniowo znikają za horyzontem podczas obracania globu.

Interakcja w pobliżu horyzontu może być ograniczona, aby zapobiec niezamierzonemu ruchowi na dużą odległość. Globus nie może być przewrócony przez bieguny. Przy bardzo niskich poziomach powiększenia wizualny wygląd dróg i etykiet pozostaje spójny podczas obracania.


## Zewnętrzne urządzenia wejściowe {#external-input-devices}

Przyciski zewnętrznych urządzeń wejściowych zapewniają wygodny i efektywny sposób interakcji z mapą i interfejsem aplikacji OsmAnd.  Znajdują się one na zewnętrznych urządzeniach, takich jak **klawiatury Bluetooth lub inne typy**, **specjalistyczne przyciski na urządzeniach nawigacyjnych pojazdu** lub kontrolery [WunderLINQ](https://blackboxembedded.com/) i [Parrot](https://www.parrot.com/en) (*tylko Android*).  

Jedną z głównych funkcji przycisków na zewnętrznych urządzeniach wejściowych jest powiększanie i zmniejszanie mapy. Pozwalają one również nawigować po mapie i zmieniać jej orientację bez konieczności dotykania i gestykulowania na ekranie. Przyciski na zewnętrznych urządzeniach wejściowych obsługują wiele innych funkcji, takich jak otwieranie *Głównego menu* i wyzwalanie *Szybkich akcji*. Użytkownicy mogą również dostosować przypisania przycisków dla obsługiwanych urządzeń (Klawiatura, WunderLINQ i niestandardowe zewnętrzne kontrolery).

:::note
Klawiatura pozostaje funkcjonalna nawet wtedy, gdy opcja *Zewnętrzne urządzenia wejściowe* jest wyłączona i wybrano *Brak*. Jednak niestandardowe przypisania klawiszy działają tylko wtedy, gdy *Zewnętrzne urządzenia wejściowe* są włączone.
:::

### Prekonfigurowane urządzenie wejściowe {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Zewnętrzne urządzenia](@site/static/img/map/external_menu_android.png) ![Zewnętrzne urządzenia](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Zewnętrzne urządzenia](@site/static/img/map/external_types_2_ios.png)

</TabItem>

</Tabs>  

Aby uzyskać dostęp do ustawień zewnętrznego urządzenia wejściowego, musisz włączyć tę funkcję.

- Przejdź do głównego *Menu → Ustawienia →* wybierz *Profil → Ustawienia ogólne → Inne → Zewnętrzne urządzenia wejściowe* i przełącz na *Włączone*.

- Wybierz urządzenie z tych obsługiwanych przez OsmAnd, dotykając elementu *Typ* na liście:  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*tylko Android*), lub utwórz [**własny typ**](#custom-input-device-type).

- Dla każdego typu zewnętrznego urządzenia wejściowego istnieje inne przypisanie **zestawu akcji-klawiszy**. Sekcja *<Translate android="true" ids="key_assignments"/>* wyświetla listę akcji i przypisanych klawiszy. Poniżej pokazano tabelę klawiszy. Są to domyślne przypisania — można je zmieniać lub rozszerzać zgodnie z preferencjami użytkownika.

- Możesz przeczytać więcej o akcjach zewnętrznych urządzeń wejściowych na GitHub w pakiecie [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Klawisz | Urządzenie | Akcja |
|:--------|:-----------|:------|
|**C**| *Klawiatura*   | Przesuń - [Do mojej pozycji](#my-position-and-zoom) |
|**D**| *Klawiatura*   | Zmień - [Orientację mapy](#map-orientation-modes) |
|**N**| *Klawiatura*   | Pokaż / Ukryj - Widok nawigacji |
|**S**| *Klawiatura*   | Pokaż / Ukryj - [Widok wyszukiwania](../search/index.md) |
|**P**| *Klawiatura*   | Zmień - Profil aplikacji na następny |
|**O**| *Klawiatura*   | Zmień - Profil aplikacji na poprzedni |
|**&#8593;**| *Klawiatura*   | Przesuń - Mapę w górę  |
|**&#8595;**| *Klawiatura*   | Przesuń - Mapę w dół  |
|**&#8592;**| *Klawiatura*   | Przesuń - Mapę w lewo  |
|**&#8594;**| *Klawiatura*   | Przesuń - Mapę w prawo  |
|**&#43;** **=**| *Klawiatura*  | Mapa - [Powiększ](#my-position-and-zoom) |
|**&#8722;**| *Klawiatura*  | Mapa - [Zmniejsz](#my-position-and-zoom) |
|**Naciśnij wstecz**| *Klawiatura*   | Nawiguj – Poprzedni ekran  |
|**&#8595;**| *Wunderlinq*  | Mapa - [Zmniejsz](#my-position-and-zoom) |
|**&#8593;**| *Wunderlinq*  | Mapa - [Powiększ](#my-position-and-zoom) |
| **ESC** | *Wunderlinq*  | Otwórz WunderLINQ Datagrid |
| **M** | *Klawiatura*  | Pokaż / Ukryj - [Menu boczne](../start-with/main-menu.md#main-menu-side-menu) |
| **Naciśnięcie joysticka** <br/> (*legacy Android*) | *Klawiatura*  | Przesuń - [Do mojej pozycji](#my-position-and-zoom) |
| **Przycisk mediów** <br/> (*tylko Android*)| *Klawiatura*  | Pokaż / Ukryj - [Notatki AV](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*tylko Android*)| *Parrot*  | Mapa - [Zmniejsz](#my-position-and-zoom) |
| **&#8594;** <br/> (*tylko Android*) | *Parrot*  | Mapa - [Powiększ](#my-position-and-zoom) |

### Niestandardowy typ urządzenia wejściowego {#custom-input-device-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Zewnętrzne urządzenia](@site/static/img/map/external_mypilot_android.png)  ![Zewnętrzne urządzenia](@site/static/img/map/external_mypilot2_android.png)

Jeśli chcesz przypisać klawisze dla zewnętrznego urządzenia wejściowego (takiego jak klawiatura, joystick lub kontroler), musisz utworzyć typ urządzenia: przejdź do ustawienia [Zewnętrzne urządzenie wejściowe](#external-input-devices), wybierz **Typ** z listy, dotknij&nbsp;  "**＋**"  &nbsp; i wprowadź nazwę. Każdy typ ma menu z następującymi opcjami: ***Zmień nazwę, Duplikuj*** i ***Usuń***.

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/> → Device → Add*

![Zewnętrzne urządzenia](@site/static/img/map/external_mypilot_ios.png)  ![Zewnętrzne urządzenia](@site/static/img/map/external_mypilot2_ios.png)

Jeśli chcesz przypisać klawisze dla zewnętrznego urządzenia wejściowego (takiego jak klawiatura, joystick lub kontroler), musisz utworzyć typ urządzenia: przejdź do ustawienia [Zewnętrzne urządzenie wejściowe](#external-input-devices), wybierz **Device** z listy, dotknij&nbsp; "**Add**" &nbsp; i wprowadź nazwę. Każdy typ ma menu z następującymi opcjami: ***Zmień nazwę, Duplikuj*** i ***Usuń***.

</TabItem>

</Tabs>  

### Dodaj akcję i przypisania klawiszy {#add-action--key-asssigments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zewnętrzne urządzenia](@site/static/img/map/external_custom_4_andr.png)  ![Zewnętrzne urządzenia](@site/static/img/map/external_custom_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zewnętrzne urządzenia](@site/static/img/map/external_custom_4_ios.png)  ![Zewnętrzne urządzenia](@site/static/img/map/external_custom_3_ios.png) 

</TabItem>

</Tabs>  

Po utworzeniu niestandardowego typu wejściowego możesz przypisać wymagane akcje do klawiszy. Dostępny jest szeroki zakres [typów akcji](../widgets/quick-action.md#action-types) z widżetu Szybka akcja.

- Wybierz typ urządzenia, następnie dotknij elementu **Przypisania klawiszy**.
- Dotknij przycisku ***Dodaj*** (&nbsp;"**＋**"&nbsp;).
- Wybierz wymaganą akcję, następnie dotknij pola ***Dodaj klawisz*** i dotknij przycisku na urządzeniu, aby przypisać go do akcji.  

:::note

- Wiele klawiszy można przypisać do jednej akcji.
- Jeśli przycisk, który przypisujesz, jest już używany do innej akcji, otrzymasz powiadomienie z opcją ponownego przypisania przycisku lub anulowania przypisania.
- Później możesz zmienić akcje i przypisania klawiszy lub dodać inne dla już utworzonych akcji, po prostu wybierz element na liście Przypisania klawiszy.

:::

### Usuń przypisanie klawisza {#delete-key-assignment}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Zewnętrzne urządzenia](@site/static/img/map/external_custom_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zewnętrzne urządzenia](@site/static/img/map/external_custom_1_ios.png)

</TabItem>

</Tabs> 

Możesz usunąć wiele niepotrzebnych akcji za pomocą przycisku **Edytuj** (*w kształcie ołówka* na Androidzie) na raz:

- ***Usuń jedną akcję*** na akcję, za pomocą przycisku&nbsp;  "**−**"  &nbsp; w polu elementu. Przypisanie klawisza można również usunąć za pomocą menu kontekstowego (długie naciśnięcie na element) przez dotknięcie **Usuń**.
- ***Usuń wszystkie przypisania klawiszy*** dla wybranego typu, dotykając przycisku w prawym górnym rogu ekranu obok *Edytuj nazwę* na Androidzie; dotykając przycisku **Wyczyść wszystko** na iOS.


## Powiązane artykuły {#related-articles}

- [Menu kontekstowe mapy](./map-context-menu.md)
- [Konfiguruj mapę](./configure-map-menu.md)
- [Mapy wektorowe (Style map)](./vector-maps.md)
- [Mapy rastrowe (Online / Offline)](./raster-maps.md)
- [Punkty na mapie](./point-layers-on-map.md)
- [Ślady i trasy](./tracks/index.md)
- [Menu kontekstowe śladów](./tracks/track-context-menu.md)
- [Transport publiczny](./public-transport.md)