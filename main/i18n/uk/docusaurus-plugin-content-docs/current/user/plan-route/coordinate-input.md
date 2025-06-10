---
source-hash: e47e6068fb2626d1ab56936c2f0b26002fee1e3a180ce6332d4ca53fafd316b7
sidebar_position: 3
title:  Введення координат
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



<InfoAndroidOnly />

## Огляд {#overview}

*Введення координат* — це простий і легкий у використанні інструмент для створення точок маршруту шляхом визначення їхнього географічного розташування. Ця функція може бути корисною для навігації до певних місць, які ви знаєте лише за їхніми координатами: додані точки можна [зберегти](#save-as-track) як GPX-трек і використовувати пізніше для [GPX-навігації](../navigation/setup/gpx-navigation.md) або [навігації за маркерами](../navigation/setup/markers-navigation.md#add-gpx).

![Огляд введення координат](@site/static/img/plan-route/coordinates_input/coordinates_input_overview.png)

## Як використовувати {#how-to-use}

Ви можете створити точки маршруту з меню *[Маркери на мапі](../personal/markers.md#map-markers-menu)* або з [Мої місця](../personal/myplaces.md) (див. скріншоти). Будь ласка, дотримуйтесь цих шляхів, щоб дістатися до опції введення координат:
  - *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Кнопка Земля внизу екрана*
  - *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*

![Введення координат як знайти](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_1.png) ![Введення координат як знайти](@site/static/img/plan-route/coordinates_input/coordinates_input_how_to_find_2.png)

Після того, як ви відкрили екран введення координат:

- &nbsp;Переконайтеся, що використовуються правильні [одиниці вимірювання](#coordinates-format). Якщо ні, змініть формат координат у меню [Опції](#options).
- &nbsp;Введіть координати точки за допомогою [шаблону](#add-a-point). Після натискання кнопки *[Додати](#add-a-point)* ваша точка буде додана до *[списку точок](#points-list)*. За необхідності ви можете ввести додаткові точки.
- &nbsp;Збережіть свою точку (точки) як *[Трек](../personal/tracks/manage-tracks.md)* за допомогою *[Меню опцій](#options)* або &#8592; *(Назад)*.

:::note
Результати створення точок за координатами - *[GPX-трек](../personal/tracks/manage-tracks.md)* з точками маршруту - можна знайти в меню [Мої місця](../personal/myplaces.md) (*папка <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*).
:::

## Опції {#options}

За допомогою меню опцій ви можете [зберегти](#save-as-track) додані точки як трек, активувати розширені опції введення (системна клавіатура та двозначна довгота) або змінити формат координат.

![Меню опцій введення координат Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)

- &nbsp;*<Translate android="true" ids="coord_input_save_as_track"/>* - відкриває діалогове вікно, яке дозволяє зберегти створену точку (або точки) як GPX-трек. Ви можете змінити назву треку або залишити її за замовчуванням.
- &nbsp;*<Translate android="true" ids="use_system_keyboard"/>* - дозволяє використовувати системну клавіатуру Android для введення координат.
- &nbsp;*<Translate android="true" ids="use_two_digits_longitude"/>* - дозволяє вводити дані довготи лише двома цифрами. Це може бути корисно для довгот від 0° до 99° (наприклад, у Європі).
- &nbsp;*<Translate android="true" ids="coordinates_format"/>* - дозволяє змінити формат координат для введення.

### Формат координат {#coordinates-format}

При введенні координат важливо переконатися, що використовуються відповідні одиниці вимірювання. Ми підтримуємо десяткові градуси (DD), градуси та хвилини, або градуси, хвилини та секунди (DMS).

|Формат координат| Приклад |
|:------|:------|
|<Translate android="true" ids="dd_ddddd_format"/> |23.48125°|
|<Translate android="true" ids="dd_dddddd_format"/> | 23.481251°|
|<Translate android="true" ids="dd_mm_mmm_format"/> | 23°27.215′|
|<Translate android="true" ids="dd_mm_mmmm_format"/> | 23°27.2152′|
|<Translate android="true" ids="dd_mm_ss_format"/> | 23°27′30″|

## Додати точку {#add-a-point}

Після вибору правильних одиниць ви готові ввести координати майбутніх точок маршруту.
Екран введення координат складається з наступних елементів:

![Меню введення координат Android](@site/static/img/plan-route/coordinates_input/coordinates_input_add_point.png)

- &nbsp;*<Translate android="true" ids="shared_string_options"/>*. Відкриває меню *[Опції](#options)* (описано вище).
- &nbsp;*<Translate android="true" ids="navigate_point_latitude"/> / <Translate android="true" ids="navigate_point_longitude"/>*. Використовується для введення даних у вибраному форматі (D - градуси, M - хвилини, S - секунди). Ви можете змінити формат координат у *[меню <Translate android="true" ids="shared_string_options"/>](#options)*.
- &nbsp;Кнопки півкулі *<Translate android="true" ids="navigate_point_latitude"/> та <Translate android="true" ids="navigate_point_longitude"/>*. Дозволяють змінювати сторони горизонту: *Південь - Північ* та *Захід - Схід*.
- &nbsp;Поле *Назва точки*. Ви можете залишити назву за замовчуванням або придумати свою.
- &nbsp;Кнопка *X*. Очищає поле введення відповідного рядка.

### Коротка клавіатура {#short-keyboard}

Для введення даних можна використовувати коротку клавіатуру (за замовчуванням) або системну (Android) клавіатуру. Щоб змінити спосіб введення, перейдіть до меню *[Опції](#options)*. Після введення широти та довготи ви можете додати точку до *[списку](#points-list)* за допомогою кнопки *+Додати*.

![Введення координат Додати точку Android](@site/static/img/plan-route/coordinates_input/coordinates_input_keyboard.png)

- Кнопка *<Translate android="true" ids="shared_string_add"/>* дозволяє зберегти точку в *[Списку точок](#points-list)*.
- Кнопка *<Translate android="true" ids="shared_string_clear"/>* скидає всі введені дані.
- &#9032; дозволяє перейти до наступного значення.
- *Кнопки клавіатури* дозволяють вводити дані, видаляти їх, переходити до наступного значення координати, приховувати клавіатуру.

### Список точок {#points-list}

Показує вже створені точки: назву, відстань та напрямок до цієї точки.

![Введення координат зберегти точку Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_1.png) ![Введення координат зберегти точку Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_points_list_2.png)

Кнопка **⁝** відкриває меню дій для редагування або видалення вибраної точки.
При натисканні на точку стає можливим змінити її координати. Натисніть кнопку *Застосувати*, щоб зберегти зміни.

## Зберегти як трек {#save-as-track}

Щоб зберегти ваші точки як трек, натисніть кнопку *Назад* ( &#8592; ) або скористайтеся меню *[Опції](#options)*.

![Введення координат зберегти точку Android 1](@site/static/img/plan-route/coordinates_input/coordinates_input_save.png) ![Введення координат зберегти точку Android 2](@site/static/img/plan-route/coordinates_input/coordinates_input_my_places_list.png)

У спливаючому меню ви можете ввести власну назву треку або зберегти її за замовчуванням. Натисніть <Translate android="true" ids="shared_string_save"/>, щоб зберегти додані точки як новий трек.
Ви знайдете свій трек у [меню Мої місця](../personal/myplaces.md) (<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>).