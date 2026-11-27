---
source-hash: 54463b26bbd3157bf65aa4c615c7c5d58ded9f5e2adbff7977057bafa3b8a30c
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

![Impostazioni di navigazione Android](@site/static/img/navigation/vehicle-parameters_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

Andare a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Per un calcolo ottimale del percorso in OsmAnd, è necessario considerare i seguenti parametri del veicolo:

1. Impostare la [*Velocità predefinita*](#default-speed) e l'[*Intervallo di velocità*](#speed-range): la velocità minima e massima del veicolo. Ciò aiuterà l'applicazione a determinare il tempo necessario per completare il percorso e le consentirà di scegliere il percorso migliore, tenendo conto dei limiti di velocità sui diversi segmenti stradali.
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

Su Android, questo parametro è anche disponibile per i *[profili di ciclismo](../../navigation/routing/bicycle-based-routing.md)* per aiutare a evitare sentieri ciclabili stretti.

![Impostazioni di navigazione Android](@site/static/img/navigation/navigation_settings_width_bicycle.png)

**5.** [**Limite di carico massimo per asse**](https://wiki.openstreetmap.org/wiki/Key:maxaxleload) - Fornire il carico massimo per asse del veicolo per evitare strade e ponti con restrizioni sul peso per asse. Questo parametro è disponibile solo nei tipi di navigazione come [*Camion*](../../navigation/routing/car-based-routing.md).  

![Impostazioni di navigazione Android](@site/static/img/navigation/max_axle_load.png)

**6.** [**Peso massimo a pieno carico**](https://wiki.openstreetmap.org/wiki/Key:maxweightrating) - Fornire il peso totale massimo del veicolo quando è completamente carico per evitare strade e ponti con restrizioni sul peso complessivo. Questo parametro è disponibile solo nei tipi di navigazione come [*Camion*](../../navigation/routing/car-based-routing.md).  

![Impostazioni di navigazione Android](@site/static/img/navigation/max_weight_at_full_load.png)

I limiti sui parametri del veicolo possono essere importanti per la navigazione e la sicurezza stradale. Alcune di queste restrizioni possono includere:  

1. Restrizioni sui veicoli che si muovono in determinate aree urbane.  
2. Restrizioni alla circolazione dei veicoli su specifici tratti di strada, come dove ci sono ponti, gallerie con spazio limitato, sottopassi bassi, curve complesse o altre strutture.  
3. I limiti di peso per asse del veicolo possono essere particolarmente importanti per i camion.
4. Restrizioni per i veicoli che si muovono in determinate condizioni, come temperature elevate, strade bagnate o innevate, di notte o in condizioni meteorologiche con visibilità limitata.


## Parametri del carburante {#fuel-parameters}

### Carburante utilizzato dal motore {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Percorso di navigazione Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso di navigazione iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios_new.png)

</TabItem>

</Tabs>

Se si seleziona il tipo di motore nei parametri del veicolo, i dati sull '[***impronta di CO2***](../../navigation/setup/route-details.md#elevation-info) verranno visualizzati sopra il grafico nei [Dettagli del percorso](../setup/route-details.md).
Sono disponibili sette tipi di carburante: ***Benzina, Diesel, GPL, Metano, Elettrico, Ibrido*** e ***Etanolo***.  

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

Andare a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,vehicle_parameters,travel_speed"/>*

![Velocità di viaggio Android](@site/static/img/navigation/navigation_settings_travel_speed_andr.webp)

La schermata *Velocità di viaggio* contiene le impostazioni *Velocità predefinita*, *Intervallo di velocità* e *Orario di arrivo stimato* del profilo. Le modifiche vengono salvate immediatamente. Il pulsante *Ripristina predefiniti* nella barra superiore ripristina i valori predefiniti di tutte le impostazioni della schermata.

La **Velocità predefinita** è la velocità di movimento predefinita per questa modalità di trasporto ([Limiti di velocità predefiniti](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Per i profili *A piedi*, *A cavallo* e *Bicicletta*, in piccoli incrementi equivalenti a 0,1 km/h (mph) ([Unità e formati](https://osmand.net/docs/user/personal/profiles#units--formats)), e per gli altri profili, in incrementi equivalenti a 1 km/h (1 mph). Viene utilizzata:
- Per stimare il [tempo del percorso](../../widgets/nav-widgets.md#time-to-intermediate) quando la velocità non può essere determinata dalle strade, come nella [Navigazione GPX](../setup/gpx-navigation.md), nei [percorsi sciistici](../routing/ski-routing.md), nei [percorsi in barca](../routing/boat-navigation.md), nei [percorsi pedonali](../routing/pedestrian-routing.md) e in altri profili simili.
- Per determinare quando vengono attivati gli [annunci vocali](../guidance/voice-navigation.md).
- Per determinare l'ETA per i marcatori sulla mappa tramite navigazione in linea retta se la velocità media non è ancora stata calcolata.

La *Velocità predefinita* può essere impostata solo all'interno dell'[*Intervallo di velocità*](#speed-range): quando restringi l'intervallo, la *Velocità predefinita* si sposta con esso.

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di navigazione](@site/static/img/navigation/navigation_settings_speeds_ios.png)

La **Velocità predefinita** è la velocità di movimento predefinita per questa modalità di trasporto ([Limiti di velocità predefiniti](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Per i profili *A piedi*, *A cavallo* e *Bicicletta*, in piccoli incrementi equivalenti a 0,1 km/h (mph) ([Unità e formati](https://osmand.net/docs/user/personal/profiles#units--formats)), e per gli altri profili, in incrementi equivalenti a 1 km/h (1 mph). Viene utilizzata:
- Per stimare il [tempo del percorso](../../widgets/nav-widgets.md#time-to-intermediate) quando la velocità non può essere determinata dalle strade, come nella [Navigazione GPX](../setup/gpx-navigation.md), nei [percorsi sciistici](../routing/ski-routing.md), nei [percorsi in barca](../routing/boat-navigation.md), nei [percorsi pedonali](../routing/pedestrian-routing.md) e in altri profili simili.
- Per determinare quando vengono attivati gli [annunci vocali](../guidance/voice-navigation.md).
- Per determinare l'ETA per i marcatori sulla mappa tramite navigazione in linea retta se la velocità media non è ancora stata calcolata.

</TabItem>

</Tabs>


### Intervallo di velocità {#speed-range}

<InfoAndroidOnly />

Per alcuni tipi di navigazione è possibile impostare la velocità minima e massima consentita. Entrambi i valori si impostano con un unico cursore a due maniglie. Se impostati, il motore di routing presume che il veicolo o la modalità di trasporto non si muoverà più velocemente della velocità massima e non si muoverà più lentamente della velocità minima. L'*Intervallo di velocità* viene utilizzato sia per il calcolo del percorso sia per l'orario di arrivo.
Ad esempio, consente di creare un percorso a **basso consumo di carburante** in cui il consumo è ottimale alla **velocità massima** impostata e il motore troverà un percorso più breve evitando strade più lunghe ma più veloci.

- **Velocità minima** — imposta la velocità di guida minima per tutti i tipi di strada del percorso. Aumenta la priorità per le strade con una velocità consigliata inferiore alla velocità minima.
- **Velocità massima** — imposta la velocità di guida massima e diminuisce la priorità per le strade con una velocità possibile superiore a quella massima.

L'*Intervallo di velocità* non è disponibile per i profili con routing in linea retta, ad esempio *Aereo*.


### Orario di arrivo stimato {#estimated-arrival-time}

<InfoAndroidOnly />

Le impostazioni *Orario di arrivo stimato* definiscono come OsmAnd calcola l'orario di arrivo durante la navigazione.

- **Adattati alla mia velocità** — disattivata per impostazione predefinita. Quando l'impostazione è disattivata, l'orario di arrivo deriva dalla velocità prevista su ciascuna strada del percorso. Quando è attivata, OsmAnd divide la distanza rimanente per la tua velocità media nell'*Intervallo* selezionato. Viene conteggiato solo il movimento durante la navigazione, le soste vengono ignorate. Subito dopo l'avvio della navigazione, l'orario di arrivo combina la stima del percorso con la tua velocità media finché non ti sei mosso per l'intero *Intervallo*.
- **Intervallo** — il periodo in cui viene misurata la tua velocità media, da 15 secondi a 60 minuti. Il valore predefinito è 15 minuti. L'impostazione è disponibile quando *Adattati alla mia velocità* è attivata.

L'orario di arrivo adattato viene mostrato nei widget [*Tempo alla destinazione*](../../widgets/nav-widgets.md#time-to-destination) e [*Tempo al punto intermedio*](../../widgets/nav-widgets.md#time-to-intermediate), nella notifica di navigazione e in [Android Auto](../auto-car.md). Il tempo alla prossima svolta e i suggerimenti vocali non sono interessati.


## Articoli correlati {#related-articles}

- [Parametri del percorso](../routing/osmand-routing.md#routing-types)
- [Impostazioni di navigazione](./navigation-settings.md)
- [Istruzioni vocali / Notifiche](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)