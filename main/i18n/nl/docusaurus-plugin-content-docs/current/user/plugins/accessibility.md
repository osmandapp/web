---
source-hash: 178483f40e3d28fd59c81c2964fa46455a3df586182e7a09aef9e32023d7bd72
sidebar_position: 1
title:  Toegankelijkheid
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
De Toegankelijkheidsplugin is alleen beschikbaar op de **Android-versie** van OsmAnd. De [iOS-versie](#how-to-use-ios) maakt gebruik van de standaard toegankelijkheidsinstellingen van het systeem.
:::

## Overzicht {#overview}

Toegankelijkheid verbetert de bruikbaarheid voor blinde en visueel beperkte gebruikers door integratie met [Android Toegankelijkheid](https://www.android.com/accessibility/) tools. De plugin biedt **tekst-naar-spraak, gebarenbediening, automatische aankondigingen** en **haptische feedback** om navigatie toegankelijker te maken. Op iOS maakt OsmAnd gebruik van de ingebouwde toegankelijkheidsfuncties van Apple, zoals VoiceOver.


### Hoe te gebruiken (Android) {#how-to-use-android}

![Accessibility](@site/static/img/plugins/Accessibility/access_turned_off.png)

***De Toegankelijkheidsplugin inschakelen:***  

1. **Activeer de plugin**: *Menu → Plugins → Toegankelijkheid → Inschakelen*.

2. **Schakel de toegankelijkheidsmodus in**:  
   - Navigeer naar *Systeeminstellingen → Toegankelijkheid* op uw Android-apparaat.
   - Schakel TalkBack of een andere schermlezer in.

3. **Pas de plugin-instellingen aan**:  
   - Open de [Toegankelijkheidsinstellingen](#plugin-settings) in de OsmAnd-app.
   - Configureer functies zoals spraaksnelheid, automatische aankondigingen en haptische feedback.

<br/>

***Kenmerken en functionaliteit:***

- **Gebarenbediening**:
   - Ondersteunt alle standaard [OsmAnd-gebaren](../map/interact-with-map.md#gestures).
   - Past gebaren aan om overeen te komen met de **TalkBack**-instructies van Android.

- **TalkBack-integratie**:
   - De TalkBack-schermlezer biedt audiogeleiding voor navigatie en menu-interacties.
   - Leer meer over TalkBack-gebaren [hier](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Achtergrondbewerkingen**. Audio- en haptische feedback blijven doorgaan, zelfs als het scherm is uitgeschakeld of vergrendeld.

- **Acties van de kompasknop**:

| Gebaar | Actie | TalkBack-equivalent |
|-----|-----|-----|
| **Eén keer tikken** | Roteert de kaart naar het **Noorden** | **Dubbel tikken** |
| **Lang tikken** | Opent de lijst met [kaartoriëntaties](../map/interact-with-map.md#map-orientation-modes) | **Dubbel tikken en vasthouden** |
| **Dubbel tikken** | *Niet beschikbaar in Toegankelijkheidsmodus* | *Niet ondersteund* |


### Hoe te gebruiken (iOS) {#how-to-use-ios}

De iOS-versie van OsmAnd maakt gebruik van de **ingebouwde toegankelijkheidstools** van het systeem.

1. **Schakel VoiceOver in**:
   - Ga naar *Instellingen → Toegankelijkheid → VoiceOver*.
   - Configureer **VoiceOver-gebaren** voor gebruik met OsmAnd.

2. **Ondersteunde functies**:
   - **Ondersteuning voor schermlezers** voor kaartinteracties.
   - **Aanpasbare gebaren** via iOS-instellingen.
   - Alle standaard [OsmAnd-gebaren](../map/interact-with-map.md#gestures) zijn beschikbaar.

3. **Meer informatie**:
   - Lees [hier](https://www.apple.com/accessibility/vision/) over de toegankelijkheidsfuncties voor het gezichtsvermogen van iOS.
   - Verken VoiceOver-gebaren voor de iPhone [hier](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Vereiste instellingsparameters {#required-setup-parameters}

Om de toegankelijkheidsfuncties van het apparaat in OsmAnd te activeren, moet u de volgende instellingen maken:

1. **Schakel de** [Toegankelijkheidsplugin](../plugins/index.md#enable--disable) in: *Menu → Plugins → Toegankelijkheid → Inschakelen*.  
2. **Schakel de toegankelijkheidsmodus** op uw apparaat in.
3. Configureer de [instellingen](#plugin-settings) van de Toegankelijkheidsplugin.


## Plugin-instellingen {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Accessibility](@site/static/img/plugins/Accessibility/access_.png)  

De Toegankelijkheidsplugin biedt verschillende instellingen om navigatie en interactie te personaliseren voor gebruikers met een beperking. Deze instellingen worden toegepast per [profiel](../personal/profiles.md) in OsmAnd.

| Instelling                   | Beschrijving |  
|---------------------------|-------------|  
| **Toegankelijkheidsmodus**    | Schakelt *ingebouwde OsmAnd-functies* in of gebruikt **systeeminstellingen**. |  
| **Spraaksnelheid**           | Regelt de *tekst-naar-spraak-snelheid*, variërend van **50% tot 200%**. |  
| [Slimme automatische aankondiging](#smart-autoannounce)    | Biedt *spraakbegeleiding* bij afwijking van de route. |  
| **Periode voor automatische aankondiging**   | Stelt de minimale tijd tussen aankondigingen in, van **5 seconden tot 5 minuten**. |  
| [Richtingsstijl](#direction-style)       | Kies tussen *Zijdelings (8 richtingen)* of *Kloksgewijs (12 richtingen)*. |  
| **Audio-aanwijzingen**      | Speelt *audiobegeleiding* af die de richting aangeeft. |  
| **Haptische aanwijzingen**     | Biedt *trilfeedback* voor bochten en afwijkingen.|  

<!--
- **Accessibility Mode**. Enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings* - turns on Android system settings.

- **Speech rate**. Adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.

- **Smart autoannounce**. If enabled, you will receive voice announcements when you deviate from the set track.

- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.

- **Direction style**. Choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).

- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.

- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.
-->

<br/>

***Tips voor geoptimaliseerde toegankelijkheid:***

- **Schermlezer** - Gebruik TalkBack (*Android*) of VoiceOver (*iOS*) voor verbeterde kaartinteractie.
- **Audionavigatie** - Schakel automatische aankondigingen in om spraakaanwijzingen te ontvangen terwijl het scherm uit is.
- **Haptische feedback** - Ideaal voor omgevingen met weinig zicht of wanneer audiobegeleiding onpraktisch is.


### Slimme automatische aankondiging {#smart-autoannounce}

De functie **Slimme automatische aankondiging** biedt *audiomeldingen* wanneer u afwijkt van de geplande route. Deze functie is ontworpen om visueel beperkte gebruikers te ondersteunen die afhankelijk zijn van *spraakbegeleiding*.  

- Als **TalkBack niet is ingeschakeld**, zal *Slimme automatische aankondiging* alleen *tekstmeldingen* op het scherm weergeven.  

- **Spraakmeldingen** worden alleen geactiveerd wanneer *TalkBack* is ingeschakeld in de **systeeminstellingen van het apparaat**.  

- Stel de **Periode voor automatische aankondiging** in (bijv. *10 seconden*) om de frequentie van de aankondigingen te regelen.

- Een lang tikken op **Mijn locatie** opent een menu met de opties ***Toon uw positie*** en ***Toon details***. Het selecteren van Toon details toont aanvullende route-informatie en biedt de knop ***Start/Stop automatische aankondiging***.


### Richtingsstijl {#direction-style}

De instelling **Richtingsstijl** definieert hoe navigatie-instructies worden gepresenteerd:

- Zijdelings (8 richtingen) – gebruikt klassieke links/rechts of kardinale/interkardinale richtingen.
- Kloksgewijs (12 richtingen) – gebruikt begeleiding op basis van de wijzerplaat, zoals “om 3 uur” of “om 10 uur”.

Deze functie is ontworpen om het ruimtelijk bewustzijn te verbeteren, vooral voor visueel beperkte gebruikers die de voorkeur geven aan oriëntatie op basis van de klok.

Om in te schakelen:
*Menu* → *Plugins* → *Toegankelijkheid* → *Instellingen* → *Richtingsstijl* → kies **Zijdelings** of **Kloksgewijs**.

:::info note
Richtingsstijl is een onafhankelijke optie. Het is niet gekoppeld aan Slimme automatische aankondiging en werkt ongeacht of Slimme automatische aankondiging is ingeschakeld.
:::

## Gerelateerde artikelen {#related-articles}

- [Interactie met de kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)