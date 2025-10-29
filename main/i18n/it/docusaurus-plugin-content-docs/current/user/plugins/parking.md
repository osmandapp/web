---
source-hash: c31f972d3a691c26a3a583de116eb13a83d2589b7e5d44d3162198717f9b326f
sidebar_position: 12
title:  Posizione parcheggio
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Panoramica {#overview}

Il plugin **Posizione parcheggio** aiuta a salvare e gestire la posizione in cui si è parcheggiata l'auto. Permette di posizionare un indicatore sulla mappa, di tenere traccia della durata del parcheggio e, opzionalmente, di impostare un promemoria sul calendario per la scadenza del tempo di parcheggio.

Questo plugin è gratuito e funziona offline con le mappe OsmAnd scaricate. È possibile individuare rapidamente il veicolo parcheggiato, stimare la distanza a piedi per raggiungerlo e condividere la posizione del parcheggio, se necessario.

- È possibile aggiungere un posto auto manualmente tramite il menu contestuale.
- Se il tempo è limitato, il plugin registra sia l'ora di inizio che quella di fine.
- L'ora di fine può attivare un promemoria nel calendario del dispositivo.
- I dettagli del parcheggio possono essere visualizzati in seguito o utilizzati per la navigazione.

L'indicatore è temporaneo e facile da rimuovere quando non è più necessario.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget parcheggio Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget parcheggio iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Parametri di configurazione richiesti {#required-setup-parameters}

Per utilizzare un posto auto sulla mappa, è necessario effettuare le seguenti impostazioni:

1. Abilitare il [plugin Posizione parcheggio](../plugins/index.md#enable--disable) dal *Menu principale → Plugin*.  
2. Impostare un [posto auto](#set-a-spot) sulla mappa tramite il menu contestuale.
3. (Opzionale) Aggiungere il [Widget Parcheggio](#parking-widget) alla schermata per un accesso più rapido.  


## Posto auto sulla mappa {#parking-spot-on-the-map}

Quando si contrassegna un posto auto, OsmAnd salva le sue coordinate geografiche insieme a una marca temporale. Se necessario, è possibile aggiungere anche un limite di tempo e un promemoria sul calendario. I posti auto vengono salvati come **punti preferiti**. Per assicurarsi che l'indicatore del parcheggio sia visibile sulla mappa, [Preferiti](../personal/favorites.md) devono essere abilitati.


### Impostare un posto auto {#set-a-spot}

Per impostare un posto auto sulla mappa, ingrandire fino al livello richiesto, quindi toccare a lungo il punto sulla mappa e nel [Menu contestuale](../map/map-context-menu.md) che si apre, effettuare le impostazioni.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Imposta posto auto in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Imposta limiti di tempo in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seleziona Parcheggio in Azioni su iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Imposta punto di parcheggio su iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Per posizionare un indicatore di parcheggio, ingrandire la mappa, toccare a lungo la posizione desiderata e aprire il [menu contestuale](../map/map-context-menu.md). Quindi:

1. Toccare [Azioni](../map/map-context-menu#actions).
2. Selezionare **Segna come posizione di parcheggio** (*Android*) o **Aggiungi posizione di parcheggio** (*iOS*).
3. Scegliere una delle opzioni disponibili:
   - **Senza limiti di tempo** – aggiunge un indicatore di base senza conto alla rovescia.
   - **Parcheggio a tempo limitato** – consente di impostare un'ora di fine e, facoltativamente, di creare un promemoria nel calendario del dispositivo.
4. Confermare per posizionare l'indicatore. L'ora di inizio viene salvata automaticamente.

:::info Ora di inizio
L'ora di inizio viene sempre impostata automaticamente. Se è necessario modificare l'ora di fine, è necessario eliminare e ricreare il posto auto. I promemoria vengono aggiunti al calendario solo se si è selezionata questa opzione durante la configurazione.
:::


### Rimanere informati {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget parcheggio Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Tempo rimanente in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget parcheggio iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Informazioni sul parcheggio in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Una volta salvato un posto auto, OsmAnd aiuta a monitorarne la posizione e la tempistica tramite il menu contestuale o il [Widget Parcheggio](#parking-widget) opzionale.

È possibile visualizzare l'indicatore del parcheggio riducendo lo zoom sulla mappa o toccando il **Widget Parcheggio**, che centra la mappa sul posto salvato. Il widget mostra anche la distanza dalla posizione corrente (o dal centro della mappa) alla posizione del parcheggio.

Toccando l'indicatore del parcheggio vengono visualizzati ulteriori dettagli:

- **Ora di inizio** – il momento in cui l'indicatore è stato posizionato.
- **Tempo rimanente** o **Tempo scaduto** – se è stato impostato un limite di tempo, questo mostra quanto tempo rimane o è trascorso dalla scadenza.
- Se è stato abilitato il promemoria del calendario, questo apparirà nell'app calendario del dispositivo.


### Navigazione verso un waypoint {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Direzione verso il punto di parcheggio in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Direzione verso il punto di parcheggio in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

È possibile utilizzare il posto auto come destinazione di navigazione per tornare facilmente al proprio veicolo. OsmAnd offre due modi principali per avviare la navigazione verso la posizione di parcheggio salvata:

**Tramite il menu Navigazione**:

  1. Toccare il pulsante **Navigazione**.  
  2. Scegliere un profilo.  
  3. Toccare **Imposta destinazione** e selezionare **Parcheggio** dall'elenco dei punti salvati.

**Tramite il Widget Parcheggio**:

  1. Toccare il **Widget Parcheggio**.  
  2. Toccare l'indicatore del posto auto.  
  3. Selezionare **Navigazione** e scegliere il profilo che si desidera utilizzare.


### Rimuovere un posto auto {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Azione Elimina parcheggio in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![Azione Elimina parcheggio in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Per eliminare un indicatore di parcheggio:

1. Individuare il posto auto sulla mappa o toccare il **Widget Parcheggio**.
2. Toccare l'indicatore per aprire il menu contestuale.
3. Selezionare **Elimina** o **Ignora**.

Se è stato impostato un promemoria sul calendario, anche questo verrà rimosso automaticamente.


## Widget Parcheggio {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_parking"/>*  

![Aggiunta del widget Parcheggio in Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="parking_place"/>*  

![Aggiunta del widget Parcheggio in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

Il [Widget Parcheggio](../widgets/info-widgets.md#parking-widget) mostra la distanza dal centro dello schermo alla posizione di parcheggio salvata e consente di centrare rapidamente la mappa su quel punto.

- Il widget è visibile solo dopo che è stata impostata una posizione di parcheggio.
- Se non è già presente sullo schermo, è possibile aggiungerlo tramite il menu [Configura schermata](../widgets/configure-screen.md).

Per saperne di più, vedere: [Widget informativi – Widget Parcheggio](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)