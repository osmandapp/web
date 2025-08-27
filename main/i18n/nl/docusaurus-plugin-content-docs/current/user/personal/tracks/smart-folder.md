---
source-hash: bb881e5f5e3ae59000cd2ff1cbc2577904cfc5eb14f2e1c143e6366ecb6952f1
sidebar_position: 3
title: Slimme map (Filter)
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



## Overzicht {#overview}

De functie **Slimme map** biedt krachtige hulpmiddelen voor het organiseren en beheren van uw tracks. Een van de belangrijkste functies is de mogelijkheid om bestanden in het tabblad *Tracks* van het menu *Mijn plaatsen* te filteren op basis van criteria zoals duur, lengte of snelheid.

Met deze functie kunt u snel specifieke tracks vinden die aan uw vereisten voldoen. Gefilterde resultaten kunnen worden opgeslagen als een **Slimme map**, wat handige toegang biedt tot dynamisch bijgewerkte trackverzamelingen.


## Zoekfilter {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tabblad*

![Mijn plaatsen tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tabblad*

![Mijn plaatsen tracks](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***Hoe een filter toe te passen:***

- Tik op het pictogram *Zoeken* en tik vervolgens op *Filter* in de rij [*Sorteren op*](./manage-tracks.md#sort-by).

- **Kies de vereiste filterinstellingen** om uw trackzoekopdracht te verfijnen.

- Tik op **Tonen** in de rechterbenedenhoek om de gefilterde resultaten te zien. Het aantal overeenkomende tracks verschijnt tussen haakjes.

- **Om alle actieve filters te wissen**, tikt u op **Alles resetten**.

- **Om de huidige filterset op te slaan** als een nieuwe **Slimme map**, tikt u op het opslagpictogram in de rechterbovenhoek van het scherm.


### Beschikbare filters {#available-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mijn plaatsen tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mijn plaatsen tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **Naam** — Zoek tracks op titel. Voer een volledige of gedeeltelijke naam in om overeenkomende tracks weer te geven.
- **Map** — Selecteer een of meer mappen om tracks te filteren op hun opslaglocatie.
- **Duur** — Filter tracks op hun opgenomen duur, door een bereik in uren en minuten in te stellen.
- **Tijd in beweging** — Specificeer het tijdsbereik dat in beweging is doorgebracht tijdens de opname.
- **Lengte** — Stel een specifiek bereik in kilometers of mijlen in om tracks van een bepaalde lengte te vinden.
- **Gemiddelde snelheid** — Filter tracks op [gemiddelde snelheid](../../widgets/info-widgets.md#average-speed).
- **Sensorgegevensgroep.**
    Pas filters toe op basis van externe sensorgegevens, waaronder:
    - Sensorsnelheid, gemiddeld.
    - Sensorsnelheid, max.
    - Hartslag, gemiddeld.
    - Hartslag, max.
    - Fiets Cadans, gemiddeld.
    - Fiets Cadans, max
    - Fietsvermogen, gemiddeld.
    - Fietsvermogen, max.
    - Temperatuur, gemiddeld.
    - Temperatuur, max.
- **Max snelheid** — Selecteer tracks met specifieke maximale snelheidsbereiken.
- **Omhoog** en **Omlaag** — Filter tracks op basis van positieve of negatieve hoogteverschillen.
- **Gemiddelde hoogte** en **Max hoogte** — Vind tracks met specifieke gemiddelde of maximale hoogtedata.
- **Aanmaakdatum** — Filter tracks die binnen een bepaald datumbereik zijn aangemaakt.
- **Dichtstbijzijnde steden** — Toon tracks die in de buurt van geselecteerde steden of plaatsen passeren.
- **Type activiteit** — Filter tracks op basis van het type [activiteiten](../../map/tracks/track-context-menu.md#track-information-activity) opgenomen in het GPX-bestand (bijv. fietsen, wandelen).
- **Land** — Filter tracks op het land of de regio waar ze zijn opgenomen.
- **Kleur** en **Breedte** — Selecteer tracks op toegewezen kleur of lijnbreedte.
- **Overig** — Aanvullende filters voor speciale kenmerken:
    - *Zichtbaar op kaart*. Toont alleen tracks die op de kaart worden weergegeven.
    - *Met Waypoints*. Toont tracks die specifieke waypoints bevatten.


## Slimme map {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mijn plaatsen tracks sorteerfunctie Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mijn plaatsen tracks](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Een **Slimme map** is een dynamische verzameling tracks die automatisch wordt bijgewerkt op basis van specifieke filtercriteria. Het biedt geavanceerde hulpmiddelen voor het efficiënt organiseren, zoeken en beheren van tracks.

***Voordelen van Slimme mappen:***

1. **Geautomatiseerde organisatie.**
    Neemt automatisch tracks op die voldoen aan vooraf gedefinieerde regels, zoals aanmaakdatum of duur.
2. **Filteren en zoeken.**
    Maakt snel zoeken binnen tracks mogelijk met behulp van geavanceerde filters en trefwoorden.
3. **Dynamische vernieuwing.**
    Vernieuwt de inhoud automatisch om de nieuwste tracks weer te geven die aan de criteria voldoen.
4. **Regels aanpassen.**
    Maak gepersonaliseerde trackverzamelingen door aangepaste filterregels te definiëren.


### Hoe een slimme map te maken {#how-to-create-smart-folder}

Volg deze stappen om een **Slimme map** te maken:

1. Tik op het pictogram ***drie-stippenmenu*** in het tabblad *Tracks* van het menu *Mijn plaatsen*.

2. Selecteer **Slimme map toevoegen** uit het vervolgkeuzemenu.

3. Configureer instellingen:
   - **Geef de map een naam**. Voer een naam in om de map te identificeren.
   - Specificeer **trackfilterparameters**. Pas de vereiste filters toe met behulp van de beschikbare [Filter](#available-filters) opties.

4. **Sla** de instellingen op.
    - Tik op **Tonen** om een voorbeeld van de tracks te bekijken.
    - Selecteer de knop **Opslaan** om de *Slimme map* te voltooien.

De nieuw aangemaakte **Slimme map** zal de inhoud automatisch bijwerken met tracks die overeenkomen met de geselecteerde criteria.


### Slimme mappen beheren {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mijn plaatsen Slimme mappen beheren Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![Mijn plaatsen Slimme mappen beheren Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mijn plaatsen Slimme mappen beheren iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![Mijn plaatsen Slimme mappen beheren iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios.png)

</TabItem>

</Tabs>

De **Slimme map** wordt weergegeven met een uniek pictogram in de mappenlijst in het tabblad Tracks. Om de map te beheren, tikt u op het *drie-stippenmenu* ernaast (*Android*) en *lang tikken* (*iOS*) of opent u de map en gebruikt u het pictogram in de rechterbovenhoek.

***Beschikbare acties:***

- **Details** — Bekijk de volledige lijst met tracks in de map.

- **Toon alle tracks op de kaart** (*alleen Android*) — Toon alle maptracks op de kaart.
    *OPMERKING: Het laden van veel tracks kan de prestaties beïnvloeden.*

- **Naam bewerken** (*Android*) / **Naam wijzigen** (*iOS*) — Wijzig de mapnaam voor eenvoudigere identificatie.

- **Vernieuwen** — Werk de inhoud van de map handmatig bij om ervoor te zorgen dat deze de nieuwste tracks bevat.

- **Standaardweergave wijzigen** (*Android*) — Wijzigt de weergave van alle tracks in de map.

- **Filter bewerken** — Wijzig de trackfilterinstellingen voor de huidige Slimme map. Zie [Zoekfilter](#search-filter) voor details.

- **Exporteren** — Exporteer alle tracks in de Slimme map via de functie [Importeren/Exporteren](../../personal/import-export.md). U wordt doorgestuurd naar *Menu → Instellingen → Tabblad Acties*.

- **Map verwijderen** — Verwijder de Slimme map zonder de tracks te verwijderen.
    *WAARSCHUWING: Deze actie is onomkeerbaar en zal een bevestigingsbericht vragen.*

- **Verplaatsen** (*iOS*) — Hiermee kunt u de map verplaatsen naar een andere bestaande map of een nieuwe maken.

- **Selecteren** — Gebruik [Selectiemodus](./manage-tracks.md#selection-mode) voor specifieke trackacties binnen de map.


## Gerelateerde artikelen {#related-articles}

- [Toon track op kaart](../../map/tracks/index.md)
- [Analyseren op kaart](../../map/tracks/index.md#analyze-track-on-map)
- [Track contextmenu](../../map/tracks/track-context-menu.md)
- [Navigatie per track](../../navigation/setup/gpx-navigation.md)
- [Ritregistratie](../../plugins/trip-recording.md)

> *Laatst bijgewerkt: maart 2025*