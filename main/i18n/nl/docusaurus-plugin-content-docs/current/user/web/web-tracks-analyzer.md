---
source-hash: fe9500be3570d2dbf08995ee5614eb89cd647a44f0360730e48015dced34c738
sidebar_position: 7
sidebar_label: Tracks Analyzer
title: Tracks Analyzer
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

**Tracks Analyzer** is een webtool die helpt bij het analyseren van herhalende tracksegmenten tussen geselecteerde punten op de kaart. Het scant uw tracks en vindt alle segmenten die door de gekozen locatie(s) gaan, waardoor u snelheid, hoogte, afstand en tijd kunt vergelijken over meerdere activiteiten.

## Hoe te gebruiken {#how-to-use}

Nadat u de Tracks Analyzer hebt geopend (weergegeven als een moersleutel), opent de tool met een kaartweergave en een lege status. Van hieruit kunt u kiezen welke tracks worden opgenomen in de analyse met het paneel **Tracks selecteren**. De analyzer maakt het mogelijk om met alle beschikbare tracks te werken of de analyse te beperken tot specifieke mappen.

Om de analyse te starten, stelt u één of twee punten direct in op de kaart. Klik met de rechtermuisknop op de gewenste locatie en selecteer **Punt A / Punt B** uit het contextmenu. De analyzer zoekt vervolgens naar tracksegmenten die door het geselecteerde punt gaan of tussen de twee punten.

![Tracks Analyzer](@site/static/img/web/web_analyzer_select.png) ![Tracks Analyzer](@site/static/img/web/web_analyzer_points.png)


## Sorteren en zichtbare parameters {#sorting-and-visible-parameters}
Nadat de analyzer overeenkomende segmenten heeft gevonden, worden de resultaten weergegeven als een lijst. De lijst kan worden herordend met de optie **Sorteren**, die verandert hoe segmenten worden vermeld. Daarnaast opent de knop **Velden** het paneel Zichtbare parameters, waar u kunt beheren welke analyseparameters voor elk segment worden weergegeven. U kunt alle beschikbare parameters weergeven of alleen die relevante voor uw analyse selecteren.

De beschikbare parameters zijn gegroepeerd op type:

**Snelheid**
- Max. snelheid
- Gem. snelheid
- Min. snelheid

**Hoogte**
- Max. hoogte
- Gem. hoogte
- Min. hoogte

**Bergop / Bergaf**

**Datum en tijd**
- Datum
- Starttijd
- Eindtijd
- Tijdspanne
- Duur
- Tijd in beweging

**Lengte**

![Tracks Analyzer](@site/static/img/web/web_analyzer_sort.png) ![Tracks Analyzer](@site/static/img/web/web_analyzer_fields.png)

## Gegevensanalyse {#data-analysis}

Elk overeenkomend segment wordt weergegeven in de resultatenlijst aan de linkerkant. Voor elk segment wordt een set berekende parameters weergegeven, afhankelijk van welke zichtbare parameters zijn ingeschakeld.

Elk segment heeft ook een driepuntmenu (⋮) met de volgende acties:
- Track openen — opent de volledige track gerelateerd aan het geselecteerde segment.
- Track verbergen / Track zichtbaar maken — beheert of de track op de kaart wordt weergegeven.
- Uitsluiten — verwijdert het segment uit de huidige analyse-resultaten.

![Tracks Analyzer](@site/static/img/web/web_analyzer_menu.png)

### Grafieken {#graphs}

Onder de kaart toont de analyzer een grafiek die de geselecteerde segmenten visualiseert. De grafiek vertegenwoordigt gegevens alleen voor de segmenten die zijn gevonden tussen de geselecteerde punten, niet de volledige tracks.

De grafiek ondersteunt schakelen tussen verschillende gegevenstypen:
- Hoogte.
- Helling.
- Snelheid.
Slechts één gegevenstype wordt tegelijk weergegeven, en het wijzigen ervan werkt de grafiek onmiddellijk bij.

Wanneer meerdere segmenten aanwezig zijn, toont de grafiek gegevens voor verschillende segmenten tegelijkertijd. Een selector boven de grafiek stelt u in staat om te kiezen hoeveel segmentgrafieken tegelijk worden weergegeven en om tussen hen te schakelen.

![Tracks Analyzer](@site/static/img/web/web_analyzer_altitude.png) ![Tracks Analyzer](@site/static/img/web/web_analyzer_tracks.png)

## Gerelateerde artikelen {#related-articles}

- [Tracks](../web/web-tracks.md)
- [Tracks beheren](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)