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




## Затримки визначення місцезнаходження (збої ANR) {#location-delays-anr-crashes}

![Android Auto](@site/static/img/navigation/auto-car/android_auto_troubleshooting_1.png)

Android Auto та OsmAnd можуть одночасно визначати місцезнаходження транспортного засобу, що може спричинити затримку на 3-5 секунд у відображенні інформації у відповідних віджетах або зависання. Щоб уникнути цього, необхідно:

1. Відкрийте налаштування Android Auto.
2. У розділі Налаштування знайдіть Дозволи на місцезнаходження.
3. У цьому розділі відображається список програм, яким дозволено використовувати місцезнаходження в Android Auto. Знайдіть програму OsmAnd і дозвольте використання місцезнаходження.
4. Тепер місцезнаходження буде визначатися лише програмою OsmAnd в Android Auto, що дозволить уникнути затримок у відображенні інформації про місцезнаходження.


## Проблема з орієнтацією карти {#map-orientation-issue}

Орієнтація карти за напрямком руху [перевернута та смикається](https://github.com/osmandapp/OsmAnd/issues/16041). Вирішується увімкненням опції ["Приблизний азимут"](../navigation/guidance/map-during-navigation.md#map-during-navigation):

- Видно лише якщо увімкнено [Розробку OsmAnd](../plugins/development.md).
- Розташовано в *Меню → Налаштування → Профіль → Налаштування навігації → [Карта під час навігації](../navigation/guidance/map-during-navigation.md) → Приблизний азимут*.


## Проблема з регулюванням гучності {#volume-control-issue}

У більшості випадків усі типи **сигналів** залишаються на постійній повній гучності, на яку не впливають одночасні налаштування відтворення аудіо. Щоб змінити гучність навігаційних підказок OsmAnd під час використання Android Auto, перейдіть до *Налаштування → Голос → Гучність голосу* на екрані мультимедійної системи автомобіля.

Якщо цей спосіб не працює, є інший варіант. Щоб налаштувати гучність сповіщень, потрібно увімкнути Google Assistant під час дзвінка. Натисніть і утримуйте кнопку на кермі, яка вмикає Google Assistant, і під час дзвінка відрегулюйте гучність за допомогою панелі приладів або керма.