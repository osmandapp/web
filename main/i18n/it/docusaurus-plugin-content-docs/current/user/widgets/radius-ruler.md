---
source-hash: 87d73ff443e95ab1dcaaecf7746b579887fa93a633560d2d381fc2a5a0c16094
sidebar_position: 5
title:  Righello del raggio e Righello
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

Gli **strumenti Righello** in OsmAnd sono progettati per aiutarti a misurare le distanze e a comprendere la [scala della mappa](https://en.wikipedia.org/wiki/Scale_(map)) con precisione.

- Lo strumento **Righello** visualizza una scala della mappa dinamica in unità come metri o piedi, aiutandoti a valutare visivamente le distanze tra gli oggetti sullo schermo.
- Il **Righello del raggio** ti permette di impostare un raggio da qualsiasi punto sulla mappa, mostrando cerchi concentrici che rappresentano intervalli di distanza.
- Lo strumento **Distanza tramite tocco** ti consente di misurare le distanze toccando la mappa — sia dalla tua posizione attuale che tra due punti qualsiasi.

Questi strumenti sono utili per pianificare percorsi, stimare la prossimità a punti di riferimento e analizzare aree — sia per attività all'aperto che per una navigazione precisa.

![Schermata righello del raggio](@site/static/img/widgets/radius_ruler_screen.png)


## Righello {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Strumento Righello](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Strumento Righello](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

Il **Righello** visualizza la scala attuale della mappa come un segmento di linea etichettato con la sua lunghezza nel mondo reale (ad es., 100 m o 500 ft), nella parte inferiore dello schermo. Caratteristiche:

- La scala si adatta dinamicamente mentre si ingrandisce o si riduce la visuale.
- Fornisce un riferimento visivo per stimare le distanze reali tra gli oggetti sulla mappa.
- La lunghezza del segmento è arrotondata a unità comode (ad es., 100 m), corrispondendo approssimativamente alla larghezza di un pollice per un uso intuitivo.

Questo strumento è utile quando si ha bisogno di una rapida comprensione delle dimensioni degli oggetti o delle distanze senza posizionare indicatori o percorsi.

| | |
|------------|------------|
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Widget Righello del raggio {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="radius_ruler_item"/>*

![Mostra posizione Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="radius_ruler_item"/>*

![Mostra posizione Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

Il [Widget Righello del raggio](../widgets/info-widgets.md#radius-ruler) mostra la distanza tra la tua posizione attuale (*La mia posizione*) e il centro della mappa. Puoi anche spostare la mappa per impostare un qualsiasi punto centrale personalizzato. Caratteristiche:

- Visualizza cerchi concentrici centrati sul punto selezionato.
- Il primo cerchio riflette la [scala della mappa](#ruler) attuale per un rapido riferimento visivo.
- Si regola automaticamente durante lo zoom per mantenere valori di raggio accurati.

Usa questo widget per stimare la prossimità a punti di interesse o per pianificare attorno a un'area definita.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata righello del raggio](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Righello del raggio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Righello del raggio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Righello del raggio"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Bussola per Righello del raggio {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Righello bussola](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Righello bussola](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Quando il **Righello del raggio** è attivo, la mappa visualizza una sovrapposizione della bussola per aiutarti a orientarti nello spazio. La sovrapposizione mostra come la mappa è allineata rispetto al Nord geografico e può includere un triangolo blu che indica la direzione attuale del dispositivo.

- L'anello della bussola mostra l'orientamento della mappa — se il Nord è in alto o ruotato.
- Un **triangolo blu** indica la direzione in cui è rivolto il tuo dispositivo.
- Per utilizzare questa funzione, il dispositivo deve supportare e abilitare un **sensore bussola** (bussola GPS, magnetometro).
- Tenere il dispositivo in posizione orizzontale migliora la precisione e la visualizzazione.
- Se il **triangolo blu** e la **freccia rossa** (Nord) puntano entrambi verso l'alto, il dispositivo è allineato al Nord geografico.

Questa sovrapposizione è utile per la navigazione all'aperto, consentendoti di abbinare l'[orientamento della mappa](../map/interact-with-map.md#map-orientation-modes) con l'ambiente reale.

| | |
|------------|------------|
| Abilita | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="radius_ruler_item"/>* |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |


## Posizione Centrale / Inferiore {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Mostra posizione Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Righello del raggio verso il basso](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Altro → Posizione sulla schermata*

![Mostra posizione Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Righello del raggio verso il basso](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Per aumentare il raggio visibile intorno alla tua posizione, puoi cambiare la posizione del Righello del raggio selezionando l'opzione *Centrale* o *Inferiore*.

Per maggiori informazioni sulla *posizione sulla schermata*, consulta l'articolo [Configura Schermata](../widgets/configure-screen.md#display-position-location-position-on-screen).


## Vista 3D {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Formato 3D righello del raggio](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Formato 3D righello del raggio](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Puoi passare alla **vista 3D** per visualizzare meglio le distanze e il terreno circostante quando usi il Righello del raggio. Questa vista inclina la mappa e fornisce un effetto prospettico che espande il raggio visibile.

- Tocca [il pulsante della posizione](../map/interact-with-map.md#my-location-and-zoom) per centrare la tua posizione.
- Usa un gesto di [scorrimento verso l'alto con due dita](../map/interact-with-map.md#gestures) per inclinare la mappa in modalità 3D.

I cerchi del raggio appariranno con profondità, il che è particolarmente utile per la pianificazione di percorsi in aree collinari o ambienti urbani dove il contesto verticale è importante.


## Distanza tramite tocco {#distance-by-tap}

![Distanza tra due punti casuali sulla mappa](@site/static/img/widgets/distance_between_two_random_points.png)

Lo strumento **Distanza tramite tocco** ti permette di misurare le distanze tra punti sulla mappa senza usare il Righello del raggio o creare un percorso.

Ci sono due casi d'uso:

- **Distanza dalla tua posizione a un punto**
  Tocca un punto qualsiasi sulla mappa e apparirà una linea retta dalla tua posizione attuale al punto toccato, insieme a un'etichetta con la distanza. La linea rimane sullo schermo anche se tocchi altrove.

- **Distanza tra due punti qualsiasi**
  Tocca due punti sulla mappa contemporaneamente (multi-touch). Una linea collega i due punti e viene visualizzata la distanza misurata.

| | |
|------------|------------|
| Abilita |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Dimensione testo (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Formato unità | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Guide video {#video-guides}

Guarda questi brevi tutorial per imparare a usare il Righello del raggio e gli strumenti correlati in OsmAnd:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Articoli correlati {#related-articles}

- [Configura Schermata](./configure-screen.md)
- [Pulsanti della mappa](./map-buttons.md)
- [Widget informativi](./info-widgets.md)
- [Widget di navigazione](./nav-widgets.md)
- [Azione rapida](./quick-action.md)
- [Widget dei preferiti](./markers.md)