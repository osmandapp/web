---
sidebar_position: 6
title:  Crash logs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

## Crash and logcat logs

Logs need for quickly finding of cause of issue or crash on you device. You can share by logs from your device to OsmAnd development team.  

## Send logs from OsmAnd application

Here will be detail instruction how to send logs:
- <Translate android="true" ids="shared_string_menu,shared_string_help,send_crash_log"/>
- <Translate android="true" ids="shared_string_menu,shared_string_help,send_logcat_log"/>

## Send logs from adb terminal

:::note
Only for advanced users!
:::

### Using adb

* Connect Android device or emulator to your computer.  

* Open terminal and call command:  
```adb bugreport ./output.zip```  
where output.zip - name of result file  

* Unzip result file:  
```unzip file.zip -d destination_folder```  

* Find tombstones folder:  
```cd FS/data/tomstones```  
Where you find files like *tombstone_00* *tombstone_01* with raw text format. Just send them to email: crash@osmand.net


### Using rooted devices or Android Studio emulator

If you have root access on your device you can directly open folder */data/tommbstones*.  
In Android Studio you can open *"Device File Explorer"*, choose opened emulator and open folder /data/tommbstones.  
In folder you can see files like *tombstone_00* *tombstone_01* with raw text format. Just download them and and send to email crash@osmand.net