---
source-hash: 263596e04f0705ae1c8c57f5afa60aa2cbe3498370962ed69729ec73d60d14f6
sidebar_position: 3
title:  Input coordinate

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

*Input coordinate* è uno strumento semplice e facile da usare per creare waypoint specificando la loro posizione geografica. Questa funzione può essere utile per navigare verso determinati luoghi, che conosci solo tramite le loro coordinate: i punti aggiunti possono essere [salvati](#save-as-track) come traccia GPX e utilizzati in seguito per la [navigazione GPX](../navigation/setup/gpx-navigation.md) o la [navigazione per marcatori](../navigation/setup/markers-navigation.md#add-gpx).

![Panoramica dell'input coordinate](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Come si usa {#how-to-use}

Puoi creare waypoint dal menu *[Marcatori mappa](../personal/markers.md#actions)* o da [I miei luoghi](../personal/myplaces.md) (vedi screenshot). Segui questi percorsi per raggiungere l'opzione di input coordinate:
- *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Pulsante Terra nella parte inferiore dello schermo*
- *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Input coordinate come trovare](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Input coordinate come trovare](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Dopo aver aperto la schermata di input coordinate:

- &nbsp;Assicurati che siano utilizzate le [unità di misura](#coordinates-format) corrette. In caso contrario, cambia il formato delle coordinate nel menu [Opzioni](#options).
- &nbsp;Inserisci le coordinate del punto utilizzando il [modello](#add-a-point). Dopo aver premuto il pulsante *[Aggiungi](#add-a-point)*, il tuo punto verrà aggiunto all'*[elenco punti](#points-list)*. Se necessario, puoi inserire punti aggiuntivi.
- &nbsp;Salva il tuo punto (o punti) come *[Traccia](../personal/tracks/manage-tracks.md)* utilizzando il *[menu Opzioni](#options)* o &#8592; *(Indietro)*.

:::note
I risultati della creazione di punti per coordinate - una *[traccia GPX](../personal/tracks/manage-tracks.md)* con waypoint - si trovano nel menu [I miei luoghi](../personal/myplaces.md) (*cartella <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Opzioni {#options}

Utilizzando il menu opzioni puoi [salvare](#save-as-track) i punti aggiunti come traccia, attivare opzioni di input avanzate (tastiera di sistema e longitudine a due cifre) o cambiare il formato delle coordinate.

![Menu Opzioni input coordinate Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - apre una finestra di dialogo che ti consente di salvare il punto (o i punti) creato come traccia GPX. Puoi cambiare il nome della traccia o lasciarlo come predefinito.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - ti consente di utilizzare la tastiera di sistema Android per inserire le coordinate.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - consente di inserire dati di longitudine con solo due cifre. Questo può essere utile per longitudini da 0° a 99° (ad esempio, in Europa).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - consente di cambiare il formato delle coordinate per l'input.

### Formato coordinate {#coordinates-format}

Quando inserisci le coordinate, è importante assicurarsi che vengano utilizzate le unità di misura appropriate. Supportiamo gradi decimali (DD), gradi e minuti, o gradi, minuti e secondi (DMS).

|Formato coordinate| Esempio |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Aggiungi un punto {#add-a-point}

Dopo aver selezionato le unità corrette, sei pronto per inserire le coordinate dei futuri waypoint.
La schermata di input coordinate è composta dai seguenti elementi:

![Menu Input coordinate Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Apre il menu *[Opzioni](#options)* (descritto sopra).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Viene utilizzato per inserire dati nel formato selezionato (G - gradi, M - minuti, S - secondi). Puoi cambiare il formato delle coordinate nel *[menu <Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;Pulsanti semiglobo *<Translate android="true" ids="navigate_point_latitude"/> e <Translate android="true" ids="navigate_point_longitude"/>*. Ti consentono di cambiare i lati dell'orizzonte: *Sud - Nord* e *Ovest - Est*.
- &nbsp;Campo *Nome punto*. Puoi lasciare il nome predefinito o inventarne uno tuo.
- &nbsp;Pulsante *X*. Cancella il campo di input della riga corrispondente.

### Tastiera breve {#short-keyboard}

Per inserire i dati, puoi utilizzare la tastiera breve (predefinita) o la tastiera di sistema (Android). Per cambiare il metodo di input vai al menu *[Opzioni](#options)*. Dopo aver inserito la latitudine e la longitudine, puoi aggiungere il punto alla *[lista](#points-list)* utilizzando il pulsante *+Aggiungi*.

![Input coordinate Aggiungi punto Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- Il pulsante *<Translate android="true" ids="shared_string_add"/>* consente di salvare un punto all'interno dell'*[Elenco punti](#points-list)*.
- Il pulsante *<Translate android="true" ids="shared_string_clear"/>* reimposta tutti i dati inseriti.
- &#9032; ti consente di passare al valore successivo.
- I *pulsanti della tastiera* consentono di inserire dati, eliminarli, passare al valore della coordinata successiva, nascondere la tastiera.

### Elenco punti {#points-list}

Mostra i punti già creati: nome, distanza e direzione verso questo punto.

![Input coordinate salva punto Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Input coordinate salva punto Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

Il pulsante **⁝** apre un menu di azioni per modificare o eliminare il punto selezionato.
Quando tocchi un punto, diventa possibile cambiarne le coordinate. Tocca il pulsante *Applica* per salvare le modifiche.

## Salva come traccia {#save-as-track}

Per salvare i tuoi punti come traccia, tocca il pulsante *Indietro* ( &#8592; ) o utilizza il menu *[Opzioni](#options)*.

![Input coordinate salva punto Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Input coordinate salva punto Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

Nel menu a comparsa, puoi inserire il tuo nome per la traccia o salvarla con il nome predefinito. Tocca <Translate android="true" ids="shared_string_save"/> per salvare i punti aggiunti come nuova traccia.
Troverai la tua traccia nel menu [I miei luoghi](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).