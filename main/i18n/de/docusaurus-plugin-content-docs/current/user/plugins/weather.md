---
source-hash: e5fd3ea3059108d94fc75d50becf312a8c006b80209c72a142b97f415bb426ca
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

:::info Kostenpflichtige Funktion
 <ProFeature/> Das Wetter-Plugin ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App.
:::

Die interaktiven Wetterkarten-Ebenen in der OsmAnd-App ermöglichen es Ihnen, Temperatur, Luftdruck, Wolkenbedeckung, Windgeschwindigkeit und Niederschlag in Ihrer Stadt oder an jedem anderen Ort auf einer interaktiven globalen Karte zu überwachen. Das Wetter-Plugin bietet stündliche Wettervorhersagen für 7 Tage im Voraus direkt auf der OsmAnd-Karte. Wetterinformationen können auch für die Offline-Nutzung heruntergeladen werden.

Die Datenquelle für das Wetter-Plugin ist das [Global Forecasting System](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast), das vom United States National Weather Service (NWS) betrieben wird, und das Europäische Zentrum für mittelfristige Wettervorhersagen ([ECMWF](https://www.ecmwf.int/)).


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Die folgenden Einstellungen sind *erforderlich*, um das Wetter auf der OsmAnd-Karte anzuzeigen:

**1.** [OsmAnd Pro-Abonnement erwerben](../purchases/).

**2.** Das Wetter-Plugin im Abschnitt *Plugins* des *Hauptmenüs* [aktivieren](../plugins/#enable--disable).

**3.** Die [Maßeinheiten](#weather-settings) für die Wetterereignisse auswählen.

**4.** Die [Wetterebenen](#customize-weather-layers) auf der Karte über den Menüpunkt Wetter im Menü Karte konfigurieren anzeigen (vergessen Sie nicht, herauszuzoomen).

**5.** Die [Wettervorhersage](#weather-forecast-screen) für den ausgewählten Bereich anzeigen (dieses Menü ermöglicht es, den Hauptbildschirm der OsmAnd-Karte nicht mit Wetterebenen zu überladen).

**6.** Die [Wettervorhersage herunterladen](#offline-forecast), wenn Sie sie offline verwenden möchten.

**7.** Die [Wetter-Widgets](#weather-widgets) aktivieren, wenn Sie täglich aktuelle Wetterinformationen sehen möchten.

:::caution Erforderliche Darstellung
Das Wetter-Plugin ist nur mit der Karten-Rendering-Engine [Version 2](../personal/global-settings/#map-rendering-engine) (OpenGL) verfügbar.
:::


## Wetter auf der Karte anzeigen {#display-weather-on-the-map}

### Wettervorhersage-Bildschirm {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *Aktiviertes Plugin → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *Aktiviertes Plugin → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>

</Tabs>

Das Hauptseitenmenü verfügt über einen speziellen Menüpunkt **Wetter**, der schnellen Zugriff auf alle Wettertools bietet. Der *Wettervorhersage-Bildschirm* zeigt Informationen zu *Temperatur*, *Luftdruck*, *Windgeschwindigkeit*, *Wolkenbedeckung* und *Niederschlag*.

Am unteren Bildschirmrand befindet sich die *Wetter-Symbolleiste*. Sie können die Tagestasten und den Zeitschieberegler verwenden, um die genaue Zeit einzustellen, zu der die Wettervorhersage angezeigt werden soll.

### Wetterebenen anpassen {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *Aktiviertes Plugin → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *Aktiviertes Plugin → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>

</Tabs>

Um Wetterebenen auf dem OsmAnd-Kartenbildschirm anzuzeigen, müssen Sie das Menü *Karte konfigurieren* verwenden. Gehen Sie zum Menü, suchen Sie den Punkt *Wetter* in der Liste (nur verfügbar, wenn das Plugin aktiviert ist) und tippen Sie darauf.

In diesem Menü können Sie die **Sichtbarkeit** und [Einstellungen](#weather-settings) für jede Ebene ändern, den Typ der Höhenlinien auswählen und die [Offline-7-Tage-Wettervorhersage](#offline-forecast) herunterladen (*hier nur für Android verfügbar*).


### Wetter-Einstellungen {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *Hauptmenü → Plugins → Wetter → Einstellungen*
- *Hauptmenü → Einstellungen → Profil → Plugin-Einstellungen → Wetter*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Hauptmenü → Einstellungen → Profil → Plugins → Wetter*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>

Es ist wichtig zu entscheiden, in welchen Maßeinheiten Sie die [Wetterdaten](#weather-layers) auf der Karte und im Bereich [Wetter-Widgets](#weather-widgets) des Bildschirms sehen möchten. Sie können für jeden Parameter geeignete Maßeinheiten auswählen oder Standardwerte verwenden (*nur iOS*). In der iOS-Version der OsmAnd-App können Sie auch die Option für die Offline-Vorhersage aktivieren, um die Nutzung des mobilen Datenverkehrs während der Reise zu vermeiden.

:::note
In der iOS-Version von OsmAnd können Sie Maßeinheiten und Transparenzstufe im Menü ändern, das sich nach einem langen Tippen auf das Symbol der gewünschten Kartenebene öffnet.
:::

### Wetterebenen {#weather-layers}

Alle Wetterdaten werden als separate Kartenebenen dargestellt. Um die Wetterebenen auf der Karte zu sehen, müssen Sie herauszoomen, sie sind nur auf Zoomstufen 2-12 verfügbar. Wetterebenen verwenden [Wetterpaletten](../personal/color-palette-schemes.md#weather), um die Karte einzufärben, diese Paletten können bei Bedarf [geändert](../personal/color-palette-schemes.md#edit-palette-file) werden.

| |
|------------|
| **Niederschlagsebene** zeigt Informationen über Wetterereignisse an, wenn Wasser in verschiedenen Aggregatzuständen vom Himmel auf den Boden fällt. Niederschlag ist Regen, Schnee, Graupel oder Hagel. Die Niederschlagsskala ist in Millimetern (oder Zoll) Wasser abgestuft, das in 24 Stunden auf 1 Quadratmeter fällt. 1 mm Regen entspricht 1 Liter Wasser pro 1 Quadratmeter. |
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|
| **Temperatur** drückt die quantitative Wahrnehmung von heiß und kalt aus. Sie wird in Grad gemessen. In OsmAnd können Sie zwischen Celsius- und Fahrenheit-Skala wählen. |
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|
| **Wind** ist die Bewegung der Luft, verursacht durch die ungleichmäßige Erwärmung der Erde durch die Sonne und ihre eigene Rotation. Winde können von einer leichten Brise bis zu Naturkatastrophen wie Hurrikanen und Tornados reichen. In OsmAnd kann die Windgeschwindigkeit in Metern pro Sekunde (m/s), Kilometern pro Stunde (km/h), Meilen pro Stunde (mph) und Knoten (kt) angezeigt werden. |
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|
| **Wolkenbedeckung** ist der durchschnittliche Anteil des Himmels, der von Wolken bedeckt ist, wenn er von einem bestimmten Ort aus beobachtet wird. Sie wird in % gemessen. |
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|
| **Atmosphärischer Druck** wird durch das Gewicht der Luft über dem Messpunkt verursacht. Er nimmt mit zunehmender Höhe ab. Der atmosphärische Druck kann in Hektopascal (hPa), Millimeter Quecksilbersäule (mmHg) und Zoll Quecksilbersäule (inHg) angezeigt werden. |
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |
| **Windanimation** beinhaltet dynamische Darstellungen, die Windrichtung und -geschwindigkeit in der Region zeigen. |
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |


### Karten kombinieren {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)

</TabItem>

</Tabs>

Um umfassende Wetterinformationen zu erhalten, können Sie die Kartenebenen separat verwenden oder sie einfach kombinieren. Isolinien eines bestimmten Typs können auch zur Wetterebene hinzugefügt werden. Tippen Sie einfach auf die Schaltfläche *Ebenen* oder *Isolinien* auf dem Bildschirm.


### Schnellaktionen für Ebenen {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Um die Sichtbarkeit von Wetterebenen umzuschalten, können Sie die *Schnellaktions*-Schaltflächen auf dem Kartenbildschirm verwenden. Die allgemeinen Einstellungen zum Anzeigen oder Ausblenden von Ebenen finden Sie im separaten [Wetterbereich](#weather-forecast-screen) des *Hauptmenüs*. Im Artikel [Schnellaktion](../widgets/quick-action.md#configure-map) finden Sie eine Liste der zur Anzeige verfügbaren Ebenen. Wenn Sie schnellen Zugriff auf diese Kartenkonfiguration benötigen, verwenden Sie das Tool *Benutzerdefinierte Schaltfläche*.

- Gehe zu [Aktion hinzufügen](../widgets/quick-action.md#custom-buttons): *Menü → Bildschirm konfigurieren → Benutzerdefinierte Schaltflächen → Schnellaktion → Aktion hinzufügen → Karte konfigurieren*.
- Fügen Sie eine oder mehrere QA-Schaltflächen hinzu, um die Sichtbarkeit einer bestimmten Wetterebene zu ändern.


## Offline-Vorhersage {#offline-forecast}

### Cache {#cache}

Wenn die Registerkarte Wetter geöffnet ist, werden, sofern nicht anders angegeben, die erforderlichen Wetterinformationen aus dem Netzwerk heruntergeladen. Sie können die vorab geladene [Wettervorhersage](#download-forecast) auf Ihren Geräten verwenden. Die Wetterinformationen werden nach dem Herunterladen automatisch zwischengespeichert und können offline verwendet werden, bis die Vorhersage abläuft.

:::tip
Auf Android-Geräten können Sie überprüfen, wann Wetterdaten heruntergeladen wurden, indem Sie auf das *Wetter-Widget* tippen. Das OsmAnd Development-Plugin muss aktiviert sein.
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)
:::

### Vorhersage herunterladen {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>

Für jedes Land können Sie die **Offline-Vorhersage** (bis zu 7 Tage) herunterladen. Je näher sie am aktuellen Datum liegt, desto genauer ist sie. Wenn Sie die Wettervorhersage offline verwenden möchten, sollten Sie die Wetterdaten im Voraus herunterladen.

Im Menü zum Herunterladen der Vorhersage können Sie Informationen abrufen und Parameter festlegen, um die Wetterdaten auf dem neuesten Stand zu halten.

- **Erstellt** (*Android*) / **Aktualisiert** (*iOS*). Zeigt an, wann die letzte Aktualisierung erfolgte.
- **Nächste Aktualisierung** (*iOS*). Wann die nächste Aktualisierung verfügbar sein wird.
- **Größe** (*Android*) / **Aktualisierungsgröße** (*iOS*). Zeigt die Größe aller Aktualisierungen an.
- Schaltfläche **Aktualisieren** (*Android*) / **Jetzt aktualisieren** (*iOS*). Wenn aktiv, können Sie Wetterdaten manuell aktualisieren, ohne auf eine automatische Aktualisierung zu warten.
- **Aktualisierungshäufigkeit** (*iOS*). Kann auf 12-Stunden, 24-Stunden oder wöchentlich eingestellt werden.
- *Nur über Wi-Fi aktualisieren* (*iOS*). Aktivieren Sie diese Option, wenn Sie keine mobilen Daten für Downloads verwenden möchten.
- Schaltfläche **Entfernen** *Mülleimer* (*Android*) / **Vorhersage entfernen** (*iOS*). Ermöglicht das Löschen aller Vorhersagedaten für diese Region.
- Schaltfläche **Bearbeiten** *Bleistift* (*Android*). Ermöglicht das Umbenennen der Wetterdatei.

:::info
OsmAnd erstellt alle 6 Stunden eine neue Vorhersage.
:::


## Wetter-Widgets {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Gehe zu: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Ein Panel auswählen → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Gehe zu: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Ein Panel auswählen → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)

</TabItem>

</Tabs>

[Wetter-Widgets](../widgets/info-widgets.md#weather-widgets) wie Temperatur, Luftdruck, Wind, Wolken und Niederschlag zeigen die aktuellen Wetterdaten für den **zentralen Punkt auf der Karte** an.

- Wetter-Widgets werden nur angezeigt, wenn der [Wetterbildschirm](#weather-forecast-screen) eingeschaltet ist.
- Um Wetter-Widgets zu aktivieren, wählen Sie den Menüpunkt *Bildschirm konfigurieren* im Hauptmenü, das Panel, auf dem sie platziert werden sollen, und die gewünschten Widgets aus der Liste.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: November 2024*