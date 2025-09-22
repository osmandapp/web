---
source-hash: 54f960139673d7e63928d90ee9d92e56a29e0041c46723da9fc302c0ac415a0a
sidebar_position: 12
title:  BRouter
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
Het externe routeringsalgoritme BRouter is alleen beschikbaar voor de Android-versie van de OsmAnd-app.
:::

*BRouter* is een extern routeringsalgoritme dat in de OsmAnd-app kan worden gebruikt voor de [offline navigatiemodus](../guidance/navigation-settings.md#navigation-type). Het is ontworpen om een route te optimaliseren op basis van verschillende parameters, zoals tijd, afstand of voertuigtype.

[BRouter](http://brouter.de/) gebruikt OpenStreetMap-gegevens om een route te maken en past deze vervolgens aan op basis van gespecificeerde parameters. Het gebruikt vooraf berekende routes om snel offline een route op te bouwen. Het stelt u ook in staat om routeringsprofielen aan te passen, die worden gedefinieerd door een set parameters om rekening te houden met verschillende factoren bij de routekeuze. Het [BRouter readme.txt](http://brouter.de/brouter/readme.txt)-bestand legt in meer detail uit hoe het programma te installeren en te gebruiken.

OsmAnd biedt u de mogelijkheid om routes met BRouter te selecteren en routeringsprofielen te configureren om de route beter af te stemmen op uw behoeften.

Voor meer informatie kunt u de officiële [Brouter-website](http://www.brouter.de/brouter/algorithm.html) bezoeken.

De integratie van BRouter in OsmAnd is in de zomer van 2019 sterk veranderd. Deze gids gaat ervan uit dat u de BRouter Android-app in versie 1.5.0 of hoger gebruikt, evenals OsmAnd in versie 3.4 of hoger.

:::note
Het externe routeringsalgoritme BRouter is alleen beschikbaar voor de Android-versie van de OsmAnd-app.
:::  


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>


## Hoe te configureren {#how-to-configure}

Volg deze gids voor het installeren en configureren van de externe applicatie *BRouter Offline Navigation* voor gebruik in OsmAnd.

**1.** Om te beginnen moet u de BRouter-app op uw Android-apparaat installeren vanuit [F-Droid](https://f-droid.org/packages/btools.routingapp) of de [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp).
**2.** Om vervolgens met de OsmAnd-app te navigeren langs vooraf berekende routes met BRouter, moet u:


  - De BRouter-applicatie openen en op *Download Manager* tikken.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

  - Inzoomen en de gebieden selecteren waarin u wilt routeren. Klik vervolgens op "Start Download" en BRouter begint met het downloaden van de [segmenten](http://brouter.de/brouter/segments4/)-bestanden voor de geselecteerde gebieden.

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

**Opmerking**: u zult deze stap periodiek moeten herhalen, telkens wanneer u een bijgewerkte versie van de OSM-gegevens wilt hebben die voor de routering worden gebruikt.

**3.** Zodra dit is gebeurd, start u de BRouter-app opnieuw en kiest u de "BRouter App"-optie in het *Hoofdmenu*. Kies een routeringsprofiel afhankelijk van uw vervoerswijze. Dit kan fietsen, bromfietsen, wandelen of trektochten zijn. Een lijst met beschikbare profielen om te downloaden in *brf*-formaat is [hier](http://brouter.de/brouter/profiles2/) te vinden. Of u kunt proberen het routeringsprofiel te gebruiken in [BRouter-online](http://brouter.de/brouter-web/). Klik op "Service-Mode". Vink vervolgens de vakjes aan voor de routeringsmodi waarvoor u dit profiel wilt gebruiken. U kunt twee verschillende profielen per vervoersmodus gebruiken, die worden toegewezen aan de "kortste" en "snelste" voorinstellingen (dit zijn slechts labels) in OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>  

**4.** Als u eerder al segmenten hebt geladen, worden deze weergegeven op de BRouter-kaart. De segmenten hebben vier statussen:

- *"Groen"* vierkant - Geselecteerd nieuw segment om te downloaden.
- *"Blauw"* vierkant - Het segment met bijgewerkte gegevens.
- *"Grijs"* vierkant - Het segment is al gedownload maar moet worden bijgewerkt.
- *"Geel"* vierkant - Het segment wordt bijgewerkt.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Wanneer u de vereiste kaartsegmenten met BRouter hebt geladen en daarin een routeringsprofiel hebt geselecteerd, worden alle volgende instellingen van dit type navigatie in de OsmAnd-applicatie gedaan.

**6.** U kunt een "Applicatieprofiel" aanmaken in OsmAnd dat BRouter zal gebruiken voor offline routering.
Gebruik het routeringstype *BRouter (offline)* met een willekeurig [profiel](../../personal/profiles.md) in de OsmAnd-app. Ga hiervoor naar het hoofdmenu *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* en maak een nieuw profiel aan op basis van het basisprofiel van uw keuze (hier fietsen, voor fietsroutes), met een aangepaste naam naar keuze ("BRouter" op de schermafbeelding hieronder) en maak gebruik van "BRouter (offline)" voor navigatie.


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

De BRouter-app moet vóór OsmAnd worden gestart om deze specifieke optie in OsmAnd te laten verschijnen. Als u de navigatieoptie "BRouter (offline)" niet kunt vinden, moet u OsmAnd geforceerd afsluiten en opnieuw opstarten.

## OsmAnd Versie 4.7.1 {#osmand-version-471}

Vanaf versie 4.7.1 ondersteunt OsmAnd de profielparameter voor mapping: Sinds OsmAnd versie 3 kunnen veel profielen in OsmAnd worden gedefinieerd en kunt u eenvoudig tussen deze profielen schakelen. Er moet een nieuw profiel worden aangemaakt, bijvoorbeeld door het bestaande *Fietsen*-profiel te kopiëren en het een nieuwe naam te geven in het formaat Brouter[fastbike]. U kunt een van de bestaande BRouter-profielen die op uw apparaat zijn geïnstalleerd in de naam gebruiken. Alle profielbestanden hebben een naamgevingsformaat van 'xxxxxxx.brf'. Of u kunt een eigen nieuw profiel aanmaken, zoals 'mijnprofiel.brf'.

De naamgevingsconventie in het OsmAnd-profiel is belangrijk, omdat het BRouter-profiel dat in dat profiel is opgenomen de daadwerkelijke brug vormt tussen OsmAnd en BRouter.

- Als in OsmAnd een profiel *BRouter* heeft gedefinieerd als navigatiedienst
- EN de profielnaam eruitziet als "Brouter[mystring]"

Dan zal het profiel "mystring" worden gebruikt in de Brouter-app. Deze nieuwe mapping vervangt in dat geval de basismapping die hierboven is gedefinieerd en gebaseerd is op het bestand "serviceconfig.dat".

### Voorbeelden: OsmAnd-profielnaam Brouter-app {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] "trekking" profiel zal worden gebruikt bestand: trekking.brf
Brouter[fastbike] "fastbike" profiel zal worden gebruikt bestand: fastbike.brf
....
```

Opmerking:
Momenteel controleert OsmAnd de gedefinieerde naam (hoofdlettergevoelig) voor het Brouter-profiel (mystring) niet.
Als er geen profiel wordt gevonden, mislukt de routering met "Kon route niet berekenen..".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Hoe te gebruiken {#how-to-use}

Deze sectie beschrijft een vergelijking van BRouter met de interne routering van de OsmAnd-applicatie.

Wanneer BRouter is geconfigureerd, kunnen we de snelheid van de voorberekening van de BRouter-routeringsgegevens vergelijken met de interne OsmAnd-routering. Laten we twee willekeurige punten in Nederland kiezen en de berekening van de reis starten. Hiervoor stellen we een gebalanceerde rijstijl in zonder hoogtegegevens te gebruiken voor het basisprofiel. De berekeningstijd voor deze reis is 14,5 sec voor onze interne OsmAnd-route. De routeberekeningstijd bij gebruik van BRouter-routering is minder dan 1 seconde.

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
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/>  <Translate android="true" ids="fast_route_mode_descr"/> | In de meeste gevallen wordt de kortste route voorgesteld. Vaak kan deze route langer duren dan wanneer de instelling was uitgeschakeld |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Lees over de optie Tijdelijke beperkingen in dit [artikel](../routing/osmand-routing.md#consider-temporary-limitations).   | Het routeringsalgoritme houdt rekening met de tijdsbeperkingen die in OpenStreetMap zijn gespecificeerd. Merk op dat in sommige gevallen de informatie van OSM verouderd kan zijn.   |


### Andere routeringsinstellingen {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Navigatie → Instellingen*, [afbeelding](../routing/online-routing.md#online-routing-setting)). Als deze optie is ingeschakeld, voegt OsmAnd twee segmenten toe aan de berekende Brouter-track: één van *[Mijn locatie](../../map/interact-with-map.md#my-location-and-zoom)* naar het startpunt van de track en een andere van het einde van de track naar het eindpunt van uw route. Deze optie is actief als de afstand van of naar de track groter is dan 60 meter.

- In de sectie [*Route herberekenen*](../../navigation/guidance/navigation-settings.md#recalculate-route) van de *Routeparameters* kunt u opties voor het herberekenen van de route inschakelen en aanpassen.

- In de sectie [*Ontwikkeling*](../guidance/navigation-settings.md#development-settings) van de *Routeparameters* kunt u nieuwe routeringsfuncties uitproberen die momenteel in de testfase zijn. Merk op dat deze instellingen alleen beschikbaar zijn wanneer de [OsmAnd ontwikkelingsplugin](../../plugins/development.md) is ingeschakeld.