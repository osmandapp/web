---
source-hash: 58426179267520e49fd40594a65a229ede4b84aecbc82387219ff0e5c619428f
sidebar_position: 14
title:  Star Watcher
unlistead: true
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

<InfoIncompleteArticle/>

<InfoAndroidOnly/>

:::info
**Star Watcher** bevindt zich momenteel in **beta**.
:::

## Overview {#overview}

De Star Watcher-plugin toont een overlay van de sterrenhemel op de kaart met sterren, sterrenbeelden, Zon, Maan en planeten. De posities en banen van Zon, Maan, planeten en belangrijke sterren worden op de kaart weergegeven.


## Required Setup Parameters {#required-setup-parameters}
  
De volgende instellingen zijn vereist om de Star Watcher-overlay weer te geven:

1. Schakel de [**Star Watcher**-plugin](../plugins/index.md#enable--disable) in vanuit het gedeelte *Plugins* van het *Hoofdmenu*
2. Gebruik **Menu → Sterrenkaart** om het speciale scherm met sterrenhemel, instellingen en tijdregelaars te openen.
3. Selecteer **tijd en datum** met behulp van de regelaars op het Sterrenkaart-scherm.
4. Pas aan wat er op de Sterrenkaart wordt weergegeven met behulp van [**Configure View**](#configure-view) — bijvoorbeeld, schakel zichtbare objecten en weergavehulpmiddelen in/uit.
5. Tik op de **Sluiten (X)** knop bovenaan het Sterrenkaart-scherm om de Sterrenkaart te verlaten en terug te keren naar de Aardekaart.

De plugin werkt met beide kaartweergavemotoren maar presteert het beste in OpenGL-modus.

## Star Map Screen {#star-map-screen}

**Ga naar:** *Ingeschakelde plugin → Menu → Sterrenkaart* 

![Star map screen](@site/static/img/plugins/starwatcher/view_new.png)

Het speciale **Sterrenkaart-scherm** toont een interactieve hemelkoepel met sterren, sterrenbeelden, planeten, banen van Zon en Maan. Onderaan het scherm kunt u toegang krijgen tot de volgende regelaars: 
- **Zoeken** — opent een zoekpaneel met een invoerveld waarin u een objectnaam kunt typen. Onder het veld bevindt zich een lijst met voorgestelde objecten in alfabetische volgorde. U kunt de sortering schakelen tussen A–Z en Z–A. 
- **Tijd en datum** — laat u de datum en tijd wijzigen om de hemel op verschillende momenten in het verleden of de toekomst te observeren. Dit is handig voor het plannen van waarnemingen, het volgen van objectbewegingen of het leren hoe de hemel in de loop van de tijd verandert. Als u een aangepaste datum/tijd instelt, toont de chip de volledige datum en tijd, en verschijnt er een resetknop ernaast om terug te keren naar de huidige systeemtijd.
- [**Configure View**](#configure-view).

Het scherm rendert de volledige hemisfeer van de hemel boven uw locatie, uitgelijnd met de kompasrichting. De Sterrenkaart kan handmatig worden geroteerd. Handmatige rotatie van de Sterrenkaart beïnvloedt de oriëntatie van de Aardekaart niet. De Aardekaart volgt altijd de [kaartoriëntatiemodus](../map/interact-with-map.md#map-orientation-modes) die is geselecteerd in uw instellingen. Tik op hemellichamen voor details zoals magnitude, opkomst/ondergangstijden of banen.


## Celestial Object Info {#celestial-object-info}

![Object info popup](@site/static/img/plugins/starwatcher/object-info_new.png)

Tik op een willekeurige **ster, planeet, sterrenbeeld, of Zon/Maan** op het **Sterrenkaart-scherm** of de **kaartoverlay** om gedetailleerde informatie te bekijken. Het geselecteerde object wordt op de Sterrenkaart gemarkeerd met een rode cirkelmarker, en de dagelijkse beweging wordt gevisualiseerd door een uurcirkel (00–23) die aangeeft waar het object zich elk uur lokale tijd bevindt en de bewegingsrichting.

**Weergegeven gegevens:**
- **Azimut**: Richting vanaf het noorden (0°-360°) waar het object aan de hemel verschijnt
- **Hoogte**: Hoogte boven de horizon (0° bij horizon, 90° bij zenit)
- **Magnitude**: Schaal van helderheid (-26 voor Zon tot +6 voor zwakke sterren; lager = helderder)
- **Opkomst/Ondergangstijden**: Wanneer het object boven/onder de horizon opkomt/ondergaat
- **Afstand** (planeten): Gemiddelde afstand van de aarde in AE/km

**Wikipedia-integratie**: Tik op **"Wikipedia"** in de infopopup om de pagina van het object in uw browser te openen (bijv. Sirius, Orion, Venus). Werkt offline voor gecachte gegevens, online voor volledige artikelen.

**Lang indrukken** op hemellichamen om ze vast te pinnen als kaartmarkeringen met live positiewijzigingen, of **coördinaten delen** voor groepssterrenkijken.

Deze functie helpt bij het identificeren van objecten aan de echte hemel, het plannen van waarnemingen en het leren van astronomische feiten direct vanuit OsmAnd.


## AR Star Finding (Camera Mode) {#ar-star-finding}

**Ga naar:** *Ingeschakelde plugin → Menu → Sterrenkaart → Cameraknop* 

De **Star Watcher**-laag werkt met de **camera van uw apparaat** om **Augmented Reality (AR) sterrenkijken** mogelijk te maken. Richt de camera van uw telefoon op de echte nachthemel en zie sterren, planeten, sterrenbeelden, Zon/Maan overlegd in real-time.


**Hoe AR Sterrenvinden werkt:**
- **Live camerabeeld** toont echte hemel met transparante astronomische overlays uitgelijnd op horizon/kompas
- **Beweeg camera** om hemel te scannen — objecten worden gemarkeerd wanneer ze in uw gezichtsveld verschijnen
- **Tik op gemarkeerde objecten** om azimut, hoogte, magnitude, opkomst/ondergangstijden en Wikipedia-koppeling te zien
- **Kompascalibratie** vereist voor nauwkeurige uitlijning (zwaai telefoon in figuur-8 indien nodig)

**Perfect voor:**
- Het identificeren van zwakke sterren/planeten die met het blote oog onzichtbaar zijn
- Het lokaliseren van sterrenbeelden door de telefoon over de hemel te bewegen
- Real-time hemelnavigatie tijdens wandelingen of kamperen


## Configure View {#configure-view}

![Configure View](@site/static/img/plugins/starwatcher/half_state.png) ![Configure View](@site/static/img/plugins/starwatcher/full_state.png)

**Configure View** laat u beheren hoe de Sterrenkaart wordt weergegeven door visuele modi, objecten en weergavehulpmiddelen in- of uit te schakelen.

Om Configure View te openen, tikt u op de Configure View-knop in de rechteronderhoek van het Sterrenkaart-scherm. De knop wordt weergegeven door een laagstijl-icoon (gestapelde vormen), wat wijst op weergave- en laaginstellingen. Configure View opent in een *Half state*, met de belangrijkste weergaveopties. Veeg het paneel omhoog om het uit te breiden naar *Full state* en toegang te krijgen tot alle beschikbare instellingen. Om Configure View te sluiten, veeg het paneel één keer omlaag om terug te keren naar de Half state, veeg nog een keer omlaag om het volledig te sluiten, of tik op de Sluiten (X)-knop in de rechterbovenhoek van het paneel.

### Modes and Actions {#modes-and-actions}

![Configure View](@site/static/img/plugins/starwatcher/view_with_map.png) ![Configure View](@site/static/img/plugins/starwatcher/red_filter.png)

Deze sectie beheert de belangrijkste weergavemodi van de Sterrenkaart.

- **2D / 3D**. Schakelt de Sterrenkaart tussen een platte (2D) weergave en een wereldbolachtige (3D) weergave.
- **Kaart**. Schakelt een extra Aardekaart-weergave in die onder de Sterrenkaart wordt weergegeven, om hemellichamen te relateren aan uw geografische locatie.
- **Rood filter**. Past een rood kleurfilter toe op het gehele scherm om lichtvervuiling te verminderen en nachtzicht te behouden tijdens waarnemingen in donkere hemels.

### Visible Objects {#visible-objects}

![Configure View](@site/static/img/plugins/starwatcher/solar_system.png) ![Configure View](@site/static/img/plugins/starwatcher/constellations.png)

Deze sectie laat u kiezen welke typen hemellichamen worden weergegeven op de Sterrenkaart.

| Object | Beschrijving |
|-------|-------------|
| Zonnestelsel | Toont de Zon, Maan en zichtbare planeten. |
| Sterrenbeelden | Toont sterrenbeeldlijnen en patronen gevormd door sterren. |
| Sterren | Toont individuele sterren die zichtbaar zijn op de Sterrenkaart. |
| Nevels | Toont nevelobjecten waar beschikbaar. |
| Sterrenhopen | Toont sterrenhopen als afzonderlijke hemellichamen. |
| Diepe hemel | Schakelt deep-sky objecten in/uit zoals sterrenstelsels, sterrenstelselclusters en zwarte gaten. |

### Personal Display Options {#personal-display-options}

**Personal display options** beheren extra visuele hulpmiddelen met betrekking tot gebruikersfocus en waarneming.

| Optie | Beschrijving |
|-------|-------------|
| Richting | Toont een richtingsindicator om uw weergave te oriënteren. |
| Dagelijkse baan | Toont de dagelijkse baan van geselecteerde hemellichamen over de hemel. |
| Favorieten | Markeert of toont objecten die als favorieten zijn gemarkeerd. |

### Rendering Aids {#rendering-aids}

**Rendering aids** voegen referentielijnen en roosters toe om de Sterrenkaart te oriënteren.

| Hulpmiddel | Beschrijving |
|-------|-------------|
| Azimutraal rooster | Voegt een azimutgebaseerd rooster toe voor horizontale hemeloriëntatie. |
| Meridiaanlijn | Toont de meridiaanlijn die de hemel van noord naar zuid doorkruist. |
| Equatoriaal rooster | Toont het hemelse equatoriaal coördinatenrooster. |
| Eclipticalijn | Toont de eclipticalijn die de schijnbare baan van de Zon voorstelt. |
| Melkweg equator | Toont het equatoriaal vlak van de Melkweg. |


<!-- 
## Star Watcher Settings

*Main Menu → Plugins → Star map → ⚙️ button*

Choose visible layers and objects

### Star Layers

All astronomical data appears as map overlays, visible at zoom scales 5-15. Layers project the celestial sphere onto the flat map.

| Layer | Description |
|-------|-------------|
| Stars | Bright stars (up to magnitude 4-6) with labels and constellation lines |
| Constellations | Connects stars into familiar patterns like Orion or Big Dipper |
| Planets | Positions and daily paths for Mercury-Venus-Mars-Jupiter-Saturn (colored icons) |
| Sun & Moon | Arcs showing rise/set times and illumination phase |
| Horizon | Line separating visible sky from ground, with cardinal directions |

-->


## Related Articles {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Globale instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten](../../user/map/vector-maps.md)