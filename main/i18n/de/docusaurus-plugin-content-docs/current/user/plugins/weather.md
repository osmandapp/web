---
source-hash: 2f59b1c67bc9886426af5d0c0cd282853675b77154ff95cd42a65f37a70509cb
sidebar_position: 17
title: Wetter
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



## Überblick {#overview}

:::info Bezahlfunktion
 <ProFeature/> Das Wetter-Plugin ist eine [Bezahlfunktion](../purchases/index.md) der OsmAnd-App.
:::

Die interaktiven Wetterkarten-Ebenen in der OsmAnd-App ermöglichen Ihnen die Überwachung von Temperatur, Luftdruck, Bewölkung, Windgeschwindigkeit und Niederschlag in Ihrer Stadt oder an einem beliebigen anderen Ort auf einer interaktiven globalen Karte. Das Wetter-Plugin bietet stündliche Wettervorhersagen für 7 Tage im Voraus direkt auf der OsmAnd-Karte. Wetterinformationen können auch für die Offline-Nutzung heruntergeladen werden.

Die Datenquelle für das Wetter-Plugin ist das [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast), das vom United States National Weather Service (NWS) und dem European Centre for Medium-Range Weather Forecasts ([ECMWF](https://www.ecmwf.int/)) betrieben wird.


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die folgenden Einstellungen sind *erforderlich*, um das Wetter auf der OsmAnd-Karte anzuzeigen:

**1.** [Erwerben Sie ein **OsmAnd Pro-Abonnement**](../purchases/).

**2.** [Aktivieren Sie](../plugins/#enable--disable) das Wetter-Plugin im Abschnitt *Plugins* des *Hauptmenüs*.

**3.** [Wählen Sie die **Maßeinheiten**](#weather-settings) für die Wetterereignisse.

**4.** [Zeigen Sie die **Wetter-Layer**](#customize-weather-layers) auf der Karte an, indem Sie den Menüpunkt Wetter im Menü Karte konfigurieren verwenden (denken Sie daran, herauszuzoomen).

**5.** [Zeigen Sie die **Wettervorhersage**](#weather-forecast-screen) für das ausgewählte Gebiet an (dieses Menü ermöglicht es, den Hauptbildschirm der OsmAnd-Karte nicht mit Wetter-Layern zu überladen).

**6.** [Laden Sie](#offline-forecast) die Wettervorhersage herunter, wenn Sie sie offline verwenden möchten.

**7.** [Aktivieren Sie **Wetter-Widgets**](#weather-widgets), wenn Sie täglich aktuelle Wetterinformationen sehen möchten.

:::caution Erforderliches Rendering
Das Wetter-Plugin ist nur mit der Karten-Rendering-Engine [Version 2](../personal/global-settings/#map-rendering-engine) (OpenGL) verfügbar.
:::


## Wetter auf der Karte anzeigen {#display-weather-on-the-map}

### Wettervorhersagebildschirm {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *Aktiviertes Plugin → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Wetter-Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *Aktiviertes Plugin → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Wetter-Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>

</Tabs>

Das Hauptseitenmenü verfügt über einen eigenen Menüpunkt **Wetter**, der schnellen Zugriff auf alle Wetterwerkzeuge bietet. Der *Wettervorhersagebildschirm* zeigt Informationen über *Temperatur*, *Luftdruck*, *Windgeschwindigkeit*, *Bewölkung* und *Niederschlag*.

Am unteren Bildschirmrand befindet sich die *Wetter-Symbolleiste*. Mit den Tagesschaltflächen und dem Zeitschieberegler können Sie die genaue Uhrzeit einstellen, zu der die Wettervorhersage angezeigt werden soll.

### Wetter-Layer anpassen {#customize-weather-layers}

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

Um Wetter-Layer auf dem OsmAnd-Kartenbildschirm anzuzeigen, müssen Sie das Menü *Karte konfigurieren* verwenden. Gehen Sie zu diesem Menü, suchen Sie den Eintrag *Wetter* in der Liste (nur verfügbar, wenn das Plugin aktiviert ist) und tippen Sie darauf.

In diesem Menü können Sie die **Sichtbarkeit** und [Einstellungen](#weather-settings) für jeden Layer ändern, die Art der Höhenlinien auswählen und die [Offline-7-Tages-Wettervorhersage](#offline-forecast) herunterladen (*hier nur für Android verfügbar*).


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

Es ist wichtig zu entscheiden, in welchen Maßeinheiten Sie die [Wetterdaten](#weather-layers) auf der Karte und im Bereich [Wetter-Widgets](#weather-widgets) des Bildschirms sehen möchten. Sie können für jeden Parameter geeignete Maßeinheiten auswählen oder Standardwerte verwenden (*nur iOS*). In der iOS-Version der OsmAnd-App können Sie auch die Option für Offline-Vorhersage aktivieren, um bei Reisen keine mobilen Daten zu verbrauchen.

:::note
In der iOS-Version von OsmAnd können Sie Maßeinheiten und Transparenzstufe im Menü ändern, das sich nach langem Tippen auf das Symbol des gewünschten Karten-Layers öffnet.
:::

### Wetter-Layer {#weather-layers}

Alle Wetterdaten werden als separate Karten-Layer dargestellt. Um die Wetter-Layer auf der Karte zu sehen, müssen Sie herauszoomen, sie sind nur auf den Zoomstufen 2-12 verfügbar. Wetter-Layer verwenden [Wetter-Paletten](../personal/color-palette-schemes.md#weather), um die Karte einzufärben, diese Paletten können bei Bedarf [geändert](../personal/color-palette-schemes.md#edit-palette-file) werden.

| |
|------------|
| **Niederschlags-Layer** zeigt Informationen über Wetterereignisse an, bei denen Wasser in verschiedenen Aggregatzuständen vom Himmel auf den Boden fällt. Niederschlag ist Regen, Schnee, Graupel oder Hagel. Die Niederschlagsskala ist in Millimetern (oder Zoll) Wasser abgestuft, das in 24 Stunden auf 1 Quadratmeter fällt. 1 mm Regen entspricht 1 Liter Wasser pro 1 Quadratmeter. |
|![Niederschlags-Schema](@site/static/img/plugins/weather/precipitation.png)|
| **Temperatur** drückt die quantitative Wahrnehmung von heiß und kalt aus. Sie wird in Grad gemessen. In OsmAnd können Sie zwischen Celsius- und Fahrenheit-Skala wählen. |
|![Temperatur-Schema](@site/static/img/plugins/weather/temperature.png)|
| **Wind** ist die Bewegung der Luft, die durch die ungleichmäßige Erwärmung der Erde durch die Sonne und ihre eigene Rotation verursacht wird. Winde können von leichten Brisen bis hin zu Naturkatastrophen wie Hurrikanen und Tornados reichen. In OsmAnd kann die Windgeschwindigkeit in Metern pro Sekunde (m/s), Kilometern pro Stunde (km/h), Meilen pro Stunde (mph) und Knoten (kt) angezeigt werden. |
|![Wind-Schema](@site/static/img/plugins/weather/wind.png)|
| **Bewölkung** ist der durchschnittliche Anteil des Himmels, der bei Beobachtung von einem bestimmten Ort aus von Wolken bedeckt ist. Sie wird in % gemessen. |
|![Bewölkungs-Schema](@site/static/img/plugins/weather/clouds.png)|
| **Luftdruck** wird durch das Gewicht der Luft über dem Messpunkt verursacht. Er nimmt mit zunehmender Höhe ab. Der Luftdruck kann in Hektopascal (hPa), Millimeter Quecksilbersäule (mmHg) und Zoll Quecksilbersäule (inHg) angezeigt werden. |
| ![Druck-Schema](@site/static/img/plugins/weather/pressure.png) |
| **Wind-Animation** enthält dynamische Darstellungen, die Windrichtung und -geschwindigkeit in der Region zeigen. |
| ![Wind-Animation](@site/static/img/plugins/weather/wind_annimation.gif) |


### Karten kombinieren {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wetter-Layer auf Android kombinieren](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Wetter-Layer auf Android kombinieren](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wetter-Layer auf iOS kombinieren](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Wetter-Layer auf iOS kombinieren](@site/static/img/plugins/weather/weather_contours.png)

</TabItem>

</Tabs>

Um umfassende Wetterinformationen zu erhalten, können Sie die Karten-Layer separat verwenden oder sie einfach kombinieren. Isolinien eines bestimmten Typs können ebenfalls zum Wetter-Layer hinzugefügt werden. Tippen Sie einfach auf die Schaltfläche *Layer* oder *Isolinien* auf dem Bildschirm.


### Schnelle Aktionen für Layer {#quick-actions-for-layers}

![QA Wetter-Layer](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Um die Sichtbarkeit von Wetter-Layern zu wechseln, können Sie die *Schnelle Aktionen*-Schaltflächen auf dem Kartenbildschirm verwenden. Die allgemeinen Einstellungen zum Anzeigen oder Ausblenden von Layern finden Sie im separaten [Wetter-Abschnitt](#weather-forecast-screen) des *Hauptmenüs*. Im Artikel [Schnelle Aktionen](../widgets/quick-action.md#configure-map) finden Sie eine Liste der für die Anzeige verfügbaren Layer. Wenn Sie schnellen Zugriff auf diese Kartenkonfiguration benötigen, verwenden Sie das Werkzeug *Benutzerdefinierte Schaltfläche*.

- Gehen Sie zu [Aktion hinzufügen](../widgets/quick-action.md#custom-buttons): *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnelle Aktion → Aktion hinzufügen → Karte konfigurieren*.
- Fügen Sie eine oder mehrere QA-Schaltflächen hinzu, um die Sichtbarkeit eines bestimmten Wetter-Layers zu ändern.


## Offline-Vorhersage {#offline-forecast}

### Cache {#cache}

Wenn die Registerkarte Wetter geöffnet ist, werden, sofern nicht anders angegeben, die erforderlichen Wetterinformationen aus dem Netzwerk heruntergeladen. Sie können die vorab geladene [Wettervorhersage](#download-forecast) auf Ihren Geräten verwenden. Die Wetterinformationen werden nach dem Herunterladen automatisch zwischengespeichert und können offline verwendet werden, bis die Vorhersage abläuft.

:::tip
Auf Android-Geräten können Sie überprüfen, wann Wetterdaten heruntergeladen wurden, indem Sie auf das *Wetter-Widget* tippen. Das OsmAnd Development Plugin muss aktiviert sein.
![Datum des Wetter-Cache android](@site/static/img/plugins/weather/weather_cash_andr.png)
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

Für jedes Land können Sie eine **Offline-Vorhersage** herunterladen (bis zu 7 Tage). Je näher sie am aktuellen Datum liegt, desto genauer ist sie. Wenn Sie die Wettervorhersage offline verwenden möchten, sollten Sie die Wetterdaten im Voraus herunterladen.

Im Menü zum Herunterladen der Vorhersage können Sie Informationen erhalten und Parameter festlegen, um die Wetterdaten auf dem neuesten Stand zu halten.

- **Erstellt** (*Android*) / **Aktualisiert** (*iOS*). Zeigt an, wann die letzte Aktualisierung erfolgte.
- **Nächste Aktualisierung** (*iOS*). Wann die nächste Aktualisierung verfügbar sein wird.
- **Größe** (*Android*) / **Aktualisierungsgröße** (*iOS*). Zeigt die Größe aller Aktualisierungen an.
- Schaltfläche **Aktualisieren** (*Android*) / **Jetzt aktualisieren** (*iOS*). Wenn aktiv, können Sie Wetterdaten manuell aktualisieren, ohne auf eine automatische Aktualisierung zu warten.
- **Aktualisierungsfrequenz** (*iOS*). Kann auf 12 Stunden, 24 Stunden oder wöchentlich eingestellt werden.
- *Nur über WLAN aktualisieren* (*iOS*). Aktivieren Sie diese Option, wenn Sie keine mobilen Daten für Downloads verwenden möchten.
- Schaltfläche **Entfernen** *Papierkorb* (*Android*) / **Vorhersage entfernen** (*iOS*). Ermöglicht das Löschen aller Vorhersagedaten für diese Region.
- Schaltfläche **Bearbeiten** *Bleistift* (*Android*). Ermöglicht das Umbenennen der Wetterdatei.

:::info
OsmAnd generiert alle 6 Stunden eine neue Vorhersage.
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

[Wetter-Widgets](../widgets/info-widgets.md#weather-widgets) wie Temperatur, Luftdruck, Wind, Bewölkung und Niederschlag zeigen die aktuellen Wetterdaten für den **zentralen Punkt auf der Karte**.

- Wetter-Widgets werden nur angezeigt, wenn der [Wetterbildschirm](#weather-forecast-screen) eingeschaltet ist.
- Um Wetter-Widgets zu aktivieren, wählen Sie den Menüpunkt *Bildschirm konfigurieren* im Hauptmenü, das Panel, auf dem sie platziert werden sollen, und die gewünschten Widgets aus der Liste aus.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: November 2024*