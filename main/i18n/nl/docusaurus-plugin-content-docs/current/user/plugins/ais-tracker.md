---
source-hash: eafb2c57934c3fbb3a094db82d063658f9ebd6dc575f16b51dfce4826f7df701
sidebar_position: 2
title: AIS Scheepstracker
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


<InfoIncompleteArticle/>

<InfoAndroidOnly />

## Overzicht {#overview}

De **AIS Scheepstracker** plug-in toont [Automatic Identification System (AIS)](https://en.wikipedia.org/wiki/Automatic_identification_system) posities en gedetailleerde informatie over schepen in de buurt. De AIS-gegevens worden via een netwerkverbinding van een externe AIS-ontvanger ontvangen.

:::caution DISCLAIMER
**Deze plug-in is een hobbyproject en is niet ontworpen voor betrouwbaarheid of nauwkeurigheid. Vertrouw NIET op deze software voor navigatie of levensveiligheid.**
:::


## Vereiste instellingsparameters {#required-setup-parameters}

De mogelijkheid om online kaarten te gebruiken is automatisch ingeschakeld in de iOS-versie van OsmAnd. Om online kaarten in Android weer te geven, moet u de volgende instellingen maken:

1. [Schakel](../plugins/index.md#enable--disable) de **AIS scheepstracker** plug-in in via *Hoofdmenu → Plug-ins → AIS scheepstracker*.
2. Configureer de [AIS-instellingen](../map/raster-maps.md#select-raster-maps)
3. Configureer een **AIS-serververbinding** of sluit een **externe AIS-ontvanger** aan.
4. Controleer of schepen op de OsmAnd-kaart worden weergegeven.

## Schepen op de kaart {#vessels-on-the-map}

AIS werkt op *VHF-frequenties* (161,975 MHz en 162,025 MHz) en heeft een beperkt signaalbereik vanwege de zichtlijnvoortplanting.

***Typisch AIS-ontvangstbereik:***

- 15–20 zeemijl (28–37 km)
- Afhankelijk van antennehoogte, omgevingsomstandigheden en obstakels

***AIS-weergave op de kaart:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS scheepstracker](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Wanneer correct ingesteld, verschijnen scheepsposities op de kaart. Belangrijkste kenmerken:

- Schepen bewegen op basis van real-time snelheid en koers.
- Nieuwe schepen komen dynamisch het zichtbare gebied binnen en verlaten het.
- Tikken op een schip opent gedetailleerde informatie.


### AIS Scheepsinformatie {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS scheepstracker](@site/static/img/plugins/ais/ais_menu.png)
![AIS scheepstracker](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

AIS-schepen zenden drie soorten gegevens uit:

1. Statische informatie (onveranderlijke gegevens).
    *Verzonden elke **6 minuten** of op verzoek.*

    - **Scheepsnaam** (*indien ingesteld*)
    - **MMSI (Maritime Mobile Service Identity)** (*Unieke 9-cijferige scheepsidentificatie*)
    - **IMO-nummer** (*indien beschikbaar*)
    - **Roepnaam**
    - **Scheepstype** (*bijv. vracht, passagier, vissersvaartuig*)
    - **Scheepsafmetingen** (*lengte en breedte*)
    - **AIS-antennepositie** (*relatief ten opzichte van de scheepsromp*)

2. Dynamische informatie (real-time gegevens).
    *Verzonden met verschillende intervallen, afhankelijk van snelheid en manoeuvreren.*

    - **Scheepscoördinaten (breedtegraad & lengtegraad)**
    - **Koers over grond (KOG)**
    - **Snelheid over grond (SOG)**
    - **Koers** (*richting waarin de boeg wijst*)
    - **Scheepsstatus** (*onderweg, geankerd, manoeuvrerend, enz.*)
    - **Draaisnelheid (ROT)** (*snelheid van koerswijziging*)
    - **Laatste update tijd**

3. Reisinformatie (handmatig ingesteld door bemanning).
    *Verzonden elke **6 minuten**, handmatig ingesteld door bemanning*

    - **Bestemmingshaven**
    - **Geschatte aankomsttijd (ETA)**
    - **Diepgang** (*waterdiepte van het schip onder het oppervlak*)
    - **Ladingtype** (*indien verzonden*)
    - **Aantal personen aan boord** (*optioneel*)

### AIS-symbolen en -legenda's {#ais-symbols-and-legends}

[Richtlijnen voor AIS-symboolpresentatie](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Symbolen | Beschrijving |
|---|---|
| | |
| **Scheepstypesymbolen** | |
| *Groene driehoek* | Vrachtschip |
| *Blauwe driehoek* | Passagiersschip |
| *Zwarte driehoek* | Vissersvaartuig |
| *Gele driehoek* | Sleepboot |
| *Rode driehoek* | Tanker |
| *Witte driehoek* | Militair vaartuig |
| *Oranje driehoek* | Speciaal vaartuig (bijv. loods, ijsbreker) |
| *Knipperende rode driehoek* | Schip in nood |
| | |
| **Navigatiehulpsymbolen** | |
| *Groene boei* | Stuurboordmarkering (rechterkant van het kanaal) |
| *Rode boei* | Bakboordmarkering (linkerkant van het kanaal) |
| *Ankersymbool* | Ankerplaats |
| *Scheepssymbool (SS)* | Veerboot- of passagiersterminal |
| *Havenkraansymbool* | Vracht haven |
| *Zwarte cirkel* | Offshore platform |
| | |
| **Statusindicatoren** | |
| *Volle driehoek* | Bewegend vaartuig |
| *Holle driehoek* | Geankerd of afgemeerd |
| *Roterende pijl* | Manoeuvrerend |
| *Rood knipperend pictogram* | Noodalarm |
| *Oranje uitroepteken* | AIS-veiligheidsbericht |
| | |
| **Route- en snelheidsindicatoren** | |
| *Dunne blauwe lijn* | Geplande route |
| *Gestippelde lijn* | Eerdere track |
| *Klokpictogram* | Geschatte aankomsttijd (ETA) |
| *Golfpictogram* | Snelheid over water |

## Plug-in instellingen {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![AIS-instellingen](@site/static/img/plugins/ais/ais_settings_2.png)

</TabItem>

</Tabs>

De *AIS scheepstracker* plug-in biedt verschillende instellingen om navigatie en interactie te personaliseren voor gebruikers met een beperking. Deze instellingen worden toegepast voor alle [profielen](../personal/profiles.md) in OsmAnd.

| Instelling | Beschrijving | Voorbeeld |
|---|---|---|
| | | |
| **IP-adresinstellingen** | | |
| Protocol | Kies protocol voor het ontvangen van AIS-gegevens | `UDP/TCP` |
| IP-adres | Definieer IP van AIS-gegevensbron (indien TCP wordt gebruikt) | `192.168.200.16` |
| TCP-poort | Definieer TCP-poortnummer voor AIS-gegevens | `4001` |
| UDP-poort | Definieer UDP-poort voor OsmAnd AIS-ontvangst | `10110` |
| | | |
| **AIS-signaalontvangsttimeout** | | |
| Timeout voor verloren AIS-objecten | Schepen verdwijnen als er gedurende een ingestelde tijd geen signaal wordt ontvangen | `3 - 20 min` |
| Timeout voor scheepszichtbaarheid | Scheepsiconen veranderen van status wanneer er geen signaal wordt ontvangen | `2 - 15 min / Uitgeschakeld` |
| | | |
| **Dichtstbijzijnde punt van nadering (CPA) waarschuwingen** | | |
| CPA-waarschuwingstijd | Schip wordt rood gemarkeerd als de tijd tot CPA onder deze limiet ligt | `1 - 60 min / Uitgeschakeld` |
| CPA-waarschuwingsafstand | Schip wordt rood gemarkeerd als de afstand tot CPA onder deze limiet ligt | `0,02 - 2 zeemijl` |


### AIS-simulatiemodus {#ais-simulation-mode}

> *U kunt AIS-scheepsposities simuleren met behulp van de [OsmAnd Development plug-in](../plugins/development.md).*

1. **Download AIS-gegevens tekstbestanden**:

    - [AIS Test 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [AIS Test 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Single 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Laad AIS-gegevens in OsmAnd**
Open *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* en selecteer een van de gedownloade bestanden.

3. **Bekijk AIS-schepen op de kaart**
Scheepsiconen verschijnen op basis van de gesimuleerde gegevens. Tik op het scheepsicoon om gedetailleerde informatie te bekijken.


## Gerelateerde artikelen {#related-articles}

- [Interactie met kaart](../../user/map/interact-with-map.md)
- [Algemene instellingen](../../user/personal/global-settings.md)
- [Vector kaarten (kaartstijlen)](../../user/map/vector-maps.md)
- [Nautische plug-in](../../user/plugins/nautical-charts.md)

> *Laatst bijgewerkt: maart 2025*