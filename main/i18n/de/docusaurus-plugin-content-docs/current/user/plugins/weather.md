---
source-hash: d675bf78b7d5f02b9e16ef27beaba0dfa88409214edd570ed49a75ad00bd2d71
sidebar_position: 19
title:  Wetter
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


## Übersicht {#overview}

:::info Pro-Funktion
Das Wetter-Plugin ist eine kostenpflichtige Funktion von [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

Die interaktiven Wetterkarten-Ebenen in der OsmAnd-App ermöglichen es Ihnen, Temperatur, Luftdruck, Wolkenbedeckung, Windgeschwindigkeit und Niederschlag in Ihrer Stadt oder an jedem anderen Ort auf einer interaktiven Weltkarte zu überwachen. Das Wetter-Plugin liefert stündliche Wettervorhersagen für 7 Tage im Voraus direkt auf der OsmAnd-Karte. Wetterinformationen können auch für die Offline-Nutzung heruntergeladen werden.  

Die Datenquelle für das Wetter-Plugin ist das [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) betrieben vom United States National Weather Service (NWS), und das European Centre for Medium-Range Weather Forecasts ([ECMWF](https://www.ecmwf.int/)).  


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die folgenden Einstellungen sind *erforderlich*, um das Wetter auf der OsmAnd-Karte anzuzeigen:

**1.** [Erwerben Sie das **OsmAnd Pro-Abonnement**](../purchases/).

**2.** [Aktivieren Sie](../plugins/#enable--disable) das Wetter-Plugin im Bereich *Plugins* des *Hauptmenüs*.

**3.** [Wählen Sie die **Maßeinheiten**](#weather-settings) für die Wetterphänomene.

**4.** [Zeigen Sie die **Wetter-Ebenen**](#customize-weather-layers) auf der Karte über den Menüpunkt Wetter im Menü Karte konfigurieren an (denken Sie daran herauszuzoomen).

**5.** [Sehen Sie sich die **Wettervorhersage**](#weather-forecast-screen) für das ausgewählte Gebiet an (mit diesem Menü bleibt der Hauptbildschirm der OsmAnd-Karte frei von Wetter-Ebenen).

**6.** [Laden Sie die Wettervorhersage herunter](#offline-forecast), wenn Sie sie offline verwenden möchten.

**7.** [Aktivieren Sie **Wetter-Widgets**](#weather-widgets), wenn Sie täglich aktuelle Wetterinformationen sehen möchten.  

:::caution Erforderliches Rendering
Das Wetter-Plugin ist nur mit der Karten-Rendering-Engine [Version 2](../personal/global-settings/#map-rendering-engine) (OpenGL) verfügbar.  
:::


## Wetter auf der Karte anzeigen {#display-weather-on-the-map}

### Wettervorhersage-Bildschirm {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Gehen Sie zu: *Aktiviertes Plugin → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Wetter-Dashboard Android](@site/static/img/plugins/weather/weather_dashbord_andr_new_3.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Aktiviertes Plugin → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Wetter-Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

Das seitliche Hauptmenü enthält einen eigenen Menüpunkt **Wetter**, der schnellen Zugriff auf alle Wetter-Werkzeuge bietet. Der *Wettervorhersage-Bildschirm* zeigt Informationen zu *Temperatur*, *Luftdruck*, *Windgeschwindigkeit*, *Wolkenbedeckung* und *Niederschlag* an. 

Die Vorhersagewerte werden für die Kartenmitte angezeigt, die durch ein Fadenkreuz markiert ist (schwarz auf Android, rot auf iOS). Verschieben Sie die Karte, um den ausgewählten Ort zu ändern — die Wetterdaten werden automatisch für den neuen Punkt aktualisiert.

Am unteren Bildschirmrand befindet sich die *Wetter-Symbolleiste*. Mit den Tages-Schaltflächen und dem Zeitregler können Sie die genaue Zeit einstellen, zu der die Wettervorhersage angezeigt wird.

### Datenquelle {#data-source}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

![Datenquelle Android](@site/static/img/plugins/weather/weather_source_android.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

![Datenquelle iOS](@site/static/img/plugins/weather/weather_source_ios.png)

</TabItem>  

</Tabs>

Sie können wählen, welchen Wettervorhersage-Anbieter OsmAnd für die Anzeige der Daten auf dem Wetter-Bildschirm verwendet:<br />
<Translate android="true" ids="shared_string_menu,shared_string_weather"/> → ⚙️ → *Datenquelle wählen*

Zwei Wettervorhersage-Anbieter werden unterstützt:

[**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – die Standardquelle, betrieben von NOAA/NWS. Liefert vollständige Wetterdaten, darunter Temperatur, Druck, Luftfeuchtigkeit sowie Wind- und Wolken-Ebenen.

[**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – eine alternative Vorhersagequelle. Bietet hochwertige Temperatur-, Niederschlags- und Druckdaten, liefert aber keine Wind- oder Wolkeninformationen. Bei Verwendung von ECMWF werden nicht verfügbare Parameter als „–“ angezeigt, und die entsprechenden Wetter-Ebenen erscheinen deaktiviert.

So wirkt sich die Datenquelle auf die Wetteranzeige aus:
- Die Karte, die Diagramme, die Zeitleiste und die Wetterwerte auf dem Bildschirm werden nach dem Wechsel der Quelle sofort aktualisiert.
- Es werden nur die Parameter angezeigt, die für den ausgewählten Anbieter verfügbar sind.
- Wetter-Widgets werden automatisch aktualisiert, um die gewählte Quelle zu verwenden.
- Wenn Sie zuvor eine Wettervorhersage heruntergeladen haben, verwendet OsmAnd die Daten, die dem ausgewählten Anbieter entsprechen.
- GFS und ECMWF verwenden getrennte Caches. Beim Wechsel der Quelle werden die entsprechenden Wetterkacheln geladen oder aktualisiert.


### Wetter-Ebenen anpassen {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Gehen Sie zu: *Aktiviertes Plugin → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Wetter-Dashboard Android](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Gehen Sie zu: *Aktiviertes Plugin → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Wetter-Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

Um Wetter-Ebenen auf dem OsmAnd-Kartenbildschirm anzuzeigen, müssen Sie das Menü *Karte konfigurieren* verwenden. Gehen Sie zum Menü, suchen Sie den Punkt *Wetter* in der Liste (nur verfügbar, wenn das Plugin aktiviert ist) und tippen Sie darauf.  

In diesem Menü können Sie die **Sichtbarkeit** und die [Einstellungen](#weather-settings) für jede Ebene ändern, den Typ der Isolinien auswählen und die [Offline-Wettervorhersage für 7 Tage](#offline-forecast) herunterladen (*hier nur für Android verfügbar*). Bei 0 % Sichtbarkeit ist die Ebene ausgeblendet, bei 100 % ist sie vollständig sichtbar.


### Wetter-Einstellungen {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *Hauptmenü → Plugins → Wetter → Einstellungen*
- *Hauptmenü → Einstellungen → Profil → Plugin-Einstellungen → Wetter*

![Wetter-Einstellungen Android](@site/static/img/plugins/weather/weather_settings_andr_1.webp) ![Wetter-Einstellungen 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.webp)

</TabItem>

<TabItem value="ios" label="iOS">

*Hauptmenü → Einstellungen → Profil → Plugins → Wetter*

![Wetter-Einstellungen iOS](@site/static/img/plugins/weather/weather_settings_ios.webp) ![Wetter-Einstellungen iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.webp)

</TabItem>

</Tabs>  

Es ist wichtig festzulegen, in welchen Maßeinheiten Sie die [Wetterdaten](#weather-layers) auf der Karte und im Bereich [Wetter-Widgets](#weather-widgets) des Bildschirms am bequemsten sehen. Sie können für jeden Parameter passende Maßeinheiten wählen. Sie können auch Standardwerte verwenden — unter iOS für alle Parameter, unter Android nur für die Temperatur. Die Temperatureinheit wird unter *Menü → Profil → Allgemeine Einstellungen → Einheiten & Formate → Temperatur* gewählt. In der iOS-Version der OsmAnd-App können Sie außerdem die Option Offline-Vorhersage aktivieren, um beim Reisen kein mobiles Datenvolumen zu verbrauchen.  

:::note
In der iOS-Version von OsmAnd können Sie Maßeinheiten und Sichtbarkeitsstufe in dem Menü ändern, das sich nach einem langen Tippen auf das Symbol der gewünschten Kartenebene öffnet.  
:::

### Wetter-Ebenen {#weather-layers}

Alle Wetterdaten werden als separate Kartenebenen dargestellt. Um die Wetter-Ebenen auf der Karte zu sehen, müssen Sie herauszoomen, sie sind nur auf den Zoomstufen 2-12 verfügbar. Wetter-Ebenen verwenden [Wetterpaletten](../personal/color-palette-schemes.md#weather), um die Karte einzufärben, diese Paletten können bei Bedarf [geändert](../personal/color-palette-schemes.md#palette-modify) werden.

| |  
|------------|  
| Die **Niederschlags-Ebene** zeigt Informationen über Wetterereignisse, bei denen Wasser in verschiedenen Aggregatzuständen vom Himmel auf den Boden fällt. Niederschlag ist Regen, Schnee, Schneeregen oder Hagel. Die Niederschlagsskala ist in Millimetern (oder Zoll) Wasser abgestuft, die innerhalb von 24 Stunden auf 1 Quadratmeter fallen. 1 mm Regen entspricht 1 Liter Wasser pro Quadratmeter. |  
|![Niederschlagsschema](@site/static/img/plugins/weather/precipitation.png)|  
| Die **Temperatur** drückt die quantitative Wahrnehmung von Wärme und Kälte aus. Sie wird in Grad gemessen. In OsmAnd können Sie zwischen der Celsius- und der Fahrenheit-Skala wählen. |  
|![Temperaturschema](@site/static/img/plugins/weather/temperature.png)|  
| **Wind** ist die Luftbewegung, die durch die ungleichmäßige Erwärmung der Erde durch die Sonne und durch ihre eigene Rotation verursacht wird. Winde reichen von leichten Brisen bis zu Naturkatastrophen wie Hurrikanen und Tornados. In OsmAnd kann die Windgeschwindigkeit in Metern pro Sekunde (m/s), Kilometern pro Stunde (km/h), Meilen pro Stunde (mph) und Knoten (kt) angezeigt werden. |  
|![Windschema](@site/static/img/plugins/weather/wind.png)|  
| Die **Wolkenbedeckung** ist der durchschnittliche Anteil des Himmels, der von Wolken bedeckt ist, von einem bestimmten Ort aus betrachtet. Sie wird in % gemessen. |  
|![Wolkenschema](@site/static/img/plugins/weather/clouds.png)|  
| Der **Luftdruck** entsteht durch das Gewicht der Luft über dem Messpunkt. Er nimmt mit zunehmender Höhe ab. Der Luftdruck kann in Hektopascal (hPa), Millimeter Quecksilbersäule (mmHg) und Zoll Quecksilbersäule (inHg) angezeigt werden. |  
| ![Luftdruckschema](@site/static/img/plugins/weather/pressure.png) |  
| Die **Windanimation** umfasst dynamische Darstellungen, die Windrichtung und Windgeschwindigkeit in der Region zeigen. |  
| ![Windanimation](@site/static/img/plugins/weather/wind_annimation.gif) |  


### Karten kombinieren {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wetter-Ebenen kombinieren auf Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Wetter-Ebenen kombinieren auf Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wetter-Ebenen kombinieren auf iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Wetter-Ebenen kombinieren auf iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

Um umfassende Wetterinformationen zu erhalten, können Sie die Kartenebenen separat verwenden oder einfach kombinieren. Isolinien eines bestimmten Typs können ebenfalls zur Wetter-Ebene hinzugefügt werden. Tippen Sie einfach auf die Schaltfläche *Ebenen* oder *Isolinien* auf dem Bildschirm.


### Schnellaktionen für Ebenen {#quick-actions-for-layers}

![Schnellaktion Wetter-Ebenen](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Um die Sichtbarkeit von Wetter-Ebenen umzuschalten, können Sie die *Schnellaktions*-Schaltflächen auf dem Kartenbildschirm verwenden. Die allgemeinen Einstellungen zum Ein- und Ausblenden von Ebenen finden Sie im separaten [Bereich Wetter](#weather-forecast-screen) des *Hauptmenüs*. Im Artikel [Schnellaktion](../widgets/quick-action.md#configure-map) finden Sie eine Liste der Ebenen, die angezeigt werden können. Wenn Sie schnellen Zugriff auf diese Kartenkonfiguration benötigen, verwenden Sie das Werkzeug *Benutzerdefinierte Schaltfläche*.

- Gehen Sie zu [Aktion hinzufügen](../widgets/quick-action.md#custom-buttons): *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → Karte konfigurieren*.
- Fügen Sie eine oder mehrere Schnellaktions-Schaltflächen hinzu, um die Sichtbarkeit einer bestimmten Wetter-Ebene zu ändern.


## Offline-Vorhersage {#offline-forecast}

### Cache {#cache}

Wenn der Wetter-Tab geöffnet ist, werden die erforderlichen Wetterinformationen, sofern nichts anderes angegeben ist, aus dem Netzwerk heruntergeladen. Sie können die vorab geladene [Wettervorhersage](#download-forecast) auf Ihren Geräten verwenden. Die Wetterinformationen werden nach dem Herunterladen automatisch zwischengespeichert und können offline genutzt werden, bis die Vorhersage abläuft.  

:::tip
Auf Android-Geräten können Sie durch Tippen auf das *Wetter-Widget* prüfen, wann die Wetterdaten heruntergeladen wurden. Das OsmAnd-Entwicklungs-Plugin muss aktiviert sein.  
![Datum des Wetter-Caches Android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Vorhersage herunterladen {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Wetter-Plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Wetter-Plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Wetter-Plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Wetter-Plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

Für jedes Land können Sie eine **Offline-Vorhersage** (bis zu 7 Tage) herunterladen. Je näher sie am aktuellen Datum liegt, desto genauer ist sie. Wenn Sie die Wettervorhersage offline verwenden möchten, sollten Sie die Wetterdaten im Voraus herunterladen.  

Im Menü zum Herunterladen der Vorhersage können Sie Informationen abrufen und Parameter festlegen, um die Wetterdaten aktuell zu halten.  
  
- **Erstellt** (*Android*) / **Aktualisiert** (*iOS*). Zeigt, wann die letzte Aktualisierung erfolgte.  
- **Nächste Aktualisierung** (*iOS*). Wann die nächste Aktualisierung verfügbar sein wird.  
- **Größe** (*Android*) / **Größe der Aktualisierungen** (*iOS*). Zeigt die Größe aller Aktualisierungen.  
- Schaltfläche **Aktualisieren** (*Android*) / **Jetzt aktualisieren** (*iOS*). Wenn aktiv, können Sie die Wetterdaten manuell aktualisieren, ohne auf eine automatische Aktualisierung zu warten.  
- **Aktualisierungshäufigkeit** (*iOS*). Kann auf 12 Stunden, 24 Stunden oder wöchentlich eingestellt werden.  
- *Nur über WLAN aktualisieren* (*iOS*). Aktivieren Sie diese Option, wenn Sie für Downloads keine mobilen Daten verwenden möchten.  
- Schaltfläche **Entfernen** (*Papierkorb*) (*Android*) / **Vorhersage entfernen** (*iOS*). Ermöglicht es, alle Vorhersagedaten für diese Region zu löschen.
- Schaltfläche **Bearbeiten** (*Stift*) (*Android*). Ermöglicht es, die Wetterdatei umzubenennen.

**Hinweis:** Einige Länder, wie die USA und Kanada, verwenden eine einzige Offline-Vorhersagedatei für das gesamte Land. Das verringert die Anzahl der Downloads und vereinfacht die Verwaltung der Wetterdaten.

:::info  
Die Wetterdaten werden alle 6 Stunden aktualisiert (alle 4 Aktualisierungen von [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) und 3 von [ECMWF](https://www.ecmwf.int/)) und stehen in OsmAnd mit kurzer Verzögerung zur Verfügung, da die Berechnung vor der Veröffentlichung mehrere Stunden dauert (in der Regel gegen 07:00 UTC).  
:::


## Wetter-Widgets {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="shared_string_weather"/>*

![Wetter-Widgets auf Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Wetter-Widgets auf Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate ios="true" ids="shared_string_weather"/>*

![Wetter-Widgets auf iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

[Wetter-Widgets](../widgets/info-widgets.md#weather-widgets) wie Temperatur, Luftdruck, Wind, Wolken und Niederschlag zeigen die aktuellen Wetterdaten für den **zentralen Punkt der Karte**.

- Wetter-Widgets werden nur angezeigt, wenn der [Wetter-Bildschirm](#weather-forecast-screen) eingeschaltet ist.
- Um Wetter-Widgets zu aktivieren, wählen Sie im Hauptmenü den Punkt *Bildschirm konfigurieren*, das Panel, auf dem sie platziert werden sollen, und die gewünschten Widgets aus der Liste.


## Verwandte Artikel {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)