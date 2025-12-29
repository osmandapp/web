---
source-hash: a52737232a71758590dfdb7cfbb68622999fbec373babd2b56b429093731d394
sidebar_position: 1
sidebar_label: Introductie
title: Introductie tot de Web Planner
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

<!--
<InfoIncompleteArticle/>
-->

## Overzicht {#overview}

De **Web Planner**, ook wel de [**OsmAnd Kaartportaal**](https://osmand.net/map) genoemd, is een browsergebaseerde uitbreiding van de OsmAnd mobiele app. Hiermee kunnen gebruikers wereldwijde kaarten bekijken, routes plannen, navigatie simuleren, persoonlijke gegevens beheren en toegang krijgen tot gesynchroniseerde inhoud van hun apparaten via de cloud.

Ontworpen als een cross-platform metgezel voor OsmAnd voor Android en iOS, helpt de Web Planner gebruikers bij het plannen van reizen, analyseren van tracks, bekijken van terrein en beheren van bestanden met elke desktop- of tabletbrowser — zonder een app te installeren.

OsmAnd Web is nauw geïntegreerd met de **OsmAnd Cloud**-dienst, die het synchroniseren van favorieten, tracks en back-ups over apparaten en platforms mogelijk maakt. Gebruikers met een **OsmAnd Start** (gratis) of **OsmAnd Pro** (betaald) account kunnen volledig profiteren van dit ecosysteem door gegevens te synchroniseren tussen mobiel en web. U vindt een gedetailleerde vergelijking van *Start* en *Pro* functies in het [Abonnements Toegang](#subscription-access) gedeelte hieronder.

> **Opmerking:** Zelfs zonder inloggen of het verifiëren van uw account, kunt u nog steeds verschillende kernfuncties van de Web Kaartportaal gebruiken, waaronder: [Navigatieroute](./planner.md), [Routeplanner](./planner.md), [Weer-overlays](./web-map.md#weather-on-the-web), en [Instellingen](#settings).

<!--
After the structure of this section is approved, some links should be updated.
-->

## Belangrijkste Functies {#key-features}

De Web Planner biedt de volgende belangrijkste mogelijkheden voor werken met kaarten en persoonlijke gegevens in de browser: 

- [Kaart](./web-map.md) met wereldwijde dekking en hoogwaardige vectorgegevens.
- [Routeplanning](./planner.md) met voetganger, auto, fiets en andere profielen.
- [Navigatie](./planner.md) voorbeeld met stapsgewijze instructies.
- [Zoeken](./web-search.md) en [verkennen](./web-search.md#explore) van populaire plaatsen in de buurt.
- Weergave van [Favorieten](./web-map.md#favorites), [Tracks](./web-map.md#tracks), en [POI's](./web-map.md#poi-overlay) op de kaart.
- [Weer-overlays](./web-weather.md): wind, temperatuur en druk.
- [Terreinlagen](./web-map.md#terrain): schaduwreliëf, hellingen en hoogte-aanzicht.
- [Track Analyzer](./web-tracks-analyzer.md) voor hoogte- en snelheidsprofielen.
- Volledige toegang tot gesynchroniseerde gegevens via [OsmAnd Cloud](./web-cloud#cloud-sync).
- Ondersteuning voor import/export van bestanden (GPX: tracks, favorieten).
- Naadloze integratie met **OsmAnd Pro** en **OsmAnd Start**.

<!--
After the structure of this section is approved, some links should be updated.
-->


### Abonnements Toegang {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

De Web Kaartportaal ondersteunt verschillende toegangsniveaus: zonder inloggen, met OsmAnd Start, en met OsmAnd Pro. De onderstaande tabel vat samen welke functies beschikbaar zijn op elk niveau, zodat u snel kunt zien wat u al heeft en wat beschikbaar wordt met een account of een upgrade. Dit overzicht is bedoeld om u te helpen beslissen of u een account nodig heeft en, zo ja, welke optie het beste past bij hoe u OsmAnd gebruikt.

| Functie | Beschikbaar In |
|--------|--------------|
| [Navigatieroute](./planner.md) | Zonder Inloggen |
| [Routeplanner](./planner.md) | Zonder Inloggen |
| [Weer-overlays](./web-weather.md) | Zonder Inloggen |
| [Instellingen](./web-map.md#settings) | Zonder Inloggen |
| [Kaartmenu Configureren](./web-map.md#configure-map-menu) ([POI's](./web-map.md#poi-overlay), [Favorieten](./web-map.md#favorites), [Tracks](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/blog/start) of <ProFeature/> |
| [Kaartmenu Configureren](./web-map.md#configure-map-menu) ([Terrein](./web-map.md#terrain))| <ProFeature/> |
| [OsmAnd Cloud Sync](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/blog/start) of <ProFeature/> |
| [Webzoekopdracht, Populaire Plaatsen](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) of <ProFeature/> |
| [Tracks-mappen en -laag](./web-tracks.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## Hoe te Beginnen {#how-to-start}

Om toegang te krijgen tot de volledige functies van de OsmAnd Web Planner, moet u inloggen met een OsmAnd Cloud-account.

- Als u al een [**OsmAnd Pro**](../personal/osmand-cloud.md#login)-abonnement heeft of een gratis [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start)-account wilt aanmaken, volg dan deze stappen:

1. Ga naar het [**OsmAnd Kaartportaal**](https://osmand.net/map).
2. Open het **Account**-menu:
   - **Inloggen**: Voer het e-mailadres in dat gekoppeld is aan uw Pro- of Start-abonnement, of
   - **Account aanmaken**: Registreer voor een gratis OsmAnd Start-account. Voor een gedetailleerde stapsgewijze handleiding voor het aanmaken van een nieuw account, zie het [OsmAnd Account](./web-cloud) artikel.

![Web Account](@site/static/img/web/web_account.png)

<!--

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

-->


## Gerelateerde Artikelen {#related-articles}

- [Eerste Stappen](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Web Aankopen](../purchases/web.md)
- [Cross-Platform Aankopen](../purchases/cross.md)