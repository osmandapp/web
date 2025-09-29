---
source-hash: d8eea89d132b8d0c465d31c1f6c3db15ee3bfaea91b54f6c6164a55ad5c97c3e
sidebar_position: 4
title:  Parametri del veicolo
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



## Panoramica

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Per un calcolo ottimale del percorso in OsmAnd, è necessario considerare i seguenti parametri del veicolo:

1. Impostare la [*Velocità predefinita* o le *Velocità su strada*](#road-speeds), come [velocità minima e massima](#road-speeds) del veicolo. Ciò aiuterà l'applicazione a determinare il tempo necessario per completare il percorso e le consentirà di scegliere il percorso migliore, tenendo conto dei limiti di velocità sui diversi segmenti stradali.
2. Specificare il [*tipo*](#fuel-used-by-motor) di carburante utilizzato dal motore. Ciò consentirà all'app di stimare le emissioni di CO2.
3. Inserire la [*capacità del serbatoio*](#fuel-tank-capacity) per monitorare con precisione il livello e il consumo di carburante.
4. Definire i [*parametri di dimensione e peso*](#size-parameters) del veicolo, che possono aiutare l'app a calcolare il percorso ottimale ed evitare ostacoli sulla strada dovuti a restrizioni.

L'impostazione corretta dei parametri nell'app OsmAnd aiuterà a evitare problemi durante la navigazione di un percorso, a scegliere quello più adatto in base al tipo di veicolo e alle restrizioni stradali e a calcolare il tempo del viaggio.


## Parametri dimensionali {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

I parametri del veicolo influenzano la navigazione e la costruzione del percorso perché determinano la disponibilità di strade, ponti, traghetti, dighe e altre infrastrutture. Se l'altezza, la larghezza, la lunghezza o il peso di un veicolo superano i valori consentiti per determinati tratti stradali, il sistema di navigazione OsmAnd troverà un percorso alternativo per evitare ostacoli lungo il cammino.  

- Le unità di misura corrisponderanno alle impostazioni selezionate in *Impostazioni generali → [Unità e formati](../../personal/profiles.md#units--formats)*.
- I parametri del veicolo possono essere impostati manualmente.
- Se si seleziona manualmente il parametro di misurazione del veicolo, l'applicazione offrirà il valore più vicino dall'elenco predefinito. Ciò è necessario per evitare errori e costruire il percorso in modo più corretto.
- È possibile scegliere i parametri del veicolo da un elenco di dimensioni predefinito.
- Non impostare la dimensione su *Nessuno*, il che significa che non verranno applicate restrizioni al parametro selezionato.  

### Limiti {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Il parametro Peso è disponibile solo nei tipi di navigazione come [*Auto, Camion* e *Moto*](../../navigation/routing/car-based-routing.md).  

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Il parametro Altezza è disponibile solo nei tipi di navigazione come *[Auto, Camion, Moto](../../navigation/routing/car-based-routing.md)* e *[Barca](../../navigation/routing/boat-navigation.md)*.  

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Il parametro Lunghezza è disponibile solo nei tipi di navigazione come [*Auto, Camion* e *Moto*](../../navigation/routing/car-based-routing.md).  

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> limite**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Il parametro Larghezza è disponibile solo nei tipi di navigazione come *[Auto, Camion, Moto](../../navigation/routing/car-based-routing.md)* e *[Barca](../../navigation/routing/boat-navigation.md)*.  

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

I limiti sui parametri del veicolo possono essere importanti per la navigazione e la sicurezza stradale. Alcune di queste restrizioni possono includere:  

1. Restrizioni sui veicoli che si muovono in determinate aree urbane.  
2. Restrizioni alla circolazione dei veicoli su specifici tratti di strada, come dove ci sono ponti, gallerie con spazio limitato, sottopassi bassi, curve complesse o altre strutture.  
3. I limiti di peso per asse del veicolo possono essere particolarmente importanti per i camion.
4. Restrizioni per i veicoli che si muovono in determinate condizioni, come temperature elevate, strade bagnate o innevate, di notte o in condizioni meteorologiche con visibilità limitata.


## Parametri del carburante {#fuel-parameters}

### Carburante utilizzato dal motore {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Se si seleziona il tipo di motore nei parametri del veicolo, i dati sull'[***impronta di CO2***](../../navigation/setup/route-details.md#elevation-info) verranno visualizzati sopra il grafico nei [Dettagli del percorso](../setup/route-details.md).
Sono disponibili sei tipi di carburante: ***Benzina, Diesel, GPL, Metano, Elettrico,*** e ***Ibrido***.  

**Applicabilità:**

L'impostazione **Carburante utilizzato dal motore** è disponibile solo nella navigazione basata su veicoli come *[Auto, Moto e Camion](../../navigation/routing/car-based-routing.md)*.


### Capacità del serbatoio {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


Il parametro **Capacità del serbatoio** consente di monitorare più accuratamente il [livello del carburante](../../widgets/info-widgets.md#vehicle-metrics-widgets) e il [consumo](../../widgets/info-widgets.md#vehicle-metrics-widgets) del veicolo, fornendo il volume totale del serbatoio. Il valore predefinito è di circa 50 ***litri***. L'unità di misura per la capacità del carburante è determinata dal [Profilo (Impostazioni)](../..//personal/profiles.md#units--formats) configurato in *Menu → Configura profilo → Impostazioni generali → Unità e formati → Unità di volume*.

**Applicabilità:**

L'impostazione **Capacità del serbatoio** è disponibile solo nella navigazione basata su veicoli. Per i tipi di navigazione come *Bicicletta*, *A cavallo*, *A piedi* e *Sci*, questo parametro non viene visualizzato nei Parametri del veicolo.

## Parametri di velocità

### Velocità predefinita {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

La **Velocità predefinita** è la velocità di movimento predefinita per questa modalità di trasporto ([Limiti di velocità predefiniti](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Per i profili *A piedi*, *A cavallo* e *Bicicletta*, in piccoli incrementi equivalenti a 0,1 km/h (mph) ([Unità e formati](https://osmand.net/docs/user/personal/profiles#units--formats)), e per gli altri profili, in incrementi equivalenti a 1 km/h (1 mph). Viene utilizzata:
- Per stimare il [tempo del percorso](../../widgets/nav-widgets.md#time-to-intermediate) quando la velocità non può essere determinata dalle strade, come nella [Navigazione GPX](../setup/gpx-navigation.md), nei [percorsi sciistici](../routing/ski-routing.md), nei [percorsi in barca](../routing/boat-navigation.md), nei [percorsi pedonali](../routing/pedestrian-routing.md) e in altri profili simili.
- Per determinare quando vengono attivati gli [annunci vocali](../guidance/voice-navigation.md).
- Per determinare l'ETA per i marcatori sulla mappa tramite navigazione in linea retta se la velocità media non è ancora stata calcolata.



 Viene utilizzata per calcolare l'orario di arrivo e determinare il percorso ottimale in base alla velocità di movimento che l'applicazione considera tipica. Ad esempio, auto, trasporto pubblico, pedone o la velocità impostata manualmente.


### Velocità su strada {#road-speeds}


![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

Per alcuni tipi di navigazione è possibile impostare la velocità minima e massima consentita. Se impostata, il motore di routing presume che il veicolo o la modalità di trasporto non si muoverà più velocemente del limite e non si muoverà più lentamente della velocità minima. 
Ad esempio, consente di creare un percorso a **basso consumo di carburante** in cui il consumo è ottimale alla **velocità massima** impostata e il motore troverà un percorso più breve evitando strade più lunghe ma più veloci.

- **Velocità minima**  
    L'impostazione imposta la velocità di guida minima per tutti i tipi di strada del percorso. Aumenta la priorità per le strade con una velocità consigliata inferiore alla velocità minima.  
- **Velocità massima**  
    L'impostazione imposta la velocità di guida massima e diminuisce la priorità per le strade con una velocità possibile superiore a quella massima.




## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Impostazioni di navigazione](./navigation-settings.md)
- [Istruzioni vocali / Notifiche](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)