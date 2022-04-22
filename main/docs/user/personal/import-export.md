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

## Export

[Link](../personal/profiles#actions)

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,shared_string_actions,export_profile"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,actions,export_profile"/>

<p> </p>

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png) ![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)

_________________

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_android.png) ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_ios.png)

## Import

Click to OSF-file.

![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) ![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png)
________


![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png)

_______


![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png)


## Reinstall 
Please note that most versions of Android also remove an app's data folder when you uninstall an app (or when in Android's App manager settings you tap 'Clear data' to reset the app settings to default). If no precaution is taken, this will for OsmAnd mean you **lose all downloaded maps as well as any stored Favorites, GPX tracks, etc.(!)**
On most systems the following procedure can be used to reset or uninstall/reinstall OsmAnd while preserving the original app data on the SD card:
-   &nbsp;Before any Uninstall or Clear data operation, **rename the app data folder**, e.g. from *net.osmand.plus* to *net.osmand.plus0*
-   &nbsp;Then either in the Android App manager force stop / clear cache / clear data to reset the app, or uninstall/reinstall OsmAnd, as desired
-   &nbsp;Start OsmAnd
-   &nbsp;On its 'First Start' screen tap: Get started ``-> Change the data folder to the SD card -> Skip -> Skip downloading maps``
-   &nbsp;Force-stop OsmAnd
-   &nbsp;Using a file manager app, delete the newly created (almost empty) OsmAnd data folder, and rename your old (preserved) data folder back
-   &nbsp;Restart OsmAnd
-   &nbsp;Go to `Settings / Download maps`: Your existing offline maps should now be listed on tab Local. Go to the tab Update and tap the refresh icon, this should make OsmAnd finally aware maps are already present and can be used.


## Online sources
In order **to export** online map sources, you can select them in the export file list of your [application profile](../personal/profiles):

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,shared_string_actions,export_profile,select_data_to_export,shared_string_resources,quick_action_map_source_title"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,actions,export_profile"/>

<p> </p>

In order **to import** online map sources, you can click to osf-file of application profile in your storage, messenger, mail and etc, that choose OsmAnd app for opening, select the data to be imported.

**Android**

A. <Translate android="true" ids="shared_string_import,select_data_to_import,quick_action_map_source_title,shared_string_import_complete,shared_string_continue,shared_string_close"/>

<p> </p>

![Import package Android](@site/static/img/plugins/online-maps/import-package-android.png)

B. You can click the SQLiteDb-file on your email, cloud, or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.

![Import online source Android](@site/static/img/plugins/online-maps/import-online-source-android.png)

**iOS**

A. <Translate ios="true" ids="shared_string_import,quick_action_map_source_title,shared_string_continue,shared_string_import_complete,gpx_finish"/>
<p> </p>

![Import package iOS](@site/static/img/plugins/online-maps/import-package-ios.png)

B. <Translate ios="true" ids="menu,map_settings_map,map_settings_overunder,import_from_docs"/>
<p> </p>

C. You can click the SQLiteDb-file on your email, cloud, or messenger, download it and choose OsmAnd app to open. Map package is added automatically to your online maps list in OsmAnd.