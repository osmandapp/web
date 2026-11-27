---
source-hash: 54463b26bbd3157bf65aa4c615c7c5d58ded9f5e2adbff7977057bafa3b8a30c
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

![Navigationseinstellungen Android](@site/static/img/navigation/vehicle-parameters_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Für eine optimale Routenberechnung in OsmAnd sollten Sie die folgenden Fahrzeugparameter berücksichtigen:

1. Stellen Sie die [*Standardgeschwindigkeit*](#default-speed) und den [*Geschwindigkeitsbereich*](#speed-range) — die Mindest- und Höchstgeschwindigkeit des Fahrzeugs — ein. Dies hilft der Anwendung, die für die Route benötigte Zeit zu ermitteln und die beste Route unter Berücksichtigung der Geschwindigkeitsbegrenzungen auf verschiedenen Straßenabschnitten auszuwählen.
2. Geben Sie den [*Typ*](#fuel-used-by-motor) des vom Motor verwendeten Kraftstoffs an. Dies ermöglicht der App, die CO2-Emissionen abzuschätzen.
3. Geben Sie die [*Kapazität Ihres Tanks*](#fuel-tank-capacity) ein, um Ihren Kraftstoffstand und -verbrauch genau zu verfolgen.
4. Definieren Sie die [*Größen- und Gewichtsparameter*](#size-parameters) Ihres Fahrzeugs, die der App helfen können, die optimale Route zu berechnen und Hindernisse auf der Straße aufgrund von Beschränkungen zu vermeiden.

Die korrekte Einstellung der Parameter in der OsmAnd-App hilft Ihnen, Probleme bei der Navigation einer Route zu vermeiden, die am besten geeignete Route entsprechend dem Fahrzeugtyp und den Straßenbeschränkungen auszuwählen und die Zeit für Ihre Reise zu berechnen.


## Abmessungen {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

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

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/>-Beschränkung**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Der Höhenparameter ist nur in Navigationstypen wie *[Auto, LKW, Motorrad](../../navigation/routing/car-based-routing.md)* und *[Boot](../../navigation/routing/boat-navigation.md)* verfügbar.  

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/>-Beschränkung**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Der Längenparameter ist nur in Navigationstypen wie [*Auto, LKW* und *Motorrad*](../../navigation/routing/car-based-routing.md) verfügbar.  

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/>-Beschränkung**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Der Breitenparameter ist nur in Navigationstypen wie *[Auto, LKW, Motorrad](../../navigation/routing/car-based-routing.md)* und *[Boot](../../navigation/routing/boat-navigation.md)* verfügbar.  

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Auf Android ist dieser Parameter auch für *[Fahrradprofile](../../navigation/routing/bicycle-based-routing.md)* verfügbar, um enge Radwege zu vermeiden.

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_width_bicycle.png)

**5.** [**Achslastgrenze**](https://wiki.openstreetmap.org/wiki/Key:maxaxleload) - Geben Sie die maximale Achslast Ihres Fahrzeugs an, um Straßen und Brücken mit Achsgewichtsbeschränkungen zu vermeiden. Dieser Parameter ist nur in Navigationstypen wie [*LKW*](../../navigation/routing/car-based-routing.md) verfügbar.  

![Navigationseinstellungen Android](@site/static/img/navigation/max_axle_load.png)

**6.** [**Maximalgewicht bei Volllast**](https://wiki.openstreetmap.org/wiki/Key:maxweightrating) - Geben Sie das maximale Gesamtgewicht Ihres Fahrzeugs bei Volllast an, um Straßen und Brücken mit Gesamtgewichtsbeschränkungen zu vermeiden. Dieser Parameter ist nur in Navigationstypen wie [*LKW*](../../navigation/routing/car-based-routing.md) verfügbar.  

![Navigationseinstellungen Android](@site/static/img/navigation/max_weight_at_full_load.png)

Beschränkungen der Fahrzeugparameter können für die Navigation und die Verkehrssicherheit wichtig sein. Einige dieser Einschränkungen können sein:  

1. Beschränkungen für Fahrzeuge, die sich in bestimmten städtischen Gebieten bewegen.  
2. Beschränkungen für den Fahrzeugverkehr auf bestimmten Straßenabschnitten, z. B. bei Brücken, Tunneln mit begrenztem Platz, niedrigen Überführungen, komplexen Kurven oder anderen Bauwerken.  
3. Gewichtsbeschränkungen pro Fahrzeugachse können besonders für LKW wichtig sein.
4. Beschränkungen für Fahrzeuge, die sich unter bestimmten Bedingungen bewegen, wie z. B. bei hohen Temperaturen, nassen oder verschneiten Straßen, nachts oder bei Wetterbedingungen mit eingeschränkter Sicht.


## Kraftstoffparameter {#fuel-parameters}

### Vom Motor verwendeter Kraftstoff {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationsroute Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationsroute iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios_new.png)

</TabItem>

</Tabs>

Wenn Sie den Motortyp in den Fahrzeugparametern auswählen, werden die [***CO2-Fußabdruckdaten***](../../navigation/setup/route-details.md#elevation-info) über dem Diagramm in den [Routendetails](../setup/route-details.md) angezeigt.
Verfügbar sind sieben Kraftstoffarten: ***Benzin, Diesel, LPG, CNG, Elektro, Hybrid*** und ***Ethanol***.  

**Anwendbarkeit:**

Die Einstellung **Vom Motor verwendeter Kraftstoff** ist nur in der fahrzeugbasierten Navigation wie *[Auto, Motorrad und LKW](../../navigation/routing/car-based-routing.md)* verfügbar.


### Tankinhalt {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationseinstellungen Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


Der Parameter **Tankinhalt** ermöglicht es Ihnen, den [Kraftstoffstand](../../widgets/info-widgets.md#vehicle-metrics-widgets) und den [Verbrauch](../../widgets/info-widgets.md#vehicle-metrics-widgets) Ihres Fahrzeugs genauer zu verfolgen, indem Sie das Gesamtvolumen Ihres Tanks angeben. Der Standardwert beträgt ~50 ***Liter***. Die Maßeinheit für den Tankinhalt wird durch das [Profil (Einstellungen)](../..//personal/profiles.md#units--formats) bestimmt, das unter *Menü → Profil konfigurieren → Allgemeine Einstellungen → Einheiten & Formate → Volumeneinheit* konfiguriert ist.

**Anwendbarkeit:**

Die Einstellung **Tankinhalt** ist nur in der fahrzeugbasierten Navigation verfügbar. Für Navigationstypen wie *Fahrrad*, *Reiten*, *Zu Fuß* und *Ski* wird dieser Parameter nicht in den Fahrzeugparametern angezeigt.


## Geschwindigkeitsparameter

### Standardgeschwindigkeit {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,vehicle_parameters,travel_speed"/>*

![Reisegeschwindigkeit Android](@site/static/img/navigation/navigation_settings_travel_speed_andr.webp)

Der Bildschirm *Reisegeschwindigkeit* enthält die Einstellungen *Standardgeschwindigkeit*, *Geschwindigkeitsbereich* und *Voraussichtliche Ankunftszeit* des Profils. Änderungen werden sofort gespeichert. Die Schaltfläche *Auf Standard zurücksetzen* in der oberen Leiste stellt die Standardwerte aller Einstellungen auf dem Bildschirm wieder her.

Die **Standardgeschwindigkeit** ist die Standardbewegungsgeschwindigkeit für dieses Verkehrsmittel ([Standardgeschwindigkeitsbegrenzungen](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Für die Profile *Gehen*, *Reiten* und *Radfahren* in kleinen Schritten von 0,1 km/h (mph) ([Einheiten & Formate](https://osmand.net/docs/user/personal/profiles#units--formats)) und für die anderen Profile in Schritten von 1 km/h (1 mph). Sie wird verwendet:
- Zur Schätzung der [Routenzeit](../../widgets/nav-widgets.md#time-to-intermediate), wenn die Geschwindigkeit nicht aus den Straßen bestimmt werden kann, wie bei der [GPX-Navigation](../setup/gpx-navigation.md), [Skirouten](../routing/ski-routing.md), [Bootsrouten](../routing/boat-navigation.md), [Fußgänger](../routing/pedestrian-routing.md) und anderen ähnlichen Profilen.
- Um zu bestimmen, wann [Sprachansagen](../guidance/voice-navigation.md) aktiviert werden.
- Zur Bestimmung der Ankunftszeit für Kartenmarkierungen durch eine Luftlinienavigation, wenn die Durchschnittsgeschwindigkeit noch nicht berechnet wurde.

Die *Standardgeschwindigkeit* kann nur innerhalb des [*Geschwindigkeitsbereichs*](#speed-range) eingestellt werden: Wenn Sie den Bereich verengen, bewegt sich die *Standardgeschwindigkeit* mit.

</TabItem>

<TabItem value="ios" label="iOS">

![Navigationseinstellungen](@site/static/img/navigation/navigation_settings_speeds_ios.png)

Die **Standardgeschwindigkeit** ist die Standardbewegungsgeschwindigkeit für dieses Verkehrsmittel ([Standardgeschwindigkeitsbegrenzungen](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Für die Profile *Gehen*, *Reiten* und *Radfahren* in kleinen Schritten von 0,1 km/h (mph) ([Einheiten & Formate](https://osmand.net/docs/user/personal/profiles#units--formats)) und für die anderen Profile in Schritten von 1 km/h (1 mph). Sie wird verwendet:
- Zur Schätzung der [Routenzeit](../../widgets/nav-widgets.md#time-to-intermediate), wenn die Geschwindigkeit nicht aus den Straßen bestimmt werden kann, wie bei der [GPX-Navigation](../setup/gpx-navigation.md), [Skirouten](../routing/ski-routing.md), [Bootsrouten](../routing/boat-navigation.md), [Fußgänger](../routing/pedestrian-routing.md) und anderen ähnlichen Profilen.
- Um zu bestimmen, wann [Sprachansagen](../guidance/voice-navigation.md) aktiviert werden.
- Zur Bestimmung der Ankunftszeit für Kartenmarkierungen durch eine Luftlinienavigation, wenn die Durchschnittsgeschwindigkeit noch nicht berechnet wurde.

</TabItem>

</Tabs>


### Geschwindigkeitsbereich {#speed-range}

<InfoAndroidOnly />

Für einige Navigationstypen kann die minimale und maximale zulässige Geschwindigkeit eingestellt werden. Beide Werte werden mit einem Schieberegler mit zwei Griffen eingestellt. Wenn sie eingestellt sind, geht die Routing-Engine davon aus, dass sich das Fahrzeug oder Verkehrsmittel nicht schneller als die Höchstgeschwindigkeit und nicht langsamer als die Mindestgeschwindigkeit bewegt. Der *Geschwindigkeitsbereich* wird sowohl für die Routenberechnung als auch für die Ankunftszeit verwendet.
Zum Beispiel ermöglicht dies die Erstellung einer **kraftstoffsparenden** Route, bei der der Kraftstoffverbrauch bei der eingestellten **Höchstgeschwindigkeit** optimal ist und die Engine eine kürzere Route findet, die längere, aber schnellere Straßen vermeidet.

- **Mindestgeschwindigkeit** — legt die minimale Fahrgeschwindigkeit für alle Straßentypen auf der Route fest. Sie erhöht die Priorität für Straßen mit einer empfohlenen Geschwindigkeit, die niedriger als die Mindestgeschwindigkeit ist.
- **Höchstgeschwindigkeit** — legt die maximale Fahrgeschwindigkeit fest und verringert die Priorität für Straßen mit einer möglichen Geschwindigkeit, die höher als die maximale ist.

Der *Geschwindigkeitsbereich* ist für Profile mit Luftlinien-Routing, zum Beispiel *Flugzeug*, nicht verfügbar.


### Voraussichtliche Ankunftszeit {#estimated-arrival-time}

<InfoAndroidOnly />

Die Einstellungen für die *Voraussichtliche Ankunftszeit* legen fest, wie OsmAnd die Ankunftszeit während der Navigation berechnet.

- **An meine Geschwindigkeit anpassen** — standardmäßig deaktiviert. Ist die Einstellung deaktiviert, ergibt sich die Ankunftszeit aus der erwarteten Geschwindigkeit auf jeder Straße der Route. Ist sie aktiviert, teilt OsmAnd die verbleibende Entfernung durch Ihre Durchschnittsgeschwindigkeit über das gewählte *Intervall*. Es wird nur die Bewegung während der Navigation berücksichtigt, Stopps werden übersprungen. Unmittelbar nach dem Start der Navigation kombiniert die Ankunftszeit die Routenschätzung mit Ihrer Durchschnittsgeschwindigkeit, bis Sie sich über das gesamte *Intervall* bewegt haben.
- **Intervall** — der Zeitraum, über den Ihre Durchschnittsgeschwindigkeit gemessen wird, von 15 Sekunden bis 60 Minuten. Der Standardwert beträgt 15 Minuten. Die Einstellung ist verfügbar, wenn *An meine Geschwindigkeit anpassen* aktiviert ist.

Die angepasste Ankunftszeit wird in den Widgets [*Zeit bis zum Ziel*](../../widgets/nav-widgets.md#time-to-destination) und [*Zeit bis zum Zwischenziel*](../../widgets/nav-widgets.md#time-to-intermediate), in der Navigationsbenachrichtigung und in [Android Auto](../auto-car.md) angezeigt. Die Zeit bis zur nächsten Abbiegung und die Sprachansagen sind nicht betroffen.


## Verwandte Artikel {#related-articles}

- [Routenparameter](../routing/osmand-routing.md#routing-types)
- [Navigationseinstellungen](./navigation-settings.md)
- [Sprachansagen / Benachrichtigungen](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)