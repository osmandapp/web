---
source-hash: 652f7e88fdf4d2bae94537d58c7ea9e1d5aa0e57dfb954e058fd661aae10355c
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

OsmAnd Tracker is een aangepaste Telegram-client die is gemaakt voor flexibele monitoring en het verzenden van berichten met GPS-locaties in realtime.

[OsmAnd tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) helpt u uw contacten op een kaart in OsmAnd te zien. Het heeft een sociaal aspect, wat betekent dat u, om het te gebruiken, toegang moet verlenen tot uw contacten voor het platform dat OsmAnd kiest.

We kozen [Telegram](https://telegram.org/) als het meest open sociale platform omdat het een [Open API](https://core.telegram.org/api), Open SDK en bovendien uiteindelijk een Open Server-implementatie (Blockchain) zal hebben.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Hoe het werkt {#how-it-works}

Belangrijk is dat er een hoge mate van compatibiliteit is tussen de apps. U kunt eenvoudig uw locatie delen met uw contacten zonder de Telegram mobiele app te hebben (OsmAnd Online GPS Tracker is een onafhankelijke Telegram-client), en omgekeerd hoeven uw contacten [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) niet te hebben om uw locatie te zien.

We hebben [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) zo ontworpen dat u de Telegram-app en de OsmAnd-app kunt blijven gebruiken zoals u gewend bent, zonder extra beperkingen.

De applicatie stuurt Live Locatie-berichten naar geselecteerde chats voor de door u ingestelde tijd, toont een lijst van uw contacten en groepen, en controleert chats op berichten met uw locatie, die vervolgens op de kaart in OsmAnd worden weergegeven.
De applicatie verzendt of bekijkt uw tekstberichten niet.

Log in met uw Telegram geregistreerde telefoonnummer om het volgende in te schakelen:

- Beheer de lijst met contacten en groepen die u hun locatie sturen.
- Bekijk de locatie van contacten en groepen in realtime op een kaart in OsmAnd.
- Stel de tijd voor het delen van de locatie afzonderlijk in voor elke chat.
- Stel in hoe vaak uw locatie wordt bijgewerkt.
- Monitor de chronologie van uw bewegingen en die van uw contacten.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Vereiste installatieparameters {#required-setup-parameters}

Installeer OsmAnd Online GPS Tracker APK:

- [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [OsmAnd server](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## Plugininstellingen {#plugin-settings}

Er zijn verschillende instellingen voor het beheren van de frequentie van het delen van locaties en het regelen van de weergave van de locaties die naar u zijn verzonden.

Voor het openen van het menu *Instellingen*:

*Scherm [Mijn locatie](#my-location-screen) → scherm naar beneden bewegen (contactenlijst) → ⋮ → Instellingen*
of
*Scherm [Nu live](#live-now-screen) → ⋮ → Instellingen*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Positie {#position}

**Mijn locatie verzenden** — hiermee kunt u het interval instellen voor het verzenden van uw positie, van één keer per seconde (voor toenemende nauwkeurigheid) tot één keer per 5 minuten (voor vermindering van het stroomverbruik).

**Niet bewegen** — hiermee kunt u de tijd instellen (van 1 minuut tot 1 uur) waarna de locatie van een contact als verouderd wordt beschouwd. Als een locatie verouderd raakt, wordt deze grijs.

**Locatiegeschiedenis** — hiermee kunt u de tijd instellen (van 5 minuten tot 24 uur) waarna het contact met de verwijderde locatie wordt verborgen uit de lijst en de OsmAnd-kaart.

**Locatie verzenden als** - hiermee kunt u een categorie kiezen voor het verzenden van berichten over uw locatie in Telegram (3 soorten verzending): tekst, kaart, tekst en kaart.

**Buffervervaltijd** - hiermee kunt u de tijd kiezen voor het opslaan van punten in de buffer.

**Achtergrondwerk** - hiermee kunt u de instellingen voor batterijoptimalisatie wijzigen om het delen van locaties te stabiliseren.

**Locatiebron** - hiermee kunt u *Google Play Services* (standaard) of *Android API* kiezen voor het bepalen van de locatie.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Eenheden & Formaten {#units--formats}

Hiermee kunt u instellingen voor eenheden en formaten toevoegen. Nu kunt u uw comfortabele waarden kiezen voor Telegram-berichten bij het delen van locatiegegevens.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Uiterlijk {#appearance}

Hiermee kunt u het aantal ontvangen GPS-punten van andere contacten, evenals de door u verzonden punten, weergeven.


### Privacy {#privacy}

Proxy gebruiken binnen OsmAnd Tracker. Ga naar Instellingen en schrijf uw proxygegevens: *Instellingen → Privacy → Proxy-instellingen*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### GPS-instellingen {#gps-settings}

Locatiepuntinstellingen. Als u bijvoorbeeld enige tijd op één locatie blijft zonder te bewegen, worden uw locatiepuntgegevens niet verzonden en zal uw GPX-track nauwkeurigere en preciezere gegevens weergeven.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Locatie delen als {#share-location-as}

Als u meerdere apparaten wilt verbinden met één Telegram-account, moet u op "Apparaat toevoegen" klikken en het apparaat een naam geven.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### OsmAnd Connect {#osmand-connect}

Deze instelling stelt u in staat om de versie van OsmAnd te selecteren waarin uw contacten met hun locatie op de kaart verschijnen.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Account {#account}

Gebruik deze instelling om te controleren welk Telegram-account u momenteel gebruikt. Ook in dit menu kunt u de OsmAnd Telegram-applicatie afsluiten door simpelweg op de knop *Uitloggen* te tikken.


### Logcat Buffer {#logcat-buffer}

Hier kunt u gedetailleerde logs van de app controleren en delen.


## Mijn Locatie Scherm {#my-location-screen}

Op dit scherm ziet u uw Telegram-contacten. U kunt een of meer van hen kiezen, deelopties instellen en beginnen met het delen van uw locatie.

Na de eerste lancering ziet u een lijst met voorgestelde contacten. Dit zijn de vijf meest recente contacten waarmee u uw locatie hebt gedeeld. U kunt slechts één keer klikken om uw locatie met deze contacten te blijven delen.

Deeltijd is de laatste deeltijd die u voor het contact hebt geselecteerd.

Wanneer u begint met delen, ziet u een lijst met voorgestelde contacten en een knop *Terug naar OsmAnd* op het scherm *Mijn locatie*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Nu Live Scherm {#live-now-screen}

In dit menu ziet u alle contacten die een locatie met u delen. Tik op het contact en bekijk het op de **OsmAnd-kaart**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Actieve markering op de OsmAnd-kaart {#active-marker-on-the-osmand-map}

Hiermee kunt u de afstand, snelheid en hoekbeweging van uw contacten volgen op de OsmAnd-kaart en in Telegram-tekst. U kunt begrijpen waar en hoe uw contact beweegt.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Tijdlijn Scherm {#timeline-screen}

Dit is het derde tabblad in de applicatie. Hier kunt u een dag selecteren om de geschiedenis van locaties die met u zijn gedeeld te bekijken. Het selecteren van een dag toont de contacten die hun locatie op die dag hebben getoond.

Monitoring stelt u in staat om informatie op de achtergrond te verzamelen wanneer uw contacten deze delen. Hiervoor moet u het inschakelen.

Om alle informatie over de locatie van een contact te bekijken, tikt u op het pictogram of opent u een GPX-track in OsmAnd en verkent u de track gedetailleerder ([lees hier meer](./trip-recording.md)). U kunt de GPX-track ook delen voor een geselecteerde periode: door deze naar een e-mail of een instant messenger te sturen.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

U kunt de online beweging van uw contacten op de OsmAnd-kaart zien met behulp van de online GPS-track. Hiervoor moet u *Live* inschakelen bij het contact in de *Tijdlijn*. Als er op dit moment veel gemeenschappelijke contacten zijn, kiest de OsmAnd-app de kleur van de tracks willekeurig.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Wanneer u op "Toon in OsmAnd" of op de mini-kaart tikt, kunt u speciale instellingen selecteren voor GPX-tracking van uw contact in de OsmAnd-app en hun beweging in realtime op de OsmAnd-kaart zien.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Als er geen gegevens zijn verzameld op de geselecteerde datum, verschijnt er een speciale melding op het scherm. U kunt naar de dichtstbijzijnde datum gaan door op de pijl vooruit of achteruit te tikken.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Tracker Widget {#tracker-widget}

Om de [widget](../widgets/info-widgets.md#tracker-widget-android) te bekijken, moet u eerst de OsmAnd Tracker-plugin inschakelen. Daarna verschijnt er een widget met het woord *Start* in de rechterbovenhoek van het OsmAnd-scherm.

Om het uit te schakelen, kunt u naar *Hoofdmenu → Scherm configureren* gaan.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

De widget heeft verschillende weergaven.

1. De eerste is *Start*.
   Wanneer u op *Start* tikt, gaat u naar [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), waar u contacten kunt selecteren of op Voorgestelde contacten kunt tikken.
2. Ten tweede, wanneer u begint met het delen van uw locatie, verandert de widget van uiterlijk.

   - Het groene *OK* emoji-pictogram betekent dat uw locatie nu wordt gedeeld. Alles is normaal, het delen verloopt zonder fouten.
   - Een oranje *OK* emoji-pictogram betekent dat uw locatie niet kan worden verzonden. Er is een probleem met de internet- of GPS-verbinding.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Als u lange tijd geen internetverbinding hebt, worden uw locatiepunten opgeslagen in de OsmAnd Tracker-buffer. De widget in OsmAnd verandert van uiterlijk naar een grijs emoji-pictogram. Het toont de buffervultijd, hoe lang de buffer uw locatiepunten al opslaat.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Zodra de internetverbinding is hersteld, begint het met het uploaden van locatiepunten uit de buffer. De OsmAnd-widget verandert van uiterlijk en het aantal minuten erin begint af te nemen. Wanneer alle locatiepunten uit de buffer naar Telegram zijn geüpload, verschijnt het emoji *OK*-pictogram op de widget.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Als u de widget ziet als een *OK* emoji-pictogram, betekent dit dat alles in orde is. Het uitwisselingsproces verloopt zonder problemen.


## OsmAnd Assistent {#osmand-assistant}

De OsmAnd-app heeft een eigen Telegram-bot genaamd "OsmAnd Assistant", die u helpt OsmAnd Telegram te integreren met trackers van derden of API's. U kunt niet alleen uw locatie delen, maar ook de locatie van uw fiets of een groep mensen die racen en beschikbaar zijn via de API. OsmAnd Telegram geeft u een mooie presentatie van uw locaties op de kaart in OsmAnd zelf.

Deel alstublieft uw mening over deze nieuwe app met ons op [Twitter](https://twitter.com/osmandapp) en andere sociale kanalen.

Om de GPS-posities van contacten op de kaart te bekijken, hebt u de nieuwste versie van [OsmAnd of OsmAnd+](./../purchases/android.md) nodig. De minimaal ondersteunde versie van OsmAnd of OsmAnd+ is 3.0.4.

> *Laatst bijgewerkt: juli 2024*