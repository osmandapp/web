---
source-hash: 7b2a1da92c73d27cbba97c41e64240a1c3762bed230360041039de13eae2fd73
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




## Übersicht {#overview}

:::info Kostenpflichtige Funktion
Das Wikipedia-Plugin ist eine [kostenpflichtige Funktion](../purchases/index.md) der OsmAnd-App.  
:::

Mit Wikipedia auf Ihrer Reise können Sie mehr über die Orte erfahren, die Sie besuchen. Es ist offline verfügbar und zeigt beliebte Orte (Android) / Wikipedia-Artikel (iOS) zu den Sonderzielen direkt auf der Karte an.  

Das Wikipedia-Plugin ist eine separate Funktion, die bei Bedarf aktiviert/deaktiviert werden kann. Nach der Aktivierung können Sie für jede geografische Region [heruntergeladene](../personal/maps-resources#maps--resources) Wikipedia-Daten hochladen. Die Karte enthält zwei Arten von hochgeladenem Wissen aus Wikipedia: eine Kurzinformation und einen vollständigen Artikel.  


Kurzinformationen werden durch Wikipedia-POIs (eine Abkürzung für "[Sonderziel](../map/point-layers-on-map.md)") bereitgestellt. Wenn die Wikipedia-Option im Menü aktiviert ist, erscheint ein Wikipedia-POI auf der Karte. Wenn Sie auf einen Sonderziel tippen, wird er erweitert, um eine kurze Information aus Wikipedia anzuzeigen und die Möglichkeit zu bieten, einen vollständigen Artikel zu öffnen. Der Wikipedia-POI sowie die zugehörigen Artikel sind offline verfügbar. Sie können sie bei Bedarf lesen, die Sprache wechseln und nach anderen Informationen auf Wikipedia suchen.  


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) ist eine kostenlose, mehrsprachige, kollaborative Online-Enzyklopädie, die von einer Gemeinschaft freiwilliger Autoren unter Verwendung eines Wiki-basierten Bearbeitungssystems erstellt und gepflegt wird.  

