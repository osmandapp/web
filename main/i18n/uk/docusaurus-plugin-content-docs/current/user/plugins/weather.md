---
source-hash: e4e558095bec4b84738b88edc8b62c95c94dec6c02803344bb5fccb2d6f00e34
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
 <ProFeature/> Плагін "Погода" — це [платна функція](../purchases/index.md) застосунку OsmAnd.  
:::

Інтерактивні шари карти погоди в застосунку OsmAnd дозволяють відстежувати температуру, атмосферний тиск, хмарність, швидкість вітру та опади у вашому місті чи будь-якому іншому місці на інтерактивній глобальній карті. Плагін "Погода" надає погодинний прогноз погоди на 7 днів вперед безпосередньо на карті OsmAnd. Інформацію про погоду також можна завантажити для використання в режимі офлайн.  

Джерелом даних для плагіна "Погода" є [Глобальна система прогнозування](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast), що управляється Національною метеорологічною службою США (NWS), та Європейський центр середньострокових прогнозів погоди ([ECMWF](https://www.ecmwf.int/)).  


## Необхідні налаштування {#required-setup-parameters}

Наступні налаштування *обов'язкові* для відображення погоди на карті OsmAnd:

**1.** [Придбайте **підписку OsmAnd Pro**](../purchases/).

**2.** [Увімкніть](../plugins/#enable--disable) плагін "Погода" в розділі *Плагіни* *Головного меню*.

**3.** [Виберіть **одиниці вимірювання**](#weather-settings) для погодних явищ.

**4.** [Відобразіть **шари погоди**](#customize-weather-layers) на карті, використовуючи пункт меню "Погода" в меню "Налаштувати карту" (не забудьте зменшити масштаб).

**5.** [Перегляньте **прогноз погоди**](#weather-forecast-screen) для обраної місцевості (це меню дозволяє не захаращувати головний екран карти OsmAnd шарами погоди).

**6.** [Завантажте](#offline-forecast) прогноз погоди, якщо плануєте використовувати його в режимі офлайн.

**7.** [Увімкніть **віджети погоди**](#weather-widgets), якщо ви хочете щодня бачити актуальну інформацію про погоду.  

:::caution Необхідний рендеринг
Плагін "Погода" доступний лише з рушієм візуалізації карти [Версії 2](../personal/global-settings/#map-rendering-engine) (OpenGL).  
:::


## Відображення погоди на карті {#display-weather-on-the-map}

### Екран прогнозу погоди {#weather-forecast-screen}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Перейдіть до: *Увімкнений плагін → <Translate android="true" ids="shared_string_menu,shared_string_weather"/>*

![Панель погоди Android 2](@site/static/img/plugins/weather/weather_dashbord_andr_new_2.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Перейдіть до: *Увімкнений плагін → <Translate ios="true" ids="shared_string_menu,shared_string_weather"/>*

![Панель погоди в iOS](@site/static/img/plugins/weather/weather_dashbord_ios_new_2.png)

</TabItem>  

</Tabs>

У головному бічному меню є спеціальний пункт **Погода**, який забезпечує швидкий доступ до всіх інструментів погоди. *Екран прогнозу погоди* відображає інформацію про *температуру*, *атмосферний тиск*, *швидкість вітру*, *хмарність* та *опади*.  

У нижній частині екрана знаходиться *панель інструментів погоди*. Ви можете використовувати кнопки днів та повзунок часу, щоб встановити точний час, на який буде відображатися прогноз погоди.

### Джерело даних {#data-source}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

![Джерело даних Android](@site/static/img/plugins/weather/weather_source_android.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

![Джерело даних iOS](@site/static/img/plugins/weather/weather_source_ios.png)

</TabItem>  

</Tabs>

Ви можете обрати, яке джерело прогнозу погоди OsmAnd використовуватиме для відображення даних на екрані "Погода":<br />
<Translate android="true" ids="shared_string_menu,shared_string_weather"/> → ⚙️ → *Обрати джерело даних*

Підтримуються два джерела прогнозу погоди:

[**GFS**](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) **(Global Forecast System)** – джерело за замовчуванням, що управляється NOAA/NWS. Надає повні дані про погоду, включаючи шари температури, тиску, вологості, вітру та хмарності.

[**ECMWF**](https://www.ecmwf.int/) **(European Centre for Medium-Range Weather Forecasts)** – альтернативне джерело прогнозу. Пропонує якісні дані про температуру, опади та тиск, але не надає інформації про вітер чи хмари. При використанні ECMWF недоступні параметри відображаються як «–», а відповідні шари погоди з'являються вимкненими.

Як джерело даних впливає на відображення погоди:
- Карта, графіки, шкала часу та значення погоди на екрані оновлюються негайно після перемикання джерела.
- Показуються лише параметри, доступні для обраного постачальника.
- Віджети погоди автоматично оновлюються для використання обраного джерела.
- Якщо ви раніше завантажили прогноз погоди, OsmAnd використовує дані, що відповідають обраній постачальнику.
- GFS та ECMWF використовують окремі кеші. Перемикання джерела завантажує або оновлює відповідні плитки погоди.


### Налаштування шарів погоди {#customize-weather-layers}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Перейдіть до: *Увімкнений плагін → <Translate android="true" ids="shared_string_menu,quick_action_add_configure_map,shared_string_show,shared_string_weather"/>*

![Панель погоди Android 2](@site/static/img/plugins/weather/weather_customize_andr.png)  

</TabItem>  

<TabItem value="ios" label="iOS">

Перейдіть до: *Увімкнений плагін → <Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,shared_string_weather"/>*

![Панель погоди в iOS](@site/static/img/plugins/weather/weather_customize_ios.png)

</TabItem>  

</Tabs>

Щоб відобразити шари погоди на екрані карти OsmAnd, потрібно скористатися меню *Налаштувати карту*. Перейдіть до меню, знайдіть у списку пункт *Погода* (доступний лише тоді, коли плагін увімкнено) і торкніться його.  

У цьому меню ви можете змінити **видимість** та [налаштування](#weather-settings) для кожного шару, вибрати тип контурних ліній та завантажити [офлайн-прогноз погоди на 7 днів](#offline-forecast) (*тут доступно лише для Android*).


### Налаштування погоди {#weather-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *Головне меню → Плагіни → Погода → Налаштування*
- *Головне меню → Налаштування → Профіль → Налаштування плагінів → Погода*

![Налаштування погоди Android](@site/static/img/plugins/weather/weather_settings_andr_1.png) ![Налаштування погоди 2 Android](@site/static/img/plugins/weather/weather_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *Головне меню → Налаштування → Профіль → Плагіни → Погода*

![Налаштування погоди iOS](@site/static/img/plugins/weather/weather_settings_ios.png) ![Налаштування погоди iOS 2](@site/static/img/plugins/weather/weather_settings_ios_2.png)

</TabItem>

</Tabs>  

Важливо вирішити, в яких одиницях вимірювання вам зручно бачити [дані про погоду](#weather-layers) на карті та у віджетах [Погода](#weather-widgets) на екрані. Ви можете вибрати відповідні одиниці вимірювання для кожного параметра або використовувати значення за замовчуванням (*лише для iOS*). У версії застосунку OsmAnd для iOS ви також можете увімкнути опцію офлайн-прогнозу, щоб уникнути використання мобільного трафіку під час подорожей.  

:::note
У версії OsmAnd для iOS ви можете змінити одиниці вимірювання та рівень прозорості в меню, що відкривається після тривалого натискання на іконку потрібного шару карти.  
:::

### Шари погоди {#weather-layers}

Усі дані про погоду представлені у вигляді окремих шарів карти. Щоб побачити шари погоди на карті, потрібно зменшити масштаб, вони доступні лише на масштабах 2-12. Шари погоди використовують [палітри погоди](../personal/color-palette-schemes.md#weather) для розфарбовування карти, ці палітри можна [змінити](../personal/color-palette-schemes.md#edit-palette-file) за потреби.

| |  
|------------|  
| **Шар опадів** відображає інформацію про погодні явища, коли вода в різних агрегатних станах падає з неба на землю. Опади - це дощ, сніг, мокрий сніг або град. Шкала опадів градуйована в міліметрах (або дюймах) води, що випадає на 1 квадратний метр за 24 години. 1 мм дощу відповідає 1 літру води на 1 квадратний метр. |  
|![Схема опадів](@site/static/img/plugins/weather/precipitation.png)|  
| **Температура** виражає кількісне сприйняття тепла і холоду. Вимірюється в градусах. В OsmAnd ви можете обирати між шкалами Цельсія та Фаренгейта. |  
|![Схема температури](@site/static/img/plugins/weather/temperature.png)|  
| **Вітер** - це рух повітря, спричинений нерівномірним нагріванням Землі Сонцем та її власним обертанням. Вітер може варіюватися від легкого бризу до стихійних лих, таких як урагани та торнадо. В OsmAnd швидкість вітру може відображатися в метрах за секунду (м/с), кілометрах на годину (км/год), милях на годину (миль/год) та вузлах (кт). |  
|![Схема вітру](@site/static/img/plugins/weather/wind.png)|  
| **Хмарність** - це середня частка неба, вкрита хмарами, при спостереженні з певного місця. Вимірюється у %. |  
|![Схема хмарності](@site/static/img/plugins/weather/clouds.png)|  
| **Атмосферний тиск** спричинений вагою повітря над точкою вимірювання. Він зменшується зі збільшенням висоти. Атмосферний тиск може відображатися в гектопаскалях (гПа), міліметрах ртутного стовпчика (мм рт. ст.) та дюймах ртутного стовпчика (дюйм рт. ст.). |  
| ![Схема тиску](@site/static/img/plugins/weather/pressure.png) |  
| **Анімація вітру** включає динамічні зображення, що показують напрямок та швидкість вітру в регіоні. |  
| ![Анімація вітру](@site/static/img/plugins/weather/wind_annimation.gif) |  


### Комбінування карт {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Комбінування шарів погоди на Android](@site/static/img/plugins/weather/weather_combine_layers_andr_1.png) ![Комбінування шарів погоди на Android](@site/static/img/plugins/weather/weather_combine_layers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Комбінування шарів погоди на iOS](@site/static/img/plugins/weather/weather_combine_layers_ios_1.png) ![Комбінування шарів погоди на iOS](@site/static/img/plugins/weather/weather_contours.png)  

</TabItem>

</Tabs>

Щоб отримати повну інформацію про погоду, ви можете використовувати шари карти окремо або легко комбінувати їх. До шару "Погода" також можна додати ізолінії одного конкретного типу. Просто торкніться кнопки *Шари* або *Ізолінії* на екрані.


### Швидкі дії для шарів {#quick-actions-for-layers}

![ШД шарів погоди](@site/static/img/plugins/weather/QA_weather_layers_andr.png)

Щоб перемикати видимість шарів погоди, ви можете використовувати кнопки *Швидкої дії* на екрані карти. Загальні налаштування для показу або приховування шарів можна знайти в окремому [розділі "Погода"](#weather-forecast-screen) *Головного меню*. У статті [Швидка дія](../widgets/quick-action.md#configure-map) ви знайдете список шарів, доступних для відображення. Якщо вам потрібен швидкий доступ до цієї конфігурації карти, скористайтеся інструментом *Кнопка користувача*.

- Перейдіть до [Додати дію](../widgets/quick-action.md#custom-buttons): *Меню → Налаштувати екран → Кнопки користувача → Швидка дія → Додати дію → Налаштувати карту*.
- Додайте одну або кілька кнопок ШД, щоб змінити видимість певного шару погоди.


## Офлайн-прогноз {#offline-forecast}

### Кеш {#cache}

Коли вкладка "Погода" відкрита, якщо не вказано інше, необхідна інформація про погоду завантажується з мережі. Ви можете використовувати попередньо завантажений [прогноз погоди](#download-forecast) на своїх пристроях. Інформація про погоду автоматично кешується після завантаження і може використовуватися в автономному режимі до закінчення терміну дії прогнозу.  

:::tip
На пристроях Android ви можете перевірити, коли були завантажені дані про погоду, торкнувшись *віджета "Погода"*. Плагін OsmAnd Development має бути увімкнений.  
![Дата кешування погоди android](@site/static/img/plugins/weather/weather_cash_andr.png)  
:::

### Завантаження прогнозу {#download-forecast}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Плагін "Погода" в Android](@site/static/img/plugins/weather/download_weather_android.png) ![Плагін "Погода" в Android](@site/static/img/plugins/weather/download_weather_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Плагін "Погода" в iOS](@site/static/img/plugins/weather/download_weather_ios.png) ![Плагін "Погода" в iOS](@site/static/img/plugins/weather/download_weather_1_ios.png)

</TabItem>

</Tabs>  

Для кожної країни ви можете завантажити **Офлайн-прогноз** (до 7 днів). Чим ближче до поточної дати, тим точнішим він буде. Якщо ви хочете використовувати прогноз погоди в автономному режимі, вам слід завантажити дані про погоду заздалегідь.  

У меню завантаження прогнозу ви можете отримати інформацію та встановити параметри для підтримки актуальності даних про погоду.  
  
- **Створено** (*Android*) / **Оновлено** (*iOS*). Показує, коли було зроблено останнє оновлення.  
- **Наступне оновлення** (*iOS*). Коли буде доступне наступне оновлення.  
- **Розмір** (*Android*) / **Розмір оновлень** (*iOS*). Показує розмір усіх оновлень.  
- Кнопка **Оновити** (*Android*) / **Оновити зараз** (*iOS*). Коли активна, дозволяє оновлювати дані про погоду вручну, не чекаючи автоматичного оновлення.  
- **Частота оновлення** (*iOS*). Можна встановити 12-годинну, 24-годинну або щотижневу.  
- *Оновлювати лише через Wi-Fi* (*iOS*). Увімкніть цю опцію, якщо не хочете використовувати мобільні дані для завантажень.  
- Кнопка **Видалити** *кошик* (*Android*) / **Видалити прогноз** (*iOS*). Дозволяє видалити всі дані прогнозу для цього регіону.
- Кнопка **Редагувати** *олівець* (*Android*). Дозволяє перейменувати файл погоди.

**Примітка:** Деякі країни, такі як США та Канада, використовують єдиний файл офлайн-прогнозу для всієї країни. Це зменшує кількість завантажень і спрощує керування даними про погоду.

:::info  
Дані про погоду оновлюються кожні 6 годин (усі 4 оновлення від [GFS](https://www.ncei.noaa.gov/products/weather-climate-models/global-forecast) та 3 від [ECMWF](https://www.ecmwf.int/)) і стають доступними в OsmAnd з невеликою затримкою, оскільки процес обчислення займає кілька годин до випуску (зазвичай близько 07:00 UTC).  
:::


## Віджети погоди {#weather-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Оберіть панель → <Translate android="true" ids="shared_string_weather"/>*

![Віджети погоди на Android](@site/static/img/plugins/weather/weather_widgets_1_android.png) ![Віджети погоди на Android](@site/static/img/plugins/weather/weather_widgets_2_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Оберіть панель → <Translate ios="true" ids="shared_string_weather"/>*

![Віджети погоди на iOS](@site/static/img/plugins/weather/weather_widgets_1_ios.png)  

</TabItem>

</Tabs>

[Віджети погоди](../widgets/info-widgets.md#weather-widgets), такі як "Температура", "Тиск повітря", "Вітер", "Хмарність" та "Опади", показують поточні дані про погоду для **центральної точки на карті**.

- Віджети погоди відображаються лише тоді, коли увімкнено [екран "Погода"](#weather-forecast-screen).
- Щоб активувати віджети погоди, виберіть пункт головного меню *Налаштувати екран*, панель, на якій їх розмістити, та потрібні віджети зі списку.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карти)](../../user/map/vector-maps.md)