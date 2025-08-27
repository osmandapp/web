---
source-hash: 8656c688a740924ceba6f990dbce2cb596b8d6da1d84627c6aa7082b084dadaf
sidebar_position: 6
title: Rasterkaarten (Online / Offline)
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

Rasterkaarten zijn belangrijke en nuttige aanvullingen op OsmAnd-vectorkaarten. Ze stellen u in staat om verschillende kaartbronnen te combineren met vectorkaarten. Informatie over heuvels en hellingen wordt bijvoorbeeld weergegeven als een rasterlaag. U kunt een overlay van wandelpaden, regenkaarten, realtime verkeersgegevens en een overlay van satellietbeelden weergeven op een doorschijnende basisvectorkaart. U kunt ook de standaardkaarten wijzigen naar rastertegels op het web.


## Gebruiksscenario's {#use-cases}

Rasterkaarten hebben een breed scala aan toepassingen. Hier zijn enkele van de meest populaire:

- Satellietbeelden als onderlaag.
- Realtime verkeersinformatie.
- Regenvoorspelling als overlay.
- Topografische kaarten met schaduw van heuvels en hellingen.
- Actieve fiets- en hardlooproutes als overlay.
- Realtime scheepsinformatie.
- Online OpenStreetMap-tegels voor OSM-bewerking.

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
U kunt ook de hoofdbron van kaarten wijzigen van vectorkaarten naar online tegels.
:::


## Rasterkaarten {#raster-maps}

Online kaarten in OsmAnd zijn samengesteld uit rastergegevens, die bestaan uit pixels (ook wel rastercellen genoemd) - in wezen een set kleine afbeeldingen die bekend staan als tegels. In tegenstelling tot vectorkaarten, die gegevens zoals wegen, punten en polygonen weergeven met behulp van binaire informatie, zijn rasterkaarttegels gerangschikt in een raster en kunnen ze bij hoge zoomniveaus gepixeliseerd lijken omdat elke pixel een vaste waarde of klasse heeft.

#### Vergelijking met standaard vectorkaarten {#comparison-to-default-vector-maps}

**Voordelen:**

- Aangezien rasterkaarten vooraf zijn gerenderd, laden ze sneller, waardoor het apparaat geen gegevens in realtime hoeft te verwerken en te renderen.
- Rasterkaarten kunnen dynamisch worden geladen tijdens het browsen.
- U kunt een offline cache aanmaken en alleen ontbrekende tegels downloaden indien nodig.
- U kunt een onbeperkt aantal externe webbronnen gebruiken voor rasterkaarten, waardoor het flexibel is voor verschillende kaarttypen, zoals satellietbeelden of gespecialiseerde kaarten.
- Rastergegevens, zoals verkeersinformatie, kunnen regelmatig worden bijgewerkt na vervaldatum (bijv. elke 20-30 minuten, afhankelijk van de configuratie).

**Nadelen:**

- Rasterkaarten nemen aanzienlijk meer ruimte in beslag dan vectorkaarten. Een stadskaart kan bijvoorbeeld 15 MB zijn als vectorkaart, maar toenemen tot 50 MB op zoomniveau 15, 200 MB op zoomniveau 16 en tot 800 MB op zoomniveau 17.
- U kunt niet op specifieke plaatsen of objecten op rasterkaarten tikken om meer informatie te krijgen.
- Rasterkaarten kunnen niet worden gestyled of gewijzigd om specifieke objecten uit te sluiten.
- Te ver inzoomen kan ervoor zorgen dat de afbeelding gepixeliseerd lijkt, vooral als er geen tegels met hoge resolutie beschikbaar zijn.
- Het is niet mogelijk om de kaart te roteren zonder de tekst te roteren, wat het lezen van labels moeilijk kan maken.


## Hoe rasterkaarten te gebruiken {#how-to-use-raster-maps}

**Plug-in inschakelen**.

- **iOS**. Voor *iOS* werkt deze functie standaard.
- **Android**. Voor *Android* moet u, om rasterkaarten in OsmAnd te gebruiken, de [Online kaarten plug-in](../plugins/online-map.md) inschakelen. Volg deze stappen: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Laagparameters wijzigen**. Om de zichtbaarheid en mix van rasterkaartlagen te verbeteren, kunt u de transparantie van de laag aanpassen met de schuifregelaar op het scherm. Bovendien kunt u de stijl van de vectorkaart aanpassen door polygonen te verbergen, waardoor de onderliggende lagen beter zichtbaar worden. Dit is vooral handig bij het bekijken van satellietbeelden.


## Rasterkaarten selecteren {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Show maps](@site/static/img/plugins/online-maps/show-maps-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Show maps](@site/static/img/plugins/online-maps/show-maps-ios.png)

