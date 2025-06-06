---
source-hash: c1d5df6a1169bf1847e971df29e04917dfe084eb3aac39fa72b73772a49f409d
sidebar_position: 1
title:  Доступність
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
Плагін Доступність доступний лише у **версії OsmAnd для Android**. [Версія для iOS](#how-to-use-ios) покладається на стандартні системні налаштування доступності.
:::

## Огляд {#overview}

Доступність покращує зручність використання для сліпих та людей з вадами зору завдяки інтеграції з інструментами [Доступності Android](https://www.android.com/accessibility/). Плагін пропонує **перетворення тексту на мовлення, керування жестами, автоматичні оголошення** та **тактильний зворотний зв'язок**, щоб зробити навігацію більш доступною. На iOS OsmAnd використовує вбудовані функції доступності Apple, такі як VoiceOver.


### Як користуватися (Android) {#how-to-use-android}

![Доступність](@site/static/img/plugins/Accessibility/access_turned_off.png)

***Увімкніть плагін Доступність:***

1. **Активуйте плагін**: *Меню → Плагіни → Доступність → Увімкнути*.

2. **Увімкніть режим доступності**:
   - Перейдіть до *Системні налаштування → Доступність* на вашому пристрої Android.
   - Увімкніть TalkBack або іншу програму для читання з екрана.

3. **Налаштуйте параметри плагіна**:
   - Відкрийте [Налаштування доступності](#plugin-settings) у програмі OsmAnd.
   - Налаштуйте такі функції, як швидкість мовлення, автоматичне оголошення та тактильний зворотний зв'язок.

<br/>

***Особливості та функціональність:***

- **Керування жестами**:
   - Підтримує всі стандартні [жести OsmAnd](../map/interact-with-map#gestures).
   - Налаштовує жести відповідно до інструкцій **TalkBack** для Android.

- **Інтеграція з TalkBack**:
   - Програма для читання з екрана TalkBack пропонує звукові підказки для навігації та взаємодії з меню.
   - Дізнайтеся більше про жести TalkBack [тут](https://support.google.com/accessibility/android/answer/6151827?hl=en&ref_topic=10601570#zippy=%2Cother%2Cbasic-navigation).

- **Фонові операції**. Звуковий та тактильний зворотний зв'язок продовжується, навіть коли екран вимкнено або заблоковано.

- **Дії кнопки компаса**:

| Жест | Дія | Еквівалент TalkBack |
|-----|-----|-----|
| **Один дотик** | Обертає карту на **Північ** | **Подвійний дотик** |
| **Довгий дотик** | Відкриває список [орієнтацій карти](../map/interact-with-map.md#map-orientation-modes) | **Подвійний дотик і утримання** |
| **Подвійний дотик** | *Недоступно в режимі доступності* | *Не підтримується* |


### Як користуватися (iOS) {#how-to-use-ios}

Версія OsmAnd для iOS використовує **вбудовані системні інструменти доступності**.

1. **Увімкніть VoiceOver**:
   - Перейдіть до *Налаштування → Доступність → VoiceOver*.
   - Налаштуйте **жести VoiceOver** для використання з OsmAnd.

2. **Підтримувані функції**:
   - **Підтримка програми для читання з екрана** для взаємодії з картою.
   - **Настроювані жести** через налаштування iOS.
   - Доступні всі стандартні [жести OsmAnd](../map/interact-with-map#gestures).

3. **Дізнайтеся більше**:
   - Прочитайте про функції доступності зору iOS [тут](https://www.apple.com/accessibility/vision/).
   - Ознайомтеся з жестами VoiceOver для iPhone [тут](https://support.apple.com/en-gb/guide/iphone/iph3e2e2281/ios).


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб активувати функції доступності пристрою в OsmAnd, потрібно зробити наступні налаштування:

1. **Увімкніть** [плагін Доступність](../plugins/index.md#enable--disable): *Меню → Плагіни → Доступність → Увімкнути*.
2. **Увімкніть режим доступності** на вашому пристрої.
3. Налаштуйте [параметри](#plugin-settings) плагіна Доступність.


## Налаштування плагіна {#plugin-settings}

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_accessibility,shared_string_settings"/>*

![Доступність](@site/static/img/plugins/Accessibility/access_.png)

Плагін Доступність пропонує різні налаштування для персоналізації навігації та взаємодії для користувачів з обмеженими можливостями. Ці налаштування застосовуються для кожного [профілю](../personal/profiles.md) в OsmAnd.

| Налаштування                   | Опис |
|---------------------------|-------------|
| **Режим доступності**    | Увімкнення *вбудованих функцій OsmAnd* або використання **системних налаштувань**. |
| **Швидкість мовлення**           | Контролює *швидкість перетворення тексту на мовлення*, від **50% до 200%**. |
| [Розумне автооголошення](#smart-autoannounce-and-clockwise-directions)    | Надає *голосові підказки* при відхиленні від маршруту. |
| **Період автооголошення**   | Встановлює мінімальний час між оголошеннями, від **5 секунд до 5 хвилин**. |
| **Стиль напрямку**       | Виберіть між *Бічним (8 напрямків)* або [За годинниковою стрілкою](#smart-autoannounce-and-clockwise-directions) (12 напрямків)*. |
| **Звукові напрямки**      | Відтворює *звукові підказки*, що вказують напрямок. |
| **Тактильні напрямки**     | Надає *вібраційний зворотний зв'язок* для поворотів та відхилень.|

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

***Поради для оптимізованої доступності:***

- **Програма для читання з екрана** - Використовуйте TalkBack (*Android*) або VoiceOver (*iOS*) для покращеної взаємодії з картою.
- **Звукова навігація** - Увімкніть автооголошення, щоб отримувати голосові підказки, коли екран вимкнено.
- **Тактильний зворотний зв'язок** - Ідеально підходить для умов низької видимості або коли звукові підказки непрактичні.


#### Розумне автооголошення та напрямки за годинниковою стрілкою {#smart-autoannounce-and-clockwise-directions}

Функція **Розумне автооголошення** надає *звукові сповіщення* при відхиленні від запланованого маршруту, тоді як **Стиль напрямку за годинниковою стрілкою** пропонує *підказки навігації на основі циферблата годинника*. Ці функції розроблені для підтримки користувачів з вадами зору, які покладаються на *голосові підказки*.

- Якщо **TalkBack не увімкнено**, як *Розумне автооголошення*, так і *Напрямки за годинниковою стрілкою* відображатимуть лише *текстові сповіщення* на екрані.

- **Голосові сповіщення** активуються лише тоді, коли *TalkBack* увімкнено в **системних налаштуваннях пристрою**.

- Встановіть **Період автооголошення** (наприклад, *10 секунд*), щоб контролювати частоту оголошень.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (стилі карт)](../../user/map/vector-maps.md)

> *Ця стаття востаннє оновлювалася в лютому 2025 року*