---
source-hash: 500ba2b5b26271c7c71fe60664983abc42fa4483e3831b67196c41ebe60e8fd4
sidebar_position: 12
title: Posizione di Parcheggio
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Panoramica {#overview}

Il plugin **Posizione di Parcheggio** ti aiuta a salvare e gestire la posizione in cui hai parcheggiato la tua auto. Ti permette di posizionare un indicatore sulla mappa, tenere traccia della durata del parcheggio e, facoltativamente, impostare un promemoria nel calendario per quando il tuo tempo di parcheggio scade.

Questo plugin è gratuito e funziona offline con le mappe OsmAnd scaricate. Puoi localizzare rapidamente il tuo veicolo parcheggiato, stimare la distanza a piedi per raggiungerlo e condividere la posizione del parcheggio se necessario.

- Puoi aggiungere un parcheggio manualmente tramite il menu contestuale.
- Se a tempo limitato, il plugin registra sia l'ora di inizio che quella di fine.
- L'ora di fine può attivare un promemoria nel calendario del tuo dispositivo.
- I dettagli del parcheggio possono essere visualizzati in seguito o utilizzati per la navigazione.

L'indicatore è temporaneo e facile da rimuovere una volta non più necessario.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Parametri di configurazione richiesti {#required-setup-parameters}

Per utilizzare un parcheggio sulla mappa, è necessario effettuare le seguenti impostazioni:

1. Abilita il [plugin Posizione di parcheggio](../plugins/index.md#enable--disable) dal *Menu principale → Plugin*.
2. Imposta un [parcheggio](#set-a-spot) sulla mappa tramite il menu contestuale.
3. (Opzionale) Aggiungi il [widget Parcheggio](#parking-widget) allo schermo per un accesso più rapido.


## Parcheggio sulla Mappa {#parking-spot-on-the-map}

Quando si contrassegna un parcheggio, OsmAnd salva le sue coordinate geografiche insieme a un timestamp. Se necessario, è possibile aggiungere anche un limite di tempo e un promemoria nel calendario.


### Imposta un punto {#set-a-spot}

Per impostare un punto di parcheggio sulla mappa, ingrandisci al livello desiderato, quindi tocca a lungo il punto sulla mappa e nel [menu contestuale](../map/map-context-menu.md) che si apre, effettua le impostazioni.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Set Parking spot in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Set time limits in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select Parking in Actions in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png) ![Set Parking point in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Per posizionare un indicatore di parcheggio, ingrandisci la mappa, tocca a lungo la posizione desiderata e apri il [menu contestuale](../map/map-context-menu.md). Quindi:

1. Tocca [Azioni](../map/map-context-menu#actions).
2. Seleziona **Contrassegna come posizione di parcheggio** (*Android*) o **Aggiungi posizione di parcheggio** (*iOS*).
3. Scegli una delle opzioni disponibili:
   - **Illimitato nel tempo** – aggiunge un indicatore di base senza conto alla rovescia.
   - **Parcheggio a tempo limitato** – ti permette di impostare un'ora di fine e, facoltativamente, creare un promemoria nel calendario del tuo dispositivo.
4. Conferma per posizionare l'indicatore. L'ora di inizio viene salvata automaticamente.

:::info Ora di inizio
L'ora di inizio viene sempre impostata automaticamente. Se devi modificare l'ora di fine, devi eliminare e ricreare il parcheggio. I promemoria vengono aggiunti al tuo calendario solo se hai selezionato questa opzione durante la configurazione.
:::


### Rimani informato {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Time left in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parking info in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Una volta salvato un parcheggio, OsmAnd ti aiuta a monitorarne la posizione e l'orario tramite il menu contestuale o il [widget Parcheggio](#parking-widget) opzionale.

Puoi visualizzare l'indicatore del parcheggio ingrandendo la mappa o toccando il **widget Parcheggio**, che centra la mappa sul punto salvato. Il widget mostra anche la distanza dalla tua posizione attuale (o dal centro della mappa) alla posizione del parcheggio.

Ulteriori dettagli vengono mostrati toccando l'indicatore del parcheggio:

- **Ora di inizio** – il momento in cui l'indicatore è stato posizionato.
- **Tempo rimanente** o **Tempo scaduto** – se è stato impostato un limite di tempo, questo mostra quanto tempo rimane o è trascorso dalla scadenza.
- Se hai abilitato il promemoria del calendario, apparirà nell'app del calendario del tuo dispositivo.


### Navigazione verso un waypoint {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Heading to Parking point in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Heading to Parking point in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Puoi usare il parcheggio come destinazione di navigazione per tornare facilmente al tuo veicolo. OsmAnd offre due modi principali per avviare la navigazione verso la posizione di parcheggio salvata:

**Tramite il menu di navigazione**:

1. Tocca il pulsante **Navigazione**.
2. Scegli un profilo.
3. Tocca **Imposta destinazione** e seleziona **Parcheggio** dall'elenco dei punti salvati.

**Tramite il widget Parcheggio**:

1. Tocca il **widget Parcheggio**.
2. Tocca l'indicatore del parcheggio.
3. Seleziona **Navigazione** e scegli il profilo che desideri utilizzare.


### Rimuovi un punto {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Action Delete Parking in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Per eliminare un indicatore di parcheggio:

1. Individua il parcheggio sulla mappa o tocca il **widget Parcheggio**.
2. Tocca l'indicatore per aprire il menu contestuale.
3. Seleziona **Elimina** o **Ignora**.

Se era stato impostato un promemoria nel calendario, verrà rimosso automaticamente.


## Widget Parcheggio {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_parking"/>*

![Adding Parking widget in Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="parking_place"/>*

![Adding Parking widget in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

Il [widget Parcheggio](../widgets/info-widgets.md#parking-widget) mostra la distanza dal centro dello schermo alla posizione di parcheggio salvata e ti permette di centrare rapidamente la mappa su quel punto.

- Il widget è visibile solo dopo che è stata impostata una posizione di parcheggio.
- Se non è già sullo schermo, puoi aggiungerlo tramite il menu [Configura Schermo](../widgets/configure-screen.md).

Per saperne di più, vedi: [Widget informativi – Widget Parcheggio](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Articoli correlati {#related-articles}

- [Interagisci con la Mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: Maggio 2025*