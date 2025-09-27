---
source-hash: 1505593576ed8b4e4ca8274ad047f82a70181f3fcafd8e9ca6d60e795b2f0724
sidebar_position: 3
title:  Inserimento Coordinate
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



<InfoAndroidOnly />

## Panoramica {#overview}

*Inserimento Coordinate* è uno strumento semplice e facile da usare per creare waypoint specificando la loro posizione geografica. Questa funzione può essere utile per navigare verso determinati luoghi di cui si conoscono solo le coordinate: i punti aggiunti possono essere [salvati](#save-as-track) come traccia GPX e utilizzati in seguito per la [navigazione GPX](../navigation/setup/gpx-navigation.md) o la [navigazione tramite marcatori](../navigation/setup/markers-navigation.md#overview).  

![Panoramica inserimento coordinate](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png) 

## Come usare {#how-to-use}

È possibile creare waypoint dal menu *[Marcatori mappa](../personal/markers.md#actions)* o da [I miei luoghi](../personal/myplaces.md) (vedi screenshot). Per raggiungere l'opzione di inserimento coordinate, seguire questi percorsi:
  - *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Pulsante Terra in fondo allo schermo*
  - *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Come trovare l'inserimento coordinate](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Come trovare l'inserimento coordinate](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png) 

Dopo aver aperto la schermata di inserimento delle coordinate:

- &nbsp;Assicurarsi che vengano utilizzate le [unità di misura](#coordinates-format) corrette. In caso contrario, modificare il formato delle coordinate nel menu [Opzioni](#options).  
- &nbsp;Inserire le coordinate del punto utilizzando il [modello](#add-a-point). Dopo aver premuto il pulsante *[Aggiungi](#add-a-point)*, il punto verrà aggiunto all'*[elenco dei punti](#points-list)*. Se necessario, è possibile inserire altri punti.  
- &nbsp;Salvare il(i) punto(i) come *[Traccia](../personal/tracks/manage-tracks.md)* utilizzando il *[menu Opzioni](#options)* o il pulsante &#8592; *(Indietro)*.  

:::note
I risultati della creazione di punti tramite coordinate - una *[traccia GPX](../personal/tracks/manage-tracks.md)* con waypoint - si trovano nel menu [I miei luoghi](../personal/myplaces.md) (cartella *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Opzioni {#options}

Utilizzando il menu delle opzioni è possibile [salvare](#save-as-track) i punti aggiunti come traccia, attivare le opzioni di inserimento avanzate (tastiera di sistema e longitudine a due cifre) o modificare il formato delle coordinate.

![Menu Opzioni inserimento coordinate Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - apre una finestra di dialogo che consente di salvare il punto (o i punti) creati come traccia GPX. È possibile modificare il nome della traccia o lasciare quello predefinito.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - consente di utilizzare la tastiera di sistema di Android per inserire le coordinate.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - consente di inserire i dati di longitudine con solo due cifre. Ciò può essere utile per longitudini da 0° a 99° (ad esempio, in Europa).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - consente di modificare il formato delle coordinate per l'inserimento.  

### Formato coordinate {#coordinates-format}

Quando si inseriscono le coordinate, è importante assicurarsi che vengano utilizzate le unità di misura appropriate. Supportiamo i gradi decimali (DD), i gradi e i minuti, o i gradi, i minuti e i secondi (DMS).  

|Formato coordinate| Esempio |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Aggiungere un punto {#add-a-point}

Dopo aver selezionato le unità corrette, si è pronti a inserire le coordinate dei futuri waypoint.  
La schermata di inserimento delle coordinate è composta dai seguenti elementi:

![Menu inserimento coordinate Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png) 

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Apre il menu *[Opzioni](#options)* (descritto sopra).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Viene utilizzato per inserire i dati nel formato selezionato (D - gradi, M - minuti, S - secondi). È possibile modificare il formato delle coordinate nel *[menu <Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;Pulsanti del semiglobo *<Translate android="true" ids="navigate_point_latitude"/> e <Translate android="true" ids="navigate_point_longitude"/>*. Permettono di cambiare i lati dell'orizzonte: *Sud - Nord* e *Ovest - Est*.
- &nbsp;Campo *Nome punto*. È possibile lasciare il nome predefinito o crearne uno proprio.  
- &nbsp;Pulsante *X*. Cancella il campo di inserimento della riga corrispondente.  

### Tastiera ridotta {#short-keyboard}

Per inserire i dati, è possibile utilizzare la tastiera ridotta (predefinita) o la tastiera di sistema (Android). Per modificare il metodo di inserimento, andare al menu *[Opzioni](#options)*. Dopo aver inserito la latitudine e la longitudine, è possibile aggiungere il punto all'*[elenco](#points-list)* utilizzando il pulsante *+Aggiungi*.

![Aggiungi punto inserimento coordinate Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)  

- Il pulsante *<Translate android="true" ids="shared_string_add"/>* consente di salvare un punto nell'*[Elenco punti](#points-list)*.
- Il pulsante *<Translate android="true" ids="shared_string_clear"/>* reimposta tutti i dati inseriti.
- &#9032; consente di passare al valore successivo.
- I *pulsanti della tastiera* consentono di inserire dati, cancellarli, passare al valore di coordinata successivo, nascondere la tastiera. 

### Elenco punti {#points-list}

Mostra i punti già creati: nome, distanza e direzione verso questo punto.

![Salva punto inserimento coordinate Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Salva punto inserimento coordinate Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

Il pulsante **⁝** apre un menu di azioni per modificare o eliminare il punto selezionato. 
Quando si tocca un punto, è possibile modificarne le coordinate. Toccare il pulsante *Applica* per salvare le modifiche.


## Salva come traccia {#save-as-track}

Per salvare i punti come traccia, toccare il pulsante *Indietro* ( &#8592; ) o utilizzare il menu *[Opzioni](#options)*.

![Salva punto inserimento coordinate Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Elenco I miei luoghi inserimento coordinate Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

Nel menu a comparsa, è possibile inserire un nome personalizzato per la traccia o salvarla con il nome predefinito. Toccare <Translate android="true" ids="shared_string_save"/> per salvare i punti aggiunti come nuova traccia.  
La traccia si troverà nel menu [I miei luoghi](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).