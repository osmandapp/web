---
source-hash: 7f2e85f7e22604bcf22bbc6bdb7faf78780ede4bd62e7cd5554ceedacb06dd7d
sidebar_position: 6
title:  Trackopname
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Overzicht {#overview}

Dit artikel behandelt problemen met het opnemen van GPX-tracks die al lange tijd worden waargenomen in verschillende versies van Android en iOS. Met **Achtergrond** bedoelen we dat de OsmAnd-app niet op de voorgrond verschijnt, vooral wanneer het scherm van het apparaat uit is (wat verschilt van de interne *achtergrond*-definitie in apparaten).

**Opmerkingen**:

- Vanaf Android 11 (2020/12) is er niet langer de systeemmachtiging *Altijd toestaan* voor locatietoegang op de achtergrond, maar dit **beperkt niet** de achtergrondopname van OsmAnd-tracks. Volgens de documentatie van Google wordt dit nu beschouwd als **gebruik op de voorgrond**, omdat de toestemming om de service op de voorgrond te gebruiken intern wordt gebruikt en de systeemmelding dat een track wordt opgenomen altijd zichtbaar is.

- Let op dat de nieuwe bewoordingen van Android misleidend kunnen zijn:

  - **Toestaan bij gebruik van de app** betekent dat de app continu locatiegegevens kan ontvangen zolang deze op het scherm wordt weergegeven of een zichtbare melding heeft in de *Android*-notificatiebalk, zoals OsmAnd heeft tijdens navigatie of het opnemen van een trip. (Technisch gezien wordt dit de *voorgrondmodus* genoemd).

  - **Altijd toestaan** betekent daarentegen dat de app in principe 'ongemerkt' uw locatie kan verkrijgen zonder dat een van deze voorwaarden van toepassing is. Maar *Android* beperkt de frequentie van locatietoegang in deze (*achtergrond*) modus tot ongeveer eens per uur, wat zeker niet de juiste modus is voor een navigatie-app.


## Opgenomen tracks zijn onnauwkeurig {#recorded-tracks-are-noisy}

Er zijn 2 typische nauwkeurigheidsproblemen die leiden tot een *rommelige* opgenomen track.

- Langer stilstaan op dezelfde plek, of te frequente puntopname (overeenkomstig zigzaggen overdrijft de werkelijke waarden)
- Zwak GPS-signaal of overschakelen naar locatiebepaling op basis van het netwerksignaal.

Maatregelen om dit te verminderen:

- Pauzeer uw opnames terwijl u stilstaat, of gebruik het *Minimale verplaatsing*-filter van de Tripopname-plugin.
- Selecteer de tijd- of verplaatsingsinterval van uw opgenomen punten die geschikt is om de bochtigheid van uw reis vast te leggen, maar zonder veel extra punten te creëren (de spreiding hiervan zal ruis veroorzaken en de afstand en hoogtefluctuaties overdrijven).
- Het is ook mogelijk om een track later te bewerken en *"ruisige"* punten te verwijderen.
- Of u kunt de instellingen van de *Tripopname-plugin* gebruiken om *"ruisige"* punten al tijdens het opnemen te filteren, op basis van uw **ervaring** en **opnameapparaat**. U kunt punten filteren op verschillende criteria:
  - Punten met lage of geen snelheid.
  - Punten met slechte precisie (GPS 'hdop').
  - Punten die dichterbij zijn dan een drempelwaarde in meters.

- **Google Services API of Android API**. U kunt verder wijzigen hoe OsmAnd locatiegegevens ontvangt op Android-apparaten. In [OsmAnd Instellingen → Locatiebron](../personal/global-settings.md#location-source) kunt u kiezen tussen **Google Play Services** en **Android API**. In veel gevallen helpt het overschakelen naar **Android API** om de opgenomen tracks te verbeteren en ze minder onnauwkeurig te maken.


## Opgenomen tracks hebben onderbrekingen {#recorded-tracks-have-gaps}

### OsmAnd configureren voor trackopname {#configuring-osmand-for-track-recording}

- **Voorkom zelfstandig loggen**. Zorg ervoor dat de instelling *Voorkom zelfstandig loggen* onder Plugins/Tripopname is gedeactiveerd, zodat OsmAnd tracks kan opnemen met het scherm uit.
- **Update OsmAnd**. Android-versies gebruiken verschillende strategieën om het stroomverbruik te verminderen door [applicaties die op de achtergrond draaien te beëindigen](https://dontkillmyapp.com/). Versie 3.9 of hoger gebruikt een Voorgrondservice, zichtbaar in de notificatiebalk, [om de app op de achtergrond te laten draaien](https://dontkillmyapp.com/) op de meeste Android-versies. Dit is met name effectief op Android 8+ ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255), [Issue #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Android optimaliseren voor trackopname {#optimizing-android-for-track-recording}

Vanaf Android 4.4 kunnen energiebesparende functies het CPU-gebruik beperken, de schermhelderheid verlagen en achtergrondapps beëindigen wanneer het scherm uit is. Dit kan de prestaties van OsmAnd beïnvloeden voor buitengebruik, kaartweergave en trackopname. Latere versies van Android hebben op AI gebaseerd energiebesparend gedrag toegevoegd, zoals **Automatische batterij** en **Automatische energiebesparing**, wat dynamisch en nog minder voorspelbaar gedrag introduceert. Om opnameproblemen te voorkomen, is het aan te raden om, in ieder geval in het begin of voor foutopsporing, **energiebesparende functies volledig uit te schakelen**. Gebruikers melden dat de impact op de batterijduur voor de meeste apparaten acceptabel is.

- **Sluit OsmAnd uit van *Batterij-optimalisatie*.** Zoek in de *Instellingen* van uw Android-apparaat naar OsmAnd onder *Apps*, *Applicaties* of *App-beheer*. Zoek de sectie *Batterij*, *Energiebesparing* of *Stroomverbruik* en sluit OsmAnd uit van batterij-optimalisatie. ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Schakel de *Energiebesparingsmodus* uit.** Deze modus heeft een grote kans om zelfs voorgrondservices, zoals de trip-opname van OsmAnd, te beïnvloeden/beëindigen.

- **Schakel *Adaptieve energiebesparing* uit.** Als dit 'aan' staat, worden systeembrede, op gebruikspatronen gebaseerde beleidsregels toegepast om de bovengenoemde 'energiebesparingsmodus' te deactiveren/activeren.

- **Schakel *Adaptieve batterij* uit, tenzij u de OsmAnd-app regelmatig gebruikt.** *Adaptieve batterij* werkt per app, ook op basis van gebruikspatronen. Het effect op een specifieke app kan worden verminderd door die app vrij te stellen van *Batterij-optimalisatie* (zoals instellen op *Niet geoptimaliseerd*). *Adaptieve batterij* kan echter nog steeds voorgrondservices zoals de trip-opname van OsmAnd beëindigen als het apparaat oordeelt dat OsmAnd tot uw 'zelden gebruikte' apps behoort.

### Het gedrag van achtergrondapps in iOS beheren {#control-the-behavior-of-ios-background-apps}

iOS kan achtergrondapps automatisch onderbreken of stoppen wanneer systeembronnen opnieuw worden toegewezen. OsmAnd kan dit gedrag niet overrulen. Als de trackopname wordt onderbroken wanneer het apparaat is vergrendeld, kan dit hiaten in de opname veroorzaken. U kunt deze hiaten bewerken met de [Route plannen](https://docs.osmand.net/docs/user/plan-route/create-route) tool.

Voor meer details over hoe iOS omgaat met locatietracking, bekijk de documentatie van Apple [hier](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Geteste energie-instellingen voor Android 9, 10 en 11 (Hardy, 25-08-2020) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

De volgende energie-instellingen zijn met succes getest onder Android 9, 10 en later 11 (op Samsung-apparaten) om ervoor te zorgen dat OsmAnd tracks zonder onderbrekingen registreert. Controleer deze **10 instellingen** en stel ze dienovereenkomstig in:

- (1) **Energiebesparing (modus)** = UIT (of *Geoptimaliseerd* in Android 10)
- (2) **Adaptieve energiebesparing** = UIT (Wanneer AAN, kan de energiebesparingsmodus soms worden geactiveerd, wat voorkomt dat OsmAnd logt.)
- (3) **Adaptieve batterij** = AAN (Heeft sowieso geen invloed op apps die zijn vrijgesteld van batterij-optimalisatie, zie (9) hieronder, **tenzij de app zelden wordt gebruikt**. Om zeker te zijn, zet op UIT.)
- (4) **Ongebruikte apps in slaapstand zetten** = AAN (Maar OsmAnd is vrijgesteld van batterij-optimalisatie, zie (9) hieronder!)
- (5) **Ongebruikte apps automatisch uitschakelen** = UIT (Lijkt alleen aanwezig in Android 9.)
- (6) **Instellingen optimaliseren** = UIT (In Android 10 onder *Apparaatonderhoud / Geavanceerd*, in Android 11 lijkt dit verdwenen.)
- (7) **Automatisch optimaliseren (dagelijks)** = AAN (Heeft hier geen effect.)
- (8) **Automatisch herstarten (op ingestelde tijden)** = UIT (Heeft hier geen effect.)
- (9) **Batterijverbruik optimaliseren** (Onder Android *Instellingen / Apps / OsmAnd / Batterij* of *Instellingen / Apps / 3-puntjes / Speciale toegang / Batterijverbruik optimaliseren / Alle / OsmAnd*) = Vrijstel OsmAnd van batterij-optimalisatie (zeer aan te raden, hoewel niet noodzakelijk als de app vaak door de gebruiker wordt gestart).
- (10) **Achtergrondactiviteit toestaan** = AAN voor OsmAnd onder *Apps / OsmAnd / Batterij* voor Android 11

Sommige van deze instellingen werken op elkaar in, dus wees nauwkeurig. Zoek het beste naar de bovenstaande instellingen op naam (met en zonder de uitdrukkingen tussen haakjes). Afhankelijk van uw versie van Android kunnen ze verspreid zijn over deze verschillende *Android Instellingen-schermen*:

- *Apparaatonderhoud*
- *Apparaatonderhoud / 3-puntjes / Automatisering*
- *Apparaatonderhoud / Geavanceerd*
- *Apparaatonderhoud / Batterij*
- *Apparaatonderhoud / Batterij / Instellingen*
- *Apparaatonderhoud / Batterij / App-energiebeheer*
- *Apparaatonderhoud / Batterij / Meer batterij-instellingen*


## Hoe de afgelegde afstand te volgen {#how-to-track-traveled-distance}

OsmAnd heeft geen speciale widget vergelijkbaar met een odometer. U kunt de [Tripopname-plugin](../plugins/trip-recording.md#new-track-recording) gebruiken om uw afgelegde afstand te volgen en deze te resetten wanneer dat nodig is.


## OsmAnd 3.9: Hoogteproblemen bij gebruik van Google Play Services {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play heeft zijn beleid gewijzigd en om hieraan te voldoen, is OsmAnd vanaf versie 3.9 (met uitzondering van Nightly-, F-Droid- en Huawei-builds) verplicht om Google Play Services te gebruiken om locatie-fixes te verkrijgen terwijl het op de achtergrond draait (dat wil zeggen, in Android-terminologie, als een voorgrondservice met een zichtbare systeemmelding).

Na deze wijziging lijkt er een probleem te zijn met de hoogte-opname: blijkbaar interpoleert Google Play Services de hoogtemeting zeer agressief, zie [GitHub issue #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Dit probleem treft Android 10, mogelijk niet Android 11. Het [probleem](https://issuetracker.google.com/issues/180218747) is al gemeld op de website van Google en zal waarschijnlijk op 09-03-2021 worden opgelost.

Als tijdelijke oplossing kunt u in [*OsmAnd Instellingen → Locatiebron*](../personal/global-settings.md#location-source) de locatiebron overschakelen van **Google Play Services** naar **Android API**.


## OsmAnd 3.9: GPS Wake-up nu vervangen door continue voorgrondservice (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

Vanaf versie 3.9, wanneer trackopname of navigatie vereist is, ondersteunt OsmAnd continu GPX via de *Android* achtergrondservice, en dit is zichtbaar als een *Android* systeemmelding.

De eerdere strategie van het gebruik van een sluimermodus en periodieke GPS Wake-Up is uit onze code verwijderd (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), zoals vereist door nieuwe Google Play-beperkingen op achtergrondlocatietoegang. Als gevolg hiervan zijn de volgende secties (A) en (B) alleen van toepassing op versies van OsmAnd vóór 3.9:

**<del> (A) GPS Wake-up Strategie</del>**

- (A1) Terwijl OsmAnd wordt gebruikt, bijv. Navigatie. We houden de GPS-module van het systeem de hele tijd aan, omdat continue locatie-informatie hier essentieel is. Het effect op het batterijgebruik (orde van grootte) lijkt ongeveer 5% per uur op oudere systemen tot Android 4.4, en 2-3% voor nieuwere systemen.
- (A2) Voor *achtergrond* trackopname zonder gelijktijdige navigatie. Voor opnames met intervallen tot 15 seconden houden we ook de GPS aan, andere strategieën zullen niet veel batterijvermogen besparen.
- (A3) Voor intervallen \>=30sec, schakelen we de GPS alleen in voor elk meetpunt. Dit heeft een merkbaar effect op de nauwkeurigheid van de opgenomen punten, maar vermindert het batterijgebruik tot een orde van grootte van 1,2% per uur voor een trackopname van 30 seconden.

**<del> (B) GPS Wake-up Problemen</del>**

Om de GPS wake-up te realiseren, gebruiken we tot nu toe de Android Alarm Manager om het apparaat periodiek te activeren (ook vanuit de Doze-modus, die in Android 6 werd geïntroduceerd). Nieuwe Android-versies introduceerden de volgende problemen:

- **(B1) Alarm Manager's setRepeating() werd onnauwkeurig vanaf Android 4.4:**  
Oplossing: We gebruiken nu *setRepeating()* alleen tot Android 4.2, de nieuwe *setExact()* methode vanaf Android 4.4, en *setExactAndAllowWhileIdle()* voor Android 8+. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Vanaf Android 4.4 beperken systemen het aantal keren dat *setExact()* herhaaldelijk wordt uitgevoerd** tot bijv. eens per 5 of zelfs 15 minuten. (De werkelijke waarde lijkt sterk apparaat-specifiek.)  
Geen goede oplossing gevonden voor nu. De huidige oplossing is dat we geen Alarm Manager wake-up gebruiken, maar in plaats daarvan de GPS altijd aanhouden voor achtergrond track-logging op apparaten met Android 5+ voor alle opname-intervallen korter dan 5 minuten. Dit produceert betrouwbare en precieze tracks ten koste van een hoger batterijgebruik. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))