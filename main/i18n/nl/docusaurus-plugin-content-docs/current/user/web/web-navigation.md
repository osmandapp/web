---
source-hash: b7357e6a51f940ace21ac3c4ebf732361180dc9c7f5720e449fa9f0856db537a
sidebar_position: 8
sidebar_label:  Navigation
title: Navigation on the Web
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

Gebruik **Navigation on the Web** om een route op de kaart te bouwen en een voorbeeld van de bocht-na-bocht begeleiding te bekijken. Het berekent een route voor de geselecteerde reismodus, toont de verwachte afstand en tijd, en laat je hoogteveranderingen en aankomende bochten controleren. Je kunt de route verfijnen in de Navigatie-instellingen (bijvoorbeeld door bepaalde wegtypen toe te staan of te vermijden of voertuigparameters te gebruiken) en meerdere routepunten gebruiken wanneer nodig.


## Een Route Starten {#start-a-route}

In de lege toestand vraagt Navigatie je om routepunten toe te voegen: *Klik op de kaart om Start- en Bestemmingspunten in te stellen*.

Routepunten kunnen worden opgegeven vanuit het Routepaneel. Wanneer je **Startpunt instellen** of **Bestemming instellen** selecteert, toont het veld suggesties zoals *Huidige locatie* en eerder gebruikte punten uit de geschiedenis. Je kunt opgeslagen suggesties verwijderen met *Geschiedenis wissen*.

Navigatie volgt een eenvoudige stroom: het eerste punt wordt de Start, en het volgende punt wordt de Bestemming. Zodra beide punten zijn ingesteld, wordt de route berekend en weergegeven op de kaart.

![Web Navigatie](@site/static/img/web/navigation_start.png)

### Routepunten Beheren {#manage-route-points}

Je kunt een route uitbreiden voorbij Start → Bestemming door tussenliggende punten toe te voegen. Gebruik de plus (+) knop naast de lijst met punten om een tussenliggend punt toe te voegen (een nieuw punt wordt ingevoegd boven de Bestemming). Tussenliggende punten kunnen worden verwijderd met de min (–) knop.

Start en Bestemming wisselen — wisselt de Start en Bestemming terwijl tussenliggende punten ongewijzigd blijven. De actie is gemarkeerd met een pictogram dat twee pijlen in tegenovergestelde richtingen toont.

![Web Navigatie](@site/static/img/web/navigation_points.png)


## Routingprofiel {#routing-profile}

Bovenaan het Routepaneel kun je een routingprofiel voor je route kiezen. Een set veelgebruikte profielen wordt weergegeven als vier pictogrammen. Om meer opties te openen, open je het drie-puntmenu naast de profielpictogrammen. Het breidt de volledige lijst met beschikbare profielen uit.

Wanneer je het profiel wisselt, werkt Navigatie de route bij om aan te sluiten bij de geselecteerde reismodus.

![Web Navigatie](@site/static/img/web/navigation_profile.png)


## Navigatie-instellingen {#navigation-settings}

Om aan te passen hoe routes worden berekend, open je Instellingen met het tandwielpictogram in het Routepaneel. Instellingen zijn gegroepeerd in secties die je kunt uitklappen/invouwen. De set secties en opties hangt af van het geselecteerde routingprofiel, dus je ziet verschillende parameters voor verschillende reismodussen.

Typische secties omvatten:

- **Algemeen** — profielspecifieke opties (bijvoorbeeld, in het auto-profiel kun je schakelaars zien zoals *Brandstofefficiënte route* en *Goederenbezorging*).
- **Toestaan** — opties die specifieke weg- of padtypen toestaan bij het routeren.
- **Vermijden** — opties die bepaalde wegtypen of situaties uitsluiten van de route (bijvoorbeeld, tolwegen, veerboten, autosnelwegen, tunnels, enz.).
- **[Voertuigparameters](../navigation/guidance/vehicle-parameters.md)** — beschikbaar voor voertuiggebaseerde profielen. Laat je voertuigbeperkingen specificeren (zoals afmetingen/gewicht), wat routing op beperkte wegen kan beïnvloeden.

![Web Navigatie](@site/static/img/web/navigation_settings.png) ![Web Navigatie](@site/static/img/web/navigation_settings_2.png)


