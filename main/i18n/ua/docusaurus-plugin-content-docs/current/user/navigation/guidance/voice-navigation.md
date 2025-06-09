---
source-hash: 03b575a2857f83d20c42e9f1ceca8b99da1314e7b0ec74ee532423eda1ef1516
sidebar_position: 6
title:  Голосові підказки / Сповіщення
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

Функція голосової навігації OsmAnd надає голосові інструкції та сповіщення в режимі реального часу, які допомагають вам залишатися в курсі подій та бути в безпеці під час руху. Ви можете налаштувати навігацію відповідно до своїх уподобань та потреб. Для цього виберіть відповідний голосовий профіль: або [систему синтезу мовлення (TTS)](#tts-text-to-speech), яка може динамічно оголошувати назви вулиць, відстані та обмеження швидкості, або [записаний голос](#recorded-voice-prompts), що пропонує стислі інструкції.

Окрім покрокових інструкцій, голосовий навігатор OsmAnd може сповіщати вас про майбутні точки інтересу, зміни в умовах руху, а також про перевищення встановленого обмеження швидкості. Щоб дізнатися більше про налаштування цих сповіщень, дивіться [Налаштування часу оголошення](#announcement-time) та [Попередження про обмеження швидкості](#speed-limit).

Завдяки правильному поєднанню голосових опцій, налаштувань сповіщень та регулювання звуку пристрою, ви отримуватимете своєчасну та чітку навігаційну інформацію протягом усього маршруту.

:::note

- <Translate android="true" ids="voice_announces_info"/>
- Текстові сповіщення повністю відображають час спрацьовування та повідомлення голосових підказок.

:::


## Налаштування голосових підказок {#setting-up-voice-prompts}

OsmAnd надає різні опції для керування голосовими підказками, щоб ви могли зручно слідувати своєму маршруту. Щоб налаштувати ці параметри, почніть у відповідних розділах програми.

- Активуйте голосові підказки в розділі [Навігація](../guidance/navigation-settings.md), натиснувши **Налаштування**. Ви також можете увімкнути та налаштувати голосові підказки через *Налаштувати профіль*, та *Налаштування навігації*.
- Увімкніть або вимкніть голосові підказки за допомогою *Меню → Навігація →* натисніть *Кнопку звуку*,
    або *Меню → Навігація →* Кнопка налаштувань *→ Звук →* увімкнути/вимкнути.

Для отримання додаткової інформації про те, як і коли спрацьовують голосові підказки, зверніться до документації [Спрацьовування голосових підказок навігації](../../../technical/algorithms/voice-prompt-triggering.md).


### Налаштування голосу {#voice-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> button* *(or <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Choose profile → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

**[Мова](#voice-prompt-language)**. Виберіть бажану мову та тип.

**Оголошення**. Дозволяє налаштувати наступні типи підказок:

- *Назви вулиць (TTS), Номери виїздів, Попередження про рух, Пішохідні переходи* та *Тунелі*.
- *[Камери контролю швидкості](#speed-cameras)*.
- Також налаштуйте **[Віджет сповіщень](../../widgets/nav-widgets.md#alert-widget)** для використання з оголошеннями.

**Точки користувача**:

- Увімкніть голосові підказки для попередньо встановлених та доданих [Шляхових точок](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track), [Вибраних](../../personal/favorites.md) або [POI](../../map/point-layers-on-map.md#points-of-interest-pois). Під час руху вибрані точки будуть оголошуватися при наближенні або проїзді повз них.

| Тип підказки | Час випередження [с]:<br/>Відповідна<br/>Відстань випередження @ Швидкість за замовчуванням [м] | Обмеження |
| :- | :- | :- |
| Наближення  | **60 с:**<br/>Автомобіль: 750 м<br/>Велосипед: 167 м<br/>Пішки: 67 м  |  Не більше 1 точки одночасно |
| Проїзд | **15 с:**<br/>Автомобіль: 188 м<br/>Велосипед: 42 м<br/>Пішки: 17 м | Не більше 3 точок одночасно |

[**Обмеження швидкості**](#speed-limit):

- *Оголошувати при перевищенні*.
- *Допустиме відхилення швидкості*.

**Інше**:

- *Оголошувати втрату та відновлення сигналу GPS*. OsmAnd оголошує, якщо сигнал GPS на пристрої втрачено.
- *Оголошувати перерахунок маршруту*. OsmAnd повідомляє про перерахунок маршруту у випадку [відхилення або руху у зворотному напрямку](./navigation-settings.md#recalculate-route).
- *Оголошувати відхилення від маршруту*. Ви отримуєте інформацію про відхилення від маршруту відповідно до [встановлених параметрів](./navigation-settings.md#recalculate-route).

**Опції**:

- *Повторювати навігаційні інструкції*. Дозволяє повторювати навігаційні інструкції через регулярні проміжки часу від 1 хв до 30 хв. Або вручну - якщо ви пропустили голосову підказку, ви можете прослухати її знову, просто натиснувши [стрілку поточного повороту](../../widgets/nav-widgets.md#next-turn) на екрані програми.
- *[Час оголошення](#announcement-time)*.

**Вихід** (*лише Android*):

- *[Вихід голосової навігації](#voice-guidance-output)*.
- *Призупинити музику*. Голосові підказки на деякий час зупиняють відтворення музики.


### Камери контролю швидкості {#speed-cameras}

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-speed-cameras.png)

[Сповіщення про камери контролю швидкості](../../personal/global-settings.md#uninstall-speed-cameras) дозволяють активувати або деактивувати POI з камерами контролю швидкості. Вам потрібно буде перезапустити програму OsmAnd, щоб застосувати зміни.

У деяких країнах або регіонах використання програм для попередження про камери контролю швидкості є незаконним. Ви повинні зробити вибір залежно від законів вашої країни. Виберіть **Залишити активним**, і ви отримуватимете сповіщення та попередження про камери контролю швидкості. Виберіть **Видалити**, і всі дані, пов'язані з камерами контролю швидкості, такі як попередження, сповіщення та POI, будуть видалені, доки ви повністю не перевстановите OsmAnd.


### Обмеження швидкості {#speed-limit}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Voice Navigation](@site/static/img/navigation/voice/voice_promt_speed_limit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Voice Navigation](@site/static/img/navigation/voice/voice_promt_speed_limit_ios.png)

</TabItem>

</Tabs>

Опція **Обмеження швидкості** дозволяє OsmAnd інформувати вас, коли ваша поточна швидкість перевищує вказаний поріг. Дані про максимальні дозволені обмеження швидкості надходять з OpenStreetMap.

**Оголошувати при перевищенні**
*Допустиме відхилення швидкості* дозволяє вибрати допустиме відхилення (наприклад, від -10 км/год до +20 км/год) від [дозволеного максимального обмеження швидкості](https://wiki.openstreetmap.org/wiki/Key:maxspeed) на поточній дорозі. Коли ваша швидкість перевищує це допустиме відхилення, OsmAnd видає голосову підказку.

*Правила активації голосових підказок* при перевищенні обмеження швидкості:

- *Початкове попередження*. Виявивши, що ви перевищуєте обмеження швидкості, OsmAnd чекає 5 секунд, перш ніж видати перше голосове попередження.
- *Затримка повторного оголошення*. Якщо ви продовжуєте перевищувати швидкість, наступне попередження затримується на 120 секунд, щоб запобігти надто частим сповіщенням.
- *Скидання таймера*. Таймер скидається, якщо ви залишаєтеся в межах дозволеного ліміту протягом 30 секунд. Будь-яке подальше перевищення швидкості знову чекатиме 5 секунд, перш ніж пролунає наступне попередження.

Це налаштування **Допустиме відхилення швидкості** впливає на швидкість, що відображається в *попереджувальній* частині [віджета Спідометр](../../widgets/info-widgets.md#speedometer) у програмі OsmAnd, [Android Auto](../../navigation/auto-car.md#speedometer) та [CarPlay](../../navigation/car-play.md#speedometer).


### Час оголошення {#announcement-time}

![Voice Navigation announcement timing Android](@site/static/img/navigation/voice/voice_promt-announ-time.png)

Час оголошення різних голосових підказок залежить від вибраного профілю, типу підказки, поточної швидкості навігації та швидкості навігації за замовчуванням. За допомогою цього налаштування ви можете змінити відстань до активації голосових підказок, застосувавши множник відстані: *<Translate android="true" ids="arrival_distance_factor_normally" />* - 1.0, *<Translate android="true" ids="arrival_distance_factor_early" />* - 1.5, *<Translate android="true" ids="arrival_distance_factor_late" />* - 0.5, *<Translate android="true" ids="arrival_distance_factor_at_last" />* - 0.25.

У випадаючому списку *Інтервали часу та відстані* ви можете переглянути детальну інформацію про активацію підказок для різних множників відстані. Для отримання додаткової інформації дивіться [Спрацьовування голосових підказок навігації](../../../technical/algorithms/voice-prompt-triggering.md).


### Вихід голосової навігації {#voice-guidance-output}

<InfoAndroidOnly/>

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-1.png)

Щоб уникнути одночасного відтворення аудіо в одному вихідному потоці, в Android реалізовано аудіофокус. OsmAnd використовуватиме гучномовець, вибраний зі списку в цьому налаштуванні, для виведення аудіо. Інші програми призупинять відтворення або зменшать гучність, щоб вам було легше чути голосові підказки OsmAnd.

- Аудіо медіа/навігації.
- Аудіо сповіщень.
- Аудіо телефонних дзвінків (для переривання Bluetooth [автомобільних стереосистем](../auto-car.md)).


### Тестування голосових підказок {#testing-of-voice-prompts}

Ви можете протестувати голосові підказки за допомогою:

- [Симуляція навігації](../../navigation//setup/route-navigation.md#simulated-navigation). Встановіть маршрут і запустіть симуляцію: *Меню навігації → Налаштування → Симулювати навігацію*.
- [Тестування голосових підказок](../../plugins/development.md#application-testing) (*лише Android*). Використовуйте *Плагін розробки* для тестування голосових підказок:
    - Перейдіть до *Меню → Плагіни → Увімкнути розробку OsmAnd*.
    - Перейдіть до *Налаштування → Тестувати голосові підказки*.
    - Виберіть мову та перевірте, чи система правильно відтворює підказки.


### Вирішення проблем зі звуком {#solving-audio-issues}

Якщо ви не чуєте **голосові підказки** або [попередження про обмеження швидкості](#speed-limit):

- Переконайтеся, що гучність вашого пристрою увімкнена та збільшена.
- Переконайтеся, що звук увімкнено під час навігації: *Меню → Навігація → Кнопка увімкнення/вимкнення звуку* або *Меню → Навігація → Кнопка налаштувань → Звук* для детального налаштування звуку.
- Виберіть, які [динаміки](#voice-guidance-output) використовувати.
- Перевірте, який [голосовий навігатор](#voice-prompt-language) вибрано, і переконайтеся, що у вас є TTS або записаний голос, здатний оголошувати попередження про обмеження швидкості.
- Переконайтеся, що аудіо не спрямовується на ненавмисний вихідний пристрій (наприклад, відключену гарнітуру Bluetooth).

Для додаткових кроків з усунення несправностей зверніться до [посібника з усунення несправностей навігації](../../troubleshooting/navigation.md#voice-navigation).


## TTS (Text-to-Speech) {#tts-text-to-speech}

OsmAnd підтримує голоси **Text-to-Speech (TTS)**, які надають динамічні та детальні голосові підказки, включаючи інструкції щодо поворотів, назви вулиць та оголошення POI. Голоси TTS включені в програму, але вимагають встановлення на пристрої [системи синтезу мовлення](https://en.wikipedia.org/wiki/Speech_synthesis).

Більшість сучасних пристроїв Android та iOS мають стандартну систему TTS, але додаткові системи та мови можуть бути встановлені окремо.

Список **доступних систем TTS та підтримуваних мов** на Android дивіться за посиланням:
[Список мов з доступними системами TTS на Android](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

***Налаштування TTS на вашому пристрої:***

**Android:**

1. Відкрийте Налаштування.
2. Перейдіть до *Доступність → Вивід тексту в мовлення*.
3. Виберіть **систему TTS** (Google TTS або іншу встановлену систему).
4. Виберіть **бажану мову** (деякі можуть вимагати додаткового завантаження).
5. Налаштуйте швидкість мовлення, висоту тону та швидкість відтворення за потреби.
6. Натисніть **Прослухати приклад**, щоб протестувати голосовий вивід.

Для отримання додаткової інформації зверніться до:
[Підтримка Google – Налаштування тексту в мовлення Android](https://support.google.com/accessibility/android/answer/6006983).

**iOS:**

1. Відкрийте Налаштування.
2. Перейдіть до *Доступність → Промовлений вміст*.
3. Натисніть **Голоси**, щоб вибрати бажаний голос.
4. Налаштуйте **Швидкість мовлення**, **Вимову** та інші параметри.
5. Протестуйте голос за допомогою **Промовити виділене** або **Промовити екран**.

Для отримання додаткової інформації зверніться до:
[Підтримка Apple – Налаштування мовлення iPhone](https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios#:~:text=Go%20to%20Settings%20%3E%20Accessibility%20%3E%20Spoken,the%20top%20of%20the%20screen).

***Тестування голосових підказок:***

Щоб перевірити, чи TTS правильно функціонує в OsmAnd:

- Увімкніть **Плагін розробки**: *Меню → Налаштування → Плагіни → Розробка OsmAnd*.
- Відкрийте [Тестування голосових підказок](../../plugins/development.md#application-testing): *Меню → Налаштування → Плагіни → Розробка OsmAnd → Тестування голосових підказок*.

Для усунення несправностей зверніться до:
[Усунення несправностей голосової навігації](../../troubleshooting/navigation.md#voice-navigation).


### Мова голосових підказок {#voice-prompt-language}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces,shared_string_language"/>*

![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-tts.png)  ![Voice Navigation Android](@site/static/img/navigation/voice/voice_promt-recorded.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces,shared_string_language"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-tts-ios.png)

</TabItem>

</Tabs>

OsmAnd надає два типи голосових підказок:

- **<Translate android="true" ids="tts_title"/>**
    - Використовує систему TTS пристрою для динамічного створення голосових підказок.
    - Читає назви вулиць, інструкції щодо поворотів, назви POI та інші деталі.
    - Підтримує кілька мов та налаштування вимови.
    - Може бути налаштований за допомогою швидкості мовлення, висоти тону та налаштувань вимови.

- **<Translate android="true" ids="shared_string_recorded"/>** (*лише Android*)
    - Використовує попередньо записані голосові підказки для навігації.
    - Звучить природніше, ніж TTS, але має обмеження.
    - Не читає назви вулиць або назви POI.
    - Надає лише базові інструкції щодо поворотів.

> *TTS рекомендовано для детальної навігаційної підказки.*

#### Налаштування голосових підказок на системному рівні {#system-level-voice-prompt-settings}

Поведінку голосових підказок, включаючи *швидкість відтворення, висоту тону та паузи*, можна налаштувати лише в системних налаштуваннях пристрою.

**Android:**

1. Відкрийте *Налаштування* пристрою *→ Доступність → Вивід тексту в мовлення*.
2. Виберіть бажану систему TTS та мову.
3. Налаштуйте швидкість мовлення, висоту тону та швидкість відтворення.

**iOS:**

1. Відкрийте *Налаштування* пристрою *→ Доступність → Промовлений вміст*.
2. Налаштуйте: мову, голоси, швидкість мовлення, вимову.

> *Для додаткових голосів завантажте мовні пакети з системних налаштувань.*


#### Доступні мови TTS {#available-tts-languages}

Наразі доступно 45 мов. Не всі мови, перелічені нижче, можуть підтримуватися кожною системою TTS. Дивіться [тут](https://accessibleandroid.com/list-of-languages-with-available-tts-engines-on-android/).

| | |
| :--- | :--- |
| **А** | Арабська |
| **Б** | Білоруська, Болгарська |
| **К** | Каталонська, Китайська, Китайська (Гонконг), Китайська (традиційна), Хорватська, Чеська |
| **Д** | Данська, Нідерландська |
| **А** | Англійська, Англійська (Велика Британія), Естонська |
| **Ф** | Фінська, Французька |
| **Н** | Німецька, Німецька (неофіційна), Грецька, Гуарані |
| **Г** | Гінді, Угорська, Угорська (офіційна), Іврит |
| **І** | Індонезійська, Італійська |
| **Я** | Японська |
| **К** | Корейська |
| **Л** | Латвійська |
| **Н** | Норвезька букмол |
| **П** | Перська, Польська, Португальська, Португальська (Бразилія) |
| **Р** | Румунська, Російська |
| **С** | Сардинська, Сербська (кирилиця), Словацька, Словенська, Іспанська, Іспанська (Аргентина), Суахілі, Шведська |
| **Т** | Турецька |
| **У** | Українська |
| **В** | В'єтнамська |


## Записані голосові підказки {#recorded-voice-prompts}

### Завантажити голосові пакети {#download-voice-packages}

<InfoAndroidOnly />

Використання записаних голосів в OsmAnd має бути лише запасним варіантом. Вони досить обмежені і не можуть вимовляти назви вулиць, населених пунктів тощо. Ви можете завантажити голосові підказки з двох різних наборів зі списку.

- Перший тип, це рекомендовані:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,other_location,index_name_tts_voice"/>*

    ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-1.png)  ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-preferred-2.png)

- Другий тип — це записані голосові підказки з неповним набором функцій:

    *<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

    ![Voice Navigation settings Android](@site/static/img/navigation/voice/TTS-recorded.png)

### Режими звукових сигналів {#beep-modes}

<InfoAndroidOnly />

Ви можете налаштувати профіль OsmAnd на подачу звукових сигналів замість мовлення, подібно до велокомп'ютера. Існує три основні шаблони: *мінімальний*, *простий* та *складний*. Простий та складний шаблони мають *гучні* варіанти, які буде значно легше почути в гучному середовищі, але можуть звучати неприємно різко.

*<Translate android="true" ids="shared_string_menu,maps_and_resources,index_name_voice"/>*

- **Мінімальний**. Підходить для слідування відомим маршрутом пішки з мінімальними відволіканнями, цей шаблон сповіщатиме вас при проходженні проміжних пунктів призначення, вибраних та POI, а також при відхиленні від маршруту або поверненні на нього. Він не надаватиме жодних звукових попереджень про повороти.
- **Простий**. На додаток до сповіщень про пункти призначення, вибрані, POI та інші, простий шаблон сповіщає вас довшим звуковим сигналом, коли вам потрібно повернути.
- **Складний**. Підходить для шосейного велоспорту, складний шаблон використовує звукові сигнали різної довжини та висоти тону для інформування про майбутні повороти.
    - Низький звуковий сигнал означає лівий поворот, а високий — правий. Серія звукових сигналів середньої висоти тону представляє виїзд на кільцевій розв'язці (круговому русі). Всі три висоти тону послідовно представляють розворот. У всіх цих випадках короткі звукові сигнали означають підготуватися до чогось, а довгі звукові сигнали означають зробити щось зараз.


## Текстові сповіщення {#text-notifications}

Після початку маршруту ви можете переглядати інформацію у випадаючому системному меню в списку сповіщень. Тихі сповіщення OsmAnd містять таку інформацію, як покрокові інструкції, стрілки напрямку повороту, час прибуття та час до кінця маршруту, поточна швидкість та відстань до пункту призначення.

![Navigation route Notification Android](@site/static/img/navigation/route/navigation_notifications_android.png)

Активні кнопки в системному меню, що випадає, для вашої навігації:

- *<Translate android="true" ids="stop_navigation_service"/>*. Дозволяє зупинити навігацію.
- *<Translate android="true" ids="shared_string_pause"/>*. Дозволяє призупинити навігацію.
- *<Translate android="true" ids="shared_string_resume"/>*. Дозволяє відновити навігацію.

### Налаштування сповіщень {#configure-notifications}

Ви можете змінити налаштування сповіщень для програми OsmAnd у системних налаштуваннях вашого пристрою. Сповіщення можуть відображатися на екрані блокування, головному екрані, у випадаючому меню або вгорі програми.

Про те, як реалізовано керування сповіщеннями на Android, читайте в цій [статті](https://support.google.com/android/answer/9079661?hl=en#zippy=%2Cturn-notifications-on-or-off-for-certain-apps%2Cclear-notifications). Для iOS - [тут](https://support.apple.com/en-us/HT201925#:~:text=Go%20to%20Settings%20and%20tap,in%20the%20scheduled%20notification%20summary.).


## Керування екраном {#screen-control}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>*

![Screen control menu Android](@site/static/img/navigation/route/screen_control_android.png)

Ви можете керувати екраном свого пристрою для економії енергії. Цей режим має два загальні налаштування: *<Translate android="true" ids="screen_timeout"/>* та *<Translate android="true" ids="turn_screen_on"/>*.

### Час очікування екрана {#screen-timeout}

1. **<Translate android="true" ids="system_screen_timeout"/>**. Екран вимикається залежно від системних налаштувань вашого пристрою. Кнопка *Змінити налаштування* надає швидкий доступ до системного меню, такого як *Дисплей та яскравість*, де ви можете налаштувати час очікування екрана.

    ![System timeout screen control Android](@site/static/img/navigation/route/system_timeout_android.png)

2. **<Translate android="true" ids="wake_time"/>**. Якщо увімкнено *Залишати екран увімкненим*, екран пристрою не застосовує час очікування після пробудження. Якщо його вимкнено, ви можете встановити час, після якого екран пристрою вимкнеться, якщо ви не взаємодієте з ним, від 5 до 60 секунд.

    ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

### Увімкнути екран {#turn-screen-on}

![turn screen on Android](@site/static/img/navigation/voice/voice_navigation_Turnscreenon.png)

Виберіть параметри пробудження екрана та переконайтеся, що OsmAnd залишається на передньому плані, коли пристрій заблоковано.

- *<Translate android="true" ids="turn_screen_on_proximity_sensor"/>*. <Translate android="true" ids="turn_screen_on_sensor_descr"/>
- *<Translate android="true" ids="turn_screen_on_navigation_instructions"/>*. <Translate android="true" ids="turn_screen_on_navigation_instructions_descr"/>
- *<Translate android="true" ids="turn_screen_on_power_button"/>*. <Translate android="true" ids="turn_screen_on_power_button_descr"/>


## Пов'язані статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Підготовка маршруту](../setup/route-navigation.md)
- [Навігація за треком](../setup/gpx-navigation.md)
- [Навігація за маркерами](../setup/markers-navigation.md)
- [Деталі маршруту](../setup/route-details.md)
- [Налаштування навігації](./navigation-settings.md)
- [Екран карти під час навігації](./map-during-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

### Поширені проблеми та рішення {#common-issues-and-solutions}

1. Проблеми зі звуком. [(перевірити)](#solving-audio-issues)
2. Тестування голосових підказок. [(перевірити)](#testing-of-voice-prompts)
3. Чому я повинен використовувати голос TTS замість записаного голосу? [(перевірити)](../../troubleshooting/navigation.md#why-should-i-use-a-tts-voice-instead-of-a-recorded-voice)
4. TTS не функціонує належним чином? Виконайте ці кроки, щоб виправити це. [(перевірити)](../../troubleshooting/navigation.md#tts-does-not-function-properly-follow-these-steps-to-fix-it)

> *Цю статтю востаннє оновлено в березні 2025 року*