&nbsp;  
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um Wikipedia-Daten auf der Karte anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. [Kaufen](../plugins/index.md#purchase) und [aktivieren](../plugins/index.md#enable--disable) Sie das Wikipedia-Plugin im Bereich Plugins des *Hauptmenüs*.
2. Laden Sie die [Wikipedia-Pakete](#download-wikipedia-packages) für die gewünschten Regionen herunter.  
3. Zeigen Sie die [Wikipedia-POIs](#display-wikipedia-on-the-map) auf der Karte für das gewünschte Profil an.  
4. Konfigurieren Sie die bevorzugten [Sprachen](#set-preferred-language) zum Lesen von Artikeln.


## Wikipedia-Pakete herunterladen {#download-wikipedia-packages}

Wikipedia-Daten sind für jede geografische Region verfügbar. Wenn sie für eine Region geladen sind und für eine andere nicht, können Sie im ersten Fall mit Wikipedia-Informationen arbeiten, wenn Sie die Region auf einer Karte betrachten, und im anderen Fall wird die Region keine Wikipedia-Informationen haben. Einmal geladen, werden die Wikipedia-Daten allgemein und auch offline verfügbar.

Um die Wikipedia-Daten für eine Region herunterzuladen, gehen Sie zu den [verfügbaren Paketen zum Herunterladen im *Hauptmenü*](../start-with/download-maps.md#download), suchen Sie die gewünschte Region und öffnen Sie sie. Die Wikipedia-Daten befinden sich unter den anderen Paketen.

Sie können Wikipedia-Daten zum Herunterladen nach Regionen wie folgt öffnen:

1. **Android**. Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Wählen Sie die gewünschte Region aus. Sobald die Region geöffnet ist, befinden sich die Wikipedia-Daten unter den anderen Paketen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Um zu sehen, welche Daten bereits hochgeladen wurden, gehen Sie zu *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Wikipedia in Android herunterladen](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Um zu sehen, welche Daten bereits hochgeladen wurden, gehen Sie zu *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![Wikipedia in iOS herunterladen](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Wikipedia auf der Karte anzeigen {#display-wikipedia-on-the-map}

Durch das Laden von Wikipedia-Daten für die gewünschten Regionen können Sie die Sichtbarkeit dieser Daten auf der Karte steuern. Die Sichtbarkeit wird durch [Beliebte Orte (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **für Android** / [Wikipedia-POIs](../map/point-layers-on-map.md#-wikipedia) **für iOS** gesteuert, die für alle hochgeladenen Regionen durch ein bestimmtes [Profil](../personal/profiles.md) ein- oder ausgeblendet werden können, z. B. ein Profil für Autofahren, ein Profil für Radfahren, ein anderes Profil zur Anzeige öffentlicher Verkehrsmittel und andere.  

Um Wikipedia-POIs ein- oder auszublenden, wählen Sie zuerst ein Profil und schalten Sie dann die **Wikipedia**-Option ein/aus.

Um Wikipedia-POIs ein-/auszublenden, gehen Sie wie folgt vor:

1. Gehen Sie zu: 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Wählen Sie ein Profil und suchen Sie im Menü den Einstellungsbereich *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>*.  
3. Schalten Sie *<Translate android="true" ids="poi_osmwiki"/>* **für Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **für iOS** ein.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia-POIs auf Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia-POI auf iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Wikipedia durchsuchen {#search-wikipedia}

Mit hochgeladenen Wikipedia-Daten ist es unabhängig vom Sichtbarkeitsmodus der [Wikipedia-POIs](../map/point-layers-on-map.md#-wikipedia) auf der Karte möglich, nach beliebigen Informationen aus Wikipedia zu [suchen](../search/search-poi.md).

Wenn Sie auf die Schaltfläche "Suchen" tippen, erscheint ein zusätzliches Panel, mit dem Sie den gesamten Text und/oder eine bestimmte Kategorie [durchsuchen](../search/index.md) können. Im ersten Fall zeigen die Suchergebnisse Wikipedia-POIs mit entsprechenden Wikipedia-Artikeln neben anderen Arten von Informationen an. Im Falle einer [Wikipedia-Kategoriensuche](../search/search-poi.md#poi-search-by-categories) zeigen die Suchergebnisse nur Wikipedia-Informationen an, sortiert nach der nächstgelegenen Position zum aktuell auf dem Bildschirm angezeigten Kartenbereich.  

- In der **Android**-Version können Sie die [Suche](../search/index.md) öffnen, indem Sie auf das *Suchsymbol* in der oberen linken Ecke des Bildschirms tippen und/oder auf die *Suchoption* im Menü tippen.
- In der **iOS**-Version befindet sich das Suchsymbol zum Öffnen der [Suche](../search/index.md) in der oberen linken Ecke des Bildschirms.

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

- Um nach der Wikipedia-[Kategorie](../search/search-poi.md#poi-search-by-categories) zu suchen, wählen Sie: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia-Kategorie auf Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia-Kategorie auf iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Tippen Sie bei Bedarf auf die Option **Wikipedia auf der Karte anzeigen** oben im Suchfeld, und die Suchergebnisse aus der Wikipedia-Kategorie werden auf der Karte angezeigt.  


## Wikipedia-Artikel {#wikipedia-article}

So öffnen Sie den Wikipedia-Artikel:

1. Aktivieren Sie die [Wikipedia-POI-Ebene](../map/point-layers-on-map.md#-wikipedia) für ein bestimmtes Profil.
2. Tippen Sie auf einen POI auf der Karte.
3. Tippen Sie im [Kontextmenü](../map/map-context-menu.md) eines POIs auf *Details* (oder ziehen Sie das *Kontextmenü* einfach nach oben), um eine Zusammenfassung des ausgewählten Wikipedia-Artikels anzuzeigen.
4. Wenn Sie auf diesen Text tippen (für die iOS-Version), werden Sie zum Offline-Wikipedia-Artikel weitergeleitet.
5. Verwenden Sie die Schaltfläche *Artikel lesen* oder *Vollständigen Artikel lesen*, um die Vollversion des Wikipedia-Artikels zu öffnen.



<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Französischer Wikipedia-POI auf Englisch](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Französischer Wikipedia-POI auf Englisch in iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Wikipedia-Einstellungen {#wikipedia-settings}

Sie können die [Sprache(n) festlegen](#set-preferred-language), in der Sie [Artikel](#wikipedia-article) bevorzugt lesen möchten, und auch die [Optionen zum Herunterladen von Bildern](#download-images) für jedes [Profil](../personal/profiles.md) konfigurieren.

### Bevorzugte Sprache einstellen {#set-preferred-language}

In den **Android**- und **iOS**-Versionen der OsmAnd-App können Sie Ihre bevorzugte Sprache (oder Sprachen) für die Anzeige von Wikipedia-Artikeln über das Menü *Karte konfigurieren* einstellen. Wenn Sie mehr als eine Sprache auswählen, werden die *Wikipedia*-Artikel auf der Karte in jeder dieser Sprachen angezeigt. Gehen Sie zu:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Wählen Sie das gewünschte Profil und im Abschnitt *<Translate android="true" ids="shared_string_show"/>* wählen Sie *<Translate android="true" ids="poi_osmwiki"/>* für Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* für iOS.  
3. Deaktivieren Sie die Option *<Translate android="true" ids="shared_string_all_languages"/>*.  
4. Wählen Sie eine oder mehrere bestimmte Sprachen in der geöffneten Liste aus.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bevorzugte Sprache auf Android einstellen](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bevorzugte Sprache auf iOS einstellen](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
In der **iOS**-Version können Sie die bevorzugte Sprache für Wikipedia-Artikel auch über folgende Wege einstellen:  

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Sprachen innerhalb des Artikels wechseln {#switch-languages-inside-the-article}

Falls der *Wikipedia-Artikel* in verschiedenen Sprachen verfügbar ist, können Sie die Sprache während des Lesens wechseln. Nachdem Sie auf das entsprechende Symbol in der oberen rechten Ecke des Bildschirms getippt haben, werden Ihnen Optionen zur Auswahl angeboten.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sprachen für einen bestimmten Artikel wechseln](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Sprachen für einen bestimmten Artikel wechseln](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Bilder herunterladen {#download-images}

Sie können wählen, ob Sie Bilder von Wikipedia auf Ihr Gerät herunterladen möchten oder nicht, innerhalb des *Wikipedia-Artikels*:

- **Android**. Öffnen Sie *[Wikipedia-Artikel](#display-wikipedia-on-the-map) → &#8942; → Optionen*
- **iOS**. Öffnen Sie *[Wikipedia-Artikel](#display-wikipedia-on-the-map) → Bildsymbol*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bilder umschalten](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Bilder umschalten](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

In der **iOS**-Version der App können Sie auch über die *Wikipedia-Plugin-Einstellungen* auf die Optionen zum Herunterladen von Bildern zugreifen:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*  
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Bilder umschalten](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Allgemeine Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)