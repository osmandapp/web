---
source-hash: 72e0583c731b9fa6013d0075ece872e622be90160d3358a8216e374293cf5f00
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

Il plugin **Posizione parcheggio** ti aiuta a salvare e gestire la posizione in cui hai parcheggiato la tua auto. Ti permette di posizionare un indicatore sulla mappa, tenere traccia della durata del parcheggio e, facoltativamente, impostare un promemoria nel calendario per quando il tuo tempo di parcheggio scade.

Questo plugin è gratuito e funziona offline con le mappe OsmAnd scaricate. Puoi individuare rapidamente il tuo veicolo parcheggiato, stimare la distanza a piedi per raggiungerlo e condividere la posizione del parcheggio se necessario.

- Puoi aggiungere un posto auto manualmente tramite il menu contestuale.
- Se a tempo limitato, il plugin registra sia l'ora di inizio che quella di fine.
- L'ora di fine può attivare un promemoria nel calendario del tuo dispositivo.
- I dettagli del parcheggio possono essere visualizzati in seguito o utilizzati per la navigazione.

L'indicatore è temporaneo e facile da rimuovere una volta che non è più necessario.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Widget parcheggio Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget parcheggio iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Parametri di configurazione richiesti {#required-setup-parameters}

Per utilizzare un posto auto sulla mappa, è necessario effettuare le seguenti impostazioni:

1. Abilita il [plugin Posizione parcheggio](../plugins/index.md#enable--disable) dal *Menu principale → Plugin*.
2. Imposta un [posto auto](#set-a-spot) sulla mappa tramite il menu contestuale.
3. (Opzionale) Aggiungi il [widget Parcheggio](#parking-widget) alla schermata per un accesso più rapido.


## Posto auto sulla mappa {#parking-spot-on-the-map}

Quando contrassegni un posto auto, OsmAnd salva le sue coordinate geografiche insieme a un timestamp. Se necessario, è possibile aggiungere anche un limite di tempo e un promemoria nel calendario.


### Imposta un posto {#set-a-spot}

Per impostare un posto auto sulla mappa, ingrandisci al livello desiderato, quindi tocca a lungo il punto sulla mappa e nel [Menu contestuale](../map/map-context-menu.md) che si apre, effettua le impostazioni.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Imposta posto auto in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Imposta limiti di tempo in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seleziona Parcheggio in Azioni in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png) ![Imposta punto parcheggio in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Per posizionare un indicatore di parcheggio, ingrandisci la mappa, tocca a lungo la posizione desiderata e apri il [menu contestuale](../map/map-context-menu.md). Quindi:

1. Tocca [Azioni](../map/map-context-menu#actions).
2. Seleziona **Segna come posizione parcheggio** (*Android*) o **Aggiungi posizione parcheggio** (*iOS*).
3. Scegli una delle opzioni disponibili:
   - **Tempo illimitato** – aggiunge un indicatore base senza un conto alla rovescia.
   - **Parcheggio a tempo limitato** – ti permette di impostare un'ora di fine e facoltativamente creare un promemoria nel calendario del tuo dispositivo.
4. Conferma per posizionare l'indicatore. L'ora di inizio viene salvata automaticamente.

:::info Ora di inizio
L'ora di inizio è sempre impostata automaticamente. Se devi cambiare l'ora di fine, devi eliminare e ricreare il posto auto. I promemoria vengono aggiunti al tuo calendario solo se hai selezionato questa opzione durante la configurazione.
:::


### Rimani informato {#stay-informed}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Widget parcheggio Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Tempo rimanente in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget parcheggio iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Info parcheggio in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Una volta salvato un posto auto, OsmAnd ti aiuta a monitorare la sua posizione e i tempi tramite il menu contestuale o l'opzionale [widget Parcheggio](#parking-widget).

Puoi visualizzare l'indicatore di parcheggio rimpicciolendo la mappa o toccando il **widget Parcheggio**, che centra la mappa sul tuo posto salvato. Il widget mostra anche la distanza dalla tua posizione attuale (o dal centro della mappa) alla posizione del parcheggio.

Ulteriori dettagli vengono mostrati toccando l'indicatore di parcheggio:

- **Ora di inizio** – il momento in cui l'indicatore è stato posizionato.
- **Tempo rimanente** o **Tempo scaduto** – se è stato impostato un limite di tempo, questo mostra quanto tempo rimane o è passato dalla scadenza.
- Se hai abilitato il promemoria nel calendario, apparirà nell'app calendario del tuo dispositivo.


### Navigazione verso un waypoint {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Direzione verso punto parcheggio in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Direzione verso punto parcheggio in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Puoi utilizzare il posto auto come destinazione di navigazione per tornare facilmente al tuo veicolo. OsmAnd offre due modi principali per avviare la navigazione verso la posizione di parcheggio salvata:

**Tramite menu Navigazione**:

1. Tocca il pulsante **Navigazione**.
2. Scegli un profilo.
3. Tocca **Imposta destinazione** e seleziona **Parcheggio** dall'elenco dei punti salvati.

**Tramite widget Parcheggio**:

1. Tocca il **widget Parcheggio**.
2. Tocca l'indicatore del posto auto.
3. Seleziona **Navigazione** e scegli il profilo che desideri utilizzare.


### Rimuovi un posto {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Azione Elimina Parcheggio in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Azione Elimina Parcheggio in Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Azione Elimina Parcheggio in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Per eliminare un indicatore di parcheggio:

1. Individua il posto auto sulla mappa o tocca il **widget Parcheggio**.
2. Tocca l'indicatore per aprire il menu contestuale.
3. Seleziona **Elimina** o **Ignora**.

Se è stato impostato un promemoria nel calendario, verrà rimosso automaticamente.


## Widget Parcheggio {#parking-widget}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="map_widget_parking"/>*

![Aggiunta widget Parcheggio in Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Scegli un pannello → Aggiungi widget → <Translate ios="true" ids="parking_place"/>*

![Aggiunta widget Parcheggio in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

Il [widget Parcheggio](../widgets/info-widgets.md#parking-widget) mostra la distanza dal centro dello schermo alla posizione di parcheggio salvata e ti permette di centrare rapidamente la mappa su quel punto.

- Il widget è visibile solo dopo che è stata impostata una posizione di parcheggio.
- Se non è già sullo schermo, puoi aggiungerlo tramite il menu [Configura schermata](../widgets/configure-screen.md).

Per saperne di più, vedi: [Widget informativi – Widget Parcheggio](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: maggio 2025*