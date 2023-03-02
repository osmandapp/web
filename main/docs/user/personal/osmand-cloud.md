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
&nbsp;<ProFeature/> You need to subscribe to OsmAnd Pro for [Android](../purchases/android.md#osmand-pro) or [iOS](../purchases/ios.md#osmand-pro).  
:::

:::note cross-platform
OsmAnd Cloud is a cloud storage service that is not associated with the Android or iOS versions of the app, or the Web platform, but only with your Pro account.
:::

OsmAnd Cloud is the resource you need to save your personal settings and app data. You can use this data on any device available to install the OsmAnd app or when using the desktop app. Any changes you make can be synchronized.     


## Cross-platform

OsmAnd Cloud offers you the ability to back up, restore and use your data on Android devices, iOS devices and the web version. The cross-platform capability of Cloud allows you to transfer profile settings, tracks, favorites, and more between Android and iOS devices. And in the web version, you can plan a route and save it for later use on devices connected to OsmAnd Cloud.  

The cross-platform capability allows you to use OsmAnd Pro on all platforms *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. To do this you need to:

1. Subscribe to OsmAnd Pro. Read more about how to do this for [Android here](../purchases/android.md#how-to-buy), and for [iOS here](../purchases/ios.md#how-to-buy).
2. Register your [account](#login) on the OsmAnd server.
3. The registered email will be your login to activate OsmAnd Pro on other platforms.  

:::note
OsmAnd Pro is a subscription with all the features of OsmAnd. Its main advantage is that it is **cross-platform**. This means that you can buy it in one store, for example for Android (Google Play, Amazon, Huawei AppGallery), and launch it on iOS.
:::  


## Login

To be able to back up and restore data, it is necessary to log in.
- To access OsmAnd Cloud registration or log in to your account, you need to have a [Pro](#cross-platform) subscription. You can check its status in the OsmAnd app *Menu→ Settings → Purchases*.  
- Your Cloud account absolutely needs to be registered on the device where the purchase was made.  
- When you register or log in, you will receive a verification code on your email to confirm it.
- To sign in to OsmAnd Cloud on other devices, use your Cloud account.    

:::tip
If you have problems with the registration of your account:
- Check if you are registering on the device on which the purchase was made.
- You need to have an active Internet connection.
:::  

:::note
Access to your OsmAnd Cloud account is available for one more year after your Pro subscription ends.
:::

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
- *Sync now* - select this option to synchronize all selected data sections in the [settings](#settings) menu that you have changed on this device and in the cloud.  

:::tip
Sync now combines the *Upload all* and *Download all* buttons in the Changes menu, in the [Local and Cloud](#local-and-cloud) sections. Conflicts are not synchronized in this way.
:::

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


### Select data to back up

In this menu, you can select which data and folders will be sent to the cloud.

1. *Settings* - This tab contains a list of information about all your personal settings, such as general, for specific profiles, quick actions, POIs, and avoid road.  
2. *My Places* - This tab contains a list of information about the data in the [My Places menu](../personal/myplaces), such as favorites, tracks, OSM note, markers, and others.
3. *Resources* - You can choose to back up resources such as favorites, routing, voice prompts, and some others.

:::note
All of your maps are stored on the device that you downloaded them to. And the cloud only saves information about which maps you have and the date they were last modified. 
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_3.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_data"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_10.png)  

</TabItem>

</Tabs>


### Manage storage

The **<Translate android="true" ids="backup_version_history"/>** (Android) / **<Translate ios="true" ids="manage_storage"/>** (iOS) menu section displays information about how much of the 3.15 gigabytes of memory in *Settings*, *My Places*, and *Resources* are being used. You can delete changes to separate data types from OsmAnd Cloud, but in this case, the action cannot be undone.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_version_history"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_19-1.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud,shared_string_settings,manage_storage"/>*

![Backup data screen iOS](@site/static/img/personal/osmand-cloud/cloud_ios_13.png)  

</TabItem>

</Tabs>  


### Account

This section contains information about which of your accounts is connected to OsmAnd Cloud, as well as a logout button. To backup or restore data, you will need to log in again.    

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_9-1.png)


### Danger zone

The actions you can do in this section of the Settings menu are irreversible and therefore require special attention.

1. **Delete all my data** - You have the option to delete all data previously uploaded to OsmAnd Cloud, including all version history. But there is no way you can restore the deleted data.
2. **Remove old versions** - You can delete the change history for previously uploaded data. In this case, the current version of the data will be saved on the server, but you will not be able to go back to the previously made changes.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_danger_zone"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_8.png)   ![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_7.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_danger_zone"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_11.png)   ![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_12.png)

</TabItem>

</Tabs>  

 

## List of changes

In the [Last Sync](#last-sync) section from the drop-down menu, tap any item to go to the Changes section. In this section, three tabs display all the changes available for editing. If the list is empty, it means that there have been no changes since the last synchronization.  

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


### Local and Cloud

- **Local.** You can sync local changes that do not exist in the cloud version all at once using the *Upload All* button. Or you can select any change you need from the list and tap it to select the *Upload local version*.  
Changes that have been uploaded from the local version to the cloud are removed after a while from the *Changes → Local* tab.  
- **Cloud.** The Cloud tab displays a list of changes that can be downloaded to your device from the cloud storage. You can download all the changes at once using the button at the bottom of the screen, or separately.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,download_tab_local"/> / <Translate android="true" ids="shared_string_cloud"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_2.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud,cloud_recent_changes,download_tab_local"/> / <Translate ios="true" ids="shared_string_file_cloud"/>* 

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_6.png)  

</TabItem>

</Tabs>   


### Conflicts

Conflicts appear if the local version and the version stored in the cloud do not match. In this case, you can replace the data in the cloud with local changes or download the stored data to the device from the cloud. The resolved conflicts are removed from the list after processing, which usually does not take long.
Tapping Conflicts displays information about the local and cloud versions in sync. You can choose to upload or download.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,cloud_recent_changes,cloud_conflicts"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_13-2.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud,cloud_recent_changes,cloud_conflicts"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_ios_7.png)  

</TabItem>

</Tabs>  
