---
source-hash: e0b9c6c498f2c53828251f254bb330363192ffddb65ff4939e882c99b223b771
sidebar_position: 3
title:  Ustawienia globalne
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

**Ustawienia globalne** to ogólne [ustawienia](../personal/profiles.md) dla wszystkich profili w aplikacji OsmAnd. Są to podstawowe ustawienia systemu OsmAnd, a wszelkie wprowadzone zmiany będą miały wpływ na całą aplikację.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profile Ustawienia ogólne Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Profile Ustawienia ogólne Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profile Ustawienia ogólne iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Ogólne {#general}

Ta sekcja zawiera podstawowe ustawienia OsmAnd, takie jak wybór [profilu](#default-profile) podczas ładowania aplikacji, wybór [silnika renderowania](#map-rendering-engine) i [folderu](#data-storage-folder), w którym będą zapisywane dane.  


### Domyślny profil {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia ogólne Domyślny profil Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia ogólne Domyślny profil iOS](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd używa domyślnego profilu, *Przeglądaj mapę*, jako pierwszego profilu dla nowych użytkowników, a jeśli ten profil został przez Ciebie wybrany, będzie on używany przy każdym ponownym uruchomieniu aplikacji. Możesz wybrać dowolny profil z domyślnej listy, w tym *Ostatnio używany* i *Przeglądaj mapę*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Pozwala wybrać ostatnio używany profil.
- **<Translate android="true" ids="settings_preset"/>**. Wybierasz profil, który ma być używany podczas uruchamiania OsmAnd. Można go zmienić w [ustawieniach](../personal/profiles.md) aplikacji.  


### Profil CarPlay {#carplay-profile}

:::caution TYLKO iOS
Ta funkcja jest dostępna dla wersji aplikacji OsmAnd na iOS.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![Ustawienia ogólne Domyślny profil iOS](@site/static/img/personal/profiles/CarPlay_ios.png)  

[**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) jest używany po podłączeniu do [oprogramowania CarPlay](https://support.apple.com/en-gb/HT205634) w pojeździe i pomaga w pełni wykorzystać zoptymalizowaną wersję aplikacji OsmAnd, używając systemów audio i wideo do wyświetlania danych z telefonu.


### Folder przechowywania danych {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Ustawienia przechowywania profili Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **Pamięć urządzenia** pokazuje, ile wolnego miejsca pozostało na urządzeniu. Dotknij pola, aby uzyskać dostęp do menu [*Mapy i zasoby*](../personal/maps-resources.md#maps--resources), w którym można przeglądać szczegółowe informacje o danych OsmAnd i zarządzać nimi.

2. W **<Translate android="true" ids="change_data_storage_folder"/>**, możesz wybrać folder do zapisywania danych OsmAnd na swoim urządzeniu.  

    - *Wewnętrzna pamięć aplikacji*. Tylko aplikacja OsmAnd ma dostęp do swoich danych i żadna z aplikacji zewnętrznych.
    - *Pamięć współdzielona*. Już niedostępne.
    - *Pamięć zewnętrzna 1*. Dostęp ma tylko 1 aplikacja OsmAnd oraz aplikacje administratora i USB.
    - *Pamięć wieloużytkownika*. Dostęp ma tylko 1 aplikacja OsmAnd, ale jest ona współdzielona między wieloma użytkownikami Androida.
    - *Określone ręcznie*. Zależy od ścieżki.

:::note Android 12+ (zmiana folderu przechowywania)
W wersjach Androida 11-12 wdrożono nowe wytyczne dotyczące dostępu do pamięci masowej. Szczegółowe informacje można znaleźć w sekcji [**Rozwiązywanie problemów**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).
:::

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *Urządzenie iOS → Ustawienia → Ogólne → Pamięć iPhone'a → OsmAnd Maps*  

![Ustawienia ogólne przechowywanie iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

Pliki OsmAnd są widoczne w aplikacji [*Pliki*](https://apps.apple.com/us/app/files/id1232058109). Możesz uzyskać dostęp do wszystkich plików OsmAnd: [tras](../personal/tracks/manage-tracks.md), [ulubionych](../personal/favorites.md), [map](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xml](../../technical/build-osmand/routing.md). Aby to zrobić, postępuj zgodnie z następującą ścieżką:  

Przejdź do: *Pliki → Na moim iPhonie → OsmAnd Maps*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![Ustawienia ogólne przechowywanie iOS](@site/static/img/personal/profiles/files-1.png) ![Ustawienia ogólne przechowywanie iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Silnik renderowania mapy {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (tylko Android)*

![Ustawienia ogólne silnik renderowania Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- W wersji aplikacji na **Androida** można przełączać się między renderowaniem mapy w wersji 1, pierwotnie zaimplementowanym w aplikacji OsmAnd, a wersją 2, która wykorzystuje interfejs programowania OpenGL (Open Graphics Library) do renderowania dwu- i trójwymiarowych obiektów graficznych.

- Wersja na **iOS** używa tylko OpenGL do renderowania map.


| Funkcje | Wersja 1 | Wersja 2 (OpenGL) |
|:---|:--- |:--- |
| Wieloplatformowość | Nieużywana w wersji na iOS. | Pasuje do obu wersji. |
| Zależność od GPU / CPU | Zalecana dla urządzeń o niskiej wydajności lub przestarzałych. | Potężny silnik renderujący. <br /> Dostępny tylko dla [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) i nowszych wersji oraz w trybie testowym dla [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| Tryb 3D | Możliwe jest przeglądanie mapy w 2D, a także zmiana kąta widzenia w celu uzyskania [widoku 3D](../widgets/map-buttons.md#3d-mode). | Możesz przeglądać mapę w 2D i [3D](../widgets/map-buttons.md#3d-mode). |
| Wyświetlanie mapy | Cała mapa jest renderowana jako zestaw kafelków, a znaczniki, linie i tekst znajdują się już w tych kafelkach. | Najpierw renderowany jest cały pakiet kafelków, a następnie dostępne symbole są nakładane na mapę, [warstwa po warstwie](../../technical/algorithms/map-rendering-layers.md). |
| Przezroczyste symbole nakładki / podkładu | Obsługuje wszystkie ustawienia. | Nie obsługuje warstwy rastrowej na wierzchu tekstu wektorowego. |
| [Teren 3D](../map/raster-maps.md#3d-relief) | Nieobsługiwane. | Ta funkcja wizualizuje rzeźbę terenu na mapie, dodając informacje o wysokości do normalnej mapy 2D, co tworzy efekt 3D i głębi. |
| [Trasy 3D](../map/tracks/appearance.md) | Nieobsługiwane. | Ta funkcja umożliwia wyświetlanie tras według wysokości nad poziomem morza. |
| [Mapa online](../plugins/online-map.md) | Nie obsługuje wyświetlania Linii konturowych, jeśli źródłem mapy jest dowolna mapa kafelkowa online. | Gdy źródłem mapy jest mapa online, używane są również mapy 3D i obsługiwane jest wyświetlanie Linii konturowych na mapie. |
| [Wtyczka Pogoda](../plugins/weather.md) | Nie można używać tej wtyczki. | Wygodna w użyciu z wtyczką. |  

Obraz dla widoku 3D mapy jest ładowany kafelek po kafelku, a następnie wszystkie symbole. Szybkość renderowania mapy zależy od liczby obiektów graficznych 2D i 3D na niej oraz bezpośrednio od wydajności sprzętu. Dlatego wersja 2 (OpenGL) nie może być używana na urządzeniach o niskiej wydajności.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="renderowanie"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="renderowanie"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="renderowanie"/></td>
    </tr>
</table>


## Prywatność i bezpieczeństwo {#privacy-and-security}

OsmAnd pozwala wybrać, czy *[udostępniać swoją aktywność w aplikacji](#analytics)* i [identyfikatory](#identifiers) (*tylko Android*) w aplikacji, edytować swoją *[historię](#history)* i używać wybranego przez siebie *[proxy](#proxy)* (*tylko Android*).  

:::note
Więcej informacji można znaleźć w [*Polityce prywatności i bezpieczeństwa OsmAnd*](../../legal/privacy-policy.md)
:::

### Analityka {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![Ustawienia ogólne Analityka Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Ustawienia ogólne Wyślij anonimowe dane iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

Ustawienie **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) lub **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) pozwala wybrać, czy udostępniać anonimowe dane o *Pobranych mapach* i *Odwiedzonych ekranach* (*Android*).  

:::note
Dane o Twojej lokalizacji lub miejscach, które przeglądasz na mapie, nie są gromadzone.
:::  

### Identyfikatory {#identifiers}

<InfoAndroidOnly />

*Menu → Ustawienia → Ustawienia OsmAnd → Prywatność i bezpieczeństwo → Identyfikatory*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

**UUID** (*Unikalny Identyfikator Użytkownika*) jest generowany dla każdej instalacji aplikacji OsmAnd i wysyłany na serwery podczas ładowania mapy.

- Losowy identyfikator UUID jest używany do pobierania map offline z serwerów OsmAnd w celu kontrolowania racjonalnego wykorzystania zasobów serwera, przewidywania wykorzystania ruchu i dostarczania ogólnych miesięcznych raportów na temat pobierania map.
- Identyfikator UUID zmienia się co 3 miesiące.  
- Począwszy od wersji 4.3 OsmAnd, można wyłączyć gromadzenie danych użytkownika podczas korzystania z aplikacji OsmAnd. Wówczas identyfikator UUID nie będzie wysyłany z żadnym żądaniem pobrania.  
- Więcej informacji można znaleźć w [Warunkach użytkowania (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Historia {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Ustawienia ogólne Historia Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Ustawienia ogólne Historia Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Ustawienia ogólne Historia iOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Ustawienia ogólne Historia iOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

Aplikacja zapisuje historię wcześniej wprowadzonych danych (historię) w następujących kategoriach: [Wyszukiwanie](../search/search-history.md), [Nawigacja](../navigation/setup/route-navigation.md#history-of-previous-routes), [Znaczniki mapy](../personal/markers.md#history). Za pomocą przełącznika na odpowiedniej karcie można *Włączyć / Wyłączyć* rejestrowanie dla określonych kategorii wpisów. Można również [zarządzać](#history) (przeglądać, usuwać i udostępniać) wcześniej zapisanymi danymi.  

- ***Utwórz kopię zapasową jako plik*** (*Android*) lub ***Eksportuj*** (*iOS*) służy do tworzenia [pliku kopii zapasowej](../personal/import-export.md#export) historii.
- ***Wyczyść całą historię*** (*Android*) lub ***Usuń całą historię*** (*iOS*) służy do usuwania wszystkich wpisów historii zarejestrowanych do momentu usunięcia.

<br/>

**Udostępnianie i usuwanie historii.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia ogólne Historia Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Ustawienia ogólne Historia iOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Ustawienia ogólne Historia iOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Możesz usunąć jeden lub więcej elementów z listy historii lub udostępnić je jako plik (aby uzyskać dostęp do tych funkcji *w systemie iOS*, dotknij przycisku ***Edytuj***).  
- Aby usunąć lub wyeksportować wiele rekordów jednocześnie, zaznacz pola wyboru obok wymaganych rekordów i dotknij przycisków **Eksportuj** lub **Usuń**.  


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![Ustawienia ogólne Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

Ustawienie **<Translate android="true" ids="proxy_pref_title"/>** pozwala skonfigurować [proxy HTTP](https://en.wikipedia.org/wiki/Proxy_server) dla wszystkich żądań sieciowych. Można ustawić *Host proxy* i *Port proxy*.  


## Inne {#other}

W tej sekcji ustawień OsmAnd można skonfigurować otrzymywane powiadomienia, usługę lokalizacji i sposób zapisywania ustawień aplikacji.

### Okna dialogowe i powiadomienia {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ustawienia ogólne powiadomienia Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Ustawienia ogólne Okna dialogowe iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

Ustawienie **<Translate android="true" ids="dialogs_and_notifications_title"/>** pozwala włączać/wyłączać wyskakujące okienka, okna dialogowe i powiadomienia.  

- *Wiadomość startowa* obejmuje promocje, quizy, wydarzenia i inne.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) blokuje wyświetlanie zniżek na aplikacje i wiadomości o specjalnych wydarzeniach lokalnych.
- [*Okno dialogowe pobierania mapy*](../start-with/download-maps.md#download) informuje, że można pobrać określone mapy.


### Źródło lokalizacji {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*tylko Android*)

![Automatyczna kopia zapasowa](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd zapewnia wybór usług do określania lokalizacji. Zaleca się zapoznanie się z dodatkowymi informacjami na temat [Zezwolenia na dostęp do lokalizacji](../start-with/first-steps.md#permission-to-access-the-location) i [Rozwiązywania problemów](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) dla tej sekcji.

***Android***:

- Możesz wybrać, z których usług *Google Play* lub *Android API* OsmAnd będzie korzystać do określania Twojej lokalizacji. Może to być przydatne w przypadku urządzeń bez *Usług Google Play* lub w przypadku niedokładnych danych o lokalizacji lub wysokości podczas rejestrowania tras.
- OsmAnd otrzymuje dane z zasobów *Google Fused Location Providers* i *Android GPS and Network Providers*. Możesz przełączyć **<Translate android="true" id="location_source" />** w: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- System iOS używa *iOS API* do określania lokalizacji.  
- Wszystkie ustawienia lokalizacji OsmAnd można znaleźć w ustawieniach urządzenia iOS: *Ustawienia → OsmAnd Maps → Lokalizacja*  
- Prywatność usług lokalizacyjnych: *Ustawienia → Prywatność → Usługi lokalizacyjne*


### Automatyczna kopia zapasowa {#auto-backup}

<InfoAndroidOnly />

![Ustawienia ogólne powiadomienia Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android lub OsmAnd Cloud mogą zapisywać Twoje dane i ustawienia aplikacji.

- Domyślnie *ustawienia OsmAnd* i znaczniki mapy [*Ulubione*](../personal/favorites.md#automatic-favorites-backup) są automatycznie archiwizowane przez system Android. Pozwala to na ich przywrócenie na nowych urządzeniach lub po ponownej instalacji aplikacji.

- Należy pamiętać, że rozmiar kopii zapasowej jest ograniczony do *25 MB*.

- Aby znaleźć pliki kopii zapasowej, użyj aplikacji menedżera plików innej firmy.  
    *UWAGA: Pliki kopii zapasowej można znaleźć za pomocą menedżera plików Androida: Android → data → net.osmand → files → backup, ale należy pamiętać, że w ostatnich wersjach Androida dostęp do katalogów systemowych jest ograniczony.*  

**Jeśli używasz [*OsmAnd Cloud*](../personal/osmand-cloud.md), zaleca się dezaktywację tej domyślnej opcji tworzenia kopii zapasowych, aby uniknąć nieporozumień podczas ponownej instalacji.**


## Kwestie prawne {#legal}

OsmAnd może [ostrzegać o fotoradarach](../navigation/guidance/navigation-settings.md#screen-alerts), ale tylko wtedy, gdy zezwalają na to przepisy w Twoim kraju.


### Odinstaluj fotoradary {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Ustawienia ogólne Fotoradary Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![Ustawienia ogólne Fotoradary Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Ustawienia ogólne Fotoradary iOS](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![Ustawienia ogólne Fotoradary iOS](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

To ustawienie pozwala aktywować lub dezaktywować POI z fotoradarami, należy ponownie uruchomić aplikację OsmAnd, aby wprowadzić zmiany.
  
W niektórych krajach lub regionach korzystanie z aplikacji ostrzegających o fotoradarach jest nielegalne. Musisz dokonać wyboru w zależności od przepisów obowiązujących w Twoim kraju. Wybierz **Pozostaw aktywne**, a będziesz otrzymywać alerty i powiadomienia o fotoradarach. Wybierz **Odinstaluj**, a wszystkie dane związane z fotoradarami, takie jak ostrzeżenia, powiadomienia i POI, zostaną usunięte do czasu całkowitej ponownej instalacji OsmAnd.  

Przeczytaj o alertach dotyczących fotoradarów na trasie w artykule Widżety nawigacyjne w sekcji *[Widżet alertów](../widgets/nav-widgets.md#alert-widget)*.


## Powiązane artykuły {#related-articles}

- [Profile (Ustawienia)](./profiles.md)
- [Import / Eksport](../personal/import-export.md)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)

### Rozwiązywanie problemów {#troubleshooting}

- **Android 12+ (zmiana folderu przechowywania)**. W wersjach Androida 11-12 wdrożono nowe wytyczne dotyczące dostępu do pamięci masowej. Zmiany te w szczególności wpływają na przechowywanie map na kartach SD, co skutkuje znacznie wolniejszą wydajnością dostępu do plików i bardziej rygorystycznymi ograniczeniami dostępu do folderów na kartach SD w systemach Android 11 i 12. Informacje o tym, jak rozwiązać ten problem, można znaleźć w sekcji [**Rozwiązywanie problemów**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Źródło lokalizacji dla problemów z wysokością**. Google Play zmieniło swoją politykę i aby zachować zgodność, OsmAnd, począwszy od wersji 3.9, musi używać Usług Google Play do uzyskiwania poprawek lokalizacji podczas pracy w tle. Przeczytaj więcej informacji w sekcji [Rozwiązywanie problemów](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).