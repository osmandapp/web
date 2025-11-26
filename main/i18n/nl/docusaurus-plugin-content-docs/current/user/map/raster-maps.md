---
source-hash: 920207bbfa1108e21a6ec98acd47b4e83730bee1cdc303a464524ab28654175f
sidebar_position: 6
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

<InfoIncompleteArticle/>

## Overzicht {#overview}

Rasterkaarten zijn belangrijke en nuttige toevoegingen aan de vectorkaarten van OsmAnd. Ze stellen u in staat om verschillende kaartbronnen te combineren met vectorkaarten. Informatie over heuvels en hellingen wordt bijvoorbeeld weergegeven als een rasterlaag. U kunt een overlay van wandelpaden, regenkaarten, realtime verkeersgegevens en een overlay van satellietbeelden weergeven op een doorschijnende basisvectorkaart. U kunt ook de standaardkaarten overschakelen naar rastertegels op het web.


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
U kunt ook de hoofdbron van kaarten wijzigen van vectorkaarten naar online tegels.
:::


## Rasterkaarten {#raster-maps}

Online kaarten in OsmAnd bestaan uit rastergegevens, die bestaan uit pixels (ook wel rastercellen genoemd) - in wezen een set kleine afbeeldingen die bekend staan als tegels. In tegenstelling tot vectorkaarten, die gegevens zoals wegen, punten en polygonen weergeven met binaire informatie, zijn rasterkaarttegels gerangschikt in een raster en kunnen ze er gepixeld uitzien bij hoge zoomniveaus omdat elke pixel een vaste waarde of klasse heeft.

### Vergelijking met standaard vectorkaarten {#comparison-to-default-vector-maps}

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


## Hoe rasterkaarten te gebruiken {#how-to-use-raster-maps}

**Plugin inschakelen**.

- **iOS**. Voor *iOS* werkt deze functie standaard.
- **Android**. Voor *Android* moet u, om rasterkaarten in OsmAnd te gebruiken, de [Online kaarten plugin](../plugins/online-map.md) inschakelen. Volg deze stappen: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Laagparameters wijzigen**. Om de zichtbaarheid en de mix van rasterkaartlagen te verbeteren, kunt u de laagtransparantie aanpassen met de schuifregelaar op het scherm. Bovendien kunt u de stijl van de vectorkaart aanpassen door polygonen te verbergen, waardoor de onderliggende lagen beter zichtbaar worden. Dit is vooral handig bij het bekijken van satellietbeelden.


## Rasterkaarten selecteren {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Kaarten tonen](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Kaarten tonen](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

In OsmAnd kunnen rasterkaarten dienen als een extra kaartbron naast de standaard vectorkaarten, die zijn geoptimaliseerd voor offline gebruik.  

U heeft de flexibiliteit om één of twee online tegellagen toe te voegen als aanvulling op uw basiskaart. Hiermee kunt u maximaal drie kaartlagen tegelijk op uw scherm bekijken. U kunt bijvoorbeeld de offline vectorkaart van OsmAnd als basis gebruiken, er een satellietweergave overheen leggen en een fietspadenkaart als onderlaag plaatsen voor extra detail.  

U kunt ook de transparantie van de basiskaart aanpassen om deze met uw lagen te mengen. Indien nodig kunt u een transparantieschuifregelaar op het hoofdscherm inschakelen voor snelle aanpassingen.


### Hoofd {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Kaarten tonen](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*  

