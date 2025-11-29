---
source-hash: fb6d615d3272ebc54d4244753eb6fc369c05162044837973b9f3031ced24140a
sidebar_position: 1
title:  Спеціальні можливості
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

:::caution Примітка
Плагін Спеціальні можливості доступний лише у **версії для Android** OsmAnd. [Версія для iOS](#how-to-use-ios) покладається на стандартні налаштування доступності системи.
:::

## Огляд {#overview}

Спеціальні можливості покращують зручність використання для незрячих та людей зі слабким зором завдяки інтеграції з інструментами [Android Accessibility](https://www.android.com/accessibility/). Плагін пропонує **перетворення тексту в мовлення, керування жестами, автоматичні оголошення** та **тактильний відгук**, щоб зробити навігацію доступнішою. На iOS OsmAnd використовує вбудовані функції доступності Apple, такі як VoiceOver.


### Як користуватися (Android) {#how-to-use-android}

![Спеціальні можливості](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Увімкніть плагін Спеціальні можливості:***  

1. **Активуйте плагін**: *Меню → Плагіни → Спеціальні можливості → Увімкнути*.

2. **Увімкніть режим доступності**:  
   - Перейдіть до *Налаштування системи → Доступність* на вашому пристрої Android.
   - Увімкніть TalkBack або інший програвач екрана.

3. **Налаштуйте параметри плагіна**:  
   - Відкрийте [налаштування доступності](#plugin-settings) у додатку OsmAnd.
   - Налаштуйте функції, такі як швидкість мовлення, автооголошення та тактильний відгук.

<br/>

***Функції та можливості:***

- **Керування жестами**:
  - Підтримує всі стандартні [жести OsmAnd](../map/interact-with-map.md#gestures).
  - Налаштовує жести відповідно до інструкцій **TalkBack** Android.

- **Інтеграція з TalkBack**:
  - Програвач екрана TalkBack пропонує аудіоінструкції для навігації та взаємодії з меню.
  - Дізнайтеся більше про жести TalkBack [тут](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Операції у фоновому режимі**. Аудіо та тактильний відгук продовжуються навіть коли екран вимкнено або заблоковано.

- **Дії кнопки компаса**:

| Жест | Дія | Еквівалент TalkBack |
|-----|-----|-----|
| **Один дотик** | Обертає карту до **Півночі** | **Подвійний дотик** |
| **Довгий дотик** | Відкриває список [орієнтацій карти](../map/interact-with-map.md#map-orientation-modes) | **Подвійний дотик і утримання** |
| **Подвійний дотик** | *Недоступно в режимі доступності* | *Не підтримується* |


### Як користуватися (iOS) {#how-to-use-ios}

Версія OsmAnd для iOS використовує **вбудовані інструменти доступності** системи.

1. **Увімкніть VoiceOver**:
   - Перейдіть до *Налаштування → Доступність → VoiceOver*.
   - Налаштуйте **жести VoiceOver** для використання з OsmAnd.

2. **Підтримувані функції**:
   - **Підтримка програвача екрана** для взаємодії з картою.
   - **Налаштовувані жести** через налаштування iOS.
   - Усі стандартні [жести OsmAnd](../map/interact-with-map.md#gestures) доступні.

3. **Дізнайтеся більше**:
   - Прочитайте про функції доступності Vision для iOS [тут](https://www.apple.com/accessibility/vision/).
   - Дослідіть жести VoiceOver для iPhone [тут](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб активувати функції доступності пристрою в OsmAnd, вам потрібно внести такі налаштування:

1. **Увімкніть** [плагін Спеціальні можливості](../plugins/index.md#enable--disable):  *Меню → Плагіни → Спеціальні можливості → Увімкнути*.  
2. **Увімкніть режим доступності** на вашому пристрої.
3. Налаштуйте [налаштування](#plugin-settings) плагіна Спеціальні можливості.


## Налаштування плагіна {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Спеціальні можливості](@site/static/img/plugins/accessibility/access_new.png)  

Плагін Спеціальні можливості пропонує різні налаштування для персоналізації навігації та взаємодії для користувачів з інвалідністю. Ці налаштування застосовуються за [профіль](../personal/profiles.md) в OsmAnd.

| Налаштування                   | Опис |  
|---------------------------|-------------|  
| **Режим доступності**    | Увімкнює *вбудовані функції OsmAnd* або використовує **налаштування системи**. |  
| **Швидкість мовлення**           | Керує *швидкістю перетворення тексту в мовлення*, від **50% до 200%**. |  
| **Збільшення при щипку**    | Тимчасово збільшує карту під час щипкового масштабування, коли ви тримаєте пальці на екрані, збільшуючи текст та іконки без зміни фактичного рівня масштабування. |  
| [Smart Autoannounce](#smart-autoannounce)    | Надає *голосові інструкції* при відхиленні від маршруту. |  
| **Період автооголошення**   | Встановлює мінімальний час між оголошеннями, від **5 секунд до 5 хвилин**. |  
| [Стиль напрямку](#direction-style)       | Оберіть між *Боковим (8 напрямків)* або *За годинниковою стрілкою (12 напрямків)*. |  
| **Аудіо напрямки**      | Відтворює *аудіо інструкції* що вказують напрямок. |  
| **Тактильні напрямки**     | Надає *вібраційний відгук* для поворотів та відхилень.|  

<!--
- **Accessibility Mode**. Enable special tools that help people with disabilities interact with the OsmAnd app. There are three modes: *On* - turns on the built-in OsmAnd features, *Off* - turns off all plugin features, and *According to the Android system settings* - turns on Android system settings.

- **Speech rate**. Adjust the speech rate of the text-to-speech, ranging from 50%  to 200%.

- **Smart autoannounce**. If enabled, you will receive voice announcements when you deviate from the set track.

- **Autoannounce period**. This is an automatic announcement of the direction and distance to your destination. You can select a minimal time between announcements, ranging from 5 seconds to 5 minutes.

- **Direction style**. Choose how the OsmAnd app will notify you about directions. *Sidewise* - indicates the direction to the sides of the world (8 directions), *Clockwise* - indicates directions oriented to the clock face (12 directions).

- **Audio directions**. Provides feedback when navigating by indicating the direction to the target point with sound.

- **Haptic directions**. This setting provides haptic feedback when navigating. The vibration indicates the direction to the target point and deviations from the path.
-->

<br/>

***Поради для оптимізованого доступу:***

- **Програвач екрана** - Використовуйте TalkBack (*Android*) або VoiceOver (*iOS*) для покращеної взаємодії з картою.
- **Аудіо навігація** - Увімкніть автоматичне оголошення для отримання голосових напрямків, коли екран вимкнено.
- **Тактильний відгук** - Ідеально для середовищ з низькою видимістю або коли аудіо інструкції непрактичні.


### Smart Autoannounce {#smart-autoannounce}

Функція **Smart Autoannounce** надає *аудіо сповіщення* при відхиленні від запланованого маршруту. Вона розроблена для підтримки користувачів зі слабким зором, які покладаються на *голосові інструкції*.  

- Якщо **TalkBack не увімкнено**, *Smart Autoannounce* відображатиме лише *текстові сповіщення* на екрані.  

- **Голосові сповіщення** активуються лише коли *TalkBack* увімкнено в **налаштуваннях системи пристрою**.  

- Встановіть **Період автооголошення** (наприклад, *10 секунд*) для контролю частоти оголошень.

- Довге натискання на **Моє місцезнаходження** відкриває меню з опціями ***Показати вашу позицію*** та ***Показати деталі***. Вибір Показати деталі відображає додаткову інформацію про маршрут і надає кнопку ***Почати/Зупинити автооголошення***.


### Стиль напрямку {#direction-style}

Налаштування **Стиль напрямку** визначає, як подаються інструкції навігації:

- Боковий (8 напрямків) – використовує класичні напрямки ліво/право або кардинальні/міжкардинальні напрямки.
- За годинниковою стрілкою (12 напрямків) – використовує керівництво на основі циферблата годинника, наприклад «о 3-й годині» або «о 10-й годині».

Ця функція розроблена для покращення просторової обізнаності, особливо для користувачів зі слабким зором, які віддають перевагу орієнтації на основі годинника.

Щоб увімкнути:
*Меню* → *Плагіни* → *Спеціальні можливості* → *Налаштування* → *Стиль напрямку* → оберіть **Боковий** або **За годинниковою стрілкою**.

:::info примітка
Стиль напрямку є незалежною опцією. Він не пов'язаний зі Smart Autoannounce і працює незалежно від того, чи увімкнено Smart Autoannounce.
:::

## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карти)](../../user/map/vector-maps.md)