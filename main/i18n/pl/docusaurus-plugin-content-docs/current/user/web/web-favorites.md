---
source-hash: 6e85a9c0cfb7a2e0e5b6f8f90f9b17a7da6b19a01478b0e05bd7a83438517602
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

Ulubione w Planerze WWW pozwalają zapisywać i zarządzać ważnymi miejscami bezpośrednio na mapie. Można ich używać do oznaczania lokalizacji, do których chcesz mieć szybki dostęp, organizowania ich w foldery oraz ponownego wykorzystania do nawigacji lub planowania trasy. Interfejs www zapewnia wygodne narzędzia do przeglądania, edycji i pracy z ulubionymi podczas eksploracji mapy, przy czym wszystkie aktualizacje są bezproblemowo synchronizowane w ramach Twojego [OsmAnd Cloud](../personal/osmand-cloud.md).


## Zarządzanie Ulubionymi {#manage-favorites}

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_1_new.png)

Po zarejestrowaniu [**OsmAnd Pro**](../personal/osmand-cloud.md#login) i dla [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), Twoje Ulubione w Planerze WWW są zorganizowane w foldery. Każdy folder grupuje zapisane miejsca i zapewnia zestaw czynności dostępnych z menu Ulubione. 
Dostępne są następujące czynności:

- *Pokaż na mapie* - pokaż punkty ulubionych z wybranego folderu na mapie.
- *Przypnij folder* - przypnij folder na górze listy Ulubione dla szybkiego dostępu. Przypięte foldery są oddzielone od innych folderów. Aby usunąć folder z górnej sekcji, wybierz *Odpnij folder*. Folder Osobisty jest przypięty domyślnie.
- *Zmień nazwę* - nazwa i opis folderu ulubionych.
- *Udostępnij* - otwiera opcje udostępniania. Możesz wybrać, kto może uzyskać dostęp do tego folderu.
- *Pobierz* - pobierz wybrany folder ulubionych.
- *Usuń* - usuń wybrany folder ulubionych.

### Udostępnianie {#share}

Wybranie **Udostępnij** otwiera ekran udostępniania, w którym można skonfigurować dostęp do folderu Ulubione. Można wybrać jeden z następujących trybów dostępu:
- *Prywatny*. Tylko Ty możesz przeglądać folder. Przełączenie na Prywatny cofa dostęp dla wszystkich wcześniej zatwierdzonych użytkowników. Przed zastosowaniem zmiany wyświetlany jest dialog potwierdzający.
- *Tylko żądanie*. Każdy posiadający link może zażądać dostępu. Żądania pojawiają się na liście Oczekujące, gdzie można je zatwierdzić, odrzucić lub zablokować.
- *Wszyscy*. Każdy posiadący link może natychmiast przeglądać folder bez zatwierdzania.  
W zależności od wybranego trybu dostępu przycisk **Kopiuj link** staje się dostępny. Link można udostępnić, aby umożliwić przeglądanie lub zażądać dostępu.

Ekran udostępniania zawiera trzy listy użytkowników:
- Zatwierdzeni — użytkownicy, którzy obecnie mają dostęp do folderu.
- Oczekujące — użytkownicy, którzy zażądali dostępu i oczekują na zatwierdzenie lub odrzucenie.
- Zablokowani — użytkownicy, którzy nie mogą uzyskać dostępu ani zażądać dostępu.  
Każdy wpis użytkownika zawiera menu, które pozwala na zmianę jego statusu lub usunięcie dostępu.

Podczas konfigurowania dostępu mogą pojawić się następujące okna dialogowe:
- *Zmiana dostępu*. Wyświetlane podczas przełączania folderu na Prywatny. Dialog ostrzega, że cały istniejący dostęp użytkownika zostanie cofnięty przed potwierdzeniem zmiany.
- *Żądania dostępu*. Wyświetlane podczas zarządzania użytkownikami na liście Oczekujące, umożliwia zatwierdzenie lub odrzucenie żądań dostępu.

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_share.png) ![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_share_2.png)


## Szczegóły Ulubionych {#favorites-details} 

Wybranie ulubionego otwiera panel **Szczegóły**. Ten panel pojawia się, gdy klikniesz ulubione bezpośrednio na mapie lub wybierz je z folderu ulubionych.

Widok Szczegóły zapewnia informacje związane z wybranym miejscem i zależy od danych dostępnych dla tego konkretnego ulubionego. Na minimum obejmuje lokalizację na mapie i jej współrzędne geograficzne. Dla miejsc powiązanych z obiektami OpenStreetMap lub wzbogaconymi źródłami mogą być wyświetlane dodatkowe metadane, takie jak nazwy, kategorie, identyfikatory lub linki referencyjne (na przykład Wikipedia lub linki Wikidata). 

