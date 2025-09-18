---
source-hash: fc1b2c0235716aa50473c8f887e1a5bd1752fd011931da9e6726f958a0e3fca9
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

**OsmAnd Pro** та **Maps+** (*All World Maps* для iOS) — це **кросплатформні підписки**, доступні для Android та iOS, починаючи з OsmAnd 5.0. Кросплатформність означає, що якщо ви придбали підписку, наприклад, в одному з магазинів для Android (Google Play, Huawei AppGallery), ви також можете використовувати її на iOS та у вебверсії.

- Кросплатформну підписку можна використовувати на кількох пристроях і платформах, **якщо вона прив'язана до одного облікового запису OsmAnd Cloud**.

- Одноразові покупки, такі як **OsmAnd+** (Android) та покупки, специфічні для магазину, не переносяться між платформами.

- Ви можете використовувати OsmAnd Pro на 6 пристроях, навіть якщо вони працюють на різних операційних системах.

- Завжди переконуйтеся, що ви використовуєте один і той самий обліковий запис OsmAnd Cloud на всіх пристроях, щоб мати доступ до своїх покупок.

- Для отримання додаткової інформації дивіться: [Покупки на Android](../purchases/android.md), [Покупки на iOS](../purchases/ios.md), [Кросплатформні покупки](../purchases/cross.md) та [Картографічний портал OsmAnd](../purchases/web.md).


### Як прив'язати покупку до облікового запису OsmAnd Cloud {#how-to-link-your-purchase-to-osmand-cloud-account}

1. Якщо у вас **немає** облікового запису OsmAnd Cloud:

    - Відкрийте застосунок OsmAnd на пристрої, де ви зробили покупку.
    - Перейдіть до *Меню → Налаштування → OsmAnd Cloud*.
    - Натисніть **Створити новий обліковий запис**.
    - Після створення облікового запису перейдіть до *Меню OsmAnd → Налаштування → Покупки*.
    - Натисніть **Відновити покупки**, щоб прив'язати вашу покупку до нового облікового запису.

2. Якщо у вас **вже є** обліковий запис OsmAnd Cloud:

    - Переконайтеся, що ви увійшли до свого облікового запису OsmAnd Cloud на пристрої, де ви зробили покупку.
    - Перейдіть до *Меню OsmAnd → Налаштування → OsmAnd Cloud → Я вже маю обліковий запис*
    - Після входу в обліковий запис перейдіть до *Меню OsmAnd → Налаштування → Покупки*.
    - Натисніть **Відновити покупки**, щоб синхронізувати покупку з вашим обліковим записом.


