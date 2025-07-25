---
source-hash: a1d35656711a4d2803b5867ef4417c01911d4220b4edb0e5bbacbfaf0c57d72e
sidebar_position: 11
title:  OsmAnd Cloud
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import Poll from '@site/src/components/home/Poll';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Огляд {#overview}

:::tip subscribe  
&nbsp;<ProFeature/> Щоб отримати доступ до всіх функцій OsmAnd Cloud, підпишіться на **OsmAnd Pro** для [Android](../purchases/android.md#osmand-pro) або [iOS](../purchases/ios.md#osmand-pro).  
:::  

:::note cross-platform  
OsmAnd Cloud — це незалежний сервіс хмарного сховища, який *не прив'язаний* до певної версії платформи Android, iOS чи веб.  
:::  

OsmAnd Cloud дозволяє **зберігати та синхронізувати особисті налаштування та дані програми** на кількох пристроях. Ви можете отримати доступ до цих даних на будь-якому пристрої, на якому встановлено OsmAnd, включаючи настільну програму. Усі зміни, внесені в програмі, можуть бути **синхронізовані між платформами**, забезпечуючи безперешкодний доступ до збережених даних.


## Кросплатформність {#cross-platform}

OsmAnd Cloud дозволяє створювати резервні копії, відновлювати та синхронізувати дані між Android, iOS та [веб-версією](../web/index.md). Завдяки кросплатформним можливостям ви можете передавати **налаштування профілю**, **треки**, **обране**, **редагування/нотатки OSM** тощо між пристроями. Крім того, **веб-версія** дозволяє планувати маршрути та зберігати їх для подальшого використання на підключених пристроях.  

OsmAnd підтримує **кросплатформне використання** між *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))* за допомогою наступних кроків:

