---
source-hash: e993c17565a6856353f05b6dabe09c469fb505cb96a56e920bca6326fc3eb2e1
sidebar_position: 2
title:  AIS Vaartuig Volgsysteem
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

De **AIS Vaartuig Volgsysteem** plugin toont [Automatisch Identificatie Systeem (AIS)](https://nl.wikipedia.org/wiki/Automatic_identification_system) posities en gedetailleerde informatie over nabijgelegen vaartuigen. De AIS-gegevens worden ontvangen via een netwerkverbinding van een externe AIS-ontvanger.

:::caution DISCLAIMER
**Deze plugin is een hobbyproject en is niet ontworpen voor betrouwbaarheid of nauwkeurigheid. VERTROUW NIET op deze software voor navigatie of levensveiligheid.**
:::


## Vereiste Instelparameters {#required-setup-parameters}

De mogelijkheid om online kaarten te gebruiken is automatisch ingeschakeld in de iOS-versie van OsmAnd. Om online kaarten in Android weer te geven, moet u de volgende instellingen maken:

1. [Schakel](../plugins/index.md#enable--disable) de **AIS vaartuig volgsysteem** plugin in via *Hoofdmenu → Plugins → AIS vaartuig volgsysteem*.
2. Configureer de [AIS-instellingen](../map/raster-maps.md#select-raster-maps)
3. Configureer een **AIS-serververbinding** of sluit een **externe AIS-ontvanger** aan.
4. Controleer of vaartuigen worden weergegeven op de OsmAnd-kaart.

## Vaartuigen op de Kaart {#vessels-on-the-map}

AIS werkt op *VHF-frequenties* (161.975 MHz en 162.025 MHz) en heeft een beperkt signaalbereik vanwege de rechtlijnige voortplanting.

***Typisch AIS-ontvangstbereik:***

- 15–20 zeemijlen (28–37 km)
- Afhankelijk van antennehoogte, omgevingscondities en obstakels

***AIS-weergave op de kaart:***

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS vaartuig volgsysteem](@site/static/img/plugins/ais/ais.png)

</TabItem>

</Tabs>

Indien correct ingesteld, verschijnen de posities van vaartuigen op de kaart. Belangrijkste kenmerken:

- Vaartuigen bewegen op basis van real-time snelheid en koers.
- Nieuwe schepen komen en verlaten dynamisch het zichtbare gebied.
- Tikken op een vaartuig opent gedetailleerde informatie.


### AIS Vaartuiginformatie {#ais-vessel-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![AIS vaartuig volgsysteem](@site/static/img/plugins/ais/ais_menu.png)  
![AIS vaartuig volgsysteem](@site/static/img/plugins/ais/ais_menu_2.png)

</TabItem>

</Tabs>

AIS-vaartuigen zenden drie soorten gegevens uit:

1. Statische Informatie (onveranderlijke gegevens).  
    *Verzonden elke **6 minuten** of op verzoek.*

    - **Scheepsnaam** (*indien ingesteld*)  
    - **MMSI (Maritime Mobile Service Identity)** (*Unieke 9-cijferige scheepsidentificatie*)
    - **IMO-nummer** (*indien beschikbaar*)  
    - **Roepnaam**  
    - **Scheepstype** (*bijv. Vracht, Passagier, Vissersvaartuig*)  
    - **Scheepsafmetingen** (*Lengte en Breedte*)  
    - **Positie AIS-antenne** (*Relatief ten opzichte van de scheepsromp*)  

2. Dynamische Informatie (real-time gegevens).  
    *Verzonden met verschillende intervallen, afhankelijk van snelheid en manoeuvreren.*

    - **Scheepscoördinaten (Latitude & Longitude)**  
    - **Koers over de Grond (COG)**  
    - **Snelheid over de Grond (SOG)**  
    - **Ware koers** (*Richting waarin de boeg wijst*)
    - **Scheepsstatus** (*Varend, Geankerd, Manoeuvrerend, etc.*)  
    - **Draaisnelheid (ROT)** (*Snelheid van koersverandering*)  
    - **Tijd laatste update**  

3. Reisinformatie (handmatig ingesteld door de bemanning).  
    *Verzonden elke **6 minuten**, handmatig ingesteld door de bemanning*

    - **Bestemmingshaven**
    - **Verwachte Aankomsttijd (ETA)**  
    - **Diepgang** (*Diepte van het schip onder het wateroppervlak*)  
    - **Ladingtype** (*indien verzonden*)
    - **Aantal personen aan boord** (*optioneel*)  

### AIS Symbolen en Legenda {#ais-symbols-and-legends}

[Richtlijnen voor de Presentatie van AIS-symbolen](https://www.e-navigation.nl/sites/default/files/sn_circ243-rev.2_-_guidelines_for_the_presentation_of_navigation-related_symbols_terms_and_abbreviations.pdf)

| Symbolen             | Beschrijving   |
|---------------------|---------------|
| | |
| **Symbolen voor Vaartuigtypes** |    |
| *Groene driehoek*    | Vrachtschip    |
| *Blauwe driehoek*     | Passagiersschip |
| *Zwarte driehoek*    | Vissersvaartuig |
| *Gele driehoek*   | Sleepboot       |
| *Rode driehoek*      | Tanker        |
| *Witte driehoek*    | Militair vaartuig |
| *Oranje driehoek*   | Speciaal vaartuig (bijv. loodsboot, ijsbreker) |
| *Knipperende Rode driehoek* | Vaartuig in nood |
| | |
| **Symbolen voor Navigatiehulpmiddelen** |    |
| *Groene Boei*              | Stuurboordmarkering (rechterkant van het kanaal) |
| *Rode Boei*                | Bakboordmarkering (linkerkant van het kanaal) |
| *Ankersymbool*           | Ankergebied |
| *Scheepssymbool (SS)*        | Veerboot- of passagiersterminal |
| *Havenkraansymbool*       | Vrachtenhaven |
| *Zwarte cirkel*            | Offshore platform |
| | |
| **Statusindicatoren** |    |
| *Volle driehoek*  | Varend vaartuig |
| *Holle driehoek* | Geankerd of Afgemeerd |
| *Draaiende pijl*  | Voert een manoeuvre uit |
| *Rood Knipperend icoon* | Noodalarm |
| *Oranje Uitroepteken* | AIS-veiligheidsbericht |
| | |
| **Route- en Snelheidsindicatoren** |    |
| *Dunne Blauwe lijn*  | Geplande route |
| *Stippellijn*     | Gevaren route |
| *Klokicoon*      | Verwachte aankomsttijd (ETA) |
| *Golficoon*       | Snelheid door het water |

## Plugin-instellingen {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ais_tracker_name,shared_string_settings"/>*

![AIS-instellingen](@site/static/img/plugins/ais/ais_settings_2.png)  

</TabItem>

</Tabs>

De *AIS vaartuig volgsysteem* plugin biedt verschillende instellingen om de navigatie en interactie te personaliseren voor gebruikers met een handicap. Deze instellingen worden toegepast voor alle [profielen](../personal/profiles.md) in OsmAnd.

| Instelling |  Beschrijving  | Voorbeeld  |
|---------|---------------|----------|
| | | |
| **IP-adres instellingen** | | |
| Protocol   | Kies protocol voor het ontvangen van AIS-gegevens | `UDP/TCP` |
| IP-adres | Definieer IP van AIS-gegevensbron (indien TCP wordt gebruikt) | `192.168.200.16` |
| TCP-poort   | Definieer TCP-poortnummer voor AIS-gegevens | `4001` |
| UDP-poort   | Definieer UDP-poort voor OsmAnd AIS-ontvangst  | `10110` |
| | | |
| **Time-out voor AIS-signaalontvangst** | |  |
| Time-out voor verloren AIS-objecten     | Schepen verdwijnen als er gedurende een ingestelde tijd geen signaal wordt ontvangen | `3 - 20 min` |
| Time-out voor zichtbaarheid van schepen      | Scheepsiconen veranderen van status wanneer er geen signaal wordt ontvangen | `2 - 15 min / Uitgeschakeld` |
| | | |
| **Waarschuwingen voor Kortste Naderingspunt (CPA)** | | |
| CPA-waarschuwingstijd | Vaartuig wordt rood gemarkeerd als de tijd tot CPA onder deze limiet komt | `1 - 60 min / Uitgeschakeld` |
| CPA-waarschuwingsafstand | Vaartuig wordt rood gemarkeerd als de afstand tot CPA onder deze limiet komt | `0.02 - 2 zeemijlen` |


### AIS Simulatiemodus {#ais-simulation-mode}

> *U kunt AIS-vaartuigposities simuleren met de [OsmAnd Ontwikkelingsplugin](../plugins/development.md).*

1. **Download AIS-gegevens tekstbestanden**:

    - [AIS Test 1](https://github.com/user-attachments/files/18689404/ais_test_1.txt)
    - [AIS Test 2](https://github.com/user-attachments/files/18689405/ais_test_2.txt)
    - [Single 3](https://github.com/user-attachments/files/18689403/333.txt)

2. **Laad AIS-gegevens in OsmAnd**  
Open *<Translate android="true" ids="shared_string_menu,plugins_menu_group,development,shared_string_settings,ais_load_data"/>* en selecteer een van de gedownloade bestanden.

3. **Bekijk AIS-vaartuigen op de kaart**  
Vaartuigiconen verschijnen op basis van de gesimuleerde gegevens. Tik op het vaartuigicoon om gedetailleerde informatie te bekijken.


## Gerelateerde Artikelen {#related-articles}

- [Interactie met de Kaart](../../user/map/interact-with-map.md)
- [Algemene Instellingen](../../user/personal/global-settings.md)
- [Vectorkaarten (Kaartstijlen)](../../user/map/vector-maps.md)
- [Nautische Plugin](../../user/plugins/nautical-charts.md)