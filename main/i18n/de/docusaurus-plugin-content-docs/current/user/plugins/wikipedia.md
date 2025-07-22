---
source-hash: 9e8ffc4e9ad66f08b7e397dce821b6b3045def307beb315cd2a5eb994c70479b
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

:::info Bezahlfunktion
Das Wikipedia-Plugin ist eine [Bezahlfunktion](../purchases/index.md) der OsmAnd-App.
:::

Mit Wikipedia auf Ihrer Reise können Sie mehr über die Orte erfahren, die Sie besuchen. Es ist offline verfügbar und zeigt beliebte Orte (Android) / Wikipedia-Artikel (iOS) im Zusammenhang mit den Sehenswürdigkeiten direkt auf der Karte an.

Das Wikipedia-Plugin ist eine separate Funktion, die je nach Bedarf aktiviert/deaktiviert werden kann. Nach der Aktivierung können Sie Wikipedia-Daten hochladen, die für jede geografische Region [heruntergeladen](../personal/maps-resources.md#download-maps-maps) wurden. Die Karte enthält zwei Arten von hochgeladenem Wissen aus Wikipedia: kurze Informationen und einen vollständigen Artikel.


Kurze Informationen werden von Wikipedia-POIs (eine Abkürzung für "[Point of Interest](../map/point-layers-on-map.md)") bereitgestellt. Wenn die Wikipedia-Option im Menü aktiviert ist, erscheint ein Wikipedia-POI auf der Karte. Wenn Sie auf einen POI tippen, wird er erweitert, um kurze Informationen aus Wikipedia sowie die Möglichkeit zum Öffnen eines vollständigen Artikels bereitzustellen. Der Wikipedia-POI sowie verwandte Artikel sind offline verfügbar. Sie können sie nach Bedarf lesen, die Sprache wechseln und nach anderen Informationen auf Wikipedia suchen.


[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia) ist eine kostenlose, mehrsprachige, offen kollaborative Online-Enzyklopädie, die von einer Gemeinschaft ehrenamtlicher Redakteure mithilfe eines Wiki-basierten Bearbeitungssystems erstellt und gepflegt wird.

&nbsp;
![Wikipedia](@site/static/img/map/map-wikipedia.png)


## Erforderliche Setup-Parameter {#required-setup-parameters}

Um Wikipedia-Daten auf der Karte anzuzeigen, müssen Sie folgende Einstellungen vornehmen:

1. [Kaufen](../plugins/index.md#purchase) und [aktivieren](../plugins/index.md#enable--disable) Sie das Wikipedia-Plugin im Bereich Plugins des *Hauptmenüs*.
2. Laden Sie die [Wikipedia-Pakete](#download-wikipedia-packages) für die erforderlichen Regionen herunter.
3. Zeigen Sie die [Wikipedia-POIs](#display-wikipedia-on-the-map) auf der Karte für das erforderliche Profil an.
4. Konfigurieren Sie die bevorzugten [Sprachen](#set-preferred-language), um Artikel zu lesen.


## Wikipedia-Pakete herunterladen {#download-wikipedia-packages}

Wikipedia-Daten sind für jede geografische Region verfügbar. Wenn sie für eine Region geladen sind und für eine andere nicht, können Sie im ersten Fall mit Wikipedia-Informationen arbeiten, wenn Sie die Region auf einer Karte anzeigen, und im anderen Fall hat die Region keine Wikipedia-Informationen. Nach dem Laden sind Wikipedia-Daten generell und auch offline verfügbar.

Um die Wikipedia-Daten für eine Region herunterzuladen, gehen Sie zu den [verfügbaren Paketen zum Herunterladen im *Hauptmenü*](../start-with/download-maps.md#download---main-menu), suchen Sie die benötigte Region und öffnen Sie sie. Die Wikipedia-Daten befinden sich unter anderen Paketen.

Sie können Wikipedia-Daten nach Regionen zum Herunterladen wie folgt öffnen:

1. **Android**. Gehen Sie zu: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*
2. **iOS**. Gehen Sie zu: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
3. Wählen Sie die gewünschte Region aus. Sobald die Region geöffnet ist, befinden sich die Wikipedia-Daten unter anderen Paketen.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Um zu sehen, welche Daten bereits hochgeladen wurden, gehen Sie zu *<Translate android="true" ids="shared_string_menu,download_tab_local,download_wikipedia_maps"/>*

![Download Wikipedia in Android](@site/static/img/plugins/wikipedia/download_wikipedia_android2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Um zu sehen, welche Daten bereits hochgeladen wurden, gehen Sie zu *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Download Wikipedia in iOS](@site/static/img/plugins/wikipedia/download_wikipedia_ios2.png)

</TabItem>

</Tabs>


## Wikipedia auf der Karte anzeigen {#display-wikipedia-on-the-map}

Durch das Laden von Wikipedia-Daten für die erforderlichen Regionen können Sie die Sichtbarkeit dieser Daten auf der Karte steuern. Die Sichtbarkeit wird durch [Beliebte Orte (Wikipedia)](../map/point-layers-on-map.md#-wikipedia) **für Android** / [Wikipedia-POIs](../map/point-layers-on-map.md#-wikipedia) **für iOS** gesteuert, die für alle hochgeladenen Regionen durch ein bestimmtes [Profil](../personal/profiles.md) ein- oder ausgeblendet werden können, z. B. ein Profil zum Autofahren, ein Profil zum Radfahren, ein weiteres Profil zur Anzeige öffentlicher Verkehrsmittel und andere.

Um Wikipedia-POIs anzuzeigen oder auszublenden, wählen Sie zuerst ein Profil aus und schalten Sie dann die Option **Wikipedia** ein/aus.

Um Wikipedia-POIs anzuzeigen/auszublenden, gehen Sie wie folgt vor:

1. Gehen Sie zu:

   **<Translate android="true" ids="android_button_seq"/>**: [*<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*](../map/popular_places.md#popular-places-wikipedia-menu)

   **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

2. Wählen Sie ein Profil aus und suchen Sie im Menü nach dem Abschnitt *<Translate android="true" ids="shared_string_show"/>*/*<Translate ios="true" ids="shared_string_show_on_map"/>* der Einstellungen.
3. Schalten Sie *<Translate android="true" ids="poi_osmwiki"/>* **für Android** / *<Translate ios="true" ids="download_wikipedia_maps"/>* **für iOS** ein.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia POIs on Android](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia POI on iOS](@site/static/img/map/map-wikipedia-on-map_ios.png)

</TabItem>

</Tabs>


## Wikipedia durchsuchen {#search-wikipedia}

Mit hochgeladenen Wikipedia-Daten ist es unabhängig vom Sichtbarkeitsmodus der [Wikipedia-POIs](../map/point-layers-on-map.md#-wikipedia) auf der Karte möglich, nach beliebigen Informationen aus Wikipedia zu [suchen](../search/search-poi.md).

Wenn Sie auf die Schaltfläche Suchen tippen, wird ein zusätzliches Panel angezeigt, mit dem Sie den gesamten Text und/oder eine bestimmte Kategorie [durchsuchen](../search/index.md) können. Im ersteren Fall zeigen die Suchergebnisse Wikipedia-POIs mit entsprechenden Wikipedia-Artikeln unter anderen Informationstypen an. Im Falle einer [Wikipedia-Kategoriensuche](../search/search-poi.md#poi-search) zeigen die Suchergebnisse nur Wikipedia-Informationen an, sortiert nach dem nächstgelegenen Ort zum Bereich der Karte, der derzeit auf dem Bildschirm angezeigt wird.

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

- Um nach der Wikipedia-[Kategorie](../search/search-poi.md#poi-search) zu suchen, wählen Sie: *<Translate android="true" ids="map_widget_search,search_categories,shared_string_wikipedia"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Wikipedia category on Android](@site/static/img/map/map-wikipedia-search-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Wikipedia category on iOS](@site/static/img/map/map-wikipedia-search-on-map_ios.png)

</TabItem>

</Tabs>

- Tippen Sie bei Bedarf auf die Option **Wikipedia auf der Karte anzeigen** oben im Suchfenster, und die Suchergebnisse aus der Wikipedia-Kategorie werden auf der Karte angezeigt.


## Wikipedia-Artikel {#wikipedia-article}

Um den Wikipedia-Artikel zu öffnen:

1. Aktivieren Sie die [Wikipedia-POI-Ebene](../map/point-layers-on-map.md#-wikipedia) für ein bestimmtes Profil.
2. Tippen Sie auf der Karte auf einen POI.
3. Tippen Sie im [Kontextmenü](../map/map-context-menu.md) eines POI auf *Details* (oder ziehen Sie einfach das *Kontextmenü* nach oben), um eine Zusammenfassung des ausgewählten Wikipedia-Artikels anzuzeigen.
4. Wenn Sie auf diesen Text tippen (für die iOS-Version), werden Sie zum Offline-Wikipedia-Artikel weitergeleitet.
5. Verwenden Sie die Schaltfläche *Artikel lesen* oder *Vollständigen Artikel lesen*, um die vollständige Version des Wikipedia-Artikels zu öffnen.



<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![French Wikipedia POI in English](@site/static/img/plugins/wikipedia/Andr-french-wikipedia-in-eng1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![French Wikipedia POI in English in iOS](@site/static/img/plugins/wikipedia/ios_wiki_language2.png)

</TabItem>

</Tabs>


## Wikipedia-Einstellungen {#wikipedia-settings}

Sie können die [Sprache(n) einstellen](#set-preferred-language), in denen Sie [Artikel](#wikipedia-article) bevorzugt lesen, und auch die [Bilder-Download-Optionen](#download-images) für jedes [Profil](../personal/profiles.md) konfigurieren.

### Bevorzugte Sprache einstellen {#set-preferred-language}

In den **Android**- und **iOS**-Versionen der OsmAnd-App können Sie Ihre bevorzugte Sprache (oder Sprachen) für die Anzeige von Wikipedia-Artikeln über das Menü *Karte konfigurieren* festlegen. Wenn Sie mehr als eine Sprache auswählen, werden die *Wikipedia*-Artikel auf der Karte in einer dieser Sprachen angezeigt. Gehen Sie zu:

1. *<Translate android="true" ids="shared_string_menu,configure_map"/>*.
2. Wählen Sie das benötigte Profil aus und wählen Sie im Abschnitt *<Translate android="true" ids="shared_string_show"/>* die Option *<Translate android="true" ids="poi_osmwiki"/>* für Android / *<Translate ios="true" ids="download_wikipedia_maps"/>* für iOS.
3. Deaktivieren Sie die Option *<Translate android="true" ids="shared_string_all_languages"/>*.
4. Wählen Sie in der geöffneten Liste die gewünschte(n) Sprache(n) aus.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Setting a preferred language on Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Setting a preferred language on iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

:::note
In der **iOS**-Version können Sie die bevorzugte Sprache für Wikipedia-Artikel auch über folgende Optionen festlegen:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/>* → &#x2699

:::

### Sprachen innerhalb des Artikels wechseln {#switch-languages-inside-the-article}

Falls der *Wikipedia-Artikel* in verschiedenen Sprachen verfügbar ist, können Sie die Sprache während des Lesens wechseln. Nach dem Tippen auf das entsprechende Symbol in der oberen rechten Ecke des Bildschirms werden Ihnen Optionen zur Auswahl angeboten.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/and_lang_inside_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Switching languages for a specific article](@site/static/img/plugins/wikipedia/switch_languages_ios_1.png)

</TabItem>

</Tabs>


### Bilder herunterladen {#download-images}

Sie können wählen, ob Sie Bilder von Wikipedia auf Ihr Gerät herunterladen möchten oder nicht, innerhalb des *Wikipedia-Artikels*:

- **Android**. Öffnen Sie *[Wikipedia-Artikel](#display-wikipedia-on-the-map) → &#8942; → Optionen*
- **iOS**. Öffnen Sie *[Wikipedia-Artikel](#display-wikipedia-on-the-map) → Bildsymbol*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Switching images](@site/static/img/plugins/wikipedia/images_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Switching images](@site/static/img/plugins/wikipedia/images_menu_ios_2.png)

</TabItem>

</Tabs>

In der **iOS**-Version der App können Sie über die *Wikipedia-Plugin-Einstellungen* auch auf die Bild-Download-Optionen zugreifen:

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps,wikivoyage_download_pics"/>*
- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,download_wikipedia_maps"/> → &#x2699 → <Translate ios="true" ids="wikivoyage_download_pics"/>*

![Switching images](@site/static/img/plugins/wikipedia/images_menu_ios.png)


## Verwandte Artikel {#related-articles}

- [Mit der Karte interagieren](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

> *Zuletzt aktualisiert: Mai 2025*