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


## Panoramica {#overview}

La funzionalità Meteo sulla Mappa Web di OsmAnd visualizza le condizioni meteorologiche attuali e i dati di previsione direttamente sulla mappa. Fornisce accesso alle informazioni meteorologiche da più fonti di previsione, supporta la regolazione del tempo e consente la visualizzazione di livelli meteorologici come temperatura, vento, pressione, copertura nuvolosa e precipitazioni.

I dati meteorologici sono disponibili senza effettuare l'accesso. La vista Meteo può essere aperta direttamente dall'interfaccia della mappa facendo clic sull'icona dell'ombrello nel pannello del menu o facendo clic destro sulla mappa e selezionando Apri meteo dal menu contestuale.


## Fonte dei Dati {#data-source}

OsmAnd Web fornisce informazioni meteorologiche da due fonti di previsione:

- [**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – la fonte predefinita gestita da NOAA/NWS. Fornisce dati meteorologici completi, inclusi livelli di temperatura, pressione, umidità, vento e nuvole.  
- [**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – una fonte di previsione alternativa. Offre dati di alta qualità su temperatura, precipitazioni e pressione, ma non fornisce informazioni su vento o nuvole.  

Per passare da una all'altra, fare clic sul **pulsante ombrello** nel menu Meteo.

![Meteo su OsmAnd Web](@site/static/img/web/weather_source.png)


## Menu Meteo {#weather-menu}

Il **menu Meteo** visualizza le condizioni meteorologiche attuali e i dati di previsione per la posizione selezionata sulla mappa. Combina una vista riassuntiva, controlli del tempo e livelli meteorologici in un unico pannello.

In cima al menu sono mostrati il nome della posizione attuale, la data, l'ora e la temperatura dell'aria. Sotto, un selettore di giorni consente di passare tra i giorni di previsione all'interno dell'intervallo disponibile.

È fornito un cursore del tempo per regolare l'ora di previsione all'interno del giorno selezionato. Spostando il cursore, vengono aggiornati tutti i valori meteorologici visualizzati e i livelli della mappa per riflettere il momento scelto.

Il menu mostra i seguenti parametri meteorologici per la posizione selezionata:
- *Temperatura*.
- *Precipitazioni*.
- *Vento*.
- *Pressione atmosferica*.
- *Nuvole*.  

Ogni valore si aggiorna dinamicamente quando si cambia l'ora o la data di previsione.

In fondo al pannello, sono mostrate informazioni sull'ora di generazione dei dati meteorologici, che indicano quando i dati di previsione sono stati aggiornati l'ultima volta.

![Meteo su OsmAnd Web](@site/static/img/web/weather_menu.png)


## Livelli Meteo {#weather-layers}

I livelli meteo consentono di visualizzare i dati di previsione direttamente sulla mappa come overlay. Aiutano a valutare rapidamente le condizioni meteorologiche su un'area più ampia invece di visualizzare i valori solo per un singolo punto.

Per aprire il pannello dei Livelli meteo, fare clic sull'icona dei livelli nel menu Meteo. Questo apre un elenco di overlay meteo disponibili che possono essere attivati o disattivati indipendentemente.

I seguenti livelli meteo sono disponibili:
- *Temperatura* — visualizza la distribuzione della temperatura dell'aria sulla mappa utilizzando un gradiente di colore.
- *Precipitazioni* — mostra l'intensità delle precipitazioni sull'area selezionata.
- *Vento* — visualizza la velocità e la direzione del vento.
- *Pressione atmosferica* — visualizza i pattern della pressione atmosferica.
- *Nuvole* — mostra la copertura nuvolosa.

Tutti i livelli meteo sono sincronizzati con la data e l'ora selezionate nel menu Meteo. Cambiando il giorno di previsione o regolando il cursore del tempo, gli overlay della mappa vengono aggiornati immediatamente per riflettere il momento scelto.

![Meteo su OsmAnd Web](@site/static/img/web/weather_layers.png)


## Vista Previsioni {#forecast-view}

Le previsioni meteo sono disponibili fino a 7 giorni in anticipo. I valori di previsione sono calcolati a intervalli di 3 ore, consentendo di esaminare i cambiamenti a breve termine durante ogni giorno.

La previsione a 7 giorni è visualizzata utilizzando due formati complementari:
- **Vista grafico**. Mostra le tendenze di previsione nel tempo per il parametro meteorologico selezionato. 
- **Vista elenco**. Visualizza i valori di previsione giornalieri in un formato elenco strutturato. 

È possibile passare tra diversi parametri meteorologici utilizzando le icone in cima al pannello delle previsioni. 

![Meteo su OsmAnd Web](@site/static/img/web/weather_forecast.png)


## Articolo Correlato {#related-article}

- [Meteo](../plugins/weather.md)
- [Introduzione](../web/web-overview.md)
- [Mappa](../web/web-map.md)