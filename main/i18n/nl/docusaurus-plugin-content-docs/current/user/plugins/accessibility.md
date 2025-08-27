---
source-hash: f88b26c81cd85ceae10dd091bfd8f3587782fc1e066bd79fe00de8a7ce769b72
sidebar_position: 1
title: Toegankelijkheid
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


:::caution Opmerking
De toegankelijkheidsplugin is alleen beschikbaar op de **Android-versie** van OsmAnd. De [iOS-versie](#how-to-use-ios) maakt gebruik van de standaard toegankelijkheidsinstellingen van het systeem.
:::

## Overzicht {#overview}

Toegankelijkheid verbetert de bruikbaarheid voor blinde en slechtziende gebruikers door integratie met [Android Toegankelijkheid](https://www.android.com/accessibility/) tools. De plugin biedt **tekst-naar-spraak, gebarenbediening, automatische aankondigingen** en **haptische feedback** om navigatie toegankelijker te maken. Op iOS maakt OsmAnd gebruik van de ingebouwde toegankelijkheidsfuncties van Apple, zoals VoiceOver.


### Hoe te gebruiken (Android) {#how-to-use-android}

![Toegankelijkheid](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Schakel de toegankelijkheidsplugin in:***

1. **Activeer de plugin**: *Menu → Plugins → Toegankelijkheid → Inschakelen*.

2. **Schakel de toegankelijkheidsmodus in**:
   - Navigeer naar *Systeeminstellingen → Toegankelijkheid* op uw Android-apparaat.
   - Schakel TalkBack of een andere schermlezer in.

3. **Pas de plugininstellingen aan**:
   - Open [Toegankelijkheidsinstellingen](#plugin-settings) binnen de OsmAnd-app.
   - Configureer functies zoals spraaksnelheid, automatische aankondiging en haptische feedback.

<br/>

***Functies en functionaliteit:***

- **Gebarenbediening**:
   - Ondersteunt alle standaard [OsmAnd-gebaren](../map/interact-with-map#gebaren).
   - Past gebaren aan om aan te sluiten bij de **TalkBack**-instructies van Android.

- **TalkBack-integratie**:
   - De TalkBack-schermlezer biedt audiogids voor navigatie en menu-interacties.
   - Meer informatie over TalkBack-gebaren vindt u [hier](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Achtergrondbewerkingen**. Audio- en haptische feedback blijven werken, zelfs wanneer het scherm is uitgeschakeld of vergrendeld.

- **Kompas-knopacties**:

| Gebaar | Actie | TalkBack-equivalent |
|-----|-----|-----|
| **Enkele tik** | Draait kaart naar **Noord** | **Dubbele tik** |
| **Lange tik** | Opent de lijst met [kaartoriëntaties](../map/interact-with-map.md#map-orientation-modes) | **Dubbele tik en vasthouden** |
| **Dubbele tik** | *Niet beschikbaar in toegankelijkheidsmodus* | *Niet ondersteund* |


### Hoe te gebruiken (iOS) {#how-to-use-ios}

De iOS-versie van OsmAnd gebruikt de **ingebouwde toegankelijkheidstools** van het systeem.

1. **Schakel VoiceOver in**:
   - Ga naar *Instellingen → Toegankelijkheid → VoiceOver*.
   - Configureer **VoiceOver-gebaren** voor gebruik met OsmAnd.

2. **Ondersteunde functies**:
   - **Schermlezerondersteuning** voor kaartinteracties.
   - **Aanpasbare gebaren** via iOS-instellingen.
   - Alle standaard [OsmAnd-gebaren](../map/interact-with-map#gebaren) zijn beschikbaar.

3. **Meer informatie**:
   - Lees meer over iOS Vision Toegankelijkheidsfuncties [hier](https://www.apple.com/accessibility/vision/).
   - Ontdek VoiceOver-gebaren voor iPhone [hier](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Vereiste instellingsparameters {#required-setup-parameters}

Om de toegankelijkheidsfuncties van het apparaat in OsmAnd te activeren, moet u de volgende instellingen maken:

1. **Schakel de** [Toegankelijkheidsplugin](../plugins/index.md#enable--disable) in: *Menu → Plugins → Toegankelijkheid → Inschakelen*.
2. **Schakel de toegankelijkheidsmodus** op uw apparaat in.
3. Configureer de instellingen van de toegankelijkheidsplugin [instellingen](#plugin-settings).


## Plugininstellingen {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Toegankelijkheid](@site/static/img/plugins/Accessibility/access_.png)

De toegankelijkheidsplugin biedt verschillende instellingen om navigatie en interactie te personaliseren voor gebruikers met een beperking. Deze instellingen worden per [profiel](../personal/profiles.md) in OsmAnd toegepast.

| Instelling | Beschrijving |
|---------------------------|-------------|
| **Toegankelijkheidsmodus** | Schakelt *ingebouwde OsmAnd-functies* in of gebruikt **systeeminstellingen**. |
| **Spraaksnelheid** | Regelt de *tekst-naar-spraak-snelheid*, variërend van **50% tot 200%**. |
| [Slimme automatische aankondiging](#smart-autoannounce-and-clockwise-directions) | Biedt *stembegeleiding* bij afwijking van de route. |
| **Periode automatische aankondiging** | Stelt de minimale tijd tussen aankondigingen in, van **5 seconden tot 5 minuten**. |
| **Richtingstijl** | Kies tussen *Zijwaarts (8 richtingen)* of [Met de klok mee](#smart-autoannounce-and-clockwise-directions) (12 richtingen)*. |
| **Audio-aanwijzingen** | Speelt *audio-aanwijzingen* af die de richting aangeven. |
| **Haptische aanwijzingen** | Geeft *trilfeedback* voor bochten en afwijkingen. |

<!--
- **Toegankelijkheidsmodus**. Schakel speciale tools in die mensen met een beperking helpen om met de OsmAnd-app te communiceren. Er zijn drie modi: *Aan* - schakelt de ingebouwde OsmAnd-functies in, *Uit* - schakelt alle pluginfuncties uit, en *Volgens de Android-systeeminstellingen* - schakelt Android-systeeminstellingen in.

- **Spraaksnelheid**. Pas de spraaksnelheid van de tekst-naar-spraak aan, variërend van 50% tot 200%.

- **Slimme automatische aankondiging**. Indien ingeschakeld, ontvangt u stemmeldingen wanneer u afwijkt van de ingestelde route.

- **Periode automatische aankondiging**. Dit is een automatische aankondiging van de richting en afstand tot uw bestemming. U kunt een minimale tijd tussen aankondigingen selecteren, variërend van 5 seconden tot 5 minuten.

- **Richtingstijl**. Kies hoe de OsmAnd-app u op de hoogte stelt van richtingen. *Zijwaarts* - geeft de richting naar de windstreken aan (8 richtingen), *Met de klok mee* - geeft richtingen aan die georiënteerd zijn op de wijzerplaat (12 richtingen).

- **Audio-aanwijzingen**. Biedt feedback tijdens het navigeren door de richting naar het doel met geluid aan te geven.

- **Haptische aanwijzingen**. Deze instelling geeft haptische feedback tijdens het navigeren. De trilling geeft de richting naar het doel en afwijkingen van het pad aan.
-->

<br/>

***Tips voor geoptimaliseerde toegankelijkheid:***

- **Schermlezer** - Gebruik TalkBack (*Android*) of VoiceOver (*iOS*) voor verbeterde kaartinteractie.
- **Audionavigatie** - Schakel automatische aankondiging in om stemaanwijzingen te ontvangen terwijl het scherm uit is.
- **Haptische feedback** - Ideaal voor omgevingen met weinig zicht of wanneer audio-aanwijzingen onpraktisch zijn.


#### Slimme automatische aankondiging en richtingen met de klok mee {#smart-autoannounce-and-clockwise-directions}

De functie **Slimme automatische aankondiging** geeft *audio-meldingen* wanneer u afwijkt van de geplande route, terwijl de **Richtingstijl met de klok mee** *navigatie-aanwijzingen op basis van de wijzerplaat* biedt. Deze functies zijn ontworpen om visueel gehandicapte gebruikers te ondersteunen die afhankelijk zijn van *stembegeleiding*.

- Als **TalkBack niet is ingeschakeld**, zullen zowel *Slimme automatische aankondiging* als *Richting met de klok mee* alleen *tekstmeldingen* op het scherm weergeven.

- **Stemmeldingen** worden alleen geactiveerd wanneer *TalkBack* is ingeschakeld in de **systeeminstellingen van het apparaat**.

- Stel de **Periode automatische aankondiging** in (bijv. *10 seconden*) om de frequentie van aankondigingen te regelen.


## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (kaartstijlen)](../../user/map/vector-maps.md)

> *Laatst bijgewerkt: februari 2025*