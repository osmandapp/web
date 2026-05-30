---
source-hash: db70d151504e034314031d79cbef9cd64a6f7a15179603897056aa6b65a3d432
sidebar_position: 5
sidebar_label: Tracks
title: Tracks
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

Web Planner oferuje prosty sposób pracy z Twoimi osobistymi danymi bezpośrednio w przeglądarce. Po zalogowaniu możesz otworzyć swoje trasy, dostosować je, utworzyć nowe lub wgrać pliki z komputera. 

Wszystkie zmiany są automatycznie synchronizowane za pośrednictwem [OsmAnd Cloud](../personal/osmand-cloud.md), więc wszystko, co zaktualizujesz w sieci, pojawi się na Twoich urządzeniach, a wszystko, co utworzysz na telefonie, pojawi się tutaj. Ułatwia to przechodzenie między platformami i utrzymywanie spójności danych, gdziekolwiek używasz OsmAnd.


## Jak używać {#how-to-use}

To funkcja płatna <ProFeature/>. Aby z niej skorzystać, zaloguj się na konto OsmAnd Pro.

![Track login](@site/static/img/web/track_login.png) ![Track login](@site/static/img/web/track_login_2.png)

Sekcja Trasy zawiera wszystkie narzędzia i akcje związane z trasami. Dostępne są następujące opcje:

- Wyświetlanie tras z [OsmAnd Cloud](#cloud-tracks).
- Dodawanie tras na mapie (folder **Widoczne na mapie**).
- Przeglądanie informacji o wszystkich trasach i wykresach
- Modyfikowanie tras i dodawanie ich do chmury.
- Pobieranie i usuwanie tras.
- Tworzenie nowych folderów lub usuwanie ich.
- Pobieranie folderów jako kolekcja OSF lub OBF.


## Widoczne na mapie {#visible-on-the-map}

Widok **Widoczne na mapie** zawiera listę wszystkich tras, które są obecnie wyświetlane na mapie. Dowolną trasę można dodać do tej listy z głównego panelu Tras, korzystając z opcji **⋮ → Uczyń trasę widoczną**.

Trasy widoczne na mapie są podświetlone na niebiesko, natomiast trasy obecnie ukryte pojawiają się na szaro. Przełącznik obok każdej trasy pozwala szybko ją pokazać lub ukryć. Przycierz **Ukryj wszystkie** wyłącza wszystkie widoczne trasy naraz.

Pod główną listą sekcja **Ostatnio widoczne** wyświetla trasy, które były wcześniej pokazywane na mapie. Ułatwia to ponowne włączenie trasy bez ponownego wyszukiwania jej w folderach lub w OsmAnd Cloud.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## Menu folderu tras {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

Kliknij przycisk z trzema kropkami (⋮), aby otworzyć menu *Folder tras*. Stąd możesz:

 - Pobrać jako OSF.
 - Pobrać jako kolekcję OBF. Eksportuj folder w formacie binarnym OsmAnd, wybierając plik [OBF](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) lub [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **Plik OBF**. Możesz pobrać mapę offline OBF i otworzyć ją w OsmAnd na urządzeniu. Jest odpowiednia do wyświetlania dużej liczby tras na mapie.
      -  **Travel OBF**. Możesz również zaimportować mapę tras jako książkę podróży, co pozwala na wybór indywidualnych tras na mapie i używanie ich jak zwykłych plików GPX. Książka podróży obsługuje również funkcje takie jak wyświetlanie tras jako punktów, filtrowanie tras według typu aktywności oraz filtrowanie punktów trasy.
 - Zmień nazwę. Otwiera okno dialogowe, w którym możesz wprowadzić nową nazwę dla wybranego folderu. Zmiana jest synchronizowana z OsmAnd Cloud i pojawi się na wszystkich podłączonych urządzeniach.
 - Usuń. Otwiera okno dialogowe z potwierdzeniem. Usunięcie folderu usuwa go na stałe wraz ze wszystkimi zawartymi w nim trasami. Ta akcja jest również synchronizowana za pośrednictwem OsmAnd Cloud.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)

### Foldery inteligentne {#smart-folders}

**Foldery inteligentne** utworzone na urządzeniach mobilnych mogą być synchronizowane i wyświetlane w wersji webowej za pośrednictwem OsmAnd Cloud. Aby upewnić się, że pojawiają się w wersji webowej, synchronizacja [Ustawień OsmAnd](../personal/osmand-cloud.md#select-data-to-back-up) musi być włączona w ustawieniach Chmury.  
Przejdź do: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

Foldery inteligentne są obecnie przechowywane jako część ustawień globalnych, więc są przesyłane do Chmury tylko wtedy, gdy synchronizacja Ustawień jest aktywna. Po utworzeniu lub edytowaniu folderu inteligentnego zaleca się uruchomienie ręcznej synchronizacji w celu zaktualizowania danych.

W wersji webowej Foldery inteligentne są wyświetlane na liście tras z charakterystyczną ikoną gwiazdki, co ułatwia ich odróżnienie od zwykłych folderów. Nazwa folderu jest synchronizowana w pierwszej kolejności, natomiast lista tras zależy od konfiguracji folderu na urządzeniu.

Trasy są wyświetlane tylko wtedy, gdy konfiguracja folderu inteligentnego jest obsługiwana w wersji webowej. Obejmuje to zarówno [ustawienia filtrów](../personal/tracks/smart-folder.md#search-filter), jak i [opcje grupowania](../personal/tracks/smart-folder.md#managing-smart-folders). Jeśli używane są nieobsługiwane parametry (na przykład najbliższe miasto), folder może pojawić się bez tras. Aby zapewnić najlepszą kompatybilność, używaj popularnych parametrów, takich jak aktywność, data, odległość lub czas trwania.

Synchronizacja folderów inteligentnych może się różnić w zależności od platformy i konfiguracji synchronizacji. Aby uzyskać najbardziej spójne wyniki, upewnij się, że synchronizacja Chmury jest włączona i aktualna na wszystkich urządzeniach.

W menu z trzema kropkami (⋮) możesz pobrać folder inteligentny jako kolekcję OBF.

![Smart Folders](@site/static/img/web/smart_folder.png) ![Smart Folders](@site/static/img/web/smart_folder_menu.png)


## Trasy w chmurze {#cloud-tracks}

Trasy GPX, które masz w [OsmAnd Cloud](../personal/osmand-cloud.md), będą dostępne do wyświetlania i edycji po zalogowaniu. Tylko dla użytkowników **Pro** <ProFeature/> oraz dla użytkowników [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (którzy mogą pobrać swoje dane nawet po wygaśnięciu subskrypcji Pro).

Po wybraniu trasy w chmurze dostępne są następujące funkcje:
- *Informacje* - wyświetlanie danych trasy.
- *Wysokość* - wykres wysokości.
- *Prędkość* - wykres prędkości.
- *Nachylenie* - wykres nachylenia.
- *Przelicz Wysokość (Satelita)* - przelicza wartości wysokości dla wybranej trasy i wyświetla je na wykresie wysokości.
- *Typ drogi* - dzieli trasę na segmenty według klasyfikacji dróg.
- *Nawierzchnia* - pokazuje typy nawierzchni trasy wzdłuż trasy.
- *Gładkość* - wyświetla gładkość segmentów na podstawie tagów OSM.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_new.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details_new.png)


## Powiązane artykuły {#related-articles}

- [Zarządzanie trasami](../personal/tracks/manage-tracks.md)
- [Analizator tras](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)