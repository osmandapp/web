---
source-hash: 312a9f0bef4e4c80ffe9040157d89d4986b31e2d975b67baab520769f30facdb
sidebar_position: 4
title: Кросплатформні покупки
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

## Підтримувані кросплатформні покупки {#supported-cross-platform-purchases}

Наступні продукти OsmAnd наразі підтримують використання на декількох платформах (Android, iOS та Web):

- Підписка **OsmAnd Pro**
- Підписка **Maps+**
- Одноразова покупка в застосунку **Maps+**

Починаючи з **версії OsmAnd 5.1**, випущеної на честь нашого **15-річчя**, кросплатформний доступ було розширено на **Maps+** (раніше відомий як *Unlimited*). Раніше лише підписка [OsmAnd Pro](../personal/osmand-cloud.md#cross-platform) була кросплатформною.

Щоб активувати кросплатформний доступ, покупки повинні бути прив'язані до вашого облікового запису [OsmAnd Cloud](../personal/osmand-cloud.md#login).
Ви можете порівняти всі продукти OsmAnd тут: [відмінності між покупками](https://osmand.net/docs/user/purchases/android/#difference-between-purchases)

| **Тип продукту** | **Кросплатформний** | **Примітки** |
|:-------------------------------|:--------------------|:--------------------------------------------------------------------------|
| **OsmAnd Pro** (підписка) | ✔ | Повністю кросплатформний. Працює на Android, iOS та Web при прив'язці до Cloud. |
| **Maps+** (підписка) | ✔ | Можна використовувати на всіх платформах, але має бути активований через OsmAnd Cloud **на пристрої, де було здійснено покупку**. |
| **Maps+** (одноразова покупка) | ✔ | Можна використовувати на всіх платформах, але має бути активований через OsmAnd Cloud **на пристрої, де було здійснено покупку**. |
| **OsmAnd+** (окремий застосунок) | ✘ | Не переноситься між платформами. Для допомоги зверніться до support@osmand.net. |

## Як це працює {#how-it-works}

Щоб використовувати вашу покупку **OsmAnd Pro**, **Maps+** на різних платформах (Android, iOS або Web), вам потрібно **прив'язати її до вашого облікового запису OsmAnd Cloud**.

### Прив'яжіть свою покупку {#link-your-purchase}

![Прив'язка до хмари](@site/static/img/purchases/cloud_activation.png)

Виконайте цей крок на **пристрої, де ви здійснили покупку** (Android або iOS, версія 5.0 або новіша):

1. Перейдіть до свого облікового запису [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   _Меню → Налаштування → OsmAnd Cloud → Створити новий обліковий запис / У мене вже є обліковий запис_

2. Після входу в систему ваша покупка **Pro** або **Maps+** буде автоматично прив'язана до вашого **облікового запису Cloud** і позначена як **кросплатформна**, *якщо вона раніше не була прив'язана до іншого облікового запису.*

### Активація на іншому пристрої або платформі {#activate-on-another-device-or-platform}

![Maps+ крос](@site/static/img/purchases/cross_purchase.png)
![Maps+ крос](@site/static/img/purchases/cross_purchase_1.png)

1. Перейдіть до свого облікового запису [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   *Меню → Налаштування → OsmAnd Cloud →* ***Увійдіть за допомогою того ж облікового запису***

2. Потім перейдіть до:
   *Меню → Налаштування → Покупки*
   Ваша прив'язана покупка **Pro або Maps+** тепер має бути доступною.

### Усунення несправностей {#troubleshooting}

Якщо ви не бачите свою покупку в списку:

1. Натисніть *Меню → Налаштування → Покупки → Відновити покупки*
2. Переконайтеся, що ви ввійшли в **той самий обліковий запис OsmAnd Cloud**, який використовувався на оригінальному пристрої.

Якщо проблема не зникає, зверніться до **support@osmand.net** та вкажіть:

- Вашу електронну пошту OsmAnd Cloud.
- Використовувані платформи та магазини застосунків.
- Тип покупки (Pro / Maps+ одноразова / Maps+ підписка).

## Приклад {#example}

Ви придбали **Maps+** як одноразову покупку в застосунку в безкоштовній версії OsmAnd з [Amazon Appstore](https://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8).
Пізніше ви вирішили перейти на iPhone і хочете використовувати **Maps+** з [версією OsmAnd для iOS](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257).

Щоб активувати покупку Maps+ на iOS:

1. Відкрийте **версію OsmAnd з Amazon** на своєму оригінальному пристрої.
2. Увійдіть до свого облікового запису [OsmAnd Cloud](../personal/osmand-cloud.md#login):
   *Меню → Налаштування → OsmAnd Cloud → Створити новий обліковий запис / У мене вже є обліковий запис*
3. Встановіть OsmAnd на свій iPhone з [App Store](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257)
4. Увійдіть до **того самого облікового запису OsmAnd Cloud** на своєму iPhone.
5. Перейдіть до *Меню → Налаштування → Покупки* та переконайтеся, що **Maps+** відображається як активний.

Це завершує кросплатформну активацію вашої покупки. Тепер ви можете продовжувати використовувати **Maps+** на своєму новому пристрої.

Насолоджуйтесь використанням Maps+/Pro на різних платформах!

## Пов'язані статті {#related-articles}

- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Усунення несправностей з покупками](../troubleshooting/purchases_payments.md)
- [Відмінності між покупками Android](./android.md#difference-between-purchases-android)
- [Відмінності між покупками iOS](./ios.md#difference-between-purchases-ios)

> *Останнє оновлення: травень 2025*