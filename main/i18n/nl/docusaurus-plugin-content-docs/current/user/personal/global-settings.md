---
source-hash: 71c20d65a3fb26bf934cf5f977a6fd59d90d866366d685c137ace186ae0877f8
sidebar_position: 3
title: Algemene instellingen
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

**Algemene instellingen** zijn algemene [instellingen](../personal/profiles.md) voor alle profielen in de OsmAnd-applicatie. Dit zijn de basisinstellingen voor het OsmAnd-systeem, en alle wijzigingen die worden aangebracht, zijn van invloed op de gehele applicatie.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*

![Profielen Algemene instellingen Android](@site/static/img/personal/profiles/global_sett_1_andr.png) ![Profielen Algemene instellingen Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*

![Profielen Algemene instellingen iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Algemeen {#general}

Deze sectie bevat de basisinstellingen van OsmAnd, zoals het selecteren van een [profiel](#default-profile) bij het laden van de applicatie, het selecteren van de [rendering-engine](#map-rendering-engine) en de [map](#data-storage-folder) waar de gegevens worden opgeslagen.


### Standaardprofiel {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Algemene instellingen Standaardprofiel Android](@site/static/img/personal/profiles/default_profile_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Algemene instellingen Standaardprofiel Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd gebruikt het standaardprofiel, *Kaart bekijken*, als het eerste profiel voor nieuwe gebruikers, en als dit profiel door u is geselecteerd, wordt het elke keer dat de applicatie opnieuw wordt gestart gebruikt. U kunt elk profiel uit de standaardlijst selecteren, inclusief *Laatst gebruikt* en *Kaart bekijken*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Hiermee kunt u het laatst gebruikte profiel selecteren.
- **<Translate android="true" ids="settings_preset"/>**. U selecteert het profiel dat moet worden gebruikt bij het starten van OsmAnd. Het kan worden gewijzigd in de [instellingen](../personal/profiles.md) van de applicatie.


### CarPlay-profiel {#carplay-profile}

:::caution ALLEEN iOS
Deze functie is beschikbaar voor de iOS-versie van de OsmAnd-app.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*

![Algemene instellingen Standaardprofiel Android](@site/static/img/personal/profiles/CarPlay_ios.png)

Het [**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) wordt gebruikt wanneer u bent verbonden met de [CarPlay-software](https://support.apple.com/en-gb/HT205634) van uw voertuig en helpt u het meeste uit de geoptimaliseerde versie van de OsmAnd-app te halen door de audio- en videosystemen te gebruiken om gegevens op uw telefoon weer te geven.


### Map voor gegevensopslag {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profielen Opslaginstellingen Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)

1. **Apparaatgeheugen** toont hoeveel vrije ruimte er op uw apparaat over is. Tik op een veld om toegang te krijgen tot het menu [*Kaarten en bronnen*](../personal/maps-resources.md#maps--resources), waar u gedetailleerde informatie over uw OsmAnd-gegevens kunt bekijken en beheren.

2. In de **<Translate android="true" ids="change_data_storage_folder"/>** kunt u een map selecteren om OsmAnd-gegevens op uw apparaat op te slaan.

    - *Intern app-geheugen*. Alleen de OsmAnd-app heeft toegang tot zijn gegevens en geen van de externe apps.
    - *Gedeeld geheugen*. Niet langer beschikbaar.
    - *Externe opslag 1*. Slechts 1 OsmAnd-app heeft toegang en Admin-apps en USB.
    - *Opslag voor meerdere gebruikers*. Slechts 1 OsmAnd-app heeft toegang, maar deze wordt gedeeld tussen meerdere Android-gebruikers.
    - *Handmatig opgegeven*. Afhankelijk van het pad.

:::note Android 12+ (opslagmap wijzigen)
Nieuwe richtlijnen voor opslagtoegang zijn geïmplementeerd in Android-versies 11-12. Zie de sectie [**Probleemoplossing**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card) voor details.
:::

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *iOS-apparaat → Instellingen → Algemeen → iPhone-opslag → OsmAnd Kaarten*

![Algemene instellingen opslag iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)

OsmAnd-bestanden zijn zichtbaar in de applicatie [*Bestanden*](https://apps.apple.com/us/app/files/id1232058109). U hebt toegang tot alle OsmAnd-bestanden: [tracks](../personal/tracks/manage-tracks.md), [favorieten](../personal/favorites.md), [kaarten](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Volg hiervoor het volgende pad:

Ga naar: *Bestanden → Op mijn telefoon → OsmAnd Kaarten*

<!-- ![Bestanden-app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Bestanden-app iOS](@site/static/img/personal/storage/files_app_1_ios.png) -->

![Algemene instellingen opslag iOS](@site/static/img/personal/profiles/files-1.png) ![Algemene instellingen opslag iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Kaartrendering-engine {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (alleen Android)*

![Algemene instellingen engine rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)

- In de **Android**-versie van de app kunt u schakelen tussen Kaartrendering versie 1, oorspronkelijk geïmplementeerd in de OsmAnd-app, en versie 2, die de OpenGL (Open Graphics Library) programmeerinterface gebruikt voor het renderen van twee- en driedimensionale grafische objecten.

- De **iOS**-versie gebruikt alleen OpenGL voor kaartrendering.


| Functies | Versie 1 | Versie 2 (OpenGL) |
|:---|:---|:---|
| Cross-platform | Niet gebruikt in de iOS-versie. | Past bij beide versies. |
| GPU / CPU afhankelijk | Aanbevolen voor apparaten met lage prestaties of verouderde apparaten. | Krachtige rendering-engine. <br /> Alleen beschikbaar voor [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) en latere versies, en in testmodus voor [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| 3D-modus | Het is mogelijk om de kaart in 2D te bekijken, en u kunt de kijkhoek wijzigen om een [3D-weergave](../widgets/map-buttons.md#3d-mode) te krijgen. | U kunt de kaart in 2D en [3D](../widgets/map-buttons.md#3d-mode) bekijken. |
| Kaartweergave | De hele kaart wordt gerenderd als een set tegels, en markeringen, lijnen en tekst bevinden zich al binnen deze tegels. | Eerst wordt het hele tegelpakket gerenderd, en vervolgens worden de beschikbare symbolen op de kaart toegepast, [laag voor laag](../../technical/algorithms/map-rendering-layers.md). |
| Transparante symbolen overlay / onderlaag | Ondersteunt alle instellingen. | Het ondersteunt geen rasterlaag bovenop vector tekst. |
| [3D-terrein](../map/raster-maps.md#3d-relief) | Niet ondersteund. | Deze functie visualiseert het terrein op de kaart door hoogte-informatie toe te voegen aan een normale 2D-kaart, wat een 3D- en diepte-effect creëert. |
| [3D-tracks](../map/tracks/appearance.md) | Niet ondersteund. | Met deze functie kunt u tracks weergeven op hoogte boven zeeniveau. |
| [Online kaart](../plugins/online-map.md) | Het ondersteunt de weergave van hoogtelijnen niet als de kaartbron een online tegelkaart is. | Wanneer de kaartbron een online kaart is, worden ook 3D-kaarten gebruikt, en wordt de weergave van hoogtelijnen op de kaart ondersteund. |
| [Weer-plugin](../plugins/weather.md) | U kunt deze plugin niet gebruiken. | Handig in gebruik met de plugin. |

De afbeelding voor de 3D-weergave van de kaart wordt tegel voor tegel geladen, daarna alle symbolen. De rendersnelheid van de kaart is afhankelijk van het aantal 2D- en 3D-grafische objecten erop, en direct van de prestaties van uw hardware. Daarom kan versie 2 (OpenGL) niet worden gebruikt op apparaten met lage prestaties.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## Privacy en beveiliging {#privacy-and-security}

Met OsmAnd kunt u kiezen of u uw [in-app-activiteit](#analytics) en [identificatiegegevens](#identifiers) (*alleen Android*) in de app wilt delen, de mogelijkheid om uw [geschiedenis](#history) te bewerken en een [proxy](#proxy) (*alleen Android*) naar keuze te gebruiken.

:::note
Meer informatie vindt u in het [*OsmAnd Privacy- en beveiligingsbeleid*](../../legal/privacy-policy.md)
:::

### Analyse {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*

![Algemene instellingen Analyse Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Algemene instellingen Anonieme gegevens verzenden iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

De instelling **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) of **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) geeft u de keuze om anonieme gegevens te verstrekken over *Gedownloade kaarten* en *Bezochte schermen* (*Android*).

:::note
Gegevens over uw locatie of de plaatsen die u op de kaart bekijkt, worden niet verzameld.
:::

### Identificatiegegevens {#identifiers}

<InfoAndroidOnly />

*Menu → Instellingen → OsmAnd-instellingen → Privacy en beveiliging → Identificatiegegevens*

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)

Een **UUID** (*Unique User Identifier*) wordt gegenereerd voor elke installatie van de OsmAnd-applicatie en naar de servers verzonden tijdens het laden van de kaart.

- Een willekeurige UUID wordt gebruikt om offline kaarten van OsmAnd-servers te downloaden om het rationele gebruik van serverbronnen te controleren, het verkeersgebruik te voorspellen en algemene maandelijkse rapporten over kaartdownloads te verstrekken.
- De UUID verandert elke 3 maanden.
- Vanaf OsmAnd versie 4.3 kunt u het verzamelen van gebruikersgegevens uitschakelen bij het gebruik van de OsmAnd-app. Dan wordt de UUID niet met een downloadverzoek meegestuurd.
- Meer informatie vindt u in de [Gebruiksvoorwaarden (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Geschiedenis {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Algemene instellingen Geschiedenis Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Algemene instellingen Geschiedenis Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Algemene instellingen Geschiedenis iOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Algemene instellingen Geschiedenis iOS](@site/static/img/personal/profiles/history_settings_ios_4.png)

</TabItem>

</Tabs>

De applicatie registreert de geschiedenis van eerder ingevoerde gegevens (geschiedenis) in de volgende categorieën: [Zoeken](../search/search-history.md), [Navigatie](../navigation/setup/route-navigation.md#history-of-previous-routes), [Kaartmarkeringen](../personal/markers.md#history). Met de schakelaar op het betreffende tabblad kunt u het loggen voor bepaalde categorieën van vermeldingen *Inschakelen / Uitschakelen*. U kunt ook eerder opgenomen gegevens [beheren](#history) (bekijken, verwijderen en delen).

- ***Back-up als bestand*** (*Android*) of ***Exporteren*** (*iOS*) wordt gebruikt om [een back-upbestand](../personal/import-export.md#export) van uw geschiedenis te maken.
- ***Alle geschiedenis wissen*** (*Android*) of ***Alle geschiedenis verwijderen*** (*iOS*) wordt gebruikt om alle geschiedenisvermeldingen die tot het moment van verwijdering zijn opgenomen, te verwijderen.

<br/>

**Geschiedenis delen en verwijderen.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Algemene instellingen Geschiedenis Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Algemene instellingen Geschiedenis iOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Algemene instellingen Geschiedenis iOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- U kunt een of meer items uit de geschiedenislijst verwijderen of ze als bestand delen (om toegang te krijgen tot deze functies *in iOS*, tikt u op de knop ***Bewerken***).
- Om meerdere records tegelijk te verwijderen of te exporteren, selecteert u de selectievakjes naast de vereiste records en tikt u op de knoppen **Exporteren** of **Verwijderen**.


### Proxy {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*

![Algemene instellingen Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

De instelling **<Translate android="true" ids="proxy_pref_title"/>** stelt u in staat om een [HTTP-proxy](https://en.wikipedia.org/wiki/Proxy_server) te configureren voor alle netwerkverzoeken. U kunt de *Proxy Host* en *Proxy Port* instellen.


## Overig {#other}

In dit gedeelte van de OsmAnd-instellingen kunt u de meldingen die u ontvangt, de locatieservice en hoe uw applicatie-instellingen worden opgeslagen configureren.

### Dialoogvensters en meldingen {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Algemene instellingen meldingen Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Algemene instellingen Dialoogvensters iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)

</TabItem>

</Tabs>

De instelling **<Translate android="true" ids="dialogs_and_notifications_title"/>** stelt u in staat om pop-ups, dialoogvensters en meldingen in/uit te schakelen.

- *Opstartbericht* omvat promoties, quizzen, evenementen en meer.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) onderdrukt het weergeven van app-kortingen en speciale lokale evenementberichten.
- [*Kaart downloaden dialoogvenster*](../start-with/download-maps.md#download) informeert u dat specifieke kaarten kunnen worden gedownload.


### Locatiebron {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*alleen Android*)

![Automatische back-up](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd biedt u een keuze uit services om uw locatie te bepalen. Het wordt aanbevolen om meer informatie te lezen over [Locatietoestemming](../start-with/first-steps.md#permission-to-access-the-location) en [Probleemoplossing](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) voor deze sectie.

***Android***:

- U kunt kiezen welke *Google Play*- of *Android API*-services OsmAnd zal gebruiken om uw locatie te bepalen. Dit kan handig zijn voor apparaten zonder *Google Play Services* of in geval van onnauwkeurige locatie- of hoogtedata bij het opnemen van tracks.
- OsmAnd ontvangt gegevens van de bronnen *Google Fused Location Providers* en *Android GPS and Network Providers*. U kunt **<Translate android="true" id="location_source" />** schakelen in: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- Het iOS-systeem gebruikt de *iOS API* om de locatie te bepalen.
- Alle instellingen voor OsmAnd Locatie zijn te vinden in de iOS-apparaatinstellingen: *Instellingen → OsmAnd-kaarten → Locatie*
- Privacy van Locatieservices: *Instellingen → Privacy → Locatieservices*


### Automatische back-up {#auto-backup}

<InfoAndroidOnly />

![Algemene instellingen meldingen Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android of OsmAnd Cloud kan uw gegevens en app-instellingen opslaan.

- Standaard worden uw *OsmAnd-instellingen* en [*Favorieten*](../personal/favorites.md#automatic-favorites-backup) kaartmarkeringen automatisch geback-upt door het Android-systeem. Hierdoor kunt u ze herstellen op nieuwe apparaten of na het opnieuw installeren van de app.

- Houd er rekening mee dat de back-upgrootte beperkt is tot *25 MB*.

- Om de back-upbestanden te vinden, gebruikt u een bestandsbeheer-app van derden.
    *OPMERKING: U kunt de back-upbestanden vinden met de Android-bestandsbeheerder: Android → data → net.osmand → files → backup, maar houd er rekening mee dat in recente versies van Android de toegang tot systeemdirectory's beperkt is.*

**Als u [*OsmAnd Cloud*](../personal/osmand-cloud.md) gebruikt, is het aan te raden deze standaard back-upoptie te deactiveren om verwarring tijdens herinstallatie te voorkomen.**


## Juridisch {#legal}

OsmAnd kan u [waarschuwen voor flitsers](../navigation/guidance/navigation-settings.md#screen-alerts), maar alleen als de wetten in uw land dit toestaan.


### Flitsers de-installeren {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*

![Algemene instellingen Camera's Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png) ![Algemene instellingen Camera's Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*

![Algemene instellingen Camera's Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png) ![Algemene instellingen Camera's Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Met deze instelling kunt u POI's met flitsers activeren of deactiveren; u moet de OsmAnd-applicatie opnieuw starten om wijzigingen aan te brengen.

In sommige landen of regio's is het gebruik van waarschuwingsapplicaties voor flitsers illegaal. U moet een keuze maken afhankelijk van de wetten in uw land. Selecteer **Actief houden**, en u ontvangt waarschuwingen en meldingen voor flitsers. Selecteer **De-installeren** en alle gegevens met betrekking tot flitsers, zoals waarschuwingen, meldingen en POI's, worden verwijderd totdat u OsmAnd volledig opnieuw installeert.

Lees over waarschuwingen voor flitsers op uw route in het artikel Navigatie-widgets in de sectie *[Waarschuwingswidget](../widgets/nav-widgets.md#alert-widget)*.


## Gerelateerde artikelen {#related-articles}

- [Profielen (Instellingen)](./profiles.md)
- [Importeren / Exporteren](../personal/import-export.md)
- [Kleurenpaletschema's](../personal/color-palette-schemes.md)

### Probleemoplossing {#troubleshooting}

- **Android 12+ (opslagmap wijzigen)**. Nieuwe richtlijnen voor opslagtoegang zijn geïmplementeerd in Android-versies 11-12. Deze wijzigingen beïnvloeden met name de opslag van kaarten op SD-kaarten, wat resulteert in aanzienlijk tragere bestandstoegangsprestaties en strengere toegangsbeperkingen tot SD-kaartmappen op Android 11 en 12. Voor het oplossen van dit probleem, zie de sectie [**Probleemoplossing**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Locatiebron voor hoogteproblemen**. Google Play heeft zijn beleid gewijzigd, en om hieraan te voldoen, moet OsmAnd, vanaf versie 3.9, Google Play Services gebruiken om locatiebepalingen te krijgen terwijl het op de achtergrond draait. Lees meer informatie in de sectie [Probleemoplossing](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).

> *Laatst bijgewerkt: november 2024*