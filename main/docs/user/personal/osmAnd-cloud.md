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

<InfoIncompleteArticle/>

## Overview

:::note cross-platform
This is a cross-platform feature (Android <-> iOS OsmAnd versions).
:::

This feature helps to keep and restore your OsmAnd data. There are two variants of backing up in OsmAnd: [OsmAnd Cloud](../personal/storage.md#backup-and-restore-for-osmand-pro) and [Local](../personal/storage.md#local-backup).


## Backup and Restore for OsmAnd Pro

:::tip subscribe
&nbsp;<ProFeature/> You need to subscribe to [OsmAnd Pro](../purchases/android#osmand-pro).  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Allows to keep your OsmAnd data in OsmAnd Cloud and restore your data from OsmAnd Cloud. It's a cross platform feature.

When you subscrebed to [OsmAnd Pro](../purchases/android.md#free-and-paid-features), you need to make registration for _Backup & Restore_ function or enter your registrated e-mail:

*<Translate android="true" ids="shared_string_menu,shared_string_settings,backup_and_restore,register_opr_create_new_account"/> / <Translate android="true" ids="register_opr_have_account"/>*  

![Backup registration Android](@site/static/img/personal/backup/backup_registration_android.png) ![Backup registration Android](@site/static/img/personal/backup/backup_registration_1_android.png)

A one-time password for the next step will be sent to it. 

![Backup registration Android](@site/static/img/personal/backup/backup_registration_2_android.png) ![Backup registration Android](@site/static/img/personal/backup/backup_registration_3_android.png)

Afer registration your _<Translate android="true" ids="backup_and_restore"/>_ menu has two screens: _<Translate android="true" ids="shared_string_status"/>_ and _<Translate android="true" ids="shared_string_settings"/>_


#### <Translate android="true" ids="shared_string_status"/>

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_android.png)

Here you can start to make a backup and restore data online and local:
- "_<Translate android="true" ids="backup_now"/>_" button - allows to make a backup of your data to OsmAnd Cloud. Info: time of last backup and wich data added after that on your device. Button is not showed if you make backup some time ago and you don't have data for backing up.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_1_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_2_android.png)

- "_<Translate android="true" ids="backup_restore_data"/>_" button - allows to restore data on your device using existing backups, or back up data to OsmAnd Cloud.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_3_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_4_android.png)

- "_<Translate android="true" ids="local_backup"/>_" - allows to back up or restore data from a local file. Read about it [here](../personal/storage.md#local-backup).


#### <Translate android="true" ids="shared_string_settings"/>

At this screen you can set your login and backup data.

![Backup settings screen Android](@site/static/img/personal/backup/backup_settings_screen_android.png)

- _<Translate android="true" ids="backup_data"/>_ - select data and folders to back up.

![Backup data screen Android](@site/static/img/personal/backup/backup_data_screen_android.png)

- _<Translate android="true" ids="backup_version_history"/>_ - shows data what keept in <Translate android="true" ids="backup_storage_taken"/>.
  
![Backup data screen Android](@site/static/img/personal/backup/backup_data_screen_1_android.png)

- _<Translate android="true" ids="login_account"/>_ - allows to log out from your account.
  
- _<Translate android="true" ids="backup_danger_zone"/>_:
  
  - "_<Translate android="true" ids="backup_delete_all_data"/>_" button - All data on OsmAnd Cloud will be deleted. Local versions will stay untouched.

  - "_<Translate android="true" ids="backup_delete_old_data"/>_" button - Current versions of your data will be preserved on OsmAnd Cloud.

</TabItem>

<TabItem value="ios" label="iOS">  

Allows to keep your OsmAnd data in OsmAnd Cloud and restore your data from OsmAnd Cloud. It's a cross platform feature.

When you subscrebed to [OsmAnd Pro](../purchases/ios.md#free-and-paid-features), you need to make registration for _Backup & Restore_ function or enter your registrated e-mail:

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,shared_string_settings,backup_and_restore,register_opr_create_new_account"/> / <Translate ios="true" ids="cloud_existing_account"/> / <Translate ios="true" ids="purchase_get"/>_

You need to enter the e-mail address you registered with.

![Backup registration iOS](@site/static/img/personal/backup/backup_registration_ios.png) ![Backup registration iOS](@site/static/img/personal/backup/backup_registration_1_ios.png)

A one-time password for the next step will be sent to it. 

![Backup registration iOS](@site/static/img/personal/backup/backup_registration_2_ios.png) ![Backup registration iOS](@site/static/img/personal/backup/backup_registration_3_ios.png)

Afer registration your _<Translate ios="true" ids="backup_and_restore"/>_ menu has _Backup_ section and _"<Translate ios="true" ids="shared_string_settings"/>"_ button ⚙️.


#### <Translate ios="true" ids="shared_string_status"/>

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_android.png)

Here you can start to make a backup and restore data online and local:
- "_<Translate android="true" ids="backup_now"/>_" button - allows to make a backup of your data to OsmAnd Cloud. Info: time of last backup and wich data added after that on your device. Button is not showed if you make backup some time ago and you don't have data for backing up.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_1_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_2_android.png)

- "_<Translate android="true" ids="backup_restore_data"/>_" button - allows to restore data on your device using existing backups, or back up data to OsmAnd Cloud.

![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_3_android.png) ![Backup Status screen Android](@site/static/img/personal/backup/backup_status_screen_4_android.png)

- "_<Translate android="true" ids="local_backup"/>_" - allows to back up or restore data from a local file. Read about it [here](../personal/storage.md#local-backup).


#### Settings

Click on the _"<Translate ios="true" ids="shared_string_settings"/>"_ button ⚙️ on the screen top.

At this screen you can set your login and backup data.

![Backup settings screen ios](@site/static/img/personal/backup/backup_settings_screen_ios.png)

- _<Translate ios="true" ids="osmand_cloud"/>_ - opens the screen where you can select data and folders to back up by clicklig on _<Translate ios="true" ids="backup_data"/>_. Here there is info about using memory by clicking _<Translate ios="true" ids="manage_storage"/>_.

![Backup data screen iOS](@site/static/img/personal/backup/backup_data_screen_ios.png) ![Backup data screen iOS](@site/static/img/personal/backup/backup_data_screen_1_ios.png)

- _<Translate android="true" ids="backup_version_history"/>_ - shows data what keept in <Translate android="true" ids="backup_storage_taken"/>.
  
![Backup data screen Android](@site/static/img/personal/backup/backup_data_screen_1_android.png)

- _<Translate android="true" ids="login_account"/>_ - allows to log out from your account.
  
- _<Translate android="true" ids="backup_danger_zone"/>_:
  
  - "_<Translate android="true" ids="backup_delete_all_data"/>_" button - All data on OsmAnd Cloud will be deleted. Local versions will stay untouched.

  - "_<Translate android="true" ids="backup_delete_old_data"/>_" button - Current versions of your data will be preserved on OsmAnd Cloud.

</TabItem>

</Tabs>


### Backup & Restore

_Menu → Settings → Backup & Restore_

![Backup iOS](@site/static/img/personal/osmAnd-cloud/backup_ios.png)  ![Backup iOS](@site/static/img/personal/osmAnd-cloud/backup_1_ios.png)


## Login

## Settings

## Changes

### Local

### Cloud

### Conflicts

### Cloud backup
