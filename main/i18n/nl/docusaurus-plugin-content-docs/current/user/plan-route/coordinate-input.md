---
source-hash: 1505593576ed8b4e4ca8274ad047f82a70181f3fcafd8e9ca6d60e795b2f0724
sidebar_position: 3
title:  Coördinaten Invoeren
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



<InfoAndroidOnly />

## Overzicht {#overview}

*Coördinaten Invoeren* is een eenvoudige en gebruiksvriendelijke tool voor het aanmaken van routepunten door hun geografische locatie op te geven. Deze functie kan handig zijn voor het navigeren naar bepaalde plaatsen waarvan u alleen de coördinaten kent: toegevoegde punten kunnen worden [opgeslagen](#save-as-track) als een GPX-track en later worden gebruikt voor [GPX-navigatie](../navigation/setup/gpx-navigation.md) of [navigatie via markeringen](../navigation/setup/markers-navigation.md#overview).

![Overzicht coördinaten invoeren](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Hoe te gebruiken {#how-to-use}

U kunt routepunten aanmaken vanuit het menu *[Kaartmarkeringen](../personal/markers.md#actions)* of vanuit [Mijn plaatsen](../personal/myplaces.md) (zie schermafbeeldingen). Volg deze paden om de optie voor het invoeren van coördinaten te bereiken:
  - *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Aardbol-knop onderaan het scherm*
  - *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Hoe coördinaten invoeren te vinden](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Hoe coördinaten invoeren te vinden](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Nadat u het scherm voor het invoeren van coördinaten hebt geopend:

- &nbsp;Zorg ervoor dat de juiste [maateenheden](#coordinates-format) worden gebruikt. Zo niet, wijzig dan het coördinatenformaat in het menu [Opties](#options).
- &nbsp;Voer de coördinaten van het punt in met behulp van het [sjabloon](#add-a-point). Nadat u op de knop *[Toevoegen](#add-a-point)* drukt, wordt uw punt toegevoegd aan de *[puntenlijst](#points-list)*. Indien nodig kunt u extra punten invoeren.
- &nbsp;Sla uw punt(en) op als een *[Track](../personal/tracks/manage-tracks.md)* via het *[menu Opties](#options)* of de knop &#8592; *(Terug)*.

:::note
De resultaten van het aanmaken van punten via coördinaten - een *[GPX-track](../personal/tracks/manage-tracks.md)* met routepunten - zijn te vinden in het menu [Mijn plaatsen](../personal/myplaces.md) (map *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Opties {#options}

Via het optiemenu kunt u toegevoegde punt(en) [opslaan](#save-as-track) als een track, geavanceerde invoeropties activeren (systeemtoetsenbord en lengtegraad met twee cijfers), of het coördinatenformaat wijzigen.

![Optiemenu coördinaten invoeren Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - opent een dialoogvenster waarmee u het aangemaakte punt (of de punten) kunt opslaan als een GPX-track. U kunt de naam van de track wijzigen of de standaardnaam behouden.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - hiermee kunt u het Android-systeemtoetsenbord gebruiken om coördinaten in te voeren.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - maakt het mogelijk om lengtegraadgegevens met slechts twee cijfers in te voeren. Dit kan handig zijn voor lengtegraden van 0° tot 99° (bijvoorbeeld in Europa).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - hiermee kunt u het coördinatenformaat voor invoer wijzigen.

### Coördinatenformaat {#coordinates-format}

Wanneer u coördinaten invoert, is het belangrijk om ervoor te zorgen dat de juiste maateenheden worden gebruikt. We ondersteunen decimale graden (DD), graden en minuten, of graden, minuten en seconden (DMS).

|Coördinatenformaat| Voorbeeld |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Een punt toevoegen {#add-a-point}

Nadat u de juiste eenheden hebt geselecteerd, bent u klaar om de coördinaten van toekomstige routepunten in te voeren.
Het scherm voor het invoeren van coördinaten bestaat uit de volgende elementen:

![Menu coördinaten invoeren Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Opent het menu *[Opties](#options)* (hierboven beschreven).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Wordt gebruikt om gegevens in te voeren in het geselecteerde formaat (D - graden, M - minuten, S - seconden). U kunt het coördinatenformaat wijzigen in het *[menu <Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> en <Translate android="true" ids="navigate_point_longitude"/>* halfrondknoppen. Hiermee kunt u de zijden van de horizon wijzigen: *Zuid - Noord* en *West - Oost*.
- &nbsp;Veld *Puntnaam*. U kunt de standaardnaam laten staan of uw eigen naam bedenken.
- &nbsp;*X*-knop. Wist het invoerveld van de betreffende regel.

### Kort toetsenbord {#short-keyboard}

Om gegevens in te voeren, kunt u het korte toetsenbord (standaard) of het systeemtoetsenbord (Android) gebruiken. Om de invoermethode te wijzigen, gaat u naar het menu *[Opties](#options)*. Na het invoeren van de breedte- en lengtegraad kunt u het punt toevoegen aan de *[lijst](#points-list)* met de knop *+Toevoegen*.

![Punt toevoegen coördinaten invoeren Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- De knop *<Translate android="true" ids="shared_string_add"/>* maakt het mogelijk om een punt op te slaan in de *[Puntenlijst](#points-list)*.
- De knop *<Translate android="true" ids="shared_string_clear"/>* wist alle ingevoerde gegevens.
- &#9032; stelt u in staat om naar de volgende waarde te springen.
- *Toetsenbordknoppen* maken het mogelijk om gegevens in te voeren, te verwijderen, naar de volgende coördinaatwaarde te springen en het toetsenbord te verbergen.

### Puntenlijst {#points-list}

Toont reeds aangemaakte punten: naam, afstand en richting naar dit punt.

![Punt opslaan coördinaten invoeren Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Punt opslaan coördinaten invoeren Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

De knop **⁝** opent een actiemenu voor het bewerken of verwijderen van het geselecteerde punt.
Wanneer u op een punt tikt, wordt het mogelijk om de coördinaten ervan te wijzigen. Tik op de knop *Toepassen* om de wijzigingen op te slaan.


## Opslaan als track {#save-as-track}

Om uw punten als een track op te slaan, tikt u op de knop *Terug* ( &#8592; ) of gebruikt u het menu *[Opties](#options)*.

![Punt opslaan coördinaten invoeren Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Punt opslaan coördinaten invoeren Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

In het pop-upmenu kunt u uw eigen tracknaam invoeren of deze standaard opslaan. Tik op <Translate android="true" ids="shared_string_save"/> om de toegevoegde punten als een nieuwe track op te slaan.
U vindt uw track in het menu [Mijn plaatsen](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).