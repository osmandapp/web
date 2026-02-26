---
source-hash: 83d4ecf6d84f9f5018413830b5bf57a59206a20ae29a9582bf53a3d68c72d1e2
sidebar_position: 7
title:  Rasterkaarten (Online / Offline)
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

<!--
<InfoIncompleteArticle/>
-->

## Overzicht {#overview}

Rasterkaarten zijn belangrijke en nuttige toevoegingen aan de vectorkaarten van OsmAnd. Ze stellen u in staat om verschillende kaartbronnen te combineren met vectorkaarten. Informatie over heuvels en hellingen wordt bijvoorbeeld weergegeven als een rasterlaag. U kunt een overlay van wandelpaden, regenkaarten, realtime verkeersgegevens en een overlay van satellietbeelden weergeven op een doorschijnende basisvectorkaart. U kunt ook de standaardkaarten overschakelen naar rastertegels op het web.

Rasterkaarten in OsmAnd worden doorgaans geleverd als een set kleine afbeeldingen (tegels) die in een raster zijn gerangschikt. In tegenstelling tot vectorkaarten, die objecten zoals wegen, punten en polygonen als gegevens opslaan, zijn rastertegels voorgerenderde afbeeldingen en kunnen ze er gepixeld uitzien bij hoge zoomniveaus omdat elke pixel een vaste waarde heeft.

**Voordelen:**
- Omdat rasterkaarten vooraf worden gerenderd, laden ze sneller, waardoor het apparaat geen gegevens in realtime hoeft te verwerken en te renderen.
- Rasterkaarten kunnen dynamisch worden geladen tijdens het browsen.
- U kunt een offline cache aanmaken en alleen ontbrekende tegels downloaden als dat nodig is.
- U kunt een onbeperkt aantal externe webbronnen voor rasterkaarten gebruiken, wat het flexibel maakt voor verschillende kaarttypen, zoals satellietweergaven of gespecialiseerde kaarten.
- Rastergegevens, zoals verkeersinformatie, kunnen regelmatig worden bijgewerkt na het verlopen (bijv. elke 20-30 minuten, afhankelijk van de configuratie).

**Nadelen:**
- Rasterkaarten nemen aanzienlijk meer ruimte in beslag dan vectorkaarten. Een stadskaart kan bijvoorbeeld 15 MB zijn als vectorkaart, maar toenemen tot 50 MB op zoomniveau 15, 200 MB op zoomniveau 16 en tot 800 MB op zoomniveau 17.
- U kunt niet op specifieke plaatsen of objecten op rasterkaarten tikken om meer informatie te krijgen.
- Rasterkaarten kunnen niet worden gestyled of gewijzigd om specifieke objecten uit te sluiten.
- Te ver inzoomen kan ervoor zorgen dat het beeld gepixeld lijkt, vooral als er geen tegels met hoge resolutie beschikbaar zijn.
- Het is niet mogelijk om de kaart te draaien zonder de tekst te draaien, wat het lezen van labels moeilijk kan maken.


## Gebruiksscenario's {#use-cases}

Rasterkaarten hebben een breed scala aan toepassingen. Hier zijn enkele van de meest populaire:

- Satellietbeelden als onderlaag.
- Realtime verkeersinformatie.
- Regenvoorspelling als een overlay.
- Topografische kaarten met arcering van heuvels en hellingen.
- Actieve fiets- en hardlooproutes als een overlay.
- Realtime scheepsinformatie.
- Online OpenStreetMap-tegels voor OSM-bewerking.

