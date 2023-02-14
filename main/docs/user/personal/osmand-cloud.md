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

## Overview

:::tip subscribe
&nbsp;<ProFeature/> You need to subscribe to [Android OsmAnd Pro](../purchases/android.md#osmand-pro) or [iOS OsmAnd Pro](../purchases/ios.md#osmand-pro).  
:::

:::note cross-platform
OsmAnd Cloud is cloud storage that is not associated with Android or iOS versions of the app but only with your Pro account.
:::

OsmAnd Cloud is the resource you need to save your personal settings and app data. You can use this data on any device available to install the OsmAnd app or when using the desktop app. Any changes you make will be synchronized.     


## Login

To access OsmAnd Cloud registration or log in to your account, you need to have a [Pro](#osmand-pro) subscription. You can check its status in the OsmAnd app *Menu→ Settings → Purchases*. Your Cloud account needs to be the same as the account on which the purchase was made. When you register or log in, you will receive a verification code by email to confirm it.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,register_opr_create_new_account"/> / <Translate android="true" ids="register_opr_have_account"/>*  

![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_1.png)  ![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_17.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud"/> → <Translate ios="true" ids="purchase_get"/> / <Translate ios="true" ids="cloud_existing_account"/>*

![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_1.png)  ![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_2.png)

</TabItem>

</Tabs>


## Last sync

**Last sync** is a drop-down menu that shows how long ago data was last synchronized between this device and the cloud.  
- *Local changes* - shows the total number of local changes not uploaded to the cloud.
- *Cloud changes* - the total number of changes uploaded to the cloud from other devices since the last synchronization.
- *Conflicts* - the total number of inconsistencies between local and cloud changes.
- *Sync now* - select this option to synchronize all selected data sections in the [Settings](#back-up-data) menu that you have changed on this device.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud"/>*  

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_16.png) 

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud"/>*     

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_8-1.png)  

</TabItem>

</Tabs>  
 

## Changes

In the [Last Sync](#last-sync) section from the drop-down list, tap any item to go to the Changes section. In this section, three tabs display all the changes available for editing. If the list is empty, it means that there have been no changes since the last synchronization.  

Each item in the Changes list contains information about the date and accurate time of the last synchronization, as well as two items for instantly downloading or uploading the relevant version.  

:::note
Downloading changes from the cloud storage will override local changes. Accordingly, uploaded local data removes changes in the cloud version.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_11.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_9-1.png)  

</TabItem>

</Tabs>  


### Local

You can sync local changes that do not exist in the cloud version all at once using the *Upload All* button. Or you can select any change you need from the list and tap it to select the *Upload local version*.  
Changes that have been uploaded from the local version to the cloud disappear from the *Changes → Local* tab after a few seconds.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,download_tab_local"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_2.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud,cloud_recent_changes,download_tab_local"/>* 

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_5.png)  

</TabItem>

</Tabs>  


### Cloud

The Cloud tab displays a list of changes that can be downloaded to your device from the cloud storage.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,shared_string_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_14-1.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud,cloud_recent_changes,shared_string_file_cloud"/>* 

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_6.png)  

</TabItem>

</Tabs>  


### Conflicts

Conflicts appear if the local version and the version stored in the cloud do not match. In this case, you can replace the data in the cloud with local changes or download the stored data to the device from the cloud. The resolved conflicts are removed from the list after processing, which usually does not take long.
Tapping Conflicts displays information about the local and cloud versions in sync. You can choose to upload or download.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,cloud_conflicts"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_13-1.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud,cloud_recent_changes,cloud_conflicts"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_7.png)  

</TabItem>

</Tabs>  


## Settings

This section is for editing and managing your OsmAnd Cloud.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_18.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud,shared_string_settings"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_3-2.png)  

</TabItem>

</Tabs>  


### test


Here you can start to make a backup and restore data online and local:
- "*<Translate android="true" ids="backup_now"/>*" button - allows to make a backup of your data to OsmAnd Cloud. Info: time of last backup and wich data added after that on your device. Button is not showed if you make backup some time ago and you don't have data for backing up.

- "*<Translate android="true" ids="backup_restore_data"/>*" button - allows to restore data on your device using existing backups, or back up data to OsmAnd Cloud.

- "*<Translate android="true" ids="local_backup"/>*" - allows to back up or restore data from a local file. Read about it [here](../personal/storage.md#local-backup).



### Back up data

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

At this screen you can set your login and backup data.

![Backup settings screen Android](@site/static/img/personal/osmand-cloud/backup_settings_screen_android.png)

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

![Backup settings screen ios](@site/static/img/personal/osmand-cloud/backup_settings_screen_ios.png)

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


### Version history

*Menu → Settings → Backup & Restore*

![Backup iOS](@site/static/img/personal/osmand-cloud/backup_ios.png)  ![Backup iOS](@site/static/img/personal/osmand-cloud/backup_1_ios.png)


### Account
This section contains information about which of your accounts is connected to OsmAnd Cloud, as well as a logout button. To back up or restore data, you will need to log in again.    

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_9-1.png)


### Danger zone

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_8.png)   ![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_7.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_11.png)   ![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_12.png)

</TabItem>

</Tabs>  


## OsmAnd Pro

OsmAnd Pro is a subscription with all [OsmAnd features](../purchases/android.md#free-and-paid-features). Its main advantage is that it is **cross-platform**. This means that it can be bought in one Android store (Google Play, Amazon, Huawei AppGallery), and launched for iOS, for example.  

### Cross-platform

Cross-platfrom allows to use OsmAnd Pro for all platfroms [Android](../purchases/android.md) ←→ [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map)

***Steps***:

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
