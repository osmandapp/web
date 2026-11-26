---
source-hash: 15d49bb0a51bde6a96859143a096fc9ae43659fa8e1fada3dc9753b8a8f92c70
sidebar_position: 20
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

Mit Wikipedia auf Ihrer Reise können Sie mehr über die Orte erfahren, die Sie besuchen. Es ist offline verfügbar und zeigt beliebte Orte (Android) / Wikipedia-Artikel (iOS), die mit den Punkten von Interesse zusammenhängen, direkt auf der Karte an.  

Das Wikipedia-Plugin ist eine separate Funktion, die bei Bedarf aktiviert/deaktiviert werden kann. Nach der Aktivierung können Sie für jede geografische Region [heruntergeladene](../personal/maps-resources#downloads-menu) Wikipedia-Daten hochladen. Die Karte enthält zwei Arten von hochgeladenem Wissen aus Wikipedia: eine Kurzinformation und einen vollständigen Artikel.  


Kurzinformationen werden durch Wikipedia-POIs (eine Abkürzung für "[point of interest](../map/point-layers-on-map.md)") bereitgestellt. Wenn die Wikipedia-Option im Menü aktiviert ist, erscheint ein Wikipedia-POI auf der Karte. Wenn Sie auf einen Punkt von Interesse tippen, wird er erweitert, um eine kurze Information aus Wikipedia anzuzeigen und die Möglichkeit zu bieten, einen vollständigen Artikel zu öffnen. Der Wikipedia-POI sowie die zugehörigen Artikel sind offline verfügbar. Sie können sie bei Bedarf lesen, die Sprache wechseln und nach anderen Informationen auf Wikipedia suchen.  


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) ist eine kostenlose, mehrsprachige, offen kollaborative Online-Enzyklopädie, die von einer Gemeinschaft freiwilliger Editoren unter Verwendung eines wiki-basierten Bearbeitungssystems erstellt und gepflegt wird.  

