---
source-hash: ab1bf0f074bc95cb4e2f827ac1233fdf86d268b226686d37920e9eac0ea746ec
sidebar_position: 10
title: CarPlay
android: false
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

Rijden en tegelijkertijd uw telefoon of tablet gebruiken is om veiligheidsredenen meestal wettelijk verboden. [***CarPlay***](https://www.apple.com/ios/carplay/) is software die een aangepaste en geoptimaliseerde versie van de OsmAnd-app biedt voor veilig gebruik tijdens het rijden, waardoor de navigatiefuncties van de app gemakkelijker en veiliger toegankelijk zijn.

Volg deze stappen om *CarPlay* op het scherm van uw voertuig te gebruiken:

1. *CarPlay* is niet in alle landen beschikbaar. Zorg ervoor dat het wordt ondersteund in uw [land of regio](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay) en dat *CarPlay* wordt ondersteund in uw [voertuigmodel](https://www.apple.com/ios/carplay/available-models/).
2. [Verbind uw apparaat](https://support.apple.com/en-gb/HT203412) met het multimediasysteem van uw voertuig via een USB-poort of draadloos met Wi-Fi of Bluetooth. Bij de eerste verbinding heeft u mogelijk toestemming nodig om *CarPlay* op uw apparaat te gebruiken.
3. Eenmaal verbonden, verschijnt de *CarPlay-interface* automatisch op het scherm van uw voertuig met alle beschikbare apps. Als het *CarPlay-startscherm* niet verschijnt, selecteert u het *CarPlay-logo* op het voertuigdisplay.

#### CarPlay-interface {#carplay-interface}

*CarPlay* is **geen directe replicatie** van de OsmAnd mobiele app. Het heeft een vereenvoudigde interface, gericht op essentiële navigatiefuncties om veilig rijden te garanderen. Sommige geavanceerde functies worden niet ondersteund vanwege platformbeperkingen.

### Verbindingsscherm {#connection-screen}

![CarPlay](@site/static/img/navigation/auto-car/car_play_connect_screen.png)

Terwijl uw apparaat is verbonden met *CarPlay*, is de kaart op het app-scherm vergrendeld. Dit is een opzettelijke beveiligingsfunctie om ervoor te zorgen dat navigatie uitsluitend vanaf het autodisplay wordt bediend, waardoor afleiding tijdens het rijden wordt geminimaliseerd. Bekijk de [veelgestelde vragen](#common-issues-and-solutions) over het verbindingsscherm.

### Locatiepositie in CarPlay {#location-position-in-carplay}

De OsmAnd-app voor *CarPlay* stelt u in staat om de positie van de huidige locatie-indicator op het scherm aan te passen om overlapping van de route en andere belangrijke kaartdetails te voorkomen.

**Hoe de indicatorpositie te wijzigen:**

- Ga naar *Menu → Scherm configureren → Overig → [Locatiepositie op scherm](../widgets/configure-screen.md#display-position-location-position-on-screen)*.
- Selecteer uw voorkeurspositie:
    - **Automatisch (standaard)**. De applicatie verschuift automatisch de positie van de indicator voor de navigatiemodus of vrije beweging.
    - **Midden**. De indicator wordt in het midden van het scherm geplaatst, geschikt voor standaardnavigatie.
    - **Onder**. De indicator wordt dichter bij de onderkant van het scherm geplaatst, waardoor het gemakkelijker is om omringende objecten en complexe kruispunten te observeren.

### Interactie met de kaart {#interaction-with-the-map}

![CarPlay-scherm](@site/static/img/navigation/auto-car/car-play-Interaction(1).png)

*CarPlay* toont de OsmAnd-interface aangepast aan het multimediasysteem van het voertuig. Interactie met de kaart is beperkt tot:

- [Mijn locatie](../widgets/map-buttons.md#my-location-and-zoom). Verplaatst het zichtbare deel van de kaart zodat uw huidige locatie in het midden van het scherm staat.
- [Zoom](../widgets/map-buttons.md#my-location-and-zoom). Hiermee kunt u in- en uitzoomen op het zichtbare deel van de kaart.

## Vereiste instellingsparameters {#required-setup-parameters}

![CarPlay-scherm](@site/static/img/navigation/auto-car/car-play-select-point-1.png)

- Eerst moet u het profiel selecteren en configureren dat moet worden gebruikt bij het verbinden met *CarPlay*. U kunt lezen hoe u een profiel configureert in het artikel [Profielen (Instellingen)](../personal/profiles).
    - Een handig profiel voor het gebruik van *CarPlay* kan *Rijden* zijn, en het type routering kan [Autoroutering](../navigation/routing/car-based-routing.md) zijn.
    - OsmAnd heeft een apart item [CarPlay-profiel](#carplay-profile) voor snelle toegang tot de lijst met profielen die beschikbaar zijn voor verbinding met *CarPlay*.
- Om OsmAnd te laten werken, [verbindt u uw iOS-apparaat](#overview) met het multimediasysteem van het voertuig. Voor meer informatie over het verbinden en instellen van uw apparaat, kunt u de [**CarPlay**](https://support.apple.com/en-us/HT205634) website bezoeken.
- U moet een van de [betaalde versies of abonnementen van OsmAnd](../purchases/ios#free-and-paid-features) hebben. Controleer dit hier: *Menu → Instellingen → Aankopen*.
- Eenmaal verbonden, kunt u een bestemming instellen en de OsmAnd-navigatie starten in *CarPlay*.

:::note
Mogelijk heeft u een internetverbinding nodig om OsmAnd in *CarPlay* te gebruiken. Als uw apparaat beperkte internettoegang heeft, kunt u [*routes vooraf laden of maken*](../personal/tracks/manage-tracks.md) en deze zonder internet gebruiken.
:::

### Navigatie starten {#start-navigation}

![CarPlay-scherm](@site/static/img/navigation/auto-car/car-play-start(1).png)

Om de iOS-versie van de OsmAnd-app in *CarPlay* te gebruiken, moet u een [betaalde versie van de app aanschaffen of een abonnement nemen](../purchases/ios#free-and-paid-features).

1. Om een route te maken, moet u het [route-eindpunt](#select-a-route-endpoint) kiezen op het *CarPlay-scherm* of in de [OsmAnd-app](../navigation/setup/route-navigation.md).
2. U kunt [gesproken aanwijzingen](#voice-prompts) gebruiken om aanwijzingen of berichten over problemen op de weg te beluisteren.
3. Nadat u een locatie hebt geselecteerd, drukt u op **Start** om de route te volgen.
4. Terwijl u rijdt, toont het voertuigscherm OsmAnd-informatie over uw huidige locatie op de kaart, rij-aanwijzingen, afstand tot de volgende afslag, lijnen, aankomsttijd en afstand tot uw bestemming.
    ![CarPlay-scherm](@site/static/img/navigation/auto-car/car_play_navmode.png)
5. Als u uw route wilt wijzigen of een andere locatie wilt selecteren, kunt u op de juiste knop op het scherm drukken.
6. Zodra u uw route hebt voltooid, kunt u *CarPlay* deactiveren door het apparaat los te koppelen van het multimediasysteem van uw voertuig.

:::note
Alle categorieën voor de selectie van het **route-eindpunt**, *[Geschiedenis](#history), [POI's](#poi-categories), [Markeringen](#map-markers), [Zoeken](#search), [Favorieten](#favorites) en [Tracks](#tracks)* mogen niet meer lijstitems bevatten dan uw multimediasysteem van het voertuig biedt. Typisch zijn lijsten in de meeste voertuigen dynamisch beperkt tot 12 of 24 items. Dit betekent dat de lijst in *CarPlay* mogelijk niet compleet is. Het totale aantal items en het werkelijke aantal weergegeven items wordt aangegeven onder de mapnaam.
:::

### CarPlay-profiel {#carplay-profile}

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*
![Algemene instellingen Standaardprofiel Android](@site/static/img/personal/profiles/CarPlay_ios.png)

**CarPlay-profiel** is een specifiek profiel in de OsmAnd-app voor handig gebruik van het audio- en videosysteem van uw auto voor verdere weergave van deze gegevens op uw telefoon.

Dit profiel wordt gebruikt zolang uw apparaat is verbonden met *CarPlay*. Tik op het veld *CarPlay-profiel* in het *OsmAnd-instellingenmenu* en selecteer uit de lijst met [profielen die zijn ingeschakeld voor gebruik](../personal/profiles.md) het profiel waarmee *CarPlay* wordt geactiveerd.

U kunt geen profiel rechtstreeks in *CarPlay* selecteren vanaf het voertuigscherm. Selecteer eerst het vereiste profiel op uw apparaat en koppel het *CarPlay-profiel* eraan. U moet een profiel selecteren dat overeenkomt met het type voertuig, zoals *Rijden*, *Vrachtwagen*, *Auto*, *Motorfiets* of *Bromfiets*. **De app wordt automatisch geactiveerd** het *CarPlay-profiel* wanneer verbonden met een voertuig.

**Waarom het belangrijk is om het juiste profiel voor uw voertuigtype te selecteren.**

- **Rijveiligheid.** Verschillende soorten transport vereisen verschillende informatie en instellingen tijdens het rijden. Vrachtwagenchauffeurs kunnen bijvoorbeeld beperkt zijn in de hoogte, het gewicht en de breedte van hun voertuigen, dus het *Vrachtwagen*-profiel biedt hen passende beperkingen en richtlijnen. Terwijl fietsers en motorrijders informatie nodig hebben over fietspaden en routes, zonder gegevens voor vrachtwagens.
- **Bruikbaarheid en efficiëntie.** Navigatie moet worden aangepast aan de behoeften van een specifieke vervoerswijze. Hierdoor kunnen gebruikers de tijd die nodig is om optimale routes te vinden verkorten en onnodige verkeersbeperkingen vermijden.

## Een route-eindpunt selecteren {#select-a-route-endpoint}

U kunt eerder ingestelde en toegevoegde [POI's](../map/point-layers-on-map.md#points-of-interest-pois), of [Favorieten](../personal/favorites.md), of [Markeringen](../personal/markers.md) als bestemming selecteren. Het is ook mogelijk om een opgenomen of gedownloade [Track](../personal/tracks/index.md) voor de route te selecteren, de [Zoekfunctie](../search/index.md) te gebruiken, of een bestemming te selecteren uit de route [Geschiedenis](../search/search-history.md).

1. Als u een specifieke locatie op de kaart als eindpunt wilt, selecteert u de juiste categorie punten uit de lijst, [POI's](#poi-categories), [Favorieten](#favorites), of [Kaartmarkeringen](#map-markers).

    - Alle categorieën mogen niet meer lijstitems bevatten dan uw multimediasysteem van het voertuig biedt. Dit betekent dat de lijst in *CarPlay* onvolledig kan zijn, en alle andere mappen zijn alleen beschikbaar in de OsmAnd-app op uw apparaat.
    - De map [Laatst gewijzigd](#folder-last-modified) bevat een lijst met recente bestemmingen, gesorteerd op datum van toevoeging of wijziging.
    - De lijst met alle andere mappen is gesorteerd op de meest recente update, nieuwe mappen staan bovenaan de lijst. Het is niet mogelijk om hun volgorde handmatig te wijzigen.
    - De lijst met punten binnen mappen is gesorteerd op afstand tot deze, beginnend met de dichtstbijzijnde. Elk punt heeft een naam of coördinaten, een gevormd pictogram (kleur en pictogram standaard ingesteld of door u gekozen in de OsmAnd-applicatie), en de afstand van het punt van de huidige locatie ernaartoe.
2. Selecteer de categorie [Geschiedenis](#history) om een van de recente bestemmingen te vinden die in het geheugen van het apparaat zijn opgeslagen.
3. Selecteer [Zoeken](#search) om een bestemming in te voeren vanuit de beschikbare zoekcategorieën.

:::note
Tijdens het rijden kunnen geselecteerde punten [aangekondigd](#voice-prompts) worden wanneer u deze nadert of passeert. Zie de instellingen voor [Gesproken aanwijzingen](../navigation/guidance/voice-navigation.md) in het betreffende artikel om gesproken meldingen in te stellen.
:::

### Geschiedenis {#history}

![CarPlay-scherm](@site/static/img/navigation/auto-car/car_play_history.png)

In de **Geschiedenis categorie** kunt u een bestemming selecteren uit een lijst met eindpunten.

- Ze zijn gesorteerd op meest recent gebruik, beginnend met de nieuwste.
- Dit kan handig zijn voor snelle toegang tot veelgebruikte routes.
- Om te leren hoe u een bestemming gebruikt of verwijdert, leest u het artikel [Zoekgeschiedenis](../search/search-history.md).

### POI-categorieën {#poi-categories}

<table class="image">
    <tr>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi_1.png').default} alt="CP"/></td>
        <td><img src={require('@site/static/img/navigation/auto-car/car_play_poi.png').default} alt="CP"/></td>
    </tr>
</table>

*POI's (Points of Interest)* zijn een type punten die plaatsen of objecten op de kaart identificeren die belangrijk of interessant zijn voor gebruikers. Ze worden gemarkeerd door speciale pictogrammen die in de [OsmAnd-instellingen](../map/point-layers-on-map.md#poi-types) worden geleverd en in groepen worden gesorteerd.

Volg deze stappen om een route naar een *POI* in *CarPlay* te bouwen:

1. Selecteer de gewenste *POI* uit de lijst met beschikbare categorieën, of voer de naam van de POI in met behulp van [Zoeken](#search).
2. OsmAnd berekent de route en toont deze op het *CarPlay-scherm*. Tik op de knop **Start** om naar die locatie te navigeren.
3. Afhankelijk van uw OsmAnd-app-instellingen en uw voertuig, kunt u [gesproken aanwijzingen](#voice-prompts) ontvangen om u naar uw bestemming te leiden.
4. Wanneer u op de locatie aankomt, meldt de app dat u de *POI* hebt bereikt.

### Favorieten {#favorites}

![CarPlay-scherm](@site/static/img/navigation/auto-car/car-play-favorites(1).png)

**Favorieten** is een van de functies van OsmAnd waarmee u een soort aantekeningen op de kaart kunt maken.

- Tijdens het gebruik van **CarPlay** kunt u geen *Favorieten* toevoegen of wijzigen, alleen bestaande gebruiken.
- De lijst met [Favorieten](../personal/favorites.md#manage-favorites) vindt u in de OsmAnd-app *Menu → Mijn plaatsen → Favorieten*.
- Als u ze wilt gebruiken voor navigatie, configureer dan alles wat u nodig hebt voordat u het apparaat aansluit op het multimediasysteem van uw voertuig.

### Kaartmarkeringen {#map-markers}

![CarPlay-scherm](@site/static/img/navigation/auto-car/car-play-markers(1).png)

- Om uw eindbestemming als een *Kaartmarkering* te definiëren, moet u eerst het vereiste aantal markeringen in de OsmAnd-app op uw apparaat maken voordat u deze aansluit op het multimediasysteem van het voertuig.
- *Markeringen* moeten beschikbaar zijn in de lijst *Menu → Kaartmarkering*.
- Dit wordt uitgebreider beschreven in het artikel [Markeringen](../personal/markers.md).

### Tracks {#tracks}

![CarPlay-scherm](@site/static/img/navigation/auto-car/car-play-tracks(1).png)

Om een route naar een bestemming te bouwen, kunt u een bestaande track selecteren die beschikbaar is in de OsmAnd-app. De track kan vooraf [gedownload](../personal/tracks/manage-tracks.md#import) zijn, gebruikt als [opgenomen](../plugins/trip-recording.md) of gemaakt in [Route plannen](../plan-route/create-route.md).

Selecteer uit de lijst met tracks in het *Menu → Mijn plaatsen → [Tracks](../personal/tracks/manage-tracks.md)* de gewenste voordat u verbinding maakt met het multimediasysteem van het voertuig, en de route zal ofwel tot het begin van de track worden opgebouwd of de huidige richting langs de track weergeven.

Tracks kunnen ook rechtstreeks op het voertuigscherm in *CarPlay* worden geselecteerd. Ze zijn georganiseerd in mappen die u hebt gemaakt, en voor gemakkelijke en snelle toegang tot recent geopende tracks is er een speciale map [Laatst gewijzigd](#folder-last-modified).

### Zoeken {#search}

![CarPlay-scherm](@site/static/img/navigation/auto-car/car-play-search(1).png)

Naar **Zoeken** gaan geeft u snel toegang tot een lijst met recente [bestemmingsgeschiedenis](#history). Vergelijkbaar met het [Navigatiemenu](../navigation/setup/route-navigation.md#navigation-menu), waar alle OsmAnd-bestemmingsmethoden zoals een adres, POI's of coördinaten zijn verzameld.

U kunt de *Zoekfunctie* gebruiken om de gewenste plaats op de kaart te vinden voor routeplanning vanuit elke beschikbare zoekcategorie.

- [Adres](../search/search-address.md). Begin met het typen van het adres in het zoekveld.
- [POI](../search/search-poi.md) en [Aangepaste POI](../search/search-poi.md). De lijst met vergelijkbare namen in de buurt toont ook POI's of hun categorieën.
- [Coördinaten zoeken](../search/search-address#coordinates-search). Voer de coördinaten in om het punt op de kaart te vinden.

#### Prioriteiten voor adres zoeken {#address-search-priorities}

De CarPlay-zoekfunctie geeft prioriteit aan straten en huisnummers bij het **zoeken naar adressen**.

- Straten en huisnummers worden als eerste weergegeven wanneer u naar een adres zoekt. Dit zorgt ervoor dat relevante adresinformatie wordt weergegeven vóór andere locaties zoals wegen of stations.
- Wanneer u naar een stad zoekt, worden de straten binnen de stad als eerste weergegeven, gevolgd door de huisnummers in die straten.

### Map Laatst gewijzigd {#folder-last-modified}

![CarPlay-scherm](@site/static/img/navigation/auto-car/car_play_last_modified.png)

De categorieën *Favorieten* en *Tracks* hebben een speciale map **Laatst gewijzigd**. Aangezien de lijst in deze categorieën erg groot kan zijn, omdat deze al uw bestaande favorieten of tracks bevat, is deze map noodzakelijk voor gemakkelijke en snelle toegang tot uw meest recente bestemmingen.

## Aanvullende functies {#additional-features}

Naast de basisfuncties van de OsmAnd-app in *CarPlay* die handige navigatie in uw voertuig bieden, zijn er een aantal aanvullende functies die uw ervaring verbeteren en navigatie persoonlijker, comfortabeler en efficiënter maken.

### Gesproken aanwijzingen {#voice-prompts}

Gesproken begeleiding voor *CarPlay* is een van de meest nuttige navigatiefuncties van OsmAnd, die real-time begeleiding biedt en de bestuurder in staat stelt zich op de weg te concentreren. Gesproken aanwijzingen geven duidelijk bochten, richtingen en andere navigatie-instructies aan, wat zorgt voor een veiliger en comfortabeler gebruik van het navigatiesysteem.

Om gesproken aanwijzingen te configureren volgens het geselecteerde profiel, moet u dit doen voordat u een route start in de OsmAnd-app op uw apparaat. Voor aanbevolen instellingen voor *CarPlay*, gaat u naar het artikel [Gesproken aanwijzingen / Meldingen](../navigation/guidance/voice-navigation.md).

### Inkomende tekstberichten aankondigen {#announce-incoming-text-messages}

U kunt de meldingsinstellingen voor de OsmAnd-app wijzigen in de systeeminstellingen van uw apparaat. Tik op *CarPlay* en selecteer vervolgens een van de volgende items:

- *Nieuwe berichten aankondigen*
- *Nieuwe berichten stilhouden*
- *Vorige instelling onthouden*

U kunt ook berichten aankondigen rechtstreeks in *CarPlay* in- of uitschakelen. Lees hoe meldingen worden beheerd op [iOS](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.) en [CarPlay](https://support.apple.com/en-gb/guide/iphone/iph9c8438165/ios).

### Schermwaarschuwingswidget {#screen-alert-widget}

![CarPlay-scherm](@site/static/img/navigation/auto-car/car-play-screen-alert(1).png)

Deze informatiewidget combineert waarschuwingstypen zoals **Voetgangersoversteekplaatsen** en **Snelheidslimiet**.

- De typen waarschuwingen hebben een verschillend uiterlijk, afhankelijk van de **<Translate android="true" ids="driving_region"/>** en kunnen worden geconfigureerd in *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>*.
- In *CarPlay* is het niet mogelijk om de weergave van waarschuwingen in te stellen, u moet de widget in de applicatie configureren voordat u de navigatie start en uw apparaat met het voertuig verbindt.
- Voor een gedetailleerde beschrijving van de waarschuwingstypen, zie [dit artikel](../widgets/nav-widgets.md#alert-types).
- Om schermwaarschuwingen voor beschikbare profielen in te stellen, zie het artikel [Navigatie-instellingen](../navigation/guidance/navigation-settings.md#screen-alerts).

### Snelheidsmeter {#speedometer}

![CarPlay-scherm](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png)

De **Snelheidsmeter**-widget is een geïntegreerd interface-element dat de *huidige snelheid* weergeeft met behulp van GPS-gegevens en de *snelheidslimiet* uit de [OSM-database](https://wiki.openstreetmap.org/wiki/Key:maxspeed) en [OsmAnd-instellingen](../navigation/guidance/voice-navigation.md#speed-limit) op het scherm van het multimediasysteem van het voertuig.

- De **Snelheidsmeter-widget** is [*profielafhankelijk*](../personal/profiles.md), dus als u de instellingen voor één profiel wijzigt, worden deze niet toegepast op een ander profiel.
- Er is geen optie om de weergave van de *Snelheidsmeter* rechtstreeks in *CarPlay* in te stellen. U moet deze configureren voor het geselecteerde [navigatieprofiel](#carplay-profile) in de OsmAnd-applicatie voordat u de navigatie start en uw apparaat met het voertuig verbindt.
- Voor meer informatie over het toevoegen en configureren van de *Snelheidsmeter*-widget aan het display, leest u het artikel [Informatiewidgets](../widgets/info-widgets.md#speedometer).

### Kaartweergave (3D) {#map-appearance-3d}

![CarPlay](@site/static/img/navigation/auto-car/car_play_3.png)

De OsmAnd-app stelt u in staat om de 3D-kaartweergave op het *CarPlay-scherm* te gebruiken om uw route en navigatie weer te geven.

- De **3D / 2D-knop** wordt weergegeven op het *CarPlay-scherm*.
- U kunt schakelen tussen 3D / 2D-kaartmodi door op deze knop te tikken.

### Multifunctioneel dashboard {#multifunction-dashboard}

![CarPlay](@site/static/img/navigation/auto-car/car_play_4.png)

De OsmAnd-app kan worden geopend en gebruikt om te navigeren in *CarPlay* op het scherm van het multimediasysteem van het voertuig, tegelijkertijd met muziek-, berichten- of andere meldingsapps.

- Het multifunctionele dashboard instellen op een telefoon die is verbonden met *CarPlay* of op het scherm in uw voertuigsysteem.
- Zoek de knop Multi-venster en schakel deze in.

## Probleem met volumeregeling {#volume-control-issue}

Soms maakt *CarPlay* geen verbinding, of hoort u gewoon niets, hoewel het wel verbonden is. Andere keren opent de OsmAnd-app niet correct in *CarPlay*. Mogelijke oplossingen:

1. In de meeste gevallen blijven alle **signalen** op constant vol volume, los van de audio-afspeelinstellingen op hetzelfde moment. Om het volume van de OsmAnd-navigatieaanwijzingen te wijzigen bij gebruik van *CarPlay*, gaat u naar *Instellingen → Stem → Stemvolume* op het scherm van het multimediasysteem van het voertuig.
2. Start het apparaat opnieuw op.
3. Zorg ervoor dat *CarPlay* is ingeschakeld op uw iPhone. Om dit te doen:
   - Ga naar de instellingen van uw telefoon en vervolgens naar *Algemeen*.
   - Ga naar *CarPlay* in Algemene instellingen en selecteer *Mijn auto's*. Hier kunt u uw auto aanpassen door deze te vergeten of opnieuw te verbinden.
4. Zorg ervoor dat uw Bluetooth is verbonden.
5. Controleer de USB-kabel.
6. Werk uw besturingssysteem regelmatig bij.
7. Controleer of *CarPlay* wordt ondersteund in uw [regio](https://www.apple.com/uk/ios/feature-availability/#applecarplay-applecarplay).
8. Als u een VPN op uw iPhone gebruikt, kan dit voorkomen dat *CarPlay* werkt. Probeer de VPN uit te schakelen en kijk of dit *CarPlay* helpt te werken.

## Gerelateerde artikelen {#related-articles}

- [Profielen (Instellingen)](../personal/profiles.md)
- [Importeren / Exporteren](../personal/import-export.md)

### Veelvoorkomende problemen en oplossingen {#common-issues-and-solutions}

1. Veelgestelde vragen over het verbindingsscherm:
    - *Waarom kan ik de app niet bedienen vanaf mijn telefoon wanneer deze is verbonden met CarPlay?*
        Om veiligheidsredenen is het OsmAnd-app-scherm op uw telefoon vergrendeld wanneer deze is verbonden met CarPlay. U kunt alleen met de app communiceren via het autodisplay.
    - *Kan ik het vergrendelde scherm uitschakelen en de app op mijn telefoon gebruiken?*
        Nee, CarPlay dwingt deze beperking af om afleiding tijdens het rijden te voorkomen.
    - *Wat moet ik doen als mijn telefoon en autodisplay losgekoppeld lijken te zijn?*
        Zorg ervoor dat uw apparaat correct is verbonden via USB of Bluetooth.
        Start het infotainmentsysteem van uw auto en de OsmAnd-app opnieuw op als de verbinding instabiel is.

> *Laatst bijgewerkt: januari 2025*