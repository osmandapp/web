---
source-hash: f70d6c0f6fdfe641f005afd95ec912d5aa5a23f369e009635f62de9e506c5529
sidebar_position: 6
title:  Steminstructies / Meldingen
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

De stemnavigatiefunctie van OsmAnd biedt real-time gesproken instructies en waarschuwingen die u helpen geïnformeerd en veilig te blijven terwijl u onderweg bent. U kunt de begeleiding aanpassen aan uw voorkeuren en behoeften. Selecteer hiervoor een geschikt stemprofiel, ofwel een [Tekst-naar-spraak (TTS) engine](#tts-text-to-speech) die dynamisch straatnamen, afstanden en snelheidslimieten kan aankondigen, of een [vooraf opgenomen stem](#recorded-voice-prompts) die beknopte instructies biedt.

Naast afslag-voor-afslag aanwijzingen kan de stemnavigatie van OsmAnd u op de hoogte stellen van naderende nuttige plaatsen, veranderingen in verkeersomstandigheden en wanneer u een vooraf ingestelde snelheidslimiet overschrijdt. Voor meer informatie over het aanpassen van deze waarschuwingen, zie [Instellingen voor aankondigingstijd](#announcement-time) en [Waarschuwingen voor snelheidslimiet](#speed-limit).

Met de juiste combinatie van stemopties, waarschuwingsinstellingen en geluidsaanpassingen van het apparaat, ontvangt u tijdige en duidelijke navigatie-informatie gedurende uw hele route.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Tekstmeldingen weerspiegelen volledig de triggertijd en berichten van de steminstructies.

:::

## Steminstructies instellen {#setting-up-voice-prompts}

OsmAnd biedt verschillende opties voor het regelen van steminstructies, zodat u uw route gemakkelijk kunt volgen. Om deze instellingen te configureren, begint u in de juiste toepassingssecties.

- Activeer steminstructies vanuit de sectie [Navigatie](../guidance/navigation-settings.md) door op **Instellingen** te tikken. U kunt steminstructies ook inschakelen en configureren via *Profiel configureren* en *Navigatie-instellingen*.
- Schakel steminstructies in of uit via *Menu → Navigatie →* tik op *Geluidsicoon*,
    of *Menu → Navigatie →* Instellingenicoon *→ Geluid →* schakel aan/uit.

Voor meer informatie over hoe en wanneer steminstructies worden geactiveerd, raadpleeg de documentatie [Activering van navigatiesteminstructies](../../../technical/algorithms/voice-prompt-triggering.md).

### Steminstellingen {#voice-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Stemnavigatie-instellingen Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> knop* *(of <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Kies profiel → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Stemnavigatie-instellingen iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

**[Taal](#voice-prompt-language)**. Selecteer uw voorkeurstaal en -type.

**Aankondiging**. Hiermee kunt u de volgende typen prompts configureren:

- *Straatnamen (TTS), Afritnummers, Verkeerswaarschuwingen, Voetgangersoversteekplaatsen* en *Tunnels.*
- *[Snelheidscamera's](#speed-cameras)*.
- Configureer ook de **[Waarschuwingswidget](../../widgets/nav-widgets.md#alert-widget)** voor gebruik met aankondigingen.

**Gebruikerspunten**:

- Schakel steminstructies in voor de vooraf ingestelde en toegevoegde [Waypoints](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track), [Favorieten](../../personal/favorites.md) of [POI's](../../map/point-layers-on-map.md#points-of-interest-pois). Tijdens het rijden worden de geselecteerde punten aangekondigd wanneer u ze nadert of passeert.

| Type prompt | Aanlooptijd [s]:<br/>Corresponderende<br/>Aanloopafstand @ Standaardsnelheid [m] | Limiet |
| :- | :- | :- |
| Naderen | **60 s:**<br/>Rijden: 750 m<br/>Fietsen: 167 m<br/>Lopen: 67 m | Niet meer dan 1 punt tegelijk |
| Passeren | **15 s:**<br/>Rijden: 188 m<br/>Fietsen: 42 m<br/>Lopen: 17 m | Niet meer dan 3 punten tegelijk |

[**Snelheidslimiet**](#speed-limit):

- *Aankondigen wanneer overschreden*.
- *Tolerantie snelheidslimiet*.

**Overig**:

- *GPS-signaalverlies en -herstel aankondigen*. OsmAnd kondigt aan of het GPS-signaal op het apparaat verloren is gegaan.
- *Routeherberekening aankondigen*. OsmAnd meldt routeherberekening in geval van een [afwijking of beweging in de omgekeerde richting](./navigation-settings.md#recalculate-route).
- *Afwijking van de route aankondigen*. U ontvangt informatie over afwijkingen van de route volgens de [ingestelde parameters](./navigation-settings.md#recalculate-route).

**Opties**:

- *Navigatie-instructies herhalen*. Hiermee kunt u de navigatie-instructies met regelmatige tussenpozen van 1 minuut tot 30 minuten herhalen. Of handmatig - als u een steminstructie mist, kunt u deze opnieuw beluisteren door simpelweg op [de huidige afslagpijl](../../widgets/nav-widgets.md#next-turn) op het toepassingsscherm te tikken.
- *[Aankondigingstijd](#announcement-time)*.

**Uitvoer** (*alleen Android*):

- *[Stembegeleidingsuitvoer](#voice-guidance-output)*.
- *Muziek pauzeren*. Steminstructies stoppen de muziekweergave even.

### Snelheidscamera's {#speed-cameras}

![Tijdstip aankondiging stemnavigatie Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

[Waarschuwingen voor snelheidscamera's](../../personal/global-settings.md#uninstall-speed-cameras) stellen u in staat om POI's met snelheidscamera's te activeren of deactiveren. U moet de OsmAnd-applicatie opnieuw starten om de wijzigingen toe te passen.

In sommige landen of regio's is het gebruik van waarschuwingsapplicaties voor snelheidscamera's illegaal. U moet een keuze maken afhankelijk van de wetten in uw land. Selecteer **Actief houden**, en u ontvangt waarschuwingen en meldingen voor snelheidscamera's. Selecteer **Verwijderen** en alle gegevens met betrekking tot snelheidscamera's, zoals waarschuwingen, meldingen en POI's, worden verwijderd totdat u OsmAnd volledig opnieuw installeert.

### Snelheidslimiet {#speed-limit}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Stemnavigatie](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Stemnavigatie](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>

De optie **Snelheidslimiet** stelt OsmAnd in staat u te informeren wanneer uw huidige snelheid een gespecificeerde drempel overschrijdt. Gegevens over maximale wettelijke snelheidslimieten zijn afkomstig van OpenStreetMap.

**Aankondigen wanneer overschreden**
*Tolerantie snelheidslimiet* laat u een toelaatbare afwijking selecteren (bijv. -10 km/u tot +20 km/u) van de [wettelijke maximale snelheidslimiet](https://wiki.openstreetmap.org/wiki/Key:maxspeed) op de huidige weg. Wanneer uw snelheid deze tolerantie overschrijdt, geeft OsmAnd een steminstructie.

*Regels voor het activeren van steminstructies* wanneer de snelheidslimiet wordt overschreden:

- *Initiële waarschuwing*. Bij het detecteren dat u de snelheidslimiet overschrijdt, wacht OsmAnd 5 seconden voordat de eerste stemwaarschuwing wordt gegeven.
- *Herhaal aankondigingsvertraging*. Als u blijft te hard rijden, wordt de volgende waarschuwing 120 seconden vertraagd om overmatig frequente meldingen te voorkomen.
- *Timer reset*. De timer wordt gereset als u 30 seconden binnen de wettelijke limiet blijft. Elk verder te hard rijden zal opnieuw 5 seconden wachten voordat de volgende waarschuwing klinkt.

Deze instelling voor **Snelheidslimiet tolerantie** beïnvloedt de snelheid die wordt weergegeven in het *waarschuwingsgedeelte* van de [Snelheidsmeterwidget](../../widgets/info-widgets.md#speedometer) in de OsmAnd-app, [Android Auto](../../navigation/auto-car.md#speedometer) en [CarPlay](../../navigation/car-play.md#speedometer).

### Aankondigingstijd {#announcement-time}

![Tijdstip aankondiging stemnavigatie Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)

De aankondigingstijd van de verschillende steminstructies hangt af van het geselecteerde profiel, het type instructie, de huidige navigatiesnelheid en de standaard navigatiesnelheid. Met deze instelling kunt u de afstand wijzigen voordat de steminstructies worden geactiveerd door een afstandsvermenigvuldiger toe te passen: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

In de vervolgkeuzelijst *Tijd- en Afstandsintervallen* kunt u gedetailleerde informatie bekijken over de activering van instructies voor de verschillende afstandsvermenigvuldigers. Voor meer informatie, zie de [Activering van navigatiesteminstructies](../../../technical/algorithms/voice-prompt-triggering.md).

### Stembegeleidingsuitvoer {#voice-guidance-output}

<InfoAndroidOnly/>

![Stemnavigatie Android](@site/static/img/navigation/voice/voice_promt-1.png)

Om te voorkomen dat audio tegelijkertijd in dezelfde uitvoerstroom wordt afgespeeld, is de audiofocus in Android geïmplementeerd. OsmAnd gebruikt de luidspreker die in deze instelling uit de lijst is geselecteerd voor audio-uitvoer. Andere applicaties pauzeren de weergave of verlagen het volume om het u gemakkelijker te maken de steminstructies van OsmAnd te horen.

- Media/navigatie audio.
- Melding audio.
- Telefoongesprek audio (om Bluetooth [autoradio's](../auto-car.md) te onderbreken).

### Testen van steminstructies {#testing-of-voice-prompts}

U kunt de steminstructies testen met:

- [Navigatie simuleren](../../navigation//setup/route-navigation.md#simulated-navigation). Stel een route in en start de simulatie: *Navigatiemenu → Instellingen → Navigatie simuleren*.

- [Test steminstructies](../../plugins/development.md#application-testing) (*alleen Android*). Gebruik de *Ontwikkelingsplugin* om steminstructies te testen:
    - Ga naar *Menu → Plugins → OsmAnd Ontwikkeling inschakelen*.
    - Ga naar *Instellingen → Test steminstructies*.
    - Selecteer een taal en controleer of het systeem de instructies correct afspeelt.

### Problemen met audio oplossen {#solving-audio-issues}

Als u geen **steminstructies** of [snelheidslimietwaarschuwingen](#speed-limit) hoort:

- Zorg ervoor dat het volume van uw apparaat aanstaat en omhoog is gezet.
- Controleer of geluid is ingeschakeld tijdens navigatie: *Menu → Navigatie → Aan/uit geluidsknop* of *Menu → Navigatie → Instellingenknop → Geluid* voor gedetailleerde audioconfiguratie.
- Selecteer welke [luidsprekers](#voice-guidance-output) u wilt gebruiken.
- Controleer welke [stembegeleiding](#voice-prompt-language) is geselecteerd en zorg ervoor dat u een TTS- of opgenomen stem hebt die snelheidslimietwaarschuwingen kan aankondigen.
- Controleer of audio niet wordt doorgestuurd naar een onbedoeld uitvoerapparaat (bijv. een losgekoppelde Bluetooth-headset).

Voor aanvullende probleemoplossingsstappen, raadpleeg de [gids voor probleemoplossing bij navigatie](../../troubleshooting/navigation.md#voice-navigation).

## TTS (Tekst-naar-spraak) {#tts-text-to-speech}

OsmAnd ondersteunt **Tekst-naar-spraak (TTS)** stemmen, die dynamische en gedetailleerde stembegeleiding bieden, inclusief afslaginstructies, straatnamen en POI-aankondigingen. TTS-stemmen zijn inbegrepen in de applicatie, maar vereisen een [Tekst-naar-spraak-engine](https://nl.wikipedia.org/wiki/Spraaksynthese) die op het apparaat is geïnstalleerd.

De meeste moderne Android- en iOS-apparaten bevatten een standaard TTS-engine, maar aanvullende engines en talen kunnen afzonderlijk worden geïnstalleerd.

Voor een lijst met **beschikbare TTS-engines en ondersteunde talen** op Android, raadpleeg:
[Lijst met talen met beschikbare TTS-engines op Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***TTS configureren op uw apparaat:***

**Android:**

1. Open Instellingen.
2. Navigeer naar *Toegankelijkheid → Tekst-naar-spraak-uitvoer*.
3. Selecteer een **TTS-engine** (Google TTS of een andere geïnstalleerde engine).
4. Kies een **voorkeurstaal** (sommige vereisen mogelijk aanvullende downloads).
5. Pas de spreeksnelheid, toonhoogte en afspeelsnelheid naar behoefte aan.
6. Tik op **Luister naar voorbeeld** om de stemuitvoer te testen.

Voor meer details, raadpleeg:
[Google Support – Android Tekst-naar-spraak-instellingen](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Open Instellingen.
2. Ga naar *Toegankelijkheid → Gesproken inhoud*.
3. Tik op **Stemmen** om een voorkeursstem te selecteren.
4. Pas de **Spreeksnelheid**, **Uitspraken** en andere instellingen aan.
5. Test de stem met **Spreek selectie** of **Spreek scherm**.

Voor meer details, raadpleeg:
[Apple Support – iPhone Spraakinstellingen](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Steminstructies testen:***

Om te controleren of TTS correct functioneert binnen OsmAnd:

- Schakel de **Ontwikkelingsplugin** in: *Menu → Instellingen → Plugins → OsmAnd Ontwikkeling*.
- Open [Test steminstructies](../../plugins/development.md#application-testing): *Menu → Instellingen → Plugins → OsmAnd Ontwikkeling → Test steminstructies*.

Voor probleemoplossing, raadpleeg:
[Probleemoplossing stemnavigatie](../../troubleshooting/navigation.md#voice-navigation).

### Taal van steminstructies {#voice-prompt-language}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ga naar: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Stemnavigatie Android](@site/static/img/navigation/voice/voice_promt-tts.png) ![Stemnavigatie Android](@site/static/img/navigation/voice/voice_promt-recorded.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ga naar: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Stemnavigatie-instellingen iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd biedt twee soorten steminstructies:

- **<Translate android="true" ids="tts_title"/>**
    - Gebruikt de TTS-engine van het apparaat om dynamisch steminstructies te genereren.
    - Leest straatnamen, afslaginstructies, POI-namen en andere details voor.
    - Ondersteunt meerdere talen en uitspraakinstellingen.
    - Kan worden aangepast met spreeksnelheid, toonhoogte en uitspraakinstellingen.

- **<Translate android="true" ids="shared_string_recorded"/>** (*alleen Android*)
    - Gebruikt vooraf opgenomen steminstructies voor navigatie.
    - Klinkt natuurlijker dan TTS, maar heeft beperkingen.
    - Leest geen straatnamen of POI-namen voor.
    - Biedt alleen basisafslaginstructies.

> *TTS wordt aanbevolen voor gedetailleerde navigatiebegeleiding.*

#### Systeemniveau-instellingen voor steminstructies {#system-level-voice-prompt-settings}

Het gedrag van steminstructies, inclusief *afspeelsnelheid, toonhoogte en pauzes*, kan alleen worden aangepast in de systeeminstellingen van het apparaat.

**Android:**

1. Open apparaat *Instellingen → Toegankelijkheid → Tekst-naar-spraak-uitvoer*.
2. Kies uw voorkeurs-TTS-engine en -taal.
3. Pas de spreeksnelheid, toonhoogte en afspeelsnelheid aan.

**iOS:**

1. Open apparaat *Instellingen → Toegankelijkheid → Gesproken inhoud*.
2. Pas aan: taal, stemmen, spreeksnelheid, uitspraken.

> *Voor extra stemmen, download taalpakketten via de systeeminstellingen.*

#### Beschikbare TTS-talen {#available-tts-languages}

Er zijn momenteel in totaal 45 talen. Niet alle hieronder vermelde talen worden mogelijk door elke TTS-engine ondersteund. Zie [hier](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **A** | Arabisch |
| **B** | Wit-Russisch, Bulgaars |
| **C** | Catalaans, Chinees, Chinees (Hongkong), Chinees (Traditioneel), Kroatisch, Tsjechisch |
| **D** | Deens, Nederlands |
| **E** | Engels, Engels (Verenigd Koninkrijk), Ests |
| **F** | Fins, Frans |
| **G** | Duits, Duits (informeel), Grieks, Guarani |
| **H** | Hindi, Hongaars, Hongaars (formeel), Hebreeuws |
| **I** | Indonesisch, Italiaans |
| **J** | Japans |
| **K** | Koreaans |
| **L** | Lets |
| **N** | Noors Bokmål |
| **P** | Perzisch, Pools, Portugees, Portugees (Brazilië) |
| **R** | Roemeens, Russisch |
| **S** | Sardijns, Servisch (Cyrillisch), Slowaaks, Sloveens, Spaans, Spaans (Argentinië), Swahili, Zweeds |
| **T** | Turks |
| **U** | Oekraïens |
| **V** | Vietnamees |

## Opgenomen steminstructies {#recorded-voice-prompts}

### Spraakpakketten downloaden {#download-voice-packages}

<InfoAndroidOnly />

Het gebruik van opgenomen stemmen in OsmAnd zou alleen een terugval moeten zijn. Ze zijn vrij beperkt en kunnen geen straatnamen, plaatsnamen, enz. uitspreken. U kunt steminstructies downloaden uit twee verschillende sets uit de lijst.

- Het eerste type, dit zijn de aanbevolen:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Stemnavigatie-instellingen Android](@site/static/img/navigation/voice/TTS-preferred-1.png) ![Stemnavigatie-instellingen Android](@site/static/img/navigation/voice/TTS-preferred-2.png)

- Het tweede type zijn opgenomen steminstructies, met een onvolledige set functies:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

    ![Stemnavigatie-instellingen Android](@site/static/img/navigation/voice/TTS-recorded.png)

### Pieptonen {#beep-modes}

<InfoAndroidOnly />

U kunt een OsmAnd-profiel configureren om te piepen in plaats van te spreken, op een vergelijkbare manier als een fietscomputer. Er zijn drie basispatronen: *minimaal*, *eenvoudig* en *complex*. De eenvoudige en complexe patronen hebben *luide* varianten, die aanzienlijk gemakkelijker te horen zijn in een luide omgeving, maar onaangenaam hard kunnen klinken.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

- **Minimaal**. Geschikt voor het volgen van een bekende route te voet met minimale afleidingen, dit patroon waarschuwt u bij het passeren van tussenliggende bestemmingen, favorieten en POI's, en wanneer u van de route bent afgeweken of bent teruggekeerd naar de route. Het geeft geen audiowaarschuwingen voor afslagen.
- **Eenvoudig**. Naast waarschuwingen voor bestemmingen, favorieten, POI's en andere, waarschuwt het eenvoudige patroon u met een langere pieptoon wanneer u moet afslaan.
- **Complex**. Geschikt voor wielrennen, het complexe patroon gebruikt pieptonen van verschillende lengtes en toonhoogtes om u te informeren over naderende afslagen.
    - Een lage pieptoon betekent een linker afslag, terwijl een hoge pieptoon een rechter afslag betekent. Een reeks pieptonen met gemiddelde toonhoogte geeft de afslag aan die u moet nemen op een rotonde (verkeersplein). Alle drie de toonhoogtes achter elkaar staan voor een U-bocht. In al deze gevallen betekenen korte pieptonen dat u zich moet voorbereiden om iets te doen, terwijl lange pieptonen betekenen dat u nu iets moet doen.

## Tekstmeldingen {#text-notifications}

Zodra u een route start, kunt u de informatie in het vervolgkeuzemenu van het systeem in de lijst met meldingen bekijken. De stille meldingen van OsmAnd bevatten informatie zoals afslag-voor-afslag instructies, afslagpijlen, aankomsttijd en resterende tijd, huidige snelheid en afstand tot de bestemming.

![Navigatieroute Melding Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Actieve knoppen in het vervolgkeuzemenu van het systeem voor uw navigatie:

- *<Translate android="true" ids="stop_navigation_service"/>*. Hiermee kunt u uw navigatie stoppen.
- *<Translate android="true" ids="shared_string_pause"/>*. Hiermee kunt u uw navigatie pauzeren.
- *<Translate android="true" ids="shared_string_resume"/>*. Hiermee kunt u uw navigatie hervatten.

### Meldingen configureren {#configure-notifications}

U kunt de meldingsinstellingen voor de OsmAnd-app wijzigen in de systeeminstellingen van uw apparaat. Meldingen kunnen worden weergegeven op het vergrendelscherm, het startscherm, in het vervolgkeuzemenu of bovenaan de app.

Lees hoe meldingsbeheer is geïmplementeerd op Android in dit [artikel](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). Voor iOS - [hier](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).

## Schermbediening {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Schermbedieningsmenu Android](@site/static/img/navigation/route/screen_control_android.png)

U kunt het scherm van uw apparaat bedienen om energie te besparen. Deze modus heeft twee algemene instellingen: *<Translate android="true" ids="screen_timeout"/>* en *<Translate android="true" ids="turn_screen_on"/>*.

### Schermtime-out {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. Het scherm schakelt uit afhankelijk van de systeeminstellingen van uw apparaat. De knop *Instellingen wijzigen* biedt snelle toegang tot het systeemmenu, zoals *Scherm en helderheid*, waar u de schermtime-out kunt aanpassen.

    ![Systeemtime-out schermbediening Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. Als *Scherm aanhouden* is ingeschakeld, past het scherm van het apparaat geen time-out toe na het ontwaken. Als het is uitgeschakeld, kunt u de tijd instellen waarna het scherm van het apparaat wordt uitgeschakeld als u er niet mee interageert, van 5 tot 60 seconden.

    ![Time-out na ontwaken Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Time-out na ontwaken Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Scherm inschakelen {#turn-screen-on}

![scherm inschakelen Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Selecteer opties voor het inschakelen van het scherm en zorg ervoor dat OsmAnd op de voorgrond blijft wanneer het apparaat is vergrendeld.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>

## Gerelateerde artikelen {#related-articles}

- [Routeparameters](../routing/osmand-routing.md#routing-types)
- [Routevoorbereiding](../setup/route-navigation.md)
- [Navigatie via spoor](../setup/gpx-navigation.md)
- [Navigatie via markeringen](../setup/markers-navigation.md)
- [Routedetails](../setup/route-details.md)
- [Navigatie-instellingen](./navigation-settings.md)
- [Kaartscherm tijdens navigatie](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Veelvoorkomende problemen en oplossingen {#common-issues-and-solutions}

1. [Audioproblemen.](#solving-audio-issues)
2. [Testen van steminstructies.](#testing-of-voice-prompts)
3. [Waarom zou ik een TTS-stem gebruiken in plaats van een opgenomen stem?](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. [TTS werkt niet goed? Volg deze stappen om het te repareren.](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)

> *Laatst bijgewerkt: maart 2025*