## Track Koppelen {#attaching-track}

Het blok **Aan wegen koppelen** laat je een bestaande GPX-track gebruiken als basis voor navigatie. OsmAnd Web past de track aan op nabijgelegen wegen om bocht-na-bocht begeleiding te bieden.

Wanneer je Track selecteren klikt, opent de browser een bestandskiezer waar je een .gpx-bestand van je computer kunt kiezen. Nadat je een track hebt geselecteerd:
- De track wordt weergegeven op de kaart en gebruikt om de route te berekenen.
- Route-overzicht (afstand en tijd) wordt getoond in het Routepaneel.
- Het geselecteerde bestand verschijnt onder Geselecteerde track (met de bestandsnaam van de track).
- Je kunt de gekoppelde track verwijderen met de min (–) knop naast Geselecteerde track.


## Routedetails {#route-details}

![Web Navigatie](@site/static/img/web/navigation_info.png) ![Web Navigatie](@site/static/img/web/navigation_turns.png)

Wanneer een route is berekend, toont het paneel een basisoverzicht (afstand, tijd, klimmen/dalen) en een knop **Details**. Gebruik Details om het routeweergave te openen met twee tabbladen: Info en Bochten.

Info vat de route en hoogtegegevens samen:
- **Punten** — het aantal routepunten gebruikt om de route op te bouwen.
- **Route** — afstand en tijd.
- **Klimmen/Dalen** — totale stijging en daling.
- **Hoogte (min/gem/max)** — hoogte-statistieken voor de route.
- **Hoogte (Satelliet)** — Herberekenen om hoogte opnieuw op te bouwen met satellietgegevens (indien beschikbaar).

Onder het overzicht helpt het hoogtegrafiek je het routeprofiel te inspecteren. Je kunt Hoogte en Hellingsgraad schakelen, en de schuifregelaar onder het grafiek gebruiken om te focussen op een specifiek deel van de route.

Gebruik Bochten voor bocht-na-bocht begeleiding. De route is ook gemarkeerd met oranje cirkels langs de lijn. Klik op een cirkel om een pop-up te openen met de bijbehorende navigatie-instructie. De pop-up kan ook bevatten:
- Vermijden — vermijdt dat specifieke segment.
- Way ID — een link naar de onderliggende OSM-way voor dat deel van de route.

Je kunt de route direct op de kaart verfijnen door route-markers naar een andere plaats te slepen. Wanneer je op een marker klikt en sleept naar een andere weg (of naar een nabijgelegen locatie) en dan loslaat:
- OsmAnd Web herberekent de route om door de nieuwe positie te gaan.
- De verplaatste marker wordt omgezet in een nieuw tussenliggend punt.
- Het nieuwe tussenliggende punt verschijnt in het Routepaneel als een extra punt ingevoegd boven de Bestemming, en het route-overzicht wordt dienovereenkomstig bijgewerkt.
- Je kunt het toegevoegde via-punt beheren op dezelfde manier als andere [tussenliggende punten](#manage-route-points).

![Web Navigatie](@site/static/img/web/navigation_on_map.png)

### Downloaden en Opslaan {#download-and-save}

Gebruik *Downloaden* om de route te exporteren als een track. Het downloadvenster biedt twee opties:
Volledige trackgegevens — bevat volledige gegevens, inclusief navigatie-instructies.
Vereenvoudigde track — een lichtere versie die geschikter is voor gebruik met andere apps.

Je kunt de route opslaan als een track met *Opslaan in Cloud / Uploaden naar OsmAnd Cloud*. Dit opent een dialoog waar je het opslaan in cloud-tracks kunt bevestigen, de Naam kunt bewerken, optioneel een Map kunt kiezen, en dan Opslaan of Annuleren.

### Een Route Delen {#share-a-route}

Om de route te delen, kopieer je de URL. Voorbeeld: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)


## Gerelateerde Artikelen {#related-articles}

- [Routevoorbereiding](../navigation/setup/route-navigation.md)
- [Navigatie-instellingen](../navigation/guidance/navigation-settings.md)
- [Voertuigparameters](../navigation/guidance/vehicle-parameters.md)
- [Route Plannen](../web/planner.md)