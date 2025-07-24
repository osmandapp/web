---
source-hash: 12e72d10b1449ce58c5fb653cdfb0cfc1c20daeb3be3887c57878bc922044d85
sidebar_position: 18
title: Wikipedia
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

Avere Wikipedia durante il tuo viaggio ti aiuta a saperne di più sui luoghi che visiti. È disponibile offline e mostra i Luoghi Popolari (Android) / articoli di Wikipedia (iOS) relativi ai punti di interesse direttamente sulla mappa.

Il plugin Wikipedia è una funzionalità separata che può essere abilitata/disabilitata secondo necessità. Una volta abilitato, ti consente di caricare i dati di Wikipedia [scaricati](../personal/maps-resources.md#download-maps-maps) per ogni regione geografica. La mappa ha due tipi di conoscenza caricata da Wikipedia: informazioni brevi e un articolo completo.

Le informazioni brevi sono fornite dai POI di Wikipedia (abbreviazione di "[punto di interesse](../map/point-layers-on-map.md)"). Se l'opzione Wikipedia è attivata nel menu, un POI di Wikipedia appare sulla mappa. Quando tocchi un punto di interesse, si espande per fornire brevi informazioni da Wikipedia, oltre alla possibilità di aprire un articolo completo. Il POI di Wikipedia, così come gli articoli correlati, sono disponibili offline. Puoi leggerli secondo necessità, cambiare lingua e cercare altre informazioni su Wikipedia.

[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) è un'enciclopedia online gratuita, multilingue e collaborativa, creata e mantenuta da una comunità di editor volontari che utilizzano un sistema di editing basato su wiki.

&nbsp;
![Wikipedia](@site/static/img/map/map-wikipedia.png)

## Parametri di configurazione richiesti {#required-setup-parameters}

Per visualizzare i dati di Wikipedia sulla mappa, è necessario effettuare le seguenti impostazioni:

1. [Acquista](../plugins/index.md#purchase) e [Abilita](../plugins/index.md#enable--disable) il plugin Wikipedia nella sezione Plugin del *Menu principale*.
2. Scarica i [pacchetti Wikipedia](#download-wikipedia-packages) per le regioni richieste.
3. Visualizza i [POI di Wikipedia](#display-wikipedia-on-the-map) sulla mappa per il profilo richiesto.
4. Configura le [lingue](#set-preferred-language) preferite per leggere gli articoli.

## Scarica pacchetti Wikipedia {#download-wikipedia-packages}

I dati di Wikipedia sono disponibili per ogni regione geografica. Se sono caricati per una regione e non per un'altra, nel primo caso puoi lavorare con le informazioni di Wikipedia quando visualizzi la regione su una mappa, e nell'altro caso, la regione non avrà alcuna informazione di Wikipedia. Una volta caricati, i dati di Wikipedia diventano disponibili in generale, così come offline.

Per scaricare i dati di Wikipedia per una regione, vai ai [pacchetti disponibili per il download nel *Menu principale*](../start-with/download-maps.md#download---main-menu), trova la regione necessaria e aprila. I dati di Wikipedia saranno tra gli altri pacchetti.

Puoi aprire i dati di Wikipedia da scaricare per regione come segue:

1. **Android**. Vai a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Vai a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Seleziona la regione richiesta. Una volta aperta la regione, i dati di Wikipedia saranno tra gli altri pacchetti.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Per vedere quali dati sono già stati caricati, vai a *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*

![Download Wikipedia in Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Per vedere quali dati sono già stati caricati, vai a *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Download Wikipedia in iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>

## Visualizza Wikipedia sulla mappa {#display-wikipedia-on-the-map}

Caricando i dati di Wikipedia per le regioni richieste, puoi controllare la visibilità di tali dati sulla mappa. La visibilità è controllata da [Luoghi Popolari (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **per Android** / [POI di Wikipedia](../map/point-layers-on-map.md#-wikipedia) **per iOS**, che possono essere mostrati o nascosti per tutte le regioni caricate da un certo [profilo](../personal/profiles.md), ad esempio, un profilo per la guida, un profilo per il ciclismo, un altro profilo per mostrare il trasporto pubblico e altri.

Per mostrare o nascondere i POI di Wikipedia, seleziona prima un profilo e poi attiva/disattiva l'opzione **Wikipedia**.

Per mostrare/nascondere i POI di Wikipedia, procedi come segue:

1. Vai a:

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#popular-places-wikipedia-menu)

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Seleziona un Profilo e cerca la sezione di impostazioni *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* nel menu.
3. Attiva *<Translate android="true" ids="poi_osmwiki"/>* **per Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **per iOS**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI di Wikipedia su Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI di Wikipedia su iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>

## Cerca Wikipedia {#search-wikipedia}

Con i dati di Wikipedia caricati, indipendentemente dalla modalità di visibilità dei [POI di Wikipedia](../map/point-layers-on-map.md#-wikipedia) sulla mappa, è possibile [cercare](../search/search-poi.md) qualsiasi informazione da Wikipedia.

Quando tocchi il pulsante Cerca, appare un pannello aggiuntivo che ti consente di [cercare](../search/index.md) l'intero testo e/o una categoria specifica. Nel primo caso, i risultati della ricerca mostreranno i POI di Wikipedia con i corrispondenti articoli di Wikipedia tra gli altri tipi di informazioni. Nel caso di una [ricerca per categoria Wikipedia](../search/search-poi.md#poi-search), i risultati della ricerca mostreranno solo le informazioni di Wikipedia, ordinate per la posizione più vicina all'area della mappa attualmente visualizzata sullo schermo.

- Nella versione **Android**, puoi aprire [Cerca](../search/index.md) toccando l'*icona Cerca* nell'angolo in alto a sinistra dello schermo e/o toccando l'*opzione Cerca* nel menu.
- Nella versione **iOS**, per aprire [Cerca](../search/index.md), l'icona Cerca si trova nell'angolo in alto a sinistra dello schermo.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ricerca Wikipedia su Android](@site/static/img/map/map-wikipedia-search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ricerca Wikipedia su iOS](@site/static/img/map/map-wikipedia-search_ios.png)

</TabItem>

</Tabs>

-->

- Per cercare per [categoria](../search/search-poi.md#poi-search) Wikipedia, seleziona: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Categoria Wikipedia su Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Categoria Wikipedia su iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Se necessario, tocca l'opzione **Mostra Wikipedia sulla mappa** nella parte superiore del pannello di ricerca e i risultati della ricerca dalla categoria Wikipedia appariranno sulla mappa.

## Articolo di Wikipedia {#wikipedia-article}

Per aprire l'articolo di Wikipedia:

1. Abilita il [livello POI di Wikipedia](../map/point-layers-on-map.md#-wikipedia) per un profilo specificato.
2. Tocca il POI sulla mappa.
3. Nel [menu contestuale](../map/map-context-menu.md) di un POI tocca *Dettagli* (o semplicemente trascina il *menu contestuale* verso l'alto) per visualizzare un abstract dell'articolo di Wikipedia scelto.
4. Se tocchi quel testo (per la versione iOS), verrai reindirizzato all'articolo offline di Wikipedia.
5. Usa il pulsante *Leggi articolo* o *Leggi articolo completo* per aprire la versione completa dell'articolo di Wikipedia.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI Wikipedia francese in inglese](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI Wikipedia francese in inglese su iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>

## Impostazioni Wikipedia {#wikipedia-settings}

Puoi [impostare la lingua(-e)](#set-preferred-language) in cui preferisci leggere gli [articoli](#wikipedia-article) e anche configurare le [opzioni di download delle immagini](#download-images) per ogni [profilo](../personal/profiles.md).

### Imposta la lingua preferita {#set-preferred-language}

Nelle versioni **Android** e **iOS** dell'app OsmAnd, puoi impostare la tua lingua (o lingue) preferita per la visualizzazione degli articoli di Wikipedia utilizzando il *menu Configura mappa*. Se selezioni più di una lingua, gli articoli di *Wikipedia* sulla mappa verranno mostrati in una qualsiasi di esse. Vai a:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Seleziona il profilo necessario e nella sezione *<Translate android="true" ids="shared_string_show"/>* scegli *<Translate android="true" ids="poi_osmwiki"/>* per Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* per iOS.
3. Disabilita l'opzione *<Translate android="true" ids="shared_string_all_languages"/>*.
4. Seleziona la lingua (o le lingue) specifica nella lista aperta.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Impostazione di una lingua preferita su Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazione di una lingua preferita su iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
Nella versione **iOS**, puoi anche impostare la lingua preferita per gli articoli di Wikipedia usando:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Cambia lingua all'interno dell'articolo {#switch-languages-inside-the-article}

Nel caso in cui l'*articolo di Wikipedia* sia disponibile in diverse lingue, puoi cambiare la lingua durante la lettura. Dopo aver toccato l'icona corrispondente nell'angolo in alto a destra dello schermo ti verranno offerte le opzioni tra cui scegliere.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cambio di lingua per un articolo specifico](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cambio di lingua per un articolo specifico](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>

### Scarica immagini {#download-images}

Puoi scegliere se scaricare immagini da Wikipedia sul tuo dispositivo o meno all'interno dell'*articolo di Wikipedia*:

- **Android**. Apri *[articolo di Wikipedia](#display-wikipedia-on-the-map) → &#8942; → Opzioni*
- **iOS**. Apri *[articolo di Wikipedia](#display-wikipedia-on-the-map) → icona Immagine*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Cambio di immagini](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cambio di immagini](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

Nella versione **iOS** dell'app, puoi anche accedere alle opzioni di download delle immagini utilizzando le *impostazioni del plugin Wikipedia*:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Cambio di immagini](@site/static/img/plugins/wikipedia/images_menu_ios.png)

## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: Maggio 2025*