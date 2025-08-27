---
source-hash: e245d0a8d185e0eb4570fd1b908d1c8ccda0b97d189a853407a98e84348a2b57
sidebar_position: 7
title: Android Auto
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Locatievertragingen (ANR-crashes) {#location-delays-anr-crashes}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_troubleshooting_1.png)

Android Auto en OsmAnd kunnen tegelijkertijd de locatie van het voertuig detecteren, wat een vertraging van 3-5 seconden kan veroorzaken bij het weergeven van informatie in de gerelateerde widgets of een bevriezing. Om dit te voorkomen, is het noodzakelijk om:

1. De Android Auto-instellingen te openen.
2. Onder Instellingen, Locatierechten te vinden.
3. Dit gedeelte toont een lijst met apps die locatietoegang mogen gebruiken in Android Auto. Zoek de OsmAnd-app en sta het gebruik van locatie toe.
4. Locatie wordt nu alleen gedetecteerd door de OsmAnd-app in Android Auto, waardoor vertragingen bij het weergeven van locatie-informatie worden voorkomen.

## Probleem met kaartoriëntatie {#map-orientation-issue}

De kaartoriëntatie in de bewegingsrichting is [omgedraaid en schokt](https://github.com/osmandapp/OsmAnd/issues/16041). Opgelost door de optie ["Geschatte peiling"](../navigation/guidance/map-during-navigation.md#map-during-navigation) in te schakelen:

- Alleen zichtbaar als [OsmAnd Development](../plugins/development.md) is ingeschakeld.
- Te vinden in *Menu → Instellingen → Profiel → Navigatie-instellingen → [Kaart tijdens navigatie](../navigation/guidance/map-during-navigation.md) → Geschatte peiling*.

## Probleem met volumeregeling {#volume-control-issue}

In de meeste gevallen blijven alle soorten **signalen** op een constant vol volume, wat niet wordt beïnvloed door de gelijktijdige instellingen voor audioweergave. Om het volume van de OsmAnd-navigatieaanwijzingen aan te passen bij gebruik van Android Auto, ga je naar *Instellingen → Stem → Stemvolume* op het scherm van het multimediasysteem van het voertuig.

Als deze methode niet werkt, is er een andere optie. Om het meldingsvolume aan te passen, moet je Google Assistent inschakelen tijdens een gesprek. Houd de knop op het stuur ingedrukt die Google Assistent inschakelt, en pas tijdens het gesprek het volume aan via het dashboard of het stuur.