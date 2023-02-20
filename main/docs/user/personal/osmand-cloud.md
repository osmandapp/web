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
OsmAnd Cloud is a cloud storage service that is not associated with the Android or iOS versions of the app, or the Web platform, but only with your Pro account.
:::

OsmAnd Cloud is the resource you need to save your personal settings and app data. You can use this data on any device available to install the OsmAnd app or when using the desktop app. Any changes you make will be synchronized.     


## OsmAnd Pro

OsmAnd Cloud offers you the ability to back up, restore and use your data on Android devices, iOS devices and the web version.

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


## Login

To be able to back up and restore data, it is necessary to log in.
- To access OsmAnd Cloud registration or log in to your account, you need to have a [Pro](#osmand-pro) subscription. You can check its status in the OsmAnd app *Menu→ Settings → Purchases*.  
- Your Cloud account needs to be the same as the account on which the purchase was made.  
- When you register or log in, you will receive a verification code by email to confirm it.

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
- *Sync now* - select this option to synchronize all selected data sections in the [settings](#back-up-data) menu that you have changed on this device.

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
Changes that have been uploaded from the local version to the cloud are removed after a while from the *Changes → Local* tab.  

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


### Back up data

*<Translate android="true" ids="backup_data"/>* - select data and folders to back up.
*<Translate ios="true" ids="osmand_cloud"/>* - opens the screen where you can select data and folders to back up by clicklig on *<Translate ios="true" ids="backup_data"/>*.  

You can select data and folders to back up.  
1. *Settings* - This tab contains information about all your personal settings, such as general, for specific profiles, quick actions, POIs, avoid road.  
2. *My Places* - This tab contains information about the data in the My Places menu, such as favorites, tracks, OSM note, markers, and others.
3. *Resources* - .

:::note
All of your maps are stored on the device that you downloaded them. The Cloud displays only the information about which maps you have and the date they were last modified. 
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


### Version history

*<Translate android="true" ids="backup_version_history"/>* - shows data what keept in <Translate android="true" ids="backup_storage_taken"/>.  
Here there is info about using memory by clicking *<Translate ios="true" ids="manage_storage"/>*. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_cloud,shared_string_settings,backup_version_history"/>*

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_19.png)  

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="menu,shared_string_settings,osmand_cloud,shared_string_settings,manage_storage"/>*

![Backup data screen iOS](@site/static/img/personal/backup/backup_data_screen_1_ios.png)  

</TabItem>

</Tabs>  


### Account

This section contains information about which of your accounts is connected to OsmAnd Cloud, as well as a logout button. To back up or restore data, you will need to log in again.    

![Changes OsmAnd Cloud](@site/static/img/personal/osmand-cloud/cloud_9-1.png)


### Danger zone

The actions you can do in this section of the Settings menu are irreversible and therefore require special attention.  
1. **Delete all my data** - <Translate android="true" ids="backup_delete_all_data_warning"/>
2. **Remove old versions** - <Translate android="true" ids="backup_delete_old_data_warning"/>

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
