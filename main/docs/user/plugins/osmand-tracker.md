---
sidebar_position: 11
title:  OsmAnd Tracker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStoreTracker from '@site/src/components/buttons/TrackerGooglePlay.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>


<p>We are pleased to announce that we have a new application in OsmAnd family. This application helps to see your contacts on the map in OsmAnd. It has a social aspect; you need to have contacts, that's why it was challenging for us to choose the platform to build it on.</p>

<p>We have chosen Telegram as the most open social platform since it has an Open API, Open SDK and, moreover, it will eventually have an Open Server implementation (Blockchain).</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png) 


<p>It is important that we have a great level of interoperability between the applications. You can easily exchange your location with your contacts without having 'Telegram mobile app' (OsmAnd Online GPS Tracker is an independent telegram client) and, the other way around, your contacts should not necessarily have OsmAnd Online GPS Tracker in order to see your location.</p>
<p>We designed OsmAnd Online GPS Tracker so you could still use your Telegram app and OsmAnd app naturally without flaws.</p>

<p>The application sends the Live Location messages to the selected chats for the time you specified, displays a list of your contacts and groups, and checks the chats for the presence of the messages with a location, which are then displayed on the map in OsmAnd.
The application does not send or view your text messages.</p>

<span>
Log in using your phone number registered in Telegram to enable the following:
<ul>
    <li>Manage the list of contacts and groups that send you their location</li>
    <li>View the location of contacts and groups in real time on a map in OsmAnd</li>
    <li>Set the time for sharing the location separately for each chat</li>
    <li>Set the location update frequency</li>
    <li>Watch the chronology of your and your contacts' movement</li>
</ul>
</span>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png) 


### Settings:

<p>There are several settings for managing the frequency of sharing locations and controlling the display of the locations sent to you.</p>
<p><b>Send my location</b> — allows you to set the interval for sending your position from once per second (for increasing accuracy) to once in 5 minutes (for reducing power consumption).</p>
<p><b>Not moving</b> — allows you to set the time (from 1 minute to 1 hour) after which the location of your contact will be considered outdated. If the location becomes outdated, the position becomes gray.</p>
<p><b>Location history</b> — allows setting the time (from 5 minutes to 24 hours) after which the contact with the deleted location will be hidden from the list and the OsmAnd map.</p>
<p><b>Send location as</b> - allows you to make a selection of the category of sending a message about your location in Telegram (3 types of sending): text, map, text and map.</p>
<p><b>Buffer expiration time</b> - allows you to choose time to keep saving points in the buffer.</p>
<p><b>Background work</b> - allows you to change battery optimization settings to stabilize location sharing.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


<p><b>Units & formats</b> - allows you to add settings for units and formats. Now you can choose your comfortable values for Telegram messages during sharing location.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg) 


<p><b>Appearance</b> - allows you to show the number of GPS points received from other contacts, as well as sent by you.</p>

<p><b>Privacy</b> -  use proxy inside of OsmAnd Tracker. Go to Settings and write your proxy data: <i>Settings-> Privacy-> Proxy Settings</i></p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg) 

<p><b>GPS settings</b> - set settings of points. If you stay at one place some time without moving, for example, your points don't send and your GPX track will be nicer.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)

<p><b>Share location as</b> - if you want to connect several devices to one Telegram account, you need to click "Add device" and name the device.</p>
<p>The <b>OsmAnd Connect</b> setting allows you to select the version of OsmAnd in which your contacts with the position will be displayed on the map.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)

### "My location" screen

<p>On this screen you can see your contacts from Telegram. You can choose one or more of its and set parametres of sharing and start to share your location.</p>
 <p>After the first start, you see Suggested list of contacts. What is it? It's your last five contacts who you shared your location with. You can click only once to continue sharing your location with these contacts.</p>
<p>Time of sharing is your last choosing sharing time for contact.</p>
<p>When you start sharing, you can see in the "My location" screen your Suggested list and button "Back to OsmAnd".</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)

