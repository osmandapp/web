---
sidebar_position: 5
title:  Crash Logs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overview {#overview}

Crash logs are valuable diagnostic tools that help developers identify and fix issues and bugs causing the application to crash or behave unexpectedly. Sharing logs from your Android device with the OsmAnd development team is possible. Currently, iOS users only have one type of crash log option to send.


## Crash and Logcat Logs {#crash-and-logcat-logs}

OsmAnd allows you to send two types of data to developers:

- **Crash logs**. Generated when the OsmAnd app encounters a critical error or exception causing it to crash. These logs provide detailed information about the application's state during the failure, including build data, stack traces, error messages, and other relevant details.
- **Logcat logs**. A record of the OsmAnd log stream capturing various events and messages. These logs help developers monitor app behavior, track execution flow, trace specific actions, and investigate non-crash-related issues. Logcat logs usually contain records of activity from the time the app was last started.

:::caution Your private information
Be cautious when sending logcat logs, as they may contain private information such as device location, search queries, route-building results, and navigation data.
:::


### Send Logs from OsmAnd App (Android) {#send-logs-from-osmand-app-android}

1. Go to *<Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/> (<Translate android="true" ids="send_logcat_log"/>)*. Depending on your situation, select the appropriate type of log. You can refer to the section [Crash and Logcat Logs](#crash-and-logcat-logs) for details on the differences between the log types.
2. In the pop-up menu, choose Gmail or your preferred email app. The email will be generated automatically.
3. Tap the *Send* button.

![Send crash logs from Android 1](@site/static/img/troubleshooting/send_logs_andr_5.png)  ![Send crash logs from Android 2](@site/static/img/troubleshooting/send_logs_andr_new_2.png)


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


## Send Tombstone Files (Android) {#send-tombstone-files-android}

:::caution Crucial
For advanced users only!
:::

In certain complex or unusual cases, *[Tombstone files](https://source.android.com/docs/core/tests/debug)* may be required. These files provide detailed stack traces for all threads in a crashing process (not just the one that caused the error), a complete memory map, and a list of all open file descriptors. Tombstone files are vital for debugging and diagnosing issues related to native code on the Android platform.


### Using Your Device {#using-your-device}

To export tombstone files, you need to generate a bug report using Android system settings:

1. Enable *Developer options* (this screen is hidden by default).
    - Go to *Settings → About phone → Software information* (this path is valid for Samsung devices).
    - Tap *Build number* seven times until a pop-up confirms developer mode is active.

2. Go to *Developer options*, usually located at the bottom of the settings list. You can also use the search function.
    - Tap *Take bug report* option.
    - Select the type of bug report and tap *Report*.
  
After the bug report is ready, you will receive a notification. Tap the notification box to download the report to your device. Unzip the file and send the tombstone files to the OsmAnd developers team (email: `support@osmand.net`).

![Send crash logs from Android 3](@site/static/img/troubleshooting/send_logs_andr_3.png)  ![Send crash logs from Android 4](@site/static/img/troubleshooting/send_logs_andr_4.png)

:::note
Please note, that bug reports may contain private data, including app usage or location.
:::

### Using ADB {#using-adb}

The Android Debugging Bridge (ADB) is a command-line tool that allows developers to debug their applications. To use ADB for exporting tombstone files, you'll need to download and install it first. Follow the instructions provided on the [official Android developer site](https://developer.android.com/tools/releases/platform-tools).

#### Prepare Your Device {#prepare-your-device}

Ensure *Developer options* are enabled (this screen is hidden by default) and *USB debugging* is turned on:

- Navigate to *Settings → About phone → Software information*.
- Tap *Build number* seven times until a pop-up confirms that developer mode is active.
- In the *Developer options*,enable  *USB debugging*.

Then, connect your device to your workstation via USB. If it's the first time connecting, a pop-up will appear asking for permission to allow debugging.

#### Generate Bug Report {#generate-bug-report}

1. Open a command line terminal. On Mac or Linux, use the *Terminal* app, and on Windows, use the *Command Line*.
2. Navigate to the platform-tools folder where ADB is located using the *cd* command (for example, ‘cd /Users/Username/Downloads/Tools’).
3. Generate the bug report:
   - On Mac: ```adb bugreport```
   - On Windows: ```adb.exe bugreport```
4. Wait a few minutes for the report to generate. The resulting file will be saved in the platform tools folder.
5. Unzip the file.
6. Find the *tombstones* folder with files like *tombstone_00*, *tombstone_01*, and similar.
7. Send the tombstone files to `support@osmand.net`.

<!--
* Open the terminal and call the command:  
```adb bugreport ./output.zip```  
where output.zip is the name of the result file  

* Unzip the result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tombstones```
Where you find files like  -->

### Using Rooted Devices or Android Studio Emulator {#using-rooted-devices-or-android-studio-emulator}

- With root access to your device, you can directly open the */data/tombstones* folder.  

- In Android Studio, use the emulator to navigate to *Device File Explorer* and find the /data/tombstones folder. Inside, you will find files named like *tombstone_00*, *tombstone_01*, and others. Download these files and send them to `support@osmand.net`.

For more details on bug reports, refer to the [Android documentation](https://developer.android.com/studio/debug/bug-report).

