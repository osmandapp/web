---
source-hash: 2f914f4ecf9df9f98177dd069c3c143806b2827059231c6238393af7c70a080d
sidebar_position: 18
title:  Wikipedia
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



## Panoramica {#overview}

:::info Funzionalità a pagamento
Il plugin Wikipedia è una [funzionalità a pagamento](../purchases/index.md) dell'app OsmAnd.  
:::

Avere Wikipedia durante il viaggio aiuta a conoscere meglio i luoghi che si visitano. È disponibile offline e mostra i Luoghi Popolari (Android) / gli articoli di Wikipedia (iOS) relativi ai punti di interesse direttamente sulla mappa.  

Il plugin Wikipedia è una funzionalità separata che può essere attivata/disattivata secondo necessità. Una volta attivato, permette di caricare i dati di Wikipedia [scaricati](../personal/maps-resources#downloads-menu) per ogni regione geografica. La mappa dispone di due tipi di informazioni caricate da Wikipedia: informazioni brevi e un articolo completo.  


Le informazioni brevi sono fornite dai POI di Wikipedia (un'abbreviazione per "[punto di interesse](../map/point-layers-on-map.md)"). Se l'opzione Wikipedia è attivata nel menu, un POI di Wikipedia appare sulla mappa. Quando si tocca un punto di interesse, questo si espande per fornire brevi informazioni da Wikipedia, oltre alla possibilità di aprire un articolo completo. Il POI di Wikipedia, così come gli articoli correlati, sono disponibili offline. È possibile leggerli secondo necessità, cambiare lingua e cercare altre informazioni su Wikipedia.  


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) è un'enciclopedia online gratuita, multilingue e collaborativa aperta, creata e mantenuta da una comunità di editor volontari che utilizzano un sistema di modifica basato su wiki.  

&nbsp;  
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Parametri di configurazione richiesti {#required-setup-parameters}

Per visualizzare i dati di Wikipedia sulla mappa, è necessario effettuare le seguenti impostazioni:

1. [Acquistare](../plugins/index.md#purchase) e [Abilitare](../plugins/index.md#enable--disable) il plugin Wikipedia nella sezione Plugin del *Menu principale*.
2. Scaricare i [pacchetti Wikipedia](#download-wikipedia-packages) per le regioni richieste.  
3. Visualizzare i [POI di Wikipedia](#display-wikipedia-on-the-map) sulla mappa per il profilo richiesto.  
4. Configurare le [lingue](#set-preferred-language) preferite per la lettura degli articoli.


## Scaricare i pacchetti Wikipedia {#download-wikipedia-packages}

I dati di Wikipedia sono disponibili per ogni regione geografica. Se i dati sono caricati per una regione e non per un'altra, nel primo caso è possibile lavorare con le informazioni di Wikipedia visualizzando la regione su una mappa, mentre nel secondo caso la regione non avrà alcuna informazione di Wikipedia. Una volta caricati, i dati di Wikipedia diventano disponibili in generale, anche offline.

Per scaricare i dati di Wikipedia per una regione, andare ai [pacchetti disponibili per il download nel *Menu principale*](../start-with/download-maps.md#downloading-maps), trovare la regione desiderata e aprirla. I dati di Wikipedia si troveranno tra gli altri pacchetti.

È possibile aprire i dati di Wikipedia da scaricare per regione come segue:

1. **Android**. Andare su: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Andare su: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Selezionare la regione richiesta. Una volta aperta la regione, i dati di Wikipedia si troveranno tra gli altri pacchetti.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Per vedere quali dati sono già stati caricati, andare su *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Scaricare Wikipedia su Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Per vedere quali dati sono già stati caricati, andare su *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![Scaricare Wikipedia su iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Visualizzare Wikipedia sulla mappa {#display-wikipedia-on-the-map}

Caricando i dati di Wikipedia per le regioni richieste, è possibile controllare la visibilità di tali dati sulla mappa. La visibilità è controllata da [Luoghi popolari (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **per Android** / [POI di Wikipedia](../map/point-layers-on-map.md#-wikipedia) **per iOS**, che possono essere mostrati o nascosti per tutte le regioni caricate da un determinato [profilo](../personal/profiles.md), ad esempio, un profilo per la guida, un profilo per il ciclismo, un altro profilo per mostrare i trasporti pubblici e altri.  

Per mostrare o nascondere i POI di Wikipedia, selezionare prima un profilo e poi attivare/disattivare l'opzione **Wikipedia**.

Per mostrare/nascondere i POI di Wikipedia, procedere come segue:

1. Andare su: 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Selezionare un profilo e cercare la sezione delle impostazioni *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* nel menu.  
3. Attivare *<Translate android="true" ids="poi_osmwiki"/>* **per Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **per iOS**.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI di Wikipedia su Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI di Wikipedia su iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Cercare su Wikipedia {#search-wikipedia}

Con i dati di Wikipedia caricati, indipendentemente dalla modalità di visibilità dei [POI di Wikipedia](../map/point-layers-on-map.md#-wikipedia) sulla mappa, è possibile [cercare](../search/search-poi.md) qualsiasi informazione da Wikipedia.

Quando si tocca il pulsante Cerca, appare un pannello aggiuntivo che consente di [cercare](../search/index.md) nell'intero testo e/o in una categoria specifica. Nel primo caso, i risultati della ricerca mostreranno i POI di Wikipedia con i corrispondenti articoli di Wikipedia tra gli altri tipi di informazioni. Nel caso di una [ricerca per categoria di Wikipedia](../search/search-poi.md#poi-search-by-categories), i risultati della ricerca mostreranno solo le informazioni di Wikipedia, ordinate in base alla posizione più vicina all'area della mappa attualmente visualizzata sullo schermo.  

- Nella versione **Android**, è possibile aprire la [Ricerca](../search/index.md) toccando l'icona *Cerca* nell'angolo in alto a sinistra dello schermo e/o toccando l'opzione *Cerca* nel menu.
- Nella versione **iOS**, per aprire la [Ricerca](../search/index.md), l'icona Cerca si trova nell'angolo in alto a sinistra dello schermo.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia search on Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia search on iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Per cercare per [categoria](../search/search-poi.md#poi-search-by-categories) di Wikipedia, selezionare: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Categoria Wikipedia su Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Categoria Wikipedia su iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Se necessario, toccare l'opzione **Mostra Wikipedia sulla mappa** nella parte superiore del pannello di ricerca e i risultati della ricerca dalla categoria Wikipedia appariranno sulla mappa.  


## Articolo di Wikipedia {#wikipedia-article}

Per aprire l'articolo di Wikipedia:

1. Abilitare il [livello POI di Wikipedia](../map/point-layers-on-map.md#-wikipedia) per un profilo specifico.
2. Toccare un POI sulla mappa.
3. Nel [menu contestuale](../map/map-context-menu.md) di un POI, toccare *Dettagli* (o semplicemente tirare su il *menu contestuale*) per visualizzare un riassunto dell'articolo di Wikipedia scelto.
4. Se si tocca quel testo (per la versione iOS), si verrà reindirizzati all'articolo di Wikipedia offline.
5. Utilizzare il pulsante *Leggi articolo* o *Leggi articolo completo* per aprire la versione completa dell'articolo di Wikipedia.



<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI di Wikipedia francese in inglese](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI di Wikipedia francese in inglese su iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Impostazioni di Wikipedia {#wikipedia-settings}

È possibile [impostare la lingua o le lingue](#set-preferred-language) in cui si preferisce leggere gli [articoli](#wikipedia-article) e anche configurare le [opzioni di download delle immagini](#download-images) per ogni [profilo](../personal/profiles.md).

### Impostare la lingua preferita {#set-preferred-language}

Nelle versioni **Android** e **iOS** dell'app OsmAnd, è possibile impostare la lingua (o le lingue) preferita per la visualizzazione degli articoli di Wikipedia utilizzando il menu *Configura mappa*. Se si seleziona più di una lingua, gli articoli di *Wikipedia* sulla mappa verranno mostrati in una qualsiasi di esse. Andare su:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Selezionare il profilo desiderato e nella sezione *<Translate android="true" ids="shared_string_show"/>* scegliere *<Translate android="true" ids="poi_osmwiki"/>* per Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* per iOS.  
3. Disabilitare l'opzione *<Translate android="true" ids="shared_string_all_languages"/>*.  
4. Selezionare la lingua o le lingue specifiche nell'elenco che si apre.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazione di una lingua preferita su Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazione di una lingua preferita su iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
Nella versione **iOS**, è anche possibile impostare la lingua preferita per gli articoli di Wikipedia utilizzando:  

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Cambiare lingua all'interno dell'articolo {#switch-languages-inside-the-article}

Nel caso in cui l'*articolo di Wikipedia* sia disponibile in diverse lingue, è possibile cambiare lingua durante la lettura. Dopo aver toccato l'icona corrispondente nell'angolo in alto a destra dello schermo, verranno offerte delle opzioni tra cui scegliere.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cambiare lingua per un articolo specifico](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Cambiare lingua per un articolo specifico](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Scaricare immagini {#download-images}

È possibile scegliere se scaricare o meno le immagini da Wikipedia sul proprio dispositivo all'interno dell'*articolo di Wikipedia*:

- **Android**. Aprire *[Articolo di Wikipedia](#display-wikipedia-on-the-map) → &#8942; → Opzioni*
- **iOS**. Aprire *[Articolo di Wikipedia](#display-wikipedia-on-the-map) → Icona Immagine*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cambiare immagini](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Cambiare immagini](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

Nella versione **iOS** dell'app, è anche possibile accedere alle opzioni di download delle immagini tramite le *impostazioni del plugin Wikipedia*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Cambiare immagini](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)