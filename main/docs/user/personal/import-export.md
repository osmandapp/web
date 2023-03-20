---
sidebar_position: 8
title:  Import / Export
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

## Overview

OsmAnd provides the ability to export data to a specific format using apps available on your device. You can also import data from an OSF file or use online sources.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,shared_string_actions"/>*  

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="shared_string_menu,sett_settings,app_profiles,actions"/>*     

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png) 

</TabItem>

</Tabs> 


## Export

In the Actions section of the Profile Configuration menu, you can use such a function as data export.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,shared_string_actions,export_profile"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_android.png) 

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="shared_string_menu,sett_settings,app_profiles,actions,export_profile"/>*     

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_ios.png)

</TabItem>

</Tabs> 


## Import

Click to OSF-file.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile"/>*  

![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png)  

![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png)  

![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png)   

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="shared_string_menu,sett_settings,app_profiles"/>*     

![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png)  

![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png)   

![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png)  

</TabItem>

</Tabs> 


## Reinstall 

Note that most Android versions also delete the app's data folder when you uninstall it (or when you select "Clear Data" in the Android App Manager settings to reset the app to its default settings). If you don't take precautions, for OsmAnd it will mean **losing all downloaded maps, as well as all saved Favorites, GPX tracks, and the more**. On most systems, the following procedure can be used to reset or uninstall/reinstall OsmAnd with the original application data and data on the SD card intact:

-  Before any Uninstall or Clear data operation, **rename the app data folder**, e.g. from *net.osmand.plus* to *net.osmand.plus0*.
-  Then either in the Android App manager force stop / clear cache / clear data to reset the app, or uninstall/reinstall OsmAnd, as desired.
-  Start OsmAnd.
-  On its 'First Start' screen tap: Get started ``-> Change the data folder to the SD card -> Skip -> Skip downloading maps``.
-  Force-stop OsmAnd.
-  Using a file manager app, delete the newly created (almost empty) OsmAnd data folder, and rename your old (preserved) data folder back.
-  Restart OsmAnd.
-  Go to `Settings / Download maps`: Your existing offline maps should now be listed on tab Local. Go to the tab Update and tap the refresh icon, this should make OsmAnd finally aware maps are already present and can be used.


## Online sources

In order **to export** online map sources, you can select them in the export file list of your [application profile](../personal/profiles.md).  
In order **to import** online map sources, you can click to osf-file of application profile in your storage, messenger, mail and etc, that choose OsmAnd app for opening, select the data to be imported.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,shared_string_actions,export_profile,select_data_to_export,shared_string_resources,quick_action_map_source_title"/>*    

A. <Translate android="true" ids="shared_string_import,select_data_to_import,quick_action_map_source_title,shared_string_import_complete,shared_string_continue,shared_string_close"/>  

![Import package Android](@site/static/img/plugins/online-maps/import-package-android.png)  

B. You can click the SQLiteDb-file on your email, cloud, or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.  

![Import online source Android](@site/static/img/plugins/online-maps/import-online-source-android.png)

</TabItem>

<TabItem value="ios" label="iOS"> 

*<Translate ios="true" ids="shared_string_menu,sett_settings,app_profiles,actions,export_profile"/>*  

A. <Translate ios="true" ids="shared_string_import,quick_action_map_source_title,shared_string_continue,shared_string_import_complete,gpx_finish"/>  

![Import package iOS](@site/static/img/plugins/online-maps/import-package-ios.png)  

B. <Translate ios="true" ids="shared_string_menu,map_settings_map,map_settings_overunder,import_from_docs"/>  

C. You can click the SQLiteDb-file on your email, cloud, or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.  

</TabItem>

</Tabs> 
