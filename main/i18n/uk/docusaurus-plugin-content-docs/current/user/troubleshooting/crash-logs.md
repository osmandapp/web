---
source-hash: 39d418f4e27287d045bdf80db534c375abb992ea40f27b907543333249efada9
sidebar_position: 5
title:  Журнали збоїв
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Огляд {#overview}

Журнали збоїв є цінними діагностичними інструментами, які допомагають розробникам виявляти та виправляти проблеми та помилки, що спричиняють збій програми або її несподівану поведінку. Можна ділитися журналами зі свого пристрою Android з командою розробників OsmAnd. Наразі користувачі iOS мають лише один тип журналу збоїв для надсилання.


## Журнали збоїв та журнали застосунку {#crash-and-app-logs}

OsmAnd дозволяє надсилати розробникам два типи даних:

- **Журнали збоїв**. Генеруються, коли програма OsmAnd стикається з критичною помилкою або винятком, що спричиняє її збій. Ці журнали надають детальну інформацію про стан програми під час збою, включаючи дані збірки, трасування стека, повідомлення про помилки та інші відповідні деталі.
- **Журнали поточного сеансу/застосунку**. Запис потоку журналів OsmAnd, що фіксує різні події та повідомлення. Ці журнали допомагають розробникам відстежувати поведінку програми, відстежувати потік виконання, трасувати конкретні дії та досліджувати проблеми, не пов'язані зі збоями. Журнали Logcat зазвичай містять записи активності з моменту останнього запуску програми.

:::caution Ваша приватна інформація
Будьте обережні під час надсилання журналів застосунку, оскільки вони можуть містити приватну інформацію, таку як місцезнаходження пристрою, пошукові запити, результати побудови маршруту та навігаційні дані.
:::


### Надсилання журналів з програми OsmAnd {#send-logs-from-osmand-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Send crash logs from Android 1](@site/static/img/troubleshooting/send_logs_andr_5.webp)  ![Send crash logs from Android 2](@site/static/img/troubleshooting/send_logs_andr_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Send crash logs from iOS](@site/static/img/troubleshooting/send_logs_ios.webp)

</TabItem>

</Tabs>

1. Перейдіть до *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/>* або *<Translate android="true" ids="send_logcat_log"/>* (*Надіслати поточний журнал застосунку* на iOS). Залежно від вашої ситуації, виберіть відповідний тип журналу. Ви можете звернутися до розділу [Журнали збоїв та журнали застосунку](#crash-and-app-logs) для отримання детальної інформації про відмінності між типами журналів.
2. У спливаючому меню виберіть Gmail або бажану програму електронної пошти. Ми рекомендуємо надсилати журнали на адресу `support@osmand.net`.
3. Натисніть кнопку *Надіслати*.

<!--
### Send Logs from iOS Devices {#send-logs-from-ios-devices}

1. Logs from iOS devices can be sent:

    - Automatically.
        - Navigate to OsmAnd app *<Translate ios="true" ids="shared_string_menu,shared_string_help,report_an_issues"/> (<Translate ios="true" ids="send_log"/>)*.  
        - Then, using your email app, we recommend sending the logs to `support@osmand.net`.

    - Manually.
        - Navigate to the iOS system app *Files → On my iPhone (or On my iPad) → OsmAnd Maps → Logs*.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_logs_ios_1.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/send_logs_ios_2.png)

2. Send [IPS-format](https://docs.fileformat.com/misc/ips/#formats-for-ios-analytics-data) of logs and authorization data:
    - On iOS 15 or older: *Settings → Analytics → Analytics Data → OsmAnd Maps ips-format file*.
    - On iOS 16 or newer:  *Settings → Privacy & Security → Analytics & Improvements → Analytics Data → OsmAnd Maps ips-format file*.
    - Then, using your email app, we recommend sending the logs to `support@osmand.net`.

    ![Send crash logs iOS 1](@site/static/img/troubleshooting/send_log_ios.png)  ![Send crash logs iOS 2](@site/static/img/troubleshooting/log_1_ios.png)
-->

## Надсилання файлів Tombstone (Android) {#send-tombstone-files-android}

:::caution Важливо
Тільки для досвідчених користувачів!
:::

У певних складних або незвичайних випадках можуть знадобитися *[файли Tombstone](https://source.android.com/docs/core/tests/debug)*. Ці файли надають детальні трасування стека для всіх потоків у процесі, що зазнав збою (не тільки того, що спричинив помилку), повну карту пам'яті та список усіх відкритих дескрипторів файлів. Файли Tombstone є життєво важливими для налагодження та діагностики проблем, пов'язаних з нативним кодом на платформі Android.


### Використання вашого пристрою {#using-your-device}

Щоб експортувати файли tombstone, вам потрібно згенерувати звіт про помилку за допомогою системних налаштувань Android:

1. Увімкніть *Параметри розробника* (цей екран за замовчуванням прихований).
    - Перейдіть до *Налаштування → Про телефон → Інформація про програмне забезпечення* (цей шлях дійсний для пристроїв Samsung).
    - Натисніть *Номер збірки* сім разів, доки не з'явиться спливаюче вікно, що підтверджує активацію режиму розробника.

2. Перейдіть до *Параметри розробника*, зазвичай розташованих унизу списку налаштувань. Ви також можете скористатися функцією пошуку.
    - Натисніть опцію *Зробити звіт про помилку*.
    - Виберіть тип звіту про помилку та натисніть *Звіт*.
  
Після того, як звіт про помилку буде готовий, ви отримаєте сповіщення. Натисніть на поле сповіщення, щоб завантажити звіт на свій пристрій. Розпакуйте файл і надішліть файли tombstone команді розробників OsmAnd (електронна пошта: `support@osmand.net`).

![Send crash logs from Android 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![Send crash logs from Android 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Зверніть увагу, що звіти про помилки можуть містити приватні дані, включаючи використання програми або місцезнаходження.
:::

### Використання ADB {#using-adb}

Android Debugging Bridge (ADB) — це інструмент командного рядка, який дозволяє розробникам налагоджувати свої програми. Щоб використовувати ADB для експорту файлів tombstone, вам потрібно спочатку завантажити та встановити його. Дотримуйтесь інструкцій, наданих на [офіційному сайті розробників Android](https://developer.android.com/tools/releases/platform-tools).

#### Підготуйте свій пристрій {#prepare-your-device}

Переконайтеся, що *Параметри розробника* увімкнено (цей екран за замовчуванням прихований) і *Налагодження USB* увімкнено:

- Перейдіть до *Налаштування → Про телефон → Інформація про програмне забезпечення*.
- Натисніть *Номер збірки* сім разів, доки не з'явиться спливаюче вікно, що підтверджує активацію режиму розробника.
- У *Параметрах розробника* увімкніть *Налагодження USB*.

Потім підключіть свій пристрій до робочої станції через USB. Якщо це перше підключення, з'явиться спливаюче вікно з запитом дозволу на налагодження.

#### Згенеруйте звіт про помилку {#generate-bug-report}

1. Відкрийте термінал командного рядка. На Mac або Linux використовуйте програму *Термінал*, а на Windows — *Командний рядок*.
2. Перейдіть до папки platform-tools, де розташовано ADB, за допомогою команди *cd* (наприклад, ‘cd /Users/Username/Downloads/Tools’).
3. Згенеруйте звіт про помилку:
   - На Mac: ```adb bugreport```
   - На Windows: ```adb.exe bugreport```
4. Зачекайте кілька хвилин, поки звіт буде згенеровано. Отриманий файл буде збережено в папці platform tools.
5. Розпакуйте файл.
6. Знайдіть паперу *tombstones* з файлами, такими як *tombstone_00*, *tombstone_01* тощо.
7. Надішліть файли tombstone на адресу `support@osmand.net`.

<!--
* Open the terminal and call the command:  
```adb bugreport ./output.zip```  
where output.zip is the name of the result file  

* Unzip the result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tombstones```
Where you find files like  -->

### Використання рутованих пристроїв або емулятора Android Studio {#using-rooted-devices-or-android-studio-emulator}

- З root-доступом до вашого пристрою ви можете безпосередньо відкрити папку */data/tombstones*.  

- В Android Studio використовуйте емулятор, щоб перейти до *Device File Explorer* і знайти папку /data/tombstones. Всередині ви знайдете файли з назвами, такими як *tombstone_00*, *tombstone_01* та інші. Завантажте ці файли та надішліть їх на адресу `support@osmand.net`.

Для отримання додаткової інформації про звіти про помилки зверніться до [документації Android](https://developer.android.com/studio/debug/bug-report).