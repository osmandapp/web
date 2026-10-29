---
source-hash: b9d29f72bcf2d43d5cc26838609d63efd31b5183a4de6ef652bd49117b2c1149
sidebar_position: 7
sidebar_label: Tracks-analysator
title: Tracks-analysator
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

**Tracks-analysator** is een webtool die helpt bij het analyseren van herhalende tracksegmenten tussen geselecteerde punten op de kaart. Bijvoorbeeld, u kunt het gebruiken om uw ritten op dezelfde klim of uw dagelijkse woon-werkverkeer te vergelijken. Om deze functie met uw eigen gegevens te gebruiken, hebt u een OsmAnd Pro-account nodig met tracks gesynchroniseerd naar OsmAnd Cloud — anders zijn uw tracks niet beschikbaar in de Web Planner. Het scant uw tracks en vindt alle segmenten die door de gekozen locatie(s) gaan, waardoor u snelheid, hoogte, afstand en tijd kunt vergelijken over meerdere activiteiten.

## Hoe te gebruiken {#how-to-use}

1. [Log in](./web-cloud.md#login) bij uw OsmAnd Pro-account op het Web Map Portal. Uw tracks moeten zijn gesynchroniseerd met [OsmAnd Cloud](./web-cloud.md#cloud-sync).
2. Open *Menu → Tracks-analysator* (het moersleutelpictogram).
3. Kies in het paneel **Tracks selecteren** voor **Alle tracks** of alleen de mappen die u nodig hebt.
4. Klik met de rechtermuisknop op de kaart en selecteer **Punt A**. Om een segment tussen twee punten te analyseren, stelt u ook **Punt B** in.
5. Bekijk de lijst met gevonden segmenten, [sorteer deze en kies welke parameters worden weergegeven](#sorting-and-visible-parameters).

Met één punt zoekt de analysator naar tracksegmenten die door de geselecteerde locatie gaan. Met twee punten zoekt en analyseert het segmenten tussen Punt A en Punt B.

![Tracks-analysator](@site/static/img/web/web_analyzer_select.png) ![Tracks-analysator](@site/static/img/web/web_analyzer_points_new.png)


## Sorteren en zichtbare parameters {#sorting-and-visible-parameters}
Nadat de analysator overeenkomende segmenten heeft gevonden, worden de resultaten weergegeven als een lijst. De lijst kan worden herordend met de optie **Sorteren**, die verandert hoe segmenten worden vermeld. Daarnaast opent de knop **Velden** het paneel Zichtbare parameters, waar u kunt beheren welke analyseparameters voor elk segment worden weergegeven. U kunt alle beschikbare parameters weergeven of alleen die relevante voor uw analyse selecteren.

De beschikbare parameters zijn:

- Max. snelheid, Gem. snelheid en Min. snelheid.
- Max. hoogte, Gem. hoogte en Min. hoogte.
- Bergop en Bergaf.
- Datum.
- Tijdspanne, Starttijd, Eindtijd, Duur en Tijd in beweging.
- Lengte.

![Tracks-analysator](@site/static/img/web/web_analyzer_sort.png) ![Tracks-analysator](@site/static/img/web/web_analyzer_fields.png)

## Gegevensanalyse {#data-analysis}

Elk overeenkomend segment wordt weergegeven in de resultatenlijst aan de linkerkant. Voor elk segment wordt een set berekende parameters weergegeven, afhankelijk van welke zichtbare parameters zijn ingeschakeld.

Elk segment heeft ook een driepuntmenu (⋮) met de volgende acties:
- Track openen — opent de volledige track gerelateerd aan het geselecteerde segment.
- Track verbergen / Track zichtbaar maken — beheert of de track op de kaart wordt weergegeven.
- Uitsluiten — verwijdert het segment uit de huidige analyse-resultaten.

![Tracks-analysator](@site/static/img/web/web_analyzer_menu.png)

### Grafieken {#graphs}

Onder de kaart toont de analysator een grafiek die de geselecteerde segmenten visualiseert. De grafiek vertegenwoordigt gegevens alleen voor de segmenten die zijn gevonden tussen de geselecteerde punten, niet de volledige tracks.

De grafiek ondersteunt schakelen tussen verschillende gegevenstypen:
- Hoogte.
- Helling.
- Snelheid.
Slechts één gegevenstype wordt tegelijk weergegeven, en het wijzigen ervan werkt de grafiek onmiddellijk bij.

Wanneer meerdere segmenten aanwezig zijn, toont de grafiek gegevens voor verschillende segmenten tegelijkertijd. Een selector boven de grafiek stelt u in staat om te kiezen hoeveel segmentgrafieken tegelijk worden weergegeven en om tussen hen te schakelen.

![Tracks-analysator](@site/static/img/web/web_analyzer_altitude.png) ![Tracks-analysator](@site/static/img/web/web_analyzer_tracks.png)

## Gerelateerde artikelen {#related-articles}

- [Tracks](../web/web-tracks.md)
- [Tracks beheren](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)