---
source-hash: 1bd20746ffeab531cb3d1ba5be872da020fbb3e3e511c4199d1144aff385a1dc
sidebar_position: 11
title:  OsmAnd Tracker
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


<InfoAndroidOnly />

## Overzicht {#overview}

OsmAnd Tracker is een aangepaste Telegram-client gemaakt voor flexibele monitoring en het verzenden van berichten met GPS-locaties in realtime.  

[OsmAnd tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) helpt u uw contacten op een kaart in OsmAnd te zien. Het heeft een sociaal aspect, wat betekent dat u om het te gebruiken toegang moet verlenen tot uw contacten voor het platform dat OsmAnd kiest.  

We hebben [Telegram](https://telegram.org/) gekozen als het meest open sociale platform omdat het een [Open API](https://core.telegram.org/api), Open SDK heeft en bovendien uiteindelijk een Open Server-implementatie (Blockchain) zal hebben.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Hoe het werkt {#how-it-works}

Belangrijk is dat er een hoge mate van compatibiliteit is tussen de apps. U kunt eenvoudig uw locatie delen met uw contacten zonder de mobiele Telegram-app te hebben (OsmAnd Online GPS Tracker is een onafhankelijke Telegram-client), en omgekeerd hoeven uw contacten [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) niet te hebben om uw locatie te zien.  

We hebben [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) zo ontworpen dat u de Telegram-app en de OsmAnd-app kunt blijven gebruiken zoals u gewend bent, zonder extra beperkingen.  

De applicatie verstuurt Live Locatie-berichten naar geselecteerde chats voor de door u ingestelde tijd, toont een lijst van uw contacten en groepen, en controleert chats op berichten met uw locatie, die vervolgens op de kaart in OsmAnd worden weergegeven.
De applicatie verstuurt of bekijkt uw tekstberichten niet.  

Log in met uw bij Telegram geregistreerde telefoonnummer om het volgende mogelijk te maken:

- Beheer de lijst van contacten en groepen die u hun locatie sturen.
- Bekijk de locatie van contacten en groepen in realtime op een kaart in OsmAnd.
- Stel de tijd voor het delen van de locatie afzonderlijk in voor elke chat.
- Stel in hoe vaak uw locatie wordt bijgewerkt.
- Monitor de chronologie van uw bewegingen en die van uw contacten.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Vereiste installatieparameters {#required-setup-parameters}

Installeer OsmAnd Online GPS Tracker APK:

- [Google Play store](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [OsmAnd server](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## Plugin-instellingen {#plugin-settings}

Er zijn verschillende instellingen voor het beheren van de frequentie van het delen van locaties en het regelen van de weergave van de naar u verzonden locaties.

Om het *Instellingen*-menu te openen:  

*[Mijn locatie](#my-location-screen) scherm → scherm naar beneden scrollen (contactenlijst) → ⋮ → Instellingen*  
of  
*[Nu live](#live-now-screen) scherm → ⋮ → Instellingen*  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Positie {#position}

**Verstuur mijn locatie** — hiermee kunt u het interval voor het verzenden van uw positie instellen van eens per seconde (voor het verhogen van de nauwkeurigheid) tot eens in de 5 minuten (voor het verminderen van het stroomverbruik).

**Niet in beweging** — hiermee kunt u de tijd instellen (van 1 minuut tot 1 uur) waarna de locatie van een contact als verouderd wordt beschouwd. Als een locatie verouderd raakt, wordt deze grijs.

**Locatiegeschiedenis** — hiermee kunt u de tijd instellen (van 5 minuten tot 24 uur) waarna het contact met de verwijderde locatie wordt verborgen in de lijst en op de OsmAnd-kaart.

**Verstuur locatie als** - hiermee kunt u een categorie kiezen voor het verzenden van berichten over uw locatie in Telegram (3 soorten verzending): tekst, kaart, tekst en kaart.

**Vervaltijd buffer** - hiermee kunt u de tijd kiezen voor het opslaan van punten in de buffer.

**Achtergrondwerk** - hiermee kunt u de instellingen voor batterijoptimalisatie wijzigen om het delen van locaties te stabiliseren.

**Locatiebron** - hiermee kunt u *Google Play Services* (standaard) of *Android API* kiezen voor het bepalen van de locatie.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Eenheden & Formaten {#units--formats}

Hiermee kunt u instellingen voor eenheden en formaten toevoegen. U kunt nu uw gewenste waarden kiezen voor Telegram-berichten bij het delen van locatiegegevens.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Uiterlijk {#appearance}

Hiermee kunt u het aantal GPS-punten weergeven dat u van andere contacten hebt ontvangen, evenals de punten die u zelf hebt verzonden.


### Privacy {#privacy}

Proxy gebruiken binnen OsmAnd Tracker. Ga naar Instellingen en voer uw proxygegevens in: *Instellingen → Privacy → Proxy-instellingen*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### GPS-instellingen {#gps-settings}

Instellingen voor locatiepunten. Als u bijvoorbeeld enige tijd op één locatie blijft zonder te bewegen, worden uw locatiepuntgegevens niet verzonden en zal uw GPX-track nauwkeurigere gegevens weergeven.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Locatie delen als {#share-location-as}

Als u meerdere apparaten aan één Telegram-account wilt koppelen, moet u op "Apparaat toevoegen" klikken en het apparaat een naam geven.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### OsmAnd Connect {#osmand-connect}

Met deze instelling kunt u de versie van OsmAnd selecteren waarin uw contacten met hun locatie op de kaart verschijnen.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Account {#account}

Gebruik deze instelling om te controleren welk Telegram-account u momenteel gebruikt. In dit menu kunt u ook de OsmAnd Telegram-applicatie verlaten door simpelweg op de *Uitloggen*-knop te tikken.  


### Logcat Buffer {#logcat-buffer}

Hier kunt u gedetailleerde logboeken van de app controleren en delen.


## Scherm Mijn Locatie {#my-location-screen}

Op dit scherm ziet u uw Telegram-contacten. U kunt er een of meer kiezen, de deelopties instellen en beginnen met het delen van uw locatie.  

Na de eerste keer opstarten ziet u een lijst met Voorgestelde contacten. Dit zijn de vijf meest recente contacten waarmee u uw locatie hebt gedeeld. U hoeft maar één keer te klikken om door te gaan met het delen van uw locatie met deze contacten.  

Deeltijd is de laatste deeltijd die u voor het contact hebt geselecteerd.  

Wanneer u begint met delen, ziet u een lijst met Voorgestelde contacten en een *Terug naar OsmAnd*-knop op het *Mijn locatie*-scherm.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Scherm Nu Live {#live-now-screen}

In dit menu ziet u alle contacten die een locatie met u delen. Tik op het contact en bekijk het op de **OsmAnd-kaart**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Actieve markering op de OsmAnd-kaart {#active-marker-on-the-osmand-map}

Hiermee kunt u de afstand, snelheid en bewegingshoek van uw contacten volgen op de OsmAnd-kaart en in Telegram-tekst. U kunt zien waar en hoe uw contact beweegt.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Scherm Tijdlijn {#timeline-screen}

Dit is het derde tabblad in de applicatie. Hier kunt u een dag selecteren om de geschiedenis van met u gedeelde locaties te bekijken. Als u een dag selecteert, worden de contacten weergegeven die die dag hun locatie hebben getoond.  

Monitoring stelt u in staat om op de achtergrond informatie te verzamelen wanneer uw contacten deze delen. Hiervoor moet u het inschakelen.

Om alle informatie over de locatie van een contact te bekijken, tikt u op het pictogram of opent u een GPX-track in OsmAnd en verkent u de track in meer detail ([lees hier meer](./trip-recording.md)). U kunt de GPX-track ook voor een geselecteerde periode delen: door deze naar een e-mail of een willekeurige instant messenger te sturen.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

U kunt de online beweging van uw contacten op de OsmAnd-kaart zien met behulp van de online GPS-track. Hiervoor moet u *Live* inschakelen bij het contact in de *Tijdlijn*. Als er op dat moment veel gemeenschappelijke contacten zijn, selecteert de OsmAnd-app de kleur van de tracks willekeurig.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Wanneer u op "Toon in OsmAnd" of op de minikaart tikt, kunt u speciale instellingen selecteren voor het GPX-volgen van uw contact in de OsmAnd-app en hun beweging in realtime op de OsmAnd-kaart zien.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Als er geen gegevens zijn verzameld op de geselecteerde datum, verschijnt er een speciale melding op het scherm. U kunt naar de dichtstbijzijnde datum gaan door op de pijl vooruit of achteruit te tikken.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Tracker Widget {#tracker-widget}

Om de [widget](../widgets/info-widgets.md#trip-recording-widgets) te bekijken, moet u eerst de OsmAnd Tracker-plugin inschakelen. Daarna verschijnt er een widget met het woord *Start* in de rechterbovenhoek van het OsmAnd-scherm.  

Om het uit te schakelen, kunt u naar *Hoofdmenu → Scherm configureren* gaan.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png)   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

De widget heeft verschillende weergaven.  

1. De eerste is *Start*.  
   Wanneer u op *Start* tikt, gaat u naar [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), waar u contacten kunt selecteren of op Voorgestelde contacten kunt tikken.
2. Ten tweede, wanneer u begint met het delen van uw locatie, verandert de widget van uiterlijk.  

   - Het groene *OK* emoji-pictogram betekent dat uw locatie nu wordt gedeeld. Alles is normaal, het delen verloopt zonder fouten.  
   - Een oranje *OK* emoji-pictogram betekent dat uw locatie niet kan worden verzonden. Er is een probleem met de internet- of GPS-verbinding.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Als u lange tijd geen internetverbinding hebt, worden uw locatiepunten opgeslagen in de OsmAnd Tracker-buffer. De widget in OsmAnd verandert van uiterlijk naar een grijs emoji-pictogram. Het toont de vultijd van de buffer, hoe lang de buffer uw locatiepunten al opslaat.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Zodra de internetverbinding is hersteld, begint het met het uploaden van locatiepunten uit de buffer. De OsmAnd-widget verandert van uiterlijk en het aantal minuten erin begint af te nemen. Wanneer alle locatiepunten uit de buffer naar Telegram zijn geüpload, verschijnt het *OK* emoji-pictogram op de widget.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Als u de widget als een *OK* emoji-pictogram ziet, betekent dit dat alles in orde is. Het uitwisselingsproces verloopt zonder problemen.  


## OsmAnd Assistent {#osmand-assistant}

De OsmAnd-app heeft zijn eigen Telegram-bot genaamd "OsmAnd Assistant", die u helpt OsmAnd Telegram te integreren met trackers of API's van derden. U kunt niet alleen uw locatie delen, maar ook de locatie van uw fiets of een groep mensen die racen, beschikbaar via de API. OsmAnd Telegram geeft u een mooie presentatie van uw locaties op de kaart in OsmAnd zelf.  

Deel alstublieft uw mening over deze nieuwe app met ons op [Twitter](https://twitter.com/osmandapp) en andere sociale kanalen.

Om de GPS-posities van contacten op de kaart te bekijken, heeft u de nieuwste versie van [OsmAnd of OsmAnd+](./../purchases/android.md) nodig. De minimaal ondersteunde versie van OsmAnd of OsmAnd+ is 3.0.4.