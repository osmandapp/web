---
source-hash: c47382e3eb41818c4cf320edb44a68a13d0c554338043ba81287b93b58191a9f
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

De functie **Slimme Map** biedt krachtige hulpmiddelen voor het organiseren en beheren van uw tracks. Een van de belangrijkste functies is de mogelijkheid om bestanden te filteren in het *Tracks-tabblad* van het *Mijn Plaatsen*-menu op basis van criteria zoals duur, lengte of snelheid.  

Met deze functie kunt u snel specifieke tracks vinden die aan uw eisen voldoen. Gefilterde resultaten kunnen worden opgeslagen als een **Slimme Map**, wat handige toegang biedt tot dynamisch bijgewerkte trackcollecties.


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

- Tik op het *Zoek*-icoon, tik vervolgens op *Filter* in de rij [*Sorteren op*](./manage-tracks.md#sort-by).

- **Kies de vereiste filterinstellingen** om uw zoekopdracht naar tracks te verfijnen.

- Tik op **Tonen** in de rechterbenedenhoek om de gefilterde resultaten te zien. Het aantal overeenkomende tracks verschijnt tussen haakjes.

- **Om te wissen** alle actieve filters, tik op **Alles resetten**.

- **Om op te slaan** de huidige filterset als een nieuwe **Slimme Map**, tik op het opslaan-icoon in de rechterbovenhoek van het scherm.


### Beschikbare Filters {#available-filters}

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
- **Max Snelheid** — Selecteer tracks met specifieke maximale snelheidsbereichen.
- **Stijgen** en **Dalen** — Filter tracks op basis van positieve of negatieve hoogteverschillen.
- **Gemiddelde hoogte** en **Max hoogte** — Vind tracks met specifieke gemiddelde of maximale hoogtegegevens.
- **Aanmaakdatum** — Filter tracks die binnen een bepaald datumbereik zijn gemaakt.
- **Dichtstbijzijnde steden** — Toon tracks die in de buurt van geselecteerde steden of plaatsen passeren.
- **Type activiteit** — Filter tracks op basis van het [activities](../../map/tracks/track-context-menu.md#track-activity-type) type dat in het GPX-bestand is opgenomen (bijv. fietsen, wandelen).
- **Land** — Filter tracks op het land of de regio waar ze zijn opgenomen.
- **Kleur** en **Breedte** — Selecteer tracks op toegewezen kleur of lijnbreedte.
- **Overig** — Extra filters voor speciale kenmerken:
    - *Zichtbaar op Kaart*. Toont alleen tracks die op de kaart worden weergegeven.
    - *Met Waypoints*. Toont tracks die specifieke waypoints bevatten.


## Slimme Map {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mijn plaatsen tracks sorteerfunctie Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mijn plaatsen tracks](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

Een **Slimme Map** is een dynamische verzameling van tracks die automatisch wordt bijgewerkt op basis van specifieke filtercriteria. Het biedt geavanceerde hulpmiddelen voor het efficiënt organiseren, zoeken en beheren van tracks.  

***Voordelen van Slimme Mappen:***

1. **Geautomatiseerde organisatie.**  
    Neemt automatisch tracks op die voldoen aan vooraf gedefinieerde regels, zoals aanmaakdatum of duurbereik.
2. **Filteren en zoeken.**  
    Maakt snelle zoekopdrachten binnen tracks mogelijk met behulp van geavanceerde filters en trefwoorden.
3. **Dynamische vernieuwing.**  
    Vernieuwt automatisch de inhoud om de nieuwste tracks weer te geven die aan de criteria voldoen.
4. **Regels aanpassen.**  
    Creëer gepersonaliseerde trackcollecties door aangepaste filterregels te definiëren.


### Hoe een Slimme Map te Maken {#how-to-create-smart-folder}

Volg deze stappen om een **Slimme Map** te maken:

1. Tik op het ***drie-puntjes menu***-icoon in het *Tracks*-tabblad van het *Mijn Plaatsen*-menu.

2. Selecteer **Slimme map toevoegen** uit het dropdownmenu.

3. Configureer instellingen:
   - **Geef de map een naam**. Voer een naam in om de map te identificeren.
   - Specificeer **trackfilterparameters**. Pas de vereiste filters toe met behulp van de beschikbare [Filter](#available-filters) opties.

4. **Sla** de instellingen op.
    - Tik op **Tonen** om een voorbeeld van de tracks te bekijken.
    - Selecteer de **Opslaan**-knop om de *Slimme Map* te voltooien.

De nieuw aangemaakte **Slimme Map** zal zijn inhoud automatisch bijwerken met tracks die aan de geselecteerde criteria voldoen.


### Slimme Mappen Beheren {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mijn plaatsen Slimme Mappen Beheren Android](@site/static/img/personal/tracks/smart_folder_1_andr.png) ![Mijn plaatsen Slimme Mappen Beheren Android](@site/static/img/personal/tracks/smart_folder_2_andr.png)

De **Slimme map** wordt weergegeven met een uniek icoon in de maplijst op het Tracks-tabblad. Om de map te beheren, tikt u op het *drie-puntjes menu* ernaast om de beschikbare acties te openen:

- **<Translate android="true" ids="shared_string_details"/>** — Bekijk de volledige lijst met tracks in de map.
- **<Translate android="true" ids="show_all_tracks_on_the_map"/>** — Toon alle tracks van de map op de kaart.  
    *OPMERKING: Het laden van veel tracks kan de prestaties beïnvloeden.*
- **<Translate android="true" ids="shared_string_rename"/>** — Wijzig de mapnaam voor eenvoudigere herkenning.
- **<Translate android="true" ids="shared_string_refresh"/>** — Werk de inhoud van de map handmatig bij, zodat de nieuwste tracks erin staan.
- **<Translate android="true" ids="edit_filter"/>** — Wijzig de trackfilterinstellingen van de huidige Slimme map. Zie [Zoekfilter](#search-filter) voor details.
- **<Translate android="true" ids="shared_string_export"/>** — Exporteer alle tracks in de Slimme map via de functie [Importeren / Exporteren](../../personal/import-export.md). U wordt doorgestuurd naar *Menu → Instellingen → Acties*.
- **<Translate android="true" ids="delete_folder"/>** — Verwijder de Slimme map zonder de tracks te verwijderen.  
    *WAARSCHUWING: Deze actie is onomkeerbaar en vraagt om bevestiging.*

U kunt de map ook openen en op het *drie-puntjes menu* in de *rechterbovenhoek* tikken om extra acties te openen:

- **<Translate android="true" ids="shared_string_select"/>** — Gebruik de [Selectiemodus](./manage-tracks.md#selection-mode) voor specifieke trackacties binnen de map.
- **<Translate android="true" ids="organize_by"/>** — Organiseer de tracks in de Slimme map automatisch in groepen op basis van een geselecteerde parameter. Selecteer *Geen* om alle tracks als één lijst weer te geven, overeenkomstig de standaardweergave van de Slimme map. Beschikbare groeperingstypen zijn onder meer *Algemeen*, *Datum en tijd*, *Locatie*, *Snelheid*, *Hoogte en stijging* en *Sensorgegevens*. 

Sommige groeperingsparameters zijn alleen beschikbaar met een OsmAnd Pro-abonnement. Gratis parameters zijn onder meer *Activiteit*, *Jaar van aanmaak* en *Dichtstbijzijnde stad*. Alle andere parameters zijn gemarkeerd met een <ProFeature/>-label.

Voor numerieke parameters (zoals afstand, duur, snelheid of hoogte) is een dialoogvenster *Stapgrootte instellen* beschikbaar. Gebruik de schuifregelaar om waardebereiken voor de groepering te definiëren.

Voor PRO-parameters kunt u een voorbeeld van de groepering bekijken (open bijvoorbeeld de stapgrootte-selector en zie hoe tracks worden gegroepeerd), maar voor het toepassen van deze wijzigingen is een actief abonnement vereist. Als u een PRO-parameter selecteert of op de knop Ontgrendelen tikt, wordt het scherm Abonnement kiezen geopend. Eerder toegepaste groepering blijft zichtbaar, ook als het abonnement verloopt, maar voor het bewerken of toepassen van nieuwe PRO-groepering is een actief abonnement vereist.

Nadat een groeperingsparameter is geselecteerd, worden tracks als groepen weergegeven. Elke groep toont zijn naam, icoon en het aantal tracks dat hij bevat. Tik op een groep om de lijst met tracks in die groep te openen. Lege groepen worden niet weergegeven. Gegroepeerde resultaten kunnen alfabetisch (A–Z of Z–A) of, voor numerieke parameters, op hoogste of laagste waarden worden gesorteerd. Houd een groep lang ingedrukt om alle tracks in de groep op de kaart te tonen of alle tracks in de groep te exporteren.

</TabItem>

<TabItem value="ios" label="iOS">

![Mijn plaatsen Slimme Mappen Beheren iOS](@site/static/img/personal/tracks/smart_folder_new_ios.png) ![Mijn plaatsen Slimme Mappen Beheren iOS](@site/static/img/personal/tracks/smart_folder_new1_ios.png)

De **Slimme map** wordt weergegeven met een uniek icoon in de maplijst op het Tracks-tabblad. Om de map te beheren, houdt u de mapnaam *lang ingedrukt* om de beschikbare acties te openen:

- **<Translate ios="true" ids="shared_string_rename"/>**— Wijzig de mapnaam voor eenvoudigere herkenning.
- **<Translate ios="true" ids="shared_string_export"/>** — Exporteer alle tracks in de Slimme map via de functie [Importeren / Exporteren](../../personal/import-export.md). U wordt doorgestuurd naar *Menu → Instellingen → Acties*.
- **<Translate ios="true" ids="shared_string_move"/>** — Hiermee kunt u de map naar een andere bestaande map verplaatsen of een nieuwe map maken.
- **<Translate ios="true" ids="shared_string_delete"/>** — Verwijder de Slimme map zonder de tracks te verwijderen.  
    *WAARSCHUWING: Deze actie is onomkeerbaar en vraagt om bevestiging.*

U kunt de map ook openen en op het icoon in de *rechterbovenhoek* tikken om extra acties te openen:

- **<Translate ios="true" ids="shared_string_select"/>** — Gebruik de [Selectiemodus](./manage-tracks.md#selection-mode) voor specifieke trackacties binnen de map.
- **<Translate ios="true" ids="shared_string_refresh"/>** — Werk de inhoud van de map handmatig bij, zodat de nieuwste tracks erin staan.
- **<Translate ios="true" ids="edit_filter"/>** — Wijzig de trackfilterinstellingen van de huidige Slimme map. Zie [Zoekfilter](#search-filter) voor details.
- **<Translate ios="true" ids="organize_by"/>** — Organiseer de tracks in de Slimme map automatisch in groepen op basis van een geselecteerde parameter. Selecteer *Geen* om alle tracks als één lijst weer te geven, overeenkomstig de standaardweergave van de Slimme map. Beschikbare groeperingstypen zijn onder meer *Algemeen*, *Datum en tijd*, *Locatie*, *Snelheid*, *Hoogte en stijging* en *Sensorgegevens*. 

Sommige groeperingsparameters zijn alleen beschikbaar met een OsmAnd Pro-abonnement. Gratis parameters zijn onder meer *Activiteit*, *Jaar van aanmaak* en *Dichtstbijzijnde stad*. Alle andere parameters zijn gemarkeerd met een <ProFeature/>-label.

Voor numerieke parameters (zoals afstand, duur, snelheid of hoogte) is een dialoogvenster *Stapgrootte instellen* beschikbaar. Gebruik de schuifregelaar om waardebereiken voor de groepering te definiëren.

Voor PRO-parameters kunt u een voorbeeld van de groepering bekijken (open bijvoorbeeld de stapgrootte-selector en zie hoe tracks worden gegroepeerd), maar voor het toepassen van deze wijzigingen is een actief abonnement vereist. Als u een PRO-parameter selecteert of op de knop Ontgrendelen tikt, wordt het scherm Abonnement kiezen geopend. Eerder toegepaste groepering blijft zichtbaar, ook als het abonnement verloopt, maar voor het bewerken of toepassen van nieuwe PRO-groepering is een actief abonnement vereist.

Nadat een groeperingsparameter is geselecteerd, worden tracks als groepen weergegeven. Elke groep toont zijn naam, icoon en het aantal tracks dat hij bevat. Tik op een groep om de lijst met tracks in die groep te openen. Lege groepen worden niet weergegeven. Gegroepeerde resultaten kunnen alfabetisch (A–Z of Z–A) of, voor numerieke parameters, op hoogste of laagste waarden worden gesorteerd. Houd een groep lang ingedrukt om alle tracks in de groep op de kaart te tonen of alle tracks in de groep te exporteren.

</TabItem>

</Tabs>

<!--
The **Smart folder** is displayed with a unique icon in the folder list in the Tracks tab. To manage the folder, tap the *three-dot menu* next to it (*Android*) and *long tap* (*iOS*) or open the folder and use the icon in the top-right corner.

***Available Actions:***

- **Details** — View the complete list of tracks contained in the folder.

- **Show all tracks on the map** (*Android only*) — Display all folder tracks on the map.  
    *NOTE: Loading many tracks may affect performance.*

- **Edit name** (*Android*) / **Rename** (*iOS*) — Change the folder name for easier identification.

- **Refresh** — Manually update the folder's content to ensure it includes the latest tracks.

- **Change default appearance** (*Android*) — Changes the display appearance of all tracks in the folder.

- **Edit filter** — Modify the track filter settings for the current Smart Folder. See [Search Filter](#search-filter) for details.

- **Export** — Export all tracks in the Smart Folder via the [Import/Export](../../personal/import-export.md) feature. You will be redirected to *Menu → Settings → Actions tab*.

- **Delete folder** — Remove the Smart Folder without deleting its tracks.  
    *WARNING: This action is irreversible and will prompt a confirmation message.*

- **Move** (*iOS*) — Allows you to move the folder to another existing folder or create a new one.

- **Select** — Use [Selection Mode](./manage-tracks.md#selection-mode) for specific track actions within the folder.
-->

## Gerelateerde Artikelen {#related-articles}

- [Toon track op kaart](../../map/tracks/index.md)
- [Analyseer op kaart](../../map/tracks/index.md#analyze-track-on-map)
- [Track Contextmenu](../../map/tracks/track-context-menu.md)
- [Navigatie per track](../../navigation/setup/gpx-navigation.md)
- [Trip opnemen](../../plugins/trip-recording.md)