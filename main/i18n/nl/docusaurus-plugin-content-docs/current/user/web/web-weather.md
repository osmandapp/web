---
source-hash: aa3c29fb6cbe9138714a34b48b5eaee74f61c4713d9c46b72e2d28a1d615ca35
sidebar_position: 4
sidebar_label:  Weer
title: Weer op het Web
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

De Weer-functie op de OsmAnd Web-kaart toont actuele weersomstandigheden en voorspellingsgegevens direct op de kaart. Het biedt toegang tot weergegevens van meerdere voorspellingbronnen, ondersteunt tijdsaanpassing en maakt het bekijken van weerlagen mogelijk, zoals temperatuur, wind, druk, bewolking en neerslag.

Weergegevens zijn beschikbaar zonder in te loggen. Het Weer-weergave kan direct worden geopend vanuit de kaartinterface door op het paraplu-icoon in het menupaneel te klikken of door met de rechtermuisknop op de kaart te klikken en Weer openen te selecteren in het contextmenu.


## Bron van gegevens {#data-source}

OsmAnd Web biedt weergegevens van twee voorspellingbronnen:

- [**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – de standaardbron die wordt beheerd door NOAA/NWS. Biedt volledige weergegevens, inclusief temperatuur-, druk-, vochtigheid-, wind- en bewolkinglagen.  
- [**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – een alternatieve voorspellingbron. Biedt hoogwaardige temperatuur-, neerslag- en drukgegevens, maar biedt geen wind- of bewolkinginformatie.  

Om tussen hen te schakelen, klikt u op de **paraplu-knop** in het Weermenu.

![OsmAnd Web Weer](@site/static/img/web/weather_source.png)


## Weermenu {#weather-menu}

Het **Weermenu** toont actuele weersomstandigheden en voorspellingsgegevens voor de geselecteerde locatie op de kaart. Het combineert een samenvattingsweergave, tijdregelaars en weerlagen in één paneel.

Bovenaan het menu worden de naam van de huidige locatie, datum, tijd en luchttemperatuur weergegeven. Daaronder maakt een dagselector het schakelen tussen voorspeldagen binnen het beschikbare bereik mogelijk.

Er is een tijdbalk voorzien om de voorspellingstijd binnen de geselecteerde dag aan te passen. Het verplaatsen van de balk werkt alle weergegeven weergegevens en kaartlagen bij om het gekozen moment te weerspiegelen.

Het menu toont de volgende weergegevens voor de geselecteerde locatie:
- *Temperatuur*.
- *Neerslag*.
- *Wind*.
- *Luchtdruk*.
- *Bewolking*.  

Elke waarde wordt dynamisch bijgewerkt bij het wijzigen van de voorspellingstijd of -datum.

Onderaan het paneel wordt informatie over de generatietijd van de weergegevens weergegeven, wat aangeeft wanneer de voorspellingsgegevens voor het laatst zijn bijgewerkt.

![OsmAnd Web Weer](@site/static/img/web/weather_menu.png)


## Weerlagen {#weather-layers}

Weerlagen maken het visualiseren van voorspellingsgegevens direct op de kaart als een overlay mogelijk. Ze helpen bij het snel beoordelen van weersomstandigheden over een groter gebied in plaats van alleen waarden voor één punt te bekijken.

Om het paneel Weerlagen te openen, klikt u op het lagenicoon in het Weermenu. Dit opent een lijst met beschikbare weeroverlays die onafhankelijk kunnen worden ingeschakeld of uitgeschakeld.

De volgende weerlagen zijn beschikbaar:
- *Temperatuur* — toont de verdeling van de luchttemperatuur op de kaart met behulp van een kleurverloop.
- *Neerslag* — toont de neerslagintensiteit over het geselecteerde gebied.
- *Wind* — visualiseert windsnelheid en -richting.
- *Luchtdruk* — toont atmosferische drukpatronen.
- *Bewolking* — toont de bewolking.

Alle weerlagen zijn gesynchroniseerd met de geselecteerde datum en tijd in het Weermenu. Het wijzigen van de voorspeldag of het aanpassen van de tijdbalk werkt de kaartoverlays onmiddellijk bij om het gekozen moment te weerspiegelen.

![OsmAnd Web Weer](@site/static/img/web/weather_layers.png)


## Voorspellingsweergave {#forecast-view}

Weersvoorspellingen zijn beschikbaar tot 7 dagen vooruit. Voorspellingswaarden worden berekend in intervallen van 3 uur, waardoor u korte-termijnveranderingen gedurende elke dag kunt onderzoeken.

De 7-daagse voorspelling wordt weergegeven met behulp van twee complementaire formaten:
- **Grafiekweergave**. Toont voorspellingstrends in de tijd voor de geselecteerde weergegevens. 
- **Lijstweergave**. Toont dagelijkse voorspellingswaarden in een gestructureerd lijstformaat. 

U kunt tussen verschillende weergegevens schakelen met behulp van de pictogrammen bovenaan het voorspellingspaneel. 

![OsmAnd Web Weer](@site/static/img/web/weather_forecast.png)


## Gerelateerd artikel {#related-article}

- [Weer](../plugins/weather.md)
- [Inleiding](../web/web-overview.md)
- [Kaart](../web/web-map.md)