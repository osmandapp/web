---
source-hash: e4e558095bec4b84738b88edc8b62c95c94dec6c02803344bb5fccb2d6f00e34
sidebar_position: 17
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

:::info Kostenpflichtige Funktion
 <ProFeature/> Das Wetter-Plugin ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App.  
:::

Die interaktiven Wetterkarten-Ebenen in der OsmAnd-App ermöglichen es Ihnen, Temperatur, Luftdruck, Wolkenbedeckung, Windgeschwindigkeit und Niederschlag in Ihrer Stadt oder an jedem anderen Ort auf einer interaktiven Weltkarte zu überwachen. Das Wetter-Plugin liefert stündliche Wettervorhersagen für 7 Tage im Voraus direkt auf der OsmAnd-Karte. Wetterinformationen können auch für die Offline-Nutzung heruntergeladen werden.  

Die Datenquelle für das Wetter-Plugin ist das [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast), das vom Nationalen Wetterdienst der Vereinigten Staaten (NWS) und dem Europäischen Zentrum für mittelfristige Wettervorhersage ([ECMWF](https://www.ecmwf.int/)) betrieben wird.  


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die folgenden Einstellungen sind *erforderlich*, um das Wetter auf der OsmAnd-Karte anzuzeigen:

**1.** [**OsmAnd Pro-Abonnement** erwerben](../purchases/).

**2.** Das Wetter-Plugin im Abschnitt *Plugins* des *Hauptmenüs* [aktivieren](../plugins/#enable--disable).

**3.** Die **Maßeinheiten** für die Wetterereignisse [auswählen](#weather-settings).

**4.** Die **Wetter-Ebenen** auf der Karte über den Menüpunkt Wetter im Menü "Karte konfigurieren" [anzeigen](#customize-weather-layers) (denken Sie daran, herauszuzoomen).

**5.** Die **Wettervorhersage** für den ausgewählten Bereich [anzeigen](#weather-forecast-screen) (dieses Menü ermöglicht es, den Hauptbildschirm der OsmAnd-Karte frei von Wetter-Ebenen zu halten).

**6.** Die Wettervorhersage [herunterladen](#offline-forecast), wenn Sie sie offline verwenden möchten.

**7.** **Wetter-Widgets** [aktivieren](#weather-widgets), wenn Sie täglich aktuelle Wetterinformationen sehen möchten.  

:::caution Erforderliches Rendering
Das Wetter-Plugin ist nur mit der Karten-Rendering-Engine [Version 2](../personal/global-settings/#map-rendering-engine) (OpenGL) verfügbar.  
:::


## Wetter auf der Karte anzeigen {#display-weather-on-the-map}

### Wettervorhersage-Bildschirm {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Gehe zu: *Aktiviertes Plugin → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Wetter-Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_new_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Gehe zu: *Aktiviertes Plugin → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Wetter-Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

Das Hauptseitenmenü hat einen eigenen Menüpunkt **Wetter**, der schnellen Zugriff auf alle Wetter-Werkzeuge bietet. Der *Wettervorhersage-Bildschirm* zeigt Informationen über *Temperatur*, *Luftdruck*, *Windgeschwindigkeit*, *Wolkenbedeckung* und *Niederschlag* an.  

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

Sie können auswählen, welchen Wettervorhersage-Anbieter OsmAnd verwendet, um Daten auf dem Wetter-Bildschirm anzuzeigen:<br />
<Translate android="true" ids="shared_string_menu,shared_string_weather"/> → ⚙️ → *Datenquelle auswählen*

Zwei Wettervorhersage-Anbieter werden unterstützt:

[**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – die Standardquelle, betrieben von NOAA/NWS. Bietet vollständige Wetterdaten, einschließlich Temperatur-, Druck-, Feuchtigkeits-, Wind- und Wolken-Ebenen.

[**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – eine alternative Vorhersagequelle. Bietet hochwertige Daten zu Temperatur, Niederschlag und Druck, liefert jedoch keine Wind- oder Wolkeninformationen. Bei Verwendung von ECMWF werden nicht verfügbare Parameter als „–“ angezeigt, und die entsprechenden Wetter-Ebenen erscheinen deaktiviert.

Auswirkungen der Datenquelle auf die Wetteranzeige:
- Die Karte, Diagramme, Zeitleiste und Wetterwerte auf dem Bildschirm werden sofort nach dem Wechsel der Quelle aktualisiert.
- Es werden nur die Parameter angezeigt, die für den ausgewählten Anbieter verfügbar sind.
- Wetter-Widgets aktualisieren sich automatisch, um die gewählte Quelle zu verwenden.
- Wenn Sie zuvor eine Wettervorhersage heruntergeladen haben, verwendet OsmAnd die Daten, die der ausgewählten Quelle entsprechen.
- GFS und ECMWF verwenden separate Caches. Der Wechsel der Quelle lädt oder aktualisiert die relevanten Wetter-Tiles.

### Wetter-Ebenen anpassen {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Gehe zu: *Aktiviertes Plugin → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Wetter-Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Gehe zu: *Aktiviertes Plugin → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Wetter-Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

Um Wetter-Ebenen auf dem OsmAnd-Kartenbildschirm anzuzeigen, müssen Sie das Menü *Karte konfigurieren* verwenden. Gehen Sie zum Menü, suchen Sie den Punkt *Wetter* in der Liste (nur verfügbar, wenn das Plugin aktiviert ist) und tippen Sie darauf.  

In diesem Menü können Sie die **Sichtbarkeit** und die [Einstellungen](#weather-settings) für jede Ebene ändern, die Art der Höhenlinien auswählen und die [offline 7-Tage-Wettervorhersage](#offline-forecast) herunterladen (*hier nur für Android verfügbar*).


### Wetter-Einstellungen {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *Hauptmenü → Plugins → Wetter → Einstellungen*
- *Hauptmenü → Einstellungen → Profil → Plugin-Einstellungen → Wetter*

![Wetter-Einstellungen Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Wetter-Einstellungen 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Hauptmenü → Einstellungen → Profil → Plugins → Wetter*

![Wetter-Einstellungen iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Wetter-Einstellungen iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>  

Es ist wichtig zu entscheiden, in welchen Maßeinheiten Sie die [Wetterdaten](#weather-layers) auf der Karte und im Bereich [Wetter-Widgets](#weather-widgets) des Bildschirms sehen möchten. Sie können für jeden Parameter geeignete Maßeinheiten auswählen oder Standardwerte verwenden (*nur iOS*). In der iOS-Version der OsmAnd-App können Sie auch die Offline-Vorhersageoption aktivieren, um die Nutzung mobiler Daten während der Reise zu vermeiden.  

:::note
In der iOS-Version von OsmAnd können Sie die Maßeinheiten und die Transparenzstufe in dem Menü ändern, das sich nach einem langen Tippen auf das Symbol der gewünschten Kartenebene öffnet.  
:::

### Wetter-Ebenen {#weather-layers}

Alle Wetterdaten werden als separate Kartenebenen dargestellt. Um die Wetter-Ebenen auf der Karte zu sehen, müssen Sie herauszoomen, sie sind nur auf den Zoomstufen 2-12 verfügbar. Wetter-Ebenen verwenden [Wetterpaletten](../personal/color-palette-schemes.md#weather), um die Karte einzufärben. Diese Paletten können bei Bedarf [geändert](../personal/color-palette-schemes.md#edit-palette-file) werden.

| |  
|------------|  
| Die **Niederschlagsebene** zeigt Informationen über Wetterereignisse an, bei denen Wasser in verschiedenen Aggregatzuständen vom Himmel auf die Erde fällt. Niederschlag ist Regen, Schnee, Schneeregen oder Hagel. Die Niederschlagsskala ist in Millimetern (oder Zoll) Wasser angegeben, das in 24 Stunden auf 1 Quadratmeter fällt. 1 mm Regen entspricht 1 Liter Wasser pro 1 Quadratmeter. |  
|![Niederschlagsschema](@site/static/img/plugins/weather/precipitation.png)|  
| **Temperatur** drückt die quantitative Wahrnehmung von heiß und kalt aus. Sie wird in Grad gemessen. In OsmAnd können Sie zwischen der Celsius- und der Fahrenheit-Skala wählen. |  
|![Temperaturschema](@site/static/img/plugins/weather/temperature.png)|  
| **Wind** ist die Bewegung von Luft, die durch die ungleichmäßige Erwärmung der Erde durch die Sonne und ihre eigene Rotation verursacht wird. Winde können von leichten Brisen bis zu Naturkatastrophen wie Hurrikanen und Tornados reichen. In OsmAnd kann die Windgeschwindigkeit in Metern pro Sekunde (m/s), Kilometern pro Stunde (km/h), Meilen pro Stunde (mph) und Knoten (kt) angezeigt werden. |  
|![Windschema](@site/static/img/plugins/weather/wind.png)|  
| **Wolkenbedeckung** ist der durchschnittliche Anteil des Himmels, der von Wolken bedeckt ist, wenn er von einem bestimmten Ort aus beobachtet wird. Sie wird in % gemessen. |  
|![Wolkenschema](@site/static/img/plugins/weather/clouds.png)|  
| **Luftdruck** wird durch das Gewicht der Luft über dem Messpunkt verursacht. Er nimmt mit zunehmender Höhe ab. Der Luftdruck kann in Hektopascal (hPa), Millimeter Quecksilbersäule (mmHg) und Zoll Quecksilbersäule (inHg) angezeigt werden. |  
| ![Druckschema](@site/static/img/plugins/weather/pressure.png) |  
| Die **Windanimation** umfasst dynamische Darstellungen, die Windrichtung und -geschwindigkeit in der Region zeigen. |  
| ![Windanimation](@site/static/img/plugins/weather/wind_annimation.gif) |  


### Karten kombinieren {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wetter-Ebenen auf Android kombinieren](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Wetter-Ebenen auf Android kombinieren](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wetter-Ebenen auf iOS kombinieren](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Wetter-Ebenen auf iOS kombinieren](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

Um umfassende Wetterinformationen zu erhalten, können Sie die Kartenebenen separat verwenden oder einfach kombinieren. Isolinien eines bestimmten Typs können ebenfalls zur Wetter-Ebene hinzugefügt werden. Tippen Sie einfach auf die Schaltfläche *Ebenen* oder *Isolinien* auf dem Bildschirm.


### Schnellaktionen für Ebenen {#quick-actions-for-layers}

![QA Wetter-Ebenen](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Um die Sichtbarkeit von Wetter-Ebenen umzuschalten, können Sie die *Schnellaktions*-Schaltflächen auf dem Kartenbildschirm verwenden. Die allgemeinen Einstellungen zum Ein- oder Ausblenden von Ebenen finden Sie im separaten [Wetter-Abschnitt](#weather-forecast-screen) des *Hauptmenüs*. Im Artikel [Schnellaktion](../widgets/quick-action.md#configure-map) finden Sie eine Liste der zur Anzeige verfügbaren Ebenen. Wenn Sie schnellen Zugriff auf diese Kartenkonfiguration benötigen, verwenden Sie das Werkzeug *Benutzerdefinierte Schaltfläche*.

- Gehen Sie zu [Aktion hinzufügen](../widgets/quick-action.md#custom-buttons): *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → Karte konfigurieren*.
- Fügen Sie eine oder mehrere QA-Schaltflächen hinzu, um die Sichtbarkeit einer bestimmten Wetter-Ebene zu ändern.


## Offline-Vorhersage {#offline-forecast}

### Cache {#cache}

Wenn der Wetter-Tab geöffnet ist, werden die erforderlichen Wetterinformationen aus dem Netzwerk heruntergeladen, sofern nicht anders angegeben. Sie können die vorgeladene [Wettervorhersage](#download-forecast) auf Ihren Geräten verwenden. Die Wetterinformationen werden nach dem Herunterladen automatisch zwischengespeichert und können offline verwendet werden, bis die Vorhersage abläuft.  

:::tip
Auf Android-Geräten können Sie überprüfen, wann Wetterdaten heruntergeladen wurden, indem Sie auf das *Wetter-Widget* tippen. Das OsmAnd-Entwicklungs-Plugin muss aktiviert sein.  
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

Für jedes Land können Sie eine **Offline-Vorhersage** (bis zu 7 Tage) herunterladen. Je näher das Datum am aktuellen Tag liegt, desto genauer ist die Vorhersage. Wenn Sie die Wettervorhersage offline nutzen möchten, sollten Sie die Wetterdaten im Voraus herunterladen.  

Im Menü zum Herunterladen der Vorhersage können Sie Informationen abrufen und Parameter einstellen, um die Wetterdaten auf dem neuesten Stand zu halten.  
  
- **Erstellt** (*Android*) / **Aktualisiert** (*iOS*). Zeigt an, wann die letzte Aktualisierung durchgeführt wurde.  
- **Nächstes Update** (*iOS*). Wann das nächste Update verfügbar sein wird.  
- **Größe** (*Android*) / **Update-Größe** (*iOS*). Zeigt die Größe aller Updates an.  
- **Aktualisieren**-Schaltfläche (*Android*) / **Jetzt aktualisieren** (*iOS*). Wenn aktiv, können Sie Wetterdaten manuell aktualisieren, ohne auf eine automatische Aktualisierung zu warten.  
- **Aktualisierungshäufigkeit** (*iOS*). Kann auf 12-Stunden, 24-Stunden oder wöchentlich eingestellt werden.  
- *Nur über WLAN aktualisieren* (*iOS*). Aktivieren Sie diese Option, wenn Sie keine mobilen Daten für Downloads verwenden möchten.  
- **Entfernen** *Mülleimer*-Schaltfläche (*Android*) / **Vorhersage entfernen** (*iOS*). Ermöglicht das Löschen aller Vorhersagedaten für diese Region.
- **Bearbeiten** *Bleistift*-Schaltfläche (*Android*). Ermöglicht das Umbenennen der Wetterdatei.

**Hinweis:** Einige Länder, wie die USA und Kanada, verwenden eine einzige Offline-Vorhersagedatei für das gesamte Land. Dies reduziert die Anzahl der Downloads und vereinfacht das Management der Wetterdaten.

:::info  
Wetterdaten werden alle 6 Stunden aktualisiert (alle 4 Updates von [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) und 3 von [ECMWF](https://www.ecmwf.int/)) und werden in OsmAnd mit einer kurzen Verzögerung verfügbar, da der Berechnungsprozess vor der Veröffentlichung mehrere Stunden dauert (normalerweise gegen 07:00 UTC).  
:::


## Wetter-Widgets {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate android="true" ids="shared_string_weather"/>*

![Wetter-Widgets auf Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Wetter-Widgets auf Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Wählen Sie ein Panel → <Translate ios="true" ids="shared_string_weather"/>*

![Wetter-Widgets auf iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

[Wetter-Widgets](../widgets/info-widgets.md#weather-widgets) wie Temperatur, Luftdruck, Wind, Wolken und Niederschlag zeigen die aktuellen Wetterdaten für den **zentralen Punkt auf der Karte**.

- Wetter-Widgets werden nur angezeigt, wenn der [Wetter-Bildschirm](#weather-forecast-screen) eingeschaltet ist.
- Um Wetter-Widgets zu aktivieren, wählen Sie den Menüpunkt *Bildschirm konfigurieren*, das Panel, auf dem sie platziert werden sollen, und die gewünschten Widgets aus der Liste.


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)