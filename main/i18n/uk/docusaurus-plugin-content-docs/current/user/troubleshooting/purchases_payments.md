---
source-hash: 7c4671ddc27bfd8d4ca740b871d3d605e6d6fb13c5bf804282724603b5068740
sidebar_position: 2
title:  Покупки та платежі
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Кросплатформні покупки {#cross-platform-purchases}

**OsmAnd Pro** та **Maps+** (*Усі мапи світу* для iOS) — це **кросплатформні підписки**, доступні для Android та iOS, починаючи з OsmAnd 5.0. Кросплатформність означає, що якщо ви купуєте підписку, наприклад, в одному з магазинів Android (Google Play, Huawei AppGallery), ви також можете використовувати її на iOS та у веб-версії.

- Кросплатформну підписку можна використовувати на кількох пристроях і платформах, **якщо вона прив'язана до того ж облікового запису OsmAnd Cloud**.

- Одноразові покупки, такі як **OsmAnd+** (Android) та покупки, специфічні для магазину, не переносяться між платформами.

- Ви можете використовувати OsmAnd Pro на до 6 пристроях, навіть якщо вони працюють під різними операційними системами.

- Завжди переконайтеся, що ви використовуєте той самий обліковий запис OsmAnd Cloud на всіх пристроях для доступу до своїх покупок.

- Для отримання додаткової інформації дивіться: [Покупки на Android](../purchases/android.md), [Покупки на iOS](../purchases/ios.md) та [Портал мап OsmAnd](https://www.osmand.net/map).


### Як прив'язати покупку до облікового запису OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Якщо у вас **немає** облікового запису OsmAnd Cloud:

    - Відкрийте програму OsmAnd на пристрої, де ви здійснили покупку.
    - Перейдіть до *Меню → Налаштування → OsmAnd Cloud*.
    - Натисніть **Створити новий обліковий запис**.
    - Після створення облікового запису перейдіть до *Меню OsmAnd → Налаштування → Покупки*.
    - Натисніть **Відновити покупки**, щоб прив'язати покупку до нового облікового запису.

2. Якщо у вас **вже є** обліковий запис OsmAnd Cloud:

    - Переконайтеся, що ви увійшли до облікового запису OsmAnd Cloud на пристрої, де ви здійснили покупку.  
    - Перейдіть до *Меню OsmAnd → Налаштування → OsmAnd Cloud → У мене вже є обліковий запис*
    - Після входу до облікового запису перейдіть до *Меню OsmAnd → Налаштування → Покупки*.
    - Натисніть **Відновити покупки**, щоб синхронізувати покупку з вашим обліковим записом.


> Для отримання додаткової інформації прочитайте статтю [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform).


## Як купити та відновити OsmAnd у Huawei AppGallery без Huawei Mobile Services {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Купити OsmAnd**:
   - Спочатку увімкніть *Встановлення з невідомих джерел* у налаштуваннях вашого пристрою. Зазвичай цю опцію можна знайти в **Налаштуваннях → Безпека**.
   - Встановіть [Huawei Mobile Services (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), що є важливим для сумісності програм.
   - Далі відкрийте *Huawei AppGallery* на сторінці [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) та завантажте програму.
   - Спочатку доступна лише безкоштовна версія для завантаження. Щоб здійснити покупку, перейдіть до *Меню OsmAnd → Налаштування → Покупки* та виберіть потрібний тип.
   - Для отримання додаткової інформації відвідайте [цю сторінку](https://osmand.net/docs/user/purchases/android#install-application).

2. **Відновити покупку**:
   - Щоб відновити покупку, увійдіть до *Huawei AppGallery*, використовуючи той самий обліковий запис, пов'язаний з вашою покупкою OsmAnd.
   - Перевірте історію транзакцій в [історії замовлень Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Можливо, вам знадобиться оновити *Huawei AppGallery* та очистити кеш, щоб уникнути проблем.
   - Щоб відновити покупки, дотримуйтесь *Меню → Налаштування → Покупки → Відновити покупки* в OsmAnd.
   - Для отримання додаткової інформації дивіться статтю [Покупки на Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions for setting up Huawei Mobile Services.
- How to buy OsmAnd without HMS Core.
- Restore purchases in the Huawei AppGallery.
-->

## Магазин Amazon закривається - що робити {#amazon-store-is-closing---what-to-do}

20 серпня 2025 року Amazon закриє Amazon Appstore для пристроїв Android — деталі [тут](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

Вам потрібно перенести покупки, зроблені через Amazon, на інші платформи.  
Наразі [можливо перенести підписки, покупки в програмі та програму OsmAnd+](../purchases/cross.md).  



## Як відновити покупку плагіна Топографія (раніше Контурні лінії) {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Щоб відновити [плагін Топографія](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Увійдіть до того ж облікового запису Google Play, який використовувався для покупки плагіна Топографія, та встановіть [програму](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Якщо кнопка *Встановити* неактивна, переконайтеся, що програми Google Play та OsmAnd оновлені. Очистіть їхній кеш, перезавантажте пристрій і спробуйте встановити плагін знову.
3. Після встановлення увімкніть плагін Топографія в *[Меню OsmAnd → Плагіни](../plugins/topography.md)*, завантажте необхідні файли в *[Мапи та ресурси](../start-with/download-maps.md#maps-and-resources)* та активуйте його через *[Меню Налаштувати мапу](../map/configure-map-menu.md)*.


## Як визначити, чи активний OsmAnd Unlimited {#how-to-identify-if-osmand-unlimited-is-active}

Перейдіть до *Меню → Завантажити мапи* та натисніть лічильник мап (поле з написом *Безкоштовна версія. Залишилося X завантажень*). Якщо OsmAnd Unlimited активний, на дисплеї буде показано вільне місце на пристрої замість кількості безкоштовних завантажень.


## Чи можу я отримати повну версію OsmAnd як окрему програму для iOS? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Для iOS доступна лише одна версія OsmAnd. Щоб отримати доступ до повної версії, вам потрібно розблокувати додаткові функції за допомогою покупок у програмі.


## Що означають 5 або 7 безкоштовних завантажень? {#what-do-5-or-7-free-downloads-mean}

Вам дозволено 5 безкоштовних завантажень на iOS або 7 на Android. Кожне завантаження, будь то мапа, оновлення (оновлення мап зараховуються як завантаження), голосові пакети або інші елементи, зменшує доступну кількість. Зверніть увагу, що видалення елементів із ваших завантажень не відновлює кількість безкоштовних завантажень.


## Як я можу отримати додаткові завантаження мап у OsmAnd Free? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Якщо ви використали всі 5 (iOS) або 7 (Android) безкоштовних завантажень, ви можете отримати 3 додаткові завантаження, *підписавшись на розсилку*. Банер з опцією підписки з'явиться, коли всі безкоштовні завантаження будуть використані.


## Код підтвердження для OsmAnd Cloud не отримано {#verification-code-for-osmand-cloud-not-received}

Якщо ви не отримуєте **код підтвердження** під час створення облікового запису **OsmAnd Cloud**, виконайте наступні кроки для вирішення проблеми:  

1. Перевірте свою електронну адресу.  
    Переконайтеся, що ви ввели **правильну електронну адресу**. Електронна адреса повинна відповідати тій, яка використовувалася для покупки **OsmAnd Pro** або реєстрації вашого облікового запису **OsmAnd Cloud**.  

2. Перевірте папки зі спамом.  
    Іноді електронний лист з підтвердженням може бути відфільтрований як спам. Шукайте електронний лист від **OsmAnd** у папках **Спам**, **Небажана пошта** або **Акції**.  

3. Дочекайтеся надходження коду.  
    У деяких випадках електронний лист з кодом активації може **затримуватися**. Уникайте **багаторазових спроб активації** протягом короткого періоду, оскільки це може спричинити додаткові затримки.  

4. Спробуйте надіслати код повторно.  
    Поверніться до **екрана входу в OsmAnd Cloud** та виберіть **Надіслати код повторно**, якщо доступно. Зачекайте кілька хвилин, перш ніж запитувати інший код.  

5. Перевірте обмеження поштового сервера.  
    Якщо ви використовуєте **корпоративний або власний домен електронної пошти**, зверніться до свого **постачальника послуг електронної пошти**, щоб переконатися, що електронний лист не блокується. Розгляньте можливість використання іншої поштової служби (наприклад, Gmail, Outlook), якщо проблеми не зникають.

<!--
## Purchases & Payments {#purchases--payments}

- Purchase Not Showing
- Purchase Not Restoring
- Payment Issues
- Refund Policy
- Step-by-step solutions to problems with purchases.
- Instructions for clearing the cache of Google Play, Huawei AppGallery.
- What to do if the purchase does not appear or the transaction fails.
- Purchase not showing up - recommendations on how to check your account and restore your purchases.
- Payment issues - instructions for contacting Google Play Support in case of paymentissues.


## FAQ {#faq}

- Can I transfer a purchase between Android and iOS?
- Can I use a purchase on multiple devices?
- Why does the purchase not appear?
- Where can I find payment details?
- Can I transfer OsmAnd+ between Android and iOS?
- How can I restore purchases after reinstalling the app?
- What is OsmAnd Pro and what are its advantages?
- Can I activate my subscription without Google Play?
- Can I share my purchase with my family?
- How do I transfer OsmAnd+ to another phone?
- Why doesn't my purchase appear after reinstalling?
- Why can't I resume my purchase?
- How do I know if my subscription is active?
- Can I use one purchase on multiple devices?
- Can I buy OsmAnd without Google Play?
- Where can I find my payment details?
-->