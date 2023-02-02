---
sidebar_position: 10
title:  OsmAnd Cloud
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import Poll from '@site/src/components/home/Poll';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>


:::tip subscribe
&nbsp;<ProFeature/> You need to subscribe to [OsmAnd Pro](../purchases/android#osmand-pro).  
:::

:::note cross-platform
This is a cross-platform feature (Android <-> iOS OsmAnd versions).
:::


## Overview

This feature helps to keep and restore your OsmAnd data. There are two variants of backing up in OsmAnd: [OsmAnd Cloud](../personal/storage.md#backup-and-restore-for-osmand-pro) and [Local](../personal/storage.md#local-backup).


## Login

Allows to keep your OsmAnd data in OsmAnd Cloud and restore your data from OsmAnd Cloud. It's a cross platform feature.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

When you subscrebed to [OsmAnd Pro](../purchases/android.md#free-and-paid-features), you need to make registration for *Backup & Restore* function or enter your registrated e-mail:

*<Translate android="true" ids="shared_string_menu,shared_string_settings,backup_and_restore,register_opr_create_new_account"/> / <Translate android="true" ids="register_opr_have_account"/>*  

![Backup registration Android](@site/static/img/personal/backup/backup_registration_android.png) ![Backup registration Android](@site/static/img/personal/backup/backup_registration_1_android.png)

A one-time password for the next step will be sent to it. 

![Backup registration Android](@site/static/img/personal/backup/backup_registration_2_android.png) ![Backup registration Android](@site/static/img/personal/backup/backup_registration_3_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

When you subscrebed to [OsmAnd Pro](../purchases/ios.md#free-and-paid-features), you need to make registration for *Backup & Restore* function or enter your registrated e-mail:

*<Translate ios="true" ids="menu,shared_string_settings,backup_and_restore,register_opr_create_new_account"/> / <Translate ios="true" ids="cloud_existing_account"/> / <Translate ios="true" ids="purchase_get"/>*

You need to enter the e-mail address you registered with.

![Backup registration iOS](@site/static/img/personal/backup/backup_registration_ios.png) ![Backup registration iOS](@site/static/img/personal/backup/backup_registration_1_ios.png)

A one-time password for the next step will be sent to it. 

![Backup registration iOS](@site/static/img/personal/backup/backup_registration_2_ios.png) ![Backup registration iOS](@site/static/img/personal/backup/backup_registration_3_ios.png)

</TabItem>

</Tabs>


## Settings

Android: Afer registration your *<Translate android="true" ids="backup_and_restore"/>* menu has two screens: *<Translate android="true" ids="shared_string_status"/>* and *<Translate android="true" ids="shared_string_settings"/>*
iOS: Afer registration your *<Translate ios="true" ids="backup_and_restore"/>* menu has *Backup* section and *"<Translate ios="true" ids="shared_string_settings"/>"* button ⚙️.  


### Status tab

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_android.png)

Here you can start to make a backup and restore data online and local:
- "*<Translate android="true" ids="backup_now"/>*" button - allows to make a backup of your data to OsmAnd Cloud. Info: time of last backup and wich data added after that on your device. Button is not showed if you make backup some time ago and you don't have data for backing up.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_1_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_2_android.png)

- "*<Translate android="true" ids="backup_restore_data"/>*" button - allows to restore data on your device using existing backups, or back up data to OsmAnd Cloud.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_3_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_4_android.png)

- "*<Translate android="true" ids="local_backup"/>*" - allows to back up or restore data from a local file. Read about it [here](../personal/storage.md#local-backup).

</TabItem>

<TabItem value="ios" label="iOS">  

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_android.png)

Here you can start to make a backup and restore data online and local:
- "*<Translate android="true" ids="backup_now"/>*" button - allows to make a backup of your data to OsmAnd Cloud. Info: time of last backup and wich data added after that on your device. Button is not showed if you make backup some time ago and you don't have data for backing up.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_1_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_2_android.png)

- "*<Translate android="true" ids="backup_restore_data"/>*" button - allows to restore data on your device using existing backups, or back up data to OsmAnd Cloud.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_3_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_4_android.png)

- "*<Translate android="true" ids="local_backup"/>*" - allows to back up or restore data from a local file. Read about it [here](../personal/storage.md#local-backup).

</TabItem>

</Tabs>


### Settings tab

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

At this screen you can set your login and backup data.

![Backup settings screen Android](@site/static/img/personal/backup/backup_settings_screen_android.png)

- *<Translate android="true" ids="backup_data"/>* - select data and folders to back up.

![Backup data screen Android](@site/static/img/personal/backup/backup_data_screen_android.png)

- *<Translate android="true" ids="backup_version_history"/>* - shows data what keept in <Translate android="true" ids="backup_storage_taken"/>.
  
![Backup data screen Android](@site/static/img/personal/backup/backup_data_screen_1_android.png)

- *<Translate android="true" ids="login_account"/>* - allows to log out from your account.
  
- *<Translate android="true" ids="backup_danger_zone"/>*:
  
  - "*<Translate android="true" ids="backup_delete_all_data"/>*" button - All data on OsmAnd Cloud will be deleted. Local versions will stay untouched.

  - "*<Translate android="true" ids="backup_delete_old_data"/>*" button - Current versions of your data will be preserved on OsmAnd Cloud.

</TabItem>

<TabItem value="ios" label="iOS">  

Click on the *"<Translate ios="true" ids="shared_string_settings"/>"* button ⚙️ on the screen top.

At this screen you can set your login and backup data.

![Backup settings screen ios](@site/static/img/personal/backup/backup_settings_screen_ios.png)

- *<Translate ios="true" ids="osmand_cloud"/>* - opens the screen where you can select data and folders to back up by clicklig on *<Translate ios="true" ids="backup_data"/>*. Here there is info about using memory by clicking *<Translate ios="true" ids="manage_storage"/>*.

![Backup data screen iOS](@site/static/img/personal/backup/backup_data_screen_ios.png) ![Backup data screen iOS](@site/static/img/personal/backup/backup_data_screen_1_ios.png)

- *<Translate android="true" ids="backup_version_history"/>* - shows data what keept in <Translate android="true" ids="backup_storage_taken"/>.
  
![Backup data screen Android](@site/static/img/personal/backup/backup_data_screen_1_android.png)

- *<Translate android="true" ids="login_account"/>* - allows to log out from your account.
  
- *<Translate android="true" ids="backup_danger_zone"/>*:
  
  - "*<Translate android="true" ids="backup_delete_all_data"/>*" button - All data on OsmAnd Cloud will be deleted. Local versions will stay untouched.

  - "*<Translate android="true" ids="backup_delete_old_data"/>*" button - Current versions of your data will be preserved on OsmAnd Cloud.

</TabItem>

</Tabs>


### Backup & Restore

*Menu → Settings → Backup & Restore*

![Backup iOS](@site/static/img/personal/osmand-cloud/backup_ios.png)  ![Backup iOS](@site/static/img/personal/osmand-cloud/backup_1_ios.png)


## Changes

### Local

### Cloud

### Conflicts

### Cloud backup

## Backup and Restore for OsmAnd Pro

### OsmAnd Pro

OsmAnd Pro is a subscription with all [OsmAnd features](../purchases/android.md#free-and-paid-features). Its main advantage is that it is **cross-platform**. This means that it can be bought in one Android store (Google Play, Amazon, Huawei AppGallery), and launched for iOS, for example.  

### Cross-platform

Cross-platfrom allows to use OsmAnd Pro for all platfroms [Android](../purchases/android.md) ←→ [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map)

**_Steps_**:

**1.** When you subscribed to OsmAnd Pro, you should register your email in OsmAnd server for identification for other platforms.

[Register](../personal/osmand-cloud.md#backup-and-restore-for-osmand-pro) your account:
*OsmAnd Menu → Settings → OsmAnd Cloud → Create new account* 

:::note
Registration takes place on the platform on which the subscription was purchased.
:::

After that, your email is a login for activation OsmAnd Pro for other platforms.

**2.** Activation OsmAnd Pro:

*OsmAnd Menu → Settings → OsmAnd Cloud → I already have an account*

**3.** Checking of activation:

*OsmAnd Menu → Settings → Purchases → Restore purchases*
