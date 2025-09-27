---
source-hash: d8eea89d132b8d0c465d31c1f6c3db15ee3bfaea91b54f6c6164a55ad5c97c3e
sidebar_position: 4
title:  Voertuigparameters
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



## Overzicht

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Voor een optimale routeberekening in OsmAnd dient u rekening te houden met de volgende voertuigparameters:

1. Stel de [*Standaardsnelheid* of *Wegsnelheden*](#road-speeds) in, als de [minimum- en maximumsnelheid](#road-speeds) van het voertuig. Dit helpt de applicatie de benodigde tijd te bepalen om de route te voltooien en de beste route te kiezen, rekening houdend met de snelheidslimieten op verschillende wegsegmenten.
2. Specificeer het [*type*](#fuel-used-by-motor) brandstof dat door de motor wordt gebruikt. Hiermee kan de app de CO2-uitstoot schatten.
3. Voer de [*capaciteit van uw tank*](#fuel-tank-capacity) in om uw brandstofniveau en -verbruik nauwkeurig bij te houden.
4. Definieer de [*afmetings- en gewichtsparameters*](#size-parameters) van uw voertuig, wat de app kan helpen de optimale route te berekenen en obstakels op de weg als gevolg van beperkingen te vermijden.

Het correct instellen van de parameters in de OsmAnd-app helpt u problemen te voorkomen bij het navigeren van een route, de meest geschikte te kiezen op basis van het type voertuig en wegbeperkingen, en de tijd voor uw reis te berekenen.


## Afmetingsparameters {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Voertuigparameters beïnvloeden de navigatie en routeconstructie omdat ze de beschikbaarheid van wegen, bruggen, veerboten, dammen en andere infrastructuur bepalen. Als de hoogte, breedte, lengte of het gewicht van een voertuig de toegestane waarden voor bepaalde weggedeelten overschrijdt, zal het OsmAnd-navigatiesysteem een alternatieve route vinden om obstakels onderweg te vermijden.  

- De meeteenheden komen overeen met de instellingen die zijn geselecteerd in *Algemene instellingen → [Eenheden & formaten](../../personal/profiles.md#units--formats)*.
- De voertuigparameters kunnen handmatig worden ingesteld.
- Als u de meetparameter van het voertuig handmatig selecteert, zal de applicatie u de dichtstbijzijnde waarde uit de kant-en-klare lijst aanbieden. Dit is nodig om fouten te voorkomen en de route correcter op te bouwen.
- U kunt voertuigparameters kiezen uit een kant-en-klare lijst met afmetingen.
- Stel de afmeting niet in op *Geen*, wat betekent dat er geen beperkingen op de geselecteerde parameter worden toegepast.  

### Limieten {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> limiet**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> De gewichtsparameter is alleen beschikbaar in navigatietypes zoals [*Auto, Vrachtwagen* en *Motorfiets*](../../navigation/routing/car-based-routing.md).  

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/> limiet**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> De hoogteparameter is alleen beschikbaar in navigatietypes zoals *[Auto, Vrachtwagen, Motorfiets](../../navigation/routing/car-based-routing.md)* en *[Boot](../../navigation/routing/boat-navigation.md)*.  

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> limiet**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> De lengteparameter is alleen beschikbaar in navigatietypes zoals [*Auto, Vrachtwagen* en *Motorfiets*](../../navigation/routing/car-based-routing.md).  

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> limiet**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> De breedteparameter is alleen beschikbaar in navigatietypes zoals *[Auto, Vrachtwagen, Motorfiets](../../navigation/routing/car-based-routing.md)* en *[Boot](../../navigation/routing/boat-navigation.md)*.  

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Limieten op voertuigparameters kunnen belangrijk zijn voor navigatie en verkeersveiligheid. Enkele van deze beperkingen kunnen zijn:  

1. Beperkingen voor voertuigen die in bepaalde stedelijke gebieden rijden.  
2. Beperkingen voor voertuigverkeer op specifieke weggedeelten, zoals waar bruggen, tunnels met beperkte ruimte, lage viaducten, complexe bochten of andere constructies zijn.  
3. Gewichtslimieten per voertuigas kunnen vooral belangrijk zijn voor vrachtwagens.
4. Beperkingen voor voertuigen die onder bepaalde omstandigheden rijden, zoals bij hoge temperaturen, natte of besneeuwde wegen, 's nachts of bij weersomstandigheden met beperkt zicht.


## Brandstofparameters {#fuel-parameters}

### Brandstof gebruikt door motor {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatieroute Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatieroute iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Als u het motortype selecteert in de voertuigparameters, worden de [***CO2-voetafdrukgegevens***](../../navigation/setup/route-details.md#elevation-info) boven de grafiek weergegeven in [Routedetails](../setup/route-details.md).
Beschikbare zes brandstoftypes: ***Benzine, Diesel, LPG, CNG, Elektrisch*** en ***Hybride***.  

**Toepasbaarheid:**

De instelling **Brandstof gebruikt door motor** is alleen beschikbaar in voertuiggebaseerde navigatie zoals *[Auto, Motorfiets en Vrachtwagen](../../navigation/routing/car-based-routing.md)*.


### Brandstoftankcapaciteit {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


De parameter **Brandstoftankcapaciteit** stelt u in staat om het [brandstofniveau](../../widgets/info-widgets.md#vehicle-metrics-widgets) en het [verbruik](../../widgets/info-widgets.md#vehicle-metrics-widgets) van uw voertuig nauwkeuriger te volgen door het totale volume van uw tank op te geven. De standaardwaarde is ~50 ***liter***. De meeteenheid voor brandstofcapaciteit wordt bepaald door het [Profiel (Instellingen)](../..//personal/profiles.md#units--formats) geconfigureerd in *Menu → Configureer profiel → Algemene instellingen → Eenheden & Formaten → Volume-eenheid*.

**Toepasbaarheid:**

De instelling **Brandstoftankcapaciteit** is alleen beschikbaar in voertuiggebaseerde navigatie. Voor navigatietypes zoals *Fiets*, *Paardrijden*, *Te voet* en *Skiën* wordt deze parameter niet weergegeven in de Voertuigparameters.

## Snelheidsparameters

### Standaardsnelheid {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

De **Standaardsnelheid** is de standaard bewegingssnelheid voor deze vervoersmodus ([Standaard snelheidslimieten](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Voor de profielen *Wandelen*, *Paardrijden* en *Fietsen*, in kleine stappen equivalent aan 0,1 km/u (mph) ([Eenheden & formaten](https://osmand.net/docs/user/personal/profiles#units--formats)), en voor de andere profielen, in stappen equivalent aan 1 km/u (1 mph). Het wordt gebruikt:
- Om de [routetijd](../../widgets/nav-widgets.md#time-to-intermediate) te schatten wanneer de snelheid niet kan worden bepaald aan de hand van de wegen, zoals bij [GPX-navigatie](../setup/gpx-navigation.md), [Skiroutes](../routing/ski-routing.md), [Bootroutes](../routing/boat-navigation.md), [Voetgangersroutes](../routing/pedestrian-routing.md) en andere vergelijkbare profielen.
- Om te bepalen wanneer [gesproken aanwijzingen](../guidance/voice-navigation.md) worden geactiveerd.
- Om de geschatte aankomsttijd voor kaartmarkeringen te bepalen via een rechte lijn navigatie als de gemiddelde snelheid nog niet is berekend.



 Het wordt gebruikt om de aankomsttijd te berekenen en de optimale route te bepalen op basis van de bewegingssnelheid die de applicatie als typisch beschouwt. Bijvoorbeeld, auto, openbaar vervoer, voetganger, of de snelheid die u handmatig instelt.


### Wegsnelheden {#road-speeds}


![Navigatie-instellingen](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

Voor sommige navigatietypes kan de minimaal en maximaal toegestane snelheid worden ingesteld. Als dit is ingesteld, gaat de routeberekeningsengine ervan uit dat het voertuig of de vervoersmodus niet sneller zal bewegen dan de limiet en niet langzamer dan de minimale snelheid. 
Dit maakt het bijvoorbeeld mogelijk om een **brandstofefficiënte** route te creëren waarbij het brandstofverbruik optimaal is bij de ingestelde **maximumsnelheid** en de engine een kortere route zal vinden door langere maar snellere wegen te vermijden.

- **Minimumsnelheid**  
    De instelling stelt de minimale rijsnelheid in voor alle wegtypes op de route. Het verhoogt de prioriteit voor wegen met een aanbevolen snelheid die lager is dan de minimale snelheid.  
- **Maximumsnelheid**  
    De instelling stelt de maximale rijsnelheid in en verlaagt de prioriteit voor wegen met een mogelijke snelheid die hoger is dan de maximale.




## Gerelateerde artikelen {#related-articles}

- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Navigatie-instellingen](./navigation-settings.md)
- [Gesproken aanwijzingen / Meldingen](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)