### "Live now" screen

<p>At this menu, you can see all contacts who are sharing a location for you. Click to the contact and look at it on <b>OsmAnd map</b>.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)

<b>"Active marker" on the OsmAnd map</b>

<p>It's very useful to see distance, speed, and angle movement of your contacts at  OsmAnd map and text in Telegram. You can understand at once where and how your contact move.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)

### "Timeline" screen

<p>This is the third tab in the application.  It is possible to choose the day when you would like to see the history of the location shared with you. When selected, the contacts that showed their location on the selected day are displayed.</p>
<p>Monitoring allows you to collect information in the background when your contacts share it. To do this, you must enable it.</p>
<p>To view all information about  contact location, click on the contact's icon, or open the GPX track in OsmAnd and study the track in more detail (<a href="https://osmand.net/features/trip-recording-plugin">read more here</a>). You can also share the GPX track for the selected period: by sending it to mail or any instant messenger.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

<p>You can see the online moving of your contacts on the map of OsmAnd with online GPS-track. For this, you should switch on "Live" at your contact in "Timeline". If there are many sharing contacts at this moment OsmAnd app chooses the color of tracks by random.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

<p>When you click "Show in OsmAnd" or mini-map you can choose special settings for GPX-track your contact in OsmAnd app and see it live moving with track on OsmAnd map.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

<p>If you don't have data collected on the selected day there is a special notification on the screen. You can go to select the nearest date with one click.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)

### OsmAnd Tracker Widget

For viewing [the Widget](../widgets/info-widgets#-tracker-widget-android) you should turn OsmAnd Tracker plugin on first. After that, the Widget will be in the upper-right corner of the OsmAnd screen with the signature "Start".

 <p>To switch off it, you can go to the General menu->Configure screen (OsmAnd version 3.6).</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/10.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/14.jpg)

<p>The Widget has few appearances. At first, it is "Start". When you click "Start" you go to Online OsmAnd Tracker, where you can choose any contacts or click to Suggested contacts.</p>
<p>When you start sharing your location the Widget changes appearance.</p>
<p>The green smile "OK" means that your location is being shared now.</p>
 <p>It's mean that everything is ok. The sharing does not have any issues.</p>
<p>The orange smile "OK" means that your location cannot be sent. There are issues with the Internet or with GPS connection.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

<p>If you don't have an internet connection for a long time, your buffer in OsmAnd Tracker saves points of your location. The Widget in OsmAnd changes its appearance. It starts to show the time of the buffer filling how long the buffer is keeping points of your location.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

<p>As soon as your internet connection is restored, points from the buffer are sent. The Widget in OsmAnd changes its appearance and minutes in the Widget are reduced. When all points from the buffer are sent to Telegram, the Widget is displayed as a green smile.</p>

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

<p>In OsmAnd, you can see that the Widget has a green smile. It's mean that everything is ok. The sharing process does not have any issues.</p>

### OsmAnd Assistant

<p>We have also prepared a Telegram bot called 'OsmAnd Assistant,' so you can integrate OsmAnd Telegram with 3rd party trackers or APIs. Hence, you can not only share your location but also the locations of your bicycle or a group of individuals taking part in racing which is available via API, and OsmAnd Telegram will make sure you have a nice presentation of locations on the map in OsmAnd itself.</p>
<p>Please share with us what you think about this new app on <a href="https://twitter.com/osmandapp">Twitter</a> and other social channels.</p>
<p>To view the GPS positions of contacts on the map, you need the latest version of <a href="https://play.google.com/store/apps/details?id=net.osmand">OsmAnd</a> or <a href="https://play.google.com/store/apps/details?id=net.osmand.plus">OsmAnd+</a>. The minimum supported version of OsmAnd or OsmAnd+ is 3.0.4.</p>

____________________________

<LinksSocial/>
<LinksTelegram/>

<AndroidStoreTracker/>