> Для отримання додаткової інформації читайте статті [OsmAnd Cloud](../personal/osmand-cloud.md#cross-platform), [Кросплатформні покупки](../purchases/cross.md).


### Прив'язка покупки до кількох облікових записів OsmAnd Cloud {#purchase-association-with-multiple-osmand-cloud-accounts}


Кросплатформна покупка, така як _Maps+_ та _Pro_, прив'язується до облікового запису OsmAnd Cloud, який був останнім активований на пристрої з оригінальною квитанцією про покупку (з App Store або Google Play). Якщо користувач на цьому пристрої виходить зі свого основного облікового запису (`обліковий запис OsmAnd Cloud A`) і входить до нового (`обліковий запис OsmAnd Cloud B`), система OsmAnd автоматично переносить ліцензію на новий `обліковий запис OsmAnd Cloud B`. В результаті ваш початковий обліковий запис OsmAnd Cloud втрачає статус покупок на інших платформах, оскільки ліцензія може бути активною лише на одному обліковому записі OsmAnd Cloud одночасно.

Технічно це працює так: сама покупка належить вашому Apple ID або обліковому запису Google, а не обліковому запису OsmAnd. Застосунок OsmAnd на пристрої з покупкою просто повідомляє наш сервер, який обліковий запис OsmAnd Cloud наразі активний. Сервер, у свою чергу, надає кросплатформний доступ до цього облікового запису. Таким чином, останній обліковий запис, що увійшов на "головному" пристрої, завжди стає власником ліцензії.

Щоб відновити покупку на правильному обліковому записі (`обліковий запис OsmAnd Cloud A`), ви повинні виконати зворотну дію. На тому ж пристрої, де була зроблена покупка, вам потрібно вийти з неправильного `облікового запису OsmAnd Cloud B` і знову увійти до `облікового запису OsmAnd Cloud A`. Цей процес змусить систему повторно перевірити квитанцію про покупку та знову прив'язати ліцензію до правильного `облікового запису OsmAnd Cloud A`, відновлюючи його кросплатформний статус.

> Для отримання додаткової інформації читайте статті [Кросплатформні покупки](../purchases/cross.md).

## Як придбати та відновити OsmAnd в Huawei AppGallery без мобільних сервісів Huawei {#how-to-buy-and-restore-osmand-in-the-huawei-appgallery-without-huawei-mobile-services}

1. **Придбати OsmAnd**:
   - Спочатку увімкніть *Встановлення з невідомих джерел* у налаштуваннях вашого пристрою. Зазвичай цю опцію можна знайти в **Налаштування → Безпека**.
   - Встановіть [мобільні сервіси Huawei (HMS Core)](https://consumer.huawei.com/za/community/details/Download-the-latest-Huawei-HMS-Core-APK-5-3-0-312/topicId-142217/), які є необхідними для сумісності застосунків.
   - Далі відкрийте *Huawei AppGallery* на сторінці [OsmAnd](https://appgallery.huawei.com/#/app/C101486545) і завантажте застосунок.
   - Спочатку для завантаження доступна лише безкоштовна версія. Щоб зробити покупку, перейдіть до *Меню → Налаштування → Покупки* в OsmAnd і виберіть потрібний тип.
   - Для отримання додаткової інформації відвідайте [цю сторінку](https://osmand.net/docs/user/purchases/android#install-application).

2. **Відновити покупку**:
   - Щоб відновити покупку, увійдіть до *Huawei AppGallery*, використовуючи той самий обліковий запис, що й для покупки OsmAnd.
   - Перевірте історію транзакцій в [історії замовлень Huawei App Gallery](https://consumer.huawei.com/en/support/content/en-us00694318/).
   - Можливо, вам доведеться оновити *Huawei AppGallery* та очистити кеш, щоб уникнути проблем.
   - Щоб відновити покупки, перейдіть до *Меню → Налаштування → Покупки → Відновити покупки* в OsmAnd.
   - Для отримання додаткової інформації дивіться статтю [Покупки на Android](https://osmand.net/docs/user/purchases/android#restore-subscription--in-app).

<!--
- Instructions for setting up Huawei Mobile Services.
- How to buy OsmAnd without HMS Core.
- Restore purchases in the Huawei AppGallery.
-->

## Магазин Amazon закривається - що робити {#amazon-store-is-closing---what-to-do}

**20 серпня 2025 року** Amazon закриє Amazon Appstore для пристроїв Android. Ви можете прочитати офіційне оголошення [тут](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program).

Якщо ви робили покупки через Amazon, вам потрібно буде **перенести свої підписки (Pro, Maps+) або покупки в застосунку (Maps+)** на іншу платформу.

➡️ Наразі [кросплатформне перенесення можливе для підписок та покупок у застосунку](../purchases/cross.md).
❗ **OsmAnd+** (окремий застосунок) не можна перенести між платформами через обліковий запис OsmAnd Cloud. За допомогою звертайтеся до **support@osmand.net**.

## Як відновити покупку плагіна "Топографія" (раніше "Лінії висот") {#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase}

Щоб відновити [плагін "Топографія"](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):

1. Увійдіть до того ж облікового запису Google Play, який використовувався для покупки плагіна "Топографія", та встановіть [застосунок](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
2. Якщо кнопка *Встановити* неактивна, переконайтеся, що застосунки Google Play та OsmAnd оновлені. Очистіть їх кеш, перезавантажте пристрій і спробуйте встановити плагін знову.
3. Після встановлення увімкніть плагін "Топографія" в *[Меню OsmAnd → Плагіни](../plugins/topography.md)*, завантажте необхідні файли в *[Карти та ресурси](../start-with/download-maps.md#maps-and-resources)* та активуйте його через *[меню "Налаштувати карту"](../map/configure-map-menu.md)*.


## Як визначити, чи активний OsmAnd Unlimited {#how-to-identify-if-osmand-unlimited-is-active}

Перейдіть до *Меню → Завантажити карти* та торкніться лічильника карт (поле з написом *Безкоштовна версія. Залишилось X завантажень*). Якщо OsmAnd Unlimited активний, на дисплеї відображатиметься залишок пам'яті пристрою замість кількості безкоштовних завантажень.


## Чи можу я отримати повну версію OsmAnd як окремий застосунок для iOS? {#can-i-get-the-full-version-of-osmand-as-a-separate-app-for-ios}

Для iOS доступна лише одна версія OsmAnd. Щоб отримати доступ до повної версії, вам потрібно розблокувати додаткові функції через покупки в застосунку.


## Що означають 5 або 7 безкоштовних завантажень? {#what-do-5-or-7-free-downloads-mean}

Вам дозволено 5 безкоштовних завантажень на iOS або 7 на Android. Кожне завантаження, чи то карта, оновлення (оновлення карт рахуються як завантаження), голосові пакети чи інші елементи, зменшує доступну кількість. Зверніть увагу, що видалення елементів із завантажень не відновлює кількість безкоштовних завантажень.


## Як отримати додаткові завантаження карт в OsmAnd Free? {#how-can-i-get-additional-map-downloads-in-osmand-free}

Якщо ви використали всі 5 (iOS) або 7 (Android) безкоштовних завантажень, ви можете отримати 3 додаткові завантаження, *підписавшись на розсилку*. Банер з опцією підписки з'явиться, як тільки всі безкоштовні завантаження будуть використані.


## Код підтвердження для OsmAnd Cloud не надійшов {#verification-code-for-osmand-cloud-not-received}

Якщо ви не отримали **код підтвердження** під час створення облікового запису **OsmAnd Cloud**, виконайте наступні кроки для вирішення проблеми:

1. Перевірте свою адресу електронної пошти.
    Переконайтеся, що ви ввели **правильну адресу електронної пошти**. Електронна адреса повинна збігатися з тією, що використовувалася для покупки **OsmAnd Pro** або реєстрації вашого облікового запису **OsmAnd Cloud**.

2. Перевірте папки зі спамом.
    Іноді лист з кодом підтвердження може бути відфільтрований як спам. Шукайте лист від **OsmAnd** у папках **Спам**, **Небажані** або **Промоакції**.

3. Зачекайте, поки код надійде.
    У деяких випадках лист з кодом активації може **затримуватися**. Уникайте **кількох спроб активації** протягом короткого періоду, оскільки це може спричинити додаткові затримки.

4. Спробуйте надіслати код повторно.
    Поверніться на **екран входу в OsmAnd Cloud** і виберіть **Надіслати код повторно**, якщо ця опція доступна. Зачекайте кілька хвилин, перш ніж запитувати інший код.

5. Перевірте обмеження поштового сервера.
    Якщо ви використовуєте **корпоративний або власний домен електронної пошти**, зверніться до свого **поштового провайдера**, щоб переконатися, що лист не блокується. Розгляньте можливість використання іншого поштового сервісу (наприклад, Gmail, Outlook), якщо проблеми не зникають.

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