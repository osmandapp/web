---
source-hash: fc1b2c0235716aa50473c8f887e1a5bd1752fd011931da9e6726f958a0e3fca9
sidebar_position: 2
title:  Aankopen & Betalingen
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Platformonafhankelijke aankopen {#cross-platform-purchases}

**OsmAnd Pro** en **Maps+** (*Alle Wereldkaarten* voor iOS) zijn **platformonafhankelijke abonnementen** die beschikbaar zijn voor Android en iOS vanaf OsmAnd 5.0. Platformonafhankelijk betekent dat als u een abonnement koopt, bijvoorbeeld in een van de Android-winkels (Google Play, Huawei AppGallery), u dit ook op iOS en in de webversie kunt gebruiken.

- Een platformonafhankelijk abonnement kan op meerdere apparaten en platforms worden gebruikt **als het gekoppeld is aan hetzelfde OsmAnd Cloud-account**.

- Eenmalige aankopen zoals **OsmAnd+** (Android) en winkelspecifieke aankopen zijn niet overdraagbaar tussen platforms.

- U kunt OsmAnd Pro op maximaal 6 apparaten gebruiken, zelfs als ze verschillende besturingssystemen hebben.

- Zorg er altijd voor dat u op alle apparaten hetzelfde OsmAnd Cloud-account gebruikt om toegang te krijgen tot uw aankopen.

- Voor meer details, zie: [Android-aankopen](../purchases/android.md), [iOS-aankopen](../purchases/ios.md), [Platformonafhankelijke aankopen](../purchases/cross.md) en [OsmAnd Kaartportaal](../purchases/web.md).


### Hoe u uw aankoop kunt koppelen aan uw OsmAnd Cloud-account {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Als u **geen** OsmAnd Cloud-account heeft:

    - Open de OsmAnd-app op het apparaat waarop u de aankoop heeft gedaan.
    - Ga naar *Menu → Instellingen → OsmAnd Cloud*.
    - Tik op **Nieuw account aanmaken**.
    - Nadat u het account heeft aangemaakt, gaat u naar *OsmAnd Menu → Instellingen → Aankopen*.
    - Tik op **Aankopen herstellen** om uw aankoop aan een nieuw account te koppelen.

2. Als u **al een** OsmAnd Cloud-account heeft:

    - Zorg ervoor dat u bent ingelogd op het OsmAnd Cloud-account op het apparaat waarop u de aankoop heeft gedaan.
    - Navigeer naar *OsmAnd Menu → Instellingen → OsmAnd Cloud → Ik heb al een account*
    - Nadat u bent ingelogd op uw account, gaat u naar *OsmAnd Menu → Instellingen → Aankopen*.
    - Tik op **Aankopen herstellen** om de aankoop met uw account te synchroniseren.


> Voor meer informatie, lees de artikelen [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform) en [Platformonafhankelijke aankopen](../purchases/cross.md).


### Koppeling van aankopen met meerdere OsmAnd Cloud-accounts {#purchase-association-with-multiple-osmand-cloud-accounts}


Een platformonafhankelijke aankoop, zoals _Maps+_ en _Pro_, is gekoppeld aan het OsmAnd Cloud-account dat als laatste is geactiveerd op het apparaat met het originele aankoopbewijs (van de App Store of Google Play). Als een gebruiker op dit apparaat uitlogt van zijn primaire account (`OsmAnd Cloud-account A`) en inlogt op een nieuw account (`OsmAnd Cloud-account B`), draagt het OsmAnd-systeem de licentie automatisch over naar het nieuwe `OsmAnd Cloud-account B`. Als gevolg hiervan verliest uw oorspronkelijke OsmAnd Cloud-account zijn aankoopstatus op andere platforms, omdat de licentie slechts op één OsmAnd Cloud-account tegelijk actief kan zijn.

Technisch gezien werkt dit als volgt: de aankoop zelf behoort toe aan uw Apple ID of Google-account, niet aan een OsmAnd-account. De OsmAnd-app op het apparaat met de aankoop informeert onze server simpelweg welk OsmAnd Cloud-account momenteel actief is. De server verleent op zijn beurt platformonafhankelijke toegang aan dat account. Daarom wordt het laatste account dat inlogt op het "hoofd"-apparaat altijd de houder van de licentie.

Om de aankoop te herstellen naar het juiste account (`OsmAnd Cloud-account A`), moet u de omgekeerde actie uitvoeren. Op hetzelfde apparaat waar de aankoop is gedaan, moet u uitloggen van het onjuiste `OsmAnd Cloud-account B` en weer inloggen op `OsmAnd Cloud-account A`. Dit proces dwingt het systeem om het aankoopbewijs opnieuw te verifiëren en de licentie opnieuw te koppelen aan het juiste `OsmAnd Cloud-account A`, waardoor de platformonafhankelijke status wordt hersteld.

> Voor meer informatie, lees de artikelen over [Platformonafhankelijke aankopen](../purchases/cross.md).

## Hoe u OsmAnd kunt kopen en herstellen in de Huawei AppGallery zonder Huawei Mobile Services {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **OsmAnd kopen**:
   - Schakel eerst *Installeren van onbekende bronnen* in de instellingen van uw apparaat in. U kunt deze optie meestal vinden in **Instellingen → Beveiliging**.
   - Installeer de [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), wat essentieel is voor app-compatibiliteit.
   - Open vervolgens *Huawei AppGallery* op de [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) pagina en download de app.
   - In eerste instantie is alleen de gratis versie beschikbaar om te downloaden. Om een aankoop te doen, ga naar OsmAnd *Menu → Instellingen → Aankopen* en selecteer het gewenste type.
   - Voor meer details, bezoek [deze pagina](https://osmand.net/docs/user/purchases/android#install-application).

2. **Aankoop herstellen**:
   - Om uw aankoop te herstellen, logt u in op *Huawei AppGallery* met hetzelfde account dat aan uw OsmAnd-aankoop is gekoppeld.
   - Controleer uw transactiegeschiedenis in de [bestelgeschiedenis van de Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Mogelijk moet u *Huawei AppGallery* bijwerken en de cache wissen om problemen te voorkomen.
   - Om uw aankopen te herstellen, volgt u *Menu → Instellingen → Aankopen → Aankopen herstellen* in OsmAnd.
   - Voor meer informatie, zie het artikel [Android-aankopen](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructies voor het instellen van Huawei Mobile Services.
- Hoe OsmAnd te kopen zonder HMS Core.
- Aankopen herstellen in de Huawei AppGallery.
-->

## De Amazon-winkel sluit - wat te doen {#amazon-store-is-closing---what-to-do}

Op **20 augustus 2025** sluit Amazon de Amazon Appstore voor Android-apparaten. U kunt de officiële aankondiging [hier](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program) lezen.

Als u aankopen heeft gedaan via Amazon, moet u uw **abonnementen (Pro, Maps+) of in-app aankopen (Maps+) overzetten** naar een ander platform.

➡️ Momenteel is [platformonafhankelijke overdracht mogelijk voor abonnementen en in-app aankopen](../purchases/cross.md).
❗ **OsmAnd+** (zelfstandige app) kan niet worden overgedragen tussen platforms via een OsmAnd Cloud-account. Neem voor hulp contact op met **support@osmand.net**.

## Hoe de aankoop van de Topografie-plug-in (voorheen Hoogtelijnen) te herstellen {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Om de [Topografie-plug-in](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid) te herstellen:

1. Log in op hetzelfde Google Play-account dat u gebruikte om de Topografie-plug-in te kopen en installeer [de app](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Als de *Installeren*-knop inactief is, zorg er dan voor dat zowel de Google Play- als de OsmAnd-app up-to-date zijn. Wis hun cache, start uw apparaat opnieuw op en probeer de plug-in opnieuw te installeren.
3. Schakel na de installatie de Topografie-plug-in in via *[OsmAnd menu → Plug-ins](../plugins/topography.md)*, download de benodigde bestanden in *[Kaarten en bronnen](../start-with/download-maps.md#maps-and-resources)* en activeer deze via het *[Kaart configureren-menu](../map/configure-map-menu.md)*.


## Hoe te herkennen of OsmAnd Unlimited actief is {#how-to-identify-if-osmand-unlimited-is-active}

Navigeer naar *Menu → Kaarten downloaden* en tik op de kaartenteller (het veld met het label *Gratis versie. X downloads over*). Als OsmAnd Unlimited actief is, wordt de resterende opslagruimte op het apparaat weergegeven in plaats van het aantal gratis downloads.


## Kan ik de volledige versie van OsmAnd als een aparte app voor iOS krijgen? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Voor iOS is er slechts één versie van OsmAnd beschikbaar. Om toegang te krijgen tot de volledige versie, moet u extra functies ontgrendelen via in-app aankopen.


## Wat betekenen 5 of 7 gratis downloads? {#what-do-5-or-7-free-downloads-mean}

U heeft recht op 5 gratis downloads op iOS of 7 op Android. Elke download, of het nu een kaart, een update (kaartupdates tellen als downloads), stemmenpakketten of andere items zijn, vermindert het beschikbare aantal. Let op, het verwijderen van items uit uw downloads herstelt het aantal gratis downloads niet.


## Hoe kan ik extra kaartdownloads krijgen in OsmAnd Free? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Als u alle 5 (iOS) of 7 (Android) gratis downloads heeft gebruikt, kunt u 3 extra downloads ontvangen door u *in te schrijven voor de mailinglijst*. Een banner met de inschrijvingsoptie verschijnt zodra alle gratis downloads zijn gebruikt.


## Verificatiecode voor OsmAnd Cloud niet ontvangen {#verification-code-for-osmand-cloud-not-received}

Als u de **verificatiecode** niet ontvangt bij het aanmaken van een **OsmAnd Cloud**-account, volg dan deze stappen om het probleem op te lossen:

1. Controleer uw e-mailadres.
    Zorg ervoor dat u het **juiste e-mailadres** heeft ingevoerd. Het e-mailadres moet overeenkomen met het adres dat is gebruikt voor de aankoop van **OsmAnd Pro** of de registratie van uw **OsmAnd Cloud**-account.

2. Controleer spam-mappen.
    Soms wordt de verificatie-e-mail als spam gefilterd. Zoek naar een e-mail van **OsmAnd** in uw mappen **Spam**, **Ongewenst** of **Reclame**.

3. Wacht tot de code arriveert.
    In sommige gevallen kan de e-mail met de activeringscode **vertraagd** zijn. Vermijd **meerdere activeringspogingen** binnen een korte periode, omdat dit extra vertragingen kan veroorzaken.

4. Probeer de code opnieuw te verzenden.
    Ga terug naar het **OsmAnd Cloud inlogscherm** en selecteer **Code opnieuw verzenden** indien beschikbaar. Wacht een paar minuten voordat u een nieuwe code aanvraagt.

5. Verifieer beperkingen van de e-mailserver.
    Als u een **zakelijk of aangepast e-maildomein** gebruikt, controleer dan bij uw **e-mailprovider** of de e-mail niet wordt geblokkeerd. Overweeg een andere e-maildienst te gebruiken (bijv. Gmail, Outlook) als de problemen aanhouden.

<!--
## Aankopen & Betalingen {#purchases--payments}

- Aankoop wordt niet weergegeven
- Aankoop wordt niet hersteld
- Betalingsproblemen
- Restitutiebeleid
- Stapsgewijze oplossingen voor problemen met aankopen.
- Instructies voor het wissen van de cache van Google Play, Huawei AppGallery.
- Wat te doen als de aankoop niet verschijnt of de transactie mislukt.
- Aankoop wordt niet weergegeven - aanbevelingen over hoe u uw account kunt controleren en uw aankopen kunt herstellen.
- Betalingsproblemen - instructies voor het contacteren van Google Play Support in geval van betalingsproblemen.


## FAQ {#faq}

- Kan ik een aankoop overzetten tussen Android en iOS?
- Kan ik een aankoop op meerdere apparaten gebruiken?
- Waarom verschijnt de aankoop niet?
- Waar kan ik betalingsgegevens vinden?
- Kan ik OsmAnd+ overzetten tussen Android en iOS?
- Hoe kan ik aankopen herstellen na het opnieuw installeren van de app?
- Wat is OsmAnd Pro en wat zijn de voordelen?
- Kan ik mijn abonnement activeren zonder Google Play?
- Kan ik mijn aankoop delen met mijn familie?
- Hoe zet ik OsmAnd+ over naar een andere telefoon?
- Waarom verschijnt mijn aankoop niet na opnieuw installeren?
- Waarom kan ik mijn aankoop niet hervatten?
- Hoe weet ik of mijn abonnement actief is?
- Kan ik één aankoop op meerdere apparaten gebruiken?
- Kan ik OsmAnd kopen zonder Google Play?
- Waar kan ik mijn betalingsgegevens vinden?
-->