![Overzicht online kaarten](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
U kunt ook de [hoofdbron](#main) van kaarten wijzigen van vectorkaarten naar online tegels.
:::


## Aan de slag {#getting-started}

**Plugin inschakelen**.

- **iOS**. Voor *iOS* werkt deze functie standaard.
- **Android**. Voor *Android*, om rasterkaarten in OsmAnd te gebruiken, moet u de [Online kaarten plugin](../plugins/online-map.md) inschakelen. Volg deze stappen: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**[Laagparameters wijzigen](#layers)**. Om de zichtbaarheid en de mix van rasterkaartlagen te verbeteren, kunt u de laagtransparantie aanpassen met de schuifregelaar op het scherm. Bovendien kunt u de stijl van de vectorkaart aanpassen door polygonen te verbergen, waardoor de onderliggende lagen beter zichtbaar worden. Dit is vooral handig bij het bekijken van satellietbeelden.


## Lagen {#layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Kaarten tonen](@site/static/img/plugins/online-maps/show-maps-andr_new.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Kaarten tonen](@site/static/img/plugins/online-maps/show-maps-ios_new.png)  

</TabItem>

</Tabs>

In OsmAnd kunnen rasterkaarten dienen als een extra kaartbron naast de standaard vectorkaarten, die zijn geoptimaliseerd voor offline gebruik.  

U heeft de flexibiliteit om één of twee online tegel lagen toe te voegen als aanvulling op uw basiskaart. Hiermee kunt u maximaal drie kaartlagen tegelijk op uw scherm bekijken (plus Terrein). Denk eraan als een taart: [**Onderlaag**](#underlay) (rasterbasis eronder), [**Hoofd**](#main) (vector* of raster kern), [**Overlay**](#overlay) (raster erbovenop), met [**Terrein**](#terrain) arcering over alles heen. U kunt bijvoorbeeld de offline vectorkaart van OsmAnd als Hoofd-basis gebruiken, er een satellietweergave overheen leggen en een fietspadenkaart als Onderlaag plaatsen voor extra detail.

>[Vectorkaarten](./vector-maps.md) zijn **alleen** beschikbaar in de [Hoofd](#main) laag (en zijn daar de standaard). Rasterkaarten kunnen worden gebruikt in alle drie de lagen: Hoofd, Onderlaag en Overlay.



Als u deze lagen sneller wilt overschakelen ([Hoofdkaartbron](#main), [Overlay](#overlay), [Onderlaag](#underlay) en [Terrein](#terrain)), kunt u een [Snelle actie (Aangepaste knop)](../widgets/quick-action.md) toevoegen aan het kaartscherm en de bijbehorende kaartacties eraan toewijzen.

U kunt ook de transparantie van de basiskaart aanpassen om deze met uw lagen te mengen. Indien nodig kunt u een transparantieschuifregelaar op het hoofdscherm inschakelen voor snelle aanpassingen.

### Hoofd {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,gpx_add_track"/>*  

![Kaarten tonen](@site/static/img/plugins/online-maps/map_source_1.png) ![Kaarten tonen](@site/static/img/plugins/online-maps/map_source_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps,map_settings_install_more"/>*  

![Kaarten tonen](@site/static/img/plugins/online-maps/map_type_new.png)

</TabItem>

</Tabs>

Standaard is de hoofdkaart ingesteld op [Offline vectorkaarten](./vector-maps.md) (OsmAnd-kaarten), geoptimaliseerd voor offline gebruik. U kunt een andere kaartbron uit de lijst kiezen (_Meer toevoegen_ (Android) of _Meer installeren_ (iOS)) of [uw eigen toevoegen](#add-new-online-source).

### Overlay {#overlay}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Onderlaag / overlay configureren Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Onderlaag / overlay configureren iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. De overlaykaart *in-/uitschakelen*.
2. *Overlaytransparantie* (*Android*)/ *Transparantie* van de overlaykaart (*iOS*).
3. *Transparantieschuifregelaar tonen* (*Android*) / *Schuifregelaar op de kaart tonen* (*iOS*). Snelle toegang tot de transparantie-instelling.
4. *Bron van overlaykaart* (*Android*) / *Beschikbare lagen* (*iOS*). Selecteer een online tegelkaart uit de lijst om deze direct als uw overlaylaag toe te voegen.
5. *Kaartsymbolen tonen* - zoals tekst, verkeersborden en andere.  
6. *Online bron toevoegen* (*iOS*). [Nieuwe online bron toevoegen](#add-new-online-source).
7. *Importeren uit documenten* (*iOS*).

### Onderlaag {#underlay}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Onderlaag / overlay configureren Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Onderlaag / overlay configureren iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. De onderlaagkaart *in-/uitschakelen*.
2. *Transparantie van de basiskaart*.
3. *Transparantieschuifregelaar tonen* (*Android*) / *Schuifregelaar op de kaart tonen* (*iOS*). Snelle toegang tot de transparantie-instelling.
4. *Bron van onderlaagkaart* (*Android*) / *Beschikbare lagen* (*iOS*). Selecteer een online tegelkaart uit de lijst om deze direct als uw onderlaag toe te voegen.
5. *Polygonen tonen/verbergen*.
6. *Online bron toevoegen* (*iOS*). [Nieuwe online bron toevoegen](#add-new-online-source).
7. *Importeren uit documenten* (*iOS*).

### Terrein {#terrain}

![Terreinlagen](@site/static/img/plugins/online-maps/terrain_two_layers.png)

In de context van rasterkaarten verwijst [Terrein](../plugins/topography.md#terrain) naar een reliëfarceringslaag die helpt om de vorm van het landschap op een platte kaart te visualiseren. Deze laag is gebaseerd op rasterterreingegevens en wordt bovenop de basiskaart weergegeven om de perceptie van hellingen en terreinvormen te verbeteren.

Terrein arcering is een van de rasterlagen die beschikbaar zijn in OsmAnd en vertegenwoordigt een gekleurde reliëfvisualisatie afgeleid van hoogtegegevens. 

Om de Terreinlaag te gebruiken, moet u:

1. De Topografie-plugin aanschaffen:
    - [Android-aankopen](../purchases/android.md)
    - [iOS-aankopen](../purchases/ios.md)
2. De [Topografie-plugin](../plugins/topography.md) inschakelen:  
    *Menu → Plugins → ︙ → Inschakelen*
3. Selecteer uw gewenste regio en download Hillshades of Slopes (voor Maps+) of Terreinkaart 3D (voor Pro).
4. Het downloadproces kan enige tijd duren, afhankelijk van de grootte van de geselecteerde regio en de snelheid van uw internetverbinding.

Terreinvisualisatie kan worden gecombineerd met andere rasterlagen en met de standaard vectorkaart.

Geavanceerdere terreinfuncties, inclusief 3D-reliëf (alleen Pro) en aanvullende terreingerelateerde opties, worden beschreven in het [Topografie-artikel](../plugins/topography.md).


## Voorbereiden/Kopiëren kaarten {#preparecopy-maps}

Er zijn meerdere manieren om een nieuwe rasterkaart toe te voegen, deze van een ander apparaat te kopiëren, voor te bereiden op een pc en tegels vooraf te downloaden voor offline gebruik. U kunt bijvoorbeeld uw eigen kaartpakket maken op een pc met speciale software zoals [MOBAC, OsmAndMapCreator, enz.](../../technical/map-creation/index.md). Typisch worden rasterkaarten gedistribueerd als bestanden met de extensie `.sqlitedb`.

Hier zijn de belangrijkste methoden om een nieuwe rasterkaartbron toe te voegen die nog niet in OsmAnd is gedefinieerd:

- Open een kant-en-klaar `.sqlitedb`-bestand met OsmAnd.
- Importeer een pakket met voorbereide online kaarten van een andere OsmAnd-applicatie als een speciaal `.osf` **pakket** via de [Import/export-functionaliteit](../personal/import-export.md).
- Maak een nieuwe online kaartbron op het mobiele apparaat zelf.
- Bereid een magische URL voor met parameters voor de online kaartbron en open deze met OsmAnd.


### Nieuwe online bron toevoegen {#add-new-online-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add_manually"/>*

![Online bron toevoegen](@site/static/img/plugins/online-maps/add-online-source-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

![Online bron toevoegen](@site/static/img/plugins/online-maps/add-online-source-2_ios.png)

</TabItem>

</Tabs>

Om een rasterkaartbron te maken, moet u de **URL van een tegel** kennen, wat een specifieke URL is die kaarttegels in de Mercatorprojectie distribueert. Een tegel-URL kan er bijvoorbeeld als volgt uitzien: `https://tile.osmand.net/hd/6/55/25.png`, waarbij `tile.osmand.net/hd/` de basis-URL is.

Hier zijn de belangrijkste parameters om te configureren bij het instellen van een nieuwe online kaartbron:

| Parameter | Beschrijving |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Geef een naam op voor de nieuwe online kaartbron. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Voer de URL voor de online tegelbron in of plak deze. Zorg ervoor dat deze het tegel-URL-formaat volgt. De URL kan bepaalde placeholders bevatten, die OsmAnd automatisch zal vervangen op basis van de specifieke benodigde tegel. De meest gebruikte placeholders zijn gebaseerd op de [OpenStreetMap slippy map tilenames convention](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames): <ul><li>`{z}` of `{0}`: Zoomniveau</li><li>`{x}` of `{1}`: Tegel X-index</li><li>`{y}` of `{2}`: Tegel Y-index</li></ul> Voor voorbeelden van minder gebruikte placeholders, zie de [voordefinieerde online rasterkaartbronnen](https://github.com/osmandapp/web/blob/main/main/static/tile_sources.xml). |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Deze parameter beïnvloedt hoe de kaart wordt weergegeven. <br/><ul><li>Als *kaarttype* wordt de kaart beperkt tot de geselecteerde zoomniveaus.</li><li>Als *overlay/onderlaag* verschijnt de kaart op de geselecteerde zoomniveaus, waarbij buiten die niveaus opschalen of neerschalen wordt toegepast.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Stel de duur (in minuten) in waarna gecachte tegels worden vernieuwd. U kunt dit veld leeg laten als u niet wilt dat tegels automatisch opnieuw worden geladen. <br/><ul><li>1 dag = 1440 minuten</li><li>1 week = 10.080 minuten</li><li>30 dagen = 43.200 minuten</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Kies tussen *Pseudo-Mercatorprojectie* en *Elliptische Mercatorprojectie*, afhankelijk van de bron. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Selecteer hoe tegels moeten worden opgeslagen: ofwel in een *SQLiteDB-bestand* of als *één afbeeldingsbestand per tegel*. |


### Magische URL om kaartbron te installeren {#magic-url-to-install-map-source}

Online kaarten kunnen worden toegevoegd met een speciale link naar de OsmAnd Rasterkaartlijst. Klik op deze link en kies OsmAnd om te openen:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parameter van link|Voorbeeld|
|:--------|:---------------|
| [Constant deel]| `http://osmand.net/add-tile-source` |
|[Scheidingstekens]| ?   & |
|[Naam]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Zoomniveaus]|min_zoom=9 / max_zoom=15|

U vindt een toegevoegde online kaart in de lijst van het menu [Hoofd- / Onderlaag- / Overlaylaag](#layers).


## Kaartgegevens beheren {#manage-map-data}

Rasterkaarten kunnen een aanzienlijke hoeveelheid schijfruimte in beslag nemen, dus het kan nodig zijn om dit regelmatig te controleren. Voor grote datasets wordt aanbevolen om een *SQLite rasterbron* te gebruiken, omdat deze alle tegels in 1 groot bestand (SQLite-database) opslaat.

- [**SQ Lite-formaat**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Metainfo-formaat**](../../technical/osmand-file-formats/osmand-metainfo.md)

Om het tegelformaat te wijzigen, kunt u <Translate android="true" ids="storage_format"/> kiezen in het bewerkingsmenu van online kaarten:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → kies online kaarten →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Tegelcache wissen {#clear-tile-cache}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → kies online kaarten →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*

![Lijst met online bronnen](@site/static/img/plugins/online-maps/clear_cache_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*

![Lijst met online bronnen](@site/static/img/plugins/online-maps/clear_cache_ios.png)
</TabItem>

</Tabs>

Tegels worden in de cache opgeslagen bij het gebruik van online rasterkaarten als hoofd-, overlay- of onderlaag. U kunt de grootte van uw SQ Lite-bestand zien onder de naam van uw online kaart in de lijst. Soms is regelmatig opschonen vereist om de weergave van de tegels te versnellen of om de gegevens bij te werken.  

### Tegels downloaden / bijwerken {#download--update-tiles}

Als u offline toegang wilt tot rasterkaarten, moet u mogelijk tegels vooraf laden. Dit kan op uw mobiele apparaat worden gedaan, maar houd er rekening mee dat sommige services het downloaden van grote pakketten kunnen blokkeren. U kunt dezelfde functie ook gebruiken om reeds gedownloade tegels voor geselecteerde gebieden bij te werken, anders blijft OsmAnd tegels weergeven die al in de cache zijn opgeslagen.  

Om de kaarten de tegels na een tijdje automatisch te laten bijwerken, kunt u een [vervaltijd](#add-new-online-source) instellen, waarna OsmAnd de tegels opnieuw laadt zodra ze worden weergegeven.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="rasterkaarten"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="rasterkaarten"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="rasterkaarten"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="rasterkaarten"/></td>
    </tr>
</table>  

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Tegels downloaden iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Om rastertegels te downloaden of bij te werken, moet u de bron van de online kaart selecteren als de [hoofdkaartbron](#layers) (**Android / iOS**). U kunt ook online tegels afzonderlijk selecteren voor de [overlay](#overlay)-kaart of voor de [onderlaag](#underlay) (alleen voor **Android**).

- Voor de **Android**-versie van de OsmAnd-app moet u een gebied selecteren op basis van de schermgrootte van uw apparaat en lang op de kaart tikken. Selecteer vervolgens [*Acties*](../map/map-context-menu.md#update--download-online-maps) in het contextmenu van de kaart en de optie *Kaart downloaden* of *Kaart bijwerken*. Breng op het scherm Kaart downloaden wijzigingen aan in de benodigde instellingen en tik op Downloaden.  

- In de **iOS**-versie van de OsmAnd-app moet u lang op de kaart tikken, vervolgens [*Acties*](../map/map-context-menu.md#update--download-online-maps) selecteren en de optie *Kaart downloaden* of *Kaart bijwerken* uit het contextmenu van de kaart. Op het scherm Kaart downloaden kunt u het vereiste gebied selecteren en de benodigde instellingen wijzigen. Nadat u alle parameters hebt ingesteld, kunt u het aantal tegels en de downloadgrootte zien.


### Parameters wijzigen {#change-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → kies online kaarten →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Rasterkaarten kunnen worden gebruikt zoals ze al bestaan als de tegels al in kaart zijn gebracht. Als de rasterkaarten online worden aangeboden, is er altijd een basis-URL die moet worden geconfigureerd. Er zijn nog een paar basisparameters die kunnen worden gewijzigd voor rasterkaarten, u kunt daarover lezen in [deze sectie](#add-new-online-source) van het artikel. Complexere parameters zijn gecodeerd in de interne componenten van het [SQ Lite-formaat](../../technical/osmand-file-formats/osmand-sqlite.md).


## Gerelateerde artikelen {#related-articles}

- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)
- [Snelle actie (Aangepaste knop)](../widgets/quick-action.md)
- [Online kaarten](../plugins/online-map.md)
- [Topografie](../plugins/topography.md)
- [Offline raster- en vectorkaarten maken](technical/map-creation/create-offline-maps-yourself.md)