</TabItem>

</Tabs>

In OsmAnd kunnen rasterkaarten dienen als een aanvullende kaartbron naast de standaard vectorkaarten, die zijn geoptimaliseerd voor offline gebruik.

U hebt de flexibiliteit om één of twee online tegellagen toe te voegen als aanvulling op uw basiskaart. Hierdoor kunt u tot drie kaartlagen tegelijkertijd op uw scherm bekijken. U kunt bijvoorbeeld de offline vectorkaart van OsmAnd als basis hebben, deze overlappen met een satellietbeeld en een fietskaart als onderlaag plaatsen voor extra detail.

U kunt ook de transparantie van de basiskaart aanpassen om deze te laten samensmelten met uw lagen. Indien nodig kunt u een transparantieschuifregelaar op het hoofdscherm inschakelen voor snelle aanpassingen.


### Hoofd {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*

![Show maps](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*

![Show maps](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

U kunt een kaartstijl uit de lijst kiezen of uw eigen stijl [toevoegen](#add-new-online-raster-map-source).


### Overlay-laag {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)

</TabItem>

</Tabs>

1. *In-/uitschakelen* van de onderliggende kaart.
2. *Transparantie overlay* (*Android*)/ *Transparantie* van de overlaykaart (*iOS*).
3. *Transparantieschuifregelaar weergeven* (*Android*) / *Schuifregelaar op de kaart weergeven* (*iOS*). Snelle toegang tot de transparantie-instelling.
4. *Bron overlaykaart* (*Android*) / *Beschikbare lagen* (*iOS*). U kunt een tegelkaart kiezen om te installeren of bij te werken.
5. *Kaartsymbolen weergeven* - zoals tekst, verkeersborden en andere.
6. *Online bron toevoegen* (*iOS*).
7. *Importeren uit documenten* (*iOS*).


### Onderlaag {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)

</TabItem>

</Tabs>

1. *In-/uitschakelen* van de onderliggende kaart.
2. *Transparantie basiskaart*.
3. *Transparantieschuifregelaar weergeven* (*Android*) / *Schuifregelaar op de kaart weergeven* (*iOS*). Snelle toegang tot de transparantie-instelling.
4. *Bron onderliggende kaart* (*Android*) / *Beschikbare lagen* (*iOS*). U kunt een tegelkaart kiezen om te installeren of bij te werken.
5. *Polygonen weergeven/verbergen*.
6. *Online bron toevoegen* (*iOS*).
7. *Importeren uit documenten* (*iOS*).


## Heuvelschaduw / Helling {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Heuvelschaduw** en **Helling** zijn offline rasterkaarten die terreinreliëf tonen. Ze worden weergegeven als een speciale kaartlaag, een tweede overlay op de basiskaart. De kaarten bevatten aanvullende hoogte-informatie om u te helpen de helling en schaduwen van het landschap nauwkeuriger te begrijpen. *Heuvelschaduw* en *Helling* informatie is gebaseerd op gegevens van een enkele bron, het *Global planet file*, en is verdeeld in regio's.

U hoeft niet te schakelen tussen Heuvelschaduw- en Hellinglagen, aangezien deze automatisch worden samengevoegd. U kunt slechts één van deze lagen selecteren om op de kaart weer te geven, maar u hebt ook de optie om ze beide te combineren [als onderlaag of overlay](#select-raster-maps) op andere lagen voor een visuelere weergave van het terrein.

Om aan de slag te gaan met Heuvelschaduw en Helling moet u:

1. De Topografie-plug-in aanschaffen:
    - [Android-aankopen](../purchases/android.md)
    - [iOS-aankopen](../purchases/ios.md)
2. De [Topografie-plug-in](../plugins/topography.md) inschakelen:
    *Menu → Plug-ins → ︙ → Inschakelen*
3. Selecteer de gewenste regio en download **Terreinkaart (3D)**.
4. Het downloadproces kan enige tijd duren, afhankelijk van de grootte van de geselecteerde regio en de snelheid van uw internetverbinding.


### Heuvelschaduw en 3D-reliëf {#hillshade-and-3d-relief}

| Heuvelschaduw | 3D-reliëf |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Het verschil in reliëfweergave op de kaart bij het toepassen van deze instellingen wordt beschreven in het artikel **Topografie** in de overeenkomstige sectie [Heuvelschaduw en 3D-reliëf](../plugins/topography.md#hillshade-and-3d-relief).


### Weergaveopties configureren {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)

U kunt het zoomniveau voor weergave en de transparantie voor Heuvelschaduw en Helling aanpassen. Meer hierover leest u in het [Topografie-artikel](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## 3D-reliëf {#3d-relief}

:::note
[3D-reliëf](../plugins/topography.md#3d-relief) is een betaalde functie van [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

De functie [**3D-reliëf**](../plugins/topography.md#3d-relief) is een kaarttechnologie die de visualisatie van terrein op een kaart mogelijk maakt met behulp van driedimensionale modellen. Deze functie voegt hoogte-informatie toe aan een normale tweedimensionale kaart, wat een 3D- en diepte-effect creëert en u in staat stelt het terrein beter te visualiseren.

*Om 3D-reliëf te gebruiken*:
U moet een [OsmAnd Pro-aankoopabonnement](../plugins/index.md#purchase) aanschaffen, de [Topografie-plug-in](../plugins/topography.md) inschakelen en het item [3D-reliëf](../plugins/topography.md#3d-relief) inschakelen in *Menu → Kaart configureren*.


*Hoe de 3D-reliëffunctie werkt*:
*1.* Om een 3D-reliëf te creëren, ontvangt OsmAnd informatie over de terreinhoogte.
*2.* Op basis van de hoogtegegevens wordt een 3D-model gemaakt om bergen, heuvels, valleien en andere terreinelementen op de kaart weer te geven.
*3.* OsmAnd geeft deze driedimensionale modellen vervolgens weer op een platte kaart. De kaart kan worden ingezoomd, uitgezoomd en geroteerd om het terrein vanuit verschillende hoeken en perspectieven te bekijken.
*4.* De weergave van hoogtelijnen op de kaart is niet afhankelijk van of de kaartbron online of offline is.


## Rasterkaarten voorbereiden/kopiëren naar apparaat {#preparecopy-raster-maps-to-device}

Er zijn meerdere manieren om een nieuwe rasterkaart toe te voegen, deze van een ander apparaat te kopiëren, deze op een pc voor te bereiden en tegels vooraf te downloaden voor offline gebruik. U kunt bijvoorbeeld uw kaartpakket op een pc maken met behulp van speciale software zoals [MOBAC, OsmAndMapCreator, enz](../../technical/map-creation/index.md). Typisch worden rasterkaarten gedistribueerd als bestanden met de `.sqlitedb`-extensie.

Hier zijn de belangrijkste methoden voor het toevoegen van een nieuwe rasterkaartbron die nog niet in OsmAnd is gedefinieerd:

- Open een kant-en-klaar `.sqlitedb`-bestand met OsmAnd.
- Importeer een pakket met voorbereide online kaarten van een andere OsmAnd-applicatie als een speciaal `.osf`-**pakket** via [Importeer/exporteer functionaliteit](../personal/import-export.md).
- Maak zelf een nieuwe online kaartbron op een mobiel apparaat.
- Bereid een magische URL voor met online kaartbronparameters en open deze met OsmAnd.


### Nieuwe online rasterkaartbron toevoegen {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2.png)

Om een rasterkaartbron te maken, moet u de **URL van een tegel** kennen, dit is een specifieke URL die kaarttegels distribueert in de Mercatorprojectie. Een tegel-URL kan er bijvoorbeeld zo uitzien: `https://tile.osmand.net/hd/6/55/25.png`, waarbij `tile.osmand.net/hd/` de basis-URL is.

Hier zijn de belangrijkste parameters die u moet configureren bij het instellen van een nieuwe online kaartbron:

| Parameter | Beschrijving |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Geef een naam op voor de nieuwe online kaartbron. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Voer de URL voor de online tegelbron in of plak deze. Zorg ervoor dat deze het tegel-URL-formaat volgt. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Deze parameter beïnvloedt hoe de kaart wordt weergegeven. <br/><ul><li>Als een *kaarttype* wordt de kaart beperkt tot de geselecteerde zoomniveaus.</li><li>Als een *overlay/onderlaag* verschijnt de kaart op de geselecteerde zoomniveaus, met opschaling of neerschaling toegepast buiten die niveaus.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Stel de duur (in minuten) in waarna gecachte tegels worden vernieuwd. U kunt dit veld leeg laten als u niet wilt dat tegels automatisch opnieuw worden geladen. <br/><ul><li>1 dag = 1440 minuten</li><li>1 week = 10.080 minuten</li><li>30 dagen = 43.200 minuten</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Kies tussen *Pseudo-Mercatorprojectie* en *Elliptische Mercatorprojectie*, afhankelijk van de bron. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Selecteer hoe tegels moeten worden opgeslagen: ofwel in een *SQLiteDB-bestand* of als *één afbeeldingsbestand per tegel*. |


### Magische URL om kaartbron te installeren {#magic-url-to-install-map-source}

Online kaarten kunnen worden toegevoegd met een speciale link aan de OsmAnd Rasterkaartlijst. Klik op deze link en kies OsmAnd om te openen:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parameter van link|Voorbeeld|
|:--------|:---------------|
| [Constant deel]| `http://osmand.net/add-tile-source` |
|[Scheidingstekens]| ?   & |
|[Naam]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Zoomniveaus]|min_zoom=9 / max_zoom=15|

U vindt een toegevoegde online kaart in de lijst van het menu [Hoofd / Onderlaag / Overlay-laag](#select-raster-maps).


## Rasterkaarten beheren {#manage-raster-maps}

Rasterkaarten kunnen aanzienlijk veel schijfruimte in beslag nemen, dus u moet dit regelmatig controleren. Voor grote datasets wordt aanbevolen om *SQLite-rasterbron* te gebruiken, omdat deze alle tegels in 1 groot bestand (SQLite-database) opslaat.

- [**SQ Lite-formaat**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Metainfo-formaat**](../../technical/osmand-file-formats/osmand-metainfo.md)

Om het tegelformaat te wijzigen, kunt u <Translate android="true" ids="storage_format"/> kiezen in het bewerkingsmenu van online kaarten:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → kies online kaarten →
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Rasterkaartcache wissen {#clear-raster-map-cache}

![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)

Tegels worden in de cache opgeslagen bij gebruik van online rasterkaarten als hoofd-/overlay-/onderlaag. U kunt de grootte van uw SQ Lite-bestand zien onder de naam van uw online kaart in de lijst. Soms is regelmatige reiniging nodig om de weergave van de tegels te versnellen of om de gegevens bij te werken.

Om de tegelcache van de kaart te wissen, moet u het volgende doen:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → kies online kaarten →
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*


### Tegels downloaden / bijwerken {#download--update-tiles}

Als u offline toegang wilt tot rasterkaarten, moet u mogelijk tegels vooraf laden. Dit kan op uw mobiele apparaat, maar houd er rekening mee dat sommige services grote pakketdownloads kunnen blokkeren. U kunt dezelfde functie ook gebruiken om reeds gedownloade tegels voor geselecteerde gebieden bij te werken, anders blijft OsmAnd tegels weergeven die al in de cache zijn opgeslagen.

Om de kaarten na een tijdje automatisch de tegels te laten bijwerken, kunt u een [Vervaltijd](#add-new-online-raster-map-source) instellen, waarna OsmAnd de tegels opnieuw laadt zodra ze worden weergegeven.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="raster-maps"/></td>
    </tr>
</table>

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->

</TabItem>

<TabItem value="ios" label="iOS">

![Download tiles iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Om rastertegels te downloaden of bij te werken, moet u de bron van de online kaart selecteren als de [Hoofdkaartbron](#select-raster-maps) (**Android / iOS**). U kunt ook online tegels afzonderlijk selecteren voor de [Overlay](#overlay-layer)-kaart of voor de [Onderlaag](#underlay-layer) (alleen voor **Android**).

- Voor de **Android**-versie van de OsmAnd-app moet u een gebied selecteren op basis van de schermgrootte van uw apparaat en lang op de kaart tikken. Selecteer vervolgens [*Acties*](../map/map-context-menu.md#update--download-online-maps) in het kaartcontextmenu en de optie *Kaart downloaden* of *Kaart bijwerken*. Op het scherm Kaart downloaden brengt u de nodige wijzigingen aan in de instellingen en tikt u op Downloaden.

- In de **iOS**-versie van de OsmAnd-app moet u lang op de kaart tikken, vervolgens [*Acties*](../map/map-context-menu.md#update--download-online-maps) en de optie *Kaart downloaden* of *Kaart bijwerken* selecteren in het kaartcontextmenu. Op het scherm Kaart downloaden kunt u het gewenste gebied selecteren en de nodige instellingen wijzigen. Nadat u alle parameters hebt ingesteld, ziet u het aantal tegels en de downloadgrootte.


### Rasterkaartparameters wijzigen {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → kies online kaarten → &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Rasterkaarten kunnen worden gebruikt zoals ze al bestaan als de tegels al zijn toegewezen. Als de rasterkaarten online worden aangeboden, is er altijd een basis-URL die moet worden geconfigureerd. Er zijn nog een paar basisparameters die kunnen worden gewijzigd voor rasterkaarten, u kunt hierover lezen in [deze sectie](#add-new-online-raster-map-source) van het artikel. Complexere parameters zijn gecodeerd in de interne componenten van het [SQ Lite-formaat](../../technical/osmand-file-formats/osmand-sqlite.md).


## Gerelateerde artikelen {#related-articles}

- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)

> *Laatst bijgewerkt: oktober 2024*