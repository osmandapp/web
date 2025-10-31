---
source-hash: 1cb3cb625144df1fdde1a89546eb0dd6bf2c4217b3e8431939d976cba2b359fb
sidebar_position: 10
title:  Import / Eksport
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

Narzędzia **Import** i **Eksport** w OsmAnd pozwalają na zarządzanie danymi. Możesz przenosić swoje profile, ulubione, trasy i inne ustawienia za pomocą specjalnego formatu poprzez aplikacje na swoim urządzeniu. Proces ten upraszcza zapisywanie i przesyłanie danych między urządzeniami oraz umożliwia udostępnianie ich innym użytkownikom OsmAnd.

:::note Duży rozmiar
*Jeśli rozmiar wybranych danych jest znaczny, aplikacja będzie potrzebować czasu na przygotowanie pliku `.osf`.*
:::


## Eksport / Import danych {#export--import-data}

*Import* i *Eksport* pozwalają na zapisywanie danych z wygenerowanych **plików** `.osf` lub korzystanie ze [źródeł online](../map/raster-maps.md), co umożliwia przywrócenie informacji po ponownej instalacji.

**Typy danych** dostępne do importu/eksportu:

- **Ustawienia:**  
        [Profile](../personal/profiles.md#actions), &nbsp;[OsmAnd/Ustawienia ogólne](../personal/global-settings.md), &nbsp;[Kolory](../personal/color-palette-schemes.md), &nbsp;[Szybka akcja](../widgets/quick-action.md), &nbsp;[Typ POI](../map/point-layers-on-map.md#poi-types), &nbsp;[Unikaj drogi](../map/map-context-menu.md#avoid-road).
- **Moje miejsca:**  
        [Ulubione](../personal/favorites.md#export--import), &nbsp;[Trasy](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[Notatki OSM*, *Edycje OSM](../plugins/osm-editing.md#create--modify-poi), &nbsp;[Notatki A/V](../plugins/audio-video-notes.md), &nbsp;[Znaczniki na mapie](../personal/markers.md), &nbsp;[Historia znaczników*, *Historia wyszukiwania*, *Historia nawigacji](../personal/global-settings.md#history), &nbsp;*Plan podróży*.
- **Zasoby:**  
        [Styl renderowania](../map/vector-maps.md#custom-map-style), &nbsp;[Wyznaczanie trasy](../navigation/routing/osmand-routing.md), &nbsp;[Silniki routingu online](../navigation/routing/online-routing.md), &nbsp;[Źródła map*, *Standardowe/Mapy offline](../map/raster-maps.md), &nbsp;[Mapy Wikipedii i Podróży](../plan-route/travel-guides.md), &nbsp;[Mapy morskie](../plugins/nautical-charts.md), &nbsp;[Mapy drogowe](../map/vector-maps.md#road-style), &nbsp;[Mapy topograficzne](../plugins/topography.md), &nbsp;[Komunikaty głosowe (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Komunikaty głosowe (nagrane)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Kopia zapasowa ulubionych](../personal/favorites.md#automatic-favorites-backup).


### Eksport {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Wszystkie skonfigurowane i utworzone dane można wyeksportować za pomocą ***menu Eksport***. Menu składa się z trzech grup: **Ustawienia**, **Moje miejsca** i **Zasoby**, które zawierają wszystkie dostępne foldery plików. Na przykład, w sekcji Zasoby mapy są pogrupowane według typu w *<Translate android="true" ids="standard_maps"/>, <Translate android="true" ids="wikipedia_and_travel_maps"/>, <Translate android="true" ids="nautical_maps"/>*, i *<Translate android="true" ids="topography_maps"/>* w celu łatwiejszej nawigacji i selektywnego eksportu. W każdym folderze można wybrać pliki do wyeksportowania, pojedynczo lub wszystkie naraz. **Wszystkie wyeksportowane pliki są zapisywane w formacie `.osf`**.  


### Import {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) ![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) 

<!-- ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) -->

</TabItem>

<TabItem value="ios" label="iOS">

Przejdź do: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  


![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) 
<!--  ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) -->

</TabItem>

</Tabs>

Otwiera i przywraca pliki `.osf`. Stuknij plik w menedżerze plików urządzenia lub użyj przycisku akcji.

- *Niektóre elementy już istnieją*. Możesz użyć tej funkcji, aby zapisać oba pliki lub zastąpić wszystkie.
- *Uruchom ponownie*. Po zaimportowaniu plików aplikacja musi zostać ponownie uruchomiona.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) to alternatywne źródło, którego potrzebujesz, aby zapisać swoje osobiste ustawienia i dane aplikacji. Możesz używać tych danych na dowolnym urządzeniu, na którym można zainstalować aplikację OsmAnd lub podczas korzystania z aplikacji komputerowej. Wszelkie wprowadzone zmiany mogą być synchronizowane.


## Zapobieganie utracie danych {#preventing-data-loss}

W wersjach OsmAnd na *Androida* i *iOS*, jeśli całkowicie **odinstalujesz** aplikację lub wybierzesz **Wyczyść dane** na swoim urządzeniu w menu Ustawienia Informacje o aplikacji, folder z danymi zostanie również usunięty z menedżera plików urządzenia. Jeśli nie podejmiesz środków ostrożności, spowoduje to **utratę wszystkich pobranych map OsmAnd, wszystkich zapisanych Ulubionych, tras GPX, komunikatów głosowych (TTS) i [innych danych](#export--import-data).**

Istnieją dwa sposoby na zapisanie danych przed ponowną instalacją aplikacji OsmAnd:

- Użyj [OsmAnd Cloud](#osmand-cloud). Możesz utworzyć kopię zapasową swoich danych, korzystając z funkcji OsmAnd, takich jak [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), w wersji darmowej, lub [OsmAnd Pro](../purchases/index.md), płatnej subskrypcji z większą liczbą funkcji.
- [Eksportuj plik OSF](#export) ze swoimi danymi. Skopiuj plik `.osf` do folderu na swoim urządzeniu lub do OsmAnd Cloud. Po ponownej instalacji OsmAnd [zaimportuj ten plik `.osf`](#import) do aplikacji OsmAnd.


## Powiązane artykuły {#related-articles}

- [Profile (Ustawienia)](./profiles.md)
- [Zarządzaj trasami](../personal/tracks/manage-tracks.md#import--export-track)
- [Historia wyszukiwania](../search/search-history.md#export-and-share)
- [Schematy palet kolorów](../personal/color-palette-schemes.md)

### Częste problemy i rozwiązania {#common-issues-and-solutions}

1. Jak przenieść Ulubione i Trasy na nowe urządzenie. [(sprawdź)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. Mam plik GPX, jak go zaimportować do OsmAnd? [(sprawdź)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Usuwanie danych mapy po aktualizacji aplikacji (jeśli wybrano „Multiuser Storage 1”). [(sprawdź)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)