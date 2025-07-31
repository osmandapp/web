---
source-hash: 338468efc137a0618ed472d99c99d808cd6f3df5d30650e5054eabd75c599d06
sidebar_position: 5
title: Righello e Righello a Raggio
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
- Il **Righello a Raggio** ti consente di impostare un raggio da qualsiasi punto della mappa, mostrando cerchi concentrici che rappresentano intervalli di distanza.
- Lo strumento **Distanza al Tocco** ti consente di misurare le distanze toccando la mappa, sia dalla tua posizione attuale che tra due posizioni qualsiasi.

Questi strumenti sono utili per pianificare percorsi, stimare la vicinanza a punti di riferimento e analizzare aree, sia per attività all'aperto che per una navigazione precisa.

![Schermata Righello a raggio](@site/static/img/widgets/radius_ruler_screen.png)


## Righello {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Strumento Righello](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Strumento Righello](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

Il **Righello** visualizza la scala della mappa corrente come un segmento di linea etichettato con la sua lunghezza reale (ad esempio, 100 m o 500 piedi), nella parte inferiore dello schermo. Caratteristiche:

- La scala si adatta dinamicamente mentre si ingrandisce o si rimpicciolisce.
- Fornisce un riferimento visivo per stimare le distanze reali tra gli oggetti sulla mappa.
- La lunghezza del segmento è arrotondata a unità convenienti (ad esempio, 100 m), corrispondenti approssimativamente alla larghezza di un pollice per un uso intuitivo.

Questo strumento è utile quando hai bisogno di una rapida comprensione delle dimensioni o delle distanze degli oggetti senza posizionare marcatori o percorsi.

| | |
|------------|------------|
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Widget Righello a Raggio {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="radius_ruler_item"/>*

![Posizione di visualizzazione Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="radius_ruler_item"/>*

![Posizione di visualizzazione Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

Il [Widget Righello a Raggio](../widgets/info-widgets.md#radius-ruler) mostra la distanza tra la tua posizione attuale (*La mia posizione*) e il centro della mappa. Puoi anche spostare la mappa per impostare qualsiasi punto centrale personalizzato. Caratteristiche:

- Visualizza cerchi concentrici centrati sul punto selezionato.
- Il primo cerchio riflette la [scala della mappa](#ruler) attuale per un rapido riferimento visivo.
- Si regola automaticamente durante lo zoom per mantenere valori di raggio accurati.

Usa questo widget per stimare la vicinanza a punti di interesse o per pianificare un'area definita.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Schermata Righello a raggio](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Righello a raggio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Righello a raggio"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Righello a raggio"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Bussola per Righello a Raggio {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Righello bussola](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Righello bussola](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Quando il **Righello a Raggio** è attivo, la mappa visualizza una sovrapposizione della bussola per aiutarti a orientarti nello spazio. La sovrapposizione mostra come la mappa è allineata rispetto al Nord vero e può includere un triangolo blu che indica la direzione attuale del dispositivo.

- L'anello della bussola mostra l'orientamento della mappa, se il Nord è in alto o ruotato.
- Un **triangolo blu** indica la direzione in cui è rivolto il tuo dispositivo.
- Per utilizzare questa funzione, il dispositivo deve supportare e abilitare un **sensore bussola** (bussola GPS, magnetometro).
- Tenere il dispositivo in orizzontale migliora la precisione e la visualizzazione.
- Se il **triangolo blu** e la **freccia rossa** (Nord) puntano entrambi verso l'alto, il dispositivo è allineato al Nord vero.

Questa sovrapposizione è utile per la navigazione all'aperto, consentendoti di abbinare l'[orientamento della mappa](../map/interact-with-map.md#map-orientation--compass) con l'ambiente reale.

| | |
|------------|------------|
| Abilita | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → Aggiungi widget → <Translate android="true" ids="radius_ruler_item"/>* |
| Formato | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |


## Posizione Centrale / Inferiore {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Posizione di visualizzazione Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Righello a raggio verso il basso](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Altro → Posizione della posizione sullo schermo*

![Posizione di visualizzazione Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Righello a raggio verso il basso](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Per aumentare il raggio visibile intorno alla tua posizione, puoi cambiare la posizione del Righello a Raggio selezionando l'opzione *Centro* o *Inferiore*.

Per maggiori informazioni sulla *posizione sullo schermo*, consulta l'articolo [Configura Schermo](../widgets/configure-screen.md#display-position-location-position-on-screen).


## Vista 3D {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Formato 3D del righello a raggio](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Formato 3D del righello a raggio](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Puoi passare alla **vista 3D** per visualizzare meglio le distanze e il terreno circostante quando usi il Righello a Raggio. Questa vista inclina la mappa e fornisce un effetto prospettico che espande il raggio visibile.

- Tocca [il pulsante di posizione](../map/interact-with-map.md#my-location-and-zoom) per concentrarti sulla tua posizione.
- Usa un gesto di [scorrimento verso l'alto con due dita](../map/interact-with-map.md#gestures) per inclinare la mappa in modalità 3D.

I cerchi del raggio appariranno con profondità, il che è particolarmente utile per la pianificazione del percorso in aree collinari o ambienti urbani dove il contesto verticale è importante.


## Distanza al Tocco {#distance-by-tap}

![Distanza tra due punti casuali sulla mappa](@site/static/img/widgets/distance_between_two_random_points.png)

Lo strumento **Distanza al Tocco** ti consente di misurare le distanze tra i punti sulla mappa senza usare il Righello a Raggio o creare un percorso.

Ci sono due casi d'uso:

- **Distanza dalla tua posizione a un punto**
  Tocca un punto qualsiasi sulla mappa e apparirà una linea retta dalla tua posizione attuale al punto toccato, insieme a un'etichetta di distanza. La linea rimane sullo schermo anche se tocchi altrove.

- **Distanza tra due punti qualsiasi**
  Tocca due punti sulla mappa contemporaneamente (multi-touch). Una linea collega i due punti e viene visualizzata la distanza misurata.

| | |
|------------|------------|
| Abilita |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Dimensione testo (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Formato unità | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Guide Video {#video-guides}

Guarda questi brevi tutorial per imparare a usare il Righello a Raggio e gli strumenti correlati in OsmAnd:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="Lettore video di YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="Lettore video di YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Articoli Correlati {#related-articles}

- [Configura Schermo](./configure-screen.md)
- [Pulsanti mappa](./map-buttons.md)
- [Widget informativi](./info-widgets.md)
- [Widget di navigazione](./nav-widgets.md)
- [Azione rapida](./quick-action.md)
- [Widget marcatori](./markers.md)

> *Ultimo aggiornamento: Maggio 2025*