---
source-hash: ce62f6fd113ba54378f5dc39e541fa7e711306a641c814ab9db60c61a6c63dd1
sidebar_position: 4
---
import Translate from '@site/src/components/Translate.js';


# Navigatie Spraakinstructie Activering {#navigation-voice-prompt-triggering}

                               
**(Samengesteld door Hardy 2013, herwerkt 2023-08)**
## Principe en gerelateerde instellingen {#principle-and-related-settings}
* Instructies worden geactiveerd op basis van een **voorsprongafstand**-drempel, afgeleid door een opgegeven voorsprongtijd om te zetten via de **_<Translate android="true" ids="default_speed_setting_title" />_** van het profiel. Voor instructies op korte afstand kan deze voorsprongafstand vervolgens worden aangepast op basis van de werkelijke snelheid: verhoogd om ervoor te zorgen dat de aankondiging vroeg genoeg wordt geactiveerd bij hoge snelheden, of verlaagd voor meer precisie bij lage snelheden.
* De **_<Translate android="true" ids="default_speed_setting_title" />_** van het profiel is door de gebruiker aanpasbaar, en het wijzigen ervan zal daarom de activeringsafstanden van de spraakinstructies beïnvloeden.
*Opmerking*: De _<Translate android="true" ids="default_speed_setting_title" />_ beïnvloedt ook de berekende routetijd.
* De timing van de spraakinstructies kan ook worden aangepast via de instelling **_<Translate android="true" ids="arrival_distance" />_**. Controleer de kolom 'Aankomstinstelling' hieronder om te zien welke spraakinstructies worden beïnvloed. De activeringsafstand wordt vermenigvuldigd met de volgende factor:

**<Translate android="true" ids="arrival_distance" />** | Afstandsvermenigvuldiger
--- | --- 
**<Translate android="true" ids="arrival_distance_factor_early" />** | 1.5
**<Translate android="true" ids="arrival_distance_factor_normally" />** | 1
**<Translate android="true" ids="arrival_distance_factor_late" />** | 0.5
**<Translate android="true" ids="arrival_distance_factor_at_last" />** | 0.25
* Daarnaast is er een door de gebruiker configureerbare algemene **_Spraakinstructie vertraging_** (instelbaar in de _OsmAnd ontwikkelingsplugin_, _Tekst spraakinstructies_, knop 11.2). Dit is met name nodig voor uitvoertype _Telefoongesprek audio_, waarbij we een oproep naar een autoradio emuleren die enige vertraging veroorzaakt, om te voorkomen dat het begin van de instructies wordt afgesneden. (Alle afstanden die in de instructies worden aangekondigd, anticiperen op eventuele _Spraakinstructie vertraging_.)
* We dempen instructies onmiddellijk zodra ze verwijzen naar verouderde gebeurtenissen, of als uw rijrichting niet in lijn lijkt te zijn met een huidige route.

## Standaard snelheden basisprofiel {#base-profile-default-speeds}
Hoewel deze door de gebruiker kunnen worden aangepast, zijn de standaardwaarden:
* Rijden: 12,5 m/s (45 km/u)
* Fietsen: 2,78 m/s (10 km/u)
* Wandelen: 1,11 m/s (4 km/u)
* Boot: 1,39 m/s (5 km/u)
* Skiën: 1,39 m/s (5 km/u)
* Vliegtuig: 40 m/s (144 km/u)

## Activeringstabel {#trigger-table}

De triggers staan [hier in de code](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/routing/data/AnnounceTimeDistances.java#L65). De corresponderende waarden voor de standaardinstellingen van OsmAnd zijn:

Type instructie | Voorsprongtijd [s]:<br/>Corresponderende<br/>Voorsprongafstand @ Standaardsnelheid [m] | Voorsprongafstand aangepast door werkelijke snelheid? | Instelbaar via aankomstinstelling? | Opmerking |
--- | --- | --- | --- | --- |
Nu afslaan | **6,7 s / 3,2 s / 2 s:**<br/>Rijden: 83 m<br/>Fietsen: 12(8) m<br/>Wandelen: 12(2) m | :heavy_check_mark: (Proportioneel aan *werkelijke snelheid / standaardsnelheid*) | :heavy_check_mark: | Voorsprongtijd (heuristisch) = _max(8, sqrt(standaardsnelheid * 3,6))_. De corresponderende voorsprongafstand is minimaal 12 m om rekening te houden met positieonzekerheid. |
Sla af over X m | **22 s:**<br/>Rijden: 275 m<br/>Fietsen: 61 m<br/>Wandelen: 24 m | :heavy_check_mark: (Alleen verhogen) |  | Overgeslagen indien < 15 s voor afslag |
Voorbereiden om af te slaan over X m | **115 s:**<br/>Rijden: 1438 m<br/>Fietsen: 319 m<br/>Wandelen: - |  |  | Overgeslagen indien < 150 m voor "Sla af over", overgeslagen voor _standaardsnelheid_ < 8 km/u |
Lang voorbereiden om af te slaan over X m | **300 s:**<br/>Rijden: -<br/>Fietsen: -<br/>Wandelen: - |  |  | Overgeslagen voor _standaardsnelheid_ < 108 km/u |
Ga rechtdoor | **>300 s:**<br/>Rijden: 3750 m<br/>Fietsen: 833 m<br/>Wandelen: 333 m | | | Speelt na routeberekening als er geen andere instructie is, of na een afslag als de volgende afslag verder is dan _Lang voorbereiden_ |
Aankomen op bestemming of tussenpunt | **5 s:**<br/>Rijden: 63 m<br/>Fietsen: 14 m<br/>Wandelen: 6(12) m | |:heavy_check_mark: | Minimaal 12 m |
Naderen van waypoint / favoriet / POI | **60 s:**<br/>Rijden: 750 m<br/>Fietsen: 167 m<br/>Wandelen: 67 m | :heavy_check_mark: (Alleen verhogen) | :heavy_check_mark: | Beperkt tot maximaal 1 punt tegelijk |
Passeren van waypoint / favoriet / POI | **15 s:**<br/>Rijden: 188 m<br/>Fietsen: 42 m<br/>Wandelen: 17 m | :heavy_check_mark: (Alleen verhogen) | :heavy_check_mark: | Beperkt tot maximaal 3 punten tegelijk |
Standaard alarm | **12 s:**<br/>Rijden: 150 m<br/>Fietsen: 33 m<br/>Wandelen: 13 m | :heavy_check_mark: (Alleen verhogen) | :heavy_check_mark: |
Dichtbij alarm | **7s:**<br/> Rijden: 88 m<br/>Fietsen: 20 m<br/>Wandelen: 8 m | :heavy_check_mark: (Alleen verhogen) | :heavy_check_mark: | _Verkeersremming_ gebruikt het _Passeren_ alarm voor de naderingsinstructie, en filtert duplicaten binnen deze straal |
Aankondiging buiten route | **20 s:**<br/>Rijden: 250m<br/>Fietsen: 56m<br/>Wandelen: 22m h| | :heavy_check_mark: | Kan worden uitgeschakeld |
GPS-signaal verloren | **20 s** | | | Wordt afgespeeld nadat het GPS-signaal gedurende >= 20 s verloren is gegaan en dit niet door een gebruikersactie is veroorzaakt. |