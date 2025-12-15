---
sidebar_position: 2
sidebar_label:  Sign Up / Login
title: Sign Up / Login
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<!--
<InfoIncompleteArticle/>
-->

## Overview {#overview}

Signing in with an OsmAnd account turns the [OsmAnd Map Portal](https://osmand.net/map) from a simple map viewer into your personal workspace. The same account that you use in the mobile app connects the website to your OsmAnd Cloud data and purchases, so you can access your saved content and subscriptions in a single place on the web.


## Sign Up {#sign-up}

To access OsmAnd Web features, you need to create an account. Use the Sign Up flow:

- Go to the [**OsmAnd Map Portal**](https://osmand.net/map).
- Open the **Account** menu.
- Select **Create new account**. The Create new account dialog opens.
- In the **Email** field, enter the email address you want to use for your OsmAnd account and click **Continue**.
- A verification code is sent to this email address. Check your inbox (and spam folder if needed).
- In the next dialog, enter the Verification code and click **Continue** to confirm your email. If you did not receive the code, use the **I didn't receive verification code** link and follow the instructions.

After the code is verified, your web account is created and you are signed in automatically.

![Web Sign Up](@site/static/img/web/web_sign_up.png) ![Web Sign Up](@site/static/img/web/web_ver_code.png)


## Login {#login}

If you already have an OsmAnd account, you can sign in on the [**OsmAnd Map Portal**](https://osmand.net/map) with the same email and password. Go to the **Account menu** and choose the **Log in option**. In the dialog that opens, enter the email address linked to your OsmAnd account, type your password, and select **Continue**. After a successful login, the OsmAnd Account panel opens and you can work with your data, purchases and settings.

If you do not remember your password, use the **I don’t have or forgot password** link in the login dialog. This opens the **Change or reset password** panel. Enter the email address you used to create your account and click **Continue**. A message with a verification code is sent to this email. On the next screen, type the verification code and your new password, then select **Continue** to confirm. When the code is accepted, your password is updated and you can log in to OsmAnd Web with the new credentials.

![Web Account](@site/static/img/web/web_password.png)

## Managing Account {#managing-account}

Once you are signed in, you can manage your web account.  
Go to: *General Menu → Account*

From this panel you can:
- View account information.
- Download cloud backups.
- Log out of your account.
- Delete your account.
- Change your email address.
- See your payments and purchases.

![Web Account](@site/static/img/web/web_account_2.png)

### My Data {#my-data}

You can download backups that were created and synced from your mobile device via **OsmAnd Cloud**.  
Go to: *General Menu → Account → My data (OsmAnd Cloud) → Download all*

This section displays:

- The number of files stored in your cloud.
- Total storage volume used.
- Available cloud storage space.

> 💡 Only backups created on devices where **OsmAnd Cloud** is enabled will appear here.

If you want to save a copy of all your data, use **Download all**. This opens a dialog where you can:

- Select which data to export (for example, *My places, Settings, Resources, Maps*),
- Choose the export format (*ZIP or OSF*).
- See an estimate of the download size and time.

Click **Download Backup** to start the export and save the archive to your computer.

![Web Account](@site/static/img/web/web_download_all.png)

### Payments and Purchases {#payments-and-purchases}

This section shows all products and subscriptions linked to your OsmAnd account. To open it,  
Go to: *General Menu → Account → Payments and Purchases*

Here you can see a list of all purchases associated with your email:
- Free and paid plans (such as OsmAnd Start or OsmAnd Pro).
- One-time products (e.g. Maps+ or special editions).
- Subscriptions that renew monthly or annually.

For each item the list shows:
- Product name and icon.
- Type – monthly subscription, annual subscription or one-time payment.
- Status – *Active, Expired or Canceled*.
- Date information.

If you click a product in the list, the details page opens. There you can see where the product was purchased (*Google Play, Apple App Store, Huawei AppGallery, Amazon* or *OsmAnd Web*) and find a link or instructions on how to manage or cancel the subscription in the corresponding store. If the product was purchased on OsmAnd Web (FastSpring), the details page shows a **Manage subscription** link that opens the FastSpring account management portal, where you can update your payment method, cancel or re-activate the subscription, change the plan, or download invoices.

If there are no purchases linked to your account yet, this section shows an empty state with the message **You don’t have any purchases** and a **Learn more** button that leads to a page with available OsmAnd plans and upgrade options.

For more details on using your purchases across different platforms, read about [cross-platform access](../purchases/cross.md).

![Web Account](@site/static/img/web/web_purchases.png)

### Change Email Address {#change-email-address}

To update your email address,
Go to *General Menu → Account → Email → ⋮ → Change email*

The Change email dialog appears. A verification code is sent to the current email address. Enter this code in the **Code from Old Email** field, specify the new address in **New Email**, then select **Next**. For security reasons, a confirmation message is sent to your new email address informing you that the account email has been updated.

![Web Account](@site/static/img/web/web_email_new.png)

### Logout and Delete Account {#logout-and-delete}

![Web Account](@site/static/img/web/web_logout_new.png)

The OsmAnd Account panel contains controls for ending the current web session and permanently removing the account.

To log out, open OsmAnd Account and use the **Logout** button in the top-right corner of the panel (icon with an arrow leaving a square). Selecting Logout closes the account panel and ends the active session on the website.

To delete an account, select **Delete account** at the bottom of the OsmAnd Account panel. A confirmation dialog appears with the message *“Are you sure you want to do this?”* and a short explanation that all data and account details will be removed from OsmAnd Cloud and secondary devices will lose access to paid features. A verification code is sent to the account email address. Enter the code in the Code from Email field and choose **DELETE THIS ACCOUNT** to complete the process. This operation is permanent and cannot be undone.

![Web Account](@site/static/img/web/web_delete.png)


## Cloud Sync {#cloud-sync}

Cloud Sync lets you access the data you synced to OsmAnd Cloud directly on the [Web Map Portal](https://osmand.net/map/). Once you sign in with your OsmAnd Start or OsmAnd Pro account, the website displays the Favorites, Tracks, and backup files that you previously synced from your mobile app. It’s a simple way to view your cloud content on a larger screen and download your backups whenever you need.

These items become visible in the menu right after you sign in on the website. To update this information, you need to sync your data from your devices using the [Sync now action](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) in the mobile app.

Cloud Sync availability depends on your account type:
- OsmAnd Start – syncs [Favorites](../web/web-favorites.md) and displays them on the web.
- OsmAnd Pro – syncs [Tracks](../web/web-tracks.md), Favorites, and [Backups](#my-data), and unlocks full web access to cloud data.

![Web Track](@site/static/img/web/web_track_start.png) ![Web Track](@site/static/img/web/web_track_pro.png)

<!--
## OsmAnd Pro and OsmAnd Start Sync {#osmand-pro-and-osmand-start-sync}

- **OsmAnd Pro** is a [cross-platform](../troubleshooting/setup.md#initial-setup) paid subscription. 
- **OsmAnd Start** is a [free OsmAnd Cloud registration](https://osmand.net/blog/start).

The cross-platform capability allows you to use OsmAnd Pro on all platforms *([Android](../purchases/android.md)  ← →  [iOS](../purchases/ios.md)  →  [Web](https://www.osmand.net/map))*. To do this you need to:

1. Subscribe to **OsmAnd Pro**. Read more about how to do this for [Android here](../purchases/android.md#how-to-buy), and for [iOS here](../purchases/ios.md#how-to-buy).
2. How to create **OsmAnd Start** account read more [here](https://osmand.net/blog/start#how-to-create-an-account).
3. Register your [Pro or Start account](/docs/user/personal/osmand-cloud/#cross-platform) on the OsmAnd server inside OsmAnd app.
4. The registered email will be your login to activate OsmAnd Pro on the web platform. At first, time needed to choose a password for future entering the web portal (please, use the instruction on the web portal).


- Enter your *email* and *password* for [osmand.net/map](https://osmand.net/map/).

![View OsmAnd Web activation](@site/static/img/web/web_pro_activation.png)  

- Your data, such as tracks (OsmAnd Pro) and favorites(OsmAnd Pro and OsmAnd Start), will appear in the menu after you log in. They are available for display on the map. But you need [to sync this data](https://osmand.net/docs/user/personal/osmand-cloud#last-sync) from your devices.

![View OsmAnd Web data](@site/static/img/web/web_data.png)  

- To *DOWNLOAD BACKUP* from [OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud), click the login field. On the login field you can see files info (total files number, total files size, cloud storage used) and account info (subscription type, start time and expire time of your subscription).

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file.png)  

Choose needed files for downloading, `.zip` or `.osf` format of downloaded files and click *DOWNLOAD BACKUP* button:

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_1.png)  

There is also a button to *logout* of the account.  

- *LOGOUT*, *DELETE YOUR ACCOUNT* or *Change email* you find on the login field too. For opening *DELETE YOUR ACCOUNT* or *Change email* you need to click *Dangerous area*.

![View OsmAnd Web backup file](@site/static/img/web/web_backup_file_2.png)  


## Cloud data {#cloud-data}

[Tracks and Favorites](web-map.md#tracks).

## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->

## Related Articles {#related-articles}

- [User Data](../web/web-userdata.mdx)
- [Cross-Platform Purchases](../purchases/cross.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)

<!--
When the structure has been approved, some links should be updated.
-->
