---
source-hash: 54f960139673d7e63928d90ee9d92e56a29e0041c46723da9fc302c0ac415a0a
sidebar_position: 12
title: BRouter
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

## Огляд {#overview}

:::caution ТІЛЬКИ ДЛЯ ANDROID
Сторонній алгоритм маршрутизації BRouter доступний лише для версії програми OsmAnd для Android.
:::

*BRouter* — це сторонній алгоритм маршрутизації, який можна використовувати в програмі OsmAnd для [режиму офлайн-навігації](../guidance/navigation-settings.md#navigation-type). Він призначений для оптимізації маршруту на основі різних параметрів, таких як час, відстань або тип транспортного засобу.

[BRouter](http://brouter.de/) використовує дані OpenStreetMap для створення маршруту, а потім коригує його на основі заданих параметрів. Він використовує попередньо розраховані маршрути для швидкого створення маршруту в автономному режимі. Він також дозволяє налаштовувати профілі маршрутизації, які визначаються набором параметрів для врахування різних факторів при виборі маршруту. Файл [BRouter readme.txt](http://brouter.de/brouter/readme.txt) детальніше пояснює, як встановити та використовувати програму.

OsmAnd надає вам можливість вибирати маршрути за допомогою BRouter та налаштовувати профілі маршрутизації, щоб краще визначити маршрут відповідно до ваших потреб.

Для отримання додаткової інформації ви можете відвідати офіційний [вебсайт Brouter](http://www.brouter.de/brouter/algorithm.html).

Інтеграція BRouter в OsmAnd сильно змінилася влітку 2019 року. Цей посібник передбачає, що ви використовуєте програму BRouter для Android версії 1.5.0 або вище, а також OsmAnd версії 3.4 або вище.

:::note
Сторонній алгоритм маршрутизації BRouter доступний лише для версії програми OsmAnd для Android.
:::

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table>

## Як налаштувати {#how-to-configure}

Дотримуйтесь цього посібника, щоб встановити та налаштувати сторонню програму *BRouter Offline Navigation* для використання в OsmAnd.

**1.** Для початку вам потрібно встановити програму BRouter на свій пристрій Android з [F-Droid](https://f-droid.org/packages/btools.routingapp) або [Google Play Store](https://play.google.com/store/apps/details?id=btools.routingapp) на вашому пристрої.
**2.** Потім, щоб навігувати за допомогою програми OsmAnd за попередньо розрахованими маршрутами за допомогою BRouter, вам потрібно:

- Відкрийте програму BRouter та торкніться *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table>

- Збільште масштаб та виберіть області, в яких ви хочете прокласти маршрут. Потім натисніть "Start Download", і BRouter почне завантажувати файли [сегментів](http://brouter.de/brouter/segments4/) для вибраних областей.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table>

**Зверніть увагу**, що вам доведеться періодично повторювати цей крок, коли ви захочете мати оновлену версію даних OSM, що використовуються для маршрутизації.

**3.** Після цього знову запустіть програму BRouter та виберіть пункт "BRouter App" у *Головному меню*. Виберіть профіль маршрутизації залежно від вашого способу подорожі. Це може бути їзда на велосипеді, мопеді, піші прогулянки або трекінг. Список доступних профілів для завантаження у форматі *brf* можна знайти [тут](http://brouter.de/brouter/profiles2/). Або ви можете спробувати використовувати профіль маршрутизації в [BRouter-online](http://brouter.de/brouter-web/).
Натисніть "Service-Mode". Потім встановіть прапорці для режимів маршрутизації, для яких ви хочете використовувати цей профіль. Ви можете використовувати два різні профілі для кожного виду транспорту, які будуть відображені на "найкоротші" та "найшвидші" попередні налаштування (це лише маркування) в OsmAnd.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>

**4.** Якщо ви вже завантажували будь-які сегменти раніше, вони будуть відображені на карті BRouter. Сегменти мають чотири стани:

- *"Зелений"* квадрат – Вибрано новий сегмент для завантаження.
- *"Синій"* квадрат – Сегмент з оновленими даними.
- *"Сірий"* квадрат – Сегмент вже завантажено, але потребує оновлення.
- *"Жовтий"* квадрат – Сегмент оновлюється.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table>

**5.** Коли ви завантажили необхідні сегменти карти за допомогою BRouter та вибрали в ньому профіль маршрутизації, всі наступні налаштування цього типу навігації виконуються в програмі OsmAnd.

**6.** Ви можете створити "Профіль програми" в OsmAnd, який використовуватиме BRouter для офлайн-маршрутизації.
Використовуйте тип маршрутизації *BRouter (офлайн)* з будь-яким [профілем](../../personal/profiles.md) у програмі OsmAnd. Для цього перейдіть до головного *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>* та створіть новий профіль на основі базового профілю на ваш вибір (тут велосипедний, для велосипедної маршрутизації), з власною назвою на ваш вибір ("BRouter" на скріншоті нижче) та використовуючи "BRouter (офлайн)" для навігації.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table>

Програма BRouter повинна бути запущена до OsmAnd, щоб цей конкретний запис з'явився в OsmAnd. Тому, якщо ви не можете знайти опцію навігації "BRouter (офлайн)", вам слід примусово закрити OsmAnd та перезапустити його.

## OsmAnd версія 4.7.1 {#osmand-version-471}

Починаючи з версії 4.7.1, Osmand підтримує параметр профілю для відображення: З версії Osmand 3, багато профілів можуть бути визначені в Osmand, і ви можете легко перемикатися між цими профілями. Слід створити новий профіль, наприклад, скопіювавши існуючий профіль *Велосипед* і надавши йому нову назву у форматі Brouter[fastbike]. Ви можете використовувати будь-який з існуючих профілів BRouter у назві, які встановлені на вашому пристрої. Усі файли профілів мають формат назви 'xxxxxxx.brf'. Або ви можете створити новий власний профіль, наприклад, 'myprofile.brf'.

Угода про іменування в профілі OsmAnd важлива, оскільки профіль BRouter, включений до цього профілю, встановлює фактичний міст між OsmAnd та BRouter.

- Якщо в Osmand профіль має *BRouter*, визначений як служба навігації
- І назва профілю виглядає як "Brouter[mystring]"

Тоді профіль "mystring" буде використовуватися в програмі Brouter. Це нове відображення замінює в цьому випадку базове відображення, визначене вище та засноване на файлі "serviceconfig.dat".

### Приклади: Назва профілю Osmand-програми Brouter-програми {#examples-osmand-profile-name-brouter-app}

```xml
Brouter[trekking] буде використовуватися профіль "trekking" файл: trekking.brf
Brouter[fastbike] буде використовуватися профіль "fastbike" файл: fastbike.brf
....
```

Примітка:
Наразі Osmand не перевіряє визначену назву (чутливу до регістру) для профілю Brouter (mystring).
Якщо профіль не знайдено, маршрутизація завершиться помилкою "Не вдалося розрахувати маршрут..".

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter_profile.png').default} alt="BRouter"/>
    </tr>
</table>

## Як використовувати {#how-to-use}

У цьому розділі описується порівняння BRouter з внутрішньою маршрутизацією програми OsmAnd.

Коли BRouter налаштовано, ми можемо порівняти швидкість попереднього розрахунку даних маршрутизації BRouter з внутрішньою маршрутизацією OsmAnd. Виберемо дві випадкові точки в Нідерландах і почнемо розрахунок поїздки. Для цього ми встановлюємо збалансований стиль водіння без використання даних про висоту для базового профілю. Час розрахунку для цієї поїздки становить 14,5 секунди для нашого внутрішнього маршруту OsmAnd. Час розрахунку маршруту при використанні маршрутизації BRouter становить менше 1 секунди.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table>

## Параметри маршруту {#route-parameters}

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> <Translate android="true" ids="fast_route_mode_descr"/> | У більшості випадків буде запропоновано найкоротший маршрут. Часто цей маршрут може зайняти більше часу, ніж якщо б налаштування було вимкнено |
| *<Translate android="true" ids="temporary_conditional_routing"/>* | Прочитайте про опцію "Враховувати тимчасові обмеження" в цій [статті](../routing/osmand-routing.md#consider-temporary-limitations). | Алгоритм маршрутизації враховує часові обмеження, зазначені в OpenStreetMap. Зверніть увагу, що в деяких випадках інформація з OSM може бути застарілою. |

### Інші налаштування маршрутизації {#other-routing-settings}

- ***<Translate android="true" ids="calculate_osmand_route_without_internet"/>*** (*Навігація → Налаштування*, [зображення](../routing/online-routing.md#online-routing-setting)). Якщо ця опція увімкнена, OsmAnd додає два сегменти до розрахованого треку Brouter: один від *[Моє місцезнаходження](../../map/interact-with-map.md#my-location-and-zoom)* до початкової точки треку, а інший від кінця треку до кінцевої точки вашого маршруту. Ця опція активна, якщо відстань до або від треку перевищує 60 метрів.

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* ви можете увімкнути та налаштувати параметри перерахунку маршруту.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* ви можете спробувати нові функції маршрутизації, які наразі перебувають на стадії тестування. Зверніть увагу, що ці налаштування доступні лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md).