---
source-hash: e245d0a8d185e0eb4570fd1b908d1c8ccda0b97d189a853407a98e84348a2b57
sidebar_position: 7
title:  Android Auto
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';




## Standortverzögerungen (ANR-Abstürze) {#location-delays-anr-crashes}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_troubleshooting_1.png)

Android Auto und OsmAnd können gleichzeitig den Standort des Fahrzeugs ermitteln, was zu einer Verzögerung von 3-5 Sekunden bei der Anzeige von Informationen in den entsprechenden Widgets oder zum Einfrieren führen kann. Um dies zu vermeiden, ist es notwendig:

1. Öffnen Sie die Einstellungen von Android Auto.
2. Suchen Sie unter Einstellungen die Standortberechtigungen.
3. Dieser Abschnitt zeigt eine Liste von Apps, die den Standort in Android Auto verwenden dürfen. Suchen Sie die OsmAnd-App und erlauben Sie die Verwendung des Standorts.
4. Der Standort wird nun nur noch von der OsmAnd-App in Android Auto ermittelt, wodurch Verzögerungen bei der Anzeige von Standortinformationen vermieden werden.


## Problem mit der Kartenausrichtung {#map-orientation-issue}

Die Kartenausrichtung in Bewegungsrichtung ist [umgedreht und wackelt](https://github.com/osmandapp/OsmAnd/issues/16041). Dies wird durch Aktivieren der Option ["Ungefähre Peilung"](../navigation/guidance/map-during-navigation.md#map-during-navigation) behoben:

- Nur sichtbar, wenn [OsmAnd Entwicklung](../plugins/development.md) aktiviert ist.
- Befindet sich in *Menü → Einstellungen → Profil → Navigationseinstellungen → [Karte während der Navigation](../navigation/guidance/map-during-navigation.md) → Ungefähre Peilung*.


## Problem mit der Lautstärkeregelung {#volume-control-issue}

In den meisten Fällen bleiben alle Arten von **Signalen** auf konstanter voller Lautstärke, die durch die gleichzeitigen Audiowiedergabeeinstellungen nicht beeinflusst wird. Um die Lautstärke der OsmAnd-Navigationsansagen bei Verwendung von Android Auto zu ändern, gehen Sie auf dem Bildschirm des Fahrzeug-Multimediasystems zu *Setup → Stimme → Stimmlautstärke*.  

Wenn diese Methode nicht funktioniert, gibt es eine andere Option. Um die Benachrichtigungslautstärke einzustellen, müssen Sie Google Assistant während eines Anrufs einschalten. Halten Sie die Taste am Lenkrad gedrückt, die Google Assistant einschaltet, und stellen Sie während des Anrufs die Lautstärke über das Armaturenbrett oder das Lenkrad ein.