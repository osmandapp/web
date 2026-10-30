---
source-hash: 6ec692ef2d49e44b3cbbd765dc588f2913d7072ca92f833de726302514647064
sidebar_position: 4
title:  Кросплатформні покупки
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

Наразі наступні продукти OsmAnd підтримують використання на кількох платформах (Android, iOS та Web):

- Підписка **OsmAnd Pro**  
- Підписка **Maps+**  
- Одноразова покупка **Maps+** у застосунку

Починаючи з **версії OsmAnd 5.1**, випущеної на честь нашого **15-річчя**, кросплатформний доступ було розширено до **Maps+** (раніше відомої як *Unlimited*). Раніше кросплатформною була лише підписка [OsmAnd Pro](../personal/osmand-cloud.md#cross-platform).  

Щоб активувати кросплатформний доступ, покупки мають бути прив'язані до вашого облікового запису [OsmAnd Cloud](../personal/osmand-cloud.md#login).  
Порівняти всі продукти OsmAnd можна тут: [різниця між покупками](https://osmand.net/docs/user/purchases/android/#difference-between-purchases-android)

| **Тип продукту**               | **Кросплатформність** | **Примітки**                                                                 |
|-------------------------------|--------------------|--------------------------------------------------------------------------|
| **OsmAnd Pro** (підписка) | ✔                  | Працює після входу в OsmAnd Cloud на Android, iOS і Web, якщо прив'язано до Cloud. |
| **Maps+** (підписка)      | ✔                  | Можна використовувати на всіх платформах, але потрібно активувати через OsmAnd Cloud **на пристрої, з якого здійснено покупку**.     |
| **Maps+** (одноразова покупка) | ✔                  | Можна використовувати на всіх платформах, але потрібно активувати через OsmAnd Cloud **на пристрої, з якого здійснено покупку**. |
| **OsmAnd+** (окремий застосунок)  | ✘                  | За замовчуванням не переноситься між платформами, потребує ручної реєстрації покупки в обліковому записі OsmAnd Cloud. Для допомоги звертайтеся на support@osmand.net. |


## Як це працює {#how-it-works}

Щоб використовувати покупку **OsmAnd Pro**, **Maps+** на різних платформах (Android, iOS або Web), потрібно **прив'язати її до облікового запису OsmAnd Cloud**.

### Прив'яжіть свою покупку {#link-your-purchase}

![Прив'язка до Cloud](@site/static/img/purchases/cloud_activation.png)

Виконайте цей крок на **пристрої, з якого здійснено покупку** (Android або iOS, версія 5.0 або новіша):

1. Перейдіть до свого [облікового запису OsmAnd Cloud](../personal/osmand-cloud.md#login):  
   _Меню → Налаштування → OsmAnd Cloud → Створити новий обліковий запис / У мене вже є обліковий запис_

2. Після входу ваша покупка **Pro** або **Maps+** автоматично прив'яжеться до вашого **облікового запису Cloud** і буде позначена як **кросплатформна**, *якщо раніше її не було прив'язано до іншого облікового запису.*



### Активація на іншому пристрої або платформі {#activate-on-another-device-or-platform}

![Кросплатформність Maps+](@site/static/img/purchases/cross_purchase.png)
![Кросплатформність Maps+](@site/static/img/purchases/cross_purchase_1.png)

1. Перейдіть до свого [облікового запису OsmAnd Cloud](../personal/osmand-cloud.md#login):  
   *Меню → Налаштування → OsmAnd Cloud →* ***Увійдіть з тим самим обліковим записом***

2. Потім перейдіть до:  
   *Меню → Налаштування → Покупки*  
   Ваша прив'язана покупка **Pro або Maps+** тепер має бути доступна.


### Усунення неполадок {#troubleshooting}

Якщо ви не бачите своєї покупки у списку:

1. Натисніть *Меню → Налаштування → Покупки → Відновити покупки*  
2. Переконайтеся, що ви увійшли в **той самий обліковий запис OsmAnd Cloud**, який використовувався на початковому пристрої.

Якщо проблема не зникає, напишіть на **support@osmand.net** і вкажіть:

- Електронну адресу вашого OsmAnd Cloud.
- Платформу(и) та магазин(и) застосунків, які використовувалися.
- Тип покупки (Pro / одноразова Maps+ / підписка Maps+).


### Ручний перенос {#manual-transfer}

Якщо вашу покупку не вдається активувати автоматично через OsmAnd Cloud, служба підтримки — **support@osmand.net** — може перенести її вручну.

Щоб надіслати запит на ручний перенос, надайте:
- Електронну адресу вашого OsmAnd Cloud.
- Номер транзакції або замовлення покупки.
- Також рекомендується скріншот, на якому видно придбаний продукт.

Без номера транзакції або замовлення покупки та зареєстрованого облікового запису OsmAnd Cloud служба підтримки зазвичай не може перенести покупку.

Покупки, здійснені понад 10 років тому, перенести неможливо.


### Покупки та кілька облікових записів {#purchases-and-multiple-accounts}

Кросплатформна покупка прив'язується до облікового запису OsmAnd Cloud, який востаннє було активовано на пристрої з оригінальною квитанцією про покупку (з App Store або Google Play). Якщо ви вийдете зі свого основного облікового запису та увійдете в новий на цьому пристрої, система автоматично перенесе ліцензію на новий обліковий запис. У результаті ваш початковий обліковий запис OsmAnd Cloud втрачає статус покупок на інших платформах, оскільки ліцензія може бути активною лише в одному обліковому записі OsmAnd Cloud одночасно. Докладніше [тут](../troubleshooting/purchases_payments.md#purchase-association-with-multiple-osmand-cloud-accounts).


## Приклад {#example}

Ви придбали **Maps+** як одноразову покупку у застосунку в безплатній версії OsmAnd з [Google Play](https://play.google.com/store/apps/details?id=net.osmand).  
Пізніше ви вирішуєте перейти на iPhone і хочете використовувати **Maps+** у [версії OsmAnd для iOS](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257).

Щоб активувати покупку Maps+ на iOS:

1. Відкрийте OsmAnd на своєму початковому пристрої Android.
2. Увійдіть до свого [облікового запису OsmAnd Cloud](../personal/osmand-cloud.md#login):  
   *Меню → Налаштування → OsmAnd Cloud → Створити новий обліковий запис / У мене вже є обліковий запис*
3. Встановіть OsmAnd на свій iPhone з [App Store](https://apps.apple.com/app/osmand-maps-travel-navigate/id934850257)
4. Увійдіть у **той самий обліковий запис OsmAnd Cloud** на своєму iPhone.
5. Перейдіть до *Меню → Налаштування → Покупки* і переконайтеся, що **Maps+** відображається як активна.

Це завершує кросплатформну активацію вашої покупки. Тепер ви можете й надалі користуватися **Maps+** на новому пристрої.

Приємного користування Maps+/Pro на різних платформах!


## Пов'язані статті {#related-articles}

- [OsmAnd Cloud](../personal/osmand-cloud.md)  
- [Усунення неполадок із покупками](../troubleshooting/purchases_payments.md)  
- [Різниця між покупками Android](./android.md#difference-between-purchases-android)
- [Різниця між покупками iOS](./ios.md#difference-between-purchases-ios)  

