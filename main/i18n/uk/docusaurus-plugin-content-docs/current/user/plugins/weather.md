---
source-hash: e5fd3ea3059108d94fc75d50becf312a8c006b80209c72a142b97f415bb426ca
sidebar_position: 17
title:  Погода
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



## Огляд {#overview}

:::info Платна функція
 <ProFeature/> Плагін Погода — це [платна функція](../purchases/index.md) застосунку OsmAnd.
:::

Інтерактивні шари карти погоди в застосунку OsmAnd дозволяють відстежувати температуру, атмосферний тиск, хмарність, швидкість вітру та опади у вашому місті або будь-якому іншому місці на інтерактивній глобальній карті. Плагін Погода надає погодинні прогнози погоди на 7 днів вперед безпосередньо на карті OsmAnd. Інформацію про погоду також можна завантажити для використання в автономному режимі.

Джерелом даних для плагіна Погода є [Глобальна система прогнозування](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast), що експлуатується Національною метеорологічною службою США (NWS) та Європейським центром середньострокових прогнозів погоди ([ECMWF](https://www.ecmwf.int/)).

## Необхідні параметри налаштування {#required-setup-parameters}

Для відображення погоди на карті OsmAnd *потрібні* наступні налаштування:

**1.** [Придбайте **підписку OsmAnd Pro**](../purchases/).

**2.** [Увімкніть](../plugins/#enable--disable) плагін Погода в розділі *Плагіни* *Головного меню*.

**3.** [Виберіть **одиниці вимірювання**](#weather-settings) для погодних явищ.

**4.** [Відобразіть **шари погоди**](#customize-weather-layers) на карті за допомогою пункту меню Погода в меню Налаштувати карту (не забудьте зменшити масштаб).

**5.** [Перегляньте **прогноз погоди**](#weather-forecast-screen) для вибраної області (це меню дозволяє не захаращувати головний екран карти OsmAnd шарами погоди).

**6.** [Завантажте](#offline-forecast) прогноз погоди, якщо ви плануєте використовувати його в автономному режимі.

**7.** [Увімкніть **віджети погоди**](#weather-widgets), якщо ви хочете бачити актуальну інформацію про погоду щодня.

:::caution Необхідний рендеринг
Плагін Погода доступний лише з механізмом рендерингу карт [Версії 2](../personal/global-settings/#map-rendering-engine) (OpenGL).
:::

## Відображення погоди на карті {#display-weather-on-the-map}

### Екран прогнозу погоди {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *Увімкнений плагін → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *Увімкнений плагін → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_dashbord_ios_2.png)

</TabItem>

</Tabs>

Головне бічне меню має спеціальний пункт меню **Погода**, який забезпечує швидкий доступ до всіх інструментів погоди. *Екран прогнозу погоди* відображає інформацію про *температуру*, *атмосферний тиск*, *швидкість вітру*, *хмарність* та *опади*.

У нижній частині екрана знаходиться *панель інструментів погоди*. Ви можете використовувати кнопки дня та повзунок часу, щоб встановити точний час, на який буде відображатися прогноз погоди.

### Налаштування шарів погоди {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *Увімкнений плагін → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Weather Dashboard Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *Увімкнений плагін → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Weather Dashboard in iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>

</Tabs>

Щоб відобразити шари погоди на екрані карти OsmAnd, потрібно скористатися *меню Налаштувати карту*. Перейдіть до меню, знайдіть у списку пункт *Погода* (доступний лише тоді, коли плагін увімкнено) і торкніться його.

У цьому меню ви можете змінити **видимість** та [налаштування](#weather-settings) для кожного шару, вибрати тип контурних ліній та завантажити [офлайн-прогноз погоди на 7 днів](#offline-forecast) (*доступно лише для Android тут*).

### Налаштування погоди {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *Головне меню → Плагіни → Погода → Налаштування*
- *Головне меню → Налаштування → Профіль → Налаштування плагінів → Погода*

![Weather Settings Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Weather Settings 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Головне меню → Налаштування → Профіль → Плагіни → Погода*

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Weather Settings iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>

Важливо вирішити, в яких одиницях вимірювання вам зручно бачити [дані про погоду](#weather-layers) на карті та в розділі [Віджети погоди](#weather-widgets) на екрані. Ви можете вибрати відповідні одиниці вимірювання для кожного параметра або використовувати значення за замовчуванням (*лише для iOS*). У версії OsmAnd для iOS ви також можете увімкнути опцію офлайн-прогнозу, щоб уникнути використання мобільного трафіку під час подорожей.

:::note
У версії OsmAnd для iOS ви можете змінити одиниці вимірювання та рівень прозорості в меню, яке відкривається після довгого натискання на піктограму потрібного шару карти.
:::

### Шари погоди {#weather-layers}

Всі дані про погоду представлені як окремі шари карти. Щоб побачити шари погоди на карті, потрібно зменшити масштаб, вони доступні лише при масштабах 2-12. Шари погоди використовують [палітри погоди](../personal/color-palette-schemes.md#weather) для розфарбовування карти, ці палітри можуть бути [змінені](../personal/color-palette-schemes.md#edit-palette-file) за потреби.

| |
|------------|
| **Шар опадів** відображає інформацію про погодні явища, коли вода в різних агрегатних станах падає з неба на землю. Опади — це дощ, сніг, мокрий сніг або град. Шкала опадів градуюється в міліметрах (або дюймах) води, яка випадає на 1 квадратний метр за 24 години. 1 мм дощу відповідає 1 літру води на 1 квадратний метр. |
|![Precipitation sheme](@site/static/img/plugins/weather/precipitation.png)|
| **Температура** виражає кількісне сприйняття тепла та холоду. Вона вимірюється в градусах. В OsmAnd ви можете вибрати між шкалою Цельсія та Фаренгейта. |
|![Temperature sheme](@site/static/img/plugins/weather/temperature.png)|
| **Вітер** — це рух повітря, спричинений нерівномірним нагріванням Землі сонцем та її власним обертанням. Вітри можуть варіюватися від легкого бризу до стихійних лих, таких як урагани та торнадо. В OsmAnd швидкість вітру може відображатися в метрах за секунду (м/с), кілометрах за годину (км/год), милях за годину (миль/год) та вузлах (вуз). |
|![Wind sheme](@site/static/img/plugins/weather/wind.png)|
| **Хмарність** — це середня частка неба, вкрита хмарами, при спостереженні з певного місця. Вона вимірюється в %. |
|![Clouds sheme](@site/static/img/plugins/weather/clouds.png)|
| **Атмосферний тиск** спричинений вагою повітря над точкою вимірювання. Він зменшується зі збільшенням висоти. Атмосферний тиск може відображатися в гектопаскалях (гПа), міліметрах ртутного стовпа (мм рт. ст.) та дюймах ртутного стовпа (дюйм рт. ст.). |
| ![Pressure sheme](@site/static/img/plugins/weather/pressure.png) |
| **Анімація вітру** включає динамічні зображення, що показують напрямок та швидкість вітру в регіоні. |
| ![Wind annimation](@site/static/img/plugins/weather/wind_annimation.gif) |

### Комбінування карт {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Combine Weather layers on Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Combine Weather layers on iOS](@site/static/img/plugins/weather/weather_contours.png)

</TabItem>

</Tabs>

Щоб отримати повну інформацію про погоду, ви можете використовувати шари карти окремо або легко комбінувати їх. Ізолінії одного конкретного типу також можна додати до шару Погода. Просто торкніться кнопки *Шари* або *Ізолінії* на екрані.

### Швидкі дії для шарів {#quick-actions-for-layers}

![QA Weather layers](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Щоб перемикати видимість шарів погоди, ви можете використовувати кнопки *Швидкі дії* на екрані карти. Загальні налаштування для відображення або приховування шарів можна знайти в окремому розділі [Погода](#weather-forecast-screen) *Головного меню*. У статті [Швидкі дії](../widgets/quick-action.md#configure-map) ви знайдете список шарів, доступних для відображення. Якщо вам потрібен швидкий доступ до цієї конфігурації карти, використовуйте інструмент *Користувацька кнопка*.

- Перейдіть до [Додати дію](../widgets/quick-action.md#custom-buttons): *Меню → Налаштувати екран → Користувацькі кнопки → Швидка дія → Додати дію → Налаштувати карту*.
- Додайте одну або кілька кнопок швидких дій, щоб змінити видимість певного шару погоди.

## Офлайн-прогноз {#offline-forecast}

### Кеш {#cache}

Коли вкладка Погода відкрита, якщо не вказано інше, необхідна інформація про погоду завантажується з мережі. Ви можете використовувати попередньо завантажений [прогноз погоди](#download-forecast) на своїх пристроях. Інформація про погоду автоматично кешується після завантаження і може використовуватися в автономному режимі до закінчення терміну дії прогнозу.

:::tip
На пристроях Android ви можете перевірити, коли були завантажені дані про погоду, торкнувшись *віджета Погода*. Плагін OsmAnd Development має бути увімкнено.
![Date of weather cash android](@site/static/img/plugins/weather/weather_cash_andr.png)
:::

### Завантажити прогноз {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_android.png) ![Weather plugin in Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Weather plugin in iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>

Для кожної країни ви можете завантажити **Офлайн-прогноз** (до 7 днів). Чим ближче до поточної дати, тим точнішим він буде. Якщо ви хочете використовувати прогноз погоди офлайн, вам слід завантажити дані про погоду заздалегідь.

У меню завантаження прогнозу ви можете отримати інформацію та встановити параметри для оновлення даних про погоду.

- **Створено** (*Android*) / **Оновлено** (*iOS*). Показує, коли було зроблено останнє оновлення.
- **Наступне оновлення** (*iOS*). Коли буде доступне наступне оновлення.
- **Розмір** (*Android*) / **Розмір оновлень** (*iOS*). Показує розмір усіх оновлень.
- Кнопка **Оновити** (*Android*) / **Оновити зараз** (*iOS*). Коли активна, дозволяє оновлювати дані про погоду вручну, не чекаючи автоматичного оновлення.
- **Частота оновлення** (*iOS*). Може бути встановлена на 12-годинну, 24-годинну або щотижневу.
- *Оновлювати лише через Wi-Fi* (*iOS*). Увімкніть цю опцію, якщо ви не хочете використовувати мобільні дані для завантажень.
- Кнопка **Видалити** *кошик* (*Android*) / **Видалити прогноз** (*iOS*). Дозволяє видалити всі дані прогнозу для цього регіону.
- Кнопка **Редагувати** *олівець* (*Android*). Дозволяє перейменувати файл погоди.

:::info
OsmAnd генерує новий прогноз кожні 6 годин.
:::

## Віджети погоди {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Виберіть панель → <Translate android="true" ids="shared_string_weather"/>*

![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Weather widgets on Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Виберіть панель → <Translate ios="true" ids="shared_string_weather"/>*

![Weather widgets on iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)

</TabItem>

</Tabs>

[Віджети погоди](../widgets/info-widgets.md#weather-widgets), такі як Температура, Тиск повітря, Вітер, Хмарність та Опади, показують поточні дані про погоду для **центральної точки на карті**.

- Віджети погоди відображаються лише тоді, коли увімкнено [екран Погоди](#weather-forecast-screen).
- Щоб активувати віджети погоди, виберіть пункт Головного меню *Налаштувати екран*, панель, на яку їх розмістити, та потрібні віджети зі списку.

## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (стилі карт)](../../user/map/vector-maps.md)

> *Останнє оновлення: листопад 2024*