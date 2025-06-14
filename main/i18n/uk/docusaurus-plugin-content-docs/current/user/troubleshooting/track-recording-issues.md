---
source-hash: b20d566784f9980fe5e20bf7150aed84f093a993d25503654c0a929b88a08bd6
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

Ця стаття охоплює проблеми запису треків GPX, які спостерігаються протягом тривалого часу в різних версіях Android та iOS. Під **фоном** ми розуміємо, що додаток OsmAnd не відображається на передньому плані, особливо коли екран пристрою вимкнено (що відрізняється від внутрішнього визначення *фону* в пристроях).

**Примітки**:

- Починаючи з Android 11 (2020/12), більше немає системної опції дозволу *Завжди дозволяти* доступ до місцезнаходження для використання у фоновому режимі, але це **не обмежує** фоновий запис треків OsmAnd. Згідно з документацією Google, це тепер вважається **використанням на передньому плані**, оскільки дозвіл на використання служби на передньому плані використовується внутрішньо, і системне сповіщення про запис треку завжди видно.

- Зверніть увагу, що нове формулювання Android може вводити в оману:

  - **Дозволити під час використання додатка** означає, що додаток може безперервно отримувати дані про місцезнаходження, доки він відображається на екрані або має видиме сповіщення в панелі сповіщень *Android*, як це відбувається в OsmAnd під час навігації або запису поїздки. (Технічно це називається *режим переднього плану*).

  - **Дозволити весь час**, з іншого боку, означає, що додаток в принципі може отримувати ваше місцезнаходження "непомітно" без застосування жодної з цих умов. Але *Android* обмежує частоту доступу до місцезнаходження в цьому (*фоновому*) режимі приблизно до одного разу на годину, що, безумовно, не є правильним режимом для навігаційного додатка.


## Записані треки шумні {#recorded-tracks-are-noisy}

Існує 2 типові проблеми з точністю, що призводять до *безладного* записаного треку.

- Довше стояти на одному місці.
- Поганий сигнал GPS та перехід на визначення місцезнаходження за сигналом мережі.

Дії, які ви можете виконати:

- Ви можете уникнути таких проблем, використовуючи **Паузу**, щоб перервати запис за таких умов.
- Також можна пізніше відредагувати трек та видалити *"шумні"* точки.
- Або ви можете використовувати налаштування *Плагіна запису поїздки*, щоб фільтрувати *"шумні"* точки вже під час запису, ґрунтуючись на вашому **досвіді** та **пристрої запису**. Ви можете відфільтрувати точки за різними критеріями:
  - Точки з низькою або нульовою швидкістю.
  - Точки з поганою точністю (GPS 'hdop').
  - Точки ближче за поріг у метрах.