1. **Зареєструйте [обліковий запис](#login) в OsmAnd Cloud**:
 
    1.1 **Підпишіться на OsmAnd Pro для повного доступу до Cloud.**  
   Дізнайтеся більше про придбання для [Android](../purchases/android.md#how-to-buy) або [iOS](../purchases/ios.md#how-to-buy).

    2.1 **Використовуйте безкоштовний план OsmAnd Start** для хмарного резервного копіювання обраного, налаштувань та редагувань/нотаток OSM.  
   Безкоштовний ліміт сховища становить **5 МБ**.

2. **Використовуйте зареєстровану електронну пошту** як логін для активації [OsmAnd Pro](../purchases/cross.md), [OsmAnd Maps+](../purchases/cross.md) або OsmAnd Start на інших платформах.

:::note  
**OsmAnd Pro** — це кросплатформна підписка, яка включає всі функції OsmAnd. Ви можете придбати її в одному магазині (наприклад, Google Play, Huawei AppGallery) і використовувати також на **iOS**. Ваша **[зареєстрована електронна пошта](#login)** є вашим логіном для активації OsmAnd Pro [на різних платформах](../purchases/cross.md). 
:::


## Вхід {#login}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,register_opr_create_new_account"/> / <Translate android="true" ids="register_opr_have_account"/>*  

![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_1.png)  ![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_17.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud"/> → <Translate ios="true" ids="shared_string_get"/> / <Translate ios="true" ids="register_opr_have_account"/>*

![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_first_screen_ios.png)  ![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_2.png)

</TabItem>

</Tabs>

Щоб створити резервну копію та відновити дані, ви повинні увійти до свого облікового запису OsmAnd Cloud.  

- Для реєстрації або входу вам потрібна активна підписка [OsmAnd Pro](#cross-platform) або [OsmAnd Start](#osmand-start). Ви можете перевірити статус своєї підписки в програмі OsmAnd:  
  *Меню → Налаштування → Покупки*.

- Ваш обліковий запис Cloud **має бути зареєстрований на пристрої, на якому було здійснено покупку**.

- *Процес входу*:  
  - Введіть свою адресу електронної пошти та натисніть **Продовжити**.  
  - На вашу електронну пошту буде надіслано код підтвердження.
  - Прочитайте [тут](../troubleshooting/purchases_payments.md#verification-code-for-osmand-cloud-not-received), що робити, якщо ви не отримали код підтвердження.  
  - Використовуйте цей обліковий запис для входу в OsmAnd Cloud на інших пристроях.

- Якщо у вас є підписка **OsmAnd Pro**, ви можете продовжувати доступ до свого облікового запису OsmAnd Cloud протягом **одного додаткового року** після закінчення терміну дії підписки.  

:::tip Усунення проблем з входом
Якщо у вас виникли проблеми під час реєстрації:

- Переконайтеся, що ви реєструєтеся на **тому ж пристрої**, на якому було здійснено покупку.  
- Перевірте своє **підключення до Інтернету** перед повторною спробою.

:::


## OsmAnd Start {#osmand-start}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,purchases"/>*  

![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_1_andr.png)   ![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,purchases"/>*

![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_1_ios.png)   ![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_2_ios.png)  

</TabItem>

</Tabs>  

План **OsmAnd Start** надає безкоштовний доступ до **OsmAnd Cloud** з обмеженими базовими функціями та 5 МБ сховища для зберігання та синхронізації ваших **Обраного, Налаштувань та редагувань і нотаток OpenStreetMap (OSM)**. Цей план доступний для користувачів [OsmAnd Free або Maps+](../purchases/index.md).  

Функції, включені в OsmAnd Start:

- [Безкоштовне резервне копіювання обраного](../personal/favorites.md#free-cloud-backup) – Зберігайте важливі місця та маршрути в Обраному та отримуйте доступ до них з будь-якого пристрою, підключеного до OsmAnd Cloud.  
- [Безкоштовне резервне копіювання налаштувань](../personal/profiles.md#free-cloud-backup) – Зберігайте налаштування програми OsmAnd в OsmAnd Cloud та відновлюйте їх на інших пристроях для безперебійної роботи.  
- [Редагування/нотатки OSM](../plugins/osm-editing.md) – Долучайтеся до OpenStreetMap, створюючи та редагуючи дані карти, додаючи нотатки та зберігаючи зміни безпосередньо в OsmAnd Cloud.

### Як активувати OsmAnd Start {#how-to-activate-osmand-start}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

**Для використання OsmAnd Start вам потрібен обліковий запис OsmAnd Cloud**.

Щоб використовувати OsmAnd Start, виконайте наступні кроки:

- **Зареєструйте обліковий запис OsmAnd Cloud** - Дивіться інструкції в розділі [Вхід](#login).
- Відкрийте *Меню → Налаштування → Покупки*.
- Виберіть **OsmAnd Start** з доступних опцій.
- **Створіть резервну копію**, щоб почати зберігати свої дані в OsmAnd Cloud.

:::note Обмеження підписки
Якщо у вас вже є підписка **OsmAnd Pro** або **активний обліковий запис OsmAnd Cloud**, план **OsmAnd Start** буде недоступний.
:::


## Остання синхронізація {#last-sync}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud"/>*  

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_16.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_8-1.png)  

</TabItem>

</Tabs>  

**Остання синхронізація** — це випадаюче меню, яке показує, скільки часу минуло з моменту останньої синхронізації даних між цим пристроєм та хмарою.

- *Локальні зміни*. Показує загальну кількість локальних змін, які не завантажено в хмару.
- *Хмарні зміни*. Загальна кількість змін, завантажених в хмару з інших пристроїв з моменту останньої синхронізації.
- *Конфлікти*. Загальна кількість невідповідностей між локальними та хмарними змінами.
- *Синхронізувати зараз*. Виберіть цю опцію, щоб синхронізувати всі вибрані розділи даних у меню [налаштувань](#settings), які ви змінили на цьому пристрої та в хмарі.  

**Синхронізувати зараз** поєднує кнопки *Завантажити все* та *Вивантажити все* в меню Зміни, в розділах [Локальні та Хмарні](#local-and-cloud). **Конфлікти** таким чином не синхронізуються.

<!--
#### Syncing GPX Collections {#syncing-gpx-collections}

OsmAnd supports grouping GPX tracks into **collections**, which allows you to organize related tracks under a single label.

When using **OsmAnd Cloud**, GPX collections are:

- Backed up along with your personal data.
- Synchronized across devices.
- Restored with the same **collection structure** (including the name and all associated tracks).

> *This ensures that your route organization is preserved, even after reinstalling the app or switching to a new device.*

To use this feature:

1. Create or assign tracks to a collection via *Menu → My Places → Tracks*.
2. Go to *Menu → Settings → OsmAnd Cloud → Back up data* and enable synchronization.
3. On another device, sign in with the same OsmAnd Cloud account and restore the data.
-->

## Кошик {#trash}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,help_article_personal_storage_name,shared_string_trash"/>*

![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_1_andr.png)  ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_trash"/>*

![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/trash_ios.png) ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/trash_2_ios.png)

</TabItem>

</Tabs>  

Функція **Кошик** дозволяє переглядати та керувати файлами, які були видалені з OsmAnd Cloud. Вона призначена для запобігання випадкового видалення файлів та незворотної втрати ваших даних.

- **Перегляд файлів**. *Кошик* містить список усіх раніше видалених файлів з папки *Хмарні зміни*. Усі файли містять інформацію про дату та час їх видалення. Вони згруповані за місяцями та відсортовані від найновіших до найстаріших файлів, що залишилися в Кошику.
- **Очистити кошик**.  

    ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_3_andr.png)  

    Щоб звільнити місце від усіх файлів, видалених з Cloud, ви можете скористатися функцією *Очистити кошик*. Вона доступна з *меню з трьома крапками* у верхньому правому куті екрана Кошика. Файли видаляються назавжди, без можливості їх відновлення.

- **Керування окремими файлами**.  

    ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_4_andr.png)  

    - *<Translate ios="true" ids="restore_from_trash"/>*. За допомогою цієї функції ви можете відновити файли в OsmAnd Cloud. Після натискання вибраний файл переміщується з Кошика в розділі *Зміни* до папки *Хмара*.
    - *<Translate ios="true" ids="download_to_device"/>*. Ця функція дозволяє завантажити файл на пристрій. Якщо вибраний файл з тим же ім'ям присутній у папці, відображається діалогове вікно *Файл вже існує*, в якому ви можете вибрати варіант дії: *Замінити* або *Зберегти обидва*.
    - *<Translate ios="true" ids="shared_string_delete_immediately"/>*. Ця функція дозволяє назавжди видалити вибраний файл без можливості його відновлення. Будьте обережні при використанні цієї функції, оскільки операція незворотна.


## Налаштування {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/deletion_option.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_3-2.png)  

</TabItem>

</Tabs>

Цей розділ призначений для редагування та керування вашим OsmAnd Cloud.  


### Виберіть дані для резервного копіювання {#select-data-to-back-up}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_10.png)  

</TabItem>

</Tabs>

У цьому меню ви можете вибрати, які дані та папки завантажити в Cloud:

1. **Налаштування**. Ця вкладка включає всі ваші налаштування, такі як загальні параметри, конкретні профілі, швидкі дії, POI та налаштування уникнення доріг.

2. **Мої місця**. Ця вкладка містить дані з [меню Мої місця](../personal/myplaces), включаючи обране, треки, нотатки OSM, маркери та інші елементи.

3. **Ресурси**. Тут ви можете вибрати резервне копіювання ресурсів, таких як обране, інформація про маршрутизацію, голосові підказки та додаткові елементи.

Усі [карти](../start-with/download-maps.md) зберігаються на пристрої, на якому вони були раніше завантажені. OsmAnd Cloud зберігає лише інформацію про те, які карти у вас є, та дату їх останньої зміни.


### Керування сховищем {#manage-storage}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_version_history"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_19-1.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,manage_storage"/>*

![Backup data screen iOS](@site/static/img/personal/osmand-cloud/cloud_ios_13.png)  

</TabItem>

</Tabs>  

Розділ меню **<Translate android="true" ids="backup_version_history"/>** (Android) / **<Translate ios="true" ids="manage_storage"/>** (iOS) відображає інформацію про те, скільки з 3,15 гігабайт пам'яті в *Налаштуваннях*, *Моїх місцях* та *Ресурсах* використовується. Ви можете видалити зміни до окремих типів даних з OsmAnd Cloud, але в цьому випадку дію не можна скасувати.  


### Обліковий запис {#account}

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_9-1.png)

Цей розділ містить інформацію про те, який з ваших облікових записів підключено до OsmAnd Cloud, і включає кнопку виходу. Щоб створити резервну копію або відновити дані, вам потрібно буде увійти знову.


### Опція видалення {#deletion-option}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_danger_zone"/>*

![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_8.png)   ![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_7.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_danger_zone"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_11.png)   ![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_12.png)

</TabItem>

</Tabs>  

Дії, які ви можете виконати в розділі **Небезпечна зона** меню Налаштувань, є незворотними і тому вимагають особливої уваги.

1. **Видалити всі мої дані**. Ця опція дозволяє видалити всі дані, раніше завантажені в OsmAnd Cloud, включаючи всю історію версій. Зверніть увагу, що після видалення ці дані не можуть бути відновлені.

2. **Видалити старі версії**. Ця опція дозволяє видалити історію змін для раніше завантажених даних. Поточна версія даних буде збережена на сервері, але ви не зможете повернутися до попередніх версій.

3. **Видалити обліковий запис**. Щоб видалити обліковий запис, вам потрібно пройти процес верифікації. Одноразовий пароль для підтвердження буде надіслано на вашу адресу електронної пошти, зареєстровану в OsmAnd Cloud.
    - Усі дані з OsmAnd Cloud будуть видалені. Дані на пристрої залишаються недоторканими.
    - Ваш обліковий запис та всі дані облікового запису будуть видалені.
    - Додаткові пристрої будуть вилогінені з OsmAnd Cloud та втратять доступ до платних функцій.  

    ![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_deletion_2_andr.png)


## Список змін {#list-of-changes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_11.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_9-1.png)  

</TabItem>

</Tabs>  

У розділі [Остання синхронізація](#last-sync) випадаючого меню торкніться будь-якого елемента, щоб відкрити розділ Зміни. Цей розділ містить три вкладки, що відображають усі доступні зміни для редагування. Якщо список порожній, з моменту останньої синхронізації не відбулося жодних змін.

- Кожен елемент у списку **Зміни** включає **дату та точний час** останньої синхронізації, а також опції для миттєвого завантаження або вивантаження відповідної версії.

- **Завантаження змін з хмарного сховища перезапише локальні зміни**. Аналогічно, вивантаження локальних даних видаляє відповідні зміни з хмарної версії.

- У кожній вкладці дані **сортуються за типом та алфавітом**, щоб допомогти вам швидко знайти конкретні елементи, особливо при керуванні кількома файлами в OsmAnd Cloud.


### Локальні та Хмарні {#local-and-cloud}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,download_tab_local"/> / <Translate android="true" ids="shared_string_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,download_tab_local"/> / <Translate ios="true" ids="shared_string_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_6.png)  

</TabItem>

</Tabs>

- **Локальні** - Ви можете синхронізувати всі локальні зміни, які ще не в хмарі, натиснувши **Вивантажити все**. Крім того, ви можете вивантажити конкретні зміни, вибравши їх зі списку та обравши **Вивантажити локальну версію**.  

    Зміни, які успішно завантажені в хмару, автоматично видаляються з вкладки *Зміни → Локальні* через встановлений період.  

- **Хмарні** - Вкладка **Хмарні** відображає список змін, доступних для завантаження з хмарного сховища. Ви можете завантажити всі зміни одночасно за допомогою кнопки внизу екрана або завантажити їх окремо.  


### Конфлікти {#conflicts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,cloud_conflicts"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_13-2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,cloud_conflicts"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_7.png)  

</TabItem>

</Tabs>

**Конфлікт** виникає, коли **Локальна версія** та **Хмарна версія** файлу не збігаються.  

- Ви можете або **замінити Хмарну версію** локальними змінами, або **завантажити Хмарну версію** на свій пристрій.

- Коли конфлікт вирішено, він автоматично видаляється зі списку. Обробка зазвичай займає лише кілька хвилин.

- Натискання на файл у папці **Конфлікти** відображає деталі про **Локальну** та **Хмарну** версії, включаючи час останньої зміни та завантаження.

- Ви можете вибрати одну з наступних дій:  
  - **Вивантажити локальну версію** – Замінює Хмарну версію локальним файлом.  
  - **Завантажити хмарну версію** – Замінює локальний файл Хмарною версією.


<!--
## Action Guides {#action-guides}

- Restore your data after purchases expire.
- It is absolutely crucial that your Cloud account be registered on the device where the purchase was originally made.
- Access for one more year after the subscription ends.

:::tip
If you have problems with the registration of your account:

- Check if you are registering on the device on which the purchase was made.
- You need to have an active Internet connection.

:::  
-->

## Пов'язані статті {#related-articles}

- [Покупки на Android](../purchases/android.md)
- [Покупки на iOS](../purchases/ios.md)
- [Кросплатформні покупки](../purchases/cross.md)
- [Карти та ресурси](../personal/maps-resources.md)

> *Останнє оновлення: Травень 2025*