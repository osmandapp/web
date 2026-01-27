---
source-hash: 8fd560586badacfe8252875585749d24294632dc3ef28a49749d309541421b7a
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

## Overzicht {#overview}

De Star Watcher-plugin toont een overlay van de sterrenhemel op de kaart met sterren, sterrenbeelden, Zon, Maan en planeten. De posities en banen van Zon, Maan, planeten en belangrijke sterren worden op de kaart weergegeven.


## Vereiste instelparameters {#required-setup-parameters}
  
De volgende instellingen zijn vereist om de Star Watcher-overlay weer te geven:

1. Schakel de [**Star Watcher**-plugin](../plugins/index.md#enable--disable) in vanuit het gedeelte *Plugins* van het *Hoofdmenu*
2. Gebruik **Menu → Sterrenkaart** om het speciale scherm met sterrenhemel, instellingen en tijdregelaars te openen
3. Selecteer **tijd en datum** met behulp van schuifregelaars of knoppen op het Sterrenkaart-scherm
4. Pas **zichtbaarheid en transparantie** aan in de meninstellingen van "Sterrenkaart".

De plugin werkt met beide kaartweergavemotoren, maar presteert het beste in OpenGL-modus.

## Sterrenkaart-scherm

**Ga naar:** *Ingeschakelde plugin → Menu → Sterrenkaart* 

![Sterrenkaart-scherm](@site/static/img/plugins/starwatcher/view.png)

Het speciale **Sterrenkaart-scherm** toont een interactieve hemelkoepel met sterren, sterrenbeelden, planeten, banen van Zon en Maan. Onderaan bevindt zich een **werkbalk** met tijd/datumschuifregelaars, dagknoppen en snelle schakelaars voor lagen zoals de horizonlijn of labels.


- Het scherm rendert de volledige hemisfeer van de hemel boven uw locatie, uitgelijnd met de kompasrichting
- Tik op hemellichamen voor details zoals magnitude, opkomst/ondergangstijden of banen



## Info over hemellichamen

Tik op een willekeurige **ster, planeet, sterrenbeeld, of Zon/Maan** op het **Sterrenkaart-scherm** of de **kaartoverlay** om gedetailleerde informatie te bekijken.

![Objectinformatie-popup](@site/static/img/plugins/starwatcher/object-info.png)

**Weergegeven gegevens:**
- **Azimut**: Richting vanaf het noorden (0°-360°) waar het object aan de hemel verschijnt
- **Hoogte**: Hoogte boven de horizon (0° bij horizon, 90° bij zenit)
- **Magnitude**: Schaal van helderheid (-26 voor Zon tot +6 voor zwakke sterren; lager = helderder)
- **Opkomst/Ondergangstijden**: Wanneer het object boven/onder de horizon opkomt/ondergaat
- **Afstand** (planeten): Gemiddelde afstand van de aarde in AE/km

**Wikipedia-integratie**: Tik op **"Wikipedia"** in de infopopup om de pagina van het object in uw browser te openen (bijv. Sirius, Orion, Venus). Werkt offline voor gecachte gegevens, online voor volledige artikelen.

**Lang indrukken** op hemellichamen om ze vast te pinnen als kaartmarkeringen met live positiewijzigingen, of **coördinaten delen** voor groepssterrenkijken.

Deze functie helpt bij het identificeren van objecten aan de echte hemel, het plannen van waarnemingen en het leren van astronomische feiten direct vanuit OsmAnd.


## AR Sterrenvinden (Camera-modus)

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


## Star Watcher-instellingen

*Hoofdmenu → Plugins → Sterrenkaart → ⚙️ knop*

Kies zichtbare lagen en objecten

### Sterrenlagen

Alle astronomische gegevens verschijnen als kaartoverlays, zichtbaar op zoomschalen 5-15. Lagen projecteren de hemelsfeer op de platte kaart.

| Laag | Beschrijving |
|-------|-------------|
| Sterren | Helder sterren (tot magnitude 4-6) met labels en sterrenbeeldlijnen |
| Sterrenbeelden | Verbindt sterren in bekende patronen zoals Orion of Grote Beer |
| Planeten | Posities en dagelijkse banen voor Mercurius-Venus-Mars-Jupiter-Saturn (gekleurd iconen) |
| Zon & Maan | Bogen die opkomst/ondergangstijden en illuminatiefase tonen |
| Horizon | Lijn die zichtbare hemel scheidt van de grond, met hoofdrichingen |


## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Globale instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)