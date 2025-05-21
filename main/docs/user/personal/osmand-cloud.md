---
sidebar_position: 11
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



## Overview

:::tip subscribe  
&nbsp;<ProFeature/> To access all features of OsmAnd Cloud, subscribe to **OsmAnd Pro** for [Android](../purchases/android.md#osmand-pro) or [iOS](../purchases/ios.md#osmand-pro).  
:::  

:::note cross-platform  
OsmAnd Cloud is an independent cloud storage service and is *not tied* to a specific Android, iOS, or web platform version.  
:::  

OsmAnd Cloud allows you to **store and synchronize personal settings and application data** across multiple devices. You can access this data on any device where OsmAnd is installed, including the desktop app. All changes made within the app can be **synchronized across platforms**, ensuring seamless access to your saved data.


## Cross-Platform

OsmAnd Cloud allows you to back up, restore, and sync your data across Android, iOS, and the [web version](../web/index.md). With cross-platform capabilities, you can transfer **profile settings**, **tracks**, **favorites**, **OSM edits/notes**, and more between devices. Additionally, the **web version** enables you to plan routes and save them for later use on connected devices.  

OsmAnd supports **cross-platform usage** across *([Android](../purchases/android.md) ← → [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map))* with the following steps:

1. **Subscribe to OsmAnd Pro.**  
   Learn more about purchasing for [Android](../purchases/android.md#how-to-buy) or [iOS](../purchases/ios.md#how-to-buy).

2. **Use the free OsmAnd Start plan** for cloud backups of favorites, settings, and OSM edits/notes.  
   The free storage limit is **5 MB**.

3. **Register an [account](#login) on the OsmAnd server.**

4. **Use the registered email** as your login to activate OsmAnd Pro or OsmAnd Start on other platforms.

:::note  
**OsmAnd Pro** is a cross-platform subscription that includes all OsmAnd features. You can purchase it in one store (e.g., Google Play, Huawei AppGallery) and use it also on **iOS**. Your **[registered email](#login)** is your login for activating OsmAnd Pro across platforms.  
:::


## Login

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,register_opr_create_new_account"/> / <Translate android="true" ids="register_opr_have_account"/>*  

![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_1.png)  ![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_17.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud"/> → <Translate ios="true" ids="shared_string_get"/> / <Translate ios="true" ids="register_opr_have_account"/>*

![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_first_screen_ios.png)  ![Login OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_2.png)

</TabItem>

</Tabs>

To back up and restore data, you must be logged into your OsmAnd Cloud account.  

- To register or log in, you need an active [OsmAnd Pro](#cross-platform) or [OsmAnd Start](#osmand-start) subscription. You can check your subscription status in the OsmAnd app:  
  *Menu → Settings → Purchases*.

- Your Cloud account **must be registered on the device where the purchase was originally made**.

- *Login process*:  
  - Enter your email address and tap **Continue**.  
  - A verification code will be sent to your email for confirmation.
  - Read [here](../troubleshooting/purchases_payments.md#verification-code-for-osmand-cloud-not-received) what to do if you don't receive a verification code.  
  - Use this account to log into OsmAnd Cloud on other devices.

- If you have an **OsmAnd Pro** subscription, you can continue accessing your OsmAnd Cloud account for **one additional year** after your subscription expires.  

:::tip Troubleshooting Login Issues
If you experience issues during registration:

- Ensure you are registering on the **same device** where the purchase was made.  
- Check your **Internet connection** before trying again.

:::


## OsmAnd Start

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,purchases"/>*  

![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_1_andr.png)   ![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,purchases"/>*

![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_1_ios.png)   ![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_osmand_start_2_ios.png)  

</TabItem>

</Tabs>  

The **OsmAnd Start** plan provides free access to **OsmAnd Cloud** with limited basic features and 5MB storage to store and synchronize your **Favorites, Settings, and OpenStreetMap (OSM) edits and notes**. This plan is available for users of [OsmAnd Free or Maps+](../purchases/index.md).  

Features included in OsmAnd Start:

- [Free Favorites Backup](../personal/favorites.md#free-cloud-backup) – Store important locations and routes in your Favorites and access them from any device connected to OsmAnd Cloud.  
- [Free Settings Backup](../personal/profiles.md#free-cloud-backup) – Save your OsmAnd app settings to OsmAnd Cloud and restore them on other devices for a seamless experience.  
- [OSM Edits/Notes](../plugins/osm-editing.md) – Contribute to OpenStreetMap by creating and editing map data, adding notes, and saving changes directly to OsmAnd Cloud.

### How to Activate OsmAnd Start

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

**You need an OsmAnd Cloud account to use the OsmAnd Start**.

To use OsmAnd Start, follow these steps:

- **Register for an OsmAnd Cloud account** - See the [Login](#login) section for instructions..
- Open *Menu → Settings → Purchases*.
- Select **OsmAnd Start** from the available options.
- **Create a backup** to start storing your data in OsmAnd Cloud.

:::note Subscription restrictions
If you already have an **OsmAnd Pro** subscription or an **active OsmAnd Cloud account**, the **OsmAnd Start** plan will not be available.
:::


## Last Sync

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud"/>*  

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_16.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_8-1.png)  

</TabItem>

</Tabs>  

**Last sync** is a drop-down menu that shows how long ago data was last synchronized between this device and the cloud.

- *Local changes*. Shows the total number of local changes not uploaded to the cloud.
- *Cloud changes*. The total number of changes uploaded to the cloud from other devices since the last synchronization.
- *Conflicts*. The total number of inconsistencies between local and cloud changes.
- *Sync now*. Select this option to synchronize all selected data sections in the [settings](#settings) menu you have changed on this device and in the cloud.  

**Sync now** combines the *Upload all* and *Download all* buttons in the Changes menu, in the [Local and Cloud](#local-and-cloud) sections. **Conflicts** are not synchronized in this way.

<!--
#### Syncing GPX Collections

OsmAnd supports grouping GPX tracks into **collections**, which allows you to organize related tracks under a single label.

When using **OsmAnd Cloud**, GPX collections are:

- Backed up along with your personal data.
- Synchronized across devices.
- Restored with the same **collection structure** (including the name and all associated tracks).

> *This ensures that your route organization is preserved, even after reinstalling the app or switching to a new device.*

To use this feature:

1. Create or assign tracks to a collection via *Menu → My Places → Tracks*.
2. Go to *Menu → Settings → OsmAnd Cloud → Back up data* and enable synchronization.
3. On another device, sign in with the same OsmAnd Cloud account and restore the data.
-->

## Trash

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,help_article_personal_storage_name,shared_string_trash"/>*

![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_1_andr.png)  ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_trash"/>*

![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/trash_ios.png) ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/trash_2_ios.png)

</TabItem>

</Tabs>  

The **Trash** feature allows you to view and manage files that have been deleted from OsmAnd Cloud. It is designed to prevent accidental deletion of files, and irreversible loss of your data.

- **View files**. *Trash* lists all previously deleted files from the *Cloud Changes* folder. All files contain information about the date and time they were deleted. They are grouped by month and sorted in order from the most recently deleted to the oldest files remaining in the Trash.
- **Empty Trash**.  

    ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_3_andr.png)  

    To free up space from all files deleted from the Cloud, you can use the *Empty Trash* feature. It is available from the *three-dot menu* in the upper right corner of the Trash screen. The files are deleted permanently, with no possibility of restoring them.

- **Managing separate files**.  

    ![Trash OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_trash_4_andr.png)  

    - *<Translate ios="true" ids="restore_from_trash"/>*. With this feature, you can restore files to OsmAnd Cloud. After tapping, the selected file is moved from Trash in the *Changes* section to the *Cloud* folder.
    - *<Translate ios="true" ids="download_to_device"/>*. This feature allows you to download a file to the device. If the selected file with the same name is present in the folder, the *File already exists* dialog box is displayed, in which you can select an action option: *Replace* or *Keep Both*.
    - *<Translate ios="true" ids="shared_string_delete_immediately"/>*. This feature allows you to permanently delete the selected file without being able to restore it. Be careful when using this feature as the operation is irreversible.


## Settings

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/deletion_option.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_3-2.png)  

</TabItem>

</Tabs>

This section is for editing and managing your OsmAnd Cloud.  


### Select Data to Back Up

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_10.png)  

</TabItem>

</Tabs>

In this menu, you can select which data and folders to upload to the Cloud:

1. **Settings**. This tab includes all your settings, such as general preferences, specific profiles, quick actions, POIs, and road avoidance settings.

2. **My Places**. This tab lists data from the [My Places menu](../personal/myplaces), including favorites, tracks, OSM notes, markers, and other items.

3. **Resources**. Here, you can choose to back up resources such as favorites, routing information, voice prompts, and additional items.

All [maps](../start-with/download-maps.md) are stored on the device on which they were previously downloaded. OsmAnd Cloud only stores information about which maps you have and the date they were last modified.


### Manage Storage

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_version_history"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_19-1.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,manage_storage"/>*

![Backup data screen iOS](@site/static/img/personal/osmand-cloud/cloud_ios_13.png)  

</TabItem>

</Tabs>  

The **<Translate android="true" ids="backup_version_history"/>** (Android) / **<Translate ios="true" ids="manage_storage"/>** (iOS) menu section displays information about how much of the 3.15 gigabytes of memory in *Settings*, *My Places*, and *Resources* are being used. You can delete changes to separate data types from OsmAnd Cloud, but in this case, the action cannot be undone.  


### Account

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_9-1.png)

This section contains information about which of your accounts is connected to OsmAnd Cloud and includes a logout button. To back up or restore data, you will need to log in again.


### Deletion Option

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_danger_zone"/>*

![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_8.png)   ![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_7.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_danger_zone"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_11.png)   ![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_12.png)

</TabItem>

</Tabs>  

The actions you can do in the **Danger zone** section of the Settings menu are irreversible and therefore require special attention.

1. **Delete all my data**. This option allows you to remove all data previously uploaded to OsmAnd Cloud, including the entire version history. Please note that once deleted, this data cannot be restored.

2. **Remove old versions**. This option enables you to delete the change history for previously uploaded data. The current data version will be preserved on the server, but you will not be able to revert to previous versions.

3. **Delete account**. To delete an account, you need to go through a verification process. A one-time password for confirmation will be sent to your e-mail address registered on OsmAnd Cloud.
    - All data from OsmAnd Cloud will be deleted. Data on the device remains untouched.
    - Your account and all account details will be deleted.
    - Secondary devices will be logged off from OsmAnd Cloud and lose access to paid features.  

    ![OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_deletion_2_andr.png)


## List of Changes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_11.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_9-1.png)  

</TabItem>

</Tabs>  

In the [Last Sync](#last-sync) section of the drop-down menu, tap any item to open the Changes section. This section contains three tabs displaying all available changes for editing. If the list is empty, no changes have occurred since the last synchronization.

- Each item in the **Changes** list includes the **date and exact time** of the last synchronization, along with options to download or upload the corresponding version instantly.

- **Downloading changes from cloud storage will override local changes**. Similarly, uploading local data removes the corresponding changes from the cloud version.

- In each tab, data is **sorted by type and alphabetically** to help you quickly find specific items, especially when managing multiple files in OsmAnd Cloud.


### Local and Cloud

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,download_tab_local"/> / <Translate android="true" ids="shared_string_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,download_tab_local"/> / <Translate ios="true" ids="shared_string_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_6.png)  

</TabItem>

</Tabs>

- **Local** - You can synchronize all local changes that are not yet in the cloud by tapping **Upload All**. Alternatively, you can upload specific changes by selecting them from the list and choosing **Upload local version**.  

    Changes that are successfully uploaded to the cloud are automatically removed from the *Changes → Local tab* after a set period.  

- **Cloud** - The **Cloud** tab displays a list of changes available for download from cloud storage. You can download all changes at once using the button at the bottom of the screen or download them individually.  


### Conflicts

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,cloud_conflicts"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_13-2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,cloud_conflicts"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_7.png)  

</TabItem>

</Tabs>

A **conflict** occurs when the **Local version** and the **Cloud version** of a file do not match.  

- You can either **replace the Cloud version** with local changes or **download the Cloud version** to your device.

- When a conflict is resolved, it is automatically removed from the list. Processing usually takes only a few moments.

- Tapping a file in the **Conflicts** folder displays details about the **Local** and **Cloud** versions, including the last modification and upload times.

- You can choose one of the following actions:  
  - **Upload Local Version** – Replaces the Cloud version with the local file.  
  - **Download Cloud Version** – Replaces the local file with the Cloud version.


<!--
## Action Guides

- Restore your data after purchases expire.
- It is absolutely crucial that your Cloud account be registered on the device where the purchase was originally made.
- Access for one more year after the subscription ends.

:::tip
If you have problems with the registration of your account:

- Check if you are registering on the device on which the purchase was made.
- You need to have an active Internet connection.

:::  
-->

## Related Articles

- [Android Purchases](../purchases/android.md)
- [iOS Purchases](../purchases/ios.md)
- [Maps & Resources](../personal/maps-resources.md)

> *This article was last updated in February 2025*
