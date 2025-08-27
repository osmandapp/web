---
source-hash: b20d566784f9980fe5e20bf7150aed84f093a993d25503654c0a929b88a08bd6
sidebar_position: 6
title:  Track Recording
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Overzicht {#overview}

Dit artikel behandelt problemen met GPX-trackopnames die lange tijd zijn waargenomen in verschillende versies van Android en iOS. Met **Achtergrond** bedoelen we dat de OsmAnd-app niet op de voorgrond verschijnt, vooral wanneer het scherm van het apparaat uit staat (wat verschilt van de interne *achtergrond*-definitie in apparaten).

**Opmerkingen**:

- Vanaf Android 11 (2020/12) is de systeemtoestemmingsoptie *Altijd toestaan* voor locatietoegang op de achtergrond niet langer beschikbaar, maar dit **beperkt de achtergrondopname** van OsmAnd-tracks **niet**. Volgens de documentatie van Google wordt dit nu beschouwd als **gebruik op de voorgrond**, omdat de toestemming om de service op de voorgrond te gebruiken intern wordt gebruikt en de systeemmelding dat een track wordt opgenomen altijd zichtbaar is.

- Merk op dat de nieuwe formulering van Android misleidend kan zijn:

  - **Toestaan tijdens gebruik van de app** betekent dat de app continu locatiegegevens kan ontvangen zolang deze op het scherm wordt weergegeven of een zichtbare melding heeft in de *Android*-meldingenbalk, zoals OsmAnd heeft tijdens navigatie of ritregistratie. (Technisch gezien wordt dit *voorgrondmodus* genoemd).

  - **Altijd toestaan** betekent daarentegen dat de app in principe 'onopgemerkt' uw locatie kan verkrijgen zonder dat een van deze voorwaarden van toepassing is. Maar *Android* beperkt de frequentie van locatietoegang in deze (*achtergrond*)modus tot zoiets als eens per uur, wat zeker niet de juiste modus is voor een navigatie-app.


## Opgenomen Tracks Zijn Ruisig {#recorded-tracks-are-noisy}

Er zijn 2 typische nauwkeurigheidsproblemen die leiden tot een *rommelige* opgenomen track.

- Langer op dezelfde plaats staan.
- Slecht GPS-signaal en overschakelen naar netwerksignaal-gebaseerde locatie.

Acties die u kunt uitvoeren:

- U kunt dergelijke problemen voorkomen door **Pauze** te gebruiken om de opname onder dergelijke omstandigheden te onderbreken.
- Het is ook mogelijk om een track later te bewerken en *"ruisige"* punten te verwijderen.
- Of u kunt de instellingen van de *Ritregistratie-plugin* gebruiken om *"ruisige"* punten al tijdens het opnemen te filteren, op basis van uw **ervaring** en **opnameapparaat**. U kunt punten filteren op basis van verschillende criteria:
  - Punten met lage of geen snelheid.
  - Punten met slechte precisie (GPS 'hdop').
  - Punten dichterbij dan een drempel in meters.

- **Google Services API of Android API**. U kunt verder wijzigen hoe OsmAnd locatiegegevens ontvangt op Android-apparaten. In [OsmAnd Instellingen → Locatiebron](../personal/global-settings.md#location-source) selecteert u tussen **Google Play Services** en **Android API**. In veel gevallen helpt het overschakelen naar **Android API** om de opgenomen tracks te verbeteren en minder ruisig te maken.


## Opgenomen Tracks Hebben Gaten {#recorded-tracks-have-gaps}

Vanaf Android 4.4 kunnen energiebesparende functies het CPU-gebruik beperken, de schermhelderheid verminderen en achtergrond-apps afsluiten wanneer het scherm uit staat. Dit kan de prestaties van OsmAnd beïnvloeden voor buitengebruik, kaartweergave en trackopname. Om problemen te voorkomen, kunt u overwegen energiebesparende functies volledig uit te schakelen. Op basis van gebruikerservaring heeft dit weinig invloed op de batterijduur voor de meeste apparaten.

### OsmAnd configureren voor Trackopname {#configuring-osmand-for-track-recording}

- **Voorkom zelfstandige logging**. Zorg ervoor dat de instelling *Voorkom zelfstandige logging* onder Plugins/Ritregistratie is gedeactiveerd om OsmAnd tracks te laten opnemen met het scherm uit.
- **Update OsmAnd**. Android-versies gebruiken verschillende strategieën om het stroomverbruik te verminderen door [applicaties die op de achtergrond draaien af te sluiten](https://dontkillmyapp.com/). Versie 3.9 of hoger gebruikt een voorgrondservice, zichtbaar in de meldingenbalk, [om de app op de achtergrond te laten draaien](https://dontkillmyapp.com/) op de meeste Android-versies. Dit is bijzonder effectief op Android 8+ ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255), [Issue #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Android optimaliseren voor Trackopname {#optimizing-android-for-track-recording}

- **Sluit OsmAnd uit van energieoptimalisatie**. Zoek in de energie- of energiebesparingsinstellingen van uw Android-apparaat OsmAnd onder *Apps*, *Applicaties* of *App Manager*. Zoek *Energiebesparing* of *Energieverbruik* en sluit OsmAnd uit van energieoptimalisatie. ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Schakel de energiebesparende modus uit**. Het volledig uitschakelen van Android Energiebesparing kan helpen, vooral op oudere Android-versies. Dit kan prestatieproblemen tijdens trackopname of navigatie oplossen.

### Gedrag van iOS Achtergrond-apps beheren {#control-the-behavior-of-ios-background-apps}

iOS kan achtergrond-apps automatisch onderbreken of stoppen wanneer systeembronnen opnieuw worden toegewezen. OsmAnd kan dit gedrag niet overrulen. Als de trackopname wordt onderbroken wanneer het apparaat is vergrendeld, kan dit gaten in de opname veroorzaken. U kunt deze gaten bewerken met de tool [Route plannen](https://docs.osmand.net/docs/user/plan-route/create-route).

Voor meer details over hoe iOS omgaat met locatietracking, raadpleeg de documentatie van Apple [hier](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Geteste energie-instellingen voor Android 9, 10 en 11 (Hardy, 25-08-2020) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

De volgende energie-instellingen zijn succesvol getest onder Android 9, 10 en later 11 (op Samsung-apparaten) om OsmAnd tracks zonder gaten te laten registreren. Controleer deze **10 instellingen** en stel ze dienovereenkomstig in:

- (1) **Energiebesparing (modus)** = UIT (of *Geoptimaliseerd* in Android 10)
- (2) **Adaptieve energiebesparing** = UIT (Wanneer AAN, kan de gemiddelde energiebesparende modus soms worden geactiveerd, wat voorkomt dat OsmAnd logt)
- (3) **Adaptieve batterij** = AAN (zou apps die zijn vrijgesteld van batterijoptimalisatie sowieso niet moeten beïnvloeden, zie (9) hieronder)
- (4) **Ongebruikte apps in slaapstand zetten** = UIT (AAN waarschijnlijk ook oké als OsmAnd is vrijgesteld van batterijoptimalisatie, zie (9) hieronder)
- (5) **Ongebruikte apps automatisch uitschakelen** = UIT (lijkt alleen aanwezig in Android 9)
- (6) **Instellingen optimaliseren** = UIT (in Android 10 onder *Apparaatonderhoud / Geavanceerd*, in Android 11 lijkt het verdwenen)
- (7) **Automatisch optimaliseren (dagelijks)** = AAN (waarschijnlijk niet relevant)
- (8) **Automatisch opnieuw opstarten (op ingestelde tijden)** = UIT (waarschijnlijk niet relevant)
- (9) **Batterijgebruik optimaliseren** (onder *Apps / OsmAnd / Batterij* of *Apps / 3-stippen / Speciale toegang / Batterijgebruik optimaliseren / Alles / OsmAnd*) = raadzaam om OsmAnd vrij te stellen van batterijoptimalisatie (hoewel niet nodig op alle apparaten)
- (10) **Achtergrondactiviteit toestaan** = AAN voor OsmAnd onder *Apps / OsmAnd / Batterij* voor Android 11

Sommige van deze instellingen werken samen, dus wees nauwkeurig. De beste manier om de bovenstaande instellingen te zoeken is op naam (met en zonder de uitdrukkingen tussen haakjes). Afhankelijk van uw Android-versie kunnen ze verspreid zijn over deze verschillende *Android Instellingen-schermen*:

- *Apparaatonderhoud*
- *Apparaatonderhoud / 3-stippen / Automatisering*
- *Apparaatonderhoud / Geavanceerd*
- *Apparaatonderhoud / Batterij*
- *Apparaatonderhoud / Batterij / Instellingen*
- *Apparaatonderhoud / Batterij / App-energiebeheer*
- *Apparaatonderhoud / Batterij / Meer batterij-instellingen*


## Hoe de afgelegde afstand te volgen {#how-to-track-traveled-distance}

OsmAnd heeft geen speciale widget vergelijkbaar met een kilometerteller. U kunt de [Ritregistratie-plugin](../plugins/trip-recording.md#new-track-recording) gebruiken om uw afgelegde afstand bij te houden en deze indien nodig te resetten.  


## OsmAnd 3.9: Hoogteproblemen bij gebruik van Google Play Services {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play heeft zijn beleid gewijzigd, en om hieraan te voldoen, is OsmAnd, vanaf versie 3.9 (exclusief Nightly, F-Droid en Huawei builds), verplicht om Google Play Services te gebruiken om locatiebepalingen te verkrijgen terwijl het op de achtergrond draait (dat wil zeggen, in Android-terminologie, als een voorgrondservice met een zichtbare systeemmelding).

Na deze wijziging lijkt er een probleem te zijn met hoogteregistratie: blijkbaar interpoleert Google Play Services de hoogtemeting zeer agressief, zie [GitHub issue #10864](https://github.com/osmandapp/Osmand/issues/10864). Dit probleem treft Android 10, mogelijk niet Android 11. Het [probleem](https://issuetracker.google.com/issues/180218747) is al gemeld op de website van Google en zal waarschijnlijk op 09-03-2021 worden opgelost.  

Als tijdelijke oplossing kunt u in [*OsmAnd Instellingen → Locatiebron*](../personal/global-settings.md#location-source) de locatiebron wijzigen van **Google Play Services** naar **Android API**.


## OsmAnd 3.9: GPS-wake-up nu vervangen door continue voorgrondservice (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

Vanaf versie 3.9, wanneer trackopname of navigatie vereist is, ondersteunt OsmAnd continu GPX via de *Android* achtergrondservice, en dit is zichtbaar als een *Android* systeemmelding.

De eerdere strategie van het gebruik van een doze-modus en periodieke GPS Wake-Up is uit onze code verwijderd (commit [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), zoals vereist door nieuwe Google Play-beperkingen op achtergrondlocatietoegang. Als gevolg hiervan zijn de volgende secties (A) en (B) alleen van toepassing op versies van OsmAnd vóór 3.9:

**<del> (A) GPS Wake-up Strategie</del>**

- (A1) Terwijl OsmAnd wordt gebruikt, bijv. Navigatie. We houden de GPS-module van het systeem de hele tijd aan, aangezien continue locatie-informatie hier cruciaal is. Het effect op het batterijverbruik (orde van grootte) lijkt ongeveer 5% per uur op oudere systemen tot Android 4.4, en 2-3% voor nieuwere systemen.
- (A2) Voor *achtergrond* trackopname zonder gelijktijdige navigatie. Voor opname met intervallen tot 15 seconden houden we GPS ook aan, andere strategieën zullen niet veel batterijvermogen besparen.
- (A3) Voor intervallen >=30sec, schakelen we GPS alleen in voor elk samplepunt. Dit heeft een merkbaar effect op de nauwkeurigheid van de opgenomen punten, maar vermindert het batterijverbruik tot een orde van grootte van 1,2% per uur voor 30-seconden trackopname.

**<del> (B) GPS Wake-up Problemen</del>**

Om de GPS-wake-up te realiseren, gebruiken we tot nu toe de Android Alarm Manager om het apparaat periodiek te wekken (ook vanuit de Doze-modus, die werd geïntroduceerd in Android 6). Nieuwe Android-versies introduceerden de volgende problemen:

- **(B1) Alarm Manager's setRepeating() werd onnauwkeurig vanaf Android 4.4:**  
Verzachting: We gebruiken nu *setRepeating()* alleen tot Android 4.2, de nieuwe *setExact()* methode vanaf Android 4.4, en *setExactAndAllowWhileIdle()* voor Android 8+. ([Issue #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Vanaf Android 4.4 beperken systemen het aantal keren dat *setExact()* herhaaldelijk wordt uitgevoerd** tot bijv. eens per 5 of zelfs 15 minuten. (De werkelijke waarde lijkt sterk apparaatspecifiek te zijn.)  
Geen goede oplossing gevonden voor nu. Huidige verzachting is dat we geen Alarm Manager wake-up gebruiken, maar in plaats daarvan GPS altijd aanhouden voor achtergrond tracklogging op apparaten met Android 5+ voor alle opname-intervallen korter dan 5 minuten. Dit produceert betrouwbare en precieze tracks ten koste van een hoger batterijverbruik. ([Issue #5632](https://github.com/osmandapp/Osmand/issues/5632))