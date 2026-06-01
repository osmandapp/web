---
source-hash: 37966c34f2ca7cf0b51174feba09ac86bc8ff2c9dbcc286058b56a245ebf5aff
sidebar_position: 2
sidebar_label:  Account
title: OsmAnd Account
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

## Огляд {#overview}

Вхід за допомогою облікового запису OsmAnd перетворює [Планувальник OsmAnd Web](https://osmand.net/map) з простого переглядача карт на ваш особистий робочий простір. Той самий обліковий запис, який ви використовуєте в мобільному додатку, підключає вебсайт до ваших даних OsmAnd Cloud та покупок, тому ви можете отримати доступ до збереженого вмісту та підписок в одному місці на вебсайті.


## Авторизація {#authorization}

### Реєстрація {#sign-up}

Щоб отримати доступ до функцій OsmAnd Web, вам потрібно створити обліковий запис. Використовуйте процес реєстрації:

- Перейдіть на [**Картографічний портал OsmAnd**](https://osmand.net/map).
- Відкрийте меню **Обліковий запис**.
- Виберіть **Створити новий обліковий запис**. Відкривається діалог «Створити новий обліковий запис».
- У полі **Електронна пошта** введіть адресу електронної пошти, яку ви хочете використовувати для свого облікового запису OsmAnd, і натисніть **Продовжити**.
- На цю адресу електронної пошти надсилається код підтвердження. Перевірте вхідні (і папку спам, якщо потрібно).
- У наступному діалозі введіть код підтвердження та натисніть **Продовжити**, щоб підтвердити електронну пошту. Якщо ви не отримали код, скористайтеся посиланням **Я не отримав код підтвердження** і дотримуйтесь інструкцій.

Після перевірки коду ваш вебобліковий запис створюється, і ви автоматично входите в систему.

![Веб-реєстрація](@site/static/img/web/web_sign_up.png) ![Веб-реєстрація](@site/static/img/web/web_ver_code.png)


### Вхід {#login}

Якщо у вас вже є обліковий запис OsmAnd, ви можете увійти на [**Картографічний портал OsmAnd**](https://osmand.net/map) за допомогою тієї самої електронної пошти та пароля. Перейдіть до меню **Обліковий запис** і виберіть опцію **Увійти**. У діалозі, що відкривається, введіть адресу електронної пошти, пов’язану з вашим обліковим записом OsmAnd, введіть пароль і виберіть **Продовжити**. Після успішного входу відкривається панель OsmAnd Account, і ви можете працювати з даними, покупками та налаштуваннями.


## Керування обліковим записом {#managing-account}

### Мої дані {#my-data}

Ви можете завантажити резервні копії, які були створені та синхронізовані з вашого мобільного пристрою через **OsmAnd Cloud**.  
Перейдіть до: *Головне меню → Обліковий запис → Мої дані (OsmAnd Cloud) → Завантажити все*

У цьому розділі відображається:

- Кількість файлів, що зберігаються у вашій хмарі.
- Загальний обсяг використаного сховища.
- Доступний простір у хмарному сховищі.

> 💡 Тут з'являться лише резервні копії, створені на пристроях, де увімкнено **OsmAnd Cloud**.

Якщо ви хочете зберегти копію всіх ваших даних, скористайтеся **Завантажити все**. Це відкриває діалог, де ви можете:

- Вибрати, які дані експортувати (наприклад, *Мої місця, Налаштування, Ресурси, Карти*),
- Вибрати формат експорту (*ZIP або OSF*).
- Переглянути оцінку розміру завантаження та часу.

Натисніть **Завантажити резервну копію**, щоб розпочати експорт і зберегти архів на комп'ютер.

![Веб-обліковий запис](@site/static/img/web/web_download_all.png)

### Платежі та покупки {#payments-and-purchases}

Цей розділ показує всі продукти та підписки, пов’язані з вашим обліковим записом OsmAnd. Щоб відкрити його,  
Перейдіть до: *Головне меню → Обліковий запис → Платежі та покупки*

Тут ви можете переглянути список усіх покупок, пов’язаних з вашою електронною поштою:
- Безплатні та платні плани (наприклад, OsmAnd Start або OsmAnd Pro).
- Одноразові продукти (наприклад, Maps+ або спеціальні видання).
- Підписки, що поновлюються щомісяця або щорічно.

Для кожного елемента списку показується:
- Назва продукту та іконка.
- Тип – щомісячна підписка, щорічна підписка або одноразовий платіж.
- Статус – *Активний, Закінчився або Скасовано*.
- Інформація про дату.

Якщо ви натиснете на продукт у списку, відкриється сторінка з деталями. Там ви можете побачити, де був придбаний продукт (*Google Play, Apple App Store, Huawei AppGallery, Amazon* або *OsmAnd Web*) і знайти посилання або інструкції щодо керування або скасування підписки в відповідному магазині. Якщо продукт був придбаний на OsmAnd Web (FastSpring), на сторінці деталей відображається посилання **Керувати підпискою**, яке відкриває портал керування обліковим записом FastSpring, де ви можете оновити спосіб оплати, скасувати або повторно активувати підписку, змінити план або завантажити рахунки.

Якщо до вашого облікового запису ще не пов’язані покупки, цей розділ показує порожній стан з повідомленням **У вас немає покупок** і кнопкою **Дізнатися більше**, яка веде на сторінку з доступними планами OsmAnd та опціями оновлення.

Щоб дізнатися більше про використання ваших покупок на різних платформах, прочитайте про [кросплатформний доступ](../purchases/cross.md).

![Веб-обліковий запис](@site/static/img/web/web_purchases.png)

### Хмарна синхронізація {#cloud-sync}

Хмарна синхронізація дозволяє отримати доступ до даних, які ви синхронізували з OsmAnd Cloud, безпосередньо на [Вебпорталі карт](https://osmand.net/map/). Після входу за допомогою облікового запису OsmAnd Start або OsmAnd Pro вебсайт відображає обрані, треки та файли резервних копій, які ви раніше синхронізували з мобільного додатку. Це простий спосіб переглянути вміст хмари на більшому екрані та завантажити резервні копії, коли потрібно.

Ці елементи стають видимими в меню одразу після входу на вебсайт. Щоб оновити цю інформацію, вам потрібно синхронізувати дані з пристроїв за допомогою дії [Синхронізувати зараз](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) у мобільному додатку.

Доступність хмарної синхронізації залежить від типу вашого облікового запису:
- [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) – синхронізує [Обрані](../web/web-favorites.md) і відображає їх на вебсайті.
- OsmAnd Pro – синхронізує [Треки](../web/web-tracks.md), обрані та [резервні копії](#my-data), і розблоковує повний вебдоступ до хмарних даних.

![Веб-трек](@site/static/img/web/web_track_start.png) ![Веб-трек](@site/static/img/web/web_track_pro.png)

### OsmAnd Cloud {#osmand-cloud}

Коли ви увійшли в систему, розділ OsmAnd Cloud з’являється в Меню → Налаштування та включає Зміни та Смітник.

Опція **Зміни** показує хронологічний список файлів, збережених у вашому обліковому запису OsmAnd Cloud. Елементи групуються за місяцями та включають назву файлу, тип зміни (наприклад, додано, змінено або видалено), час останнього оновлення та пристрій, який його створив. Для кожного запису ви можете відкрити меню з трьома крапками та вибрати *Завантажити*, щоб зберегти вибраний файл на комп'ютер, або *Видалити*.

Опція **Смітник** містить файли, видалені з OsmAnd Cloud. Список також групується за місяцями та показує, коли кожен файл був видалений і з якого пристрою. Використовуйте меню з трьома крапками поруч із файлом, щоб *Завантажити* копію, *Відновити зі смітника* (повернути файл до OsmAnd Cloud, щоб він знову став доступним у ваших даних) або *Видалити негайно*, щоб безповоротно видалити його. Це допомагає запобігти випадковій втраті даних, дозволяючи водночас звільнити хмарне сховище, коли ви впевнені, що файл більше не потрібен. Ви також можете очистити всі видалені елементи одразу, натиснувши іконку Смітника в заголовку панелі Смітника. Це відкриває діалог **Очистити смітник**, де ви підтверджуєте видалення, щоб безповоротно видалити всі файли зі смітника.

![Веб-хмара](@site/static/img/web/web_changes.png) ![Веб-хмара](@site/static/img/web/web_trash.png)

### Підключені застосунки {#connected-apps}

Розділ **Підключені застосунки** дозволяє зв’язувати зовнішні сервіси з вашим обліковим записом OsmAnd. Наразі підтримується інтеграція з [Garmin Connect™](https://connect.garmin.com/app/), яка забезпечує автоматичну синхронізацію активностей Garmin. Щоб відкрити його, перейдіть до: *OsmAnd Web Map → Обліковий запис → Підключені застосунки*.

Інтеграція Garmin Connect доступна лише для користувачів [OsmAnd Pro](https://docs.osmand.net/docs/user/purchases/). Якщо у вас немає активної підписки Pro, вибір елемента Garmin Connect відкриває сторінку з цінами.

Щоб підключити обліковий запис Garmin Connect™, натисніть **Підключити**. Вас буде перенаправлено на сторінку авторизації Garmin, де потрібно увійти та надати доступ до ваших даних Garmin Connect™. Під час авторизації можна увімкнути синхронізацію останніх активностей для імпорту даних за останні 30 днів. Активності старше 30 днів не можуть бути імпортовані автоматично.

Після підключення OsmAnd створює окрему теку Garmin Connect у [розділі Треки](./web-tracks.md) і починає автоматичний імпорт активностей. Нові активності, записані в Garmin Connect™, додаються до цієї теки без ручного імпорту. Тека також синхронізується з мобільними застосунками OsmAnd, коли ввімкнено [OsmAnd Cloud](../personal/osmand-cloud.md).

Меню Garmin Connect містить два розділи: **Мої дані** та **Налаштування**. У розділі Мої дані можна переглянути кількість синхронізованих активностей, відкрити останню отриману активність або відкрити сторінку активностей Garmin Connect™ за допомогою кнопки **Переглянути на Garmin Connect™**. У Налаштуваннях можна налаштувати, які типи активностей слід синхронізувати за допомогою опції Активності для синхронізації.

Активності згруповані в категорії, такі як Велосипед, Ходьба та Біг, Водні види спорту та Зимові та інші види спорту. Окремі типи активностей можна вмикати або вимикати. За замовчуванням після підключення вибрані всі підтримувані типи активностей.

Щоб від’єднати обліковий запис Garmin Connect™, перейдіть до *Налаштування → Від’єднати* та підтвердіть дію. Раніше імпортовані треки залишаються в теці Garmin Connect, але нові активності більше не синхронізуватимуться.

![Garmin Connect](@site/static/img/web/garmin_connect_new.png) ![Garmin Connect](@site/static/img/web/garmin_connect_2_new.png)


## Вирішення проблем {#troubleshooting}

### Скидання пароля {#reset-password}

Якщо ви не пам’ятаєте пароль, скористайтеся посиланням **У мене немає пароля або я його забув** у діалозі входу. Це відкриває панель **Змінити або скинути пароль**. Введіть адресу електронної пошти, яку ви використовували для створення облікового запису, і натисніть **Продовжити**. На цю електронну пошту надсилається повідомлення з кодом підтвердження. На наступному екрані введіть код підтвердження та новий пароль, потім виберіть **Продовжити**, щоб підтвердити. Коли код прийнято, пароль оновлюється, і ви можете увійти в OsmAnd Web з новими обліковими даними.

![Веб-обліковий запис](@site/static/img/web/web_password.png)

### Зміна адреси електронної пошти {#change-email-address}

Щоб оновити адресу електронної пошти,
Перейдіть до *Головне меню → Обліковий запис → Електронна пошта → ⋮ → Змінити електронну пошту*

З’являється діалог Змінити електронну пошту. На поточну адресу електронної пошти надсилається код підтвердження. Введіть цей код у поле **Код зі старої електронної пошти**, вкажіть нову адресу в **Нова електронна пошта**, потім виберіть **Далі**. З міркувань безпеки на вашу нову адресу електронної пошти надсилається повідомлення про підтвердження, що електронна пошта облікового запису оновлена.

![Веб-обліковий запис](@site/static/img/web/web_email_new.png)

### Вихід та видалення облікового запису {#logout-and-delete}

![Веб-обліковий запис](@site/static/img/web/web_logout_new.png)

Панель OsmAnd Account містить елементи керування для завершення поточного вебсеансу та безповоротного видалення облікового запису.

Щоб вийти, відкрийте OsmAnd Account і скористайтеся кнопкою **Вийти** у верхньому правому куті панелі (іконка зі стрілкою, що виходить з квадрата). Вибір Вийти закриває панель облікового запису та завершує активний сеанс на вебсайті.

Щоб видалити обліковий запис, виберіть **Видалити обліковий запис** у нижній частині панелі OsmAnd Account. З’являється діалог підтвердження з повідомленням *«Ви впевнені, що хочете це зробити?»* та коротким поясненням, що всі дані та деталі облікового запису будуть видалені з OsmAnd Cloud, а вторинні пристрої втратять доступ до платних функцій. На адресу електронної пошти облікового запису надсилається код підтвердження. Введіть код у поле Код з електронної пошти та виберіть **ВИДАЛИТИ ЦЕЙ ОБЛІКОВИЙ ЗАПИС**, щоб завершити процес. Ця операція є постійною і не може бути скасована.

![Веб-обліковий запис](@site/static/img/web/web_delete.png)

<!--
## OsmAnd Pro and OsmAnd Start Sync {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** is a [cross-platform](../troubleshooting/setup.md#initial-setup) paid subscription. 
- **OsmAnd Start** is a [free OsmAnd Cloud registration](https://osmand.net/blog/start).

The cross-platform capability allows you to use OsmAnd Pro on all platforms *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. To do this you need to:

1. Subscribe to **OsmAnd Pro**. Read more about how to do this for [Android here](../purchases/android.md#how-to-buy), and for [iOS here](../purchases/ios.md#how-to-buy).
2. How to create **OsmAnd Start** account read more [here](https://osmand.net/blog/start#how-to-create-an-account).
3. Register your [Pro or Start account](/docs/user/personal/osmand-cloud/#cross-platform) on the OsmAnd server inside OsmAnd app.
4. The registered email will be your login to activate OsmAnd Pro on the web platform. At first, time needed to choose a password for future entering the web portal (please, use the instruction on the web portal).


- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  

Choose needed files for downloading, `.zip` or `.osf` format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)  

There is also a button to *logout* of the account.  

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)  


## Cloud data {#cloud-data}

[Tracks and Favorites](web-map.md#tracks).

## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->

## Пов’язані статті {#related-articles}

- [Вступ](./web-overview.md)
- [Кросплатформні покупки](../purchases/cross.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Треки](./web-tracks.md)