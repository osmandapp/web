---
source-hash: d8eea89d132b8d0c465d31c1f6c3db15ee3bfaea91b54f6c6164a55ad5c97c3e
sidebar_position: 4
title:  Fahrzeugparameter
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



## Übersicht

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Für eine optimale Routenberechnung in OsmAnd sollten Sie die folgenden Fahrzeugparameter berücksichtigen:

1. Stellen Sie die [*Standardgeschwindigkeit* oder *Straßengeschwindigkeiten*](#road-speeds) als [Mindest- und Höchstgeschwindigkeit](#road-speeds) des Fahrzeugs ein. Dies hilft der Anwendung, die für die Route benötigte Zeit zu ermitteln und die beste Route unter Berücksichtigung der Geschwindigkeitsbegrenzungen auf verschiedenen Straßenabschnitten auszuwählen.
2. Geben Sie den vom Motor verwendeten [*Kraftstofftyp*](#fuel-used-by-motor) an. Dies ermöglicht der App, die CO2-Emissionen abzuschätzen.
3. Geben Sie die [*Kapazität Ihres Tanks*](#fuel-tank-capacity) ein, um Ihren Kraftstoffstand und -verbrauch genau zu verfolgen.
4. Definieren Sie die [*Größen- und Gewichtsparameter*](#size-parameters) Ihres Fahrzeugs, die der App helfen können, die optimale Route zu berechnen und Hindernisse auf der Straße aufgrund von Beschränkungen zu vermeiden.

Die korrekte Einstellung der Parameter in der OsmAnd-App hilft Ihnen, Probleme bei der Navigation einer Route zu vermeiden, die am besten geeignete Route entsprechend dem Fahrzeugtyp und den Straßenbeschränkungen auszuwählen und die Zeit für Ihre Reise zu berechnen.


## Abmessungen {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Fahrzeugparameter beeinflussen die Navigation und den Routenverlauf, da sie die Verfügbarkeit von Straßen, Brücken, Fähren, Dämmen und anderer Infrastruktur bestimmen. Wenn Höhe, Breite, Länge oder Gewicht eines Fahrzeugs die zulässigen Werte für bestimmte Straßenabschnitte überschreiten, findet das OsmAnd-Navigationssystem eine alternative Route, um Hindernisse auf dem Weg zu umgehen.  

- Die Maßeinheiten entsprechen den Einstellungen, die unter *Allgemeine Einstellungen → [Einheiten & Formate](../../personal/profiles.md#units--formats)* ausgewählt wurden.
- Die Fahrzeugparameter können manuell eingestellt werden.
- Wenn Sie den Fahrzeugmessparameter manuell auswählen, bietet Ihnen die Anwendung den nächstgelegenen Wert aus der vorgefertigten Liste an. Dies ist notwendig, um Fehler zu vermeiden und die Route korrekter zu erstellen.
- Sie können Fahrzeugparameter aus einer vorgefertigten Liste von Größen auswählen.
- Stellen Sie die Größe nicht auf *Keine* ein, was bedeutet, dass keine Beschränkungen für den ausgewählten Parameter angewendet werden.  

### Beschränkungen {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/>-Beschränkung**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Der Gewichtsparameter ist nur in Navigationstypen wie [*Auto, LKW* und *Motorrad*](../../navigation/routing/car-based-routing.md) verfügbar.  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/>-Beschränkung**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Der Höhenparameter ist nur in Navigationstypen wie *[Auto, LKW, Motorrad](../../navigation/routing/car-based-routing.md)* und *[Boot](../../navigation/routing/boat-navigation.md)* verfügbar.  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/>-Beschränkung**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Der Längenparameter ist nur in Navigationstypen wie [*Auto, LKW* und *Motorrad*](../../navigation/routing/car-based-routing.md) verfügbar.  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/>-Beschränkung**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Der Breitenparameter ist nur in Navigationstypen wie *[Auto, LKW, Motorrad](../../navigation/routing/car-based-routing.md)* und *[Boot](../../navigation/routing/boat-navigation.md)* verfügbar.  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Beschränkungen der Fahrzeugparameter können für die Navigation und die Verkehrssicherheit wichtig sein. Einige dieser Einschränkungen können sein:  

1. Beschränkungen für Fahrzeuge, die sich in bestimmten städtischen Gebieten bewegen.  
2. Beschränkungen für den Fahrzeugverkehr auf bestimmten Straßenabschnitten, z. B. bei Brücken, Tunneln mit begrenztem Platz, niedrigen Überführungen, komplexen Kurven oder anderen Bauwerken.  
3. Gewichtsbeschränkungen pro Fahrzeugachse können besonders für LKW wichtig sein.
4. Beschränkungen für Fahrzeuge, die sich unter bestimmten Bedingungen bewegen, wie z. B. bei hohen Temperaturen, nassen oder verschneiten Straßen, nachts oder bei Wetterbedingungen mit eingeschränkter Sicht.


## Kraftstoffparameter {#fuel-parameters}

### Vom Motor verwendeter Kraftstoff {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Wenn Sie den Motortyp in den Fahrzeugparametern auswählen, werden die [***CO2-Fußabdruckdaten***](../../navigation/setup/route-details.md#elevation-info) über dem Diagramm in den [Routendetails](../setup/route-details.md) angezeigt.
Verfügbar sind sechs Kraftstoffarten: ***Benzin, Diesel, Autogas (LPG), Erdgas (CNG), Elektro*** und ***Hybrid***.  

**Anwendbarkeit:**

Die Einstellung **Vom Motor verwendeter Kraftstoff** ist nur in der fahrzeugbasierten Navigation wie *[Auto, Motorrad und LKW](../../navigation/routing/car-based-routing.md)* verfügbar.


### Tankinhalt {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


Der Parameter **Tankinhalt** ermöglicht es Ihnen, den [Kraftstoffstand](../../widgets/info-widgets.md#vehicle-metrics-widgets) und den [Verbrauch](../../widgets/info-widgets.md#vehicle-metrics-widgets) Ihres Fahrzeugs genauer zu verfolgen, indem Sie das Gesamtvolumen Ihres Tanks angeben. Der Standardwert beträgt ~50 ***Liter***. Die Maßeinheit für den Tankinhalt wird durch das [Profil (Einstellungen)](../..//personal/profiles.md#units--formats) bestimmt, das unter *Menü → Profil konfigurieren → Allgemeine Einstellungen → Einheiten & Formate → Volumeneinheit* konfiguriert ist.

**Anwendbarkeit:**

Die Einstellung **Tankinhalt** ist nur in der fahrzeugbasierten Navigation verfügbar. Für Navigationstypen wie *Fahrrad*, *Reiten*, *Zu Fuß* und *Ski* wird dieser Parameter nicht in den Fahrzeugparametern angezeigt.

## Geschwindigkeitsparameter

### Standardgeschwindigkeit {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

Die **Standardgeschwindigkeit** ist die Standardbewegungsgeschwindigkeit für dieses Verkehrsmittel ([Standardgeschwindigkeitsbegrenzungen](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Für die Profile *Gehen*, *Reiten* und *Radfahren* in kleinen Schritten von 0,1 km/h (mph) ([Einheiten & Formate](https://osmand.net/docs/user/personal/profiles#units--formats)) und für die anderen Profile in Schritten von 1 km/h (1 mph). Sie wird verwendet:
- Zur Schätzung der [Routenzeit](../../widgets/nav-widgets.md#time-to-intermediate), wenn die Geschwindigkeit nicht aus den Straßen bestimmt werden kann, wie bei der [GPX-Navigation](../setup/gpx-navigation.md), [Skirouten](../routing/ski-routing.md), [Bootsrouten](../routing/boat-navigation.md), [Fußgängerrouten](../routing/pedestrian-routing.md) und anderen ähnlichen Profilen.
- Um zu bestimmen, wann [Sprachansagen](../guidance/voice-navigation.md) aktiviert werden.
- Zur Bestimmung der Ankunftszeit für Kartenmarkierungen durch eine Luftliniennavigation, wenn die Durchschnittsgeschwindigkeit noch nicht berechnet wurde.



 Sie wird verwendet, um die Ankunftszeit zu berechnen und die optimale Route basierend auf der Bewegungsgeschwindigkeit zu bestimmen, die die Anwendung als typisch ansieht. Zum Beispiel Auto, öffentliche Verkehrsmittel, Fußgänger oder die von Ihnen manuell eingestellte Geschwindigkeit.


### Straßengeschwindigkeiten {#road-speeds}


![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

Für einige Navigationstypen kann die minimale und maximale zulässige Geschwindigkeit eingestellt werden. Wenn sie eingestellt ist, geht die Routing-Engine davon aus, dass sich das Fahrzeug oder Verkehrsmittel nicht schneller als das Limit und nicht langsamer als die Mindestgeschwindigkeit bewegt. 
Zum Beispiel ermöglicht dies die Erstellung einer **kraftstoffsparenden** Route, bei der der Kraftstoffverbrauch bei der eingestellten **Höchstgeschwindigkeit** optimal ist und die Engine eine kürzere Route findet, die längere, aber schnellere Straßen vermeidet.

- **Mindestgeschwindigkeit**  
    Die Einstellung legt die minimale Fahrgeschwindigkeit für alle Straßentypen auf der Route fest. Sie erhöht die Priorität für Straßen mit einer empfohlenen Geschwindigkeit, die niedriger als die Mindestgeschwindigkeit ist.  
- **Höchstgeschwindigkeit**  
    Die Einstellung legt die maximale Fahrgeschwindigkeit fest und verringert die Priorität für Straßen mit einer möglichen Geschwindigkeit, die höher als die maximale ist.




## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Navigationseinstellungen](./navigation-settings.md)
- [Sprachansagen / Benachrichtigungen](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)