---
source-hash: 1bd20746ffeab531cb3d1ba5be872da020fbb3e3e511c4199d1144aff385a1dc
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

OsmAnd Tracker — це модифікований клієнт Telegram, створений для гнучкого моніторингу та надсилання повідомлень з GPS-координатами в режимі реального часу.  

[OsmAnd tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) допомагає вам бачити ваші контакти на мапі в OsmAnd. Він має соціальний аспект, тобто для його використання вам потрібно надати доступ до своїх контактів для платформи, яку обирає OsmAnd.  

Ми обрали [Telegram](https://telegram.org/) як найбільш відкриту соціальну платформу, оскільки вона має [відкритий API](https://core.telegram.org/api), відкритий SDK і, крім того, з часом матиме реалізацію відкритого сервера (блокчейн).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Як це працює {#how-it-works}

Важливо, що між додатками існує високий рівень сумісності. Ви можете легко ділитися своїм місцезнаходженням з контактами, не маючи мобільного додатку Telegram (OsmAnd Online GPS Tracker є незалежним клієнтом Telegram), і навпаки, вашим контактам не потрібно мати [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram), щоб бачити ваше місцезнаходження.  

Ми розробили [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) таким чином, щоб ви могли продовжувати користуватися додатками Telegram та OsmAnd у звичний для вас спосіб, без додаткових обмежень.  

Додаток надсилає повідомлення Live Location у вибрані чати на встановлений вами час, відображає список ваших контактів і груп, а також перевіряє чати на наявність повідомлень з вашим місцезнаходженням, які потім відображаються на мапі в OsmAnd.
Додаток не надсилає і не переглядає ваші текстові повідомлення.  

Увійдіть, використовуючи свій номер телефону, зареєстрований у Telegram, щоб увімкнути наступне:

- Керувати списком контактів і груп, які надсилають вам своє місцезнаходження.
- Переглядати місцезнаходження контактів і груп у режимі реального часу на мапі в OsmAnd.
- Встановлювати час передачі місцезнаходження окремо для кожного чату.
- Встановлювати частоту оновлення вашого місцезнаходження.
- Відстежувати хронологію ваших переміщень та переміщень ваших контактів.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Необхідні параметри налаштування {#required-setup-parameters}

Встановіть APK-файл OsmAnd Online GPS Tracker:

- [Google Play store](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [Сервер OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)


## Налаштування плагіну {#plugin-settings}

Існує кілька налаштувань для керування частотою передачі місцезнаходження та контролю відображення надісланих вам місцезнаходжень.

Щоб відкрити меню *Налаштування*:  

*Екран [Моє місцезнаходження](#my-location-screen) → прокрутіть екран вниз (список контактів) → ⋮ → Налаштування*  
або  
*Екран [Зараз наживо](#live-now-screen) → ⋮ → Налаштування*  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Позиція {#position}

**Надсилати моє місцезнаходження** — дозволяє встановити інтервал надсилання вашого місцезнаходження від одного разу на секунду (для підвищення точності) до одного разу на 5 хвилин (для зменшення споживання енергії).

**Не рухається** — дозволяє встановити час (від 1 хвилини до 1 години), після якого місцезнаходження контакту вважається застарілим. Якщо місцезнаходження застаріло, воно стає сірим.

**Історія місцезнаходжень** — дозволяє встановити час (від 5 хвилин до 24 годин), після якого контакт з видаленим місцезнаходженням буде приховано зі списку та з мапи OsmAnd.

**Надсилати місцезнаходження як** - дозволяє вибрати категорію для надсилання повідомлень про ваше місцезнаходження в Telegram (3 типи надсилання): текст, мапа, текст і мапа.

**Час очищення буфера** - дозволяє вибрати час збереження точок у буфері.

**Фонова робота** - дозволяє змінити налаштування оптимізації батареї для стабілізації передачі місцезнаходження.

**Джерело місцезнаходження** - дозволяє вибрати *Сервіси Google Play* (за замовчуванням) або *Android API* для визначення місцезнаходження.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Одиниці та формати {#units--formats}

Дозволяє додавати налаштування для одиниць вимірювання та форматів. Тепер ви можете вибрати зручні для вас значення для повідомлень Telegram під час передачі даних про місцезнаходження.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Зовнішній вигляд {#appearance}

Дозволяє показувати кількість GPS-точок, отриманих від інших контактів, а також надісланих вами.


### Конфіденційність {#privacy}

Використання проксі в OsmAnd Tracker. Перейдіть до Налаштувань і введіть дані проксі: *Налаштування → Конфіденційність → Налаштування проксі*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### Налаштування GPS {#gps-settings}

Налаштування точок місцезнаходження. Наприклад, якщо ви залишаєтеся в одному місці протягом деякого часу, не рухаючись, дані про вашу точку місцезнаходження не надсилаються, і ваш GPX-трек буде відображати більш точні дані.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Надіслати місцезнаходження як {#share-location-as}

Якщо ви хочете під'єднати кілька пристроїв до одного облікового запису Telegram, вам потрібно натиснути "Додати пристрій" і назвати пристрій.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### OsmAnd Connect {#osmand-connect}

Це налаштування дозволяє вибрати версію OsmAnd, в якій ваші контакти з їхнім місцезнаходженням будуть відображатися на мапі.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Обліковий запис {#account}

Використовуйте це налаштування, щоб перевірити, який обліковий запис Telegram ви зараз використовуєте. Також у цьому меню ви можете вийти з програми OsmAnd Telegram, просто натиснувши кнопку *Вийти*.  


### Буфер Logcat {#logcat-buffer}

Тут ви можете перевірити та поділитися детальними журналами програми.


## Екран "Моє місцезнаходження" {#my-location-screen}

На цьому екрані ви можете бачити свої контакти з Telegram. Ви можете вибрати один або декілька з них, встановити параметри передачі та почати ділитися своїм місцезнаходженням.  

Після першого запуску ви побачите список запропонованих контактів. Це п'ять останніх контактів, з якими ви ділилися своїм місцезнаходженням. Ви можете лише один раз натиснути, щоб продовжити ділитися своїм місцезнаходженням з цими контактами.  

Час передачі — це останній час передачі, який ви вибрали для контакту.  

Коли ви почнете ділитися, ви побачите список запропонованих контактів і кнопку *Повернутися до OsmAnd* на екрані *Моє місцезнаходження*.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Екран "Зараз наживо" {#live-now-screen}

У цьому меню ви можете побачити всі контакти, які діляться з вами своїм місцезнаходженням. Торкніться контакту та подивіться на нього на **мапі OsmAnd**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Активний маркер на мапі OsmAnd {#active-marker-on-the-osmand-map}

Дозволяє відстежувати відстань, швидкість і кут руху ваших контактів на мапі OsmAnd і в тексті Telegram. Ви можете зрозуміти, де і як рухається ваш контакт.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Екран "Хронологія" {#timeline-screen}

Це третя вкладка в додатку. Тут ви можете вибрати день для перегляду історії місцезнаходжень, якими з вами поділилися. При виборі дня відображаються контакти, які показували своє місцезнаходження в цей день.  

Моніторинг дозволяє збирати інформацію у фоновому режимі, коли ваші контакти нею діляться. Для цього ви повинні його увімкнути.

Щоб переглянути всю інформацію про місцезнаходження контакту, торкніться його іконки або відкрийте GPX-трек в OsmAnd і вивчіть трек більш детально ([читати більше тут](./trip-recording.md)). Ви також можете поділитися GPX-треком за вибраний період: надіславши його на електронну пошту або в будь-який месенджер.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Ви можете бачити онлайн-переміщення ваших контактів на мапі OsmAnd за допомогою онлайн GPS-треку. Для цього вам потрібно увімкнути *Наживо* біля контакту на вкладці *Хронологія*. Якщо в даний момент є багато спільних контактів, додаток OsmAnd вибирає колір треків навмання.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Коли ви натискаєте "Показати в OsmAnd" або на міні-мапу, ви можете вибрати спеціальні налаштування для GPX-відстеження вашого контакту в додатку OsmAnd і бачити його рух в реальному часі на мапі OsmAnd.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Якщо на обрану дату немає зібраних даних, на екрані з'явиться спеціальне повідомлення. Ви можете перейти до найближчої дати, натиснувши стрілку вперед або назад.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Віджет трекера {#tracker-widget}

Щоб переглянути [віджет](../widgets/info-widgets.md#trip-recording-widgets), вам потрібно спочатку увімкнути плагін OsmAnd Tracker. Після цього у верхньому правому куті екрана OsmAnd з'явиться віджет зі словом *Старт*.  

Щоб вимкнути його, ви можете перейти до *Головне меню → Налаштувати екран*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png)   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

Віджет має кілька виглядів.  

1. Перший — *Старт*.  
   Коли ви натискаєте *Старт*, ви переходите до [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), де ви можете вибрати будь-які контакти або натиснути на Запропоновані контакти.
2. Другий, коли ви починаєте ділитися своїм місцезнаходженням, віджет змінює свій вигляд.  

   - Зелена іконка-емодзі *OK* означає, що ваше місцезнаходження зараз передається. Все нормально, передача відбувається без помилок.  
   - Помаранчева іконка-емодзі *OK* означає, що ваше місцезнаходження не може бути надіслано. Існує проблема з підключенням до Інтернету або GPS.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Якщо у вас тривалий час немає підключення до Інтернету, ваші точки місцезнаходження зберігаються в буфері OsmAnd Tracker. Віджет в OsmAnd змінює свій вигляд на сіру іконку-емодзі. Він показує час заповнення буфера, як довго буфер вже зберігає ваші точки місцезнаходження.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Як тільки інтернет-з'єднання буде відновлено, почнеться завантаження точок місцезнаходження з буфера. Віджет OsmAnd змінить свій вигляд, і кількість хвилин у ньому почне зменшуватися. Коли всі точки місцезнаходження з буфера будуть завантажені в Telegram, на віджеті з'явиться іконка-емодзі *OK*.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Якщо ви бачите віджет у вигляді іконки-емодзі *OK*, це означає, що все гаразд. Процес обміну відбувається без проблем.  


## OsmAnd Assistant {#osmand-assistant}

Додаток OsmAnd має власного Telegram-бота під назвою "OsmAnd Assistant", який допомагає інтегрувати OsmAnd Telegram зі сторонніми трекерами або API. Ви зможете ділитися не тільки своїм місцезнаходженням, але й місцезнаходженням вашого велосипеда або групи людей, що беруть участь у перегонах, доступних через API. OsmAnd Telegram надасть вам гарне представлення ваших місцезнаходжень на мапі в самому OsmAnd.  

Будь ласка, поділіться з нами своїми думками про цей новий додаток у [Twitter](https://twitter.com/osmandapp) та інших соціальних мережах.

Щоб переглядати GPS-позиції контактів на мапі, вам потрібна остання версія [OsmAnd або OsmAnd+](./../purchases/android.md). Мінімальна підтримувана версія OsmAnd або OsmAnd+ — 3.0.4.