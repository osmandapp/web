---
source-hash: aa3c29fb6cbe9138714a34b48b5eaee74f61c4713d9c46b72e2d28a1d615ca35
sidebar_position: 4
sidebar_label:  Weather
title: Weather on the Web
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


## Overview {#overview}

Die Wetter-Funktion auf der OsmAnd Web-Karte zeigt aktuelle Wetterbedingungen und Prognosedaten direkt auf der Karte an. Sie bietet Zugriff auf Wetterinformationen aus mehreren Prognosequellen, unterstützt die Zeitanpassung und ermöglicht das Anzeigen von Wetterschichten wie Temperatur, Wind, Druck, Wolkenbedeckung und Niederschlag.

Wetterdaten sind verfügbar, ohne sich anzumelden. Die Wetteransicht kann direkt von der Kartenoberfläche aus geöffnet werden, entweder durch Klicken auf das Regenschirm-Symbol im Menüpanel oder durch Rechtsklick auf die Karte und Auswählen von Wetter öffnen aus dem Kontextmenü.


## Data Source {#data-source}

Die OsmAnd Web stellt Wetterinformationen aus zwei Prognosequellen bereit:

- [**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Globales Prognosesystem)** – die Standardquelle, betrieben von NOAA/NWS. Bietet vollständige Wetterdaten, einschließlich Temperatur, Druck, Feuchtigkeit, Wind- und Wolken-Schichten.  
- [**ECMWF**](https://www.ecmwf.int/) **(Europäisches Zentrum für mittelfristige Wettervorhersagen)** – eine alternative Prognosequelle. Bietet hochwertige Temperatur-, Niederschlags- und Druckdaten, liefert jedoch keine Wind- oder Wolkeninformationen.  

Um zwischen ihnen zu wechseln, klicken Sie auf die **Regenschirm-Schaltfläche** im Wettermenü.

![OsmAnd Web Wetter](@site/static/img/web/weather_source.png)


## Weather Menu {#weather-menu}

Das **Wettermenü** zeigt aktuelle Wetterbedingungen und Prognosedaten für den ausgewählten Ort auf der Karte an. Es kombiniert eine Zusammenfassungsansicht, Zeitsteuerungen und Wetterschichten in einem einzigen Panel.

Oben im Menü werden der Name des aktuellen Orts, das Datum, die Uhrzeit und die Lufttemperatur angezeigt. Darunter ermöglicht ein Tag-Auswähler das Wechseln zwischen Prognosetagen innerhalb des verfügbaren Bereichs.

Ein Zeitregler wird bereitgestellt, um die Prognosezeit innerhalb des ausgewählten Tags anzupassen. Das Bewegen des Reglers aktualisiert alle angezeigten Wetterwerte und Karten-Schichten, um den gewählten Moment widerzuspiegeln.

Das Menü zeigt die folgenden Wetterparameter für den ausgewählten Ort:
- *Temperatur*.
- *Niederschlag*.
- *Wind*.
- *Luftdruck*.
- *Wolken*.  

Jeder Wert aktualisiert sich dynamisch, wenn die Prognosezeit oder das Datum geändert wird.

Am unteren Rand des Panels wird Information über die Erzeugungszeit der Wetterdaten angezeigt, die angibt, wann die Prognosedaten zuletzt aktualisiert wurden.

![OsmAnd Web Wetter](@site/static/img/web/weather_menu.png)


## Weather Layers {#weather-layers}

Wetterschichten ermöglichen die Visualisierung von Prognosedaten direkt auf der Karte als Überlagerung. Sie helfen, Wetterbedingungen in einem größeren Bereich schnell zu bewerten, anstatt Werte nur für einen einzelnen Punkt anzusehen.

Um das Panel für Wetterschichten zu öffnen, klicken Sie auf das Schichten-Symbol im Wettermenü. Dies öffnet eine Liste verfügbarer Wetterüberlagerungen, die unabhängig voneinander aktiviert oder deaktiviert werden können.

Die folgenden Wetterschichten sind verfügbar:
- *Temperatur* — zeigt die Verteilung der Lufttemperatur auf der Karte mit einem Farbverlauf an.
- *Niederschlag* — zeigt die Niederschlagsintensität im ausgewählten Bereich.
- *Wind* — visualisiert Windgeschwindigkeit und -richtung.
- *Luftdruck* — zeigt atmosphärische Druckmuster an.
- *Wolken* — zeigt die Wolkenbedeckung.

Alle Wetterschichten sind mit dem ausgewählten Datum und der Uhrzeit im Wettermenü synchronisiert. Das Ändern des Prognosetags oder das Anpassen des Zeitreglers aktualisiert die Kartenüberlagerungen sofort, um den gewählten Moment widerzuspiegeln.

![OsmAnd Web Wetter](@site/static/img/web/weather_layers.png)


## Forecast View {#forecast-view}

Wetterprognosen sind für bis zu 7 Tage im Voraus verfügbar. Prognosewerte werden in 3-Stunden-Intervallen berechnet, was es ermöglicht, kurzfristige Änderungen während eines jeden Tags zu untersuchen.

Die 7-Tage-Prognose wird mit zwei ergänzenden Formaten angezeigt:
- **Graph-Ansicht**. Zeigt Prognosetrends im Laufe der Zeit für den ausgewählten Wetterparameter. 
- **Listen-Ansicht**. Zeigt tägliche Prognosewerte in einem strukturierten Listenformat an. 

Sie können zwischen verschiedenen Wetterparametern mit den Symbolen oben im Prognosepanel wechseln. 

![OsmAnd Web Wetter](@site/static/img/web/weather_forecast.png)


## Related Article {#related-article}

- [Wetter](../plugins/weather.md)
- [Einführung](../web/web-overview.md)
- [Karte](../web/web-map.md)