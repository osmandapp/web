---
source-hash: 7669ebc684d82d59a895a98d5dc83c05fad8cf9113b076ddb5dd9660c461ce5e
sidebar_position: 12
title: BRouter
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




## Overzicht {#overview}

:::caution ALLEEN ANDROID
Het BRouter-routeringsalgoritme van derden is alleen beschikbaar voor de Android-versie van de OsmAnd-app.
:::

*BRouter* is een routeringsalgoritme van derden dat kan worden gebruikt in de OsmAnd-app voor de [offline navigatiemodus](../guidance/navigation-settings.md#navigation-type). Het is ontworpen om een route te optimaliseren op basis van verschillende parameters, zoals tijd, afstand of voertuigtype.

[BRouter](http://brouter.de/) gebruikt OpenStreetMap-gegevens om een route te maken en past deze vervolgens aan op basis van gespecificeerde parameters. Het gebruikt vooraf berekende routes om snel offline een route op te bouwen. Het stelt u ook in staat om routeringsprofielen aan te passen, die worden gedefinieerd door een reeks parameters om rekening te houden met verschillende factoren bij de routeselectie. Het [BRouter readme.txt](http://brouter.de/brouter/readme.txt) bestand legt gedetailleerder uit hoe het programma te installeren en te gebruiken.

OsmAnd biedt u de mogelijkheid om routes te selecteren met BRouter en routeringsprofielen te configureren om de route beter te definiëren volgens uw behoeften.

Voor meer informatie kunt u de officiële [Brouter website](http://www.brouter.de/brouter/algorithm.html) bezoeken.

De BRouter-integratie in OsmAnd is in de zomer van 2019 veel veranderd. Deze gids gaat ervan uit dat u de BRouter Android-app in versie 1.5.0 of hoger gebruikt, evenals OsmAnd in versie 3.4 of hoger.

:::note
Het BRouter-routeringsalgoritme van derden is alleen beschikbaar voor de Android-versie van de OsmAnd-app.
:::


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## Hoe te configureren {#how-to-configure}

Volg deze gids voor het installeren en configureren van de externe *BRouter Offline Navigatie*-applicatie voor gebruik in OsmAnd.

**1.** Om te beginnen moet u de BRouter-app op uw Android-apparaat installeren via [F-Droid](https://f-droid.org/packages/btools.routingapp) of [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) op uw apparaat.
**2.** Om vervolgens te navigeren met de OsmAnd-app langs vooraf berekende routes met de BRouter, moet u:


  - Open de BRouter-applicatie en tik op *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - Zoom in en selecteer de gebieden waarin u wilt routeren. Klik vervolgens op "Start Download" en BRouter begint met het downloaden van de [segmenten](http://brouter.de/brouter/segments4/) bestanden voor de geselecteerde gebieden.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table>

**Let op** dat u deze stap periodiek moet herhalen, wanneer u een bijgewerkte versie van de OSM-gegevens wilt hebben die voor de routering worden gebruikt.

**3.** Zodra dit is gebeurd, start u de BRouter-app opnieuw en kiest u de "BRouter App"-ingang in het *Hoofdmenu*. Kies een routeringsprofiel afhankelijk van uw reiswijze. Dit kan fietsen, bromfietsen, wandelen of trektochten zijn. Een lijst met beschikbare profielen om te downloaden in *brf*-formaat vindt u [hier](http://brouter.de/brouter/profiles2/). Of u kunt proberen het routeringsprofiel te gebruiken in [BRouter-online](http://brouter.de/brouter-web/).
Klik op "Service-modus". Vink vervolgens de vakjes aan voor de routeringsmodi waarvoor u dit profiel wilt gebruiken. U kunt twee verschillende profielen per vervoerswijze gebruiken, die worden toegewezen aan de "kortste" en "snelste" voorinstellingen (dit zijn slechts labels) in OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>

**4.** Als u eerder segmenten hebt geladen, worden deze weergegeven op de BRouter-kaart. De segmenten hebben vier statussen:

- *"Groen"* vierkant - Geselecteerd nieuw segment om te downloaden.
- *"Blauw"* vierkant - Het segment met bijgewerkte gegevens.
- *"Grijs"* vierkant - Het segment is al gedownload, maar moet worden bijgewerkt.
- *"Geel"* vierkant - Het segment wordt bijgewerkt.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Wanneer u de vereiste kaartsegmenten met BRouter hebt geladen en een routeringsprofiel daarin hebt geselecteerd, worden alle volgende instellingen van dit type navigatie gemaakt in de OsmAnd-applicatie.

**6.** U kunt een "Applicatieprofiel" aanmaken in OsmAnd dat BRouter zal gebruiken voor offline routering.
Gebruik het *BRouter (offline)* routeringstype met elk [profiel](../../personal/profiles.md) in de OsmAnd-app. Ga hiervoor naar het hoofdmenu *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* en maak een nieuw profiel aan op basis van het basisprofiel van uw keuze (hier fietsen, voor fietsroutering), met een aangepaste naam naar keuze ("BRouter" op de onderstaande schermafbeelding) en gebruikmakend van "BRouter (offline)" voor navigatie.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

De BRouter-app moet vóór OsmAnd worden gestart om deze specifieke vermelding in OsmAnd te laten verschijnen. Als u de navigatieoptie "BRouter (offline)" niet kunt vinden, moet u OsmAnd geforceerd afsluiten en opnieuw starten.

## OsmAnd Versie 4.7.1 {#osmand-version-471}

Vanaf versie 4.7.1 ondersteunt Osmand de profielparameter voor mapping: Sinds Osmand versie 3 kunnen veel profielen in Osmand worden gedefinieerd en kunt u eenvoudig tussen deze profielen schakelen. Er moet een nieuw profiel worden aangemaakt, bijvoorbeeld door het bestaande *Fietsen*-profiel te kopiëren en het een nieuwe naam te geven in het formaat Brouter[fastbike]. U kunt een van de bestaande BRouter-profielen in de naam gebruiken die op uw apparaat zijn geïnstalleerd. Alle profielbestanden hebben een naamgevingsformaat van 'xxxxxxx.brf'. Of u kunt een nieuw profiel van uzelf maken, zoals 'myprofile.brf'.

De naamgevingsconventie in het OsmAnd-profiel is belangrijk, aangezien het BRouter-profiel dat in dat profiel is opgenomen, de feitelijke brug vormt tussen OsmAnd en BRouter.

- Als in Osmand een profiel *BRouter* als navigatieservice heeft gedefinieerd
- EN de profielnaam eruitziet als "Brouter[mystring]"

Dan wordt het profiel "mystring" gebruikt in de Brouter-app. Deze nieuwe mapping vervangt in dat geval de hierboven gedefinieerde basismapping en is gebaseerd op het bestand "serviceconfig.dat".

### Voorbeelden: Osmand-profielnaam Brouter-app {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] "trekking" profiel wordt gebruikt bestand: trekking.brf
Brouter[fastbike] "fastbike" profiel wordt gebruikt bestand: fastbike.brf
....
```

Opmerking:
Momenteel controleert Osmand de gedefinieerde naam (hoofdlettergevoelig) voor het Brouter-profiel (mystring) niet.
Als er geen profiel wordt gevonden, mislukt de routering met "Kon route niet berekenen..".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Hoe te gebruiken {#how-to-use}

Deze sectie beschrijft een vergelijking van BRouter met de interne routering van de OsmAnd-applicatie.

Wanneer BRouter is geconfigureerd, kunnen we de voorberekeningssnelheid van de BRouter-routeringsgegevens vergelijken met de interne OsmAnd-routering. Laten we twee willekeurige punten in Nederland kiezen en de reisberekening starten. Hiervoor stellen we een gebalanceerde rijstijl in zonder hoogtedata te gebruiken voor het basisprofiel. De berekeningstijd voor deze reis is 14,5 sec voor onze interne OsmAnd-route. De routeberekeningstijd bij gebruik van BRouter-routering is minder dan 1 seconde.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>


## Routeparameters {#route-parameters}

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| Parameter | Beschrijving | Opmerking |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> <Translate android="true" ids="fast_route_mode_descr"/> | In de meeste gevallen wordt de kortste route voorgesteld. Vaak kan deze route langer duren dan wanneer de instelling was uitgeschakeld |
| *<Translate android="true" ids="temporary_conditional_routing"/>* | Lees over de optie Tijdelijke beperkingen overwegen in dit [artikel](../routing/osmand-routing.md#consider-temporary-limitations). | Het routeringsalgoritme houdt rekening met de tijdsbeperkingen die zijn gespecificeerd in OpenStreetMap. Houd er rekening mee dat in sommige gevallen de informatie van de OSM verouderd kan zijn. |


### Overige routeringsinstellingen {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navigatie → Instellingen*, [afbeelding](../routing/online-routing.md#online-routing-setting)). Als deze optie is ingeschakeld, voegt OsmAnd twee segmenten toe aan het berekende Brouter-spoor: één van *[Mijn locatie](../../map/interact-with-map.md#my-location-and-zoom)* naar het startpunt van het spoor en één van het einde van het spoor naar het eindpunt van uw route. Deze optie is actief als de afstand naar of van het spoor meer dan 60 meter bedraagt.

- In de sectie [*Route herberekenen*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kunt u opties voor routeherberekening inschakelen en aanpassen.

- In de sectie [*Ontwikkeling*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe routeringsfuncties uitproberen die momenteel in de testfase zijn. Houd er rekening mee dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd-ontwikkelingsplug-in](../../plugins/development.md) is ingeschakeld.

> *Laatst bijgewerkt: juni 2024*