&nbsp;  
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Erforderliche Einrichtungsparameter {#required-setup-parameters}

Um Wikipedia-Daten auf der Karte anzuzeigen, müssen Sie die folgenden Einstellungen vornehmen:

1. [Kaufen](../plugins/index.md#purchase) und [Aktivieren](../plugins/index.md#enable--disable) Sie das Wikipedia-Plugin im Bereich Plugins des *Hauptmenüs*.
2. Laden Sie die [Wikipedia-Pakete](#download-wikipedia-packages) für die erforderlichen Regionen herunter.  
3. Zeigen Sie die [Wikipedia-POIs](#display-wikipedia-on-the-map) auf der Karte für das erforderliche Profil an.  
4. Konfigurieren Sie bevorzugte [Sprachen](#set-preferred-language) zum Lesen von Artikeln.


## Wikipedia-Pakete herunterladen {#download-wikipedia-packages}

Wikipedia-Daten sind für jede geografische Region verfügbar. Wenn sie für eine Region geladen sind und für eine andere nicht, können Sie im ersten Fall mit Wikipedia-Informationen arbeiten, wenn Sie die Region auf einer Karte betrachten, und im anderen Fall wird die Region keine Wikipedia-Informationen haben. Einmal geladen, werden die Wikipedia-Daten allgemein und auch offline verfügbar.

Um die Wikipedia-Daten für eine Region herunterzuladen, gehen Sie zu den [verfügbaren Paketen zum Herunterladen im *Hauptmenü*](../start-with/download-maps.md#downloading-maps), suchen Sie die benötigte Region und öffnen Sie sie. Die Wikipedia-Daten befinden sich unter den anderen Paketen.

Sie können Wikipedia-Daten zum Herunterladen nach Regionen wie folgt öffnen:

1. **Android**. Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Wählen Sie die erforderliche Region aus. Sobald die Region geöffnet ist, befinden sich die Wikipedia-Daten unter den anderen Paketen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Um zu sehen, welche Daten bereits hochgeladen wurden, gehen Sie zu *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*  

![Wikipedia unter Android herunterladen](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Um zu sehen, welche Daten bereits hochgeladen wurden, gehen Sie zu *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*  

![Wikipedia unter iOS herunterladen](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Wikipedia auf der Karte anzeigen {#display-wikipedia-on-the-map}

Durch das Laden von Wikipedia-Daten für die erforderlichen Regionen können Sie die Sichtbarkeit dieser Daten auf der Karte steuern. Die Sichtbarkeit wird durch [Beliebte Orte (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **für Android** / [Wikipedia-POIs](../map/point-layers-on-map.md#-wikipedia) **für iOS** gesteuert, die für alle hochgeladenen Regionen durch ein bestimmtes [Profil](../personal/profiles.md) ein- oder ausgeblendet werden können, z. B. ein Profil für Autofahren, ein Profil für Radfahren, ein anderes Profil zur Anzeige öffentlicher Verkehrsmittel und andere.  

Um Wikipedia-POIs ein- oder auszublenden, wählen Sie zuerst ein Profil und schalten Sie dann die **Wikipedia**-Option ein/aus.

Um Wikipedia-POIs ein-/auszublenden, gehen Sie wie folgt vor:

1. Gehen Sie zu: 

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#overview) 

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Wählen Sie ein Profil und suchen Sie im Menü den Einstellungsbereich *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>*.  
3. Schalten Sie *<Translate android="true" ids="poi_osmwiki"/>* **für Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **für iOS** ein.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia-POIs unter Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia-POI unter iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Wikipedia durchsuchen {#search-wikipedia}

Mit hochgeladenen Wikipedia-Daten ist es unabhängig vom Sichtbarkeitsmodus der [Wikipedia-POIs](../map/point-layers-on-map.md#-wikipedia) auf der Karte möglich, nach beliebigen Informationen aus Wikipedia zu [suchen](../search/search-poi.md).

Wenn Sie auf die Schaltfläche "Suchen" tippen, erscheint ein zusätzliches Panel, mit dem Sie den gesamten Text und/oder eine bestimmte Kategorie [durchsuchen](../search/index.md) können. Im ersten Fall zeigen die Suchergebnisse Wikipedia-POIs mit entsprechenden Wikipedia-Artikeln neben anderen Arten von Informationen an. Im Falle einer [Wikipedia-Kategoriensuche](../search/search-poi.md#poi-search-by-categories) zeigen die Suchergebnisse nur Wikipedia-Informationen an, sortiert nach der nächstgelegenen Position zum aktuell auf dem Bildschirm angezeigten Kartenbereich.  

- In der **Android**-Version können Sie die [Suche](../search/index.md) öffnen, indem Sie auf das *Suchsymbol* in der oberen linken Ecke des Bildschirms tippen und/oder auf die *Suchoption* im Menü tippen.
- In der **iOS**-Version befindet sich das Suchsymbol zum Öffnen der [Suche](../search/index.md) in der oberen linken Ecke des Bildschirms.
- Um nach der Wikipedia-[Kategorie](../search/search-poi.md#poi-search-by-categories) zu suchen, wählen Sie: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia-Kategorie unter Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia-Kategorie unter iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Tippen Sie bei Bedarf auf die Option **Wikipedia auf der Karte anzeigen** oben im Suchpanel, und die Suchergebnisse aus der Wikipedia-Kategorie werden auf der Karte angezeigt.  


## Wikipedia-Artikel {#wikipedia-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

So öffnen Sie den Wikipedia-Artikel:

1. Aktivieren Sie die [Wikipedia-POI-Ebene](../map/point-layers-on-map.md#-wikipedia) für ein bestimmtes Profil.
2. Tippen Sie auf einen POI auf der Karte.
3. Im [Kontextmenü](../map/map-context-menu.md) eines POIs tippen Sie auf [Details](../map/map-context-menu.md#details) (oder ziehen Sie das *Kontextmenü* einfach nach oben), um einen Auszug des gewählten [Wikipedia-Artikels](../map/map-context-menu.md#article-description) anzuzeigen.
4. Verwenden Sie die Schaltfläche *Vollständigen Artikel lesen*, um die Vollversion des Wikipedia-Artikels zu öffnen.
5. Wenn die Wikipedia-Daten nicht heruntergeladen wurden, erscheint die Schaltfläche *Auf Wikipedia lesen*.
6. Wenn Sie auf diese Schaltfläche tippen, wird ein Dialog mit den folgenden Optionen geöffnet: 
- Wikipedia herunterladen und im Browser öffnen (kostenpflichtige Version).
- Wikipedia offline lesen und im Browser öffnen (kostenlose Version).

![Französischer Wikipedia-POI auf Englisch](@site/static/img/plugins/wikipedia/wikipedia_article_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

So öffnen Sie den Wikipedia-Artikel:

1. Aktivieren Sie die [Wikipedia-POI-Ebene](../map/point-layers-on-map.md#-wikipedia) für ein bestimmtes Profil.
2. Tippen Sie auf einen POI auf der Karte.
3. Im [Kontextmenü](../map/map-context-menu.md) eines POIs tippen Sie auf [Details](../map/map-context-menu.md#details) (oder ziehen Sie das *Kontextmenü* einfach nach oben), um einen Auszug des gewählten [Wikipedia-Artikels](../map/map-context-menu.md#article-description) anzuzeigen.
4. Wenn Sie auf diesen Text tippen, werden Sie zum Offline-Wikipedia-Artikel weitergeleitet.
5. Verwenden Sie die Schaltfläche *Artikel lesen*, um die Vollversion des Wikipedia-Artikels zu öffnen.

![Französischer Wikipedia-POI auf Englisch unter iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Wikipedia-Einstellungen {#wikipedia-settings}

Sie können die [Sprache(n)](#set-preferred-language) festlegen, in der Sie bevorzugt [Artikel](#wikipedia-article) lesen möchten, für jedes [Profil](../personal/profiles.md), die [Optionen zum Herunterladen von Bildern](#download-images) konfigurieren und den [Bild-Cache](#image-cache) verwalten. Unter iOS werden die Optionen zum Herunterladen von Bildern für jedes Profil festgelegt. Unter Android gelten sie für alle Profile.

Alle Wikipedia-Einstellungen finden Sie in den Einstellungen des Wikipedia-Plugins:

- **Android**. Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_wikipedia,shared_string_settings"/>*. Wählen Sie mit der Profilschaltfläche oben auf dem Bildschirm das Profil aus, dessen Einstellungen Sie ändern möchten.
- **iOS**. Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699;*

### Bevorzugte Sprache einstellen {#set-preferred-language}

In den **Android**- und **iOS**-Versionen der OsmAnd-App können Sie Ihre bevorzugte Sprache (oder Sprachen) für die Anzeige von Wikipedia-Artikeln über das Menü *Karte konfigurieren* einstellen. Wenn Sie mehr als eine Sprache auswählen, werden die *Wikipedia*-Artikel auf der Karte in jeder dieser Sprachen angezeigt. Gehen Sie zu:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Wählen Sie das gewünschte Profil und im Abschnitt *<Translate android="true" ids="shared_string_show"/>* wählen Sie *<Translate android="true" ids="poi_osmwiki"/>* für Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* für iOS.  
3. Deaktivieren Sie die Option *<Translate android="true" ids="shared_string_all_languages"/>*.  
4. Wählen Sie eine oder mehrere bestimmte Sprachen in der geöffneten Liste aus.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bevorzugte Sprache unter Android einstellen](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bevorzugte Sprache unter iOS einstellen](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
Sie können die bevorzugte Sprache für Wikipedia-Artikel auch in den Einstellungen des Wikipedia-Plugins festlegen:

- **Android**. *<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_wikipedia,shared_string_settings,shared_string_languages"/>*
- **iOS**. *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*
- **iOS**. *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699;*

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

- **Android**. Öffnen Sie *[Wikipedia article](#display-wikipedia-on-the-map) → &#8942; → Options*
- **iOS**. Öffnen Sie *[Wikipedia article](#display-wikipedia-on-the-map) → Image icon*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bilder umschalten](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Bilder umschalten](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

Sie können auch in den *Wikipedia-Plugin-Einstellungen* auf die Optionen zum Herunterladen von Bildern zugreifen:

- **Android**. *<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_wikipedia,shared_string_settings,download_images"/>*
- **iOS**. *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*
- **iOS**. *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699; → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Bilder umschalten](@site/static/img/plugins/wikipedia/images_menu_ios.png)

### Bild-Cache {#image-cache}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Bild-Cache unter Android](@site/static/img/plugins/wikipedia/image_cache_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Bild-Cache unter iOS](@site/static/img/plugins/wikipedia/image_cache_ios.webp)

</TabItem>

</Tabs>

Die Einstellungen des Wikipedia-Plugins zeigen die Größe der auf Ihrem Gerät gespeicherten Bilder an. Der Bild-Cache wird mit den Reiseführern geteilt, daher werden beim Leeren auch die gespeicherten Bilder der Reiseführer gelöscht.

Um die gespeicherten Bilder zu löschen, gehen Sie zu:

- **Android**. *<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_wikipedia,shared_string_settings,images_cache"/>* → *<Translate android="true" ids="shared_string_clear"/>*
- **iOS**. *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699; → <Translate ios="true" ids="wikivoyage_download_pics,remove_cache"/>*


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)