![Web Favorites Details](@site/static/img/web/favorites_details.png)


## Czynności Ulubionych {#favorites-actions}

[Aby dodać](../personal/favorites.md#manage-favorites) nowy punkt ulubionego, kliknij prawym przyciskiem myszy na ekranie. 

Aby edytować istniejące ulubione, kliknij punkt ulubionego bezpośrednio na mapie lub wybierz je z folderu ulubionych. To otwiera panel Szczegóły, w którym dostępna jest czynność Edytuj. Edycję można również rozpocząć z menu trzech kropek (⋮) obok ulubionego na liście Ulubione.

Panel edycji ulubionego pozwala zmieniać główne właściwości ulubionego, w tym jego nazwę, adres, opis, folder, ikonę, kolor i kształt. Wybrany wygląd jest podglądany zarówno w panelu edycji, jak i bezpośrednio na mapie.

### Edycja Ulubionych {#edit-favorites}

Pole **Adres** obsługuje automatyczne wykrywanie adresu na podstawie wybranej lokalizacji na mapie. Pole może występować w kilku stanach:

- Wyszukiwanie... — wyświetlane podczas automatycznego określania adresu.
- Puste pole — wyświetlane po wyczyszczeniu adresu. W tym stanie można użyć przycisku lokalizacji, aby ponownie automatycznie wykryć adres.
- Wypełnione pole — wyświetla automatycznie wykryty adres lub ręcznie wprowadzony tekst.

Pole adresu zawiera również szybkie działania umożliwiające wyczyszczenie lub przywrócenie wykrytego adresu.

Sekcja **Opis** umożliwia dodawanie notatek lub dodatkowych informacji do ulubionego. Wybranie opcji Dodaj notatki otwiera edytor opisu w panelu pomocniczym. Jeśli opis został już dodany, w panelu głównym wyświetlany jest krótki podgląd ograniczony do dwóch wierszy tekstu. Edytor opisu obsługuje formatowanie tekstu sformatowanego i automatycznie zachowuje zmiany po powrocie do poprzedniego panelu.

Ulubione można organizować w foldery, aby ułatwić zarządzanie i szybki dostęp. Wybranie pozycji **Folder** otwiera panel pomocniczy, w którym można wybrać dostępne foldery. Domyślnie automatycznie wybierany jest ostatnio używany folder. Każdy folder wyświetla również liczbę przechowywanych w nim punktów ulubionych.

Nowe foldery można tworzyć bezpośrednio z panelu wyboru folderu. Wybranie przycisku Dodaj folder otwiera okno dialogowe, w którym można wprowadzić nazwę folderu i wybrać jego położenie na liście Ulubione.

Okno dialogowe zawiera również sekcję Zaawansowane, w której można skonfigurować domyślne ustawienia wyglądu folderu. Ustawienia te obejmują domyślny kolor, ikonę i kształt, które będą automatycznie stosowane do punktów ulubionych dodawanych do tego folderu.

![Web Edit Folder](@site/static/img/web/edit_folder.png)

### Wygląd {#appearance}

Sekcja **Wygląd** umożliwia dostosowanie sposobu wyświetlania ulubionego na mapie. Dostępne są następujące właściwości: ikona, kolor, kształt i ikona. 

Wybranie **Ikona** otwiera panel pomocniczy z pogrupowanymi kategoriami ikon.

- Ikony są pogrupowane według kategorii.
- Najpierw wyświetlane są ostatnio używane ikony.
- Aktualnie wybrana ikona jest podświetlona.
- Podgląd wykorzystuje wybrany kształt i kolor.

Wybranie **Kolor** otwiera panel palety kolorów.

- Paleta zawiera predefiniowane i zdefiniowane przez użytkownika kolory.
- Kolory niestandardowe można dodawać za pomocą próbnika kolorów.
- Kolory można edytować, duplikować lub usuwać za pomocą menu kontekstowego.
- Nowo dodane kolory są zapisywane w palecie użytkownika i pozostają dostępne później.

Opcja **Kształt** definiuje formę tła używaną dla znacznika ulubionego.  Dostępne są następujące kształty: okrąg, kwadrat i ośmiokąt.

Podgląd wyglądu jest natychmiast aktualizowany zarówno w panelu edycji, jak i na mapie podczas zmiany ikony, koloru lub kształtu.

![Web Edit Appearance](@site/static/img/web/edit_icon.png)

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