- **Google Services API або Android API**. Ви можете додатково змінити спосіб отримання даних про місцезнаходження OsmAnd на пристроях Android. У [Налаштуваннях OsmAnd → Джерело місцезнаходження](../personal/global-settings.md#location-source) виберіть між **Google Play Services** та **Android API**, у багатьох випадках перехід на **Android API** допомагає покращити записані треки та зробити їх менш шумними.


## Записані треки мають прогалини {#recorded-tracks-have-gaps}

Починаючи з Android 4.4, функції енергозбереження можуть обмежувати використання процесора, зменшувати яскравість екрана та закривати фонові додатки, коли екран вимкнено. Це може впливати на продуктивність OsmAnd для використання на вулиці, відображення карти та запис треків. Щоб уникнути проблем, розгляньте можливість повного вимкнення функцій енергозбереження. За досвідом користувачів, це мало впливає на час роботи батареї для більшості пристроїв.

### Налаштування OsmAnd для запису треків {#configuring-osmand-for-track-recording}

- **Запобігти автономному запису**. Переконайтеся, що налаштування *Запобігти автономному запису* в розділі Плагіни/Запис поїздки деактивовано, щоб дозволити OsmAnd записувати треки з вимкненим екраном.
- **Оновити OsmAnd**. Версії Android використовують різні стратегії для зменшення споживання енергії шляхом [закриття додатків, що працюють у фоновому режимі](https://dontkillmyapp.com/). Версія 3.9 або вище використовує службу переднього плану, видиму в панелі сповіщень, [щоб додаток працював у фоновому режимі](https://dontkillmyapp.com/) на більшості версій Android. Це особливо ефективно на Android 8+ ([Проблема #5255](https://github.com/osmandapp/Osmand/issues/5255), [Проблема #5587](https://github.com/osmandapp/Osmand/issues/5587)).


### Оптимізація Android для запису треків {#optimizing-android-for-track-recording}

- **Виключити OsmAnd з оптимізації енергоспоживання**. У налаштуваннях живлення або енергозбереження вашого пристрою Android знайдіть OsmAnd у розділі *Додатки*, *Програми* або *Менеджер додатків*. Знайдіть *Енергозбереження* або *Споживання енергії* та виключіть OsmAnd з оптимізації енергоспоживання. ([Проблема #5255](https://github.com/osmandapp/Osmand/issues/5255))
  
- **Вимкнути режим енергозбереження**. Повне вимкнення енергозбереження Android може допомогти, особливо на старих версіях Android. Це може вирішити проблеми з продуктивністю під час запису треків або навігації.

### Контроль поведінки фонових додатків iOS {#control-the-behavior-of-ios-background-apps}

iOS може автоматично призупиняти або зупиняти фонові додатки, коли системні ресурси перерозподіляються. OsmAnd не може перевизначити цю поведінку. Якщо запис треку переривається, коли пристрій заблоковано, це може залишити прогалини в записі. Ви можете редагувати ці прогалини за допомогою інструменту [Планування маршруту](https://docs.osmand.net/docs/user/plan-route/create-route).

Для отримання додаткової інформації про те, як iOS обробляє відстеження місцезнаходження, перегляньте документацію Apple [тут](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html#//apple_ref/doc/uid/TP40009497-CH2-SW1).


### Перевірені налаштування живлення для Android 9, 10 та 11 (Hardy, 2020-08-25) {#tested-power-settings-for-android-9-10-and-11-hardy-2020-08-25}

Наступні налаштування живлення були успішно перевірені на Android 9, 10 та пізніше 11 (на пристроях Samsung), щоб OsmAnd записував треки без прогалин. Будь ласка, перегляньте ці **10 налаштувань** та встановіть їх відповідно:

- (1) **Енергозбереження (режим)** = ВИМКНЕНО (або *Оптимізовано* в Android 10)
- (2) **Адаптивне енергозбереження** = ВИМКНЕНО (Коли УВІМКНЕНО, іноді може активуватися режим середнього енергозбереження, що перешкоджає запису OsmAnd)
- (3) **Адаптивна батарея** = УВІМКНЕНО (не повинно впливати на додатки, звільнені від оптимізації батареї, див. (9) нижче)
- (4) **Переводити невикористовувані додатки в режим сну** = ВИМКНЕНО (УВІМКНЕНО, ймовірно, також нормально, якщо OsmAnd звільнено від оптимізації батареї, див. (9) нижче)
- (5) **Автоматично вимикати невикористовувані додатки** = ВИМКНЕНО (здається, присутнє лише в Android 9)
- (6) **Оптимізувати налаштування** = ВИМКНЕНО (в Android 10 під *Догляд за пристроєм / Додатково*, в Android 11, здається, зникло)
- (7) **Автоматична оптимізація (щоденно)** = УВІМКНЕНО (ймовірно, не має значення)
- (8) **Автоматичний перезапуск (у встановлений час)** = ВИМКНЕНО (ймовірно, не має значення)
- (9) **Оптимізувати використання батареї** (під *Додатки / OsmAnd / Батарея* або *Додатки / 3 крапки / Спеціальний доступ / Оптимізувати використання батареї / Усі / OsmAnd*) = бажано звільнити OsmAnd від оптимізації батареї (хоча не обов'язково на всіх пристроях)
- (10) **Дозволити фонову активність** = УВІМКНЕНО для OsmAnd під *Додатки / OsmAnd / Батарея* для Android 11

Деякі з цих налаштувань взаємодіють, тому будьте точними. Найкращий пошук для вищезазначених налаштувань за назвою (з виразами в дужках і без них). Залежно від вашої версії Android, вони можуть бути розкидані по різних *екранах налаштувань Android*:

- *Догляд за пристроєм*
- *Догляд за пристроєм / 3 крапки / Автоматизація*
- *Догляд за пристроєм / Додатково*
- *Догляд за пристроєм / Батарея*
- *Догляд за пристроєм / Батарея / Керування живленням додатків*
- *Догляд за пристроєм / Батарея / Додаткові налаштування батареї*


## Як відстежувати пройдену відстань {#how-to-track-traveled-distance}

OsmAnd не має спеціального віджета, схожого на одометр, ви можете використовувати [плагін Запис поїздки](../plugins/trip-recording.md#new-track-recording), щоб відстежувати пройдену відстань та скидати її за потреби.


## OsmAnd 3.9: Проблеми з висотою при використанні Google Play Services {#osmand-39-altitude-issues-when-using-google-play-services}

Google Play змінив свою політику, і для відповідності, OsmAnd, починаючи з версії 3.9 (за винятком Nightly, F-Droid та Huawei збірок), зобов'язаний використовувати Google Play Services для отримання даних про місцезнаходження під час роботи у фоновому режимі (тобто, в термінології Android, як служба переднього плану з видимим системним сповіщенням).

Після цієї зміни, здається, виникла проблема із записом висоти: Очевидно, Google Play Services дуже агресивно інтерполює вимірювання висоти, див. [проблему GitHub #10864](https://github.com/osmandapp/OsmAnd/issues/10864). Ця проблема стосується Android 10, можливо, не Android 11. [Проблема](https://issuetracker.google.com/issues/180218747) вже була повідомлена на вебсайті Google, і, ймовірно, буде виправлена 09-03-2021.

Як обхідний шлях, у [*Налаштуваннях OsmAnd → Джерело місцезнаходження*](../personal/global-settings.md#location-source) ви можете змінити джерело місцезнаходження з **Google Play Services** на **Android API**.


## OsmAnd 3.9: GPS wake-up тепер замінено безперервною службою переднього плану (2020/12) {#osmand-39-gps-wake-up-now-replaced-by-continuous-foreground-service-202012}

Починаючи з версії 3.9, коли потрібен запис треку або навігація, OsmAnd безперервно підтримує GPX через фонову службу *Android*, і це видно як системне сповіщення *Android*.

Попередня стратегія використання режиму сну та періодичного GPS Wake-Up була видалена з нашого коду (комміт [Drop waking navigation service on alarm](https://github.com/osmandapp/OsmAnd/commit/950a9cc8f8660b3f3d750391ddc1429d5dc38b34)), як того вимагають нові обмеження Google Play на доступ до місцезнаходження у фоновому режимі. В результаті, наступні розділи (A) та (B) застосовуються лише до версій OsmAnd до 3.9:

**<del> (A) Стратегія GPS Wake-up</del>**

- (A1) Під час використання OsmAnd, наприклад, навігації. Ми тримаємо GPS-модуль системи увімкненим весь час, оскільки безперервна інформація про місцезнаходження є ключовою. Вплив на використання батареї (порядок величини) становить близько 5% на годину на старих системах до Android 4.4, і 2-3% на новіших системах.
- (A2) Для *фонового* запису треку без одночасної навігації. Для запису з інтервалами до 15 секунд ми також тримаємо GPS увімкненим, інші стратегії не заощадять багато енергії батареї.
- (A3) Для інтервалів >=30 секунд ми вмикаємо GPS лише для кожної точки вибірки. Це має помітний вплив на точність записаних точок, але зменшує використання батареї до порядку величини 1.2% на годину для запису треку з інтервалом 30 секунд.

**<del> (B) Проблеми з GPS Wake-up</del>**

Для досягнення GPS wake-up, досі ми використовуємо Android Alarm Manger для періодичного пробудження пристрою (також з режиму Doze, який був введений в Android 6). Нові версії Android представили наступні проблеми:

- **(B1) setRepeating() Alarm Manager став неточним, починаючи з Android 4.4:**
  Вирішення: Тепер ми використовуємо *setRepeating()* лише до Android 4.2, новий метод *setExact()* починаючи з Android 4.4, та *setExactAndAllowWhileIdle()* для Android 8+. ([Проблема #5632](https://github.com/osmandapp/Osmand/issues/5632))
- **(B2) Починаючи з Android 4.4, системи обмежують кількість разів, коли *setExact()* виконується повторно**, наприклад, до одного разу на 5 або навіть 15 хвилин. (Фактичне значення, здається, сильно залежить від пристрою.)
  Хорошого рішення поки не знайдено. Поточне вирішення полягає в тому, що ми не використовуємо Alarm Manager wake-up, натомість тримаємо GPS завжди увімкненим для фонового запису треків на пристроях з Android 5+ для всіх інтервалів запису коротших за 5 хвилин. Це забезпечує надійні та точні треки за рахунок вищого використання батареї. ([Проблема #5632](https://github.com/osmandapp/Osmand/issues/5632))