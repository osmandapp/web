---
source-hash: ef13b994168cf04dcf98784cf4ef75aea6eb57a3e4db536a0fa48e3617173008
sidebar_position: 6
sidebar_label: Favorites
title: Favorites
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

Ulubione w Planerze Www pozwalają zapisywać i zarządzać ważnymi miejscami bezpośrednio na mapie. Można ich używać do oznaczania lokalizacji, do których chcesz mieć szybki dostęp, organizowania ich w foldery oraz ponownego wykorzystania do nawigacji lub planowania trasy. Interfejs www zapewnia wygodne narzędzia do przeglądania, edycji i pracy z ulubionymi podczas eksploracji mapy, przy czym wszystkie aktualizacje są bezproblemowo synchronizowane w ramach Twojego [OsmAnd Cloud](../personal/osmand-cloud.md).


## Zarządzanie Ulubionymi {#manage-favorites}

![Edycja ulubionych w chmurze OsmAnd Web](@site/static/img/web/favorites_new.png)

Po zarejestrowaniu [**OsmAnd Pro**](../personal/osmand-cloud.md#login) i dla [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), Twoje Ulubione w Planerze Www są zorganizowane w foldery. Każdy folder grupuje zapisane miejsca i zapewnia zestaw czynności dostępnych z menu Ulubione. 
Dostępne są następujące czynności:

- *Pokaż na mapie* - pokaż punkty ulubionych z wybranego folderu na mapie.
- *Zmień nazwę* - nazwa i opis folderu ulubionych.
- *Udostępnij* - otwiera opcje udostępniania. Możesz wybrać, kto może uzyskać dostęp do tego folderu:
- *Pobierz* - pobierz wybrany folder ulubionych.
- *Usuń* - usuń wybrany folder ulubionych.

### Udostępnianie {#share}

Wybranie **Udostępnij** otwiera ekran udostępniania, w którym można skonfigurować dostęp do folderu Ulubione. Można wybrać jeden z następujących trybów dostępu:
- *Prywatny*. Tylko Ty możesz przeglądać folder. Przełączenie na Prywatny cofa dostęp dla wszystkich wcześniej zatwierdzonych użytkowników. Przed zastosowaniem zmiany wyświetlany jest dialog potwierdzający.
- *Tylko żądanie*. Każdy posiadający link może zażądać dostępu. Żądania pojawiają się na liście Oczekujące, gdzie można je zatwierdzić, odrzucić lub zablokować.
- *Wszyscy*. Każdy posiadający link może natychmiast przeglądać folder bez zatwierdzania.  
W zależności od wybranego trybu dostępu przycisk **Kopiuj link** staje się dostępny. Link można udostępnić, aby umożliwić przeglądanie lub zażądać dostępu.

Ekran udostępniania zawiera trzy listy użytkowników:
- Zatwierdzeni — użytkownicy, którzy obecnie mają dostęp do folderu.
- Oczekujące — użytkownicy, którzy zażądali dostępu i oczekują na zatwierdzenie lub odrzucenie.
- Zablokowani — użytkownicy, którzy nie mogą uzyskać dostępu ani zażądać dostępu.  
Każdy wpis użytkownika zawiera menu, które pozwala na zmianę jego statusu lub usunięcie dostępu.

Podczas konfigurowania dostępu mogą pojawić się następujące okna dialogowe:
- *Zmiana dostępu*. Wyświetlane podczas przełączania folderu na Prywatny. Dialog ostrzega, że cały istniejący dostęp użytkownika zostanie cofnięty przed potwierdzeniem zmiany.
- *Żądania dostępu*. Wyświetlane podczas zarządzania użytkownikami na liście Oczekujące, umożliwia zatwierdzanie lub odrzucanie żądań dostępu.

![Edycja ulubionych w chmurze OsmAnd Web](@site/static/img/web/favorites_share.png) ![Edycja ulubionych w chmurze OsmAnd Web](@site/static/img/web/favorites_share_2.png)


## Szczegóły Ulubionych {#favorites-details} 

Wybranie ulubionego otwiera panel **Szczegóły**. Ten panel pojawia się, gdy klikniesz ulubione bezpośrednio na mapie lub wybierzesz je z folderu ulubionych.

Widok Szczegóły zapewnia informacje związane z wybranym miejscem i zależy od danych dostępnych dla tego konkretnego ulubionego. Na minimum obejmuje lokalizację na mapie i jej współrzędne geograficzne. Dla miejsc powiązanych z obiektami OpenStreetMap lub wzbogaconymi źródłami mogą być wyświetlane dodatkowe metadane, takie jak nazwy, kategorie, identyfikatory lub linki referencyjne (na przykład [Wikipedia](../plugins/wikipedia.md) lub linki Wikidata). 

![Szczegóły ulubionych w sieci](@site/static/img/web/favorites_details.png)


## Czynności Ulubionych {#favorites-actions}

### Dodaj / Edytuj Ulubione {#add--edit-favorite}

[Aby dodać](../personal/favorites.md#manage-favorites) nowy punkt ulubionego, kliknij prawym przyciskiem myszy na ekranie. 

Aby edytować istniejące ulubione, kliknij punkt ulubionego bezpośrednio na mapie lub wybierz go z folderu ulubionych. To otwiera panel Szczegóły, w którym dostępna jest czynność Edytuj. Edycję można również rozpocząć z menu trzech kropek (⋮) obok ulubionego na liście Ulubione.

Interfejs edycji pozwala modyfikować główne właściwości ulubionego, takie jak nazwa, ikona, kolor i opis. Układ i dostępne pola są zgodne z doświadczeniem edycji w aplikacji mobilnej [OsmAnd](../personal/favorites.md#create), zapewniając znajomy przepływ pracy na różnych platformach.

![Dodawanie ulubionych OsmAnd Web](@site/static/img/web/web_favorites_add.png)


### Inne Czynności {#other-actions}

Oprócz edycji każdy ulubiony zapewnia kilka innych czynności, które można uzyskać z panelu Szczegóły lub z menu trzech kropek (⋮) na liście Ulubione:
- *Usuń* - usuwa wybrane ulubione na stałe. Ta czynność jest dostępna zarówno z panelu Szczegóły, jak i z menu trzech kropek. Usunięcie wpływa na ulubione na wszystkich urządzeniach po synchronizacji.
- *Udostępnij* - ta czynność pozwala udostępnić bezpośredni link do miejsca.
- *Trasa z* - ustawia wybrane ulubione jako punkt startowy do planowania trasy. Panel Trasy otwiera się automatycznie, umożliwiając wybór miejsca docelowego i profilu nawigacji.
- *Nawigacja* - ustawia wybrane ulubione jako punkt docelowy. 


## Powiązane Artykuły {#related-articles}

- [Ulubione](../personal/favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Menu Kontekstowe Mapy](../map/map-context-menu.md)
- [Wikipedia](../plugins/wikipedia.md)