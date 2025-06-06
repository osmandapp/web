---
source-hash: 0c64dc0300241a6577e627d46bbc944db8b5273561739b69da637def6e4173ab
sidebar_position: 2
sidebar_label:  OsmAnd Cloud
title: OsmAnd Cloud на вебсайті
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


<InfoIncompleteArticle/>

## Огляд {#overview}

[Портал карт OsmAnd](https://osmand.net/map) — це вебсервіс, що надається OsmAnd, який дозволяє користувачам досліджувати карти, керувати своїми даними, планувати та створювати поїздки або просто переглядати карту.

#### Доступ за підпискою {#subscription-accesses}

Портал карт можна використовувати без реєстрації; однак деякі функції доступні виключно для користувачів OsmAnd Pro та OsmAnd Start:

| Функції | Версії |
|--- |--- |
| [Навігаційний маршрут](./planner.md) | Безкоштовно |
| [Створити трек](./planner.md) | Безкоштовно |
| [Погода](./web-map.md) | Безкоштовно |
| [Вибране](./web-map.md) | [Osmand Start](https://osmand.net/blog/start) або <ProFeature/> |
| [Синхронізація OsmAnd Cloud](./web-cloud.md) | [Osmand Start](https://osmand.net/blog/start) або <ProFeature/> |
| [Вебпошук](./web-search.md)|[Osmand Start](https://osmand.net/blog/start) або <ProFeature/>|
| [Треки](./web-map.md) | <ProFeature/> |


## Як почати {#how-to-start}

Якщо у вас є обліковий запис [OsmAnd Pro](../personal/osmand-cloud.md#login) або ви хочете створити обліковий запис [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), вам потрібно виконати наступні кроки:

- Перейдіть на [*Портал карт OsmAnd*](https://osmand.net/map).
- Відкрийте меню **Обліковий запис**.
  - *Увійти*. Введіть адресу електронної пошти, яку ви використовували для створення облікового запису. Для підписок Pro або Start.
  - *Створити обліковий запис*. Для OsmAnd Start.


## Як змінити мову {#how-to-change-language}

Якщо ви хочете змінити мову відображення:

- Вебверсія OsmAnd використовує мову з налаштувань браузера.
- Для Chrome пріоритет має `chrome://settings/languages`.
- Ви можете змінити системну (меню) мову вручну, вибравши:
    *Меню →* ⚙ *→ Вимкнути мову*.


## Керування обліковим записом {#managing-account}

*Загальне меню → Обліковий запис*

Після реєстрації на вебсайті користувачі можуть отримати доступ до інформації свого облікового запису, завантажити резервні копії, вийти з облікового запису, видалити його або змінити адресу електронної пошти.

#### Доступ до облікового запису {#access-account}

#### Резервні копії {#backups}

#### Вийти та видалити {#log-out-and-delete}

#### Змінити адресу електронної пошти {#change-email-address}


## Синхронізація OsmAnd Pro та OsmAnd Start {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** — це [кросплатформна](../troubleshooting/setup.md#cross-platform) платна підписка.
- **OsmAnd Start** — це [безкоштовна реєстрація в OsmAnd Cloud](https://osmand.net/blog/start).

Кросплатформність дозволяє використовувати OsmAnd Pro на всіх платформах *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Веб](https://www.osmand.net/map))*. Для цього вам потрібно:

1. Підписатися на **OsmAnd Pro**. Докладніше про те, як це зробити для [Android тут](../purchases/android.md#how-to-buy), а для [iOS тут](../purchases/ios.md#how-to-buy).
2. Як створити обліковий запис **OsmAnd Start**, читайте [тут](https://osmand.net/blog/start#how-to-create-an-account).
3. Зареєструйте свій обліковий запис [Pro або Start](../troubleshooting/setup.md#cross-platform) на сервері OsmAnd у додатку OsmAnd.
4. Зареєстрована електронна пошта буде вашим логіном для активації OsmAnd Pro на вебплатформі. Спочатку потрібно вибрати пароль для майбутнього входу на вебпортал (будь ласка, використовуйте інструкцію на вебпорталі).

- Введіть свою *електронну пошту* та *пароль* для [osmand.net/map](https://osmand.net/map/).

![Перегляд активації OsmAnd Web](@site/static/img/web/web_pro_activation.png)

- Ваші дані, такі як треки (OsmAnd Pro) та вибране (OsmAnd Pro та OsmAnd Start), з'являться в меню після входу. Вони доступні для відображення на карті. Але вам потрібно [синхронізувати ці дані](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) зі своїх пристроїв.

![Перегляд даних OsmAnd Web](@site/static/img/web/web_data.png)

- Щоб *ЗАВАНТАЖИТИ РЕЗЕРВНУ КОПІЮ* з [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), натисніть поле логіну. У полі логіну ви можете побачити інформацію про файли (загальна кількість файлів, загальний розмір файлів, використане хмарне сховище) та інформацію про обліковий запис (тип підписки, час початку та час закінчення вашої підписки).

![Перегляд файлу резервної копії OsmAnd Web](@site/static/img/web/web_backup_file.png)

Виберіть потрібні файли для завантаження, формат завантажених файлів `.zip` або `.osf` та натисніть кнопку *ЗАВАНТАЖИТИ РЕЗЕРВНУ КОПІЮ*:

![Перегляд файлу резервної копії OsmAnd Web](@site/static/img/web/web_backup_file_1.png)

Також є кнопка для *виходу* з облікового запису.

- *ВИЙТИ*, *ВИДАЛИТИ ВАШ ОБЛІКОВИЙ ЗАПИС* або *Змінити електронну пошту* ви також знайдете в полі логіну. Щоб відкрити *ВИДАЛИТИ ВАШ ОБЛІКОВИЙ ЗАПИС* або *Змінити електронну пошту*, потрібно натиснути *Небезпечна зона*.

![Перегляд файлу резервної копії OsmAnd Web](@site/static/img/web/web_backup_file_2.png)


## Хмарні дані {#cloud-data}

[Треки та Вибране](web-map.md#tracks).
<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->



> *Цю статтю востаннє оновлено у вересні 2024 року*