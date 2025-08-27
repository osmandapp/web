---
source-hash: 7f1c4183ab4d6513e0cab308da0580b0d1de4b70c6bc071cbd087d8baee8e8c5
sidebar_position: 11
title:  OsmAnd Tracker
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


<InfoAndroidOnly />

## Огляд {#overview}

OsmAnd Tracker — це модифікований клієнт Telegram, створений для гнучкого моніторингу та надсилання повідомлень із GPS-координатами в режимі реального часу.

[OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) допомагає вам бачити ваші контакти на карті в OsmAnd. Він має соціальний аспект, тобто для його використання вам потрібно надати доступ до ваших контактів для платформи, яку обере OsmAnd.

Ми обрали [Telegram](https://telegram.org/) як найбільш відкриту соціальну платформу, оскільки вона має [відкритий API](https://core.telegram.org/api), відкритий SDK і, крім того, згодом матиме реалізацію відкритого сервера (Blockchain).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Як це працює {#how-it-works}

Важливо, що існує високий рівень сумісності між програмами. Ви можете легко ділитися своїм місцезнаходженням зі своїми контактами, не маючи мобільного додатка Telegram (OsmAnd Online GPS Tracker є незалежним клієнтом Telegram), і навпаки, вашим контактам не потрібно мати [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram), щоб бачити ваше місцезнаходження.

Ми розробили [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) таким чином, щоб ви могли продовжувати використовувати додаток Telegram та додаток OsmAnd звичним для вас способом, без додаткових обмежень.

Додаток надсилає повідомлення Live Location у вибрані чати протягом встановленого вами часу, відображає список ваших контактів та груп, а також перевіряє чати на наявність повідомлень з вашим місцезнаходженням, які потім відображаються на карті в OsmAnd.
Додаток не надсилає та не переглядає ваші текстові повідомлення.

Увійдіть, використовуючи свій номер телефону, зареєстрований у Telegram, щоб увімкнути наступне:

- Керуйте списком контактів та груп, які надсилають вам своє місцезнаходження.
- Переглядайте місцезнаходження контактів та груп у реальному часі на карті в OsmAnd.
- Встановлюйте час для обміну місцезнаходженням окремо для кожного чату.
- Встановлюйте, як часто оновлюється ваше місцезнаходження.
- Відстежуйте хронологію ваших переміщень та ваших контактів.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Необхідні параметри налаштування {#required-setup-parameters}

Встановіть OsmAnd Online GPS Tracker APK:

- [Магазин Google Play](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [Сервер OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## Налаштування плагіна {#plugin-settings}

Існує кілька налаштувань для керування частотою обміну місцезнаходженнями та контролю відображення надісланих вам місцезнаходжень.

Щоб відкрити меню *Налаштування*:

*Екран [Моє місцезнаходження](#my-location-screen) → прокрутіть екран вниз (список контактів) → ⋮ → Налаштування*
або
*Екран [Зараз у прямому ефірі](#live-now-screen) → ⋮ → Налаштування*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Позиція {#position}

**Надіслати моє місцезнаходження** — дозволяє встановити інтервал для надсилання вашої позиції від одного разу на секунду (для підвищення точності) до одного разу на 5 хвилин (для зменшення споживання енергії).

**Не рухається** — дозволяє встановити час (від 1 хвилини до 1 години), після якого місцезнаходження контакту вважається застарілим. Якщо місцезнаходження стає застарілим, воно стає сірим.

**Історія місцезнаходжень** — дозволяє встановити час (від 5 хвилин до 24 годин), після якого контакт із видаленим місцезнаходженням буде приховано зі списку та карти OsmAnd.

**Надіслати місцезнаходження як** — дозволяє вибрати категорію для надсилання повідомлень про ваше місцезнаходження в Telegram (3 типи надсилання): текст, карта, текст і карта.

**Час закінчення буфера** — дозволяє вибрати час збереження точок у буфері.

**Фонова робота** — дозволяє змінити налаштування оптимізації батареї для стабілізації обміну місцезнаходженням.

**Джерело місцезнаходження** — дозволяє вибрати *Служби Google Play* (за замовчуванням) або *Android API* для визначення місцезнаходження.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Одиниці та формати {#units--formats}

Дозволяє додавати налаштування для одиниць та форматів. Тепер ви можете вибрати зручні для вас значення для повідомлень Telegram під час обміну даними про місцезнаходження.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Зовнішній вигляд {#appearance}

Дозволяє показувати кількість GPS-точок, отриманих від інших контактів, а також тих, що надіслані вами.


### Конфіденційність {#privacy}

Використання проксі в OsmAnd Tracker. Перейдіть до Налаштувань та введіть дані свого проксі: *Налаштування → Конфіденційність → Налаштування проксі*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### Налаштування GPS {#gps-settings}

Налаштування точки місцезнаходження. Наприклад, якщо ви перебуваєте в одному місці деякий час без руху, дані про вашу точку місцезнаходження не надсилаються, і ваш GPX-трек відображатиме більш точні та достовірні дані.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Поділитися місцезнаходженням як {#share-location-as}

Якщо ви хочете підключити кілька пристроїв до одного облікового запису Telegram, вам потрібно натиснути "Додати пристрій" і назвати пристрій.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### OsmAnd Connect {#osmand-connect}

Цей параметр дозволяє вибрати версію OsmAnd, в якій ваші контакти з їхнім місцезнаходженням з'являться на карті.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Обліковий запис {#account}

Використовуйте це налаштування, щоб перевірити, який обліковий запис Telegram ви зараз використовуєте. Також у цьому меню ви можете вийти з програми OsmAnd Telegram, просто натиснувши кнопку *Вийти*.


### Буфер Logcat {#logcat-buffer}

Тут ви можете перевірити та поділитися детальними журналами програми.


## Екран "Моє місцезнаходження" {#my-location-screen}

На цьому екрані ви можете бачити свої контакти Telegram. Ви можете вибрати один або кілька з них, встановити параметри спільного доступу та почати ділитися своїм місцезнаходженням.

Після першого запуску ви побачите список рекомендованих контактів. Це п'ять останніх контактів, з якими ви ділилися своїм місцезнаходженням. Ви можете натиснути лише один раз, щоб продовжити ділитися своїм місцезнаходженням з цими контактами.

Час спільного доступу — це останній час спільного доступу, який ви вибрали для контакту.

Коли ви почнете ділитися, ви побачите список рекомендованих контактів та кнопку *Повернутися до OsmAnd* на екрані *Моє місцезнаходження*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Екран "Зараз у прямому ефірі" {#live-now-screen}

У цьому меню ви можете бачити всі контакти, які діляться з вами місцезнаходженням. Натисніть на контакт і подивіться його на **карті OsmAnd**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Активний маркер на карті OsmAnd {#active-marker-on-the-osmand-map}

Дозволяє відстежувати відстань, швидкість та кут руху ваших контактів на карті OsmAnd та в текстовому повідомленні Telegram. Ви можете зрозуміти, куди і як рухається ваш контакт.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Екран "Хронологія" {#timeline-screen}

Це третя вкладка в додатку. Це третя вкладка в додатку. Тут ви можете вибрати день для перегляду історії місцезнаходжень, якими з вами ділилися. Вибір дня відображає контакти, які показали своє місцезнаходження того дня.

Моніторинг дозволяє збирати інформацію у фоновому режимі, коли ваші контакти діляться нею. Для цього ви повинні його увімкнути.

Щоб переглянути всю інформацію про місцезнаходження контакту, торкніться його значка або відкрийте GPX-трек в OsmAnd та детальніше дослідіть трек ([докладніше тут](./trip-recording.md)). Ви також можете поділитися GPX-треком за вибраний період: надіславши його на електронну пошту або будь-який месенджер.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Ви можете бачити онлайн-рух ваших контактів на карті OsmAnd за допомогою онлайн-GPS-треку. Для цього вам потрібно увімкнути *Live* для контакту в *Хронології*. Якщо на даний момент є багато спільних контактів, програма OsmAnd випадковим чином вибирає колір треків.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Коли ви натискаєте "Показати в OsmAnd" або на міні-карту, ви можете вибрати спеціальні налаштування для відстеження GPX вашого контакту в програмі OsmAnd та бачити його рух у реальному часі на карті OsmAnd.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Якщо на вибрану дату немає зібраних даних, на екрані з'явиться спеціальне сповіщення. Ви можете перейти до найближчої дати, натиснувши стрілку вперед або назад.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Віджет трекера {#tracker-widget}

Щоб переглянути [віджет](../widgets/info-widgets.md#tracker-widget-android), вам потрібно спочатку увімкнути плагін OsmAnd Tracker. Після цього у верхньому правому куті екрана OsmAnd з'явиться віджет зі словом *Старт*.

Щоб вимкнути його, ви можете перейти до *Головне меню → Налаштувати екран*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

Віджет має кілька виглядів.

1. Перший — *Старт*.
   Коли ви натискаєте *Старт*, ви переходите до [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), де ви можете вибрати будь-які контакти або натиснути Рекомендовані контакти.
2. По-друге, коли ви починаєте ділитися своїм місцезнаходженням, віджет змінює свій вигляд.

   - Зелений значок емодзі *OK* означає, що ваше місцезнаходження зараз передається. Все нормально, передача відбувається без помилок.
   - Помаранчевий значок емодзі *OK* означає, що ваше місцезнаходження не може бути надіслано. Виникла проблема з Інтернетом або GPS-з'єднанням.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Якщо у вас тривалий час немає підключення до Інтернету, ваші точки місцезнаходження зберігаються в буфері OsmAnd Tracker. Віджет в OsmAnd змінює свій вигляд на сірий значок емодзі. Він показує час заповнення буфера, як довго буфер вже зберігає ваші точки місцезнаходження.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Як тільки інтернет-з'єднання буде відновлено, почнеться завантаження точок місцезнаходження з буфера. Віджет OsmAnd змінить свій вигляд, і кількість хвилин у ньому почне зменшуватися. Коли всі точки місцезнаходження з буфера будуть завантажені в Telegram, на віджеті з'явиться значок емодзі *OK*.

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Якщо ви бачите віджет як значок емодзі *OK*, це означає, що все гаразд. Процес обміну відбувається без будь-яких проблем.


## OsmAnd Assistant {#osmand-assistant}

Додаток OsmAnd має власного бота Telegram під назвою "OsmAnd Assistant", який допомагає інтегрувати OsmAnd Telegram зі сторонніми трекерами або API. Ви зможете ділитися не лише своїм місцезнаходженням, а й місцезнаходженням свого велосипеда або групи людей, які беруть участь у гонках, доступних через API. OsmAnd Telegram надасть вам гарне представлення ваших місцезнаходжень на карті в самому OsmAnd.

Будь ласка, поділіться з нами своєю думкою про цей новий додаток у [Twitter](https://twitter.com/osmandapp) та інших соціальних мережах.

Щоб переглянути GPS-позиції контактів на карті, вам потрібна остання версія [OsmAnd або OsmAnd+](./../purchases/android.md). Мінімальна підтримувана версія OsmAnd або OsmAnd+ — 3.0.4.