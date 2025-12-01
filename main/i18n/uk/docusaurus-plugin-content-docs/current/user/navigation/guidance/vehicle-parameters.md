---
source-hash: 4e8a3309a2bf429582c639f9c175de6db52d66c53f5483573c9c43e9ddf5a4ad
sidebar_position: 4
title:  Параметри транспортного засобу
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


## Огляд

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Для оптимального розрахунку маршруту в OsmAnd слід враховувати наступні параметри транспортного засобу:

1. Встановіть [*Стандартну швидкість* або *Швидкості на дорогах*](#road-speeds), як [мінімальну та максимальну швидкість](#road-speeds) транспортного засобу. Це допоможе додатку визначити час, необхідний для проходження маршруту, і дозволить вибрати найкращий маршрут, враховуючи обмеження швидкості на різних ділянках доріг.
2. Вкажіть [*тип*](#fuel-used-by-motor) пального, що використовується двигуном. Це дозволить додатку оцінити викиди CO2.
3. Введіть [*об'єм вашого бака*](#fuel-tank-capacity), щоб точно відстежувати рівень та споживання пального.
4. Визначте [*параметри розміру та ваги*](#size-parameters) вашого транспортного засобу, що допоможе додатку розрахувати оптимальний маршрут та уникнути перешкод на дорозі через обмеження.

Правильне налаштування параметрів у додатку OsmAnd допоможе вам уникнути проблем під час навігації по маршруту, вибрати найбільш відповідний маршрут згідно з типом транспортного засобу та дорожніми обмеженнями, а також розрахувати час вашої поїздки.


## Параметри розміру {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Параметри транспортного засобу впливають на навігацію та побудову маршруту, оскільки вони визначають доступність доріг, мостів, поромів, дамб та іншої інфраструктури. Якщо висота, ширина, довжина або вага транспортного засобу перевищують допустимі значення для певних ділянок доріг, навігаційна система OsmAnd знайде альтернативний маршрут, щоб уникнути перешкод на шляху.  

- Одиниці вимірювання відповідатимуть налаштуванням, вибраним у *Загальні налаштування → [Одиниці вимірювання та формати](../../personal/profiles.md#units--formats)*.
- Параметри транспортного засобу можна встановити вручну.
- Якщо ви вручну вибираєте параметр вимірювання транспортного засобу, додаток запропонує вам найближче значення з готового списку. Це необхідно для уникнення помилок та більш коректної побудови маршруту.
- Ви можете вибрати параметри транспортного засобу з готового списку розмірів.
- Не встановлюйте розмір *Немає*, що означає, що до вибраного параметра не будуть застосовуватися жодні обмеження.  

### Обмеження {#limits}

**1.** [**Обмеження <Translate android="true" ids="routing_attr_weight_name"/>**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Параметр "Вага" доступний лише для таких типів навігації, як [*Автомобіль, Вантажівка* та *Мотоцикл*](../../navigation/routing/car-based-routing.md).  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**Обмеження <Translate android="true" ids="routing_attr_height_name"/>**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Параметр "Висота" доступний лише для таких типів навігації, як *[Автомобіль, Вантажівка, Мотоцикл](../../navigation/routing/car-based-routing.md)* та *[Човен](../../navigation/routing/boat-navigation.md)*.  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**Обмеження <Translate android="true" ids="routing_attr_length_name"/>**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Параметр "Довжина" доступний лише для таких типів навігації, як [*Автомобіль, Вантажівка* та *Мотоцикл*](../../navigation/routing/car-based-routing.md).  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**Обмеження <Translate android="true" ids="routing_attr_width_name"/>**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Параметр "Ширина" доступний лише для таких типів навігації, як *[Автомобіль, Вантажівка, Мотоцикл](../../navigation/routing/car-based-routing.md)* та *[Човен](../../navigation/routing/boat-navigation.md)*.  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

**5.** [**Обмеження максимального навантаження на вісь**](https://wiki.openstreetmap.org/wiki/Key:maxaxleload) - Вкажіть максимальне навантаження на вісь вашого транспортного засобу, щоб уникнути доріг та мостів з обмеженнями ваги на вісь. Цей параметр доступний лише для таких типів навігації, як [*Вантажівка*](../../navigation/routing/car-based-routing.md).  

![Налаштування навігації Android](@site/static/img/navigation/max_axle_load.png)

**6.** [**Максимальна вага при повному завантаженні**](https://wiki.openstreetmap.org/wiki/Key:maxweightrating) - Вкажіть максимальну загальну вагу вашого транспортного засобу при повному завантаженні, щоб уникнути доріг та мостів з обмеженнями загальної ваги. Цей параметр доступний лише для таких типів навігації, як [*Вантажівка*](../../navigation/routing/car-based-routing.md).  

![Налаштування навігації Android](@site/static/img/navigation/max_weight_at_full_load.png)

Обмеження параметрів транспортного засобу можуть бути важливими для навігації та безпеки дорожнього руху. Деякі з цих обмежень можуть включати:  

1. Обмеження на рух транспортних засобів у певних міських районах.  
2. Обмеження на рух транспортних засобів на певних ділянках доріг, наприклад, там, де є мости, тунелі з обмеженим простором, низькі естакади, складні повороти або інші споруди.  
3. Обмеження ваги на вісь транспортного засобу можуть бути особливо важливими для вантажівок.
4. Обмеження для транспортних засобів, що рухаються в певних умовах, таких як висока температура, мокрі або засніжені дороги, вночі або в погодних умовах з обмеженою видимістю.


## Параметри пального {#fuel-parameters}

### Тип пального двигуна {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Маршрут навігації Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Маршрут навігації iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Якщо ви виберете тип двигуна в параметрах транспортного засобу, дані про [***вуглецевий слід CO2***](../../navigation/setup/route-details.md#elevation-info) будуть відображатися над графіком у [Деталях маршруту](../setup/route-details.md).
Доступні шість типів пального: ***Бензин, Дизель, ЗНГ (LPG), СПГ (CNG), Електрика,*** та ***Гібрид***.  

**Застосовність:**

Налаштування **Тип пального двигуна** доступне лише для навігації на транспортних засобах, таких як *[Автомобіль, Мотоцикл та Вантажівка](../../navigation/routing/car-based-routing.md)*.


### Об'єм паливного бака {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


Параметр **Об'єм паливного бака** дозволяє точніше відстежувати [рівень пального](../../widgets/info-widgets.md#vehicle-metrics-widgets) та його [витрату](../../widgets/info-widgets.md#vehicle-metrics-widgets) у вашому транспортному засобі, вказавши загальний об'єм бака. Значення за замовчуванням становить ~50 ***літрів***. Одиниця вимірювання об'єму пального визначається в [Профілі (Налаштування)](../..//personal/profiles.md#units--formats), налаштованому в *Меню → Налаштувати профіль → Загальні налаштування → Одиниці вимірювання та формати → Одиниця об'єму*.

**Застосовність:**

Налаштування **Об'єм паливного бака** доступне лише для навігації на транспортних засобах. Для таких типів навігації, як *Велосипед*, *Верхова їзда*, *Пішки* та *Лижі*, цей параметр не відображається в Параметрах транспортного засобу.

## Параметри швидкості

### Стандартна швидкість {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування навігації](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

**Стандартна швидкість** — це швидкість руху за замовчуванням для цього виду транспорту ([Стандартні обмеження швидкості](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Для профілів *Пішки*, *Верхова їзда* та *Велосипед* — з невеликим кроком, еквівалентним 0.1 км/год (миль/год) ([Одиниці вимірювання та формати](https://osmand.net/docs/user/personal/profiles#units--formats)), а для інших профілів — з кроком, еквівалентним 1 км/год (1 миля/год). Вона використовується:
- Для оцінки [часу маршруту](../../widgets/nav-widgets.md#time-to-intermediate), коли швидкість не може бути визначена з доріг, як-от у [навігації по GPX треку](../setup/gpx-navigation.md), на [лижних маршрутах](../routing/ski-routing.md), [маршрутах для човнів](../routing/boat-navigation.md), [пішохідних](../routing/pedestrian-routing.md) та інших подібних профілях.
- Для визначення моменту активації [голосових підказок](../guidance/voice-navigation.md).
- Для визначення орієнтовного часу прибуття (ETA) до маркерів на карті при навігації по прямій, якщо середня швидкість ще не розрахована.



 Вона використовується для розрахунку часу прибуття та визначення оптимального маршруту на основі швидкості руху, яку додаток вважає типовою. Наприклад, для автомобіля, громадського транспорту, пішохода або швидкості, яку ви встановили вручну.


### Швидкості на дорогах {#road-speeds}


![Налаштування навігації](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

Для деяких типів навігації можна встановити мінімальну та максимальну допустиму швидкість. Якщо її встановлено, то рушій маршрутизації припускає, що транспортний засіб не буде рухатися швидше за обмеження і не буде рухатися повільніше за мінімальну швидкість. 
Наприклад, це дозволяє створити **паливно-ефективний** маршрут, де споживання пального є оптимальним при встановленій **максимальній швидкості**, і рушій знайде коротший маршрут, уникаючи довших, але швидших доріг.

- **Мінімальна швидкість**  
    Це налаштування встановлює мінімальну швидкість руху для всіх типів доріг на маршруті. Воно підвищує пріоритет для доріг з рекомендованою швидкістю, нижчою за мінімальну.  
- **Максимальна швидкість**  
    Це налаштування встановлює максимальну швидкість руху і знижує пріоритет для доріг з можливою швидкістю, вищою за максимальну.




## Пов'язані статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Налаштування навігації](./navigation-settings.md)
- [Голосові підказки / Сповіщення](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)