![Kaarten tonen](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

U kunt een kaartstijl uit de lijst kiezen of uw eigen stijl [toevoegen](#add-new-online-raster-map-source).


### Overlaylaag {#overlay-layer}

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
4. *Bron van overlaykaart* (*Android*) / *Beschikbare lagen* (*iOS*). U kunt een tegelkaart kiezen om te installeren of bij te werken.
5. *Kaartsymbolen tonen* - zoals tekst, verkeersborden en andere.  
6. *Online bron toevoegen* (*iOS*).
7. *Importeren uit documenten* (*iOS*).


### Onderlaag {#underlay-layer}

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
4. *Bron van onderlaagkaart* (*Android*) / *Beschikbare lagen* (*iOS*). U kunt een tegelkaart kiezen om te installeren of bij te werken.
5. *Polygonen tonen/verbergen*.
6. *Online bron toevoegen* (*iOS*).
7. *Importeren uit documenten* (*iOS*).


## Hillshade / Slope {#hillshade--slope}

![Terreinlagen](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Hillshade** en **Slope** zijn offline rasterkaarten die terreinreliëf tonen. Ze worden weergegeven als een speciale kaartlaag, een tweede overlay op de basiskaart. De kaarten bevatten extra hoogte-informatie om u te helpen de helling en schaduwen van het landschap nauwkeuriger te begrijpen. De informatie over *Hillshade* en *Slope* is gebaseerd op gegevens uit één enkele bron, het *Global planet file*, en is onderverdeeld in regio's.  

U hoeft niet te schakelen tussen Hillshade- en Slope-lagen, omdat ze automatisch worden samengevoegd. U kunt slechts één van deze lagen selecteren om op de kaart weer te geven, maar u heeft ook de optie om ze beide te combineren [als onderlaag of overlay](#select-raster-maps) op andere lagen voor een meer visuele weergave van het terrein.

Om aan de slag te gaan met Hillshade en Slope moet u:

1. De Topografie-plugin aanschaffen:
    - [Android-aankopen](../purchases/android.md)
    - [iOS-aankopen](../purchases/ios.md)
2. De [Topografie-plugin](../plugins/topography.md) inschakelen:  
    *Menu → Plugins → ︙ → Inschakelen*
3. Selecteer uw gewenste regio en download **Terreinkaart (3D)**.
4. Het downloadproces kan enige tijd duren, afhankelijk van de grootte van de geselecteerde regio en de snelheid van uw internetverbinding.


### Hillshade en 3D-reliëf {#hillshade-and-3d-relief}

| Hillshade | 3D-reliëf |
|--------|---------|
| ![Terreinlagen](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terreinlagen](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Het verschil in reliëfweergave op de kaart bij het toepassen van deze instellingen wordt beschreven in het **Topografie**-artikel in de overeenkomstige sectie [Hillshade en 3D-reliëf](../plugins/topography.md#hillshade-and-3d-relief).


### Weergaveopties configureren {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terreinlagen](@site/static/img/plugins/online-maps/terrain_layers.png)

U kunt het zoomniveau voor weergave en de transparantie voor Hillshade en Slope aanpassen. U kunt hier meer over lezen in het [Topografie-artikel](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## 3D-reliëf {#3d-relief}

:::note
[3D-reliëf](../plugins/topography.md#3d-relief) is een betaalde functie van [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Terreinlagen](@site/static/img/plugins/online-maps/raster_maps_3d.png)

De functie [**3D-reliëf**](../plugins/topography.md#3d-relief) is een kaarttechnologie die de visualisatie van terrein op een kaart mogelijk maakt met behulp van driedimensionale modellen. Deze functie voegt hoogte-informatie toe aan een normale tweedimensionale kaart, wat een 3D- en diepte-effect creëert en u in staat stelt het terrein beter te visualiseren.  

*Om 3D-reliëf te gaan gebruiken*:  
U moet het [OsmAnd Pro-aankoopplan](../plugins/index.md#purchase) aanschaffen, de [Topografie-plugin](../plugins/topography.md) inschakelen en het item [3D-reliëf](../plugins/topography.md#3d-relief) aanzetten in *Menu → Kaart configureren*.


*Hoe de 3D-reliëffunctie werkt*:  
*1.* Om een 3D-reliëf te creëren, ontvangt OsmAnd informatie over de terreinhoogte.  
*2.* Op basis van de hoogtegegevens wordt een 3D-model gemaakt om bergen, heuvels, valleien en andere terreinelementen op de kaart weer te geven.  
*3.* OsmAnd geeft deze driedimensionale modellen vervolgens weer op een platte kaart. De kaart kan worden ingezoomd, uitgezoomd en gedraaid om het terrein vanuit verschillende hoeken en perspectieven te bekijken.  
*4.* De weergave van contourlijnen op de kaart is niet afhankelijk van of de kaartbron online of offline is.


## Rasterkaarten voorbereiden/kopiëren naar apparaat {#preparecopy-raster-maps-to-device}

Er zijn meerdere manieren om een nieuwe rasterkaart toe te voegen, deze van een ander apparaat te kopiëren, voor te bereiden op een pc en tegels vooraf te downloaden voor offline gebruik. U kunt bijvoorbeeld uw eigen kaartpakket maken op een pc met speciale software zoals [MOBAC, OsmAndMapCreator, enz.](../../technical/map-creation/index.md). Typisch worden rasterkaarten gedistribueerd als bestanden met de extensie `.sqlitedb`.

Hier zijn de belangrijkste methoden om een nieuwe rasterkaartbron toe te voegen die nog niet in OsmAnd is gedefinieerd:

- Open een kant-en-klaar `.sqlitedb`-bestand met OsmAnd.
- Importeer een pakket met voorbereide online kaarten van een andere OsmAnd-applicatie als een speciaal `.osf` **pakket** via de [Import/export-functionaliteit](../personal/import-export.md).
- Maak een nieuwe online kaartbron op het mobiele apparaat zelf.
- Bereid een magische URL voor met parameters voor de online kaartbron en open deze met OsmAnd.


### Nieuwe online rasterkaartbron toevoegen {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Online bron toevoegen](@site/static/img/plugins/online-maps/add-online-source-2.png)

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

U vindt een toegevoegde online kaart in de lijst van het menu [Hoofd- / Onderlaag- / Overlaylaag](#select-raster-maps).


## Rasterkaarten beheren {#manage-raster-maps}

Rasterkaarten kunnen een aanzienlijke hoeveelheid schijfruimte in beslag nemen, dus het kan nodig zijn om dit regelmatig te controleren. Voor grote datasets wordt aanbevolen om een *SQLite-rasterbron* te gebruiken, omdat deze alle tegels in 1 groot bestand (SQLite-database) opslaat.

- [**SQ Lite-formaat**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Metainfo-formaat**](../../technical/osmand-file-formats/osmand-metainfo.md)

Om het tegelformaat te wijzigen, kunt u <Translate android="true" ids="storage_format"/> kiezen in het bewerkingsmenu van online kaarten:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → kies online kaarten →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Rasterkaartcache wissen {#clear-raster-map-cache}

![Lijst met online bronnen](@site/static/img/plugins/online-maps/online-sources-list.png)

Tegels worden in de cache opgeslagen bij het gebruik van online rasterkaarten als hoofd-, overlay- of onderlaag. U kunt de grootte van uw SQ Lite-bestand zien onder de naam van uw online kaart in de lijst. Soms is regelmatig opschonen vereist om de weergave van de tegels te versnellen of om de gegevens bij te werken.  

Om de cache van de kaarttegels te wissen, moet u het volgende doen:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → kies online kaarten →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Tegels downloaden / bijwerken {#download--update-tiles}

Als u offline toegang wilt tot rasterkaarten, moet u mogelijk tegels vooraf laden. Dit kan op uw mobiele apparaat worden gedaan, maar houd er rekening mee dat sommige services het downloaden van grote pakketten kunnen blokkeren. U kunt dezelfde functie ook gebruiken om reeds gedownloade tegels voor geselecteerde gebieden bij te werken, anders blijft OsmAnd tegels weergeven die al in de cache zijn opgeslagen.  

Om de kaarten de tegels na een tijdje automatisch te laten bijwerken, kunt u een [vervaltijd](#add-new-online-raster-map-source) instellen, waarna OsmAnd de tegels opnieuw laadt zodra ze worden weergegeven.  

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

- Om rastertegels te downloaden of bij te werken, moet u de bron van de online kaart selecteren als de [hoofdkaartbron](#select-raster-maps) (**Android / iOS**). U kunt ook online tegels afzonderlijk selecteren voor de [overlay](#overlay-layer)-kaart of voor de [onderlaag](#underlay-layer) (alleen voor **Android**).

- Voor de **Android**-versie van de OsmAnd-app moet u een gebied selecteren op basis van de schermgrootte van uw apparaat en lang op de kaart tikken. Selecteer vervolgens [*Acties*](../map/map-context-menu.md#update--download-online-maps) in het contextmenu van de kaart en de optie *Kaart downloaden* of *Kaart bijwerken*. Breng op het scherm Kaart downloaden wijzigingen aan in de benodigde instellingen en tik op Downloaden.  

- In de **iOS**-versie van de OsmAnd-app moet u lang op de kaart tikken, vervolgens [*Acties*](../map/map-context-menu.md#update--download-online-maps) selecteren en de optie *Kaart downloaden* of *Kaart bijwerken* uit het contextmenu van de kaart. Op het scherm Kaart downloaden kunt u het vereiste gebied selecteren en de benodigde instellingen wijzigen. Nadat u alle parameters hebt ingesteld, kunt u het aantal tegels en de downloadgrootte zien.


### Rasterkaartparameters wijzigen {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → kies online kaarten →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Rasterkaarten kunnen worden gebruikt zoals ze al bestaan als de tegels al in kaart zijn gebracht. Als de rasterkaarten online worden aangeboden, is er altijd een basis-URL die moet worden geconfigureerd. Er zijn nog een paar basisparameters die kunnen worden gewijzigd voor rasterkaarten, u kunt daarover lezen in [deze sectie](#add-new-online-raster-map-source) van het artikel. Complexere parameters zijn gecodeerd in de interne componenten van het [SQ Lite-formaat](../../technical/osmand-file-formats/osmand-sqlite.md).


## Gerelateerde artikelen {#related-articles}

- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)