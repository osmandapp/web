---
source-hash: eb93726e0592003532df793f15601aaea57aea0d308a2e16a1bc45bfd0e949d8
sidebar_position: 6
title:  Запис треку
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Огляд {#overview}

У цій статті розглядаються проблеми із записом GPX-треків, які тривалий час спостерігаються в різних версіях Android та iOS. Під **фоновим режимом** ми маємо на увазі, що застосунок OsmAnd не відображається на передньому плані, особливо коли екран пристрою вимкнено (що відрізняється від внутрішнього визначення *фонового режиму* в пристроях).

**Примітки**:

- Починаючи з Android 11 (грудень 2020), більше не існує системного дозволу *Завжди дозволяти* доступ до місцезнаходження у фоновому режимі, але це **не обмежує** фоновий запис треків в OsmAnd. Згідно з документацією Google, тепер це вважається **використанням на передньому плані**, оскільки дозвіл на використання служби на передньому плані використовується внутрішньо, і системне сповіщення про запис треку завжди видиме.

- Зверніть увагу, що нові формулювання в Android можуть вводити в оману:

  - **Дозволити під час використання застосунку** означає, що застосунок може безперервно отримувати дані про місцезнаходження, доки він відображається на екрані або має видиме сповіщення на панелі сповіщень *Android*, як це робить OsmAnd під час навігації або запису поїздки. (Технічно це називається *режим переднього плану*).

  - **Дозволити завжди**, з іншого боку, означає, що застосунок в принципі може отримувати ваше місцезнаходження "непомітно" без виконання жодної з цих умов. Але *Android* обмежує частоту доступу до місцезнаходження в цьому (*фоновому*) режимі приблизно до одного разу на годину, що, безумовно, не є правильним режимом для навігаційного застосунку.


## Recorded Tracks are Noisy {#recorded-tracks-are-noisy}

Існує 2 типові проблеми з точністю, що призводять до *безладного* записаного треку.

- Тривале перебування на одному місці або занадто частий запис точок (відповідні зигзаги перебільшують справжні значення).
- Слабкий сигнал GPS або перемикання на визначення місцезнаходження за сигналом мережі.

Заходи для пом'якшення:

- Призупиняйте запис під час зупинок або використовуйте фільтр *Мінімальне зміщення* плагіна "Запис поїздки".
- Вибирайте інтервал часу або відстані між точками запису, що відповідає кривизні вашої поїздки, але не створює багато зайвих точок (розкид яких створюватиме шум і перебільшуватиме коливання відстані та висоти). 
- Також можна відредагувати трек пізніше і видалити *"шумні"* точки.
- Або ви можете використовувати налаштування *плагіна "Запис поїздки"*, щоб фільтрувати *"шумні"* точки вже під час запису, виходячи з вашого **досвіду** та **пристрою запису**. Ви можете фільтрувати точки за різними критеріями:
  - Точки з низькою або нульовою швидкістю.
  - Точки з поганою точністю (GPS 'hdop').
  - Точки, розташовані ближче, ніж заданий поріг у метрах.

- **Google Services API or Android API**. Ви можете додатково змінити спосіб отримання даних про місцезнаходження в OsmAnd на пристроях Android. У [Налаштування OsmAnd → Джерело місцезнаходження](../personal/global-settings.md#location-source) виберіть між **Google Play Services** та **Android API**, у багатьох випадках перемикання на **Android API** допомагає покращити записані треки та зробити їх менш "шумними".


## Recorded Tracks Have Gaps {#recorded-tracks-have-gaps}

### Configuring OsmAnd for Track Recording {#configuring-osmand-for-track-recording}

- **Prevent Standalone Logging**. Переконайтеся, що налаштування *Заборонити автономний запис* у розділі Плагіни/Запис поїздки вимкнено, щоб дозволити OsmAnd записувати треки з вимкненим екраном.
- **Update OsmAnd**. Версії Android використовують різні стратегії для зменшення споживання енергії шляхом [завершення роботи застосунків, що працюють у фоновому режимі](https://dontkillmyapp.com/). Версія 3.9 або новіша використовує службу переднього плану (Foreground service), видиму на панелі сповіщень, [щоб підтримувати роботу застосунку у фоновому режимі](https://dontkillmyapp.com/) на більшості версій Android. Це особливо ефективно на Android 8+ ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255), [Issue #5587](https://github.com/osmandapp/Osmand/issues/5587)).

### Optimizing Android for Track Recording {#optimizing-android-for-track-recording}

Починаючи з Android 4.4, функції енергозбереження можуть обмежувати використання ЦП, зменшувати яскравість екрана та закривати фонові застосунки, коли екран вимкнено. Це може вплинути на продуктивність OsmAnd під час використання на відкритому повітрі, рендерингу карти та запису треку. Пізніші версії Android додали функції енергозбереження на основі штучного інтелекту, такі як **Automatic battery** та **Automatic power saving**, що вносить динамічну та ще менш передбачувану поведінку. Щоб уникнути проблем із записом, принаймні на початковому етапі або для налагодження, **розгляньте можливість повного вимкнення функцій енергозбереження**. Користувачі повідомляють, що вплив на час роботи батареї для більшості пристроїв є прийнятним.

- **Exclude OsmAnd from *Battery optimization*.** У *Налаштуваннях* вашого пристрою Android знайдіть OsmAnd у розділі *Apps*, *Applications*, or *App Manager*. Знайдіть розділ *Battery*, *Power Savings* або *Power Consumption* та виключіть OsmAnd з оптимізації батареї. ([Issue #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Disable the *Power saving* Mode.** Цей режим має високу ймовірність вплинути/завершити роботу навіть служб переднього плану, таких як запис поїздки в OsmAnd.

- **Disable *Adaptive power saving*.** Якщо ця функція увімкнена, вона застосовуватиме загальносистемні політики на основі шаблонів використання для деактивації/активації вищезгаданого режиму "енергозбереження".

- **Disable *Adaptive battery* unless you use the OsmAnd app regularly.** *Adaptive battery* працює для кожного застосунку окремо, також на основі шаблонів використання. Її вплив на конкретний застосунок можна зменшити, виключивши цей застосунок з *Battery optimization* (наприклад, встановивши значення *Not optimized*). Однак *Adaptive battery* все ще може завершувати роботу служб переднього плану, таких як запис поїздки в OsmAnd, якщо пристрій вважає, що OsmAnd належить до вашого пулу "рідко використовуваних" застосунків.

### Tested Power Settings for Android 9, 10, and 11 (Hardy, 2020-08-25) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Наступні налаштування живлення були успішно протестовані на Android 9, 10, а пізніше і 11 (на пристроях Samsung), щоб OsmAnd записував треки без розривів. Будь ласка, перегляньте ці **10 налаштувань** і встановіть їх відповідно:

- (1) **Power saving (mode)** = OFF (or *Optimized* in Android 10)
- (2) **Adaptive power saving** = OFF (When ON, power saving mode may sometimes be activated, which prevents OsmAnd from logging.)
- (3) **Adaptive battery** = ON (Does not affect apps exempted from battery optimization anyway, see (9) below, **unless the app is used rarely**. To be safe, set to OFF.)
- (4) **Put unused apps to sleep** = ON (But exempt OsmAnd is exempted from battery optimization, see (9) below!)
- (5) **Auto disable unused apps** = OFF (Seems only present in Android 9.)
- (6) **Optimize settings** = OFF (In Android 10 under *Device care / Advanced*, in Android 11 seems gone.)
- (7) **Auto optimize (daily)** = ON (Has no effect here.)
- (8) **Auto restart (at set times)** = OFF (Has no effect here.)
- (9) **Optimize Battery Usage** (Under Android *Settings / Apps / OsmAnd / Battery* or *Settings / Apps / 3-dots / Special access / Optimize battery usage / All / OsmAnd*) = Exempt OsmAnd from battery optimization (very advisable, although not necessary if the app is user-started frequently).
- (10) **Allow background activity** = ON for OsmAnd under *Apps / OsmAnd / Battery* for Android 11

Some of these settings interact, so be accurate. The best search for the above settings by name (with and without the expressions in parentheses). Depending on your version of Android, they may be scattered over these various *Android Settings screens*:

- *Device care*
- *Device care / 3-dots / Automation*
- *Device care / Advanced*
- *Device care / Battery*
- *Device care / Battery / Settings*
- *Device care / Battery / App Power Management*
- *Device care / Battery / More battery settings*

### Control the Behavior of iOS Background Apps {#control-the-behavior-of-ios-background-apps}

iOS може автоматично призупиняти або зупиняти фонові застосунки, коли системні ресурси перерозподіляються. OsmAnd не може змінити цю поведінку. Якщо запис треку переривається, коли пристрій заблоковано, це може залишити пропуски в записі. Ви можете відредагувати ці пропуски за допомогою інструмента [Plan a Route](https://docs.osmand.net/docs/user/plan-route/create-route).

Для отримання додаткової інформації про те, як iOS обробляє відстеження місцезнаходження, перегляньте документацію Apple [тут](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


## How to Track Traveled Distance {#how-to-track-traveled-distance}

OsmAnd не має спеціального віджета, схожого на одометр, ви можете використовувати [плагін "Запис поїздки"](../plugins/trip-recording.md#new-track-recording), щоб відстежувати пройдену відстань і скидати її за потреби.  


## OsmAnd 3.9: Altitude issues when using Google Play Services {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play змінив свою політику, і для її дотримання OsmAnd, починаючи з версії 3.9 (за винятком збірок Nightly, F-Droid та Huawei), зобов'язаний використовувати Google Play Services для отримання даних про місцезнаходження під час роботи у фоновому режимі (тобто, за термінологією Android, як служба переднього плану з видимим системним сповіщенням).

Після цієї зміни, схоже, виникла проблема із записом висоти: очевидно, Google Play Services дуже агресивно інтерполюють вимірювання висоти, див. [GitHub issue #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Ця проблема стосується Android 10, можливо, не Android 11. Про [проблему](https://issuetracker.google.com/issues/180218747) вже повідомлено на вебсайті Google, і, ймовірно, її буде виправлено 09-03-2021.  

Як обхідний шлях, у [*OsmAnd Settings → Location Source*](../personal/global-settings.md#location-source) ви можете перемкнути джерело місцезнаходження з **Google Play Services** на **Android API**.


## OsmAnd 3.9: GPS wake-up now replaced by continuous foreground service (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

Починаючи з версії 3.9, коли потрібен запис треку або навігація, OsmAnd безперервно підтримує GPX через фонову службу *Android*, і це відображається як системне сповіщення *Android*.

Попередня стратегія використання режиму doze та періодичного пробудження GPS була видалена з нашого коду (коміт [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), як того вимагають нові обмеження Google Play щодо доступу до місцезнаходження у фоновому режимі. У результаті наступні розділи (A) та (B) застосовуються лише до версій OsmAnd до 3.9:

**<del> (A) GPS Wake-up Strategy</del>**

- (A1) Під час використання OsmAnd, наприклад, навігації. Ми тримаємо модуль GPS системи увімкненим весь час, оскільки безперервна інформація про місцезнаходження є ключовою тут. Вплив на використання батареї (порядок величини) становить приблизно 5% на годину на старіших системах до Android 4.4 і 2-3% для новіших систем.
- (A2) Для *фонового* запису треку без одночасної навігації. Для запису з інтервалами до 15 секунд ми також тримаємо GPS увімкненим, інші стратегії не заощаджуватимуть багато енергії батареї.
- (A3) Для інтервалів \>=30сек, ми вмикаємо GPS лише для кожної точки вибірки. Це має певний помітний вплив на точність записаних точок, але зменшує використання батареї до порядку величини 1.2% на годину для запису треку з 30-секундними інтервалами.

**<del> (B) GPS Wake-up Issues</del>**

Щоб досягти пробудження GPS, досі ми використовуємо Android Alarm Manager для періодичного пробудження пристрою (також з режиму Doze, який був введений в Android 6). Нові версії Android ввели такі проблеми:

- **(B1) Alarm Manager's setRepeating() became inexact starting with Android 4.4:**  
  Mitigation: We now use *setRepeating()* only up to Android 4.2, the new *setExact()* method starting with Android 4.4, and *setExactAndAllowWhileIdle()* for Android 8+. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Starting from Android 4.4, systems limit the number of times *setExact()* is executed repeatedly** to e.g. once per 5 or even 15 minutes. (The actual value seems wildly device-specific.)  
  No good solution found for now. Current mitigation is we do not use Alarm Manager wake-up, instead keep GPS always on for background track logging on devices with Android 5+ for all recording intervals shorter than 5 minutes. This produces reliable and precise tracks at the cost of higher battery use. ([Issue \#5632](https://github.com/osmandapp/Osmand/issues/5632))