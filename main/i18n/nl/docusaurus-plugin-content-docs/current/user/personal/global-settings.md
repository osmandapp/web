---
source-hash: 03882f509a8ca4795f4ea6dfab66cd17c33b043531b8429ccab85994d6199aa2
sidebar_position: 3
title:  Algemene instellingen
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



## Overzicht {#overview}

**Algemene instellingen** zijn algemene [instellingen](../personal/profiles.md) voor alle profielen in de OsmAnd-applicatie. Dit zijn de basisinstellingen voor het OsmAnd-systeem en alle wijzigingen die worden aangebracht, zijn van invloed op de hele applicatie.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profielen Algemene Instellingen Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Profielen Algemene Instellingen Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profielen Algemene Instellingen iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Algemeen {#general}

Deze sectie bevat de basisinstellingen van OsmAnd, zoals het selecteren van een [profiel](#default-profile) bij het laden van de applicatie, het selecteren van de [weergave-engine](#map-rendering-engine) en de [map](#data-storage-folder) waarin de gegevens worden opgeslagen.  


### Standaardprofiel {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Algemene Instellingen Standaardprofiel Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Algemene Instellingen Standaardprofiel iOS](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd gebruikt het standaardprofiel, *Kaart bekijken*, als het eerste profiel voor nieuwe gebruikers, en als dit profiel door u is geselecteerd, wordt het elke keer dat de applicatie opnieuw wordt opgestart, gebruikt. U kunt elk profiel uit de standaardlijst selecteren, inclusief *Laatst gebruikt* en *Kaart bekijken*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Hiermee kunt u het profiel selecteren dat het laatst is gebruikt.
- **<Translate android="true" ids="settings_preset"/>**. U selecteert het profiel dat moet worden gebruikt bij het starten van OsmAnd. Dit kan worden gewijzigd in de [instellingen](../personal/profiles.md) van de applicatie.  


### CarPlay-profiel {#carplay-profile}

:::caution iOS ALLEEN
Deze functie is beschikbaar voor de iOS-versie van de OsmAnd-app.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![Algemene Instellingen Standaardprofiel Android](@site/static/img/personal/profiles/CarPlay_ios.png)  

Het [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) wordt gebruikt wanneer u verbonden bent met de [CarPlay-software](https://support.apple.com/en-gb/HT205634) van uw voertuig en helpt u het meeste uit de geoptimaliseerde versie van de OsmAnd-app te halen door de audio- en videosystemen te gebruiken om gegevens op uw telefoon weer te geven.


### Map voor gegevensopslag {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profielen Opslaginstellingen Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **Apparaatgeheugen** toont hoeveel vrije ruimte er nog op uw apparaat is. Tik op een veld om naar het menu [*Kaarten en bronnen*](../personal/maps-resources.md#local-menu) te gaan, waar u gedetailleerde informatie over uw OsmAnd-gegevens kunt bekijken en beheren.

2. In de **<Translate android="true" ids="change_data_storage_folder"/>**, kunt u een map selecteren om OsmAnd-gegevens op uw apparaat op te slaan.  

    - *Intern app-geheugen*. Alleen de OsmAnd-app heeft toegang tot zijn gegevens en geen van de externe apps.
    - *Gedeeld geheugen*. Niet langer beschikbaar.
    - *Externe opslag 1*. Alleen 1 OsmAnd-app heeft toegang en Admin-apps en USB.
    - *Opslag voor meerdere gebruikers*. Slechts 1 OsmAnd-app heeft toegang, maar deze wordt gedeeld tussen meerdere Android-gebruikers.
    - *Handmatig opgegeven*. Hangt af van het pad.

:::note Android 12+ (opslagmap wijzigen)
Nieuwe richtlijnen voor opslagtoegang zijn geïmplementeerd in Android-versies 11-12. Zie de sectie [**Probleemoplossing**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) voor details.
:::

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *iOS-apparaat → Instellingen → Algemeen → iPhone-opslag → OsmAnd Kaarten*  

![Algemene Instellingen opslag iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

OsmAnd-bestanden zijn zichtbaar in de applicatie [*Bestanden*](https://apps.apple.com/us/app/files/id1232058109). U hebt toegang tot alle OsmAnd-bestanden: [tracks](../personal/tracks/manage-tracks.md), [favorieten](../personal/favorites.md), [kaarten](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Volg hiervoor het volgende pad:  

Ga naar: *Bestanden → Op mijn iPhone → OsmAnd Kaarten*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![Algemene Instellingen opslag iOS](@site/static/img/personal/profiles/files-1.png) ![Algemene Instellingen opslag iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Kaartweergave-engine {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (alleen Android)*

![Algemene Instellingen engine rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- In de **Android**-versie van de app kunt u schakelen tussen Versie 1-kaartweergave, oorspronkelijk geïmplementeerd in de OsmAnd-app, en Versie 2, die de OpenGL (Open Graphics Library) programmeerinterface gebruikt voor het weergeven van twee- en driedimensionale grafische objecten.

- De **iOS**-versie gebruikt alleen OpenGL voor kaartweergave.


| Functies | Versie 1 | Versie 2 (OpenGL) |
|:---|:--- |:--- |
| Cross-platform | Niet gebruikt in de iOS-versie. | Geschikt voor beide versies. |
| GPU / CPU afhankelijk | Aanbevolen voor apparaten met lage prestaties of verouderde apparaten. | Krachtige weergave-engine. <br /> Alleen beschikbaar voor [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) en latere versies, en in testmodus voor [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| 3D-modus | Het is mogelijk om de kaart in 2D te bekijken, en u kunt de kijkhoek wijzigen om een [3D-weergave](../widgets/map-buttons.md#3d-mode) te krijgen. | U kunt de kaart in 2D en [3D](../widgets/map-buttons.md#3d-mode) bekijken. |
| Kaartweergave | De hele kaart wordt weergegeven als een set tegels, en markeringen, lijnen en tekst bevinden zich al in deze tegels. | Eerst wordt het hele tegelpakket weergegeven, en vervolgens worden de beschikbare symbolen [laag voor laag](../../technical/algorithms/map-rendering-layers.md) op de kaart toegepast. |
| Transparante symbolen overlay / underlay | Ondersteunt alle instellingen. | Ondersteunt geen rasterlaag bovenop vectortekst. |
| [3D-terrein](../map/raster-maps.md#3d-relief) | Niet ondersteund. | Deze functie visualiseert het terrein op de kaart door hoogte-informatie toe te voegen aan een normale 2D-kaart, wat een 3D- en diepte-effect creëert. |
| [3D-tracks](../map/tracks/appearance.md) | Niet ondersteund. | Met deze functie kunt u tracks weergeven op basis van hoogte boven zeeniveau. |
| [Online kaart](../plugins/online-map.md) | Het ondersteunt de weergave van contourlijnen niet als de kaartbron een online tegelkaart is. | Wanneer de kaartbron een online kaart is, worden ook 3D-kaarten gebruikt en wordt de weergave van contourlijnen op de kaart ondersteund. |
| [Weer-plugin](../plugins/weather.md) | U kunt deze plugin niet gebruiken. | Handig in gebruik met de plugin. |  

De afbeelding voor de 3D-weergave van de kaart wordt tegel voor tegel geladen, daarna alle symbolen. De weergavesnelheid van de kaart hangt af van het aantal 2D- en 3D-grafische objecten erop, en rechtstreeks van de prestaties van uw hardware. Daarom kan Versie 2 (OpenGL) niet worden gebruikt op apparaten met lage prestaties.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## Privacy en beveiliging {#privacy-and-security}

OsmAnd stelt u in staat om te kiezen of u uw *[in-app activiteit](#analytics)* en [identificatoren](#identifiers) (*alleen Android*) in de app wilt delen, de mogelijkheid om uw *[geschiedenis](#history)* te bewerken en een *[proxy](#proxy)* (*alleen Android*) naar keuze te gebruiken.  

:::note
Meer informatie is te vinden in het [*OsmAnd Privacy- en Beveiligingsbeleid*](../../legal/privacy-policy.md)
:::

### Analyse {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![Algemene Instellingen Analyse Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Algemene Instellingen Anonieme gegevens verzenden iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

De instelling **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) of **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) geeft u de keuze of u anonieme gegevens wilt verstrekken over *Gedownloade kaarten* en *Bezochte schermen* (*Android*).  

:::note
Gegevens over uw locatie of de plaatsen die u op de kaart bekijkt, worden niet verzameld.
:::  

### Identificatoren {#identifiers}

<InfoAndroidOnly />

*Menu → Instellingen → OsmAnd-instellingen → Privacy en beveiliging → Identificatoren*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

Een **UUID** (*Unique User Identifier*) wordt gegenereerd voor elke installatie van de OsmAnd-applicatie en naar de servers gestuurd tijdens het laden van de kaart.

- Een willekeurige UUID wordt gebruikt om offline kaarten van OsmAnd-servers te downloaden om het rationele gebruik van serverbronnen te controleren, het verkeersgebruik te voorspellen en algemene maandelijkse rapporten over kaartdownloads te verstrekken.
- De UUID verandert elke 3 maanden.  
- Vanaf OsmAnd versie 4.3 kunt u het verzamelen van gebruikersgegevens uitschakelen wanneer u de OsmAnd-app gebruikt. Dan wordt de UUID niet meegestuurd met een downloadverzoek.  
- U kunt meer informatie lezen in de [Gebruiksvoorwaarden (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Geschiedenis {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Algemene Instellingen Geschiedenis Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Algemene Instellingen Geschiedenis Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Algemene Instellingen Geschiedenis iOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Algemene Instellingen Geschiedenis iOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

De applicatie legt de geschiedenis van eerder ingevoerde gegevens (geschiedenis) vast in de volgende categorieën: [Zoeken](../search/search-history.md), [Navigatie](../navigation/setup/route-navigation.md#history-of-previous-routes), [Kaartmarkeringen](../personal/markers.md#history). Met de schakelaar op het betreffende tabblad kunt u het loggen voor bepaalde categorieën van invoer *Inschakelen / Uitschakelen*. U kunt ook eerder vastgelegde gegevens [beheren](#history) (bekijken, verwijderen en delen).  

- ***Back-up als bestand*** (*Android*) of ***Exporteren*** (*iOS*) wordt gebruikt om [een back-upbestand](../personal/import-export.md#export) van uw geschiedenis te maken.
- ***Alle geschiedenis wissen*** (*Android*) of ***Alle geschiedenis verwijderen*** (*iOS*) wordt gebruikt om alle geschiedenisitems te verwijderen die zijn vastgelegd tot het moment van verwijdering.

<br/>

**Geschiedenis delen en verwijderen.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Algemene Instellingen Geschiedenis Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Algemene Instellingen Geschiedenis iOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Algemene Instellingen Geschiedenis iOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- U kunt een of meer items uit de geschiedenislijst verwijderen of ze als een bestand delen (om toegang te krijgen tot deze functies *in iOS*, tikt u op de knop ***Wijzig***).  
- Om meerdere records tegelijk te verwijderen of te exporteren, selecteert u de selectievakjes naast de vereiste records en tikt u op de knoppen **Exporteren** of **Verwijderen**.  


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![Algemene Instellingen Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

De instelling **<Translate android="true" ids="proxy_pref_title"/>** stelt u in staat om een [HTTP-proxy](https://en.wikipedia.org/wiki/Proxy_server) te configureren voor alle netwerkverzoeken. U kunt de *Proxy Host* en *Proxy Port* instellen.  


## Overige {#other}

In deze sectie van de OsmAnd-instellingen kunt u de meldingen die u ontvangt, de locatiedienst en hoe uw applicatie-instellingen worden opgeslagen, configureren.

### Dialogen en meldingen {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Algemene Instellingen meldingen Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Algemene Instellingen Dialogen iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

De instelling **<Translate android="true" ids="dialogs_and_notifications_title"/>** stelt u in staat om pop-ups, dialogen en meldingen in/uit te schakelen.  

- *Opstartbericht* bevat promoties, quizzen, evenementen en meer.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) onderdrukt het weergeven van app-kortingen en speciale lokale evenementberichten.
- [*Kaart downloaden dialoog*](../start-with/download-maps.md#downloading-maps) informeert u dat specifieke kaarten kunnen worden gedownload.


### Locatiebron {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*alleen Android*)

![Automatische back-up](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd biedt u een keuze aan diensten om uw locatie te bepalen. Het wordt aanbevolen om meer informatie te lezen over [Locatietoestemming](../start-with/first-steps.md#permission-to-access-the-location) en [Probleemoplossing](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) voor deze sectie.

***Android***:

- U kunt kiezen welke *Google Play*- of *Android API*-services OsmAnd zal gebruiken om uw locatie te bepalen. Dit kan handig zijn voor apparaten zonder *Google Play Services* of in geval van onnauwkeurige locatie- of hoogtegegevens bij het opnemen van tracks.
- OsmAnd ontvangt gegevens van de bronnen *Google Fused Location Providers* en *Android GPS and Network Providers*. U kunt **<Translate android="true" id="location_source" />** schakelen in: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- Het iOS-systeem gebruikt de *iOS API* om de locatie te bepalen.  
- Alle instellingen voor OsmAnd Locatie zijn te vinden in de instellingen van het iOS-apparaat: *Instellingen → OsmAnd kaarten → Locatie*  
- Privacy van Locatiediensten: *Instellingen → Privacy → Locatiediensten*


### Automatische back-up {#auto-backup}

<InfoAndroidOnly />

![Algemene Instellingen meldingen Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android of OsmAnd Cloud kunnen uw gegevens en app-instellingen opslaan.

- Standaard worden uw *OsmAnd-instellingen* en [*Favorieten*](../personal/favorites.md#automatic-favorites-backup) kaartmarkeringen automatisch geback-upt door het Android-systeem. Dit stelt u in staat om ze te herstellen op nieuwe apparaten of na het opnieuw installeren van de app.

- Houd er rekening mee dat de back-upgrootte beperkt is tot *25MB*.

- Gebruik een bestandsbeheer-app van derden om de back-upbestanden te vinden.  
    *OPMERKING: U kunt de back-upbestanden vinden met de Android-bestandsbeheerder: Android → data → net.osmand → files → backup, maar houd er rekening mee dat in recente versies van Android de toegang tot systeemdirectory's beperkt is.*  

**Als u [*OsmAnd Cloud*](../personal/osmand-cloud.md) gebruikt, wordt aanbevolen om deze standaard back-upoptie te deactiveren om verwarring tijdens herinstallatie te voorkomen.**


## Juridisch {#legal}

OsmAnd kan u [waarschuwen voor flitsers](../navigation/guidance/navigation-settings.md#screen-alerts), maar alleen als de wetten in uw land dit toestaan.


### Flitsers verwijderen {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Algemene Instellingen Flitsers Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![Algemene Instellingen Flitsers Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Algemene Instellingen Flitsers iOS](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![Algemene Instellingen Flitsers iOS](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Met deze instelling kunt u POI's met flitsers activeren of deactiveren. U moet de OsmAnd-applicatie opnieuw opstarten om de wijzigingen door te voeren.
  
In sommige landen of regio's is het gebruik van applicaties die waarschuwen voor flitsers illegaal. U moet een keuze maken afhankelijk van de wetten in uw land. Selecteer **Actief houden**, en u ontvangt waarschuwingen en meldingen voor flitsers. Selecteer **Verwijderen** en alle gegevens met betrekking tot flitsers, zoals waarschuwingen, meldingen en POI's, worden verwijderd totdat u OsmAnd volledig opnieuw installeert.  

Lees meer over waarschuwingen voor flitsers op uw route in het artikel Navigatiewidgets in de sectie *[Waarschuwingswidget](../widgets/nav-widgets.md#alert-widget)*.


## Gerelateerde artikelen {#related-articles}

- [Profielen (Instellingen)](./profiles.md)
- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)

### Probleemoplossing {#troubleshooting}

- **Android 12+ (opslagmap wijzigen)**. Nieuwe richtlijnen voor opslagtoegang zijn geïmplementeerd in Android-versies 11-12. Deze wijzigingen hebben met name invloed op de opslag van kaarten op SD-kaarten, wat resulteert in aanzienlijk lagere prestaties bij bestandstoegang en strengere toegangsbeperkingen tot SD-kaartmappen op Android 11 en 12. Voor het oplossen van dit probleem, zie de sectie [**Probleemoplossing**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Locatiebron voor hoogteproblemen**. Google Play heeft zijn beleid gewijzigd en om hieraan te voldoen, moet OsmAnd, vanaf versie 3.9, Google Play Services gebruiken om locatiebepalingen te verkrijgen terwijl het op de achtergrond draait. Lees meer informatie in de sectie [Probleemoplossing](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).